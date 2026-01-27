import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The idea of developing projective geometry without numbers originated with:',
    options: [
      'Euclid',
      'Isaac Newton',
      'Pythagoras',
      'Christian von Staudt (1847)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Von Staudt developed projective geometry without coordinates in 1847.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Hessenberg proved in 1904 that:',
    options: [
      'Pappus implies Desargues',
      'Desargues implies Pappus',
      'Both theorems are equivalent',
      'Neither theorem implies the other'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Hessenberg showed that the Pappus theorem implies the Desargues theorem.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "alternativity" law $a^{-1}(ab) = b = (ba)a^{-1}$ is implied by:',
    options: [
      'The Pappus theorem',
      'The little Desargues theorem',
      'The Desargues theorem',
      'None of the above'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Ruth Moufang showed that little Desargues implies alternativity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Commutative multiplication on Euclidean space $\\mathbb{R}^n$ is possible only for:',
    options: [
      'n = 1, 2, and 4',
      'All n',
      'n = 1 and 2 only',
      'n = 2 only'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Commutative multiplication exists only on ℝ¹ (reals) and ℝ² (complex numbers).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The octonion projective space $\\mathbb{O}P^3$ does not exist because:',
    options: [
      'Octonions are not defined',
      'The octonions have too many elements',
      'There is no coordinate system',
      'Desargues holds in 3D projective spaces, implying associativity (which O lacks)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'In 3D projective spaces, Desargues holds automatically, which would force O to be associative—but it is not.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The octonion projective plane $\\mathbb{O}P^2$ satisfies:',
    options: [
      'Little Desargues but not Desargues',
      'Pappus but not Desargues',
      'Desargues but not little Desargues',
      'Both Pappus and Desargues'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'OP² satisfies little Desargues (octonions are alternative) but not full Desargues (octonions are not associative).',
  },
];
