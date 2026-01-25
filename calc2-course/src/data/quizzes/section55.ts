import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The method of variation of parameters seeks a particular solution of the form:',
    options: [
      '$y_1 = v_1(x) u_1 + \\cdots + v_n(x) u_n$ with varying $v_i
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'We replace the constants $c_i$ in the homogeneous solution by functions $v_i(x)$ to be determined.',
  },
      '$y_1 = c_1 u_1 + \\cdots + c_n u_n$ with constant $c_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We replace the constants $c_i$ in the homogeneous solution by functions $v_i(x)$ to be determined.',
  },
      '$y_1 = x^n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We replace the constants $c_i$ in the homogeneous solution by functions $v_i(x)$ to be determined.',
  },
      '$y_1 = e^{rx}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We replace the constants $c_i$ in the homogeneous solution by functions $v_i(x)$ to be determined.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We replace the constants $c_i$ in the homogeneous solution by functions $v_i(x)$ to be determined.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In variation of parameters, the Wronskian matrix $W$ has rows consisting of:',
    options: [
      'The functions $u_1, \\ldots, u_n$ only',
      'Only the highest derivatives',
      '$u_i$ and their derivatives up to order $n-1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Wronskian matrix has $u_1, \\ldots, u_n$ in the first row, their first derivatives in the second, up to $(n-1)$th derivatives.',
  },
      'The coefficients of the equation',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Wronskian matrix has $u_1, \\ldots, u_n$ in the first row, their first derivatives in the second, up to $(n-1)$th derivatives.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The system of equations for the functions $v_1, \\ldots, v_n$ can be written as:',
    options: [
      '$W(x) v(x) = R(x)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The conditions lead to $W v\' = R \\cdot e_n$ where $e_n = (0, \\ldots, 0, 1)^t$.',
  },
      '$v(x) = W(x) R(x)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The conditions lead to $W v\' = R \\cdot e_n$ where $e_n = (0, \\ldots, 0, 1)^t$.',
  },
      '$W\\'(x) = v(x)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The conditions lead to $W v\' = R \\cdot e_n$ where $e_n = (0, \\ldots, 0, 1)^t$.',
  },
      '$W(x) v\\'(x) = R(x) \\cdot (0, \\ldots, 0, 1)^t
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The conditions lead to $W v\' = R \\cdot e_n$ where $e_n = (0, \\ldots, 0, 1)^t$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The conditions lead to $W v\' = R \\cdot e_n$ where $e_n = (0, \\ldots, 0, 1)^t$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Variation of parameters works when:',
    options: [
      '$R(x)$ is a polynomial only',
      'We know the homogeneous solutions, regardless of $R(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The method works for any integrable $R(x)$, as long as we know $n$ independent homogeneous solutions.',
  },
      '$R(x)$ is an exponential only',
      '$R(x) = 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The method works for any integrable $R(x)$, as long as we know $n$ independent homogeneous solutions.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The method works for any integrable $R(x)$, as long as we know $n$ independent homogeneous solutions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The main computational steps in variation of parameters are:',
    options: [
      'Factor the operator and find roots',
      'Use the characteristic equation',
      'Guess the form of the solution',
      'Solve $W v\\\\' = R e_n$ for $v\\\\'$, then integrate',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'We solve the linear system for $v\'$, then integrate each component to find $v_1, \\ldots, v_n$.',
  },
];
