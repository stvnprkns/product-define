# Wireframe Recipe — progressive fidelity

The sweep fails when an agent invents freeform geometry N times, or when it spends full kit fidelity on a wall of options that will mostly die. **Expressions choose an archetype and fill its slots; they never invent layout.** Fidelity rises only as the set shrinks.

## 0. Fidelity ladder (default)

See everything early. Spend detail only when fewer options remain.

| Stage | How many | What you see | Purpose |
|---|---|---|---|
| **Browse** | All expressions (~12–18) | Idea cards: ID, premise, `varies`, archetype as **labeled regions** + 1–2 real nouns per slot — no row chrome, no 8-row tables | Assess breadth → **Cut 1** |
| **Compare** | Cut 1 keepers (3–5) | Structure frames: real kit chrome, abbreviated content (≈3 rows / short stacks) | Assess remaining → **Cut 2** |
| **Commit** | Winner (+ optional rival) (1–2) | Full composed grayscale kit (this file §2–4) | Subtract, briefs, handoff to flow |

Same six ink steps and six archetypes at every stage. What changes is **how much chrome and content** you draw — not whether you invent geometry.

```
specs → Browse board (all) → Cut 1 → Compare board (survivors) → Cut 2 → Commit (winner) → subtract + Care
```

Propose-then-act: end the turn after **Browse + proposed Cut 1**. After go-ahead, build **Compare**. After Cut 2 go-ahead, **Commit** the winner. Never jump to Commit for the full set.

## 1. The archetype library

Six layouts cover nearly every product surface. Each is a fixed region structure with named slots.

| ID | Archetype | Regions (fixed) | Best for |
|---|---|---|---|
| `LIST` | List + detail | topbar / left list (30%) / detail pane | queues, inboxes, triage |
| `TABLE` | Table-centric | topbar / toolbar / full-width table / footer | dense records, bulk work |
| `DOC` | Single column | topbar / centered column (~680) of stacked blocks | forms, briefs, review docs |
| `WIZ` | Wizard | topbar+steps / centered column / footer nav | linear multi-step flows |
| `CANVAS` | Canvas + inspector | topbar / main work surface / right inspector (320) | spatial or in-context editing |
| `OVERLAY` | Context + overlay | dimmed base screen / centered panel or right drawer | interruptions, quick actions atop existing work |

Slot grammar inside regions: `heading`, `label`, `field`, `button`, `table(cols, rows)`, `list(n)`, `block(h)`, `chip-row`, `note`. An expression spec is one line:

```
A3 · TABLE · "Anomalies as a filterable worklist" · toolbar:[chip-row, button "Resolve all"], table(Merchant|Δ|Evidence|Action, 8), footer:count
```

Write all spec lines FIRST (~12–18 default), then **Browse** them as a visual wall. Specs without Browse fail the human's need to *see* options; Browse without specs drifts into freeform geometry.

## 1b. Browse card (cheapest visible option)

One card per expression. Regions are labeled boxes — slot name + a crumb of real content from `model.md`. **Forbidden at Browse:** full table bodies, list-row anatomy, primary/ghost button pairs, 8-row density. That belongs to Compare/Commit.

```html
<div class="wf browse">
  <div class="meta">
    <div class="id">A3 · TABLE</div>
    <div class="premise">Anomalies as a filterable worklist</div>
    <div class="varies">varies: dedicated surface, bulk-first</div>
  </div>
  <div class="body browse-body">
    <div class="region">topbar · Anomalies</div>
    <div class="region">toolbar · chips + Resolve all</div>
    <div class="region grow">table · Merchant | Δ | Evidence | Action
      <span class="crumb">e.g. Whole Latte Love — Downtown · $3,408</span>
    </div>
    <div class="region">footer · open count</div>
  </div>
</div>
```

Browse CSS add-on (same ink tokens as §4):

```css
.browse-body { display: flex; flex-direction: column; gap: 4px; padding: 8px; }
.browse-body .region {
  border: 1px dashed var(--line); background: var(--fill);
  padding: 8px 10px; font-size: 11px; color: var(--mute);
}
.browse-body .region.grow { flex: 1; min-height: 72px; }
.browse-body .crumb { display: block; margin-top: 6px; color: var(--ink); font-size: 12px; }
.browse .split { display: flex; flex: 1; gap: 4px; min-height: 0; }
.browse .split .region { flex: 1; }
```

