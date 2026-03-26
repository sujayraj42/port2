# ╔══════════════════════════════════════════════════════════════╗
# ║   MASTER PROMPT — DATA-ONLY UPDATE v3.0                      ║
# ║   Sujay Chakravarti — Full Stack Developer Portfolio 2026    ║
# ║   Stack: Vanilla HTML5 · CSS3 · JavaScript ES2025+           ║
# ║   ⚠️ NO UI/CSS/ANIMATION CHANGES — DATA ONLY                 ║
# ╚══════════════════════════════════════════════════════════════╝

---

## ◈ CRITICAL AGENT INSTRUCTIONS

You are updating an **already-built, already-perfect** portfolio website.

### ❌ DO NOT CHANGE (under any circumstances):
- CSS / styling / colors / fonts / design tokens
- Animations / keyframes / transitions / `@property` declarations
- Layout / grid / flexbox / container queries
- Canvas / particle system / OffscreenCanvas / Web Workers
- JavaScript logic / module structure / event handlers
- Section order or HTML structural elements (tags, classes, IDs, attributes)
- Cursor system / scrollbar / responsive breakpoints
- Any `.css` file or `.js` file UNLESS replacing a data string inside JS

### ✅ WHAT TO CHANGE:
- Text content (headings, paragraphs, labels, badge text)
- Links (URLs in `href` attributes)
- Meta tags (title, description, OG, Twitter Card, JSON-LD)
- Typed text strings array in `main.js`
- Skill names, progress bar percentages (`data-progress` values)
- Project/certification/education/experience card content
- Footer text

---

## ◈ COMPLETE PERSONAL DATA — SUJAY CHAKRAVARTI (v3.0)

