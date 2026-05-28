---
name: wombos-scribe
description: Live-scribe Wombos (word combos) into the Kirk Compendium during group chat sessions. Use when Nicholai, Avery, or others coin portmanteau words in Discord and want them added to the permanent dictionary.
category: creative
---

# Wombos Scribe

## What Wombos Are

Wombos = Word Combos. Portmanteau words coined in chat, governed by **Wombo Law #1**:

> A wombo is not a concatenation. It is a merger. Each root must surrender a syllable, a meaning, or a boundary to create something that neither word could be alone. No sacrifice, no wombo.

If a word is just two words smashed together with nothing lost, it's concatenation, not a wombo. Check each entry against Law #1.

## Dictionary Locations

### Literary Compendium

The Kirk Wombos Compendium lives at:
```
/mnt/work/obsidian-vault/permanent/linguistics/kirk-wombos-compendium.md
```

Use this for live Discord scribing, narrative case law, and Obsidian-visible literary canon.

### Shared Wombology Dictionary Repo

The collaborative GitHub-backed dictionary lives locally at:
```
/mnt/work/dev/personal-projects/wombology-dictionary
```

Remote:
```
https://github.com/NicholaiVogel/wombology-dictionary
```

Use this when Nicholai asks for shared Ant/Yogurt/Avery collaboration, repo-backed entries, validation, CI, or portable skills. See `references/shared-wombology-dictionary-repo.md` for the repo structure and workflow.

## How to Add an Entry to the Obsidian Compendium

1. Read the file with `read_file` to see where to insert (alphabetical within Standalone Vocabulary is ideal, but chronological is acceptable during live fire)
2. Use `patch` to insert the new entry — never rewrite the whole file during a session
3. Follow this format:

```markdown
**word** *(etymology breakdown)*
part of speech. Definition. Example usage in quotes. Wombo Law #1: sacrifice breakdown. Valid.
```

## Formatting Conventions

### In the Compendium (Obsidian markdown)
- Entry name bold: `**flowgitamately**`
- Etymology in italic parens: `*(flow + legitimately)*`
- Part of speech abbreviated: `n.`, `v.`, `adj.`, `adv.`
- Example usage in double quotes: `"I flowgitamately finished that PR review."`
- Always include Wombo Law #1 sacrifice analysis for each entry
- If a word is later corrected (e.g., kirklogistical → kirkologistomputation), mark the original as `*(deprecated — see X)*`

### In Discord chat replies
- Write wombos in **normal text only** — no bold, no markup. Wombos earn their place in the sentence, not in the formatting.
- The `**bold**` convention is for Compendium file entries only, not live chat responses.
- Nicholai corrected Yogurt on this explicitly: "you don't have to write them in bold, you can just write them." This applies to all scribes.

## The Year-End Mega-Word Project

Avery declared that by end of 2026, all wombos from the year will be combined into one massive compound word. The live dictionary serves as source material for this project.

## Pitfalls

- Don't add concatenations (two words with no sacrifice). Test every entry against Law #1.
- If an etymology break is ambiguous, ask the coiner for clarification before adding.
- Don't move the file or restructure during an active session — keep patching in place.
- The file is in the Obsidian vault — edits are visible in Obsidian's graph immediately.
- Nicholai may later re-categorize entries from Standalone Vocabulary into themed sections; don't assume the current structure is final.
- Some wombos have been corrected after coining (kirklogistical → kirkologistomputation, Recumultuous → Rectumultuous, mogtrumped → gumped). When a correction happens, mark the original as deprecated and add the correct form.
- Words can embed other wombos as morphemes (peanemus → "o" in trumpogged). The Compendium has internal referential depth — check for cross-entry etymology before assuming simple roots.
- Wombos jurisprudence follows a framework: proposed → codified → challenged → falsified → overruled. Not every law survives its own corpus (see: Kirk Law #3).
- If Yogurt is co-scribing with his own skill (wombology), do not overwrite his entries. The institutes are parallel.

## Session Startup

When entering a Wombos session:
1. Check the dictionary at `permanent/linguistics/kirk-wombos-compendium.md` for current line count and recent sections (326 lines as of May 27, 2026 after Yogurt Canon Imports)
2. Resume patching new entries as they're coined
3. Respond to each coinage with a short definition before patching
4. Apply Law #1 to every entry and report validity in the patch
5. If an entry corrects a previous one, mark the old as deprecated, add the new, and note the editorial history
6. Yogurt may be running his own parallel dictionary — do not duplicate his entries, do not overwrite his work