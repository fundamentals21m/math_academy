import type { QuizQuestion } from './types';

export const section93Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.29 is the converse of III.28. It proves that in equal circles, equal arcs are subtended by:',
    options: [
      'Equal central angles',
      'Parallel lines',
      'Equal chords',
      'Equal radii',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'III.29 proves that in equal circles, equal arcs are subtended by equal chords.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Together, III.28 and III.29 show that in equal circles, equal chords and equal arcs are:',
    options: [
      'Independent properties',
      'Always perpendicular',
      'Proportional',
      'Equivalent (each implies the other)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'III.28 proves equal chords → equal arcs; III.29 proves equal arcs → equal chords. They are equivalent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Propositions III.26-29 together establish what correspondence in equal circles?',
    options: [
      'Radius ↔ diameter',
      'Angle ↔ arc ↔ chord',
      'Tangent ↔ secant',
      'Center ↔ circumference',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'These four propositions establish that in equal circles, equal angles, equal arcs, and equal chords are all equivalent and mutually determining.',
  },
];
