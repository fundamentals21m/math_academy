import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 's07-q1',
    type: 'multiple-choice',
    question: 'Which interpretation of probability defines it as the long-run relative frequency?',
    options: [
      'Bayesian interpretation',
      'Classical interpretation',
      'Subjective interpretation',
      'Frequency interpretation'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The frequency interpretation says probability is the long-run relative frequency with which an event occurs in repeated experiments.'
  },
  {
    id: 's07-q2',
    type: 'multiple-choice',
    question: 'The classical interpretation of probability applies when:',
    options: [
      'Outcomes are equally likely',
      'We have personal beliefs about outcomes',
      'We have historical data',
      'Events are mutually exclusive'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The classical interpretation applies when outcomes are equally likely, defining probability as the ratio of favorable outcomes to total outcomes.'
  },
  {
    id: 's07-q3',
    type: 'multiple-choice',
    question: 'Who formalized the axiomatic approach to probability in 1933?',
    options: [
      'Laplace',
      'Kolmogorov',
      'Pascal',
      'Fermat'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Andrey Kolmogorov formalized the axiomatic approach to probability in 1933, providing a rigorous mathematical foundation.'
  },
  {
    id: 's07-q4',
    type: 'multiple-choice',
    question: 'If a forecaster says P(rain) = 0.7 and P(no rain) = 0.5, what is wrong?',
    options: [
      'The probabilities are too high',
      'The probabilities are negative',
      'The probabilities of complementary events must sum to 1',
      'Nothing is wrong'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Complementary events (rain and no rain) must have probabilities that sum to 1. Here 0.7 + 0.5 = 1.2 ≠ 1, violating the axioms.'
  },
  {
    id: 's07-q5',
    type: 'text',
    question: 'What is the term for any process that generates well-defined outcomes that cannot be predicted with certainty?',
    correctAnswer: 'experiment',
    difficulty: 'medium',
    explanation: 'An experiment (or random experiment) is any process that generates well-defined outcomes where we cannot predict with certainty which outcome will occur.'
  }
];
