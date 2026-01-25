import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Book II of the Elements commonly called?',
    options: [
      'Geometric Algebra',
      'Number Theory',
      'Solid Geometry',
      'Theory of Proportions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Book II is called "Geometric Algebra" because it proves algebraic identities using geometric constructions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a gnomon in Euclidean geometry?',
    options: [
      'A type of triangle',
      'A special type of circle',
      'An L-shaped figure formed by removing a square from a corner of a larger square',
      'A measuring tool',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A gnomon is the L-shaped region that remains when a smaller square is removed from the corner of a larger square.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Book II, how does Euclid represent the product of two numbers?',
    options: [
      'As a circle',
      'As a line segment',
      'As a triangle',
      'As a rectangle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Euclid represents products geometrically as rectangles. The rectangle contained by sides a and b represents the product ab.',
  },
];
