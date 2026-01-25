import type { QuizQuestion } from './types';

export const section81Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The prime spectrum $\\text{Spec } R$ of a ring $R$ is:',
    options: [
      'The set of all ideals of $R$',
      'The set of all maximal ideals of $R$',
      'The set of all prime ideals of $R$',
      'The set of all nilpotent elements of $R$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\text{Spec } R$ is the set of all prime ideals of $R$. It is equipped with the Zariski topology, making it a topological space fundamental to algebraic geometry.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The closed sets in the Zariski topology on $\\text{Spec } R$ are:',
    options: [
      '$V(I) = \\{P \\in \\text{Spec } R : P \\supseteq I\\}$ for ideals $I
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A closed set in the Zariski topology is $V(I) = \\{P \\in \\text{Spec } R : I \\subseteq P\\}$, the set of prime ideals containing $I$. These form the closed sets.',
  },
      'Complements of principal ideals',
      '$V(I) = \\{P \\in \\text{Spec } R : P \\subseteq I\\}$ for ideals $I
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A closed set in the Zariski topology is $V(I) = \\{P \\in \\text{Spec } R : I \\subseteq P\\}$, the set of prime ideals containing $I$. These form the closed sets.',
  },
      'Finite subsets of $\\text{Spec } R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A closed set in the Zariski topology is $V(I) = \\{P \\in \\text{Spec } R : I \\subseteq P\\}$, the set of prime ideals containing $I$. These form the closed sets.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A closed set in the Zariski topology is $V(I) = \\{P \\in \\text{Spec } R : I \\subseteq P\\}$, the set of prime ideals containing $I$. These form the closed sets.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The basic open sets in the Zariski topology on $\\text{Spec } R$ are:',
    options: [
      '$V(f) = \\{P : f \\in P\\}$ for $f \\in R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The basic open sets are $D(f) = \\text{Spec } R \\setminus V(f) = \\{P \\in \\text{Spec } R : f \\notin P\\}$. These form a basis for the Zariski topology.',
  },
      'Open balls around each prime ideal',
      'Complements of maximal ideals',
      '$D(f) = \\{P : f \\notin P\\}$ for $f \\in R
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The basic open sets are $D(f) = \\text{Spec } R \\setminus V(f) = \\{P \\in \\text{Spec } R : f \\notin P\\}$. These form a basis for the Zariski topology.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The basic open sets are $D(f) = \\text{Spec } R \\setminus V(f) = \\{P \\in \\text{Spec } R : f \\notin P\\}$. These form a basis for the Zariski topology.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the Zariski topology, $\\text{Spec } R$ is:',
    options: [
      'Always Hausdorff',
      'Never Hausdorff (unless $R$ has Krull dimension $0$)',
      'Hausdorff if and only if $R$ is a field',
      'Hausdorff if and only if $R$ is Noetherian'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Zariski topology is rarely Hausdorff. Points (prime ideals) are not separated unless they are both maximal. $\\text{Spec } R$ is $T_0$ but typically not $T_1$ or Hausdorff.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The irreducible closed sets in $\\text{Spec } R$ correspond to:',
    options: [
      'Maximal ideals',
      'Prime ideals',
      'Radical ideals',
      'Principal ideals',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Irreducible closed sets in $\\text{Spec } R$ are exactly $V(P) = \\overline{\\{P\\}}$ for prime ideals $P$. Each prime ideal defines an irreducible closed set (its closure), and all irreducible closed sets arise this way.',
  },
];
