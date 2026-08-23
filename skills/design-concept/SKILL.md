---
name: design-concept
description: Study patterns then diverge via a 15–20 mechanism storm, shortlist 5–7 mechanisms, ~12–18 expression specs, progressive-fidelity sweep (Browse all → Cut 1 → Compare survivors → Cut 2 → Commit winner), subtract and Care. Use before locking a solution direction, competitive or prior-art analysis, ideation, brainstorming, wireframes, or solution sweeps. Triggers on concepts, explore directions, options, ideation, brainstorm, creative concepts, wild ideas, mechanism storm, wireframes, lo-fi, solution sweep, design briefs, patterns, competitive analysis, prior art.
---

# Design Concept

Study before inventing, then diverge for real. Patterns exist to seed divergence — not to copy, but to know which conventions carry user understanding worth preserving and which persist because everyone copies everyone; the best raw material is often outside the category entirely (claims review owes more to GitHub code review or Stripe reconciliation than to competing estimating tools). Then the divergence itself, where LLMs fail catastrophically: cards, cards-with-sidebar, cards-with-tabs is one idea in three outfits. Concepts are different answers to *how should this problem fundamentally work*. Divergence is cheap here and unaffordable after code exists — so storm wide first, then converge.

Part of the design-process suite. Read `design/problem.md` (Desire, sandbox card, aging) and `model.md`; write `design/patterns.md` and `design/concepts.md`; update context.md's Current concept after selection. Gate 1 must pass first. Low-uncertainty routes may run the patterns pass alone. Full diverge: patterns → storm → shortlist → specs → Browse → Cut 1 → Compare → Cut 2 → Commit → subtract.

## Quick Reference

| Topic | File | Read when |
|---|---|---|
| Pattern sources + labels | [assets/pattern-sources.md](assets/pattern-sources.md) | Before storming |
| Mechanism storm bands | [assets/ideation-ladder.md](assets/ideation-ladder.md) | Diverging mechanisms |
| Pairwise mechanism disagreement | [assets/difference-test.md](assets/difference-test.md) | Shortlist matrix |
| Progressive fidelity ladder | [assets/wireframe-recipe.md](assets/wireframe-recipe.md) | Browse → Compare → Commit |
| Designer handoff cards | [assets/sweep-briefs-template.md](assets/sweep-briefs-template.md) | With wireframes |
| Subtract + Care on winner | [assets/subtract-pass.md](assets/subtract-pass.md) | After cut 2, before flow |
| What Care must protect | [assets/care-criteria.md](assets/care-criteria.md) | Selected brief Care line |

## Core Principles

1. **Four pattern sources** — fill per [assets/pattern-sources.md](assets/pattern-sources.md): Internal · Category · Behavioral · Analogous; each preserve\|question.

2. **Every pattern gets one label + one line:** *preserve* (users already understand this; breaking it taxes them) or *question* (everyone does this because everyone else does; name what it costs). Patterns describe behavior, not pixels — "Stripe shows unreconciled items as an exception queue with running totals" is a pattern; "Stripe uses a left sidebar" is decoration.

3. **`patterns.md` contract:** four source sections (`name — how it works — preserve|question — why`) → **"Raw material for concepting"**: the 3–5 patterns most likely to seed genuinely different mechanisms.

4. **A concept is a mechanism, not a layout.** Each answers: where does the work happen, who initiates, what does the system do versus the user, what does the user see first? A real spread looks like: *review queue* (system finds anomalies, user works exceptions) · *in-place augmentation* (intelligence appears where work already happens) · *continuous assistant* (system builds output in background, surfaces unresolved decisions) · *evidence-first* (start from captured evidence, derive backward) · **Wild example:** the system negotiates with the insurer asynchronously; the user only resolves deadlocks.

5. **Mechanism storm before shortlist.** After patterns, read Desire + sandbox card from `problem.md`, then run the storm in [assets/ideation-ladder.md](assets/ideation-ladder.md): **15–20** one-paragraph mechanisms, each tagged Obvious / Credible / Stretch / Wild. Use at least three storm prompts. Quantity first — do not filter while storming. Invent *inside* the sandbox. Then converge to a **shortlist of 5–7** (three minimum, five default, seven ceiling). Shortlist must keep at least one Obvious (cheapest credible intervention — baseline others must beat on success signals) and at least one Stretch or Wild. Record one-line kill reasons for every storm idea not shortlisted. The shortlist is the output of convergence, not the starting point.

6. **The difference test (shortlist only).** Pairwise user-visible disagreement per [assets/difference-test.md](assets/difference-test.md). Can't name one → merge and diverge again.

7. **Each concept carries its risk** — the assumption it most depends on, one line. This feeds design-validate directly. Stretch/Wild shortlist picks need an explicit validation plan later.

