import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's40-e01',
    type: 'multiple-choice',
    question: 'For which values of $s$ does the series $\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}$ converge?',
    options: [
      '$s > 1$',
      '$s > 0$',
      'All real $s$',
      '$s \\geq 1$',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The series definition of the zeta function converges only for $s > 1$ (or more generally, when the real part of $s$ is greater than 1). At $s = 1$, it becomes the harmonic series which diverges.',
  },
  {
    id: 's40-e02',
    type: 'multiple-choice',
    question: 'The Riemann Hypothesis concerns:',
    options: [
      'The location of the non-trivial zeros of the zeta function',
      'The value of $\\zeta(2)$',
      'Whether the zeta function has a pole',
      'The convergence of the Euler product',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Riemann Hypothesis conjectures that all non-trivial zeros of the zeta function have real part exactly 1/2 (i.e., they lie on the "critical line"). It remains one of the most important unsolved problems in mathematics.',
  },
  // Medium questions
  {
    id: 's40-m01',
    type: 'multiple-choice',
    question: 'The "trivial zeros" of the Riemann zeta function occur at:',
    options: [
      'The negative even integers $-2, -4, -6, \\ldots$',
      'The positive even integers $2, 4, 6, \\ldots$',
      'All integers',
      '$s = 1/2$',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The trivial zeros of $\\zeta(s)$ are at $s = -2, -4, -6, \\ldots$ (the negative even integers). These arise from the $\\sin(\\pi s/2)$ factor in the functional equation, which vanishes at these points.',
  },
  {
    id: 's40-m02',
    type: 'multiple-choice',
    question: 'Why is the Riemann Hypothesis important for number theory?',
    options: [
      'The zeros of zeta control the distribution of prime numbers',
      'It proves there are infinitely many primes',
      'It gives exact values of $\\zeta$ at integers',
      'It relates zeta to the factorial function',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Riemann showed that the prime counting function $\\pi(x)$ can be expressed in terms of the zeros of the zeta function. The location of these zeros determines how closely $\\pi(x)$ approximates the logarithmic integral—making RH crucial for prime distribution.',
  },
  // Hard questions
  {
    id: 's40-h01',
    type: 'multiple-choice',
    question: 'The value $\\zeta(-1) = -1/12$ is sometimes written as "$1 + 2 + 3 + \\cdots = -1/12$". This notation refers to:',
    options: [
      'The analytically continued value, not a convergent sum',
      'A convergent series using absolute values',
      'A limit as terms are rearranged',
      'A mistake in Euler\'s calculations',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The sum $1 + 2 + 3 + \\cdots$ diverges in the ordinary sense. The value $-1/12$ comes from analytically continuing the zeta function to $s = -1$. This is a regularized value with applications in physics, but it is not a sum in the traditional sense.',
  },
  {
    id: 's40-h02',
    type: 'multiple-choice',
    question: 'Riemann\'s functional equation relates $\\zeta(s)$ to:',
    options: [
      '$\\zeta(1-s)$',
      '$\\zeta(s+1)$',
      '$\\zeta(2s)$',
      '$\\zeta(-s)$',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Riemann\'s functional equation relates $\\zeta(s)$ and $\\zeta(1-s)$, creating a symmetry around the line $\\text{Re}(s) = 1/2$. This equation allows computation of $\\zeta(s)$ for $\\text{Re}(s) < 0$ using values for $\\text{Re}(s) > 1$.',
  },
];
