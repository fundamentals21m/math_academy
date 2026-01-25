import type { QuizQuestion } from './types';

export const section159Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.14 states that equal parallelograms with equal angles have:',
    options: [
      'Equal diagonals',
      'Reciprocally proportional sides',
      'Parallel diagonals',
      'Equal perimeters'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.14 proves that if two parallelograms are equal in area and have one angle equal, their sides about those angles are reciprocally proportional.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "reciprocally proportional" mean for two parallelograms with sides a,b and c,d?',
    options: [
      'a:c = b:d',
      'a + b = c + d',
      'a:c = d:b',
      'a × b = c × d'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Reciprocally proportional means a:c = d:b (or equivalently a × b = c × d for equal areas). The sides are "crossed" in the proportion.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.14 also proves the converse: if sides are reciprocally proportional, what follows?',
    options: [
      'The parallelograms are equal in area',
      'The parallelograms are similar',
      'The parallelograms have equal diagonals',
      'The parallelograms have equal perimeters',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The converse states that if parallelograms have one angle equal and reciprocally proportional sides, they are equal in area.',
  },
];
