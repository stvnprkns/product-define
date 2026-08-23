# Interruption — persist, return, decay

Professional sessions are interrupted. A flow without resumption is a demo. This deepens the resumption section in [state-ledger.md](state-ledger.md).

## Three answers (required per core flow)

```markdown
### Resumption
- **Persists if left halfway:** <draft fields, selection, locks, filters, scroll/row focus>
- **Return view:** <exact screen + what is highlighted / pending>
- **Decays (what / when):** <holds, locks, drafts, temp auth — TTL or event>
```

## Patterns

| Situation | Persist | Return | Decay |
|---|---|---|---|
| Mid-form edit | Field values + validation state | Same form, focus last field | Draft TTL (e.g. 7 days) or keep forever |
| Mid-queue triage | Selected row + filters + sort | Same queue, selection restored | Selection may clear; filters persist per user |
| Destructive confirm open | Nothing committed | Back to pre-confirm state | Confirm UI dismisses; no partial destroy |
| Waiting on external sync | Local intent ("retry when fresh") | Banner: stale as of T; CTA retry | Stale badge until refresh |
| Concurrent edit | Last-write policy named | Conflict UI or merge | Locks expire (name duration) |

## Rules

1. Name **what** decays and **when** — "maybe later" is not a design.
2. Return view is a concrete UI state, not "they come back".
3. Align with `model.md` reversibility and locks.
4. First-use ceremony must not re-run on every return (repeat-use path).

## Before you finish

| Mistake | Fix |
|---|---|
| No resumption section | Fill persists / return / decay |
| Persist everything forever | Name decay |
| Return = home dashboard | Land where work left off when safe |
| Lock with no expiry | Duration + who can break |
