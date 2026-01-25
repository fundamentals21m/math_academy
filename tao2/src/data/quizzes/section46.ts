import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $f$ is Riemann integrable on $[a, b]$, then $f$ is:',
    options: [
      'Not Lebesgue integrable',
      'Lebesgue integrable with the same integral value',
      'Differentiable',
      'Continuous',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Riemann integrable implies Lebesgue integrable, with equal integrals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The characteristic function of $\\mathbf{Q} \\cap [0, 1]$ is:',
    options: [
      'Riemann integrable',
      'Neither Riemann nor Lebesgue integrable',
      'Continuous',
      'Lebesgue integrable but not Riemann integrable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'This function is not Riemann integrable (upper and lower sums differ) but is Lebesgue integrable with integral 0.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Lebesgue integral is more general than the Riemann integral because:',
    options: [
      'It can integrate more functions',
      'It gives different values',
      'It only works in one dimension',
      'It requires continuity',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Lebesgue integration handles more functions, including highly discontinuous ones.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A key advantage of the Lebesgue integral is:',
    options: [
      'It is easier to compute',
      'Better limit theorems (MCT, DCT, Fatou)',
      'It only applies to bounded functions',
      'It equals the Riemann integral for continuous functions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The powerful convergence theorems make Lebesgue integration essential for analysis.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For computing integrals in practice, we usually:',
    options: [
      'Always use Lebesgue theory directly',
      'Use infinite series',
      'Use antiderivatives and Riemann techniques (which agree with Lebesgue)',
      'Avoid integration entirely',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In practice, antiderivatives work because Riemann and Lebesgue integrals agree for nice functions.',
  },
];
