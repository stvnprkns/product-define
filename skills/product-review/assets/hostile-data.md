# Hostile data — QA dataset checklist

Demo data signs off products that fail in production. Run QA against this list (also summarized in [review-format.md](review-format.md)).

## Content hostility

- [ ] Longest real names / merchant strings from production shape
- [ ] Missing fields and nulls where model.md says data can be absent
- [ ] Mixed good + bad rows (not a tidy happy sample)
- [ ] Translated-length strings (e.g. German) and RTL if shipped

## Volume hostility

- [ ] **Zero rows** — empty teaches the mechanism
- [ ] **~10,000 rows** (or realistic upper bound) — scroll, virtualize, bulk
- [ ] Partial pages / slow pagination if applicable

## Time and concurrency

- [ ] Slow network / delayed responses
- [ ] Concurrent edits on the same object (two users)
- [ ] Stale data as of last sync (match model freshness)

## Input modality

- [ ] Full keyboard pass on every core flow
- [ ] Focus order sane; state changes announced
- [ ] Nothing essential pointer-only
- [ ] Visible focus; hit targets usable

## Record in the QA report

```markdown
**Hostile data used:** long names · 0 rows · 10k rows · missing · concurrency · slow · i18n · keyboard
```

Mark any item **Not run** with reason — never imply coverage you did not execute.

## Before you finish

| Mistake | Fix |
|---|---|
| Seeded demo-only signoff | Re-run hostile list |
| Skipped empty / 10k | Both are required for list/table surfaces |
| Mouse-only QA | Keyboard pass |
| Silent skip | "Not run: …" in the report |
