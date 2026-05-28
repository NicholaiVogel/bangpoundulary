---
name: wombology
description: Validate and maintain the shared Wombology Dictionary repo.
category: creative
---

# Wombology

Use this skill when Nicholai, Avery, Ant, Yogurt, or other chat participants coin wombos and want them added to the shared dictionary.

## Canon

Source repo: `wombology-dictionary`

Core law:

> A wombo is not a concatenation. It is a merger. Each root must surrender a syllable, a meaning, or a boundary to create something that neither word could be alone. No sacrifice, no wombo.

## Workflow

1. Capture the proposed word, author, roots, definition, and source context.
2. Validate sacrifice for each root.
3. Create or edit `dictionary/entries/<word>.md`.
4. Run:

```bash
python scripts/validate-entry.py dictionary/entries/<word>.md
python scripts/build-index.py
```

5. Commit with a short message like `Add wombasticalsideye`.

## Entry format

```md
---
word: wombasticalsideye
author: Avery
roots:
  - wombo
  - fantastical
  - side eye
status: valid
---

# wombasticalsideye

Definition.

## Sacrifice

- root -> sacrificed form, explanation.

## Law

Valid under Wombo Law #1.
```

## Pitfalls

- Do not codify pure concatenations.
- Preserve variants and deprecated forms rather than deleting them.
- If Yogurt and Ant both recorded an entry, reconcile provenance instead of flattening it.
- Wombos in chat should be written as normal text, not bolded.
