# 📝 TEXTOS DO SITE — PORTFOLIO 2026

Documento centralizado com todos os textos do site. Cada texto tem sua localização documentada para facilitar atualizações futuras sem necessidade de buscar no código.

**Como usar:** Envie uma mensagem com os novos textos e a seção correspondente. Farei a substituição automaticamente.

---

## 📌 HERO SECTION
**Arquivo:** `src/components/sections/Hero/Hero.tsx` + `src/data/portfolio.ts`

### Topline
- **Localização:** Hero.tsx:17-18
- **Texto atual:**
  ```
  SECTOR.03A-77
  DEV SR / IA APLICADA — AUTOMAÇÕES
  ```

### Título Principal
- **Localização:** Hero.tsx:22-23
- **Texto atual:** `CAIO` + `TIMOTEO` (TIMOTEO é o accent)

### Role/Função
- **Localização:** Hero.tsx:25-26
- **Texto atual:**
  ```
  ▸ DESENVOLVEDOR SÊNIOR / IA APLICADA — AUTOMAÇÕES — INTEGRAÇÕES
  ```

### Lead/Descrição
- **Localização:** Hero.tsx:28-32
- **Texto atual:**
  ```
  15+ anos transformando problemas em soluções reais. Bagagem em suporte, front-end, e-commerce, integrações e 
  liderança técnica. Hoje estou direcionando essa experiência para IA Aplicada, automações e agentes.
  
  Meu foco é construir ferramentas que ajudem pessoas e times a ganhar produtividade, organizar conhecimento, reduzir tarefas repetitivas e transformar processos em soluções mais inteligentes.
  ```

### Card Labels
- **Localização:** Hero.tsx:41 e 42-46
- **Textos atuais:**
  ```
  Label: SECTOR.03A-77
  Kanji: 進化 / 武士道
  Subtitle: EVOLUTION / AI / BUSHIDO
  ```

### Scroll Hint
- **Localização:** Hero.tsx:57-58
- **Texto atual:** `SCROLL [linha] ROLE PARA BAIXO`

### Skills/Chips
- **Localização:** `src/data/portfolio.ts:37-46` (array `chips`)
- **Textos atuais:**
  ```
  - Node.js
  - TypeScript
  - PHP
  - Ollama
  - APIs
  - Automações
  - E-commerce
  - IA Aplicada
  ```

---

## 📌 STATS CARD
**Arquivo:** `src/data/portfolio.ts:13-35` (array `stats`)

### Stat 1 - Years
- **ID:** `years`
- **Value:** `15+`
- **Label:** `anos transformando problemas em soluções reais`
- **Description:** 
  ```
  De evolução do <strong>suporte técnico</strong> à <strong>arquitetura de software</strong>. 
  O foco sempre foi o usuário, ajudar a reduzir tarefas repetitivas, automatizar e destravar a operação do dia a dia.
  ```

### Stat 2 - Fronts
- **ID:** `fronts`
- **Value:** `07`
- **Label:** `frentes de atuação em tecnologia`
- **Description:**
  ```
  Atuação sênior passando por <strong>desenvolvimento front-end, plataformas de e-commerce, integrações de APIs</strong> 
  e liderança técnica de times em projetos críticos.
  ```

### Stat 3 - Company
- **ID:** `year`
- **Value:** `2021`
- **Label:** `dulaso tecnologia - inovação empresarial`
- **Description:**
  ```
  Conectando LLMs a fluxos reais de trabalho. Construindo o <strong>Jaime</strong> 
  (assistente local em Node.js/Ollama) focado em privacidade, agentes e automações.
  ```

---

## 📌 MANIFEST SECTION (MOMENTO)
**Arquivo:** `src/data/portfolio.ts:48-56` (objeto `manifestData`)

### Eyebrow
- **Texto atual:** `02 / MANIFESTO`

### Title
- **Título:** `MOMENTO`
- **Accent:** `ATUAL.`

