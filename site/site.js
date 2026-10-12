(() => {
  const motionOk = window.matchMedia(
    "(prefers-reduced-motion: no-preference)",
  ).matches;

  const button = document.getElementById("copy-install");
  const code = document.getElementById("install-cmd");
  const status = document.getElementById("copy-status");
  if (button && code) {
    const command = code.textContent.trim();
    const idle = "Copy command";

    function selectCommand() {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }

    function setStatus(text) {
      if (status) status.textContent = text;
    }

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(command);
        button.textContent = idle;
        setStatus("Copied");
      } catch {
        selectCommand();
        button.textContent = idle;
        setStatus("Select the command");
      }
      window.setTimeout(() => {
        setStatus("");
      }, 1600);
    });
  }

  if (motionOk) {
    const boards = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.16 },
    );
    boards.forEach((board) => io.observe(board));
  } else {
    document.querySelectorAll("[data-reveal]").forEach((board) => {
      board.classList.add("in");
    });
  }

  const canvas = document.getElementById("rain");
  if (!canvas || !motionOk) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  const cssW = 1200;
  const cssH = 400;
  const size = 6;
  const pitch = 12;
  const radius = 1.1;
  let cols = 0;
  let rows = 0;
  let born = [];
  let phase = [];
  let period = [];
  let peak = [];
  let duty = [];
  let color = "rgb(180, 180, 180)";
  let running = true;
  let start = performance.now();

  function easeOut(t) {
    const x = Math.max(0, Math.min(1, t));
    return 1 - (1 - x) * (1 - x);
  }

  function readColor() {
    const probe = document.createElement("span");
    probe.style.color = "var(--rain)";
    document.body.appendChild(probe);
    color = getComputedStyle(probe).color || color;
    probe.remove();
  }

  function seed() {
    cols = Math.floor(cssW / pitch);
    rows = Math.floor(cssH / pitch);
    const n = cols * rows;
    born = [];
    phase = [];
    period = [];
    peak = [];
    duty = [];
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const wave = (x + y) * 0.06;
        born.push(wave + Math.random() * 6);
        phase.push(Math.random());
        period.push(22 + Math.random() * 16);
        peak.push(0.38 + Math.random() * 0.4);
        duty.push(0.58 + Math.random() * 0.2);
      }
    }
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    readColor();
    seed();
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
  }

  function tick(now) {
    if (!running) return;
    const t = (now - start) / 1000;
    ctx.clearRect(0, 0, cssW, cssH);
    ctx.fillStyle = color;

    const ox = (cssW - cols * pitch) / 2;
    const oy = (cssH - rows * pitch) / 2;

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const i = y * cols + x;
        const appear = easeOut((t - born[i]) / 3.2);
        if (appear <= 0) continue;

        const cycle = (t / period[i] + phase[i]) % 1;
        const on = duty[i];
        const rise = on * 0.38;
        const fall = on * 0.38;
        const hold = on - rise - fall;
        let live = 0.22;
        if (cycle < rise) live = 0.22 + 0.78 * easeOut(cycle / rise);
        else if (cycle < rise + hold) live = 1;
        else if (cycle < on) live = 1 - easeOut((cycle - rise - hold) / fall) * 0.78;
        else live = 0.22;

        ctx.globalAlpha = appear * live * peak[i];
        roundRect(ox + x * pitch, oy + y * pitch, size, size, radius);
      }
    }

    requestAnimationFrame(tick);
  }

  document.addEventListener("visibilitychange", () => {
    running = document.visibilityState === "visible";
    if (running) {
      start = performance.now() - (performance.now() - start);
      requestAnimationFrame(tick);
    }
  });

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(tick);
})();
