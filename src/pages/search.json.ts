import { getEntries } from '../lib/entries';

export const prerender = true;

export async function GET() {
  return new Response(JSON.stringify(getEntries().map((entry) => ({
    slug: entry.slug,
    word: entry.word,
    roots: entry.roots,
    status: entry.status,
    author: entry.author,
    source: entry.source,
    definition: entry.definition,
    sacrifice: entry.sacrifice,
  }))), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}
