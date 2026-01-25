import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The discount factor $v$ is defined as:',
    options: [
      '$v = 1 + i
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The discount factor v = 1/(1+i) tells us the present value of $1 to be received one year from now.',
  },
      '$v = i^t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The discount factor v = 1/(1+i) tells us the present value of $1 to be received one year from now.',
  },
      '$v = \\frac{1}{1+i}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The discount factor v = 1/(1+i) tells us the present value of $1 to be received one year from now.',
  },
      '$v = \\frac{i}{1-i}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The discount factor v = 1/(1+i) tells us the present value of $1 to be received one year from now.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The discount factor v = 1/(1+i) tells us the present value of $1 to be received one year from now.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'With an interest rate of 4%, the discount factor $v$ equals:',
    options: [
      '1.04',
      '0.96',
      '0.04',
      '0.9615',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'v = 1/1.04 = 0.9615. This means $1 next year is worth $0.9615 today.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For payments $t$ years in the future, the present value formula is:',
    options: [
      '$v / t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The present value of $1 in t years is v^t. Discounting compounds over multiple years.',
  },
      '$v^t
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The present value of $1 in t years is v^t. Discounting compounds over multiple years.',
  },
      '$v \\times t
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The present value of $1 in t years is v^t. Discounting compounds over multiple years.',
  },
      '$v + t
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The present value of $1 in t years is v^t. Discounting compounds over multiple years.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The present value of $1 in t years is v^t. Discounting compounds over multiple years.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'At 4% interest, $1 to be received in 20 years is worth approximately today:',
    options: [
      '$0.96',
      '$0.82',
      '$0.46',
      '$0.68',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'v^20 = (1/1.04)^20 ≈ 0.4564. A dollar in 20 years is worth only about $0.46 today.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is discounting essential for evaluating tontine fairness?',
    options: [
      'Payments occur at different times and cannot be directly added',
      'To calculate tax obligations',
      'To determine administrative costs',
      'To comply with regulations',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'We receive payments over many years. We can\'t just add $4,000 + $4,500 + $5,000 because they occur at different times—they must be discounted to present value first.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The statement "$0.9615 invested today at 4% becomes $1 in one year" illustrates:',
    options: [
      'Inflation adjustment',
      'The equivalence between discounting and compounding',
      'Risk premium calculation',
      'Tax deferral benefits',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Discounting and compounding are inverse operations. $0.9615 × 1.04 = $1, showing that present value and future value are two perspectives on the same relationship.',
  },
];