### Paragraphs
#### Parágrafo 1
```
Toda a minha trajetória em tecnologia foi construída na prática, ouvindo pessoas e entendendo problemas reais 
de empresas. Ao longo de mais de 15 anos, transitei entre suporte técnico, desenvolvimento web, e-commerce, 
arquitetura de APIs e liderança de times.
```

#### Parágrafo 2
```
Hoje, levo essa fundação sólida para o universo da Inteligência Artificial aplicada. Meu foco é prático: 
conectar modelos de linguagem a sistemas, APIs e fluxos de trabalho reais.
```

### Tech Stack / Radar Técnico
**Arquivo:** `src/data/portfolio.ts:175-181` (array `techStack`)

```
- IA Aplicada | Aprofundamento prático
- Automações | Soluções internas
- Integrações | Bagagem sólida
- Liderança Técnica | Mentoria + arquitetura
- IA Local / Ollama | Projeto Jaime em evolução
```

---

## 📌 TIMELINE SECTION (JORNADA)
**Arquivo:** `src/data/portfolio.ts:58-173` (array `timelineData`)

### Timeline Entry 1 - Redes de Computadores
```
Year: 2010
Code: 01
Title: Redes de Computadores
Period: 2010 — 2012
Badge: Formação
Company: Faculdade Impacta
Description: O início foi na infraestrutura. Aprender redes e raciocínio sistêmico me deu a base para ler ambientes técnicos complexos.
```

### Timeline Entry 2 - Analista de Suporte
```
Year: 2011
Code: 02
Title: Analista de Suporte
Period: 2011 — 2014
Badge: Operação
Company: Prowork
Description: Suporte a usuários de PDV por telefone. Criei manuais e treinamentos que reduziram o volume de chamados — 
e o tempo liberado virou oportunidade para aprender a programar soluções integradas ao banco de dados Progress.
```

### Timeline Entry 3 - ADS
```
Year: 2013
Code: 03
Title: Análise e Desenvolvimento de Sistemas
Period: 2013 — 2015
Badge: Formação
Company: Faculdade Impacta
Description: A vontade de construir soluções de forma mais robusta me levou ao desenvolvimento de software 
e consolidou minha transição definitiva para o web.
```

### Timeline Entry 4 - Front-end
```
Year: 2015
Code: 04
Title: Desenvolvedor Front-end
Period: 2015 — 2017
Badge: Front-end
Company: Vitrio
Description: Desenvolvimento front-end em e-commerces, landing pages e GTM. Integração próxima com Design e Projetos 
introduziu Agile, GRIDs e Git ao time — e de lá saíram os primeiros templates reutilizáveis para novos projetos.
```

### Timeline Entry 5 - Tech Lead
```
Year: 2017
Code: 05
Title: Líder Técnico
Period: 2017 — 2019
Badge: Liderança
Company: Avanti! Tecnologia
Description: Manutenção de e-commerces legados com JavaScript intenso. Virei referência técnica do time, 
desobstruindo impedimentos e treinando novos colaboradores. Promovido a Líder Técnico: estruturei práticas de Agile, 
versionamento e padrões de desenvolvimento.
```

### Timeline Entry 6 - Senior
```
Year: 2020
Code: 06
Title: Programador Sênior
Period: 2020 — 2021
Badge: Integração
Company: Performa_IT
Description: Sênior com foco em discovery e integrações com marketplaces — evoluções e correções de bugs para atender 
demandas críticas de plataforma. Em paralelo, treinei e orientei programadores nas melhores práticas do ambiente.
```

### Timeline Entry 7 - Consulting
```
Year: 2021
Code: 07
Title: Consultor & Dev Sênior PJ
Period: 2026 — atual
Badge: Consultoria
Company: Autônomo
Description: Abertura da empresa em novembro de 2021. Um período rico de intensa comunicação com diferentes áreas 
e setores, aprendendo sobre negócios e como a tecnologia pode impulsionar a evolução de empresas.
```

