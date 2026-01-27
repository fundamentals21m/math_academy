import type { QuizQuestion } from './types';

export const section09Quiz = {
  easy: [
    {
      id: 's09-e01',
      type: 'multiple-choice',
      question: 'The $\\varepsilon$-$\\delta$ definition of $\\lim_{x \\to a} f(x) = L$ states:',
      options: [
        'For all $\\varepsilon > 0$, there exists $\\delta > 0$ such that $|f(x) - L| < \\varepsilon$ when $0 < |x - a| < \\delta$',
        'For all $\\delta > 0$, there exists $\\varepsilon > 0$ such that $|f(x) - L| < \\varepsilon$ when $0 < |x - a| < \\delta$',
        '$f(a) = L$',
        'For all $x$ near $a$, $f(x) = L$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The $\\varepsilon$-$\\delta$ definition: for every tolerance $\\varepsilon$, we can find $\\delta$ such that $f(x)$ is within $\\varepsilon$ of $L$ whenever $x$ is within $\\delta$ of $a$.'
    },
    {
      id: 's09-e02',
      type: 'multiple-choice',
      question: 'A function $f$ is continuous at $a$ if:',
      options: [
        '$f(a)$ exists',
        '$\\lim_{x \\to a} f(x) = f(a)$',
        '$\\lim_{x \\to a} f(x)$ exists',
        '$f$ is differentiable at $a$'
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Continuity requires three things: $f(a)$ exists, the limit exists, and they are equal.'
    },
    {
      id: 's09-e03',
      type: 'multiple-choice',
      question: 'The function $f(x) = x^2$ is continuous at $x = 2$ because:',
      options: [
        '$f(2) = 4$ and $\\lim_{x \\to 2} x^2 = 4$',
        '$f$ is a polynomial',
        'Both (A) and (B)',
        '$f$ is bounded'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Polynomials are continuous everywhere, and we can verify $\\lim_{x \\to 2} x^2 = 4 = f(2)$.'
    },
    {
      id: 's09-e04',
      type: 'multiple-choice',
      question: 'If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then $\\lim_{x \\to a} [f(x) + g(x)] = $',
      options: ['$L \\cdot M$', '$L - M$', '$L/M$', '$L + M$'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The limit of a sum is the sum of the limits.'
    },
    {
      id: 's09-e05',
      type: 'multiple-choice',
      question: 'The one-sided limit $\\lim_{x \\to a^+} f(x)$ means:',
      options: [
        '$x$ approaches $a$ from the right (values greater than $a$)',
        '$x$ approaches $a$ from the left',
        '$f(x)$ approaches $a$',
        '$x$ equals $a$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The notation $a^+$ indicates approaching from the right (from values greater than $a$).'
    },
    {
      id: 's09-e06',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to a} f(x) = L$ exists if and only if:',
      options: [
        '$\\lim_{x \\to a^+} f(x) = L$',
        'Both one-sided limits exist and are equal to $L$',
        '$\\lim_{x \\to a^-} f(x) = L$',
        '$f(a) = L$'
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The two-sided limit exists iff both one-sided limits exist and are equal.'
    },
    {
      id: 's09-e07',
      type: 'multiple-choice',
      question: 'The function $f(x) = |x|$ at $x = 0$ is:',
      options: [
        'Discontinuous',
        'Differentiable',
        'Continuous but not differentiable',
        'Not defined'
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$|x|$ is continuous at $0$ (limit equals $f(0) = 0$) but has a corner, making it not differentiable there.'
    },
    {
      id: 's09-e08',
      type: 'multiple-choice',
      question: 'A removable discontinuity at $x = a$ occurs when:',
      options: [
        '$\\lim_{x \\to a} f(x)$ does not exist',
        '$\\lim_{x \\to a^+} f(x) \\neq \\lim_{x \\to a^-} f(x)$',
        '$f(a) = \\infty$',
        '$\\lim_{x \\to a} f(x)$ exists but $\\neq f(a)$ (or $f(a)$ undefined)'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Removable discontinuity: the limit exists but doesn\'t equal the function value (or function is undefined there).'
    },
    {
      id: 's09-e09',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 2} (3x + 1)$?',
      correctAnswer: 7,
      difficulty: 'easy',
      explanation: 'Direct substitution: $3(2) + 1 = 7$.'
    },
    {
      id: 's09-e10',
      type: 'multiple-choice',
      question: 'The function $f(x) = \\frac{1}{x}$ is continuous on:',
      options: [
        '$\\mathbb{R} \\setminus \\{0\\}$',
        '$\\mathbb{R}$',
        '$[0, \\infty)$',
        '$(-\\infty, 0]$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$1/x$ is continuous everywhere except $x = 0$ where it is undefined.'
    },
    {
      id: 's09-e11',
      type: 'multiple-choice',
      question: 'If $f$ and $g$ are continuous at $a$, then $f + g$ is:',
      options: [
        'Not necessarily continuous at $a$',
        'Continuous at $a$',
        'Continuous only if $f(a) = g(a)$',
        'Differentiable at $a$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The sum of continuous functions is continuous.'
    },
    {
      id: 's09-e12',
      type: 'multiple-choice',
      question: 'A jump discontinuity occurs when:',
      options: [
        'The limit does not exist',
        'The function is undefined',
        'Both one-sided limits exist but are different',
        '$f(a) = \\infty$'
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Jump discontinuity: $\\lim_{x \\to a^-} f(x) \\neq \\lim_{x \\to a^+} f(x)$, both finite.'
    },
    {
      id: 's09-e13',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to 0} \\sin x = $',
      options: ['$1$', '$\\pi$', 'Does not exist', '$0$'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Since $\\sin$ is continuous and $\\sin(0) = 0$, the limit is $0$.'
    },
    {
      id: 's09-e14',
      type: 'multiple-choice',
      question: 'The squeeze theorem for limits states that if $g(x) \\leq f(x) \\leq h(x)$ near $a$ and $\\lim g(x) = \\lim h(x) = L$:',
      options: [
        '$\\lim f(x) = L$',
        '$\\lim f(x) = 0$',
        '$f$ is continuous',
        '$f(a) = L$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'If $f$ is squeezed between two functions with the same limit, $f$ has that limit too.'
    },
    {
      id: 's09-e15',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$?',
      correctAnswer: 2,
      difficulty: 'easy',
      explanation: '$\\frac{x^2 - 1}{x - 1} = \\frac{(x-1)(x+1)}{x-1} = x + 1 \\to 2$ as $x \\to 1$.'
    },
    {
      id: 's09-e16',
      type: 'multiple-choice',
      question: 'A function is continuous on $[a, b]$ if:',
      options: [
        'It is continuous at every point in $(a, b)$',
        'It is continuous on $(a, b)$ with right-continuity at $a$ and left-continuity at $b$',
        'It is continuous at $a$ and $b$',
        'It is differentiable on $[a, b]$'
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'On a closed interval, we use one-sided continuity at the endpoints.'
    },
    {
      id: 's09-e17',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to 0} \\frac{\\sin x}{x} = $',
      options: ['$0$', '$\\pi$', '$1$', '$\\infty$'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This is a fundamental limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.'
    },
    {
      id: 's09-e18',
      type: 'multiple-choice',
      question: 'If $f$ is continuous at $a$ and $g$ is continuous at $f(a)$, then $g \\circ f$ is:',
      options: [
        'Not necessarily continuous at $a$',
        'Continuous at $f(a)$',
        'Differentiable at $a$',
        'Continuous at $a$'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Composition of continuous functions is continuous.'
    },
    {
      id: 's09-e19',
      type: 'multiple-choice',
      question: 'The function $f(x) = e^x$ is continuous on:',
      options: ['$\\mathbb{R}$', '$(0, \\infty)$', '$(-\\infty, 0)$', '$[0, 1]$ only'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The exponential function is continuous on all of $\\mathbb{R}$.'
    },
    {
      id: 's09-e20',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 3} (x^2 - 5)$?',
      correctAnswer: 4,
      difficulty: 'easy',
      explanation: 'Direct substitution: $3^2 - 5 = 9 - 5 = 4$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's09-m01',
      type: 'multiple-choice',
      question: 'Uniform continuity of $f$ on $S$ means:',
      options: [
        'For all $a \\in S$ and $\\varepsilon > 0$, there exists $\\delta > 0$ (depending on $a$ and $\\varepsilon$)',
        'For all $\\varepsilon > 0$, there exists $\\delta > 0$ (independent of $x$) such that $|f(x) - f(y)| < \\varepsilon$ when $|x - y| < \\delta$',
        '$f$ is bounded on $S$',
        '$f$ is differentiable on $S$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Uniform continuity: the same $\\delta$ works for all points, unlike pointwise continuity.'
    },
    {
      id: 's09-m02',
      type: 'multiple-choice',
      question: 'The function $f(x) = x^2$ on $\\mathbb{R}$ is:',
      options: [
        'Uniformly continuous',
        'Discontinuous',
        'Continuous but not uniformly continuous',
        'Uniformly continuous on $[0, 1]$ only'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$x^2$ is continuous everywhere but not uniformly continuous on $\\mathbb{R}$ (the slope grows without bound).'
    },
    {
      id: 's09-m03',
      type: 'multiple-choice',
      question: 'On a closed bounded interval $[a, b]$, every continuous function is:',
      options: [
        'Differentiable',
        'Constant',
        'Unbounded',
        'Uniformly continuous'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Heine-Cantor theorem: continuous on compact $\\Rightarrow$ uniformly continuous.'
    },
    {
      id: 's09-m04',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = $',
      options: ['$1/2$', '$0$', '$1$', '$\\infty$'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Using Taylor or L\'Hôpital: $1 - \\cos x \\approx x^2/2$, so the limit is $1/2$.'
    },
    {
      id: 's09-m05',
      type: 'multiple-choice',
      question: 'The function $f(x) = \\sin(1/x)$ as $x \\to 0$:',
      options: [
        'Has limit $0$',
        'Does not have a limit (oscillates)',
        'Has limit $1$',
        'Has limit $\\infty$'
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'As $x \\to 0$, $1/x \\to \\pm\\infty$, and $\\sin$ oscillates between $-1$ and $1$ without settling.'
    },
    {
      id: 's09-m06',
      type: 'multiple-choice',
      question: 'The function $f(x) = x \\sin(1/x)$ for $x \\neq 0$, $f(0) = 0$ is:',
      options: [
        'Discontinuous at $0$',
        'Not defined at $0$',
        'Continuous at $0$',
        'Differentiable at $0$'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$|x \\sin(1/x)| \\leq |x| \\to 0$, so by squeeze theorem, $\\lim_{x \\to 0} x\\sin(1/x) = 0 = f(0)$.'
    },
    {
      id: 's09-m07',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 0} \\frac{e^x - 1}{x}$?',
      correctAnswer: 1,
      difficulty: 'medium',
      explanation: 'This is the derivative of $e^x$ at $x = 0$, which equals $e^0 = 1$.'
    },
    {
      id: 's09-m08',
      type: 'multiple-choice',
      question: 'A function $f$ has an essential discontinuity at $a$ if:',
      options: [
        'The limit exists but differs from $f(a)$',
        'Both one-sided limits exist but differ',
        '$f(a)$ is undefined',
        'At least one one-sided limit is infinite or does not exist'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Essential discontinuity: the limit doesn\'t exist (oscillation, infinite limits, etc.).'
    },
    {
      id: 's09-m09',
      type: 'multiple-choice',
      question: 'The sequential characterization of continuity: $f$ is continuous at $a$ iff:',
      options: [
        'For every sequence $x_n \\to a$, we have $f(x_n) \\to f(a)$',
        '$f(a)$ exists',
        '$f$ is bounded near $a$',
        '$f$ is monotonic near $a$'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Sequential continuity: $x_n \\to a$ implies $f(x_n) \\to f(a)$.'
    },
    {
      id: 's09-m10',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to \\infty} \\frac{x}{x + 1} = $',
      options: ['$0$', '$1$', '$\\infty$', 'Does not exist'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '$\\frac{x}{x+1} = \\frac{1}{1 + 1/x} \\to 1$ as $x \\to \\infty$.'
    },
    {
      id: 's09-m11',
      type: 'multiple-choice',
      question: 'The function $f(x) = 1/x$ is uniformly continuous on:',
      options: ['$(0, 1)$', '$(0, \\infty)$', '$[1, \\infty)$', '$\\mathbb{R} \\setminus \\{0\\}$'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'On $[1, \\infty)$, the derivative is bounded: $|f\'(x)| = 1/x^2 \\leq 1$. Not uniformly continuous near $0$.'
    },
    {
      id: 's09-m12',
      type: 'multiple-choice',
      question: 'If $f$ is uniformly continuous on $(a, b)$, then $f$ can be extended to a continuous function on:',
      options: [
        'Only $(a, b)$',
        '$\\mathbb{R}$',
        'No extension is possible',
        '$[a, b]$'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Uniformly continuous functions on $(a,b)$ have limits at endpoints and extend continuously to $[a,b]$.'
    },
    {
      id: 's09-m13',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 0^+} x \\ln x$?',
      correctAnswer: 0,
      difficulty: 'medium',
      explanation: 'Rewrite as $\\frac{\\ln x}{1/x}$ and use L\'Hôpital: $\\frac{1/x}{-1/x^2} = -x \\to 0$.'
    },
    {
      id: 's09-m14',
      type: 'multiple-choice',
      question: 'A Lipschitz continuous function with constant $K$ satisfies:',
      options: [
        '$|f(x) - f(y)| \\leq K|x - y|$ for all $x, y$',
        '$|f(x)| \\leq K$ for all $x$',
        '$|f\'(x)| \\leq K$ for all $x$',
        '$f(x) = Kx$'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Lipschitz condition bounds how fast the function can change.'
    },
    {
      id: 's09-m15',
      type: 'multiple-choice',
      question: 'Every Lipschitz continuous function is:',
      options: [
        'Differentiable',
        'Uniformly continuous',
        'Bounded',
        'Constant'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Lipschitz implies uniform continuity (take $\\delta = \\varepsilon/K$).'
    },
    {
      id: 's09-m16',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to 0} \\frac{\\tan x}{x} = $',
      options: ['$0$', '$\\pi$', '$1$', '$\\infty$'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '$\\frac{\\tan x}{x} = \\frac{\\sin x}{x} \\cdot \\frac{1}{\\cos x} \\to 1 \\cdot 1 = 1$.'
    },
    {
      id: 's09-m17',
      type: 'multiple-choice',
      question: 'The oscillation of $f$ at $a$ is $0$ if and only if:',
      options: [
        '$f(a) = 0$',
        '$f$ is bounded near $a$',
        '$f$ is differentiable at $a$',
        '$f$ is continuous at $a$'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Zero oscillation at a point is equivalent to continuity at that point.'
    },
    {
      id: 's09-m18',
      type: 'multiple-choice',
      question: 'The Dirichlet function $D(x) = 1$ if $x$ rational, $0$ if irrational, is:',
      options: [
        'Continuous nowhere',
        'Continuous everywhere',
        'Continuous only at irrationals',
        'Continuous only at $0$'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'At every point, both rationals and irrationals are arbitrarily close, so the limit doesn\'t exist anywhere.'
    },
    {
      id: 's09-m19',
      type: 'multiple-choice',
      question: 'If $f$ is continuous at $a$ and $f(a) > 0$, then:',
      options: [
        '$f(x) > 0$ for all $x$',
        'There exists $\\delta > 0$ such that $f(x) > 0$ for $|x - a| < \\delta$',
        '$f$ is constant near $a$',
        '$f$ is increasing near $a$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Sign preservation: continuous functions preserve sign in a neighborhood of points where they\'re nonzero.'
    },
    {
      id: 's09-m20',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}$?',
      correctAnswer: 3,
      difficulty: 'medium',
      explanation: '$\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x} \\to 3 \\cdot 1 = 3$.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's09-h01',
      type: 'multiple-choice',
      question: 'The function $f(x) = \\sqrt{x}$ on $[0, \\infty)$ is:',
      options: [
        'Not uniformly continuous',
        'Uniformly continuous only on $[1, \\infty)$',
        'Uniformly continuous',
        'Lipschitz continuous'
    ],
    {
      id: 's09-h02',
      type: 'multiple-choice',
      question: 'If $f$ is continuous on $(a, b)$ and uniformly continuous, then:',
      options: [
        '$f$ must be bounded',
        '$f$ extends continuously to $[a, b]$',
        '$f$ is differentiable',
        'Both (A) and (B)'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Uniform continuity on $(a,b)$ implies the limits at $a$ and $b$ exist, allowing continuous extension and implying boundedness.'
    },
    {
      id: 's09-h03',
      type: 'multiple-choice',
      question: 'The Thomae function (ruler function) is continuous exactly at:',
      options: [
        'All irrationals',
        'All rationals',
        'Nowhere',
        'Everywhere'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Thomae\'s function equals $0$ at irrationals, $1/q$ at $p/q$ reduced. It\'s continuous at irrationals, discontinuous at rationals.'
    },
    {
      id: 's09-h04',
      type: 'multiple-choice',
      question: 'A function can have a countable set of discontinuities and still be:',
      options: [
        'Continuous',
        'Riemann integrable',
        'Differentiable everywhere',
        'Uniformly continuous'
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Lebesgue\'s criterion: bounded functions with measure-zero discontinuities are Riemann integrable.'
    },
    {
      id: 's09-h05',
      type: 'multiple-choice',
      question: 'The modulus of continuity $\\omega(\\delta) = \\sup\\{|f(x) - f(y)| : |x - y| < \\delta\\}$ for a uniformly continuous $f$:',
      options: [
        'Is always constant',
        'Is always equal to $\\delta$',
        'Satisfies $\\omega(\\delta) \\to 0$ as $\\delta \\to 0$',
        'Does not exist'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For uniformly continuous functions, $\\omega(\\delta) \\to 0$ as $\\delta \\to 0$.'
    },
    {
      id: 's09-h06',
      type: 'multiple-choice',
      question: 'A continuous function $f: \\mathbb{Q} \\to \\mathbb{R}$ (domain is rationals only):',
      options: [
        'Can always be extended to a continuous function on $\\mathbb{R}$',
        'Is automatically uniformly continuous',
        'Cannot exist',
        'Can be extended to $\\mathbb{R}$ iff it is uniformly continuous'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Extension to $\\mathbb{R}$ requires uniform continuity to define limits at irrationals consistently.'
    },
    {
      id: 's09-h07',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$?',
      correctAnswer: 0.167,
      numericRange: { min: 0.16, max: 0.17 },
      difficulty: 'hard',
      explanation: 'Using Taylor: $\\sin x = x - x^3/6 + O(x^5)$, so $(x - \\sin x)/x^3 \\to 1/6 \\approx 0.167$.'
    },
    {
      id: 's09-h08',
      type: 'multiple-choice',
      question: 'If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$ with $|f\'(x)| \\leq M$, then $f$ is:',
      options: [
        'Lipschitz with constant $M$',
        'Constant',
        'Unbounded',
        'Discontinuous somewhere'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'By the Mean Value Theorem, $|f(x) - f(y)| \\leq M|x - y|$.'
    },
    {
      id: 's09-h09',
      type: 'multiple-choice',
      question: 'The set of continuity points of any function $f: \\mathbb{R} \\to \\mathbb{R}$ is:',
      options: [
        'Always closed',
        'A $G_\\delta$ set (countable intersection of open sets)',
        'Always open',
        'Can be any subset of $\\mathbb{R}$'
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The set of continuity points is always a $G_\\delta$ set, a topological fact.'
    },
    {
      id: 's09-h10',
      type: 'multiple-choice',
      question: 'There exists a function continuous only at a single point:',
      options: [
        'False, continuity points are always dense',
        'False, there must be an interval of continuity',
        'True, e.g., $f(x) = xD(x)$ where $D$ is Dirichlet',
        'True, but only for discontinuous functions'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$f(x) = x \\cdot D(x)$ (where $D$ is Dirichlet) is continuous only at $x = 0$.'
    },
    {
      id: 's09-h11',
      type: 'multiple-choice',
      question: 'If $f$ is monotonic on $(a, b)$, its discontinuities are:',
      options: [
        'All removable',
        'Essential',
        'Nowhere dense',
        'At most countable, all jump discontinuities'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Monotonic functions can only have jump discontinuities, and there are at most countably many.'
    },
    {
      id: 's09-h12',
      type: 'multiple-choice',
      question: '$\\lim_{x \\to 0^+} x^x = $',
      options: ['$1$', '$0$', '$e$', 'Does not exist'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$x^x = e^{x \\ln x}$. Since $x \\ln x \\to 0$ as $x \\to 0^+$, we get $e^0 = 1$.'
    },
    {
      id: 's09-h13',
      type: 'multiple-choice',
      question: 'A Hölder continuous function with exponent $\\alpha$ satisfies:',
      options: [
        '$|f(x)| \\leq C|x|^\\alpha$',
        '$|f(x) - f(y)| \\leq C|x - y|^\\alpha$ for some $C$ and $0 < \\alpha \\leq 1$',
        '$f$ is differentiable with bounded derivative',
        '$f$ is constant'
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Hölder continuity generalizes Lipschitz ($\\alpha = 1$) to fractional exponents.'
    },
    {
      id: 's09-h14',
      type: 'multiple-choice',
      question: 'The function $f(x) = x^2 \\sin(1/x)$ for $x \\neq 0$, $f(0) = 0$, at $x = 0$ is:',
      options: [
        'Discontinuous',
        'Continuous but not differentiable',
        'Differentiable with $f\'(0) = 0$',
        'Differentiable with $f\'(0) = 1$'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\frac{f(h) - f(0)}{h} = h \\sin(1/h) \\to 0$, so $f\'(0) = 0$.'
    },
    {
      id: 's09-h15',
      type: 'multiple-choice',
      question: 'If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = 0$ with $g(x) \\neq 0$ near $a$:',
      options: [
        '$\\lim f(x)/g(x) = \\infty$',
        '$\\lim f(x)/g(x) = 0$',
        '$\\lim f(x)/g(x) = L$',
        '$\\lim f(x)/g(x)$ may not exist'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'This is an indeterminate form if $L \\neq 0$; the limit depends on how fast each approaches its value.'
    },
    {
      id: 's09-h16',
      type: 'numeric',
      question: 'What is $\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x}$?',
      correctAnswer: 1,
      difficulty: 'hard',
      explanation: 'This is the derivative of $\\ln(1+x)$ at $x = 0$, which is $1/(1+0) = 1$.'
    },
    {
      id: 's09-h17',
      type: 'multiple-choice',
      question: 'If $f$ is uniformly continuous on $\\mathbb{R}$ and bounded below, then:',
      options: [
        '$f$ might be unbounded above',
        '$f$ is bounded',
        '$f$ is Lipschitz',
        '$f$ is constant'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'E.g., $f(x) = \\sqrt{|x|}$ is uniformly continuous, bounded below by $0$, but unbounded above.'
    },
    {
      id: 's09-h18',
      type: 'multiple-choice',
      question: 'Darboux\'s theorem for derivatives states that if $f$ is differentiable on $[a, b]$:',
      options: [
        '$f\'$ is continuous',
        '$f\'$ has the intermediate value property',
        '$f\'$ is bounded',
        '$f\'$ is Riemann integrable'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Derivatives have the IVP even if they\'re not continuous. This is Darboux\'s theorem.'
    },
    {
      id: 's09-h19',
      type: 'multiple-choice',
      question: 'A function $f$ on $(a, b)$ is uniformly continuous iff:',
      options: [
        '$f$ is continuous',
        'For every $\\varepsilon > 0$, there exists $\\delta > 0$ independent of the point',
        'Both (B) and (C)',
        'Whenever $x_n - y_n \\to 0$, we have $f(x_n) - f(y_n) \\to 0$'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The sequence characterization (C) is equivalent to the $\\varepsilon$-$\\delta$ definition (B).'
    },
    {
      id: 's09-h20',
      type: 'multiple-choice',
      question: 'A continuous bijection $f: [a, b] \\to [c, d]$ has:',
      options: [
        'A discontinuous inverse',
        'No inverse',
        'An inverse that may or may not be continuous',
        'A continuous inverse'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A continuous bijection from a compact interval to an interval has a continuous inverse.'
    }
  ] as QuizQuestion[],
};
