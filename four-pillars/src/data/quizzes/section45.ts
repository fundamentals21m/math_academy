import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The associative law of addition $a + (b + c) = (a + b) + c$ is proved using:',
    options: [
      'The Pappus theorem',
      'Direct calculation',
      'The Pythagorean theorem',
      'The scissors theorem (from Desargues)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The scissors theorem, which follows from Desargues, implies the associative law of addition.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The quaternions are denoted by H in honor of:',
    options: [
      'Hamilton',
      'Hilbert',
      'Hessenberg',
      'Hausdorff'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'H stands for Sir William Rowan Hamilton, who discovered the quaternions in 1843.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The associative law of addition needs only the little scissors theorem because:',
    options: [
      'Addition is undefined for large numbers',
      'The scissors lie between parallel lines',
      'Addition is commutative',
      'Subtraction is involved'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For addition, the scissors lie between parallel lines, so only little Desargues is needed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The associative law of multiplication requires the full Desargues theorem because:',
    options: [
      'Multiplication involves the origin',
      'Multiplication is not commutative',
      'The scissors lie between the x- and y-axes (non-parallel)',
      'Division is involved'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For multiplication, the scissors lie between the x- and y-axes, which are not parallel.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The quaternion projective plane $\\mathbb{H}P^2$ satisfies the Desargues theorem but not:',
    options: [
      'The little Desargues theorem',
      'The associative law',
      'The inverse law',
      'The Pappus theorem'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'HP² satisfies Desargues (since H is associative) but not Pappus (since H is not commutative).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'According to Hamilton, quaternions satisfy $i^2 = j^2 = k^2 = ijk =$',
    options: [
      '−1',
      '1',
      '0',
      'i'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Hamilton\'s famous formula: i² = j² = k² = ijk = −1, which he carved into Brougham Bridge.',
  },
];
