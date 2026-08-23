# Data reality — honesty before UI claims

For every piece of information a concept might display. Omniscience by omission is the most common AI-design failure.

## Data-reality table

```markdown
| Information | Exists? | Source / authority | Freshness | When missing | Cost to produce |
|---|---|---|---|---|---|
| … | yes / generated / no | … | realtime / hourly / nightly / unknown | … | … |
```

Questions per row:
1. Does it exist or must it be generated?
2. What is authoritative when sources disagree?
3. How fresh, really?
4. What happens when missing?
5. What does producing it cost?

## Probabilistic error ledger

When the source is a model / classifier / detector:

```markdown
| Signal | Failure rate | Direction (miss vs false alarm) | Confidence displayable? | Human consequence when wrong |
|---|---|---|---|---|
| … | … (n, window) | … | yes/no | … |
```

A 12% false-positive pipeline is a different product than a 2% one.

## Omniscience flags

```text
⚠️ Concept assumes <claim>; reality: <what the system exposes>. Design consequence: <…>.
```

Each flag → Unknowns in `context.md` and a risk line for `product-validate`.

## Object ledgers (reminder)

Per durable noun: relationships · states (one-way?) · permissions · reversibility · history.

## `model.md` contract

object table → state machines (2–4) → permissions → data-reality table → error ledger → ⚠️ flags.

## Before you finish

| Mistake | Fix |
|---|---|
| ERD cosplay | Product honesty: states, freshness, missing |
| No ⚠️ flags | Write them when UI implies more than the system has |
| Confidence with no mechanism | Error ledger or remove the claim |
| Skipping freshness | Answer every row |
