import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The projective Pappus theorem is an example of an:',
    options: [
      'Angle theorem',
      'Incidence theorem',
      'Length theorem',
      'Area theorem'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Pappus theorem involves only points, lines, and their incidences (meetings).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Desargues theorem concerns two triangles that are:',
    options: [
      'Congruent',
      'Similar',
      'In perspective from a point',
      'Equilateral'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The triangles have corresponding vertices on lines through a common center of perspective.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Pappus and Desargues theorems cannot be proved from the three basic projective axioms because:',
    options: [
      'They are false',
      'They involve numbers',
      'They require coordinates',
      'Counterexample planes exist (like the Moulton plane)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Moulton plane satisfies the axioms but not Desargues theorem.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A Pappian plane is a projective plane satisfying:',
    options: [
      'The three axioms plus Pappus and Desargues theorems',
      'Only the three basic axioms',
      'Only the Pappus theorem',
      'None of the above'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Pappian planes satisfy all five axioms and have field coordinates.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Pappus theorem implies which algebraic law?',
    options: [
      'The associative law of multiplication',
      'The commutative law of multiplication (ab = ba)',
      'The distributive law',
      'The inverse law'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Pappus guarantees commutativity of multiplication in the coordinate field.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Desargues theorem implies which algebraic law?',
    options: [
      'The commutative law of multiplication',
      'The distributive law',
      'The associative law of multiplication (a(bc) = (ab)c)',
      'The identity law'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Desargues guarantees associativity of multiplication in the coordinate field.',
  },
];
