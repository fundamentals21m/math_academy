import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What technique did Eudoxus develop to calculate areas and volumes?',
    options: [
      'Algebraic substitution',
      'The method of exhaustion',
      'Differential calculus',
      'Trigonometric identities'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The method of exhaustion approximates areas by inscribing polygons with increasingly many sides, exhausting the difference.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What crisis in Greek mathematics did Eudoxus\'s theory of proportions resolve?',
    options: [
      'The discovery of zero',
      'The problem of parallel lines',
      'The discovery of irrational numbers',
      'The impossibility of squaring the circle'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The discovery that $\\sqrt{2}$ is irrational threatened Greek mathematics based on whole number ratios. Eudoxus\'s theory handled all magnitudes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Eudoxus\'s definition of equal ratios states that $a:b = c:d$ if and only if:',
    options: [
      '$a \\times d = b \\times c$',
      '$a/b$ and $c/d$ have the same decimal expansion',
      '$a + b = c + d$',
      'For all integers $m, n$: $ma \\lessgtr nb$ exactly when $mc \\lessgtr nd$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'This definition works for all magnitudes, rational or irrational, anticipating Dedekind cuts by over 2000 years.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which famous mathematician incorporated Eudoxus\'s work into his Elements?',
    options: [
      'Euclid',
      'Archimedes',
      'Pythagoras',
      'Aristotle'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Euclid\'s Elements Book V presents Eudoxus\'s theory of proportions, and Book XII uses his method of exhaustion.',
  },
  {
    id: 5,
    type: 'text',
    question: 'Besides mathematics, Eudoxus made major contributions to which field involving celestial bodies?',
    correctAnswer: 'astronomy',
    difficulty: 'medium',
    explanation: 'Eudoxus developed a sophisticated model of concentric spheres to explain planetary motion.',
  },
];
