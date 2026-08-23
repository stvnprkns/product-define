# The Design Record

One directory, created at engagement start. `context.md` is canonical and compact; everything else is depth. Every define-* skill reads `context.md` before working and updates the relevant file(s) plus `context.md` after.

```
design/
  context.md        # canonical one-page summary (template below) — owned by everyone
  evidence.md       # define-frame: classified evidence
  problem.md        # define-frame: problem definition + non-goals
  model.md          # define-model: objects, states, permissions, data reality
  architecture.md   # define-model: object hierarchy, navigation, disclosure ladder
  patterns.md       # define-concept: pattern landscape
  concepts.md       # define-concept: divergent concepts + selection rationale
  flows.md          # define-flow: task flows, states, edge cases
  sweep/            # define-concept: board.html (Browse → Compare → Commit sections) + briefs.md
  validation.md     # define-validate: what was tested, findings
  decisions.md      # append-only log: decisions, assumptions accepted at gates, reversals
```

## Ownership map

| File | Owning skill |
|---|---|
| `evidence.md`, `problem.md` | `define-frame` |
| `model.md`, `architecture.md` | `define-model` |
| `patterns.md`, `concepts.md`, `sweep/` | `define-concept` |
| `flows.md` | `define-flow` |
| `validation.md` | `define-validate` (+ findings from `define-review`) |
| `decisions.md`, `context.md` | every skill patches; `define` creates |

## evidence.md contract (define-frame)

```markdown
# Evidence
## What users are trying to accomplish
- [tag] ...

## Strongest frictions (ranked)
- ...

## Believed without evidence (Assumed)
- ...

## Assumption ledger
| Claim | Holder (user/data/us/agent) | Tag | Alternative explanation | What would falsify | Verdict (hold/challenge/open) |
|---|---|---|---|---|---|
| ... | ... | ... | ... | ... | ... |

## Bias checks that fired
- ...

## Constraints (with sources)
- ...

## Unknowns (cheapest-first)
- ...

## Deep research (if triggered)
- Triggers: ...
- Ladder steps attempted / waived: ...
```

See `define-frame` and [research-depth.md](../../define-frame/assets/research-depth.md) for when to escalate and how to pressure-test.

## problem.md essentials (define-frame)

Beyond the cold-readable brief structure in `define-frame`, every `problem.md` must include:

- **Desire** — one line emotional / identity outcome beside the pain
- **Sandbox card** — materials, platform, complexity budget, non-negotiables (playground for concepting)
- **Aging** — 100th-use / year-two aspiration

## context.md template (keep under one page)

```markdown
# Design context
Updated: <date> by <skill>

## User
<one line — who, in their words>

## Job
<one line — what they're trying to accomplish>

## Problem
<the define-frame problem statement, verbatim>

## Desire
<one line — what the actor wants to feel or become when this works>

## Sandbox
- Materials / brand: ...
- Platform / system: ...
- Complexity budget: ...
- Non-negotiables: ...

## Aging
<one line — what must still feel right on the 100th use>

## Evidence (strongest 3–5)
- [Observed] ...
- [Measured] ...
- [Reported] ...

## Unknowns
- ...

## Product principles
- <2–5 rules this design must not violate>

## Success signals
- Primary: <the leading signal that says it's working>
- Confirming: <the lagging metric it should eventually move>
- Guardrails: <1–3 things we refuse to make worse>

## Current concept
<one line naming the selected concept>

## Key decisions
- <decision> — <why> (<date>)

## Open questions
- ...
```

## decisions.md entry format (append-only)

```markdown
- <date> · <skill> · DECISION|ASSUMPTION|REVERSAL
  <what> — <why> — <what would change our mind>
  decided-by: <person/role, when a human made the call> · dissent: <recorded disagreement, if any>
```

## Rules

1. `context.md` over one page = compress it now. Move detail to the phase file it belongs to.
2. Never delete from `decisions.md`; reversals are new entries pointing at the old one.
3. Every claim in `context.md`'s Evidence section carries its classification tag (see `define-frame`).
4. If `design/` already exists, read it fully before adding — the record outlives any single conversation, which is the point.
5. **Patch-only after human touch.** Any file containing human-written fields (Owner, Status, dissent, inline comments) is append/patch territory: agents modify specific cards or sections and preserve human text verbatim, never regenerate the file. Structural rewrites are proposed as diffs for the human to approve.
6. Existing org artifacts (PRD, brief, strategy doc, experiment readouts) get linked and summarized with provenance — `Source: Q3 PRD §4 (owner: <name>)` — never copied wholesale or silently contradicted.
7. The record is review-ready by default: a stakeholder should be able to read `context.md` cold and know what's decided, what's assumed, and what feedback is being asked for.
