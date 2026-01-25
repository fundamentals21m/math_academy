import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a function $\\mathbf{f}: [a,b] \\to \\mathbb{R}^k$ with components $f_1, \\ldots, f_k$, $\\mathbf{f}$ is differentiable at $t$ if and only if:',
    options: [
      'At least one component $f_j$ is differentiable at $t
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A vector-valued function $\\mathbf{f} = (f_1, \\ldots, f_k)$ is differentiable at $t$ if and only if each component $f_j$ is differentiable at $t$, and then $\\mathbf{f}\'(t) = (f_1\'(t), \\ldots, f_k\'(t))$.',
  },
      'Each component $f_j$ is differentiable at $t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A vector-valued function $\\mathbf{f} = (f_1, \\ldots, f_k)$ is differentiable at $t$ if and only if each component $f_j$ is differentiable at $t$, and then $\\mathbf{f}\'(t) = (f_1\'(t), \\ldots, f_k\'(t))$.',
  },
      'The norm $\\|\\mathbf{f}(t)\\|$ is differentiable at $t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A vector-valued function $\\mathbf{f} = (f_1, \\ldots, f_k)$ is differentiable at $t$ if and only if each component $f_j$ is differentiable at $t$, and then $\\mathbf{f}\'(t) = (f_1\'(t), \\ldots, f_k\'(t))$.',
  },
      '$\\sum_{j=1}^k f_j(t)$ is differentiable at $t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A vector-valued function $\\mathbf{f} = (f_1, \\ldots, f_k)$ is differentiable at $t$ if and only if each component $f_j$ is differentiable at $t$, and then $\\mathbf{f}\'(t) = (f_1\'(t), \\ldots, f_k\'(t))$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A vector-valued function $\\mathbf{f} = (f_1, \\ldots, f_k)$ is differentiable at $t$ if and only if each component $f_j$ is differentiable at $t$, and then $\\mathbf{f}\'(t) = (f_1\'(t), \\ldots, f_k\'(t))$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\mathbf{f}, \\mathbf{g}: [a,b] \\to \\mathbb{R}^k$ are differentiable, then $(\\mathbf{f} \\cdot \\mathbf{g})\'(t) = $',
    options: [
      '$\\mathbf{f}\\'(t) \\cdot \\mathbf{g}\\'(t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The product rule extends to dot products: $(\\mathbf{f} \\cdot \\mathbf{g})\' = \\mathbf{f}\' \\cdot \\mathbf{g} + \\mathbf{f} \\cdot \\mathbf{g}\'$. This is proven by applying the usual product rule to each term $f_j g_j$ in the sum.',
  },
      '$\\mathbf{f}(t) \\times \\mathbf{g}\\'(t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The product rule extends to dot products: $(\\mathbf{f} \\cdot \\mathbf{g})\' = \\mathbf{f}\' \\cdot \\mathbf{g} + \\mathbf{f} \\cdot \\mathbf{g}\'$. This is proven by applying the usual product rule to each term $f_j g_j$ in the sum.',
  },
      '$\\|\\mathbf{f}\\'(t)\\| \\|\\mathbf{g}\\'(t)\\|
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The product rule extends to dot products: $(\\mathbf{f} \\cdot \\mathbf{g})\' = \\mathbf{f}\' \\cdot \\mathbf{g} + \\mathbf{f} \\cdot \\mathbf{g}\'$. This is proven by applying the usual product rule to each term $f_j g_j$ in the sum.',
  },
      '$\\mathbf{f}\\'(t) \\cdot \\mathbf{g}(t) + \\mathbf{f}(t) \\cdot \\mathbf{g}\\'(t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The product rule extends to dot products: $(\\mathbf{f} \\cdot \\mathbf{g})\' = \\mathbf{f}\' \\cdot \\mathbf{g} + \\mathbf{f} \\cdot \\mathbf{g}\'$. This is proven by applying the usual product rule to each term $f_j g_j$ in the sum.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The product rule extends to dot products: $(\\mathbf{f} \\cdot \\mathbf{g})\' = \\mathbf{f}\' \\cdot \\mathbf{g} + \\mathbf{f} \\cdot \\mathbf{g}\'$. This is proven by applying the usual product rule to each term $f_j g_j$ in the sum.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\|\\mathbf{f}(t)\\|$ is constant for all $t$, and $\\mathbf{f}$ is differentiable, then:',
    options: [
      '$\\mathbf{f}\\'(t) \\cdot \\mathbf{f}(t) = 0$ for all $t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $\\|\\mathbf{f}\\|^2 = \\mathbf{f} \\cdot \\mathbf{f} = c$ (constant), then differentiating: $2\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, so $\\mathbf{f}\'(t) \\perp \\mathbf{f}(t)$ for all $t$. The derivative is always perpendicular to the position vector.',
  },
      '$\\mathbf{f}\\'(t) = \\mathbf{0}$ for all $t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $\\|\\mathbf{f}\\|^2 = \\mathbf{f} \\cdot \\mathbf{f} = c$ (constant), then differentiating: $2\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, so $\\mathbf{f}\'(t) \\perp \\mathbf{f}(t)$ for all $t$. The derivative is always perpendicular to the position vector.',
  },
      '$\\|\\mathbf{f}\\'(t)\\|$ is also constant',
      '$\\mathbf{f}(t)$ is parallel to $\\mathbf{f}\\'(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $\\|\\mathbf{f}\\|^2 = \\mathbf{f} \\cdot \\mathbf{f} = c$ (constant), then differentiating: $2\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, so $\\mathbf{f}\'(t) \\perp \\mathbf{f}(t)$ for all $t$. The derivative is always perpendicular to the position vector.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $\\|\\mathbf{f}\\|^2 = \\mathbf{f} \\cdot \\mathbf{f} = c$ (constant), then differentiating: $2\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, so $\\mathbf{f}\'(t) \\perp \\mathbf{f}(t)$ for all $t$. The derivative is always perpendicular to the position vector.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Mean Value Theorem for vector-valued functions states:',
    options: [
      'There exists $c \\in (a,b)$ with $\\mathbf{f}(b) - \\mathbf{f}(a) = \\mathbf{f}\'(c)(b-a)$',
      'The MVT does not hold for vector-valued functions',
      'There exists $c$ with $\\|\\mathbf{f}\'(c)\\| = \\frac{\\|\\mathbf{f}(b) - \\mathbf{f}(a)\\|}{b-a}$',
      '$\\|\\mathbf{f}(b) - \\mathbf{f}(a)\\| \\leq (b-a) \\sup_{t \\in [a,b]} \\|\\mathbf{f}\'(t)\\|$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The equality form of MVT fails for vector functions (consider $\\mathbf{f}(t) = (\\cos t, \\sin t)$ on $[0, 2\\pi]$). However, we have the inequality $\\|\\mathbf{f}(b) - \\mathbf{f}(a)\\| \\leq (b-a) \\sup \\|\\mathbf{f}\'\\|$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $\\mathbf{f}(t) = (\\cos t, \\sin t)$, the derivative $\\mathbf{f}\'(t)$ is:',
    options: [
      '$(\\sin t, \\cos t)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Differentiating component-wise: $\\frac{d}{dt}\\cos t = -\\sin t$ and $\\frac{d}{dt}\\sin t = \\cos t$. So $\\mathbf{f}\'(t) = (-\\sin t, \\cos t)$. Note that $\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, confirming perpendicularity.',
  },
      '$(\\cos t, \\sin t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiating component-wise: $\\frac{d}{dt}\\cos t = -\\sin t$ and $\\frac{d}{dt}\\sin t = \\cos t$. So $\\mathbf{f}\'(t) = (-\\sin t, \\cos t)$. Note that $\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, confirming perpendicularity.',
  },
      '$(-\\sin t, \\cos t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiating component-wise: $\\frac{d}{dt}\\cos t = -\\sin t$ and $\\frac{d}{dt}\\sin t = \\cos t$. So $\\mathbf{f}\'(t) = (-\\sin t, \\cos t)$. Note that $\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, confirming perpendicularity.',
  },
      '$(\\sin t, -\\cos t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiating component-wise: $\\frac{d}{dt}\\cos t = -\\sin t$ and $\\frac{d}{dt}\\sin t = \\cos t$. So $\\mathbf{f}\'(t) = (-\\sin t, \\cos t)$. Note that $\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, confirming perpendicularity.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiating component-wise: $\\frac{d}{dt}\\cos t = -\\sin t$ and $\\frac{d}{dt}\\sin t = \\cos t$. So $\\mathbf{f}\'(t) = (-\\sin t, \\cos t)$. Note that $\\mathbf{f}\' \\cdot \\mathbf{f} = 0$, confirming perpendicularity.',
  },
];
