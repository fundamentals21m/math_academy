import type { QuizQuestion } from './types';

export const section107Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The second fundamental theorem for line integrals states that:',
    options: [
      '$\\int_{\\mathbf{a}}^{\\mathbf{b}} \\nabla\\varphi \\cdot d\\alpha = 0$',
      '$\\int_{\\mathbf{a}}^{\\mathbf{b}} \\nabla\\varphi \\cdot d\\alpha = \\nabla\\varphi(\\mathbf{b})$',
      '$\\int_{\\mathbf{a}}^{\\mathbf{b}} \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{a})$',
      '$\\int_{\\mathbf{a}}^{\\mathbf{b}} \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The second fundamental theorem: $\\int_{\\mathbf{a}}^{\\mathbf{b}} \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$. The line integral of a gradient equals the change in the potential.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'This theorem is proved using the chain rule applied to $g(t) = \\varphi[\\alpha(t)]$, which gives:',
    options: [
      '$g\\'(t) = \\varphi[\\alpha(t)]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the chain rule, $g\'(t) = \\nabla\\varphi[\\alpha(t)] \\cdot \\alpha\'(t)$. Integrating from $a$ to $b$ gives $g(b) - g(a) = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$.',
  },
      '$g\\'(t) = \\nabla\\varphi[\\alpha(t)] \\cdot \\alpha\\'(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule, $g\'(t) = \\nabla\\varphi[\\alpha(t)] \\cdot \\alpha\'(t)$. Integrating from $a$ to $b$ gives $g(b) - g(a) = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$.',
  },
      '$g\\'(t) = \\alpha\\'(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule, $g\'(t) = \\nabla\\varphi[\\alpha(t)] \\cdot \\alpha\'(t)$. Integrating from $a$ to $b$ gives $g(b) - g(a) = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$.',
  },
      '$g\\'(t) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule, $g\'(t) = \\nabla\\varphi[\\alpha(t)] \\cdot \\alpha\'(t)$. Integrating from $a$ to $b$ gives $g(b) - g(a) = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule, $g\'(t) = \\nabla\\varphi[\\alpha(t)] \\cdot \\alpha\'(t)$. Integrating from $a$ to $b$ gives $g(b) - g(a) = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A corollary of the second fundamental theorem is that for a closed path (where $\\mathbf{b} = \\mathbf{a}$):',
    options: [
      '$\\oint \\nabla\\varphi \\cdot d\\alpha = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For a closed path, $\\oint \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{a}) - \\varphi(\\mathbf{a}) = 0$. The line integral of a gradient around any closed path is zero.',
  },
      '$\\oint \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{a})
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a closed path, $\\oint \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{a}) - \\varphi(\\mathbf{a}) = 0$. The line integral of a gradient around any closed path is zero.',
  },
      '$\\oint \\nabla\\varphi \\cdot d\\alpha = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a closed path, $\\oint \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{a}) - \\varphi(\\mathbf{a}) = 0$. The line integral of a gradient around any closed path is zero.',
  },
      '$\\oint \\nabla\\varphi \\cdot d\\alpha = 2\\pi
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a closed path, $\\oint \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{a}) - \\varphi(\\mathbf{a}) = 0$. The line integral of a gradient around any closed path is zero.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a closed path, $\\oint \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{a}) - \\varphi(\\mathbf{a}) = 0$. The line integral of a gradient around any closed path is zero.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f = \\nabla\\varphi$ represents a force field, the work done moving from $\\mathbf{a}$ to $\\mathbf{b}$:',
    options: [
      'Depends on the path taken',
      'Is always positive',
      'Depends only on the values of $\\varphi$ at the endpoints',
      'Is always zero'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For a gradient field, work $= \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$, depending only on the potential values at the endpoints, not on the path taken.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The theorem implies that line integrals of gradients are:',
    options: [
      'Always zero',
      'Independent of the path',
      'Path-dependent',
      'Undefined',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $\\int \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})$ depends only on endpoints, the line integral of a gradient is independent of the path.',
  },
];
