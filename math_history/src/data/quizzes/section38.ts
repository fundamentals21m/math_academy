import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's38-e01',
    type: 'multiple-choice',
    question: 'What is the value of $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ (the Basel problem)?',
    options: [
      '$e$',
      '$\\frac{\\pi}{4}$',
      '$\\frac{\\pi^2}{6}$',
      '$2$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Euler solved the Basel problem in 1734, showing that the sum of reciprocals of perfect squares equals $\\frac{\\pi^2}{6}$. This surprising appearance of $\\pi$ in a problem about integers was one of his most celebrated achievements.',
  },
  {
    id: 's38-e02',
    type: 'multiple-choice',
    question: 'Euler\'s identity $e^{i\\pi} + 1 = 0$ connects which five mathematical constants?',
    options: [
      '$e$, $i$, $2$, $\\pi$, and $-1$',
      '$e$, $\\pi$, $\\phi$, $1$, and $2$',
      '$\\pi$, $e$, $\\gamma$, $i$, and $1$',
      '$e$, $i$, $\\pi$, $1$, and $0$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euler\'s identity connects the five most important constants in mathematics: $e$ (base of natural logarithm), $i$ (imaginary unit), $\\pi$ (ratio of circumference to diameter), $1$ (multiplicative identity), and $0$ (additive identity).',
  },
  // Medium questions
  {
    id: 's38-m01',
    type: 'multiple-choice',
    question: 'Euler\'s formula $e^{ix} = \\cos x + i\\sin x$ was derived by:',
    options: [
      'Comparing Taylor series for both sides',
      'Geometric construction in the complex plane',
      'Differentiation of trigonometric functions',
      'Integration by parts',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Euler derived his formula by expanding $e^{ix}$ as a Taylor series and using the properties of powers of $i$ ($i^2 = -1$, $i^3 = -i$, etc.). The real terms become $\\cos x$ and the imaginary terms become $i\\sin x$.',
  },
  {
    id: 's38-m02',
    type: 'multiple-choice',
    question: 'Euler\'s product formula relates $\\sum_{n=1}^{\\infty} \\frac{1}{n^s}$ to:',
    options: [
      'An integral over the real line',
      'An infinite product over all prime numbers',
      'A finite sum of factorials',
      'Powers of $\\pi$ and $e$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euler\'s product formula states that $\\sum \\frac{1}{n^s} = \\prod_p \\frac{1}{1-p^{-s}}$ where the product is over all primes. This deep connection between additive and multiplicative structure comes from the unique prime factorization of integers.',
  },
  // Hard questions
  {
    id: 's38-h01',
    type: 'multiple-choice',
    question: 'Euler used the product formula to prove that:',
    options: [
      'The sum $\\sum 1/p$ over primes converges',
      'Every even number is a sum of two primes',
      'There are infinitely many prime numbers',
      '$\\pi$ is irrational'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Euler gave a new proof that there are infinitely many primes using his product formula. If there were only finitely many primes, the product would be finite. But the sum side diverges when $s = 1$ (harmonic series), giving a contradiction.',
  },
  {
    id: 's38-h02',
    type: 'multiple-choice',
    question: 'The Euler-Mascheroni constant $\\gamma$ is defined as the limit of:',
    options: [
      '$e - \\pi$',
      '$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$',
      '$\\lim_{n \\to \\infty} \\frac{\\ln n}{n}$',
      '$1 + \\frac{1}{2} + \\cdots + \\frac{1}{n} - \\ln n$ as $n \\to \\infty$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Euler discovered that the difference between the partial sums of the harmonic series and $\\ln n$ approaches a constant $\\gamma \\approx 0.5772$. Whether this constant is rational or irrational remains an open problem in mathematics.',
  },
];
