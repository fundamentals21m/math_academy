import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's46-e01',
    type: 'multiple-choice',
    question: 'A doubly periodic function has:',
    options: [
      'Two independent periods whose ratio is not real',
      'Periods only on the real axis',
      'One period that is twice as large',
      'No periods at all',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A doubly periodic function has two periods $\\omega_1$ and $\\omega_2$ such that their ratio $\\omega_2/\\omega_1$ is not a real number. This means the periods point in genuinely different directions in the complex plane.',
  },
  {
    id: 's46-e02',
    type: 'multiple-choice',
    question: 'The period lattice $\\Lambda$ of a doubly periodic function is:',
    options: [
      'The set of all integer combinations $m\\omega_1 + n\\omega_2
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The period lattice $\\Lambda = \\{m\\omega_1 + n\\omega_2 : m, n \\in \\mathbb{Z}\\}$ forms a two-dimensional grid of points in the complex plane. The function repeats its values when shifted by any lattice vector.',
  },
      'A circle',
      'A single point',
      'The real line',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The period lattice $\\Lambda = \\{m\\omega_1 + n\\omega_2 : m, n \\in \\mathbb{Z}\\}$ forms a two-dimensional grid of points in the complex plane. The function repeats its values when shifted by any lattice vector.',
  },
  // Medium questions
  {
    id: 's46-m01',
    type: 'multiple-choice',
    question: 'The Weierstrass $\\wp$-function satisfies which differential equation?',
    options: [
      '$\\wp\\'\\' + \\wp = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Weierstrass $\\wp$-function satisfies the algebraic differential equation $(\\wp\')^2 = 4\\wp^3 - g_2\\wp - g_3$, where $g_2$ and $g_3$ are constants determined by the lattice. This equation defines an elliptic curve.',
  },
      '$\\wp\\' = \\wp^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Weierstrass $\\wp$-function satisfies the algebraic differential equation $(\\wp\')^2 = 4\\wp^3 - g_2\\wp - g_3$, where $g_2$ and $g_3$ are constants determined by the lattice. This equation defines an elliptic curve.',
  },
      '$(\\wp\\')^2 = 4\\wp^3 - g_2\\wp - g_3
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Weierstrass $\\wp$-function satisfies the algebraic differential equation $(\\wp\')^2 = 4\\wp^3 - g_2\\wp - g_3$, where $g_2$ and $g_3$ are constants determined by the lattice. This equation defines an elliptic curve.',
  },
      '$\\wp^2 + (\\wp\\')^2 = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Weierstrass $\\wp$-function satisfies the algebraic differential equation $(\\wp\')^2 = 4\\wp^3 - g_2\\wp - g_3$, where $g_2$ and $g_3$ are constants determined by the lattice. This equation defines an elliptic curve.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Weierstrass $\\wp$-function satisfies the algebraic differential equation $(\\wp\')^2 = 4\\wp^3 - g_2\\wp - g_3$, where $g_2$ and $g_3$ are constants determined by the lattice. This equation defines an elliptic curve.',
  },
  {
    id: 's46-m02',
    type: 'multiple-choice',
    question: 'The uniformization theorem states that every elliptic curve is isomorphic to:',
    options: [
      'The real line',
      'A sphere',
      'A hyperbola',
      '$\\mathbb{C}/\\Lambda$ for some lattice $\\Lambda
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The uniformization theorem shows that every elliptic curve over $\\mathbb{C}$ is isomorphic to a complex torus $\\mathbb{C}/\\Lambda$. The isomorphism is given by the Weierstrass parametrization $z \\mapsto (\\wp(z), \\wp\'(z))$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The uniformization theorem shows that every elliptic curve over $\\mathbb{C}$ is isomorphic to a complex torus $\\mathbb{C}/\\Lambda$. The isomorphism is given by the Weierstrass parametrization $z \\mapsto (\\wp(z), \\wp\'(z))$.',
  },
  // Hard questions
  {
    id: 's46-h01',
    type: 'multiple-choice',
    question: 'Liouville\'s theorem states that a doubly periodic function with no poles must be:',
    options: [
      'A polynomial',
      'Zero',
      'Constant',
      'Unbounded'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Liouville proved that a doubly periodic entire function (no poles) must be bounded on its fundamental domain, hence bounded everywhere. By Liouville\'s other theorem, a bounded entire function is constant. Thus non-constant elliptic functions must have poles.',
  },
  {
    id: 's46-h02',
    type: 'multiple-choice',
    question: 'The $j$-invariant determines:',
    options: [
      'Whether two lattices give isomorphic elliptic curves',
      'The degree of the curve',
      'The number of poles of $\\wp
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The $j$-invariant $j(\\tau) = 1728 g_2^3/(g_2^3 - 27g_3^2)$ is a modular function that classifies elliptic curves up to isomorphism. Two lattices give isomorphic curves if and only if they have the same $j$-invariant. This connects to modular forms and modern number theory.',
  },
      'Whether the periods are real',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The $j$-invariant $j(\\tau) = 1728 g_2^3/(g_2^3 - 27g_3^2)$ is a modular function that classifies elliptic curves up to isomorphism. Two lattices give isomorphic curves if and only if they have the same $j$-invariant. This connects to modular forms and modern number theory.',
  },
];
