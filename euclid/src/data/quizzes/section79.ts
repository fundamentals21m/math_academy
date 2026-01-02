import type { QuizQuestion } from './types';

export const section79Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.15 identify as the greatest chord in a circle?',
    options: [
      'Any chord through the center (a diameter)',
      'The chord perpendicular to the diameter',
      'The chord closest to the center',
      'All chords are equal'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'III.15 proves that the diameter is the greatest (longest) chord in a circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to III.15, among non-diameter chords, which is longer?',
    options: [
      'The one closer to the center',
      'The one farther from the center',
      'All non-diameter chords are equal',
      'It depends on the arc subtended'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'III.15 proves that among chords, those nearer to the center are longer than those farther away.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If chord AB is closer to the center than chord CD, then:',
    options: [
      'AB > CD',
      'AB < CD',
      'AB = CD',
      'Cannot determine without more information'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By III.15, the chord nearer to the center is the greater chord.',
  },
];
