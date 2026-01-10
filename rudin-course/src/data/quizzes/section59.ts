import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $A: \\mathbb{R}^n \\to \\mathbb{R}^m$ is a linear transformation if and only if:',
    options: [
      '$A(x+y) = Ax + Ay$ and $A(cx) = cAx$ for all $x,y \\in \\mathbb{R}^n$ and $c \\in \\mathbb{R}$',
      '$A(xy) = Ax \\cdot Ay$ for all $x,y \\in \\mathbb{R}^n$',
      '$A(x) = Mx$ for some scalar $M$',
      '$\\|Ax\\| = \\|x\\|$ for all $x \\in \\mathbb{R}^n$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A linear transformation preserves vector addition and scalar multiplication. These two conditions are equivalent to $A(cx + dy) = cAx + dAy$ for all vectors and scalars.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The set $L(\\mathbb{R}^n, \\mathbb{R}^m)$ of all linear transformations from $\\mathbb{R}^n$ to $\\mathbb{R}^m$ is:',
    options: [
      'A vector space of dimension $mn$',
      'A vector space of dimension $m+n$',
      'A vector space of dimension $\\max(m,n)$',
      'Not a vector space'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$L(\\mathbb{R}^n, \\mathbb{R}^m)$ is a vector space isomorphic to the space of $m \\times n$ matrices, which has dimension $mn$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a linear transformation $A \\in L(\\mathbb{R}^n, \\mathbb{R}^m)$, the operator norm $\\|A\\|$ is defined as:',
    options: [
      '$\\sup\\{|Ax| : x \\in \\mathbb{R}^n, |x| \\leq 1\\}$',
      '$\\sum_{i,j} |a_{ij}|$',
      '$\\max_{i,j} |a_{ij}|$',
      '$\\sqrt{\\sum_{i,j} a_{ij}^2}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The operator norm is defined as the supremum of $|Ax|$ over the unit ball. This makes $L(\\mathbb{R}^n, \\mathbb{R}^m)$ a normed vector space.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A \\in L(\\mathbb{R}^n, \\mathbb{R}^m)$ and $B \\in L(\\mathbb{R}^m, \\mathbb{R}^k)$, then $\\|BA\\|$ satisfies:',
    options: [
      '$\\|BA\\| \\leq \\|B\\| \\|A\\|$',
      '$\\|BA\\| = \\|B\\| \\|A\\|$',
      '$\\|BA\\| \\geq \\|B\\| \\|A\\|$',
      '$\\|BA\\| = \\|B\\| + \\|A\\|$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The operator norm is submultiplicative: $\\|BA\\| \\leq \\|B\\| \\|A\\|$. This follows from $|BAx| \\leq \\|B\\| |Ax| \\leq \\|B\\| \\|A\\| |x|$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A linear transformation $A: \\mathbb{R}^n \\to \\mathbb{R}^n$ is invertible if and only if:',
    options: [
      '$A$ is one-to-one (equivalently, onto)',
      '$\\|A\\| > 0$',
      '$A$ maps some basis to a basis',
      'Both A and C are correct'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For finite-dimensional spaces, a linear map is invertible iff it is one-to-one iff it is onto. Also, $A$ is invertible iff it maps every basis to a basis. Note that $\\|A\\| > 0$ only means $A \\neq 0$.',
  },
];