LIST / CANVAS / OVERLAY: use `.split` for side-by-side regions. Still labels + crumbs only.

`design/sweep/board.html` at Browse = grid of these cards for **every** expression, grouped by mechanism.

## 2. Composed grayscale law (Compare + Commit)


### Ink steps — nothing else

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F4F4F4` | Board / page behind frames |
| `--surface` | `#FFFFFF` | Frame background |
| `--fill` | `#F2F2F2` | Chrome bars, selected rows, nested fills |
| `--line` | `#D9D9D9` | 1px structure strokes |
| `--ink` | `#1A1A1A` | Primary text, primary buttons |
| `--mute` | `#5C5C5C` | Secondary text (never `#8C8C8C` — fails small-text contrast on white) |

Selected / hover = `--fill` plus a 1px `--ink` or `--line` edge. Never a hue. No brand color, craft tokens, photos, illustration, shadows, or gradients.

### Type

Inter or system-ui sans.

| Role | Size / weight | Color |
|---|---|---|
| Frame ID | 12 / medium | `--mute` |
| Premise | 15 / semibold | `--ink` |
| Section | 13 / medium | `--ink` |
| Body | 12 / regular | `--ink` |
| Meta | 11 / regular | `--mute` |

Real labels from `model.md`'s noun table. Truncate at 1 line in tables/lists, 2 in titles. Lorem ipsum voids the frame.

### Space

Scale: `4 / 8 / 12 / 16 / 24`. Intra-group gap `8`, inter-group `16+`. One alignment edge per region.

### Shape

- Frame and structural regions: **0** radius.
- Buttons, fields, chips, nested cards: **4px** radius. Concentric: outer = inner + padding.
- Structure: 1px `--line` only. No shadows.

### Chrome anatomy (kit primitives — compose these, do not freeform boxes)

| Primitive | Spec |
|---|---|
| Topbar | Height ~48px; title left; 1–2 actions right |
| Toolbar | Chips / filters; gap 8; padding 8–12 |
| List row | Height ~40px; 16px mark + primary/secondary stack + trailing meta |
| Table | Header row (13/medium mute); 8 real-shaped body rows; numeric columns right-aligned |
| Selected row | `--fill` background + 1px `--ink` leading edge or full-row `--line` |
| Primary button | `--ink` fill, white type (`#FFFFFF`), 4px radius |
| Ghost button | `--line` border, `--ink` type, transparent fill |
| Field | 1px `--line`, label above (11/mute), value 12/ink |
| Chip | `--fill` fill, 4px radius, 11/ink |
| Icon mark | 16×16 square or simple geometric mark at `--ink` only — one weight, never colorful icon sets |

### Density

