import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 7: Induction
 */
export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the principle of descent (downward induction) state?',
    options: [
      'Every natural number can be reached by counting from 1',
      'Any descending sequence of natural numbers has a least member',
      'The sum of natural numbers is always finite',
      'Every natural number has a successor',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Descent says that any descending sequence of natural numbers must eventually stop—it has a least member. This is because you cannot go down forever starting from a natural number.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the two steps required in a proof by (ascent) induction?',
    options: [
      'Existence step and uniqueness step',
      'Base step and induction step',
      'Forward step and backward step',
      'Initial step and final step',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Proof by induction requires: (1) a base step showing S(1) is true, and (2) an induction step showing S(i) implies S(i+1). Together, these prove S(n) for all natural numbers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following results was proved using descent?',
    options: [
      'The formula for the sum of first n natural numbers',
      'The geometric series formula',
      'Unique prime factorization',
      'The sum of cubes formula',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Unique prime factorization is proved by descent: if a counterexample exists, there is a least one. The sum formulas are typically proved by ascent (upward) induction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is $1 + 2 + 3 + \\cdots + n$ equal to?',
    options: [
      '$n^2$',
      '$\\frac{n(n+1)}{2}$',
      '$\\frac{n(n-1)}{2}$',
      '$2^n - 1$',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The sum of the first n natural numbers is $\\frac{n(n+1)}{2}$. This can be proved by induction or discovered using Gauss\'s trick of pairing terms.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $1 + 2 + 3 + \\cdots + 10$?',
    correctAnswer: 55,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation:
      'Using the formula: $\\frac{10(11)}{2} = \\frac{110}{2} = 55$. Or pair: (1+10)+(2+9)+...+(5+6) = 5×11 = 55.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In the induction step, we assume $S(i)$ is true and prove:',
    options: [
      '$S(1)$ is true',
      '$S(i-1)$ is true',
      '$S(i+1)$ is true',
      '$S(n)$ is true for all n',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The induction step assumes S(i) is true (the "induction hypothesis") and uses this to prove S(i+1) is true. Combined with the base step, this proves S(n) for all n.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the formula for the geometric series $1 + r + r^2 + \\cdots + r^n$?',
    options: [
      '$\\frac{r^n - 1}{r - 1}$',
      '$\\frac{1 - r^{n+1}}{1 - r}$',
      '$\\frac{r^{n+1}}{1 + r}$',
      '$nr$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The geometric series $1 + r + r^2 + \\cdots + r^n = \\frac{1 - r^{n+1}}{1 - r}$. This can be proved by induction or derived by multiplying both sides by $(1-r)$.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why is the sum of cubes formula $1^3 + 2^3 + \\cdots + n^3 = (1 + 2 + \\cdots + n)^2$ remarkable?',
    options: [
      'It was discovered by Euclid',
      'It connects the sum of cubes to the square of the sum',
      'It only works for prime n',
      'It requires calculus to prove',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The remarkable fact is that $1^3 + 2^3 + \\cdots + n^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 = (1 + 2 + \\cdots + n)^2$. The sum of cubes equals the square of the sum!',
  },
];
