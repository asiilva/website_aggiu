# Aggiu Website v2 -- Visual Plan & Wireframes

This document contains wireframe sketches for every page and component. Since we're in the planning phase, these are ASCII wireframes that capture layout, hierarchy, and spacing intent.

---

## 1. Color Palette Preview

```
┌──────────────────────────────────────────────────────────────────┐
│                        COLOR SYSTEM                              │
├──────────┬──────────┬──────────┬──────────┬──────────────────────┤
│ Midnight │  Ocean   │ Electric │   Glow   │      Usage           │
│ #0F172A  │ #0066FF  │ #00D4AA  │ #A78BFA  │                      │
│ ████████ │ ████████ │ ████████ │ ████████ │                      │
│ Dark BG  │ Primary  │ Accent   │ Accent 2 │                      │
├──────────┼──────────┼──────────┼──────────┼──────────────────────┤
│   Snow   │   Mist   │  Slate   │ Charcoal │                      │
│ #F8FAFC  │ #E2E8F0  │ #64748B  │ #1E293B  │                      │
│ ░░░░░░░░ │ ▒▒▒▒▒▒▒▒ │ ▓▓▓▓▓▓▓▓ │ ████████ │                      │
│ Light BG │ Borders  │ Sec Text │ Pri Text │                      │
└──────────┴──────────┴──────────┴──────────┴──────────────────────┘
```

**Rationale**: Blue = financial trust. Teal/mint = fintech energy (Nubank DNA). Violet = modern differentiator. No gold -- we're tech-first, not old-school private banking.

---

## 2. Typography Scale

```
Font: Plus Jakarta Sans (headings) + Inter (body)

Hero Title     48px / Bold     "Seu patrimônio, sua independência."
Page Title     36px / Bold     "Nossa Metodologia"
Section Title  28px / Semibold "Nossos serviços"
Card Title     20px / Semibold "Multi Family Office"
Body Large     18px / Regular  Intro paragraphs
Body           16px / Regular  Standard text
Small          14px / Regular  Captions, labels
```

---

## 3. Logo Concepts

```
Concept A: Monogram "A" with growth motif

    ╱╲
   ╱  ╲
  ╱────╲        aggiu
 ╱  ▲   ╲
╱___│____╲

The inner arrow suggests upward growth.
Clean geometric, works at any size.


Concept B: Wordmark with custom double-g ligature

  ┌─────────────────────────┐
  │   a g g i u             │
  │   ─ ╭─╮╭─╮             │
  │     │ ╰╯ │  connected   │
  │     ╰────╯  g-g forms   │
  │             a loop       │
  └─────────────────────────┘

The connected "gg" creates a unique visual mark.


Concept C: Abstract rising bars + wordmark

  │
  ││
  │││        aggiu
  ││││

Simple ascending bars = growth chart.
Doubles as a standalone favicon mark.
```

---

## 4. Navbar (Global)

