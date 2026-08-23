# State ledger — every core flow

Every core task in `flows.md` gets a full ledger or an N/A with reason. Happy-path-only is a demo, not a design.

## Chain first

```text
entry point → action → system response → next action → completion
```

Write so an engineer can implement without asking.

## Ledger rows (mandatory)

| State | Behavior (or N/A + reason) |
|---|---|
| happy path | … |
| empty | … |
| loading | … |
| partial data | … |
| error | … (policy: fix / retry / report — see [error-policy.md](error-policy.md)) |
| permission denied | … |
| destructive + safeguard | … |
| undo | … |
| concurrency | … |
| first-use | … |
| repeat-use | … |
| keyboard path | … |
| focus order & SR announcement | … |
| narrow / mobile | … |
| translated-length / RTL | … |

## Resumption (own section — not a bullet)

For each core flow:

```markdown
### Resumption
- **Persists if left halfway:** …
- **Return view:** …
- **Decays (what / when):** …
```

No resumption answer → demo, not design. Patterns and examples: [interruption.md](interruption.md).

## `flows.md` shape

```markdown
# Flows
## <Core task>
### Chain
…
### State ledger
| State | Behavior / N-A |
…
### Resumption
…

## Cross-flow notes
- Keyboard grammar: …
- Concurrency policy: …

## Open questions
- …
```

## Before you finish

| Mistake | Fix |
|---|---|
| "Error TBD" | Fill ledger or N/A with reason |
| Resumption as a bullet | Own section: persists / return / decay |
| First-use ceremony forever | Separate repeat-use |
| Missing a11y rows | Keyboard + focus/SR are ledger rows |