Root frame: **1440×900** (or the product's real viewport). List pane ~30%. Inspector **320**.

| Stage | Content volume |
|---|---|
| Browse | Labels + 1 crumb per slot |
| Compare | Real kit chrome; **≈3 rows** or short stacks; one selected state if it matters |
| Commit | Full realistic volume: long names, missing-field rows, real-length amounts |

Empty placeholder stacks fail Compare and Commit.

Every frame is titled `<ID> · <premise>` in the meta strip, plus a one-line `varies: <what this expression changes>` note under it.

## 3. Figma path (figma-use / figma-create-new-file)

Load the figma plugin skills first; then these rules on top:

1. **Auto-layout is law.** The root frame contains 2–3 region frames; every region is an auto-layout stack (vertical default; `TABLE` rows horizontal). Children get `layoutSizingHorizontal: FILL`. Never absolutely position a content node — overlap becomes structurally impossible.
2. **Build a kit page once, instance it.** Page 0 = `_kit`: one component per primitive above (topbar, toolbar, list-row, table-header, table-row, btn-primary, btn-ghost, field, chip, icon-mark). Survivor frames are compositions of instances with text overrides.
3. **Tile deterministically.** On each mechanism page, expression frames sit at `x = (i % 3) * 1540`, `y = floor(i / 3) * 1000`. Never eyeball positions.
4. **Batch by frame, verify by page.** One `use_figma` execution per frame. After each page, check: no node exceeds its parent bounds, no text wraps past its truncate rule, only the six ink steps appear. Fix before the next page.
5. **Two strikes → simplify.** If a construct errors twice, drop to fewer regions or plain stacked kit blocks. A dumber frame that exists beats an elegant one that doesn't.
6. **Summary page last:** the mechanism map plus links; name the file `Sweep — <problem short-name>`.

## 4. No-Figma fallback: the HTML sweep board

One `design/sweep/board.html` per stage (or one file with `## Browse` / `## Compare` / `## Commit` sections). Reuse the verified kit CSS from below; add Browse rules from §1b.

| Stage | Board contents |
|---|---|
| Browse | All expressions as idea cards (§1b) |
| Compare | Cut 1 keepers with kit chrome, abbreviated rows (§2–4) |
| Commit | Winner (+ optional rival) at full density |

`full render` (Commit fidelity on every expression) only when the human asks.

```html
<style>
  :root {
    --bg: #F4F4F4; --surface: #FFFFFF; --fill: #F2F2F2;
    --line: #D9D9D9; --ink: #1A1A1A; --mute: #5C5C5C;
  }
  * { box-sizing: border-box; }
  body { font-family: Inter, system-ui, sans-serif; background: var(--bg); margin: 24px; color: var(--ink); }
  .board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  h2.mech { grid-column: 1 / -1; font-size: 13px; font-weight: 500; margin: 16px 0 0; color: var(--mute); }
  .wf { background: var(--surface); border: 1px solid var(--line); border-radius: 0; aspect-ratio: 16/10; display: flex; flex-direction: column; overflow: hidden; }
  .wf .meta { padding: 10px 12px; border-bottom: 1px solid var(--line); }
  .wf .meta .id { font-size: 12px; font-weight: 500; color: var(--mute); }
  .wf .meta .premise { font-size: 15px; font-weight: 600; color: var(--ink); margin-top: 2px; }
  .wf .meta .varies { font-size: 11px; color: var(--mute); margin-top: 4px; }
  .wf .body { flex: 1; display: flex; flex-direction: column; min-height: 0; }
  .topbar { height: 48px; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; border-bottom: 1px solid var(--line); background: var(--surface); }
  .topbar .title { font-size: 13px; font-weight: 500; }
  .toolbar { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-bottom: 1px solid var(--line); }
  .side { width: 30%; background: var(--fill); border-right: 1px solid var(--line); padding: 8px; display: flex; flex-direction: column; gap: 4px; overflow: hidden; }
  .main { flex: 1; display: flex; flex-direction: column; min-width: 0; min-height: 0; }
  .split { display: flex; flex: 1; min-height: 0; }
  .row { display: flex; align-items: center; gap: 8px; height: 40px; padding: 0 12px; border-bottom: 1px solid var(--line); }
  .row.selected { background: var(--fill); box-shadow: inset 2px 0 0 var(--ink); }
  .row .mark { width: 16px; height: 16px; background: var(--ink); border-radius: 2px; flex-shrink: 0; }
  .row .stack { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
  .row .primary { font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .row .secondary { font-size: 11px; color: var(--mute); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .row .meta-r { font-size: 11px; color: var(--mute); flex-shrink: 0; }
  .th { display: flex; gap: 8px; padding: 8px 12px; border-bottom: 1px solid var(--line); font-size: 11px; font-weight: 500; color: var(--mute); }
  .th span, .td span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .th .num, .td .num { text-align: right; flex: 0.6; }
  .td { display: flex; gap: 8px; align-items: center; height: 40px; padding: 0 12px; border-bottom: 1px solid var(--line); font-size: 12px; }
  .td.selected { background: var(--fill); box-shadow: inset 2px 0 0 var(--ink); }
  .btn { background: var(--ink); color: #FFFFFF; border: none; border-radius: 4px; font-size: 12px; font-weight: 500; padding: 6px 12px; width: max-content; }
  .btn-ghost { background: transparent; color: var(--ink); border: 1px solid var(--line); border-radius: 4px; font-size: 12px; padding: 6px 12px; width: max-content; }
  .chip { background: var(--fill); border-radius: 4px; font-size: 11px; padding: 4px 8px; color: var(--ink); }
  .field { display: flex; flex-direction: column; gap: 4px; }
  .field label { font-size: 11px; color: var(--mute); }
  .field .control { border: 1px solid var(--line); border-radius: 4px; padding: 8px 10px; font-size: 12px; }
  .footer { height: 40px; display: flex; align-items: center; padding: 0 12px; border-top: 1px solid var(--line); font-size: 11px; color: var(--mute); }
  .doc { max-width: 680px; margin: 0 auto; padding: 16px; display: flex; flex-direction: column; gap: 12px; width: 100%; }
  .inspector { width: 320px; border-left: 1px solid var(--line); background: var(--surface); padding: 12px; display: flex; flex-direction: column; gap: 12px; }
  .canvas-area { flex: 1; background: var(--fill); border: 1px dashed var(--line); margin: 12px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: var(--mute); }
  .overlay-base { flex: 1; background: var(--fill); opacity: 0.55; position: relative; }
  .drawer { position: absolute; right: 0; top: 0; bottom: 0; width: 360px; background: var(--surface); border-left: 1px solid var(--line); padding: 16px; display: flex; flex-direction: column; gap: 12px; }
</style>
```

### Good vs soup — same `A3 · TABLE` spec

**Soup (reject):** empty 14px gray blocks, 9px type, `#8C8C8C` meta, no header row, no selected state, one generic "button" border.

**Composed (copy this pattern):**

```html
<div class="wf">
  <div class="meta">
    <div class="id">A3 · TABLE</div>
    <div class="premise">Anomalies as a filterable worklist</div>
    <div class="varies">varies: dedicated surface, bulk-first</div>
  </div>
  <div class="body">
    <div class="topbar">
      <div class="title">Anomalies</div>
      <button class="btn-ghost">Export</button>
    </div>
    <div class="toolbar">
      <span class="chip">Open · 24</span>
      <span class="chip">High Δ</span>
      <button class="btn">Resolve all</button>
    </div>
    <div class="th">
      <span>Merchant</span><span class="num">Δ</span><span>Evidence</span><span>Action</span>
    </div>
    <div class="td selected">
      <span>Whole Latte Love — Downtown</span><span class="num">$3,408</span><span>3 docs</span><span>Review</span>
    </div>
    <div class="td"><span>Gelt Provisions LLC</span><span class="num">$5,104</span><span>Missing PO</span><span>Review</span></div>
    <div class="td"><span>Northwind Supplies</span><span class="num">$812</span><span>1 doc</span><span>Review</span></div>
    <div class="td"><span>Acme Industrial Parts Co.</span><span class="num">$1,290</span><span>—</span><span>Review</span></div>
    <div class="td"><span>Blue Harbor Catering</span><span class="num">$640</span><span>2 docs</span><span>Review</span></div>
    <div class="td"><span>Summit Field Services</span><span class="num">$2,155</span><span>Dup invoice</span><span>Review</span></div>
    <div class="td"><span>Cedar & Stone Studio</span><span class="num">$418</span><span>1 doc</span><span>Review</span></div>
    <div class="td"><span>Orbit Fleet Maintenance</span><span class="num">$9,020</span><span>4 docs</span><span>Review</span></div>
    <div class="footer">24 open · sorted by Δ desc</div>
  </div>
</div>
```

Build LIST / DOC / WIZ / CANVAS / OVERLAY the same way: compose kit classes into the archetype regions. Group under `h2.mech` headers. Put a summary section at the top. `concepts.md` links whichever renderer ran.

## 5. Sequence (either path)

```
specs (~12–18) → Browse board (all) + proposed Cut 1 → [go-ahead]
  → Compare board (3–5) → Cut 2 → [go-ahead] → Commit (1–2) → briefs → subtract
```

Figma: same ladder — Browse = region frames with labels; Compare = kit instances, abbreviated; Commit = full kit on winner.

## Before you finish

| Mistake | Fix |
|---|---|
| Full kit on every expression | Browse for all; Compare for survivors; Commit for winner |
| Text-only specs with no visual wall | Browse board for every expression |
| Browse with 8-row tables / full chrome | Labeled regions + crumbs only |
| Box-only rows / empty `#F2F2F2` stacks at Compare+ | Compose list-row or table-row with real text |
| 9px type or `#8C8C8C` mute | Use the type table; mute is `#5C5C5C` |
| Mixed radii or craft shadows | Frame 0; controls 4px; no shadows |
| Color, brand tokens, or photo fills | Six ink steps only |
| No header row / no selected state at Compare+ | Use `.th`, `.selected`, `.btn` / `.btn-ghost` |
| Freeform absolute positions | Archetype regions + auto-layout / flex kit only |
| Spec-and-render in one turn | Stop after Browse + Cut 1 proposal until go-ahead |
| Commit before Cut 2 | Compare first; Commit only after selection |
