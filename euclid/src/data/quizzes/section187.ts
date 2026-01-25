import type { QuizQuestion } from './types';

export const section187Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does Proposition VII.8 relate to VII.7?',
    options: [
      'VII.8 proves VII.7 is incorrect',
      'VII.8 addresses multiplication instead of subtraction',
      'VII.8 extends subtraction from "a part" to "parts" (multiple equal parts)',
      'VII.8 only applies to prime numbers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Just as VII.6 extended VII.5 for addition, VII.8 extends VII.7 to handle "parts" (like 2/3 or 3/4) rather than just "a part" (like 1/3 or 1/4).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 12 is three-fourths of 16, and 9 is three-fourths of 12, what is 3 in relation to 4?',
    options: [
      'One-fourth of 4',
      'Three-fourths of 4',
      'One-half of 4',
      'Two-thirds of 4',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By VII.8: 12 = (3/4)(16) and 9 = (3/4)(12), so 12-9=3 is three-fourths of 16-12=4. Check: (3/4)(4) = 3.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What modern algebraic property do VII.5 through VII.8 collectively establish for parts?',
    options: [
      'Closure and linearity of fractional relationships under addition and subtraction',
      'Commutativity of addition and subtraction',
      'The distributive property of multiplication over addition',
      'The associative property',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'These propositions show that if numbers maintain a fractional relationship (like a/b = c/d), that relationship is preserved under addition (VII.5-6) and subtraction (VII.7-8).',
  },
];
