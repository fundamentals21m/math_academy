import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A simple function has the form:',
    options: [
      '$\\sum_{n=0}^\\infty a_n x^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Simple functions are finite linear combinations of indicator functions.',
  },
      '$\\sum_{i=1}^n c_i \\chi_{E_i}$ where $E_i$ are measurable and $c_i$ are constants',
      '$e^x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Simple functions are finite linear combinations of indicator functions.',
  },
      '$\\sin(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Simple functions are finite linear combinations of indicator functions.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Simple functions are finite linear combinations of indicator functions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Lebesgue integral of a non-negative simple function $\\sum c_i \\chi_{E_i}$ is:',
    options: [
      '$\\sum c_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral is the weighted sum of measure: $\\int \\sum c_i \\chi_{E_i} = \\sum c_i m(E_i)$.',
  },
      '$\\max c_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The integral is the weighted sum of measure: $\\int \\sum c_i \\chi_{E_i} = \\sum c_i m(E_i)$.',
  },
      '$\\prod c_i
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The integral is the weighted sum of measure: $\\int \\sum c_i \\chi_{E_i} = \\sum c_i m(E_i)$.',
  },
      '$\\sum c_i m(E_i)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The integral is the weighted sum of measure: $\\int \\sum c_i \\chi_{E_i} = \\sum c_i m(E_i)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The integral is the weighted sum of measure: $\\int \\sum c_i \\chi_{E_i} = \\sum c_i m(E_i)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Simple functions form a:',
    options: [
      'Field',
      'Group but not a vector space',
      'Vector space',
      'Empty set',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Simple functions are closed under addition and scalar multiplication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f \\leq g$ are non-negative simple functions, then:',
    options: [
      '$\\int f \\leq \\int g
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral is monotone: $f \\leq g \\Rightarrow \\int f \\leq \\int g$.',
  },
      '$\\int f \\geq \\int g
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral is monotone: $f \\leq g \\Rightarrow \\int f \\leq \\int g$.',
  },
      'Nothing can be concluded',
      '$\\int f = \\int g
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral is monotone: $f \\leq g \\Rightarrow \\int f \\leq \\int g$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral is monotone: $f \\leq g \\Rightarrow \\int f \\leq \\int g$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Simple functions are used to:',
    options: [
      'Solve differential equations',
      'Approximate measurable functions and define the Lebesgue integral',
      'Study convergence of power series',
      'Prove the inverse function theorem',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Simple functions are building blocks for defining the Lebesgue integral.',
  },
];
