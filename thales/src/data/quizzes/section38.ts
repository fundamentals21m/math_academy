import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 38: Quaternions
 */
export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who discovered quaternions and when?',
    options: [
      'Gauss in 1801',
      'Hamilton in 1843',
      'Euler in 1748',
      'Cayley in 1857',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'William Rowan Hamilton discovered quaternions in 1843. The idea dawned on him while he was strolling along the Royal Canal in Dublin.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What fundamental relations define quaternions?',
    options: [
      'i² = j² = k² = 1',
      'i² = j² = k² = ijk = -1',
      'ij = ji = k',
      'i + j + k = 0',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Quaternions are defined by the relations i² = j² = k² = ijk = -1. These relations determine all products of the basis elements.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why must quaternion multiplication be non-commutative?',
    options: [
      'Because Hamilton wanted it that way',
      'Because matrix multiplication is non-commutative',
      'Because if ij = ji, we would derive i = j = 0 and the system collapses',
      'Because non-commutativity is required for all division rings',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'If quaternion multiplication were commutative, we could derive ij = -ij, leading to i = j = 0, which would collapse the whole system. Thus ij ≠ ji is essential.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is ij in quaternion multiplication?',
    options: ['i', 'j', 'k', '-k'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'In quaternion multiplication, ij = k. Note that ji = -k, demonstrating non-commutativity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the norm N(a) of a quaternion a = a₀ + a₁i + a₂j + a₃k?',
    options: [
      'a₀ + a₁ + a₂ + a₃',
      'a₀² + a₁² + a₂² + a₃²',
      '|a₀| + |a₁| + |a₂| + |a₃|',
      'max(|a₀|, |a₁|, |a₂|, |a₃|)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The norm of a quaternion is N(a) = a₀² + a₁² + a₂² + a₃², which equals aā = āa.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the conjugate of a quaternion a = a₀ + a₁i₁ + a₂i₂ + a₃i₃?',
    options: [
      'a₀ + a₁i₁ + a₂i₂ + a₃i₃',
      '-a₀ + a₁i₁ + a₂i₂ + a₃i₃',
      'a₀ - a₁i₁ - a₂i₂ - a₃i₃',
      '-a₀ - a₁i₁ - a₂i₂ - a₃i₃',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The conjugate of a quaternion a = a₀ + a₁i₁ + a₂i₂ + a₃i₃ is ā = a₀ - a₁i₁ - a₂i₂ - a₃i₃. The real part stays the same, while the imaginary parts change sign.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is a division ring (skew-field)?',
    options: [
      'A ring where division is undefined',
      'A field with finitely many elements',
      'A ring where every nonzero element has a multiplicative inverse',
      'A ring where multiplication is commutative',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A division ring satisfies all field axioms except possibly the commutative law of multiplication. Every nonzero element has a multiplicative inverse.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the multiplicative inverse of a nonzero quaternion a?',
    options: [
      '1/a₀',
      'ā',
      'ā/N(a)',
      'N(a)/ā',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The multiplicative inverse of a nonzero quaternion a is ā/N(a), where ā is the conjugate and N(a) is the norm. We have a · (ā/N(a)) = 1.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is special about the product of conjugates: (ab)̄ = ?',
    options: [
      'āb̄',
      'b̄ā',
      'ab',
      'ā + b̄',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The conjugate of a product reverses the order: (ab)̄ = b̄ā. This is analogous to the transpose of a matrix product: (AB)ᵀ = BᵀAᵀ.',
  },
];
