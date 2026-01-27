import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which property is NOT one of the field axioms for real numbers?',
    options: [
      'Commutativity of addition',
      'Distributive law',
      'Existence of multiplicative inverses for all real numbers',
      'Associativity of multiplication'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Zero does not have a multiplicative inverse. The field axiom states that every nonzero real number has a multiplicative inverse.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the completeness axiom (least upper bound property) guarantee?',
    options: [
      'Every set has a maximum',
      'The real line has no gaps',
      'Every real number is rational',
      'Every nonempty set bounded above has a supremum'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The completeness axiom states that every nonempty set of real numbers bounded above has a least upper bound (supremum).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $a < b$ and $c > 0$, what can we conclude?',
    options: [
      '$ac < bc$',
      '$ac > bc$',
      '$ac = bc$',
      'Cannot determine without knowing $a$ and $b$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Multiplying both sides of an inequality by a positive number preserves the direction: $ac < bc$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the supremum of the set $\\{x \\in \\mathbb{R} : x^2 < 2\\}$?',
    options: [
      '$1$',
      '$\\sqrt{2}$',
      '$2$',
      'Does not exist'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The set is the open interval $(-\\sqrt{2}, \\sqrt{2})$. Its supremum is $\\sqrt{2}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $|{-5}|$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'The absolute value of $-5$ is $5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following is an order axiom property?',
    options: [
      '$a \\cdot 0 = 0$ for all $a$',
      '$a + a = 2a$ for all $a$',
      'For any $a, b$, either $a < b$, $a = b$, or $a > b$',
      '$a + (-a) = 0$ for all $a$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Trichotomy (exactly one of $a < b$, $a = b$, $a > b$ holds) is an order axiom.',
  },
];
