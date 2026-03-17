# Interactions, Animations & Accessibility — kurtisdunn.com.au

---

## Micro-Interactions

### Transition Defaults

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Buttons (hover/active) | background-color, box-shadow | 200ms | ease-in-out |
| Cards (hover) | box-shadow, border-color | 200ms | ease-out |
| Links (hover) | color | 150ms | ease |
| Dropdowns (open/close) | opacity, transform | 200ms | ease-out |
| Modals (open) | opacity, transform(scale) | 250ms | ease-out |
| Modals (close) | opacity | 150ms | ease-in |
| Accordion (expand) | max-height | 300ms | ease-out |
| Popups (slide in) | transform(translateY) | 300ms | ease-out |
| Nav (scroll shadow) | box-shadow | 200ms | ease |

### Scroll-Triggered Animations

| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Section headings | Fade up (opacity 0→1, translateY 20px→0) | Element enters viewport | 400ms |
| Benefit cards | Staggered fade up (100ms delay between each) | Container enters viewport | 400ms each |
| Metric numbers | Count up from 0 to value | Metric strip enters viewport | 800ms |
| Industry cards | Staggered fade in | Container enters viewport | 300ms, 100ms stagger |
| Testimonial cards | Fade in | Carousel enters viewport | 400ms |
| Process steps | Sequential fade + line draw | Section enters viewport | 500ms per step |

### Interaction Patterns

**CTA Button Hover:**
```css
.cta-button {
  transition: all 200ms ease-in-out;
}
.cta-button:hover {
  background-color: /* 10% darker */;
  box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
  transform: translateY(-1px);
}
.cta-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(22, 163, 74, 0.2);
}
```

**Card Hover:**
```css
.card {
  transition: box-shadow 200ms ease-out, border-color 200ms ease-out;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  border-color: #D1D5DB;
}
```

**Form Field Focus:**
```css
.input:focus {
  border-color: #0D7377;
  box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.15);
  outline: none;
  transition: border-color 150ms ease, box-shadow 150ms ease;
}
```

**Sticky Header Scroll Effect:**
```css
.header {
  transition: box-shadow 200ms ease, background-color 200ms ease;
}
.header--scrolled {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}
```

### Reduced Motion

All animations must respect the user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Implementation:** Wrap all scroll-triggered animations in a `prefers-reduced-motion` check. When reduced motion is preferred, content appears immediately without animation.

---

## Loading States

### Page Loading
- No full-page loading spinner. Use skeleton screens for below-fold content.
- Critical content (hero, nav) renders immediately via SSG.

### Form Submission
- Button text changes to "Booking..." with inline spinner
- Button is disabled (prevent double-submit)
- On success: redirect to confirmation page
- On error: restore button, show error message inline

### Image Loading
- All below-fold images: `loading="lazy"`
- Hero background: Preloaded via `<link rel="preload">`
- Image placeholders: 10px blurred thumbnail (LQIP) or CSS background colour matching the image's dominant tone

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| Mobile | < 640px | Single column, stacked layout |
| Tablet | 640–1023px | 2-column grids, adjusted spacing |
| Desktop | 1024–1279px | Full layout, 3-column grids |
| Wide | 1280px+ | Max-width container, increased spacing |

### Tailwind Config

```javascript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
}
```

### Key Responsive Changes

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero | Stacked, left-aligned | Stacked, centred | 60/40 split |
| Industry cards | 1 column | 2 columns | 3 columns |
| Benefit cards | 1 column | 2 columns | 3 columns |
| Process steps | Vertical list | Vertical list | Horizontal timeline |
| Testimonials | Swipe carousel | 2 visible | 3 visible |
| Footer | Stacked columns | 2×2 grid | 4-column grid |
| Nav | Hamburger | Hamburger | Full horizontal |
| Sticky CTA | Bottom bar | Bottom bar | Header button only |
| Blog layout | Single column | Single column | Content + sidebar |
| Form layout | Full width | Full width | Two-column (content + form) |

---

## Accessibility Requirements (WCAG 2.1 AA)

### Perceivable

| Requirement | Implementation |
|-------------|---------------|
| **Text contrast** | Minimum 4.5:1 for normal text, 3:1 for large text (18px+). All palette combinations verified above. |
| **Non-text contrast** | UI components (buttons, inputs, icons) have 3:1 contrast against background |
| **Alt text** | All meaningful images have descriptive alt text. Decorative images use `alt=""` |
| **Captions/transcripts** | Any video content (future YouTube embeds) must have captions |
| **Text resize** | Site must be usable at 200% zoom without horizontal scrolling |
| **No colour-only indicators** | Error states use red border + text message + icon (not just red border) |

### Operable

| Requirement | Implementation |
|-------------|---------------|
| **Keyboard navigation** | All interactive elements reachable via Tab. Logical tab order matches visual order |
| **Focus indicators** | Visible focus ring on all focusable elements. Never `outline: none` without replacement |
| **Skip to content** | Hidden "Skip to main content" link, visible on focus, as first focusable element |
| **No keyboard traps** | Modals and popups trap focus within (cycle Tab), release on Esc |
| **Target size** | All interactive elements minimum 44×44px touch target |
| **Time limits** | No time-limited interactions. Popups stay until dismissed. |

