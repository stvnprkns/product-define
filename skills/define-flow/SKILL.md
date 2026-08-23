---
name: define-flow
description: Define how the selected concept behaves — task flows, every state (empty, loading, partial, error, permission, destructive, undo, concurrency), first-use versus repeat-use, keyboard and narrow-viewport paths, and interruption and resumption. Use after a concept is selected and before craft or code, or when states and edge cases are undefined. Triggers on flows, task flow, user flow, edge cases, states, error states, empty states, interaction model, what happens when.
---

# Define Flow

A concept says how the product fundamentally works; flows say what happens at 2:47pm when the estimator is halfway through, the insurer's data hasn't synced, and the phone rings. Professional software is mostly edge: the happy path is a minority of real sessions, and interruption is the norm. Agent-built software fails here more than anywhere — it ships the demo path.

Part of the define suite. Read `design/concepts.md` (selected), `model.md` (states, permissions, reversibility); write `design/flows.md` using [assets/state-ledger.md](assets/state-ledger.md); update context.md open questions. Gate 2 runs against this file.

## Quick Reference

| Topic | File | Read when |
|---|---|---|
| State ledger + resumption shell | [assets/state-ledger.md](assets/state-ledger.md) | Every core flow |
| Persist / return / decay patterns | [assets/interruption.md](assets/interruption.md) | Resumption section |
| Fix / retry / report + empty + safeguards | [assets/error-policy.md](assets/error-policy.md) | Errors and empty states |

## Core Principles

1. **Map flows as chains:** `entry point → action → system response → next action → completion`.

2. **Mandatory state ledger** — full rows or N/A with reason per [assets/state-ledger.md](assets/state-ledger.md).

3. **Interruption and resumption is its own section** — persists / return view / decay per [assets/interruption.md](assets/interruption.md) (shell in state-ledger.md).

4. **Empty states are onboarding** — teach the mechanism; see [assets/error-policy.md](assets/error-policy.md).

5. **Errors get a policy, not a toast** — fix / retry / report (error-policy.md).

6. **Reversibility from the model, enforced here** — safeguards proportional to risk (error-policy.md).

7. **Output contract — `flows.md`:** per state-ledger.md shape.

## Before you finish

| Mistake | Fix |
|---|---|
| Happy-path-only / "error TBD" | Complete the state ledger or mark N/A with a reason |
| Toast-as-error-strategy | Write a fix / retry / report policy per failure |
| Confirm-dialog reflex | Safeguard proportional to risk; design undo where possible |
| First-use ceremony for forever | Separate first-use from repeat-use; don't tax return users |
| No resumption answer | Own section: persists, return view, decay |

**Handoff:** Gate 2, then craft or `define-validate` when the riskiest assumption is still open.
