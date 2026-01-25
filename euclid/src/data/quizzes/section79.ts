import type { QuizQuestion } from './types';

export const section79Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.15 identify as the greatest chord in a circle?',
    options: [
      'The chord perpendicular to the diameter',
      'Any chord through the center (a diameter)',
      'The chord closest to the center',
      'All chords are equal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.15 proves that the diameter is the greatest (longest) chord in a circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to III.15, among non-diameter chords, which is longer?',
    options: [
      'All non-diameter chords are equal',
      'The one farther from the center',
      'The one closer to the center',
      'It depends on the arc subtended',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.15 proves that among chords, those nearer to the center are longer than those farther away.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If chord AB is closer to the center than chord CD, then:',
    options: [
      'Cannot determine without more information',
      'AB < CD',
      'AB = CD',
      'AB > CD',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By III.15, the chord nearer to the center is the greater chord.',
  },
];
