# Research depth — when evidence is thin

Default is still local artifact inspection: codebase, PRDs, tickets, telemetry. Deep mode is not a longer performance of the same steps — it is a triggered ladder that stops when an unknown is resolved or becomes falsifiable. Fabricating quotes, inventing survey results, or treating search snippets as Observed is research theater; triggered deep research with provenance is not.

## When to escalate (any two = deep mode)

- Fewer than 2 load-bearing items tagged Observed, Measured, or Reported
- Problem statement clauses depend on Assumed or Inferred tags
- Stakeholder request conflicts with telemetry, codebase behavior, or support data
- New domain with no internal analog in the product

If fewer than two fire, stay in normal frame. Thin evidence that *does* trigger two conditions is a reason to deepen frame — not to skip to concept. When framing completes, Desire and the sandbox card in `problem.md` must still be filled: research that only lists frictions without what the actor wants to become, or without materials/constraints as playground, is incomplete for concepting.

## Deep-research ladder

Cheapest sufficient step first. Stop when a step resolves the unknown or produces a falsifiable open question. Record every step attempted (or consciously waived with reason) in `evidence.md`.

1. **Artifact archaeology** — codebase paths, config, analytics events, support macros, Slack/export snippets, linked with provenance (`Source: path or URL · owner · date`).
2. **Category + analogous scan** — web search / docs for how others solve the *problem shape* (not feature matrices). Tag Reported or Inferred; always include source URL. Never tag Observed.
3. **Workflow reconstruction** — infer today's workflow from artifacts; mark every step's evidence tag; gaps become Unknowns in `context.md`.
4. **Interview / shadow question list** — propose 5–8 questions that would falsify the top assumptions. Do not invent answers.
5. **Micro-spike** — when the unknown is data-shaped ("does field X exist?"), run a repo query or SQL/API check; record the raw result under Measured or Observed.

## Assumption pressure test

For every load-bearing claim and every stakeholder "we know that…", fill the ledger in `evidence.md`:

| Claim | Holder (user/data/us/agent) | Tag | Alternative explanation | What would falsify | Verdict (hold/challenge/open) |

- **Holder** — who believes this: user request, PRD, dashboard, agent inference.
- **Alternative explanation** — one account that would produce the same symptoms if the claim is wrong.
- **What would falsify** — disconfirming evidence you'd expect to see.
- **Verdict** — hold (supported), challenge (weakened), open (needs ladder step 3–5).

When framing proceeds despite challenge/open verdicts, record them in `decisions.md` as PROCEED WITH ASSUMPTION with *what would change our mind*.

## Bias checks (run before writing problem.md)

| Bias | Question |
|---|---|
| Confirmation | Is the PRD only citing evidence that fits the preferred solution? |
| Survivorship | Are happy-path metrics hiding failure modes? |
| Loud minority | Are a handful of tickets driving a problem framed as universal? |
| Authority | Is "the VP said" substituting for Observed/Measured? |
| Automation bias | Is telemetry measuring proxy behavior, not the job? |

Name any bias that fires in `evidence.md` under constraints or unknowns. Do not silently absorb it into a confident problem statement.

## Never

- Fabricate user quotes or invent survey results
- Treat web/search snippets as Observed
- Run a six-week study when tickets and telemetry already name the friction
- Skip the ledger because "everyone already knows"

## Before you finish

| Mistake | Fix |
|---|---|
| Deep mode with no trigger | Stay on local artifacts; announce why deep was skipped |
| Theater depth (fake quotes, undated "users say") | Provenance or delete the claim |
| Ledger missing alternative explanations | Fill alternatives for the top 3 load-bearing claims |
| Thin evidence → jump to concept | Run the ladder or waive with reason; update Gate 1 |
