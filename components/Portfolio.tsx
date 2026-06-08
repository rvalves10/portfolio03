'use client';

import { useEffect, useRef } from 'react';
import { initPortfolio } from '@/lib/portfolio-interactions';
import { initParticles } from '@/lib/particles';
import { initI18n } from '@/lib/i18n';
import { CERTIFICATES } from '@/data/certificates';

const arrowUR = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8" /></svg>
);

export default function Portfolio() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return; // guard against StrictMode double-invoke
    started.current = true;
    (window as any).__CERTS = CERTIFICATES;
    initI18n();
    initParticles();
    initPortfolio();
    // initial translate + langchange AFTER listeners are wired
    (window as any).__applyLang((window as any).__lang);
  }, []);

  return (
    <>
      <div className="grain" />
      <div className="ambient" />
      <div className="cursor-aura" />
      <div className="scroll-bar" />

      {/* BOOT */}
      <div className="boot" id="boot">
        <div className="boot-inner">
          <pre className="boot-log" id="boot-log" />
          <button className="boot-skip" id="boot-skip" data-i18n="boot.skip">[ esc ] pular</button>
        </div>
      </div>

      {/* COMMAND PALETTE */}
      <div className="cmdk" id="cmdk" aria-hidden="true">
        <div className="cmdk-panel">
          <div className="cmdk-input-row">
            <span className="cmdk-prompt">&gt;</span>
            <input id="cmdk-input" type="text" placeholder="buscar seção, ação, link…" data-i18n-ph="cmdk.ph" autoComplete="off" spellCheck={false} />
            <kbd>esc</kbd>
          </div>
          <ul className="cmdk-list" id="cmdk-list" />
          <div className="cmdk-foot"><span><kbd>↑</kbd><kbd>↓</kbd> <span data-i18n="cmdk.nav">navegar</span></span><span><kbd>↵</kbd> <span data-i18n="cmdk.open">abrir</span></span></div>
        </div>
      </div>

      <div className="cursor" />
      <div className="cursor-dot" />

      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand"><span className="sq" />RICHARD.VICTOR</a>
          <nav className="nav-links">
            <a href="#sobre" data-i18n="nav.about">Sobre</a>
            <a href="#jornada" data-i18n="nav.journey">Jornada</a>
            <a href="#skills" data-i18n="nav.skills">Skills</a>
            <a href="#projetos" data-i18n="nav.projects">Projetos</a>
            <a href="#terminal" data-i18n="nav.terminal">Terminal</a>
            <a href="#certificados" data-i18n="nav.certs">Certificados</a>
            <a href="#contato" data-i18n="nav.contact">Contato</a>
          </nav>
          <div className="nav-right">
            <button className="lang-btn" data-lang-toggle aria-label="Idioma / Language"><span className="lg pt">PT</span><span className="sep">/</span><span className="lg en">EN</span></button>
            <button className="icon-btn cmdk-trigger" data-cmdk-open aria-label="Buscar (Ctrl+K)"><kbd className="kbd-hint">⌘K</kbd></button>
            <button className="icon-btn" data-sound-toggle aria-label="Som" data-on="false">
              <svg className="snd-off" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M17 9l4 6M21 9l-4 6" /></svg>
              <svg className="snd-on" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" style={{ display: 'none' }}><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M16 8a5 5 0 0 1 0 8M18.5 5.5a9 9 0 0 1 0 13" /></svg>
            </button>
            <button className="theme-btn" data-theme-toggle aria-label="Alternar tema">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" /></svg>
            </button>
            <button className="menu-btn" data-menu-open aria-label="Menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* DRAWER */}
      <div className="drawer">
        <button className="close" data-menu-close aria-label="Fechar"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M18 6 6 18" /></svg></button>
        <a href="#sobre" data-i18n="nav.about">Sobre</a>
        <a href="#jornada" data-i18n="nav.journey">Jornada</a>
        <a href="#skills" data-i18n="nav.skills">Skills</a>
        <a href="#projetos" data-i18n="nav.projects">Projetos</a>
        <a href="#terminal" data-i18n="nav.terminal">Terminal</a>
        <a href="#certificados" data-i18n="nav.certs">Certificados</a>
        <a href="#contato" data-i18n="nav.contact">Contato</a>
      </div>

      {/* HERO */}
      <section className="hero" id="top">
        <canvas id="hero-canvas" />
        <div className="wrap hero-inner" data-parallax="0.18">
          <div className="hero-top">
            <span className="status"><span className="dot" /><span data-i18n="hero.status">Disponível para novos projetos</span></span>
            <div className="hero-meta">
              <span className="greeting" id="greeting" /><br />
              Sorocaba · SP · BR<br />
              Backend / IA<br />
              EST. 2023
            </div>
          </div>

          <div className="hero-stage">
            <div className="hero-canvas-wrap" aria-hidden="true" />
            <h1 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Richard Victor — Desenvolvedor Backend e futuro Engenheiro de IA</h1>
            <div className="hero-hint"><span className="blink" /><span data-i18n="hero.hint">passe o mouse pelo texto</span></div>
          </div>

          <div className="hero-bottom">
            <p className="hero-sub">
              <span data-i18n="hero.sub1">Estudante de tecnologia transformando ideias em </span><b data-typewriter='["código limpo","APIs eficientes","sistemas backend","modelos de IA"]'>código limpo</b><span data-i18n="hero.sub2">. Do <span className="ser">zero ao deploy</span> — uma linha de cada vez.</span>
            </p>
            <div className="hero-cta">
              <a href="#projetos" className="btn btn-primary" data-magnetic data-i18n="hero.cta1">Ver projetos <span className="ic">↓</span></a>
              <a href="#contato" className="btn btn-ghost" data-magnetic data-i18n="hero.cta2">Contato <span className="ic">↗</span></a>
            </div>
          </div>
        </div>
        <div className="scroll-cue"><span>scroll</span><span className="rail" /></div>
      </section>

      {/* SOBRE */}
      <section className="block" id="sobre">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow"><span className="idx">01</span> <span data-i18n="s1.eyebrow">Sobre mim</span></span>
              <h2 className="sec-title" data-parallax="0.06" data-i18n="s1.title" style={{ marginTop: 22 }}>Quem está <em>por trás</em><br />do código</h2>
            </div>
          </div>
          <div className="about-grid">
            <div className="reveal" data-d="1">
              <p className="about-lead" data-i18n="s1.lead">
                Sou o <b>Richard Victor</b>, estudante de <span className="ser">Análise e Desenvolvimento de Sistemas</span> e apaixonado por construir coisas que funcionam de verdade. Hoje meu foco é desenvolvimento <b>backend</b>, APIs e <b>inteligência artificial</b> — construindo projetos que buscam gerar impacto real.
              </p>
              <div className="about-facts">
                <div className="fact"><span className="k">/01</span><span className="lbl" data-i18n="fact.loc">Localização</span><span className="v" data-i18n="fact.locv">Sorocaba, Brasil</span></div>
                <div className="fact"><span className="k">/02</span><span className="lbl" data-i18n="fact.edu">Formação</span><span className="v" data-i18n="fact.eduv">ADS — em curso</span></div>
                <div className="fact"><span className="k">/03</span><span className="lbl" data-i18n="fact.stack">Stack atual</span><span className="v" data-i18n="fact.stackv">Python · APIs</span></div>
                <div className="fact"><span className="k">/04</span><span className="lbl" data-i18n="fact.goal">Objetivo</span><span className="v" data-i18n="fact.goalv">Engenheiro de IA</span></div>
              </div>
            </div>
            <div className="reveal" data-d="2">
              <div className="whoami">
                <div className="whoami-bar"><div className="dots"><i style={{ background: '#ff5f56' }} /><i style={{ background: '#ffbd2e' }} /><i style={{ background: '#27c93f' }} /></div><span className="t">richard@dev: ~</span></div>
                <div className="whoami-body" id="whoami-body">
                  <div className="whoami-cmd"><span className="muted">$</span> cat richard.json</div>
                  <div className="wo" id="whoami-out" />
                </div>
              </div>
              <div className="whoami-cap"><span>[ richard.json ]</span><span className="ok">● exit 0</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section className="block alt" id="jornada">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow"><span className="idx">02</span> <span data-i18n="s2.eyebrow">Minha jornada</span></span>
              <h2 className="sec-title" data-parallax="0.06" data-i18n="s2.title" style={{ marginTop: 22 }}>Do autodidata<br />ao <em>engenheiro</em></h2>
            </div>
            <p data-i18n="s2.side" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', maxWidth: 240 }}>Uma linha do tempo da evolução — onde comecei e para onde estou indo.</p>
          </div>
          <div className="timeline">
            <div className="tl-row reveal">
              <div className="tl-year">2023<span className="tag" data-i18n="tl1.tag">o início</span></div>
              <div className="tl-main"><span className="tl-num">01</span><div className="tl-body"><h3 data-i18n="tl1.h">Início da jornada</h3><p data-i18n="tl1.p">Comecei a estudar programação de forma autodidata e descobri uma paixão real por tecnologia e desenvolvimento.</p></div></div>
            </div>
            <div className="tl-row reveal">
              <div className="tl-year">2024<span className="tag" data-i18n="tl2.tag">primeiro código</span></div>
              <div className="tl-main"><span className="tl-num">02</span><div className="tl-body"><h3 data-i18n="tl2.h">Primeiro projeto real</h3><p data-i18n="tl2.p">Desenvolvi meu primeiro sistema de gerenciamento, colocando em prática tudo o que vinha aprendendo.</p></div></div>
            </div>
            <div className="tl-row reveal">
              <div className="tl-year">2024<span className="tag" data-i18n="tl3.tag">faculdade</span></div>
              <div className="tl-main"><span className="tl-num">03</span><div className="tl-body"><h3 data-i18n="tl3.h">Ingresso em ADS</h3><p data-i18n="tl3.p">Entrei no curso de Análise e Desenvolvimento de Sistemas, aprofundando a base teórica e prática.</p></div></div>
            </div>
            <div className="tl-row reveal">
              <div className="tl-year">2025<span className="tag" data-i18n="tl4.tag">especialização</span></div>
              <div className="tl-main"><span className="tl-num">04</span><div className="tl-body"><h3 data-i18n="tl4.h">Foco em backend</h3><p data-i18n="tl4.p">Decidi me especializar em desenvolvimento backend com Python, APIs e boas práticas de engenharia.</p></div></div>
            </div>
            <div className="tl-row future reveal">
              <div className="tl-year"><span data-i18n="tl5.year">FUTURO</span><span className="tag" data-i18n="tl5.tag">o objetivo</span></div>
              <div className="tl-main"><span className="tl-num">05</span><div className="tl-body"><h3 data-i18n="tl5.h">Engenharia de IA</h3><p data-i18n="tl5.p">Tornar-me engenheiro de inteligência artificial, construindo sistemas que aprendem e geram impacto.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="block" id="skills">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow"><span className="idx">03</span> <span data-i18n="s3.eyebrow">Habilidades</span></span>
              <h2 className="sec-title" data-i18n="s3.title" style={{ marginTop: 22 }}>Ferramentas do <em>ofício</em></h2>
            </div>
          </div>
        </div>
        <div className="marquee reveal">
          <div className="marquee-track">
            <span className="marquee-item">PYTHON</span><span className="marquee-item">BACKEND</span><span className="marquee-item">APIs REST</span><span className="marquee-item">GIT</span><span className="marquee-item">SQL</span><span className="marquee-item">LÓGICA</span><span className="marquee-item">IA</span>
            <span className="marquee-item">PYTHON</span><span className="marquee-item">BACKEND</span><span className="marquee-item">APIs REST</span><span className="marquee-item">GIT</span><span className="marquee-item">SQL</span><span className="marquee-item">LÓGICA</span><span className="marquee-item">IA</span>
          </div>
        </div>
        <div className="wrap">
          <div className="skills-grid reveal">
            <div className="skill" data-n="/01"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m8 6-5 6 5 6M16 6l5 6-5 6" /></svg></div><h3>Python</h3><p data-i18n="sk1.p">Linguagem principal para backend e IA</p></div>
            <div className="skill" data-n="/02"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></svg></div><h3 data-i18n="sk2.h">Backend</h3><p data-i18n="sk2.p">Sistemas robustos e bem estruturados</p></div>
            <div className="skill" data-n="/03"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg></div><h3>APIs REST</h3><p data-i18n="sk3.p">Criação e consumo de APIs</p></div>
            <div className="skill" data-n="/04"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="9" r="2.5" /><path d="M6 8.5v7M8.3 7.2 15.7 8.4M18 11.5c0 4-5 2.5-12 4.5" /></svg></div><h3>Git &amp; GitHub</h3><p data-i18n="sk4.p">Versionamento e colaboração</p></div>
            <div className="skill" data-n="/05"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg></div><h3 data-i18n="sk5.h">Banco de Dados</h3><p data-i18n="sk5.p">SQL e NoSQL</p></div>
            <div className="skill" data-n="/06"><div className="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3a4 4 0 0 0-4 4 3.5 3.5 0 0 0-2 6.3A3.5 3.5 0 0 0 8 20a4 4 0 0 0 8 0 3.5 3.5 0 0 0 2-6.7A3.5 3.5 0 0 0 16 7a4 4 0 0 0-4-4Z" /><path d="M12 3v18" /></svg></div><h3 data-i18n="sk6.h">Lógica</h3><p data-i18n="sk6.p">Resolução estruturada de problemas</p></div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="block alt" id="projetos">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow"><span className="idx">04</span> <span data-i18n="s4.eyebrow">Projetos</span></span>
              <h2 className="sec-title" data-parallax="0.06" data-i18n="s4.title" style={{ marginTop: 22 }}>Coisas que <em>construí</em></h2>
            </div>
          </div>
          <div className="proj-list">
            <div className="tilt reveal-cine" data-tilt="5">
              <article className="proj feat">
                <div className="proj-media"><div className="glow" /><img className="proj-shot" src="/img/shot-a.png" alt="QuebraDica Sorocaba" loading="lazy" decoding="async" /></div>
                <div className="proj-body">
                  <div className="proj-top"><span className="proj-kicker" data-i18n="pj1.kick">★ Projeto principal</span><div className="arrow">{arrowUR}</div></div>
                  <h3>QuebraDica Sorocaba</h3>
                  <p data-i18n="pj1.p">Portal colaborativo para moradores de Sorocaba compartilharem dicas úteis da cidade — serviços, oportunidades, lugares e informações importantes da comunidade.</p>
                  <div className="proj-foot">
                    <span className="status-chip online"><span className="d" /><span data-i18n="proj.online">Online</span></span>
                    <div className="proj-links">
                      <a href="https://rvalves10.github.io/Quebra-Dica-Sorocaba/" target="_blank" rel="noopener" data-i18n="proj.view">Ver projeto ↗</a>
                      <a href="https://github.com/rvalves10/Quebra-Dica-Sorocaba" target="_blank" rel="noopener" data-i18n="proj.code">Código</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="tilt reveal-cine" data-tilt="5" data-d="1">
              <article className="proj feat">
                <div className="proj-media"><div className="glow" /><img className="proj-shot" src="/img/shot-b.png" alt="Jéssica Cílios" loading="lazy" decoding="async" style={{ objectPosition: 'center' }} /></div>
                <div className="proj-body">
                  <div className="proj-top"><span className="proj-kicker" data-i18n="pj2.kick">◆ Trabalho freelance</span><div className="arrow">{arrowUR}</div></div>
                  <h3 data-i18n="pj2.h">Jéssica Cílios — Portfólio</h3>
                  <p data-i18n="pj2.p">Plataforma de apresentação de projetos e habilidades para uma profissional de tecnologia, destacando experiências, projetos e competências técnicas.</p>
                  <div className="proj-foot">
                    <span className="status-chip online"><span className="d" /><span data-i18n="proj.online">Online</span></span>
                    <div className="proj-links">
                      <a href="https://v0-site-jessica-sobrancelhas.vercel.app/" target="_blank" rel="noopener" data-i18n="proj.view">Ver projeto ↗</a>
                      <a href="https://github.com/rvalves10/v0-site-jessica-sobrancelhas" target="_blank" rel="noopener" data-i18n="proj.code">Código</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="tilt reveal-cine" data-tilt="5" data-d="2">
              <article className="proj feat">
                <div className="proj-media">
                  <div className="glow" />
                  <div className="proj-mark">
                    <span className="proj-mark-name">&lt;DevLingo/&gt;</span>
                    <span className="proj-mark-tag" data-i18n="pj5.media">Python · IA · gamificação</span>
                  </div>
                </div>
                <div className="proj-body">
                  <div className="proj-top"><span className="proj-kicker" data-i18n="pj5.kick">◇ Projeto pessoal</span><div className="arrow">{arrowUR}</div></div>
                  <h3>DevLingo</h3>
                  <p data-i18n="pj5.p">Plataforma para aprender lógica de programação de forma gamificada — lições interativas, código Python rodando no navegador e um tutor com IA.</p>
                  <div className="proj-foot">
                    <span className="status-chip online"><span className="d" /><span data-i18n="proj.online">Online</span></span>
                    <div className="proj-links">
                      <a href="https://dev-lingo-gray.vercel.app" target="_blank" rel="noopener" data-i18n="proj.view">Ver projeto ↗</a>
                      <a href="https://github.com/rvalves10/DevLingo" target="_blank" rel="noopener" data-i18n="proj.code">Código</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="proj-sub">
              <div className="tilt reveal-cine" data-tilt="9" data-d="2">
                <article className="proj mini">
                  <div className="proj-body">
                    <div className="proj-top"><span className="proj-kicker" data-i18n="pj3.kick">⚡ Em desenvolvimento</span><div className="arrow">{arrowUR}</div></div>
                    <h3 data-i18n="pj3.h">Chatbot de Educação Financeira</h3>
                    <p data-i18n="pj3.p">Chatbot com IA voltado para ensinar educação financeira de forma acessível para jovens e adultos.</p>
                    <div className="proj-foot"><span className="status-chip dev"><span className="d" /><span data-i18n="pj3.status">Em desenvolvimento · 20%</span></span></div>
                  </div>
                </article>
              </div>
              <div className="tilt reveal-cine" data-tilt="9" data-d="3">
                <article className="proj mini" style={{ borderStyle: 'dashed', background: 'transparent' }}>
                  <div className="proj-body" style={{ justifyContent: 'center', alignItems: 'flex-start', gap: 12 }}>
                    <span className="proj-kicker" data-i18n="pj4.kick">∞ Próximo</span>
                    <h3 style={{ color: 'var(--muted)' }} data-i18n="pj4.h">Seu projeto aqui</h3>
                    <p data-i18n="pj4.p">Sempre construindo. O próximo experimento em backend ou IA já está a caminho.</p>
                    <a href="https://github.com/rvalves10" target="_blank" rel="noopener" className="proj-links" style={{ marginTop: 8 }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', textTransform: 'uppercase' }} data-i18n="pj4.link">Ver GitHub ↗</span></a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMINAL */}
      <section className="block" id="terminal">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow"><span className="idx">05</span> <span data-i18n="s5.eyebrow">Terminal</span></span>
              <h2 className="sec-title" data-i18n="s5.title" style={{ marginTop: 22 }}>Me conheça via <em>shell</em></h2>
            </div>
            <p data-i18n="s5.side" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', maxWidth: 260 }}>Um terminal de verdade. Digite comandos e explore — começa com <b style={{ color: 'var(--accent)' }}>help</b>.</p>
          </div>
          <div className="term-wrap reveal">
            <div className="term-bar"><div className="dots"><i style={{ background: '#ff5f56' }} /><i style={{ background: '#ffbd2e' }} /><i style={{ background: '#27c93f' }} /></div><span className="t">richard@portfolio: ~</span></div>
            <div className="term-body" id="term-body">
              <div className="term-line keep" data-i18n="term.w1">Bem-vindo ao terminal de Richard Victor · v2.0</div>
              <div className="term-line keep" data-i18n="term.w2">Digite &apos;help&apos; para ver os comandos disponíveis.</div>
              <div className="term-line keep">&nbsp;</div>
              <div className="term-input-row"><span>$</span><input id="term-input" type="text" autoComplete="off" spellCheck={false} aria-label="Terminal" /></div>
            </div>
          </div>
          <p className="term-hint" data-i18n="term.hint">experimente: <b>sobre</b> · <b>skills</b> · <b>projetos</b> · <b>secret</b></p>
        </div>
      </section>

      {/* CERTIFICADOS */}
      <section className="block alt" id="certificados">
        <div className="wrap">
          <div className="sec-head reveal">
            <div>
              <span className="eyebrow"><span className="idx">06</span> <span data-i18n="s6.eyebrow">Certificados</span></span>
              <h2 className="sec-title" data-i18n="s6.title" style={{ marginTop: 22 }}>Prova de <em>dedicação</em></h2>
            </div>
          </div>
          <div className="cert-bignum reveal">
            <div className="n" data-count="24">0<em>+</em></div>
            <div className="meta" data-i18n="cert.meta">certificações e cursos concluídos durante minha jornada de aprendizado contínuo em tecnologia.</div>
          </div>
          <div className="cert-filters reveal">
            <button className="chip active" data-cat="all" data-i18n="cert.all">Todos</button>
            <button className="chip" data-cat="programming" data-i18n="cert.prog">Programação</button>
            <button className="chip" data-cat="data" data-i18n="cert.data">Dados &amp; IA</button>
            <button className="chip" data-cat="soft-skills" data-i18n="cert.soft">Soft Skills</button>
            <button className="chip" data-cat="other" data-i18n="cert.other">Outros</button>
          </div>
          <div className="cert-grid" id="cert-grid" />
          <div className="cert-more"><button className="btn btn-ghost" id="cert-more-btn" data-magnetic>+ Ver todos</button></div>
          <div className="cert-repo reveal" data-i18n="cert.repo">Todos os certificados estão no <a href="https://github.com/rvalves10/certificados" target="_blank" rel="noopener">repositório do GitHub ↗</a></div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="contact" id="contato">
        <div className="wrap">
          <div className="reveal">
            <span className="eyebrow"><span className="idx">07</span> <span data-i18n="s7.eyebrow">Contato</span></span>
            <h2 className="contact-big" data-i18n="s7.title" style={{ marginTop: 26 }}>Vamos<br />construir <em>juntos?</em></h2>
          </div>
          <div className="contact-row">
            <div className="contact-links reveal" data-d="1">
              <a className="clink" href="mailto:richardvic12@gmail.com"><span><span className="l" data-i18n="contact.email_l">E-mail</span><br /><span className="v">richardvic12@gmail.com</span></span><span className="ar">↗</span></a>
              <a className="clink" href="https://github.com/rvalves10" target="_blank" rel="noopener"><span><span className="l">GitHub</span><br /><span className="v">github.com/rvalves10</span></span><span className="ar">↗</span></a>
              <a className="clink" href="https://www.linkedin.com/in/richard-victor-3611a5303/" target="_blank" rel="noopener"><span><span className="l">LinkedIn</span><br /><span className="v">/in/richard-victor</span></span><span className="ar">↗</span></a>
            </div>
            <a href="mailto:richardvic12@gmail.com" className="btn btn-primary reveal" data-d="2" data-magnetic data-i18n="contact.send" style={{ fontSize: 14, padding: '20px 32px' }}>Enviar e-mail ✉</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="copy" data-i18n="footer.copy">© <span id="year">2026</span> <b>Richard Victor</b> · feito com Python no coração 🐍</span>
          <a href="#top" className="to-top"><span data-i18n="footer.top">voltar ao topo</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg></a>
        </div>
      </footer>
    </>
  );
}
