import type { QuizQuestion } from './types';

export const section149Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The mathematical theory of probability began with correspondence between which two mathematicians?',
    options: [
      'Newton and Leibniz',
      'Gauss and Euler',
      'Pascal and Fermat',
      'Laplace and Lagrange',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Probability theory originated in the 17th century correspondence between Blaise Pascal and Pierre de Fermat, prompted by gambling questions from the Chevalier de Méré.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The modern axiomatic foundation of probability theory was established by:',
    options: [
      'Pascal in the 17th century',
      'Kolmogorov in the 1930s',
      'Laplace in the 18th century',
      'Gauss in the 19th century',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Andrey Kolmogorov established the rigorous measure-theoretic foundation of probability in 1933, unifying discrete and continuous probability in a single framework.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The three fundamental ingredients of the mathematical theory of probability are:',
    options: [
      'Mean, variance, and standard deviation',
      'Random variables, expectations, and distributions',
      'Sample space, Boolean algebra of events, and probability measure',
      'Independence, conditional probability, and Bayes\\\' theorem',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The axiomatic approach requires: a sample space $S$ of outcomes, a Boolean algebra $\\mathscr{B}$ of events (subsets of $S$), and a probability measure $P$ assigning probabilities to events.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A probability measure is a special type of:',
    options: [
      'Set function',
      'Random variable',
      'Distribution function',
      'Density function',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A probability measure is a set function—it assigns real numbers (probabilities) to sets (events). It satisfies additional axioms: non-negativity, normalization ($P(S) = 1$), and additivity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The historical problem that sparked probability theory asked about betting on:',
    options: [
      'The sum of two dice being seven',
      'The probability of drawing an ace from a deck',
      'The outcome of coin flips',
      'At least one "double six" in 24 throws of a pair of dice',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Chevalier de Méré asked Pascal whether it was profitable to bet even money on getting at least one double six in 24 throws of two dice.',
  },
];
