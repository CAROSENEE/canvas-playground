const fill   = document.querySelector(".fill");
const reaper = document.querySelector(".reaper");
const worker = document.querySelector(".worker");
const dayEl  = document.querySelector(".deadline-days .day");

// timer(totalTime in seconds, deadline in days)
function timer(totalTime, deadline) {
  const dayDuration = (totalTime * 1000) / deadline; // ms per "day"
  let actualDay = deadline;

  document.documentElement.style.setProperty("--tick", dayDuration + "ms");
  setProgress(0);
  dayEl.textContent = actualDay;
  worker.classList.remove("panic");

  const id = setInterval(countTime, dayDuration);

  function countTime() {
    actualDay--;
    dayEl.textContent = actualDay;
    setProgress((deadline - actualDay) / deadline);
    if (actualDay <= 2) worker.classList.add("panic");

    if (actualDay === 0) {
      clearInterval(id);
      // pause for a moment, then restart the loop
      setTimeout(() => timer(totalTime, deadline), 2500);
    }
  }
}

function setProgress(p) {
  const pct = p * 100 + "%";
  fill.style.width = pct;
  reaper.style.left = pct;
}

// 7 days, 14 seconds total (2s per day)
timer(14, 7);
