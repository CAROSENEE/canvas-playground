# 🕷️ Spider Hunt: The Weaver's Ground

A top-down survival game where you play a spider in a dark forest. Spin webs, trap moths and beetles, and eat them before your hunger runs out.

Built with plain HTML, CSS and JavaScript on a single `<canvas>`. No libraries, no build step.

## How to Run

1. Open `index.html` in any modern browser, or
2. In VS Code, right-click `index.html` and choose **Open with Live Server**.

## Controls

| Input | Action |
|---|---|
| Mouse | Move the spider |
| `Q` | **Snare**: spin a web (costs 30 silk) |
| `Space` | **Dash**: quick burst of speed (3s cooldown) |
| `R` | **Reel**: pull the nearest prey to you (needs combo x3) |
| `Ctrl` + Scroll | Zoom in / out |
| Middle-click drag | Pan the camera |
| `P` | Pause |

The on-screen buttons (Snare, Dash, Reel, zoom, pause, restart, volume) work too.

## How to Play

- Place webs where prey will fly. Prey that touches a web gets stuck.
- Move onto stuck prey to eat it. Prey struggles free after a few seconds and damages the web.
- Moths (pink) give more points and hunger than beetles (orange).
- Eating quickly builds a **combo**, which multiplies your score. At x3 you unlock **Reel**.
- Silk refills slowly over time. Hunger drains constantly and gets faster each hunt.
- Clear all **8 hunts** to win. If hunger hits zero, the game is over.

Best score is saved in your browser (`localStorage`).

## Tweak It

All values are in `index.html`:

| What | Where |
|---|---|
| Catches needed per hunt | `target()` |
| Web cost, size, lifetime | `snare()` |
| Dash speed and cooldown | `dash()` and `update()` |
| Hunger drain rate | top of `update()` |
| Hunt names | `NAMES` array |

## Tech

HTML5 Canvas · Vanilla JavaScript · Web Audio API (sound effects)
