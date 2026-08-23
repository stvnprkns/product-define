---
name: define-validate
description: Test the design's riskiest assumption with the cheapest sufficient instrument, then judge results through nine lenses — utility, comprehension, workflow, trust, efficiency, failure, adoption, scope, responsibility — routing every finding to the phase that owns it. Use after flows exist and before craft or implementation, whenever an assumption needs testing, or when validating against evidence rather than taste. Triggers on prototype, proof of concept, test the idea, validate, spike, usability, pressure test, does this work, findings.
---

# Define Validate

One loop, two motions: attack the riskiest assumption, then judge what happened. Prototype the risk, not the prettiest screen — often the risk isn't UI at all but whether the data can be found, whether classification is reliable, whether users understand the words. Then evaluation that goes far beyond "did users click the button": nine lenses, each able to fail a design that passes the other eight, with findings routed backward — a comprehension failure to IA or framing, a trust failure to the model — never patched with a tooltip at the surface.

Part of the define suite. Read `design/concepts.md` (risks), `flows.md`, `model.md` (⚠️ flags and error ledger), `problem.md` (signals, non-goals); write `design/validation.md`; update context.md. Gate 4 runs against this file.

## Quick Reference

| Topic | File | Read when |
|---|---|---|
| Assumption → cheapest instrument | [assets/instruments.md](assets/instruments.md) | Before building a prototype |
| Nine lenses + routing | [assets/nine-lenses.md](assets/nine-lenses.md) | Every evaluation |

## Core Principles

1. **Name the riskiest assumption first** — then pick an instrument from [assets/instruments.md](assets/instruments.md). Band-aware: Stretch/Wild need explicit plans.

2. **Match instrument to question** — table in instruments.md.

3. **Real content or don't bother.**

4. **Build the slice, not the surface.** Disposable vs seed code declared upfront.

5. **Nine lenses, every evaluation** — [assets/nine-lenses.md](assets/nine-lenses.md).

6. **Findings route backward** — `finding → frame|model|concept|flow|craft`.

7. **Evaluate against the record, not taste.**

8. **`validation.md` contract** — per nine-lenses.md.

## Before you finish

| Mistake | Fix |
|---|---|
| "Build the whole page" as default | Instrument matches the risk; fidelity justified in writing |
| Testing the pretty, shipping the risky | Attack the named assumption, not the happy path alone |
| Stretch/Wild pick with happy-path-only validation | Explicit plan matching the band's risk profile |
| Demo data | Production-shaped content: long names, missing fields, volume |
| Usability-only evaluation | Run all nine lenses; each can fail the design alone |
| Forward-only findings / vibes as evidence | Route to owning phase; cite evidence per verdict |

**Handoff:** rerun the owning skill named in findings, or Gate 4 then craft / `define-review` (QA).
