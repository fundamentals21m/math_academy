import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A nonhomogeneous equation has the form:',
    options: [
      '$y\'\' + ay\' + by = 0$',
      '$y\'\' + ay\' + by = f(x)$ where $f(x) \\neq 0$',
      '$y\' = y^2$',
      'Any equation with variable coefficients'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Nonhomogeneous has a non-zero right-hand side (forcing term).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The general solution to nonhomogeneous equation is:',
    options: [
      'Only the particular solution',
      'Only the homogeneous solution',
      '$y_h + y_p$ (homogeneous solution + particular solution)',
      '$y_h \\cdot y_p$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'General solution = complementary (homogeneous) + particular.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The method of undetermined coefficients is used when:',
    options: [
      '$f(x)$ is any function',
      '$f(x)$ is a polynomial, exponential, sine, cosine, or combination',
      '$f(x) = 0$',
      'The equation has variable coefficients'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Undetermined coefficients works for special right-hand sides.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $y\'\' - y = e^{2x}$, we guess particular solution:',
    options: [
      '$y_p = Ae^{2x}$',
      '$y_p = Axe^{2x}$',
      '$y_p = Ae^x$',
      '$y_p = A$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $e^{2x}$ is not a solution to homogeneous equation, try $y_p = Ae^{2x}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If the right-hand side is a solution to the homogeneous equation, we:',
    options: [
      'Guess the same form',
      'Multiply our guess by $x$',
      'Use a different method entirely',
      'The equation has no solution'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When $f(x)$ solves the homogeneous part, multiply the guess by $x$ (or $x^2$ if needed).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For $y\'\' + y = \\cos x$, since $\\cos x$ solves $y\'\' + y = 0$, we guess:',
    options: [
      '$y_p = A\\cos x + B\\sin x$',
      '$y_p = x(A\\cos x + B\\sin x)$',
      '$y_p = Ax$',
      '$y_p = Ae^x$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Multiply by $x$ because $\\cos x$, $\\sin x$ are homogeneous solutions.',
  },
];
