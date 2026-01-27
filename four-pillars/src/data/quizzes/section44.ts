import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A field satisfies how many fundamental axioms?',
    options: [
      'Five',
      'Nine',
      'Seven',
      'Twelve'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The nine field axioms are: commutative laws (2), associative laws (2), identity laws (2), inverse laws (2), and the distributive law (1).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For projective points, $a + b = b + a$ is a "coincidence" because:',
    options: [
      'Addition is undefined',
      'Infinity is involved',
      'The constructions of $a + b$ and $b + a$ are different',
      'The points are complex'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since the constructions differ, equality of the results is a geometric coincidence.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The commutative law of multiplication $ab = ba$ is implied by:',
    options: [
      'The Desargues theorem',
      'The little Desargues theorem',
      'The Pythagorean theorem',
      'The Pappus theorem'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Pappus theorem implies the commutative law of multiplication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Desargues theorem implies all field axioms except:',
    options: [
      'The commutative law of multiplication $ab = ba$',
      'The associative law of addition',
      'The distributive law',
      'The identity law $a + 0 = a$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Desargues implies eight axioms but not ab = ba, which requires Pappus.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Pappus theorem implies the Desargues theorem. This was:',
    options: [
      'Known to Euclid',
      'Not proven in this chapter because it is difficult',
      'False',
      'Immediate from definitions'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'While Pappus implies Desargues, the proof is difficult and is not given in this chapter.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The "little Pappus theorem" involves a hexagon whose vertices lie on:',
    options: [
      'A circle',
      'Perpendicular lines',
      'Parallel lines',
      'A single line'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The little Pappus theorem is a special case where the hexagon vertices lie on parallel lines.',
  },
];
