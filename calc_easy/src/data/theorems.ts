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
  // =============================================================================
  // SECTION 0: FUNCTIONS
  // =============================================================================
  {
    id: 'ce-001',
    title: 'Function Definition',
    statement: 'A function is a rule that assigns to each input exactly one output. If the dependent variable is $y$ and independent variable is $x$, we write $y = f(x)$.',
    sectionId: 0,
    sectionTitle: 'What Is a Function?',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-002',
    title: 'Domain and Range',
    statement: 'The domain of a function is the set of all possible values of the independent variable. The range is the set of all possible values of the dependent variable.',
    sectionId: 0,
    sectionTitle: 'What Is a Function?',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-003',
    title: 'One-to-One Function',
    statement: 'A one-to-one function is a function where each value of the independent variable gives exactly one value of the dependent variable, and vice versa.',
    sectionId: 0,
    sectionTitle: 'What Is a Function?',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-004',
    title: 'Explicit Function',
    statement: 'An explicit function is one where the dependent variable is expressed directly in terms of the independent variable, such as $y = 2x - 7$.',
    sectionId: 0,
    sectionTitle: 'What Is a Function?',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-005',
    title: 'Implicit Function',
    statement: 'An implicit function is one where the relationship between variables is implied by an equation but the dependent variable is not directly isolated, such as $2x - y - 7 = 0$.',
    sectionId: 0,
    sectionTitle: 'What Is a Function?',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-006',
    title: 'Continuous Function',
    statement: 'A function is continuous if its graph can be drawn without lifting the pencil from the paper. The function has no breaks, jumps, or gaps.',
    sectionId: 0,
    sectionTitle: 'What Is a Function?',
    category: 'Functions',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 1: SEQUENCES AND SERIES
  // =============================================================================
  {
    id: 'ce-007',
    title: 'Sequence',
    statement: 'A sequence is a set of numbers in some order. An infinite sequence is one that continues without stopping.',
    sectionId: 1,
    sectionTitle: 'Sequences and Series',
    category: 'Limits',
    type: 'definition',
  },
  {
    id: 'ce-008',
    title: 'Series',
    statement: 'A series is the sum of the terms of a sequence. If the series is infinite, the sum up to any specified term is called a partial sum.',
    sectionId: 1,
    sectionTitle: 'Sequences and Series',
    category: 'Limits',
    type: 'definition',
  },
  {
    id: 'ce-009',
    title: 'Limit of a Series',
    statement: 'If the partial sums of a series get closer and closer to a number $k$, then $k$ is called the limit of the series.',
    sectionId: 1,
    sectionTitle: 'Sequences and Series',
    category: 'Limits',
    type: 'definition',
  },
  {
    id: 'ce-010',
    title: 'Convergent Series',
    statement: 'A series is convergent if its partial sums approach a finite limit as more terms are added.',
    sectionId: 1,
    sectionTitle: 'Sequences and Series',
    category: 'Limits',
    type: 'definition',
  },
  {
    id: 'ce-011',
    title: 'The Halving Series',
    statement: 'The infinite series $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\ldots$ converges to $1$.',
    sectionId: 1,
    sectionTitle: 'Sequences and Series',
    category: 'Limits',
    type: 'theorem',
    hasProof: true,
    proof: `Let $S = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$

Multiply by 2: $2S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots = 1 + S$

Therefore $S = 1$.`,
  },
  {
    id: 'ce-012',
    title: 'Harmonic Series',
    statement: 'The harmonic series is $\\frac{1}{1} + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\ldots$ Although its terms approach zero, the series diverges (its partial sums grow without limit).',
    sectionId: 1,
    sectionTitle: 'Sequences and Series',
    category: 'Limits',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 2: INTRODUCTION TO DERIVATIVES
  // =============================================================================
  {
    id: 'ce-013',
    title: 'Derivative',
    statement: 'A derivative is a function that describes the rate at which a dependent variable changes with respect to the independent variable. It represents the instantaneous rate of change.',
    sectionId: 2,
    sectionTitle: 'The Derivative',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-014',
    title: 'Derivative of a Linear Function',
    statement: 'If $y = mx + b$ where $m$ and $b$ are constants, then $\\frac{dy}{dx} = m$.',
    sectionId: 2,
    sectionTitle: 'The Derivative',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-015',
    title: 'Derivative of a Constant',
    statement: 'If $y = c$ where $c$ is any constant, then $\\frac{dy}{dx} = 0$.',
    sectionId: 2,
    sectionTitle: 'The Derivative',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-016',
    title: 'Derivative of x²',
    statement: '$\\frac{d}{dx}(x^2) = 2x$.',
    sectionId: 2,
    sectionTitle: 'The Derivative',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 3: DIFFERENTIALS AND INTEGRALS
  // =============================================================================
  {
    id: 'ce-017',
    title: 'Differential',
    statement: "The symbol $d$ means 'a little bit of.' Thus $dx$ means a small increment of $x$, and $du$ means a small increment of $u$. These are called differentials.",
    sectionId: 3,
    sectionTitle: 'Differentials',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-018',
    title: 'Integral Symbol',
    statement: "The symbol $\\int$ is a long S and means 'the sum of.' Thus $\\int dx$ means the sum of all the little bits of $x$, and $\\int f(x)\\,dx$ means the sum of all the little bits of $f(x)$.",
    sectionId: 3,
    sectionTitle: 'Differentials',
    category: 'Integrals',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 4: ORDERS OF SMALLNESS
  // =============================================================================
  {
    id: 'ce-019',
    title: 'Orders of Smallness',
    statement: 'Small quantities have different orders of smallness. A small quantity of the second order is a small quantity multiplied by another small quantity. If $dx$ is small, then $(dx)^2$ is second-order small.',
    sectionId: 4,
    sectionTitle: 'Orders of Smallness',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-020',
    title: 'Negligibility of Higher-Order Infinitesimals',
    statement: 'In calculus, we may neglect small quantities of the second order (or higher) if we make the small quantity of the first order small enough itself.',
    sectionId: 4,
    sectionTitle: 'Orders of Smallness',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-021',
    title: 'Binomial Expansion for Small dx',
    statement: '$(x + dx)^2 = x^2 + 2x \\cdot dx + (dx)^2$. Since $(dx)^2$ is negligible, we have $(x + dx)^2 \\approx x^2 + 2x \\cdot dx$.',
    sectionId: 4,
    sectionTitle: 'Orders of Smallness',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 5: CONSTANTS AND VARIABLES
  // =============================================================================
  {
    id: 'ce-022',
    title: 'Constants and Variables',
    statement: 'Constants are quantities that do not change; they are denoted by letters from the beginning of the alphabet ($a, b, c$). Variables are quantities that can change; they are denoted by letters from the end of the alphabet ($x, y, z, u, v, w, t$).',
    sectionId: 5,
    sectionTitle: 'Constants and Variables',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-023',
    title: 'Dependent and Independent Variables',
    statement: 'If two variables depend on each other, one is called the independent variable and the other is called the dependent variable. Changes in the independent variable cause changes in the dependent variable.',
    sectionId: 5,
    sectionTitle: 'Constants and Variables',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-024',
    title: 'The Ratio dy/dx',
    statement: 'The ratio $\\frac{dy}{dx}$ is the proportion which $dy$ bears to $dx$ when both are infinitesimally small. It is the fundamental object of study in differential calculus.',
    sectionId: 5,
    sectionTitle: 'Constants and Variables',
    category: 'Derivatives',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 6: POWER RULE
  // =============================================================================
  {
    id: 'ce-025',
    title: 'Power Rule for Differentiation',
    statement: 'For any power $n$, if $y = x^n$, then $\\frac{dy}{dx} = nx^{n-1}$.',
    sectionId: 6,
    sectionTitle: 'Power Rule',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-026',
    title: 'Derivative of x³',
    statement: '$\\frac{dy}{dx} = 3x^2$ when $y = x^3$.',
    sectionId: 6,
    sectionTitle: 'Power Rule',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-027',
    title: 'Derivative of x⁴',
    statement: '$\\frac{dy}{dx} = 4x^3$ when $y = x^4$.',
    sectionId: 6,
    sectionTitle: 'Power Rule',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 7: CONSTANT MULTIPLIERS
  // =============================================================================
  {
    id: 'ce-028',
    title: 'Constant Multiple Rule for Differentiation',
    statement: 'If $y = ax^n$ where $a$ is a constant, then $\\frac{dy}{dx} = anx^{n-1}$. A constant multiplier remains unchanged when differentiated.',
    sectionId: 7,
    sectionTitle: 'Constant Multipliers',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-029',
    title: 'Constant Term Rule for Differentiation',
    statement: 'Added constants vanish when differentiated. If $y = x^2 + a$ where $a$ is a constant, then $\\frac{dy}{dx} = 2x$. The constant contributes nothing to the rate of change.',
    sectionId: 7,
    sectionTitle: 'Constant Multipliers',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 8: SUM, PRODUCT, AND QUOTIENT RULES
  // =============================================================================
  {
    id: 'ce-030',
    title: 'Sum Rule for Differentiation',
    statement: 'If $y = u + v$ where both $u$ and $v$ are functions of $x$, then $\\frac{dy}{dx} = \\frac{du}{dx} + \\frac{dv}{dx}$. The derivative of a sum is the sum of the derivatives.',
    sectionId: 8,
    sectionTitle: 'Sum, Product, and Quotient Rules',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-031',
    title: 'Difference Rule for Differentiation',
    statement: 'If $y = u - v$ where both $u$ and $v$ are functions of $x$, then $\\frac{dy}{dx} = \\frac{du}{dx} - \\frac{dv}{dx}$.',
    sectionId: 8,
    sectionTitle: 'Sum, Product, and Quotient Rules',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-032',
    title: 'Product Rule for Differentiation',
    statement: 'If $y = u \\times v$ where both $u$ and $v$ are functions of $x$, then $\\frac{dy}{dx} = u\\frac{dv}{dx} + v\\frac{du}{dx}$.',
    sectionId: 8,
    sectionTitle: 'Sum, Product, and Quotient Rules',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-033',
    title: 'Quotient Rule for Differentiation',
    statement: "If $y = \\frac{u}{v}$, then $\\frac{dy}{dx} = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$. Memory aid: 'Low d-high minus high d-low, over low squared.'",
    sectionId: 8,
    sectionTitle: 'Sum, Product, and Quotient Rules',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 9: HIGHER DERIVATIVES
  // =============================================================================
  {
    id: 'ce-034',
    title: 'Second Derivative',
    statement: "The second derivative is obtained by differentiating the first derivative. It is written as $\\frac{d^2y}{dx^2}$ or $y''$. If $y$ represents distance and $x$ represents time, the second derivative represents acceleration.",
    sectionId: 9,
    sectionTitle: 'Higher Derivatives',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-035',
    title: 'Higher-Order Derivatives',
    statement: 'Higher-order derivatives can be obtained by repeatedly differentiating. The third derivative is $\\frac{d^3y}{dx^3}$, the fourth is $\\frac{d^4y}{dx^4}$, and so on.',
    sectionId: 9,
    sectionTitle: 'Higher Derivatives',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-036',
    title: 'Successive Derivatives of a Polynomial',
    statement: 'For a polynomial of degree $n$, the $(n+1)$th derivative and all subsequent derivatives are zero.',
    sectionId: 9,
    sectionTitle: 'Higher Derivatives',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-037',
    title: 'Prime Notation for Derivatives',
    statement: "Alternative notation for derivatives uses primes: $y'$ for the first derivative, $y''$ for the second, $y'''$ for the third, etc. Also written as $f'(x)$, $f''(x)$, $f'''(x)$, etc.",
    sectionId: 9,
    sectionTitle: 'Higher Derivatives',
    category: 'Derivatives',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 10: VELOCITY AND ACCELERATION
  // =============================================================================
  {
    id: 'ce-038',
    title: 'Velocity',
    statement: 'Velocity is the rate of change of distance with respect to time: $v = \\frac{ds}{dt}$.',
    sectionId: 10,
    sectionTitle: 'Velocity and Acceleration',
    category: 'Applications',
    type: 'definition',
  },
  {
    id: 'ce-039',
    title: 'Acceleration',
    statement: 'Acceleration is the rate of change of velocity with respect to time: $a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$.',
    sectionId: 10,
    sectionTitle: 'Velocity and Acceleration',
    category: 'Applications',
    type: 'definition',
  },
  {
    id: 'ce-040',
    title: 'Equation of Motion for Falling Body',
    statement: 'A body falling freely under gravity (ignoring air resistance) follows the law $s = \\frac{1}{2}gt^2$ where $g \\approx 9.8$ m/s².',
    sectionId: 10,
    sectionTitle: 'Velocity and Acceleration',
    category: 'Applications',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 11: CHAIN RULE
  // =============================================================================
  {
    id: 'ce-041',
    title: 'Chain Rule',
    statement: 'If $y = f(u)$ and $u = g(x)$, then $\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$. This is the chain rule for composite functions.',
    sectionId: 11,
    sectionTitle: 'Chain Rule',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-042',
    title: 'Chain Rule for Powers',
    statement: "For $y = [f(x)]^n$, we have $\\frac{dy}{dx} = n[f(x)]^{n-1} \\times f'(x)$.",
    sectionId: 11,
    sectionTitle: 'Chain Rule',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 12: TANGENT LINES
  // =============================================================================
  {
    id: 'ce-043',
    title: 'Tangent Line to a Curve',
    statement: 'The tangent line to a curve at a point is the line that touches the curve at that point without crossing it locally. Its slope equals the derivative of the function at that point.',
    sectionId: 12,
    sectionTitle: 'Tangent Lines',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-044',
    title: 'Geometric Meaning of Derivative',
    statement: 'The derivative $\\frac{dy}{dx}$ at any point gives the slope of the tangent line to the curve at that point.',
    sectionId: 12,
    sectionTitle: 'Tangent Lines',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-045',
    title: 'Equation of Tangent Line',
    statement: "At a point $(x_0, y_0)$ on a curve $y = f(x)$, the equation of the tangent line is $y - y_0 = f'(x_0)(x - x_0)$.",
    sectionId: 12,
    sectionTitle: 'Tangent Lines',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 13: MAXIMA AND MINIMA
  // =============================================================================
  {
    id: 'ce-046',
    title: 'Critical Point',
    statement: 'A critical point is a value of $x$ where $\\frac{dy}{dx} = 0$. At such points, the tangent line is horizontal.',
    sectionId: 13,
    sectionTitle: 'Maxima and Minima',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-047',
    title: 'Maximum',
    statement: 'A maximum is a point where a function reaches a local highest value. At a maximum, the derivative is zero and the second derivative is negative.',
    sectionId: 13,
    sectionTitle: 'Maxima and Minima',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-048',
    title: 'Minimum',
    statement: 'A minimum is a point where a function reaches a local lowest value. At a minimum, the derivative is zero and the second derivative is positive.',
    sectionId: 13,
    sectionTitle: 'Maxima and Minima',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-049',
    title: 'Second Derivative Test',
    statement: 'At a critical point where $\\frac{dy}{dx} = 0$: if $\\frac{d^2y}{dx^2} < 0$, it is a maximum; if $\\frac{d^2y}{dx^2} > 0$, it is a minimum; if $\\frac{d^2y}{dx^2} = 0$, further investigation is needed.',
    sectionId: 13,
    sectionTitle: 'Maxima and Minima',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 14: CURVATURE
  // =============================================================================
  {
    id: 'ce-050',
    title: 'Curvature',
    statement: 'Curvature measures how rapidly the direction of a curve is changing. A straight line has zero curvature; a tight curve has high curvature.',
    sectionId: 14,
    sectionTitle: 'Curvature',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-051',
    title: 'Concavity',
    statement: 'A curve is concave up (convex) if $\\frac{d^2y}{dx^2} > 0$, meaning the curve bends upward. It is concave down (concave) if $\\frac{d^2y}{dx^2} < 0$, meaning it bends downward.',
    sectionId: 14,
    sectionTitle: 'Curvature',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-052',
    title: 'Point of Inflection',
    statement: 'A point of inflection is where a curve changes from concave up to concave down (or vice versa). At such points, $\\frac{d^2y}{dx^2} = 0$.',
    sectionId: 14,
    sectionTitle: 'Curvature',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-053',
    title: 'Radius of Curvature',
    statement: 'The radius of curvature $R$ at any point on a curve is: $R = \\frac{\\left[1 + \\left(\\frac{dy}{dx}\\right)^2\\right]^{3/2}}{\\left|\\frac{d^2y}{dx^2}\\right|}$',
    sectionId: 14,
    sectionTitle: 'Curvature',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-054',
    title: 'Curvature κ (kappa)',
    statement: 'The curvature $\\kappa$ is the reciprocal of the radius of curvature: $\\kappa = \\frac{1}{R}$.',
    sectionId: 14,
    sectionTitle: 'Curvature',
    category: 'Derivatives',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 15: INVERSE FUNCTIONS
  // =============================================================================
  {
    id: 'ce-055',
    title: 'Partial Fractions',
    statement: 'Partial fractions decomposition breaks a complex fraction into a sum of simpler fractions. This technique is invaluable for integration.',
    sectionId: 15,
    sectionTitle: 'Inverse Functions',
    category: 'Integrals',
    type: 'definition',
  },
  {
    id: 'ce-056',
    title: 'Inverse Function',
    statement: "If $y = f(x)$, the inverse function $x = f^{-1}(y)$ 'undoes' what $f$ does. For example, if $y = x^2$ (for $x \\ge 0$), then $x = \\sqrt{y}$.",
    sectionId: 15,
    sectionTitle: 'Inverse Functions',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-057',
    title: 'Derivative of Inverse Function',
    statement: '$\\frac{dx}{dy} = \\frac{1}{\\frac{dy}{dx}}$. The derivative of an inverse function is the reciprocal of the derivative of the original function.',
    sectionId: 15,
    sectionTitle: 'Inverse Functions',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 16: EXPONENTIAL FUNCTION
  // =============================================================================
  {
    id: 'ce-058',
    title: 'The Number e',
    statement: 'The number $e$ is defined as $e = \\lim_{n \\to \\infty}\\left(1 + \\frac{1}{n}\\right)^n \\approx 2.71828...$',
    sectionId: 16,
    sectionTitle: 'The Exponential Function',
    category: 'Functions',
    type: 'definition',
  },
  {
    id: 'ce-059',
    title: 'Exponential Function Property',
    statement: 'The exponential function $y = e^x$ has the remarkable property that it is its own derivative: $\\frac{d}{dx}e^x = e^x$.',
    sectionId: 16,
    sectionTitle: 'The Exponential Function',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-060',
    title: 'Compound Interest Formula',
    statement: 'If interest is compounded continuously at annual rate $r$ for time $t$, the amount is $A = Pe^{rt}$ where $P$ is the principal.',
    sectionId: 16,
    sectionTitle: 'The Exponential Function',
    category: 'Applications',
    type: 'theorem',
  },
  {
    id: 'ce-061',
    title: 'Law of Organic Growth',
    statement: 'The differential equation $\\frac{dy}{dt} = ky$ has solution $y = y_0 e^{kt}$ where $y_0$ is the initial value. This describes exponential growth ($k > 0$) and decay ($k < 0$).',
    sectionId: 16,
    sectionTitle: 'The Exponential Function',
    category: 'Applications',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 17: TRIGONOMETRIC DERIVATIVES
  // =============================================================================
  {
    id: 'ce-062',
    title: 'Derivative of sin(x)',
    statement: '$\\frac{d}{dx}\\sin(x) = \\cos(x)$.',
    sectionId: 17,
    sectionTitle: 'Trigonometric Derivatives',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-063',
    title: 'Derivative of cos(x)',
    statement: '$\\frac{d}{dx}\\cos(x) = -\\sin(x)$.',
    sectionId: 17,
    sectionTitle: 'Trigonometric Derivatives',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-064',
    title: 'Derivatives of Other Trigonometric Functions',
    statement: '$\\frac{d}{dx}\\tan(x) = \\sec^2(x)$, $\\frac{d}{dx}\\cot(x) = -\\csc^2(x)$, $\\frac{d}{dx}\\sec(x) = \\sec(x)\\tan(x)$, $\\frac{d}{dx}\\csc(x) = -\\csc(x)\\cot(x)$.',
    sectionId: 17,
    sectionTitle: 'Trigonometric Derivatives',
    category: 'Derivatives',
    type: 'theorem',
  },
  {
    id: 'ce-065',
    title: 'Trigonometric Derivative Cycle',
    statement: 'The derivatives of sine and cosine cycle: $\\sin(x) \\to \\cos(x) \\to -\\sin(x) \\to -\\cos(x) \\to \\sin(x)$.',
    sectionId: 17,
    sectionTitle: 'Trigonometric Derivatives',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 18: PARTIAL DERIVATIVES
  // =============================================================================
  {
    id: 'ce-066',
    title: 'Partial Derivative',
    statement: 'For a function $f(x, y)$ of multiple variables, the partial derivative $\\frac{\\partial f}{\\partial x}$ is found by differentiating with respect to $x$ while treating $y$ as a constant.',
    sectionId: 18,
    sectionTitle: 'Partial Derivatives',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-067',
    title: 'Total Differential',
    statement: 'If both $x$ and $y$ change simultaneously in a function $f(x, y)$, the total change is approximately $df = \\frac{\\partial f}{\\partial x}dx + \\frac{\\partial f}{\\partial y}dy$.',
    sectionId: 18,
    sectionTitle: 'Partial Derivatives',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 19: INTRODUCTION TO INTEGRATION
  // =============================================================================
  {
    id: 'ce-068',
    title: 'Integration',
    statement: "Integration is the reverse of differentiation. It is the operation of adding up infinitely many infinitesimal pieces. The symbol $\\int$ means 'the sum of'.",
    sectionId: 19,
    sectionTitle: 'Introduction to Integration',
    category: 'Integrals',
    type: 'definition',
  },
  {
    id: 'ce-069',
    title: 'Indefinite Integral',
    statement: 'The indefinite integral $\\int f(x) \\, dx$ is the set of all antiderivatives of $f(x)$. It includes an arbitrary constant $C$.',
    sectionId: 19,
    sectionTitle: 'Introduction to Integration',
    category: 'Integrals',
    type: 'definition',
  },
  {
    id: 'ce-070',
    title: 'Constant of Integration',
    statement: 'The constant of integration $C$ appears in indefinite integrals because the derivative of any constant is zero. We cannot determine from the derivative alone what constant was originally present.',
    sectionId: 19,
    sectionTitle: 'Introduction to Integration',
    category: 'Integrals',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 20: INTEGRATION RULES
  // =============================================================================
  {
    id: 'ce-071',
    title: 'Power Rule for Integration',
    statement: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (for $n \\neq -1$). To integrate a power, increase the exponent by 1 and divide by the new exponent.',
    sectionId: 20,
    sectionTitle: 'Integration Rules',
    category: 'Integrals',
    type: 'theorem',
  },
  {
    id: 'ce-072',
    title: 'Integration of 1/x',
    statement: '$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$. This is the special case where the power rule does not apply ($n = -1$).',
    sectionId: 20,
    sectionTitle: 'Integration Rules',
    category: 'Integrals',
    type: 'theorem',
  },
  {
    id: 'ce-073',
    title: 'Standard Integrals',
    statement: '$\\int e^x \\, dx = e^x + C$, $\\int \\sin(x) \\, dx = -\\cos(x) + C$, $\\int \\cos(x) \\, dx = \\sin(x) + C$, $\\int \\sec^2(x) \\, dx = \\tan(x) + C$.',
    sectionId: 20,
    sectionTitle: 'Integration Rules',
    category: 'Integrals',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 21: DEFINITE INTEGRALS
  // =============================================================================
  {
    id: 'ce-074',
    title: 'Definite Integral',
    statement: 'A definite integral has specific limits ($a$ and $b$) and gives a specific numerical answer. It represents the area under a curve: Area $= \\int_a^b f(x) \\, dx$.',
    sectionId: 21,
    sectionTitle: 'Definite Integrals',
    category: 'Integrals',
    type: 'definition',
  },
  {
    id: 'ce-075',
    title: 'Computing Definite Integrals',
    statement: 'If $F(x)$ is an antiderivative of $f(x)$, then $\\int_a^b f(x) \\, dx = F(b) - F(a)$, often written as $[F(x)]_a^b$ or $F(x)|_a^b$.',
    sectionId: 21,
    sectionTitle: 'Definite Integrals',
    category: 'Integrals',
    type: 'theorem',
  },
  {
    id: 'ce-076',
    title: 'Fundamental Theorem of Calculus',
    statement: "If $F'(x) = f(x)$, then $\\int_a^b f(x) \\, dx = F(b) - F(a)$. This theorem unifies differentiation and integration as inverse operations.",
    sectionId: 21,
    sectionTitle: 'Definite Integrals',
    category: 'Integrals',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 22: INTEGRATION TECHNIQUES
  // =============================================================================
  {
    id: 'ce-077',
    title: 'U-Substitution',
    statement: "For integration, if you can spot a 'function within a function,' try substituting. Let $u = g(x)$, then $du = g'(x)dx$, and the integral transforms accordingly.",
    sectionId: 22,
    sectionTitle: 'Integration Techniques',
    category: 'Integrals',
    type: 'theorem',
  },
  {
    id: 'ce-078',
    title: 'Integration by Parts',
    statement: '$\\int u \\, dv = uv - \\int v \\, du$. This is the integration equivalent of the product rule.',
    sectionId: 22,
    sectionTitle: 'Integration Techniques',
    category: 'Integrals',
    type: 'theorem',
  },
  {
    id: 'ce-079',
    title: 'Integration of sin²(x)',
    statement: 'Using the identity $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$, we have $\\int \\sin^2(x) \\, dx = \\frac{x}{2} - \\frac{\\sin(2x)}{4} + C$.',
    sectionId: 22,
    sectionTitle: 'Integration Techniques',
    category: 'Integrals',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 23: DIFFERENTIAL EQUATIONS
  // =============================================================================
  {
    id: 'ce-080',
    title: 'Differential Equation',
    statement: 'A differential equation is an equation involving derivatives. Solving it means finding a function that satisfies the equation. The laws of physics are often expressed as differential equations.',
    sectionId: 23,
    sectionTitle: 'Differential Equations',
    category: 'Applications',
    type: 'definition',
  },
  {
    id: 'ce-081',
    title: 'Separable Differential Equation',
    statement: "A separable differential equation is one where variables can be separated—all $x$'s on one side and all $y$'s on the other—so each side can be integrated independently.",
    sectionId: 23,
    sectionTitle: 'Differential Equations',
    category: 'Applications',
    type: 'definition',
  },
  {
    id: 'ce-082',
    title: 'Initial Condition',
    statement: "An initial condition specifies the value of a function at a particular point, such as $y = y_0$ when $x = x_0$. It determines the specific constant of integration in a differential equation's solution.",
    sectionId: 23,
    sectionTitle: 'Differential Equations',
    category: 'Applications',
    type: 'definition',
  },
  {
    id: 'ce-083',
    title: 'Particular Solution',
    statement: 'A particular solution to a differential equation is one where the constant of integration has been determined using an initial condition.',
    sectionId: 23,
    sectionTitle: 'Differential Equations',
    category: 'Applications',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 24: OSCULATING CIRCLES
  // =============================================================================
  {
    id: 'ce-084',
    title: 'Osculating Circle',
    statement: "At any point on a curve, the osculating circle (from Latin 'osculare,' to kiss) is the circle that best matches the curve's local behavior. It has the same tangent and curvature as the curve at the point of contact.",
    sectionId: 24,
    sectionTitle: 'Osculating Circles',
    category: 'Derivatives',
    type: 'definition',
  },
  {
    id: 'ce-085',
    title: 'Radius of Curvature at a Point',
    statement: 'For $y = x^2$, the radius of curvature at $x = 0$ (the vertex) is $R = \\frac{1}{2}$, so the curvature is $\\kappa = 2$. This is where the parabola bends most sharply.',
    sectionId: 24,
    sectionTitle: 'Osculating Circles',
    category: 'Derivatives',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 25: ARC LENGTH
  // =============================================================================
  {
    id: 'ce-086',
    title: 'Arc Length',
    statement: 'The arc length is the actual distance along a curve between two points, as opposed to the straight-line distance.',
    sectionId: 25,
    sectionTitle: 'Arc Length',
    category: 'Integrals',
    type: 'definition',
  },
  {
    id: 'ce-087',
    title: 'Arc Length Formula',
    statement: 'For a curve $y = f(x)$ from $x = a$ to $x = b$, the arc length is $L = \\int_a^b \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} \\, dx$.',
    sectionId: 25,
    sectionTitle: 'Arc Length',
    category: 'Integrals',
    type: 'theorem',
  },
  {
    id: 'ce-088',
    title: 'Arc Length Differential',
    statement: 'For a small piece of a curve, the arc length element is $ds = \\sqrt{(dx)^2 + (dy)^2} = \\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2} \\, dx$. Integrating these infinitesimal pieces gives the total arc length.',
    sectionId: 25,
    sectionTitle: 'Arc Length',
    category: 'Integrals',
    type: 'theorem',
  },
  {
    id: 'ce-089',
    title: 'Catenary Curve',
    statement: 'A catenary is the curve formed by a hanging chain or cable under its own weight, described by $y = a \\cdot \\cosh(x/a)$. Its arc length can be computed using the arc length formula.',
    sectionId: 25,
    sectionTitle: 'Arc Length',
    category: 'Applications',
    type: 'definition',
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
