# Copilot Instructions - Carrozzeria Milano

## Project Overview
Single-page Next.js 14 website for an Italian auto body shop (Carrozzeria Milano, Seregno). **Static export for GitHub Pages deployment** at `/CarrozzeriaMilano` base path. Italian language throughout.

## Architecture

### Static Export Configuration
- **Critical**: Project uses `output: 'export'` in [next.config.js](../next.config.js)
- Base path: `/CarrozzeriaMilano` (configured via `basePath` and `assetPrefix`)
- Images must use `unoptimized: true` (no Next.js Image Optimization API)
- All imports use `@/` path alias (mapped to project root in [tsconfig.json](../tsconfig.json))

### Page Structure
Single-page app in [app/page.tsx](../app/page.tsx) composing section components in order:
1. Hero (with BackgroundCarousel)
2. ReviewsBar
3. Services
4. About
5. Gallery
6. Contact

Layout in [app/layout.tsx](../app/layout.tsx) wraps with: Navbar (top), FloatingCTA (bottom corners), Footer.

### Component Patterns

**Client Components**: All interactive components use `'use client'` directive. Framer Motion animations throughout.

**Animation Pattern** (see [components/AnimatedLogo.tsx](../components/AnimatedLogo.tsx), [components/Hero.tsx](../components/Hero.tsx)):
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Background Carousel**: [components/BackgroundCarousel.tsx](../components/BackgroundCarousel.tsx) loads images from [data/carousel/links.ts](../data/carousel/links.ts). Uses URL parameter replacement for Google Photos links (`s680` → `s1920`). Preloads next image to prevent flash.

### Styling

**Tailwind**: Utility-first. Custom theme in [tailwind.config.ts](../tailwind.config.ts):
- Primary: `#DC143C` (crimson red) - brand color
- Font variables: `--font-inter` (body), `--font-montserrat` (headings)

**Typography Pattern**:
```tsx
<h2 className="section-title">
  Title <span className="text-primary">Highlighted</span>
</h2>
```

**Hero Text Styling**: Uses `WebkitTextStroke` for outlined text effect with drop shadows ([components/Hero.tsx](../components/Hero.tsx#L25-L35)).

### External Data

**Carousel Images**: Modify `CAROUSEL_LINKS` array in [data/carousel/links.ts](../data/carousel/links.ts) (Google Photos links).

**Insurance Companies**: Centralized database in [data/insurance-companies.ts](../data/insurance-companies.ts) with 20+ Italian insurance companies, logos (from Wikipedia/official sites), partnership status, and SEO keywords. Used by [components/InsuranceFlow.tsx](../components/InsuranceFlow.tsx) modal.

**Services Data**: Hardcoded array in [components/Services.tsx](../components/Services.tsx#L6-L45) with icon, title, description, features, and Bing image URLs.

**Contact Info**: 
- Phone: `+390362328901` (tel: links)
- WhatsApp: `+393331234567` ([components/FloatingCTA.tsx](../components/FloatingCTA.tsx#L28))

## Development Workflow

### Commands
```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build to out/
npm run lint         # ESLint check
npm run auto:git     # Auto-commit/push watcher (scripts/auto-commit-push.sh)
```

### Auto-Commit Script
[scripts/auto-commit-push.sh](../scripts/auto-commit-push.sh) watches for file changes, auto-stages, commits with timestamp, and pushes. Used for rapid iteration during development.

### Deployment
GitHub Pages serves from `out/` directory after `npm run build`. Ensure all assets work with base path `/CarrozzeriaMilano`.

## Key Conventions

1. **Italian Content**: All user-facing text in Italian
2. **SEO**: Metadata defined in [app/layout.tsx](../app/layout.tsx#L18-L22)
3. **Accessibility**: Use `aria-label` on icon-only buttons
4. **Image Handling**: External URLs (Bing, Google Photos) due to static export limitation
5. **Responsive**: Mobile-first, test breakpoints (sm/md/lg/xl)
6. **Font Loading**: Google Fonts via `next/font/google` with CSS variables

## Common Tasks

**Add new section**: Create component in `components/`, add to [app/page.tsx](../app/page.tsx), use Framer Motion animations.

**Update carousel**: Edit [data/carousel/links.ts](../data/carousel/links.ts) array.

**Style changes**: Prefer Tailwind utilities; extend theme in [tailwind.config.ts](../tailwind.config.ts) for brand colors.

**Contact info**: Update phone/WhatsApp in [components/FloatingCTA.tsx](../components/FloatingCTA.tsx) and [components/Contact.tsx](../components/Contact.tsx).
