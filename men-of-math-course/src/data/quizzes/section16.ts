import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Gauss is often called the:',
    options: [
      'Father of Algebra',
      'Prince of Mathematicians',
      'Newton of France',
      'Master of Analysis'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Carl Friedrich Gauss earned the title "Prince of Mathematicians" for his extraordinary contributions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'At age 19, Gauss proved that a regular polygon with how many sides can be constructed with compass and straightedge?',
    options: [
      '7 sides',
      '13 sides',
      '17 sides',
      '19 sides'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Gauss proved the 17-gon (heptadecagon) is constructible, the first advance in this problem since antiquity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Gauss\'s Disquisitiones Arithmeticae is a foundational work in:',
    options: [
      'Calculus',
      'Number theory',
      'Geometry',
      'Statistics'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Disquisitiones Arithmeticae (1801) established modern number theory.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Gauss contributed to astronomy by calculating the orbit of:',
    options: [
      'Halley\'s Comet',
      'The asteroid Ceres',
      'Neptune',
      'Saturn\'s rings'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gauss developed methods to calculate Ceres\'s orbit from limited observations after it was lost.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Gaussian distribution (bell curve) is also known as the:',
    options: [
      'Uniform distribution',
      'Normal distribution',
      'Poisson distribution',
      'Binomial distribution'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Gaussian or normal distribution is the famous bell-shaped probability distribution.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Gauss famously summed the integers from 1 to 100 as a child. What is that sum?',
    correctAnswer: 5050,
    numericRange: { min: 5000, max: 5100, precision: 0 },
    difficulty: 'medium',
    explanation: 'Using the formula n(n+1)/2, the sum is 100×101/2 = 5050.',
  },
];
