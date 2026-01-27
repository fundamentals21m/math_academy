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
  // Section 1: Zeno of Elea
  {
    id: 'mom-001',
    title: "Zeno's Paradox: Achilles and the Tortoise",
    statement: 'A faster runner can never overtake a slower one, for the pursuer must first reach the point from which the pursued started, by which time the latter has advanced further.',
    sectionId: 1,
    sectionTitle: 'Zeno of Elea',
    category: 'Logic',
    type: 'proposition',
    hasProof: true,
    proof: `
      Zeno argues: Before Achilles can catch the tortoise, he must reach where the tortoise started.
      But by then, the tortoise has moved ahead.

      Achilles must then reach that new position, but again the tortoise has moved.
      This process repeats infinitely, so Achilles never catches up.

      Resolution: The infinite series $\\sum_{n=0}^{\\infty} 100 \\cdot (0.1)^n = 111.\\overline{1}$ meters converges to a finite sum.
      The paradox assumes infinite steps require infinite time, but each step takes less time.
    `,
  },
  {
    id: 'mom-002',
    title: 'Geometric Series Convergence',
    statement: 'For $|r| < 1$, the infinite geometric series converges: $\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}$',
    sectionId: 1,
    sectionTitle: 'Zeno of Elea',
    category: 'Analysis',
    type: 'theorem',
    hasProof: true,
    proof: `
      Let $S = a + ar + ar^2 + ar^3 + \\cdots$

      Then $rS = ar + ar^2 + ar^3 + \\cdots$

      Subtracting: $S - rS = a$

      Therefore: $S(1-r) = a$, so $S = \\frac{a}{1-r}$
    `,
  },

  // Section 2: Eudoxus of Cnidus
  {
    id: 'mom-003',
    title: "Eudoxus's Theory of Proportions",
    statement: 'Two ratios $a:b$ and $c:d$ are equal if and only if for all positive integers $m$ and $n$: if $ma \\lessgtr nb$ then $mc \\lessgtr nd$',
    sectionId: 2,
    sectionTitle: 'Eudoxus of Cnidus',
    category: 'Number Theory',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'mom-004',
    title: 'Archimedean Axiom',
    statement: 'Given any two magnitudes $a$ and $b$ with $a > 0$, there exists a positive integer $n$ such that $na > b$',
    sectionId: 2,
    sectionTitle: 'Eudoxus of Cnidus',
    category: 'Analysis',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-005',
    title: 'Area of Circle',
    statement: 'The area of a circle is proportional to the square of its diameter: $A \\propto d^2$',
    sectionId: 2,
    sectionTitle: 'Eudoxus of Cnidus',
    category: 'Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `
      Proved using the Method of Exhaustion: inscribe and circumscribe polygons with increasing numbers of sides.

      As the number of sides approaches infinity, both polygon areas approach the circle's area.

      Since polygon areas scale with the square of linear dimensions, so does the circle's area.
    `,
  },
  {
    id: 'mom-006',
    title: 'Volume of a Cone',
    statement: 'The volume of a cone is $\\frac{1}{3}$ the volume of a cylinder with the same base and height',
    sectionId: 2,
    sectionTitle: 'Eudoxus of Cnidus',
    category: 'Geometry',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-007',
    title: 'Volume of a Pyramid',
    statement: 'The volume of a pyramid is $\\frac{1}{3}$ the volume of a prism with the same base and height',
    sectionId: 2,
    sectionTitle: 'Eudoxus of Cnidus',
    category: 'Geometry',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-008',
    title: 'Sphere Volume Relationship',
    statement: 'Spheres are to one another as the cubes of their diameters: $\\frac{V_1}{V_2} = \\left(\\frac{d_1}{d_2}\\right)^3$',
    sectionId: 2,
    sectionTitle: 'Eudoxus of Cnidus',
    category: 'Geometry',
    type: 'theorem',
    hasProof: false,
  },

  // Section 3: Archimedes
  {
    id: 'mom-009',
    title: 'Bounds on Pi',
    statement: 'The value of $\\pi$ satisfies: $3\\frac{10}{71} < \\pi < 3\\frac{1}{7}$, or approximately $3.1408 < \\pi < 3.1429$',
    sectionId: 3,
    sectionTitle: 'Archimedes of Syracuse',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
      Using inscribed and circumscribed 96-sided regular polygons:

      The perimeter of the inscribed polygon gives a lower bound.
      The perimeter of the circumscribed polygon gives an upper bound.

      This yields $\\pi$ accurate to two decimal places.
    `,
  },
  {
    id: 'mom-010',
    title: 'Law of the Lever',
    statement: 'Two weights balance when their distances from the fulcrum are inversely proportional to their weights: $W_1 \\times d_1 = W_2 \\times d_2$',
    sectionId: 3,
    sectionTitle: 'Archimedes of Syracuse',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-011',
    title: "Archimedes' Principle",
    statement: 'A body immersed in a fluid experiences a buoyant force equal to the weight of the fluid it displaces',
    sectionId: 3,
    sectionTitle: 'Archimedes of Syracuse',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-012',
    title: 'Quadrature of the Parabola',
    statement: 'The area of a parabolic segment is $\\frac{4}{3}$ times the area of the inscribed triangle with the same base and vertex',
    sectionId: 3,
    sectionTitle: 'Archimedes of Syracuse',
    category: 'Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `
      Archimedes gave two proofs:

      1. Method of Exhaustion: Filling the parabolic segment with inscribed triangles.

      2. Mechanical Method: Balancing the segment against the triangle using the law of the lever.

      Both yield the $\\frac{4}{3}$ ratio.
    `,
  },
  {
    id: 'mom-013',
    title: 'Sphere and Cylinder',
    statement: 'The volume of a sphere is $\\frac{2}{3}$ the volume of its circumscribed cylinder',
    sectionId: 3,
    sectionTitle: 'Archimedes of Syracuse',
    category: 'Geometry',
    type: 'theorem',
    hasProof: false,
  },

  // Section 4: René Descartes
  {
    id: 'mom-014',
    title: 'Cartesian Coordinate System',
    statement: 'Every point in the plane corresponds to a unique ordered pair of numbers $(x, y)$ representing distances from two perpendicular axes',
    sectionId: 4,
    sectionTitle: 'René Descartes',
    category: 'Geometry',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'mom-015',
    title: 'Distance Formula',
    statement: 'The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$',
    sectionId: 4,
    sectionTitle: 'René Descartes',
    category: 'Geometry',
    type: 'theorem',
    hasProof: true,
    proof: `
      By the Pythagorean theorem applied to the right triangle formed by the horizontal and vertical displacements:

      $d^2 = (x_2-x_1)^2 + (y_2-y_1)^2$

      Therefore $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$
    `,
  },
  {
    id: 'mom-016',
    title: "Descartes' Rule of Signs",
    statement: 'The number of positive real roots of a polynomial equals the number of sign changes in its coefficients, or differs from it by an even number',
    sectionId: 4,
    sectionTitle: 'René Descartes',
    category: 'Algebra',
    type: 'theorem',
    hasProof: false,
  },

  // Section 5: Pierre de Fermat
  {
    id: 'mom-017',
    title: "Fermat's Last Theorem",
    statement: 'The equation $x^n + y^n = z^n$ has no positive integer solutions for $n > 2$',
    sectionId: 5,
    sectionTitle: 'Pierre de Fermat',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
      Fermat claimed: "I have discovered a truly marvelous proof of this, which this margin is too narrow to contain."

      The theorem remained unproven for 358 years.

      Andrew Wiles finally proved it in 1995 using the theory of elliptic curves and modular forms,
      confirming the Taniyama-Shimura conjecture for semistable elliptic curves.
    `,
  },
  {
    id: 'mom-018',
    title: "Fermat's Little Theorem",
    statement: 'If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$',
    sectionId: 5,
    sectionTitle: 'Pierre de Fermat',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
      Consider the set $\\{a, 2a, 3a, \\ldots, (p-1)a\\}$ modulo $p$.

      These are all distinct and nonzero mod $p$ (since $\\gcd(a,p) = 1$).

      Therefore they are a permutation of $\\{1, 2, 3, \\ldots, p-1\\}$.

      Multiplying: $a \\cdot 2a \\cdot 3a \\cdots (p-1)a \\equiv 1 \\cdot 2 \\cdot 3 \\cdots (p-1) \\pmod{p}$

      Thus $a^{p-1}(p-1)! \\equiv (p-1)! \\pmod{p}$

      Since $\\gcd((p-1)!, p) = 1$, we can cancel to get $a^{p-1} \\equiv 1 \\pmod{p}$
    `,
  },
  {
    id: 'mom-019',
    title: 'Method of Infinite Descent',
    statement: 'A proof technique: assume a solution exists, derive a strictly smaller positive solution, reaching a contradiction since there is no infinite descending sequence of positive integers',
    sectionId: 5,
    sectionTitle: 'Pierre de Fermat',
    category: 'Logic',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'mom-020',
    title: "Fermat's Principle of Least Time",
    statement: 'Light travels between two points along the path that takes the least time',
    sectionId: 5,
    sectionTitle: 'Pierre de Fermat',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-021',
    title: 'Sum of Two Squares',
    statement: 'Every prime $p \\equiv 1 \\pmod{4}$ can be written as the sum of two squares: $p = a^2 + b^2$',
    sectionId: 5,
    sectionTitle: 'Pierre de Fermat',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-022',
    title: 'Fermat Numbers',
    statement: 'Fermat numbers are defined as $F_n = 2^{2^n} + 1$. Fermat conjectured all are prime, but $F_5 = 4,294,967,297 = 641 \\times 6,700,417$ is composite',
    sectionId: 5,
    sectionTitle: 'Pierre de Fermat',
    category: 'Number Theory',
    type: 'definition',
    hasProof: false,
  },

  // Section 6: Blaise Pascal
  {
    id: 'mom-023',
    title: "Pascal's Triangle",
    statement: 'A triangular array where each entry is the binomial coefficient $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$, and each entry equals the sum of the two entries above it',
    sectionId: 6,
    sectionTitle: 'Blaise Pascal',
    category: 'Combinatorics',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'mom-024',
    title: 'Binomial Theorem',
    statement: '$(a+b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$',
    sectionId: 6,
    sectionTitle: 'Blaise Pascal',
    category: 'Algebra',
    type: 'theorem',
    hasProof: true,
    proof: `
      Proof by induction on $n$:

      Base case: $(a+b)^1 = a + b$ ✓

      Inductive step: Assume true for $n$. Then:
      $(a+b)^{n+1} = (a+b)(a+b)^n = (a+b)\\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k$

      Using Pascal's identity $\\binom{n}{k-1} + \\binom{n}{k} = \\binom{n+1}{k}$, the result follows.
    `,
  },
  {
    id: 'mom-025',
    title: "Pascal's Hexagon Theorem",
    statement: 'If a hexagon is inscribed in a conic section, the three pairs of opposite sides meet at three collinear points (the Pascal line)',
    sectionId: 6,
    sectionTitle: 'Blaise Pascal',
    category: 'Geometry',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-026',
    title: "Pascal's Law",
    statement: 'Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel',
    sectionId: 6,
    sectionTitle: 'Blaise Pascal',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },

  // Section 7: Isaac Newton
  {
    id: 'mom-027',
    title: "Newton's Method",
    statement: 'To find roots of $f(x) = 0$, iterate: $x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}$',
    sectionId: 7,
    sectionTitle: 'Isaac Newton',
    category: 'Numerical Analysis',
    type: 'theorem',
    hasProof: true,
    proof: `
      The tangent line to $y = f(x)$ at $x_n$ has equation:
      $y - f(x_n) = f'(x_n)(x - x_n)$

      Setting $y = 0$ (finding x-intercept):
      $-f(x_n) = f'(x_n)(x - x_n)$
      $x = x_n - \\frac{f(x_n)}{f'(x_n)}$

      This x-intercept becomes our next approximation $x_{n+1}$.
    `,
  },
  {
    id: 'mom-028',
    title: 'Law of Universal Gravitation',
    statement: 'Every mass attracts every other mass with force $F = G\\frac{m_1 m_2}{r^2}$',
    sectionId: 7,
    sectionTitle: 'Isaac Newton',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-029',
    title: "Newton's First Law of Motion",
    statement: 'An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by an external force',
    sectionId: 7,
    sectionTitle: 'Isaac Newton',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-030',
    title: "Newton's Second Law of Motion",
    statement: 'Force equals mass times acceleration: $F = ma$',
    sectionId: 7,
    sectionTitle: 'Isaac Newton',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-031',
    title: "Newton's Third Law of Motion",
    statement: 'For every action, there is an equal and opposite reaction: $F_{12} = -F_{21}$',
    sectionId: 7,
    sectionTitle: 'Isaac Newton',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-032',
    title: 'Generalized Binomial Theorem',
    statement: 'For any real exponent $n$: $(1+x)^n = \\sum_{k=0}^{\\infty} \\binom{n}{k} x^k$ where $\\binom{n}{k} = \\frac{n(n-1)\\cdots(n-k+1)}{k!}$',
    sectionId: 7,
    sectionTitle: 'Isaac Newton',
    category: 'Analysis',
    type: 'theorem',
    hasProof: false,
  },

  // Section 8: Gottfried Leibniz
  {
    id: 'mom-033',
    title: 'Binary Number System',
    statement: 'Any positive integer can be represented using only the digits 0 and 1, where position $k$ from the right represents $2^k$',
    sectionId: 8,
    sectionTitle: 'Gottfried Leibniz',
    category: 'Number Theory',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'mom-034',
    title: 'Leibniz Formula for Pi',
    statement: '$\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1}$',
    sectionId: 8,
    sectionTitle: 'Gottfried Leibniz',
    category: 'Analysis',
    type: 'theorem',
    hasProof: true,
    proof: `
      Start with $\\arctan(x) = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\frac{x^7}{7} + \\cdots$

      Substitute $x = 1$:
      $\\arctan(1) = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$

      Since $\\arctan(1) = \\frac{\\pi}{4}$, the result follows.
    `,
  },
  {
    id: 'mom-035',
    title: 'Product Rule',
    statement: 'The derivative of a product: $\\frac{d}{dx}[uv] = u\\frac{dv}{dx} + v\\frac{du}{dx}$',
    sectionId: 8,
    sectionTitle: 'Gottfried Leibniz',
    category: 'Calculus',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-036',
    title: 'Quotient Rule',
    statement: 'The derivative of a quotient: $\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$',
    sectionId: 8,
    sectionTitle: 'Gottfried Leibniz',
    category: 'Calculus',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-037',
    title: 'Chain Rule',
    statement: 'For composite functions: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$',
    sectionId: 8,
    sectionTitle: 'Gottfried Leibniz',
    category: 'Calculus',
    type: 'theorem',
    hasProof: false,
  },

  // Section 9: The Bernoulli Family
  {
    id: 'mom-038',
    title: 'Law of Large Numbers',
    statement: 'As the number of independent trials increases, the observed frequency of an event converges to its true probability',
    sectionId: 9,
    sectionTitle: 'The Bernoulli Family',
    category: 'Probability',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-039',
    title: 'Catenary Curve',
    statement: 'A hanging chain assumes the shape $y = a\\cosh\\left(\\frac{x}{a}\\right) = \\frac{a}{2}\\left(e^{x/a} + e^{-x/a}\\right)$, not a parabola',
    sectionId: 9,
    sectionTitle: 'The Bernoulli Family',
    category: 'Geometry',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-040',
    title: 'Brachistochrone Problem',
    statement: 'The curve of fastest descent between two points under gravity is a cycloid, not a straight line',
    sectionId: 9,
    sectionTitle: 'The Bernoulli Family',
    category: 'Calculus of Variations',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-041',
    title: "L'Hôpital's Rule",
    statement: 'If $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$ gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$, then $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f\'(x)}{g\'(x)}$',
    sectionId: 9,
    sectionTitle: 'The Bernoulli Family',
    category: 'Calculus',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-042',
    title: "Bernoulli's Principle",
    statement: 'For fluid flow: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$ along a streamline',
    sectionId: 9,
    sectionTitle: 'The Bernoulli Family',
    category: 'Physics',
    type: 'theorem',
    hasProof: false,
  },

  // Section 10: Leonhard Euler
  {
    id: 'mom-043',
    title: "Euler's Formula",
    statement: '$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Complex Analysis',
    type: 'theorem',
    hasProof: true,
    proof: `
      Using Taylor series:
      $e^{ix} = 1 + ix + \\frac{(ix)^2}{2!} + \\frac{(ix)^3}{3!} + \\cdots$

      $= 1 + ix - \\frac{x^2}{2!} - \\frac{ix^3}{3!} + \\frac{x^4}{4!} + \\cdots$

      $= \\left(1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots\\right) + i\\left(x - \\frac{x^3}{3!} + \\cdots\\right)$

      $= \\cos x + i\\sin x$
    `,
  },
  {
    id: 'mom-044',
    title: "Euler's Identity",
    statement: '$e^{i\\pi} + 1 = 0$',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Complex Analysis',
    type: 'corollary',
    hasProof: true,
    proof: `
      From Euler's formula with $\\theta = \\pi$:
      $e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0i = -1$

      Therefore $e^{i\\pi} + 1 = 0$

      This equation connects five fundamental constants: $e$, $i$, $\\pi$, 1, and 0.
    `,
  },
  {
    id: 'mom-045',
    title: 'Seven Bridges of Königsberg',
    statement: 'It is impossible to walk through Königsberg crossing each of its 7 bridges exactly once. An Eulerian path exists if and only if at most 2 vertices have odd degree.',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Graph Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
      At each intermediate vertex (not start or end), we must enter and leave,
      using an even number of edges.

      Only the starting and ending vertices can have odd degree.

      Königsberg had 4 vertices, all with odd degree, so no such path exists.
    `,
  },
  {
    id: 'mom-046',
    title: 'Euler Characteristic',
    statement: 'For any convex polyhedron: $V - E + F = 2$, where $V$ = vertices, $E$ = edges, $F$ = faces',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Topology',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-047',
    title: 'Basel Problem',
    statement: '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Analysis',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-048',
    title: "Euler's Totient Function",
    statement: '$\\varphi(n)$ counts the positive integers less than $n$ that are coprime to $n$. For prime $p$: $\\varphi(p) = p-1$',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Number Theory',
    type: 'definition',
    hasProof: false,
  },
  {
    id: 'mom-049',
    title: "Euler's Theorem",
    statement: 'If $\\gcd(a, n) = 1$, then $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: false,
  },
  {
    id: 'mom-050',
    title: 'Gamma Function',
    statement: '$\\Gamma(n) = (n-1)!$ for positive integers, extended to all complex numbers except non-positive integers',
    sectionId: 10,
    sectionTitle: 'Leonhard Euler',
    category: 'Analysis',
    type: 'definition',
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
