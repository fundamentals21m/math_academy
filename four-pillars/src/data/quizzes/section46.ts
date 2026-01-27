import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The distributive law $a(b + c) = ab + ac$ is proved using:',
    options: [
      'The Desargues theorem only',
      'The Pappus theorem',
      'Direct calculation',
      'The Pythagorean theorem'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Pappus theorem implies the distributive law.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If we assume the Pappus theorem, proving $(b + c)a = ba + ca$ separately is:',
    options: [
      'Essential',
      'Impossible',
      'Unnecessary because Pappus implies $ab = ba$',
      'Required by the scissors theorem'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Pappus implies commutativity, so (b + c)a = a(b + c) = ab + ac = ba + ca.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the distributive law proof, multiplication maps points from the x-axis to the y-axis via:',
    options: [
      'Perpendicular lines',
      'Circular arcs',
      'Random directions',
      'Lines parallel to the line from 1 to a'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Points are mapped using lines parallel to the line from 1 on the x-axis to a on the y-axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Both distributive laws hold for the quaternions because:',
    options: [
      'Matrix multiplication distributes over matrix addition from both sides',
      'Quaternions are commutative',
      'Quaternions are just complex numbers',
      'The proof fails for quaternions'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Quaternions are 2×2 complex matrices, and matrix multiplication distributes regardless of commutativity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which field axioms follow directly from the construction (without needing Pappus or Desargues)?',
    options: [
      'Commutative laws',
      'Identity and inverse laws',
      'Associative laws',
      'Distributive law'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The identity laws (a + 0 = a, a · 1 = a) and inverse laws follow directly from the construction.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The complete summary of field axiom proofs shows that Pappus is needed for:',
    options: [
      'Associativity only',
      'Identity laws only',
      'Commutativity and distributivity',
      'Inverse laws only'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Pappus is needed to prove the commutative laws (ab = ba, a + b = b + a) and the distributive law.',
  },
];
