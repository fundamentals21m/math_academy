import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If you roll a fair die, what is the probability of getting a 4?',
    options: [
      '$\\frac{1}{4}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A fair die has 6 equally likely outcomes. Only one is a 4, so $P(4) = \\frac{1}{6}$.',
  },
      '$\\frac{1}{6}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A fair die has 6 equally likely outcomes. Only one is a 4, so $P(4) = \\frac{1}{6}$.',
  },
      '$\\frac{1}{2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A fair die has 6 equally likely outcomes. Only one is a 4, so $P(4) = \\frac{1}{6}$.',
  },
      '$\\frac{4}{6}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A fair die has 6 equally likely outcomes. Only one is a 4, so $P(4) = \\frac{1}{6}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A fair die has 6 equally likely outcomes. Only one is a 4, so $P(4) = \\frac{1}{6}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the probability of drawing a heart from a standard 52-card deck?',
    options: [
      '$\\frac{1}{13}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'There are 13 hearts in a 52-card deck. $P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4}$.',
  },
      '$\\frac{1}{4}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'There are 13 hearts in a 52-card deck. $P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4}$.',
  },
      '$\\frac{1}{52}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'There are 13 hearts in a 52-card deck. $P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4}$.',
  },
      '$\\frac{1}{2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'There are 13 hearts in a 52-card deck. $P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'There are 13 hearts in a 52-card deck. $P(\\text{heart}) = \\frac{13}{52} = \\frac{1}{4}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'When rolling two dice, how many ways can you get a sum of 7?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 36, precision: 0 },
    difficulty: 'medium',
    explanation: 'The pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). That\'s 6 ways.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If events $A$ and $B$ are mutually exclusive, which is true?',
    options: [
      '$P(A \\cap B) = P(A) \\cdot P(B)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For mutually exclusive events, $P(A \\cap B) = 0$, so the addition rule simplifies to $P(A \\cup B) = P(A) + P(B)$.',
  },
      '$P(A \\cup B) = P(A) \\cdot P(B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For mutually exclusive events, $P(A \\cap B) = 0$, so the addition rule simplifies to $P(A \\cup B) = P(A) + P(B)$.',
  },
      '$P(A \\cup B) = P(A) + P(B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For mutually exclusive events, $P(A \\cap B) = 0$, so the addition rule simplifies to $P(A \\cup B) = P(A) + P(B)$.',
  },
      '$P(A) = P(B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For mutually exclusive events, $P(A \\cap B) = 0$, so the addition rule simplifies to $P(A \\cup B) = P(A) + P(B)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For mutually exclusive events, $P(A \\cap B) = 0$, so the addition rule simplifies to $P(A \\cup B) = P(A) + P(B)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $P(A) = 0.3$, what is $P(A^c)$ (the complement of $A$)?',
    options: [
      '$0.7
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The complement rule: $P(A^c) = 1 - P(A) = 1 - 0.3 = 0.7$.',
  },
      '$0.3
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The complement rule: $P(A^c) = 1 - P(A) = 1 - 0.3 = 0.7$.',
  },
      '$0.09
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The complement rule: $P(A^c) = 1 - P(A) = 1 - 0.3 = 0.7$.',
  },
      '$1.3
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The complement rule: $P(A^c) = 1 - P(A) = 1 - 0.3 = 0.7$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The complement rule: $P(A^c) = 1 - P(A) = 1 - 0.3 = 0.7$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A coin is tossed 3 times. What is the probability of getting at least one head?',
    options: [
      '$\\frac{1}{8}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Use the complement: $P(\\text{at least one head}) = 1 - P(\\text{all tails}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
  },
      '$\\frac{7}{8}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Use the complement: $P(\\text{at least one head}) = 1 - P(\\text{all tails}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
  },
      '$\\frac{3}{8}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Use the complement: $P(\\text{at least one head}) = 1 - P(\\text{all tails}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
  },
      '$\\frac{1}{2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Use the complement: $P(\\text{at least one head}) = 1 - P(\\text{all tails}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Use the complement: $P(\\text{at least one head}) = 1 - P(\\text{all tails}) = 1 - \\frac{1}{8} = \\frac{7}{8}$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ are independent events, which formula applies?',
    options: [
      '$P(A \\cap B) = P(A) + P(B)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For independent events, $P(A \\cap B) = P(A) \\cdot P(B)$. Independence means one event doesn\'t affect the other.',
  },
      '$P(A \\cup B) = P(A) \\cdot P(B)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent events, $P(A \\cap B) = P(A) \\cdot P(B)$. Independence means one event doesn\'t affect the other.',
  },
      '$P(A | B) = P(A) + P(B)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent events, $P(A \\cap B) = P(A) \\cdot P(B)$. Independence means one event doesn\'t affect the other.',
  },
      '$P(A \\cap B) = P(A) \\cdot P(B)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent events, $P(A \\cap B) = P(A) \\cdot P(B)$. Independence means one event doesn\'t affect the other.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent events, $P(A \\cap B) = P(A) \\cdot P(B)$. Independence means one event doesn\'t affect the other.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'If 90% of seeds germinate, and you plant 2 seeds, what is the probability (as a decimal) that both germinate?',
    correctAnswer: 0.81,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'medium',
    explanation: 'Assuming independence: $P(\\text{both}) = 0.9 \\times 0.9 = 0.81$.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is the probability of drawing two aces in a row from a deck (without replacement)?',
    options: [
      '$\\frac{4}{52} \\times \\frac{3}{51}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'First ace: $\\frac{4}{52}$. Without replacement, second ace: $\\frac{3}{51}$. Multiply: $\\frac{4}{52} \\times \\frac{3}{51}$.',
  },
      '$\\frac{4}{52} \\times \\frac{4}{52}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'First ace: $\\frac{4}{52}$. Without replacement, second ace: $\\frac{3}{51}$. Multiply: $\\frac{4}{52} \\times \\frac{3}{51}$.',
  },
      '$\\frac{4}{52} \\times \\frac{4}{51}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'First ace: $\\frac{4}{52}$. Without replacement, second ace: $\\frac{3}{51}$. Multiply: $\\frac{4}{52} \\times \\frac{3}{51}$.',
  },
      '$\\frac{8}{52}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'First ace: $\\frac{4}{52}$. Without replacement, second ace: $\\frac{3}{51}$. Multiply: $\\frac{4}{52} \\times \\frac{3}{51}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'First ace: $\\frac{4}{52}$. Without replacement, second ace: $\\frac{3}{51}$. Multiply: $\\frac{4}{52} \\times \\frac{3}{51}$.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'In the birthday problem, with how many people is there a >50% chance that two share a birthday?',
    options: [
      '$183
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Surprisingly, with just 23 people, the probability that at least two share a birthday exceeds 50%!',
  },
      '$50
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Surprisingly, with just 23 people, the probability that at least two share a birthday exceeds 50%!',
  },
      '$365
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Surprisingly, with just 23 people, the probability that at least two share a birthday exceeds 50%!',
  },
      '$23
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Surprisingly, with just 23 people, the probability that at least two share a birthday exceeds 50%!',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Surprisingly, with just 23 people, the probability that at least two share a birthday exceeds 50%!',
  },
];
