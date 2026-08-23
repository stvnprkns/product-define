# define

Agent skills for product design *before* UI polish.

You give the agent a product problem. It runs a process: frame the problem, model the product truth, explore real solution mechanisms, pick one, design the flows, pressure-test the riskiest bet, then review. Output lives in a shared `design/` folder so the work survives across chat turns.

If your agent usually opens Figma or HTML on the first message, this suite is the missing steps.

## Install

```bash
npx skills add stvnprkns/define
```

You can also open the `skills/` folders in this repo, or install the root `*.skill` zips.

## How to use it

Say **`define`** and describe the work.

The orchestrator picks a route based on how uncertain the problem is, tells you the plan, and waits for a go-ahead. Then it runs only the phases that help. Skips are allowed if it says why.

Need one phase only? Call it by name (`define-frame`, `define-concept`, …).

## The seven skills

| Skill | Job |
|---|---|
| [`define`](skills/define/SKILL.md) | Chooses the route, enforces gates, keeps the design record |
| [`define-frame`](skills/define-frame/SKILL.md) | Writes the problem brief from evidence (pain + Desire, constraints, success signals) |
| [`define-model`](skills/define-model/SKILL.md) | Defines objects, states, and what data the UI can honestly show |
| [`define-concept`](skills/define-concept/SKILL.md) | Generates many solution mechanisms, shows them visually, helps you cut to one |
| [`define-flow`](skills/define-flow/SKILL.md) | Specs the task flows including empty, error, and interruption |
| [`define-validate`](skills/define-validate/SKILL.md) | Tests the assumption most likely to kill the idea |
| [`define-review`](skills/define-review/SKILL.md) | Critiques at the right layer, or QA-gates ship (SHIP / DEBT / HOLD) |

Visual craft (color, type, motion) is not in this repo. Plug in your craft skill or design system after a concept is chosen.

## What shows up in the repo

A `design/` directory, typically:

- `problem.md` — what we’re solving and how we’ll know it worked  
- `model.md` — nouns, data, permissions  
- `concepts.md` + `sweep/` — options explored and the selected direction  
- `flows.md` — how people move through the product  
- `validation.md` / review notes when those phases run  
- `context.md` — living summary every phase reads and updates  

Gates stop you from polishing or coding past an unresolved problem, unknown data, or unchosen interaction model. See [`gates.md`](skills/define/assets/gates.md).

## Concepting without a 20-minute wireframe tax

`define-concept` shows **every** option early as simple idea cards (**Browse**), you cut, then builds more detail on the few that remain (**Compare**), then one full grayscale mock for the winner (**Commit**). Same six layout types the whole way; fidelity rises as the pile shrinks.

## Example routes

| Situation | What runs |
|---|---|
| Small, clear change | patterns → flow → craft → QA review |
| New feature, some unknowns | frame → model (if needed) → concept → flow → craft → QA |
| Fuzzy or high-stakes problem | frame → model → concept → flow → validate → craft → QA |

## Conflict order

When two skills disagree: evidence → model → chosen mechanism → flows → craft. Craft never overrides a failed gate.

## More

[VISION.md](VISION.md) · [AGENTS.md](AGENTS.md) (for editing this suite)
