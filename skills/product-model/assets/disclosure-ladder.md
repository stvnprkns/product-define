# Disclosure ladder — where information lives

IA decides *where* facts belong; craft later decides how loud they are. Objects earn destinations; features do not.

## The IA six (order)

1. **Object hierarchy** — nouns ranked by centrality to the job  
2. **Destinations** — which objects get a screen  
3. **Containment** — lives inside vs merely references  
4. **Views** — lenses on the same list (tabs, saved filters), never sibling pages for one table  
5. **Cross-cutting** — search, notifications, activity, settings — once  
6. **Disclosure ladder** — per key object:

| Altitude | Shows | Does not show |
|---|---|---|
| **Row** | Identity + 2–4 job-critical fields | Everything else |
| **Peek** | Enough to decide next action without navigation | Full history / settings |
| **Detail page** | Full object for the job | Rare admin |
| **Contextual menu** | Actions on this object | Navigation chrome |
| **Settings** | Configuration, permissions, irreversible prefs | Daily work |

## Rules

- **One primary home per fact.** Other appearances are references back.
- A verb in the nav ("Review", "Migrate") is usually a **lens** on an object, not a destination.
- Prefer fewer destinations; grow altitude, not page count.

## `architecture.md` contract

```markdown
# Architecture
## Object hierarchy
…

## Nav (tag each: object | lens | cross-cutting)
…

## Containment
…

## Disclosure ladder
| Object | Row | Peek | Detail | Menu | Settings |
…

## Open placement questions
…
```

## Before you finish

| Mistake | Fix |
|---|---|
| Sitemap-first | Nouns first, then nav |
| Page per feature | Lenses on one list |
| Fourteen columns on the row | Demote via ladder |
| Three copies of status | One home; references elsewhere |
