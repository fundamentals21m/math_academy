import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A Hamiltonian cycle visits:',
    options: [
      'Every edge exactly once',
      'Every vertex exactly once',
      'Every face exactly once',
      'Some vertices multiple times'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A Hamiltonian cycle visits every vertex exactly once and returns to the start.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Determining if a graph is Hamiltonian is:',
    options: [
      'Solvable in polynomial time',
      'NP-complete',
      'Undecidable',
      'Always yes for connected graphs'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Hamiltonian cycle problem is NP-complete (no known polynomial algorithm).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Dirac\'s Theorem: If $G$ has $n \\geq 3$ vertices and $\\delta(G) \\geq n/2$, then:',
    options: [
      '$G$ is connected',
      '$G$ is Hamiltonian',
      '$G$ is bipartite',
      '$G$ is planar'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Dirac: minimum degree at least $n/2$ guarantees a Hamiltonian cycle.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Ore\'s Theorem strengthens Dirac\'s by requiring:',
    options: [
      '$d(u) + d(v) \\geq n$ for all non-adjacent pairs',
      '$\\Delta(G) \\geq n/2$',
      'The graph be regular',
      '$\\delta(G) \\geq n/2$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Ore: if $d(u) + d(v) \\geq n$ for all non-adjacent $u, v$, then $G$ is Hamiltonian.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A tournament (orientation of $K_n$) always has:',
    options: [
      'A directed Hamiltonian cycle',
      'A directed Hamiltonian path',
      'No directed cycles',
      'Equal in-degrees and out-degrees'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Every tournament has a directed Hamiltonian path (Rédei\'s theorem). Cycles require strong connectivity.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The hypercube $Q_n$ is:',
    options: [
      'Never Hamiltonian',
      'Hamiltonian for all $n \\geq 2$',
      'Hamiltonian only for even $n$',
      'Hamiltonian only for prime $n$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The hypercube $Q_n$ is Hamiltonian for $n \\geq 2$ (Gray code gives a Hamiltonian cycle).',
  },
];
