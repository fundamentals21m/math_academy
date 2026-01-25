import type { QuizQuestion } from './types';

export const section156Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The conditional probability of $A$ given $B$ is defined as:',
    options: [
      '$P(A \\mid B) = P(A) + P(B)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Conditional probability is defined as $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, provided $P(B) \\neq 0$.',
  },
      '$P(A \\mid B) = P(A \\cap B) / P(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Conditional probability is defined as $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, provided $P(B) \\neq 0$.',
  },
      '$P(A \\mid B) = P(A) / P(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Conditional probability is defined as $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, provided $P(B) \\neq 0$.',
  },
      '$P(A \\mid B) = P(A \\cup B) / P(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Conditional probability is defined as $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, provided $P(B) \\neq 0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Conditional probability is defined as $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$, provided $P(B) \\neq 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The multiplication rule states that $P(A \\cap B)$ equals:',
    options: [
      '$P(A) \\cdot P(B)$ always',
      '$P(A) + P(B)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The multiplication rule: $P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$.',
  },
      '$P(B) \\cdot P(A \\mid B)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The multiplication rule: $P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$.',
  },
      '$P(A) - P(B)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The multiplication rule: $P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The multiplication rule: $P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A die shows an even number. What is $P(\\text{divisible by 3} \\mid \\text{even})$?',
    options: [
      '$1/6
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Even = $\\{2, 4, 6\\}$, divisible by 3 = $\\{3, 6\\}$. Intersection = $\\{6\\}$. $P(\\text{div. 3} \\mid \\text{even}) = (1/6)/(3/6) = 1/3$.',
  },
      '$1/2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Even = $\\{2, 4, 6\\}$, divisible by 3 = $\\{3, 6\\}$. Intersection = $\\{6\\}$. $P(\\text{div. 3} \\mid \\text{even}) = (1/6)/(3/6) = 1/3$.',
  },
      '$1/3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Even = $\\{2, 4, 6\\}$, divisible by 3 = $\\{3, 6\\}$. Intersection = $\\{6\\}$. $P(\\text{div. 3} \\mid \\text{even}) = (1/6)/(3/6) = 1/3$.',
  },
      '$2/3
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Even = $\\{2, 4, 6\\}$, divisible by 3 = $\\{3, 6\\}$. Intersection = $\\{6\\}$. $P(\\text{div. 3} \\mid \\text{even}) = (1/6)/(3/6) = 1/3$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Even = $\\{2, 4, 6\\}$, divisible by 3 = $\\{3, 6\\}$. Intersection = $\\{6\\}$. $P(\\text{div. 3} \\mid \\text{even}) = (1/6)/(3/6) = 1/3$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $P(B) > 0$, then $P(\\cdot \\mid B)$ as a function of events:',
    options: [
      'Is not a probability measure',
      'Always equals $P(\\cdot)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For fixed $B$ with $P(B) > 0$, the function $P(\\cdot \\mid B)$ satisfies all axioms of a probability measure: nonnegativity, $P(B \\mid B) = 1$, and additivity.',
  },
      'Is undefined for all events',
      'Is itself a probability measure',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For fixed $B$ with $P(B) > 0$, the function $P(\\cdot \\mid B)$ satisfies all axioms of a probability measure: nonnegativity, $P(B \\mid B) = 1$, and additivity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Conditioning on event $B$ is equivalent to:',
    options: [
      'Changing the sample space to $B$ and rescaling probabilities by $1/P(B)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Conditioning restricts attention to $B$ as the new sample space and rescales probabilities by dividing by $P(B)$ so that $B$ has probability 1.',
  },
      'Multiplying all probabilities by $P(B)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Conditioning restricts attention to $B$ as the new sample space and rescales probabilities by dividing by $P(B)$ so that $B$ has probability 1.',
  },
      'Ignoring event $B$ entirely',
      'Setting $P(B) = 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Conditioning restricts attention to $B$ as the new sample space and rescales probabilities by dividing by $P(B)$ so that $B$ has probability 1.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Conditioning restricts attention to $B$ as the new sample space and rescales probabilities by dividing by $P(B)$ so that $B$ has probability 1.',
  },
];
