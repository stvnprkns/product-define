# Nine lenses — evaluate against the record

Every evaluation runs all nine. Each can fail a design that passes the other eight. Verdict: **pass / concern / fail** with evidence. Route findings backward.

## Lens table

| Lens | Question | Fail looks like | Routes to |
|---|---|---|---|
| **Utility** | Worth doing? Beats the workaround? (primary signal) | Users prefer the spreadsheet | frame / concept |
| **Comprehension** | Do they understand what it is and the words? | Wrong mental model; ignored cues | frame / model / concept |
| **Workflow** | Fits interruptions, sequences, tools alongside? | Abandoned mid-flow; side channel wins | flow / frame |
| **Trust** | Claims more certainty than the system has? | Surprise wrongness; ignored warnings | model (fail, not copy tweak) |
| **Efficiency** | Lower cognitive load? | Fewer steps but more thinking | concept / flow |
| **Failure** | When the system is wrong, do they find out and recover? | Silent bad state | flow / model |
| **Adoption** | New work (entry, upkeep, vigilance) — who pays? | Shadow process continues | frame / concept |
| **Scope** | Three products? Check non-goals | Scope creep in the build | frame |
| **Responsibility** | A11y, privacy, abuse, honest AI degrade | Keyboard dead-ends; overclaim | flow / model / craft |

## `validation.md` contract

```markdown
# Validation
## Riskiest assumption
…

## Instrument and why
… (see instruments.md)

## What was built / run
…

## What happened (raw)
…

## Lens table
| Lens | Verdict | Evidence | Routes-to |
|---|---|---|---|
| Utility | … | … | … |
| … | … | … | … |

## Most damaging finding
<one sentence>

## Recommended iteration
→ run design-<x> on <specific thing>

## Assumptions accepted as-is
→ decisions.md
```

## Before you finish

| Mistake | Fix |
|---|---|
| Usability-only | All nine lenses |
| Trust as copy tweak | Model fail if overclaim |
| Forward-only punch list | Route to owning phase |
| Vibes as evidence | Cite artifact / behavior |
