import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The dual space $V^*$ of a vector space $V$ over $F$ is:',
    options: [
      '$V$ itself',
      'The space of all bilinear forms',
      'The space of all linear functionals $V \\to F
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$V^* = \\text{Hom}_F(V, F)$ is the space of all linear maps from $V$ to the base field $F$. Elements of $V^*$ are called linear functionals.',
  },
      'The zero space',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$V^* = \\text{Hom}_F(V, F)$ is the space of all linear maps from $V$ to the base field $F$. Elements of $V^*$ are called linear functionals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $V$ is finite-dimensional over $F$, then $\\dim(V^*) = $',
    options: [
      '$\\dim(V)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For finite-dimensional $V$, $\\dim(V^*) = \\dim(V)$. If $\\{e_1, \\ldots, e_n\\}$ is a basis of $V$, there is a dual basis $\\{e_1^*, \\ldots, e_n^*\\}$ of $V^*$.',
  },
      '$0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For finite-dimensional $V$, $\\dim(V^*) = \\dim(V)$. If $\\{e_1, \\ldots, e_n\\}$ is a basis of $V$, there is a dual basis $\\{e_1^*, \\ldots, e_n^*\\}$ of $V^*$.',
  },
      '$2\\dim(V)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For finite-dimensional $V$, $\\dim(V^*) = \\dim(V)$. If $\\{e_1, \\ldots, e_n\\}$ is a basis of $V$, there is a dual basis $\\{e_1^*, \\ldots, e_n^*\\}$ of $V^*$.',
  },
      '$(\\dim(V))^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For finite-dimensional $V$, $\\dim(V^*) = \\dim(V)$. If $\\{e_1, \\ldots, e_n\\}$ is a basis of $V$, there is a dual basis $\\{e_1^*, \\ldots, e_n^*\\}$ of $V^*$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For finite-dimensional $V$, $\\dim(V^*) = \\dim(V)$. If $\\{e_1, \\ldots, e_n\\}$ is a basis of $V$, there is a dual basis $\\{e_1^*, \\ldots, e_n^*\\}$ of $V^*$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The dual basis $\\{e_1^*, \\ldots, e_n^*\\}$ is defined by:',
    options: [
      '$e_i^*(e_j) = 0$ for all $i, j
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The dual basis is defined by $e_i^*(e_j) = \\delta_{ij}$: it equals $1$ if $i = j$ and $0$ otherwise. This uniquely determines each $e_i^*$.',
  },
      '$e_i^*(e_j) = \\delta_{ij}$ (Kronecker delta)',
      '$e_i^* = e_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The dual basis is defined by $e_i^*(e_j) = \\delta_{ij}$: it equals $1$ if $i = j$ and $0$ otherwise. This uniquely determines each $e_i^*$.',
  },
      '$e_i^*(e_j) = 1$ for all $i, j
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The dual basis is defined by $e_i^*(e_j) = \\delta_{ij}$: it equals $1$ if $i = j$ and $0$ otherwise. This uniquely determines each $e_i^*$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The dual basis is defined by $e_i^*(e_j) = \\delta_{ij}$: it equals $1$ if $i = j$ and $0$ otherwise. This uniquely determines each $e_i^*$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The double dual $V^{**}$ is related to $V$ by:',
    options: [
      '$V^{**} = V$ always',
      '$V^{**} = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For finite-dimensional $V$, the map $v \\mapsto \\text{ev}_v$ (where $\\text{ev}_v(f) = f(v)$) is a natural isomorphism $V \\to V^{**}$. This is "canonical" (basis-independent).',
  },
      'There is no relationship',
      'There is a natural (canonical) isomorphism $V \\to V^{**}$ for finite-dimensional $V
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For finite-dimensional $V$, the map $v \\mapsto \\text{ev}_v$ (where $\\text{ev}_v(f) = f(v)$) is a natural isomorphism $V \\to V^{**}$. This is "canonical" (basis-independent).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For finite-dimensional $V$, the map $v \\mapsto \\text{ev}_v$ (where $\\text{ev}_v(f) = f(v)$) is a natural isomorphism $V \\to V^{**}$. This is "canonical" (basis-independent).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $T: V \\to W$ is linear, the transpose (dual) map $T^*: W^* \\to V^*$ is defined by:',
    options: [
      '$T^*(f) = T \\circ f
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The dual map $T^*: W^* \\to V^*$ is defined by $(T^*f)(v) = f(T(v))$, or equivalently $T^*(f) = f \\circ T$. Note the reversal of direction.',
  },
      '$T^* = T
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dual map $T^*: W^* \\to V^*$ is defined by $(T^*f)(v) = f(T(v))$, or equivalently $T^*(f) = f \\circ T$. Note the reversal of direction.',
  },
      '$T^*(f) = f(T)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dual map $T^*: W^* \\to V^*$ is defined by $(T^*f)(v) = f(T(v))$, or equivalently $T^*(f) = f \\circ T$. Note the reversal of direction.',
  },
      '$T^*(f) = f \\circ T
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dual map $T^*: W^* \\to V^*$ is defined by $(T^*f)(v) = f(T(v))$, or equivalently $T^*(f) = f \\circ T$. Note the reversal of direction.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The dual map $T^*: W^* \\to V^*$ is defined by $(T^*f)(v) = f(T(v))$, or equivalently $T^*(f) = f \\circ T$. Note the reversal of direction.',
  },
];
