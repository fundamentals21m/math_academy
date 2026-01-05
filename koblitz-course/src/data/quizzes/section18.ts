import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An elliptic curve over a field $K$ (in Weierstrass form) is defined by:',
    options: [
      '$y = x^3 + ax + b$',
      '$y^2 = x^3 + ax + b$',
      '$y^2 = x^2 + ax + b$',
      '$y^3 = x^3 + ax + b$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Weierstrass form: $y^2 = x^3 + ax + b$ with non-zero discriminant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The points on an elliptic curve form:',
    options: [
      'A ring',
      'A field',
      'An abelian group',
      'A vector space'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Elliptic curve points form an abelian group under the chord-and-tangent law.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The identity element of the elliptic curve group is:',
    options: [
      '$(0, 0)$',
      '$(1, 1)$',
      'The point at infinity $\\mathcal{O}$',
      'Any point on the curve'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The point at infinity $\\mathcal{O}$ serves as the identity: $P + \\mathcal{O} = P$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Hasse\'s theorem bounds $\\#E(\\mathbb{F}_p)$ by:',
    options: [
      '$|\\#E - p| \\leq p$',
      '$|\\#E - p - 1| \\leq 2\\sqrt{p}$',
      '$\\#E = p + 1$',
      '$\\#E \\leq p^2$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Hasse: $|\\#E(\\mathbb{F}_p) - (p+1)| \\leq 2\\sqrt{p}$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name for $nP = P + P + \\cdots + P$ ($n$ times) on an elliptic curve?',
    correctAnswer: 'scalar multiplication',
    difficulty: 'easy',
    explanation: 'Scalar multiplication computes $nP$ efficiently via double-and-add.',
  },
];
