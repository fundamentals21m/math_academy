import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A graph $G$ is perfect if for every induced subgraph $H$:',
    options: [
      '$\\alpha(H) = \\omega(H)$',
      '$\\chi(H) = \\omega(H)$',
      '$\\chi(H) = \\Delta(H)$',
      '$H$ is bipartite'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Perfect: chromatic number equals clique number for all induced subgraphs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Perfect Graph Theorem (Lovász) states that $G$ is perfect iff:',
    options: [
      '$G$ is bipartite',
      '$\\overline{G}$ is perfect',
      '$G$ is chordal',
      '$G$ is planar'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Weak Perfect Graph Theorem: $G$ perfect $\\Leftrightarrow$ $\\overline{G}$ perfect.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Strong Perfect Graph Theorem characterizes perfect graphs by forbidden:',
    options: [
      'Cliques',
      'Odd holes and odd anti-holes',
      'Triangles',
      'Bridges'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'SPGT: $G$ is perfect iff it has no odd hole or odd anti-hole as induced subgraph.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which class of graphs is NOT perfect?',
    options: [
      'Bipartite graphs',
      'Chordal graphs',
      'Odd cycles $C_{2k+1}$ for $k \\geq 2$',
      'Comparability graphs'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Odd cycles $C_5, C_7, \\ldots$ are odd holes, which are imperfect.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For the 5-cycle $C_5$: $\\omega(C_5) = 2$. What is $\\chi(C_5)$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: '$C_5$ is an odd cycle, so $\\chi(C_5) = 3 > 2 = \\omega(C_5)$. Not perfect.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Interval graphs (intersection graphs of intervals) are:',
    options: [
      'Never perfect',
      'Perfect because they are chordal',
      'Perfect only if connected',
      'Not necessarily chordal'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Interval graphs are chordal, and chordal graphs are perfect.',
  },
];
