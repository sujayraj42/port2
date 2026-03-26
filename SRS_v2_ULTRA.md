# ╔══════════════════════════════════════════════════════════════╗
# ║   SOFTWARE REQUIREMENTS SPECIFICATION (SRS) — VERSION 2.0    ║
# ║   Sujay Chakravarti — Ultra Portfolio Website 2026           ║
# ╚══════════════════════════════════════════════════════════════╝

---

## 1. INTRODUCTION

### 1.1 Purpose
This document specifies complete functional and non-functional requirements for the ultra-modern personal portfolio website of Sujay Chakravarti. Version 2.0 adds: full certification verification links, project live/GitHub links, 10th & 12th education details, 25 new UI/UX features, and all 2025–2026 web platform API requirements.

### 1.2 Product Identity
```
Product Name:    Sujay Chakravarti — Ultra Portfolio 2026
Version:         2.0
Technology:      Vanilla HTML5 · CSS3 · JavaScript ES2025+
Deploy Target:   GitHub Pages / Netlify / Vercel (static)
Performance:     Core Web Vitals — All Green
Accessibility:   WCAG 2.1 AA Compliant
Browser Target:  Chrome 115+ · Edge 115+ · Firefox 119+ · Safari 17.4+
```

### 1.3 Scope Changes from v1.0
| Added in v2.0 | Description |
|--------------|-------------|
| Certification verify links | Direct Coursera URLs for both certs |
| Project live + GitHub links | Buttons on all project cards |
| 10th education section | Placeholder with clear update instructions |
| 12th education section | Placeholder with clear update instructions |
| Loading screen | Cinematic SVG stroke loader |
| 25 new UI features | Full 2026 web tech stack |
| OffscreenCanvas + Worker | Particles moved off main thread |
| CSS Houdini Paint Worklet | Procedural noise grain |
| Popover API | Native HTML overlays for cert preview |
| View Transitions Level 2 | Cross-element named transitions |
| Navigation API | Modern SPA-style scroll routing |
| Web Audio API | Ambient sound (optional) |
| Konami code easter egg | Developer delight |
| Theme toggle | Dark/Light with View Transition |
| JSON-LD SEO | Schema.org Person markup |
| `@scope` CSS | Scoped component styles |
| `@starting-style` | Entry animations without JS |
| `interpolate-size` | Animate height: auto natively |
| `oklch()` colors | Perceptually uniform color space |
| `color-mix()` | In-CSS color manipulation |
| Reading progress bar | Scroll-driven page progress indicator |
| Scroll velocity skew | Momentum-based content skew |
| Odometer counter | Slot-machine style number animation |
| Credential decode animation | Terminal-style ID reveal |
| `field-sizing: content` | Auto-resizing textarea |

---

## 2. STAKEHOLDER & USER REQUIREMENTS

### 2.1 Primary Stakeholder: Sujay Chakravarti
```
Goals:
  ✦ Secure a frontend developer internship or entry-level role
  ✦ Showcase technical skills beyond what LinkedIn shows
  ✦ Demonstrate event leadership alongside technical ability
  ✦ Have a portfolio that itself IS proof of frontend skill

Success Metrics:
  ✦ Portfolio shared → recruiter response within 48hrs
  ✦ Portfolio scores 90+ on Lighthouse all categories
  ✦ Zero console errors in production
  ✦ Works perfectly on mobile (60% of recruiter views)
```

### 2.2 User Personas
| Persona | Device | Priority | Key Need |
|---------|--------|---------|---------|
| Tech Recruiter | Desktop | Speed + clarity | Info in <10 seconds |
| Hiring Manager | Desktop | Projects + skills | Evidence of ability |
| Developer Peer | Desktop | Code quality signals | Tech stack choices |
| Mobile Visitor | Mobile | Readability | Fast, clear, no broken layouts |
| Accessibility User | Any + SR | Content access | Screen reader friendly |

---

## 3. COMPLETE DATA REQUIREMENTS

### 3.1 Personal Information
| Field | Value | Required |
|-------|-------|---------|
| Full Name | Sujay Chakravarti | ✅ |
| Pronouns | He/Him | ✅ |
| Role | Frontend Developer | ✅ |
| University | Lovely Professional University | ✅ |
| Location | Jalandhar, Punjab, India | ✅ |
| LinkedIn | https://www.linkedin.com/in/sujay-2oo5/ | ✅ |
| Status | Open to Work — Student Roles | ✅ |
| Followers | 2,195 | ✅ |
| Connections | 500+ | ✅ |

