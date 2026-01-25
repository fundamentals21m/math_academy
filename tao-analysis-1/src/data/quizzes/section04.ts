import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the recursive definition of multiplication, $n \\times 0 = 0$ and $n \\times S(m) = n \\times m + n$. Using this, what is $3 \\times 2$?',
    options: [
      '$3 \\times 1 + 3 = (3 \\times 0 + 3) + 3 = 0 + 3 + 3 = 6$',
      '$2 \\times 3 + 2 = 8$',
      '$3 + 3 = 6$ without using the definition',
      '$3 \\times 2 = 3 + 2 = 5$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$3 \\times 2 = 3 \\times S(1) = 3 \\times 1 + 3 = (3 \\times S(0)) + 3 = (3 \\times 0 + 3) + 3 = (0 + 3) + 3 = 6$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The distributive law states that $a \\times (b + c) = a \\times b + a \\times c$. Which operations does this law connect?',
    options: [
      'Addition with itself',
      'Subtraction with multiplication',
      'Division with addition',
      'Multiplication with addition',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Distributivity connects multiplication and addition, showing how multiplication "distributes" over sums.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Using the recursive definition of multiplication, compute $4 \\times 1$.',
    correctAnswer: 4,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: '$4 \\times 1 = 4 \\times S(0) = 4 \\times 0 + 4 = 0 + 4 = 4$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To prove that multiplication is commutative ($a \\times b = b \\times a$), we need to first establish which auxiliary result?',
    options: [
      'That division is the inverse of multiplication',
      'That $0 \\times n = 0$ for all $n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The definition gives $n \\times 0 = 0$, but we need $0 \\times n = 0$ (proved by induction on $n$) before we can establish full commutativity.',
  },
      'That $a + a = 2 \\times a
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The definition gives $n \\times 0 = 0$, but we need $0 \\times n = 0$ (proved by induction on $n$) before we can establish full commutativity.',
  },
      'That subtraction is commutative',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The definition gives $n \\times 0 = 0$, but we need $0 \\times n = 0$ (proved by induction on $n$) before we can establish full commutativity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The property $a \\times 1 = a$ is called:',
    options: [
      'The zero property',
      'Associativity',
      'The multiplicative identity property',
      'Commutativity',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The number $1$ is the multiplicative identity: multiplying any number by $1$ returns that number unchanged.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Associativity of multiplication, $(a \\times b) \\times c = a \\times (b \\times c)$, is proved by:',
    options: [
      'Assuming the result and deriving a contradiction',
      'Simply rearranging symbols',
      'Using the definition of division',
      'Induction on $c$, using distributivity',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Associativity is proved by induction on $c$. The inductive step uses distributivity: $a \\times (b \\times S(c)) = a \\times (b \\times c + b) = a \\times (b \\times c) + a \\times b$.',
  },
];
