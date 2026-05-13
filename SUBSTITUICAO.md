# Substituições de Textos — Variação A

Este documento registra o mapeamento entre os textos originais do site e a Variação A (Curiosidade como origem), facilitando futuras substituições.

---

## 1. Hero Section

### Topline
- **Arquivo:** `src/components/sections/Hero/Hero.tsx:16-19`
- **Original:** `SECTOR.03A-77` + `DEV SR / IA APLICADA — AUTOMAÇÕES`
- **Variação A:** `Portfolio Executivo` + `Curiosidade Técnica / E-commerce / Integrações / IA Local`

### Role
- **Arquivo:** Hero.tsx:25-26
- **Original:** `▸ DESENVOLVEDOR SÊNIOR / IA APLICADA — AUTOMAÇÕES — INTEGRAÇÕES`
- **Variação A:** `▸ DEV SÊNIOR EXPLORANDO IA APLICADA — MOMENTO ATUAL`

### Lead/Descrição
- **Arquivo:** Hero.tsx:28-32
- **Original:** 15+ anos transformando problemas em soluções reais. Bagagem em suporte, front-end, e-commerce, integrações e liderança técnica. Hoje estou direcionando essa experiência para IA Aplicada, automações e agentes. Meu foco é construir ferramentas que ajudem pessoas e times a ganhar produtividade...
- **Variação A:** "Desde criança, sempre quis entender como as coisas funcionam. Essa curiosidade me levou da manutenção de computadores ao suporte técnico, do suporte ao front-end, do front-end ao e-commerce, das integrações à liderança técnica. Hoje, direciono essa mesma curiosidade para IA aplicada..."

### Card Labels
- **Arquivo:** Hero.tsx:41-47
- **Original:** Label: `SECTOR.03A-77`, Subtitle: `EVOLUTION / AI / BUSHIDO`
- **Variação A:** Label: `MOMENTO ATUAL`, Subtitle: `DEV SÊNIOR EXPLORANDO IA APLICADA`

---

## 2. Stats Card

### Stat 1 - Years
- **Arquivo:** `src/data/portfolio.ts:13-19`
- **ID:** `years`
- **Original:** Value: `15+`, Label: `anos transformando problemas em soluções reais`
- **Variação A:** Value: `10+`, Label: `anos aprendendo na prática`

### Stat 2 - Fronts
- **Arquivo:** portfolio.ts:20-26
- **ID:** `fronts`
- **Original:** Value: `07`, Label: `frentes de atuação em tecnologia`
- **Variação A:** Value: `7`, Label: `frentes conectadas pela curiosidade técnica`

### Stat 3 - Company
- **Arquivo:** portfolio.ts:27-34
- **ID:** `year`
- **Original:** Value: `2021`, Label: `dulaso tecnologia - inovação empresarial`
- **Variação A:** Value: `2021`, Label: `fase de expansão para IA aplicada`

---

## 3. Manifest Section

### Title
- **Arquivo:** `src/data/portfolio.ts:48-56`
- **Original:** Title: `MOMENTO`, Accent: `ATUAL.`
- **Variação A:** Title: `CURIOSIDADE`, Accent: `PRÁTICA E EVOLUÇÃO`

### Paragraphs
- **Original:** "Toda a minha trajetória em tecnologia foi construída na prática..."
- **Variação A:** "Minha trajetória em tecnologia nunca começou por modismo. Começou pela curiosidade..."

---

## 4. Tech Stack / Radar

- **Arquivo:** `src/data/portfolio.ts:175-181`
- **Original:** `Aprofundamento prático`, `Soluções internas`, `Bagagem sólida`, `Mentoria + arquitetura`, `Projeto Jaime em evolução`
- **Variação A:** `Estudo prático e construção`, `Curiosidade virando fluxo`, `Experiência consolidada`, `Base construída em equipe`, `Jaime como laboratório`

---

## 5. Project Section (Jaime)

### Intro
- **Arquivo:** `src/data/portfolio.ts:183-189`
- **Original:** "Assistente local de IA em Node.js e TypeScript..."
- **Variação A:** "O Jaime nasceu da minha curiosidade de entender IA por dentro, construindo em vez de apenas consumir ferramentas prontas..."

### Quote
- **Original:** "Mais do que parecer especialista em IA, o Jaime mostra meu caminho real..."
- **Variação A:** "O Jaime é minha forma de aprender IA com a mão no código..."

### Panel 1 - Arquitetura
- **Original:** "Motor em Node.js + TypeScript com separação de responsabilidades..."
- **Variação A:** "Node.js, TypeScript, Ollama, CLI, streaming de respostas..."

### Panel 2 - Posicionamento
- **Original:** "Crescer em IA Aplicada sem apagar a base..."
- **Variação A:** "Meu foco é aplicar IA com maturidade prática: entender o problema, conectar ferramentas..."

---

## 6. Footer

### Title
- **Arquivo:** `src/data/portfolio.ts:287-291`
- **Original:** `FIM\nDO ARQUIVO.`
- **Variação A:** `UMA TRAJETÓRIA\nMOVIDA POR CURIOSIDADE`

### Description
- **Original:** "Suporte, front-end, e-commerce, integrações..."
- **Variação A:** "Esta timeline mostra uma evolução construída na prática..."

---

## 7. Timeline (Jornada)

| Entry | Arquivo | Original | Variação A |
|-------|---------|----------|------------|
| Redes | portfolio.ts:60-68 | "O início foi na infraestrutura..." | "O início técnico veio pela infraestrutura..." |
| Suporte | portfolio.ts:71-79 | "Suporte a usuários de PDV..." | "No suporte, a curiosidade encontrou problemas reais..." |
| ADS | portfolio.ts:82-90 | "A vontade de construir soluções..." | "A vontade de deixar de apenas diagnosticar..." |
| Front-end | portfolio.ts:93-101 | "Desenvolvimento front-end..." | "No front-end, passei a enxergar..." |
| Liderança | portfolio.ts:104-112 | "Manutenção de e-commerces legados..." | "Com mais experiência, a curiosidade..." |
| Integração | portfolio.ts:115-123 | "Sênior com foco em discovery..." | "Nas integrações e marketplaces..." |
| Consulting | portfolio.ts:126-134 | "Abertura da empresa..." | (mantido similar, ajustes de contexto) |

---

## Arquivos Principais Modificados

1. `src/components/sections/Hero/Hero.tsx` — Hero section (topline, role, lead, card)
2. `src/data/portfolio.ts` — Todos os dados centralizados (stats, manifest, timeline, project, techStack, footer)

---

## Próximas Variações

Para implementar as variações B, C ou D, usar este mesmo mapeamento, substituindo os textos de cada seção conforme o arquivo `variacoes_textos_site_caio.md`.