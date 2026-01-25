import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The rank of a linear transformation $A: \\mathbb{R}^n \\to \\mathbb{R}^m$ is:',
    options: [
      'The dimension of the null space of $A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The rank is the dimension of the image (range) of the linear map. By the rank-nullity theorem, rank$(A)$ + nullity$(A) = n$.',
  },
      'The number of nonzero entries in the matrix',
      'Always equal to $\\min(m,n)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The rank is the dimension of the image (range) of the linear map. By the rank-nullity theorem, rank$(A)$ + nullity$(A) = n$.',
  },
      'The dimension of the range (image) of $A
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The rank is the dimension of the image (range) of the linear map. By the rank-nullity theorem, rank$(A)$ + nullity$(A) = n$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The rank is the dimension of the image (range) of the linear map. By the rank-nullity theorem, rank$(A)$ + nullity$(A) = n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Rank Theorem states that if $f$ has constant rank $r$ near $a$, then locally $f$ is equivalent to:',
    options: [
      'A linear map of rank $r
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Rank Theorem says that near a point where $f$ has constant rank $r$, there exist coordinate changes making $f$ look like the standard projection onto the first $r$ coordinates.',
  },
      'The identity map',
      'The projection $(x_1, \\ldots, x_n) \\mapsto (x_1, \\ldots, x_r, 0, \\ldots, 0)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Rank Theorem says that near a point where $f$ has constant rank $r$, there exist coordinate changes making $f$ look like the standard projection onto the first $r$ coordinates.',
  },
      'A rotation',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Rank Theorem says that near a point where $f$ has constant rank $r$, there exist coordinate changes making $f$ look like the standard projection onto the first $r$ coordinates.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ is $C^1$ and $f\'(a)$ has rank $r$, then the rank of $f\'(x)$ for $x$ near $a$:',
    options: [
      'Is at most $r
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rank is lower semicontinuous: if $f\'(a)$ has rank $r$, then $f\'(x)$ has rank $\\geq r$ for $x$ sufficiently close to $a$. The rank can increase but not decrease nearby.',
  },
      'Is at least $r
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rank is lower semicontinuous: if $f\'(a)$ has rank $r$, then $f\'(x)$ has rank $\\geq r$ for $x$ sufficiently close to $a$. The rank can increase but not decrease nearby.',
  },
      'Is exactly $r
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rank is lower semicontinuous: if $f\'(a)$ has rank $r$, then $f\'(x)$ has rank $\\geq r$ for $x$ sufficiently close to $a$. The rank can increase but not decrease nearby.',
  },
      'Can be any value between 0 and $\\min(m,n)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rank is lower semicontinuous: if $f\'(a)$ has rank $r$, then $f\'(x)$ has rank $\\geq r$ for $x$ sufficiently close to $a$. The rank can increase but not decrease nearby.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rank is lower semicontinuous: if $f\'(a)$ has rank $r$, then $f\'(x)$ has rank $\\geq r$ for $x$ sufficiently close to $a$. The rank can increase but not decrease nearby.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A $C^1$ map $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ is a submersion at $a$ if:',
    options: [
      '$f\\'(a)$ is an isomorphism',
      '$f\\'(a)$ is injective (has rank $n$)',
      '$f\\'(a)$ is surjective (has rank $m$)',
      '$f\\'(a) = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A submersion has surjective derivative (rank $m$). An immersion has injective derivative (rank $n$). When $m = n$ and the derivative is bijective, $f$ is a local diffeomorphism.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A submersion has surjective derivative (rank $m$). An immersion has injective derivative (rank $n$). When $m = n$ and the derivative is bijective, $f$ is a local diffeomorphism.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ is a submersion at $a$ with $f(a) = c$, then $f^{-1}(c)$ near $a$ is:',
    options: [
      'A smooth manifold of dimension $m
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The preimage theorem states that if $f$ is a submersion at all points of $f^{-1}(c)$, then $f^{-1}(c)$ is a smooth manifold of dimension $n - m$ (the codimension of the image).',
  },
      'A single point',
      'A smooth manifold of dimension $n - m
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The preimage theorem states that if $f$ is a submersion at all points of $f^{-1}(c)$, then $f^{-1}(c)$ is a smooth manifold of dimension $n - m$ (the codimension of the image).',
  },
      'An open set',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The preimage theorem states that if $f$ is a submersion at all points of $f^{-1}(c)$, then $f^{-1}(c)$ is a smooth manifold of dimension $n - m$ (the codimension of the image).',
  },
];
