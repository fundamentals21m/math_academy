import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In any linear space, how many zero elements exist?',
    options: [
      'None',
      'At least one',
      'Exactly one',
      'Infinitely many',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 1.1 proves that in any linear space there is one and only one zero element. If there were two, say $O_1$ and $O_2$, then $O_1 = O_1 + O_2 = O_2$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $0 \\cdot x = z$ for an element $x$ in a linear space, what is $z$?',
    options: [
      '$x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Theorem 1.3(a) states that $0 \\cdot x = 0$ (the zero element) for any element $x$ in a linear space. This follows from $z + z = (0 + 0)x = 0 \\cdot x = z$, so $z = 0$.',
  },
      '$0$ (the zero element)',
      '$-x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 1.3(a) states that $0 \\cdot x = 0$ (the zero element) for any element $x$ in a linear space. This follows from $z + z = (0 + 0)x = 0 \\cdot x = z$, so $z = 0$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 1.3(a) states that $0 \\cdot x = 0$ (the zero element) for any element $x$ in a linear space. This follows from $z + z = (0 + 0)x = 0 \\cdot x = z$, so $z = 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Theorem 1.3(a) states that $0 \\cdot x = 0$ (the zero element) for any element $x$ in a linear space. This follows from $z + z = (0 + 0)x = 0 \\cdot x = z$, so $z = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $ax = 0$ in a linear space, what can we conclude?',
    options: [
      '$x = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(d) states that if $ax = 0$, then either $a = 0$ or $x = 0$ (or both). This is analogous to the zero product property for real numbers.',
  },
      '$a = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(d) states that if $ax = 0$, then either $a = 0$ or $x = 0$ (or both). This is analogous to the zero product property for real numbers.',
  },
      'Both $a = 0$ and $x = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(d) states that if $ax = 0$, then either $a = 0$ or $x = 0$ (or both). This is analogous to the zero product property for real numbers.',
  },
      'Either $a = 0$ or $x = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(d) states that if $ax = 0$, then either $a = 0$ or $x = 0$ (or both). This is analogous to the zero product property for real numbers.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(d) states that if $ax = 0$, then either $a = 0$ or $x = 0$ (or both). This is analogous to the zero product property for real numbers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $ax = ay$ and $a \\neq 0$, what can we conclude?',
    options: [
      '$a = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(e) states that if $ax = ay$ and $a \\neq 0$, then $x = y$. This is the cancellation law for scalar multiplication.',
  },
      '$x = -y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(e) states that if $ax = ay$ and $a \\neq 0$, then $x = y$. This is the cancellation law for scalar multiplication.',
  },
      'Nothing',
      '$x = y
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(e) states that if $ax = ay$ and $a \\neq 0$, then $x = y$. This is the cancellation law for scalar multiplication.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(e) states that if $ax = ay$ and $a \\neq 0$, then $x = y$. This is the cancellation law for scalar multiplication.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is $(-a)x$ equal to in a linear space?',
    options: [
      'Both $-(ax)$ and $a(-x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(c) states that $(-a)x = -(ax) = a(-x)$. All three expressions represent the same element, which is the negative of $ax$.',
  },
      '$ax
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(c) states that $(-a)x = -(ax) = a(-x)$. All three expressions represent the same element, which is the negative of $ax$.',
  },
      '$a(-x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(c) states that $(-a)x = -(ax) = a(-x)$. All three expressions represent the same element, which is the negative of $ax$.',
  },
      '$-(ax)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(c) states that $(-a)x = -(ax) = a(-x)$. All three expressions represent the same element, which is the negative of $ax$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 1.3(c) states that $(-a)x = -(ax) = a(-x)$. All three expressions represent the same element, which is the negative of $ax$.',
  },
];
