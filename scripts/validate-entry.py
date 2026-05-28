#!/usr/bin/env python3
"""Validate Wombology Dictionary markdown entries.

Intentionally dependency-free. Checks frontmatter, required fields, and the presence
of sacrifice/law sections. This is not a full court ruling, just a bailiff with a clipboard.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

REQUIRED = {"word", "roots", "status"}
VALID_STATUSES = {"proposed", "valid", "codified", "challenged", "falsified", "overruled", "deprecated", "variant"}


def parse_frontmatter(text: str) -> dict[str, object]:
    if not text.startswith("---\n"):
        raise ValueError("missing YAML frontmatter")
    end = text.find("\n---\n", 4)
    if end == -1:
        raise ValueError("unterminated YAML frontmatter")
    data: dict[str, object] = {}
    current_key: str | None = None
    for raw in text[4:end].splitlines():
        line = raw.rstrip()
        if not line:
            continue
        if line.startswith("  - ") and current_key:
            data.setdefault(current_key, [])
            if not isinstance(data[current_key], list):
                raise ValueError(f"{current_key} mixes scalar and list syntax")
            data[current_key].append(line[4:].strip())
            continue
        match = re.match(r"^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$", line)
        if not match:
            raise ValueError(f"cannot parse frontmatter line: {line!r}")
        key, value = match.groups()
        current_key = key
        if value == "":
            data[key] = []
        elif value.isdigit():
            data[key] = int(value)
        else:
            data[key] = value.strip().strip('"')
    return data


def validate(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    errors: list[str] = []
    try:
        meta = parse_frontmatter(text)
    except ValueError as exc:
        return [str(exc)]

    missing = REQUIRED - set(meta)
    if missing:
        errors.append(f"missing required fields: {', '.join(sorted(missing))}")
    roots = meta.get("roots")
    if not isinstance(roots, list) or not roots:
        errors.append("roots must be a non-empty YAML list")
    status = meta.get("status")
    if status not in VALID_STATUSES:
        errors.append(f"status must be one of: {', '.join(sorted(VALID_STATUSES))}")
    if "## Sacrifice" not in text:
        errors.append("missing ## Sacrifice section")
    if "## Law" not in text:
        errors.append("missing ## Law section")
    return errors


def main(argv: list[str]) -> int:
    paths = [Path(p) for p in argv[1:]] or sorted(Path("dictionary/entries").glob("*.md"))
    failed = False
    for path in paths:
        errors = validate(path)
        if errors:
            failed = True
            print(f"✗ {path}")
            for error in errors:
                print(f"  - {error}")
        else:
            print(f"✓ {path}")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
