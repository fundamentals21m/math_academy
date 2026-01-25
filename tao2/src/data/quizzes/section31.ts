import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: \\mathbf{R}^n \\to \\mathbf{R}^m$ is differentiable at $x_0$ if there exists a linear map $L$ such that:',
    options: [
      '$f(x) = L(x)$ for all $x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The total derivative is the best linear approximation: the error is $o(\\|h\\|)$.',
  },
      '$f(x_0 + h) = f(x_0) + L(h) + o(\\|h\\|)$ as $h \\to 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The total derivative is the best linear approximation: the error is $o(\\|h\\|)$.',
  },
      '$f$ is continuous at $x_0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The total derivative is the best linear approximation: the error is $o(\\|h\\|)$.',
  },
      '$f$ has partial derivatives at $x_0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The total derivative is the best linear approximation: the error is $o(\\|h\\|)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The total derivative is the best linear approximation: the error is $o(\\|h\\|)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The total derivative $Df(x_0)$ of a differentiable function $f: \\mathbf{R}^n \\to \\mathbf{R}^m$ is:',
    options: [
      'A number',
      'A vector in $\\mathbf{R}^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The total derivative is a linear map (represented by the Jacobian matrix).',
  },
      'A function from $\\mathbf{R}^n$ to $\\mathbf{R}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The total derivative is a linear map (represented by the Jacobian matrix).',
  },
      'A linear map from $\\mathbf{R}^n$ to $\\mathbf{R}^m
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The total derivative is a linear map (represented by the Jacobian matrix).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The total derivative is a linear map (represented by the Jacobian matrix).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f: \\mathbf{R}^n \\to \\mathbf{R}$ is differentiable at $x_0$, then $Df(x_0)$ is represented by:',
    options: [
      'A scalar',
      'The Hessian matrix',
      'The gradient $\\nabla f(x_0)$ as a row vector',
      'The identity matrix'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For real-valued functions, the derivative is the gradient (as a linear functional).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Differentiability implies:',
    options: [
      'The function is linear',
      'Twice differentiability',
      'Continuity',
      'The function is constant',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Differentiable functions are continuous.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Jacobian matrix of $f: \\mathbf{R}^n \\to \\mathbf{R}^m$ at $x_0$ has dimensions:',
    options: [
      '$m \\times n$',
      '$n \\times n$',
      '$n \\times m$',
      '$m \\times m$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Jacobian is $m \\times n$: $m$ rows (output components) and $n$ columns (input variables).',
  },
];
