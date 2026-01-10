import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A power series $\\sum_{n=0}^{\\infty} c_n z^n$ converges:',
    options: [
      'For all $z \\in \\mathbb{C}$',
      'Only at $z = 0$',
      'In a disk $|z| < R$ for some $0 \\leq R \\leq \\infty$ (the radius of convergence)',
      'Only for real $z$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 3.39: Every power series has a radius of convergence $R \\in [0, \\infty]$. The series converges absolutely for $|z| < R$ and diverges for $|z| > R$. Behavior at $|z| = R$ varies.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The radius of convergence $R$ of $\\sum c_n z^n$ satisfies:',
    options: [
      '$R = \\lim |c_n/c_{n+1}|$ always',
      '$1/R = \\limsup_{n \\to \\infty} |c_n|^{1/n}$',
      '$R = \\sum |c_n|$',
      '$R = 1$ always'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Hadamard formula (Theorem 3.39): $1/R = \\limsup |c_n|^{1/n}$, with $R = 0$ if $\\limsup = \\infty$ and $R = \\infty$ if $\\limsup = 0$. The ratio test formula works when the limit exists.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Inside the radius of convergence, a power series defines a function that is:',
    options: [
      'Continuous but may not be differentiable',
      'Differentiable but may not be analytic',
      'Infinitely differentiable (analytic)',
      'Bounded but may not be continuous'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Power series are infinitely differentiable inside their radius of convergence, and can be differentiated term-by-term any number of times. The function equals its Taylor series - this is what "analytic" means.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The power series $\\sum_{n=0}^{\\infty} x^n$ and its derivative $\\sum_{n=1}^{\\infty} n x^{n-1}$ have:',
    options: [
      'Different radii of convergence',
      'The same radius of convergence $R = 1$',
      'Radius $\\infty$ for both',
      'The derivative has larger radius'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Theorem 8.1: A power series and its term-by-term derivative have the same radius of convergence. For $\\sum x^n$, $R = 1$, and for $\\sum nx^{n-1}$, $R = 1$ as well.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Abel\'s theorem states that if $\\sum c_n$ converges and $f(x) = \\sum c_n x^n$ for $|x| < 1$, then:',
    options: [
      '$f$ is discontinuous at $x = 1$',
      '$\\lim_{x \\to 1^-} f(x) = \\sum c_n$',
      '$f(1) = \\sum c_n$',
      'The series diverges at $x = 1$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Abel\'s Theorem (Theorem 8.2): If $\\sum c_n$ converges to $s$, then $\\lim_{x \\to 1^-} \\sum c_n x^n = s$. This gives continuity "from the left" at the boundary when the series converges there.',
  },
];
