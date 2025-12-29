import type { QuizQuestion } from './types';

export const section84Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $\\mathbf{r}(t)$ parametrizes a curve, then $\\mathbf{r}\'(t)$ is:',
    options: [
      'Perpendicular to the curve',
      'Tangent to the curve',
      'The position vector',
      'The curvature'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbf{r}\'(t)$ points in the direction of the tangent.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A smooth curve is one where $\\mathbf{r}\'(t)$:',
    options: [
      'Is always zero',
      'Is continuous and nonzero',
      'Has constant magnitude',
      'Is perpendicular to $\\mathbf{r}(t)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Smooth: $\\mathbf{r}\'(t) \\neq \\mathbf{0}$ and continuous.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The tangent line at $t = t_0$ is:',
    options: [
      '$\\mathbf{r}(t_0) + s \\mathbf{r}\'(t_0)$ for $s \\in \\mathbb{R}$',
      '$\\mathbf{r}\'(t_0)$',
      '$\\mathbf{r}(t_0)$',
      '$s \\mathbf{r}(t_0)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Tangent line passes through $\\mathbf{r}(t_0)$ with direction $\\mathbf{r}\'(t_0)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the helix $\\mathbf{r}(t) = (\\cos t, \\sin t, t)$, the tangent vector is:',
    options: [
      '$(\\cos t, \\sin t, 1)$',
      '$(-\\sin t, \\cos t, 1)$',
      '$(\\sin t, -\\cos t, 0)$',
      '$(1, 1, 1)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (-\\sin t, \\cos t, 1)$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For $\\mathbf{r}(t) = (t, t^2)$, what is $|\\mathbf{r}\'(1)|$?',
    correctAnswer: 2.236,
    numericRange: { min: 2.2, max: 2.3, precision: 3 },
    difficulty: 'medium',
    explanation: '$\\mathbf{r}\'(t) = (1, 2t)$. At $t=1$: $(1, 2)$, $|(1,2)| = \\sqrt{5} \\approx 2.236$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A curve $\\mathbf{r}(t)$ has a cusp at $t_0$ if:',
    options: [
      '$\\mathbf{r}(t_0) = \\mathbf{0}$',
      '$\\mathbf{r}\'(t_0) = \\mathbf{0}$',
      '$\\mathbf{r}\'\'(t_0) = \\mathbf{0}$',
      '$\\mathbf{r}$ is not defined at $t_0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cusp: tangent vector vanishes.',
  },
];
