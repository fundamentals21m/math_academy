import type { QuizQuestion } from './types';

export const section157Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two events $A$ and $B$ are independent if and only if:',
    options: [
      '$P(A \\cup B) = P(A) + P(B)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Independence is defined by the factorization $P(A \\cap B) = P(A) \\cdot P(B)$. This means knowing one event occurred does not change the probability of the other.',
  },
      '$P(A \\cap B) = P(A) \\cdot P(B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Independence is defined by the factorization $P(A \\cap B) = P(A) \\cdot P(B)$. This means knowing one event occurred does not change the probability of the other.',
  },
      '$A \\cap B = \\varnothing
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Independence is defined by the factorization $P(A \\cap B) = P(A) \\cdot P(B)$. This means knowing one event occurred does not change the probability of the other.',
  },
      '$P(A) = P(B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Independence is defined by the factorization $P(A \\cap B) = P(A) \\cdot P(B)$. This means knowing one event occurred does not change the probability of the other.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Independence is defined by the factorization $P(A \\cap B) = P(A) \\cdot P(B)$. This means knowing one event occurred does not change the probability of the other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ are independent and $P(B) \\neq 0$, then $P(A \\mid B)$ equals:',
    options: [
      '$P(A)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If independent: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A) \\cdot P(B)}{P(B)} = P(A)$. Knowing $B$ does not change $P(A)$.',
  },
      '$P(B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If independent: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A) \\cdot P(B)}{P(B)} = P(A)$. Knowing $B$ does not change $P(A)$.',
  },
      '$P(A) + P(B)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If independent: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A) \\cdot P(B)}{P(B)} = P(A)$. Knowing $B$ does not change $P(A)$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If independent: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A) \\cdot P(B)}{P(B)} = P(A)$. Knowing $B$ does not change $P(A)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If independent: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A) \\cdot P(B)}{P(B)} = P(A)$. Knowing $B$ does not change $P(A)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ are disjoint with $P(A), P(B) > 0$, are they independent?',
    options: [
      'Yes, disjoint events are always independent',
      'Only if $P(A) = P(B)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Disjoint means $A \\cap B = \\varnothing$, so $P(A \\cap B) = 0$. But $P(A) \\cdot P(B) > 0$. Since $0 \\neq P(A) \\cdot P(B)$, they cannot be independent.',
  },
      'Only if $P(A \\cup B) = 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Disjoint means $A \\cap B = \\varnothing$, so $P(A \\cap B) = 0$. But $P(A) \\cdot P(B) > 0$. Since $0 \\neq P(A) \\cdot P(B)$, they cannot be independent.',
  },
      'No, disjoint events with positive probability cannot be independent',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Disjoint means $A \\cap B = \\varnothing$, so $P(A \\cap B) = 0$. But $P(A) \\cdot P(B) > 0$. Since $0 \\neq P(A) \\cdot P(B)$, they cannot be independent.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For three events to be mutually independent, how many equations must hold?',
    options: [
      '1',
      '3',
      '7',
      '4'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $A, B, C$: three pairwise conditions $P(A \\cap B) = P(A)P(B)$, etc., plus $P(A \\cap B \\cap C) = P(A)P(B)P(C)$. Total: 4 equations.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ are independent, then $A$ and $B\'$ are:',
    options: [
      'Never independent',
      'Always disjoint',
      'Independent',
      'Equal in probability',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $A$ and $B$ are independent, then $A$ and $B\'$, $A\'$ and $B$, and $A\'$ and $B\'$ are all independent pairs.',
  },
];
