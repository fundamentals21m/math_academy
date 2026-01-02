import type { QuizQuestion } from './types';

export const section90Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.26 proves that in equal circles, equal angles (whether central or inscribed) stand on:',
    options: [
      'Equal chords',
      'Equal arcs',
      'Equal radii',
      'Equal diameters'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.26 proves that in equal circles, equal central angles (or equal inscribed angles) stand on equal arcs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If two circles have equal radii, and central angle α in one equals central angle β in the other, then:',
    options: [
      'The arcs are proportional to the radii',
      'The arcs are equal',
      'The chords are perpendicular',
      'The circles are concentric'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In equal circles (same radius), equal central angles cut off equal arcs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'This proposition begins a sequence relating angles, arcs, and chords. The key insight is:',
    options: [
      'Angles and arcs are independent',
      'Angles determine arcs in circles of the same size',
      'Chords are always proportional to angles',
      'Inscribed angles are irrelevant'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.26-29 establish the connections between equal angles and equal arcs in equal circles.',
  },
];
