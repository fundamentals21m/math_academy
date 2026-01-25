import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 's01-q1',
    type: 'multiple-choice',
    question: 'What is combinatorial analysis?',
    options: [
      'The study of complex numbers',
      'The analysis of differential equations',
      'The theory of limits and continuity',
      'The mathematical theory of counting',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Combinatorial analysis (or combinatorics) is the branch of mathematics concerned with counting, arrangement, and combination of objects according to specified rules.'
  },
  {
    id: 's01-q2',
    type: 'multiple-choice',
    question: 'According to Laplace, probability theory is "at bottom only ______ reduced to calculation."',
    options: [
      'Mathematics',
      'Statistics',
      'Common sense',
      'Logic',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Pierre-Simon Laplace noted that probability theory is "at bottom only common sense reduced to calculation."'
  },
  {
    id: 's01-q3',
    type: 'multiple-choice',
    question: 'To find the probability of a randomly selected arrangement having some property, what do we need to count?',
    options: [
      'The total arrangements and the arrangements with the desired property',
      'The median and mean of all arrangements',
      'Only the total number of arrangements',
      'Only the arrangements with the desired property',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'We need to count both the total number of possible arrangements (sample space) and the number of arrangements with the desired property (event), then take their ratio.'
  },
  {
    id: 's01-q4',
    type: 'multiple-choice',
    question: 'Which correspondence between mathematicians laid the foundations of probability theory in the 17th century?',
    options: [
      'Pascal and Fermat',
      'Newton and Leibniz',
      'Euler and Gauss',
      'Fermat and Descartes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The correspondence between Blaise Pascal and Pierre de Fermat about dice game problems posed by the Chevalier de Méré laid the foundations of probability theory.'
  },
  {
    id: 's01-q5',
    type: 'multiple-choice',
    question: 'What is the "sample space" in probability?',
    options: [
      'The set of all possible arrangements with the desired property',
      'The set of all possible outcomes of an experiment',
      'A subset of favorable outcomes',
      'The average of all outcomes',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The sample space is the set of all possible outcomes of an experiment.'
  }
];
