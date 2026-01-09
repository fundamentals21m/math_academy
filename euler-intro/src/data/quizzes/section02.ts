import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does Euler classify algebraic curves?',
    options: [
      'By their color',
      'By the degree (order) of their defining equation',
      'By their length',
      'By the number of intercepts'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euler classifies algebraic curves by the degree of their defining polynomial equation. First-degree equations give lines, second-degree give conics, etc.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What kind of curve is defined by a first-degree equation?',
    options: [
      'A circle',
      'A parabola',
      'A straight line',
      'An ellipse'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A first-degree equation $ax + by + c = 0$ always represents a straight line. This is the simplest type of "curve" in Euler\'s classification.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the order (degree) of the equation $x^3 + 2xy^2 - y^3 = 5$?',
    correctAnswer: 3,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'The degree is the highest total power of $x$ and $y$ in any term. Here $x^3$, $xy^2$ (degree 1+2=3), and $y^3$ are all degree 3, so the equation is third-order.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is the classification by degree important?',
    options: [
      'It determines the curve\'s color',
      'It is preserved under coordinate transformations',
      'It determines the curve\'s length',
      'It determines how many points are on the curve'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The degree is an invariant—it doesn\'t change under coordinate transformations. This means curves of different degrees are fundamentally different geometric objects.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What are second-order curves also known as?',
    options: [
      'Linear curves',
      'Conic sections',
      'Cubic curves',
      'Transcendental curves'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Second-order (degree 2) curves are the conic sections: circles, ellipses, parabolas, and hyperbolas. They arise from slicing a cone with a plane.',
  },
];
