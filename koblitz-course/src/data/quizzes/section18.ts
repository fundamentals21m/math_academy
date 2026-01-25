import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An elliptic curve over a field $K$ (in Weierstrass form) is defined by:',
    options: [
      '$y = x^3 + ax + b$',
      '$y^3 = x^3 + ax + b$',
      '$y^2 = x^2 + ax + b$',
      '$y^2 = x^3 + ax + b$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Weierstrass form: $y^2 = x^3 + ax + b$ with non-zero discriminant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The points on an elliptic curve form:',
    options: [
      'A field',
      'An abelian group',
      'A ring',
      'A vector space',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Elliptic curve points form an abelian group under the chord-and-tangent law.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The identity element of the elliptic curve group is:',
    options: [
      '$(0, 0)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The point at infinity $\\mathcal{O}$ serves as the identity: $P + \\mathcal{O} = P$.',
  },
      '$(1, 1)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The point at infinity $\\mathcal{O}$ serves as the identity: $P + \\mathcal{O} = P$.',
  },
      'The point at infinity $\\mathcal{O}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The point at infinity $\\mathcal{O}$ serves as the identity: $P + \\mathcal{O} = P$.',
  },
      'Any point on the curve',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The point at infinity $\\mathcal{O}$ serves as the identity: $P + \\mathcal{O} = P$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Hasse\'s theorem bounds $\\#E(\\mathbb{F}_p)$ by:',
    options: [
      '$|\\#E - p - 1| \\leq 2\\sqrt{p}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Hasse: $|\\#E(\\mathbb{F}_p) - (p+1)| \\leq 2\\sqrt{p}$.',
  },
      '$|\\#E - p| \\leq p
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Hasse: $|\\#E(\\mathbb{F}_p) - (p+1)| \\leq 2\\sqrt{p}$.',
  },
      '$\\#E = p + 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Hasse: $|\\#E(\\mathbb{F}_p) - (p+1)| \\leq 2\\sqrt{p}$.',
  },
      '$\\#E \\leq p^2
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Hasse: $|\\#E(\\mathbb{F}_p) - (p+1)| \\leq 2\\sqrt{p}$.',
  },
    ],
    correctIndex: 2,
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
