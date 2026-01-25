import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 's02-q1',
    type: 'multiple-choice',
    question: 'If stage 1 of an experiment has $m$ outcomes and stage 2 has $n$ outcomes, how many total outcomes are there?',
    options: [
      '$m + n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The basic principle of counting states that if stage 1 has $m$ outcomes and stage 2 has $n$ outcomes, the total number of outcomes is $m \\cdot n$.'
  },
      '$m \\cdot n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The basic principle of counting states that if stage 1 has $m$ outcomes and stage 2 has $n$ outcomes, the total number of outcomes is $m \\cdot n$.'
  },
      '$m^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The basic principle of counting states that if stage 1 has $m$ outcomes and stage 2 has $n$ outcomes, the total number of outcomes is $m \\cdot n$.'
  },
      '$n^m
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The basic principle of counting states that if stage 1 has $m$ outcomes and stage 2 has $n$ outcomes, the total number of outcomes is $m \\cdot n$.'
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The basic principle of counting states that if stage 1 has $m$ outcomes and stage 2 has $n$ outcomes, the total number of outcomes is $m \\cdot n$.'
  },
  {
    id: 's02-q2',
    type: 'numeric',
    question: 'A committee needs a chair and secretary from 4 people (Alice, Bob, Carol, Dave). How many ways can this be done?',
    correctAnswer: 12,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Stage 1: Choose chair (4 options). Stage 2: Choose secretary from remaining (3 options). Total: $4 \\cdot 3 = 12$.'
  },
  {
    id: 's02-q3',
    type: 'multiple-choice',
    question: 'For a license plate with 3 letters followed by 4 digits (repetition allowed), which expression gives the total number of plates?',
    options: [
      '$26^3 \\cdot 10^4
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each of the 3 letter positions has 26 options, and each of the 4 digit positions has 10 options. By the multiplication principle: $26^3 \\cdot 10^4$.'
  },
      '$(26 + 10)^7
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each of the 3 letter positions has 26 options, and each of the 4 digit positions has 10 options. By the multiplication principle: $26^3 \\cdot 10^4$.'
  },
      '$26 + 26 + 26 + 10 + 10 + 10 + 10
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each of the 3 letter positions has 26 options, and each of the 4 digit positions has 10 options. By the multiplication principle: $26^3 \\cdot 10^4$.'
  },
      '$26 \\cdot 3 + 10 \\cdot 4
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each of the 3 letter positions has 26 options, and each of the 4 digit positions has 10 options. By the multiplication principle: $26^3 \\cdot 10^4$.'
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each of the 3 letter positions has 26 options, and each of the 4 digit positions has 10 options. By the multiplication principle: $26^3 \\cdot 10^4$.'
  },
  {
    id: 's02-q4',
    type: 'numeric',
    question: 'How many outcomes are there when tossing a coin twice?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Each toss has 2 outcomes. By the multiplication principle: $2 \\times 2 = 4$ outcomes (HH, HT, TH, TT).'
  },
  {
    id: 's02-q5',
    type: 'multiple-choice',
    question: 'What is another name for the "basic principle of counting"?',
    options: [
      'Division principle',
      'Addition principle',
      'Subtraction principle',
      'Multiplication principle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The basic principle of counting is also known as the multiplication principle because we multiply the number of outcomes at each stage.'
  },
  {
    id: 's02-q6',
    type: 'multiple-choice',
    question: 'A tree diagram is useful for visualizing the basic counting principle because:',
    options: [
      'It shows the average outcome',
      'It calculates probabilities automatically',
      'Each path from root to leaf represents a complete outcome',
      'It only works for coin tosses',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In a tree diagram, each branch at a node represents a possible outcome at that stage, and each path from root to leaf represents a complete outcome of the experiment.'
  }
];
