import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A group $G$ is the internal direct product of subgroups $H$ and $K$ if:',
    options: [
      '$G = H \\cup K$',
      '$H$ and $K$ are both normal, $H \\cap K = \\{e\\}$, and $G = HK$',
      '$H$ is normal and $K$ is any subgroup',
      '$G/H \\cong K$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For internal direct product: $H, K \\trianglelefteq G$, $H \\cap K = \\{e\\}$, and $G = HK$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $H$ and $K$ are normal subgroups of $G$ with $H \\cap K = \\{e\\}$, then elements of $H$ and $K$:',
    options: [
      'Never commute',
      'Always commute with each other',
      'Only commute if $G$ is abelian',
      'Commute only with the identity'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $h \\in H$, $k \\in K$, then $hkh^{-1}k^{-1} = (hkh^{-1})k^{-1} \\in K$ and $h(kh^{-1}k^{-1}) \\in H$. So $hkh^{-1}k^{-1} \\in H \\cap K = \\{e\\}$, meaning $hk = kh$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $G = H \\times K$ (internal direct product), then $G/H \\cong$:',
    options: [
      '$H$',
      '$K$',
      '$H \\times K$',
      '$H \\cap K$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The projection $\\pi: G \\to K$ has kernel $H$, so $G/H \\cong K$ by the First Isomorphism Theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To show $G \\cong H \\times K$ as an internal direct product, we need:',
    options: [
      'Only that $|G| = |H| \\cdot |K|$',
      '$H \\cap K = \\{e\\}$ and $|G| = |H| \\cdot |K|$ with both normal',
      'Just that $H$ and $K$ are subgroups with $G = HK$',
      '$H$ and $K$ are cyclic'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We need both subgroups normal, trivial intersection, and $G = HK$ (which follows from $|G| = |H||K|$ when $H \\cap K = \\{e\\}$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $G$ has normal subgroups $H$ and $K$ with $G = HK$ and $H \\cap K = \\{e\\}$, then every $g \\in G$ can be written:',
    options: [
      'As $hk$ for unique $h \\in H, k \\in K$',
      'As $hk$ for many choices of $h, k$',
      'As $kh$ but not $hk$',
      'Only if $G$ is abelian'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The representation $g = hk$ is unique: if $hk = h\'k\'$, then $h^{-1}h\' = k(k\')^{-1} \\in H \\cap K = \\{e\\}$.',
  },
];
