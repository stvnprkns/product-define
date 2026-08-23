# design-better

A product-design process suite for agents. It puts the missing middle back between request and UI: diagnose uncertainty, run only the phases that reduce it, keep a shared design record, and gate craft and code on evidence.

**North star:** [VISION.md](VISION.md) · **Authoring this repo:** [AGENTS.md](AGENTS.md)

Install or open the `skills/` directories. Invoke `design-process` to route; invoke a worker by name for a single phase.

## Skills

| Skill | Role |
|---|---|
| [`design-process`](skills/design-process/SKILL.md) | **Orchestrator** — uncertainty class, route, gates, design record, propose-then-act |
| [`design-frame`](skills/design-frame/SKILL.md) | Evidence + assumption pressure test + Desire/sandbox/aging + triggered deep research + problem statement, non-goals, success signals |
| [`design-model`](skills/design-model/SKILL.md) | Objects, data reality, IA / architecture |
| [`design-concept`](skills/design-concept/SKILL.md) | Patterns, mechanism storm, shortlist, Browse → Compare → Commit sweep, subtract, briefs |
| [`design-flow`](skills/design-flow/SKILL.md) | Task flows, state ledger, interruption / resumption |
| [`design-validate`](skills/design-validate/SKILL.md) | Riskiest assumption, cheapest instrument, nine lenses |
| [`design-review`](skills/design-review/SKILL.md) | Critique (route to owner) or QA (SHIP / DEBT / HOLD) |

Craft expression (visual system, tokens, motion) is **pluggable** — name `linear-design`, a house system, or another craft skill in the route. This suite owns why and how it works, not pixel craft.

## Ownership

| Concern | Owner |
|---|---|
| Route, skips, gates, record lifecycle, propose-then-act | `design-process` |
| Evidence tags, assumption pressure test, Desire/sandbox/aging, triggered deep research, problem statement, non-goals, principles, signals | `design-frame` |
| Objects, states, permissions, data honesty, nav / disclosure | `design-model` |
| Patterns, mechanism storm, shortlist, Browse/Compare/Commit, subtract, briefs, cuts | `design-concept` |
| Flows, states, interruption / resumption | `design-flow` |
| Prototype instrument, lens table, backward routing of findings | `design-validate` |
| Highest broken layer, QA verdict, hostile data | `design-review` |

Point at a sibling by skill name in backticks. Never restate another skill's rules.

## Conflict order

When skills disagree, resolve in this order:

1. Evidence and problem (`design-frame`) beat concept preference.
2. Model truth (`design-model`) beats UI claims the system cannot support.
3. Selected mechanism (`design-concept`) beats layout preference.
4. Flows and states (`design-flow`) beat polish.
5. An external craft skill never overrides a failed gate.

## Typical routes

- **Low uncertainty** — `concept` (patterns only; storm skipped) → `flow` → craft → `review` (QA).
- **Medium** — `frame` (pressure-test + Desire/sandbox/aging) → `model?` → `concept` (patterns + storm + diverge + subtract) → `flow` → craft → `review` (QA).
- **High** — `frame` (discover + deep-if-triggered + Desire/sandbox/aging) → `model` → `concept` (patterns + storm + diverge + subtract) → `flow` → `validate` → craft → `review` (QA).

State the class and route before running. Skip with a reason. Re-classify when a phase surfaces surprise. Thin evidence deepens `design-frame`; it does not skip to concept. Skip storm when the mechanism is already chosen.

## Design record

Created on first run from [`design-process/assets/design-record.md`](skills/design-process/assets/design-record.md). Every phase reads `design/context.md` first and updates it last. Gates live in [`gates.md`](skills/design-process/assets/gates.md).

## Wireframes

Progressive fidelity in [`design-concept/assets/wireframe-recipe.md`](skills/design-concept/assets/wireframe-recipe.md):

1. **Browse** — all expressions as labeled region cards (breadth, Cut 1)  
2. **Compare** — 3–5 keepers with kit chrome, abbreviated content (Cut 2)  
3. **Commit** — winner at full composed grayscale (subtract, handoff)

Still black-and-white at every stage; craft color comes after Commit via pluggable craft skills.

## Progressive disclosure

Each skill keeps principles in `SKILL.md` and depth in `assets/` (or `references/`). Open the Quick Reference table in a skill when you need templates, ledgers, or recipes — not before.
