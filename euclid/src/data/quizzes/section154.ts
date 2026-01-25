import type { QuizQuestion } from './types';

export const section154Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What construction does VI.9 accomplish?',
    options: [
      'Bisecting any angle',
      'Drawing a circle through three points',
      'Cutting off a prescribed fractional part of a given line segment',
      'Constructing a square equal to a given rectangle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VI.9 shows how to cut off any prescribed part (1/3, 2/5, etc.) from a given straight line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To cut off 2/7 of line segment AB using VI.9, you would:',
    options: [
      'Draw an auxiliary line with 7 equal parts and use parallel lines to transfer the ratio',
      'Divide AB into 7 equal parts and take 2 of them',
      'This is impossible with compass and straightedge',
      'Use a compass to measure 2/7 directly',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'VI.9 uses an auxiliary line marked with the desired number of equal parts, then uses VI.2 (parallel lines) to transfer this division to the original segment.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.9 demonstrates that with compass and straightedge, we can:',
    options: [
      'Only bisect lines',
      'Divide a line into any rational fraction',
      'Trisect any angle',
      'Square the circle',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VI.9 proves any line can be divided in any rational ratio m:n. This contrasts with angle trisection or circle squaring, which are generally impossible.',
  },
];
