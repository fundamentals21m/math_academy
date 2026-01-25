import type { QuizQuestion } from './types';

export const section158Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a compound experiment of two independent experiments with sample spaces $S_1$ and $S_2$, the combined sample space is:',
    options: [
      '$S_1 \\times S_2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The compound experiment has sample space $S_1 \\times S_2$, the Cartesian product of the individual sample spaces.',
  },
      '$S_1 \\cup S_2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The compound experiment has sample space $S_1 \\times S_2$, the Cartesian product of the individual sample spaces.',
  },
      '$S_1 \\cap S_2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The compound experiment has sample space $S_1 \\times S_2$, the Cartesian product of the individual sample spaces.',
  },
      '$S_1 + S_2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The compound experiment has sample space $S_1 \\times S_2$, the Cartesian product of the individual sample spaces.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The compound experiment has sample space $S_1 \\times S_2$, the Cartesian product of the individual sample spaces.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In de Mere\'s problem, the probability of at least one double six in $n$ throws of two dice is:',
    options: [
      '$(1/36)^n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The probability of no double six in one throw is $35/36$. For $n$ independent throws, no double six has probability $(35/36)^n$. So at least one has probability $1 - (35/36)^n$.',
  },
      '$(35/36)^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The probability of no double six in one throw is $35/36$. For $n$ independent throws, no double six has probability $(35/36)^n$. So at least one has probability $1 - (35/36)^n$.',
  },
      '$n/36
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The probability of no double six in one throw is $35/36$. For $n$ independent throws, no double six has probability $(35/36)^n$. So at least one has probability $1 - (35/36)^n$.',
  },
      '$1 - (35/36)^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The probability of no double six in one throw is $35/36$. For $n$ independent throws, no double six has probability $(35/36)^n$. So at least one has probability $1 - (35/36)^n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The probability of no double six in one throw is $35/36$. For $n$ independent throws, no double six has probability $(35/36)^n$. So at least one has probability $1 - (35/36)^n$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the minimum number of throws needed so that $P(\\text{at least one double six}) \\geq 1/2$?',
    correctAnswer: 25,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'hard',
    explanation: 'Need $(35/36)^n \\leq 1/2$, so $n \\geq \\log(1/2)/\\log(35/36) \\approx 24.6$. Thus $n = 25$ throws are needed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For independent experiments, if $U \\subseteq S_1$ and $V \\subseteq S_2$, then $P(U \\times V)$ equals:',
    options: [
      '$P_1(U) + P_2(V)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For independent experiments, probabilities multiply: $P(U \\times V) = P_1(U) \\cdot P_2(V)$.',
  },
      '$\\max(P_1(U), P_2(V))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For independent experiments, probabilities multiply: $P(U \\times V) = P_1(U) \\cdot P_2(V)$.',
  },
      '$P_1(U) \\cdot P_2(V)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For independent experiments, probabilities multiply: $P(U \\times V) = P_1(U) \\cdot P_2(V)$.',
  },
      '$P_1(U) / P_2(V)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For independent experiments, probabilities multiply: $P(U \\times V) = P_1(U) \\cdot P_2(V)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For independent experiments, probabilities multiply: $P(U \\times V) = P_1(U) \\cdot P_2(V)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'An event $A = C_1 \\times S_2$ in a compound experiment is called:',
    options: [
      'A random variable',
      'An event determined by the first experiment',
      'The impossible event',
      'A conditional probability',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An event of the form $C_1 \\times S_2$ depends only on the outcome of the first experiment, so it is determined by the first experiment.',
  },
];
