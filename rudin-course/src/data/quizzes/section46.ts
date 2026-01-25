import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The "main problem" in Chapter 7 of Rudin concerns when we can interchange:',
    options: [
      'Limits with other operations (limits, integrals, derivatives, sums)',
      'Addition and multiplication',
      'Differentiation and integration',
      'Real and complex analysis',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Chapter 7 addresses when $\\lim_{n \\to \\infty} \\int f_n = \\int \\lim_{n \\to \\infty} f_n$, $\\lim_{n \\to \\infty} (f_n)\' = (\\lim_{n \\to \\infty} f_n)\'$, and similar interchanges. The key condition is usually uniform convergence.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The sequence $f_n(x) = x^n$ on $[0, 1]$ converges pointwise to:',
    options: [
      '$f(x) = 0$ for $x \\in [0, 1)$ and $f(1) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $0 \\leq x < 1$: $\\lim_{n \\to \\infty} x^n = 0$. For $x = 1$: $\\lim_{n \\to \\infty} 1^n = 1$. The limit function is discontinuous at $x = 1$.',
  },
      '$f(x) = 0$ for all $x \\in [0, 1]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For $0 \\leq x < 1$: $\\lim_{n \\to \\infty} x^n = 0$. For $x = 1$: $\\lim_{n \\to \\infty} 1^n = 1$. The limit function is discontinuous at $x = 1$.',
  },
      '$f(x) = 1$ for all $x \\in [0, 1]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For $0 \\leq x < 1$: $\\lim_{n \\to \\infty} x^n = 0$. For $x = 1$: $\\lim_{n \\to \\infty} 1^n = 1$. The limit function is discontinuous at $x = 1$.',
  },
      '$f(x) = x$ for all $x \\in [0, 1]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For $0 \\leq x < 1$: $\\lim_{n \\to \\infty} x^n = 0$. For $x = 1$: $\\lim_{n \\to \\infty} 1^n = 1$. The limit function is discontinuous at $x = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For $0 \\leq x < 1$: $\\lim_{n \\to \\infty} x^n = 0$. For $x = 1$: $\\lim_{n \\to \\infty} 1^n = 1$. The limit function is discontinuous at $x = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f_n(x) = x^n$ on $[0, 1]$, the pointwise limit is discontinuous even though each $f_n$ is continuous. This shows that:',
    options: [
      'Pointwise limits preserve continuity',
      'Pointwise convergence may not preserve continuity',
      'The limit function is always discontinuous',
      'Uniform convergence fails for polynomials',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'This classic example shows that pointwise convergence does not preserve continuity. Each $f_n(x) = x^n$ is continuous, but the pointwise limit is discontinuous at $x = 1$. Uniform convergence is needed to preserve continuity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Consider $f_n(x) = \\frac{nx}{1 + n^2x^2}$ on $[0, 1]$. Then $\\lim_{n \\to \\infty} \\int_0^1 f_n(x) \\, dx$ equals:',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'We have $f_n(x) \\to 0$ pointwise for each $x > 0$, but $\\int_0^1 f_n \\, dx = \\frac{1}{2n}\\ln(1 + n^2) \\to \\frac{1}{2}\\ln(n^2)/n \\to 0$... Actually, let\'s compute: $\\int_0^1 \\frac{nx}{1+n^2x^2}dx = [\\frac{1}{2n}\\ln(1+n^2x^2)]_0^1 = \\frac{\\ln(1+n^2)}{2n}$. As $n \\to \\infty$ this goes to $0$. But this is a case where we need to be careful about interchanging limits.',
  },
      '$\\int_0^1 \\lim_{n \\to \\infty} f_n(x) \\, dx = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We have $f_n(x) \\to 0$ pointwise for each $x > 0$, but $\\int_0^1 f_n \\, dx = \\frac{1}{2n}\\ln(1 + n^2) \\to \\frac{1}{2}\\ln(n^2)/n \\to 0$... Actually, let\'s compute: $\\int_0^1 \\frac{nx}{1+n^2x^2}dx = [\\frac{1}{2n}\\ln(1+n^2x^2)]_0^1 = \\frac{\\ln(1+n^2)}{2n}$. As $n \\to \\infty$ this goes to $0$. But this is a case where we need to be careful about interchanging limits.',
  },
      '$\\frac{1}{2} \\ln 2$, which is not $0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We have $f_n(x) \\to 0$ pointwise for each $x > 0$, but $\\int_0^1 f_n \\, dx = \\frac{1}{2n}\\ln(1 + n^2) \\to \\frac{1}{2}\\ln(n^2)/n \\to 0$... Actually, let\'s compute: $\\int_0^1 \\frac{nx}{1+n^2x^2}dx = [\\frac{1}{2n}\\ln(1+n^2x^2)]_0^1 = \\frac{\\ln(1+n^2)}{2n}$. As $n \\to \\infty$ this goes to $0$. But this is a case where we need to be careful about interchanging limits.',
  },
      '$\\infty
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We have $f_n(x) \\to 0$ pointwise for each $x > 0$, but $\\int_0^1 f_n \\, dx = \\frac{1}{2n}\\ln(1 + n^2) \\to \\frac{1}{2}\\ln(n^2)/n \\to 0$... Actually, let\'s compute: $\\int_0^1 \\frac{nx}{1+n^2x^2}dx = [\\frac{1}{2n}\\ln(1+n^2x^2)]_0^1 = \\frac{\\ln(1+n^2)}{2n}$. As $n \\to \\infty$ this goes to $0$. But this is a case where we need to be careful about interchanging limits.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We have $f_n(x) \\to 0$ pointwise for each $x > 0$, but $\\int_0^1 f_n \\, dx = \\frac{1}{2n}\\ln(1 + n^2) \\to \\frac{1}{2}\\ln(n^2)/n \\to 0$... Actually, let\'s compute: $\\int_0^1 \\frac{nx}{1+n^2x^2}dx = [\\frac{1}{2n}\\ln(1+n^2x^2)]_0^1 = \\frac{\\ln(1+n^2)}{2n}$. As $n \\to \\infty$ this goes to $0$. But this is a case where we need to be careful about interchanging limits.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The interchange $\\frac{d}{dx}\\sum_{n=1}^{\\infty} f_n(x) = \\sum_{n=1}^{\\infty} f_n\'(x)$ is valid when:',
    options: [
      'Each $f_n$ is differentiable',
      'The series $\\sum f_n$ converges pointwise',
      'The series $\\sum f_n$ converges absolutely',
      'The series $\\sum f_n\\\'$ converges uniformly',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To differentiate a series term-by-term, we need the series of derivatives $\\sum f_n\'$ to converge uniformly (and $\\sum f_n$ to converge at least at one point). This ensures the limit of derivatives equals the derivative of the limit.',
  },
];
