---
name: bangpoundulary
description: Use when coining, validating, live-scribing, importing, or maintaining wombos in the shared Wombology Dictionary repo and Obsidian Kirk Compendium. Enforce Wombo Law #1, preserve provenance, reconcile Ant/Yogurt variants, update entries/index, and keep chat formatting normal.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [wombology, dictionary, obsidian, discord, creative, provenance]
    related_skills: []
---

# Bangpoundulary

## Overview

Use this skill for the full Wombology workflow: live Discord scribing, Obsidian compendium updates, shared repo entries, Yogurt/Ant reconciliation, and corpus imports.

The field is absurd. The process is not. Preserve source structure, provenance, variants, deprecated forms, and case law. Do not flatten the artifact into sterile dictionary slop.

Core law:

> A wombo is not a concatenation. It is a merger. Each root must surrender a syllable, a meaning, or a boundary to create something that neither word could be alone. No sacrifice, no wombo.

## When to Use

Use when:

- Nicholai, Avery, Yogurt, Ant, or others coin a wombo in chat.
- Someone asks to add, validate, challenge, import, reconcile, or publish Wombology entries.
- You need to update the Obsidian Kirk Compendium.
- You need to update the GitHub-backed Wombology Dictionary repo.
- Ant and Yogurt produced overlapping entries and the canon needs reconciliation.
- The year-end mega-word project needs source material.

Do not use for ordinary wordplay unless the user frames it as Wombology, wombos, Bangpoundulary, Kirk Compendium, or related canon.

## Canon Locations

### Shared Wombology Dictionary Repo

Local path:

```text
/mnt/work/dev/personal-projects/bangpoundulary
```

Remote:

```text
https://github.com/NicholaiVogel/bangpoundulary
```

Use this for collaborative Ant/Yogurt/Avery work, repo-backed entries, validation, CI, portable skills, PRs, and generated indexes.

### Obsidian Literary Compendium

Path:

```text
/mnt/work/obsidian-vault/permanent/linguistics/kirk-wombos-compendium.md
```

Use this for live Discord scribing, narrative case law, literary canon, source texture, and Obsidian-visible continuity.

### Imported Corpus Snapshots

Repo corpus snapshots live under:

```text
corpus/
```

Current per-word entries live under:

```text
dictionary/entries/
```

Generated index:

```text
dictionary/index.md
```

## Wombo Validation

A valid wombo must satisfy Wombo Law #1. At least one of these sacrifices must be explicit:

- **Phonemic sacrifice:** a root loses letters, sounds, or syllables.
- **Boundary sacrifice:** a root loses independence and becomes a bound morpheme.
- **Semantic sacrifice:** a root keeps form but gives up original context, dignity, or ordinary meaning.
- **Lineage sacrifice:** an existing wombo becomes a morpheme inside a newer wombo.

Pure concatenations are not valid unless the court explicitly preserves them as historical failed forms, jokes, variants, or deprecated entries.

## Repo Entry Workflow

1. Pull first:

```bash
cd /mnt/work/dev/personal-projects/bangpoundulary
git pull --ff-only
```

2. Create or edit one file per word:

```text
dictionary/entries/<word-slug>.md
```

3. Use this format:

```md
---
word: wombasticalsideye
author: Avery
entry: 83
roots:
  - wombo
  - fantastical
  - side eye
status: valid
source: Discord / Obsidian / Yogurt Lexicon / compendium line reference
---

# wombasticalsideye

n. A wombo so absurdly elaborate that the only appropriate response is a long, judgmental sideways look.

## Sacrifice

- wombo -> womb, surrendering `-o`.
- fantastical -> stical, surrendering `fan-`.
- side eye surrenders the space and becomes suffix material.

## Law

Valid under Wombo Law #1.
```

4. Validate and rebuild:

```bash
python scripts/validate-entry.py
python scripts/build-index.py
git diff --exit-code dictionary/index.md || true
```

5. Commit:

```bash
git add dictionary/entries dictionary/index.md corpus skills README.md
git commit -m "Add <word>"
git push
```

If collaborating with Yogurt, expect remote changes. If push rejects, fetch and merge/rebase carefully. Preserve richer provenance when resolving conflicts.

