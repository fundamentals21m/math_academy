import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Weierstrass Approximation Theorem states that on $[a, b]$, every continuous function can be uniformly approximated by:',
    options: [
      'Step functions',
      'Polynomials',
      'Trigonometric polynomials',
      'Piecewise linear functions',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Weierstrass Approximation: If $f$ is continuous on $[a,b]$, then for every $\\epsilon > 0$, there exists a polynomial $P$ such that $|f(x) - P(x)| < \\epsilon$ for all $x \\in [a,b]$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Stone-Weierstrass Theorem generalizes Weierstrass by allowing approximation on:',
    options: [
      'Only intervals $[a, b]
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Stone-Weierstrass (Theorem 7.32): If $\\mathscr{A}$ is an algebra of continuous real functions on a compact space $K$ that separates points and vanishes nowhere, then $\\mathscr{A}$ is dense in $C(K)$.',
  },
      'Only metric spaces',
      'Unbounded domains',
      'Any compact Hausdorff space, using algebras that separate points and contain constants',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Stone-Weierstrass (Theorem 7.32): If $\\mathscr{A}$ is an algebra of continuous real functions on a compact space $K$ that separates points and vanishes nowhere, then $\\mathscr{A}$ is dense in $C(K)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An algebra $\\mathscr{A}$ of functions "separates points" means:',
    options: [
      'For all $f \\in \\mathscr{A}$, $f$ is one-to-one',
      'For distinct $x, y$, there exists $f \\in \\mathscr{A}$ with $f(x) \\neq f(y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Separating points means the algebra has "enough" functions to distinguish any two distinct points: given $x \\neq y$, some $f \\in \\mathscr{A}$ satisfies $f(x) \\neq f(y)$.',
  },
      'The functions in $\\mathscr{A}$ have disjoint supports',
      '$\\mathscr{A}$ contains only injective functions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Separating points means the algebra has "enough" functions to distinguish any two distinct points: given $x \\neq y$, some $f \\in \\mathscr{A}$ satisfies $f(x) \\neq f(y)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can\'t polynomials approximate $|x|$ uniformly on $[-1, 1]$ in the sense of matching derivatives?',
    options: [
      '$|x|$ is unbounded',
      'Polynomials can approximate $|x|$ uniformly, but not in $C^1$ norm',
      '$|x|$ is not continuous',
      'Polynomials are not dense in $C[-1, 1]
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Weierstrass guarantees uniform approximation of $|x|$ by polynomials. However, $|x|$ is not differentiable at $0$, while polynomials are smooth. Approximation is in sup-norm (uniform), not in $C^1$ or smoother norms.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Weierstrass guarantees uniform approximation of $|x|$ by polynomials. However, $|x|$ is not differentiable at $0$, while polynomials are smooth. Approximation is in sup-norm (uniform), not in $C^1$ or smoother norms.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The complex version of Stone-Weierstrass requires the algebra to be:',
    options: [
      'Self-adjoint (closed under complex conjugation)',
      'The same as the real version',
      'Containing only real-valued functions',
      'Finite-dimensional',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For complex-valued functions, Stone-Weierstrass (Theorem 7.33) requires the algebra to be self-adjoint: if $f \\in \\mathscr{A}$, then $\\bar{f} \\in \\mathscr{A}$. Without this, the theorem fails (consider polynomials in $z$ alone on the circle).',
  },
];
