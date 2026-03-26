# ╔══════════════════════════════════════════════════════════════╗
# ║   SOFTWARE ARCHITECTURE SPECIFICATION (SAS) — VERSION 2.0    ║
# ║   Sujay Chakravarti — Ultra Portfolio Website 2026           ║
# ╚══════════════════════════════════════════════════════════════╝

---

## 1. ARCHITECTURE OVERVIEW

### 1.1 System Model
```
╔══════════════════════════════════════════════════════════════╗
║                    BROWSER RUNTIME 2026                       ║
║                                                              ║
║  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────┐ ║
║  │  HTML Layer │  │   CSS Layer   │  │    JS Layer         │ ║
║  │  Structure  │  │  Presentation │  │    Behavior         │ ║
║  │  Semantics  │  │  + Animation  │  │    + Orchestration  │ ║
║  │  Popover    │  │  @layer       │  │    ES Modules       │ ║
║  │  Details    │  │  @property    │  │    Workers          │ ║
║  │  Data attrs │  │  @scope       │  │    WAAPI            │ ║
║  └──────┬──────┘  └──────┬────────┘  └──────────┬──────────┘ ║
║         └─────────────────┴───────────────────────┘          ║
║                           │                                   ║
║          ┌────────────────┴──────────────────┐               ║
║          │      NATIVE BROWSER APIS          │               ║
║          │                                   │               ║
║          │  Canvas API (2D + OffscreenCanvas) │               ║
║          │  Web Workers                       │               ║
║          │  IntersectionObserver v2           │               ║
║          │  ResizeObserver                    │               ║
║          │  View Transitions API (Level 2)    │               ║
║          │  Navigation API                    │               ║
║          │  Web Animations API (WAAPI)        │               ║
║          │  Popover API                       │               ║
║          │  CSS Houdini (Paint Worklet)        │               ║
║          │  Web Audio API                     │               ║
║          │  Clipboard API                     │               ║
║          │  Web Share API                     │               ║
║          │  Constraint Validation API         │               ║
║          │  scheduler.postTask()              │               ║
║          │  Page Visibility API               │               ║
║          └───────────────────────────────────┘               ║
╚══════════════════════════════════════════════════════════════╝
```

### 1.2 Architecture Principles
1. **Web Platform First** — Use native APIs. Never reach for a library when a browser API exists.
2. **Progressive Enhancement** — Content without JS → enhanced with JS → animated with CSS/JS
3. **Worker Isolation** — Particle physics on Web Worker, UI on main thread. Zero jank.
4. **Layer-Driven CSS** — `@layer` prevents all specificity conflicts. Order = priority.
5. **Typed CSS Properties** — `@property` for type-safe, animatable custom properties.
6. **Scope-Isolated Components** — `@scope` prevents component style bleed.
7. **Factory Pattern JS** — No class inheritance trees. Factory functions return plain objects.
8. **Feature Detection** — Never assume. Always `@supports`, `if (api in obj)`, `?.` operator.

---

## 2. COMPLETE FILE ARCHITECTURE

### 2.1 Full Directory Tree
```
sujay-portfolio/
│
├── index.html                          # Entry — complete HTML document
│
├── css/
│   ├── reset.css                       # @layer reset
│   ├── tokens.css                      # @layer tokens (all custom properties)
│   ├── base.css                        # @layer base (HTML element defaults)
│   ├── animations.css                  # @layer animations (@keyframes + @property + SDA)
│   ├── layout.css                      # @layer layout (grid, flex, containers)
│   ├── components.css                  # @layer components (reusable pieces)
│   ├── cursor.css                      # @layer components (cursor system)
│   ├── scrollbar.css                   # @layer base (custom scrollbar)
│   ├── sections/
│   │   ├── loader.css
│   │   ├── nav.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── certifications.css
│   │   ├── education.css
│   │   ├── experience.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── responsive.css                  # @layer responsive (breakpoints + container queries)
│
├── js/
│   ├── main.js                         # Orchestrator — imports + init sequence
│   ├── utils.js                        # Pure utility functions (no side effects)
│   ├── loader.js                       # Loading screen + session gate
│   ├── particle-worker.js              # [Web Worker] OffscreenCanvas particle system
│   ├── canvas-particles.js             # Main-thread fallback canvas
│   ├── typed-text.js                   # Typewriter state machine
│   ├── cursor.js                       # 3-layer cursor (dot, ring, halo)
│   ├── magnetic.js                     # Magnetic button effect
│   ├── nav.js                          # Navigation + scroll spy
│   ├── scroll-observer.js              # IntersectionObserver orchestrator
│   ├── scroll-skew.js                  # Velocity-driven content skew
│   ├── counter.js                      # Odometer counter animation
│   ├── progress-bars.js                # Liquid progress bar WAAPI
│   ├── timeline-draw.js                # Scroll-driven timeline line
│   ├── card-tilt.js                    # 3D multi-layer tilt
│   ├── credential-reveal.js            # Terminal decode animation
│   ├── theme-toggle.js                 # Dark/light + VTA
│   ├── view-transitions.js             # VTA wrapper
│   ├── konami.js                       # Easter egg
│   ├── ambient-sound.js                # Web Audio API (optional)
│   └── worklets/
│       └── noise-paint.js              # CSS Houdini Paint Worklet
│
└── assets/
    ├── favicon.svg                     # SVG favicon (SC monogram)
    └── og-image.svg                    # Open Graph image
```

---

## 3. HTML ARCHITECTURE

