import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A field is a set with operations + and × satisfying:',
    options: [
      'Only the commutative law',
      'Only the associative law',
      'No particular laws',
      'The nine field axioms (associative, commutative, distributive, identity, inverse laws)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A field must satisfy all nine fundamental algebraic laws.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Fano plane F₂P² has how many points?',
    options: [
      '7',
      '3',
      '5',
      '15'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'F₂P² has 7 points (the nonzero elements of F₂³).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The field F₂ has how many elements?',
    options: [
      '1',
      '2',
      '3',
      'Infinitely many'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'F₂ = {0, 1} with addition mod 2.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In F₂, 1 + 1 = :',
    options: [
      '2',
      '1',
      '0',
      '−1'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In F₂, addition is mod 2, so 1 + 1 = 0.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The cross-ratio was first discovered by:',
    options: [
      'Euclid',
      'Newton',
      'Hilbert',
      'Pappus (around 300 CE)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Pappus proved the invariance of the cross-ratio around 300 CE.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To ensure a projective plane FP² has coordinates from a field, we need:',
    options: [
      'The Pappus theorem as an additional axiom',
      'Only the three basic axioms',
      'The Pythagorean theorem',
      'Complex numbers'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Pappus theorem guarantees the coordinate system satisfies field axioms.',
  },
];
