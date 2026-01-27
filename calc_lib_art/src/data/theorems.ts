export interface TheoremEntry {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Whether a proof is provided */
  hasProof?: boolean;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
  /** Optional: LaTeX-formatted proof content */
  proof?: string;
}

export const theorems: TheoremEntry[] = [
  // Section 1: Zeno's Paradoxes
  {
    id: 'cla-001',
    title: 'Convergent Series',
    statement: 'An infinite series $a_1 + a_2 + a_3 + \\cdots$ is said to converge if the partial sums $S_n = a_1 + a_2 + \\cdots + a_n$ approach a finite limit $S$ as $n \\to \\infty$.',
    sectionId: 1,
    sectionTitle: "Zeno's Paradoxes",
    category: 'Foundations',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-002',
    title: 'Geometric Series',
    statement: 'For $|r| < 1$, the infinite geometric series converges: $1 + r + r^2 + r^3 + \\cdots = \\frac{1}{1-r}$',
    sectionId: 1,
    sectionTitle: "Zeno's Paradoxes",
    category: 'Series',
    type: 'theorem',
    hasProof: true,
    proof: `
      Let $S = 1 + r + r^2 + r^3 + \\cdots$

      Then $rS = r + r^2 + r^3 + \\cdots$

      Subtracting: $S - rS = 1$

      Therefore: $S = \\frac{1}{1-r}$
    `,
  },

  // Section 2: Infinity and the Infinitesimal
  {
    id: 'cla-003',
    title: 'Limit (Informal Definition)',
    statement: 'We say that $f(x)$ approaches the limit $L$ as $x$ approaches $a$ if we can make $f(x)$ as close to $L$ as we like by taking $x$ sufficiently close to $a$.',
    sectionId: 2,
    sectionTitle: 'Infinity and the Infinitesimal',
    category: 'Limits',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-004',
    title: "Cantor's Diagonal Argument",
    statement: 'The set of real numbers is uncountable—there are more real numbers than natural numbers, even though both sets are infinite.',
    sectionId: 2,
    sectionTitle: 'Infinity and the Infinitesimal',
    category: 'Set Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
      Suppose we could list all real numbers between 0 and 1:
      $r_1 = 0.d_{11}d_{12}d_{13}\\ldots$
      $r_2 = 0.d_{21}d_{22}d_{23}\\ldots$
      $r_3 = 0.d_{31}d_{32}d_{33}\\ldots$

      Construct a new number by changing each diagonal digit:
      $d = 0.d'_1d'_2d'_3\\ldots$ where $d'_i \\neq d_{ii}$

      This number differs from every $r_n$ in at least one digit, so it cannot be on our list.

      Contradiction! The reals cannot be listed, so they are uncountable.
    `,
  },

  // Section 3: Newton and the Falling Apple
  {
    id: 'cla-005',
    title: 'Universal Gravitation',
    statement: 'Every mass attracts every other mass with a force proportional to their masses and inversely proportional to the square of the distance between them: $F = G\\frac{m_1 m_2}{r^2}$',
    sectionId: 3,
    sectionTitle: 'Newton and the Falling Apple',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-006',
    title: 'Planetary Motion Equation',
    statement: 'The motion of a planet under gravitational attraction is governed by the differential equation: $\\frac{d^2\\vec{r}}{dt^2} = -\\frac{GM}{r^2}\\hat{r}$',
    sectionId: 3,
    sectionTitle: 'Newton and the Falling Apple',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-007',
    title: 'Fluent and Fluxion',
    statement: "Newton's terminology: A fluent ($x$) is a quantity that flows or changes over time. A fluxion ($\\dot{x}$) is the rate at which a fluent changes—its velocity or derivative.",
    sectionId: 3,
    sectionTitle: 'Newton and the Falling Apple',
    category: 'Historical',
    type: 'definition',
    hasProof: false,
  },

  // Section 4: Leibniz and the Art of Notation
  {
    id: 'cla-008',
    title: 'Leibniz Notation for Derivatives',
    statement: 'The derivative is written as $\\frac{dy}{dx}$, representing the ratio of infinitesimal changes. This notation suggests correctly that derivatives behave like fractions.',
    sectionId: 4,
    sectionTitle: 'Leibniz and the Art of Notation',
    category: 'Notation',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-009',
    title: 'Leibniz Notation for Integrals',
    statement: 'The integral is written as $\\int y\\,dx$, where the elongated S stands for "summa" (sum) and $dx$ represents an infinitesimally thin width.',
    sectionId: 4,
    sectionTitle: 'Leibniz and the Art of Notation',
    category: 'Notation',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-010',
    title: 'Chain Rule',
    statement: 'With Leibniz notation, the chain rule appears as: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$',
    sectionId: 4,
    sectionTitle: 'Leibniz and the Art of Notation',
    category: 'Derivatives',
    type: 'theorem',
    hasProof: false,
  },

  // Section 6: The Tangent Problem
  {
    id: 'cla-011',
    title: 'Secant Line',
    statement: 'A secant line passes through two points on a curve. For $y = f(x)$, the slope of the secant through $(a, f(a))$ and $(a+h, f(a+h))$ is: $m_{\\text{secant}} = \\frac{f(a+h) - f(a)}{h}$',
    sectionId: 6,
    sectionTitle: 'The Tangent Problem',
    category: 'Derivatives',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-012',
    title: 'Tangent Line as Limit of Secants',
    statement: 'The slope of the tangent line to $y = f(x)$ at $x = a$ is: $m_{\\text{tangent}} = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$',
    sectionId: 6,
    sectionTitle: 'The Tangent Problem',
    category: 'Derivatives',
    type: 'theorem',
    hasProof: false,
  },

  // Section 8: The Meaning of the Derivative
  {
    id: 'cla-013',
    title: 'The Derivative',
    statement: 'The derivative of a function $f$ at $x = a$ is: $f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$, provided this limit exists. The expression $\\frac{f(a+h) - f(a)}{h}$ is called the difference quotient.',
    sectionId: 8,
    sectionTitle: 'The Meaning of the Derivative',
    category: 'Derivatives',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-014',
    title: 'Differentiability Implies Continuity',
    statement: 'If a function has a derivative at a point, it must be continuous there. However, the converse is false—continuous functions can fail to be differentiable (like $|x|$ at 0).',
    sectionId: 8,
    sectionTitle: 'The Meaning of the Derivative',
    category: 'Derivatives',
    type: 'theorem',
    hasProof: false,
  },

  // Section 9: The Area Problem
  {
    id: 'cla-015',
    title: 'Riemann Sum',
    statement: 'To approximate the area under $y = f(x)$ from $a$ to $b$: divide into $n$ strips of width $\\Delta x = \\frac{b-a}{n}$, form rectangles with heights $f(x_i)$, and sum: $\\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x$',
    sectionId: 9,
    sectionTitle: 'The Area Problem',
    category: 'Integration',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-016',
    title: 'The Definite Integral',
    statement: 'The area under $y = f(x)$ from $a$ to $b$ is: $\\text{Area} = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x = \\int_a^b f(x)\\,dx$',
    sectionId: 9,
    sectionTitle: 'The Area Problem',
    category: 'Integration',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-017',
    title: 'Area Under a Parabola',
    statement: 'The area under $y = x^2$ from 0 to 1 is exactly $\\frac{1}{3}$: $\\int_0^1 x^2\\,dx = \\frac{1}{3}$',
    sectionId: 9,
    sectionTitle: 'The Area Problem',
    category: 'Integration',
    type: 'theorem',
    hasProof: true,
    proof: `
      Using Riemann sums with right endpoints:
      $\\sum_{i=1}^{n} \\left(\\frac{i}{n}\\right)^2 \\cdot \\frac{1}{n} = \\frac{1}{n^3} \\sum_{i=1}^{n} i^2 = \\frac{1}{n^3} \\cdot \\frac{n(n+1)(2n+1)}{6}$

      $= \\frac{(n+1)(2n+1)}{6n^2} = \\frac{2n^2 + 3n + 1}{6n^2}$

      As $n \\to \\infty$: $\\lim_{n \\to \\infty} \\frac{2n^2 + 3n + 1}{6n^2} = \\frac{2}{6} = \\frac{1}{3}$
    `,
  },

  // Section 10: Accumulation and Totals
  {
    id: 'cla-018',
    title: 'Accumulation Function',
    statement: 'The accumulation function is $F(x) = \\int_a^x f(t)\\,dt$. It gives the total accumulated from starting point $a$ up to any point $x$.',
    sectionId: 10,
    sectionTitle: 'Accumulation and Totals',
    category: 'Integration',
    type: 'definition',
    hasProof: false,
  },

  // Section 11: Fundamental Theorem of Calculus
  {
    id: 'cla-019',
    title: 'Fundamental Theorem of Calculus (Part 1)',
    statement: 'If $f$ is continuous on $[a, b]$ and $F(x) = \\int_a^x f(t)\\,dt$, then $F$ is differentiable and $F\'(x) = f(x)$',
    sectionId: 11,
    sectionTitle: 'The Fundamental Theorem of Calculus',
    category: 'Integration',
    type: 'theorem',
    hasProof: true,
    proof: `
      The derivative of an accumulation function is the original function.

      If you're accumulating something at rate $f(x)$, then the rate of change of your total is exactly $f(x)$.

      Formally: $F'(x) = \\lim_{h \\to 0} \\frac{F(x+h) - F(x)}{h} = \\lim_{h \\to 0} \\frac{1}{h}\\int_x^{x+h} f(t)\\,dt = f(x)$
    `,
  },
  {
    id: 'cla-020',
    title: 'Fundamental Theorem of Calculus (Part 2)',
    statement: 'If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ (meaning $F\' = f$), then: $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
    sectionId: 11,
    sectionTitle: 'The Fundamental Theorem of Calculus',
    category: 'Integration',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-021',
    title: 'Net Change Theorem',
    statement: '$\\int_a^b F\'(x)\\,dx = F(b) - F(a)$. The integral of a rate of change equals the net change.',
    sectionId: 11,
    sectionTitle: 'The Fundamental Theorem of Calculus',
    category: 'Integration',
    type: 'corollary',
    hasProof: false,
  },
  {
    id: 'cla-022',
    title: 'Derivatives and Integrals are Inverses',
    statement: 'Integration and differentiation are inverse operations: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$ and $\\int_a^x f\'(t)\\,dt = f(x) - f(a)$',
    sectionId: 11,
    sectionTitle: 'The Fundamental Theorem of Calculus',
    category: 'Integration',
    type: 'theorem',
    hasProof: false,
  },

  // Section 12: Calculus and Physics
  {
    id: 'cla-023',
    title: "Newton's Second Law",
    statement: 'Force equals mass times acceleration: $F = ma = m\\frac{d^2x}{dt^2}$. This is fundamentally a differential equation.',
    sectionId: 12,
    sectionTitle: 'Calculus and Physics',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-024',
    title: "Maxwell's Equations",
    statement: "Four fundamental equations of electromagnetism that predicted electromagnetic waves traveling at the speed of light: Gauss's laws ($\\nabla \\cdot \\mathbf{E} = \\rho/\\epsilon_0$, $\\nabla \\cdot \\mathbf{B} = 0$), Faraday's law, and Ampère-Maxwell law.",
    sectionId: 12,
    sectionTitle: 'Calculus and Physics',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-025',
    title: 'Schrödinger Equation',
    statement: '$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\nabla^2\\Psi + V\\Psi$. Determines how the quantum wave function $\\Psi$ evolves in time.',
    sectionId: 12,
    sectionTitle: 'Calculus and Physics',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-026',
    title: 'Einstein Field Equations',
    statement: '$G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}$. Matter tells spacetime how to curve; curved spacetime tells matter how to move.',
    sectionId: 12,
    sectionTitle: 'Calculus and Physics',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-027',
    title: 'Heat Equation',
    statement: '$\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u$. Describes how heat diffuses through a material over time.',
    sectionId: 12,
    sectionTitle: 'Calculus and Physics',
    category: 'PDEs',
    type: 'theorem',
    hasProof: false,
  },

  // Section 13: Calculus in Art and Music
  {
    id: 'cla-028',
    title: 'Wave Equation',
    statement: '$\\frac{\\partial^2 y}{\\partial t^2} = c^2 \\frac{\\partial^2 y}{\\partial x^2}$. Describes how vibrations propagate; solutions are sine and cosine functions.',
    sectionId: 13,
    sectionTitle: 'Calculus in Art and Music',
    category: 'PDEs',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-029',
    title: 'Catenary Curve',
    statement: 'A hanging chain assumes the shape $y = a\\cosh\\left(\\frac{x}{a}\\right)$, not a parabola. Used in architecture from ancient arches to the Gateway Arch.',
    sectionId: 13,
    sectionTitle: 'Calculus in Art and Music',
    category: 'Curves',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'cla-030',
    title: 'Logarithmic Spiral',
    statement: 'The curve $r = ae^{b\\theta}$ in polar coordinates. Appears in nautilus shells and galaxies. Its derivative maintains the same angle—a property called self-similarity.',
    sectionId: 13,
    sectionTitle: 'Calculus in Art and Music',
    category: 'Curves',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'cla-031',
    title: 'Harmonic Decomposition',
    statement: 'A vibrating string produces sound at its fundamental frequency $f$ and harmonics $2f, 3f, 4f, \\ldots$: $y(x,t) = \\sum_{n=1}^{\\infty} A_n \\sin\\left(\\frac{n\\pi x}{L}\\right)\\cos(n\\omega t)$',
    sectionId: 13,
    sectionTitle: 'Calculus in Art and Music',
    category: 'Fourier Analysis',
    type: 'theorem',
    hasProof: false,
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter((c): c is string => Boolean(c)))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
