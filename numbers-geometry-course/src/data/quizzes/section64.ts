import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 64: Too Much, Too Little, and Just Right
 */
export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a conic section?',
    options: [
      'A curve of degree 3',
      'A curve obtained by cutting a cone with a plane',
      'A line segment on a cone',
      'A circle with a different radius',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Conic sections are curves obtained by intersecting a cone with a plane.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "hyperbola" roughly mean in Greek?',
    options: [
      'Just right',
      'Too little',
      'Too much',
      'Perfect circle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Hyperbola means "too much" (the plane slopes too steeply, cutting both halves of the cone).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which equation represents a hyperbola?',
    options: [
      'x²/4 + y²/9 = 1',
      'y = 2x²',
      'x²/4 - y²/9 = 1',
      'x² + y² = 4',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A hyperbola has opposite signs for x² and y² coefficients.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What degree are conic section equations?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Conic sections are quadratic curves—their equations have degree 2.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which conic section is the transitional case?',
    options: ['Circle', 'Ellipse', 'Hyperbola', 'Parabola'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The parabola is the "just right" transitional case between hyperbola and ellipse.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the equation x² + y² = r² an example of?',
    options: [
      'A hyperbola',
      'A parabola',
      'A line',
      'A circle (special ellipse)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A circle is a special case of an ellipse where a = b = r.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How can you identify a parabola from its equation?',
    options: [
      'One of x² or y² is missing',
      'Both x² and y² have positive coefficients',
      'Both x² and y² have opposite signs',
      'The equation is linear',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A parabola has only one squared term (e.g., y = ax²).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Who discovered that all conics are quadratic curves?',
    options: [
      'Fermat and Descartes',
      'Apollonius',
      'Euclid',
      'Newton'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Fermat and Descartes independently made this discovery when they invented analytic geometry.',
  },
];