8. **The solution sweep: breadth first, fidelity follows the cuts.** After the shortlist passes the difference test, diverge *within* each mechanism: **2–4 expressions per mechanism**, **~12–18 specs default** (ceiling ~25 when the shortlist is large). Each gets an ID, premise, and one-line kit spec. Then show **every** expression at **Browse** fidelity — labeled regions + real nouns, not full chrome ([assets/wireframe-recipe.md](assets/wireframe-recipe.md) §0–1b). You assess a wall of ideas, cut, refine, assess again as fidelity rises.

   **Never invent layout geometry.** Expressions choose one of six archetypes (LIST, TABLE, DOC, WIZ, CANVAS, OVERLAY) and fill named slots via spec strings.

   **Browse + Cut 1 is the first checkpoint.** Build the Browse board for all expressions, propose Cut 1 (one line per kill), end the turn. Do not Compare or Commit yet.

9. **Three fidelity stages — never full kit on the whole wall by default.**
   - **Browse (all ~12–18):** idea cards — archetype regions, slot labels, 1–2 real nouns. Cut 1 here.
   - **Compare (3–5 keepers):** kit chrome, **≈3 rows** / short stacks. Cut 2 here.
   - **Commit (winner, + optional rival):** full composed grayscale kit — real volume, subtract, Care, handoff.

   Black-and-white only at every stage (six ink steps). No brand color or craft tokens until external craft runs after Commit.

10. **Render per the recipe.** Read [assets/wireframe-recipe.md](assets/wireframe-recipe.md). No Figma: `design/sweep/board.html` — Browse section first, then Compare, then Commit after each go-ahead. Figma: same ladder (region labels → kit instances → full kit on winner). Rendering is transcription of specs at the right stage — not design.

11. **Briefs track survivors.** `design/sweep/briefs.md` from [assets/sweep-briefs-template.md](assets/sweep-briefs-template.md): full cards for Compare/Commit keepers; killed expressions as a one-line quarry table. Patch-only once humans claim Owner/Status.

12. **Two cuts, rising fidelity.** **Cut 1 on the Browse wall** — down to 3–5. **Cut 2 after Compare** — select against problem, **Desire**, principles, success signals. Rejected options stay quarry. Name the **winner's refusals**.

13. **Subtract pass on the winner — before flow.** Follow [assets/subtract-pass.md](assets/subtract-pass.md); write Care from [assets/care-criteria.md](assets/care-criteria.md).

14. **`concepts.md` contract:**
    - **Storm** (15–20, band-tagged) — each: name, mechanism paragraph, first-run two sentences, risk, band, pattern seeds
    - **Shortlist** (5–7) — difference matrix; kill reasons for storm ideas not kept
    - Per shortlisted mechanism — name, one-paragraph mechanism, first-run experience in two sentences, biggest risk, what it borrows from patterns.md, band
    - Sweep index (all specs) → Browse board link → Cut 1 → Compare board link → Cut 2 → Commit link → `briefs.md` → subtract → winner's refusals → quarry

## Before you finish

| Mistake | Fix |
|---|---|
| Layout variations as concepts | Rerun with the mechanism question; ban "card", "tab", "sidebar" from concept descriptions |
| Feature-matrix competitive analysis | Patterns describe behavior, not who-has-what checkboxes |
| Category-only vision | Use all four sources; analogous is required raw material |
| Skipped storm / jumped to 5 ideas | Write 15–20 band-tagged mechanisms first — see ideation-ladder |
| All Credible, no Wild | Force 3–4 Wild before converging |
| Wild as straw men | Full mechanism + risk; exploration-only only if a principle blocks it |
| Converged before 15 ideas | Finish the storm count, then shortlist |
| Shortlist missing Obvious or Stretch/Wild | Keep cheapest baseline and at least one stretch/wild |
| Storm ignoring sandbox / Desire | Read problem.md sandbox card and Desire before storming |
| Cut 2 then straight to flow | Run subtract pass; name one primary action and Care line |
| Winner's refusals unnamed | List what the selected concept refuses |
| Rigged lineup of straw men | Every shortlisted concept must be shippable by a competent team |
| Unrecorded convergence | Storm kills, cut 1, and cut 2 in writing with rationale |
| Full kit on every expression | Browse → Compare → Commit ladder — see wireframe-recipe |
| Text-only specs, no Browse wall | Build Browse for every expression |
| Browse with full table chrome | Regions + labels + crumbs only |
| Commit before Cut 2 | Compare survivors first |
| Spec orphans / mechanism drift | Difference test at mechanism and expression levels |
| Skipped go-ahead between stages | Browse+Cut 1, then Compare, then Commit — propose-then-act |
| Freeform geometry | Archetype + slots; if none fit, note it and use DOC |

**Handoff:** after subtract pass + Care line on the selected expression, run `design-flow`.
