import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many axioms define a linear space?',
    options: [
      '10',
      '6',
      '8',
      '12',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A linear space is defined by 10 axioms: 2 closure axioms, 4 axioms for addition, and 4 axioms for multiplication by scalars.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which axiom guarantees that $x + y = y + x$ for all elements in a linear space?',
    options: [
      'Associative law',
      'Distributive law',
      'Commutative law',
      'Closure axiom',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The commutative law (Axiom 3) states that $x + y = y + x$ for all $x$ and $y$ in the linear space $V$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a linear space $V$, the element $(-1)x$ satisfies which property?',
    options: [
      '$x + (-1)x = x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Axiom 6 (existence of negatives) states that for every $x$ in $V$, the element $(-1)x$ satisfies $x + (-1)x = 0$.',
  },
      '$(-1)x = x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Axiom 6 (existence of negatives) states that for every $x$ in $V$, the element $(-1)x$ satisfies $x + (-1)x = 0$.',
  },
      '$(-1)x = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Axiom 6 (existence of negatives) states that for every $x$ in $V$, the element $(-1)x$ satisfies $x + (-1)x = 0$.',
  },
      '$x + (-1)x = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Axiom 6 (existence of negatives) states that for every $x$ in $V$, the element $(-1)x$ satisfies $x + (-1)x = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Axiom 6 (existence of negatives) states that for every $x$ in $V$, the element $(-1)x$ satisfies $x + (-1)x = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a requirement for closure under scalar multiplication?',
    options: [
      'The scalar must be nonzero',
      'The result must be in $V
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Closure under scalar multiplication requires that for every $x$ in $V$ and every real number $a$ (including zero), the product $ax$ is in $V$. The scalar can be zero.',
  },
      'The scalar must be real (for a real linear space)',
      'The element $x$ must be in $V
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Closure under scalar multiplication requires that for every $x$ in $V$ and every real number $a$ (including zero), the product $ax$ is in $V$. The scalar can be zero.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Closure under scalar multiplication requires that for every $x$ in $V$ and every real number $a$ (including zero), the product $ax$ is in $V$. The scalar can be zero.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What distinguishes a complex linear space from a real linear space?',
    options: [
      'The elements are complex numbers',
      'The scalars are complex numbers',
      'There are more axioms',
      'The zero element is different',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A complex linear space uses complex numbers as scalars, while a real linear space uses real numbers as scalars. The nature of the elements can be the same in both cases.',
  },
];