```json
{
  "personal": {
    "name": "Sujay Chakravarti",
    "pronouns": "He/Him",
    "role": "Full Stack Developer",
    "tagline": "Building end-to-end web applications | HTML · CSS · JavaScript · Bootstrap · Tailwind",
    "bio": "I am a final year BCA (Bachelor of Computer Applications) student at Lovely Professional University. My journey in tech started with curiosity about how websites work, which evolved into a passion for Full Stack Development — building complete products from the ground up. Currently, I focus on building responsive, full-stack web applications, exploring both frontend craftsmanship and backend fundamentals. I enjoy solving real problems and turning complex requirements into clean, functional digital experiences. Beyond code, I have managed live events for 20,000+ attendees at national-level conclaves — proving I can lead, coordinate, and deliver under pressure.",
    "location": "Jalandhar, Punjab, India",
    "linkedin": "https://www.linkedin.com/in/sujay-2oo5/",
    "email": "sujay@example.com",
    "github": "https://github.com/sujayraj42",
    "connections": "500+",
    "followers": "2,195",
    "portfolio_url": "https://sujayraj42.github.io/personal-PORTFOLIO/"
  },

  "education": [
    {
      "id": "edu-bca",
      "institution": "Lovely Professional University",
      "degree": "Bachelor of Computer Applications (BCA)",
      "field": "Specializing in Full Stack Web Development and Software Systems",
      "start": "2023",
      "end": "Present",
      "period_display": "2023 – Present",
      "location": "Phagwara, Punjab, India",
      "badge": "In Progress",
      "link": "https://www.lpu.in/"
    },
    {
      "id": "edu-diploma",
      "institution": "Parmar Commercial Institute",
      "degree": "Advance Diploma in Computer Application",
      "field": "Computer Science · Distinction — 83.75%",
      "start": "Mar 2022",
      "end": "Apr 2023",
      "period_display": "Mar 2022 – Apr 2023",
      "badge": "83.75%"
    },
    {
      "id": "edu-12th",
      "institution": "D.Y. Patil Pushpalata Patil International School",
      "degree": "Higher Secondary (12th)",
      "field": "CBSE Board — Science Stream",
      "period_display": "2022",
      "badge": "Class XII"
    },
    {
      "id": "edu-10th",
      "institution": "New Era High School",
      "degree": "Secondary School (10th)",
      "field": "CBSE Board",
      "period_display": "2020",
      "badge": "Class X"
    }
  ],

  "certifications": [
    {
      "id": "cert-webdev",
      "name": "Introduction to Web Development",
      "issuer": "University of California, Davis",
      "issuer_short": "UC Davis",
      "platform": "Coursera",
      "issued": "June 2025",
      "credentialId": "MNQQHK6QJ1SO",
      "verify_url": "https://www.coursera.org/account/accomplishments/verify/MNQQHK6QJ1SO",
      "badge_color": "#003B73",
      "skills_covered": ["HTML5", "CSS3", "JavaScript", "Web Standards"]
    },
    {
      "id": "cert-js",
      "name": "Interactivity with JavaScript",
      "issuer": "University of Michigan",
      "issuer_short": "U-M",
      "platform": "Coursera",
      "issued": "2025",
      "credentialId": "",
      "verify_url": "https://www.coursera.org/learn/javascript",
      "badge_color": "#00274C",
      "skills_covered": ["JavaScript", "DOM Manipulation", "Events"]
    },
    {
      "id": "cert-c",
      "name": "C for Everyone: Programming Fundamentals",
      "issuer": "University of California, Santa Cruz",
      "issuer_short": "UC Santa Cruz",
      "platform": "Coursera",
      "issued": "2025",
      "credentialId": "",
      "verify_url": "https://www.coursera.org/learn/c-for-everyone",
      "badge_color": "#003C6C",
      "skills_covered": ["C Programming", "Algorithms", "Logic Building"]
    },
    {
      "id": "cert-google",
      "name": "Technical Support Fundamentals",
      "issuer": "Google",
      "issuer_short": "Google",
      "platform": "Coursera / Google Career Certificates",
      "issued": "June 2025",
      "credentialId": "5EFFZDVAOXU6",
      "verify_url": "https://www.coursera.org/account/accomplishments/verify/5EFFZDVAOXU6",
      "badge_color": "#4285F4",
      "skills_covered": ["IT Support", "Networking", "OS Fundamentals", "Troubleshooting"]
    },
    {
      "id": "cert-volunteer",
      "name": "Student Volunteer Recognition",
      "issuer": "Lovely Professional University",
      "issuer_short": "LPU",
      "platform": "Freshmen Induction 2025",
      "issued": "2025",
      "credentialId": "",
      "verify_url": "#",
      "badge_color": "#FF6B35",
      "skills_covered": ["Event Coordination", "Volunteer Management", "Leadership"]
    }
  ],

  "projects": [
    {
      "id": "proj-varanasi",
      "name": "Explore Varanasi — The Spiritual Capital",
      "tagline": "A cultural tourism website highlighting the spiritual significance and beautiful ghats of Varanasi.",
      "description": "Semester-long web project built with Bootstrap 5. Features photo gallery with lightbox, tourist attractions (Kashi Vishwanath Temple, Sarnath), Google Maps API integration, and contact form.",
      "period": "BCA Semester Project",
      "tech": ["Bootstrap 5", "HTML5", "CSS3", "JavaScript", "Google Maps API"],
      "live_url": "#",
      "github_url": "https://github.com/sujayraj42",
      "gradient": "linear-gradient(135deg, #8B1A00 0%, #CC4400 25%, #FF6B00 50%, #FFB830 75%, #FFD700 100%)",
      "features": [
        "Home Page with visual design",
        "Photo Gallery with Lightbox",
        "Tourist Attractions — Kashi Vishwanath, Sarnath",
        "Google Maps API Integration",
        "Contact form with social links"
      ]
    },
    {
      "id": "proj-oakwood",
      "name": "OAKWood's Furniture Website",
      "tagline": "A sleek, modern furniture catalog and e-commerce UI concept with a focus on high-quality visuals.",
      "description": "BCA Bachelor's assignment demonstrating front-end skills. Interactive online furniture store with product showcases, responsive layout, and CSS animations. OAK Wood's makes your Comfort and Happiness!",
      "period": "Jan 2024 – Feb 2024 · LPU Assignment",
      "tech": ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      "live_url": "#",
      "github_url": "https://github.com/sujayraj42",
      "gradient": "linear-gradient(135deg, #3D1F0A 0%, #8B4513 30%, #D2691E 60%, #DEB887 100%)",
      "features": [
        "Interactive product showcase",
        "Responsive grid layout",
        "CSS animations on hover",
        "Mobile-first design"
      ]
    }
  ],

  "skills": {
    "core_frontend": [
      { "name": "HTML5",       "level": 92 },
      { "name": "CSS3",        "level": 88 },
      { "name": "JavaScript",  "level": 78 }
    ],
    "frameworks_libraries": [
      { "name": "Bootstrap 5",   "level": 82 },
      { "name": "Tailwind CSS",  "level": 70 },
      { "name": "Ionic (Basic)", "level": 0 }
    ],
    "backend_languages": [
      { "name": "C Programming",  "level": 65 },
      { "name": "Python (Basic)", "level": 0 },
      { "name": "Node.js (Basic)", "level": 0 },
      { "name": "REST APIs (Basic)", "level": 0 }
    ],
    "tools_tech": [
      { "name": "Git & GitHub" },
      { "name": "VS Code" },
      { "name": "Chrome DevTools" },
      { "name": "Google Maps API" }
    ],
    "soft_skills": {
      "team_leadership": ["Volunteer Management", "Public Speaking", "Collaboration", "Stage Management"],
      "support_communication": ["Customer Support", "Documentation", "Active Listening", "Event Management"],
      "problem_solving": ["Adaptability", "Critical Thinking", "Time Management", "Analytical Thinking"]
    }
  },

  "experience": [
    {
      "role": "Stage Manager",
      "event": "8th Chhatra Sansad India Conclave",
      "org": "LPU — DSEE Student Welfare Wing",
      "scale": "20,000+ attendees",
      "speakers": ["Smriti Irani (Former Union Minister)", "Khan Sir", "Dr. V Narayanan (ISRO Chairman)", "Jaya Kishori", "Temjen Imna Along"],
      "responsibilities": ["Stage transitions", "Volunteer coordination", "Felicitation ceremonies", "Guest management"],
      "reactions": "165 LinkedIn reactions",
      "color": "#6C63FF"
    },
    {
      "role": "Stage Manager",
      "event": "International Women's Day Celebration",
      "org": "LPU",
      "date": "8 March 2025",
      "speakers": ["Dr. Rashmi Mittal (Pro Chancellor, LPU)"],
      "responsibilities": ["Bouquet ceremony", "Lamplighting ceremony", "Felicitation ceremony", "Speaker & panelist coordination", "Technical team sync"],
      "reactions": "88+ LinkedIn reactions",
      "color": "#FF6584"
    },
    {
      "role": "Stage Manager",
      "event": "Youth Talk ft. Gaurav Taneja (FlyingBeast)",
      "org": "LPU — DSEE",
      "speakers": ["Gaurav Taneja (YouTuber, fitness expert, pilot)"],
      "responsibilities": ["Stage setup coordination", "Bouquet & felicitation for Gaurav Taneja", "Transition management between segments", "Volunteer & technical team coordination"],
      "reactions": "157 LinkedIn reactions",
      "color": "#43E97B"
    },
    {
      "role": "Event Lead",
      "event": "Gita Olympiad Prize Distribution",
      "org": "LPU",
      "speakers": ["Bhakt Bhagwat", "H.G. Dr. Vrindavan Chandra Das"],
      "responsibilities": ["Volunteer deployment & management", "Guest handling", "Stage proceedings", "Event promotion & coordination"],
      "reactions": "229 LinkedIn reactions",
      "color": "#FFD700"
    }
  ],

  "stats": {
    "connections": 500,
    "followers": 2195,
    "projects": 2,
    "certifications": 5,
    "events_managed": 4,
    "event_attendees": 20000,
    "linkedin_reactions_total": 639
  }
}
```

