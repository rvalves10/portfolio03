/* ============================================================
   i18n — PT / EN  ·  Richard Victor portfolio
   Static strings are applied to [data-i18n] / [data-i18n-ph].
   Dynamic modules (terminal, boot, cmdk, whoami, greeting,
   typewriter, certificates) read window.__dyn().
   ============================================================ */
// @ts-nocheck
export function initI18n() {
  const I18N = {
    pt: {
      'nav.about': 'Sobre', 'nav.journey': 'Jornada', 'nav.skills': 'Skills', 'nav.projects': 'Projetos', 'nav.terminal': 'Terminal', 'nav.certs': 'Certificados', 'nav.contact': 'Contato',
      'hero.status': 'Disponível para novos projetos',
      'hero.hint': 'passe o mouse pelo texto',
      'hero.sub1': 'Estudante de tecnologia transformando ideias em ',
      'hero.sub2': '. Do <span class="ser">zero ao deploy</span> — uma linha de cada vez.',
      'hero.cta1': 'Ver projetos <span class="ic">↓</span>',
      'hero.cta2': 'Contato <span class="ic">↗</span>',
      's1.eyebrow': 'Sobre mim',
      's1.title': 'Quem está <em>por trás</em><br/>do código',
      's1.lead': 'Sou o <b>Richard Victor</b>, estudante de <span class="ser">Análise e Desenvolvimento de Sistemas</span> e apaixonado por construir coisas que funcionam de verdade. Hoje meu foco é desenvolvimento <b>backend</b>, APIs e <b>inteligência artificial</b> — construindo projetos que buscam gerar impacto real.',
      'fact.loc': 'Localização', 'fact.locv': 'Sorocaba, Brasil',
      'fact.edu': 'Formação', 'fact.eduv': 'ADS — em curso',
      'fact.stack': 'Stack atual', 'fact.stackv': 'Python · APIs',
      'fact.goal': 'Objetivo', 'fact.goalv': 'Engenheiro de IA',
      's2.eyebrow': 'Minha jornada', 's2.title': 'Do autodidata<br/>ao <em>engenheiro</em>', 's2.side': 'Uma linha do tempo da evolução — onde comecei e para onde estou indo.',
      'tl1.tag': 'o início', 'tl1.h': 'Início da jornada', 'tl1.p': 'Comecei a estudar programação de forma autodidata e descobri uma paixão real por tecnologia e desenvolvimento.',
      'tl2.tag': 'primeiro código', 'tl2.h': 'Primeiro projeto real', 'tl2.p': 'Desenvolvi meu primeiro sistema de gerenciamento, colocando em prática tudo o que vinha aprendendo.',
      'tl3.tag': 'faculdade', 'tl3.h': 'Ingresso em ADS', 'tl3.p': 'Entrei no curso de Análise e Desenvolvimento de Sistemas, aprofundando a base teórica e prática.',
      'tl4.tag': 'especialização', 'tl4.h': 'Foco em backend', 'tl4.p': 'Decidi me especializar em desenvolvimento backend com Python, APIs e boas práticas de engenharia.',
      'tl5.year': 'FUTURO', 'tl5.tag': 'o objetivo', 'tl5.h': 'Engenharia de IA', 'tl5.p': 'Tornar-me engenheiro de inteligência artificial, construindo sistemas que aprendem e geram impacto.',
      's3.eyebrow': 'Habilidades', 's3.title': 'Ferramentas do <em>ofício</em>',
      'sk1.p': 'Linguagem principal para backend e IA',
      'sk2.h': 'Backend', 'sk2.p': 'Sistemas robustos e bem estruturados',
      'sk3.p': 'Criação e consumo de APIs',
      'sk4.p': 'Versionamento e colaboração',
      'sk5.h': 'Banco de Dados', 'sk5.p': 'SQL e NoSQL',
      'sk6.h': 'Lógica', 'sk6.p': 'Resolução estruturada de problemas',
      's4.eyebrow': 'Projetos', 's4.title': 'Coisas que <em>construí</em>',
      'pj1.kick': '★ Projeto principal', 'pj1.p': 'Portal colaborativo para moradores de Sorocaba compartilharem dicas úteis da cidade — serviços, oportunidades, lugares e informações importantes da comunidade.',
      'pj2.kick': '◆ Trabalho freelance', 'pj2.h': 'Jéssica Cílios — Portfólio', 'pj2.p': 'Plataforma de apresentação de projetos e habilidades para uma profissional de tecnologia, destacando experiências, projetos e competências técnicas.',
      'pj3.kick': '⚡ Em desenvolvimento', 'pj3.h': 'Chatbot de Educação Financeira', 'pj3.p': 'Chatbot com IA voltado para ensinar educação financeira de forma acessível para jovens e adultos.', 'pj3.status': 'Em desenvolvimento · 20%',
      'pj4.kick': '∞ Próximo', 'pj4.h': 'Seu projeto aqui', 'pj4.p': 'Sempre construindo. O próximo experimento em backend ou IA já está a caminho.', 'pj4.link': 'Ver GitHub ↗',
      'proj.view': 'Ver projeto ↗', 'proj.code': 'Código', 'proj.online': 'Online',
      'nav.github': 'GitHub', 's8.eyebrow': 'Código aberto', 's8.title': 'Direto do <em>GitHub</em>', 's8.side': 'Repositórios e atividade reais, puxados ao vivo da API do GitHub.', 'gh.repos': 'repositórios', 'gh.langs': 'linguagens', 'gh.since': 'no GitHub desde', 'gh.stars': 'estrelas', 'gh.loading': 'carregando repositórios…', 'gh.error': 'não deu pra carregar agora —', 'gh.profile': 'Ver perfil no GitHub ↗',
      's5.eyebrow': 'Terminal', 's5.title': 'Me conheça via <em>shell</em>', 's5.side': 'Um terminal de verdade. Digite comandos e explore — começa com <b style="color:var(--accent);">help</b>.',
      'term.w1': 'Bem-vindo ao terminal de Richard Victor · v2.0', 'term.w2': "Digite 'help' para ver os comandos disponíveis.",
      'term.hint': 'experimente: <b>sobre</b> · <b>skills</b> · <b>projetos</b> · <b>secret</b>',
      's6.eyebrow': 'Certificados', 's6.title': 'Prova de <em>dedicação</em>', 'cert.meta': 'certificações e cursos concluídos durante minha jornada de aprendizado contínuo em tecnologia.',
      'cert.all': 'Todos', 'cert.prog': 'Programação', 'cert.data': 'Dados & IA', 'cert.soft': 'Soft Skills', 'cert.other': 'Outros',
      'cert.repo': 'Todos os certificados estão no <a href="https://github.com/rvalves10/certificados" target="_blank" rel="noopener">repositório do GitHub ↗</a>',
      's7.eyebrow': 'Contato', 's7.title': 'Vamos<br/>construir <em>juntos?</em>', 'contact.send': 'Enviar e-mail ✉', 'contact.email_l': 'E-mail',
      'footer.copy': '© <span id="year">2026</span> <b>Richard Victor</b> · feito com Python no coração 🐍', 'footer.top': 'voltar ao topo',
      'boot.skip': '[ esc ] pular', 'cmdk.ph': 'buscar seção, ação, link…', 'cmdk.nav': 'navegar', 'cmdk.open': 'abrir'
    },
    en: {
      'nav.about': 'About', 'nav.journey': 'Journey', 'nav.skills': 'Skills', 'nav.projects': 'Projects', 'nav.terminal': 'Terminal', 'nav.certs': 'Certificates', 'nav.contact': 'Contact',
      'hero.status': 'Available for new projects',
      'hero.hint': 'hover over the text',
      'hero.sub1': 'Tech student turning ideas into ',
      'hero.sub2': '. From <span class="ser">zero to deploy</span> — one line at a time.',
      'hero.cta1': 'View projects <span class="ic">↓</span>',
      'hero.cta2': 'Contact <span class="ic">↗</span>',
      's1.eyebrow': 'About me',
      's1.title': 'Who is <em>behind</em><br/>the code',
      's1.lead': "I'm <b>Richard Victor</b>, a <span class=\"ser\">Systems Analysis &amp; Development</span> student passionate about building things that truly work. My focus today is <b>backend</b> development, APIs and <b>artificial intelligence</b> — building projects that aim to create real impact.",
      'fact.loc': 'Location', 'fact.locv': 'Sorocaba, Brazil',
      'fact.edu': 'Education', 'fact.eduv': 'CS degree — ongoing',
      'fact.stack': 'Current stack', 'fact.stackv': 'Python · APIs',
      'fact.goal': 'Goal', 'fact.goalv': 'AI Engineer',
      's2.eyebrow': 'My journey', 's2.title': 'From self-taught<br/>to <em>engineer</em>', 's2.side': "A timeline of the evolution — where I started and where I'm heading.",
      'tl1.tag': 'the start', 'tl1.h': 'The journey begins', 'tl1.p': 'I started studying programming on my own and discovered a real passion for technology and development.',
      'tl2.tag': 'first code', 'tl2.h': 'First real project', 'tl2.p': 'I built my first management system, putting into practice everything I had been learning.',
      'tl3.tag': 'university', 'tl3.h': 'Started a CS degree', 'tl3.p': 'I enrolled in Systems Analysis &amp; Development, deepening both theory and practice.',
      'tl4.tag': 'specialization', 'tl4.h': 'Backend focus', 'tl4.p': 'I decided to specialize in backend development with Python, APIs and solid engineering practices.',
      'tl5.year': 'FUTURE', 'tl5.tag': 'the goal', 'tl5.h': 'AI Engineering', 'tl5.p': 'To become an artificial intelligence engineer, building systems that learn and generate impact.',
      's3.eyebrow': 'Skills', 's3.title': 'Tools of the <em>trade</em>',
      'sk1.p': 'Main language for backend and AI',
      'sk2.h': 'Backend', 'sk2.p': 'Robust and well-structured systems',
      'sk3.p': 'Building and consuming APIs',
      'sk4.p': 'Versioning and collaboration',
      'sk5.h': 'Databases', 'sk5.p': 'SQL and NoSQL',
      'sk6.h': 'Logic', 'sk6.p': 'Structured problem solving',
      's4.eyebrow': 'Projects', 's4.title': "Things I've <em>built</em>",
      'pj1.kick': '★ Main project', 'pj1.p': 'A collaborative portal for Sorocaba residents to share useful city tips — services, opportunities, places and important community information.',
      'pj2.kick': '◆ Freelance work', 'pj2.h': 'Jéssica Cílios — Portfolio', 'pj2.p': 'A platform to showcase the projects and skills of a tech professional, highlighting experience, projects and technical competencies.',
      'pj3.kick': '⚡ In development', 'pj3.h': 'Financial Education Chatbot', 'pj3.p': 'An AI chatbot built to teach financial education in an accessible way for young people and adults.', 'pj3.status': 'In development · 20%',
      'pj4.kick': '∞ Next', 'pj4.h': 'Your project here', 'pj4.p': 'Always building. The next experiment in backend or AI is already on the way.', 'pj4.link': 'View GitHub ↗',
      'proj.view': 'View project ↗', 'proj.code': 'Code', 'proj.online': 'Online',
      'nav.github': 'GitHub', 's8.eyebrow': 'Open source', 's8.title': 'Straight from <em>GitHub</em>', 's8.side': 'Real repositories and activity, pulled live from the GitHub API.', 'gh.repos': 'repositories', 'gh.langs': 'languages', 'gh.since': 'on GitHub since', 'gh.stars': 'stars', 'gh.loading': 'loading repositories…', 'gh.error': "couldn't load right now —", 'gh.profile': 'View GitHub profile ↗',
      's5.eyebrow': 'Terminal', 's5.title': 'Get to know me via <em>shell</em>', 's5.side': 'A real terminal. Type commands and explore — start with <b style="color:var(--accent);">help</b>.',
      'term.w1': "Welcome to Richard Victor's terminal · v2.0", 'term.w2': "Type 'help' to see the available commands.",
      'term.hint': 'try: <b>about</b> · <b>skills</b> · <b>projects</b> · <b>secret</b>',
      's6.eyebrow': 'Certificates', 's6.title': 'Proof of <em>dedication</em>', 'cert.meta': 'certifications and courses completed throughout my journey of continuous learning in technology.',
      'cert.all': 'All', 'cert.prog': 'Programming', 'cert.data': 'Data & AI', 'cert.soft': 'Soft Skills', 'cert.other': 'Other',
      'cert.repo': 'All certificates are in the <a href="https://github.com/rvalves10/certificados" target="_blank" rel="noopener">GitHub repository ↗</a>',
      's7.eyebrow': 'Contact', 's7.title': "Let's<br/>build <em>together?</em>", 'contact.send': 'Send email ✉', 'contact.email_l': 'Email',
      'footer.copy': '© <span id="year">2026</span> <b>Richard Victor</b> · made with Python at heart 🐍', 'footer.top': 'back to top',
      'boot.skip': '[ esc ] skip', 'cmdk.ph': 'search section, action, link…', 'cmdk.nav': 'navigate', 'cmdk.open': 'open'
    }
  };

  const DYN = {
    pt: {
      tw: ['código limpo', 'APIs eficientes', 'sistemas backend', 'modelos de IA'],
      greet: { dawn: 'boa madrugada', morning: 'bom dia', afternoon: 'boa tarde', evening: 'boa noite', who: 'recrutador' },
      who: [['nome', 'Richard Victor', 'str'], ['papel', 'Backend Developer', 'str'], ['local', 'Sorocaba, BR', 'str'], ['foco', ['Python', 'APIs', 'IA'], 'arr'], ['estudando', 'FastAPI', 'str'], ['objetivo', 'Engenheiro de IA', 'str'], ['café', true, 'bool']],
      cert: { cat: { programming: 'Programação', data: 'Dados & IA', 'soft-skills': 'Soft Skills', other: 'Outros' }, cred: 'Ver credencial', moreAll: '+ Ver todos', moreN: n => `+ Ver todos (${n} mais)`, less: '— Ver menos' },
      term: {
        help: ['Comandos disponíveis:', '  sobre       informações pessoais', '  skills      stack técnica', '  projetos    projetos em destaque', '  contato     formas de contato', '  github      abrir GitHub', '  linkedin    abrir LinkedIn', '  clear       limpar terminal', '  secret      ???'],
        about: ['┌─────────────────────────────────────┐', '│  Richard Victor — Backend Developer │', '├─────────────────────────────────────┤', '│  local:  Sorocaba, SP · Brasil      │', '│  curso:  Análise e Dev. de Sistemas │', '│  foco:   Python · APIs · IA         │', '└─────────────────────────────────────┘'],
        skills: ['>> stack:', '   python      [████████████] avançando', '   fastapi     [█████████░░░] praticando', '   postgresql  [████████░░░░] estudando', '   docker      [██████░░░░░░] iniciando', '   git         [██████████░░] confortável', '   ml/ia       [█████░░░░░░░] explorando'],
        projects: ['>> projetos:', '', '1. QuebraDica Sorocaba   [online]', '   portal colaborativo da comunidade', '2. Jéssica Cílios        [online]', '   portfólio profissional', '3. Chatbot Edu. Financeira [20%]', '   IA para educação financeira'],
        contact: ['>> contato:', '   email     richardvic12@gmail.com', '   github    github.com/rvalves10', '   linkedin  /in/richard-victor', '', "   dica: digite 'github' ou 'linkedin'"],
        secret: ['', '   import this', '   > "Readability counts."', '   > "Simple is better than complex."', '', '   🐍 easter egg encontrado. você é curioso — bom sinal.', ''],
        notfound: c => `comando não encontrado: ${c} — digite 'help'`, opening: x => `abrindo ${x}…`
      },
      boot: [
        { t: '$ booting richard.dev …', d: 360 },
        { t: '[<ok>  ok  </ok>] kernel: python runtime', d: 260 },
        { t: '[<ok>  ok  </ok>] módulos: backend · apis · git', d: 260 },
        { t: '[<ok>  ok  </ok>] montando /projetos (3)', d: 240 },
        { t: '[<ok>  ok  </ok>] ai.engine: aquecendo', d: 320 },
        { t: '[<ok>  ok  </ok>] certificados: 24 carregados', d: 240 },
        { t: '[<ok>  ok  </ok>] deploy: <ok>no ar</ok>', d: 360 },
        { t: '<dim>></dim> bem-vindo. sou o Richard.', d: 520 }
      ],
      cmdk: { sections: ['Sobre', 'Jornada', 'Skills', 'Projetos', 'GitHub', 'Terminal', 'Certificados', 'Contato'], theme: 'Alternar tema claro / escuro', sound: 'Som da interface on / off', github: 'Abrir GitHub', linkedin: 'Abrir LinkedIn', email: 'Enviar e-mail', kindSection: 'seção', kindAction: 'ação', kindLink: 'link', empty: 'nada encontrado' }
    },
    en: {
      tw: ['clean code', 'efficient APIs', 'backend systems', 'AI models'],
      greet: { dawn: 'good night', morning: 'good morning', afternoon: 'good afternoon', evening: 'good evening', who: 'recruiter' },
      who: [['name', 'Richard Victor', 'str'], ['role', 'Backend Developer', 'str'], ['location', 'Sorocaba, BR', 'str'], ['focus', ['Python', 'APIs', 'AI'], 'arr'], ['learning', 'FastAPI', 'str'], ['goal', 'AI Engineer', 'str'], ['coffee', true, 'bool']],
      cert: { cat: { programming: 'Programming', data: 'Data & AI', 'soft-skills': 'Soft Skills', other: 'Other' }, cred: 'View credential', moreAll: '+ View all', moreN: n => `+ View all (${n} more)`, less: '— View less' },
      term: {
        help: ['Available commands:', '  about       personal info', '  skills      tech stack', '  projects    featured projects', '  contact     ways to reach me', '  github      open GitHub', '  linkedin    open LinkedIn', '  clear       clear terminal', '  secret      ???'],
        about: ['┌─────────────────────────────────────┐', '│  Richard Victor — Backend Developer │', '├─────────────────────────────────────┤', '│  location:  Sorocaba, SP · Brazil   │', '│  studying:  Systems Analysis & Dev. │', '│  focus:     Python · APIs · AI      │', '└─────────────────────────────────────┘'],
        skills: ['>> stack:', '   python      [████████████] advancing', '   fastapi     [█████████░░░] practicing', '   postgresql  [████████░░░░] studying', '   docker      [██████░░░░░░] starting', '   git         [██████████░░] comfortable', '   ml/ai       [█████░░░░░░░] exploring'],
        projects: ['>> projects:', '', '1. QuebraDica Sorocaba   [online]', '   collaborative community portal', '2. Jéssica Cílios        [online]', '   professional portfolio', '3. Financial Edu. Chatbot  [20%]', '   AI for financial education'],
        contact: ['>> contact:', '   email     richardvic12@gmail.com', '   github    github.com/rvalves10', '   linkedin  /in/richard-victor', '', "   tip: type 'github' or 'linkedin'"],
        secret: ['', '   import this', '   > "Readability counts."', '   > "Simple is better than complex."', '', '   🐍 easter egg found. you are curious — good sign.', ''],
        notfound: c => `command not found: ${c} — type 'help'`, opening: x => `opening ${x}…`
      },
      boot: [
        { t: '$ booting richard.dev …', d: 360 },
        { t: '[<ok>  ok  </ok>] kernel: python runtime', d: 260 },
        { t: '[<ok>  ok  </ok>] modules: backend · apis · git', d: 260 },
        { t: '[<ok>  ok  </ok>] mounting /projects (3)', d: 240 },
        { t: '[<ok>  ok  </ok>] ai.engine: warming up', d: 320 },
        { t: '[<ok>  ok  </ok>] certificates: 24 loaded', d: 240 },
        { t: '[<ok>  ok  </ok>] deploy: <ok>live</ok>', d: 360 },
        { t: "<dim>></dim> welcome. I'm Richard.", d: 520 }
      ],
      cmdk: { sections: ['About', 'Journey', 'Skills', 'Projects', 'GitHub', 'Terminal', 'Certificates', 'Contact'], theme: 'Toggle light / dark theme', sound: 'Interface sound on / off', github: 'Open GitHub', linkedin: 'Open LinkedIn', email: 'Send email', kindSection: 'section', kindAction: 'action', kindLink: 'link', empty: 'nothing found' }
    }
  };

  let lang = localStorage.getItem('rv-lang');
  if (lang !== 'pt' && lang !== 'en') lang = 'pt';
  window.__lang = lang;
  window.__t = k => (I18N[window.__lang] || I18N.pt)[k];
  window.__dyn = () => DYN[window.__lang] || DYN.pt;

  function apply(l) {
    window.__lang = l;
    localStorage.setItem('rv-lang', l);
    document.documentElement.setAttribute('lang', l === 'pt' ? 'pt-BR' : 'en');
    const dict = I18N[l] || I18N.pt;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const k = el.getAttribute('data-i18n-ph');
      if (dict[k] != null) el.setAttribute('placeholder', dict[k]);
    });
    document.querySelectorAll('[data-lang-toggle] .lg').forEach(s => s.classList.toggle('on', s.classList.contains(l)));
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  }
  window.__applyLang = apply;

  document.querySelectorAll('[data-lang-toggle]').forEach(b => b.addEventListener('click', () => apply(window.__lang === 'pt' ? 'en' : 'pt')));
}
