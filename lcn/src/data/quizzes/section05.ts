import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the multiplication relation $\\mathcal{R}_{\\text{mult}}$, commitment $V$ commits to:',
    options: [
      'Value $a
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$V = ab \\cdot G_0 + s_V H$ commits to the product of $a$ and $b$.',
  },
      'Product $ab
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$V = ab \\cdot G_0 + s_V H$ commits to the product of $a$ and $b$.',
  },
      'Value $b
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$V = ab \\cdot G_0 + s_V H$ commits to the product of $a$ and $b$.',
  },
      'Sum $a + b
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$V = ab \\cdot G_0 + s_V H$ commits to the product of $a$ and $b$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$V = ab \\cdot G_0 + s_V H$ commits to the product of $a$ and $b$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the protocol, the prover\'s first message includes:',
    options: [
      '$a$ and $b$ directly',
      'The verification equations',
      'Only the witness',
      '$S$, $T_1$, and $T_2$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The prover sends $S = s_a G_0 + s_b G_1 + s_S H$, $T_1 = (as_b + bs_a)G_0 + \\tau_1 H$, and $T_2 = s_a s_b G_0 + \\tau_2 H$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the prover\'s response, $l = a + s_a x$ is:',
    options: [
      'A polynomial evaluated at the challenge',
      'A group element',
      'A random value',
      'A hash output'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$l(x) = a + s_a x$ is a degree-1 polynomial in $x$, evaluated at the verifier\'s challenge.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many verification equations does the verifier check?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'The verifier checks two equations: $C + xS = lG_0 + rG_1 + \\mu H$ and $V + xT_1 + x^2 T_2 = lrG_0 + \\tau_x H$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The product $lr$ expands to:',
    options: [
      '$ab
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$lr = (a + s_a x)(b + s_b x) = ab + x(as_b + bs_a) + x^2 s_a s_b$.',
  },
      '$(a + b)(s_a + s_b)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$lr = (a + s_a x)(b + s_b x) = ab + x(as_b + bs_a) + x^2 s_a s_b$.',
  },
      '$ab + x(as_b + bs_a) + x^2 s_a s_b
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$lr = (a + s_a x)(b + s_b x) = ab + x(as_b + bs_a) + x^2 s_a s_b$.',
  },
      '$a^2 + b^2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$lr = (a + s_a x)(b + s_b x) = ab + x(as_b + bs_a) + x^2 s_a s_b$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$lr = (a + s_a x)(b + s_b x) = ab + x(as_b + bs_a) + x^2 s_a s_b$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'How many blinding factors does the prover draw in the first step?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'The prover draws $s_a, s_b, s_S, \\tau_1, \\tau_2$ - five blinding factors.',
  },
];
