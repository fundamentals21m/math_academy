import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A group $G$ is simple if:',
    options: [
      '$G$ has no subgroups',
      '$G$ has no proper normal subgroups (only $\\{e\\}$ and $G$)',
      '$G$ is abelian',
      '$G$ is cyclic of prime order'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A simple group has no proper nontrivial normal subgroups.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A composition series for a group $G$ is:',
    options: [
      'Any chain of subgroups from $\\{e\\}$ to $G$',
      'A chain where consecutive quotients are abelian',
      'A chain where consecutive quotients are simple',
      'A chain where all subgroups are normal in $G$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A composition series is $\\{e\\} = G_0 \\triangleleft G_1 \\triangleleft \\cdots \\triangleleft G_n = G$ where each $G_{i+1}/G_i$ is simple.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Jordan-Holder Theorem states that:',
    options: [
      'Every group has a unique composition series',
      'Composition series may have different lengths',
      'The composition factors are unique up to permutation and isomorphism',
      'Simple groups have no composition series'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Jordan-Holder: Any two composition series of $G$ have the same length and the same factors up to ordering and isomorphism.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following groups is simple?',
    options: [
      '$\\mathbb{Z}/4\\mathbb{Z}$',
      '$\\mathbb{Z}/6\\mathbb{Z}$',
      '$\\mathbb{Z}/5\\mathbb{Z}$',
      '$S_3$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}/5\\mathbb{Z}$ has prime order, so its only subgroups are $\\{0\\}$ and itself, making it simple.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A group $G$ is solvable if:',
    options: [
      'It has a composition series with abelian factors',
      'It has a composition series',
      'It is simple',
      'It has a composition series with cyclic factors of prime order'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A group is solvable if it has a subnormal series with abelian factors (or equivalently, if all composition factors are of prime order).',
  },
];
