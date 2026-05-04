import type { TimelineEntry, Stat, Metric } from '../types';

export const stats: Stat[] = [
  {
    id: 'years',
    value: '15+',
    label: 'anos transformando problemas em soluções reais',
    description:
      'De evolução do <strong>suporte técnico</strong> à <strong>arquitetura de software</strong>. O foco sempre foi o usuário, ajudar a reduzir tarefas repetitivas, automaziar e destravar a operação do dia a dia.'
  },
  {
    id: 'fronts',
    value: '7',
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

export const chips: { name: string }[] = [
  { name: 'Node.js' },
  { name: 'TypeScript' },
  { name: 'PHP' },
  { name: 'Ollama' },
  { name: 'APIs' },
  { name: 'Automações' },
  { name: 'E-commerce' },
  { name: 'IA Aplicada' }
];

export const timelineData: TimelineEntry[] = [
  {
    id: 'network',
    year: 2010,
    title: 'Redes de Computadores',
    period: '2010 - 2012',
    badge: 'Formação',
    company: 'Faculdade Impacta Tecnologia',
    description:
      'O início foi na infraestrutura. Aprender sobre redes e raciocínio sistêmico me deu a base necessária para ler ambientes técnicos complexos. Essa fundação lógica sustenta até hoje meu trabalho com arquitetura, integrações e diagnóstico de problemas em sistemas modernos.',
    details: [
      { label: 'Foco', text: 'Infraestrutura, redes e lógica sistêmica.' },
      { label: 'Leitura da fase', text: 'Aprender a diagnosticar e resolver problemas na raiz.' }
    ],
    blueprint: { caption: 'mapa da base técnica', title: 'NETWORK BLUEPRINT' }
  },
  {
    id: 'support',
    year: 2011,
    title: 'Analista de Suporte / Sistemas',
    period: '2011 - 2014',
    badge: 'Operação',
    company: 'Prowork',
    description:
      'Minha primeira imersão em problemas reais. Atendendo usuários de PDV, percebi padrões de erros repetitivos. Comecei a documentar soluções, criar treinamentos e programar pequenos scripts para automatizar processos. Entendi ali que o código e as ferramentas existem para resolver as dores de quem usa o sistema no dia a dia.',
    details: [
      {
        label: 'Entregas',
        items: [
          'Transformação do suporte reativo em método, criação de base de conhecimento e primeiros passos em programação corporativa (Progress).'
        ]
      },
      { label: 'Código de leitura', text: 'Suporte convertido em processos e autonomia para o usuário.' }
    ],
    blueprint: { caption: 'console e processo de suporte', title: 'HELPDESK GRID' }
  },
  {
    id: 'development',
    year: 2013,
    title: 'Análise e Desenvolvimento de Sistemas',
    period: '2013 - 2015',
    badge: 'Formação',
    company: 'Faculdade Impacta Tecnologia',
    description:
      'A vontade de construir soluções de forma mais robusta me levou ao desenvolvimento de software. Expandindo a análise de requisitos e a visão de arquitetura, consolidei minha transição definitiva para o desenvolvimento web, preparando o terreno para atuar em projetos complexos, integrações e plataformas de e-commerce.',
    details: [
      { label: 'Objetivo', text: 'Bases sólidas de programação para construir sistemas web escaláveis.' },
      { label: 'Resultado', text: 'Capacidade ampliada para desenhar soluções digitais integradas.' }
    ],
    blueprint: { caption: 'rota da transição', title: 'SYSTEM DIAGRAM' }
  },
  {
    id: 'frontend',
    year: 2015,
    title: 'Desenvolvedor Front-end',
    period: '2015 - 2017',
    badge: 'Front-end',
    company: 'Vitrio',
    description:
      'Na camada visual, o desafio era entregar velocidade e qualidade. Criei interfaces otimizadas para campanhas de e-commerce e landing pages, conectando design e tecnologia com foco em performance, responsividade e integrações via GTM. Foi o momento de entender a experiência do usuário de forma tática.',
    details: [
      {
        label: 'Entregas',
        items: ['Criação de templates reutilizáveis, otimização intensiva de UX e estruturação de fluxos colaborativos usando Git.']
      },
      { label: 'Leitura da fase', text: 'A interface como ponto de contato ágil entre o sistema e o usuário final.' }
    ],
    blueprint: { caption: 'arquitetura de interface', title: 'UI CIRCUIT MAP' }
  },
  {
    id: 'leadership',
    year: 2017,
    title: 'Desenvolvedor Front-end / Líder Técnico',
    period: '2017 - 2019',
    badge: 'Liderança',
    company: 'Avanti! Tecnologia & Marketing',
    description:
      'Com o amadurecimento técnico, as responsabilidades cresceram. Mantive sistemas complexos legados e estruturei novos padrões para dar previsibilidade às entregas. Assumir o papel de líder técnico significou treinar colaboradores e remover obstáculos, percebendo que a liderança e a padronização são fundamentais para escalar projetos em equipe.',
    details: [
      { label: 'Impacto', text: 'Liderança técnica estabelecida, unindo padronização de código, revisão de processos e evolução de pessoas.' },
      { label: 'Movimento', text: 'A gestão técnica entrou definitivamente no meu escopo profissional.' }
    ],
    blueprint: { caption: 'liderança técnica em operação', title: 'CONTROL ROOM' }
  },
  {
    id: 'integration',
    year: 2020,
    title: 'Programador Sênior',
    period: '2020 - 2021',
    badge: 'Integração',
    company: 'Performa_IT',
    description:
      'O mergulho em integrações profundas. Atuei evoluindo funcionalidades com foco na estabilidade de marketplaces e conexões entre sistemas legados. Orientar tecnicamente a equipe e garantir implementações que unissem regras estritas de negócio à robustez técnica foi central para minimizar retrabalhos e bugs.',
    details: [
      { label: 'Responsabilidade', text: 'Orientação de desenvolvedores e garantia da qualidade técnica no desenvolvimento das plataformas.' },
      { label: 'Aprendizado', text: 'A intersecção exata entre a lógica complexa de negócios e a estabilidade da infraestrutura e integrações.' }
    ],
    blueprint: { caption: 'integração entre sistemas', title: 'MARKETPLACE NODE' }
  },
  {
    id: 'applied-ai',
    year: 2021,
    title: 'Desenvolvedor Sênior / Consultor em Soluções Digitais e IA Aplicada',
    period: 'set. 2021 - atual',
    badge: 'IA Aplicada e Soluções',
    company: 'Consultoria Independente / Growe',
    description:
      'A síntese de toda a bagagem, atuando como sênior em projetos críticos para diversas empresas. Na Growe, as frentes convergem: decisões de arquitetura e banco de dados, desenvolvimento full stack em PHP, escalabilidade e relacionamento direto com clientes. Em paralelo, dou início à imersão prática em IA aplicada, usando automações e agentes para multiplicar resultados.',
    details: [
      {
        label: 'Empresas e contexto',
        text:
          'Atuação como PJ em projetos para Imediata Design, eNext, Dendrix, Jobspace, Simplie e, atualmente, Growe, com foco em desenvolvimento web, evolução de produtos digitais, integrações e liderança técnica.'
      },
      {
        label: 'Entregas chave',
        items: [
          'Liderança técnica na Growe, com decisões de arquitetura, backend em PHP, banco de dados, interfaces funcionais, performance e escalabilidade.',
          'Desenvolvimento e evolução de e-commerces, fluxos de cadastro e pagamento, landing pages e templates reutilizáveis com foco em usabilidade e produtividade.',
          'Integrações com APIs, RD Station, plataformas de leads, ferramentas de marketing e sistemas externos.',
          'Treinamento e orientação de desenvolvedores, incluindo programas técnicos de longa duração e apoio na comunicação entre clientes, parceiros e áreas de negócio.',
          'Aprofundamento em IA aplicada, com automações, agentes e assistentes inteligentes voltados a produtividade técnica e organização de conhecimento.'
        ]
      }
    ],
    blueprint: { caption: 'arquitetura e operação', title: 'OPS / ARCHITECTURE MAP' }
  }
];

export const techStack: Metric[] = [
  { label: 'IA Aplicada', value: 'Aprofundamento prático' },
  { label: 'Automações', value: 'Construção de soluções internas' },
  { label: 'Integrações', value: 'Bagagem sólida e escalável' },
  { label: 'Liderança Técnica', value: 'Mentoria e arquitetura' },
  { label: 'IA Local / Ollama', value: 'Projeto Jaime em evolução' }
];

export const projectData = {
  eyebrow: 'Laboratório Prático',
  eyebrowDetail: 'Jaime // assistente local de IA',
  title: 'Jaime',
  intro:
    'Estou construindo o Jaime, um assistente local de IA em Node.js e TypeScript, integrado ao Ollama. Ele é meu laboratório prático para estudar IA Aplicada e Soluções, privacidade, CLI, automações, agentes e produtividade técnica com base em código real.',
  quote:
    'Mais do que tentar parecer especialista em IA, o Jaime mostra meu caminho real: aprender construindo, conectar minha bagagem de desenvolvedor sênior a IA Aplicada e Soluções e transformar estudo em ferramenta útil.',
  tags: ['Node.js', 'TypeScript', 'Ollama', 'LLMs locais', 'CLI', 'Markdown', 'Linux', 'Agentes', 'MCP'],
  panels: [
    {
      title: 'Estrutura e Arquitetura',
      eyebrow: 'roadmap do assistente',
      blocks: [
        {
          label: 'Arquitetura',
          text:
            'Motor construído em Node.js e TypeScript com separação de responsabilidades. Integração com Ollama gerenciando LLMs locais com streaming de respostas, memória de conversas e salvamento automático de sessões em arquivos Markdown para registro de conhecimento privado.'
        },
        {
          label: 'Evolução',
          text:
            'O roadmap avança para autonomia guiada: evolução para arquitetura baseada em agentes, leitura profunda de código com suporte a MCP (Model Context Protocol) e execução de automações internas com segurança CLI-first.'
        }
      ]
    },
    {
      title: 'Posicionamento Executivo',
      eyebrow: 'direção profissional',
      blocks: [
        {
          label: 'Resumo',
          text:
            'Meu foco é crescer em IA Aplicada e Soluções sem apagar minha base: desenvolvimento, integrações, produto digital, suporte, documentação, liderança técnica e comunicação com times.'
        }
      ]
    }
  ]
};

export const skillsData = {
  eyebrow: 'terminal view / stack inspection',
  title: 'Competências, formação e idiomas',
  coreTitle: 'Stack Core e Tecnologias',
  coreParagraphs: [
    'IA Aplicada e Soluções, automação de processos, agentes de IA, prompt engineering, Node.js, TypeScript, JavaScript, PHP, APIs, integração de sistemas, Ollama, IA local, desenvolvimento full stack, desenvolvimento front-end e e-commerce.',
    'Competências táticas e organizacionais: Liderança técnica de equipes, mentoria de desenvolvedores e análise meticulosa de requisitos de produtos digitais. Domínio avançado em infraestrutura de apoio (Git, Linux, CLI, Bancos de Dados) e ferramentas de front-end / marketing (HTML, CSS, RD Station, GTM).'
  ],
  educationTitle: 'Formação e idiomas',
  education: [
    { label: 'ADS - Análise e Desenvolvimento de Sistemas', value: '2013 - 2015' },
    { label: 'Redes de Computadores', value: '2010 - 2012' },
    { label: 'Português', value: 'Nativo / Bilíngue' },
    { label: 'Inglês', value: 'Profissional (Leitura avançada e documentação)' }
  ]
};

export const footerCopy = {
  title: 'Uma trajetória em constante evolução',
  description:
    'Esta timeline apresenta minha evolução profissional sem vender uma falsa especialização: suporte, front-end, e-commerce, integrações, liderança técnica e a fase atual de aprofundamento em IA Aplicada e Soluções. O Jaime entra como prova prática dessa transição: um projeto real, local e construído com a minha própria stack.',
  badge: 'off-white / red / cyan / black'
};
