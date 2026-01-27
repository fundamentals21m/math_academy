import type { QuizQuestion } from './types';

export const section89Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear space (vector space) must satisfy axioms including:',
    options: [
      'Only closure under addition',
      'Only having a zero vector',
      'Closure under addition, scalar multiplication, and other algebraic properties',
      'Being finite-dimensional'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Vector space axioms: closure, associativity, identity, inverses, distributivity, etc.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which is NOT a vector space?',
    options: [
      '$\\mathbb{R}^n$ with standard operations',
      'The set of polynomials',
      'The set of continuous functions on $[0,1]$',
      'The positive real numbers under usual addition'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Positive reals under usual addition: no zero element, no additive inverses.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The zero vector satisfies:',
    options: [
      '$\\mathbf{v} + \\mathbf{0} = \\mathbf{v}$ for all $\\mathbf{v}$',
      '$\\mathbf{v} + \\mathbf{0} = \\mathbf{0}$',
      '$\\mathbf{0} = (1, 1, ..., 1)$',
      '$0 \\cdot \\mathbf{v} = \\mathbf{v}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Zero vector is the additive identity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For any vector $\\mathbf{v}$, $0 \\cdot \\mathbf{v} = ?$',
    options: [
      '$\\mathbf{v}$',
      '$\\mathbf{0}$',
      '$-\\mathbf{v}$',
      'Undefined'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Scalar 0 times any vector gives the zero vector.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The set of $2 \\times 2$ matrices forms a vector space of dimension:',
    options: [
      '$2$',
      '$3$',
      '$4$',
      '$8$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$2 \\times 2$ matrices have 4 entries, so dimension 4.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The set of polynomials of degree $\\leq n$ has dimension:',
    options: [
      '$n$',
      'Infinite',
      '$2n$',
      '$n + 1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Basis: $1, x, x^2, ..., x^n$ (total $n+1$ vectors).',
  },
];
