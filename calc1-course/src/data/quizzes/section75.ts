import type { QuizQuestion } from './types';

export const section75Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The dot product $\\mathbf{a} \\cdot \\mathbf{b}$ in $\\mathbb{R}^n$ equals:',
    options: [
      '$|\\mathbf{a}||\\mathbf{b}|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Dot product: $\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + ... + a_n b_n$.',
  },
      '$(a_1 b_1, ..., a_n b_n)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Dot product: $\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + ... + a_n b_n$.',
  },
      '$\\mathbf{a} + \\mathbf{b}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Dot product: $\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + ... + a_n b_n$.',
  },
      '$\\sum_{i=1}^n a_i b_i
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Dot product: $\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + ... + a_n b_n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Dot product: $\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + ... + a_n b_n$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Compute $(1, 2, 3) \\cdot (4, 5, 6)$.',
    correctAnswer: 32,
    numericRange: { min: 30, max: 35, precision: 0 },
    difficulty: 'easy',
    explanation: '$1 \\cdot 4 + 2 \\cdot 5 + 3 \\cdot 6 = 4 + 10 + 18 = 32$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The length (norm) of $\\mathbf{v}$ is:',
    options: [
      '$\\sqrt{\\mathbf{v} \\cdot \\mathbf{v}}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + ... + v_n^2}$.',
  },
      '$\\mathbf{v} \\cdot \\mathbf{v}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + ... + v_n^2}$.',
  },
      '$v_1 + v_2 + ...
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + ... + v_n^2}$.',
  },
      '$|v_1| + |v_2| + ...
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + ... + v_n^2}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\|\\mathbf{v}\\| = \\sqrt{\\mathbf{v} \\cdot \\mathbf{v}} = \\sqrt{v_1^2 + ... + v_n^2}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the length of $(3, 4)$?',
    correctAnswer: 5,
    numericRange: { min: 4, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\|(3, 4)\\| = \\sqrt{9 + 16} = 5$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Two vectors are orthogonal if:',
    options: [
      'They have the same length',
      '$\\mathbf{a} = \\mathbf{b}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Orthogonal (perpendicular) means dot product is zero.',
  },
      '$\\mathbf{a} \\cdot \\mathbf{b} = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Orthogonal (perpendicular) means dot product is zero.',
  },
      '$\\mathbf{a} + \\mathbf{b} = \\mathbf{0}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Orthogonal (perpendicular) means dot product is zero.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Orthogonal (perpendicular) means dot product is zero.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Cauchy-Schwarz inequality states:',
    options: [
      '$|\\mathbf{a} \\cdot \\mathbf{b}| = \\|\\mathbf{a}\\| \\|\\mathbf{b}\\|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: dot product magnitude is at most the product of lengths.',
  },
      '$|\\mathbf{a} \\cdot \\mathbf{b}| \\geq \\|\\mathbf{a}\\| \\|\\mathbf{b}\\|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: dot product magnitude is at most the product of lengths.',
  },
      '$|\\mathbf{a} \\cdot \\mathbf{b}| \\leq \\|\\mathbf{a}\\| \\|\\mathbf{b}\\|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: dot product magnitude is at most the product of lengths.',
  },
      '$\\mathbf{a} \\cdot \\mathbf{b} = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: dot product magnitude is at most the product of lengths.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cauchy-Schwarz: dot product magnitude is at most the product of lengths.',
  },
];
