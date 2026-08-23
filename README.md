# design-better

Most AI design sessions jump from a request to a screen. This suite is the work that should happen in between: figure out what problem you’re solving, what the product is made of, which mechanisms are worth trying, and which one to keep, before anyone spends a week on craft.

Seven agent skills. One orchestrator. A shared design record so the next turn doesn’t forget the last.

Inspired by how [Karl Koch](https://karlkoch.me/writing/on-teaching-ai-how-you-work/) packages judgement into skills, and how [Jakub Krehel](https://jakub.kr/skills) makes install-and-run craft skills feel obvious. This set owns product definition, not pixels. Pair it with something like `better-ui` when you’re ready to polish.

## Install

```bash
npx skills add stvnprkns/design-better
```

Or open the `skills/` folders in this repo. Installable packages also live at the root as `*.skill` zips.

## Start here

Ask for `design-process`. It classifies uncertainty (low / medium / high), proposes a route, and only runs the phases that reduce that uncertainty. Skips come with a reason. You approve the route before it runs.

When you already know the phase, call it by name: `design-frame`, `design-model`, `design-concept`, `design-flow`, `design-validate`, `design-review`.

## What you get

| Skill | What it does for you |
|---|---|
| [`design-process`](skills/design-process/SKILL.md) | Routes the work, keeps gates honest, maintains the design record |
| [`design-frame`](skills/design-frame/SKILL.md) | Turns messy context into a problem brief: evidence, Desire, sandbox, aging, success signals |
| [`design-model`](skills/design-model/SKILL.md) | Names the objects, data honesty, and disclosure the UI will lean on |
| [`design-concept`](skills/design-concept/SKILL.md) | Storms mechanisms, then shows options as Browse → Compare → Commit so you cut while fidelity rises |
| [`design-flow`](skills/design-flow/SKILL.md) | Happy path plus empty, error, and “I got interrupted and came back” |
| [`design-validate`](skills/design-validate/SKILL.md) | Attacks the riskiest assumption with the cheapest instrument |
| [`design-review`](skills/design-review/SKILL.md) | Critique that routes to the right owner, or QA with SHIP / DEBT / HOLD |

Craft (color, type, motion, tokens) stays pluggable. Name your house system in the route. This suite will not override a failed gate just because the mock looks pretty.

## How concepting stays fast

You still see a wall of options. Full kit cost only lands after you’ve cut.

1. **Browse** — every option as a labeled idea card  
2. **Cut** — kill most of them while they’re cheap  
3. **Compare** — survivors with real structure, abbreviated content  
4. **Cut again** — pick a winner  
5. **Commit** — one (or two) full grayscale frames, then subtract until one path feels inevitable  

Details live in [`wireframe-recipe.md`](skills/design-concept/assets/wireframe-recipe.md).

## Typical routes

| Uncertainty | Route |
|---|---|
| Low | patterns → flow → craft → review (QA) |
| Medium | frame → model? → concept → flow → craft → review |
| High | frame → model → concept → flow → validate → craft → review |

Thin evidence deepens framing. It does not unlock a concept storm. If the mechanism is already chosen, skip the storm and say why.

## When skills disagree

1. Evidence and problem (`design-frame`)  
2. Model truth (`design-model`)  
3. Selected mechanism (`design-concept`)  
4. Flows and states (`design-flow`)  
5. Craft last — and never past a failed gate  

## Design record

First run creates a `design/` folder from [`design-record.md`](skills/design-process/assets/design-record.md). Every phase reads `context.md` first and updates it last. Gates are in [`gates.md`](skills/design-process/assets/gates.md).

## Skip this suite when

You need craft polish on an already-chosen direction (use `better-ui` or your house system). The change is a one-line table tweak. You want the agent to invent interview quotes. You’re about to spend a week on type while the concept is still undecided.

North star: [VISION.md](VISION.md). Editing the suite itself: [AGENTS.md](AGENTS.md).
