# Aggiu Wealth Management - Website v2 Specification

## 1. Project Overview

### 1.1 Background
Aggiu Wealth Management is a small, independent investment advisory firm based in Sao Paulo, Brazil (Vila Clementino). They currently offer Multi Family Office and Private wealth management services. The current website is a static Wix site built around 2021 that feels corporate and dated.

Aggiu is repositioning itself as a **tech-first wealth management company**, targeting a **younger audience** while retaining its core expertise. They may launch new digital products in the future. The new website should reflect this evolution -- think fintech energy, not traditional bank.

### 1.2 Goals
- **Rebrand for a younger audience**: Move away from the corporate/institutional tone toward something approachable, modern, and tech-forward
- **New visual identity**: Fresh logo, color system, and typography (current logo is literally named "AGGIU LOGO BAD.png")
- **Tech-first positioning**: The site itself should demonstrate that Aggiu embraces technology -- fast, interactive, well-crafted
- **Scalable for new products**: Site architecture should accommodate future product pages as Aggiu expands its offering
- **Migrate off Wix**: Custom-built site with proper SEO (currently not indexed by search engines)
- **Mobile-first**: Young audience = mobile-dominant browsing

### 1.3 Target Audience
- **Primary**: Young professionals (25-40) building wealth, tech-savvy, skeptical of traditional banks
- **Secondary**: High-net-worth individuals seeking independent advisory (existing MFO clients)
- **Market**: Brazilian (pt-BR), Sao Paulo-based but serving nationwide

