import type { QuizQuestion } from './types';

export const section103Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The linearity property of line integrals states that:',
    options: [
      '$\\int f \\cdot d(a\\alpha) = a \\int f \\cdot d\\alpha
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Linearity: $\\int (af + bg) \\cdot d\\alpha = a \\int f \\cdot d\\alpha + b \\int g \\cdot d\\alpha$ for scalar constants $a, b$ and vector fields $f, g$.',
  },
      '$\\int f \\cdot d\\alpha = \\int g \\cdot d\\alpha
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linearity: $\\int (af + bg) \\cdot d\\alpha = a \\int f \\cdot d\\alpha + b \\int g \\cdot d\\alpha$ for scalar constants $a, b$ and vector fields $f, g$.',
  },
      '$\\int (af + bg) \\cdot d\\alpha = a \\int f \\cdot d\\alpha + b \\int g \\cdot d\\alpha
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linearity: $\\int (af + bg) \\cdot d\\alpha = a \\int f \\cdot d\\alpha + b \\int g \\cdot d\\alpha$ for scalar constants $a, b$ and vector fields $f, g$.',
  },
      '$\\int (f + g) \\cdot d\\alpha = \\int f \\cdot d\\alpha \\cdot \\int g \\cdot d\\alpha
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linearity: $\\int (af + bg) \\cdot d\\alpha = a \\int f \\cdot d\\alpha + b \\int g \\cdot d\\alpha$ for scalar constants $a, b$ and vector fields $f, g$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linearity: $\\int (af + bg) \\cdot d\\alpha = a \\int f \\cdot d\\alpha + b \\int g \\cdot d\\alpha$ for scalar constants $a, b$ and vector fields $f, g$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a curve $C$ is split into $C_1$ and $C_2$, the additive property gives:',
    options: [
      '$\\int_C f = \\int_{C_1} f \\cdot \\int_{C_2} f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The additive property: if $C$ is divided into $C_1$ and $C_2$, then $\\int_C f \\cdot d\\alpha = \\int_{C_1} f \\cdot d\\alpha + \\int_{C_2} f \\cdot d\\alpha$.',
  },
      '$\\int_C f = \\int_{C_1} f - \\int_{C_2} f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The additive property: if $C$ is divided into $C_1$ and $C_2$, then $\\int_C f \\cdot d\\alpha = \\int_{C_1} f \\cdot d\\alpha + \\int_{C_2} f \\cdot d\\alpha$.',
  },
      '$\\int_C f = \\max(\\int_{C_1} f, \\int_{C_2} f)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The additive property: if $C$ is divided into $C_1$ and $C_2$, then $\\int_C f \\cdot d\\alpha = \\int_{C_1} f \\cdot d\\alpha + \\int_{C_2} f \\cdot d\\alpha$.',
  },
      '$\\int_C f = \\int_{C_1} f + \\int_{C_2} f
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The additive property: if $C$ is divided into $C_1$ and $C_2$, then $\\int_C f \\cdot d\\alpha = \\int_{C_1} f \\cdot d\\alpha + \\int_{C_2} f \\cdot d\\alpha$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The additive property: if $C$ is divided into $C_1$ and $C_2$, then $\\int_C f \\cdot d\\alpha = \\int_{C_1} f \\cdot d\\alpha + \\int_{C_2} f \\cdot d\\alpha$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two paths $\\alpha$ and $\\beta$ with the same graph are called equivalent. If they trace the curve in the same direction:',
    options: [
      '$\\int f \\cdot d\\alpha = -\\int f \\cdot d\\beta
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If equivalent paths $\\alpha$ and $\\beta$ trace the same curve in the same direction (orientation-preserving), then $\\int f \\cdot d\\alpha = \\int f \\cdot d\\beta$.',
  },
      '$\\int f \\cdot d\\alpha = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If equivalent paths $\\alpha$ and $\\beta$ trace the same curve in the same direction (orientation-preserving), then $\\int f \\cdot d\\alpha = \\int f \\cdot d\\beta$.',
  },
      '$\\int f \\cdot d\\beta = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If equivalent paths $\\alpha$ and $\\beta$ trace the same curve in the same direction (orientation-preserving), then $\\int f \\cdot d\\alpha = \\int f \\cdot d\\beta$.',
  },
      '$\\int f \\cdot d\\alpha = \\int f \\cdot d\\beta
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If equivalent paths $\\alpha$ and $\\beta$ trace the same curve in the same direction (orientation-preserving), then $\\int f \\cdot d\\alpha = \\int f \\cdot d\\beta$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If equivalent paths $\\alpha$ and $\\beta$ trace the same curve in the same direction (orientation-preserving), then $\\int f \\cdot d\\alpha = \\int f \\cdot d\\beta$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If paths $\\alpha$ and $\\beta$ trace the same curve in opposite directions:',
    options: [
      '$\\int f \\cdot d\\alpha = -\\int f \\cdot d\\beta
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $\\alpha$ and $\\beta$ trace the same curve in opposite directions, then $\\int f \\cdot d\\alpha = -\\int f \\cdot d\\beta$. Reversing direction negates the integral.',
  },
      '$\\int f \\cdot d\\alpha = \\int f \\cdot d\\beta
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $\\alpha$ and $\\beta$ trace the same curve in opposite directions, then $\\int f \\cdot d\\alpha = -\\int f \\cdot d\\beta$. Reversing direction negates the integral.',
  },
      '$\\int f \\cdot d\\alpha + \\int f \\cdot d\\beta = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $\\alpha$ and $\\beta$ trace the same curve in opposite directions, then $\\int f \\cdot d\\alpha = -\\int f \\cdot d\\beta$. Reversing direction negates the integral.',
  },
      'Both integrals are zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $\\alpha$ and $\\beta$ trace the same curve in opposite directions, then $\\int f \\cdot d\\alpha = -\\int f \\cdot d\\beta$. Reversing direction negates the integral.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The change of parameter formula uses the chain rule because if $\\beta(t) = \\alpha[u(t)]$, then:',
    options: [
      '$\\beta\\'(t) = \\alpha\\'[u(t)] u\\'(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule, $\\beta\'(t) = \\alpha\'[u(t)] u\'(t)$. The sign of $u\'(t)$ determines whether the reparametrization preserves or reverses orientation.',
  },
      '$\\beta\\'(t) = \\alpha[u(t)]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule, $\\beta\'(t) = \\alpha\'[u(t)] u\'(t)$. The sign of $u\'(t)$ determines whether the reparametrization preserves or reverses orientation.',
  },
      '$\\beta\\'(t) = \\alpha\\'(t)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule, $\\beta\'(t) = \\alpha\'[u(t)] u\'(t)$. The sign of $u\'(t)$ determines whether the reparametrization preserves or reverses orientation.',
  },
      '$\\beta\\'(t) = u\\'(t)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule, $\\beta\'(t) = \\alpha\'[u(t)] u\'(t)$. The sign of $u\'(t)$ determines whether the reparametrization preserves or reverses orientation.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule, $\\beta\'(t) = \\alpha\'[u(t)] u\'(t)$. The sign of $u\'(t)$ determines whether the reparametrization preserves or reverses orientation.',
  },
];
