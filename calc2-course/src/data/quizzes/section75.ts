import type { QuizQuestion } from './types';

export const section75Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Power series methods for $Y\' = A(t)Y$ assume solutions of the form:',
    options: [
      '$Y(t) = \\sum_{n=0}^{\\infty} c_n t^n$ where $c_n$ are constant vectors',
      '$Y(t) = t^r \\sum_{n=0}^{\\infty} c_n t^n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Power series methods expand the solution as $Y(t) = \\sum c_n t^n$ with vector coefficients to be determined.',
  },
      '$Y(t) = e^{\\lambda t}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Power series methods expand the solution as $Y(t) = \\sum c_n t^n$ with vector coefficients to be determined.',
  },
      '$Y(t) = \\sin(t) + \\cos(t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Power series methods expand the solution as $Y(t) = \\sum c_n t^n$ with vector coefficients to be determined.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Power series methods expand the solution as $Y(t) = \\sum c_n t^n$ with vector coefficients to be determined.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Substituting a power series into $Y\' = A(t)Y$ yields:',
    options: [
      'An algebraic equation for the coefficients',
      'The characteristic polynomial',
      'No useful information',
      'A recurrence relation for the coefficient vectors',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Matching coefficients of like powers of $t$ gives recurrence relations determining $c_{n+1}$ from previous coefficients.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A$ is constant, the power series for $e^{tA}Y_0$ has coefficients:',
    options: [
      '$c_n = Y_0$',
      '$c_n = \\frac{A^n}{n!}Y_0$',
      '$c_n = nA^{n-1}Y_0$',
      '$c_n = A^n Y_0$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$e^{tA}Y_0 = \\sum_{n=0}^{\\infty} \\frac{(tA)^n}{n!}Y_0 = \\sum_{n=0}^{\\infty} \\frac{A^n Y_0}{n!}t^n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The radius of convergence of the power series solution depends on:',
    options: [
      'Only the initial condition',
      'The dimension of the system',
      'Whether $A$ is symmetric',
      'The analyticity of $A(t)$ and singularities of the equation',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The series converges where $A(t)$ is analytic; singularities of $A(t)$ limit the radius of convergence.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the system $Y\' = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}Y$, the power series solution starting from $Y(0) = \\begin{pmatrix} a \\\\ b \\end{pmatrix}$ is:',
    options: [
      '$\\begin{pmatrix} a \\\\ b \\end{pmatrix}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The matrix is nilpotent ($A^2 = 0$), so $e^{tA} = I + tA$, giving $Y = (I + tA)\\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} a + bt \\\\ b \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} a\\cos t \\\\ b\\sin t \\end{pmatrix}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is nilpotent ($A^2 = 0$), so $e^{tA} = I + tA$, giving $Y = (I + tA)\\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} a + bt \\\\ b \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} a + bt \\\\ b \\end{pmatrix}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is nilpotent ($A^2 = 0$), so $e^{tA} = I + tA$, giving $Y = (I + tA)\\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} a + bt \\\\ b \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} ae^t \\\\ be^t \\end{pmatrix}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is nilpotent ($A^2 = 0$), so $e^{tA} = I + tA$, giving $Y = (I + tA)\\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} a + bt \\\\ b \\end{pmatrix}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The matrix is nilpotent ($A^2 = 0$), so $e^{tA} = I + tA$, giving $Y = (I + tA)\\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} a + bt \\\\ b \\end{pmatrix}$.',
  },
];
