import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Vectors u and v are linearly independent if:',
    options: [
      'u = v',
      'Neither is a scalar multiple of the other',
      'u + v = 0',
      'They have the same length'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Linear independence means no nontrivial linear combination au + bv = 0, i.e., neither is a multiple of the other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The direction of a nonzero vector u is represented by:',
    options: [
      'Its length',
      'Its angle with the x-axis',
      'The line through 0 and u',
      'Its coordinates'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'All scalar multiples au lie on the same line through the origin, defining the direction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Segments from v to w and from s to t are parallel if:',
    options: [
      'v = s',
      'v + w = s + t',
      '|v − w| = |s − t|',
      'w − v = a(t − s) for some a ≠ 0'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Parallel means the direction vectors w − v and t − s are scalar multiples.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The vector Thales theorem states: if w − v is parallel to t − s (on two lines through 0), then:',
    options: [
      'v = as and w = at for the same scalar a',
      'w = v',
      'v + w = s + t',
      's = t'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parallel transversals cut the two lines in proportional segments: v = as implies w = at.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If au + bv = 0 with a ≠ 0, then:',
    options: [
      'u and v are linearly independent',
      'u = (−b/a)v (u is a multiple of v)',
      'a = b = 0',
      'u = v'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If au + bv = 0 with a ≠ 0, we can solve for u = (−b/a)v, showing u is a multiple of v.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The proof of the vector Pappus theorem uses the fact that for real numbers:',
    options: [
      '$ab \\neq ba$ in general',
      '$a + b = b + a$',
      '$ab = ba$ (commutativity)',
      '$a(b + c) = ab + ac$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The key step exchanges ab for ba, relying on commutativity of real multiplication.',
  },
];
