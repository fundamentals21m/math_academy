import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An automorphism of a group $G$ is:',
    options: [
      'Any homomorphism from $G$ to itself',
      'An isomorphism from $G$ to itself',
      'Any bijection from $G$ to itself',
      'A homomorphism with trivial kernel'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An automorphism is an isomorphism $\\phi: G \\to G$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An inner automorphism of $G$ is an automorphism of the form:',
    options: [
      '$\\phi_g(x) = gx$ for fixed $g \\in G$',
      '$\\phi_g(x) = xg$ for fixed $g \\in G$',
      '$\\phi_g(x) = gxg^{-1}$ for fixed $g \\in G$',
      '$\\phi_g(x) = x^g$ for fixed $g \\in G$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Inner automorphisms are conjugation maps: $\\phi_g(x) = gxg^{-1}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The group of all automorphisms of $G$ is denoted:',
    options: [
      '$\\text{Hom}(G)$',
      '$\\text{Aut}(G)$',
      '$\\text{End}(G)$',
      '$\\text{Iso}(G)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\text{Aut}(G)$ is the group of automorphisms under composition.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The inner automorphism group $\\text{Inn}(G)$ is isomorphic to:',
    options: [
      '$G$',
      '$G/Z(G)$',
      '$Z(G)$',
      '$\\text{Aut}(G)/G$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The map $g \\mapsto \\phi_g$ has kernel $Z(G)$, so $\\text{Inn}(G) \\cong G/Z(G)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The outer automorphism group $\\text{Out}(G)$ is defined as:',
    options: [
      '$\\text{Aut}(G) \\setminus \\text{Inn}(G)$',
      '$\\text{Aut}(G)/\\text{Inn}(G)$',
      '$\\text{Inn}(G)/\\text{Aut}(G)$',
      '$\\text{Aut}(G) \\cap \\text{Inn}(G)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\text{Out}(G) = \\text{Aut}(G)/\\text{Inn}(G)$ measures how many automorphisms are not inner.',
  },
];
