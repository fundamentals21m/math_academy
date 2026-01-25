import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: [a,b] \\to \\mathbb{R}$ is piecewise constant with respect to partition $P = \\{x_0, \\ldots, x_n\\}$ if:',
    options: [
      '$f$ is constant on $[a, b]
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A piecewise constant function is constant on each open subinterval $(x_{i-1}, x_i)$, but may have different values at the partition points.',
  },
      '$f$ is constant on each closed subinterval $[x_{i-1}, x_i]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A piecewise constant function is constant on each open subinterval $(x_{i-1}, x_i)$, but may have different values at the partition points.',
  },
      '$f$ is constant on each open subinterval $(x_{i-1}, x_i)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A piecewise constant function is constant on each open subinterval $(x_{i-1}, x_i)$, but may have different values at the partition points.',
  },
      '$f(x_i) = f(x_{i-1})$ for all $i
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A piecewise constant function is constant on each open subinterval $(x_{i-1}, x_i)$, but may have different values at the partition points.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A piecewise constant function is constant on each open subinterval $(x_{i-1}, x_i)$, but may have different values at the partition points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The piecewise constant integral of a function $f$ that equals $c_i$ on $(x_{i-1}, x_i)$ is:',
    options: [
      '$\\sum_{i=1}^{n} c_i (x_i - x_{i-1})
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The piecewise constant integral is $\\sum_{i=1}^{n} c_i (x_i - x_{i-1})$, the sum of the constant values times the lengths of the subintervals.',
  },
      '$\\sum_{i=1}^{n} c_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The piecewise constant integral is $\\sum_{i=1}^{n} c_i (x_i - x_{i-1})$, the sum of the constant values times the lengths of the subintervals.',
  },
      '$\\max_{i} c_i \\cdot (b - a)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The piecewise constant integral is $\\sum_{i=1}^{n} c_i (x_i - x_{i-1})$, the sum of the constant values times the lengths of the subintervals.',
  },
      '$\\frac{1}{n} \\sum_{i=1}^{n} c_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The piecewise constant integral is $\\sum_{i=1}^{n} c_i (x_i - x_{i-1})$, the sum of the constant values times the lengths of the subintervals.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The piecewise constant integral is $\\sum_{i=1}^{n} c_i (x_i - x_{i-1})$, the sum of the constant values times the lengths of the subintervals.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Let $f$ be piecewise constant on $[0, 3]$ with $f = 2$ on $(0, 1)$, $f = 5$ on $(1, 2)$, and $f = 3$ on $(2, 3)$. Compute the piecewise constant integral.',
    correctAnswer: 10,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'medium',
    explanation: 'The integral is $2 \\cdot 1 + 5 \\cdot 1 + 3 \\cdot 1 = 2 + 5 + 3 = 10$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is piecewise constant with respect to partition $P$, and $Q$ is a refinement of $P$, then:',
    options: [
      '$f$ may not be piecewise constant with respect to $Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $f$ is constant on $(x_{i-1}, x_i)$, it is also constant on any subinterval created by refining. The integral value is independent of the partition used (as long as $f$ is piecewise constant with respect to it).',
  },
      'The piecewise constant integral with respect to $Q$ is larger',
      'The piecewise constant integral with respect to $Q$ is smaller',
      '$f$ is also piecewise constant with respect to $Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f$ is constant on $(x_{i-1}, x_i)$, it is also constant on any subinterval created by refining. The integral value is independent of the partition used (as long as $f$ is piecewise constant with respect to it).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $f$ is constant on $(x_{i-1}, x_i)$, it is also constant on any subinterval created by refining. The integral value is independent of the partition used (as long as $f$ is piecewise constant with respect to it).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The characteristic function $\\chi_{[c,d]}(x)$ (which equals $1$ if $x \\in [c,d]$ and $0$ otherwise) for $[c,d] \\subseteq [a,b]$ is piecewise constant with respect to:',
    options: [
      'Only the trivial partition $\\{a, b\\}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The characteristic function $\\chi_{[c,d]}$ is piecewise constant with respect to any partition that includes $c$ and $d$ as partition points, since it is constant on $(a,c)$, $(c,d)$, and $(d,b)$.',
  },
      'Any partition containing $c$ and $d
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The characteristic function $\\chi_{[c,d]}$ is piecewise constant with respect to any partition that includes $c$ and $d$ as partition points, since it is constant on $(a,c)$, $(c,d)$, and $(d,b)$.',
  },
      'Only uniform partitions',
      'No partition',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The characteristic function $\\chi_{[c,d]}$ is piecewise constant with respect to any partition that includes $c$ and $d$ as partition points, since it is constant on $(a,c)$, $(c,d)$, and $(d,b)$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Let $f$ be piecewise constant on $[0, 4]$ with partition $P = \\{0, 1, 3, 4\\}$, where $f = 1$ on $(0,1)$, $f = 4$ on $(1,3)$, $f = 2$ on $(3,4)$. Compute the piecewise constant integral.',
    correctAnswer: 11,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'medium',
    explanation: 'The integral is $1 \\cdot (1-0) + 4 \\cdot (3-1) + 2 \\cdot (4-3) = 1 + 8 + 2 = 11$.',
  },
];
