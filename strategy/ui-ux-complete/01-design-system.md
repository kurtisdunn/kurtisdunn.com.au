# Design System — kurtisdunn.com.au

## Design Philosophy

Trust & Authority style with clean minimalism. The site should feel like talking to a competent, no-nonsense professional — not an agency trying to impress you. Every design decision prioritises clarity, credibility, and conversion.

---

## Colour Palette

### Primary Palette

The existing site uses a green-teal palette (russian-green, dark-sea-green, cambridge-blue). The redesign refines this into a cleaner, more conversion-focused system.

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Deep Teal | `#0D7377` | Headers, primary buttons, key UI elements |
| **Primary Light** | Teal 400 | `#14B8A6` | Hover states, active states, accents |
| **Primary Dark** | Teal 900 | `#064E3B` | Dark backgrounds, footer |
| **CTA** | Action Green | `#16A34A` | All primary CTA buttons (Book Audit) |
| **CTA Hover** | Action Green Dark | `#15803D` | CTA hover state |
| **Background** | Off-White | `#FAFBFC` | Page background |
| **Surface** | White | `#FFFFFF` | Cards, forms, elevated surfaces |
| **Surface Alt** | Warm Grey | `#F3F4F6` | Alternating sections, subtle backgrounds |
| **Text Primary** | Near Black | `#111827` | Headings, body text |
| **Text Secondary** | Slate | `#4B5563` | Subheadings, secondary text |
| **Text Muted** | Grey | `#6B7280` | Captions, meta text, placeholders |
| **Border** | Light Grey | `#E5E7EB` | Card borders, dividers |
| **Success** | Green | `#22C55E` | Success states, positive indicators |
| **Warning** | Amber | `#F59E0B` | Warning states |
| **Error** | Red | `#EF4444` | Error states, validation errors |

### Dark Mode Palette

| Role | Hex | Maps To |
|------|-----|---------|
| Background | `#0F172A` | Slate 900 |
| Surface | `#1E293B` | Slate 800 |
| Surface Alt | `#334155` | Slate 700 |
| Text Primary | `#F1F5F9` | Slate 100 |
| Text Secondary | `#CBD5E1` | Slate 300 |
| Text Muted | `#94A3B8` | Slate 400 |
| Border | `#334155` | Slate 700 |
| CTA | `#22C55E` | Same (high contrast on dark) |
| Primary | `#14B8A6` | Teal 500 (lighter for dark bg) |

### Contrast Compliance (WCAG 2.1 AA)

| Combination | Ratio | Pass? |
|------------|:-----:|:-----:|
| Text Primary on Background | 15.4:1 | AA/AAA |
| Text Secondary on Background | 7.5:1 | AA/AAA |
| Text Muted on Background | 4.8:1 | AA |
| CTA Green on White | 4.6:1 | AA |
| White on CTA Green | 4.6:1 | AA |
| White on Primary Teal | 5.2:1 | AA/AAA |
| Text Primary on Surface Alt | 12.8:1 | AA/AAA |

---

## Typography

### Font Stack

| Role | Font | Weight | Fallback |
|------|------|--------|----------|
| **Headings** | Lexend | 600 (SemiBold), 700 (Bold) | system-ui, sans-serif |
| **Body** | Source Sans 3 | 400 (Regular), 500 (Medium), 600 (SemiBold) | system-ui, sans-serif |
| **Monospace** (code, metrics) | JetBrains Mono | 400 | monospace |

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
```

### Type Scale

| Element | Font | Size (desktop) | Size (mobile) | Weight | Line Height | Letter Spacing |
|---------|------|:-:|:-:|:-:|:-:|:-:|
| H1 (hero) | Lexend | 56px / 3.5rem | 36px / 2.25rem | 700 | 1.1 | -0.02em |
| H2 (section) | Lexend | 40px / 2.5rem | 28px / 1.75rem | 600 | 1.2 | -0.01em |
| H3 (subsection) | Lexend | 28px / 1.75rem | 22px / 1.375rem | 600 | 1.3 | 0 |
| H4 (card title) | Lexend | 22px / 1.375rem | 20px / 1.25rem | 600 | 1.3 | 0 |
| Body Large | Source Sans 3 | 20px / 1.25rem | 18px / 1.125rem | 400 | 1.6 | 0 |
| Body | Source Sans 3 | 18px / 1.125rem | 16px / 1rem | 400 | 1.6 | 0 |
| Body Small | Source Sans 3 | 16px / 1rem | 14px / 0.875rem | 400 | 1.5 | 0 |
| Caption | Source Sans 3 | 14px / 0.875rem | 13px / 0.8125rem | 400 | 1.4 | 0.01em |
| Button | Source Sans 3 | 16px / 1rem | 16px / 1rem | 600 | 1 | 0.01em |
| Nav | Source Sans 3 | 16px / 1rem | 16px / 1rem | 500 | 1 | 0 |

### Line Length

Maximum readable line length: 72 characters (~680px at 18px body). Enforce via `max-w-prose` (Tailwind) or `max-width: 65ch` on paragraphs.

---

## Spacing System

Based on a 4px base unit, using Tailwind's default spacing scale.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight padding, icon gaps |
| `space-2` | 8px | Inline spacing, small gaps |
| `space-3` | 12px | Button padding (vertical) |
| `space-4` | 16px | Card padding (mobile), form field gaps |
| `space-5` | 20px | Button padding (horizontal) |
| `space-6` | 24px | Card padding (desktop), section sub-gaps |
| `space-8` | 32px | Between elements within a section |
| `space-12` | 48px | Between sections (mobile) |
| `space-16` | 64px | Between sections (desktop) |
| `space-20` | 80px | Major section breaks |
| `space-24` | 96px | Hero padding (desktop) |

### Container Widths

| Container | Max Width | Usage |
|-----------|-----------|-------|
| Page | 1280px (`max-w-7xl`) | Overall page container |
| Content | 768px (`max-w-3xl`) | Text-heavy sections, blog posts |
| Wide | 1024px (`max-w-5xl`) | Card grids, feature sections |
| Narrow | 640px (`max-w-xl`) | Forms, single-column content |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small elements, tags |
| `rounded` | 6px | Input fields, small cards |
| `rounded-md` | 8px | Buttons |
| `rounded-lg` | 12px | Cards, modals |
| `rounded-xl` | 16px | Hero cards, feature blocks |
| `rounded-full` | 9999px | Avatars, circular badges |

---

## Shadows

| Token | CSS | Usage |
|-------|-----|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Input fields, subtle elevation |
| `shadow` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Cards at rest |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)` | Cards on hover, dropdowns |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | Modals, popups |

