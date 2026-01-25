import type { QuizQuestion } from './types';

export const section72Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The cyclotomic extension $\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}$ has degree:',
    options: [
      '$n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since the cyclotomic polynomial $\\Phi_n(x)$ is irreducible over $\\mathbb{Q}$ and has degree $\\phi(n)$, we have $[\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\phi(n)$.',
  },
      '$n - 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since the cyclotomic polynomial $\\Phi_n(x)$ is irreducible over $\\mathbb{Q}$ and has degree $\\phi(n)$, we have $[\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\phi(n)$.',
  },
      '$\\phi(n)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since the cyclotomic polynomial $\\Phi_n(x)$ is irreducible over $\\mathbb{Q}$ and has degree $\\phi(n)$, we have $[\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\phi(n)$.',
  },
      '$2^{\\phi(n)}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since the cyclotomic polynomial $\\Phi_n(x)$ is irreducible over $\\mathbb{Q}$ and has degree $\\phi(n)$, we have $[\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\phi(n)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since the cyclotomic polynomial $\\Phi_n(x)$ is irreducible over $\\mathbb{Q}$ and has degree $\\phi(n)$, we have $[\\mathbb{Q}(\\zeta_n):\\mathbb{Q}] = \\phi(n)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Galois group $\\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q})$ is isomorphic to:',
    options: [
      '$\\mathbb{Z}/n\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Each automorphism $\\sigma_a \\in \\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q})$ is determined by $\\sigma_a(\\zeta_n) = \\zeta_n^a$ where $\\gcd(a, n) = 1$. This gives an isomorphism $\\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}) \\cong (\\mathbb{Z}/n\\mathbb{Z})^*$.',
  },
      '$(\\mathbb{Z}/n\\mathbb{Z})^*
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each automorphism $\\sigma_a \\in \\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q})$ is determined by $\\sigma_a(\\zeta_n) = \\zeta_n^a$ where $\\gcd(a, n) = 1$. This gives an isomorphism $\\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}) \\cong (\\mathbb{Z}/n\\mathbb{Z})^*$.',
  },
      '$S_n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each automorphism $\\sigma_a \\in \\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q})$ is determined by $\\sigma_a(\\zeta_n) = \\zeta_n^a$ where $\\gcd(a, n) = 1$. This gives an isomorphism $\\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}) \\cong (\\mathbb{Z}/n\\mathbb{Z})^*$.',
  },
      '$\\mathbb{Z}/\\phi(n)\\mathbb{Z}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each automorphism $\\sigma_a \\in \\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q})$ is determined by $\\sigma_a(\\zeta_n) = \\zeta_n^a$ where $\\gcd(a, n) = 1$. This gives an isomorphism $\\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}) \\cong (\\mathbb{Z}/n\\mathbb{Z})^*$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each automorphism $\\sigma_a \\in \\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q})$ is determined by $\\sigma_a(\\zeta_n) = \\zeta_n^a$ where $\\gcd(a, n) = 1$. This gives an isomorphism $\\text{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}) \\cong (\\mathbb{Z}/n\\mathbb{Z})^*$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The cyclotomic extension $\\mathbb{Q}(\\zeta_p)/\\mathbb{Q}$ for prime $p$ is:',
    options: [
      'A cyclic extension of degree $p - 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For prime $p$, $\\text{Gal}(\\mathbb{Q}(\\zeta_p)/\\mathbb{Q}) \\cong (\\mathbb{Z}/p\\mathbb{Z})^* \\cong \\mathbb{Z}/(p-1)\\mathbb{Z}$, which is cyclic of order $p - 1$.',
  },
      'A cyclic extension of degree $p
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For prime $p$, $\\text{Gal}(\\mathbb{Q}(\\zeta_p)/\\mathbb{Q}) \\cong (\\mathbb{Z}/p\\mathbb{Z})^* \\cong \\mathbb{Z}/(p-1)\\mathbb{Z}$, which is cyclic of order $p - 1$.',
  },
      'A non-abelian extension',
      'An abelian but non-cyclic extension',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For prime $p$, $\\text{Gal}(\\mathbb{Q}(\\zeta_p)/\\mathbb{Q}) \\cong (\\mathbb{Z}/p\\mathbb{Z})^* \\cong \\mathbb{Z}/(p-1)\\mathbb{Z}$, which is cyclic of order $p - 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The real subfield of $\\mathbb{Q}(\\zeta_n)$ is:',
    options: [
      '$\\mathbb{Q}(\\zeta_n + \\zeta_n^{-1})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The maximal real subfield of $\\mathbb{Q}(\\zeta_n)$ is $\\mathbb{Q}(\\zeta_n + \\zeta_n^{-1}) = \\mathbb{Q}(2\\cos(2\\pi/n))$, which equals $\\mathbb{Q}(\\cos(2\\pi/n))$. It has degree $\\phi(n)/2$ over $\\mathbb{Q}$.',
  },
      '$\\mathbb{Q}(\\cos(2\\pi/n))
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The maximal real subfield of $\\mathbb{Q}(\\zeta_n)$ is $\\mathbb{Q}(\\zeta_n + \\zeta_n^{-1}) = \\mathbb{Q}(2\\cos(2\\pi/n))$, which equals $\\mathbb{Q}(\\cos(2\\pi/n))$. It has degree $\\phi(n)/2$ over $\\mathbb{Q}$.',
  },
      '$\\mathbb{Q}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The maximal real subfield of $\\mathbb{Q}(\\zeta_n)$ is $\\mathbb{Q}(\\zeta_n + \\zeta_n^{-1}) = \\mathbb{Q}(2\\cos(2\\pi/n))$, which equals $\\mathbb{Q}(\\cos(2\\pi/n))$. It has degree $\\phi(n)/2$ over $\\mathbb{Q}$.',
  },
      'Both B and C',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The maximal real subfield of $\\mathbb{Q}(\\zeta_n)$ is $\\mathbb{Q}(\\zeta_n + \\zeta_n^{-1}) = \\mathbb{Q}(2\\cos(2\\pi/n))$, which equals $\\mathbb{Q}(\\cos(2\\pi/n))$. It has degree $\\phi(n)/2$ over $\\mathbb{Q}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\mathbb{Q}(\\zeta_8)$ contains which of the following?',
    options: [
      '$\\sqrt{2}$ only',
      '$i$ only',
      'Both $\\sqrt{2}$ and $i
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\zeta_8 = e^{2\\pi i/8} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i$. Thus $\\zeta_8 + \\zeta_8^{-1} = \\sqrt{2}$ and $\\zeta_8^2 = i$. So $\\mathbb{Q}(\\zeta_8)$ contains both $\\sqrt{2}$ and $i$.',
  },
      'Neither $\\sqrt{2}$ nor $i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\zeta_8 = e^{2\\pi i/8} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i$. Thus $\\zeta_8 + \\zeta_8^{-1} = \\sqrt{2}$ and $\\zeta_8^2 = i$. So $\\mathbb{Q}(\\zeta_8)$ contains both $\\sqrt{2}$ and $i$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\zeta_8 = e^{2\\pi i/8} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}i$. Thus $\\zeta_8 + \\zeta_8^{-1} = \\sqrt{2}$ and $\\zeta_8^2 = i$. So $\\mathbb{Q}(\\zeta_8)$ contains both $\\sqrt{2}$ and $i$.',
  },
];
