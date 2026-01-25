import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to the transformation theorem, how can additive shares $k_i$ be converted to polynomial shares $\\tilde{k}_i$?',
    options: [
      '$\\tilde{k}_i = k_i + \\lambda_i
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To convert additive shares to polynomial shares, divide by the Lagrange coefficient: $\\tilde{k}_i = k_i / \\lambda_i$. This works because when reconstructed via $\\sum \\tilde{k}_i \\cdot \\lambda_i$, the coefficients cancel.',
  },
      '$\\tilde{k}_i = k_i / \\lambda_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To convert additive shares to polynomial shares, divide by the Lagrange coefficient: $\\tilde{k}_i = k_i / \\lambda_i$. This works because when reconstructed via $\\sum \\tilde{k}_i \\cdot \\lambda_i$, the coefficients cancel.',
  },
      '$\\tilde{k}_i = k_i \\cdot \\lambda_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To convert additive shares to polynomial shares, divide by the Lagrange coefficient: $\\tilde{k}_i = k_i / \\lambda_i$. This works because when reconstructed via $\\sum \\tilde{k}_i \\cdot \\lambda_i$, the coefficients cancel.',
  },
      '$\\tilde{k}_i = k_i - \\lambda_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To convert additive shares to polynomial shares, divide by the Lagrange coefficient: $\\tilde{k}_i = k_i / \\lambda_i$. This works because when reconstructed via $\\sum \\tilde{k}_i \\cdot \\lambda_i$, the coefficients cancel.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To convert additive shares to polynomial shares, divide by the Lagrange coefficient: $\\tilde{k}_i = k_i / \\lambda_i$. This works because when reconstructed via $\\sum \\tilde{k}_i \\cdot \\lambda_i$, the coefficients cancel.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What fundamental property of Lagrange coefficients makes the share conversion theorem work?',
    options: [
      'They are always positive integers',
      'They are always less than the secret',
      'They are always prime numbers',
      'They sum to 1: $\\sum_{i \\in S} \\lambda_i = 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficients for any set $S$ sum to 1: $\\sum_{i \\in S} \\lambda_i = 1$. This follows from the fact that the constant polynomial 1 interpolates through points $(x_i, 1)$ for all $i$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficients for any set $S$ sum to 1: $\\sum_{i \\in S} \\lambda_i = 1$. This follows from the fact that the constant polynomial 1 interpolates through points $(x_i, 1)$ for all $i$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To convert polynomial shares $s_i$ to additive shares $\\tilde{s}_i$, which formula is correct?',
    options: [
      '$\\tilde{s}_i = s_i / \\lambda_i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Polynomial to additive conversion uses multiplication: $\\tilde{s}_i = s_i \\cdot \\lambda_i$. These form additive shares because $\\sum_i \\tilde{s}_i = \\sum_i s_i \\cdot \\lambda_i = s$ (the polynomial reconstruction formula).',
  },
      '$\\tilde{s}_i = s_i + \\lambda_i
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial to additive conversion uses multiplication: $\\tilde{s}_i = s_i \\cdot \\lambda_i$. These form additive shares because $\\sum_i \\tilde{s}_i = \\sum_i s_i \\cdot \\lambda_i = s$ (the polynomial reconstruction formula).',
  },
      '$\\tilde{s}_i = s_i \\cdot \\lambda_i
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial to additive conversion uses multiplication: $\\tilde{s}_i = s_i \\cdot \\lambda_i$. These form additive shares because $\\sum_i \\tilde{s}_i = \\sum_i s_i \\cdot \\lambda_i = s$ (the polynomial reconstruction formula).',
  },
      '$\\tilde{s}_i = s_i - \\lambda_i
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial to additive conversion uses multiplication: $\\tilde{s}_i = s_i \\cdot \\lambda_i$. These form additive shares because $\\sum_i \\tilde{s}_i = \\sum_i s_i \\cdot \\lambda_i = s$ (the polynomial reconstruction formula).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Polynomial to additive conversion uses multiplication: $\\tilde{s}_i = s_i \\cdot \\lambda_i$. These form additive shares because $\\sum_i \\tilde{s}_i = \\sum_i s_i \\cdot \\lambda_i = s$ (the polynomial reconstruction formula).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If participants $\\{1, 2, 3\\}$ have Lagrange coefficients $\\lambda_1 = 3$, $\\lambda_2 = -3$, $\\lambda_3 = 1$, what is their sum?',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1$. This confirms the fundamental property that Lagrange coefficients always sum to 1.',
  },
      '$3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1$. This confirms the fundamental property that Lagrange coefficients always sum to 1.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1$. This confirms the fundamental property that Lagrange coefficients always sum to 1.',
  },
      '$7
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1$. This confirms the fundamental property that Lagrange coefficients always sum to 1.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\lambda_1 + \\lambda_2 + \\lambda_3 = 3 + (-3) + 1 = 1$. This confirms the fundamental property that Lagrange coefficients always sum to 1.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why do converted polynomial shares $\\tilde{k}_i = k_i / \\lambda_i$ depend on the signing set $S$?',
    options: [
      'Because $k_i$ changes based on the signing set',
      'Because the conversion formula is different for each set',
      'Because the hash function depends on $S
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficient $\\lambda_i$ for participant $i$ depends on which other participants are in the signing set $S$. Different signing sets produce different $\\lambda_i$ values, and thus different converted shares.',
  },
      'Because Lagrange coefficients $\\lambda_i$ depend on which participants are in $S
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficient $\\lambda_i$ for participant $i$ depends on which other participants are in the signing set $S$. Different signing sets produce different $\\lambda_i$ values, and thus different converted shares.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Lagrange coefficient $\\lambda_i$ for participant $i$ depends on which other participants are in the signing set $S$. Different signing sets produce different $\\lambda_i$ values, and thus different converted shares.',
  },
];
