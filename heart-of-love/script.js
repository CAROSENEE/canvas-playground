const stage = document.getElementById("stage");
const grid  = document.getElementById("grid");
const text  = document.getElementById("text");
const hand  = document.getElementById("hand");

const COLS = 19, ROWS = 17, TILE = 18;
const GAP_X = (342 - TILE) / (COLS - 1);
const GAP_Y = (306 - TILE) / (ROWS - 1);

// Is this grid cell inside the classic heart curve?
function insideHeart(c, r) {
  const x = ((c - (COLS - 1) / 2) / ((COLS - 1) / 2)) * 1.2;
  const y = 1.3 - (r / (ROWS - 1)) * 2.4;
  return Math.pow(x * x + y * y - 1, 3) - x * x * Math.pow(y, 3) <= 0;
}

// Build the list of tiles (sorted so it grows from the hand side)
const cells = [];
for (let r = 0; r < ROWS; r++)
  for (let c = 0; c < COLS; c++)
    if (insideHeart(c, r)) cells.push({ c, r });

cells.sort((a, b) => (a.c + Math.random() * 3) - (b.c + Math.random() * 3));

cells.forEach(({ c, r }) => {
  const t = document.createElement("div");
  t.className = "tile";
  t.style.left = c * GAP_X + "px";
  t.style.top  = r * GAP_Y + "px";
  grid.appendChild(t);
});

const tiles = [...grid.children];

function play() {
  text.classList.remove("show");
  tiles.forEach(t => (t.style.opacity = 0));

  // fly every tile from the character's hand to its place
  const h = hand.getBoundingClientRect();
  const hx = h.left + h.width / 2, hy = h.top + h.height / 2;

  tiles.forEach((t, i) => {
    const b = t.getBoundingClientRect();
    const dx = hx - (b.left + b.width / 2);
    const dy = hy - (b.top + b.height / 2);
    t.animate(
      [
        { transform: `translate(${dx}px, ${dy}px) scale(.2)`, opacity: 0 },
        { opacity: 1, offset: 0.2 },
        { transform: "translate(0,0) scale(1.15)", opacity: 1, offset: 0.85 },
        { transform: "translate(0,0) scale(1)", opacity: 1 }
      ],
      { duration: 700, delay: i * 22, easing: "ease-out", fill: "forwards" }
    );
  });

  const total = tiles.length * 22 + 700;
  clearTimeout(play.timer);
  play.timer = setTimeout(() => text.classList.add("show"), total);
  play.loop  = setTimeout(play, total + 4000); // auto replay
  play.stop  = () => { clearTimeout(play.timer); clearTimeout(play.loop); };
}

stage.addEventListener("click", () => {
  play.stop && play.stop();
  tiles.forEach(t => t.getAnimations().forEach(a => a.cancel()));
  play();
});

play();
