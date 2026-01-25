import type { QuizQuestion } from './types';

export const section98Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a function $f(x, y)$ with Hessian entries $A = D_{11}f$, $B = D_{12}f$, $C = D_{22}f$ at a stationary point, the discriminant is:',
    options: [
      '$\\Delta = A + C$',
      '$\\Delta = AC + B^2$',
      '$\\Delta = AC - B^2$',
      '$\\Delta = A - C$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Hessian determinant (discriminant) for two variables is $\\Delta = \\det H = AC - B^2$, where $A = D_{11}f$, $B = D_{12}f$, and $C = D_{22}f$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\Delta = AC - B^2 < 0$ at a stationary point, then $f$ has:',
    options: [
      'A relative minimum',
      'A saddle point',
      'A relative maximum',
      'Cannot be determined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\Delta < 0$, the eigenvalues of the Hessian have opposite signs (since $\\lambda_1 \\lambda_2 = \\Delta < 0$). This means $f$ has a saddle point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\Delta > 0$ and $A > 0$ at a stationary point, then $f$ has:',
    options: [
      'A relative maximum',
      'A relative minimum',
      'A saddle point',
      'Cannot be determined',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\Delta > 0$, both eigenvalues have the same sign. Since $\\Delta = \\lambda_1 \\lambda_2 > 0$ and $A + C = \\lambda_1 + \\lambda_2$, if $A > 0$ then both eigenvalues are positive, giving a relative minimum.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\Delta = 0$ at a stationary point, the second derivative test is:',
    options: [
      'Conclusive for a minimum',
      'Conclusive for a saddle',
      'Conclusive for a maximum',
      'Inconclusive',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When $\\Delta = 0$, at least one eigenvalue is zero, so the second derivative test is inconclusive. Other methods (such as examining higher-order derivatives or direct analysis) are needed.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $f(x, y) = x^3 - 3xy^2$ at the origin, the Hessian test gives:',
    options: [
      '$\\Delta = 0$, inconclusive',
      '$\\Delta > 0$, minimum',
      '$\\Delta > 0$, maximum',
      '$\\Delta < 0$, saddle',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'At the origin: $A = 6x|_{(0,0)} = 0$, $B = -6y|_{(0,0)} = 0$, $C = -6x|_{(0,0)} = 0$. So $\\Delta = 0 - 0 = 0$, making the test inconclusive. (Direct inspection shows it\'s a "monkey saddle".)',
  },
];