### 3.1 Document Head Structure
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO -->
  <title>Sujay Chakravarti — Frontend Developer | Portfolio</title>
  <meta name="description" content="...155 chars...">
  <link rel="canonical" href="https://sujay.dev">

  <!-- Open Graph -->
  <meta property="og:title"       content="Sujay Chakravarti — Frontend Developer">
  <meta property="og:description" content="...">
  <meta property="og:image"       content="./assets/og-image.svg">
  <meta property="og:url"         content="https://sujay.dev">
  <meta property="og:type"        content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:title"       content="Sujay Chakravarti — Frontend Developer">
  <meta name="twitter:description" content="...">
  <meta name="twitter:image"       content="./assets/og-image.svg">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="./assets/favicon.svg">

  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://api.fontshare.com">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link href="https://api.fontshare.com/v2/css?f[]=clash-display@700,800&f[]=satoshi@300,400,500&display=swap" rel="stylesheet">

  <!-- CSS (order matters — matches @layer order) -->
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/cursor.css">
  <link rel="stylesheet" href="css/scrollbar.css">
  <link rel="stylesheet" href="css/sections/loader.css">
  <link rel="stylesheet" href="css/sections/nav.css">
  <link rel="stylesheet" href="css/sections/hero.css">
  <link rel="stylesheet" href="css/sections/about.css">
  <link rel="stylesheet" href="css/sections/skills.css">
  <link rel="stylesheet" href="css/sections/projects.css">
  <link rel="stylesheet" href="css/sections/certifications.css">
  <link rel="stylesheet" href="css/sections/education.css">
  <link rel="stylesheet" href="css/sections/experience.css">
  <link rel="stylesheet" href="css/sections/contact.css">
  <link rel="stylesheet" href="css/sections/footer.css">
  <link rel="stylesheet" href="css/responsive.css">

  <!-- JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sujay Chakravarti",
    "jobTitle": "Frontend Developer",
    "description": "BCA student building responsive web applications",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Lovely Professional University"
    },
    "sameAs": ["https://www.linkedin.com/in/sujay-2oo5/"],
    "address": { "@type": "PostalAddress", "addressLocality": "Jalandhar", "addressRegion": "Punjab", "addressCountry": "IN" }
  }
  </script>
