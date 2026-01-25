import type { QuizQuestion } from './types';

export const section85Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sufficient condition for differentiability of $f: \\mathbb{R}^n \\to \\mathbb{R}$ at $\\mathbf{a}$ is:',
    options: [
      'Existence of partial derivatives at $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If all partial derivatives exist and are continuous near $\\mathbf{a}$, then $f$ is differentiable at $\\mathbf{a}$.',
  },
      'Continuity of $f$ at $\\mathbf{a}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If all partial derivatives exist and are continuous near $\\mathbf{a}$, then $f$ is differentiable at $\\mathbf{a}$.',
  },
      'Existence and continuity of all partial derivatives in a neighborhood of $\\mathbf{a}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If all partial derivatives exist and are continuous near $\\mathbf{a}$, then $f$ is differentiable at $\\mathbf{a}$.',
  },
      'Boundedness of $f
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If all partial derivatives exist and are continuous near $\\mathbf{a}$, then $f$ is differentiable at $\\mathbf{a}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If all partial derivatives exist and are continuous near $\\mathbf{a}$, then $f$ is differentiable at $\\mathbf{a}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function with continuous partial derivatives is said to be:',
    options: [
      'Analytic',
      'Of class $C^1$ (continuously differentiable)',
      'Harmonic',
      'Holomorphic',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A function is $C^1$ if it has continuous first-order partial derivatives.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Continuous differentiability ($C^1$) implies:',
    options: [
      'Differentiability (in the total derivative sense)',
      'Only existence of partial derivatives',
      'That $f$ is unbounded',
      'That $f$ is constant',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$C^1$ functions are differentiable because continuity of partials is sufficient for differentiability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The converse "differentiable implies continuous partial derivatives" is:',
    options: [
      'True',
      'True only in dimension 2',
      'False',
      'True only for polynomial functions',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Differentiability implies existence of partial derivatives but not their continuity. Counterexamples exist.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For practical verification of differentiability, one typically checks:',
    options: [
      'The limit definition directly',
      'Whether $f$ is bounded',
      'Whether $f$ is a polynomial',
      'Whether partial derivatives exist and are continuous',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Checking continuity of partial derivatives is the standard practical method for verifying differentiability.',
  },
];
