import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The orthogonal complement $S^\\perp$ of a subset $S$ consists of:',
    options: [
      'All elements orthogonal to every element of $S
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$S^\\perp$ is the set of all elements that are orthogonal to every element of $S$. It is always a subspace, even if $S$ is not.',
  },
      'All elements equal to elements in $S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$S^\\perp$ is the set of all elements that are orthogonal to every element of $S$. It is always a subspace, even if $S$ is not.',
  },
      'The largest subspace containing $S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$S^\\perp$ is the set of all elements that are orthogonal to every element of $S$. It is always a subspace, even if $S$ is not.',
  },
      'The intersection of $S$ with itself',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$S^\\perp$ is the set of all elements that are orthogonal to every element of $S$. It is always a subspace, even if $S$ is not.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Orthogonal Decomposition Theorem states that every $x \\in V$ can be written uniquely as:',
    options: [
      '$x = s$ where $s \\in S
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Every element can be decomposed uniquely into a component in $S$ and a component orthogonal to $S$. The norm satisfies $\\|x\\|^2 = \\|s\\|^2 + \\|s^\\perp\\|^2$ (Pythagorean formula).',
  },
      '$x = s - s^\\perp$ where $s \\in S$ and $s^\\perp \\in S^\\perp
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Every element can be decomposed uniquely into a component in $S$ and a component orthogonal to $S$. The norm satisfies $\\|x\\|^2 = \\|s\\|^2 + \\|s^\\perp\\|^2$ (Pythagorean formula).',
  },
      '$x = s + s^\\perp$ where $s \\in S$ and $s^\\perp \\in S^\\perp
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Every element can be decomposed uniquely into a component in $S$ and a component orthogonal to $S$. The norm satisfies $\\|x\\|^2 = \\|s\\|^2 + \\|s^\\perp\\|^2$ (Pythagorean formula).',
  },
      '$x = 2s$ where $s \\in S
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Every element can be decomposed uniquely into a component in $S$ and a component orthogonal to $S$. The norm satisfies $\\|x\\|^2 = \\|s\\|^2 + \\|s^\\perp\\|^2$ (Pythagorean formula).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Every element can be decomposed uniquely into a component in $S$ and a component orthogonal to $S$. The norm satisfies $\\|x\\|^2 = \\|s\\|^2 + \\|s^\\perp\\|^2$ (Pythagorean formula).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The projection of $x$ onto a finite-dimensional subspace $S$ with orthonormal basis $\\{e_1, \\ldots, e_n\\}$ is:',
    options: [
      '$\\sum_{i=1}^n (x, e_i) e_i$',
      '$\\sum_{i=1}^n e_i$',
      '$\\sum_{i=1}^n (e_i, e_i) x$',
      '$(x, x)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection is $s = \\sum_{i=1}^n (x, e_i) e_i$, which is the sum of the projections of $x$ along each basis vector.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to the Approximation Theorem, the element of $S$ nearest to $x$ is:',
    options: [
      'Any element of $S
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The best approximation theorem states that the projection of $x$ onto $S$ is the unique element of $S$ that minimizes the distance $\\|x - t\\|$ over all $t \\in S$.',
  },
      'The zero element',
      'The projection of $x$ onto $S
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The best approximation theorem states that the projection of $x$ onto $S$ is the unique element of $S$ that minimizes the distance $\\|x - t\\|$ over all $t \\in S$.',
  },
      'The element of $S$ with largest norm',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The best approximation theorem states that the projection of $x$ onto $S$ is the unique element of $S$ that minimizes the distance $\\|x - t\\|$ over all $t \\in S$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Fourier coefficients $a_k = \\frac{1}{\\pi}\\int_0^{2\\pi} f(x)\\cos kx\\, dx$ arise from projecting $f$ onto:',
    options: [
      'The space of all functions',
      'The subspace spanned by trigonometric functions',
      'The space of polynomials',
      'The zero subspace',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Fourier coefficients come from projecting $f$ onto the subspace spanned by $\\{1, \\cos x, \\sin x, \\cos 2x, \\sin 2x, \\ldots\\}$, which form an orthogonal set in $C(0, 2\\pi)$.',
  },
];
