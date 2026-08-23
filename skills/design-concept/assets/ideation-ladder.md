# Ideation ladder — mechanism storm

Patterns seed divergence; the storm prevents premature convergence on the first credible idea. Quantity first, then converge. The expression sweep still runs on a shortlist of 5–7 mechanisms — the storm is what earns that shortlist. Render cost stays on survivors (see wireframe-recipe).

Read this after `patterns.md` and Desire + sandbox card from `problem.md`, and before writing difference-tested shortlist concepts. Storm invents *inside* the sandbox toward Desire — not in a vacuum. Full rules live here; `design-concept` links and does not restate the band table.

## Creativity bands

Every storm idea gets exactly one band tag:

| Band | Definition | Target count |
|---|---|---|
| **Obvious** | Formalizes today's workaround or category default | 4–5 |
| **Credible** | Shippable within a quarter; familiar grammar, new application | 5–6 |
| **Stretch** | Requires one bold assumption; different initiation or ownership model | 4–5 |
| **Wild** | Reimagines the job; would feel surprising if it worked; still describable as a mechanism | 3–4 |

**Total storm: 15–20 raw mechanisms** before any filtering.

## Storm format (each idea)

One paragraph mechanism (where work happens, who initiates, system vs user, what is seen first) · first-run in two sentences · biggest risk · band tag · which patterns.md seed it borrows (if any).

**Wild is not a straw man.** Each wild idea still gets the full format. Mark **exploration-only** only when it violates a product principle — never as lazy satire of a serious option.

## Storm prompts

Use at least three across the list while filling bands:

1. Invert initiation — what if the *system* starts every session, not the user?
2. Eliminate the screen — what if this never becomes a destination?
3. Borrow from analogous domain (`patterns.md` § Analogous)
4. Optimize for the worst day (missing data, interruption, hostile volume)
5. Optimize for first run vs repeat run as different products
6. "What if we refused to build UI?" — API, agent, digest, physical artifact
7. Combine two mechanisms into a hybrid (counts as new only if the difference test will pass)

## Converge to shortlist

From the 15–20, pick **5–7** for the difference matrix and expression specs:

- At least one **Obvious** (the cheapest credible intervention — baseline others must beat)
- At least one **Stretch** or **Wild** survives onto the shortlist
- Record kill reasons for every storm idea not shortlisted (one line each)
- Then run the difference test on the shortlist only

Three minimum on shortlist, five default, seven ceiling. The storm happens first; the shortlist is the output of convergence, not the starting point.

## Sequence

```
patterns.md → storm → shortlist → specs (~12–18) → Browse (all) → Cut 1 → Compare (3–5) → Cut 2 → Commit (winner) → subtract + Care
```

## Before you finish

| Mistake | Fix |
|---|---|
| Skipped storm / jumped to 5 ideas | Write 15–20 band-tagged mechanisms first |
| Storm without reading Desire / sandbox | Read problem.md first; invent inside constraints |
| All Credible, no Wild | Force 3–4 Wild before converging |
| Wild as straw men | Full mechanism + risk; only exploration-only if a principle blocks it |
| Converged before 15 ideas | Finish the storm count, then shortlist |
| Shortlist with no Obvious | Keep the cheapest intervention as baseline |
| Shortlist with no Stretch/Wild | Keep at least one; middle of the range is earned, not defaulted |
| No subtract after cut 2 | Remove until one primary action; add Care line |
