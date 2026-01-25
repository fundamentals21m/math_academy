import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A free $R$-module is one that:',
    options: [
      'Has no non-zero elements',
      'Is isomorphic to $R
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A free module has a basis: a set of elements that is linearly independent and spans the module. Free modules are the module-theoretic analog of vector spaces.',
  },
      'Has exactly one element',
      'Has a basis (a linearly independent spanning set)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A free module has a basis: a set of elements that is linearly independent and spans the module. Free modules are the module-theoretic analog of vector spaces.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The free $\\mathbb{Z}$-module on $n$ generators is isomorphic to:',
    options: [
      '$\\mathbb{Z}_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The free $\\mathbb{Z}$-module on $n$ generators is $\\mathbb{Z}^n$, the direct product of $n$ copies of $\\mathbb{Z}$.',
  },
      '$\\mathbb{Q}^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The free $\\mathbb{Z}$-module on $n$ generators is $\\mathbb{Z}^n$, the direct product of $n$ copies of $\\mathbb{Z}$.',
  },
      '$\\mathbb{Z}^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The free $\\mathbb{Z}$-module on $n$ generators is $\\mathbb{Z}^n$, the direct product of $n$ copies of $\\mathbb{Z}$.',
  },
      '$\\mathbb{Z}/n\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The free $\\mathbb{Z}$-module on $n$ generators is $\\mathbb{Z}^n$, the direct product of $n$ copies of $\\mathbb{Z}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The free $\\mathbb{Z}$-module on $n$ generators is $\\mathbb{Z}^n$, the direct product of $n$ copies of $\\mathbb{Z}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Unlike vector spaces, not every module is free. Which is NOT a free $\\mathbb{Z}$-module?',
    options: [
      '$\\mathbb{Z}_6
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_6$ is not free over $\\mathbb{Z}$ because it has torsion ($6 \\cdot \\bar{1} = 0$ for $\\bar{1} \\neq 0$). Free $\\mathbb{Z}$-modules are torsion-free.',
  },
      '$\\mathbb{Z}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_6$ is not free over $\\mathbb{Z}$ because it has torsion ($6 \\cdot \\bar{1} = 0$ for $\\bar{1} \\neq 0$). Free $\\mathbb{Z}$-modules are torsion-free.',
  },
      '$\\mathbb{Z}^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_6$ is not free over $\\mathbb{Z}$ because it has torsion ($6 \\cdot \\bar{1} = 0$ for $\\bar{1} \\neq 0$). Free $\\mathbb{Z}$-modules are torsion-free.',
  },
      '$\\mathbb{Z}^{100}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_6$ is not free over $\\mathbb{Z}$ because it has torsion ($6 \\cdot \\bar{1} = 0$ for $\\bar{1} \\neq 0$). Free $\\mathbb{Z}$-modules are torsion-free.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_6$ is not free over $\\mathbb{Z}$ because it has torsion ($6 \\cdot \\bar{1} = 0$ for $\\bar{1} \\neq 0$). Free $\\mathbb{Z}$-modules are torsion-free.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $R$ is a commutative ring with $1$ and $M$ is a free $R$-module with a finite basis, then any two bases have:',
    options: [
      'At most one element',
      'Different cardinalities in general',
      'The same cardinality',
      'No relation',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For commutative rings with $1$, the rank (cardinality of any basis) of a free module is well-defined. This follows from properties of the quotient $M/\\mathfrak{m}M$ for a maximal ideal $\\mathfrak{m}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The universal property of a free module $F$ on a set $S$ says that any function $f: S \\to M$ extends uniquely to:',
    options: [
      'A ring homomorphism $F \\to M
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The universal property: any set map $f: S \\to M$ (where $M$ is any $R$-module) extends uniquely to an $R$-module homomorphism $\\tilde{f}: F \\to M$.',
  },
      'An $R$-module homomorphism $F \\to M
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The universal property: any set map $f: S \\to M$ (where $M$ is any $R$-module) extends uniquely to an $R$-module homomorphism $\\tilde{f}: F \\to M$.',
  },
      'A bijection $F \\to M
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The universal property: any set map $f: S \\to M$ (where $M$ is any $R$-module) extends uniquely to an $R$-module homomorphism $\\tilde{f}: F \\to M$.',
  },
      'Nothing; there is no extension',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The universal property: any set map $f: S \\to M$ (where $M$ is any $R$-module) extends uniquely to an $R$-module homomorphism $\\tilde{f}: F \\to M$.',
  },
];
