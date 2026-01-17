import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Parseval\'s identity (Plancherel theorem) states that:',
    options: [
      '$\\|f\\|_2^2 = |\\hat{f}(0)|^2$',
      '$\\|f\\|_2^2 = \\sum_{n=-\\infty}^\\infty |\\hat{f}(n)|^2$',
      '$\\|f\\|_2 = \\sup_n |\\hat{f}(n)|$',
      '$\\|f\\|_2 = \\int |\\hat{f}|$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Parseval: the $L^2$ norm squared equals the sum of squared Fourier coefficients.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Parseval\'s identity implies that the Fourier series of an $L^2$ function:',
    options: [
      'Always converges pointwise',
      'Converges in $L^2$ norm',
      'Diverges',
      'Converges uniformly'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Fourier series converges to $f$ in the $L^2$ sense.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a continuous $2\\pi$-periodic function, the Fourier series:',
    options: [
      'Always converges pointwise to $f$',
      'Converges pointwise at most points (Cesàro sense)',
      'Never converges',
      'Converges only at $x = 0$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Continuous functions have Cesàro-summable Fourier series. Pointwise convergence requires additional smoothness.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Riemann-Lebesgue lemma states that as $|n| \\to \\infty$:',
    options: [
      '$\\hat{f}(n) \\to \\infty$',
      '$\\hat{f}(n) \\to 0$',
      '$\\hat{f}(n) \\to 1$',
      '$\\hat{f}(n)$ oscillates'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For integrable $f$, the Fourier coefficients decay to zero as $|n| \\to \\infty$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f$ is $C^k$ (k-times continuously differentiable), then $\\hat{f}(n)$ decays like:',
    options: [
      '$O(1)$',
      '$O(1/|n|^k)$',
      '$O(e^{-|n|})$',
      '$O(|n|^k)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Smoothness of $f$ translates to faster decay of Fourier coefficients.',
  },
];