### 3.2 Education — All 4 Levels

#### EDU-01: Bachelor's Degree (Current)
```
Institution:  Lovely Professional University (LPU)
Degree:       Bachelor of Computer Applications (BCA)
Field:        Computer Science
Period:       Aug 2023 – Apr 2026 (Expected)
Status:       IN PROGRESS
Location:     Phagwara, Punjab, India
NAAC Grade:   A++ (one of India's top-ranked private universities)
Skills:       Web Development, Event Management, Analytical Skills, Project Management (+6)
URL:          https://www.lpu.in/
Color:        #FF6B35 (LPU orange)
Badge:        "Currently Enrolled"
```

#### EDU-02: Diploma
```
Institution:  Parmar Commercial Institute
Degree:       Advance Diploma in Computer Application
Field:        Computer Science
Period:       Mar 2022 – Apr 2023
Grade:        83.75% (Distinction)
Color:        #6C63FF
Badge:        "Distinction"
```

#### EDU-03: 12th Standard (⚠ PLACEHOLDER — Sujay must update)
```
Institution:  [YOUR 12th SCHOOL NAME]
              e.g.: DAV Public School / Delhi Public School / Kendriya Vidyalaya
Degree:       Higher Secondary Certificate (Class XII)
Field:        [Science / Commerce / Arts / PCM / PCB]
Board:        [CBSE / ICSE / UP Board / State Board]
Year:         [Year of Passing, e.g. 2022]
Percentage:   [e.g. 78%]
Color:        #43E97B
Badge:        "Class XII"
INSTRUCTION:  Replace all [...] placeholders in index.html with actual values
```

#### EDU-04: 10th Standard (⚠ PLACEHOLDER — Sujay must update)
```
Institution:  [YOUR 10th SCHOOL NAME]
Degree:       Secondary School Certificate (Class X)
Field:        General
Board:        [CBSE / ICSE / UP Board / State Board]
Year:         [Year of Passing, e.g. 2020]
Percentage:   [e.g. 85%]
Color:        #FF6584
Badge:        "Class X"
INSTRUCTION:  Replace all [...] placeholders in index.html with actual values
```

### 3.3 Certifications — Complete Data

#### CERT-01: Introduction to Web Development
```
Name:           Introduction to Web Development
Full Name:      Introduction to Web Development with HTML, CSS, JavaScript
Issuer:         University of California, Davis
Issuer Short:   UC Davis
Platform:       Coursera
Issued:         June 2025
Credential ID:  MNQQHK6QJ1SO
Verify URL:     https://www.coursera.org/account/accomplishments/verify/MNQQHK6QJ1SO
Skills:         HTML5, CSS3, JavaScript, Web Standards, DOM Manipulation
Badge Color:    #003B73 (UC Davis navy blue)
Display Order:  1
```

#### CERT-02: Technical Support Fundamentals
```
Name:           Technical Support Fundamentals
Issuer:         Google
Issuer Short:   Google
Platform:       Coursera / Google Career Certificates
Issued:         June 2025
Credential ID:  5EFFZDVAOXU6
Verify URL:     https://www.coursera.org/account/accomplishments/verify/5EFFZDVAOXU6
Skills:         IT Support, Networking Fundamentals, OS Basics, Troubleshooting, Customer Service
Badge Color:    #4285F4 (Google blue)
Display Order:  2
```

### 3.4 Projects — Complete Data

#### PROJ-01: OAKWood's Furniture Website
```
Name:       OAKWood's Furniture Website
Tagline:    OAK Wood's makes your Comfort and Happiness!
Type:       Academic Project (BCA Assignment)
Period:     January 2024 – February 2024
Assoc:      Lovely Professional University
Status:     Completed

Description:
  An interactive online furniture store showcasing front-end web development
  skills using HTML, CSS, and JavaScript. The website provides users with
  an interactive and visually appealing shopping experience with product
  displays, navigation, and responsive layouts.

Features:
  ✓ Product showcase with interactive UI
  ✓ Responsive layout across devices
  ✓ CSS animations and hover effects
  ✓ Mobile-first design approach
  ✓ Clean navigation and footer

Tech Stack:
  - HTML5 (structure, semantics)
  - CSS3 (styling, animations, flexbox/grid)
  - JavaScript (interactivity, DOM manipulation)
  - Web Design principles

Links:
  Live Demo:  #  [Sujay: replace with actual hosted URL if available]
  GitHub:     https://github.com/sujay-2oo5  [replace with direct repo link]

Visual Theme:   Warm amber/brown/wood tones
  gradient: linear-gradient(135deg, #3D1F0A 0%, #8B4513 30%, #D2691E 60%, #DEB887 100%)
```

