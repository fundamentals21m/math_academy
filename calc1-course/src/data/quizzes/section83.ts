import type { QuizQuestion } from './types';

export const section83Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A vector-valued function $\\mathbf{r}(t)$ maps:',
    options: [
      'Scalars to vectors',
      'Vectors to scalars',
      'Vectors to vectors',
      'Scalars to scalars',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbf{r}: \\mathbb{R} \\to \\mathbb{R}^n$ takes parameter $t$ to a vector.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative $\\mathbf{r}\'(t)$ is defined as:',
    options: [
      '$|\\mathbf{r}(t)|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Differentiate componentwise: limit of difference quotient.',
  },
      '$\\mathbf{r}(t+1) - \\mathbf{r}(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiate componentwise: limit of difference quotient.',
  },
      '$\\mathbf{r}(t) \\cdot \\mathbf{r}\\'(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiate componentwise: limit of difference quotient.',
  },
      '$\\lim_{h \\to 0} \\frac{\\mathbf{r}(t+h) - \\mathbf{r}(t)}{h}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiate componentwise: limit of difference quotient.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiate componentwise: limit of difference quotient.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\mathbf{r}(t) = (t^2, t^3, e^t)$, then $\\mathbf{r}\'(t) = ?$',
    options: [
      '$(2t, 3t^2, e^t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiate each component: $(2t, 3t^2, e^t)$.',
  },
      '$(t^3, t^4, te^t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Differentiate each component: $(2t, 3t^2, e^t)$.',
  },
      '$(t, t^2, e^t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Differentiate each component: $(2t, 3t^2, e^t)$.',
  },
      '$(2, 6t, e^t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Differentiate each component: $(2t, 3t^2, e^t)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Differentiate each component: $(2t, 3t^2, e^t)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The integral $\\int \\mathbf{r}(t)\\,dt$ is computed:',
    options: [
      'By taking the magnitude first',
      'By cross product',
      'By integrating each component',
      'Cannot be done for vectors',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Integrate componentwise.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The product rule $(\\mathbf{r} \\cdot \\mathbf{s})\' = ?$',
    options: [
      '$\\mathbf{r}\' \\cdot \\mathbf{s}\'$',
      '$\\mathbf{r}\' \\cdot \\mathbf{s} + \\mathbf{r} \\cdot \\mathbf{s}\'$',
      '$\\mathbf{r} \\cdot \\mathbf{s}\'$',
      '$|\\mathbf{r}| |\\mathbf{s}|$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Product rule applies: $(\\mathbf{r} \\cdot \\mathbf{s})\' = \\mathbf{r}\' \\cdot \\mathbf{s} + \\mathbf{r} \\cdot \\mathbf{s}\'$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$\\lim_{t \\to a} \\mathbf{r}(t)$ exists if:',
    options: [
      'Only the first component has a limit',
      'The magnitude has a limit',
      '$\\mathbf{r}$ is constant',
      'Each component has a limit',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Limits are taken componentwise.',
  },
];
