import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Stone-Weierstrass theorem states that polynomials are:',
    options: [
      'The only continuous functions on $[a, b]$',
      'Dense in $C([a, b])$ with respect to the sup norm',
      'The only functions with derivatives',
      'Complete in the $L^2$ norm'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Stone-Weierstrass theorem says every continuous function on $[a, b]$ can be uniformly approximated by polynomials.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The classical Weierstrass approximation theorem applies to:',
    options: [
      'All continuous functions on $\\mathbf{R}$',
      'Continuous functions on a closed bounded interval',
      'Only differentiable functions',
      'Functions with compact support'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Weierstrass approximation works for continuous functions on $[a, b]$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Given $\\varepsilon > 0$ and $f \\in C([0, 1])$, there exists a polynomial $p$ such that:',
    options: [
      '$p(x) = f(x)$ for all $x$',
      '$\\|f - p\\|_\\infty < \\varepsilon$',
      '$p$ has degree at most $\\varepsilon$',
      '$\\int |f - p| < \\varepsilon$ but not necessarily $\\|f - p\\|_\\infty < \\varepsilon$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Weierstrass theorem gives uniform approximation: $\\sup_x |f(x) - p(x)| < \\varepsilon$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The general Stone-Weierstrass theorem requires the approximating algebra to:',
    options: [
      'Contain only polynomials',
      'Separate points and contain constants',
      'Be finite-dimensional',
      'Consist of differentiable functions'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Stone-Weierstrass says a subalgebra of $C(X)$ that separates points and contains constants is dense.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Bernstein polynomials are used to:',
    options: [
      'Prove the fundamental theorem of algebra',
      'Give an explicit construction proving Weierstrass approximation',
      'Integrate discontinuous functions',
      'Define the real numbers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bernstein polynomials provide a constructive proof of the Weierstrass approximation theorem.',
  },
];