#### PROJ-02: Explore Varanasi — The Spiritual Capital
```
Name:     Explore Varanasi — The Spiritual Capital
Tagline:  Discover the Soul of India's Ancient City
Type:     Academic Project (BCA Semester)
Status:   Completed

Description:
  A semester-long web development project showcasing the rich heritage,
  cultural landmarks, and spiritual essence of Varanasi through an
  interactive and responsive website built with Bootstrap 5.

Features:
  ✓ Home Page — Overview with visually appealing design
  ✓ Photo Gallery — Collection of Varanasi images with Lightbox feature
  ✓ Tourist Attractions — Kashi Vishwanath Temple, Sarnath, and more
  ✓ Google Maps Integration — Exact location of Varanasi
  ✓ Contact Page — Contact form and social media links

Tech Stack:
  - Bootstrap 5 (framework, grid, components)
  - HTML5 (semantic structure)
  - CSS3 (custom styling, animations)
  - JavaScript (interactivity, Lightbox)
  - Google Maps API (embedded map)

Links:
  Live Demo:  #  [Sujay: replace with actual hosted URL if available]
  GitHub:     https://github.com/sujay-2oo5  [replace with direct repo link]

Visual Theme:   Saffron/gold/spiritual orange tones
  gradient: linear-gradient(135deg, #8B1A00 0%, #CC4400 25%, #FF6B00 50%, #FFB830 75%, #FFD700 100%)
```

### 3.5 Experience / Events
```
EVENT-01:
  Role:       Stage Manager
  Event:      8th Chhatra Sansad India Conclave
  Org:        LPU DSEE Student Welfare Wing
  Scale:      20,000+ attendees
  Speakers:   Smriti Irani, Khan Sir, Dr. V Narayanan (ISRO Chairman),
              Jaya Kishori, Temjen Imna Along, Maulana Kalbe Rushaid
  Reactions:  165 LinkedIn reactions | 11 comments | 1 repost

EVENT-02:
  Role:       Stage Manager
  Event:      International Women's Day Celebration
  Org:        LPU
  Date:       8 March 2025
  Speaker:    Dr. Rashmi Mittal (Pro Chancellor, LPU)
  Activities: Bouquet ceremony, Lamplighting ceremony, Felicitation ceremony
  Reactions:  88+ reactions | 10 comments | 2 reposts

EVENT-03:
  Role:       Stage Manager
  Event:      Youth Talk ft. Gaurav Taneja (FlyingBeast)
  Org:        LPU DSEE
  Speaker:    Gaurav Taneja (YouTuber, fitness expert, pilot)
  Reactions:  157 reactions | 10 comments | 1 repost

EVENT-04:
  Role:       Event Lead
  Event:      Gita Olympiad Prize Distribution
  Org:        LPU
  Speakers:   Bhakt Bhagwat, H.G. Dr. Vrindavan Chandra Das
  Reactions:  229 reactions | 9 comments | 4 reposts
```

---

## 4. FUNCTIONAL REQUIREMENTS

### 4.1 Loading Screen (LOAD)
| ID | Requirement |
|----|------------|
| LOAD-01 | A full-screen loading overlay shall appear on first visit |
| LOAD-02 | `SC` monogram SVG shall animate via `stroke-dashoffset` technique |
| LOAD-03 | A progress bar shall fill over 1.8 seconds |
| LOAD-04 | `sessionStorage` shall be checked: if `loaded=true`, skip loader |
| LOAD-05 | View Transitions API shall animate loader exit → site entrance |
| LOAD-06 | Loader shall be hidden with `display: none` after transition completes |

### 4.2 Navigation (NAV)
| ID | Requirement |
|----|------------|
| NAV-01 | Navigation shall be fixed (sticky) at viewport top, `z-index: 1000` |
| NAV-02 | Nav background: transparent initially; `backdrop-filter: blur(24px)` after 100px scroll |
| NAV-03 | Nav transition uses `@starting-style` for smooth blur-in |
| NAV-04 | Reading progress bar: 2px indigo line at nav top, fills via SDA `scroll()` timeline |
| NAV-05 | Logo: `SC` in Clash Display 700, color: `--indigo-glow` |
| NAV-06 | `Open to Work` badge: green blinking dot + text in nav right |
| NAV-07 | Theme toggle button: sun/moon icon, triggers View Transition |
| NAV-08 | Active section: sliding indigo underline indicator (not color change) |
| NAV-09 | Mobile < 768px: hamburger button, full-screen overlay menu |
| NAV-10 | Hamburger: 3 lines morph to X via CSS `transform` only |
| NAV-11 | Mobile menu uses `:has()` — `body:has(#menu:checked)` disables scroll |
| NAV-12 | Navigation API intercepts anchor clicks for smooth scroll + VTA |

