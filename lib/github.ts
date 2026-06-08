/* ============================================================
   GitHub ao vivo — busca repos/perfil reais de rvalves10
   API pública (sem token). Cache por sessão + estados de
   loading/erro. Carrega só quando a seção entra na viewport.
   ============================================================ */
// @ts-nocheck
const GH_USER = 'rvalves10';
const API = 'https://api.github.com';

export function initGithub() {
  const grid = document.getElementById('gh-repos');
  const statsEl = document.getElementById('gh-stats');
  if (!grid) return;

  const t = (k, fb) => (window.__t && window.__t(k)) || fb;
  let data = null;
  let started = false;

  const langColors = {
    JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', HTML: '#e34c26',
    CSS: '#563d7c', Java: '#b07219', 'C++': '#f34b7d', C: '#555555', Go: '#00ADD8',
    Shell: '#89e051', Ruby: '#701516', PHP: '#4F5D95', Rust: '#dea584', Vue: '#41b883',
    Dart: '#00B4AB', Kotlin: '#A97BFF', 'Jupyter Notebook': '#DA5B0B', SCSS: '#c6538c',
  };

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const star = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9 9z"/></svg>';
  const ext = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  function fmtDate(iso) {
    try {
      const loc = window.__lang === 'en' ? 'en-US' : 'pt-BR';
      return new Date(iso).toLocaleDateString(loc, { month: 'short', year: 'numeric' });
    } catch { return ''; }
  }

  function setLoading() {
    grid.innerHTML = `<div class="gh-state"><span class="gh-spin"></span>${esc(t('gh.loading', 'carregando repositórios…'))}</div>`;
  }
  function setError() {
    grid.innerHTML = `<div class="gh-state err">${esc(t('gh.error', 'não deu pra carregar agora —'))} <a href="https://github.com/${GH_USER}" target="_blank" rel="noopener">github.com/${GH_USER} ${ext}</a></div>`;
    if (statsEl) statsEl.innerHTML = '';
  }

  function render() {
    if (!data) return;
    const { profile, repos } = data;
    const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

    if (statsEl) {
      const langs = new Set(repos.filter((r) => !r.fork && r.language).map((r) => r.language));
      const since = profile.created_at ? new Date(profile.created_at).getFullYear() : '—';
      const stat = (n, l) => `<div class="gh-stat"><span class="n">${n}</span><span class="l">${esc(l)}</span></div>`;
      // followers/stars de uma conta nova ficam em 0; mostramos métricas reais mais fortes.
      statsEl.innerHTML =
        stat(profile.public_repos ?? repos.length, t('gh.repos', 'repositórios')) +
        (totalStars > 0 ? stat(totalStars, t('gh.stars', 'estrelas')) : stat(langs.size, t('gh.langs', 'linguagens'))) +
        stat(since, t('gh.since', 'no GitHub desde'));
    }

    const list = repos
      .filter((r) => !r.fork)
      .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)))
      .slice(0, 6);

    grid.innerHTML = list.map((r, i) => {
      const color = langColors[r.language] || 'var(--accent)';
      return `<a class="gh-card" style="--i:${i}" href="${r.html_url}" target="_blank" rel="noopener" aria-label="${esc(r.name)}">
        <div class="gh-card-top"><span class="gh-name">${esc(r.name)}</span><span class="gh-ext">${ext}</span></div>
        <p class="gh-desc">${esc(r.description || '')}</p>
        <div class="gh-card-foot">
          ${r.language ? `<span class="gh-lang"><i style="background:${color}"></i>${esc(r.language)}</span>` : '<span></span>'}
          <span class="gh-meta">${r.stargazers_count ? `<span class="gh-stars">${star}${r.stargazers_count}</span>` : ''}<span class="gh-upd">${fmtDate(r.pushed_at)}</span></span>
        </div>
      </a>`;
    }).join('');
  }

  async function load() {
    if (started) return;
    started = true;
    try {
      const cached = sessionStorage.getItem('rv-gh');
      if (cached) { data = JSON.parse(cached); render(); return; }
    } catch {}
    setLoading();
    try {
      const [pr, rr] = await Promise.all([
        fetch(`${API}/users/${GH_USER}`),
        fetch(`${API}/users/${GH_USER}/repos?sort=pushed&per_page=100`),
      ]);
      if (!pr.ok || !rr.ok) throw new Error('github ' + pr.status + '/' + rr.status);
      const profile = await pr.json();
      const repos = await rr.json();
      if (!Array.isArray(repos)) throw new Error('bad payload');
      data = { profile, repos };
      try { sessionStorage.setItem('rv-gh', JSON.stringify(data)); } catch {}
      render();
    } catch (e) {
      setError();
    }
  }

  const io = new IntersectionObserver((ents) => {
    ents.forEach((en) => { if (en.isIntersecting) { load(); io.disconnect(); } });
  }, { rootMargin: '300px' });
  io.observe(grid);

  document.addEventListener('langchange', () => { if (data) render(); });
}
