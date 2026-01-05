import type { QuizQuestion } from './types';

export const section184Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.5 establish about parts of numbers?',
    options: [
      'Every number has infinitely many parts',
      'If A is a part of B, and C is the same part of D, then A+C is the same part of B+D',
      'Parts of numbers are always proper fractions',
      'The sum of parts equals the whole'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.5 shows that if A is the same part of B as C is of D (e.g., both are thirds), then A+C is that same part of B+D.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 4 is a fourth of 16, and 5 is a fourth of 20, what does VII.5 tell us about 9 and 36?',
    options: [
      '9 is a fourth of 36',
      '9 is a third of 36',
      '9 is a fifth of 36',
      'There is no relationship'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By VII.5: 4 is 1/4 of 16, and 5 is 1/4 of 20. Therefore 4+5=9 is 1/4 of 16+20=36. Indeed, 9 x 4 = 36.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which modern mathematical concept does VII.5 relate to?',
    options: [
      'The distributive property',
      'The additivity of fractions with equal denominators',
      'The commutative property',
      'The associative property'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.5 essentially states that a/n + b/n = (a+b)/n - the rule for adding fractions with the same denominator, expressed in terms of parts.',
  },
];