### 4.3 Hero Section (HERO)
| ID | Requirement |
|----|------------|
| HERO-01 | Hero height: `100dvh` (dynamic viewport height) |
| HERO-02 | `<canvas>` covers full hero, `aria-hidden="true"` |
| HERO-03 | Particles run on Web Worker via `OffscreenCanvas` (Chrome/Edge) |
| HERO-04 | Fallback: main-thread canvas for Firefox/Safari |
| HERO-05 | 120 particles, violet/mint/indigo colors, size 1–3px |
| HERO-06 | Connection lines drawn between particles < 150px apart |
| HERO-07 | Mouse repulsion within 120px radius |
| HERO-08 | Name reveals letter-by-letter via `clip-path` stagger |
| HERO-09 | Typewriter cycles: "Frontend Developer" → "BCA Student @ LPU" → "Building the Web" |
| HERO-10 | `Available for Internships` status badge with animated green pulse |
| HERO-11 | Two CTA buttons: `View My Work` (primary) + `Connect on LinkedIn` (ghost) |
| HERO-12 | LinkedIn button links to: `https://www.linkedin.com/in/sujay-2oo5/` |
| HERO-13 | Both CTAs: magnetic mouse-follow on desktop |
| HERO-14 | Animated gradient mesh: 3 orbs, different speeds, drifting |
| HERO-15 | Noise grain overlay via CSS Paint Worklet (Houdini) |
| HERO-16 | Subtle CSS grid overlay at 3% opacity |
| HERO-17 | Scroll indicator: animated chevron, `scroll to explore` label |

### 4.4 About Section (ABOUT)
| ID | Requirement |
|----|------------|
| ABOUT-01 | Section number `01` as faded background (opacity 0.025) |
| ABOUT-02 | Large decorative `S` initial left side |
| ABOUT-03 | Bio reveals word-by-word via scroll-driven animation |
| ABOUT-04 | 4 odometer stat cards: 500+ Connections, 2,195 Followers, 4 Events, 20,000+ Attendees |
| ABOUT-05 | Odometer counts with slot-machine digit flip animation |
| ABOUT-06 | "Open to Work — Student Roles" status chip |
| ABOUT-07 | Location badge with animated pin |
| ABOUT-08 | Elements stagger-animate with `--i` counter + `calc()` delay |

### 4.5 Skills Section (SKILLS)
| ID | Requirement |
|----|------------|
| SKILLS-01 | Section number `02` faded background |
| SKILLS-02 | Core skills: animated liquid progress bars (`@property --fill-pct`) |
| SKILLS-03 | Progress bar labels count up in sync via WAAPI |
| SKILLS-04 | HTML5: 92%, CSS3: 88%, JavaScript: 78%, Bootstrap 5: 82% |
| SKILLS-05 | Tech stack: glassmorphism badge grid, stagger entrance |
| SKILLS-06 | Soft skills: distinct badge style with warmer colors |
| SKILLS-07 | Badge hover: lift 6px + indigo glow + letter-spacing 0.5px |
| SKILLS-08 | `.projects-grid:has(.card:hover) .card:not(:hover)`: dim non-hovered |

### 4.6 Projects Section (PROJ)
| ID | Requirement |
|----|------------|
| PROJ-01 | Section number `03` faded background |
| PROJ-02 | Two project cards, responsive grid |
| PROJ-03 | Card visual header: CSS gradient art (280px height) |
| PROJ-04 | OAKWood gradient: warm wood tones |
| PROJ-05 | Varanasi gradient: saffron/gold/spiritual |
| PROJ-06 | 3D tilt: `perspective(1000px)` + 3-layer internal parallax |
| PROJ-07 | `clip-path` diagonal wipe reveal on scroll |
| PROJ-08 | Tech stack badges on each card |
| PROJ-09 | Feature list with `✓` checkmarks |
| PROJ-10 | **`Live Demo ↗` button** — links to project live URL |
| PROJ-11 | **`GitHub ↗` button** — links to GitHub repo |
| PROJ-12 | Buttons open `target="_blank" rel="noopener noreferrer"` |
| PROJ-13 | `.projects-grid:has(.card:hover) .card:not(:hover)` dims others |

