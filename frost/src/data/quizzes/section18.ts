import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the FROST signature share formula for participant $i$?',
    options: [
      '$z_i = k_i + s_i \\cdot c
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The FROST signature share is $z_i = k_i + s_i \\cdot \\lambda_i \\cdot c$. The Lagrange coefficient $\\lambda_i$ multiplies the secret share $s_i$, converting polynomial shares to additive form during aggregation.',
  },
      '$z_i = k_i + s_i \\cdot \\lambda_i \\cdot c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The FROST signature share is $z_i = k_i + s_i \\cdot \\lambda_i \\cdot c$. The Lagrange coefficient $\\lambda_i$ multiplies the secret share $s_i$, converting polynomial shares to additive form during aggregation.',
  },
      '$z_i = k_i \\cdot \\lambda_i + s_i \\cdot c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The FROST signature share is $z_i = k_i + s_i \\cdot \\lambda_i \\cdot c$. The Lagrange coefficient $\\lambda_i$ multiplies the secret share $s_i$, converting polynomial shares to additive form during aggregation.',
  },
      '$z_i = k_i + s_i + \\lambda_i + c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The FROST signature share is $z_i = k_i + s_i \\cdot \\lambda_i \\cdot c$. The Lagrange coefficient $\\lambda_i$ multiplies the secret share $s_i$, converting polynomial shares to additive form during aggregation.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The FROST signature share is $z_i = k_i + s_i \\cdot \\lambda_i \\cdot c$. The Lagrange coefficient $\\lambda_i$ multiplies the secret share $s_i$, converting polynomial shares to additive form during aggregation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When signature shares $z_i$ are aggregated as $z = \\sum z_i$, what does the result equal?',
    options: [
      '$z = k + s \\cdot c$ (the standard Schnorr response)',
      '$z = k \\cdot s \\cdot c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Aggregating $\\sum z_i = \\sum (k_i + s_i \\cdot \\lambda_i \\cdot c) = \\sum k_i + c \\cdot \\sum s_i \\cdot \\lambda_i = k + s \\cdot c$. This is exactly the standard Schnorr response formula.',
  },
      '$z = (k + s) \\cdot c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Aggregating $\\sum z_i = \\sum (k_i + s_i \\cdot \\lambda_i \\cdot c) = \\sum k_i + c \\cdot \\sum s_i \\cdot \\lambda_i = k + s \\cdot c$. This is exactly the standard Schnorr response formula.',
  },
      '$z = k - s \\cdot c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Aggregating $\\sum z_i = \\sum (k_i + s_i \\cdot \\lambda_i \\cdot c) = \\sum k_i + c \\cdot \\sum s_i \\cdot \\lambda_i = k + s \\cdot c$. This is exactly the standard Schnorr response formula.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Aggregating $\\sum z_i = \\sum (k_i + s_i \\cdot \\lambda_i \\cdot c) = \\sum k_i + c \\cdot \\sum s_i \\cdot \\lambda_i = k + s \\cdot c$. This is exactly the standard Schnorr response formula.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does each signature share $z_i$ reveal nothing about the secret share $s_i$?',
    options: [
      'Because $s_i$ is encrypted',
      'Because $\\lambda_i$ hides the value',
      'Because the random nonce share $k_i$ masks the key share contribution',
      'Because the challenge $c$ is secret',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The random nonce share $k_i$ acts as a one-time pad, masking the contribution $s_i \\cdot \\lambda_i \\cdot c$. An observer seeing $z_i$ cannot extract $s_i$ without knowing $k_i$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the formula $z_i = k_i + s_i \\cdot \\lambda_i \\cdot c$, which values does participant $i$ NOT know?',
    options: [
      'Other participants\\' shares $s_j$ and $k_j
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each participant knows their own values ($s_i$, $k_i$, $\\lambda_i$) and public values ($c$, message). They do NOT know other participants\' secret shares $s_j$ or nonce shares $k_j$.',
  },
      'The challenge $c
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each participant knows their own values ($s_i$, $k_i$, $\\lambda_i$) and public values ($c$, message). They do NOT know other participants\' secret shares $s_j$ or nonce shares $k_j$.',
  },
      'Their own Lagrange coefficient $\\lambda_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each participant knows their own values ($s_i$, $k_i$, $\\lambda_i$) and public values ($c$, message). They do NOT know other participants\' secret shares $s_j$ or nonce shares $k_j$.',
  },
      'The message being signed',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each participant knows their own values ($s_i$, $k_i$, $\\lambda_i$) and public values ($c$, message). They do NOT know other participants\' secret shares $s_j$ or nonce shares $k_j$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Given $k_1 = 100$, $s_1 = 42$, $\\lambda_1 = 3$, $c = 5$, what is the signature share $z_1$?',
    options: [
      '$247
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$z_1 = k_1 + s_1 \\cdot \\lambda_1 \\cdot c = 100 + 42 \\cdot 3 \\cdot 5 = 100 + 630 = 730$.',
  },
      '$630
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$z_1 = k_1 + s_1 \\cdot \\lambda_1 \\cdot c = 100 + 42 \\cdot 3 \\cdot 5 = 100 + 630 = 730$.',
  },
      '$100
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$z_1 = k_1 + s_1 \\cdot \\lambda_1 \\cdot c = 100 + 42 \\cdot 3 \\cdot 5 = 100 + 630 = 730$.',
  },
      '$730
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$z_1 = k_1 + s_1 \\cdot \\lambda_1 \\cdot c = 100 + 42 \\cdot 3 \\cdot 5 = 100 + 630 = 730$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$z_1 = k_1 + s_1 \\cdot \\lambda_1 \\cdot c = 100 + 42 \\cdot 3 \\cdot 5 = 100 + 630 = 730$.',
  },
];
