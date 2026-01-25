import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A $p$-group is a group where:',
    options: [
      'The order is a prime $p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A $p$-group has order $p^n$ for some prime $p$ and non-negative integer $n$.',
  },
      'Every element has prime order',
      'The group has exactly $p$ elements',
      'The order is a power of a prime $p
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A $p$-group has order $p^n$ for some prime $p$ and non-negative integer $n$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A $p$-group has order $p^n$ for some prime $p$ and non-negative integer $n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The center of a nontrivial $p$-group is:',
    options: [
      'Nontrivial (contains more than just identity)',
      'Trivial',
      'The whole group',
      'Equal to a Sylow subgroup',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the class equation, $|G| = |Z(G)| + \\sum [G:C_G(g_i)]$. Since $p | |G|$ and $p | [G:C_G(g_i)]$, we get $p | |Z(G)|$, so $|Z(G)| > 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A group $G$ is nilpotent if:',
    options: [
      'It is a $p$-group',
      'It is abelian',
      'Its center is trivial',
      'It has a central series terminating at $G
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$G$ is nilpotent if it has a central series $\\{e\\} = Z_0 \\leq Z_1 \\leq \\cdots \\leq Z_n = G$ where $Z_{i+1}/Z_i \\leq Z(G/Z_i)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$G$ is nilpotent if it has a central series $\\{e\\} = Z_0 \\leq Z_1 \\leq \\cdots \\leq Z_n = G$ where $Z_{i+1}/Z_i \\leq Z(G/Z_i)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every finite $p$-group is:',
    options: [
      'Simple',
      'Cyclic',
      'Non-abelian',
      'Nilpotent',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Every $p$-group is nilpotent. The upper central series terminates at $G$ since the center is always nontrivial.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A finite group is nilpotent if and only if:',
    options: [
      'It is a $p$-group',
      'It is the direct product of its Sylow subgroups',
      'It is abelian',
      'It has a trivial center',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A finite group is nilpotent iff it is the direct product of its Sylow $p$-subgroups (iff all Sylow subgroups are normal).',
  },
];