#### Subsection 1 - eNext
```
Year: 2021
Company: eNext
Badge: E-commerce
Description: Capacitei e gerenciei um time júnior de desenvolvedores para atender os e-commerces da agência. 
Participei de rituais Ágeis e atuei como elo entre Designers, Gerentes de Projetos, Desenvolvedores e Diretoria.
```

#### Subsection 2 - Dendrix
```
Year: 2022
Company: Dendrix
Badge: E-commerce
Description: Evoluções em nova versão do e-commerce: reestruturação de páginas para responsividade e melhoria dos fluxos 
de cadastro e pagamento. Trabalho próximo ao negócio para refinar a UX do produto final.
```

#### Subsection 3 - Jobspace
```
Year: 2023
Company: Jobspace
Badge: Template & Treino
Description: Desenvolvimento de template reutilizável para a agência, manutenção e evolução de e-commerces. 
Ministrei dois treinamentos técnicos de 6 meses para o time interno de desenvolvedores.
```

#### Subsection 4 - Simplie
```
Year: 2025
Company: Simplie
Badge: Full Stack
Description: Atuação próxima a clientes e parceiros, validando ideias e evoluindo e-commerces. 
Desenvolvimento e integrações com ferramentas para atender demandas de negócio.
```

#### Subsection 5 - Growe
```
Year: 2026
Company: Growe
Badge: Tech Lead
Description: Início como Tech Lead, direcionando decisões técnicas e arquitetura. Desenvolvimento Full Stack PHP 
de ecossistemas robustos — do banco de dados às interfaces — garantindo escalabilidade e performance em ambientes complexos.
```

---

## 📌 PROJECT SECTION (JAIME)
**Arquivo:** `src/data/portfolio.ts:183-218` (objeto `projectData`)

### Eyebrow
```
04 / LABORATÓRIO PRÁTICO — JAIME // ASSISTENTE LOCAL DE IA
```

### Title
```
Jaime
```

### Intro
```
Assistente local de IA em Node.js e TypeScript, integrado ao Ollama. Meu laboratório prático para estudar 
IA Aplicada, privacidade, CLI, automações e agentes com base em código real.
```

### Quote
```
Mais do que parecer especialista em IA, o Jaime mostra meu caminho real: aprender construindo, conectar bagagem 
de dev sênior a IA Aplicada e transformar estudo em ferramenta útil.
```

### Tags
```
- Node.js
- TypeScript
- Ollama
- LLMs locais
- CLI
- Markdown
- Linux
- Agentes
- MCP
```

### Panel 1 - Estrutura
```
Eyebrow: roadmap do assistente
Title: Estrutura

Block 1:
  Label: Arquitetura
  Text: Motor em Node.js + TypeScript com separação de responsabilidades. 
        Ollama gerenciando LLMs locais com streaming, memória e salvamento em Markdown.

Block 2:
  Label: Evolução
  Text: Roadmap para agentes, MCP (Model Context Protocol) e automações CLI-first.
```

### Panel 2 - Posicionamento
```
Eyebrow: direção profissional
Title: Posicionamento

Block:
  Label: Resumo
  Text: Crescer em IA Aplicada sem apagar a base: dev, integrações, produto, liderança técnica.
```

---

## 📌 SKILLS SECTION (STACK)
**Arquivo:** `src/data/portfolio.ts:220-285` (objetos `skillsData` e `stackGroups`)

### Eyebrow
```
05 / STACK / COMPETÊNCIAS
```

### Title
```
Competências
```

### Subtitle
```
Stack core, formação e idiomas
```

### Stack Group 1 - IA Aplicada
```
Num: 01
Title: IA Aplicada
Sub: foco atual
Featured: true

Tags:
  - IA Aplicada (accent: red)
  - Agentes de IA (accent: red)
  - Prompt Engineering
  - Ollama
  - IA Local
  - MCP
  - Automação de Processos
```

### Stack Group 2 - Engenharia
```
Num: 02
Title: Engenharia
Sub: core técnico

Tags:
  - Node.js
  - TypeScript
  - JavaScript
  - PHP
  - APIs
  - Integrações
  - Full Stack
  - Front-end
  - E-commerce
```