### Understandable

| Requirement | Implementation |
|-------------|---------------|
| **Language** | `<html lang="en-AU">` |
| **Error identification** | Form errors: specific message, positioned near field, announced to screen readers |
| **Labels** | All form inputs have visible `<label>` elements with `for` attribute |
| **Consistent navigation** | Same nav structure on every page |
| **Predictable** | No unexpected context changes (no auto-redirects, no auto-playing media) |

### Robust

| Requirement | Implementation |
|-------------|---------------|
| **Valid HTML** | Semantic HTML5 elements (nav, main, article, section, aside, footer) |
| **ARIA** | Use native HTML semantics first. ARIA only where native elements insufficient |
| **Name/Role/Value** | Custom components have appropriate ARIA roles, states, and properties |

### Specific ARIA Requirements

| Component | ARIA |
|-----------|------|
| Navigation | `<nav aria-label="Main navigation">` |
| Mobile menu | `aria-expanded="true/false"` on toggle, `role="dialog"` on overlay |
| Accordions (FAQ) | `aria-expanded`, `aria-controls`, `role="region"` |
| Modals/Popups | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` |
| Form errors | `aria-invalid="true"`, `aria-describedby` pointing to error message |
| Loading states | `aria-busy="true"` on form, `aria-live="polite"` on status messages |
| Testimonial carousel | `role="region"`, `aria-label="Client testimonials"`, `aria-live="polite"` |
| Progress bars | `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |

### Focus Management

```css
/* Default focus ring (all focusable elements) */
:focus-visible {
  outline: 2px solid #0D7377;
  outline-offset: 2px;
}

/* Remove outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

---

## Developer Handoff Notes

### Technology Recommendations

**Current stack:** React 19 + Vite + React Router (SPA)
**Recommended migration:** Astro (for SSG/SEO) or Next.js (for SSR + SSG)

If staying with React:
- Use React Router for client-side routing
- Implement pre-rendering via vite-plugin-ssr or similar for SEO
- All animations via CSS transitions (not JS animation libraries) for performance
- Use `IntersectionObserver` for scroll-triggered animations

If migrating to Astro:
- Content pages as .astro files (zero JS by default)
- Interactive islands (forms, calculator) as React components
- Markdown/MDX for blog posts
- SSG for all pages including pSEO

### Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx       (sticky nav, mobile menu, CTA button)
│   │   ├── Footer.tsx       (4-col grid, contact info, legal)
│   │   ├── MobileCtaBar.tsx (sticky bottom bar)
│   │   └── Breadcrumb.tsx   (auto-generated from route)
│   ├── sections/
│   │   ├── Hero.tsx         (configurable: text-only or text+image)
│   │   ├── MetricStrip.tsx  (animated count-up numbers)
│   │   ├── ProblemSection.tsx
│   │   ├── BenefitCards.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── IndustryCards.tsx
│   │   ├── TrustSection.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── FaqAccordion.tsx
│   │   └── CtaBand.tsx      (full-width CTA section)
│   ├── forms/
│   │   ├── AuditBookingForm.tsx
│   │   ├── QuickAssessment.tsx
│   │   ├── ContactForm.tsx
│   │   ├── LeadMagnetForm.tsx
│   │   └── RoiCalculator.tsx
│   ├── popups/
│   │   ├── ExitIntentPopup.tsx
│   │   ├── ScrollLeadMagnet.tsx
│   │   └── RoiHookSlideIn.tsx
│   └── ui/          (shadcn/ui primitives — already exists)
├── pages/            (or routes/)
│   ├── index.tsx
│   ├── services/
│   ├── industries/
│   ├── about.tsx
│   ├── contact.tsx
│   ├── book-audit.tsx
│   ├── blog/
│   ├── case-studies/
│   ├── resources/
│   └── automation/   (pSEO pages)
├── data/
│   └── pSEO/         (structured data for programmatic pages)
└── lib/
    ├── utils.ts
    ├── analytics.ts   (dataLayer push helpers)
    └── schema.ts      (JSON-LD generation helpers)
```

### Image Requirements

| Image | Format | Max Size | Dimensions | Notes |
|-------|--------|----------|-----------|-------|
| Hero background | WebP | 150KB | 1920×1080 | Preloaded, above fold |
| Kurtis headshot | WebP | 50KB | 400×400 | Cropped square, used on About |
| Industry icons | SVG | 5KB each | 48×48 | Lucide icons, inline SVG |
| Tool logos | SVG | 10KB each | variable | From Simple Icons or vendor sites |
| Blog post images | WebP | 100KB | 1200×630 | Also used as OG image |
| OG/social image | PNG | 200KB | 1200×630 | Site-wide default |

### Performance Budget

| Metric | Budget |
|--------|--------|
| Total page weight (homepage) | < 800KB |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Interaction to Next Paint | < 200ms |
| JavaScript bundle | < 150KB (gzipped) |
| CSS | < 50KB (gzipped) |
| Fonts | < 100KB (subset Lexend + Source Sans 3) |
