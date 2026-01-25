import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a life table, the column $l_x$ represents:',
    options: [
      'Annual death probability at age $x$',
      'Deaths between age $x$ and $x+1$',
      'Expected remaining lifetime at age $x$',
      'Number alive at age $x$ out of 100,000 born'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'In a life table, l_x represents the number of people alive at age x out of a cohort of 100,000 born.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The life table column $q_x$ is calculated as:',
    options: [
      '$l_x / l_{x+1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'q_x = d_x/l_x is the probability of dying at age x, calculated as deaths at age x divided by those alive at age x.',
  },
      '$l_x \\times e_x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'q_x = d_x/l_x is the probability of dying at age x, calculated as deaths at age x divided by those alive at age x.',
  },
      '$d_x / l_x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'q_x = d_x/l_x is the probability of dying at age x, calculated as deaths at age x divided by those alive at age x.',
  },
      '$e_x - d_x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'q_x = d_x/l_x is the probability of dying at age x, calculated as deaths at age x divided by those alive at age x.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'q_x = d_x/l_x is the probability of dying at age x, calculated as deaths at age x divided by those alive at age x.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To calculate $_2p_{65}$ from a life table, you would compute:',
    options: [
      '$l_{65} + l_{67}$',
      '$l_{67} / l_{65}$',
      '$l_{65} - l_{67}$',
      '$l_{65} \\times l_{67}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'From life table data, _tp_x = l_{x+t}/l_x. So _2p_{65} = l_{67}/l_{65}.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The life table column $e_x$ represents:',
    options: [
      'The expected remaining lifetime at age $x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'e_x represents the expected remaining lifetime (life expectancy) at age x.',
  },
      'The error term at age $x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'e_x represents the expected remaining lifetime (life expectancy) at age x.',
  },
      'The exponential of $x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'e_x represents the expected remaining lifetime (life expectancy) at age x.',
  },
      'The economic value at age $x
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'e_x represents the expected remaining lifetime (life expectancy) at age x.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'e_x represents the expected remaining lifetime (life expectancy) at age x.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A key observation about $q_x$ is that it:',
    options: [
      'Equals zero after age 100',
      'Remains constant across all ages',
      'Decreases with age',
      'Increases with age (the death rate accelerates)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The death rate q_x increases with age. At 65, about 1% die each year. By 85, it\'s closer to 8%. This acceleration is fundamental to tontine design.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Life tables are compiled from:',
    options: [
      'Insurance company projections',
      'Census and death records by government agencies',
      'Hospital admission data only',
      'Survey responses about expected lifespan',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Governments compile life tables from census and death records. The U.S. Social Security Administration and similar agencies publish updated tables regularly.',
  },
];
