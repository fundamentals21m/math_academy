import type { QuizQuestion } from './types';

export const section95Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear transformation $T: V \\to W$ satisfies:',
    options: [
      '$T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$ and $T(c\\mathbf{v}) = cT(\\mathbf{v})$',
      '$T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) \\cdot T(\\mathbf{v})$',
      '$T(\\mathbf{v}) = \\mathbf{v}$',
      '$T(\\mathbf{0}) = \\mathbf{v}$'
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
      '$1$',
      '$\\mathbf{0}$',
      'Any vector',
      'Undefined'
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
      '$\\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{v}\\}$',
      'The range of $T$',
      '$\\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}$',
      'All of $V$'
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
      '$\\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}$',
      'The domain of $T$',
      '$\\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}$'
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
      'Kernel = $\\{\\mathbf{0}\\}$',
      'Range = codomain',
      '$T$ is onto',
      '$T = I$'
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
      'Range equals the codomain',
      '$T$ is one-to-one',
      '$T(\\mathbf{v}) = \\mathbf{v}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Onto: every element in codomain is hit.',
  },
];
