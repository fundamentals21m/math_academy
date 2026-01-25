import type { QuizQuestion } from './types';

export const section147Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does VI.2 prove about a line drawn parallel to the base of a triangle?',
    options: [
      'It cuts the two sides proportionally',
      'It creates equal triangles',
      'It bisects the triangle',
      'It creates a congruent triangle',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VI.2 states that a line parallel to the base of a triangle cuts the other two sides proportionally.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In triangle ABC, line DE is parallel to BC, with D on AB and E on AC. If AD = 3, DB = 6, and AE = 4, what is EC?',
    options: [
      '2',
      '4',
      '8',
      '6',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By VI.2, AD:DB = AE:EC. So 3:6 = 4:EC, giving EC = 8.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.2 also proves the converse: if a line divides two sides proportionally, then:',
    options: [
      'The triangle has equal angles',
      'The line is perpendicular to the base',
      'The triangle is isosceles',
      'The line is parallel to the third side (the base)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The converse of VI.2 states that if a line cuts two sides of a triangle proportionally, it must be parallel to the third side.',
  },
];
