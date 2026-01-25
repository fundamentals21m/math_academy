import type { QuizQuestion } from './types';

export const section154Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When tossing a coin twice with equally likely outcomes, the probability of getting at least one head is:',
    options: [
      '$1/4
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The sample space is $\\{hh, ht, th, tt\\}$. The event "at least one head" is $\\{hh, ht, th\\}$, which has 3 elements out of 4. So $P = 3/4$.',
  },
      '$3/4
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sample space is $\\{hh, ht, th, tt\\}$. The event "at least one head" is $\\{hh, ht, th\\}$, which has 3 elements out of 4. So $P = 3/4$.',
  },
      '$1/2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sample space is $\\{hh, ht, th, tt\\}$. The event "at least one head" is $\\{hh, ht, th\\}$, which has 3 elements out of 4. So $P = 3/4$.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sample space is $\\{hh, ht, th, tt\\}$. The event "at least one head" is $\\{hh, ht, th\\}$, which has 3 elements out of 4. So $P = 3/4$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sample space is $\\{hh, ht, th, tt\\}$. The event "at least one head" is $\\{hh, ht, th\\}$, which has 3 elements out of 4. So $P = 3/4$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Three fair dice are rolled. What is the number of outcomes in the sample space?',
    options: [
      '$36
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each die has 6 outcomes, so the sample space for three dice has $6^3 = 216$ elements.',
  },
      '$18
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each die has 6 outcomes, so the sample space for three dice has $6^3 = 216$ elements.',
  },
      '$6
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each die has 6 outcomes, so the sample space for three dice has $6^3 = 216$ elements.',
  },
      '$216
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each die has 6 outcomes, so the sample space for three dice has $6^3 = 216$ elements.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each die has 6 outcomes, so the sample space for three dice has $6^3 = 216$ elements.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A die is thrown once. Using inclusion-exclusion, $P(\\text{even or multiple of 3})$ equals:',
    options: [
      '$P(\\text{even}) + P(\\text{mult. of 3}) - P(\\text{even and mult. of 3})
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By inclusion-exclusion: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Here $A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$.',
  },
      '$P(\\text{even}) + P(\\text{mult. of 3})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By inclusion-exclusion: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Here $A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$.',
  },
      '$P(\\text{even}) \\cdot P(\\text{mult. of 3})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By inclusion-exclusion: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Here $A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$.',
  },
      '$P(\\text{even}) - P(\\text{mult. of 3})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By inclusion-exclusion: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Here $A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By inclusion-exclusion: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Here $A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'A die is thrown once. What is the probability (as a fraction with denominator 6) that the number is even or a multiple of 3? Enter the numerator.',
    correctAnswer: 4,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: 'Even numbers: $\\{2, 4, 6\\}$. Multiples of 3: $\\{3, 6\\}$. Union: $\\{2, 3, 4, 6\\}$. Probability = $4/6$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When solving probability problems, "at random" typically means:',
    options: [
      'The outcome is predetermined',
      'The probability is unknown',
      'All outcomes are equally likely',
      'The sample space is infinite',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When objects are chosen "at random," this means equally likely outcomes. This is the classical interpretation of randomness.',
  },
];
