# Melhorias: Site Novo vs. Site Legado (Wix)

Comparativo entre o site antigo da Aggiu (Wix, ~2021) e o novo protótipo construído do zero.

---

## Identidade Visual

| Aspecto | Site Legado | Site Novo |
|---------|-------------|-----------|
| **Logo** | Cluster de bolinhas genérico (arquivo se chamava "AGGIU LOGO BAD.png") | Logo "Connected Constellation" em SVG — nós coloridos conectados, representando rede e conexão |
| **Paleta de cores** | Azul claro genérico, branco, cinza — visual de banco tradicional | Midnight (#0F172A), Ocean (#0066FF), Electric (#00D4AA), Glow (#A78BFA) — paleta moderna e tech |
| **Tipografia** | Fontes padrão do Wix, sem hierarquia clara | Plus Jakarta Sans (headings) + Inter (body) — fontes modernas otimizadas para web |
| **Imagens** | Fotos de stock genéricas (arranha-céus, pontes, padrões geométricos) | Visuais abstratos, gradientes, orbs animados — identidade própria |
| **Tom** | Corporativo, institucional, formal | Acessível, confiante, tech-first — linguagem para público jovem |

## Estrutura e Navegação

| Aspecto | Site Legado | Site Novo |
|---------|-------------|-----------|
| **Páginas** | 6 páginas (sem "Quem Somos" apesar de estar no menu) | 8 páginas completas incluindo Sobre e hub de Serviços |
| **Navegação** | Menu simples sem dropdown | Navbar com dropdown de serviços, breadcrumbs nas páginas internas |
| **Mobile** | Responsivo básico do Wix | Mobile-first com menu hamburger overlay dedicado |
| **URLs** | Wix URLs (`/mfo`, `/pvt`) | Clean URLs via Vercel (`/sobre`, `/metodologia`) |

## Design e Interatividade

| Aspecto | Site Legado | Site Novo |
|---------|-------------|-----------|
| **Hero** | Imagem estática com texto | Gradiente + imagem de fundo + orbs animados |
| **Animações** | Nenhuma — páginas totalmente estáticas | Scroll reveal animations, hover effects, transições suaves |
| **Navbar** | Fixa simples | Transparente no topo, fica sólida com blur no scroll |
| **Metodologia** | Diagrama circular estático (imagem) | Diagrama interativo em SVG com anel animado + cards detalhados com hover |
| **Cards** | Blocos de texto sem destaque visual | Cards com ícones SVG, gradientes, bordas animadas no hover |
| **Botão WhatsApp** | Inexistente | Botão flutuante em todas as páginas com animação pulse e mensagem pré-preenchida |

## Técnico

| Aspecto | Site Legado | Site Novo |
|---------|-------------|-----------|
| **Plataforma** | Wix (client-rendered JS pesado) | HTML/CSS/JS puro — leve e rápido |
| **Performance** | Lento, Wix carrega ~2MB+ de JS | Sem dependências, CSS único, JS mínimo (~4KB) |
| **SEO** | Não indexado pelo Google (client-rendered) | HTML semântico, meta descriptions em todas as páginas, server-rendered |
| **Favicon** | Ícone genérico do Wix | SVG customizado com a logo constellation |
| **Hospedagem** | Wix (proprietário, limitado) | Vercel (deploy automático, CDN global, gratuito) |
| **Código** | Fechado no Wix, sem controle | Open source no GitHub, versionado com Git |
| **CSS** | Gerado pelo Wix, impossível customizar | Design system com CSS Custom Properties (tokens de cor, tipografia, espaçamento) |
| **Acessibilidade** | Básica do Wix | `aria-labels`, `prefers-reduced-motion`, semântica HTML5 |

## Conteúdo

| Aspecto | Site Legado | Site Novo |
|---------|-------------|-----------|
| **Título da página** | "Allea Wealth Management" (nome errado!) | "Aggiu \| Consultoria de Investimentos Independente" |
| **Copyright** | © 2021 — parecia abandonado | Ano dinâmico via JavaScript |
| **Sobre** | Página inexistente (link quebrado no menu) | Página completa com missão, equipe e valores |
| **CTA** | Apenas link de contato no menu | Botões CTA estratégicos + banners + WhatsApp flutuante |
| **Branding** | "wealth management" genérico | "Consultoria independente com DNA de tecnologia" — posicionamento claro |

## Problemas Resolvidos

- **Branding inconsistente** — título dizia "Allea", agora tudo é "Aggiu" consistente
- **Logo ruim** — substituída por logo moderna em SVG que funciona em qualquer contexto
- **Sem indexação Google** — HTML server-rendered resolve o problema
- **Visual de banco tradicional** — redesign completo para público jovem e tech-savvy
- **Plataforma proprietária** — código 100% próprio, sem vendor lock-in
- **Sem interatividade** — animações de scroll, hover effects, diagrama interativo
- **Sem WhatsApp** — botão flutuante em todas as páginas (padrão para empresas brasileiras)
- **Copyright desatualizado** — ano atualiza automaticamente

---

> **Nota:** Este protótipo é estático (HTML/CSS/JS). A próxima etapa será migrar para um framework JS (Next.js, Astro, SvelteKit ou Nuxt — ainda a definir) para adicionar CMS, formulário real, analytics e otimizações avançadas.
