# Review format — critique and QA

Diagnose and route; do not fix in place; do not draw wireframes (`product-concept`).

## Layer order (stop at first failure)

1. Research → 2. Framing → 3. Model → 4. IA → 5. Concept → 6. Interaction → 7. Visual hierarchy → 8. Craft → 9. Implementation

Highest broken layer is THE diagnosis. Lower notes are secondary.

## Critique mode output

```markdown
# Design review — critique
**Scope:** …
**Highest broken layer:** <layer>
**Diagnosis:** <one paragraph, evidence-cited>

## Evidence
| Claim | Evidence (path / artifact / missing state) |
|---|---|
| … | … |

## Secondary (lower layers)
- …

## Route
→ run `design-<x>` on <specific thing>
```

## QA mode output

Four passes in order: **Intent** → **Interaction** (walk `flows.md` ledger) → **Craft** (active craft skill checklist) → **Consistency** (product grammar + noun table).

```markdown
# Design review — QA
**Scope / build:** …
**Hostile data used:** <long names / 0 rows / 10k / missing / concurrency / slow / i18n / keyboard>

## Findings
| Severity | Pass | Finding | Blocking? | Owner |
|---|---|---|---|---|
| … | Intent\|Interaction\|Craft\|Consistency | … | Blocking\|Debt | … |

## Verdict
**SHIP** | **SHIP WITH DEBT** (list debt + decisions.md entries) | **HOLD** (blocking items named)

## Debt accepted
→ decisions.md
```

## Hostile data checklist

Full checklist: [hostile-data.md](hostile-data.md). Minimum to record:

- Longest real names · zero rows · ~10,000 rows · missing fields  
- Concurrent edits · slow network · translated-length strings  
- Full keyboard pass: focus order, announcements, nothing pointer-only  

## Before you finish

| Mistake | Fix |
|---|---|
| Typography on wrong concept | Stop at highest layer |
| Forty findings, none blocking | Tag Blocking vs Debt; verdict |
| Demo-data signoff | Hostile data checklist |
| Fixing mid-review | Route only |
