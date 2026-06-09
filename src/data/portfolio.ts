import type {
  ChipItem,
  ContactItem,
  Metric,
  NavSection,
  ParallaxLayer,
  PreCareerEntry,
  SocialLink,
  StackGroup,
  Stat,
  TimelineEntry
} from '../types';

export const stats: Stat[] = [
  {
    id: 'years',
    value: '10+',
    label: 'anos de experiência prática em tecnologia',
    description:
      'De suporte técnico à <strong>arquitetura de software</strong>, passando por front-end, e-commerce, integrações e liderança técnica. Cada fase adicionou uma camada real de experiência.'
  },
  {
    id: 'fronts',
    value: '07',
    label: 'frentes conectadas: suporte, web, e-commerce, integrações, liderança, arquitetura e IA aplicada',
    description:
      'Atuação sênior conectando <strong>desenvolvimento, produto, operação e liderança técnica</strong> em projetos que precisam funcionar em ambientes reais de negócio.'
  },
  {
    id: 'year',
    value: 'Jaime',
    label: 'laboratório pessoal de IA local, automações e produtividade técnica',
    description:
      'Assistente local construído em <strong>Node.js e TypeScript</strong> com Ollama. Meu projeto prático para estudar IA aplicada com código real, privacidade e documentação viva.'
  }
];

export const chips: ChipItem[] = [
  { name: 'Tech Lead' },
  { name: 'IA Aplicada' },
  { name: 'Automações' },
  { name: 'Node.js' },
  { name: 'TypeScript' },
  { name: 'PHP' },
  { name: 'Ollama' },
  { name: 'APIs' },
  { name: 'E-commerce' },
  { name: 'Integrações' },
  { name: 'Arquitetura' },
  { name: 'Jaime' }
];

export const manifestData = {
  eyebrow: '02 / MANIFESTO',
  title: 'EXPERIÊNCIA REAL,',
  accent: 'PRÓXIMA FASE.',
  paragraphs: [
    'Minha carreira foi construída na prática. Comecei entendendo dificuldades de usuários, depois passei a criar interfaces, integrar sistemas, treinar desenvolvedores, apoiar decisões técnicas e participar de soluções que precisam funcionar em ambientes reais de negócio.',
    'O ponto em comum sempre foi o mesmo: ouvir o problema, entender o contexto, organizar a informação e construir algo útil. Essa forma de trabalhar me acompanha desde o suporte até a liderança técnica.',
    'Agora, levo essa base para IA aplicada. Meu foco não é tratar IA como promessa genérica, mas entender onde modelos de linguagem, automações, agentes e integrações podem reduzir retrabalho, organizar conhecimento, apoiar decisões e melhorar fluxos reais de trabalho.',
    'Acredito que a IA ganha valor quando sai do discurso e entra no processo: conectada a sistemas, documentação, APIs, times, regras de negócio, segurança e responsabilidade técnica.'
  ]
};

