# Verafy AI Design Guidelines

## Design System Rules

These are the core rules for maintaining consistency across the Verafy AI platform.

---

## General Guidelines

* **Layouts**: Use flexbox and grid by default. Only use absolute positioning when necessary for specific visual effects (particles, overlays)
* **Code Quality**: Refactor as you go to keep code clean and maintainable
* **File Organization**: Keep file sizes small - extract helper functions and components into separate files
* **Responsive Design**: All components must work on mobile, tablet, and desktop
* **Theme Awareness**: All components must support theme switching (Verafy, Pink, Pride) and light/dark modes

---

## Color System

### Theme Variables
Use CSS variables defined in `/styles/globals.css`:

```css
/* Verafy Theme (Default) */
--primary: #22D3EE (cyan-400)
--primary-dark: #06B6D4 (cyan-500)
--accent: #22D3EE

/* Pink Theme */
--primary: #EC4899 (pink-500)
--primary-dark: #DB2777 (pink-600)

/* Pride Theme */
Rainbow gradient backgrounds
```

### Usage Rules
* Never hardcode colors - always use CSS variables
* Text must meet WCAG AA contrast requirements
* Interactive elements use `--primary` for hover states
* Glassmorphism cards use `bg-white/5` with backdrop blur

---

## Typography

### Font Sizes
* **DO NOT** override font sizes unless specifically requested
* Default system uses predefined sizes in `globals.css`
* Headings: `<h1>`, `<h2>`, `<h3>` have built-in styles

### Font Weights
* **DO NOT** add font-weight classes unless requested
* System defaults: 400 (normal), 600 (semi-bold), 700 (bold)

---

## Components

### Buttons
* **Primary**: Use for main CTAs (Sign Up, Get Started)
* **Secondary**: Use for alternative actions (Learn More, Contact)
* **Ghost**: Use for subtle actions in navigation
* Always include hover and active states
* Must work in all themes

### Cards
* Use glassmorphism: `bg-white/5 backdrop-blur-xl`
* Border: `border border-white/10`
* Hover effect: `hover:border-cyan-400/50 hover:bg-white/10`
* Consistent padding: `p-6` or `p-8`

### Navigation
* Fixed header with glassmorphism
* Hover effects: glow on links
* Mobile: hamburger menu
* Theme selector always visible

### Animations
* Use Motion (formerly Framer Motion) for page transitions
* Keep animations subtle and performant
* Entry animations: fade + slide up
* Hover: scale(1.05) with smooth transition

---

## Spacing

* **Base unit**: 4px (1 Tailwind unit)
* **Sections**: `py-16` or `py-20`
* **Card padding**: `p-6` or `p-8`
* **Component gaps**: `gap-4`, `gap-6`, or `gap-8`

---

## Accessibility

* All interactive elements must have focus states
* Color contrast: minimum WCAG AA
* Alt text for all images
* Keyboard navigation support
* Screen reader friendly labels

---

## Specific Component Rules

### Pricing Cards
* 3 cards: Starter, Standard, Pro
* Highlight Pro as "Most Popular"
* Include: price, features list, CTA button
* Hover: lift effect with shadow

### FAQ Section
* Accordion style with expand/collapse
* Icons: ChevronDown for closed, ChevronUp for open
* Smooth transitions
* Support for 46 questions across categories

### Footer
* 4 columns: Company, Product, Resources, Legal
* Social media icons with hover glow
* Newsletter signup form
* Copyright with gradient text

### Theme Selector
* Dropdown or toggle UI
* Preview colors on hover
* Persist selection to localStorage
* Smooth transition between themes (0.3s)

---

## Files to Reference

* **Design System**: `/docs/design/DESIGN_SYSTEM.md`
* **Brand Guidelines**: `/docs/design/BRAND_GUIDELINES.md`
* **Component Architecture**: `/docs/architecture/COMPONENT_STRUCTURE.md`
* **CSS Variables**: `/styles/globals.css`

---

## Don't Do This

❌ Hardcode colors: `text-cyan-400`  
✅ Use variables: `text-[var(--primary)]`

❌ Add font sizes randomly: `text-2xl`  
✅ Use defaults or ask first

❌ Inconsistent spacing  
✅ Follow 4px grid system

❌ Theme-specific code in components  
✅ Use CSS variables that change with theme

---

**Last Updated**: January 2026  
**Maintainer**: Axient AI Design Team
