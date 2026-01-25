import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $L = A_1 A_2 \\cdots A_k$, then the null space of $L$ contains:',
    options: [
      'Only the zero function',
      'Only the null space of $A_1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $A_i(u) = 0$, then $L(u) = 0$ because the operators commute. So $N(A_i) \\subseteq N(L)$ for each $i$.',
  },
      'The null space of each factor $A_i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $A_i(u) = 0$, then $L(u) = 0$ because the operators commute. So $N(A_i) \\subseteq N(L)$ for each $i$.',
  },
      'No functions',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $A_i(u) = 0$, then $L(u) = 0$ because the operators commute. So $N(A_i) \\subseteq N(L)$ for each $i$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The first-order operator $(D - r)$ annihilates:',
    options: [
      '$e^{-rx}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$(D - r)(e^{rx}) = re^{rx} - re^{rx} = 0$.',
  },
      '$\\sin(rx)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(D - r)(e^{rx}) = re^{rx} - re^{rx} = 0$.',
  },
      '$r^x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(D - r)(e^{rx}) = re^{rx} - re^{rx} = 0$.',
  },
      '$e^{rx}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(D - r)(e^{rx}) = re^{rx} - re^{rx} = 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$(D - r)(e^{rx}) = re^{rx} - re^{rx} = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $(D^3 - 7D + 6)y = 0$ which factors as $(D-1)(D-2)(D+3)y = 0$, the basis of solutions is:',
    options: [
      '$\\{e^x, e^{2x}, e^{3x}\\}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each factor $(D - r_k)$ contributes $e^{r_k x}$: roots $1, 2, -3$ give $e^x, e^{2x}, e^{-3x}$.',
  },
      '$\\{e^x, e^{2x}, e^{-3x}\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each factor $(D - r_k)$ contributes $e^{r_k x}$: roots $1, 2, -3$ give $e^x, e^{2x}, e^{-3x}$.',
  },
      '$\\{1, x, x^2\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each factor $(D - r_k)$ contributes $e^{r_k x}$: roots $1, 2, -3$ give $e^x, e^{2x}, e^{-3x}$.',
  },
      '$\\{\\sin x, \\cos x, e^x\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each factor $(D - r_k)$ contributes $e^{r_k x}$: roots $1, 2, -3$ give $e^x, e^{2x}, e^{-3x}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each factor $(D - r_k)$ contributes $e^{r_k x}$: roots $1, 2, -3$ give $e^x, e^{2x}, e^{-3x}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Exponentials $e^{r_1 x}, e^{r_2 x}, \\ldots, e^{r_n x}$ with distinct $r_k$ are:',
    options: [
      'Always linearly independent',
      'Always linearly dependent',
      'Equal',
      'Orthogonal',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Exponentials with distinct exponents are always linearly independent, providing a complete basis for distinct-root cases.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $L(u) = 0$, we say $L$:',
    options: [
      'Integrates $u
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The terminology is that $L$ "annihilates" $u$ when $L(u) = 0$, meaning $u$ is in the null space of $L$.',
  },
      'Differentiates $u
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The terminology is that $L$ "annihilates" $u$ when $L(u) = 0$, meaning $u$ is in the null space of $L$.',
  },
      'Factors $u
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The terminology is that $L$ "annihilates" $u$ when $L(u) = 0$, meaning $u$ is in the null space of $L$.',
  },
      'Annihilates $u
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The terminology is that $L$ "annihilates" $u$ when $L(u) = 0$, meaning $u$ is in the null space of $L$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The terminology is that $L$ "annihilates" $u$ when $L(u) = 0$, meaning $u$ is in the null space of $L$.',
  },
];
