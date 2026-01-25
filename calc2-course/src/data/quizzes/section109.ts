import type { QuizQuestion } from './types';

export const section109Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The first fundamental theorem for line integrals states that if line integrals of $f$ are path-independent, then:',
    options: [
      '$f$ is constant',
      '$f = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If line integrals are path-independent, define $\\varphi(\\mathbf{x}) = \\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha$. The first fundamental theorem shows $\\nabla\\varphi = f$, so $f$ is a gradient.',
  },
      'The integral is always zero',
      '$\\nabla\\varphi = f$ where $\\varphi(\\mathbf{x}) = \\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If line integrals are path-independent, define $\\varphi(\\mathbf{x}) = \\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha$. The first fundamental theorem shows $\\nabla\\varphi = f$, so $f$ is a gradient.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If line integrals are path-independent, define $\\varphi(\\mathbf{x}) = \\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha$. The first fundamental theorem shows $\\nabla\\varphi = f$, so $f$ is a gradient.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To prove that $D_k\\varphi(\\mathbf{x}) = f_k(\\mathbf{x})$, we integrate from $\\mathbf{x}$ to $\\mathbf{x} + h\\mathbf{e}_k$ along:',
    options: [
      'A line segment parallel to the $k$th axis',
      'Any path',
      'A circular arc',
      'A spiral',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'We use a line segment from $\\mathbf{x}$ to $\\mathbf{x} + h\\mathbf{e}_k$ (parallel to the $k$th coordinate axis), then take the limit as $h \\to 0$ to get the partial derivative.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The first fundamental theorem is the converse of the second in the sense that:',
    options: [
      'The first is stronger than the second',
      'They are unrelated',
      'Both prove the same thing',
      'Second says gradients have path-independent integrals; first says path-independent integrals come from gradients',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The second fundamental theorem shows gradients have path-independent line integrals. The first shows the converse: if integrals are path-independent, the field must be a gradient.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the indefinite line integral $\\varphi(\\mathbf{x}) = \\int_{\\mathbf{a}}^{\\mathbf{x}} f \\cdot d\\alpha$ to be well-defined:',
    options: [
      '$f$ must be constant',
      'The starting point $\\mathbf{a}$ must be the origin',
      'The integral must be path-independent',
      '$f$ must be zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $\\varphi(\\mathbf{x})$ to be uniquely defined, the integral must give the same value regardless of the path from $\\mathbf{a}$ to $\\mathbf{x}$, i.e., the integral must be path-independent.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The proof uses the additive property to write $\\varphi(\\mathbf{x} + h\\mathbf{y}) - \\varphi(\\mathbf{x})$ as:',
    options: [
      'A product of integrals',
      'Zero',
      'An integral from $\\mathbf{x}$ to $\\mathbf{x} + h\\mathbf{y}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By additivity, $\\varphi(\\mathbf{x} + h\\mathbf{y}) - \\varphi(\\mathbf{x}) = \\int_{\\mathbf{x}}^{\\mathbf{x} + h\\mathbf{y}} f \\cdot d\\alpha$, an integral over a short path from $\\mathbf{x}$ to $\\mathbf{x} + h\\mathbf{y}$.',
  },
      'The gradient at $\\mathbf{x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By additivity, $\\varphi(\\mathbf{x} + h\\mathbf{y}) - \\varphi(\\mathbf{x}) = \\int_{\\mathbf{x}}^{\\mathbf{x} + h\\mathbf{y}} f \\cdot d\\alpha$, an integral over a short path from $\\mathbf{x}$ to $\\mathbf{x} + h\\mathbf{y}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By additivity, $\\varphi(\\mathbf{x} + h\\mathbf{y}) - \\varphi(\\mathbf{x}) = \\int_{\\mathbf{x}}^{\\mathbf{x} + h\\mathbf{y}} f \\cdot d\\alpha$, an integral over a short path from $\\mathbf{x}$ to $\\mathbf{x} + h\\mathbf{y}$.',
  },
];
