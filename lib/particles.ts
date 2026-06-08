// @ts-nocheck
/* Morphing particle text — hero signature (Next.js port) */
export function initParticles() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const WORDS = ['RV', 'BACKEND', 'IA', 'RICHARD'];
  let wordIndex = 0;

  let DPR = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0;
  let particles: any[] = [];
  let targets: any[] = [];
  const mouse = { x: -9999, y: -9999, active: false };

  function rgb() {
    return getComputedStyle(document.documentElement).getPropertyValue('--particle').trim() || '128,240,226';
  }
  let COLOR = rgb();

  function resize() {
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildTargets(WORDS[wordIndex]);
  }

  function sampleWord(word: string) {
    const off = document.createElement('canvas');
    off.width = W; off.height = H;
    const o = off.getContext('2d')!;
    o.clearRect(0, 0, W, H);
    o.fillStyle = '#fff';
    o.textAlign = 'center';
    o.textBaseline = 'middle';
    let size = Math.min(H * 0.92, W * 0.34);
    o.font = '700 ' + size + "px 'Space Grotesk', sans-serif";
    let w = o.measureText(word).width;
    const maxW = W * 0.9;
    if (w > maxW) { size *= maxW / w; o.font = '700 ' + size + "px 'Space Grotesk', sans-serif"; }
    o.fillText(word, W / 2, H / 2 + size * 0.02);
    const data = o.getImageData(0, 0, W, H).data;
    const pts: any[] = [];
    const gap = Math.max(4, Math.round(W / 220));
    for (let y = 0; y < H; y += gap) {
      for (let x = 0; x < W; x += gap) {
        const a = data[(y * W + x) * 4 + 3];
        if (a > 128) pts.push({ x, y });
      }
    }
    return pts;
  }

  function buildTargets(word: string) {
    targets = sampleWord(word);
    const need = targets.length;
    if (particles.length < need) {
      for (let i = particles.length; i < need; i++) particles.push(newParticle());
    }
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (i < need) { p.tx = targets[i].x; p.ty = targets[i].y; p.dead = false; }
      else { p.dead = true; p.tx = Math.random() * W; p.ty = Math.random() * H; }
    }
  }

  function newParticle() {
    return { x: Math.random() * W, y: Math.random() * H, tx: Math.random() * W, ty: Math.random() * H, vx: 0, vy: 0, r: Math.random() * 1.4 + 0.7, ease: Math.random() * 0.04 + 0.045, dead: false, a: 0 };
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    COLOR = rgb();
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      let dx = p.tx - p.x, dy = p.ty - p.y;
      p.vx += dx * p.ease; p.vy += dy * p.ease;
      if (mouse.active) {
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        const d2 = mdx * mdx + mdy * mdy;
        const R = 120;
        if (d2 < R * R) { const d = Math.sqrt(d2) || 1; const f = (1 - d / R) * 5.5; p.vx += (mdx / d) * f; p.vy += (mdy / d) * f; }
      }
      p.vx *= 0.82; p.vy *= 0.82;
      p.x += p.vx; p.y += p.vy;
      const targetA = p.dead ? 0 : 1;
      p.a += (targetA - p.a) * 0.08;
      if (p.a < 0.02) continue;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(' + COLOR + ',' + (p.a * 0.9).toFixed(3) + ')';
      ctx.arc(p.x, p.y, p.r, 0, 6.2832);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  function staticDraw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(' + rgb() + ',0.9)';
    for (const t of targets) { ctx.beginPath(); ctx.arc(t.x, t.y, 1.3, 0, 6.2832); ctx.fill(); }
  }

  function cycle() { wordIndex = (wordIndex + 1) % WORDS.length; buildTargets(WORDS[wordIndex]); }

  function onMove(e: any) {
    const r = canvas.getBoundingClientRect();
    const cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    const cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
    mouse.x = cx; mouse.y = cy; mouse.active = true;
  }
  function onLeave() { mouse.active = false; mouse.x = -9999; mouse.y = -9999; }

  function start() {
    resize();
    if (reduce) { staticDraw(); return; }
    requestAnimationFrame(tick);
    setInterval(cycle, 3200);
  }

  if (document.fonts && (document as any).fonts.ready) (document as any).fonts.ready.then(start);
  else window.addEventListener('load', start);

  window.addEventListener('resize', () => { clearTimeout((window as any).__pr); (window as any).__pr = setTimeout(resize, 180); });
  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('touchmove', onMove, { passive: true });
  canvas.addEventListener('mouseleave', onLeave);
  canvas.addEventListener('touchend', onLeave);
}