### 1.4 Competitive Positioning
Aggiu is NOT a bank. Aggiu is NOT a brokerage. Aggiu is an independent advisor that:
- Has no conflicts of interest (doesn't sell financial products)
- Combines human expertise with a tech-forward approach
- Speaks the language of a younger generation
- Makes wealth management feel accessible, not intimidating

---

## 2. Current Website Analysis

### 2.1 Current Pages
| Page | URL Path | Purpose |
|------|----------|---------|
| Home | `/` | Landing page with hero, services overview, "O que fazemos" section |
| Metodologia | `/metodologia` | Investment methodology with 5-step process wheel |
| Compliance | `/compliance` | Downloadable policy documents (5 PDFs) |
| Multi Family Office | `/mfo` | MFO service detail page |
| Private | `/pvt` | Private service detail page |
| Contato | `/contato` | Contact form, address, map, social links |

### 2.2 Current Branding
- **Logo**: Dots/circles pattern in blue/gray + "aggiu" text + "wealth management" subtitle
- **Colors**: Light blue accents, white backgrounds, gray text, dark footer
- **Imagery**: Stock photos of skyscrapers, bridges, geometric patterns
- **Tone**: Formal, corporate, institutional

### 2.3 What's Wrong
- **Feels like every other wealth management site** -- generic stock photos, safe colors, no personality
- **Logo is acknowledged as bad** (file naming)
- **Page title says "Allea Wealth Management"** -- inconsistent branding (possibly old name)
- **Wix platform** -- slow, heavy, not indexed by search engines, hard to customize
- **No interactivity** -- static pages, no engagement
- **Copyright 2021** -- looks abandoned
- **Tone is too formal** for the new younger audience target
- **No "Quem Somos" page** despite being in the nav -- feels incomplete

---

## 3. New Brand Direction

### 3.1 Brand Personality
| Old | New |
|-----|-----|
| Corporate, institutional | Approachable, confident |
| "We manage fortunes" | "We're your ally in building wealth" |
| Formal Portuguese | Clear, direct, warm |
| Stock photography | Custom illustrations, abstract visuals |
| Static, safe | Dynamic, bold but trustworthy |

**Brand voice keywords**: Independent, transparent, tech-savvy, human, straightforward

### 3.2 Logo Concept

The current dot-cluster logo lacks meaning and scalability. New direction:

- **Style**: Clean geometric wordmark or monogram -- minimal, techy, memorable
- **Concept options**:
  1. **"A" monogram** with a subtle upward arrow/growth motif built into the letterform
  2. **Wordmark "aggiu"** in a custom geometric sans-serif, with a distinctive double-g ligature
  3. **Abstract mark** -- a simple ascending shape (like stacked chevrons or a rising graph abstraction) paired with clean wordmark
- **Requirements**:
  - Works at all sizes (favicon to billboard)
  - Light and dark variants
  - SVG-first (programmatically created)
  - No "wealth management" subtitle in the primary mark -- keep it clean
  - Optional tagline variant for formal documents

### 3.3 Color Palette

Move away from the safe light-blue corporate palette. The new palette should feel modern, techy, and trustworthy without being boring.

```
Primary:
  --midnight:    #0F172A   (deep dark blue -- backgrounds, authority)
  --ocean:       #0066FF   (vibrant blue -- primary actions, links, energy)

Accent:
  --electric:    #00D4AA   (teal/mint green -- tech feel, growth, freshness)
  --glow:        #A78BFA   (soft violet -- modern accent, differentiator)

Neutrals:
  --white:       #FFFFFF
  --snow:        #F8FAFC   (light backgrounds)
  --mist:        #E2E8F0   (borders, dividers)
  --slate:       #64748B   (secondary text)
  --charcoal:    #1E293B   (primary text)

Semantic:
  --success:     #10B981   (positive/growth)
  --warning:     #F59E0B
  --error:       #EF4444
```

**Why this palette**: The blue keeps financial trust. The teal/mint injects fintech energy (think Nubank, Robinhood). The violet adds a modern twist that stands out from competitors. No gold -- that's for old-school private banks.

### 3.4 Typography

All sans-serif. No serifs -- serifs say "traditional bank", not "tech-first".

- **Headings**: "Plus Jakarta Sans" (bold/extrabold) or "Satoshi" -- geometric, modern, confident
- **Body**: "Inter" -- highly readable, great for screens, tech-standard
- **Mono/Data**: "JetBrains Mono" or "IBM Plex Mono" -- for any financial figures, code-like elements

### 3.5 Design Principles
1. **Tech-forward, human-hearted**: Looks like a fintech but speaks like a trusted friend
2. **Bold whitespace**: Generous spacing, let elements breathe
3. **Purposeful motion**: Scroll animations, micro-interactions -- show craft, not circus
4. **Dark mode ready**: Design with both light and dark themes from day one
5. **Mobile-first**: Design for mobile, enhance for desktop
6. **Scalable**: Component-based design that accommodates new product pages easily

### 3.6 Visual Language
- **No stock photos**: Use abstract gradients, geometric shapes, subtle grain textures
- **Illustrations**: Simple line-art or geometric illustrations for concepts (methodology steps, services)
- **Glassmorphism / subtle blur**: For cards and overlays -- modern without being trendy
- **Grid-based layouts**: Clean alignment, asymmetric where it adds interest
- **Data visualization aesthetic**: Subtle chart-like decorative elements that reinforce the financial/tech identity

---

## 4. Information Architecture

### 4.1 Sitemap

```
/                     Home (landing page)
/sobre                About ("Quem Somos" -- NEW dedicated page)
/servicos             Services overview (NEW -- hub page)
  /servicos/mfo       Multi Family Office
  /servicos/private   Private
/metodologia          Investment methodology
/compliance           Documents & policies
/contato              Contact
```

**Changes from current site**:
- Added `/sobre` (Quem Somos) -- was in footer nav but had no page
- Added `/servicos` as a hub page -- cleaner IA, room for future products
- Moved service pages under `/servicos/` prefix -- better hierarchy
- Renamed `/pvt` to `/servicos/private` -- clearer

### 4.2 Future-proofing
The `/servicos` hub is designed to grow. As Aggiu creates new products, they become new entries:
```
/servicos/mfo
/servicos/private
/servicos/robo-advisor     (future example)
/servicos/planejamento     (future example)
```

---

## 5. Page Specifications

### 5.1 Global Components

#### Navbar
- Sticky, transparent on hero -> solid on scroll (with blur backdrop)
- Logo (left) | Nav links (center) | "Fale Conosco" CTA button (right)
- Nav items: Home, Sobre, Servicos (dropdown), Metodologia, Compliance, Contato
- Mobile: hamburger -> full-screen overlay menu with staggered animation
- Current page indicator: subtle underline or dot

#### Footer
- Dark theme (--midnight background)
- Layout: Logo + one-liner | Nav links | Contact info + hours | Address + social icons
- Social: LinkedIn, Instagram icons
- Dynamic copyright year
- Small legal text area (CVM registration if applicable)
- "Feito com tecnologia" or similar tech-forward tagline (optional)

### 5.2 Home Page (`/`)

The home page is the pitch. It should answer: "Who is Aggiu, why should I care, and what can they do for me?"

#### Hero
- **Full viewport height** with dark gradient or animated mesh background
- **Headline**: "Seu patrimonio, sua independencia." (or similar -- punchy, direct)
- **Subheadline**: Brief line about tech-first independent advisory
- **CTA**: Primary "Comece aqui" button + Secondary "Conheca nossos servicos" text link
- **Visual**: Subtle animated element (floating geometric shapes, particle field, or gradient morph)
- **Scroll indicator**: Animated down-arrow

#### Value Pillars
- Three pillars in a row (stacked on mobile): Independencia, Eficiencia, Transparencia
- Each: icon + keyword + one-line description
- Reveal animation on scroll
- Keep existing copy but refresh the framing to be less formal

#### Services Preview
- Section title: "Nossos servicos"
- Two feature cards side by side:
  - **Multi Family Office**: icon, title, 2-line description, "Saiba mais ->" link
  - **Private**: icon, title, 2-line description, "Saiba mais ->" link
- Cards with hover effect (glow border, slight lift)
- Future-proof: grid layout that can accommodate 3-4 cards when new products launch

#### "O que fazemos"
- 4 items in a 2x2 grid (single column on mobile):
  1. Gestao de Investimentos
  2. Planejamento Financeiro
  3. Acompanhamento Periodico
  4. Materiais para Clientes
- Each: icon + title + short description
- Existing copy preserved, tone slightly refreshed
- CTA: "Conheca nossa metodologia" button

#### Tech-First Differentiator Section (NEW)
- A bold section that communicates WHY Aggiu is different
- Key message: "Consultoria independente com DNA de tecnologia"
- 3-4 short differentiators with icons:
  - Sem conflito de interesse (no product sales)
  - Tecnologia como aliada (tech-enabled processes)
  - Transparencia total (clear reporting)
  - Atendimento personalizado (not a robo-advisor, human + tech)
- Visual: could use a split layout with abstract illustration on one side

#### CTA Banner
- Full-width colored banner before footer
- "Pronto para comecar?" + CTA button "Fale com a gente"
- Warm, inviting tone

### 5.3 Sobre Page (`/sobre`) -- NEW

- Hero with page title "Quem Somos"
- Company story / mission: why Aggiu exists, the independence philosophy
- Team section (placeholder -- photos + names + roles if provided)
- Values: Independencia, Eficiencia, Transparencia (expanded from home page)
- Timeline or milestones (optional, if they have history to share)

**Content note**: This page needs new copy from Aggiu. For now, we can scaffold with placeholder text derived from the existing home page content.

### 5.4 Servicos Hub Page (`/servicos`) -- NEW

- Hero with page title "Nossos Servicos"
- Grid of service cards (currently 2, expandable)
- Each card links to the detail page
- Brief intro text about Aggiu's service philosophy

### 5.5 MFO Page (`/servicos/mfo`)

- Page hero with breadcrumb (Servicos / Multi Family Office)
- Service icon/illustration
- Content sections preserving existing copy:
  - What is MFO (holistic wealth management for large fortunes)
  - Aggiu DNA and approach (beyond Risk x Return)
  - Client experience (materials, monthly meetings, reports)
  - Additional: succession planning, fiscal organization, Next Generation programs
- CTA: "Entre em contato"

### 5.6 Private Page (`/servicos/private`)

- Page hero with breadcrumb (Servicos / Private)
- Service icon/illustration
- Content sections preserving existing copy:
  - What is Private (MFO-like experience for wealth builders)
  - Aggiu DNA and approach
  - Client experience (annual planning, monthly analysis, execution support)
  - Additional: multi-institution consolidation, asset monitoring, pension portfolios
- CTA: "Entre em contato"

### 5.7 Metodologia Page (`/metodologia`)

- Page hero with title "Nossa Metodologia"
- Intro paragraph about long-term gains philosophy
- **Interactive Process Diagram**: Modern replacement for the current static wheel
  - 5 steps displayed as an interactive stepper/timeline (or circular):
    1. Entendimento do projeto de vida
    2. Analise patrimonial
    3. Avaliacao do apetite a risco
    4. Construcao de solucoes
    5. Disciplina e revisao continua
  - Click/hover a step to reveal its description with a smooth transition
  - Center or header: "Processo de investimento"
  - Animated on scroll entry
- All existing step descriptions preserved

### 5.8 Compliance Page (`/compliance`)

- Page hero with title "Compliance"
- Intro: "Visualize e baixe nossos principais termos e politicas."
- Clean list/card layout for 5 downloadable PDFs:
  1. Codigo de Etica
  2. Termo de Referencia
  3. Politica de Compliance
  4. Politica de Investimentos Pessoais
  5. Politica de Suitability
- Each: file icon + document name + download button
- Simple, no-frills -- this page is functional

### 5.9 Contato Page (`/contato`)

- Page hero with title "Contato"
- Two-column layout:
  - **Left**: "Fale conosco!" heading, intro text, email (contato@aggiu.com.br), social links (LinkedIn, Instagram)
  - **Right**: Contact form (Nome*, Email*, Assunto, Mensagem, Enviar)
- Location section:
  - Address: Rua Dr. Diogo de Faria, 1087 - Conjunto 1006, Vila Clementino, Sao Paulo, SP - CEP 04037-003
  - Embedded map
- Business hours: Segunda a sexta-feira, 10h as 17h00 (exceto feriados)
- Optional: WhatsApp button (very common in Brazil for this audience)

---

## 6. Technical Specification

### 6.1 Tech Stack

Framework decision is **deferred** -- will be chosen before implementation starts. Candidates:

| Option | Pros | Cons |
|--------|------|------|
| **Next.js** | SSR/SSG, great SEO, huge ecosystem, Vercel deploy | Heavier, React dependency |
| **Astro** | Lightweight, fast, partial hydration, framework-agnostic | Smaller ecosystem, less dynamic |
| **Nuxt** | Vue-based, SSR/SSG, good DX | Smaller community than Next |
| **SvelteKit** | Fast, small bundle, great DX | Smaller ecosystem |

**Non-negotiable tech choices**:
- **TypeScript** -- type safety
- **Tailwind CSS** -- utility-first styling
- **CSS-first animations** where possible, JS animation library for complex interactions
- **Static-first** -- most pages can be statically generated
- **Self-hosted fonts** -- no Google Fonts CDN dependency

### 6.2 Project Structure (framework-agnostic outline)

```
website_v2/
├── public/
│   ├── fonts/                  # Self-hosted web fonts
│   ├── images/                 # Logo SVGs, illustrations
│   └── documents/              # Compliance PDFs
├── src/
│   ├── pages/                  # Route pages (or app/ for Next.js)
│   │   ├── index             # Home
│   │   ├── sobre             # About
│   │   ├── servicos/
│   │   │   ├── index         # Services hub
│   │   │   ├── mfo           # Multi Family Office
│   │   │   └── private       # Private
│   │   ├── metodologia       # Methodology
│   │   ├── compliance        # Compliance docs
│   │   └── contato           # Contact
│   ├── components/
│   │   ├── layout/           # Navbar, Footer
│   │   ├── home/             # Hero, Services, WhatWeDo, Differentiators, CTABanner
│   │   ├── metodologia/      # ProcessDiagram
│   │   └── shared/           # PageHero, SectionTitle, Card, Button, ContactForm
│   ├── lib/
│   │   ├── constants         # Company info, nav config
│   │   └── utils             # Helper functions
│   └── styles/
│       └── globals.css       # Tailwind directives, custom properties
├── tailwind.config.*
├── tsconfig.json
├── package.json
├── SPEC.md                     # This file
└── README.md
```

### 6.3 Design Tokens (Tailwind)

```js
// Tailwind theme extension (pseudo-code, framework-agnostic)
colors: {
  midnight:  '#0F172A',
  ocean:     '#0066FF',
  electric:  '#00D4AA',
  glow:      '#A78BFA',
  snow:      '#F8FAFC',
  mist:      '#E2E8F0',
  slate:     '#64748B',
  charcoal:  '#1E293B',
}
fontFamily: {
  heading: ['Plus Jakarta Sans', 'sans-serif'],
  body:    ['Inter', 'sans-serif'],
  mono:    ['JetBrains Mono', 'monospace'],
}
```

### 6.4 SEO
- Semantic HTML5 elements
- Per-page meta tags (title, description, og:image)
- JSON-LD structured data (LocalBusiness)
- Auto-generated sitemap.xml and robots.txt
- Canonical URLs
- Alt text on all images
- Title format: "Page Name | Aggiu"

### 6.5 Performance Targets
- Lighthouse > 95 all categories
- FCP < 1s
- Core Web Vitals: all green
- Optimized images (WebP/AVIF, lazy loading)
- Font subsetting and preloading
- Minimal JavaScript on static pages

### 6.6 Accessibility
- WCAG 2.1 AA
- Full keyboard navigation
- Screen reader tested
- Color contrast ratios passing
- Visible focus indicators
- Reduced motion support (`prefers-reduced-motion`)

---

## 7. Content Strategy

### 7.1 Language
- All content in Portuguese (pt-BR)
- `<html lang="pt-BR">`

### 7.2 Tone Refresh
The existing copy is solid but overly formal. For v2:
- Keep the substance and key messages
- Lighten the tone -- less "institucional", more conversational
- Use shorter sentences and paragraphs
- Avoid jargon where possible, or explain it briefly
- Example: "Não vendemos produtos. Aconselhamos." -> keep as-is, this is already punchy

### 7.3 Content to Preserve (as-is or lightly refreshed)
All existing page copy documented in `../website_v200/website_content.txt`

### 7.4 Content to Fix
- Page title: must say "Aggiu" consistently (not "Allea Wealth Management")
- Copyright: dynamic year
- Add CVM registration info in footer (if applicable)

### 7.5 New Content Needed
- `/sobre` page copy (company story, team, mission)
- `/servicos` hub intro text
- Meta descriptions for all pages
- Alt text for new visuals
- Hero headline/subheadline (may want something punchier than current)

---

## 8. Implementation Phases

### Phase 1: Design System & Foundation
- [ ] Choose JS framework
- [ ] Project scaffolding (framework, Tailwind, TypeScript)
- [ ] Design tokens in Tailwind config (colors, fonts, spacing)
- [ ] Logo creation (SVG, light/dark variants, favicon)
- [ ] Global layout: Navbar + Footer
- [ ] Shared components: Button, Card, PageHero, SectionTitle

### Phase 2: Core Pages
- [ ] Home page (Hero, Value Pillars, Services, O que fazemos, Differentiators, CTA Banner)
- [ ] Sobre page (scaffold with available content)
- [ ] Servicos hub page
- [ ] MFO detail page
- [ ] Private detail page

### Phase 3: Remaining Pages & Interactivity
- [ ] Metodologia page with interactive process diagram
- [ ] Compliance page with PDF downloads
- [ ] Contato page with form
- [ ] Scroll animations and micro-interactions
- [ ] Dark mode toggle (if doing day-one dark mode)

### Phase 4: Backend & Integration
- [ ] Contact form API handler + email delivery
- [ ] Analytics setup
- [ ] WhatsApp integration (if approved)

### Phase 5: Launch
- [ ] SEO audit (meta, sitemap, structured data, robots.txt)
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit
- [ ] Cross-browser and device testing
- [ ] Domain/DNS configuration
- [ ] Deploy to production
- [ ] Set up redirects from old Wix URLs

---

## 9. Open Questions

1. **Framework**: What's your current leaning? (Next.js, Astro, SvelteKit, Nuxt, other?)
2. **Logo**: Should I create an SVG logo as part of the build, or will a designer handle it separately?
3. **"Sobre" page content**: Does Aggiu have a company story, team bios, or founding narrative to share?
4. **Dark mode**: Include from day one, or add later?
5. **WhatsApp**: Add a floating WhatsApp button? Very common for Brazilian financial firms.
6. **Contact form backend**: Preference on email service? (Resend, SendGrid, etc.) Target inbox: contato@aggiu.com.br?
7. **Analytics**: Google Analytics, Plausible, Vercel Analytics, or skip for now?
8. **CVM registration**: Should the footer display regulatory registration details?
9. **New products**: Any hints about upcoming products/services? Would help shape the scalable architecture.
10. **Hosting**: Vercel, Netlify, Cloudflare Pages, or self-hosted?
