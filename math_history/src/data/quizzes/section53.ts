import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's53-e01',
    type: 'multiple-choice',
    question: 'The Cauchy-Riemann equations for $f = u + iv$ are:',
    options: [
      '$u_x = v_y$ and $u_y = -v_x$',
      '$u_x = v_x$ and $u_y = v_y$',
      '$u + v = 0$',
      '$u_x + v_y = 0$',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Cauchy-Riemann equations $\\partial u/\\partial x = \\partial v/\\partial y$ and $\\partial u/\\partial y = -\\partial v/\\partial x$ are the necessary and sufficient conditions (with continuity of partials) for a function to be complex differentiable.',
  },
  {
    id: 's53-e02',
    type: 'multiple-choice',
    question: 'An analytic (holomorphic) function is one that:',
    options: [
      'Is complex differentiable at every point of its domain',
      'Has only real values',
      'Is continuous but not differentiable',
      'Has a finite number of derivatives',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A function is analytic (or holomorphic) on a domain if it is complex differentiable at every point of that domain. This single condition implies the function is infinitely differentiable and equals its Taylor series.',
  },
  // Medium questions
  {
    id: 's53-m01',
    type: 'multiple-choice',
    question: 'Why is $f(z) = \\bar{z}$ (complex conjugate) not analytic?',
    options: [
      'The limit defining the derivative depends on the direction of approach',
      'It is not continuous',
      'It has no real part',
      'It is unbounded',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'For $f(z) = \\bar{z}$, the difference quotient $\\bar{h}/h$ equals 1 when $h$ is real but -1 when $h$ is purely imaginary. Since the limit depends on direction, the complex derivative does not exist anywhere.',
  },
  {
    id: 's53-m02',
    type: 'multiple-choice',
    question: 'A key property that distinguishes complex differentiability from real differentiability is:',
    options: [
      'Complex differentiable functions are automatically infinitely differentiable',
      'Complex differentiable functions must be polynomials',
      'Real differentiable functions are always complex differentiable',
      'Complex differentiability requires boundedness',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'In real analysis, a function can be differentiable once but not twice. In complex analysis, being differentiable once implies being infinitely differentiable, and the function equals its Taylor series. This "rigidity" is a remarkable property of analytic functions.',
  },
  // Hard questions
  {
    id: 's53-h01',
    type: 'multiple-choice',
    question: 'The real and imaginary parts of an analytic function satisfy:',
    options: [
      'Laplace\'s equation: $\\nabla^2 u = \\nabla^2 v = 0$',
      'The wave equation',
      'The heat equation',
      'No particular equation',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'If $f = u + iv$ is analytic, the Cauchy-Riemann equations imply that both $u$ and $v$ are harmonic functions, satisfying Laplace\'s equation $u_{xx} + u_{yy} = 0$. This connects complex analysis to potential theory and physics.',
  },
  {
    id: 's53-h02',
    type: 'multiple-choice',
    question: 'Analytic functions preserve angles because:',
    options: [
      'Where the derivative is nonzero, they act as local rotations and scalings',
      'They map circles to circles',
      'They preserve distances',
      'They have constant modulus',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'At points where $f\'(z_0) \\neq 0$, an analytic function acts locally like multiplication by $f\'(z_0)$, which is a rotation (by $\\arg f\'$) and scaling (by $|f\'|$). These transformations preserve angles, making analytic functions conformal.',
  },
];
