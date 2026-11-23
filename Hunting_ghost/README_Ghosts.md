# 👻 Hunting Ghosts: Chain & Jar

A quick arcade game. Ghosts float around the screen, and you have 15 seconds to hook as many as you can with a chain and pull them into your jar.

Built with plain HTML, CSS and JavaScript on a single `<canvas>`. No libraries, no build step. Works on desktop and mobile.

## How to Run

1. Open `index.html` in any modern browser, or
2. In VS Code, right-click `index.html` and choose **Open with Live Server**.

## Controls

| Input | Action |
|---|---|
| Mouse / Touch | Aim the crosshair |
| Click / Tap | Shoot the chain |
| `P` or `Esc` | Pause |
| **II Pause** button | Pause / Resume |

## How to Play

- Move the crosshair near a ghost. A dotted line and a reticle show that it is **locked on**, and the chain will home in on it.
- Click to fire. The chain flies out, hooks the first ghost it touches, then pulls it back into the jar.
- Each ghost gives **+10 points**.
- You can only fire one chain at a time, so wait for it to return.
- The timer starts at **15 seconds** and turns red at 10. When it reaches zero, the game ends.

Best score is saved in your browser (`localStorage`).

## Tweak It

All values are at the top of the script in `index.html`:

| What | Where |
|---|---|
| Round length | `GAME_TIME` |
| Number of ghosts | `GHOSTS` |
| Chain speed (out / back) | `1100` and `1300` in `update()` |
| Lock-on radius | `mouse.r` |
| Points per ghost | `score+=10` |

## Tech

HTML5 Canvas · Vanilla JavaScript · Web Audio API (sound effects)
