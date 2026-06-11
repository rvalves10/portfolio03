/* ============================================================
   Portfolio interactions
   ============================================================ */
// @ts-nocheck
export function initPortfolio() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const saved = localStorage.getItem('rv-theme');
  if (saved) root.setAttribute('data-theme', saved);
  function toggleTheme(e) {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    const apply = () => { root.setAttribute('data-theme', next); localStorage.setItem('rv-theme', next); };
    // Fallback: sem View Transitions ou com reduced-motion -> troca instantânea
    if (typeof document.startViewTransition !== 'function' || reduce) { apply(); return; }
    // Origem do círculo: ponto do clique; senão o centro do botão de tema; senão canto sup. dir.
    let x, y;
    if (e && typeof e.clientX === 'number' && (e.clientX || e.clientY)) { x = e.clientX; y = e.clientY; }
    else {
      const btn = document.querySelector('[data-theme-toggle]');
      if (btn) { const r = btn.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
      else { x = innerWidth - 56; y = 44; }
    }
    const endR = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(apply);
    vt.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endR}px at ${x}px ${y}px)`] },
        { duration: 520, easing: 'cubic-bezier(.16,.84,.3,1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(b => b.addEventListener('click', toggleTheme));

  /* ---------- Custom cursor ---------- */
  if (!isCoarse) {
    const ring = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor-dot');
    let rx = innerWidth / 2, ry = innerHeight / 2, dxp = rx, dyp = ry;
    addEventListener('mousemove', e => { dxp = e.clientX; dyp = e.clientY; dot.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`; });
    function loop() { rx += (dxp - rx) * 0.18; ry += (dyp - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(loop); }
    loop();
    document.querySelectorAll('a, button, .tilt, input, .clink, .fact').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
    addEventListener('mouseleave', () => { ring.classList.add('hide'); dot.classList.add('hide'); });
    addEventListener('mouseenter', () => { ring.classList.remove('hide'); dot.classList.remove('hide'); });
  }

  /* ---------- Magnetic buttons ---------- */
  if (!isCoarse && !reduce) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${mx * 0.25}px, ${my * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Nav scroll state ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => { nav.classList.toggle('scrolled', scrollY > 40); };
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Scroll-spy (active nav link) ---------- */
  (function scrollSpy() {
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const map = new Map();
    links.forEach(a => { const s = document.getElementById(a.getAttribute('href').slice(1)); if (s) map.set(s, a); });
    if (!map.size) return;
    let current = null;
    const setActive = (a) => { if (a === current) return; links.forEach(l => l.classList.remove('active')); if (a) a.classList.add('active'); current = a; };
    const spy = new IntersectionObserver((entries) => {
      const hit = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (hit) setActive(map.get(hit.target));
    }, { rootMargin: '-44% 0px -50% 0px', threshold: [0, 0.5, 1] });
    map.forEach((_, s) => spy.observe(s));
  })();

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal, .reveal-cine').forEach(el => io.observe(el));

  /* ---------- Mobile drawer ---------- */
  const drawer = document.querySelector('.drawer');
  document.querySelector('[data-menu-open]')?.addEventListener('click', () => drawer.classList.add('open'));
  document.querySelectorAll('[data-menu-close], .drawer a').forEach(b => b.addEventListener('click', () => drawer.classList.remove('open')));

  /* ---------- Tilt cards ---------- */
  if (!isCoarse && !reduce) {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      const max = parseFloat(card.dataset.tilt) || 8;
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(1.012)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(900px) rotateY(0) rotateX(0)'; });
    });
  }

  /* ---------- Typewriter (hero sub) ---------- */
  const tw = document.querySelector('[data-typewriter]');
  if (tw) {
    const fallback = JSON.parse(tw.dataset.typewriter);
    const getWords = () => (window.__dyn && window.__dyn().tw) || fallback;
    let token = 0;
    function startTW() {
      const myToken = ++token;
      const words = getWords();
      if (reduce) { tw.textContent = words[0]; return; }
      let wi = 0, ci = 0, deleting = false;
      (function type() {
        if (myToken !== token) return; // cancelled by a language change
        const word = words[wi % words.length];
        tw.textContent = word.slice(0, ci);
        if (!deleting && ci < word.length) { ci++; setTimeout(type, 70); }
        else if (!deleting && ci === word.length) { deleting = true; setTimeout(type, 1800); }
        else if (deleting && ci > 0) { ci--; setTimeout(type, 34); }
        else { deleting = false; wi = (wi + 1) % words.length; setTimeout(type, 280); }
      })();
    }
    startTW();
    document.addEventListener('langchange', startTW);
  }

  /* ---------- Certificates filter + show more ---------- */
  const certData = window.__CERTS || [];
  const grid = document.getElementById('cert-grid');
  if (grid) {
    let cat = null, showAll = false;
    const fallbackCat = { programming: 'Programação', data: 'Dados & IA', 'soft-skills': 'Soft Skills', other: 'Outros' };
    const cd = () => (window.__dyn && window.__dyn().cert) || { cat: fallbackCat, cred: 'Ver credencial', moreAll: '+ Ver todos', moreN: n => `+ Ver todos (${n} mais)`, less: '— Ver menos' };
    const icon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5"/></svg>';
    const ext = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>';

    function render() {
      const list = cat ? certData.filter(c => c.category === cat) : certData;
      const shown = showAll ? list : list.slice(0, 4);
      grid.innerHTML = shown.map(c => `
        <article class="cert reveal in">
          <div class="cert-top">
            <div class="ic">${icon}</div>
            <span class="cat ${c.category}">${cd().cat[c.category]}</span>
          </div>
          <h3>${c.title}</h3>
          <div class="cert-meta"><span>◆ ${c.issuer}</span><span>${c.date}</span></div>
          <div class="cert-skills">${c.skills.map(s => `<span>${s}</span>`).join('')}</div>
          ${c.credentialUrl ? `<a class="cred" href="${c.credentialUrl}" target="_blank" rel="noopener">${cd().cred} ${ext}</a>` : ''}
        </article>`).join('');
      const moreBtn = document.getElementById('cert-more-btn');
      if (moreBtn) {
        if (list.length > 4) { moreBtn.style.display = 'inline-flex'; moreBtn.textContent = showAll ? cd().less : cd().moreN(list.length - 4); }
        else moreBtn.style.display = 'none';
      }
    }
    document.querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cat = btn.dataset.cat === 'all' ? null : btn.dataset.cat;
        showAll = false; render();
      });
    });
    document.getElementById('cert-more-btn')?.addEventListener('click', () => { showAll = !showAll; render(); });
    render();
    document.addEventListener('langchange', render);
  }

  /* ---------- Interactive terminal ---------- */
  const termBody = document.getElementById('term-body');
  const termInput = document.getElementById('term-input');
  if (termBody && termInput) {
    const fallbackTerm = {
      help: ['Comandos disponíveis:', '  sobre       informações pessoais', '  skills      stack técnica', '  projetos    projetos em destaque', '  contato     formas de contato', '  github      abrir GitHub', '  linkedin    abrir LinkedIn', '  clear       limpar terminal', '  secret      ???'],
      about: ['Richard Victor — Backend Developer'],
      skills: ['python · fastapi · git'],
      projects: ['QuebraDica · Jéssica Cílios'],
      contact: ['richardvic12@gmail.com'],
      secret: ['import this'],
      notfound: c => `comando não encontrado: ${c} — digite 'help'`, opening: x => `abrindo ${x}…`
    };
    const td = () => (window.__dyn && window.__dyn().term) || fallbackTerm;
    const alias = { sobre: 'about', about: 'about', skills: 'skills', projetos: 'projects', projects: 'projects', contato: 'contact', contact: 'contact', secret: 'secret', help: 'help' };
    function print(text, cls) { const d = document.createElement('div'); d.className = 'term-line' + (cls ? ' ' + cls : ''); d.textContent = text; termBody.insertBefore(d, termBody.querySelector('.term-input-row')); }
    function run(raw) {
      const c = raw.trim().toLowerCase();
      print('$ ' + raw, 'in');
      if (!c) return;
      const t = td();
      if (c === 'clear') { termBody.querySelectorAll('.term-line:not(.boot)').forEach(n => { if (!n.classList.contains('keep')) n.remove(); }); return; }
      if (c === 'github') { window.open('https://github.com/rvalves10', '_blank'); print(t.opening('GitHub')); return; }
      if (c === 'linkedin') { window.open('https://www.linkedin.com/in/richard-victor-3611a5303/', '_blank'); print(t.opening('LinkedIn')); return; }
      if (c === 'cv' || c === 'curriculo' || c === 'currículo' || c === 'resume') { window.open('/cv-richard-victor.pdf', '_blank'); print(t.opening('CV')); return; }
      const key = alias[c];
      if (key === 'projects') {
        const lang = window.__lang || 'pt';
        const list = window.__PROJECTS || [];
        const stl = (s) => lang === 'en'
          ? (s === 'online' ? '[online]' : s === 'dev' ? '[in dev]' : '[next]')
          : (s === 'online' ? '[online]' : s === 'dev' ? '[em dev]' : '[próximo]');
        print(lang === 'en' ? '>> projects:' : '>> projetos:');
        print('');
        list.forEach((p, i) => {
          print((i + 1) + '. ' + p.name + '  ' + stl(p.status));
          print('   ' + (lang === 'en' ? p.en : p.pt));
        });
        print('');
        return;
      }
      const out = key && t[key];
      if (out) out.forEach(l => print(l)); else print(t.notfound(c), 'err');
      print('');
    }
    termInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') { run(termInput.value); termInput.value = ''; termBody.scrollTop = termBody.scrollHeight; }
    });
    document.querySelector('.term-body').addEventListener('click', () => termInput.focus());
  }

  /* ---------- Cursor aura (follows mouse, lerped) ---------- */
  if (!isCoarse) {
    const aura = document.querySelector('.cursor-aura');
    let ax = innerWidth / 2, ay = innerHeight / 2, atx = ax, aty = ay;
    addEventListener('mousemove', e => { atx = e.clientX; aty = e.clientY; });
    (function auraLoop() { ax += (atx - ax) * 0.08; ay += (aty - ay) * 0.08; aura.style.transform = `translate(${ax}px,${ay}px) translate(-50%,-50%)`; requestAnimationFrame(auraLoop); })();
    addEventListener('mouseleave', () => aura.style.opacity = '0');
    addEventListener('mouseenter', () => aura.style.opacity = '');
  }

  /* ---------- Scroll progress bar ---------- */
  const bar = document.querySelector('.scroll-bar');
  function progress() { const h = document.documentElement.scrollHeight - innerHeight; bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%'; }
  progress(); addEventListener('scroll', progress, { passive: true });

  /* ---------- Smooth wheel scroll (lerp) ---------- */
  if (!reduce && !isCoarse) {
    let target = scrollY, current = scrollY, raf = null;
    const maxScroll = () => document.documentElement.scrollHeight - innerHeight;
    const insideScrollable = (el) => {
      while (el && el !== document.body && el !== document.documentElement) {
        if (el.scrollHeight > el.clientHeight + 1) {
          const ov = getComputedStyle(el).overflowY;
          if (ov === 'auto' || ov === 'scroll') return true;
        }
        el = el.parentElement;
      }
      return false;
    };
    function glide() {
      raf = requestAnimationFrame(() => {
        current += (target - current) * 0.105;
        if (Math.abs(target - current) < 0.6) { current = target; window.scrollTo({ top: current, behavior: 'instant' }); raf = null; return; }
        window.scrollTo({ top: current, behavior: 'instant' });
        glide();
      });
    }
    addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.defaultPrevented) return;            // zoom do browser
      if (insideScrollable(e.target)) return;                 // terminal, cmdk-list, drawer…
      if (document.querySelector('.cmdk.open, .drawer.open')) { e.preventDefault(); return; } // trava o fundo
      e.preventDefault();
      const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      if (!raf) { current = scrollY; target = scrollY; }
      target = Math.max(0, Math.min(maxScroll(), target + dy));
      if (!raf) glide();
    }, { passive: false });
    // âncoras / teclado: re-sincroniza quando o lerp não está ativo
    addEventListener('scroll', () => { if (!raf) { current = scrollY; target = scrollY; } }, { passive: true });
  }

  /* ---------- Parallax (rAF, only when near viewport) ---------- */
  if (!reduce) {
    const pEls = [...document.querySelectorAll('[data-parallax]')].map(el => ({ el, speed: parseFloat(el.dataset.parallax) || 0.1 }));
    let ticking = false;
    function applyParallax() {
      const vh = innerHeight, mid = vh / 2;
      for (const p of pEls) {
        const r = p.el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const center = r.top + r.height / 2;
        const offset = (center - mid) * p.speed;
        p.el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
      }
      ticking = false;
    }
    function reqP() { if (!ticking) { ticking = true; requestAnimationFrame(applyParallax); } }
    addEventListener('scroll', reqP, { passive: true });
    addEventListener('resize', reqP);
    applyParallax();
  }

  /* ---------- Hero fade on scroll ---------- */
  if (!reduce) {
    const heroInner = document.querySelector('.hero-inner');
    const cue = document.querySelector('.scroll-cue');
    addEventListener('scroll', () => {
      const t = Math.min(scrollY / (innerHeight * 0.7), 1);
      if (heroInner) heroInner.style.opacity = (1 - t * 0.9).toFixed(2);
      if (cue) cue.style.opacity = (1 - t * 2).toFixed(2);
    }, { passive: true });
  }

  /* ---------- Count-up ---------- */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.querySelector('em') ? el.querySelector('em').outerHTML : '';
    let done = false;
    const ob = new IntersectionObserver((ents) => {
      ents.forEach(en => {
        if (en.isIntersecting && !done) {
          done = true;
          if (reduce) { el.innerHTML = target + suffix; return; }
          const start = performance.now(), dur = 1400;
          (function step(now) {
            const k = Math.min((now - start) / dur, 1);
            const e = 1 - Math.pow(1 - k, 3);
            el.innerHTML = Math.round(target * e) + suffix;
            if (k < 1) requestAnimationFrame(step);
          })(performance.now());
        }
      });
    }, { threshold: 0.5 });
    ob.observe(el);
  });

  /* ---------- Marquee (rAF-driven; reage ao scroll sem saltos) ---------- */
  if (!reduce) {
    const track = document.querySelector('.marquee-track');
    if (track) {
      track.style.animation = 'none'; // assume o controle da posição via transform
      let x = 0, half = 0, last = scrollY, boost = 0, paused = false;
      const measure = () => { half = track.scrollWidth / 2; };
      measure(); addEventListener('resize', measure);
      addEventListener('scroll', () => { const v = Math.abs(scrollY - last); last = scrollY; boost = Math.min(boost + v * 0.06, 7); }, { passive: true });
      const wrap_ = track.parentElement;
      wrap_.addEventListener('mouseenter', () => { paused = true; });
      wrap_.addEventListener('mouseleave', () => { paused = false; });
      (function mloop() {
        if (!paused && half > 0) {
          x -= 0.75 + boost;
          if (x <= -half) x += half;
          track.style.transform = `translateX(${x.toFixed(1)}px)`;
        }
        boost *= 0.94;
        requestAnimationFrame(mloop);
      })();
    }
  }

  /* ---------- year ---------- */
  function setYear() { const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear(); }
  setYear();
  document.addEventListener('langchange', setYear);

  /* ---------- Time-aware greeting ---------- */
  const greet = document.getElementById('greeting');
  if (greet) {
    function setGreeting() {
      const gr = (window.__dyn && window.__dyn().greet) || { dawn: 'boa madrugada', morning: 'bom dia', afternoon: 'boa tarde', evening: 'boa noite', who: 'recrutador' };
      const h = new Date().getHours();
      let g = gr.evening;
      if (h >= 5 && h < 12) g = gr.morning;
      else if (h >= 12 && h < 18) g = gr.afternoon;
      else if (h >= 0 && h < 5) g = gr.dawn;
      greet.textContent = g + ', ' + gr.who;
    }
    setGreeting();
    document.addEventListener('langchange', setGreeting);
  }

  /* ---------- whoami JSON typer ---------- */
  (function whoami() {
    const out = document.getElementById('whoami-out');
    if (!out) return;
    function buildLines() {
      const w = (window.__dyn && window.__dyn().who) || [['nome', 'Richard Victor', 'str'], ['papel', 'Backend Developer', 'str'], ['local', 'Sorocaba, BR', 'str'], ['foco', ['Python', 'APIs', 'IA'], 'arr'], ['estudando', 'FastAPI', 'str'], ['objetivo', 'Engenheiro de IA', 'str'], ['café', true, 'bool']];
      const L = ['{'];
      w.forEach((row, i) => {
        const k = row[0], v = row[1], type = row[2];
        const comma = i < w.length - 1 ? ',' : '';
        let val;
        if (type === 'arr') val = '[' + v.map(x => `"${x}"`).join(', ') + ']';
        else if (type === 'bool') val = String(v);
        else val = `"${v}"`;
        L.push(`  "${k}": ${val}${comma}`);
      });
      L.push('}');
      return L;
    }
    let lines = buildLines();
    let full = lines.join('\n');
    function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    function highlight(text) {
      // tokenize line-safe: keys, string values, numbers, booleans, punctuation
      return esc(text)
        .replace(/(&quot;|")([^"]*?)\1(\s*:)/g, '<span class="key">"$2"</span><span class="punc">$3</span>')
        .replace(/: (&quot;|")([^"]*?)\1/g, ': <span class="str">"$2"</span>')
        .replace(/(\[|\]|\{|\}|,)/g, '<span class="punc">$1</span>')
        .replace(/\b(true|false)\b/g, '<span class="bool">$1</span>')
        .replace(/(?<![\w"])(\d+)(?![\w"])/g, '<span class="num">$1</span>');
    }
    const cursor = '<span class="whoami-cur"></span>';
    let typed = false;
    function type() {
      if (typed) return; typed = true;
      if (reduce) { out.innerHTML = lines.map(l => highlight(l)).join('\n'); return; }
      let i = 0;
      (function step() {
        // type plain while in progress, then snap to highlighted per completed text
        const slice = full.slice(0, i);
        // highlight only fully-typed lines, keep current partial line plain
        const nl = slice.lastIndexOf('\n');
        const doneHtml = nl >= 0 ? highlight(slice.slice(0, nl)) + '\n' : '';
        const partial = esc(nl >= 0 ? slice.slice(nl + 1) : slice);
        out.innerHTML = doneHtml + partial + cursor;
        i++;
        if (i <= full.length) {
          const ch = full[i - 1];
          setTimeout(step, ch === '\n' ? 90 : (ch === ' ' ? 14 : 22 + Math.random() * 26));
        } else {
          out.innerHTML = lines.map(l => highlight(l)).join('\n') + cursor;
        }
      })();
    }
    const ob = new IntersectionObserver((ents) => {
      ents.forEach(en => { if (en.isIntersecting) { type(); ob.disconnect(); } });
    }, { threshold: 0.35 });
    ob.observe(out);
    document.addEventListener('langchange', () => {
      lines = buildLines(); full = lines.join('\n');
      if (typed) out.innerHTML = lines.map(l => highlight(l)).join('\n') + cursor;
    });
  })();

  /* ---------- Subtle UI sound (WebAudio) ---------- */
  const sound = (function () {
    let ctx = null, on = localStorage.getItem('rv-sound') === 'on';
    function ensure() { if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; } } }
    function blip(freq, dur, vol) {
      if (!on) return; ensure(); if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = freq;
      g.gain.setValueAtTime(0, ctx.currentTime);
      g.gain.linearRampToValueAtTime(vol || 0.04, ctx.currentTime + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (dur || 0.09));
      o.connect(g); g.connect(ctx.destination);
      o.start(); o.stop(ctx.currentTime + (dur || 0.09));
    }
    return {
      hover: () => blip(880, 0.05, 0.018),
      click: () => blip(540, 0.11, 0.05),
      key: () => blip(1200, 0.03, 0.015),
      get on() { return on; },
      set: (v) => { on = v; localStorage.setItem('rv-sound', v ? 'on' : 'off'); if (v) { ensure(); blip(660, 0.12, 0.05); } }
    };
  })();
  const soundBtn = document.querySelector('[data-sound-toggle]');
  if (soundBtn) {
    const sync = () => {
      soundBtn.dataset.on = sound.on;
      soundBtn.querySelector('.snd-on').style.display = sound.on ? 'block' : 'none';
      soundBtn.querySelector('.snd-off').style.display = sound.on ? 'none' : 'block';
    };
    sync();
    soundBtn.addEventListener('click', () => { sound.set(!sound.on); sync(); });
    document.querySelectorAll('.nav-links a, .btn, .icon-btn, .theme-btn, .clink, .chip').forEach(el => el.addEventListener('mouseenter', () => sound.hover()));
    document.querySelectorAll('a, button').forEach(el => el.addEventListener('click', () => sound.click()));
    document.getElementById('term-input')?.addEventListener('keydown', () => sound.key());
  }

  /* ---------- Boot sequence ---------- */
  (function boot() {
    const el = document.getElementById('boot');
    const log = document.getElementById('boot-log');
    const skip = document.getElementById('boot-skip');
    if (!el) return;
    const seen = sessionStorage.getItem('rv-booted');
    function finish() { el.classList.add('done'); el.style.opacity = '0'; setTimeout(() => { el.style.visibility = 'hidden'; el.style.display = 'none'; }, 720); }
    if (seen || reduce) { finish(); return; }
    document.body.style.overflow = 'hidden';
    const rawLines = (window.__dyn && window.__dyn().boot) || [
      { t: '$ booting richard.dev …', d: 360 },
      { t: '[<ok>  ok  </ok>] kernel: python runtime', d: 260 },
      { t: '[<ok>  ok  </ok>] modules: backend · apis · git', d: 260 },
      { t: '[<ok>  ok  </ok>] mounting /projects (3)', d: 240 },
      { t: '[<ok>  ok  </ok>] ai.engine: warming up', d: 320 },
      { t: '[<ok>  ok  </ok>] certificates: 24 loaded', d: 240 },
      { t: '[<ok>  ok  </ok>] deploy: <ok>live</ok>', d: 360 },
      { t: '<dim>></dim> welcome. sou o Richard.', d: 520 }
    ];
    const projCount = (window.__PROJECTS && window.__PROJECTS.length) || 3;
    const lines = rawLines.map(l => ({ ...l, t: l.t.replace(/(\/proj(?:etos|ects) )\(\d+\)/, '$1(' + projCount + ')') }));
    let html = '', i = 0;
    function render(extra) { log.innerHTML = (html + (extra || '')).replace(/<ok>/g, '<span class="ok">').replace(/<\/ok>/g, '</span>').replace(/<dim>/g, '<span class="dim">').replace(/<\/dim>/g, '</span>') + '<span class="cur"></span>'; }
    function next() {
      if (i >= lines.length) { setTimeout(() => { document.body.style.overflow = ''; sessionStorage.setItem('rv-booted', '1'); finish(); }, 520); return; }
      const line = lines[i++];
      render(line.t);
      html += line.t + '\n';
      sound.key();
      setTimeout(next, line.d);
    }
    function bail() { document.body.style.overflow = ''; sessionStorage.setItem('rv-booted', '1'); finish(); }
    skip?.addEventListener('click', bail);
    addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { bail(); removeEventListener('keydown', esc); } });
    setTimeout(next, 400);
  })();

  /* ---------- Command palette ---------- */
  (function cmdk() {
    const overlay = document.getElementById('cmdk');
    const input = document.getElementById('cmdk-input');
    const list = document.getElementById('cmdk-list');
    if (!overlay) return;
    function buildItems() {
      const c = (window.__dyn && window.__dyn().cmdk) || null;
      const sec = c ? c.sections : ['Sobre', 'Jornada', 'Skills', 'Projetos', 'Terminal', 'Certificados', 'Contato'];
      const kS = c ? c.kindSection : 'seção', kA = c ? c.kindAction : 'ação', kL = c ? c.kindLink : 'link';
      const ids = ['#sobre', '#jornada', '#skills', '#projetos', '#terminal', '#certificados', '#contato'];
      const arr = sec.map((label, i) => ({ label, kind: kS, ic: String(i + 1).padStart(2, '0'), run: () => go(ids[i]) }));
      arr.push({ label: c ? c.theme : 'Alternar tema claro / escuro', kind: kA, ic: '◐', run: () => toggleTheme() });
      arr.push({ label: c ? c.sound : 'Som da interface on / off', kind: kA, ic: '♪', run: () => { sound.set(!sound.on); document.querySelector('[data-sound-toggle]').dataset.on = sound.on; document.querySelector('.snd-on').style.display = sound.on ? 'block' : 'none'; document.querySelector('.snd-off').style.display = sound.on ? 'none' : 'block'; } });
      arr.push({ label: c ? c.github : 'Abrir GitHub', kind: kL, ic: '↗', run: () => open('https://github.com/rvalves10', '_blank') });
      arr.push({ label: c ? c.linkedin : 'Abrir LinkedIn', kind: kL, ic: '↗', run: () => open('https://www.linkedin.com/in/richard-victor-3611a5303/', '_blank') });
      arr.push({ label: c ? c.email : 'Enviar e-mail', kind: kL, ic: '✉', run: () => location.href = 'mailto:richardvic12@gmail.com' });
      arr.push({ label: (c && c.cv) || 'Baixar currículo (PDF)', kind: kL, ic: '↓', run: () => open('/cv-richard-victor.pdf', '_blank') });
      return arr;
    }
    let items = buildItems();
    let filtered = items.slice(), active = 0;
    function go(sel) { close(); document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' }); }
    function open_() { overlay.classList.add('open'); overlay.setAttribute('aria-hidden', 'false'); input.value = ''; filtered = items.slice(); active = 0; draw(); setTimeout(() => input.focus(), 60); }
    function close() { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden', 'true'); }
    function draw() {
      if (!filtered.length) { list.innerHTML = '<li class="cmdk-empty">' + ((window.__dyn && window.__dyn().cmdk && window.__dyn().cmdk.empty) || 'nada encontrado') + '</li>'; return; }
      list.innerHTML = filtered.map((it, idx) => `<li class="cmdk-item ${idx === active ? 'active' : ''}" data-i="${idx}"><span class="ci-ic">${it.ic}</span><span class="ci-label">${it.label}</span><span class="ci-kind">${it.kind}</span></li>`).join('');
      list.querySelectorAll('.cmdk-item').forEach(li => {
        li.addEventListener('mouseenter', () => { active = +li.dataset.i; highlight(); });
        li.addEventListener('click', () => { filtered[+li.dataset.i].run(); });
      });
    }
    function highlight() { list.querySelectorAll('.cmdk-item').forEach((li, i) => li.classList.toggle('active', i === active)); }
    input?.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      filtered = items.filter(it => it.label.toLowerCase().includes(q) || it.kind.includes(q));
      active = 0; draw();
    });
    input?.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, filtered.length - 1); highlight(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); highlight(); }
      else if (e.key === 'Enter') { e.preventDefault(); filtered[active] && filtered[active].run(); }
      else if (e.key === 'Escape') { close(); }
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.querySelectorAll('[data-cmdk-open]').forEach(b => b.addEventListener('click', open_));
    document.addEventListener('langchange', () => { items = buildItems(); filtered = items.slice(); active = 0; if (overlay.classList.contains('open')) draw(); });
    addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); overlay.classList.contains('open') ? close() : open_(); }
    });
  })();
}