</head>
```

### 3.2 Body Structure
```html
<body data-theme="dark">

  <!-- Skip navigation -->
  <a class="skip-link" href="#main">Skip to main content</a>

  <!-- ① Loading Screen -->
  <div id="loader" aria-hidden="true" aria-label="Loading">
    <svg id="loader-logo">...</svg>
    <div id="loader-bar"><div id="loader-fill"></div></div>
  </div>

  <!-- ② Navigation -->
  <header>
    <nav id="navbar" aria-label="Main navigation">
      <a href="#hero" class="nav-logo" aria-label="Sujay Chakravarti — Home">SC</a>
      <div class="nav-status">
        <span class="status-dot" aria-hidden="true"></span>
        <span>Open to Work</span>
      </div>
      <ul class="nav-links" role="list">
        <li><a href="#about"          data-nav="about">About</a></li>
        <li><a href="#skills"         data-nav="skills">Skills</a></li>
        <li><a href="#projects"       data-nav="projects">Projects</a></li>
        <li><a href="#certifications" data-nav="certifications">Certifications</a></li>
        <li><a href="#education"      data-nav="education">Education</a></li>
        <li><a href="#contact"        data-nav="contact">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <button id="theme-toggle" aria-label="Toggle theme" data-hover-cursor>☀</button>
        <button id="sound-toggle" aria-label="Toggle ambient sound" data-hover-cursor>♪</button>
        <button id="hamburger"    aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div id="reading-progress" aria-hidden="true"></div>
  </header>

  <!-- ③ Main Content -->
  <main id="main">

    <!-- HERO -->
    <section id="hero" aria-label="Introduction">
      <canvas id="hero-canvas" role="presentation" aria-hidden="true"></canvas>
      <div class="hero-bg-orbs" aria-hidden="true">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
      <div class="hero-grid-overlay" aria-hidden="true"></div>
      <div class="hero-content">
        <div class="hero-name" aria-label="Sujay Chakravarti">
          <span class="hero-name-word" data-word="SUJAY">
            <!-- each letter in span.char for stagger animation -->
          </span>
          <span class="hero-name-word" data-word="CHAKRAVARTI">...</span>
        </div>
        <div class="hero-rule" aria-hidden="true"></div>
        <p class="hero-typed-wrapper">
          <span id="hero-typed" aria-live="polite"></span>
          <span class="typed-cursor" aria-hidden="true">|</span>
        </p>
        <p class="hero-sub">BCA Student @ LPU · Jalandhar, India</p>
        <div class="hero-badge">
          <span class="badge-dot" aria-hidden="true"></span>
          Available for Internships
        </div>
        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary" data-magnetic data-hover-cursor>
            View My Work ↓
          </a>
          <a href="https://www.linkedin.com/in/sujay-2oo5/"
             target="_blank" rel="noopener noreferrer"
             class="btn btn-ghost" data-magnetic data-hover-cursor>
            Connect on LinkedIn ↗
          </a>
        </div>
        <div class="hero-scroll-indicator" aria-hidden="true">
          <div class="scroll-chevron"></div>
          <span>scroll to explore</span>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" aria-label="About Me">
      <span class="section-bg-number" aria-hidden="true">01</span>
      ...
    </section>

    <!-- SKILLS -->
    <section id="skills" aria-label="Skills">
      <span class="section-bg-number" aria-hidden="true">02</span>
      ...
    </section>

    <!-- PROJECTS -->
    <section id="projects" aria-label="Projects">
      <span class="section-bg-number" aria-hidden="true">03</span>
      <div class="projects-grid">
        <!-- OAKWood Card -->
        <article class="project-card" data-tilt data-reveal>
          <div class="card-visual" style="--card-gradient: linear-gradient(...)"></div>
          <div class="card-body">
            <div class="card-meta">Jan 2024 – Feb 2024 · LPU</div>
            <h3 class="card-title">OAKWood's Furniture Website</h3>
            <p class="card-tagline">OAK Wood's makes your Comfort and Happiness!</p>
            <p class="card-desc">...</p>
            <ul class="card-features">...</ul>
            <div class="card-tech">
              <span class="tech-badge">HTML5</span>
              <span class="tech-badge">CSS3</span>
              <span class="tech-badge">JavaScript</span>
            </div>
            <div class="card-links">
              <a href="#" target="_blank" rel="noopener noreferrer"
                 class="btn btn-sm btn-primary" data-hover-cursor>
                Live Demo ↗
              </a>
              <a href="https://github.com/sujay-2oo5" target="_blank" rel="noopener noreferrer"
                 class="btn btn-sm btn-ghost" data-hover-cursor>
                GitHub ↗
              </a>
            </div>
          </div>
        </article>
        <!-- Varanasi Card — same structure -->
      </div>
    </section>

    <!-- CERTIFICATIONS -->
    <section id="certifications" aria-label="Certifications">
      <span class="section-bg-number" aria-hidden="true">04</span>
      <!-- UC Davis Cert -->
      <article class="cert-card" data-reveal>
        <div class="cert-issuer-badge" style="--issuer-color: #003B73">UC Davis</div>
        <div class="cert-body">
          <h3>Introduction to Web Development</h3>
          <p class="cert-platform">via Coursera · University of California, Davis</p>
          <p class="cert-date">Issued June 2025</p>
          <div class="cert-id-wrapper">
            <span class="cert-id-label">Credential ID</span>
            <code class="cert-id" data-credential="MNQQHK6QJ1SO">
              <span class="cert-id-text"></span>
              <span class="cert-id-cursor" aria-hidden="true">_</span>
            </code>
          </div>
          <div class="cert-skills">
            <span class="skill-chip">HTML5</span>
            <span class="skill-chip">CSS3</span>
            <span class="skill-chip">JavaScript</span>
            <span class="skill-chip">Web Standards</span>
          </div>
          <!-- Popover API — native HTML, zero JS -->
          <button class="btn btn-verify" popovertarget="cert-popover-1" data-hover-cursor>
            ✓ Verify Certificate ↗
          </button>
        </div>
      </article>

      <!-- Popover — Coursera verification overlay -->
      <div id="cert-popover-1" popover aria-label="Certificate verification">
        <h4>Introduction to Web Development</h4>
        <p>Issued by: University of California, Davis via Coursera</p>
        <p>Credential ID: <code>MNQQHK6QJ1SO</code></p>
        <a href="https://www.coursera.org/account/accomplishments/verify/MNQQHK6QJ1SO"
           target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          Verify on Coursera ↗
        </a>
      </div>

      <!-- Google Cert — same pattern -->
      <article class="cert-card" data-reveal>
        ...
        <button class="btn btn-verify" popovertarget="cert-popover-2" data-hover-cursor>
          ✓ Verify Certificate ↗
        </button>
      </article>
      <div id="cert-popover-2" popover>
        ...
        <a href="https://www.coursera.org/account/accomplishments/verify/5EFFZDVAOXU6" ...>
          Verify on Coursera ↗
        </a>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" aria-label="Academic Journey">
      <span class="section-bg-number" aria-hidden="true">05</span>
      <div class="timeline-wrapper">
        <div id="timeline-line" aria-hidden="true"></div>

        <!-- EDU 1: LPU BCA (In Progress) -->
        <article class="edu-card" data-reveal data-edu="bca">
          <div class="timeline-node" aria-hidden="true"></div>
          <div class="edu-body">
            <div class="edu-status-badge in-progress">In Progress</div>
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p class="edu-institution">
              <a href="https://www.lpu.in/" target="_blank" rel="noopener noreferrer">
                Lovely Professional University ↗
              </a>
            </p>
            <p class="edu-field">Computer Science</p>
            <p class="edu-period">Aug 2023 – Apr 2026 (Expected)</p>
            <p class="edu-location">Phagwara, Punjab, India</p>
          </div>
        </article>

        <!-- EDU 2: Diploma -->
        <article class="edu-card" data-reveal data-edu="diploma">
          <div class="timeline-node" aria-hidden="true"></div>
          <div class="edu-body">
            <div class="edu-grade-badge">Distinction — 83.75%</div>
            <h3>Advance Diploma in Computer Application</h3>
            <p class="edu-institution">Parmar Commercial Institute</p>
            <p class="edu-field">Computer Science</p>
            <p class="edu-period">Mar 2022 – Apr 2023</p>
          </div>
        </article>

        <!-- EDU 3: 12th — PLACEHOLDER -->
        <article class="edu-card" data-reveal data-edu="12th">
          <!-- TODO: Update with actual 12th details -->
          <div class="timeline-node" aria-hidden="true"></div>
          <div class="edu-body">
            <div class="edu-class-badge">Class XII</div>
            <h3>Higher Secondary Certificate (12th)</h3>
            <p class="edu-institution">[Your School Name — e.g. DAV Public School]</p>
            <p class="edu-field">[Science / Commerce / Arts] · [CBSE / ICSE / State Board]</p>
            <p class="edu-period">[Year of Passing]</p>
            <p class="edu-grade">[Percentage — e.g. 78%]</p>
            <p class="edu-update-note">⚠ Update in index.html: search for data-edu="12th"</p>
          </div>
        </article>

        <!-- EDU 4: 10th — PLACEHOLDER -->
        <article class="edu-card" data-reveal data-edu="10th">
          <!-- TODO: Update with actual 10th details -->
          <div class="timeline-node" aria-hidden="true"></div>
          <div class="edu-body">
            <div class="edu-class-badge">Class X</div>
            <h3>Secondary School Certificate (10th)</h3>
            <p class="edu-institution">[Your School Name]</p>
            <p class="edu-field">General · [CBSE / ICSE / State Board]</p>
            <p class="edu-period">[Year of Passing]</p>
            <p class="edu-grade">[Percentage — e.g. 85%]</p>
            <p class="edu-update-note">⚠ Update in index.html: search for data-edu="10th"</p>
          </div>
        </article>

      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" aria-label="Events and Experience">
      <span class="section-bg-number" aria-hidden="true">06</span>
      ...4 event cards...
    </section>

    <!-- CONTACT -->
    <section id="contact" aria-label="Contact">
      <span class="section-bg-number" aria-hidden="true">07</span>
      ...
      <!-- Web Share / mailto form -->
      <!-- Clipboard API for email -->
      <!-- LinkedIn link -->
    </section>

  </main>

  <!-- Footer -->
  <footer>
    <p>© 2026 Sujay Chakravarti · Built with HTML, CSS &amp; JavaScript</p>
    <nav aria-label="Social links">
      <a href="https://www.linkedin.com/in/sujay-2oo5/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/sujay-2oo5" target="_blank" rel="noopener noreferrer">GitHub</a>
    </nav>
    <button id="back-to-top" aria-label="Back to top">↑</button>
  </footer>

  <!-- Custom Cursor (desktop only) -->
  <div id="cursor-dot"  aria-hidden="true"></div>
  <div id="cursor-ring" aria-hidden="true"></div>
  <div id="cursor-halo" aria-hidden="true"></div>

  <!-- Toast notification container -->
  <div id="toast-container" aria-live="polite" aria-atomic="true"></div>

  <!-- Confetti canvas (Konami) -->
  <canvas id="konami-canvas" aria-hidden="true"></canvas>

  <!-- JS Entry Point (type=module = deferred by default) -->
  <script type="module" src="js/main.js"></script>
