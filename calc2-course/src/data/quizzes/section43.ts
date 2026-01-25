import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The quadratic form associated with a symmetric operator $T$ is defined as:',
    options: [
      '$Q(x) = (x, x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The quadratic form is $Q(x) = (T(x), x)$, giving a scalar value for each vector $x$.',
  },
      '$Q(x) = (T(x), x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The quadratic form is $Q(x) = (T(x), x)$, giving a scalar value for each vector $x$.',
  },
      '$Q(x) = T(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The quadratic form is $Q(x) = (T(x), x)$, giving a scalar value for each vector $x$.',
  },
      '$Q(x) = (T(x), T(x))
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The quadratic form is $Q(x) = (T(x), x)$, giving a scalar value for each vector $x$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The quadratic form is $Q(x) = (T(x), x)$, giving a scalar value for each vector $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In matrix form, the quadratic form for symmetric matrix $A$ can be written as:',
    options: [
      '$Q(x) = x^t A x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Using column vector notation, $Q(x) = x^t A x = \\sum_{i,j} a_{ij} x_i x_j$.',
  },
      '$Q(x) = Ax
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using column vector notation, $Q(x) = x^t A x = \\sum_{i,j} a_{ij} x_i x_j$.',
  },
      '$Q(x) = x A
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using column vector notation, $Q(x) = x^t A x = \\sum_{i,j} a_{ij} x_i x_j$.',
  },
      '$Q(x) = A^t x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using column vector notation, $Q(x) = x^t A x = \\sum_{i,j} a_{ij} x_i x_j$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using column vector notation, $Q(x) = x^t A x = \\sum_{i,j} a_{ij} x_i x_j$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The quadratic form $Q(x,y) = ax^2 + 2bxy + cy^2$ corresponds to which symmetric matrix?',
    options: [
      '$\\begin{bmatrix} a & 2b \\\\ 2b & c \\end{bmatrix}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The coefficient of $xy$ is $2b = a_{12} + a_{21} = 2a_{12}$ for symmetric $A$, so $a_{12} = a_{21} = b$.',
  },
      '$\\begin{bmatrix} a & b \\\\ 2b & c \\end{bmatrix}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The coefficient of $xy$ is $2b = a_{12} + a_{21} = 2a_{12}$ for symmetric $A$, so $a_{12} = a_{21} = b$.',
  },
      '$\\begin{bmatrix} 2a & b \\\\ b & 2c \\end{bmatrix}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The coefficient of $xy$ is $2b = a_{12} + a_{21} = 2a_{12}$ for symmetric $A$, so $a_{12} = a_{21} = b$.',
  },
      '$\\begin{bmatrix} a & b \\\\ b & c \\end{bmatrix}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The coefficient of $xy$ is $2b = a_{12} + a_{21} = 2a_{12}$ for symmetric $A$, so $a_{12} = a_{21} = b$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The coefficient of $xy$ is $2b = a_{12} + a_{21} = 2a_{12}$ for symmetric $A$, so $a_{12} = a_{21} = b$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The equation $Q(x, y) = 1$ describes an ellipse when the eigenvalues of the associated matrix are:',
    options: [
      'Both negative',
      'Of opposite signs',
      'Both positive',
      'One is zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both positive eigenvalues give an ellipse. Opposite signs give a hyperbola, one zero gives a parabola.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'After diagonalizing a symmetric matrix $A = C \\Lambda C^t$, the quadratic form becomes:',
    options: [
      '$\\sum_{i=1}^n \\lambda_i y_i^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'In new coordinates $y = C^t x$, we have $Q = x^t A x = y^t \\Lambda y = \\sum_i \\lambda_i y_i^2$. The eigenvalues are the coefficients.',
  },
      '$\\sum_{i=1}^n y_i^2
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'In new coordinates $y = C^t x$, we have $Q = x^t A x = y^t \\Lambda y = \\sum_i \\lambda_i y_i^2$. The eigenvalues are the coefficients.',
  },
      '$\\sum_{i=1}^n \\lambda_i y_i
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'In new coordinates $y = C^t x$, we have $Q = x^t A x = y^t \\Lambda y = \\sum_i \\lambda_i y_i^2$. The eigenvalues are the coefficients.',
  },
      '$\\sum_{i=1}^n y_i
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'In new coordinates $y = C^t x$, we have $Q = x^t A x = y^t \\Lambda y = \\sum_i \\lambda_i y_i^2$. The eigenvalues are the coefficients.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'In new coordinates $y = C^t x$, we have $Q = x^t A x = y^t \\Lambda y = \\sum_i \\lambda_i y_i^2$. The eigenvalues are the coefficients.',
  },
];
