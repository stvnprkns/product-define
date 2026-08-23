# Instruments — cheapest test for the risk

Prototype the **riskiest assumption**, not the prettiest screen. Name the assumption in writing first, then pick one instrument.

## Assumption → instrument

| Question shape | Instrument | Typical time |
|---|---|---|
| Terminology / labels | Labeled screenshot or copy doc | ~30 min |
| Data availability | Code spike against real repository (no UI) | hours |
| Classification reliability | Run model on ~50 real records; count | hours–day |
| Volume overwhelm | Static mock with real-volume data | hours |
| Time savings | Clickable path, real content, stopwatch | day |
| Interaction feel | Coded fragment; craft fidelity on that fragment only | day+ |
| AI trust | Wizard-of-oz (human plays the model) | day |
| Live-surface performance | Holdback experiment; success signals as readout | weeks |

## Band-aware plans

| Concept band | Validation bar |
|---|---|
| Obvious / Credible | Instrument matching the named risk |
| Stretch / Wild | Explicit plan; happy-path clickthrough alone is incomplete |

## Rules

1. Write the riskiest assumption at the top of `validation.md` before building.
2. Promote the selected grayscale frame when the instrument is a mock/clickable — don't redraw.
3. Declare **disposable vs seed code** upfront.
4. Real content only: long names, missing fields, production-shaped volume.
5. One flow deep beats five screens wide.

## Before you finish

| Mistake | Fix |
|---|---|
| Building the whole page | Match instrument to risk |
| Testing the pretty | Attack the named sentence |
| Demo data | Production-shaped content |
| Stretch/Wild + happy path only | Raise the instrument |
