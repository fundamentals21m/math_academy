import type { QuizQuestion } from './types';

export const section85Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The functors $\\text{Ext}^n_R(-, -)$ and $\\text{Tor}^R_n(-, -)$ are called derived functors because:',
    options: [
      'They are obtained by deriving Hom and tensor via projective/injective resolutions',
      'They involve derivatives of functions',
      'They were discovered by derivation',
      'They satisfy a derivation rule',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Ext and Tor are derived functors: $\\text{Ext}$ is derived from $\\text{Hom}$ and $\\text{Tor}$ from $\\otimes$. They are computed using projective or injective resolutions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: '$\\text{Tor}^R_0(M, N)$ equals:',
    options: [
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\text{Tor}_0(M, N) = M \\otimes_R N$ is the ordinary tensor product. The higher Tor functors measure the failure of exactness of the tensor product.',
  },
      '$M \\otimes_R N
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Tor}_0(M, N) = M \\otimes_R N$ is the ordinary tensor product. The higher Tor functors measure the failure of exactness of the tensor product.',
  },
      '$M \\oplus N
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Tor}_0(M, N) = M \\otimes_R N$ is the ordinary tensor product. The higher Tor functors measure the failure of exactness of the tensor product.',
  },
      '$\\text{Hom}_R(M, N)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Tor}_0(M, N) = M \\otimes_R N$ is the ordinary tensor product. The higher Tor functors measure the failure of exactness of the tensor product.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Tor}_0(M, N) = M \\otimes_R N$ is the ordinary tensor product. The higher Tor functors measure the failure of exactness of the tensor product.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$\\text{Ext}^0_R(M, N)$ equals:',
    options: [
      '$M \\otimes_R N
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{Ext}^0(M, N) = \\text{Hom}_R(M, N)$ is the ordinary Hom functor. The higher Ext groups measure the failure of exactness of Hom.',
  },
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\text{Ext}^0(M, N) = \\text{Hom}_R(M, N)$ is the ordinary Hom functor. The higher Ext groups measure the failure of exactness of Hom.',
  },
      '$M \\oplus N
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\text{Ext}^0(M, N) = \\text{Hom}_R(M, N)$ is the ordinary Hom functor. The higher Ext groups measure the failure of exactness of Hom.',
  },
      '$\\text{Hom}_R(M, N)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\text{Ext}^0(M, N) = \\text{Hom}_R(M, N)$ is the ordinary Hom functor. The higher Ext groups measure the failure of exactness of Hom.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\text{Ext}^0(M, N) = \\text{Hom}_R(M, N)$ is the ordinary Hom functor. The higher Ext groups measure the failure of exactness of Hom.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $R = \\mathbb{Z}$, $\\text{Tor}_1^\\mathbb{Z}(\\mathbb{Z}/m\\mathbb{Z}, \\mathbb{Z}/n\\mathbb{Z})$ equals:',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\text{Tor}_1^\\mathbb{Z}(\\mathbb{Z}/m\\mathbb{Z}, \\mathbb{Z}/n\\mathbb{Z}) \\cong \\mathbb{Z}/\\gcd(m,n)\\mathbb{Z}$. This can be computed using the resolution $0 \\to \\mathbb{Z} \\xrightarrow{m} \\mathbb{Z} \\to \\mathbb{Z}/m\\mathbb{Z} \\to 0$.',
  },
      '$\\mathbb{Z}/mn\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\text{Tor}_1^\\mathbb{Z}(\\mathbb{Z}/m\\mathbb{Z}, \\mathbb{Z}/n\\mathbb{Z}) \\cong \\mathbb{Z}/\\gcd(m,n)\\mathbb{Z}$. This can be computed using the resolution $0 \\to \\mathbb{Z} \\xrightarrow{m} \\mathbb{Z} \\to \\mathbb{Z}/m\\mathbb{Z} \\to 0$.',
  },
      '$\\mathbb{Z}/\\gcd(m,n)\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\text{Tor}_1^\\mathbb{Z}(\\mathbb{Z}/m\\mathbb{Z}, \\mathbb{Z}/n\\mathbb{Z}) \\cong \\mathbb{Z}/\\gcd(m,n)\\mathbb{Z}$. This can be computed using the resolution $0 \\to \\mathbb{Z} \\xrightarrow{m} \\mathbb{Z} \\to \\mathbb{Z}/m\\mathbb{Z} \\to 0$.',
  },
      '$\\mathbb{Z}/\\text{lcm}(m,n)\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\text{Tor}_1^\\mathbb{Z}(\\mathbb{Z}/m\\mathbb{Z}, \\mathbb{Z}/n\\mathbb{Z}) \\cong \\mathbb{Z}/\\gcd(m,n)\\mathbb{Z}$. This can be computed using the resolution $0 \\to \\mathbb{Z} \\xrightarrow{m} \\mathbb{Z} \\to \\mathbb{Z}/m\\mathbb{Z} \\to 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\text{Tor}_1^\\mathbb{Z}(\\mathbb{Z}/m\\mathbb{Z}, \\mathbb{Z}/n\\mathbb{Z}) \\cong \\mathbb{Z}/\\gcd(m,n)\\mathbb{Z}$. This can be computed using the resolution $0 \\to \\mathbb{Z} \\xrightarrow{m} \\mathbb{Z} \\to \\mathbb{Z}/m\\mathbb{Z} \\to 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A module $M$ is flat if and only if:',
    options: [
      '$\\text{Ext}^1(M, N) = 0$ for all $N
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$M$ is flat if $- \\otimes M$ is exact, which happens if and only if $\\text{Tor}_n(-, M) = 0$ for all $n \\geq 1$, or equivalently $\\text{Tor}_1(-, M) = 0$.',
  },
      '$M$ is projective',
      '$M$ is injective',
      '$\\text{Tor}_1(M, N) = 0$ for all $N
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$M$ is flat if $- \\otimes M$ is exact, which happens if and only if $\\text{Tor}_n(-, M) = 0$ for all $n \\geq 1$, or equivalently $\\text{Tor}_1(-, M) = 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$M$ is flat if $- \\otimes M$ is exact, which happens if and only if $\\text{Tor}_n(-, M) = 0$ for all $n \\geq 1$, or equivalently $\\text{Tor}_1(-, M) = 0$.',
  },
];
