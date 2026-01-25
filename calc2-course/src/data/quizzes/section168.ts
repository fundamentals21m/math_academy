import type { QuizQuestion } from './types';

export const section168Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The uniform distribution on $[a, b]$ has density:',
    options: [
      '$f(t) = 1/(b-a)$ for $a < t < b$',
      '$f(t) = 1$ for all $t$',
      '$f(t) = (b-a)$ for $a < t < b$',
      '$f(t) = t/(b-a)$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The uniform density is constant: $f(t) = 1/(b-a)$ for $t \\in (a, b)$ and 0 elsewhere.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the uniform distribution on $[a, b]$, $P(X \\leq t)$ for $a < t < b$ equals:',
    options: [
      '$t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = (t-a)/(b-a)$ for $a < t < b$, representing the fraction of the interval to the left of $t$.',
  },
      '$t/(b-a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = (t-a)/(b-a)$ for $a < t < b$, representing the fraction of the interval to the left of $t$.',
  },
      '$(b-t)/(b-a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = (t-a)/(b-a)$ for $a < t < b$, representing the fraction of the interval to the left of $t$.',
  },
      '$(t-a)/(b-a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = (t-a)/(b-a)$ for $a < t < b$, representing the fraction of the interval to the left of $t$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The CDF is $F(t) = (t-a)/(b-a)$ for $a < t < b$, representing the fraction of the interval to the left of $t$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The characteristic property of the uniform distribution is that:',
    options: [
      'All intervals have the same probability',
      'Longer intervals have smaller probability',
      'Intervals of equal length have equal probability',
      'Only the endpoints have positive probability'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For uniform distributions, $P(X \\in I)$ depends only on the length of $I$, not its location. Equal-length intervals have equal probability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A stick is broken at a uniformly random point. The probability the left piece is at least twice the right piece is:',
    options: [
      '$1/2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Let $Y$ be uniform on $[0,1]$. Left $\\geq$ 2(Right) means $Y \\geq 2(1-Y)$, so $3Y \\geq 2$, thus $Y \\geq 2/3$. Probability = $1 - 2/3 = 1/3$.',
  },
      '$1/3
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Let $Y$ be uniform on $[0,1]$. Left $\\geq$ 2(Right) means $Y \\geq 2(1-Y)$, so $3Y \\geq 2$, thus $Y \\geq 2/3$. Probability = $1 - 2/3 = 1/3$.',
  },
      '$1/4
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Let $Y$ be uniform on $[0,1]$. Left $\\geq$ 2(Right) means $Y \\geq 2(1-Y)$, so $3Y \\geq 2$, thus $Y \\geq 2/3$. Probability = $1 - 2/3 = 1/3$.',
  },
      '$2/3
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Let $Y$ be uniform on $[0,1]$. Left $\\geq$ 2(Right) means $Y \\geq 2(1-Y)$, so $3Y \\geq 2$, thus $Y \\geq 2/3$. Probability = $1 - 2/3 = 1/3$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Let $Y$ be uniform on $[0,1]$. Left $\\geq$ 2(Right) means $Y \\geq 2(1-Y)$, so $3Y \\geq 2$, thus $Y \\geq 2/3$. Probability = $1 - 2/3 = 1/3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The uniform distribution represents:',
    options: [
      'Maximum knowledge about $X
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The uniform distribution represents "maximum ignorance"—when we have no reason to prefer any part of the interval over another.',
  },
      'Discrete outcomes only',
      'Maximum ignorance within an interval',
      'Heavy-tailed behavior',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The uniform distribution represents "maximum ignorance"—when we have no reason to prefer any part of the interval over another.',
  },
];
