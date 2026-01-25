import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the recursive definition of addition, $n + 0 = n$ and $n + S(m) = S(n + m)$. Using this definition, what is $2 + 1$?',
    options: [
      '$1 + 2 = 2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'We have $2 + 1 = 2 + S(0) = S(2 + 0) = S(2) = 3$. The recursive definition unfolds from the second argument.',
  },
      '$S(2 + 0) = S(2) = 3
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $2 + 1 = 2 + S(0) = S(2 + 0) = S(2) = 3$. The recursive definition unfolds from the second argument.',
  },
      '$S(1 + 2) = S(3) = 4
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $2 + 1 = 2 + S(0) = S(2 + 0) = S(2) = 3$. The recursive definition unfolds from the second argument.',
  },
      '$2 + S(0) = 2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $2 + 1 = 2 + S(0) = S(2 + 0) = S(2) = 3$. The recursive definition unfolds from the second argument.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We have $2 + 1 = 2 + S(0) = S(2 + 0) = S(2) = 3$. The recursive definition unfolds from the second argument.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which property of addition states that $a + b = b + a$ for all natural numbers $a$ and $b$?',
    options: [
      'Associativity',
      'Distributivity',
      'Identity',
      'Commutativity',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Commutativity means the order of operands does not matter: $a + b = b + a$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To prove commutativity of addition ($a + b = b + a$) from the Peano axioms, which technique is primarily used?',
    options: [
      'Proof by contradiction',
      'Proof by exhaustion',
      'Proof by construction',
      'Double induction (induction on both $a$ and $b$)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Proving commutativity requires induction, often as a double induction: first proving $a + 0 = 0 + a$ by induction on $a$, then proving $a + S(b) = S(b) + a$ using the induction hypothesis.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Using the recursive definition where $n + 0 = n$ and $n + S(m) = S(n + m)$, evaluate $3 + 2$.',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: '$3 + 2 = 3 + S(1) = S(3 + 1) = S(3 + S(0)) = S(S(3 + 0)) = S(S(3)) = S(4) = 5$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The cancellation law for addition states that if $a + c = b + c$, then $a = b$. Which property of natural numbers is this consequence of?',
    options: [
      'Addition is commutative',
      'Zero is the additive identity',
      'The successor function is injective',
      'Addition is associative'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cancellation ultimately relies on the injectivity of the successor function (Peano axiom): if $S(n) = S(m)$, then $n = m$. This propagates through the recursive definition of addition.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The associative law $(a + b) + c = a + (b + c)$ is proved by induction on which variable?',
    options: [
      'Only on $c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Associativity is typically proved by induction on $c$: the base case is $(a + b) + 0 = a + b = a + (b + 0)$, and the inductive step uses the recursive definition of addition.',
  },
      'Only on $a
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Associativity is typically proved by induction on $c$: the base case is $(a + b) + 0 = a + b = a + (b + 0)$, and the inductive step uses the recursive definition of addition.',
  },
      'Only on $b
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Associativity is typically proved by induction on $c$: the base case is $(a + b) + 0 = a + b = a + (b + 0)$, and the inductive step uses the recursive definition of addition.',
  },
      'On all three variables simultaneously',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Associativity is typically proved by induction on $c$: the base case is $(a + b) + 0 = a + b = a + (b + 0)$, and the inductive step uses the recursive definition of addition.',
  },
];