export const preCareerData: PreCareerEntry[] = [
  {
    year: 2005,
    title: 'Curso de Hardware',
    description: 'Primeiro contato técnico: trocava peças, formatava máquinas para amigos e família. A curiosidade virou estudo.',
    watermark: 'CPU',
  },
  {
    year: 2006,
    title: 'Linux & Kernel',
    description: 'Trabalhava com o professor do curso. Recompilava kernel do Linux — descobrindo que software tem camadas mais profundas que a interface.',
    watermark: 'KERNEL',
  },
  {
    year: 2007,
    title: 'Servidores & Cabeamento',
    description: 'Primeiro contato com ambientes corporativos: servidores Windows e cabeamento estruturado. Suporte informal com responsabilidade real.',
    watermark: 'SERVER',
  },
  {
    year: 2008,
    title: 'Manutenção Plena',
    description: 'Hardware e software em profundidade. Diagnóstico, reparo e suporte a clientes — aprendendo a resolver problemas sob pressão.',
    watermark: 'REPAIR',
  },
  {
    year: 2009,
    title: 'Primeira Assistência Técnica',
    description: 'Minha primeira empresa. Primeiro negócio próprio — e a primeira lição real sobre autonomia, cliente e entrega.',
    watermark: 'SHOP',
  },
];

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
      'A formação em redes foi uma das primeiras bases da minha visão técnica. Ela me ensinou a pensar em camadas, conexões, dependências e pontos de falha. Antes de propor uma solução, é preciso entender como o sistema funciona.',
    chips: [
      { name: 'TCP/IP', accent: 'cyan' },
      { name: 'Infraestrutura', accent: 'cyan' },
      { name: 'Redes LAN/WAN' },
      { name: 'Raciocínio sistêmico' },
    ],
    events: [
      { date: '2010', label: 'Início do curso de Redes' },
      { date: '2012', label: 'Conclusão e entrada no mercado' },
    ],
    tips: [
      'Redes ensinam a pensar em camadas — igual a software.',
      'Base lógica que sustenta tudo que veio depois.',
    ],
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
      'No suporte técnico, aprendi a ouvir usuários, entender dificuldades reais e identificar padrões em problemas recorrentes. Atendendo usuários de PDV, percebi que muitas dores não dependiam apenas de código, mas de clareza, documentação, treinamento e melhoria de processo.',
    chips: [
      { name: 'PDV / Totvs' },
      { name: 'Progress DB' },
      { name: 'Documentação' },
      { name: 'Treinamento' },
    ],
    events: [
      { date: '2012', label: 'Manuais que reduziram chamados repetitivos' },
      { date: '2013', label: 'Primeiros scripts no banco Progress' },
    ],
    tips: [
      'Documentar bem resolve mais do que resolver rápido.',
      'Tempo ocioso virou aprendizado: primeiros scripts do banco.',
    ],
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
      'A formação em Análise e Desenvolvimento de Sistemas consolidou minha transição para o desenvolvimento. Foi o momento de transformar observação, suporte e diagnóstico em construção mais estruturada de soluções digitais.',
    chips: [
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'JavaScript' },
      { name: 'Lógica de programação', accent: 'cyan' },
    ],
    events: [
      { date: '2013', label: 'Início do curso de ADS' },
      { date: '2015', label: 'Conclusão e primeiro emprego em dev' },
    ],
    tips: [
      'Estudar enquanto trabalhava foi difícil. E necessário.',
      'ADS consolidou a transição definitiva: de infra para código.',
    ],
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
      'No front-end, passei a enxergar a tecnologia pela experiência do usuário. Trabalhei com e-commerce, landing pages, responsividade, performance, GTM e colaboração próxima com design, projetos e negócio.',
    chips: [
      { name: 'HTML/CSS', accent: 'cyan' },
      { name: 'JavaScript', accent: 'cyan' },
      { name: 'GTM' },
      { name: 'Git' },
      { name: 'E-commerce' },
      { name: 'Agile' },
    ],
    events: [
      { date: '2016', label: 'Introdução do Git no time de dev' },
      { date: '2017', label: 'Templates reutilizáveis para novos projetos' },
    ],
    tips: [
      'E-commerce ensina performance e conversão ao mesmo tempo.',
      'Templates criados aqui foram usados por anos depois.',
    ],
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
      'Na Avanti, aprofundei minha atuação em e-commerces e sistemas legados. Com o tempo, deixei de atuar apenas na entrega individual e passei a apoiar o time em desbloqueios técnicos, padrões de desenvolvimento, treinamentos e melhoria dos fluxos de trabalho.',
    chips: [
      { name: 'JavaScript', accent: 'cyan' },
      { name: 'Liderança técnica', accent: 'red' },
      { name: 'Agile' },
      { name: 'Mentoria' },
      { name: 'Legado' },
    ],
    events: [
      { date: '2018', label: 'Promoção a Líder Técnico' },
      { date: '2019', label: 'Time estruturado com Agile + Git + padrões' },
    ],
    tips: [
      'Ser referência técnica é diferente de ser o melhor do time.',
      'Aprendi mais ensinando do que estudando sozinho.',
    ],
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
      'Na Performa_IT, atuei como programador sênior em integrações, marketplaces, discovery técnico, evolução de funcionalidades e correção de bugs. Essa fase fortaleceu minha visão sobre sistemas conectados, estabilidade, manutenção e leitura de regras de negócio.',
    chips: [
      { name: 'Node.js', accent: 'cyan' },
      { name: 'APIs', accent: 'cyan' },
      { name: 'Marketplaces' },
      { name: 'Discovery' },
      { name: 'Mentoria' },
    ],
    events: [
      { date: '2020', label: 'Discovery e integrações críticas' },
      { date: '2021', label: 'Sênior referência técnica do time' },
    ],
    tips: [
      'Marketplace exige pensar em falha, retry e consistência.',
      'Treinei devs enquanto resolvia bugs críticos em produção.',
    ],
  },
  {
    id: 'consulting',
    year: 2021,
    code: '07',
    title: 'Consultor & Dev Sênior PJ',
    period: '2021 — atual',
    badge: 'Consultoria',
    company: 'Autônomo',
    description:
      'Como PJ, passei a atuar em projetos diversos de tecnologia, conectando e-commerce, integrações, APIs, landing pages, RD Station, treinamento técnico, arquitetura e desenvolvimento full stack. Em projetos para empresas como eNext, Dendrix, Jobspace, Simplie e Growe, aprofundei minha capacidade de conversar com áreas diferentes, entender prioridades e transformar necessidades em soluções digitais.',
    chips: [
      { name: 'PHP', accent: 'red' },
      { name: 'Node.js', accent: 'cyan' },
      { name: 'TypeScript' },
      { name: 'E-commerce' },
      { name: 'Tech Lead' },
      { name: 'IA Aplicada', accent: 'red' },
    ],
    events: [
      { date: 'Nov 2021', label: 'Abertura da empresa' },
      { date: '2024', label: 'Início do projeto Jaime (IA local)' },
      { date: '2026', label: 'Tech Lead na Growe' },
    ],
    tips: [
      'PJ multiplicou o aprendizado: cada cliente, um contexto novo.',
      'Cada empresa ensinou algo que ambiente interno nunca ensinaria.',
      'O Jaime nasceu aqui: curiosidade virando ferramenta real.',
    ],
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
  { label: 'IA Aplicada', value: 'Estudo e construção de soluções práticas com modelos de linguagem, automações e assistentes.' },
  { label: 'Automações', value: 'Transformação de rotinas repetitivas, informações dispersas e fluxos manuais em processos mais claros e produtivos.' },
  { label: 'Integrações', value: 'Experiência consolidada conectando sistemas, APIs, plataformas, dados e regras de negócio.' },
  { label: 'Liderança Técnica', value: 'Apoio a decisões técnicas, organização de padrões, orientação de pessoas e construção de clareza para times.' },
  { label: 'IA Local / Jaime', value: 'Laboratório prático com Node.js, TypeScript, Ollama, CLI, histórico em Markdown e evolução para agentes e automações controladas.' }
];

