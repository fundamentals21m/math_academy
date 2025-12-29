import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Partial fraction decomposition is used to integrate:',
    options: [
      'Trigonometric functions',
      'Rational functions (polynomial/polynomial)',
      'Exponential functions',
      'Logarithmic functions'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Partial fractions decompose rational functions into simpler fractions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To decompose $\\frac{1}{(x-1)(x+2)}$, we write:',
    options: [
      '$\\frac{A}{x-1} + \\frac{B}{x+2}$',
      '$\\frac{A}{(x-1)(x+2)}$',
      '$\\frac{Ax + B}{(x-1)(x+2)}$',
      '$\\frac{1}{x-1} \\cdot \\frac{1}{x+2}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Distinct linear factors give one constant over each factor.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For repeated factor $(x-1)^2$, the decomposition includes:',
    options: [
      '$\\frac{A}{x-1}$ only',
      '$\\frac{A}{x-1} + \\frac{B}{(x-1)^2}$',
      '$\\frac{Ax + B}{(x-1)^2}$',
      '$\\frac{A}{(x-1)^2}$ only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Repeated linear factor of degree 2 needs terms for both powers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\int \\frac{1}{x-3}\\,dx = ?$',
    options: [
      '$\\ln|x-3| + C$',
      '$\\frac{1}{(x-3)^2} + C$',
      '$\\ln|x| - 3 + C$',
      '$-\\frac{1}{x-3} + C$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\int \\frac{1}{x-a}\\,dx = \\ln|x-a| + C$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For irreducible quadratic $x^2 + 1$, the partial fraction term is:',
    options: [
      '$\\frac{A}{x^2+1}$',
      '$\\frac{Ax + B}{x^2 + 1}$',
      '$\\frac{A}{x+i} + \\frac{B}{x-i}$',
      '$A\\arctan x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Irreducible quadratic needs a linear numerator $Ax + B$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Before using partial fractions, we must ensure:',
    options: [
      'The numerator is a constant',
      'The degree of numerator is less than degree of denominator',
      'The denominator is linear',
      'All coefficients are integers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The fraction must be proper (deg num < deg denom). Use long division first if not.',
  },
];
