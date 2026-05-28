import fs from 'node:fs';
import path from 'node:path';

export type EntryStatus = 'proposed' | 'valid' | 'codified' | 'challenged' | 'falsified' | 'overruled' | 'deprecated' | 'variant' | string;

export interface BangEntry {
  slug: string;
  word: string;
  entry?: string;
  author?: string;
  roots: string[];
  status: EntryStatus;
  source?: string;
  definition: string;
  body: string;
  sacrifice: string;
  law: string;
  original?: string;
}

const repoRoot = process.cwd();
const entriesDir = path.join(repoRoot, 'dictionary', 'entries');

function parseFrontmatter(raw: string): Record<string, any> {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---\n', 3);
  if (end === -1) return {};
  const fm = raw.slice(3, end).split('\n');
  const data: Record<string, any> = {};
  let current: string | null = null;
  for (const line of fm) {
    if (!line.trim()) continue;
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && current) {
      if (!Array.isArray(data[current])) data[current] = [];
      data[current].push(cleanScalar(item[1]));
      continue;
    }
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (!match) continue;
    current = match[1];
    const value = match[2];
    data[current] = value === '' ? [] : cleanScalar(value);
  }
  return data;
}

function cleanScalar(value: string): string {
  return value.trim().replace(/^['"]|['"]$/g, '');
}

function section(body: string, name: string): string {
  const re = new RegExp(`## ${name}\\n([\\s\\S]*?)(?=\\n## |$)`, 'i');
  return body.match(re)?.[1]?.trim() ?? '';
}

function firstDefinition(body: string): string {
  const lines = body.split('\n').map((line) => line.trim());
  for (const line of lines) {
    if (!line || line.startsWith('#') || line.startsWith('```')) continue;
    if (line.startsWith('## ')) break;
    return line;
  }
  return 'No definition recorded yet. The court is aware.';
}

function stripFrontmatter(raw: string): string {
  const end = raw.indexOf('\n---\n', 3);
  return end === -1 ? raw : raw.slice(end + 5).trim();
}

export function getEntries(): BangEntry[] {
  if (!fs.existsSync(entriesDir)) return [];
  return fs.readdirSync(entriesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(entriesDir, file), 'utf8');
      const meta = parseFrontmatter(raw);
      const body = stripFrontmatter(raw);
      return {
        slug,
        word: meta.word ?? slug,
        entry: meta.entry ? String(meta.entry) : undefined,
        author: meta.author,
        roots: Array.isArray(meta.roots) ? meta.roots : [],
        status: meta.status ?? 'codified',
        source: meta.source,
        definition: firstDefinition(body),
        body,
        sacrifice: section(body, 'Sacrifice'),
        law: section(body, 'Law'),
        original: section(body, 'Original corpus block'),
      } satisfies BangEntry;
    })
    .sort((a, b) => a.word.localeCompare(b.word));
}

export function getEntry(slug: string): BangEntry | undefined {
  return getEntries().find((entry) => entry.slug === slug);
}

export function statusLabel(status: string): string {
  return status.toUpperCase();
}
