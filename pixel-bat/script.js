// Draws a 6-frame pixel-art bat sprite sheet on a canvas
// and hands it to CSS as a background image.
const FRAMES = 6, SIZE = 32;

const canvas = document.createElement("canvas");
canvas.width = FRAMES * SIZE;
canvas.height = SIZE;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#1a1a1a";

const px = (x, y) => ctx.fillRect(Math.round(x), Math.round(y), 1, 1);

function drawBat(frame) {
  const ox = frame * SIZE;
  const cx = ox + 16;
  const lift = 8 * Math.cos((frame / FRAMES) * Math.PI * 2); // + up, - down

  // wings (mirrored left / right)
  for (let d = 2; d <= 14; d++) {
    const top = 15 - lift * (d / 14) - Math.sin((d / 14) * Math.PI) * 2;
    const scallop = d % 4 === 0 ? 3 : 0;
    const bottom = top + Math.max(2, 7 - d * 0.35) + scallop;
    for (let y = Math.round(top); y <= Math.round(bottom); y++) {
      px(cx - d, y);
      px(cx + d - 1, y);
    }
  }

  // body
  for (let y = 13; y <= 21; y++) {
    const w = y < 15 ? 1 : y < 19 ? 2 : 1;
    for (let x = -w; x < w; x++) px(cx + x, y);
  }
  // head + ears
  for (let x = -2; x < 2; x++) px(cx + x, 12);
  px(cx - 3, 10); px(cx - 3, 11); px(cx - 2, 11);
  px(cx + 2, 10); px(cx + 2, 11); px(cx + 1, 11);
  // feet
  px(cx - 1, 22); px(cx, 22);
}

for (let i = 0; i < FRAMES; i++) drawBat(i);

document.documentElement.style.setProperty("--sprite", `url(${canvas.toDataURL()})`);
