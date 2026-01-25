import type { QuizQuestion } from './types';

export const section92Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.28 proves that in equal circles, equal chords cut off:',
    options: [
      'Equal radii',
      'Equal diameters',
      'Unequal segments',
      'Equal arcs',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'III.28 proves that in equal circles, equal chords cut off equal arcs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Each chord cuts off two arcs. III.28 specifically states that:',
    options: [
      'Only the major arcs are equal',
      'Only the minor arcs are equal',
      'Both the greater arcs equal each other, and the lesser arcs equal each other',
      'The arcs are unrelated',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.28 specifies that equal chords cut off equal arcs: the greater arc equals the greater, and the lesser equals the lesser.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of III.28 uses which earlier result?',
    options: [
      'III.14 (equal chords equidistant from center)',
      'III.20 (inscribed angle theorem)',
      'III.26 (equal angles subtend equal arcs)',
      'I.47 (Pythagorean theorem)',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The proof uses III.14 (equal chords are equidistant from the center) and then geometric reasoning about the triangles formed.',
  },
];