</body>
```

---

## 4. CSS ARCHITECTURE — COMPLETE SPEC

### 4.1 Layer Stack (tokens.css — first file)
```css
/* Declare all layers at the top of tokens.css */
@layer
  reset,
  tokens,
  base,
  animations,
  layout,
  components,
  cursor,
  sections,
  utilities,
  responsive;
```

### 4.2 Full Design Token System (`tokens.css`)
```css
@layer tokens {
  :root {
    /* ── Color System (oklch for perceptual uniformity) ── */
    color-scheme: dark light;

    /* Space colors */
    --void:           oklch(4% 0.02 280);
    --obsidian:       oklch(8% 0.025 270);
    --surface:        oklch(11% 0.03 270);
    --surface-raise:  oklch(14% 0.03 270);
    --frost:          oklch(17% 0.035 270);

    /* Accent: Electric Indigo */
    --indigo:         oklch(65% 0.25 280);
    --indigo-light:   oklch(75% 0.22 280);
    --indigo-dim:     oklch(45% 0.2 280);
    --indigo-glow:    oklch(65% 0.25 280);
    --indigo-rgb:     108, 99, 255;        /* for rgba() usage */

    /* Secondary accents */
    --coral:          oklch(68% 0.22 15);
    --mint:           oklch(75% 0.22 155);
    --amber:          oklch(78% 0.18 75);
    --ice:            oklch(80% 0.16 200);

    /* Text */
    --text-primary:   oklch(96% 0.01 270);
    --text-secondary: oklch(72% 0.04 270);
    --text-muted:     oklch(48% 0.05 270);
    --text-ghost:     oklch(28% 0.04 270);

    /* Borders */
    --border-faint:   color-mix(in oklch, var(--indigo) 8%,  transparent);
    --border-soft:    color-mix(in oklch, var(--indigo) 15%, transparent);
    --border-mid:     color-mix(in oklch, var(--indigo) 25%, transparent);
    --border-strong:  color-mix(in oklch, var(--indigo) 50%, transparent);

    /* Semantic */
    --success:        oklch(70% 0.2 145);
    --warning:        oklch(75% 0.18 80);
    --error:          oklch(62% 0.22 25);

    /* ── Typography ── */
    --font-display:   'Clash Display', 'Syne', sans-serif;
    --font-body:      'Satoshi', 'DM Sans', sans-serif;
    --font-mono:      'JetBrains Mono', 'Fira Code', monospace;

    /* Fluid font scale */
    --text-2xs:  clamp(0.65rem,  1vw,   0.75rem);
    --text-xs:   clamp(0.75rem,  1.5vw, 0.875rem);
    --text-sm:   clamp(0.875rem, 2vw,   1rem);
    --text-base: clamp(1rem,     2.5vw, 1.125rem);
    --text-lg:   clamp(1.125rem, 3vw,   1.375rem);
    --text-xl:   clamp(1.5rem,   4vw,   2rem);
    --text-2xl:  clamp(2rem,     5vw,   3rem);
    --text-3xl:  clamp(3rem,     7vw,   5rem);
    --text-hero: clamp(3.5rem,   9vw,   8rem);

    /* ── Spacing ── */
    --space-1: 0.25rem;   --space-2: 0.5rem;
    --space-3: 0.75rem;   --space-4: 1rem;
    --space-6: 1.5rem;    --space-8: 2rem;
    --space-12: 3rem;     --space-16: 4rem;
    --space-24: 6rem;     --space-32: 8rem;
    --space-48: 12rem;

    --container-max: 1280px;
    --section-pad-y: clamp(5rem, 12vh, 9rem);
    --nav-height:    72px;

    /* ── Borders & Radius ── */
    --radius-xs:   4px;
    --radius-sm:   8px;
    --radius-md:   12px;
    --radius-lg:   20px;
    --radius-xl:   28px;
    --radius-full: 9999px;

    /* ── Easing ── */
    --ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1);
    --ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);
    --ease-bounce:      cubic-bezier(0.34, 1.56, 0.64, 1);
    --ease-spring:      cubic-bezier(0.175, 0.885, 0.32, 1.275);

    /* ── Duration ── */
    --dur-instant: 80ms;
    --dur-fast:    150ms;
    --dur-base:    300ms;
    --dur-slow:    600ms;
    --dur-xslow:   900ms;
    --dur-loader:  1800ms;

    /* ── Glass ── */
    --glass-bg:     color-mix(in oklch, var(--surface) 60%, transparent);
    --glass-blur:   blur(32px) saturate(200%) brightness(1.1);
    --glass-border: 1px solid color-mix(in oklch, white 6%, transparent);

    /* ── Shadows ── */
    --shadow-card: 0 8px 32px oklch(0% 0 0 / 0.4);
    --shadow-glow: 0 0 48px color-mix(in oklch, var(--indigo) 20%, transparent);
  }

  /* Light theme overrides */
  [data-theme="light"] {
    --void:           oklch(100% 0 0);
    --obsidian:       oklch(98% 0.005 270);
    --surface:        oklch(94% 0.01 270);
    --surface-raise:  oklch(90% 0.012 270);
    --text-primary:   oklch(12% 0.015 270);
    --text-secondary: oklch(38% 0.05 270);
    --text-muted:     oklch(55% 0.05 270);
  }
}
```

### 4.3 Animations Module (`animations.css`)
```css
@layer animations {

  /* ── @property Declarations ── */
  @property --gradient-rotation {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }
  @property --fill-pct {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 0%;
  }
  @property --card-glow {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
  }
  @property --shimmer-pos {
    syntax: '<percentage>';
    inherits: false;
    initial-value: -200%;
  }
  @property --noise-intensity {
    syntax: '<number>';
    inherits: false;
    initial-value: 0.04;
  }

  /* ── Core @keyframes ── */

  @keyframes clip-reveal-x {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
  }

  @keyframes clip-reveal-y {
    from { clip-path: inset(100% 0 0 0); }
    to   { clip-path: inset(0% 0 0 0); }
  }

  @keyframes fade-rise {
    from { opacity: 0; translate: 0 32px; filter: blur(4px); }
    to   { opacity: 1; translate: 0 0;    filter: blur(0);   }
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes slide-left {
    from { opacity: 0; translate: -48px 0; }
    to   { opacity: 1; translate: 0 0;     }
  }

  @keyframes slide-right {
    from { opacity: 0; translate: 48px 0; }
    to   { opacity: 1; translate: 0 0;    }
  }

  @keyframes float-y {
    0%, 100% { translate: 0 0px; }
    50%      { translate: 0 -20px; }
  }

  @keyframes float-orb-1 {
    0%, 100% { translate: 0px 0px; }
    33%      { translate: 60px -40px; }
    66%      { translate: -40px 30px; }
  }

  @keyframes float-orb-2 {
    0%, 100% { translate: 0px 0px; }
    50%      { translate: -80px -60px; }
  }

  @keyframes float-orb-3 {
    0%, 100% { translate: 0px 0px; }
    40%      { translate: 50px 70px; }
    80%      { translate: -30px -50px; }
  }

  @keyframes spin-gradient {
    to { --gradient-rotation: 360deg; }
  }

  @keyframes pulse-ring {
    0%   { scale: 1;   opacity: 1; }
    100% { scale: 2.5; opacity: 0; }
  }

  @keyframes bounce-scroll {
    0%, 100% { translate: 0 0; opacity: 1; }
    50%      { translate: 0 12px; opacity: 0.6; }
  }

  @keyframes typed-cursor-blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0; }
  }

  @keyframes nav-enter {
    from { translate: 0 -100%; }
    to   { translate: 0 0; }
  }

  @keyframes draw-svg-stroke {
    from { stroke-dashoffset: var(--path-length, 1000); }
    to   { stroke-dashoffset: 0; }
  }

  @keyframes loader-fill {
    from { width: 0%; }
    to   { width: 100%; }
  }

  @keyframes status-pulse {
    0%, 100% { scale: 1; opacity: 1; }
    50%      { scale: 1.5; opacity: 0.5; }
  }

  @keyframes glitch-1 {
    0%   { clip-path: inset(20% 0 60% 0); translate: -4px 0; }
    20%  { clip-path: inset(60% 0 20% 0); translate: 4px 0; }
    40%  { clip-path: inset(40% 0 40% 0); translate: 0 0; }
    100% { clip-path: inset(0% 0 100% 0); translate: 0 0; }
  }

  @keyframes glitch-2 {
    0%   { clip-path: inset(70% 0 10% 0); translate: 4px 0; }
    30%  { clip-path: inset(10% 0 70% 0); translate: -4px 0; }
    60%  { clip-path: inset(50% 0 30% 0); translate: 0 0; }
    100% { clip-path: inset(100% 0 0% 0); translate: 0 0; }
  }

  @keyframes shimmer-pass {
    from { --shimmer-pos: -200%; }
    to   { --shimmer-pos: 200%; }
  }

  @keyframes confetti-fall {
    to { translate: var(--cx) var(--cy); opacity: 0; rotate: var(--cr); }
  }

  /* ── Scroll-Driven Animations ── */
  @supports (animation-timeline: scroll()) {

    /* Reading progress bar */
    #reading-progress {
      animation: grow-width linear both;
      animation-timeline: scroll(root block);
    }
    @keyframes grow-width { to { width: 100%; } }

    /* Section reveals */
    [data-reveal] {
      animation: fade-rise linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 35%;
    }

    [data-reveal-left] {
      animation: slide-left linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 35%;
    }

    [data-reveal-right] {
      animation: slide-right linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 35%;
    }

    /* Section bg numbers — parallax */
    .section-bg-number {
      animation: section-num-parallax linear both;
      animation-timeline: view();
      animation-range: entry -20% exit 120%;
    }
    @keyframes section-num-parallax {
      from { translate: 0 -40px; }
      to   { translate: 0 40px; }
    }

    /* Timeline line draw */
    #timeline-line {
      animation: draw-line linear both;
      animation-timeline: view();
      animation-range: entry 5% exit 85%;
      transform-origin: top center;
    }
    @keyframes draw-line { from { scale: 1 0; } to { scale: 1 1; } }

    /* Section headings clip reveal */
    .section-heading {
      animation: clip-reveal-x linear both;
      animation-timeline: view();
      animation-range: entry 5% entry 40%;
    }
  }

  /* ── Reduced Motion Override ── */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      animation-delay: 0ms !important;
    }
    [data-reveal], [data-reveal-left], [data-reveal-right] {
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
  }

  /* ── @starting-style (entry animations, no JS) ── */
  @starting-style {
    #navbar.scrolled {
      backdrop-filter: blur(0px);
      background: transparent;
    }
    [popover]:popover-open {
      opacity: 0;
      scale: 0.9;
      translate: 0 8px;
    }
    .toast {
      opacity: 0;
      translate: 0 -16px;
    }
  }
}
```

---

## 5. JAVASCRIPT ARCHITECTURE — COMPLETE MODULE SPECS

### 5.1 `main.js` — Orchestrator
```js
/**
 * main.js — Portfolio initialization orchestrator
 * Loads all modules, sequences initialization, applies feature flags.
 *
 * Init Sequence:
 *   1. Feature detection → feature flags object
 *   2. Loader module (immediate)
 *   3. On loader complete → parallel init:
 *      - Canvas (worker or fallback)
 *      - Nav
 *      - Cursor (desktop only)
 *      - TypedText
 *      - Magnetic (desktop only)
 *      - ScrollObserver
 *      - ScrollSkew (desktop + no-reduced-motion)
 *      - Counter
 *      - ProgressBars
 *      - TimelineDraw
 *      - CardTilt (desktop only)
 *      - CredentialReveal
 *      - ThemeToggle
 *      - ViewTransitions
 *      - Konami
 *   4. Background tasks via scheduler.postTask():
 *      - AmbientSound setup
 *      - Paint Worklet registration
 */

