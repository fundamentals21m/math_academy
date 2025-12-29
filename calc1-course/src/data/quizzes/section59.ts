import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A separable equation has the form:',
    options: [
      '$y\' = f(x) + g(y)$',
      '$y\' = f(x)g(y)$',
      '$y\' = f(x)/g(y)$',
      '$y\'\' = f(x)g(y)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Separable: $y\' = f(x)g(y)$ allows separating variables.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To solve a separable equation, we:',
    options: [
      'Use integrating factor',
      'Separate: $\\frac{dy}{g(y)} = f(x)\\,dx$ then integrate both sides',
      'Use characteristic equation',
      'Guess the solution'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Separate variables and integrate each side.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Is $y\' = xy$ separable?',
    options: [
      'No',
      'Yes: $f(x) = x$, $g(y) = y$',
      'Only if $y > 0$',
      'It is a second-order equation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$y\' = x \\cdot y$ is separable with $f(x) = x$, $g(y) = y$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Solving $y\' = xy$ by separation: $\\int \\frac{dy}{y} = \\int x\\,dx$ gives:',
    options: [
      '$y = x^2 + C$',
      '$\\ln|y| = x^2/2 + C$',
      '$y = Cx$',
      '$y/x = C$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\int dy/y = \\ln|y|$ and $\\int x\\,dx = x^2/2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The solution $\\ln|y| = x^2/2 + C$ can be written as:',
    options: [
      '$y = e^{x^2/2}$',
      '$y = Ae^{x^2/2}$ where $A = e^C$',
      '$y = x^2/2 + C$',
      '$y = C\\ln(x^2/2)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Exponentiate: $|y| = e^C e^{x^2/2}$, so $y = Ae^{x^2/2}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When separating variables with $g(y)$ in denominator, we must check:',
    options: [
      'Nothing special',
      'Values where $g(y) = 0$ (may give equilibrium solutions)',
      'That $x > 0$',
      'That $f(x) = 0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Division by $g(y)$ loses solutions where $g(y) = 0$.',
  },
];
