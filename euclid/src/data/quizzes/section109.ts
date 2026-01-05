import type { QuizQuestion } from './types';

export const section109Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In IV.7, what does "circumscribe a square about a circle" mean?',
    options: [
      'Draw a square inside the circle',
      'Draw a square whose sides are tangent to the circle',
      'Draw a square with vertices on the circle',
      'Draw a square with the same area as the circle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Circumscribing a square about a circle means the square\'s four sides are tangent to the circle—the circle fits inside touching all four sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the construction of IV.7, why are perpendicular diameters drawn first?',
    options: [
      'To find the area of the circle',
      'To locate the points where tangent lines should be drawn',
      'To bisect the square',
      'To calculate the perimeter'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The perpendicular diameters locate four points on the circle where tangent lines are drawn. These tangent lines, being perpendicular to the radii, form the circumscribed square.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If the inscribed square has side r√2 and the circumscribed square has side 2r, what is their ratio?',
    options: [
      '1:1',
      '√2:2',
      '1:√2',
      '1:2'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The inscribed square has side r√2; the circumscribed square has side 2r. Their ratio is r√2 : 2r = 1 : √2.',
  },
];
