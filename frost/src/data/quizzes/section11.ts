import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'Given shares $(1, 67), (2, 108), (3, 165)$ and Lagrange coefficients $\\lambda_1 = 3$, $\\lambda_2 = -3$, $\\lambda_3 = 1$, compute $s = \\sum y_i \\lambda_i$.',
    correctAnswer: 42,
    numericRange: { min: 0, max: 500, precision: 0 },
    difficulty: 'medium',
    explanation: '$s = 67 \\cdot 3 + 108 \\cdot (-3) + 165 \\cdot 1 = 201 - 324 + 165 = 42$',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When using a different subset of shares for reconstruction, what changes?',
    options: [
      'The reconstructed secret $s$ changes',
      'The Lagrange coefficients $\\lambda_i$ change but the result $s$ is the same',
      'The polynomial degree changes',
      'Nothing changes - coefficients and result are identical',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Different subsets give different Lagrange coefficients (since $\\lambda_i$ depends on which $x_j$ are in the set), but the reconstructed secret $s = \\sum y_i \\lambda_i$ is always the same.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'For shares at $x = 1, 3, 4$, compute $\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)}$.',
    correctAnswer: 2,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: '$\\lambda_1 = \\frac{(0-3)(0-4)}{(1-3)(1-4)} = \\frac{(-3)(-4)}{(-2)(-3)} = \\frac{12}{6} = 2$',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Verify: For $\\lambda_1 = 3$, $\\lambda_2 = -3$, $\\lambda_3 = 1$, does $\\sum \\lambda_i = 1$?',
    options: [
      'No, the sum is 0',
      'No, the sum is 3',
      'Yes, $3 + (-3) + 1 = 1$',
      'Cannot determine without the shares',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1$ \\checkmark. This sum-to-one property is a useful sanity check during implementation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In FROST, why do we NOT actually reconstruct the secret $s$ using Lagrange interpolation?',
    options: [
      'Lagrange interpolation is too slow for practical use',
      'We use Lagrange coefficients to compute with shares directly, avoiding reconstruction',
      'FROST uses a different mathematical framework entirely',
      'The secret is stored encrypted on a blockchain instead',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In FROST, each participant computes $s_i \\cdot \\lambda_i$ locally with their share. The sum gives the effect of using $s$ without anyone computing $s$ directly. This is the key to threshold signing.',
  },
];
