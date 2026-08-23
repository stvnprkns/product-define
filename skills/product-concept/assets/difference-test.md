# Difference test — mechanisms must disagree

Two concepts that share the same user-visible behavior are one concept in two outfits. Run this on the **shortlist** (after storm convergence), pairwise.

## The test

For every pair A / B, name **one user-visible behavior** where they disagree:

```text
In A, <actor does / sees X>.
In B, <actor does / sees not-X>.
```

If you cannot name one → **merge** and diverge again (or kill the weaker).

## Good disagreements

| Pair | Disagreement |
|---|---|
| Queue vs in-place | A: user visits a queue. B: user never leaves the estimate. |
| System-initiated vs user-initiated | A: system opens the session with exceptions. B: user starts search. |
| Confirm-all vs exception-only | A: every line needs a click. B: only anomalies surface. |
| Dedicated surface vs overlay | A: full-page worklist. B: drawer on existing detail. |

## Bad "differences" (merge)

- Cards vs cards-with-sidebar vs cards-with-tabs (layout)
- Blue primary vs green primary (craft)
- "More modern" / "cleaner" (taste)
- Same initiation, same automation boundary, different chrome

## Ban list in concept descriptions

Do not use these as the *definition* of a concept: card, tab, sidebar, modal, drawer (those are expression/archetype choices after the mechanism holds).

## Record in `concepts.md`

```markdown
## Difference matrix
| | A | B | C |
|---|---|---|---|
| A | — | <disagreement> | <disagreement> |
| B | | — | <disagreement> |
| C | | | — |
```

## Before you finish

| Mistake | Fix |
|---|---|
| Layout variations as concepts | Mechanism question; ban list |
| Matrix empty / vague | One concrete behavior per cell |
| Kept duplicates to fill the shortlist | Merge; storm again if below minimum |
