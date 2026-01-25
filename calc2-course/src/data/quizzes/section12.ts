import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $S$ and $T$ are linear transformations from $V$ to $W$, then $(S + T)(x)$ is defined as:',
    options: [
      '$S(T(x))
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The sum of two linear transformations is defined pointwise: $(S + T)(x) = S(x) + T(x)$ for all $x$ in $V$.',
  },
      '$S(x) + T(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sum of two linear transformations is defined pointwise: $(S + T)(x) = S(x) + T(x)$ for all $x$ in $V$.',
  },
      '$S(x) \\cdot T(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sum of two linear transformations is defined pointwise: $(S + T)(x) = S(x) + T(x)$ for all $x$ in $V$.',
  },
      '$S(x + T(x))
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sum of two linear transformations is defined pointwise: $(S + T)(x) = S(x) + T(x)$ for all $x$ in $V$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The sum of two linear transformations is defined pointwise: $(S + T)(x) = S(x) + T(x)$ for all $x$ in $V$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The composition $ST$ of transformations $T: U \\to V$ and $S: V \\to W$ is defined by:',
    options: [
      '$(ST)(x) = S(T(x))
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The composition $ST$ first applies $T$, then applies $S$ to the result: $(ST)(x) = S[T(x)]$.',
  },
      '$(ST)(x) = S(x) + T(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composition $ST$ first applies $T$, then applies $S$ to the result: $(ST)(x) = S[T(x)]$.',
  },
      '$(ST)(x) = T(S(x))
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composition $ST$ first applies $T$, then applies $S$ to the result: $(ST)(x) = S[T(x)]$.',
  },
      '$(ST)(x) = S(x)T(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composition $ST$ first applies $T$, then applies $S$ to the result: $(ST)(x) = S[T(x)]$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The composition $ST$ first applies $T$, then applies $S$ to the result: $(ST)(x) = S[T(x)]$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $T: U \\to V$ and $S: V \\to W$ are both linear, then the composition $ST$ is:',
    options: [
      'Never linear',
      'Linear only if $S = T
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 2.6 states that the composition of two linear transformations is linear. This follows from $(ST)(ax + by) = S[aT(x) + bT(y)] = a(ST)(x) + b(ST)(y)$.',
  },
      'Linear only if one is the identity',
      'Always linear',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 2.6 states that the composition of two linear transformations is linear. This follows from $(ST)(ax + by) = S[aT(x) + bT(y)] = a(ST)(x) + b(ST)(y)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The associative law for composition states:',
    options: [
      '$R(ST) = (ST)R
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Composition is associative: $R(ST) = (RS)T$. Both expressions represent applying $T$ first, then $S$, then $R$.',
  },
      '$R + ST = RS + T
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Composition is associative: $R(ST) = (RS)T$. Both expressions represent applying $T$ first, then $S$, then $R$.',
  },
      '$R(ST) = (RS)T
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Composition is associative: $R(ST) = (RS)T$. Both expressions represent applying $T$ first, then $S$, then $R$.',
  },
      '$RST = TSR
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Composition is associative: $R(ST) = (RS)T$. Both expressions represent applying $T$ first, then $S$, then $R$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Composition is associative: $R(ST) = (RS)T$. Both expressions represent applying $T$ first, then $S$, then $R$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The set $\\mathcal{L}(V, W)$ of all linear transformations from $V$ to $W$ is itself:',
    options: [
      'Not a linear space',
      'A linear space',
      'Only a subset of $V
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 2.4 states that $\\mathcal{L}(V, W)$ is a linear space with the operations of addition and scalar multiplication defined for transformations.',
  },
      'Equal to $V \\times W
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 2.4 states that $\\mathcal{L}(V, W)$ is a linear space with the operations of addition and scalar multiplication defined for transformations.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 2.4 states that $\\mathcal{L}(V, W)$ is a linear space with the operations of addition and scalar multiplication defined for transformations.',
  },
];
