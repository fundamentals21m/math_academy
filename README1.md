# Magic Internet Math

**Bitcoin Mathematics Education Platform**

*From Borrowed Belief to Earned Conviction*

---

## Executive Summary

Magic Internet Math is a comprehensive educational platform dedicated to Bitcoin mathematics education. The platform operates on the core belief that mathematics is the primary pathway to having conviction in one's own reasoning, and that general mathematical illiteracy has resulted from deliberate demoralization campaigns that have left populations weak and without agency.

### Mission Statement

Mathematics is humanity's tool for genuine understanding—but we've been taught to fear it. Math Academy reclaims math as a liberal art through interactive courses and games that move students from borrowed beliefs to earned convictions. The platform enables learners to master Bitcoin's cryptography and fundamental mathematical concepts while building real mathematical literacy that compounds into agency, sovereignty, and unshakeable understanding of the systems shaping our world.

### Core Philosophy

- Mathematics as a liberal art essential for human sovereignty, not institutional gatekeeping
- Moving students from dependency on borrowed beliefs to developing earned convictions
- Interactive, explorable learning experiences over passive consumption
- Concrete-to-abstract pedagogical progression
- Bitcoin as the practical application that makes mathematics relevant and urgent

---

## Product Architecture

The Magic Internet Math ecosystem consists of six integrated product pillars, each serving a distinct function in the educational journey while sharing common infrastructure and design patterns.

### The Six Pillars

#### 📚 Courses

Interactive course websites covering fundamental mathematical disciplines, each built using the automated content pipeline.

