# Shared Wombology Dictionary Repo

Session pattern: Nicholai asked Ant and Yogurt to stop relying only on oral tradition / separate private skill registries and create a shared repo for Wombology skills and dictionary entries.

## Repo

Local path:

```text
/mnt/work/dev/personal-projects/wombology-dictionary
```

Remote:

```text
https://github.com/NicholaiVogel/wombology-dictionary
```

The repo was initialized private and Avery was invited as collaborator under GitHub login `aaf2tbz` after `AlexMondello` returned 404 and GitHub user search resolved the actual account.

## Structure

```text
README.md
WOMBO_LAW.md
corpus/
  kirk-wombos-compendium-2026-05-27.md
dictionary/
  entries/
    bangpoundulary.md
    wombasticalsideye.md
  index.md
schemas/
  entry.schema.json
scripts/
  validate-entry.py
  build-index.py
skills/
  wombology/
    SKILL.md
.github/workflows/validate.yml
```

## Workflow

1. Add one markdown file per wombo under `dictionary/entries/<word>.md`.
2. Include YAML frontmatter: `word`, `author`, `roots`, `status`, and optional `entry` / `source`.
3. Include `## Sacrifice` and `## Law` sections.
4. Run:

```bash
python scripts/validate-entry.py
python scripts/build-index.py
```

5. Commit and push.
6. CI validates entries and ensures `dictionary/index.md` is regenerated.

## Governance

The repo preserves Wombo Law #1 as the validation basis and supports the status ladder:

```text
proposed -> codified -> challenged -> falsified -> overruled -> deprecated
```

Use the Obsidian Compendium for literary live-scribing and the repo for collaborative, portable, validated canon.
