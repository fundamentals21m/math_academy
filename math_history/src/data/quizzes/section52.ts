import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's52-e01',
    type: 'multiple-choice',
    question: 'The Abel-Ruffini theorem states that:',
    options: [
      'There is no general formula using radicals to solve quintic equations',
      'Quintic equations have no solutions',
      'All quintics can be solved by radicals',
      'The quadratic formula is wrong',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Abel-Ruffini theorem (1824) proves that there is no general algebraic formula—using only arithmetic operations and root extraction—for solving polynomial equations of degree 5 or higher. Quintics have solutions, but no universal radical formula exists.',
  },
  {
    id: 's52-e02',
    type: 'multiple-choice',
    question: 'Which mathematician created the theory that explains why quintics are unsolvable by radicals?',
    options: [
      'Galois',
      'Newton',
      'Euler',
      'Gauss',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Évariste Galois (1811-1832) created Galois theory, which gives a complete criterion for when a polynomial is solvable by radicals. His work, done as a teenager and written down the night before his fatal duel, revolutionized algebra.',
  },
  // Medium questions
  {
    id: 's52-m01',
    type: 'multiple-choice',
    question: 'According to Galois theory, a polynomial is solvable by radicals if and only if:',
    options: [
      'Its Galois group is a solvable group',
      'It has real coefficients',
      'Its degree is less than 10',
      'It has distinct roots',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Galois\'s criterion states that a polynomial is solvable by radicals precisely when its Galois group is solvable (can be built from abelian groups). The general quintic has Galois group $S_5$, which is not solvable because it contains the simple non-abelian group $A_5$.',
  },
  {
    id: 's52-m02',
    type: 'multiple-choice',
    question: 'The fact that the general quintic is unsolvable by radicals means:',
    options: [
      'No universal formula exists, but specific quintics may still be solvable',
      'No quintic equation has solutions',
      'All quintics are equally difficult',
      'Numerical methods cannot approximate roots',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The theorem concerns the general quintic—there\'s no formula that works for all. Specific quintics with special structure (like $x^5 - 2 = 0$) can still be solved by radicals if their Galois group is solvable. All quintics have roots by the Fundamental Theorem of Algebra.',
  },
  // Hard questions
  {
    id: 's52-h01',
    type: 'multiple-choice',
    question: 'The general quintic cannot be solved by radicals because $S_5$:',
    options: [
      'Contains $A_5$, which is simple and non-abelian',
      'Has too many elements',
      'Is infinite',
      'Is commutative',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'A group is solvable if it can be broken down into abelian pieces through a chain of normal subgroups. The symmetric group $S_5$ is not solvable because it contains $A_5$ (alternating group on 5 elements), which is simple (no proper normal subgroups) and non-abelian.',
  },
  {
    id: 's52-h02',
    type: 'multiple-choice',
    question: 'Even though the quintic has no radical solution, it can be solved using:',
    options: [
      'Elliptic functions or numerical methods',
      'Only complex numbers',
      'Infinite series that never converge',
      'Geometric constructions',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Hermite showed that quintic equations can be solved using elliptic modular functions. Additionally, numerical methods like Newton\'s method can find roots to arbitrary precision. The quintic can also be expressed using hypergeometric functions.',
  },
];
