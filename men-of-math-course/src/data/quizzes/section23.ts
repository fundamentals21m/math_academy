import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'James Joseph Sylvester is known for coining which mathematical term?',
    options: [
      'Function',
      'Matrix',
      'Derivative',
      'Integral'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sylvester invented the term "matrix" for rectangular arrays of numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Sylvester made major contributions to:',
    options: [
      'Topology',
      'Invariant theory',
      'Set theory',
      'Probability'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Sylvester was a pioneer in invariant theory, studying properties unchanged under transformations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Sylvester worked closely with which other Victorian mathematician?',
    options: [
      'Boole',
      'Cayley',
      'Weierstrass',
      'Riemann'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sylvester and Cayley were close collaborators in developing matrix theory and invariant theory.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the United States, Sylvester:',
    options: [
      'Never worked there',
      'Founded the American Journal of Mathematics',
      'Became president',
      'Only visited briefly'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Sylvester founded the American Journal of Mathematics while at Johns Hopkins University.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Sylvester\'s law of inertia concerns:',
    options: [
      'Physical mechanics',
      'Signature of quadratic forms',
      'Chemical reactions',
      'Number sequences'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Sylvester\'s law states that the signature (number of positive/negative eigenvalues) of a quadratic form is invariant.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What term did Sylvester coin for a rectangular array of numbers?',
    correctAnswer: 'matrix',
    difficulty: 'easy',
    explanation: 'Sylvester coined "matrix" from the Latin word for womb or source.',
  },
];