---

## Icons

**Library:** Lucide React (already in the project)
**Size standard:** 24px × 24px (w-6 h-6) for inline, 32px × 32px (w-8 h-8) for feature cards, 48px × 48px (w-12 h-12) for hero icons
**Stroke width:** 2px (default)
**Colour:** Inherit from parent text colour, or use Primary Teal for accent

No emojis as icons. SVG only.

---

## Component Library

### Buttons

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| **Primary CTA** | `#16A34A` (green-600) | White | None | "Book Your Free Audit" — highest priority |
| **Primary** | `#0D7377` (primary teal) | White | None | Secondary actions, "Learn More" |
| **Secondary** | Transparent | `#0D7377` | 1px `#0D7377` | "Contact", nav links |
| **Ghost** | Transparent | `#4B5563` | None | Tertiary actions, text links |

**Button sizing:**
| Size | Padding | Font | Height |
|------|---------|------|--------|
| Small | 8px 16px | 14px | 36px |
| Default | 12px 24px | 16px | 44px |
| Large | 16px 32px | 18px | 52px |

**States:**
- Hover: Darken 10%, slight shadow
- Active: Darken 15%
- Disabled: 50% opacity, cursor-not-allowed
- Loading: Spinner replaces text, button disabled

### Cards

```
┌─────────────────────────────────┐  ← rounded-lg, shadow, bg-white
│  [Icon or Image]                │
│                                 │
│  Card Title (H4)                │  ← Lexend 600
│  Description text...            │  ← Source Sans 3 400
│                                 │
│  [Link or CTA]                  │  ← Text link or small button
└─────────────────────────────────┘
```

- Padding: 24px (desktop), 16px (mobile)
- Border: 1px `#E5E7EB`
- Hover: `shadow-md`, border colour shifts to `#D1D5DB`
- Transition: `transition-all duration-200`

### Form Inputs

| State | Border | Background | Shadow |
|-------|--------|-----------|--------|
| Default | `#D1D5DB` | White | None |
| Focus | `#0D7377` (primary) | White | `0 0 0 3px rgba(13,115,119,0.15)` |
| Error | `#EF4444` | `#FEF2F2` | `0 0 0 3px rgba(239,68,68,0.15)` |
| Disabled | `#E5E7EB` | `#F9FAFB` | None |

- Height: 44px minimum (touch target)
- Padding: 12px 16px
- Font: Source Sans 3, 16px (prevents iOS zoom)
- Border radius: 6px
- Labels: Above field, Source Sans 3 500, 14px, `#374151`

### Navigation

**Desktop header:**
- Fixed, white background with `shadow-sm` on scroll
- Height: 64px
- Logo left, nav items centre-right, CTA button far right
- Nav items: Source Sans 3 500, 16px, `#4B5563`
- Active state: Primary teal colour
- CTA button: Primary CTA style (green), always visible

**Mobile header:**
- Fixed, 56px height
- Logo left, hamburger right
- Full-screen overlay menu on open
- Sticky bottom CTA bar (separate from nav)

### Testimonial Cards

```
┌─────────────────────────────────┐
│  "Quote text here..."           │  ← Source Sans 3 400 italic, 18px
│                                 │
│  ★★★★★                         │  ← Gold (#F59E0B)
│  Name, Title                    │  ← Source Sans 3 600
│  Company, City                  │  ← Source Sans 3 400, muted
└─────────────────────────────────┘
```

### Metric Strip

```
┌──────────┬──────────┬──────────┬──────────┐
│   50+    │  10-20   │  150+    │   4.9    │
│   SMBs   │  hrs/wk  │ workflows│  /5 avg  │
│  served  │  saved   │ automated│  rating  │
└──────────┴──────────┴──────────┴──────────┘
```

- Numbers: Lexend 700, 36px, Primary teal
- Labels: Source Sans 3 400, 14px, muted
- Background: Surface Alt (`#F3F4F6`) or white
- Grid: 4 columns (desktop), 2×2 (tablet), stacked (mobile)