---

## ◈ HERO SECTION — EXACT CONTENT

**Typed text strings** (cycles in typewriter effect):
```
"Full Stack Developer"
"BCA Student @ LPU"
"Building the Web"
```

**Sub-line:**
```
BCA Student @ LPU · Jalandhar, India
```

**Status badge:**
```
Available for Internships & Junior Roles
```

**CTA Buttons:**
- Primary: `View My Work ↓` → links to `#projects`
- Ghost: `Connect on LinkedIn ↗` → links to `https://www.linkedin.com/in/sujay-2oo5/`

---

## ◈ ABOUT SECTION — EXACT CONTENT

**Bio paragraph (replace entire existing paragraph):**
```
I am a final year BCA (Bachelor of Computer Applications) student at
Lovely Professional University. My journey in tech started with curiosity
about how websites work, which evolved into a passion for Full Stack
Development — building complete products from the ground up.

Currently, I focus on building responsive, full-stack web applications,
exploring both frontend craftsmanship and backend fundamentals. I enjoy
solving real problems and turning complex requirements into clean,
functional digital experiences.

Beyond code, I have managed live events for 20,000+ attendees at
national-level conclaves — proving I can lead, coordinate, and
deliver under pressure.
```

**Stats grid** (keep same 4-stat layout):
- 500+ Connections
- 2,195 Followers
- 4 Events Led
- 20,000+ Attendees

