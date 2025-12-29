import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Cauchy is most famous for his contributions to:',
    options: [
      'Number theory',
      'Mathematical analysis and rigor',
      'Geometry',
      'Probability'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Cauchy established rigorous foundations for calculus and analysis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A Cauchy sequence is one where terms become:',
    options: [
      'Increasingly larger',
      'Arbitrarily close to each other',
      'Alternately positive and negative',
      'Prime numbers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In a Cauchy sequence, the distance between successive terms becomes arbitrarily small.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Cauchy\'s integral formula relates the value of a function inside a contour to:',
    options: [
      'Its derivative',
      'An integral over the contour',
      'Its Taylor series',
      'Its zeros'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cauchy\'s integral formula expresses $f(z_0)$ as a contour integral, a central result in complex analysis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Cauchy-Schwarz inequality relates:',
    options: [
      'Areas of triangles',
      'Inner products and norms',
      'Sums and products',
      'Derivatives and integrals'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cauchy-Schwarz inequality states $|\\langle u,v \\rangle| \\leq \\|u\\| \\cdot \\|v\\|$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Cauchy was politically:',
    options: [
      'A revolutionary',
      'A royalist who went into exile',
      'Apolitical',
      'A republican'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cauchy was a devout royalist who went into voluntary exile when Charles X was overthrown.',
  },
  {
    id: 6,
    type: 'text',
    question: 'Cauchy\'s work made the concept of what mathematical idea rigorous (the approach to a value)?',
    correctAnswer: 'limit',
    difficulty: 'easy',
    explanation: 'Cauchy gave the first rigorous definition of limits, the foundation of calculus.',
  },
];
