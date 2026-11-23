# 👁️ Animated ASCII Eye

An interactive visual experiment. A realistic eye is drawn entirely out of text characters, follows your mouse, then dissolves into sparkles and turns into a beating pink heart.

Built with plain HTML, CSS and JavaScript on a single `<canvas>`. No libraries, no build step.

## How to Run

1. Open `index.html` in any modern browser, or
2. In VS Code, right-click `index.html` and choose **Open with Live Server**.

## Controls

| Input | Action |
|---|---|
| Mouse | The eye looks toward your cursor |
| Click or `Space` | Switch between the eye and the heart |

If you stop moving the mouse for a few seconds, the eye looks around on its own and blinks now and then.

## What Happens

1. The eye slowly opens and the iris and pupil appear.
2. After a few seconds the pupil widens and the iris breaks into twinkling stars.
3. A pink ASCII heart fades in and beats on a black background.
4. It then returns to the eye and the loop repeats.

## How It Works

Each frame, the canvas is split into a grid of cells (160 x 51). For every cell the code computes a brightness and a colour for the eye (or heart) shape. Brightness picks a character from a dark-to-light ramp (`.`, `:`, `+`, `#`, `@` and so on), and the colour tints it.

## Tweak It

| What | Where |
|---|---|
| Eye width, height, iris size | `ew`, `eh`, `ir` in `eyeCell()` |
| Heart size | `s` in `heartCell()` |
| How long each phase lasts | `timer>(mTarget?7:8)` in `frame()` |
| Character density | `CW`, `CH`, `COLS`, `ROWS` at the top |
| Character ramp | `RAMP` |

## Tech

HTML5 Canvas · Vanilla JavaScript · ASCII rendering
