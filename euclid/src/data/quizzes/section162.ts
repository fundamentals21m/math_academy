import type { QuizQuestion } from './types';

export const section162Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.17 states: If three lines are proportional (A:B = B:C), then:',
    options: [
      'The rectangle on A and C equals the square on B',
      'The sum A + C equals 2B',
      'A, B, C form a right triangle',
      'All three lines are equal'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VI.17 proves that for three proportional lines (continued proportion), the rectangle on the extremes equals the square on the mean.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If lines of length 4, 6, and 9 are in continued proportion, what is the area of the rectangle on the extremes?',
    options: [
      '24',
      '36',
      '54',
      '13'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '4:6 = 6:9 (both equal 2:3). Rectangle on extremes = 4 × 9 = 36. Square on mean = 6^2 = 36. They are equal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.17 is a special case of VI.16 where:',
    options: [
      'All four lines are equal',
      'The two middle terms (means) are equal',
      'The proportion is inverted',
      'The lines form a right angle'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In A:B = B:C, we have A:B = C:D with B = C (middle terms equal). So the rectangle B × C becomes B × B = B^2.',
  },
];
