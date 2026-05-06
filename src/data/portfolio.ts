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
    label: 'aprofundamento prático em IA Aplicada',
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
      'Primeira imersão em problemas reais. Atendendo usuários de PDV, comecei a documentar soluções, criar treinamentos e programar pequenos scripts.'
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
      'Criei interfaces otimizadas para campanhas de e-commerce e landing pages, conectando design e tecnologia com foco em performance e responsividade.'
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
      'Mantive sistemas legados e estruturei padrões novos. Liderança técnica virou treino de pessoas, revisão de processos e remoção de obstáculos.'
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
      'Mergulho em integrações profundas, estabilidade de marketplaces e conexões entre sistemas legados, orientando equipe e reduzindo retrabalho.'
  },
  {
    id: 'ai',
    year: 2021,
    code: '07',
    title: 'Sênior / IA Aplicada',
    period: '2021 — atual',
    badge: 'IA Aplicada',
    company: 'Growe / Consultoria',
    description:
      'Síntese da bagagem em projetos críticos, decisões de arquitetura, full stack PHP, escalabilidade e imersão prática em IA aplicada com agentes e automações.'
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
