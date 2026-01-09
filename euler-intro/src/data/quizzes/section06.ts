import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an infinite branch of a curve?',
    options: [
      'A branch that curves back on itself',
      'A branch that extends to infinity',
      'A branch with infinitely many points',
      'A closed loop on the curve'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An infinite branch is a portion of the curve that extends to infinity, meaning the curve goes arbitrarily far from the origin.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many infinite branches can a conic section have?',
    options: [
      'None',
      'At most 2',
      'At most 4',
      'Infinitely many'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A second-degree curve can have at most 2 infinite branches. Ellipses and circles have none, parabolas have one, and hyperbolas have two.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which conic section has no infinite branches?',
    options: [
      'Parabola',
      'Hyperbola',
      'Ellipse',
      'All conics have infinite branches'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An ellipse (including the circle) is a closed curve with no infinite branches. It is bounded and doesn\'t extend to infinity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What determines whether a curve has an infinite branch?',
    options: [
      'The constant term in the equation',
      'The behavior of the equation as $x$ or $y$ approaches infinity',
      'The number of terms in the equation',
      'The sign of all coefficients'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Infinite branches are determined by analyzing the curve\'s behavior as coordinates approach infinity—examining the leading terms of the equation.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many infinite branches does the hyperbola $x^2/a^2 - y^2/b^2 = 1$ have?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'A hyperbola has exactly 2 infinite branches, one extending in each direction along the two "arms" of the curve.',
  },
];