**Status chip:** `Open to Work — Full Stack / Frontend Roles`

---

## ◈ SKILLS SECTION — EXACT CONTENT

### Core Skills (progress bars with animated fill):
| Skill | Progress % |
|-------|-----------|
| HTML5 | 92% |
| CSS3 | 88% |
| JavaScript | 78% |
| Bootstrap 5 | 82% |
| Tailwind CSS | 70% |
| C Programming | 65% |

### Frameworks & Libraries (badge grid):
```
Bootstrap 5
Tailwind CSS
Ionic (Basic)
```

### Backend & Languages (NEW badge grid — add this category):
```
C Programming
Python (Basic)
Node.js (Basic)
REST APIs (Basic)
```

### Tools & Tech (badge grid):
```
Git & GitHub
VS Code
Chrome DevTools
Google Maps API
```

### Soft Skills (badge grid — 3 sub-groups combined):
```
Volunteer Management
Public Speaking
Collaboration
Stage Management
Customer Support
Documentation
Active Listening
Event Management
Adaptability
Critical Thinking
Time Management
Analytical Thinking
```

---

## ◈ PROJECTS SECTION — EXACT CONTENT (2 cards)

### Card 1: Explore Varanasi — The Spiritual Capital
```
Meta:        BCA Semester Project
Title:       Explore Varanasi — The Spiritual Capital
Tagline:     A cultural tourism website highlighting the spiritual significance and beautiful ghats of Varanasi.
Description: Semester-long web project built with Bootstrap 5. Features photo gallery with lightbox, tourist attractions (Kashi Vishwanath Temple, Sarnath), Google Maps API integration, and contact form.
Features:
  • Home Page with visual design
  • Photo Gallery with Lightbox
  • Tourist Attractions — Kashi Vishwanath, Sarnath
  • Google Maps API Integration
  • Contact form with social links
Tech:        Bootstrap 5 · HTML5 · CSS3 · JavaScript · Google Maps API
Live Demo:   # (update when hosted)
GitHub:      https://github.com/sujayraj42
Gradient:    linear-gradient(135deg, #8B1A00 0%, #CC4400 25%, #FF6B00 50%, #FFB830 75%, #FFD700 100%)
```

### Card 2: OAKWood's Furniture Website
```
Meta:        Jan 2024 – Feb 2024 · LPU Assignment
Title:       OAKWood's Furniture Website
Tagline:     A sleek, modern furniture catalog and e-commerce UI concept with a focus on high-quality visuals.
Description: BCA Bachelor's assignment demonstrating front-end skills. Interactive online furniture store with product showcases, responsive layout, and CSS animations. OAK Wood's makes your Comfort and Happiness!
Features:
  • Interactive product showcase
  • Responsive grid layout
  • CSS animations on hover
  • Mobile-first design
Tech:        HTML5 · CSS3 · JavaScript · Responsive Design
Live Demo:   # (update when hosted)
GitHub:      https://github.com/sujayraj42
Gradient:    linear-gradient(135deg, #3D1F0A 0%, #8B4513 30%, #D2691E 60%, #DEB887 100%)
```

---

## ◈ CERTIFICATIONS SECTION — EXACT CONTENT (5 cards)

### Card 1: Introduction to Web Development
```
Issuer Badge:   UC Davis (color: #003B73)
Title:          Introduction to Web Development
Platform:       via Coursera · University of California, Davis
Date:           Issued June 2025
Credential ID:  MNQQHK6QJ1SO
Skills:         HTML5, CSS3, JavaScript, Web Standards
Verify URL:     https://www.coursera.org/account/accomplishments/verify/MNQQHK6QJ1SO
```

### Card 2: Interactivity with JavaScript
```
Issuer Badge:   U-M (color: #00274C)
Title:          Interactivity with JavaScript
Platform:       via Coursera · University of Michigan
Date:           Issued 2025
Credential ID:  (pending)
Skills:         JavaScript, DOM Manipulation, Events
Verify URL:     https://www.coursera.org/learn/javascript
```

### Card 3: C for Everyone: Programming Fundamentals
```
Issuer Badge:   UC Santa Cruz (color: #003C6C)
Title:          C for Everyone: Programming Fundamentals
Platform:       via Coursera · University of California, Santa Cruz
Date:           Issued 2025
Credential ID:  (pending)
Skills:         C Programming, Algorithms, Logic Building
Verify URL:     https://www.coursera.org/learn/c-for-everyone
```