import { initLoader }      from './loader.js';
import { initCanvas }      from './canvas-particles.js';
import { initNav }         from './nav.js';
import { initCursor }      from './cursor.js';
import { initTyped }       from './typed-text.js';
import { initMagnetic }    from './magnetic.js';
import { initObserver }    from './scroll-observer.js';
import { initScrollSkew }  from './scroll-skew.js';
import { initCounter }     from './counter.js';
import { initProgressBars }from './progress-bars.js';
import { initTimeline }    from './timeline-draw.js';
import { initCardTilt }    from './card-tilt.js';
import { initCredential }  from './credential-reveal.js';
import { initTheme }       from './theme-toggle.js';
import { initTransitions } from './view-transitions.js';
import { initKonami }      from './konami.js';
import {
  isTouchDevice,
  prefersReducedMotion,
  supportsOffscreenCanvas,
  supportsScheduler,
  $
} from './utils.js';

const features = {
  touch:            isTouchDevice(),
  reducedMotion:    prefersReducedMotion(),
  offscreenCanvas:  supportsOffscreenCanvas(),
  scheduler:        supportsScheduler(),
  scrollDriven:     CSS.supports('animation-timeline', 'scroll()'),
  viewTransitions:  'startViewTransition' in document,
  navigationAPI:    'navigation' in window,
  houdini:          'paintWorklet' in CSS,
  popover:          HTMLElement.prototype.hasOwnProperty('popover'),
};