## Obsidian Compendium Workflow

1. Read the current file before editing:

```text
/mnt/work/obsidian-vault/permanent/linguistics/kirk-wombos-compendium.md
```

2. Patch, do not rewrite the whole file during a live session.
3. Prefer chronological insertion during live fire. Alphabetical cleanup can happen later.
4. Use this format:

```md
**word** *(root + root + root)*
part of speech. Definition. Example usage if useful. Wombo Law #1: sacrifice breakdown. Valid.
```

5. If later importing to repo, copy the compendium block into `## Original corpus block` or otherwise preserve the source line/section in frontmatter.

## Formatting Conventions

### In Discord Chat

- Write wombos in normal text.
- Do not bold wombos in casual replies.
- Keep replies short during live coining unless asked for full court validation.

### In Obsidian Markdown

- Entry name bold: `**flowgitamately**`
- Etymology in italic parens: `*(flow + legitimately)*`
- Part of speech abbreviated: `n.`, `v.`, `adj.`, `adv.`
- Example usage in double quotes when helpful.
- Include Wombo Law #1 sacrifice analysis when available.
- Mark corrected older forms as `*(deprecated — see X)*` instead of deleting.

### In Repo Entries

- Preserve source and author in frontmatter.
- Preserve original compendium text when importing from Obsidian.
- Prefer explicit statuses: `proposed`, `valid`, `codified`, `challenged`, `falsified`, `overruled`, `deprecated`, `variant`.

## Reconciliation Rules

When Ant and Yogurt entries overlap:

1. Do not overwrite one institute with the other.
2. Keep the richer source block if one entry preserves more provenance.
3. Preserve Yogurt-only entries as entries, not footnotes.
4. Preserve Ant literary/case-law blocks as corpus evidence.
5. If both definitions differ use `## Notes`, `## Variants`, or `## Original corpus block` rather than erasing one.
6. Deprecated and variant forms are canonically useful. Do not clean them away.

Known examples:

- `wombombo`, `Wombobombo`, and `wombowombomba` are recursion levels, not duplicates.
- `womboikirkentology` and `wombokirkentology` are variants.
- `mogtrumped` is deprecated in favor of `gumped`.
- `kirklogistical` is deprecated in favor of `kirkologistomputation`.
- Bone markers from Yogurt are catalog metadata unless court-codified as words.

## Session Startup

When entering a Wombology session:

1. Check repo state:

```bash
cd /mnt/work/dev/personal-projects/bangpoundulary
git status --short
git pull --ff-only
```

2. Check the Obsidian compendium if live-scribing.
3. Validate any new word against Wombo Law #1.
4. Add to Obsidian, repo, or both depending on the user's ask.
5. Run validation and rebuild the index before committing.
6. Push or open PR as requested.

## Year-End Mega-Word Project

Avery declared that by end of 2026, all wombos from the year will be combined into one massive compound word. The repo entries and Obsidian compendium are source material for that final act of linguistic felony.

## Common Pitfalls

1. **Pure concatenation.** If no root sacrifices anything, it is not a wombo unless preserved as a failed/deprecated/historical form.
2. **Losing provenance.** Always keep author/source/context when known.
3. **Flattening style.** The court-history and absurd narrative are load-bearing artifact structure.
4. **Overwriting parallel canon.** Ant and Yogurt may both be right in different layers.
5. **Forgetting the generated index.** Always run `python scripts/build-index.py` after entry edits.
6. **Editing Obsidian blindly.** Read before patching. Never overwrite the compendium wholesale.
7. **Bold wombos in Discord.** Normal text in chat. Bold is for compendium entries.
8. **Merge swamp.** Pull before bulk imports. If remote changed, preserve both source surfaces.

## Verification Checklist

- [ ] Wombo Law #1 applied or status explains why not.
- [ ] Roots, sacrifice, author, and source are preserved where known.
- [ ] Obsidian compendium patched, not overwritten, when touched.
- [ ] Repo entry file validates.
- [ ] `dictionary/index.md` rebuilt.
- [ ] `python scripts/validate-entry.py` passes.
- [ ] `git diff --exit-code` clean after build.
- [ ] CI is green after push when GitHub is involved.
