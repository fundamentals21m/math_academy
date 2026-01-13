import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a 2-of-3 FROST example with signing set $S = \\{1, 2\\}$, what are the Lagrange coefficients?',
    options: [
      '$\\lambda_1 = 1, \\lambda_2 = 1$',
      '$\\lambda_1 = 2, \\lambda_2 = -1$',
      '$\\lambda_1 = 3, \\lambda_2 = -3$',
      '$\\lambda_1 = 0.5, \\lambda_2 = 0.5$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $S = \\{1, 2\\}$: $\\lambda_1 = \\frac{0-2}{1-2} = \\frac{-2}{-1} = 2$ and $\\lambda_2 = \\frac{0-1}{2-1} = \\frac{-1}{1} = -1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Given $d_1 = 100$, $e_1 = 50$, $\\rho_1 = 7$, what is the effective nonce $k_1$?',
    options: [
      '$k_1 = 150$',
      '$k_1 = 350$',
      '$k_1 = 450$',
      '$k_1 = 700$',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$k_1 = d_1 + e_1 \\cdot \\rho_1 = 100 + 50 \\cdot 7 = 100 + 350 = 450$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the example with $s_1 = 42$, $s_2 = 67$ and Lagrange coefficients $\\lambda_1 = 2$, $\\lambda_2 = -1$, what is the reconstructed secret $s$?',
    options: [
      '$s = 109$',
      '$s = 17$',
      '$s = -25$',
      '$s = 84$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$s = \\lambda_1 \\cdot s_1 + \\lambda_2 \\cdot s_2 = 2 \\cdot 42 + (-1) \\cdot 67 = 84 - 67 = 17$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'With $k = 1475$, $s = 17$, and $c = 13$, what should the aggregated response $z$ equal?',
    options: [
      '$z = 1696$',
      '$z = 1475$',
      '$z = 221$',
      '$z = 1254$',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$z = k + s \\cdot c = 1475 + 17 \\cdot 13 = 1475 + 221 = 1696$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'After computing signature shares, what critical step must each signer perform?',
    options: [
      'Share their secret key with others',
      'Store the nonces for backup',
      'Securely delete their nonces $(d_i, e_i)$ - they must never be reused',
      'Broadcast their secret share $s_i$',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'After computing $z_i$, each signer must securely delete $(d_i, e_i)$. Reusing nonces would enable key extraction attacks. This is a critical security requirement.',
  },
];
