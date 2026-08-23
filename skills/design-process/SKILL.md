---
name: design-process
description: Orchestrates the product design process — diagnoses uncertainty, selects only the phases that reduce it, maintains the shared design record, and enforces evidence gates before concepting, crafting, building, and shipping. Use at the start of any design or product request to decide which design-* skills to run and in what order. Triggers on design process, design this, new feature, redesign, product problem, "where do we start", design plan, kick off design.
---

# Design Process

Coding agents collapse `request → interpretation → UI → code`. This suite forces the missing middle back in — but the orchestrator's first duty is deciding how much middle the request deserves. Process exists to reduce uncertainty; any phase that doesn't reduce meaningful uncertainty is theater, and skipping is a first-class decision, not a shortcut.

## Process, not theater

Press on uncertainty reduction and leave ceremonial phases alone. Those pull the same way.

- Skip is a first-class output: announce it with a reason.
- **PROCEED WITH ASSUMPTION** should be the most common gate verdict on real work; every gate returning PASS means the gates aren't being run.
- Do not run a phase that does not reduce a named uncertainty.
- A short honest route beats a full-suite performance.
- Thin evidence is a reason to **deepen frame** (see `design-frame` / research-depth), not to skip to concept.
- Full mechanism storm (15–20) on medium/high when **mechanism** uncertainty is real. Announce skip of storm when the mechanism is already chosen and only expression varies — ceremonial breadth is theater.

Orchestration is all this skill owns. Framing rules belong to `design-frame`, modeling to `design-model`, divergence and wireframes to `design-concept`, flows to `design-flow`, validation to `design-validate`, critique/QA to `design-review`. Never duplicate or override their rules here.

## Quick Reference

| Topic | File | Read when |
|---|---|---|
| Shared design record schema + templates | [assets/design-record.md](assets/design-record.md) | Starting any engagement |
| Gate rubric + verdicts | [assets/gates.md](assets/gates.md) | Before concept, craft, build, or ship |
| Low / medium / high route cards | [assets/route-cards.md](assets/route-cards.md) | Diagnosing uncertainty / announcing route |

## Core Principles

1. **Diagnose uncertainty before doing anything.** Classify and route per [assets/route-cards.md](assets/route-cards.md) (low / medium / high + storm-skip calibration). State the class and route before running. Re-classify when a phase surfaces surprise.

2. **The design record is the product of the process.** Create `design/` from the template on first run. Every phase reads `design/context.md` first and updates it last. Skills collaborate through the record, never through disconnected reports.

3. **`context.md` stays under one page.** It is the canonical compact summary: user, job, problem, evidence, unknowns, principles, current concept, key decisions, open questions. Depth lives in the per-phase files; context.md is what every downstream skill (and human) actually reads.

4. **Gates are evidence checks, not approvals.** Four gates (see [assets/gates.md](assets/gates.md)): before concept (problem understood?), before craft (interaction model chosen?), before build (required data exists?), before ship (riskiest assumption tested?). Each returns **PASS**, **PROCEED WITH ASSUMPTION** (record the assumption in `decisions.md`), or **BLOCKED** (downstream work would be fiction — say so and route back).

5. **The craft layer is pluggable.** This suite decides *why* and *how it works*; expression is delegated to whatever craft skill fits the product — `linear-design`, the `ramp-*` suite, a house design system. The orchestrator names the craft skill in the route.

6. **Propose, then act — every phase, no exceptions.** A skill's turn ends with a reviewable artifact plus a one-line proposed next step — never with the next step already taken. Concretely: frame ends at the brief; **concept ends at Browse + proposed Cut 1** (not Compare/Commit); review ends at the punch list. External side effects — Compare board, Commit frames, Figma, code — only after explicit go-ahead at each fidelity step.

7. **The record is patch-only once humans touch it.** Files a human has edited — an Owner claimed, a Status moved, a dissent recorded — are never regenerated wholesale. Agents append new entries, patch specific cards or sections, and preserve every human-written field verbatim. When a structural rewrite is genuinely needed, propose it as a diff and let the human apply or approve it. Losing a designer's claim to a regeneration is how a team stops trusting the record.

8. **Feed backward, not just forward.** When `design-validate` or `design-review` finds a failure, route to the phase that owns it (frame / model / concept / flow), don't patch at the surface. `design-review` in critique mode is the diagnostic entry point when the user senses weakness but can't name the layer.

9. **Shallow pass before deep dives.** On medium/high routes, traverse the whole route once at low resolution — an hour, not a week: a rough frame, a sketched model, three thumbnail concepts. The shallow pass reveals which phase holds the real uncertainty; depth is then spent there, not distributed evenly. Depth-first crawling through phase one while phase five hides the fatal risk is how process kills projects.

10. **Interoperate with the org's artifacts.** Real work arrives with PRDs, briefs, strategy docs, OKRs, and past experiment results already written. Ingest them: link and summarize into the record with provenance, never duplicate or silently override. Where the record and a PRD disagree, surface the conflict as an open question — don't pick a winner quietly.

11. **Announce skips with reasons.** "Skipping discover: the problem is operator-reported with telemetry attached; evidence already Observed/Measured." An unexplained skip and process theater are the same failure in opposite directions.

## Conflict order

When workers appear to disagree, resolve in this order (also in the suite README):

1. Evidence and problem (`design-frame`) beat concept preference.
2. Model truth (`design-model`) beats UI claims the system cannot support.
3. Selected mechanism (`design-concept`) beats layout preference.
4. Flows and states (`design-flow`) beat polish.
5. An external craft skill never overrides a failed gate.

## Before you finish

| Mistake | Fix |
|---|---|
| Running every phase every time | Re-run uncertainty diagnosis; skip with a reason |
| Thin evidence → skip to concept | Deepen `design-frame` per research-depth; do not concept on Assumed-only |
| Ceremonial storm when mechanism is known | Skip storm with reason; expression-sweep only |
| Full kit on every expression | Browse → Compare → Commit (`design-concept` / wireframe-recipe) |
| Cut 2 without subtract / Care | Route back to `design-concept` subtract pass before flow/craft |
| Standalone reports per phase | Update `design/context.md` and the owning phase file |
| Every gate returning PASS | Prefer PROCEED WITH ASSUMPTION when uncertainty remains |
| Treating the route as fixed | Re-classify and say so when a phase surfaces surprise |
| Ignoring existing PRD/strategy | Ingest with provenance; surface conflicts as open questions |
| Acting on your own proposal | End the turn at the artifact; wait for go-ahead |
| Regeneration clobber | Patch human-touched fields; propose structural rewrites as diffs |
| Depth-first crawl | Shallow pass across the route, then deepen the uncertain phase |
