---
name: design-frame
description: Establish what is known, then define the problem worth solving — inspect codebase, PRDs, tickets, and telemetry; tag every claim by evidence strength; pressure-test assumptions; escalate to deep research when evidence is thin; refuse feature requests as problem definitions; produce a problem statement with non-goals and success signals. Use at the start of medium- or high-uncertainty design work, for research or framing, or when a request arrives pre-solved. Triggers on discovery, user research, evidence, problem statement, problem framing, define the problem, requirements, scope, non-goals, success metrics, assumption check, deep research.
---

# Design Frame

Two motions, one skill: establish what we actually know, then be ruthless about what it means. Fictional personas launder assumptions into confident-sounding facts; feature requests are solutions wearing a problem's clothes. This phase converts both into something falsifiable — tagged evidence, a pressure-tested assumption ledger, a problem statement traceable to it, non-goals, and success signals. The most valuable outputs are often the Unknowns list, the challenged assumptions, and the non-goals.

Part of the design-process suite. Read `design/context.md` first; write `design/evidence.md` and `design/problem.md` from [assets/problem-brief.md](assets/problem-brief.md); update context.md's User / Job / Problem / Desire / Sandbox / Aging / Evidence / Unknowns / Success signals. Gate 1 runs against this skill's output. On low-evidence-need engagements, run frame-only against existing evidence. When evidence is thin, escalate per [assets/research-depth.md](assets/research-depth.md) — deepen frame, do not skip to concept.

## Quick Reference

| Topic | File | Read when |
|---|---|---|
| Desire, sandbox, aging templates | [assets/sandbox-card.md](assets/sandbox-card.md) | Before writing problem.md / before concepting |
| Cold-readable problem.md skeleton | [assets/problem-brief.md](assets/problem-brief.md) | Framing deliverable |
| Current-state Mermaid recipes | [assets/diagram-recipes.md](assets/diagram-recipes.md) | Workflow / artifact diagrams |
| Deep research + assumption ledger | [assets/research-depth.md](assets/research-depth.md) | Thin evidence or pressure-test |

## Core Principles

1. **Inspect what exists before asking for anything.** In order of availability: the codebase and current product behavior, existing PRDs/briefs/strategy docs and past experiment readouts, support complaints, issue tracker, analytics/telemetry, past research, customer quotes in docs/CRM, sales and field feedback, workflow artifacts (the spreadsheets people actually use), adjacent screens solving cousin problems.

2. **Classify every claim** — five tags, mandatory on every evidence line: **Observed** (we directly saw it), **Measured** (telemetry/quantitative), **Reported** (a user/stakeholder said it), **Inferred** (likely, not demonstrated), **Assumed** (no evidence). Police the Inferred/Assumed boundary hardest. Quantitative claims carry denominators — every Measured line includes n, window, segment; every Reported line says who and how many. Keep customers' words verbatim: "supplements are a knife-fight with the insurer" carries information its paraphrase destroys.

3. **Evidence first, then pressure-test.** After tagging, run the assumption ledger and bias checks in [assets/research-depth.md](assets/research-depth.md). Every load-bearing claim and every stakeholder "we know that…" gets: holder, alternative explanation, what would falsify, verdict (hold / challenge / open). Framing that proceeds past challenge/open must log PROCEED WITH ASSUMPTION in `decisions.md`.

4. **Deep mode when triggered.** If any two escalation conditions in [assets/research-depth.md](assets/research-depth.md) fire, run the research ladder (cheapest sufficient step first). End deep mode with an updated ledger, explicit Unknowns, and a note of steps attempted or waived. Never fabricate quotes, invent survey results, or tag search snippets Observed.

5. **`evidence.md` contract:** what users are trying to accomplish (with tagged evidence) → strongest recurring frictions, ranked → what we believe without evidence (every Assumed claim, honestly) → **assumption ledger** (claim / holder / tag / alternative / falsify / verdict) → bias checks that fired → constraints with sources → unknowns worth resolving, cheapest-first. No personas, no journey maps unless asked.

6. **Refuse pre-solved requests — visibly.** When the request names a solution, decompose it ("An approval queue implies work arriving that someone accepts or rejects. What arrives? Who decides? What happens when they don't?") and frame *that*. Record the original request in `decisions.md` so the reframe is auditable.

7. **Eight-part decomposition, all required:** Actor · Situation · Goal · Friction · Consequence · Current workaround · Desired change · **Desire**. Templates and examples: [assets/sandbox-card.md](assets/sandbox-card.md).

8. **Compose the problem statement from the decomposition.** Form: *<Actor> doing <situation> must <goal>, but <friction>, forcing <workaround/consequence>.* Pair with Desire in context.md.

9. **Sandbox card — constraints as playground.** Fill [assets/sandbox-card.md](assets/sandbox-card.md) before concepting. Storm invents *inside* this card.

10. **Aging / repeat-use aspiration.** One line per sandbox-card.md — feeds flow repeat-use.

11. **Non-goals are half the deliverable.** 3–7 explicit exclusions with reasons.

12. **Define success signals with the problem.** Primary · confirming · guardrails.

13. **Derive product principles** — 2–5 violable rules.

14. **`problem.md` follows [assets/problem-brief.md](assets/problem-brief.md)** — TL;DR → sandbox → aging → diagram → evidence → decomposition → statement → non-goals → principles → signals → open questions.

15. **Diagram the current state, not the aspiration.** Use [assets/diagram-recipes.md](assets/diagram-recipes.md) — actor workflow with ⚡ and/or artifact map.

16. **Diagrams ship in the brief first; FigJam is an offer.** Mermaid in problem.md always; push to FigJam only after go-ahead.

## Before you finish

| Mistake | Fix |
|---|---|
| Invented personas | If evidence doesn't establish who the user is, that's a finding |
| Every claim confident / no Assumed tags | Tag honestly; include denominators on Measured/Reported |
| "Problem: users need an approval queue" | Decompose the pre-solved request; frame the underlying problem |
| Metric-free framing | Name primary, confirming, and guardrail signals |
| Pain without Desire | One line: what they want to feel or become when it works |
| Storm without sandbox | Fill the sandbox card before concepting |
| No aging line | What must feel right on the 100th use |
| Research theater (fake quotes, undated "users say") | Provenance or delete; triggered deep research with sources is fine |
| Thin evidence → skip to concept | Escalate per research-depth.md; deepen frame |
| Ledger without alternatives / falsifiers | Fill for top 3 load-bearing claims before Gate 1 |
| Aspirational diagrams at framing time | Diagram today, with ⚡ frictions and workarounds |
| Form-shaped briefs | Write a cold-readable document with an argument |

**Handoff:** Gate 1, then `design-model` when data/IA is uncertain, else `design-concept`.
