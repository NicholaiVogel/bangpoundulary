# Wombology Dictionary

A shared source of truth for Wombology: the applied science of valid wombos, their roots, sacrifices, rulings, variants, and institutional damage.

## Wombo Law #1

> A wombo is not a concatenation. It is a merger. Each root must surrender a syllable, a meaning, or a boundary to create something that neither word could be alone. No sacrifice, no wombo.

## Repo layout

```text
dictionary/entries/      Individual canonical entries, one word per file
dictionary/index.md      Generated dictionary index
corpus/                  Imported historical compendia and source snapshots
schemas/                 Machine-readable entry schema
scripts/                 Validation and index-building tools
skills/wombology/        Shared repo-native Wombology skill
skills/wombos-scribe/    Imported Ant live-scribing skill and references
```

The Obsidian compendium is preserved as a corpus snapshot, and its attested entries are also split into per-word files for review, validation, PRs, and future agent collaboration.

## Adding an entry

1. Create `dictionary/entries/<word>.md`.
2. Include YAML frontmatter with `word`, `author`, `roots`, `status`, and `entry` when known.
3. Add a definition and a `## Sacrifice` section.
4. Run:

```bash
python scripts/validate-entry.py dictionary/entries/<word>.md
python scripts/build-index.py
```

## Governance

Entries can move through:

`proposed -> codified -> challenged -> falsified -> overruled -> deprecated`

The dictionary is allowed to be funny. The validation still has teeth.