### Desktop
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  [LOGO aggiu]     Home   Sobre   Serviços ▾   Metodologia   Compliance  │
│                                                                          │
│                                                         [ Fale Conosco ] │
│                                                          ^^^ ocean btn   │
└──────────────────────────────────────────────────────────────────────────┘
  - Sticky, transparent over hero, solid (#FFF + blur) on scroll
  - "Serviços" dropdown reveals: Multi Family Office, Private
  - Active page: small dot or underline in --ocean color
```

### Mobile
```
┌──────────────────────┐
│ [LOGO]          [☰]  │
└──────────────────────┘

  Tap ☰ opens full-screen overlay:

┌──────────────────────┐
│                  [✕]  │
│                       │
│      Home             │
│      Sobre            │
│      Serviços  ▸      │
│      Metodologia      │
│      Compliance       │
│      Contato          │
│                       │
│   [ Fale Conosco ]    │
│                       │
│    in  📷             │
│    ^^social icons     │
└──────────────────────┘
  - Staggered fade-in animation per item
  - Dark background (midnight)
  - White text
```

---

## 5. Footer (Global)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ███████████████████ MIDNIGHT BACKGROUND ████████████████████████████████ │
│                                                                          │
│  [LOGO aggiu]          Navegação        Contato          Onde estamos    │
│  Consultoria           Home             Seg-Sex          R. Dr. Diogo   │
│  independente          Sobre            10h - 17h        de Faria, 1087 │
│  de investimentos      Serviços         contato@         Cj 1006, Vila  │
│                        Metodologia      aggiu.com.br     Clementino, SP │
│                        Compliance                        04037-003      │
│                        Contato                                          │
│                                                          [in] [📷]     │
│                                                                          │
│──────────────────────────────────────────────────────────────────────────│
│  © 2026 Aggiu Wealth Management. Todos os direitos reservados.           │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Home Page

### 6.1 Hero Section
```
┌──────────────────────────────────────────────────────────────────────────┐
│ ████████████████████████████████████████████████████████████████████████ │
│ ██                                                                  ██ │
│ ██   ░░░░░░░░░░░░░░░ animated gradient / mesh background ░░░░░░░░  ██ │
│ ██                                                                  ██ │
│ ██          Seu patrimônio,                                         ██ │
│ ██          sua independência.                                      ██ │
│ ██                                                                  ██ │
│ ██          Consultoria de investimentos independente,               ██ │
│ ██          com DNA de tecnologia.                                   ██ │
│ ██                                                                  ██ │
│ ██          [ Comece aqui ]    Conheça nossos serviços →            ██ │
│ ██           ^^^ocean btn       ^^^text link                        ██ │
│ ██                                                                  ██ │
│ ██                          ↓                                       ██ │
│ ██                    scroll indicator                               ██ │
│ ████████████████████████████████████████████████████████████████████████ │
└──────────────────────────────────────────────────────────────────────────┘
  Full viewport height. Dark gradient background with subtle floating
  geometric shapes or particle animation. White text.
```

### 6.2 Value Pillars
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│     ┌──────────────┐  ┌──────────────┐  ┌──────────────┐               │
│     │     ◇        │  │     ⚡       │  │     ◎        │               │
│     │              │  │              │  │              │               │
│     │Independência │  │ Eficiência   │  │Transparência │               │
│     │              │  │              │  │              │               │
│     │ Sem vínculo  │  │ Foco total   │  │ Clareza em   │               │
│     │ com bancos.  │  │ no cliente.  │  │ cada decisão.│               │
│     │ Sem conflito.│  │              │  │              │               │
│     └──────────────┘  └──────────────┘  └──────────────┘               │
│                                                                          │
│     "Não vendemos produtos. Aconselhamos exclusivamente os              │
│      melhores investimentos para atender aos seus objetivos."           │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
  Light background (snow). Icons in --ocean or --electric color.
  Scroll-reveal animation (fade up, staggered).
```

### 6.3 Services Preview
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                        Nossos serviços                                   │
│                                                                          │
│   ┌─────────────────────────────┐  ┌─────────────────────────────┐      │
│   │  ┌───┐                      │  │  ┌───┐                      │      │
│   │  │MFO│  Multi Family Office │  │  │PVT│  Private             │      │
│   │  │ ◉ │                      │  │  │ ◎ │                      │      │
│   │  └───┘                      │  │  └───┘                      │      │
│   │                             │  │                             │      │
│   │  Gestão de grandes fortunas │  │  Apoiamos o alcance da      │      │
│   │  para perpetuar seu legado. │  │  independência financeira   │      │
│   │  Atendimento personalizado  │  │  e a concretização de       │      │
│   │  de excelência.             │  │  sonhos e objetivos.        │      │
│   │                             │  │                             │      │
│   │         Saiba mais →        │  │         Saiba mais →        │      │
│   │         ^^^ocean link       │  │         ^^^ocean link       │      │
│   └─────────────────────────────┘  └─────────────────────────────┘      │
│    ^^^ subtle border, hover: ocean glow border + slight elevation       │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
  Snow background. Cards have subtle border (--mist).
  On hover: border becomes --ocean with glow, card lifts slightly.
  Grid is 2-col now, but can expand to 3-4 cols for future products.
```

### 6.4 "O que fazemos"
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                         O que fazemos                                    │
│                                                                          │
│   ┌─────────────────────────┐  ┌─────────────────────────┐             │
│   │  📊 Gestão de           │  │  📋 Planejamento        │             │
│   │     Investimentos       │  │     Financeiro          │             │
│   │                         │  │                         │             │
│   │  Construção equilibrada │  │  Entendimento da        │             │
│   │  de portfólios          │  │  situação patrimonial   │             │
│   │  gerenciando risco,     │  │  combinado com análise  │             │
│   │  rentabilidade e custo. │  │  de fluxos financeiros. │             │
│   └─────────────────────────┘  └─────────────────────────┘             │
│   ┌─────────────────────────┐  ┌─────────────────────────┐             │
│   │  🔄 Acompanhamento     │  │  📄 Materiais para      │             │
│   │     Periódico           │  │     Clientes            │             │
│   │                         │  │                         │             │
│   │  Acompanhamento         │  │  Materiais exclusivos   │             │
│   │  recorrente do portfólio│  │  de análise de economia │             │
│   │  alinhado com nossas    │  │  e mercado. Relatórios  │             │
│   │  recomendações.         │  │  mensais.               │             │
│   └─────────────────────────┘  └─────────────────────────┘             │
│                                                                          │
│                  [ Conheça nossa metodologia ]                           │
│                   ^^^ocean outlined button                               │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
  White background. 2x2 grid. Line-art icons in --ocean.
```

### 6.5 Differentiators Section (NEW)
```
┌──────────────────────────────────────────────────────────────────────────┐
│ ████████████████████████████████████████████████████████████████████████ │
│ ██                                                                  ██ │
│ ██   Consultoria independente                                       ██ │
│ ██   com DNA de tecnologia                                          ██ │
│ ██   ─────────── (electric underline)                               ██ │
│ ██                                                                  ██ │
│ ██   ◇ Sem conflito de interesse                                    ██ │
│ ██     Não vendemos produtos financeiros.                           ██ │
│ ██     Nosso único compromisso é com você.                          ██ │
│ ██                                                                  ██ │
│ ██   ⚡ Tecnologia como aliada                                      ██ │
│ ██     Processos otimizados, relatórios                             ██ │
│ ██     claros, acompanhamento em tempo real.                        ██ │
│ ██                                                                  ██ │
│ ██   ◎ Transparência total                                          ██ │
│ ██     Você sabe exatamente onde está                               ██ │
│ ██     seu dinheiro e por quê.                                      ██ │
│ ██                                                                  ██ │
│ ██   ♦ Atendimento personalizado                                    ██ │
│ ██     Humano + tech. Não somos um robô,                            ██ │
│ ██     mas usamos tecnologia a seu favor.                           ██ │
│ ██                                                                  ██ │
│ ████████████████████████████████████████████████████████████████████████ │
└──────────────────────────────────────────────────────────────────────────┘
  Midnight background, white text, accent icons in --electric.
  Left-aligned text with icon list. Optional: abstract illustration
  or animated graphic on the right side (50/50 split on desktop).
```

### 6.6 CTA Banner
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   ░░░░░░░░░░░░ gradient: ocean -> electric ░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                          │
│              Pronto para começar?                                        │
│                                                                          │
│              [ Fale com a gente ]                                        │
│               ^^^white btn on gradient                                   │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Sobre Page (NEW)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│                         Quem Somos                                       │
│                                                                          │
│   ─────────────────────────────────────────────────────────────          │
│                                                                          │
│   A Aggiu nasceu com um propósito claro: oferecer consultoria           │
│   de investimentos verdadeiramente independente. Sem vínculo            │
│   com bancos ou corretoras, nosso único compromisso é com               │
│   os objetivos de cada cliente.                                          │
│                                                                          │
│   ───────── Nossa Missão ─────────                                      │
│                                                                          │
│   [placeholder for mission statement from Aggiu]                        │
│                                                                          │
│   ───────── Nosso Time ──────────                                       │
│                                                                          │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                             │
│   │  ┌────┐  │  │  ┌────┐  │  │  ┌────┐  │                             │
│   │  │foto│  │  │  │foto│  │  │  │foto│  │                             │
│   │  └────┘  │  │  └────┘  │  │  └────┘  │                             │
│   │  Nome    │  │  Nome    │  │  Nome    │                             │
│   │  Cargo   │  │  Cargo   │  │  Cargo   │                             │
│   └──────────┘  └──────────┘  └──────────┘                             │
│                                                                          │
│   ───────── Nossos Valores ─────────                                    │
│                                                                          │
│   Independência    Eficiência    Transparência                          │
│   [expanded descriptions of each value]                                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
  Content needed from Aggiu: mission, team bios, company history.
```

---

## 8. Serviços Hub Page (NEW)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│                       Nossos Serviços                                    │
│                                                                          │
│   Oferecemos soluções de investimento personalizadas,                   │
│   independentes e alinhadas ao seu momento de vida.                     │
│                                                                          │
│   ┌──────────────────────────────────────────────────────────┐          │
│   │                                                          │          │
│   │   ◉  Multi Family Office                                │          │
│   │                                                          │          │
│   │   Gestão de grandes fortunas para perpetuar seu          │          │
│   │   legado. Visão holística, consolidação de riscos        │          │
│   │   em diversas instituições, países e moedas.             │          │
│   │                                                          │          │
│   │   • Reuniões mensais    • Relatórios de consolidação     │          │
│   │   • Planos sucessórios  • Programa Next Generation       │          │
│   │                                                          │          │
│   │                                    [ Saiba mais → ]      │          │
│   └──────────────────────────────────────────────────────────┘          │
│                                                                          │
│   ┌──────────────────────────────────────────────────────────┐          │
│   │                                                          │          │
│   │   ◎  Private                                             │          │
│   │                                                          │          │
│   │   Experiência MFO para quem está construindo             │          │
│   │   patrimônio. Sofisticação acessível.                    │          │
│   │                                                          │          │
│   │   • Planejamento anual   • Análise mensal de risco       │          │
│   │   • Consolidação multi   • Portfólios de previdência     │          │
│   │                                                          │          │
│   │                                    [ Saiba mais → ]      │          │
│   └──────────────────────────────────────────────────────────┘          │
│                                                                          │
│   ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐          │
│   │                                                          │          │
│   │   🔮 Em breve...                                        │          │
│   │   Novos produtos e serviços estão a caminho.             │          │
│   │                                                          │          │
│   └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘          │
│    ^^^ dashed border, muted -- teaser for future products               │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 9. MFO Detail Page

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                │
├──────────────────────────────────────────────────────────────────────────┤
│  Serviços / Multi Family Office                  (breadcrumb)           │
│                                                                          │
│  ████████████████████████████████████████████████████████████████████    │
│  ██                                                              ██    │
│  ██              Multi Family Office                             ██    │
│  ██              ◉ (service icon)                                ██    │
│  ██                                                              ██    │
│  ████████████████████████████████████████████████████████████████████    │
│  (dark gradient hero banner, shorter than home hero)                    │
│                                                                          │
│  ─────────────────────────────────────────────────────────────          │
│                                                                          │
│  O serviço Multi Family Office é essencialmente destinado               │
│  a gestão de grandes fortunas. É feita a consolidação de                │
│  riscos através de uma visão holística dos investimentos,               │
│  normalmente distribuídos em diversas instituições,                     │
│  países e moedas.                                                        │
│                                                                          │
│  ─────────────────────────────────────────────────────────────          │
│                                                                          │
│  A Aggiu possui o DNA de Wealth Management, e cuida dos                 │
│  seus investimentos sob uma perspectiva que ultrapassa                   │
│  a visão simplista Risco x Retorno...                                   │
│                                                                          │
│  ─────────────────────────────────────────────────────────────          │
│                                                                          │
│  Também ficamos à disposição para apoiar o cliente MFO na               │
│  coordenação de estruturas para planos sucessórios,                     │
│  organização fiscal e programas "Next Generation".                      │
│                                                                          │
│                      [ Entre em contato ]                                │
│                       ^^^ocean CTA button                                │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
  Clean, readable layout. Max-width content column (~720px).
  Private page follows same layout pattern.
```

---

## 10. Metodologia Page

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                │
├──────────────────────────────────────────────────────────────────────────┤
│  Institucional / Metodologia                     (breadcrumb)           │
│                                                                          │
│  ████████████ Page Hero (dark gradient) ████████████████████████████     │
│  ██         Nossa Metodologia                                   ██     │
│  ████████████████████████████████████████████████████████████████████    │
│                                                                          │
│  A Aggiu desenvolveu sua metodologia seguindo uma filosofia             │
│  de ganhos consistentes a longo prazo, unindo planejamento              │
│  patrimonial e financeiro, gestão eficiente de investimentos            │
│  e rígido processo de controle de riscos.                               │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────┐         │
│  │                                                            │         │
│  │              ┌─────────────────────┐                       │         │
│  │              │  1. Entendimento do │  ← active (highlighted│         │
│  │              │  projeto de vida    │     in --ocean)       │         │
│  │         ┌────┤                     ├────┐                  │         │
│  │         │    └─────────────────────┘    │                  │         │
│  │   ┌─────┴──────┐    Processo    ┌──────┴─────┐            │         │
│  │   │5.Disciplina│      de        │2. Análise  │            │         │
│  │   │  e revisão │  investimento  │ patrimonial│            │         │
│  │   │  contínua  │               │            │            │         │
│  │   └─────┬──────┘               └──────┬─────┘            │         │
│  │         │    ┌─────────────────────┐    │                  │         │
│  │         └────┤                     ├────┘                  │         │
│  │              │ 4. Construção de    │                       │         │
│  │              │    soluções         │                       │         │
│  │              └────────┬────────────┘                       │         │
│  │                       │                                    │         │
│  │              ┌────────┴────────────┐                       │         │
│  │              │ 3. Avaliação do     │                       │         │
│  │              │    apetite a risco  │                       │         │
│  │              └─────────────────────┘                       │         │
│  │                                                            │         │
│  └────────────────────────────────────────────────────────────┘         │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────┐           │
│  │  Step detail panel (appears when a step is clicked):     │           │
│  │                                                          │           │
│  │  1. Entendimento do projeto de vida                      │           │
│  │                                                          │           │
│  │  O primeiro passo é analisar metas e objetivos do        │           │
│  │  cliente, estabelecer prioridades, entender a            │           │
│  │  viabilidade e alinhar suas finanças e investimentos     │           │
│  │  com seu projeto de vida.                                │           │
│  └──────────────────────────────────────────────────────────┘           │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
  Interactive: click/tap a step to highlight it and show its description.
  Mobile: steps displayed as a vertical timeline instead of circle.
```

---

## 11. Compliance Page

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                │
├──────────────────────────────────────────────────────────────────────────┤
│  Institucional / Compliance                      (breadcrumb)           │
│                                                                          │
│  ████████████ Page Hero ████████████████████████████████████████████     │
│  ██         Compliance                                          ██     │
│  ████████████████████████████████████████████████████████████████████    │
│                                                                          │
│  Visualize e baixe nossos principais termos e políticas.                │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────┐           │
│  │  📄  Código de Ética                        [ Baixar ↓ ] │           │
│  ├──────────────────────────────────────────────────────────┤           │
│  │  📄  Termo de Referência                    [ Baixar ↓ ] │           │
│  ├──────────────────────────────────────────────────────────┤           │
│  │  📄  Política de Compliance                 [ Baixar ↓ ] │           │
│  ├──────────────────────────────────────────────────────────┤           │
│  │  📄  Política de Investimentos Pessoais     [ Baixar ↓ ] │           │
│  ├──────────────────────────────────────────────────────────┤           │
│  │  📄  Política de Suitability                [ Baixar ↓ ] │           │
│  └──────────────────────────────────────────────────────────┘           │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
  Simple, functional. Clean rows with hover highlight.
```

---

## 12. Contato Page

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [NAVBAR]                                                                │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ████████████ Page Hero ████████████████████████████████████████████     │
│  ██         Contato                                             ██     │
│  ████████████████████████████████████████████████████████████████████    │
│                                                                          │
│  ┌─────────────────────────┬────────────────────────────────┐           │
│  │                         │                                │           │
│  │  Fale conosco!          │  Nome *                        │           │
│  │                         │  ┌──────────────────────────┐  │           │
│  │  Preencha o formulário  │  └──────────────────────────┘  │           │
│  │  para entrar em contato │                                │           │
│  │  com a equipe da Aggiu. │  Email *                       │           │
│  │                         │  ┌──────────────────────────┐  │           │
│  │  contato@aggiu.com.br   │  └──────────────────────────┘  │           │
│  │                         │                                │           │
│  │  [in] [📷]             │  Assunto                       │           │
│  │                         │  ┌──────────────────────────┐  │           │
│  │  (optional: WhatsApp    │  └──────────────────────────┘  │           │
│  │   floating btn)         │                                │           │
│  │                         │  Mensagem                      │           │
│  │                         │  ┌──────────────────────────┐  │           │
│  │                         │  │                          │  │           │
│  │                         │  │                          │  │           │
│  │                         │  │                          │  │           │
│  │                         │  └──────────────────────────┘  │           │
│  │                         │                                │           │
│  │                         │          [ Enviar ]            │           │
│  │                         │           ^^^ocean btn         │           │
│  └─────────────────────────┴────────────────────────────────┘           │
│                                                                          │
│  ─────────── Onde estamos ───────────                                   │
│                                                                          │
│  Rua Dr. Diogo de Faria, 1087                                           │
│  Conjunto 1006, Vila Clementino    ┌──────────────────────────┐         │
│  São Paulo, SP                     │                          │         │
│  CEP 04037-003                     │      [Google Map]        │         │
│                                     │                          │         │
│  Seg-Sex, 10h às 17h00             │                          │         │
│  (exceto feriados)                 └──────────────────────────┘         │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│  [FOOTER]                                                                │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 13. Mobile Layouts

All pages are mobile-first. Key adaptations:

```
MOBILE HOME HERO                    MOBILE SERVICES
┌────────────────────┐              ┌────────────────────┐
│                    │              │  Nossos serviços   │
│  Seu patrimônio,   │              │                    │
│  sua               │              │ ┌────────────────┐ │
│  independência.    │              │ │ ◉ Multi Family │ │
│                    │              │ │   Office       │ │
│  Consultoria       │              │ │                │ │
│  independente,     │              │ │ Gestão de      │ │
│  com DNA de        │              │ │ grandes        │ │
│  tecnologia.       │              │ │ fortunas...    │ │
│                    │              │ │                │ │
│  [ Comece aqui ]   │              │ │ Saiba mais →   │ │
│                    │              │ └────────────────┘ │
│  Conheça nossos    │              │                    │
│  serviços →        │              │ ┌────────────────┐ │
│                    │              │ │ ◎ Private      │ │
│       ↓            │              │ │                │ │
└────────────────────┘              │ │ Apoiamos...    │ │
                                    │ │                │ │
                                    │ │ Saiba mais →   │ │
                                    │ └────────────────┘ │
                                    └────────────────────┘

MOBILE METHODOLOGY                  MOBILE CONTACT
┌────────────────────┐              ┌────────────────────┐
│  Nossa             │              │  Fale conosco!     │
│  Metodologia       │              │                    │
│                    │              │  contato@           │
│  [intro text...]   │              │  aggiu.com.br      │
│                    │              │                    │
│  ● 1. Entendimento │              │  [in] [📷]        │
│  │  do projeto     │              │                    │
│  │  de vida        │              │  ──────────────    │
│  │  [description]  │              │                    │
│  │                 │              │  Nome *            │
│  ● 2. Análise      │              │  [____________]    │
│  │  patrimonial    │              │                    │
│  │  [description]  │              │  Email *           │
│  │                 │              │  [____________]    │
│  ● 3. Avaliação    │              │                    │
│  │  do apetite     │              │  Assunto           │
│  │  [description]  │              │  [____________]    │
│  │                 │              │                    │
│  ● 4. Construção   │              │  Mensagem          │
│  │  de soluções    │              │  [            ]    │
│  │  [description]  │              │  [            ]    │
│  │                 │              │  [            ]    │
│  ● 5. Disciplina   │              │                    │
│     e revisão      │              │  [ Enviar ]        │
│     [description]  │              │                    │
└────────────────────┘              └────────────────────┘
  Vertical timeline                   Single-column form
  replaces circular                   stacked layout
  diagram on mobile
```

---

## 14. Interaction & Animation Notes

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero background | Slow gradient morph or floating particles | Continuous |
| Scroll indicator | Gentle bounce | Continuous |
| Value pillars | Fade up + stagger (100ms delay each) | Scroll into view |
| Service cards | Fade up | Scroll into view |
| Service card hover | Border glow + 2px lift | Mouse hover |
| "O que fazemos" items | Fade up + stagger | Scroll into view |
| Differentiators | Slide in from left + stagger | Scroll into view |
| Methodology steps | Scale/highlight on selection | Click/tap |
| Methodology step detail | Slide + fade transition | Step change |
| Page transitions | Subtle fade (if framework supports) | Navigation |
| Navbar | Transparent -> solid + blur | Scroll past hero |
| Mobile menu | Full-screen overlay, stagger items | Hamburger tap |
| CTA buttons | Subtle scale on hover (1.02) | Mouse hover |
| Form submit | Loading spinner -> success message | Form action |

**`prefers-reduced-motion`**: All animations respect this media query. Users who prefer reduced motion get instant state changes with no animation.

---

## 15. Dark Mode Concept

```
LIGHT MODE (default)                DARK MODE
┌────────────────────┐              ┌────────────────────┐
│ BG: #FFFFFF         │              │ BG: #0F172A        │
│ Text: #1E293B       │              │ Text: #F8FAFC      │
│ Secondary: #64748B  │              │ Secondary: #94A3B8 │
│ Cards: #FFFFFF      │              │ Cards: #1E293B     │
│ Card border: #E2E8F0│              │ Card border: #334155│
│ Accent: #0066FF     │              │ Accent: #3B82F6    │
│ Nav BG: #FFF/blur   │              │ Nav BG: #0F172A/blur│
└────────────────────┘              └────────────────────┘

Toggle: sun/moon icon in navbar, respects system preference.
```

---

## Summary

This visual plan covers all pages with wireframe layouts, the color system, typography, logo concepts, mobile adaptations, animation behavior, and dark mode. Combined with the detailed `SPEC.md`, this provides a complete picture for implementation.

**Next step**: Confirm the open questions in SPEC.md (especially framework choice and logo direction), then we build.
