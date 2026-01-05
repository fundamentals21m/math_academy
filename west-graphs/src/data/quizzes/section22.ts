import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Tait\'s Theorem connects Hamiltonian cycles in planar graphs to:',
    options: [
      'Vertex coloring',
      'Proper 3-edge-coloring of cubic bridgeless planar graphs',
      'Spanning trees',
      'Perfect matchings'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Tait: a 3-connected cubic planar graph is Hamiltonian iff it\'s 3-edge-colorable.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Grinberg condition is:',
    options: [
      'Sufficient for Hamiltonicity',
      'A necessary condition involving face sizes',
      'Equivalent to planarity',
      'Related to chromatic number'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Grinberg: if a plane graph has a Hamiltonian cycle, face sizes satisfy a specific equation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A nowhere-zero $k$-flow assigns:',
    options: [
      'Colors from $\\{1, \\ldots, k\\}$ to vertices',
      'Non-zero values from a group to edges satisfying flow conservation',
      'Orientations to edges',
      'Weights to vertices'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A nowhere-zero flow assigns group elements (typically $\\mathbb{Z}_k$) to oriented edges with flow conservation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Tutte\'s flow conjectures relate flows to:',
    options: [
      'Matchings',
      'Face colorings via duality',
      'Spanning trees',
      'Vertex connectivity'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Flows on planar graphs correspond to colorings of the dual; nowhere-zero $k$-flow dualizes to $k$-face-coloring.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Four Color Theorem is equivalent to:',
    options: [
      'Every planar graph has a nowhere-zero 4-flow',
      'Every bridgeless planar graph has a nowhere-zero 4-flow',
      'Every cubic planar graph has a Hamiltonian cycle',
      'Every planar graph is 3-degenerate'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By flow-coloring duality, 4CT is equivalent to: bridgeless planar graphs have nowhere-zero 4-flows.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The 5-Flow Conjecture (Tutte) states:',
    options: [
      'Every planar graph has a 5-flow',
      'Every bridgeless graph has a nowhere-zero 5-flow',
      'Every graph has chromatic number at most 5',
      'Every 5-connected graph is Hamiltonian'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Tutte\'s 5-Flow Conjecture: every bridgeless graph has a nowhere-zero 5-flow. Still open!',
  },
];
