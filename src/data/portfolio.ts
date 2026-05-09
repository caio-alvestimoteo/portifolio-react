import type {
  ChipItem,
  ContactItem,
  Metric,
  NavSection,
  ParallaxLayer,
  SocialLink,
  StackGroup,
  Stat,
  TimelineEntry
} from '../types';

export const stats: Stat[] = [
  {
    id: 'years',
    value: '15+',
    label: 'anos transformando problemas em soluções reais',
    description:
      'De evolução do <strong>suporte técnico</strong> à <strong>arquitetura de software</strong>. O foco sempre foi o usuário, ajudar a reduzir tarefas repetitivas, automatizar e destravar a operação do dia a dia.'
  },
  {
    id: 'fronts',
    value: '07',
    label: 'frentes de atuação em tecnologia',
    description:
      'Atuação sênior passando por <strong>desenvolvimento front-end, plataformas de e-commerce, integrações de APIs</strong> e liderança técnica de times em projetos críticos.'
  },
  {
    id: 'year',
    value: '2021',
    label: 'dulaso tecnologia - inovação empresarial',
    description:
      'Conectando LLMs a fluxos reais de trabalho. Construindo o <strong>Jaime</strong> (assistente local em Node.js/Ollama) focado em privacidade, agentes e automações.'
  }
];

export const chips: ChipItem[] = [
  { name: 'Node.js' },
  { name: 'TypeScript' },
  { name: 'PHP' },
  { name: 'Ollama' },
  { name: 'APIs' },
  { name: 'Automações' },
  { name: 'E-commerce' },
  { name: 'IA Aplicada' }
];

export const manifestData = {
  eyebrow: '02 / MANIFESTO',
  title: 'MOMENTO',
  accent: 'ATUAL.',
  paragraphs: [
    'Toda a minha trajetória em tecnologia foi construída na prática, ouvindo pessoas e entendendo problemas reais de empresas. Ao longo de mais de 15 anos, transitei entre suporte técnico, desenvolvimento web, e-commerce, arquitetura de APIs e liderança de times.',
    'Hoje, levo essa fundação sólida para o universo da Inteligência Artificial aplicada. Meu foco é prático: conectar modelos de linguagem a sistemas, APIs e fluxos de trabalho reais.'
  ]
};

export const timelineData: TimelineEntry[] = [
  {
    id: 'network',
    year: 2010,
    code: '01',
    title: 'Redes de Computadores',
    period: '2010 — 2012',
    badge: 'Formação',
    company: 'Faculdade Impacta',
    description:
      'O início foi na infraestrutura. Aprender redes e raciocínio sistêmico me deu a base para ler ambientes técnicos complexos.'
  },
  {
    id: 'support',
    year: 2011,
    code: '02',
    title: 'Analista de Suporte',
    period: '2011 — 2014',
    badge: 'Operação',
    company: 'Prowork',
    description:
      'Suporte a usuários de PDV por telefone. Criei manuais e treinamentos que reduziram o volume de chamados — e o tempo liberado virou oportunidade para aprender a programar soluções integradas ao banco de dados Progress.'
  },
  {
    id: 'ads',
    year: 2013,
    code: '03',
    title: 'Análise e Desenvolvimento de Sistemas',
    period: '2013 — 2015',
    badge: 'Formação',
    company: 'Faculdade Impacta',
    description:
      'A vontade de construir soluções de forma mais robusta me levou ao desenvolvimento de software e consolidou minha transição definitiva para o web.'
  },
  {
    id: 'frontend',
    year: 2015,
    code: '04',
    title: 'Desenvolvedor Front-end',
    period: '2015 — 2017',
    badge: 'Front-end',
    company: 'Vitrio',
    description:
      'Desenvolvimento front-end em e-commerces, landing pages e GTM. Integração próxima com Design e Projetos introduziu Agile, GRIDs e Git ao time — e de lá saíram os primeiros templates reutilizáveis para novos projetos.'
  },
  {
    id: 'leadership',
    year: 2017,
    code: '05',
    title: 'Líder Técnico',
    period: '2017 — 2019',
    badge: 'Liderança',
    company: 'Avanti! Tecnologia',
    description:
      'Manutenção de e-commerces legados com JavaScript intenso. Virei referência técnica do time, desobstruindo impedimentos e treinando novos colaboradores. Promovido a Líder Técnico: estruturei práticas de Agile, versionamento e padrões de desenvolvimento.'
  },
  {
    id: 'integration',
    year: 2020,
    code: '06',
    title: 'Programador Sênior',
    period: '2020 — 2021',
    badge: 'Integração',
    company: 'Performa_IT',
    description:
      'Sênior com foco em discovery e integrações com marketplaces — evoluções e correções de bugs para atender demandas críticas de plataforma. Em paralelo, treinei e orientei programadores nas melhores práticas do ambiente.'
  },
  {
    id: 'consulting',
    year: 2021,
    code: '07',
    title: 'Consultor & Dev Sênior PJ',
    period: '2026 — atual',
    badge: 'Consultoria',
    company: 'Autônomo',
    description:
      'Abertura da empresa em novembro de 2021. Um período rico de intensa comunicação com diferentes áreas e setores, aprendendo sobre negócios e como a tecnologia pode impulsionar a evolução de empresas.',
    subsections: [
      {
        year: 2021,
        company: 'eNext',
        badge: 'E-commerce',
        description:
          'Capacitei e gerenciei um time júnior de desenvolvedores para atender os e-commerces da agência. Participei de rituais Ágeis e atuei como elo entre Designers, Gerentes de Projetos, Desenvolvedores e Diretoria.'
      },
      {
        year: 2022,
        company: 'Dendrix',
        badge: 'E-commerce',
        description:
          'Evoluções em nova versão do e-commerce: reestruturação de páginas para responsividade e melhoria dos fluxos de cadastro e pagamento. Trabalho próximo ao negócio para refinar a UX do produto final.'
      },
      {
        year: 2023,
        company: 'Jobspace',
        badge: 'Template & Treino',
        description:
          'Desenvolvimento de template reutilizável para a agência, manutenção e evolução de e-commerces. Ministrei dois treinamentos técnicos de 6 meses para o time interno de desenvolvedores.'
      },
      {
        year: 2025,
        company: 'Simplie',
        badge: 'Full Stack',
        description:
          'Atuação próxima a clientes e parceiros, validando ideias e evoluindo e-commerces. Desenvolvimento e integrações com ferramentas para atender demandas de negócio.'
      },
      {
        year: 2026,
        company: 'Growe',
        badge: 'Tech Lead',
        description:
          'Início como Tech Lead, direcionando decisões técnicas e arquitetura. Desenvolvimento Full Stack PHP de ecossistemas robustos — do banco de dados às interfaces — garantindo escalabilidade e performance em ambientes complexos.'
      }
    ]
  }
];

