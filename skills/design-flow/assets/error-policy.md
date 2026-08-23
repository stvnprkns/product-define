# Error policy — fix, retry, or report

Errors get a **policy**, not a toast. Empty states teach the mechanism (onboarding), not an apology.

## Policy matrix

For each failure mode in the flow:

| Failure | User can… | Design |
|---|---|---|
| **Fix** | Correct input / choice and continue | Inline correction; preserve context |
| **Retry** | Trigger the same action again | Retry affordance; say what changed / what will retry |
| **Report only** | Cannot fix or retry | Honest dead-end; context preserved; how to get help |

Never default every failure to a red toast that evaporates work.

## Empty = onboarding

```text
Good: "No anomalies yet — we'll flag mismatches as estimates sync."
Bad:  "No data."
```

Empty for a core object is most users' first experience of the concept — teach the mechanism.

## Safeguards (from `model.md` reversibility)

Forever-actions get a safeguard **proportional to risk** — never a reflexive "Are you sure?":

| Risk | Safeguard |
|---|---|
| Easily undone | Undo / soft delete |
| Costly but recoverable | Confirm with consequence named |
| Irreversible / high blast | Type-to-confirm, time-delay, or two-person |

## Before you finish

| Mistake | Fix |
|---|---|
| Toast-as-strategy | Fix / retry / report per failure |
| "Are you sure?" everywhere | Match safeguard to risk |
| Apologetic empty | Teach the mechanism |
| Lost context on error | Preserve work; say how to recover |