export const projectData = {
  eyebrow: '04 / PROJETO PESSOAL — JAIME // ASSISTENTE LOCAL DE IA',
  title: 'Jaime',
  intro:
    'O Jaime é meu projeto pessoal de IA local. Criei esse assistente em Node.js e TypeScript, integrado ao Ollama, para estudar na prática como modelos de linguagem podem apoiar programação, organização de ideias, documentação, produtividade técnica e automações controladas.',
  quote:
    'O Jaime é a forma mais honesta de mostrar minha evolução para IA aplicada: aprender fazendo, documentar o processo e transformar curiosidade em uma ferramenta real.',
  tags: ['Node.js', 'TypeScript', 'Ollama', 'LLMs locais', 'CLI', 'Markdown', 'Linux', 'Agentes', 'MCP'],
  panels: [
    {
      title: 'Estrutura',
      eyebrow: 'arquitetura atual',
      blocks: [
        {
          label: 'Arquitetura',
          text:
            'Assistente local em Node.js e TypeScript, com integração ao Ollama, execução via CLI, streaming de respostas, gerenciamento de sessão, histórico de conversas e persistência em Markdown.'
        },
        {
          label: 'Roadmap',
          text: 'A evolução prevista inclui leitura de código, integração com MCPs, agentes, ferramentas controladas, automações locais, organização de conhecimento e execução segura com foco em privacidade, rastreabilidade e aprendizado progressivo.'
        }
      ]
    },
    {
      title: 'Posicionamento',
      eyebrow: 'direção profissional',
      blocks: [
        {
          label: 'Princípio',
          text: 'Construir IA aplicada com responsabilidade: primeiro entender o problema, depois validar arquitetura, limites, segurança e valor prático antes de escalar qualquer solução.'
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
    'Do suporte ao desenvolvimento, do front-end às integrações, da entrega individual à liderança técnica, cada fase adicionou uma camada importante. Agora, com o Jaime, transformo essa bagagem em um laboratório prático para estudar, testar e construir soluções mais inteligentes.'
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
    fontSize: 'clamp(108px, 16.8vw, 288px)',
    color: 'rgba(215, 38, 56, 0.06)',
    px: -0.05,
    py: 0.15
  },
  {
    text: 'BUSHIDO',
    top: '32vh',
    side: 'right',
    offset: '-10vw',
    fontSize: 'clamp(132px, 19.2vw, 336px)',
    color: 'rgba(10, 8, 8, 0.05)',
    px: 0.04,
    py: 0.35
  },
  {
    text: '人工知能',
    top: '60vh',
    side: 'left',
    offset: '-2vw',
    fontSize: 'clamp(84px, 13.2vw, 228px)',
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
    fontSize: 'clamp(96px, 14.4vw, 252px)',
    color: 'rgba(215, 38, 56, 0.05)',
    px: 0.06,
    py: 0.7
  },
  {
    text: 'JAIME',
    top: '130vh',
    side: 'left',
    offset: '-8vw',
    fontSize: 'clamp(108px, 15.6vw, 276px)',
    color: 'rgba(10, 8, 8, 0.05)',
    px: -0.04,
    py: 0.25
  },
  {
    text: '未来',
    top: '170vh',
    side: 'right',
    offset: '-2vw',
    fontSize: 'clamp(84px, 13.2vw, 228px)',
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
    fontSize: 'clamp(108px, 16.8vw, 288px)',
    color: 'rgba(10, 8, 8, 0.06)',
    px: -0.03,
    py: 0.4
  },
  {
    text: '人工知能',
    top: '270vh',
    side: 'right',
    offset: '-4vw',
    fontSize: 'clamp(84px, 13.2vw, 228px)',
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
    fontSize: 'clamp(96px, 14.4vw, 252px)',
    color: 'rgba(215, 38, 56, 0.06)',
    px: -0.04,
    py: 0.3
  }
];
