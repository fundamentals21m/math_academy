import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the Division Theorem guarantee about dividing $b$ by $a$ (with $a > 0$)?',
    options: [
      'There exist $q$ and $r$ with $b = aq + r$ and $r \\leq a
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Division Theorem states that for $a > 0$, we can write $b = aq + r$ where the remainder $r$ satisfies $0 \\leq r < a$.',
  },
      'There exists a unique $q$ with $b = aq
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Division Theorem states that for $a > 0$, we can write $b = aq + r$ where the remainder $r$ satisfies $0 \\leq r < a$.',
  },
      'The remainder is always 0',
      'There exist unique $q$ and $r$ with $b = aq + r$ and $0 \\leq r < a
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Division Theorem states that for $a > 0$, we can write $b = aq + r$ where the remainder $r$ satisfies $0 \\leq r < a$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Division Theorem states that for $a > 0$, we can write $b = aq + r$ where the remainder $r$ satisfies $0 \\leq r < a$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Using the Division Theorem, what is the remainder when 175 is divided by 11?',
    correctAnswer: 10,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$175 = 11 \\times 15 + 10$, so the remainder is 10.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does $a \\mid b$ mean?',
    options: [
      '$a$ divides $b$ (there exists $k$ such that $ak = b$)',
      '$a$ is less than $b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The notation $a \\mid b$ means "$a$ divides $b$", i.e., $b = ak$ for some integer $k$.',
  },
      '$b$ divides $a
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation $a \\mid b$ means "$a$ divides $b$", i.e., $b = ak$ for some integer $k$.',
  },
      '$a$ and $b$ share no common factors',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation $a \\mid b$ means "$a$ divides $b$", i.e., $b = ak$ for some integer $k$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Compute $\\gcd(171, 30)$ using the Euclidean Algorithm.',
    correctAnswer: 3,
    numericRange: { min: 1, max: 30, precision: 0 },
    difficulty: 'medium',
    explanation: '$171 = 5 \\times 30 + 21$, $30 = 1 \\times 21 + 9$, $21 = 2 \\times 9 + 3$, $9 = 3 \\times 3 + 0$. So $\\gcd(171, 30) = 3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Two integers $a$ and $b$ are relatively prime if:',
    options: [
      '$\\gcd(a, b) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two integers are relatively prime (coprime) if their greatest common divisor is 1.',
  },
      '$a$ and $b$ are both prime numbers',
      '$\\gcd(a, b) = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two integers are relatively prime (coprime) if their greatest common divisor is 1.',
  },
      '$a$ divides $b$ or $b$ divides $a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two integers are relatively prime (coprime) if their greatest common divisor is 1.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two integers are relatively prime (coprime) if their greatest common divisor is 1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The GCD can always be expressed as a linear combination. If $\\gcd(a, b) = d$, then:',
    options: [
      '$d = a - b
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Extended Euclidean Algorithm shows that $\\gcd(a, b) = as + bt$ for some integers $s$ and $t$.',
  },
      '$d = ab
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Extended Euclidean Algorithm shows that $\\gcd(a, b) = as + bt$ for some integers $s$ and $t$.',
  },
      '$d = as + bt$ for some integers $s, t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Extended Euclidean Algorithm shows that $\\gcd(a, b) = as + bt$ for some integers $s$ and $t$.',
  },
      '$d = a + b
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Extended Euclidean Algorithm shows that $\\gcd(a, b) = as + bt$ for some integers $s$ and $t$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Extended Euclidean Algorithm shows that $\\gcd(a, b) = as + bt$ for some integers $s$ and $t$.',
  },
];
