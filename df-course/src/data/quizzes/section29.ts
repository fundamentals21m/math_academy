import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A group $G$ is the internal direct product of subgroups $H$ and $K$ if:',
    options: [
      '$G = H \\cup K
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For internal direct product: $H, K \\trianglelefteq G$, $H \\cap K = \\{e\\}$, and $G = HK$.',
  },
      '$H$ and $K$ are both normal, $H \\cap K = \\{e\\}$, and $G = HK
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For internal direct product: $H, K \\trianglelefteq G$, $H \\cap K = \\{e\\}$, and $G = HK$.',
  },
      '$H$ is normal and $K$ is any subgroup',
      '$G/H \\cong K
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For internal direct product: $H, K \\trianglelefteq G$, $H \\cap K = \\{e\\}$, and $G = HK$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For internal direct product: $H, K \\trianglelefteq G$, $H \\cap K = \\{e\\}$, and $G = HK$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $H$ and $K$ are normal subgroups of $G$ with $H \\cap K = \\{e\\}$, then elements of $H$ and $K$:',
    options: [
      'Never commute',
      'Commute only with the identity',
      'Always commute with each other',
      'Only commute if $G$ is abelian',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $h \\in H$, $k \\in K$, then $hkh^{-1}k^{-1} = (hkh^{-1})k^{-1} \\in K$ and $h(kh^{-1}k^{-1}) \\in H$. So $hkh^{-1}k^{-1} \\in H \\cap K = \\{e\\}$, meaning $hk = kh$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $G = H \\times K$ (internal direct product), then $G/H \\cong$:',
    options: [
      '$H
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The projection $\\pi: G \\to K$ has kernel $H$, so $G/H \\cong K$ by the First Isomorphism Theorem.',
  },
      '$K
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection $\\pi: G \\to K$ has kernel $H$, so $G/H \\cong K$ by the First Isomorphism Theorem.',
  },
      '$H \\times K
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection $\\pi: G \\to K$ has kernel $H$, so $G/H \\cong K$ by the First Isomorphism Theorem.',
  },
      '$H \\cap K
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection $\\pi: G \\to K$ has kernel $H$, so $G/H \\cong K$ by the First Isomorphism Theorem.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection $\\pi: G \\to K$ has kernel $H$, so $G/H \\cong K$ by the First Isomorphism Theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To show $G \\cong H \\times K$ as an internal direct product, we need:',
    options: [
      '$H \\cap K = \\{e\\}$ and $|G| = |H| \\cdot |K|$ with both normal',
      'Only that $|G| = |H| \\cdot |K|
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'We need both subgroups normal, trivial intersection, and $G = HK$ (which follows from $|G| = |H||K|$ when $H \\cap K = \\{e\\}$).',
  },
      'Just that $H$ and $K$ are subgroups with $G = HK
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We need both subgroups normal, trivial intersection, and $G = HK$ (which follows from $|G| = |H||K|$ when $H \\cap K = \\{e\\}$).',
  },
      '$H$ and $K$ are cyclic',
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
      'As $kh$ but not $hk
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The representation $g = hk$ is unique: if $hk = h\'k\'$, then $h^{-1}h\' = k(k\')^{-1} \\in H \\cap K = \\{e\\}$.',
  },
      'As $hk$ for many choices of $h, k
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The representation $g = hk$ is unique: if $hk = h\'k\'$, then $h^{-1}h\' = k(k\')^{-1} \\in H \\cap K = \\{e\\}$.',
  },
      'Only if $G$ is abelian',
      'As $hk$ for unique $h \\in H, k \\in K
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The representation $g = hk$ is unique: if $hk = h\'k\'$, then $h^{-1}h\' = k(k\')^{-1} \\in H \\cap K = \\{e\\}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The representation $g = hk$ is unique: if $hk = h\'k\'$, then $h^{-1}h\' = k(k\')^{-1} \\in H \\cap K = \\{e\\}$.',
  },
];
