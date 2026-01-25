import type { QuizQuestion } from './types';

export const section164Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A random variable $X$ on a sample space $S$ is:',
    options: [
      'A real-valued function defined on $S$',
      'A probability measure',
      'A subset of $S$',
      'A constant'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A random variable is a real-valued function that assigns a numerical value $X(\\omega)$ to each outcome $\\omega \\in S$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For two dice, if $X$ is the sum of the faces, then $X(3, 4) =$',
    options: [
      '$3$',
      '$7$',
      '$4$',
      '$12$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$X(i, j) = i + j$, so $X(3, 4) = 3 + 4 = 7$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A two-dimensional random variable $(X, Y)$ is:',
    options: [
      'A pair of random variables on the same sample space',
      'A single function',
      'The product $X \\cdot Y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A two-dimensional random variable is a pair $(X, Y)$ of one-dimensional random variables defined on the same sample space.',
  },
      'Always independent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A two-dimensional random variable is a pair $(X, Y)$ of one-dimensional random variables defined on the same sample space.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $X$ is a random variable and $\\varphi$ is a function, then $Y = \\varphi(X)$ is:',
    options: [
      'Not a random variable',
      'The inverse of $X
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Functions of random variables are also random variables: $Y(\\omega) = \\varphi(X(\\omega))$.',
  },
      'A random variable defined by $Y(\\omega) = \\varphi(X(\\omega))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Functions of random variables are also random variables: $Y(\\omega) = \\varphi(X(\\omega))$.',
  },
      'Always equal to $X
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Functions of random variables are also random variables: $Y(\\omega) = \\varphi(X(\\omega))$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Functions of random variables are also random variables: $Y(\\omega) = \\varphi(X(\\omega))$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The notation $P(X \\leq t)$ means:',
    options: [
      '$P(\\{t\\})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(X \\leq t)$ is shorthand for the probability of the event $\\{\\omega \\in S : X(\\omega) \\leq t\\}$.',
  },
      '$X \\cdot P(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$P(X \\leq t)$ is shorthand for the probability of the event $\\{\\omega \\in S : X(\\omega) \\leq t\\}$.',
  },
      '$P(S) \\cdot t
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$P(X \\leq t)$ is shorthand for the probability of the event $\\{\\omega \\in S : X(\\omega) \\leq t\\}$.',
  },
      '$P(\\{\\omega : X(\\omega) \\leq t\\})
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$P(X \\leq t)$ is shorthand for the probability of the event $\\{\\omega \\in S : X(\\omega) \\leq t\\}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$P(X \\leq t)$ is shorthand for the probability of the event $\\{\\omega \\in S : X(\\omega) \\leq t\\}$.',
  },
];
