import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ is differentiable at $x$ if there exists a linear transformation $A$ such that:',
    options: [
      '$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} = A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The definition of differentiability requires the error $f(x+h) - f(x) - Ah$ to go to zero faster than $|h|$. This linear transformation $A$ is called the derivative $f\'(x)$.',
  },
      '$f(x+h) = f(x) + Ah$ for small $h
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The definition of differentiability requires the error $f(x+h) - f(x) - Ah$ to go to zero faster than $|h|$. This linear transformation $A$ is called the derivative $f\'(x)$.',
  },
      '$\\frac{\\partial f}{\\partial x_i}$ exists for all $i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The definition of differentiability requires the error $f(x+h) - f(x) - Ah$ to go to zero faster than $|h|$. This linear transformation $A$ is called the derivative $f\'(x)$.',
  },
      '$\\lim_{h \\to 0} \\frac{|f(x+h) - f(x) - Ah|}{|h|} = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The definition of differentiability requires the error $f(x+h) - f(x) - Ah$ to go to zero faster than $|h|$. This linear transformation $A$ is called the derivative $f\'(x)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The definition of differentiability requires the error $f(x+h) - f(x) - Ah$ to go to zero faster than $|h|$. This linear transformation $A$ is called the derivative $f\'(x)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ is differentiable at $x$, its derivative $f\'(x)$ is:',
    options: [
      'A vector in $\\mathbb{R}^m
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The derivative $f\'(x)$ is a linear transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$. It can be represented by the $m \\times n$ Jacobian matrix of partial derivatives.',
  },
      'A scalar',
      'A linear transformation in $L(\\mathbb{R}^n, \\mathbb{R}^m)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The derivative $f\'(x)$ is a linear transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$. It can be represented by the $m \\times n$ Jacobian matrix of partial derivatives.',
  },
      'An $n \\times n$ matrix',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The derivative $f\'(x)$ is a linear transformation from $\\mathbb{R}^n$ to $\\mathbb{R}^m$. It can be represented by the $m \\times n$ Jacobian matrix of partial derivatives.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The chain rule for differentiable functions states that if $g$ is differentiable at $x$ and $f$ is differentiable at $g(x)$, then:',
    options: [
      '$(f \\circ g)\\'(x) = f\\'(g(x)) + g\\'(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x) = f\'(g(x)) \\circ g\'(x)$, where the composition is of linear transformations. In matrix form, this is matrix multiplication.',
  },
      '$(f \\circ g)\\'(x) = f\\'(g(x)) \\circ g\\'(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x) = f\'(g(x)) \\circ g\'(x)$, where the composition is of linear transformations. In matrix form, this is matrix multiplication.',
  },
      '$(f \\circ g)\\'(x) = f\\'(x) \\circ g\\'(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x) = f\'(g(x)) \\circ g\'(x)$, where the composition is of linear transformations. In matrix form, this is matrix multiplication.',
  },
      '$(f \\circ g)\\'(x) = g\\'(x) \\circ f\\'(g(x))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x) = f\'(g(x)) \\circ g\'(x)$, where the composition is of linear transformations. In matrix form, this is matrix multiplication.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule states $(f \\circ g)\'(x) = f\'(g(x)) \\circ g\'(x)$, where the composition is of linear transformations. In matrix form, this is matrix multiplication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f: \\mathbb{R}^n \\to \\mathbb{R}$, the gradient $\\nabla f(x)$ is related to the derivative by:',
    options: [
      '$f\\'(x) = \\nabla f(x) \\times h
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For scalar-valued functions, the derivative $f\'(x)$ is a linear functional that acts on vectors $h$ by the dot product $\\nabla f(x) \\cdot h$. The gradient vector represents this linear functional.',
  },
      '$f\\'(x) = |\\nabla f(x)|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For scalar-valued functions, the derivative $f\'(x)$ is a linear functional that acts on vectors $h$ by the dot product $\\nabla f(x) \\cdot h$. The gradient vector represents this linear functional.',
  },
      '$f\\'(x)h = \\nabla f(x) \\cdot h$ for all $h \\in \\mathbb{R}^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For scalar-valued functions, the derivative $f\'(x)$ is a linear functional that acts on vectors $h$ by the dot product $\\nabla f(x) \\cdot h$. The gradient vector represents this linear functional.',
  },
      '$\\nabla f(x) = (f\\'(x))^T f\\'(x)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For scalar-valued functions, the derivative $f\'(x)$ is a linear functional that acts on vectors $h$ by the dot product $\\nabla f(x) \\cdot h$. The gradient vector represents this linear functional.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For scalar-valued functions, the derivative $f\'(x)$ is a linear functional that acts on vectors $h$ by the dot product $\\nabla f(x) \\cdot h$. The gradient vector represents this linear functional.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ is differentiable at $x$, then:',
    options: [
      'All partial derivatives of $f$ are continuous at $x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Differentiability implies continuity. The converse is false: a function can be continuous without being differentiable. Also, existence of partial derivatives does not imply differentiability.',
  },
      '$f$ is continuous at $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiability implies continuity. The converse is false: a function can be continuous without being differentiable. Also, existence of partial derivatives does not imply differentiability.',
  },
      '$f$ is twice differentiable at $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiability implies continuity. The converse is false: a function can be continuous without being differentiable. Also, existence of partial derivatives does not imply differentiability.',
  },
      '$f\\'$ is continuous at $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiability implies continuity. The converse is false: a function can be continuous without being differentiable. Also, existence of partial derivatives does not imply differentiability.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiability implies continuity. The converse is false: a function can be continuous without being differentiable. Also, existence of partial derivatives does not imply differentiability.',
  },
];