### Card 4: Technical Support Fundamentals
```
Issuer Badge:   Google (color: #4285F4)
Title:          Technical Support Fundamentals
Platform:       via Coursera · Google Career Certificates
Date:           Issued June 2025
Credential ID:  5EFFZDVAOXU6
Skills:         IT Support, Networking, OS Fundamentals, Troubleshooting
Verify URL:     https://www.coursera.org/account/accomplishments/verify/5EFFZDVAOXU6
```

### Card 5: Student Volunteer Recognition
```
Issuer Badge:   LPU (color: #FF6B35)
Title:          Student Volunteer Recognition
Platform:       Freshmen Induction 2025 · Lovely Professional University
Date:           Issued 2025
Credential ID:  (pending)
Skills:         Event Coordination, Volunteer Management, Leadership
Verify URL:     # (no external link)
```

---

## ◈ EDUCATION SECTION — EXACT CONTENT (4 cards in timeline)

### Card 1: BCA — In Progress
```
Badge:       In Progress (animated)
Title:       Bachelor of Computer Applications (BCA)
Institution: Lovely Professional University ↗ (link: https://www.lpu.in/)
Field:       Specializing in Full Stack Web Development and Software Systems
Period:      2023 – Present
Location:    Phagwara, Punjab, India
```

### Card 2: Diploma
```
Badge:       Distinction — 83.75%
Title:       Advance Diploma in Computer Application
Institution: Parmar Commercial Institute
Field:       Computer Science
Period:      Mar 2022 – Apr 2023
```

### Card 3: 12th Standard
```
Badge:       Class XII
Title:       Higher Secondary (12th)
Institution: D.Y. Patil Pushpalata Patil International School
Field:       CBSE Board — Science Stream
Period:      2022
```

### Card 4: 10th Standard
```
Badge:       Class X
Title:       Secondary School (10th)
Institution: New Era High School
Field:       CBSE Board
Period:      2020
```

---

## ◈ EXPERIENCE / EVENTS SECTION — EXACT CONTENT (4 cards, no changes)

*Events data remains identical to current implementation — all 4 events are already correct.*

---

## ◈ CONTACT SECTION — EXACT CONTENT

**Opening text:**
```
I'm currently available for internships and junior Full Stack Developer roles.
If you have a project in mind or just want to connect, send a direct message below!
```

**Links:**
- LinkedIn: `https://www.linkedin.com/in/sujay-2oo5/` → display: `linkedin.com/in/sujay-2oo5`
- Email: `sujay@example.com` → copy to clipboard
- Location: `Jalandhar, Punjab, India`

**Status chip:** `Open to Work — Full Stack / Frontend Roles`

---

## ◈ SEO / META TAGS — EXACT CONTENT

```html
<title>Sujay Chakravarti — Full Stack Developer | Portfolio</title>

<meta name="description" content="Sujay Chakravarti — Full Stack Developer and BCA student at Lovely Professional University. Building responsive web apps with HTML, CSS, JavaScript, Bootstrap 5 and Tailwind CSS.">

<meta property="og:title"       content="Sujay Chakravarti — Full Stack Developer">
<meta property="og:description" content="BCA student at LPU. Full Stack Developer open to internships.">
<meta property="og:url"         content="https://sujayraj42.github.io/personal-PORTFOLIO/">

<meta name="twitter:title"       content="Sujay Chakravarti — Full Stack Developer">
<meta name="twitter:description" content="Building end-to-end web applications | JavaScript • Bootstrap • Tailwind">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sujay Chakravarti",
  "jobTitle": "Full Stack Developer",
  "description": "BCA student building full-stack web applications with JavaScript, Bootstrap, and Tailwind CSS",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Lovely Professional University"
  },
  "sameAs": [
    "https://www.linkedin.com/in/sujay-2oo5/",
    "https://github.com/sujayraj42"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jalandhar",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  }
}
</script>
```

---

## ◈ NAVIGATION — EXACT CONTENT

- Logo: `SC` (keep monogram, no change)
- Status badge: `Open to Work` (keep as-is)
- Links: About · Skills · Projects · Certifications · Education · Contact (no change)

---

## ◈ FOOTER — EXACT CONTENT

```
© 2026 Sujay Chakravarti · Full Stack Developer · Built with HTML, CSS & JavaScript.
```

**Social links:**
- LinkedIn: `https://www.linkedin.com/in/sujay-2oo5/`
- GitHub: `https://github.com/sujayraj42`

---

## ◈ ALL LINKS — MASTER REGISTRY

