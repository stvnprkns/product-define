---
name: design-review
description: Audit a design artifact at the right layer — critique mode names the broken layer (research, framing, model, IA, concept, interaction, hierarchy, craft, implementation) and routes to its owner; QA mode is the pre-ship gate against the design record with a SHIP, SHIP WITH DEBT, or HOLD verdict. Use for product/design critique, "something feels off," design QA, or the final phase of a design-process route — not for code-PR interface review (use interface-review / better-interface for that). Triggers on design critique, tear this design apart, design QA, pre-ship design, ready to ship this design, audit the build against the record, punch list.
---

# Design Review

Most critique fails by answering at the wrong altitude — polishing typography on a screen whose concept is wrong. And code drifts from intent in a thousand small surrenders — a state skipped, a label improvised — invisible until they compound into "why doesn't this feel right?" One skill, two modes, one method: audit top-down against the record, locate the highest broken layer, and either route it (critique) or gate the ship (QA). It diagnoses and routes; it does not fix in place, and it does not build wireframes (that is `design-concept`).

Part of the design-process suite. Reads the full `design/` record when present. QA additionally runs the active craft skill's checklist. Findings append to `validation.md`; debt to `decisions.md`. Output format: [assets/review-format.md](assets/review-format.md).

## Quick Reference

| Topic | File | Read when |
|---|---|---|
| Critique + QA schemas | [assets/review-format.md](assets/review-format.md) | Every review |
| Hostile dataset checklist | [assets/hostile-data.md](assets/hostile-data.md) | QA mode |

## Core Principles

1. **Diagnose top-down, stop at first failure** — layer order in review-format.md.

2. **Evidence per diagnosis.**

3. **QA: Intent → Interaction → Craft → Consistency.**

4. **Hostile data, no mouse** — [assets/hostile-data.md](assets/hostile-data.md).

5. **Blocking vs debt; verdict SHIP / SHIP WITH DEBT / HOLD.**

6. **Route, don't repair.**

7. **Say when it's sound.**

Report using [assets/review-format.md](assets/review-format.md).

## Before you finish

| Mistake | Fix |
|---|---|
| Typography notes on a wrong-concept screen | Stop at the highest broken layer |
| Critique-as-preference | Tie findings to job, principle, or evidence |
| Pixel-only QA | Walk flows.md states and hostile data first |
| Forty findings, none blocking | Tag blocking vs debt; end with a verdict |
| Demo-data signoff | Use hostile / production-shaped data |
| Fixing in place / drawing frames mid-review | Route to the owner; wireframes belong to `design-concept` |

**Handoff:** critique → named `design-*` owner; QA HOLD → `design-process` re-route; SHIP WITH DEBT → `decisions.md` entries.