### 4.7 Certifications Section (CERT)
| ID | Requirement |
|----|------------|
| CERT-01 | Section number `04` faded background |
| CERT-02 | Two cert cards with spinning `@property` gradient border |
| CERT-03 | UC Davis card: navy blue badge theme |
| CERT-04 | Google card: Google blue badge theme |
| CERT-05 | Platform (Coursera) displayed on card |
| CERT-06 | Credential ID reveals via terminal-decode animation on scroll |
| CERT-07 | Credential ID in `JetBrains Mono` with blinking cursor during decode |
| CERT-08 | Skills covered: mini badge pills under credential ID |
| CERT-09 | **`Verify Certificate ↗` button** opens Popover API overlay |
| CERT-10 | Popover content: issuer, cert name, ID, direct Coursera verify link |
| CERT-11 | UC Davis verify: `https://www.coursera.org/account/accomplishments/verify/MNQQHK6QJ1SO` |
| CERT-12 | Google verify: `https://www.coursera.org/account/accomplishments/verify/5EFFZDVAOXU6` |
| CERT-13 | Popover animates with `@starting-style` — no JS for open/close |
| CERT-14 | Popover dismisses on click-outside (Popover API handles natively) |

### 4.8 Education Section (EDU)
| ID | Requirement |
|----|------------|
| EDU-01 | Section number `05` faded background |
| EDU-02 | Heading: "Academic Journey" |
| EDU-03 | Vertical timeline with scroll-drawn line |
| EDU-04 | **4 education entries displayed** (BCA, Diploma, 12th, 10th) |
| EDU-05 | LPU card: "In Progress" animated badge, link to `https://www.lpu.in/` |
| EDU-06 | Parmar card: "Distinction — 83.75%" highlighted |
| EDU-07 | 12th card: placeholder with `<!-- TODO: UPDATE -->` HTML comment |
| EDU-08 | 10th card: placeholder with `<!-- TODO: UPDATE -->` HTML comment |
| EDU-09 | 12th placeholder shows: "12th Standard | [Board] | [School Name] | [Year] | [Percentage]" |
| EDU-10 | 10th placeholder shows: "10th Standard | [Board] | [School Name] | [Year] | [Percentage]" |
| EDU-11 | Timeline line: `scaleY(0→1)` driven by `animation-timeline: view()` |
| EDU-12 | Timeline nodes: pulsing ripple CSS animation on hover |
| EDU-13 | Cards stagger in from alternating sides |

### 4.9 Experience Section (EXP)
| ID | Requirement |
|----|------------|
| EXP-01 | Section number `06` faded background |
| EXP-02 | Heading: "Events I've Owned" |
| EXP-03 | 4 event cards: Chhatra Sansad, Women's Day, Youth Talk, Gita Olympiad |
| EXP-04 | Alternating left/right layout on desktop |
| EXP-05 | Each card: role badge + event name + org + scale + responsibilities |
| EXP-06 | Chhatra Sansad: highlighted `20,000+ attendees` stat |
| EXP-07 | LinkedIn reactions count shown on each card |
| EXP-08 | Cards animate in from sides via SDA |

### 4.10 Contact Section (CONTACT)
| ID | Requirement |
|----|------------|
| CONTACT-01 | Section number `07` faded background |
| CONTACT-02 | Heading: "Let's Build Something Together →" |
| CONTACT-03 | LinkedIn direct link: `https://www.linkedin.com/in/sujay-2oo5/` |
| CONTACT-04 | Email: copy to clipboard via Clipboard API + toast confirmation |
| CONTACT-05 | Contact form: Name, Email, Message fields |
| CONTACT-06 | `<textarea>` uses `field-sizing: content` for auto-resize |
| CONTACT-07 | Constraint Validation API for form validation |
| CONTACT-08 | Submit triggers Web Share API if available, fallback to `mailto:` |
| CONTACT-09 | Form field focus: animated underline slide-in effect |
| CONTACT-10 | Radial glow pulse in background |
| CONTACT-11 | "Open to Internships" status chip with green pulse |

