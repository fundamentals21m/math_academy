import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 70: Pell's Equation (Advanced)
 */
export const section70Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Pell\'s equation?',
    options: [
      'x² + y² = 1',
      'xy = d',
      'x² + dy² = d',
      'x² - dy² = 1',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Pell\'s equation is x² - dy² = 1, where d is a positive non-square integer.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who developed the complete theory of Pell\'s equation using continued fractions?',
    options: [
      'Pell',
      'Lagrange',
      'Fermat',
      'Euler',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Lagrange (1770) proved the complete theory using continued fractions, though the equation is named after Pell.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the fundamental solution to x² - 3y² = 1?',
    options: [
      '(2, 1)',
      '(1, 0)',
      '(7, 4)',
      '(3, 1)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      '2² - 3(1)² = 4 - 3 = 1, and (2, 1) is the smallest positive solution.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For d not a perfect square, how many solutions does x² - dy² = 1 have?',
    options: [
      'Infinitely many',
      'None',
      'Exactly one',
      'Finitely many',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Pell\'s equation always has infinitely many integer solutions for non-square d.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How are all solutions generated from the fundamental solution?',
    options: [
      'By multiplication',
      'By addition',
      'By division',
      'By taking powers',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'All solutions come from taking powers of (x₁ + y₁√d) where (x₁, y₁) is the fundamental solution.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why is the fundamental solution for x² - 61y² = 1 notable?',
    options: [
      'It equals (61, 1)',
      'It is very small',
      'It is extremely large (10 digits)',
      'It doesn\\\\\'t exist',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The fundamental solution (1766319049, 226153980) is surprisingly large, a fact that challenged mathematicians.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does Dirichlet\'s approximation theorem guarantee?',
    options: [
      'Irrationals are algebraic',
      'All equations have solutions',
      'Good rational approximations exist for any irrational',
      'Continued fractions terminate',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Dirichlet\'s theorem guarantees that any irrational can be approximated well by rationals.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which mathematician challenged others to solve x² - 61y² = 1?',
    options: [
      'Euler',
      'Fermat',
      'Gauss',
      'Newton',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Fermat famously posed this as a challenge, knowing the solution required advanced techniques.',
  },
];
