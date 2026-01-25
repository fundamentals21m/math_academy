import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $T: V \\to W$ is one-to-one (injective) if:',
    options: [
      '$T(x) = T(y)$ implies $x = y
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A function is one-to-one if different inputs give different outputs, or equivalently, if $T(x) = T(y)$ implies $x = y$.',
  },
      '$T(x) = T(y)$ for all $x, y
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is one-to-one if different inputs give different outputs, or equivalently, if $T(x) = T(y)$ implies $x = y$.',
  },
      '$T(V) = W
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is one-to-one if different inputs give different outputs, or equivalently, if $T(x) = T(y)$ implies $x = y$.',
  },
      '$T(0) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is one-to-one if different inputs give different outputs, or equivalently, if $T(x) = T(y)$ implies $x = y$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is one-to-one if different inputs give different outputs, or equivalently, if $T(x) = T(y)$ implies $x = y$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A linear transformation $T$ is one-to-one if and only if:',
    options: [
      '$T(V) = W
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 2.10 states that $T$ is one-to-one iff $N(T) = \\{0\\}$, meaning the only element mapping to zero is zero itself.',
  },
      '$N(T) = V
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 2.10 states that $T$ is one-to-one iff $N(T) = \\{0\\}$, meaning the only element mapping to zero is zero itself.',
  },
      '$T = I
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 2.10 states that $T$ is one-to-one iff $N(T) = \\{0\\}$, meaning the only element mapping to zero is zero itself.',
  },
      '$N(T) = \\{0\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 2.10 states that $T$ is one-to-one iff $N(T) = \\{0\\}$, meaning the only element mapping to zero is zero itself.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 2.10 states that $T$ is one-to-one iff $N(T) = \\{0\\}$, meaning the only element mapping to zero is zero itself.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a linear transformation $T$ is one-to-one, what can we say about its inverse $T^{-1}$?',
    options: [
      '$T^{-1}$ does not exist',
      '$T^{-1}$ exists and is linear',
      '$T^{-1}$ exists but may not be linear',
      '$T^{-1} = T
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 2.10 states that if $T$ is a one-to-one linear transformation, then $T^{-1}$ exists and is automatically linear.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 2.10 states that if $T$ is a one-to-one linear transformation, then $T^{-1}$ exists and is automatically linear.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $T: V \\to W$ is linear with $\\dim V = n$ and $T$ is one-to-one, then $\\dim T(V)$ equals:',
    options: [
      '0',
      '$n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $T$ is one-to-one, then $N(T) = \\{0\\}$ so nullity = 0. By the Nullity Plus Rank Theorem, rank = $n$, meaning $\\dim T(V) = n$.',
  },
      '$n - 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $T$ is one-to-one, then $N(T) = \\{0\\}$ so nullity = 0. By the Nullity Plus Rank Theorem, rank = $n$, meaning $\\dim T(V) = n$.',
  },
      'It depends on $W
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $T$ is one-to-one, then $N(T) = \\{0\\}$ so nullity = 0. By the Nullity Plus Rank Theorem, rank = $n$, meaning $\\dim T(V) = n$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $T$ is one-to-one, then $N(T) = \\{0\\}$ so nullity = 0. By the Nullity Plus Rank Theorem, rank = $n$, meaning $\\dim T(V) = n$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\{e_1, \\ldots, e_n\\}$ is a basis for $V$ and $T$ is one-to-one, then $\\{T(e_1), \\ldots, T(e_n)\\}$ is:',
    options: [
      'A dependent set',
      'Equal to $\\{e_1, \\ldots, e_n\\}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Theorem 2.11(d) states that if $T$ is one-to-one and $\\{e_1, \\ldots, e_n\\}$ is a basis for $V$, then $\\{T(e_1), \\ldots, T(e_n)\\}$ is a basis for $T(V)$.',
  },
      'A basis for $T(V)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Theorem 2.11(d) states that if $T$ is one-to-one and $\\{e_1, \\ldots, e_n\\}$ is a basis for $V$, then $\\{T(e_1), \\ldots, T(e_n)\\}$ is a basis for $T(V)$.',
  },
      'Always orthonormal',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Theorem 2.11(d) states that if $T$ is one-to-one and $\\{e_1, \\ldots, e_n\\}$ is a basis for $V$, then $\\{T(e_1), \\ldots, T(e_n)\\}$ is a basis for $T(V)$.',
  },
];
