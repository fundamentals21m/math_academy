import type { QuizQuestion } from './types';

export const section108Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In IV.6, how is a square inscribed in a circle?',
    options: [
      'Using angle bisectors',
      'Using two perpendicular diameters',
      'Using tangent lines',
      'Using the golden ratio'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two perpendicular diameters create four points on the circle. Connecting consecutive points forms an inscribed square.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the inscribed figure in IV.6 a square and not just a rectangle?',
    options: [
      'Because the diameters are equal in length',
      'Because all radii are equal and the diameters are perpendicular',
      'Because the circle is round',
      'By assumption'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Equal radii and perpendicular diameters ensure all four sides are equal (equilateral). The angles are right because each is inscribed in a semicircle (III.31).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a circle has radius r, what is the side length of an inscribed square?',
    options: [
      'r',
      'r√2',
      '2r',
      'r/√2'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The diagonal of the inscribed square equals the diameter (2r). For a square with side s, diagonal = s√2, so s√2 = 2r, giving s = r√2.',
  },
];
