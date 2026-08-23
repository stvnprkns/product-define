# AGENTS.md — authoring define

Guidance for agents editing this repository. Runtime behavior for product work lives in `skills/*/SKILL.md`; this file is for changing the suite itself.

## Shape

- **Orchestrator:** `define` — routes, gates, record, propose-then-act. Does not restate worker rules.
- **Workers:** `define-frame` · `define-model` · `define-concept` · `define-flow` · `define-validate` · `define-review`
- **Craft:** external / pluggable — never duplicate `better-ui` motion, color, or type recipes here.

## Progressive disclosure

| In `SKILL.md` | In `assets/*.md` |
|---|---|
| Principles, ownership, handoffs, Before you finish | Templates, ledgers, recipes, output formats |
| Quick Reference table linking assets | Exact values, skeletons, checklists |

Link from the principle that needs the recipe. Do not restate the asset in shorter form in the skill body, and do not restate the principle at length in the asset.

## One owner per rule

Point at siblings by skill name in backticks (`define-frame`). Conflict order: evidence → model → mechanism → flows → craft.

## Calibration

- Skip is first-class; announce with reason.
- PROCEED WITH ASSUMPTION should be common.
- Storm when mechanism is uncertain; skip when mechanism is known.
- Thin evidence deepens frame — does not unlock concepting.

## Packaging

Canonical source: `skills/<name>/`. After edits, re-pack root `*.skill` zips from those directories so install artifacts stay in sync.

## Voice

Prescriptive and specific. Sentence-case headings that carry the point. Before you finish tables: detection → fix. No motivational filler — agents do not need pep talks.

## Vision

Product intent: [VISION.md](VISION.md).
