import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many postulates did Euclid begin his Elements with?',
    options: [
      '3',
      '5',
      '4',
      '10',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euclid began the Elements with 5 postulates (geometric assumptions) and 5 common notions (logical principles).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which postulate is known as the "parallel postulate"?',
    options: [
      'The first postulate',
      'The third postulate',
      'None of them',
      'The fifth postulate'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The fifth postulate, dealing with lines meeting when angles sum to less than 180°, is equivalent to statements about parallel lines.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The axiomatic method starts with self-evident statements called:',
    options: ['Theorems', 'Axioms', 'Corollaries', 'Lemmas'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Axioms (or postulates) are the self-evident starting points from which all other results are derived.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For approximately how long did Euclid\'s Elements serve as the standard geometry textbook?',
    options: ['500 years', '1000 years', '2000 years', '100 years'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Elements remained the standard geometry textbook for over 2000 years, from 300 BCE until the 19th century.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which Common Notion states "Things equal to the same thing are equal to each other"?',
    options: [
      'Common Notion 1',
      'Common Notion 3',
      'Common Notion 5',
      'It is a Postulate, not a Common Notion'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Common Notion 1 is the transitive property of equality: if A = C and B = C, then A = B.',
  },
];
