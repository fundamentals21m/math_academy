import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 's05-q1',
    type: 'multiple-choice',
    question: 'The multinomial coefficient $\\binom{n}{n_1, n_2, \\ldots, n_r}$ equals:',
    options: [
      '$\\frac{n!}{(n_1 + n_2 + \\cdots + n_r)!}$',
      '$\\frac{n!}{n_1! \\cdot n_2! \\cdots n_r!}$',
      '$n_1! \\cdot n_2! \\cdots n_r!$',
      '$\\frac{(n_1 + n_2 + \\cdots + n_r)!}{n!}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The multinomial coefficient for dividing $n$ objects into groups of sizes $n_1, n_2, \\ldots, n_r$ is $\\frac{n!}{n_1! \\cdot n_2! \\cdots n_r!}$.'
  },
  {
    id: 's05-q2',
    type: 'numeric',
    question: 'How many ways can 10 workers be assigned to 3 jobs needing 2, 3, and 5 workers respectively?',
    correctAnswer: 2520,
    numericRange: { min: 0, max: 10000, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\binom{10}{2, 3, 5} = \\frac{10!}{2! \\cdot 3! \\cdot 5!} = \\frac{3628800}{2 \\cdot 6 \\cdot 120} = 2520$'
  },
  {
    id: 's05-q3',
    type: 'multiple-choice',
    question: 'When $r = 2$, the multinomial coefficient $\\binom{n}{n_1, n_2}$ reduces to:',
    options: [
      '$n!$',
      '$\\frac{n!}{2}$',
      '$\\binom{n}{n_1}$',
      '$n_1 \\cdot n_2$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $r = 2$, $\\binom{n}{n_1, n_2} = \\frac{n!}{n_1! \\cdot n_2!} = \\binom{n}{n_1}$, the binomial coefficient.'
  },
  {
    id: 's05-q4',
    type: 'numeric',
    question: 'Find the coefficient of $x^2 y^2 z$ in $(x + y + z)^5$.',
    correctAnswer: 30,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation: 'We need $n_1 = 2, n_2 = 2, n_3 = 1$. The coefficient is $\\binom{5}{2, 2, 1} = \\frac{5!}{2! \\cdot 2! \\cdot 1!} = \\frac{120}{4} = 30$.'
  },
  {
    id: 's05-q5',
    type: 'multiple-choice',
    question: 'To divide 12 students into 3 *unlabeled* groups of 4 each, we compute $\\binom{12}{4,4,4}$ and then:',
    options: [
      'Do nothing more',
      'Multiply by $3!$',
      'Multiply by $4!$',
      'Divide by $3!$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'When groups are indistinguishable (unlabeled), we divide by the number of ways to arrange identical groups. With 3 identical groups, divide by $3! = 6$.'
  },
  {
    id: 's05-q6',
    type: 'numeric',
    question: 'How many ways can 12 students be divided into 3 labeled groups of 4 each?',
    correctAnswer: 34650,
    numericRange: { min: 0, max: 100000, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\binom{12}{4, 4, 4} = \\frac{12!}{4! \\cdot 4! \\cdot 4!} = \\frac{479001600}{24 \\cdot 24 \\cdot 24} = 34650$'
  }
];
