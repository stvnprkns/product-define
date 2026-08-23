# Evidence Gates

Gates are run by define at four transitions. A gate is three questions and a verdict — five minutes, not a ceremony.

## Verdicts

- **PASS** — enough confidence to proceed.
- **PROCEED WITH ASSUMPTION** — uncertainty exists but is acceptable; write the assumption to `decisions.md` with *what would change our mind*. This should be the most common verdict.
- **BLOCKED** — downstream design would largely be fiction. Name what's missing and route to the phase that produces it.

## Gate 1 — before product-concept: *Do we understand the problem?*

- Does `problem.md` exist with actor / situation / goal / friction / consequence, and is it a problem, not a feature request in costume?
- Are **Desire**, **sandbox card**, and **aging** present (one line / compact card each)?
- Is at least one load-bearing evidence item Observed, Measured, or Reported (not all Inferred/Assumed)?
- Are non-goals written?
- Is a success signal named — even provisionally — so concepts can be judged against something?
- Does `evidence.md` include an **assumption ledger** for load-bearing claims, with at least one alternative explanation for the top 3 assumptions?
- If deep mode was triggered (see `product-frame` / research-depth): was a research-ladder step attempted, or consciously waived with reason?

BLOCKED looks like: the "problem" is "build an approval queue" and every evidence line is tagged Assumed — or load-bearing claims have no pressure test — or Desire/sandbox are missing so concepting would invent in a vacuum.

## Gate 2 — before craft (design-linear / ramp-* / house system): *Has the interaction model been chosen?*

- Did concepting produce genuinely different hypotheses, and was one selected *with rationale recorded*?
- Was a **mechanism storm** (15–20, band-tagged) recorded in `concepts.md`, **or** was storm skip announced with reason (mechanism already chosen)? Do shortlist kills name what was killed and why?
- Was **Cut 1** recorded after a **Browse** wall (or equivalent visual pass at low fidelity)?
- Are the **winner's refusals** named (what the selected concept will not do)?
- Did a **subtract pass** run on the winner (removed / why / one primary action) with a **Care** line on the selected brief?
- Does the shortlist keep at least one Obvious and at least one Stretch or Wild (unless storm was skipped or explicitly waived)?
- Does `flows.md` cover the happy path plus empty / error / interruption for the core task?
- Do open questions in `context.md` include anything that would change the layout? (If yes: answer it first.)

BLOCKED looks like: "make it high-craft" requested on a screen whose core interaction is still two competing ideas — or concepting jumped straight to five Credible options with no storm — or cut 2 with no subtract pass — or craft requested while Cut 1 never ran on the spec set.

## Gate 3 — before implementation: *Does the required data exist?*

- Has `model.md` verified that every piece of information the UI displays is available, at the freshness the UI implies?
- Are system-claims (confidence scores, "detected", "suggested") backed by a mechanism that actually exists?
- Are irreversible actions identified and their safeguards designed?

BLOCKED looks like: the concept assumes real-time sync status but the repository only exposes a nightly batch — the omniscient-interface failure.

## Gate 4 — before ship: *Did we test the riskiest assumption?*

- Was the riskiest assumption named in `validation.md` — and was it what got tested (not just the prettiest screen)?
- Did evaluation findings route backward and get resolved, or get accepted as recorded assumptions?
- Has product-review (QA mode) run against intent, not just visual polish?
- Are guardrail metrics being watched, and has the responsibility check (accessibility, privacy, misuse, honesty of AI claims) run or been consciously waived in decisions.md?

BLOCKED looks like: validation.md contains a usability test of the happy path while the open question "will estimators trust auto-detected line items?" sits untested.