async function bootstrap() {
  // Loader runs first
  await initLoader();

  // Parallel core init after loader
  const coreInit = [
    initCanvas('#hero-canvas', features),
    initNav(),
    initTyped('#hero-typed', ['Frontend Developer', 'BCA Student @ LPU', 'Building the Web']),
    initObserver(),
    initCounter('[data-count-to]'),
    initProgressBars('[data-progress]'),
    initTimeline('#timeline-line'),
    initCredential('[data-credential]'),
    initTheme('#theme-toggle'),
    initTransitions(features),
    initKonami(),
  ];

  if (!features.touch && !features.reducedMotion) {
    coreInit.push(
      initCursor(),
      initMagnetic('[data-magnetic]'),
      initCardTilt('[data-tilt]'),
      initScrollSkew('#main'),
    );
  }

  await Promise.allSettled(coreInit);

  // Background tasks
  const schedule = features.scheduler ? scheduler.postTask.bind(scheduler) : setTimeout;

  schedule(() => {
    if (features.houdini) {
      CSS.paintWorklet.addModule('./js/worklets/noise-paint.js');
    }
  }, { priority: 'background' });

  schedule(() => {
    import('./ambient-sound.js').then(m => m.initAmbientSound('#sound-toggle'));
  }, { priority: 'background' });
}

bootstrap();
```

### 5.2 `utils.js` — Complete API
```js
/**
 * @module utils
 * Pure utility functions — no DOM side effects, no global state.
 */

/** Linear interpolation */
export const lerp = (a, b, t) => a + (b - a) * t;

/** Clamp value between min and max */
export const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

/** Map value from one range to another */
export const mapRange = (v, inMin, inMax, outMin, outMax) =>
  outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);

/** Debounce: call fn at most once per wait ms */
export const debounce = (fn, wait = 16) => {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

/** Throttle to requestAnimationFrame */
export const rafThrottle = fn => {
  let pending = false;
  return (...args) => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { fn(...args); pending = false; });
  };
};

/** Query single element (null-safe) */
export const $ = (sel, root = document) => root.querySelector(sel) ?? null;

/** Query all elements → Array */
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Touch device detection */
export const isTouchDevice = () =>
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