export const techStack: Metric[] = [
  { label: 'IA Aplicada', value: 'Aprofundamento prático' },
  { label: 'Automações', value: 'Soluções internas' },
  { label: 'Integrações', value: 'Bagagem sólida' },
  { label: 'Liderança Técnica', value: 'Mentoria + arquitetura' },
  { label: 'IA Local / Ollama', value: 'Projeto Jaime em evolução' }
];

export const projectData = {
  eyebrow: '04 / LABORATÓRIO PRÁTICO — JAIME // ASSISTENTE LOCAL DE IA',
  title: 'Jaime',
  intro:
    'Assistente local de IA em Node.js e TypeScript, integrado ao Ollama. Meu laboratório prático para estudar IA Aplicada, privacidade, CLI, automações e agentes com base em código real.',
  quote:
    'Mais do que parecer especialista em IA, o Jaime mostra meu caminho real: aprender construindo, conectar bagagem de dev sênior a IA Aplicada e transformar estudo em ferramenta útil.',
  tags: ['Node.js', 'TypeScript', 'Ollama', 'LLMs locais', 'CLI', 'Markdown', 'Linux', 'Agentes', 'MCP'],
  panels: [
    {
      title: 'Estrutura',
      eyebrow: 'roadmap do assistente',
      blocks: [
        {
          label: 'Arquitetura',
          text:
            'Motor em Node.js + TypeScript com separação de responsabilidades. Ollama gerenciando LLMs locais com streaming, memória e salvamento em Markdown.'
        },
        {
          label: 'Evolução',
          text: 'Roadmap para agentes, MCP (Model Context Protocol) e automações CLI-first.'
        }
      ]
    },
    {
      title: 'Posicionamento',
      eyebrow: 'direção profissional',
      blocks: [
        {
          label: 'Resumo',
          text: 'Crescer em IA Aplicada sem apagar a base: dev, integrações, produto, liderança técnica.'
        }
      ]
    }
  ]
};

export const skillsData = {
  eyebrow: '05 / STACK / COMPETÊNCIAS',
  title: 'Competências',
  sub: 'Stack core, formação e idiomas'
};

export const stackGroups: StackGroup[] = [
  {
    num: '01',
    title: 'IA Aplicada',
    sub: 'foco atual',
    featured: true,
    tags: [
      { label: 'IA Aplicada', accent: 'red' },
      { label: 'Agentes de IA', accent: 'red' },
      { label: 'Prompt Engineering' },
      { label: 'Ollama' },
      { label: 'IA Local' },
      { label: 'MCP' },
      { label: 'Automação de Processos' }
    ]
  },
  {
    num: '02',
    title: 'Engenharia',
    sub: 'core técnico',
    tags: [
      { label: 'Node.js' },
      { label: 'TypeScript' },
      { label: 'JavaScript' },
      { label: 'PHP' },
      { label: 'APIs' },
      { label: 'Integrações' },
      { label: 'Full Stack' },
      { label: 'Front-end' },
      { label: 'E-commerce' }
    ]
  },
  {
    num: '03',
    title: 'Liderança & Tooling',
    sub: 'operação',
    tags: [
      { label: 'Liderança Técnica', accent: 'cyan' },
      { label: 'Mentoria' },
      { label: 'Análise de Requisitos' },
      { label: 'Git' },
      { label: 'Linux' },
      { label: 'CLI' },
      { label: 'Bancos de Dados' },
      { label: 'RD Station' },
      { label: 'GTM' }
    ]
  },
  {
    num: '04',
    title: 'Formação & Idiomas',
    sub: 'background',
    tags: [
      { label: 'ADS / Impacta · 2013-2015' },
      { label: 'Redes / Impacta · 2010-2012' },
      { label: 'PT-BR · Nativo' },
      { label: 'EN · Profissional' }
    ]
  }
];

