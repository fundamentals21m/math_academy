// Chapter 5: Determinants (Sections 20-22)
import type { QuizQuestion } from './types';

// Section 20: Properties of Determinants
export const section20Quiz: QuizQuestion[] = [
  {
    id: 's20-q1',
    question: 'det(I) equals:',
    options: [
      '0',
      'n',
      '1',
      'Undefined',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The identity matrix has determinant 1.'
  },
  {
    id: 's20-q2',
    question: 'If two rows of A are equal, det(A) = :',
    options: [
      '1',
      '0',
      '2',
      'Undefined',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Equal rows (or columns) make the matrix singular, so det = 0.'
  },
  {
    id: 's20-q3',
    question: 'Exchanging two rows of A:',
    options: [
      'Doubles det(A)',
      'Halves det(A)',
      'Doesn\\\'t change det(A)',
      'Changes sign of det(A)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Row exchanges multiply the determinant by -1.'
  },
  {
    id: 's20-q4',
    question: 'det(AB) equals:',
    options: [
      'det(A) + det(B)',
      'det(A)/det(B)',
      'det(A) det(B)',
      'det(A + B)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The determinant is multiplicative: det(AB) = det(A)det(B).'
  },
  {
    id: 's20-q5',
    question: 'det(cA) for an n×n matrix equals:',
    options: [
      'cⁿ det(A)',
      'c det(A)',
      'c² det(A)',
      'det(A)/c',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Scaling all n rows by c multiplies det by cⁿ.'
  }
];

// Section 21: Formulas for Determinants
export const section21Quiz: QuizQuestion[] = [
  {
    id: 's21-q1',
    question: 'The determinant of a triangular matrix equals:',
    options: [
      'Sum of diagonal entries',
      'Product of diagonal entries',
      'Trace',
      '0',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'det(triangular) = product of diagonal entries (pivots).'
  },
  {
    id: 's21-q2',
    question: 'For a 2×2 matrix [[a,b],[c,d]], det = :',
    options: [
      'ac - bd',
      'ad - bc',
      'ab - cd',
      'a + d',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'det([[a,b],[c,d]]) = ad - bc.'
  },
  {
    id: 's21-q3',
    question: 'The cofactor expansion computes det using:',
    options: [
      'Any row or column',
      'Only the first row',
      'Only diagonal entries',
      'Only the last row',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cofactor expansion works along any row or column.'
  },
  {
    id: 's21-q4',
    question: 'Cofactor Cᵢⱼ equals:',
    options: [
      'det(minor)',
      'aᵢⱼ det(minor)',
      'aᵢⱼ',
      '(-1)^(i+j) det(minor)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Cᵢⱼ = (-1)^(i+j) Mᵢⱼ where Mᵢⱼ is the minor (det of submatrix).'
  }
];

// Section 22: Applications of Determinants
export const section22Quiz: QuizQuestion[] = [
  {
    id: 's22-q1',
    question: 'A matrix is invertible if and only if det(A):',
    options: [
      '= 0',
      '= 1',
      '≠ 0',
      '> 0',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'det(A) ≠ 0 ⟺ A is invertible.'
  },
  {
    id: 's22-q2',
    question: 'Cramer\'s rule gives xⱼ = :',
    options: [
      'det(A)/det(Bⱼ)',
      'det(Bⱼ)/det(A)',
      'det(A) + det(Bⱼ)',
      'det(A·Bⱼ)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'xⱼ = det(Bⱼ)/det(A) where Bⱼ has column j replaced by b.'
  },
  {
    id: 's22-q3',
    question: 'The absolute value of a 2×2 determinant equals:',
    options: [
      'The perimeter of a parallelogram',
      'The diagonal length',
      'The sum of sides',
      'The area of a parallelogram',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '|det| = area of parallelogram formed by column (or row) vectors.'
  },
  {
    id: 's22-q4',
    question: 'A⁻¹ can be computed as:',
    options: [
      'C/det(A)',
      'det(A)·C',
      'C + det(A)I',
      'Cᵀ/det(A)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A⁻¹ = (1/det(A)) Cᵀ where C is the cofactor matrix.'
  }
];

// Chapter 5 Comprehensive Quiz
export const chapter05Quiz: QuizQuestion[] = [
  {
    id: 'ch05-q1',
    question: 'det(A) = 0 means:',
    options: [
      'A is singular',
      'A is invertible',
      'A is orthogonal',
      'A is symmetric',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Zero determinant means singular (not invertible).'
  },
  {
    id: 'ch05-q2',
    question: 'det(Aᵀ) equals:',
    options: [
      '1/det(A)',
      '-det(A)',
      'det(A)',
      '(det(A))²',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Transpose doesn\'t change the determinant: det(Aᵀ) = det(A).'
  },
  {
    id: 'ch05-q3',
    question: 'det(A⁻¹) equals:',
    options: ['det(A)', '-det(A)', '1/det(A)', '(det(A))⁻¹'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'det(A)det(A⁻¹) = det(I) = 1, so det(A⁻¹) = 1/det(A).'
  },
  {
    id: 'ch05-q4',
    question: 'Adding a multiple of one row to another:',
    options: [
      'Changes det',
      'Doubles det',
      'Doesn\\\'t change det',
      'Zeros det',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Row replacement operations preserve the determinant.'
  },
  {
    id: 'ch05-q5',
    question: 'For orthogonal matrix Q, det(Q) = :',
    options: [
      '0',
      'n',
      'Any value',
      '±1',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'det(Q)² = det(QᵀQ) = det(I) = 1, so det(Q) = ±1.'
  },
  {
    id: 'ch05-q6',
    question: 'The volume of a parallelepiped formed by 3 vectors in ℝ³ is:',
    options: [
      'Sum of determinants',
      'Product of lengths',
      'Trace of matrix',
      'Absolute value of 3×3 determinant',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '|det| gives the volume (area in 2D, volume in 3D).'
  },
  {
    id: 'ch05-q7',
    question: 'det(2A) for a 3×3 matrix equals:',
    options: [
      '8 det(A)',
      '2 det(A)',
      '4 det(A)',
      '6 det(A)',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'det(cA) = c³det(A) for 3×3, so det(2A) = 8det(A).'
  },
  {
    id: 'ch05-q8',
    question: 'Cramer\'s rule is practical for:',
    options: [
      'Small systems or finding one variable',
      'Large systems',
      'Singular systems',
      'Overdetermined systems',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cramer\'s rule is O(n·n!) - impractical for large n but useful for small systems.'
  },
  {
    id: 'ch05-q9',
    question: 'If A is 4×4 and det(A) = 3, then det(2A) = :',
    options: [
      '6',
      '48',
      '12',
      '24',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'det(2A) = 2⁴ det(A) = 16 × 3 = 48.'
  },
  {
    id: 'ch05-q10',
    question: 'The adjugate matrix is:',
    options: [
      'The transpose of the cofactor matrix',
      'The cofactor matrix',
      'The inverse matrix',
      'The transpose of A',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'adj(A) = Cᵀ, and A⁻¹ = adj(A)/det(A).'
  }
];