### 4.11 Custom Cursor (CURSOR)
| ID | Requirement |
|----|------------|
| CURSOR-01 | `cursor: none` on `body` (desktop only) |
| CURSOR-02 | Layer 1 — Dot: 6px solid indigo, instant mouse follow |
| CURSOR-03 | Layer 2 — Ring: 40px transparent, lerp factor 0.10 |
| CURSOR-04 | Layer 3 — Halo: 80px faint glow, lerp factor 0.06 |
| CURSOR-05 | Ring/halo scale 2× on `[data-hover-cursor]` elements |
| CURSOR-06 | Dot morphs to crosshair on form inputs |
| CURSOR-07 | Cursor disabled on touch devices (`hover: none`) |
| CURSOR-08 | rAF loop updates ring/halo positions |

### 4.12 Special Features (FX)
| ID | Requirement |
|----|------------|
| FX-01 | Konami code (↑↑↓↓←→←→BA): confetti canvas burst |
| FX-02 | Theme toggle: dark/light, persisted in `localStorage` |
| FX-03 | Theme toggle uses `document.startViewTransition()` |
| FX-04 | Scroll velocity skew: `skewY(clamp(-2deg, v * 0.1, 2deg))` on `<main>` |
| FX-05 | Ambient sound toggle: Web Audio API oscillators, off by default |
| FX-06 | `@starting-style` on toasts, nav blur, popover for entry animations |
| FX-07 | Page visibility API: pause canvas RAF when tab hidden |
| FX-08 | `scheduler.postTask()` for non-critical initializations |

---

## 5. NON-FUNCTIONAL REQUIREMENTS

### 5.1 Performance
| ID | Requirement | Target |
|----|------------|--------|
| PERF-01 | Lighthouse Performance | ≥ 90 |
| PERF-02 | LCP (Largest Contentful Paint) | < 2.5s on 4G |
| PERF-03 | CLS (Cumulative Layout Shift) | < 0.1 |
| PERF-04 | FID / INP (Interaction to Next Paint) | < 200ms |
| PERF-05 | Total page weight | < 200KB (excl. Google Fonts) |
| PERF-06 | Canvas frame rate | 60fps (Worker thread) |
| PERF-07 | `content-visibility: auto` | On below-fold sections |
| PERF-08 | `will-change` | Applied transiently, removed post-animation |
| PERF-09 | Scroll handlers | Passive: `{ passive: true }` |
| PERF-10 | Resize handler | Debounced 16ms via `scheduler.postTask` |
| PERF-11 | All colors | `oklch()` for GPU-efficient rendering |

### 5.2 Accessibility
| ID | Requirement |
|----|------------|
| A11Y-01 | WCAG 2.1 AA compliance across entire site |
| A11Y-02 | All animations off when `prefers-reduced-motion: reduce` |
| A11Y-03 | Skip-to-content link as first focusable element |
| A11Y-04 | Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text |
| A11Y-05 | All form inputs have associated `<label>` |
| A11Y-06 | Canvas: `role="presentation"` + `aria-hidden="true"` |
| A11Y-07 | Popover: proper `aria-label` on trigger and dialog |
| A11Y-08 | Focus-visible ring on all interactive elements |
| A11Y-09 | Tab order: logical top-to-bottom, no focus traps |
| A11Y-10 | Keyboard: Escape closes mobile menu and popovers |
| A11Y-11 | `prefers-color-scheme` respected in `light-dark()` fallback |

