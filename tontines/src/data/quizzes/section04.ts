import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The survival function $S(t)$ represents:',
    options: [
      'The number of survivors at age $t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The survival function S(t) = P(T > t) is the probability of surviving to at least age t.',
  },
      'The probability of surviving to at least age $t
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The survival function S(t) = P(T > t) is the probability of surviving to at least age t.',
  },
      'The probability of dying before age $t
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The survival function S(t) = P(T > t) is the probability of surviving to at least age t.',
  },
      'The expected remaining lifetime',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The survival function S(t) = P(T > t) is the probability of surviving to at least age t.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which property must the survival function $S(t)$ satisfy?',
    options: [
      '$S(0) = 0$ (nobody alive at birth)',
      '$S(0) = 1$ and $S(\\infty) = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'S(0) = 1 (everyone is alive at birth), S(t) decreases as t increases, and S(∞) = 0 (everyone eventually dies).',
  },
      '$S(t)$ increases as $t$ increases',
      '$S(t) = 0.5$ for all $t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'S(0) = 1 (everyone is alive at birth), S(t) decreases as t increases, and S(∞) = 0 (everyone eventually dies).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'S(0) = 1 (everyone is alive at birth), S(t) decreases as t increases, and S(∞) = 0 (everyone eventually dies).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The cumulative death probability $F(t)$ relates to the survival function by:',
    options: [
      '$F(t) = S(t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'F(t) = P(T ≤ t) = 1 - S(t). The probability of dying by age t is the complement of surviving to age t.',
  },
      '$F(t) = S(t) + 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'F(t) = P(T ≤ t) = 1 - S(t). The probability of dying by age t is the complement of surviving to age t.',
  },
      '$F(t) = S(t) \\times t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'F(t) = P(T ≤ t) = 1 - S(t). The probability of dying by age t is the complement of surviving to age t.',
  },
      '$F(t) = 1 - S(t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'F(t) = P(T ≤ t) = 1 - S(t). The probability of dying by age t is the complement of surviving to age t.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'F(t) = P(T ≤ t) = 1 - S(t). The probability of dying by age t is the complement of surviving to age t.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Approximately what percentage of the general population survives to age 65?',
    options: [
      '85%',
      '50%',
      '65%',
      '95%',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a general population, approximately 85% survive to age 65, though this varies by country and demographic factors.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The random variable $T$ in survival analysis represents:',
    options: [
      'The tontine contribution amount',
      'The temperature at death',
      'The time of death measured from birth',
      'The total number of deaths',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In survival analysis, T is a random variable representing the time of death (measured from birth).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why are survival probabilities essential for tontine calculations?',
    options: [
      'They determine how much each person should receive based on likelihood of survival',
      'They determine tax rates',
      'They set contribution limits',
      'They are used only for marketing purposes'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Every tontine calculation depends on survival probabilities. When we ask "how much should person X receive?", the answer depends on how likely they are to be alive to receive it.',
  },
];
