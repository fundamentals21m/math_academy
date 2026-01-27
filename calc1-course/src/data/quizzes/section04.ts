import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a proof by induction, what is the "base case"?',
    options: [
      'Proving $P(n) \\Rightarrow P(n+1)$',
      'Proving $P(n)$ for all $n$',
      'Assuming $P(k)$ is true',
      'Proving $P(1)$ is true'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The base case establishes that the statement holds for the initial value, typically $n = 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the inductive hypothesis?',
    options: [
      'The assumption that $P(k)$ is true for some $k$',
      'The statement we want to prove',
      'The final conclusion',
      'The base case'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The inductive hypothesis assumes $P(k)$ is true for some arbitrary $k$, which we use to prove $P(k+1)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Using induction, prove that $1 + 2 + ... + n = \\frac{n(n+1)}{2}$. What is $P(1)$?',
    options: [
      '$1 = \\frac{1}{2}$',
      '$1 = \\frac{1 \\cdot 2}{2} = 1$',
      '$1 + 2 = 3$',
      '$P(1)$ cannot be verified'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $n = 1$: LHS $= 1$, RHS $= \\frac{1 \\cdot 2}{2} = 1$. So $P(1)$ is true.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Using $1 + 2 + ... + n = \\frac{n(n+1)}{2}$, what is $1 + 2 + 3 + 4 + 5$?',
    correctAnswer: 15,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{5 \\cdot 6}{2} = 15$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The well-ordering principle states that:',
    options: [
      'Every set of real numbers has a minimum',
      'Every set can be ordered',
      'Every nonempty set of positive integers has a least element',
      'Induction always works'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The well-ordering principle: every nonempty subset of $\\mathbb{Z}^+$ has a smallest element.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Prove by induction that $2^n > n$ for $n \\geq 1$. What is $2^5$?',
    correctAnswer: 32,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'easy',
    explanation: '$2^5 = 32 > 5$, confirming the inequality for $n = 5$.',
  },
];
