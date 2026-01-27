import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Karl Weierstrass is known as:',
    options: [
      'The Prince of Mathematicians',
      'The Master of Algebra',
      'The Father of Modern Analysis',
      'The King of Number Theory'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Weierstrass established rigorous foundations for calculus and analysis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Weierstrass constructed a famous example of a function that is:',
    options: [
      'Differentiable everywhere',
      'Periodic',
      'Discontinuous everywhere',
      'Continuous everywhere but differentiable nowhere'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Weierstrass function is continuous everywhere but differentiable nowhere, a counterintuitive result.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Weierstrass approximation theorem states that continuous functions can be approximated by:',
    options: [
      'Polynomials',
      'Trigonometric functions',
      'Step functions',
      'Exponentials'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Any continuous function on a closed interval can be uniformly approximated by polynomials.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Before becoming a mathematician, Weierstrass worked as:',
    options: [
      'An engineer',
      'A schoolteacher',
      'A lawyer',
      'A priest'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Weierstrass taught at a gymnasium (secondary school) for many years before university recognition.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Weierstrass mentored which famous female mathematician?',
    options: [
      'Emmy Noether',
      'Ada Lovelace',
      'Sofia Kovalevskaya',
      'Mary Somerville'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Weierstrass privately tutored Sofia Kovalevskaya, helping her earn a doctorate.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What mathematical definition did Weierstrass make rigorous using epsilon and delta?',
    correctAnswer: 'limit',
    difficulty: 'medium',
    explanation: 'Weierstrass formalized the epsilon-delta definition of limits, the foundation of rigorous analysis.',
  },
];