### 5.3 SEO & Meta
| ID | Requirement |
|----|------------|
| SEO-01 | `<title>`: "Sujay Chakravarti — Frontend Developer | Portfolio" |
| SEO-02 | `<meta name="description">` — 155 char description |
| SEO-03 | Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url` |
| SEO-04 | Twitter Card meta tags |
| SEO-05 | JSON-LD `Person` schema with name, jobTitle, alumniOf, url |
| SEO-06 | `<link rel="canonical">` |
| SEO-07 | `<link rel="preconnect">` to fonts.googleapis.com |
| SEO-08 | `<link rel="preload">` for critical fonts |

### 5.4 Browser Compatibility + Fallbacks
| Feature | Chrome 115+ | Firefox 119+ | Safari 17.4+ | Fallback |
|---------|------------|-------------|-------------|---------|
| Scroll-Driven Animations | ✅ | ⚠ Partial | ✅ 17.4+ | IntersectionObserver |
| View Transitions API | ✅ | ⚠ 117+ | ⚠ 18+ | No transition |
| OffscreenCanvas + Worker | ✅ | ✅ | ✅ | Main thread canvas |
| CSS `@property` | ✅ | ✅ 128+ | ✅ 16.4+ | Static value |
| Popover API | ✅ | ✅ 125+ | ✅ 17+ | JS fallback |
| CSS Anchor Positioning | ✅ | ❌ | ❌ | Absolute positioning |
| CSS `:has()` | ✅ | ✅ 121+ | ✅ 15.4+ | Class toggle fallback |
| `interpolate-size` | ✅ 129+ | ❌ | ❌ | JS height animation |
| `field-sizing` | ✅ 123+ | ❌ | ❌ | JS auto-resize |
| `@starting-style` | ✅ 117+ | ✅ 129+ | ✅ 17.5+ | JS class toggle |
| `color-mix()` | ✅ 111+ | ✅ 113+ | ✅ 16.2+ | Static color |
| `oklch()` | ✅ 111+ | ✅ 113+ | ✅ 15.4+ | `hsl()` fallback |
| CSS Nesting | ✅ 120+ | ✅ 117+ | ✅ 17.2+ | Flat selectors |
| Navigation API | ✅ 102+ | ❌ | ❌ | Click handlers |
| CSS Houdini Paint | ✅ | ❌ | ❌ | CSS fallback bg |
| `scheduler.postTask` | ✅ 94+ | ❌ | ❌ | `setTimeout` |

### 5.5 Responsive Breakpoints
| Breakpoint | Viewport | Layout Changes |
|-----------|---------|---------------|
| `xs` | 320px–479px | Single col, 15px font, vertical timeline |
| `sm` | 480px–767px | Single col, 16px font, stacked cards |
| `md` | 768px–1023px | 2-col projects, desktop nav, horizontal certs |
| `lg` | 1024px–1439px | Full 2-col, 3D effects, cursor, magnetic |
| `xl` | 1440px+ | Max 1280px container, wider sections |

---

## 6. LINK REGISTRY — ALL EXTERNAL LINKS

| ID | Display Text | URL | Section | Target |
|----|-------------|-----|---------|--------|
| LNK-01 | Connect on LinkedIn | `https://www.linkedin.com/in/sujay-2oo5/` | Hero | `_blank` |
| LNK-02 | LinkedIn Profile | `https://www.linkedin.com/in/sujay-2oo5/` | Contact | `_blank` |
| LNK-03 | LPU Website | `https://www.lpu.in/` | Education | `_blank` |
| LNK-04 | Verify UC Davis Cert | `https://www.coursera.org/account/accomplishments/verify/MNQQHK6QJ1SO` | Certifications | `_blank` |
| LNK-05 | Verify Google Cert | `https://www.coursera.org/account/accomplishments/verify/5EFFZDVAOXU6` | Certifications | `_blank` |
| LNK-06 | OAKWood Live Demo | `#` (placeholder) | Projects | `_blank` |
| LNK-07 | OAKWood GitHub | `https://github.com/sujay-2oo5` | Projects | `_blank` |
| LNK-08 | Varanasi Live Demo | `#` (placeholder) | Projects | `_blank` |
| LNK-09 | Varanasi GitHub | `https://github.com/sujay-2oo5` | Projects | `_blank` |
| LNK-10 | GitHub Profile | `https://github.com/sujay-2oo5` | Nav + Footer | `_blank` |

**All external links MUST have `rel="noopener noreferrer"`**

---

## 7. ANALYTICS & PERFORMANCE REQUIREMENTS

### 7.1 Core Web Vitals Targets
```
LCP  (Largest Contentful Paint):  < 2.5s      [GOOD]
INP  (Interaction to Next Paint):  < 200ms     [GOOD]
CLS  (Cumulative Layout Shift):    < 0.1       [GOOD]
TTFB (Time to First Byte):         < 800ms     [GOOD]
FCP  (First Contentful Paint):     < 1.8s      [GOOD]
```

### 7.2 Lighthouse Targets
```
Performance:    ≥ 90
Accessibility:  ≥ 95
Best Practices: ≥ 95
SEO:            ≥ 95
```

---

## 8. ACCEPTANCE CRITERIA — COMPLETE TEST SUITE

