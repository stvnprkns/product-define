# Pattern sources — seeding divergence

Patterns describe **behavior**, not pixels. Fill all four sources before the mechanism storm. Full storm rules: [ideation-ladder.md](ideation-ladder.md).

## Four sources (required order)

| Source | Question | Example (good) | Anti-example |
|---|---|---|---|
| **Internal** | How does *this* product already solve analogous jobs? | Estimate detail already uses inline comments for disputes | "We don't have a pattern" without searching adjacent screens |
| **Category** | What do users bring from comparable products? | Claims tools show exception queues with running totals | Who-has-what feature matrix |
| **Behavioral** | What generic interaction grammar fits? | Diff/review, inbox-zero, command menu, undo/history | "Use cards" (layout, not behavior) |
| **Analogous** | Who solves this *problem shape* outside the category? | Code review (GitHub), reconciliation (Stripe), IDE diagnostics | Only studying direct competitors |

Breaking **Internal** consistency needs the strongest justification — record it in `decisions.md`.

## Label every pattern

```text
<name> — <how it works in one line> — preserve|question — <why>
```

- **preserve** — users already understand this; breaking it taxes them
- **question** — everyone does this because everyone else does; name the cost

## `patterns.md` contract

```markdown
# Patterns
## Internal
- …

## Category
- …

## Behavioral
- …

## Analogous
- …

## Raw material for concepting
The 3–5 patterns most likely to seed genuinely different mechanisms (cite source section).
```

## Before you finish

| Mistake | Fix |
|---|---|
| Category-only | Analogous is required raw material |
| Feature matrix | Behavior lines, not checkboxes |
| "Left sidebar" as pattern | Decoration; rewrite as behavior |
| No preserve\|question labels | Label every row |
| Empty "Raw material" | Name 3–5 seeds before storming |
