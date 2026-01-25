import type { QuizQuestion } from './types';

export const section146Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does VI.1 establish about triangles and parallelograms with the same height?',
    options: [
      'Their areas are to one another as their bases',
      'They have equal areas',
      'Their bases must be equal',
      'They are similar figures',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VI.1 proves that triangles and parallelograms with equal heights have areas proportional to their bases.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two triangles have the same height. Triangle A has base 6 and Triangle B has base 9. According to VI.1, the ratio of their areas is:',
    options: [
      '1:1 (equal areas)',
      '9:6 (or 3:2)',
      '36:81 (squares of bases)',
      '6:9 (or 2:3)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By VI.1, Area(A):Area(B) = Base(A):Base(B) = 6:9 = 2:3.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.1 is foundational for Book VI because it:',
    options: [
      'Proves all triangles are similar',
      'Shows that all parallelograms are equal',
      'Connects the theory of proportion (Book V) to the measurement of plane figures',
      'Establishes the Pythagorean theorem',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'VI.1 is the crucial bridge linking the abstract theory of ratios from Book V to geometric measurements, enabling all subsequent results in Book VI.',
  },
];
