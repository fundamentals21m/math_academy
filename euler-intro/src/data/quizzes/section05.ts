import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a species of second-order curve?',
    options: [
      'Ellipse',
      'Parabola',
      'Hyperbola',
      'Cubic'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The second-order curves (conics) are: circle, ellipse, parabola, and hyperbola. A cubic is a third-order curve.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does the discriminant $\\beta^2 - 4\\alpha\\gamma$ determine the type of conic?',
    options: [
      'Positive: ellipse, Zero: parabola, Negative: hyperbola',
      'Positive: hyperbola, Zero: parabola, Negative: ellipse',
      'Positive: parabola, Zero: circle, Negative: line',
      'It has no effect on the type'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The discriminant $\\beta^2 - 4\\alpha\\gamma$ determines the conic type: positive gives hyperbola, zero gives parabola, negative gives ellipse (including circle).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What special property does a circle have among the conics?',
    options: [
      'It has no center',
      'It has equal semi-axes (all points equidistant from center)',
      'It extends to infinity',
      'It has asymptotes'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A circle is a special ellipse where the two semi-axes are equal, meaning all points are equidistant from the center.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the canonical form of a parabola?',
    options: [
      '$x^2/a^2 + y^2/b^2 = 1$',
      '$y^2 = 4px$',
      '$x^2/a^2 - y^2/b^2 = 1$',
      '$x^2 + y^2 = r^2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The canonical form of a parabola is $y^2 = 4px$ (or equivalently $x^2 = 4py$), where $p$ is the distance from vertex to focus.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which conic section can be characterized as having eccentricity equal to 1?',
    options: [
      'Circle',
      'Ellipse',
      'Parabola',
      'Hyperbola'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The parabola has eccentricity exactly 1. Circle has $e=0$, ellipse has $0 < e < 1$, and hyperbola has $e > 1$.',
  },
];