**Subject Areas:**
- Mathematics (foundational concepts through advanced topics)
- Economics (Austrian economics, monetary theory)
- Fiction (educational narratives that embed mathematical concepts)
- Cryptography (Bitcoin's mathematical foundations)

**Features:**
- Interactive quizzes with XP rewards
- Embedded YouTube video content
- Progressive lesson structure with navigation

#### 🎮 Games

Skill-building games that reinforce mathematical concepts through competition and repetition.

**Game Types:**
- **Mod Race** – Competitive modular arithmetic speed challenges
- **Base-N Race** – Number base conversion racing games

**Gamification:**
- XP rewards for winning, contributing to overall platform progress

#### 🤖 AI Tutor

Intelligent tutoring system providing personalized assistance across the platform.

**Capabilities:**
- **Converse on Nostr** – Decentralized, censorship-resistant tutoring conversations
- **Tutor in Classes** – Embedded assistance within course content

#### 🎯 Live

Synchronous learning experiences for deeper engagement and community building.

**Formats:**
- **Cohort Classes** – Structured group learning with defined curriculum
- **Conference Seminars** – In-person and virtual conference presentations
- **Zoom Sessions** – One-on-one and small group tutoring

#### 📺 YouTube

Video content for broader reach and asynchronous learning support.

**Content Types:**
- **Custom Classes** – Full course content in video format
- **Series** – Thematic video series exploring specific topics

#### 🎙️ Podcast

Audio content for on-the-go learning and community conversation, including the "Back on the Chain" podcast.

**Episode Types:**
- **Station Episodes** – Regular programming on established platforms
- **Custom Episodes** – Sponsored or commissioned content
- **Sponsorship** – Opportunities for aligned organizations

### Access Tiers

| Tier | Price | Access |
|------|-------|--------|
| Basic Access | **FREE** | Core content for everyone |
| Student Access | **$2/month** | Full platform benefits + extras |

---

## Technical Infrastructure

### Content Pipeline Overview

The platform employs an automated content pipeline that transforms raw educational materials (primarily PDF textbooks) into fully interactive web-based courses. This pipeline consists of three integrated skills that work in sequence.

```
PDF → Textbook Importer → JSON → Lesson Builder → HTML
```

### Skill 1: Textbook Importer

Extracts and structures content from math textbook PDFs for educational website development.

#### Workflow

1. **Chunk the PDF** – Split into processable sections by chapter/section
2. **Extract content by type** – Prose, equations, diagrams, problems
3. **Structure output** – JSON or markdown with clear hierarchy
4. **Preserve relationships** – Between concepts, examples, and exercises

#### Extraction Capabilities

**Equations:**
- Unicode text extraction with LaTeX conversion
- Image-based equations via OCR
- Greek letter and mathematical symbol recognition

**Diagrams:**
- Image extraction with page number and position
- Caption detection and text reference linking
- Concept classification for illustration recreation

**Problem Sets:**
- Pattern matching for numbered exercises
- Multi-part problem detection
- Difficulty classification

#### Subject-Specific Patterns

| Subject | Recognition Patterns |
|---------|---------------------|
| Algebra | Variable definitions, equation solving chains, f(x) notation |
| Geometry | Theorem/proof structure, construction steps, angle notation |
| Calculus | Limit notation, derivatives (f'(x), dy/dx), integral bounds |
| Linear Algebra | Matrix notation, determinants, eigenvalue equations |
| Probability | P(A\|B) notation, expected value E[X], combinatorics |

### Skill 2: Lesson Builder

Builds structured math lessons for educational websites following proven pedagogical patterns.

#### Lesson Structure

Every lesson follows this eight-step progression:

1. **Hook** – Concrete analogy or real-world connection
2. **Key Notation** – Formal definition/notation box
3. **Interactive** – Explorable visualization
4. **Explanation** – Conceptual understanding
5. **Examples** – Worked problems with steps
6. **Practice** – Interactive exercises
7. **Why It Matters** – Connection to bigger picture
8. **Navigation** – Previous/Next lesson links

#### Pedagogical Patterns

**Concrete-to-Abstract Progression:**

Always start with something familiar before introducing formal notation:

| Abstract Concept | Concrete Analogy |
|-----------------|------------------|
| Modular arithmetic | Clock wrapping around |
| Functions | Machine with input/output |
| Vectors | Arrows with direction and length |
| Derivatives | Speedometer reading |
| Probability | Dice rolls, coin flips |
| Matrices | Spreadsheet transformations |

**Scaffolded Complexity:**

Build complexity gradually within each lesson:

1. **Simplest case** – e.g., f(x) = x²
2. **Add one parameter** – e.g., f(x) = ax²
3. **Add another** – e.g., f(x) = ax² + c
4. **Full form** – e.g., f(x) = ax² + bx + c

### Skill 3: Math Illustration Builder

Creates interactive math visualizations for educational websites using specialized libraries for each type of visualization.

#### Library Stack

| Library | Use Case | Best For |
|---------|----------|----------|
| **D3.js** | Custom visualizations, data-driven graphics | Non-standard animations |
| **Desmos API** | Function graphing, sliders | Function plotting |
| **JSXGraph** | Geometry constructions | Euclidean geometry |
| **Chart.js** | Statistical charts | Histograms, distributions |
| **KaTeX** | Equation rendering | Math notation display |

#### Subject-Specific Components

- **Algebra:** Equation balancers, function graphers, factoring visualizers, number lines
- **Geometry:** Construction tools, angle explorers, transformation demos, area calculators
- **Calculus:** Limit explorers, derivative visualizers, integral area shaders, Riemann sums
- **Linear Algebra:** Vector visualizers, matrix transformers, eigenvalue explorers
- **Probability:** Dice/coin simulators, distribution graphers, tree diagrams

#### Component Structure

Every interactive component follows a standard three-part structure:

1. **Controls** – Input controls (sliders, buttons, dropdowns)
2. **Visualization** – SVG or Canvas rendering area
3. **Output** – Calculated results, equations

---

## Course Sites

### Deployed Teaching Sites

The platform currently includes teaching sites for the following mathematical disciplines:

- **Basic Algebra** – Foundations of algebraic thinking and manipulation
- **Geometry** – Euclidean geometry with interactive constructions
- **Calculus** – Differential and integral calculus fundamentals
- **Linear Algebra** – Vectors, matrices, and transformations
- **Probability** – Probability theory and statistical concepts
- **Bitcoin Cryptography** – Mathematical foundations of Bitcoin (modular arithmetic, finite fields, elliptic curves)

### Example: Bitcoin Cryptography Fundamentals

The flagship course demonstrates the full capabilities of the platform:

**Course Structure:**
- **Module 1: Foundations** – Introduction to cryptographic mathematics
- **Module 2: Number Theory** – Modular arithmetic, prime numbers
- **Module 3: Applied** – Finite fields, elliptic curves
- **Module 4: Crypto Protocols** – Digital signatures, ECDSA

**Interactive Elements:**
- Clock visualization for modular arithmetic (12-hour clock mapping to mod 12)
- Modular calculator with operations: addition, subtraction, multiplication, exponentiation
- Power table generator for exploring cyclic patterns
- Elliptic curve point addition visualizer

### Example: Real Analysis

An advanced course demonstrating rigorous mathematical treatment:

**Interactive: Sequence Convergence Visualizer**
- Displays the epsilon-N definition of limits visually
- Allows selection of different sequences (1/n, (-1)^n/n, n/(n+1), etc.)
- Epsilon slider shows the epsilon-band around the limit
- Automatically calculates N (smallest index where all subsequent terms stay in band)
- Toggleable formal ε-N definition display

### File Organization

Each course site follows a consistent directory structure:

```
course-name/
├── index.html              # Course home with outline
├── pages/
│   ├── 1-intro.html        # Lesson pages
│   ├── 2-topic.html
│   └── quiz.html           # Assessment
├── scripts/
│   ├── main.js             # Shared utilities
│   └── interactive-1.js    # Lesson-specific
├── styles/
│   └── main.css
└── images/
```

---

## Testing & Quality Assurance

### Lesson Quality Checklist

Before publishing any lesson, verify the following criteria:

**Content Quality:**
- [ ] Hook connects to something familiar and relatable
- [ ] Key notation is clearly highlighted in notation boxes
- [ ] At least one interactive element per lesson
- [ ] Examples progress from simple to complex
- [ ] "Why It Matters" section connects to real applications

**Technical Functionality:**
- [ ] Navigation links work (previous/next)
- [ ] Equations render correctly (KaTeX/MathJax)
- [ ] Interactives work on mobile devices
- [ ] All sliders, buttons, and inputs function correctly
- [ ] No JavaScript console errors

**Accessibility:**
- [ ] Keyboard navigation supported
- [ ] ARIA labels on interactive elements
- [ ] Sufficient color contrast
- [ ] Text descriptions of visual changes

### Interactive Component Testing

**Functional Testing:**
- All control inputs update the visualization correctly
- Edge cases handled (zero, negative values, boundary conditions)
- Reset/clear functionality works
- Mathematical calculations are accurate

**Visual Testing:**
- Visualization renders at various screen sizes
- Labels and axes are readable
- Colors distinguish different elements clearly
- Animations are smooth (60fps target)

**Cross-Browser Testing:**
- Chrome (primary target)
- Firefox
- Safari (desktop and iOS)
- Edge

### Content Pipeline Validation

**Textbook Import Testing:**
- PDF chunking correctly identifies chapter boundaries
- Equation extraction produces valid LaTeX
- Diagram extraction captures all figures
- Problem sets are correctly numbered and structured
- JSON output validates against schema

**Lesson Generation Testing:**
- All eight lesson structure elements present
- HTML validates (no malformed tags)
- CSS applies correctly
- JavaScript initializes without errors

---

## Deployment & Infrastructure

### Hosting

Course sites are deployed as static websites using modern hosting platforms:

- **GitHub Pages** – Primary hosting for public courses
- **Vercel** – Alternative hosting with edge deployment
- **Custom domain** – magicinternetmath.com (planned)

### External Dependencies

All external libraries are loaded via CDN for reliability and caching:

- KaTeX (equation rendering) – cdn.jsdelivr.net
- D3.js (visualizations) – d3js.org
- JSXGraph (geometry) – cdn.jsdelivr.net
- Desmos API (graphing) – desmos.com/api
- Chart.js (statistics) – cdn.jsdelivr.net

### Nostr Integration

The platform integrates with the Nostr protocol for decentralized content distribution:

- **AI Tutor on Nostr** – Censorship-resistant tutoring conversations
- **Podcast posting** – Automated Nostr bot for episode announcements
- **Math Academy account** – Official presence for course updates
- **RSS feed automation** – Transcript processing and distribution

---

## Future Roadmap

### Near-Term Priorities

- Complete all five core mathematics courses
- Launch XP/gamification system across platform
- Deploy AI Tutor beta on Nostr
- Establish podcast guest booking workflow

### Medium-Term Goals

- Launch paid Student tier with premium features
- Begin live cohort classes
- YouTube channel with course video content
- Conference seminar presentations at Bitcoin events

### Long-Term Vision

- Full economics curriculum (Austrian economics, monetary theory)
- Fiction courses (educational narratives embedding mathematical concepts)
- Mobile applications for on-the-go learning
- Integration with Lightning Network for micropayments
- Certification program with verifiable credentials

---

## Technical Dependencies

### Python Libraries (Content Pipeline)

- `pdfplumber` – PDF text extraction
- `pypdf` – PDF manipulation
- `PyMuPDF` (fitz) – Image extraction
- `pdfimages` – Diagram extraction

### JavaScript Libraries (Frontend)

- KaTeX 0.16.9 – Equation rendering
- D3.js v7 – Custom visualizations
- JSXGraph – Geometry constructions
- Desmos API v1.9 – Function graphing
- Chart.js – Statistical charts

---

## Reference URLs

- **Example Course:** [fundamentals21m.github.io/math_academy/](https://fundamentals21m.github.io/math_academy/)
- **Real Analysis:** [real-analysis-eta.vercel.app](https://real-analysis-eta.vercel.app)
- **Podcast:** Back on the Chain (multiple platforms)

---

## Contact & Contribution

For questions, contributions, or partnership inquiries, reach out via Nostr or through the official Magic Internet Math channels.

---

<p align="center">
  <strong>Magic Internet Math</strong><br>
  <em>From Borrowed Belief to Earned Conviction</em>
</p>