| Location | Link Text | URL | Target |
|----------|-----------|-----|--------|
| Hero CTA | Connect on LinkedIn ↗ | `https://www.linkedin.com/in/sujay-2oo5/` | `_blank` |
| Hero CTA | View My Work ↓ | `#projects` | same page |
| Nav Logo | SC | `#hero` | same page |
| Education | Lovely Professional University ↗ | `https://www.lpu.in/` | `_blank` |
| Cert 1 Verify | Verify on Coursera ↗ | `https://www.coursera.org/account/accomplishments/verify/MNQQHK6QJ1SO` | `_blank` |
| Cert 2 Verify | View on Coursera ↗ | `https://www.coursera.org/learn/javascript` | `_blank` |
| Cert 3 Verify | View on Coursera ↗ | `https://www.coursera.org/learn/c-for-everyone` | `_blank` |
| Cert 4 Verify | Verify on Coursera ↗ | `https://www.coursera.org/account/accomplishments/verify/5EFFZDVAOXU6` | `_blank` |
| Cert 5 Verify | (no external link) | `#` | — |
| Project 1 Live | Live Demo ↗ | `#` | `_blank` |
| Project 1 GitHub | GitHub ↗ | `https://github.com/sujayraj42` | `_blank` |
| Project 2 Live | Live Demo ↗ | `#` | `_blank` |
| Project 2 GitHub | GitHub ↗ | `https://github.com/sujayraj42` | `_blank` |
| Contact LinkedIn | LinkedIn | `https://www.linkedin.com/in/sujay-2oo5/` | `_blank` |
| Footer LinkedIn | LinkedIn | `https://www.linkedin.com/in/sujay-2oo5/` | `_blank` |
| Footer GitHub | GitHub | `https://github.com/sujayraj42` | `_blank` |

**All external links MUST have `rel="noopener noreferrer"`**

---

## ◈ TYPED TEXT STRINGS — FOR `main.js`

```javascript
initTyped('#hero-typed', ['Full Stack Developer', 'BCA Student @ LPU', 'Building the Web']);
```

---

## ◈ MAILTO FALLBACK — FOR `main.js`

```javascript
// In initContactForm() and initCopyEmail():
// Email address: sujay@example.com  (replace with actual email when available)
```

---

## ◈ EXECUTION CHECKLIST

```
✅ STEP  1: Update <title> tag
✅ STEP  2: Update <meta name="description">
✅ STEP  3: Update all Open Graph meta tags (og:title, og:description, og:url)
✅ STEP  4: Update all Twitter Card meta tags
✅ STEP  5: Update JSON-LD structured data (jobTitle, description, sameAs, GitHub URL)
✅ STEP  6: Update hero typed text strings in main.js
✅ STEP  7: Update hero sub-line text
✅ STEP  8: Update hero status badge text
✅ STEP  9: Update about section bio paragraph
✅ STEP 10: Update about section status badge
✅ STEP 11: Update skills section — add progress bars for Tailwind CSS (70%) and C Programming (65%)
✅ STEP 12: Update skills section — rename "Tech Stack & Tools" category, update badges
✅ STEP 13: Add "Backend & Languages" skill category
✅ STEP 14: Update "Frameworks & Libraries" badges
✅ STEP 15: Update soft skills badges (12 total across 3 sub-groups)
✅ STEP 16: Swap project card order (Varanasi first, OAKWood second)
✅ STEP 17: Update project taglines and descriptions
✅ STEP 18: Update project meta lines (period/association)
✅ STEP 19: Update project GitHub URLs → https://github.com/sujayraj42
✅ STEP 20: Update project tech badges (add "Responsive Design" to OAKWood)
✅ STEP 21: Add 3 new certification cards (Certs 2, 3, 5)
✅ STEP 22: Update education 12th card → D.Y. Patil Pushpalata Patil International School
✅ STEP 23: Update education 10th card → New Era High School
✅ STEP 24: Update education BCA field → Full Stack specialization
✅ STEP 25: Update education BCA period → "2023 – Present"
✅ STEP 26: Update contact section opening text
✅ STEP 27: Update contact section status chip
✅ STEP 28: Update footer text → include "Full Stack Developer"
✅ STEP 29: Update footer GitHub link → https://github.com/sujayraj42
✅ STEP 30: Verify all links match the Master Registry above

⚠️ DO NOT TOUCH: Any CSS, animations, canvas, layout, colors, fonts, or JS module logic.
```
