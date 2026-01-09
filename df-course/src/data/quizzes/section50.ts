import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An $R$-module homomorphism $\\phi: M \\to N$ must satisfy:',
    options: [
      '$\\phi(m_1 + m_2) = \\phi(m_1) + \\phi(m_2)$ only',
      '$\\phi(rm) = r\\phi(m)$ only',
      'Both $\\phi(m_1 + m_2) = \\phi(m_1) + \\phi(m_2)$ and $\\phi(rm) = r\\phi(m)$',
      '$\\phi$ must be bijective'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A module homomorphism must preserve both operations: addition ($\\phi(m_1 + m_2) = \\phi(m_1) + \\phi(m_2)$) and scalar multiplication ($\\phi(rm) = r\\phi(m)$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The kernel of an $R$-module homomorphism $\\phi: M \\to N$ is:',
    options: [
      'A submodule of $N$',
      'A submodule of $M$',
      'An ideal of $R$',
      'Always $\\{0\\}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\ker(\\phi) = \\{m \\in M : \\phi(m) = 0\\}$ is a submodule of $M$. It is closed under addition and scalar multiplication.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $N$ is a submodule of $M$, then $M/N$ is:',
    options: [
      'A ring',
      'An $R$-module called the quotient module',
      'A field',
      'Not well-defined'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The quotient $M/N$ is an $R$-module with operations: $(m_1 + N) + (m_2 + N) = (m_1 + m_2) + N$ and $r(m + N) = rm + N$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The First Isomorphism Theorem for modules states:',
    options: [
      '$M \\cong N$',
      '$M/\\ker(\\phi) \\cong \\text{im}(\\phi)$',
      '$\\ker(\\phi) \\cong \\text{im}(\\phi)$',
      '$M \\cong M/\\ker(\\phi)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a module homomorphism $\\phi: M \\to N$, we have $M/\\ker(\\phi) \\cong \\text{im}(\\phi)$. This is analogous to the theorem for groups and rings.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The set $\\text{Hom}_R(M, N)$ of all $R$-module homomorphisms from $M$ to $N$ is:',
    options: [
      'Always empty',
      'An $R$-module (when $R$ is commutative)',
      'A field',
      'Not a group'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $R$ is commutative, $\\text{Hom}_R(M, N)$ forms an $R$-module with $(\\phi + \\psi)(m) = \\phi(m) + \\psi(m)$ and $(r\\phi)(m) = r\\phi(m)$.',
  },
];
