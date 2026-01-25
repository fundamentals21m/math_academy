import type { QuizQuestion } from './types';

export const section87Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A crossed homomorphism (or $1$-cocycle) $f: G \\to A$ satisfies:',
    options: [
      '$f(gh) = f(g) + f(h)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A crossed homomorphism satisfies $f(gh) = f(g) + g \\cdot f(h)$. When the $G$-action on $A$ is trivial, this reduces to an ordinary homomorphism.',
  },
      '$f(gh) = g \\cdot f(h)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A crossed homomorphism satisfies $f(gh) = f(g) + g \\cdot f(h)$. When the $G$-action on $A$ is trivial, this reduces to an ordinary homomorphism.',
  },
      '$f(gh) = f(g) + g \\cdot f(h)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A crossed homomorphism satisfies $f(gh) = f(g) + g \\cdot f(h)$. When the $G$-action on $A$ is trivial, this reduces to an ordinary homomorphism.',
  },
      '$f(gh) = f(g) \\cdot f(h)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A crossed homomorphism satisfies $f(gh) = f(g) + g \\cdot f(h)$. When the $G$-action on $A$ is trivial, this reduces to an ordinary homomorphism.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A crossed homomorphism satisfies $f(gh) = f(g) + g \\cdot f(h)$. When the $G$-action on $A$ is trivial, this reduces to an ordinary homomorphism.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A principal crossed homomorphism (or $1$-coboundary) is a crossed homomorphism of the form:',
    options: [
      '$f(g) = g \\cdot a - a$ for some fixed $a \\in A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A principal crossed homomorphism has the form $f(g) = g \\cdot a - a$ for some $a \\in A$. These are the coboundaries, and $H^1(G, A)$ is the quotient of cocycles by coboundaries.',
  },
      '$f(g) = 0$ for all $g
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A principal crossed homomorphism has the form $f(g) = g \\cdot a - a$ for some $a \\in A$. These are the coboundaries, and $H^1(G, A)$ is the quotient of cocycles by coboundaries.',
  },
      '$f(g) = a$ for some fixed $a \\in A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A principal crossed homomorphism has the form $f(g) = g \\cdot a - a$ for some $a \\in A$. These are the coboundaries, and $H^1(G, A)$ is the quotient of cocycles by coboundaries.',
  },
      '$f(g) = ga
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A principal crossed homomorphism has the form $f(g) = g \\cdot a - a$ for some $a \\in A$. These are the coboundaries, and $H^1(G, A)$ is the quotient of cocycles by coboundaries.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A principal crossed homomorphism has the form $f(g) = g \\cdot a - a$ for some $a \\in A$. These are the coboundaries, and $H^1(G, A)$ is the quotient of cocycles by coboundaries.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$H^1(G, A)$ is defined as:',
    options: [
      'The group of all crossed homomorphisms',
      'The kernel of the map $A \\to A^G
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$H^1(G, A) = Z^1(G, A)/B^1(G, A)$ where $Z^1$ is the group of crossed homomorphisms (cocycles) and $B^1$ is the subgroup of principal crossed homomorphisms (coboundaries).',
  },
      'The cokernel of $A^G \\to A
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$H^1(G, A) = Z^1(G, A)/B^1(G, A)$ where $Z^1$ is the group of crossed homomorphisms (cocycles) and $B^1$ is the subgroup of principal crossed homomorphisms (coboundaries).',
  },
      'The group of crossed homomorphisms modulo principal crossed homomorphisms',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$H^1(G, A) = Z^1(G, A)/B^1(G, A)$ where $Z^1$ is the group of crossed homomorphisms (cocycles) and $B^1$ is the subgroup of principal crossed homomorphisms (coboundaries).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $E/F$ is a Galois extension with $G = \\text{Gal}(E/F)$, then $H^1(G, E^*) = $:',
    options: [
      '$E^*/F^*
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Hilbert\'s Theorem 90 states that $H^1(G, E^*) = 0$ for a Galois extension $E/F$. Every crossed homomorphism $G \\to E^*$ is principal.',
  },
      '$0$ (Hilbert\\'s Theorem 90)',
      '$F^*
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Hilbert\'s Theorem 90 states that $H^1(G, E^*) = 0$ for a Galois extension $E/F$. Every crossed homomorphism $G \\to E^*$ is principal.',
  },
      '$G
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Hilbert\'s Theorem 90 states that $H^1(G, E^*) = 0$ for a Galois extension $E/F$. Every crossed homomorphism $G \\to E^*$ is principal.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Hilbert\'s Theorem 90 states that $H^1(G, E^*) = 0$ for a Galois extension $E/F$. Every crossed homomorphism $G \\to E^*$ is principal.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$H^1(G, A)$ classifies:',
    options: [
      'Quotients of $G
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$H^1(G, A)$ classifies torsors for $A$ with a compatible $G$-action. In Galois cohomology, this interpretation is fundamental for understanding twists of algebraic structures.',
  },
      'Torsors (principal homogeneous spaces) for $A$ over a point with $G$-action',
      'Subgroups of $G
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$H^1(G, A)$ classifies torsors for $A$ with a compatible $G$-action. In Galois cohomology, this interpretation is fundamental for understanding twists of algebraic structures.',
  },
      'Automorphisms of $A
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$H^1(G, A)$ classifies torsors for $A$ with a compatible $G$-action. In Galois cohomology, this interpretation is fundamental for understanding twists of algebraic structures.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$H^1(G, A)$ classifies torsors for $A$ with a compatible $G$-action. In Galois cohomology, this interpretation is fundamental for understanding twists of algebraic structures.',
  },
];
