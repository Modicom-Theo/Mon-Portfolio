const POINTS = 96;
const TENSION = 0.3;
const SPRING = 0.015; 
const DAMPING = 0.035;
const BAND = 45; 
const SPREAD = 0.18; 
const MAX_DISPLACEMENT = 28; 
const GAP = 8; 

export function initWater(): void {
  const frame = document.querySelector<HTMLElement>("[data-water]");
  const ringPath = frame?.querySelector<SVGPathElement>(".water-ring path");
  const photo = frame?.querySelector<HTMLElement>(".water-photo");
  if (!frame || !ringPath || !photo) return;

  const d = new Float32Array(POINTS);
  const v = new Float32Array(POINTS);
  let size = frame.offsetWidth;
  let running = false;
  let lastX = 0;
  let lastY = 0;
  let lastT = 0;

  function buildPath(cx: number, cy: number, radius: number): string {
    const pts: [number, number][] = [];
    for (let i = 0; i < POINTS; i++) {
      const a = (i / POINTS) * Math.PI * 2;
      const r = radius + d[i];
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
    const mid = (p: [number, number], q: [number, number]) =>
      `${((p[0] + q[0]) / 2).toFixed(2)} ${((p[1] + q[1]) / 2).toFixed(2)}`;
    let path = `M ${mid(pts[POINTS - 1], pts[0])}`;
    for (let i = 0; i < POINTS; i++) {
      const p = pts[i];
      path += ` Q ${p[0].toFixed(2)} ${p[1].toFixed(2)} ${mid(p, pts[(i + 1) % POINTS])}`;
    }
    return `${path} Z`;
  }

  function render(): void {
    const half = size / 2;
    ringPath!.setAttribute("d", buildPath(half, half, half - 1));
    const center = half - GAP + MAX_DISPLACEMENT;
    photo!.style.clipPath = `path("${buildPath(center, center, half - GAP)}")`;
  }

  function step(): void {
    let energy = 0;
    for (let i = 0; i < POINTS; i++) {
      const prev = d[(i - 1 + POINTS) % POINTS];
      const next = d[(i + 1) % POINTS];
      const accel = TENSION * (prev + next - 2 * d[i]) - SPRING * d[i] - DAMPING * v[i];
      v[i] += accel;
    }
    for (let i = 0; i < POINTS; i++) {
      d[i] = Math.max(-MAX_DISPLACEMENT, Math.min(MAX_DISPLACEMENT, d[i] + v[i]));
      energy += Math.abs(d[i]) + Math.abs(v[i]);
    }
    render();

    if (energy > 0.05) {
      requestAnimationFrame(step);
    } else {
      d.fill(0);
      v.fill(0);
      render();
      running = false;
    }
  }

  function wake(): void {
    if (!running) {
      running = true;
      requestAnimationFrame(step);
    }
  }

  function onPointerMove(e: PointerEvent): void {
    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    const vx = ((e.clientX - lastX) / dt) * 16;
    const vy = ((e.clientY - lastY) / dt) * 16;
    const firstMove = lastT === 0 || dt > 100;
    lastX = e.clientX;
    lastY = e.clientY;
    lastT = now;
    if (firstMove) return;

    const rect = frame!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const edgeDist = Math.abs(dist - rect.width / 2);
    if (edgeDist > BAND || dist === 0) return;

    const angle = Math.atan2(dy, dx);
    const ux = dx / dist;
    const uy = dy / dist;
    const radialSpeed = vx * ux + vy * uy; 
    const tangentialSpeed = Math.abs(-vx * uy + vy * ux);
    const proximity = 1 - edgeDist / BAND;
    const push = (radialSpeed * 0.45 - tangentialSpeed * 0.12) * proximity;
    if (Math.abs(push) < 0.01) return;

    for (let i = 0; i < POINTS; i++) {
      const a = (i / POINTS) * Math.PI * 2;
      let diff = Math.abs(a - angle) % (Math.PI * 2);
      if (diff > Math.PI) diff = Math.PI * 2 - diff;
      const weight = Math.exp(-(diff * diff) / (2 * SPREAD * SPREAD));
      v[i] += Math.max(-6, Math.min(6, push)) * weight;
    }
    wake();
  }

  new ResizeObserver(() => {
    size = frame.offsetWidth;
    render();
  }).observe(frame);
  photo.style.borderRadius = "0";
  photo.style.inset = `${GAP - MAX_DISPLACEMENT}px`;
  render();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.addEventListener("pointermove", onPointerMove, { passive: true });
}
