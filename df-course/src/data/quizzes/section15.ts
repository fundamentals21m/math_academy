import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A subgroup $N$ of $G$ is normal if and only if:',
    options: [
      '$gn = ng$ for all $g \\in G, n \\in N
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$N \\trianglelefteq G$ iff $gN = Ng$ for all $g$, i.e., left and right cosets coincide.',
  },
      '$N$ is abelian',
      '$N$ is cyclic',
      '$gN = Ng$ for all $g \\in G
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$N \\trianglelefteq G$ iff $gN = Ng$ for all $g$, i.e., left and right cosets coincide.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$N \\trianglelefteq G$ iff $gN = Ng$ for all $g$, i.e., left and right cosets coincide.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The quotient group $G/N$ is defined when:',
    options: [
      '$N$ is any subgroup of $G
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The quotient $G/N$ is a group (with coset multiplication) if and only if $N$ is normal in $G$.',
  },
      '$N$ is cyclic',
      '$N$ is a normal subgroup of $G
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The quotient $G/N$ is a group (with coset multiplication) if and only if $N$ is normal in $G$.',
  },
      '$G$ is abelian',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The quotient $G/N$ is a group (with coset multiplication) if and only if $N$ is normal in $G$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The elements of $G/N$ are:',
    options: [
      'Elements of $G$ that commute with $N
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Elements of $G/N$ are the cosets $gN = \\{gn : n \\in N\\}$.',
  },
      'Cosets $gN$ for $g \\in G
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Elements of $G/N$ are the cosets $gN = \\{gn : n \\in N\\}$.',
  },
      'Elements of $G$ not in $N
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Elements of $G/N$ are the cosets $gN = \\{gn : n \\in N\\}$.',
  },
      'Normal subgroups of $G
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Elements of $G/N$ are the cosets $gN = \\{gn : n \\in N\\}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Elements of $G/N$ are the cosets $gN = \\{gn : n \\in N\\}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $|G| = 20$ and $|N| = 4$, what is $|G/N|$?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: '$|G/N| = |G|/|N| = 20/4 = 5$ by Lagrange\'s theorem.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is always a normal subgroup of $G$?',
    options: [
      'The center $Z(G)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The center $Z(G) = \\{g \\in G : gx = xg \\text{ for all } x\\}$ is always normal since $xZ(G)x^{-1} = Z(G)$ for all $x$.',
  },
      'Any cyclic subgroup',
      'The intersection of two subgroups',
      'Any subgroup of index 3',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The center $Z(G) = \\{g \\in G : gx = xg \\text{ for all } x\\}$ is always normal since $xZ(G)x^{-1} = Z(G)$ for all $x$.',
  },
];