/** Reduced motion preference */
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** OffscreenCanvas support */
export const supportsOffscreenCanvas = () =>
  'OffscreenCanvas' in window && 'transferControlToOffscreen' in HTMLCanvasElement.prototype;

/** scheduler.postTask support */
export const supportsScheduler = () => 'scheduler' in window && 'postTask' in scheduler;

/** Generate random number in range */
export const rand = (min, max) => Math.random() * (max - min) + min;

/** Generate random integer in range */
export const randInt = (min, max) => Math.floor(rand(min, max));

/** Distance between two points */
export const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

/** Ease out cubic */
export const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

/** Format number with + suffix */
export const formatStat = (n, suffix = '') => n.toLocaleString() + suffix;

/** Show toast notification */
export const showToast = (msg, duration = 2500) => {
  const container = $('#toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toast.setAttribute('role', 'status');
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
};
```

### 5.3 `particle-worker.js` — Web Worker
```js
/**
 * @module particle-worker
 * Runs on a Web Worker thread via OffscreenCanvas.
 * Receives canvas from main thread via postMessage transfer.
 * Full particle physics loop runs here — zero main thread impact.
 *
 * Message Protocol:
 *   IN:  { type: 'init', canvas: OffscreenCanvas, width, height, dpr }
 *   IN:  { type: 'mouse', x, y }       — mouse position (normalized 0..1)
 *   IN:  { type: 'resize', width, height }
 *   IN:  { type: 'pause' }             — visibility hidden
 *   IN:  { type: 'resume' }            — visibility visible
 *
 * Particle Data Model:
 *   { x, y, vx, vy, radius, alpha, color, originalVx, originalVy }
 *
 * Constants:
 *   PARTICLE_COUNT = 120
 *   CONNECT_DIST = 150
 *   REPEL_RADIUS = 120
 *   REPEL_STRENGTH = 1.2
 *   BASE_SPEED = 0.5
 *
 * Colors:
 *   violet: 'rgba(108,99,255,0.7)'
 *   mint:   'rgba(67,233,123,0.5)'
 *   ice:    'rgba(0,212,255,0.4)'
 */
```

### 5.4 `cursor.js` — 3-Layer Cursor
```js
/**
 * @module cursor
 * Three-layer custom cursor system for desktop devices.
 *
 * Layer 1 — Dot (#cursor-dot):
 *   - Size: 6px × 6px solid circle
 *   - Color: var(--indigo-glow)
 *   - Follows mouse instantly (direct style update in mousemove)
 *   - Uses CSS transform: translate(x, y) via CSS custom props
 *
 * Layer 2 — Ring (#cursor-ring):
 *   - Size: 40px × 40px transparent with 1.5px indigo border
 *   - Lerp factor: 0.10 per rAF frame (~60fps → ~6px lag at 60px/s)
 *   - Scales to 2.5× on data-hover-cursor elements
 *   - Morphs to crosshair (borderRadius 4px) on input elements
 *
 * Layer 3 — Halo (#cursor-halo):
 *   - Size: 80px × 80px very faint glow fill (indigo 8% opacity)
 *   - Lerp factor: 0.06 — maximum dreaminess
 *   - No visible on non-interactive areas
 *   - Pulses briefly on click
 *
 * Implementation:
 *   rAF loop tracks: currentX/Y for ring, haloX/Y for halo
 *   Mousemove updates targetX/Y instantly
 *   DOM writes batched in single rAF callback
 *   CSS custom properties used for transform (avoid layout thrash)
 *
 * Cleanup: returns { destroy() } for event listener removal
 */
```

### 5.5 `credential-reveal.js` — Terminal Decode
```js
/**
 * @module credential-reveal
 * Terminal-style character decode animation for certificate credential IDs.
 *
 * Effect:
 *   1. IntersectionObserver fires when [data-credential] enters view
 *   2. Characters reveal one by one, left to right
 *   3. Each character cycles through random chars before landing on correct one
 *   4. Blinking cursor (_) follows the reveal position
 *   5. Total duration: ~1200ms for 12-char ID
 *
 * Config:
 *   chars_per_second: 10
 *   scramble_iterations: 5 (random chars before landing)
 *   charset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
 *   cursor_blink_rate: 500ms
 *
 * Respects prefersReducedMotion: shows full ID immediately
 *
 * Example:
 *   Target text: "MNQQHK6QJ1SO"
 *   Frame 1: "_"
 *   Frame 2: "X_"
 *   Frame 3: "MK_"
 *   Frame 4: "MN_"
 *   ...
 *   Final: "MNQQHK6QJ1SO"
 */
```

### 5.6 `counter.js` — Odometer Animation
```js
/**
 * @module counter
 * Slot-machine style odometer counter animation.
 *
 * Effect: Digits cycle from 0 upward in a slot-machine flip motion
 * before landing on the final value.
 *
 * HTML Expected:
 *   <span data-count-to="500" data-count-suffix="+">0</span>
 *
 * Algorithm:
 *   1. IntersectionObserver fires on [data-count-to]
 *   2. WAAPI animates from 0 → target over 1800ms with easeOutCubic
 *   3. Each frame: update el.textContent = Math.round(current) + suffix
 *   4. For numbers > 99: odometer flip effect via CSS translateY on digit spans
 *
 * Respects prefersReducedMotion: sets value immediately
 */
```

### 5.7 Animation Timing Master Table
```
Module               | Trigger          | Duration | Easing           | Method
---------------------|-----------------|----------|------------------|--------
Loader SVG stroke    | page load        | 1200ms   | ease-in-out      | CSS @keyframes
Loader bar fill      | page load        | 1800ms   | linear           | CSS @keyframes
Hero name chars      | loader complete  | 80ms/ch  | ease-out-expo    | CSS clip-path stagger
Hero typed text      | 900ms after load | 80ms/ch  | linear           | JS setTimeout loop
Hero CTA buttons     | 1000ms+          | 500ms    | ease-out-expo    | CSS animation-delay
Particle fade-in     | loader complete  | 600ms    | ease-out         | CSS opacity
Nav entrance         | loader complete  | 600ms    | ease-out-expo    | CSS @keyframes
Section reveals      | scroll entry     | 600ms    | ease-out-expo    | SDA / IO
Progress bars fill   | scroll entry     | 800ms    | ease-out-expo    | WAAPI
Counters count up    | scroll entry     | 1800ms   | easeOutCubic     | WAAPI + rAF
Timeline draw        | scroll progress  | continuous | linear         | SDA scaleY
Cert ID decode       | scroll entry     | 1200ms   | stepped          | JS rAF
Gradient spin        | page load        | 4s loop  | linear           | CSS @keyframes
Card tilt            | mousemove        | 0ms      | direct           | JS rAF
Cursor ring lerp     | mousemove        | continuous | lerp 0.10      | JS rAF
Cursor halo lerp     | mousemove        | continuous | lerp 0.06      | JS rAF
Magnetic reset       | mouseleave       | 500ms    | ease-out-expo    | WAAPI
Konami confetti      | key sequence     | 2000ms   | ease-out + gravity | Canvas rAF
Theme toggle         | click            | 300ms    | ease-out         | VTA
```

---

## 6. PERFORMANCE ARCHITECTURE

### 6.1 Rendering Pipeline
```
Parse HTML → CSSOM → Layout → Paint → Composite

Optimization targets:
  Layout:    No JS-triggered forced reflows during animation loops
             (read then write, never interleave)
  Paint:     Particles on Canvas (no DOM repaints)
             Transforms and opacity only for CSS animations (compositor layer)
  Composite: will-change applied transiently
             contain: layout style on cards
             content-visibility: auto on below-fold sections
```

### 6.2 Memory Architecture
```
Main Thread Budget:
  DOM operations:      < 2ms per frame
  JS execution:        < 5ms per frame
  Total frame budget:  16.67ms (60fps)

Worker Thread:
  Particle physics:    runs on own thread — no budget concern

Cleanup strategy:
  Each init() returns { destroy() }
  destroy() removes all event listeners and cancels rAF
  Page Visibility API pauses canvas on tab hidden
```

### 6.3 Critical Resource Priority
```html
<!-- Preconnect CDNs immediately -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://api.fontshare.com">

<!-- Preload display font (render-blocking text) -->
<link rel="preload" href="https://api.fontshare.com/..." as="style">

<!-- CSS in <head> (render-blocking intentionally — critical) -->
<!-- JS type=module (deferred automatically — non-blocking) -->

<!-- content-visibility on sections -->
<section id="certifications" style="content-visibility: auto; contain-intrinsic-size: 0 500px">
```

---

## 7. DEPLOYMENT ARCHITECTURE

### 7.1 Static Hosting — Recommended Configs

**Netlify (`netlify.toml`)**
```toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/js/particle-worker.js"
  [headers.values]
    Content-Type = "application/javascript"
    # Required for SharedArrayBuffer / Worker transfer
    Cross-Origin-Opener-Policy = "same-origin"
    Cross-Origin-Embedder-Policy = "require-corp"
```

**Vercel (`vercel.json`)**
```json
{
  "headers": [
    {
      "source": "/js/particle-worker.js",
      "headers": [
        { "key": "Cross-Origin-Opener-Policy", "value": "same-origin" },
        { "key": "Cross-Origin-Embedder-Policy", "value": "require-corp" }
      ]
    }
  ]
}
```

**GitHub Pages (`_headers` file)**
```
/js/particle-worker.js
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Embedder-Policy: require-corp
```

### 7.2 Deployment Checklist
```
Pre-deploy:
  □ Replace all [placeholder] values in index.html
  □ Update 10th school details (data-edu="10th")
  □ Update 12th school details (data-edu="12th")
  □ Update project live demo URLs
  □ Update project GitHub repo URLs
  □ Update email address
  □ Test in Chrome, Firefox, Safari
  □ Run Lighthouse (target: all ≥ 90)
  □ Verify cert links open correctly
  □ Test on mobile (iPhone SE 375px)
  □ Test keyboard navigation
  □ Enable prefers-reduced-motion, verify animations disabled

Post-deploy:
  □ Test live Coursera verify links
  □ Test LinkedIn link
  □ Verify Open Graph image shows in link previews
  □ Submit to LinkedIn profile
  □ Share URL on LinkedIn post
```

---

## 8. TESTING ARCHITECTURE

### 8.1 Browser DevTools Tests
```
Performance Tab:
  - Record 10s of scrolling
  - Verify: no "Long Task" (>50ms) on main thread
  - Verify: particle animation shows in compositor thread
  - Verify: no layout thrash (purple bars)

Network Tab:
  - Verify: no 404 errors
  - Verify: fonts load from CDN
  - Check: total transfer size

Console Tab:
  - Zero red errors
  - Zero unexpected warnings

Rendering Tab (Chrome):
  - Enable: "Show paint flashing" → verify no repaints during animation
  - Enable: "Show layer borders" → verify canvas on own layer
  - Enable: FPS meter → verify sustained 60fps
```

### 8.2 Lighthouse Checklist
```
Run in: Chrome Incognito, desktop + mobile presets

Desktop Targets:
  Performance:    ≥ 90   (aim for 95+)
  Accessibility:  ≥ 95
  Best Practices: ≥ 95
  SEO:            ≥ 95

Mobile Targets (4G throttled):
  Performance:    ≥ 80   (canvas + fonts = expected drop)
  Accessibility:  ≥ 95
  SEO:            ≥ 95
```
