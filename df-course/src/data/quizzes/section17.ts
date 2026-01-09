import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The First Isomorphism Theorem states that if $\\phi: G \\to H$ is a homomorphism, then:',
    options: [
      '$G \\cong H$',
      '$G/\\ker(\\phi) \\cong \\phi(G)$',
      '$\\ker(\\phi) \\cong \\phi(G)$',
      '$G \\cong H/\\phi(G)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The First Isomorphism Theorem: $G/\\ker(\\phi) \\cong \\text{im}(\\phi) = \\phi(G)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Second Isomorphism Theorem (Diamond Isomorphism Theorem) states that if $H \\leq G$ and $N \\trianglelefteq G$, then:',
    options: [
      '$H \\cap N \\trianglelefteq H$ and $H/(H \\cap N) \\cong HN/N$',
      '$HN \\cong H \\times N$',
      '$H/N \\cong G/N$',
      '$H \\cong N$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Second Isomorphism Theorem: $H \\cap N \\trianglelefteq H$ and $H/(H \\cap N) \\cong HN/N$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Third Isomorphism Theorem states that if $N \\subseteq M$ are both normal in $G$, then:',
    options: [
      '$(G/N)/(M/N) \\cong G/M$',
      '$G/N \\cong G/M$',
      '$M/N \\cong G/M$',
      '$(G/M)/(G/N) \\cong M/N$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Third Isomorphism Theorem: $(G/N)/(M/N) \\cong G/M$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\phi: G \\to H$ is a surjective homomorphism with kernel $K$, then by the First Isomorphism Theorem:',
    options: [
      '$G \\cong H$',
      '$G/K \\cong H$',
      '$K \\cong H$',
      '$G \\cong K \\times H$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $\\phi$ is surjective, $\\phi(G) = H$. By the First Isomorphism Theorem, $G/K \\cong H$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Lattice Isomorphism Theorem (Correspondence Theorem) establishes a bijection between:',
    options: [
      'Subgroups of $G$ and subgroups of $G/N$',
      'Subgroups of $G$ containing $N$ and subgroups of $G/N$',
      'Normal subgroups of $G$ and subgroups of $G/N$',
      'All subgroups of $G$ and normal subgroups of $G$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Correspondence Theorem: Subgroups of $G$ containing $N$ correspond bijectively to subgroups of $G/N$ via $H \\mapsto H/N$.',
  },
];
