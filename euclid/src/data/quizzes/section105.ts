import type { QuizQuestion } from './types';

export const section105Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In IV.3, what does "circumscribe a triangle about a circle" mean?',
    options: [
      'Draw a triangle inside the circle',
      'Draw a triangle with vertices on the circle',
      'Draw a triangle passing through the center',
      'Draw a triangle whose sides are tangent to the circle'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Circumscribing a triangle about a circle means the triangle\'s sides are tangent to the circle (the circle fits inside the triangle, touching all three sides).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the construction of IV.3, why are angles at the center constructed equal to supplements of the given triangle\'s angles?',
    options: [
      'To make the tangent lines parallel',
      'Because the sum of central angle and corresponding triangle angle equals 180°',
      'To ensure the tangents meet at right angles',
      'To bisect the circle\\'s arcs',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In the quadrilateral formed by two radii and two tangent segments, the tangent angles are 90° each, so the central angle plus the triangle\'s corner angle must equal 180°.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the relationship between IV.2 and IV.3?',
    options: [
      'IV.3 is a special case of IV.2',
      'IV.2 uses IV.3 in its proof',
      'They are dual constructions: inscribed vs circumscribed',
      'They are unrelated',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'IV.2 inscribes a triangle in a circle (vertices on circle), while IV.3 circumscribes a triangle about a circle (sides tangent to circle). They are dual constructions.',
  },
];
