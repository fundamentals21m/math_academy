import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A walk in a graph is:',
    options: [
      'A sequence of vertices where each consecutive pair is adjacent',
      'A sequence of distinct vertices',
      'A closed sequence of vertices',
      'A sequence with no repeated edges'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A walk is a sequence $v_0, v_1, \\ldots, v_k$ where $v_{i-1}v_i \\in E(G)$ for all $i$. Vertices and edges may repeat.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the difference between a path and a trail?',
    options: [
      'A path allows repeated vertices, a trail does not',
      'A trail allows repeated vertices but not edges; a path allows neither',
      'There is no difference',
      'A path must be closed, a trail must be open'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A trail has no repeated edges. A path has no repeated vertices (and hence no repeated edges either).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A graph $G$ has an Eulerian circuit if and only if:',
    options: [
      '$G$ is connected and every vertex has even degree',
      '$G$ is connected and every vertex has odd degree',
      '$G$ is connected and has an even number of vertices',
      '$G$ has an even number of edges'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A connected graph has an Eulerian circuit (closed trail using every edge exactly once) iff every vertex has even degree.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A connected graph $G$ has an Eulerian trail (but not circuit) if and only if:',
    options: [
      'Every vertex has odd degree',
      'Exactly two vertices have odd degree',
      'At most two vertices have odd degree',
      'The graph has an even number of edges'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An Eulerian trail exists iff $G$ is connected and has exactly 0 or 2 vertices of odd degree. With 0 odd-degree vertices, it is a circuit.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'In a cycle $C_6$, what is the length of the longest path?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'hard',
    explanation: 'In $C_6$, we can traverse 5 edges to visit all 6 vertices without repeating. The 6th edge would close the cycle.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Königsberg Bridge Problem asked whether there exists:',
    options: [
      'A Hamiltonian cycle through 7 bridges',
      'An Eulerian trail through 7 bridges',
      'A spanning tree of 7 bridges',
      'A perfect matching of 7 bridges'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Euler proved no Eulerian trail exists because more than 2 vertices have odd degree in the multigraph representing Königsberg.',
  },
];
