import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What was Sofia Kovalevskaya the first woman to achieve in mathematics?',
    options: [
      'Publish a paper',
      'Earn a doctorate in mathematics',
      'Attend a math lecture',
      'Win a Fields Medal'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Kovalevskaya was the first woman to earn a doctorate in mathematics (summa cum laude from Gottingen in 1874).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Kovalevskaya top is famous for being which integrable case of rigid body rotation?',
    options: [
      'The first',
      'The second',
      'The third',
      'The fourth'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Kovalevskaya top is the third integrable case, after Euler (1758) and Lagrange (1788).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What special property do the moments of inertia have in the Kovalevskaya top?',
    options: [
      '$I_1 = I_2 = I_3$',
      '$I_1 = I_2 = 2I_3$',
      '$I_1 = 2I_2 = 2I_3$',
      '$I_1 + I_2 = I_3$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Kovalevskaya top has $I_1 = I_2 = 2I_3$ with the center of mass offset in the equatorial plane.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the Cauchy-Kovalevskaya theorem guarantee for analytic PDEs?',
    options: [
      'Global solutions always exist',
      'Solutions are always periodic',
      'Local existence and uniqueness of analytic solutions',
      'Solutions can be computed in polynomial time'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Cauchy-Kovalevskaya theorem guarantees that for analytic initial data and analytic PDEs, a unique local analytic solution exists.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why did Kovalevskaya contract a marriage with Vladimir Kovalevsky?',
    options: [
      'For love at first sight',
      'To inherit his wealth',
      'To escape Russia and study abroad',
      'To collaborate on research'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Women in Russia could not travel alone or attend university, so a marriage of convenience allowed her to study in Germany.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which prestigious prize did Kovalevskaya win from the French Academy?',
    options: [
      'Prix Fermat',
      'Prix Bordin',
      'Prix Lagrange',
      'Prix Gauss'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'She won the Prix Bordin in 1888 for her work on rigid body rotation, with the prize increased due to exceptional quality.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Who was Kovalevskaya\'s mathematical mentor in Berlin?',
    options: [
      'Gauss',
      'Riemann',
      'Weierstrass',
      'Kronecker'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Karl Weierstrass tutored Kovalevskaya privately since women were not allowed to attend university lectures.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'At what age did Kovalevskaya die?',
    correctAnswer: 41,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Kovalevskaya died in 1891 at the age of 41 from influenza.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'In what year did Kovalevskaya become professor at Stockholm University?',
    correctAnswer: 1884,
    numericRange: { min: 1800, max: 1900, precision: 0 },
    difficulty: 'medium',
    explanation: 'In 1884, she became the first woman to hold a university chair in mathematics in Northern Europe.',
  },
  {
    id: 10,
    type: 'text',
    question: 'What childhood room decoration sparked Kovalevskaya\'s interest in mathematics?',
    correctAnswer: 'wallpaper',
    difficulty: 'hard',
    explanation: 'Her nursery was temporarily papered with her father\'s old calculus lecture notes, which fascinated her.',
  },
];