### Stack Group 3 - Liderança & Tooling
```
Num: 03
Title: Liderança & Tooling
Sub: operação

Tags:
  - Liderança Técnica (accent: cyan)
  - Mentoria
  - Análise de Requisitos
  - Git
  - Linux
  - CLI
  - Bancos de Dados
  - RD Station
  - GTM
```

### Stack Group 4 - Formação & Idiomas
```
Num: 04
Title: Formação & Idiomas
Sub: background

Tags:
  - ADS / Impacta · 2013-2015
  - Redes / Impacta · 2010-2012
  - PT-BR · Nativo
  - EN · Profissional
```

---

## 📌 FOOTER SECTION (FIM)
**Arquivo:** `src/data/portfolio.ts:287-297` (objetos `footerCopy` e `footerContacts`)

### Title
**Localização:** `src/components/sections/Footer/Footer.tsx:11-13`
```
FIM
DO ARQUIVO.
```

### Description
```
Suporte, front-end, e-commerce, integrações, liderança técnica e a fase atual de aprofundamento em IA Aplicada. 
O Jaime entra como prova prática dessa transição.
```

### Contact Items
```
1. Github | caio-alvestimoteo
2. Local | São Paulo / BR
3. Sector | 03A-77
```

---

## 📌 TOP NAVIGATION
**Arquivo:** `src/components/layout/TopNav/TopNav.tsx`

### Brand
- **Localização:** TopNav.tsx:34-36
```
CAIO TIMOTEO
// PORTFOLIO 2026 / FILE-77.A1
```

### Nav Sections
**Arquivo:** `src/data/portfolio.ts:326-333` (array `navSections`)
```
- HERO (id: hero)
- MOMENTO (id: manifest)
- JORNADA (id: timeline)
- JAIME (id: project)
- STACK (id: skills)
- FIM (id: footer)
```

---

## 📌 PARALLAX LAYERS
**Arquivo:** `src/data/portfolio.ts:335-429` (array `parallaxLayers`)

```
Layer 1: EVOLUTION (left, top: 8vh)
Layer 2: BUSHIDO (right, top: 32vh)
Layer 3: 人工知能 (left, top: 60vh) [Japanese]
Layer 4: 2026 (right, top: 90vh)
Layer 5: JAIME (left, top: 130vh)
Layer 6: 未来 (right, top: 170vh) [Japanese]
Layer 7: STACK (left, top: 220vh)
Layer 8: 人工知能 (right, top: 270vh) [Japanese]
Layer 9: EOF. (left, top: 320vh)
```

---

## 📌 SOCIAL LINKS
**Arquivo:** `src/data/portfolio.ts:299-324` (array `socialLinks`)

```
1. WhatsApp
   Label: WhatsApp
   Tip: WHATSAPP / +55 11 98993-8101
   URL: https://wa.me/5511989938101

2. LinkedIn
   Label: LinkedIn
   Tip: LINKEDIN / ccesaralvest
   URL: https://www.linkedin.com/in/ccesaralvest

3. GitHub
   Label: GitHub
   Tip: GITHUB / caio-alvestimoteo
   URL: https://github.com/caio-alvestimoteo

4. Jaime
   Label: Jaime
   Tip: JAIME / SITE DEDICADO
   URL: https://github.com/caio-alvestimoteo?tab=repositories
```

---

## 📌 TEMPLATE PARA PRÓXIMAS REQUISIÇÕES

Quando quiser atualizar textos, simplesmente envie no seguinte formato:

```
## Seção: [NOME DA SEÇÃO]

### [Subsection]
**Novo texto:** 
[Cole o novo texto aqui]
```

**Exemplo:**
```
## Seção: HERO SECTION

### Lead/Descrição
**Novo texto:**
Novo lead aqui com as informações atualizadas...
```

Isso economiza tokens e acelera a substituição! 🚀