export const footerCopy = {
  title: 'FIM\nDO ARQUIVO.',
  description:
    'Suporte, front-end, e-commerce, integrações, liderança técnica e a fase atual de aprofundamento em IA Aplicada. O Jaime entra como prova prática dessa transição.'
};

export const footerContacts: ContactItem[] = [
  { label: 'Github', value: 'caio-alvestimoteo' },
  { label: 'Local', value: 'São Paulo / BR' },
  { label: 'Sector', value: '03A-77' }
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://wa.me/5511989938101',
    label: 'WhatsApp',
    tip: 'WHATSAPP / +55 11 98993-8101',
    kind: 'whatsapp'
  },
  {
    href: 'https://www.linkedin.com/in/ccesaralvest',
    label: 'LinkedIn',
    tip: 'LINKEDIN / ccesaralvest',
    kind: 'linkedin'
  },
  {
    href: 'https://github.com/caio-alvestimoteo',
    label: 'GitHub',
    tip: 'GITHUB / caio-alvestimoteo',
    kind: 'github'
  },
  {
    href: 'https://github.com/caio-alvestimoteo?tab=repositories',
    label: 'Jaime',
    tip: 'JAIME / SITE DEDICADO',
    kind: 'jaime'
  }
];

export const navSections: NavSection[] = [
  { id: 'hero', name: 'HERO' },
  { id: 'manifest', name: 'MOMENTO' },
  { id: 'timeline', name: 'JORNADA' },
  { id: 'project', name: 'JAIME' },
  { id: 'skills', name: 'STACK' },
  { id: 'footer', name: 'FIM' }
];

export const parallaxLayers: ParallaxLayer[] = [
  {
    text: 'EVOLUTION',
    top: '8vh',
    side: 'left',
    offset: '-5vw',
    fontSize: 'clamp(180px, 28vw, 480px)',
    color: 'rgba(215, 38, 56, 0.06)',
    px: -0.05,
    py: 0.15
  },
  {
    text: 'BUSHIDO',
    top: '32vh',
    side: 'right',
    offset: '-10vw',
    fontSize: 'clamp(220px, 32vw, 560px)',
    color: 'rgba(10, 8, 8, 0.05)',
    px: 0.04,
    py: 0.35
  },
  {
    text: '人工知能',
    top: '60vh',
    side: 'left',
    offset: '-2vw',
    fontSize: 'clamp(140px, 22vw, 380px)',
    color: 'rgba(10, 8, 8, 0.07)',
    px: -0.03,
    py: 0.5,
    japanese: true
  },
  {
    text: '2026',
    top: '90vh',
    side: 'right',
    offset: '-6vw',
    fontSize: 'clamp(160px, 24vw, 420px)',
    color: 'rgba(215, 38, 56, 0.05)',
    px: 0.06,
    py: 0.7
  },
  {
    text: 'JAIME',
    top: '130vh',
    side: 'left',
    offset: '-8vw',
    fontSize: 'clamp(180px, 26vw, 460px)',
    color: 'rgba(10, 8, 8, 0.05)',
    px: -0.04,
    py: 0.25
  },
  {
    text: '未来',
    top: '170vh',
    side: 'right',
    offset: '-2vw',
    fontSize: 'clamp(140px, 22vw, 380px)',
    color: 'rgba(215, 38, 56, 0.06)',
    px: 0.04,
    py: 0.55,
    japanese: true
  },
  {
    text: 'STACK',
    top: '220vh',
    side: 'left',
    offset: '-10vw',
    fontSize: 'clamp(180px, 28vw, 480px)',
    color: 'rgba(10, 8, 8, 0.06)',
    px: -0.03,
    py: 0.4
  },
  {
    text: '人工知能',
    top: '270vh',
    side: 'right',
    offset: '-4vw',
    fontSize: 'clamp(140px, 22vw, 380px)',
    color: 'rgba(10, 8, 8, 0.06)',
    px: 0.05,
    py: 0.6,
    japanese: true
  },
  {
    text: 'EOF.',
    top: '320vh',
    side: 'left',
    offset: '-6vw',
    fontSize: 'clamp(160px, 24vw, 420px)',
    color: 'rgba(215, 38, 56, 0.06)',
    px: -0.04,
    py: 0.3
  }
];
