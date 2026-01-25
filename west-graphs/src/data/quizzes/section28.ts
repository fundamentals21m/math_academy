import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The spectrum of a graph $G$ is:',
    options: [
      'Its degree sequence',
      'The chromatic number',
      'The multiset of eigenvalues of its adjacency matrix',
      'The set of cycle lengths',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Spectrum = eigenvalues of the adjacency matrix $A(G)$, listed with multiplicities.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Laplacian matrix of $G$ is:',
    options: [
      '$A(G)$',
      '$D(G) - A(G)$ where $D$ is the degree matrix',
      '$A(G)^2$',
      'The incidence matrix'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Laplacian $L = D - A$ where $D_{ii} = d(v_i)$ and $A$ is the adjacency matrix.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The smallest eigenvalue of the Laplacian is always:',
    options: [
      '1',
      '$-1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The all-ones vector $(1,\\ldots,1)^T$ is always a Laplacian eigenvector with eigenvalue 0.',
  },
      '$n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The all-ones vector $(1,\\ldots,1)^T$ is always a Laplacian eigenvector with eigenvalue 0.',
  },
      '0',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The all-ones vector $(1,\\ldots,1)^T$ is always a Laplacian eigenvector with eigenvalue 0.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The algebraic connectivity $a(G) = \\mu_2$ is:',
    options: [
      'The second-smallest Laplacian eigenvalue',
      'The largest eigenvalue',
      'The trace',
      'The determinant',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Algebraic connectivity = second-smallest Laplacian eigenvalue. $a(G) > 0$ iff $G$ connected.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A strongly regular graph with parameters $(n,k,\\lambda,\\mu)$ has:',
    options: [
      'Exactly 2 distinct eigenvalues',
      '$n$ distinct eigenvalues',
      'Exactly 3 distinct eigenvalues',
      'All equal eigenvalues',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Strongly regular graphs have exactly 3 distinct adjacency eigenvalues: $k$, $r$, and $s$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Hoffman bound uses eigenvalues to bound:',
    options: [
      'The diameter',
      'The independence number',
      'The number of edges',
      'The girth'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Hoffman: $\\alpha(G) \\leq n \\cdot (-\\lambda_n)/(\\lambda_1 - \\lambda_n)$ using extreme eigenvalues.',
  },
];
