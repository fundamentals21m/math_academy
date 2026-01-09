import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $\\phi: G \\to H$ between groups is a homomorphism if:',
    options: [
      '$\\phi(ab) = \\phi(a)\\phi(b)$ for all $a, b \\in G$',
      '$\\phi(a + b) = \\phi(a) + \\phi(b)$ for all $a, b \\in G$',
      '$\\phi$ is bijective',
      '$\\phi(e_G) = e_H$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A homomorphism preserves the group operation: $\\phi(ab) = \\phi(a)\\phi(b)$. Note that $\\phi(e_G) = e_H$ follows from this property.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The kernel of a group homomorphism $\\phi: G \\to H$ is:',
    options: [
      '$\\{h \\in H : h = \\phi(g) \\text{ for some } g \\in G\\}$',
      '$\\{g \\in G : \\phi(g) = e_H\\}$',
      '$\\{g \\in G : \\phi(g) = g\\}$',
      '$\\{h \\in H : \\phi^{-1}(h) \\text{ exists}\\}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\ker(\\phi) = \\{g \\in G : \\phi(g) = e_H\\}$ is the set of elements mapped to the identity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A group homomorphism $\\phi: G \\to H$ is an isomorphism if and only if:',
    options: [
      '$\\ker(\\phi) = G$',
      '$\\ker(\\phi) = \\{e_G\\}$ and $\\phi$ is surjective',
      '$\\phi(G) = H$',
      '$\\ker(\\phi) = \\{e_G\\}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An isomorphism is a bijective homomorphism. $\\phi$ is injective iff $\\ker(\\phi) = \\{e_G\\}$, and surjective iff $\\phi(G) = H$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\phi: G \\to H$ is a homomorphism, then $\\phi(g^{-1}) = $',
    options: [
      '$\\phi(g)$',
      '$\\phi(g)^{-1}$',
      '$e_H$',
      '$g^{-1}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Homomorphisms preserve inverses: $\\phi(g)\\phi(g^{-1}) = \\phi(gg^{-1}) = \\phi(e_G) = e_H$, so $\\phi(g^{-1}) = \\phi(g)^{-1}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The image (range) of a group homomorphism $\\phi: G \\to H$ is:',
    options: [
      'Always equal to $H$',
      'Always a subgroup of $H$',
      'Always a subgroup of $G$',
      'Not necessarily a subgroup'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The image $\\phi(G) = \\{\\phi(g) : g \\in G\\}$ is always a subgroup of $H$.',
  },
];
