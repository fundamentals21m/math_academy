import type { QuizQuestion } from './types';

export const section95Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear transformation $T: V \\to W$ satisfies:',
    options: [
      '$T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) \\cdot T(\\mathbf{v})
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Linear: preserves addition and scalar multiplication.',
  },
      '$T(\\mathbf{v}) = \\mathbf{v}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Linear: preserves addition and scalar multiplication.',
  },
      '$T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ and $T(c\\mathbf{v}) = cT(\\mathbf{v})
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Linear: preserves addition and scalar multiplication.',
  },
      '$T(\\mathbf{0}) = \\mathbf{v}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Linear: preserves addition and scalar multiplication.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Linear: preserves addition and scalar multiplication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For any linear transformation, $T(\\mathbf{0}) = ?$',
    options: [
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}$.',
  },
      'Any vector',
      'Undefined',
      '$\\mathbf{0}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The null space (kernel) of $T$ is:',
    options: [
      '$\\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Kernel = vectors mapped to zero.',
  },
      '$\\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{v}\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Kernel = vectors mapped to zero.',
  },
      'The range of $T
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Kernel = vectors mapped to zero.',
  },
      'All of $V
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Kernel = vectors mapped to zero.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Kernel = vectors mapped to zero.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The range (image) of $T$ is:',
    options: [
      'Empty',
      '$\\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Range = all outputs of $T$.',
  },
      '$\\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Range = all outputs of $T$.',
  },
      'The domain of $T
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Range = all outputs of $T$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Range = all outputs of $T$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$T$ is one-to-one (injective) if and only if:',
    options: [
      'Range = codomain',
      'Kernel = $\\{\\mathbf{0}\\}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Injective iff only $\\mathbf{0}$ maps to $\\mathbf{0}$.',
  },
      '$T$ is onto',
      '$T = I
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Injective iff only $\\mathbf{0}$ maps to $\\mathbf{0}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Injective iff only $\\mathbf{0}$ maps to $\\mathbf{0}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$T$ is onto (surjective) if and only if:',
    options: [
      'Kernel is trivial',
      '$T$ is one-to-one',
      '$T(\\mathbf{v}) = \\mathbf{v}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Onto: every element in codomain is hit.',
  },
      'Range equals the codomain',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Onto: every element in codomain is hit.',
  },
];
