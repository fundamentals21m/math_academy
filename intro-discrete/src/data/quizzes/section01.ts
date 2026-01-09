import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two steps required in a proof by mathematical induction?',
    options: [
      'Base case and induction step',
      'Assumption and conclusion',
      'Hypothesis and verification',
      'Initial value and final value'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Induction requires proving the base case $P(1)$ and the induction step $P(k) \\Rightarrow P(k+1)$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Using the formula $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$, compute the sum of the first 20 positive integers.',
    correctAnswer: 210,
    numericRange: { min: 0, max: 500, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{20 \\times 21}{2} = \\frac{420}{2} = 210$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $\\binom{5}{2}$?',
    correctAnswer: 10,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\binom{5}{2} = \\frac{5!}{2!3!} = \\frac{120}{2 \\times 6} = 10$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the binomial expansion of $(x + y)^4$, what is the coefficient of $x^2 y^2$?',
    options: [
      '6',
      '4',
      '2',
      '1'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The coefficient is $\\binom{4}{2} = 6$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does strong induction differ from ordinary induction?',
    options: [
      'Strong induction assumes $P(m)$ for all $m \\leq k$ to prove $P(k+1)$',
      'Strong induction only requires the base case',
      'Strong induction proves $P(n)$ for all integers, not just positive ones',
      'Strong induction requires two base cases'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In strong induction, we may assume all previous cases $P(1), P(2), \\ldots, P(k)$ to prove $P(k+1)$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Well-Ordering Principle and Mathematical Induction are:',
    options: [
      'Logically equivalent',
      'Contradictory statements',
      'Unrelated principles',
      'Only valid for even numbers'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'These two principles are logically equivalent - each can be used to prove the other.',
  },
];
