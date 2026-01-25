import type { QuizQuestion } from './types';

export const section152Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A probability measure $P$ on a Boolean algebra $\\mathscr{B}$ must satisfy all of the following EXCEPT:',
    options: [
      '$P(A) = P(B)$ for all $A, B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A probability measure must be finitely additive, nonnegative, and assign total probability 1 to the sample space. It does NOT require all sets to have equal probability.',
  },
      '$P$ is finitely additive',
      '$P(S) = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A probability measure must be finitely additive, nonnegative, and assign total probability 1 to the sample space. It does NOT require all sets to have equal probability.',
  },
      '$P(A) \\geq 0$ for all $A
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A probability measure must be finitely additive, nonnegative, and assign total probability 1 to the sample space. It does NOT require all sets to have equal probability.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A probability measure must be finitely additive, nonnegative, and assign total probability 1 to the sample space. It does NOT require all sets to have equal probability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a finite sample space $S = \\{a_1, a_2, \\ldots, a_n\\}$ with equally likely outcomes, the probability of a subset $A$ with $k$ elements is:',
    options: [
      '$k$',
      '$n/k$',
      '$k/n$',
      '$1/k$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'With equally likely outcomes, each point has probability $1/n$. A subset $A$ with $k$ elements has probability $P(A) = k/n = |A|/|S|$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The triple $(S, \\mathscr{B}, P)$ consisting of sample space, Boolean algebra, and probability measure is called:',
    options: [
      'A random variable',
      'A distribution function',
      'An expectation',
      'A probability space'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The complete description of a probabilistic model is the probability space $(S, \\mathscr{B}, P)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For an unbiased coin toss with sample space $S = \\{h, t\\}$, if $H = \\{h\\}$ and $T = \\{t\\}$, then:',
    options: [
      '$P(H) = 1$ and $P(T) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For an unbiased coin, both outcomes are equally likely. Since $P(S) = P(H) + P(T) = 1$, we have $P(H) = P(T) = 1/2$.',
  },
      '$P(H) = P(T) = 1/2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For an unbiased coin, both outcomes are equally likely. Since $P(S) = P(H) + P(T) = 1$, we have $P(H) = P(T) = 1/2$.',
  },
      '$P(H) = P(T) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For an unbiased coin, both outcomes are equally likely. Since $P(S) = P(H) + P(T) = 1$, we have $P(H) = P(T) = 1/2$.',
  },
      '$P(H) + P(T) = 1/2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For an unbiased coin, both outcomes are equally likely. Since $P(S) = P(H) + P(T) = 1$, we have $P(H) = P(T) = 1/2$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For an unbiased coin, both outcomes are equally likely. Since $P(S) = P(H) + P(T) = 1$, we have $P(H) = P(T) = 1/2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $P(a_i)$ denotes the probability of outcome $a_i$ in a finite sample space, which condition must the point probabilities satisfy?',
    options: [
      '$\\sum_i P(a_i) = 0$',
      '$\\sum_i P(a_i) = 1$ and $P(a_i) \\geq 0$',
      '$\\prod_i P(a_i) = 1$',
      '$P(a_i) < 0$ for some $i$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Point probabilities must be nonnegative and sum to 1: $\\sum_i P(a_i) = 1$ with $P(a_i) \\geq 0$ for all $i$.',
  },
];
