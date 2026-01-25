import type { QuizQuestion } from './types';

export const section88Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: '$H^2(G, A)$ classifies:',
    options: [
      'Subgroups of $G
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$H^2(G, A)$ classifies equivalence classes of group extensions $1 \\to A \\to E \\to G \\to 1$ where the $G$-action on $A$ (by conjugation) is the given one.',
  },
      'Automorphisms of $G
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$H^2(G, A)$ classifies equivalence classes of group extensions $1 \\to A \\to E \\to G \\to 1$ where the $G$-action on $A$ (by conjugation) is the given one.',
  },
      'Extensions of $G$ by $A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$H^2(G, A)$ classifies equivalence classes of group extensions $1 \\to A \\to E \\to G \\to 1$ where the $G$-action on $A$ (by conjugation) is the given one.',
  },
      'Homomorphisms from $G$ to $A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$H^2(G, A)$ classifies equivalence classes of group extensions $1 \\to A \\to E \\to G \\to 1$ where the $G$-action on $A$ (by conjugation) is the given one.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$H^2(G, A)$ classifies equivalence classes of group extensions $1 \\to A \\to E \\to G \\to 1$ where the $G$-action on $A$ (by conjugation) is the given one.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A central extension of $G$ by $A$ is an extension where:',
    options: [
      '$A$ is in the center of the extension group $E
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In a central extension $1 \\to A \\to E \\to G \\to 1$, the subgroup $A$ lies in the center of $E$. This corresponds to the trivial $G$-action on $A$.',
  },
      '$A$ is trivial',
      '$G$ is abelian',
      'The extension splits',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In a central extension $1 \\to A \\to E \\to G \\to 1$, the subgroup $A$ lies in the center of $E$. This corresponds to the trivial $G$-action on $A$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The extension $1 \\to A \\to E \\to G \\to 1$ corresponds to the zero element in $H^2(G, A)$ if and only if:',
    options: [
      'The extension is central',
      '$G$ is trivial',
      '$A$ is trivial',
      'The extension splits (has a section)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The zero cohomology class corresponds to the split extension, where $E \\cong A \\rtimes G$ (semidirect product). A splitting is a group homomorphism $s: G \\to E$ with $\\pi \\circ s = \\text{id}_G$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The $2$-cocycle condition for $\\alpha: G \\times G \\to A$ is:',
    options: [
      '$\\alpha(g, h) = \\alpha(h, g)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The $2$-cocycle condition is the associativity constraint. Writing it additively: $g \\cdot \\alpha(h, k) - \\alpha(gh, k) + \\alpha(g, hk) - \\alpha(g, h) = 0$ for all $g, h, k \\in G$.',
  },
      '$\\alpha(g, h) + \\alpha(gh, k) = \\alpha(g, hk) + \\alpha(h, k)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The $2$-cocycle condition is the associativity constraint. Writing it additively: $g \\cdot \\alpha(h, k) - \\alpha(gh, k) + \\alpha(g, hk) - \\alpha(g, h) = 0$ for all $g, h, k \\in G$.',
  },
      '$\\alpha(g, e) = \\alpha(e, g) = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The $2$-cocycle condition is the associativity constraint. Writing it additively: $g \\cdot \\alpha(h, k) - \\alpha(gh, k) + \\alpha(g, hk) - \\alpha(g, h) = 0$ for all $g, h, k \\in G$.',
  },
      '$g \\cdot \\alpha(h, k) - \\alpha(gh, k) + \\alpha(g, hk) - \\alpha(g, h) = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The $2$-cocycle condition is the associativity constraint. Writing it additively: $g \\cdot \\alpha(h, k) - \\alpha(gh, k) + \\alpha(g, hk) - \\alpha(g, h) = 0$ for all $g, h, k \\in G$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The $2$-cocycle condition is the associativity constraint. Writing it additively: $g \\cdot \\alpha(h, k) - \\alpha(gh, k) + \\alpha(g, hk) - \\alpha(g, h) = 0$ for all $g, h, k \\in G$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Schur multiplier $H^2(G, \\mathbb{C}^*)$ for a finite group $G$:',
    options: [
      'Is a finite abelian group',
      'Is always trivial',
      'Is always infinite',
      'Equals $G$ itself',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Schur multiplier $H^2(G, \\mathbb{C}^*)$ (with trivial $G$-action) is a finite abelian group for any finite group $G$. It measures obstructions to lifting projective representations to linear representations.',
  },
];
