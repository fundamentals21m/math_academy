import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's44-e01',
    type: 'multiple-choice',
    question: 'Elliptic integrals originally arose from which problem?',
    options: [
      'Computing the area of a circle',
      'Solving quadratic equations',
      'Finding the arc length of an ellipse',
      'Finding prime numbers'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Elliptic integrals got their name from the problem of computing the arc length of an ellipse. This integral cannot be expressed using elementary functions like polynomials, exponentials, or trigonometric functions.',
  },
  {
    id: 's44-e02',
    type: 'multiple-choice',
    question: 'Legendre classified all elliptic integrals into how many standard forms?',
    options: [
      'Infinitely many forms',
      'Two (first and second kind)',
      'One universal form',
      'Three (first, second, and third kind)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Legendre showed that every elliptic integral can be reduced to a combination of three standard types: the first kind (involving $1/\\sqrt{1-k^2\\sin^2\\theta}$), the second kind (involving $\\sqrt{1-k^2\\sin^2\\theta}$), and the third kind (with an additional parameter).',
  },
  // Medium questions
  {
    id: 's44-m01',
    type: 'multiple-choice',
    question: 'The period of a pendulum with large amplitude involves:',
    options: [
      'An elliptic integral of the first kind',
      'Only elementary functions',
      'Complex numbers',
      'Prime factorization',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'For small oscillations, the period formula $T = 2\\pi\\sqrt{L/g}$ suffices. But for large swings, the exact period requires an elliptic integral of the first kind, $K(k)$, where $k = \\sin(\\theta_0/2)$ depends on the maximum angle.',
  },
  {
    id: 's44-m02',
    type: 'multiple-choice',
    question: 'The addition theorem for elliptic integrals is analogous to:',
    options: [
      'The product rule for derivatives',
      'Trigonometric addition formulas like $\\sin(a+b)$',
      'The quadratic formula',
      'Euler\'s formula $e^{i\\theta}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euler discovered that elliptic integrals satisfy addition theorems: if $u = F(\\phi_1, k)$ and $v = F(\\phi_2, k)$, then $u + v = F(\\phi_3, k)$ for some $\\phi_3$ given by a formula. This parallels how $\\arcsin(a) + \\arcsin(b) = \\arcsin(c)$ via the sine addition formula.',
  },
  // Hard questions
  {
    id: 's44-h01',
    type: 'multiple-choice',
    question: 'The revolutionary insight of Abel and Jacobi was to:',
    options: [
      'Show elliptic integrals equal $\\pi$',
      'Prove elliptic integrals are transcendental',
      'Invert elliptic integrals to create elliptic functions',
      'Reduce elliptic integrals to logarithms'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Abel and Jacobi realized that instead of studying elliptic integrals directly, one should invert them—just as sine is the inverse of arcsine. The resulting elliptic functions have beautiful properties (like double periodicity) that the integrals lack.',
  },
  {
    id: 's44-h02',
    type: 'multiple-choice',
    question: 'Why can\'t the arc length of an ellipse be expressed with elementary functions?',
    options: [
      'Archimedes proved it impossible',
      'Ellipses are too complicated geometrically',
      'The formula requires imaginary numbers',
      'The integral involves $\\sqrt{1-k^2\\sin^2\\theta}$ which has no elementary antiderivative'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The arc length integral for an ellipse involves $\\sqrt{1-k^2\\sin^2\\theta}$, and this integrand has no antiderivative in terms of elementary functions (polynomials, exponentials, logarithms, trigonometric functions, and their compositions). This was rigorously proved using differential Galois theory.',
  },
];
