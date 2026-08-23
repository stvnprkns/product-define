---
name: design-model
description: Ground the design in system reality, then decide where things belong — objects, states, permissions, data availability and freshness, error rates of probabilistic sources, then object hierarchy, navigation, and progressive-disclosure ladder. Use before concepting anything data-rich, when a concept claims the system "knows" something, or for navigation and page-structure questions. Triggers on domain model, data model, entities, states and permissions, feasibility, information architecture, IA, sitemap, navigation, progressive disclosure.
---

# Design Model

Where product design meets reality, in two motions: first the truth of the system — objects, states, what the data can actually support — then the geography built on that truth: which objects earn destinations and how much of each a user sees at each altitude. AI concepts habitually invent omniscient interfaces; modeling first converts that from a late engineering veto into an early design insight. IA works from the model, never from a sitemap brainstorm — this skill decides *where* information belongs; the craft layer later decides how much attention it deserves there.

Part of the design-process suite. Read `design/context.md` and `problem.md`; write `design/model.md` and `design/architecture.md`; update context.md Unknowns with data gaps. Gate 3 runs against `model.md`.

## Quick Reference

| Topic | File | Read when |
|---|---|---|
| Freshness, missing, cost, ⚠️ flags | [assets/data-reality.md](assets/data-reality.md) | Before any UI claim |
| Nav + disclosure altitudes | [assets/disclosure-ladder.md](assets/disclosure-ladder.md) | IA / placement |

## Core Principles

1. **Name the objects in the user's language.** Durable nouns; record eng≠user mismatches.

2. **For each object, five ledgers:** relationships · states · permissions · reversibility · history.

3. **Data-reality interrogation** — fill [assets/data-reality.md](assets/data-reality.md) for every displayed fact.

4. **Probabilistic sources get an error ledger** — rate, direction, confidence, consequence (data-reality.md).

5. **Flag omniscience explicitly** — ⚠️ format in data-reality.md.

6. **`model.md` contract** — per data-reality.md.

7. **Objects earn destinations; features don't.**

8. **The IA six + disclosure ladder** — [assets/disclosure-ladder.md](assets/disclosure-ladder.md).

9. **One primary home per fact.**

10. **`architecture.md` contract** — per disclosure-ladder.md.

## Before you finish

| Mistake | Fix |
|---|---|
| Database-diagram cosplay | Product model: states, permissions, data honesty — not column types |
| Omniscient by omission | Answer freshness / missing / cost; write ⚠️ flags |
| Sitemap-first | Build nav from model nouns after the object table |
| A page per feature | Prefer lenses on one list over sibling pages |
| Everything on the row | Use the disclosure ladder; demote secondary fields |

**Handoff:** `design-concept` (mechanisms must respect ⚠️ flags), or Gate 3 before implementation.
