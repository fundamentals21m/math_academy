import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Arc length measures:',
    options: [
      'The area under a curve',
      'The actual distance along a curve',
      'The height of a curve',
      'The slope of a curve',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Arc length is the distance you would travel if you walked along the curve.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The arc length formula $L = \\int_a^b \\sqrt{1 + (dy/dx)^2} \\, dx$ comes from:',
    options: [
      'The power rule',
      'The quotient rule',
      'The product rule',
      'The Pythagorean theorem applied to infinitesimal pieces',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each small piece has length $\\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2} \\, dx$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A catenary is:',
    options: [
      'A type of parabola',
      'A circle',
      'The curve formed by a hanging chain',
      'An ellipse',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A catenary is the curve a uniform chain makes when hanging freely under gravity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a straight line, the arc length formula gives:',
    options: [
      'The same result as the distance formula',
      'Zero',
      'Infinity',
      'An undefined value',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a straight line, the arc length formula reduces to the standard distance formula.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Thompson, "What one fool can do, another can." This means:',
    options: [
      'Mathematics is only for geniuses',
      'Calculus is too difficult to learn',
      'Anyone can learn calculus with effort',
      'Fools should avoid mathematics',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Thompson\'s message is that calculus is accessible to anyone willing to learn.',
  },
];
