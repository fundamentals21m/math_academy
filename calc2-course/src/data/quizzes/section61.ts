import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The method of Frobenius is used to find solutions near a point $x_0$ that is:',
    options: [
      'An ordinary point',
      'An irregular singular point',
      'Any point on the real line',
      'A regular singular point',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The method of Frobenius extends power series methods to regular singular points, where ordinary power series may fail.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the equation $x^2 y\'\' + xp(x)y\' + q(x)y = 0$ with $p$ and $q$ analytic at $x = 0$, the point $x = 0$ is:',
    options: [
      'A regular singular point',
      'An ordinary point',
      'An irregular singular point',
      'Not a singular point',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $xp(x)$ and $x^2 q(x)$ are analytic at $x = 0$, the point is a regular singular point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the Frobenius method, the solution has the form $y = x^r \\sum_{n=0}^{\\infty} a_n x^n$ where $r$ is found from:',
    options: [
      'The characteristic equation',
      'The auxiliary equation',
      'The indicial equation',
      'The recurrence relation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponent $r$ is determined by the indicial equation, obtained by substituting the Frobenius series into the differential equation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If the indicial equation has roots $r_1$ and $r_2$ with $r_1 - r_2$ not an integer, then:',
    options: [
      'Only one Frobenius solution exists',
      'Two linearly independent Frobenius solutions exist',
      'A logarithmic term must appear in the second solution',
      'The equation has no series solution',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When the roots differ by a non-integer, two linearly independent Frobenius series solutions exist.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the equation $2xy\'\' + (1-x)y\' - y = 0$, what is the indicial equation at $x = 0$?',
    options: [
      '$r(r-1) = 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Rewriting as $y\'\' + \\frac{1-x}{2x}y\' - \\frac{1}{2x}y = 0$, the indicial equation is $r(r-1) + \\frac{1}{2}r = r(2r-1)/2 = 0$, giving $r(2r-1) = 0$.',
  },
      '$2r(r-1) + r = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rewriting as $y\'\' + \\frac{1-x}{2x}y\' - \\frac{1}{2x}y = 0$, the indicial equation is $r(r-1) + \\frac{1}{2}r = r(2r-1)/2 = 0$, giving $r(2r-1) = 0$.',
  },
      '$r(2r-1) = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rewriting as $y\'\' + \\frac{1-x}{2x}y\' - \\frac{1}{2x}y = 0$, the indicial equation is $r(r-1) + \\frac{1}{2}r = r(2r-1)/2 = 0$, giving $r(2r-1) = 0$.',
  },
      '$r^2 = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rewriting as $y\'\' + \\frac{1-x}{2x}y\' - \\frac{1}{2x}y = 0$, the indicial equation is $r(r-1) + \\frac{1}{2}r = r(2r-1)/2 = 0$, giving $r(2r-1) = 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rewriting as $y\'\' + \\frac{1-x}{2x}y\' - \\frac{1}{2x}y = 0$, the indicial equation is $r(r-1) + \\frac{1}{2}r = r(2r-1)/2 = 0$, giving $r(2r-1) = 0$.',
  },
];