### 8.1 Data Completeness Tests
| # | Test | Pass Condition |
|---|------|---------------|
| AC-D01 | UC Davis cert displays | Name, issuer, date, credential ID visible |
| AC-D02 | Google cert displays | Name, issuer, date, credential ID visible |
| AC-D03 | UC Davis verify button | Opens `https://coursera.org/.../MNQQHK6QJ1SO` |
| AC-D04 | Google verify button | Opens `https://coursera.org/.../5EFFZDVAOXU6` |
| AC-D05 | OAKWood project shows | Name, description, tech, period visible |
| AC-D06 | Varanasi project shows | Name, description, features, tech visible |
| AC-D07 | Project buttons present | Live Demo + GitHub buttons on each card |
| AC-D08 | LPU education shows | Degree, period, "In Progress" badge |
| AC-D09 | Diploma shows | 83.75% grade highlighted |
| AC-D10 | 12th placeholder shows | Visible placeholder with update instructions |
| AC-D11 | 10th placeholder shows | Visible placeholder with update instructions |
| AC-D12 | LPU link works | Clicks to `https://www.lpu.in/` |
| AC-D13 | LinkedIn in nav | `Open to Work` badge + link visible |
| AC-D14 | All 4 events show | Chhatra Sansad, Women's Day, Youth Talk, Gita |
| AC-D15 | Stats are correct | 500+, 2195, 4, 20000+ |

### 8.2 Animation Tests
| # | Test | Pass Condition |
|---|------|---------------|
| AC-A01 | Loader plays | SVG stroke draws on first visit |
| AC-A02 | Loader skips | Refreshing page skips loader |
| AC-A03 | Hero name reveals | Letters clip-reveal L→R on load |
| AC-A04 | Typewriter cycles | 3 strings cycle, correct text |
| AC-A05 | Particles visible | Canvas shows particles in hero |
| AC-A06 | Scroll reveals | Elements animate in on scroll |
| AC-A07 | Progress bars fill | Skills section: bars animate |
| AC-A08 | Counters count up | About section: odometer counts |
| AC-A09 | Timeline draws | Vertical line draws on scroll |
| AC-A10 | Cert ID decodes | Terminal decode plays on scroll |
| AC-A11 | Gradient border spins | Cert cards: border rotates |
| AC-A12 | Card 3D tilt | Project cards tilt on mouse |
| AC-A13 | Magnetic buttons | CTA buttons follow cursor |
| AC-A14 | Custom cursor | 3-layer cursor system visible |
| AC-A15 | Theme toggle | Dark/light switches with VTA blur |
| AC-A16 | Konami code | ↑↑↓↓←→←→BA triggers confetti |
| AC-A17 | Reduced motion | All animations disabled when `prefers-reduced-motion` |

### 8.3 Technical Tests
| # | Test | Pass Condition |
|---|------|---------------|
| AC-T01 | No console errors | DevTools: zero red errors |
| AC-T02 | No console warnings | Zero unexpected warnings |
| AC-T03 | Lighthouse Perf ≥ 90 | Run Lighthouse incognito |
| AC-T04 | Lighthouse A11y ≥ 95 | Run Lighthouse incognito |
| AC-T05 | Keyboard nav | Tab through entire page |
| AC-T06 | Escape key | Closes menu and popovers |
| AC-T07 | Mobile 375px | No overflow, readable |
| AC-T08 | Mobile 390px | No overflow, readable |
| AC-T09 | Tablet 768px | 2-col layout active |
| AC-T10 | Desktop 1440px | Full layout correct |
| AC-T11 | Firefox 119+ | Graceful SDA fallback |
| AC-T12 | Safari 17.4+ | All features work |
| AC-T13 | Clipboard API | Copy email shows toast |
| AC-T14 | CLS < 0.1 | Lighthouse CLS metric |
| AC-T15 | INP < 200ms | DevTools: no slow interactions |

---

## 9. PLACEHOLDER UPDATE GUIDE (For Sujay)

After the portfolio is generated, update these items in `index.html`:

```
SEARCH FOR:  data-edu="12th"
REPLACE WITH actual:
  - School name
  - Board (CBSE/ICSE/State)
  - Year of passing
  - Percentage/Grade

SEARCH FOR:  data-edu="10th"
REPLACE WITH actual:
  - School name
  - Board
  - Year of passing
  - Percentage/Grade

SEARCH FOR:  proj-oakwood-live
REPLACE WITH: Your hosted project URL (GitHub Pages / Netlify / etc.)

SEARCH FOR:  proj-varanasi-live
REPLACE WITH: Your hosted project URL

SEARCH FOR:  sujay@example.com
REPLACE WITH: Your actual email address

SEARCH FOR:  https://github.com/sujay-2oo5 (in projects)
REPLACE WITH: Specific repository URLs for each project
```
