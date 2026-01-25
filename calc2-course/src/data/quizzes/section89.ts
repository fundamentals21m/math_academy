import type { QuizQuestion } from './types';

export const section89Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For vector fields $\\mathbf{F}: \\mathbb{R}^n \\to \\mathbb{R}^m$ and $\\mathbf{G}: \\mathbb{R}^m \\to \\mathbb{R}^p$, the chain rule states:',
    options: [
      '$D(\\mathbf{G} \\circ \\mathbf{F})(\\mathbf{a}) = D\\mathbf{G}(\\mathbf{a}) + D\\mathbf{F}(\\mathbf{a})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The chain rule: the Jacobian of the composition is the product of Jacobians: $J_{\\mathbf{G}\\circ\\mathbf{F}} = J_{\\mathbf{G}}(\\mathbf{F}(\\mathbf{a})) \\cdot J_{\\mathbf{F}}(\\mathbf{a})$.',
  },
      '$D(\\mathbf{G} \\circ \\mathbf{F})(\\mathbf{a}) = D\\mathbf{F}(\\mathbf{a}) \\cdot D\\mathbf{G}(\\mathbf{a})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The chain rule: the Jacobian of the composition is the product of Jacobians: $J_{\\mathbf{G}\\circ\\mathbf{F}} = J_{\\mathbf{G}}(\\mathbf{F}(\\mathbf{a})) \\cdot J_{\\mathbf{F}}(\\mathbf{a})$.',
  },
      '$D(\\mathbf{G} \\circ \\mathbf{F})(\\mathbf{a}) = D\\mathbf{G}(\\mathbf{a}) \\cdot D\\mathbf{F}(\\mathbf{F}(\\mathbf{a}))
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The chain rule: the Jacobian of the composition is the product of Jacobians: $J_{\\mathbf{G}\\circ\\mathbf{F}} = J_{\\mathbf{G}}(\\mathbf{F}(\\mathbf{a})) \\cdot J_{\\mathbf{F}}(\\mathbf{a})$.',
  },
      '$D(\\mathbf{G} \\circ \\mathbf{F})(\\mathbf{a}) = D\\mathbf{G}(\\mathbf{F}(\\mathbf{a})) \\cdot D\\mathbf{F}(\\mathbf{a})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The chain rule: the Jacobian of the composition is the product of Jacobians: $J_{\\mathbf{G}\\circ\\mathbf{F}} = J_{\\mathbf{G}}(\\mathbf{F}(\\mathbf{a})) \\cdot J_{\\mathbf{F}}(\\mathbf{a})$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The chain rule: the Jacobian of the composition is the product of Jacobians: $J_{\\mathbf{G}\\circ\\mathbf{F}} = J_{\\mathbf{G}}(\\mathbf{F}(\\mathbf{a})) \\cdot J_{\\mathbf{F}}(\\mathbf{a})$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\mathbf{F}: \\mathbb{R}^2 \\to \\mathbb{R}^2$ and $\\mathbf{G}: \\mathbb{R}^2 \\to \\mathbb{R}^3$, the Jacobian of $\\mathbf{G} \\circ \\mathbf{F}$ is:',
    options: [
      '$2 \\times 2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$J_{\\mathbf{G}}$ is $3 \\times 2$ and $J_{\\mathbf{F}}$ is $2 \\times 2$. Product: $(3 \\times 2) \\cdot (2 \\times 2) = 3 \\times 2$.',
  },
      '$3 \\times 2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$J_{\\mathbf{G}}$ is $3 \\times 2$ and $J_{\\mathbf{F}}$ is $2 \\times 2$. Product: $(3 \\times 2) \\cdot (2 \\times 2) = 3 \\times 2$.',
  },
      '$2 \\times 3
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$J_{\\mathbf{G}}$ is $3 \\times 2$ and $J_{\\mathbf{F}}$ is $2 \\times 2$. Product: $(3 \\times 2) \\cdot (2 \\times 2) = 3 \\times 2$.',
  },
      '$3 \\times 3
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$J_{\\mathbf{G}}$ is $3 \\times 2$ and $J_{\\mathbf{F}}$ is $2 \\times 2$. Product: $(3 \\times 2) \\cdot (2 \\times 2) = 3 \\times 2$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$J_{\\mathbf{G}}$ is $3 \\times 2$ and $J_{\\mathbf{F}}$ is $2 \\times 2$. Product: $(3 \\times 2) \\cdot (2 \\times 2) = 3 \\times 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In matrix form, the chain rule says that Jacobians:',
    options: [
      'Add',
      'Multiply (in the correct order)',
      'Are inverses of each other',
      'Commute',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Jacobian of a composition is the matrix product of the individual Jacobians.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\mathbf{F}(t) = (\\cos t, \\sin t)$ and $g(x,y) = x^2 + y^2$, then $(g \\circ \\mathbf{F})\'(t) =$',
    options: [
      '$2\\cos t \\cdot (-\\sin t) + 2\\sin t \\cdot \\cos t = 0$',
      '$2$',
      '$-2\\sin t \\cos t$',
      '$1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\nabla g = (2x, 2y)$, $\\mathbf{F}\'(t) = (-\\sin t, \\cos t)$. At $\\mathbf{F}(t)$: $(2\\cos t, 2\\sin t) \\cdot (-\\sin t, \\cos t) = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The result $(g \\circ \\mathbf{F})\'(t) = 0$ for $\\mathbf{F}(t) = (\\cos t, \\sin t)$ and $g = x^2 + y^2$ means:',
    options: [
      '$g$ is not differentiable',
      '$\\mathbf{F}$ is constant',
      'The image of $\\mathbf{F}$ lies on a level set of $g
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $g(\\mathbf{F}(t)) = \\cos^2 t + \\sin^2 t = 1$ is constant, $\\mathbf{F}$ traces a level set of $g$ (the unit circle).',
  },
      '$g$ is constant everywhere',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $g(\\mathbf{F}(t)) = \\cos^2 t + \\sin^2 t = 1$ is constant, $\\mathbf{F}$ traces a level set of $g$ (the unit circle).',
  },
];
