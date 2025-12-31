// Chapter 5: Determinants (Sections 25-31)
// Based on Hoffman & Kunze Chapter 5
import type { QuizQuestion, DifficultyQuizData } from './types';

// Section 30: Multilinear Functions (Used as Section 9: Determinants in curriculum)
export const section30Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's30-e01',
      question: 'det(I) where I is the n × n identity matrix equals:',
      options: ['0', '1', 'n', 'n!'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The determinant of the identity matrix is 1 (normalization condition).'
    },
    {
      id: 's30-e02',
      question: 'If A has two identical rows, then det(A) equals:',
      options: ['1', '-1', '0', 'Undefined'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The alternating property implies det = 0 when two rows are equal.'
    },
    {
      id: 's30-e03',
      question: 'det of a 2 × 2 matrix [[a,b],[c,d]] equals:',
      options: ['a + d', 'ac + bd', 'ad - bc', 'ab - cd'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'det([[a,b],[c,d]]) = ad - bc.'
    },
    {
      id: 's30-e04',
      question: 'A square matrix with determinant 0 is called:',
      options: ['Invertible', 'Singular', 'Orthogonal', 'Unitary'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A singular matrix has determinant zero and is not invertible.'
    },
    {
      id: 's30-e05',
      question: 'The determinant of an upper triangular matrix is:',
      options: ['0', '1', 'The product of diagonal entries', 'The sum of diagonal entries'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'For triangular matrices, det = product of diagonal entries.'
    },
    {
      id: 's30-e06',
      question: 'If we swap two rows of matrix A, the determinant:',
      options: ['Stays the same', 'Changes sign', 'Doubles', 'Becomes zero'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Swapping two rows negates the determinant (alternating property).'
    }
  ],
  medium: [
    {
      id: 's30-m01',
      question: 'A determinant function D on n × n matrices is:',
      options: ['Linear in each row', 'Alternating and multilinear', 'Always positive', 'Equal to the trace'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The determinant is multilinear (linear in each row) and alternating (changes sign when rows are swapped).'
    },
    {
      id: 's30-m02',
      question: 'If we multiply one row of A by scalar c, the determinant becomes:',
      options: ['c·det(A)', 'det(A)/c', 'det(A) + c', 'c²·det(A)'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Multilinearity: scaling one row by c scales the determinant by c.'
    },
    {
      id: 's30-m03',
      question: 'det(AB) equals:',
      options: ['det(A) + det(B)', 'det(A) · det(B)', 'det(A)/det(B)', 'det(A + B)'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The determinant is multiplicative: det(AB) = det(A)det(B).'
    },
    {
      id: 's30-m04',
      question: 'det(Aᵀ) equals:',
      options: ['1/det(A)', '-det(A)', 'det(A)', '(det(A))²'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The determinant of the transpose equals the original determinant.'
    },
    {
      id: 's30-m05',
      question: 'A is invertible if and only if:',
      options: ['det(A) = 1', 'det(A) ≠ 0', 'det(A) > 0', 'det(A) = n'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A matrix is invertible iff its determinant is non-zero.'
    },
    {
      id: 's30-m06',
      question: 'det(cA) for an n × n matrix A equals:',
      options: ['c·det(A)', 'cⁿ·det(A)', 'det(A)/c', 'c + det(A)'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Each of n rows is multiplied by c, so det(cA) = cⁿ det(A).'
    }
  ],
  hard: [
    {
      id: 's30-h01',
      question: 'A k-linear function on V^k is:',
      options: ['Degree k polynomial', 'Linear in each of k arguments', 'A function to F^k', 'Always symmetric'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'A k-linear (multilinear) function is linear in each of its k arguments separately.'
    },
    {
      id: 's30-h02',
      question: 'An alternating multilinear function satisfies:',
      options: ['f(v, v, ...) = 0 when any two arguments are equal', 'f is symmetric', 'f(v₁, ..., vₖ) = f(v₁) + ... + f(vₖ)', 'f is constant'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Alternating means f = 0 when two arguments coincide, equivalently, swapping arguments negates f.'
    },
    {
      id: 's30-h03',
      question: 'The cofactor Cᵢⱼ of entry aᵢⱼ is:',
      options: ['aᵢⱼ', '(-1)^{i+j} times the (i,j) minor', 'The (i,j) minor', 'det(A)/aᵢⱼ'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Cᵢⱼ = (-1)^{i+j} Mᵢⱼ where Mᵢⱼ is the determinant of the (n-1)×(n-1) submatrix.'
    },
    {
      id: 's30-h04',
      question: 'Cramer\'s rule expresses the solution of Ax = b in terms of:',
      options: ['Inverses only', 'Ratios of determinants', 'Eigenvalues', 'Traces'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'xᵢ = det(Aᵢ)/det(A) where Aᵢ has the i-th column replaced by b.'
    },
    {
      id: 's30-h05',
      question: 'The adjugate (classical adjoint) of A satisfies:',
      options: ['A · adj(A) = det(A) · I', 'adj(A) = A⁻¹', 'adj(A) = Aᵀ', 'A + adj(A) = I'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'A · adj(A) = adj(A) · A = det(A) · I.'
    },
    {
      id: 's30-h06',
      question: 'The determinant of an n × n matrix A can be expressed as a sum over:',
      options: ['n terms', 'n² terms', 'n! terms', '2ⁿ terms'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'det(A) = Σ_{σ ∈ Sₙ} sgn(σ) A_{1,σ(1)} ··· A_{n,σ(n)} has n! terms.'
    }
  ]
};

// Chapter 5 Comprehensive Quiz
export const chapter05Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch05-h01',
      question: 'det(cA) for an n × n matrix A equals:',
      options: ['c·det(A)', 'cⁿ·det(A)', 'det(A)/c', 'c + det(A)'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Each of n rows is multiplied by c, so det(cA) = cⁿ det(A).'
    },
    {
      id: 'ch05-h02',
      question: 'Cramer\'s rule expresses the solution of Ax = b in terms of:',
      options: ['Inverses only', 'Ratios of determinants', 'Eigenvalues', 'Traces'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'xᵢ = det(Aᵢ)/det(A) where Aᵢ has the i-th column replaced by b.'
    },
    {
      id: 'ch05-h03',
      question: 'If A is obtained from B by adding a multiple of one row to another:',
      options: ['det(A) = -det(B)', 'det(A) = 0', 'det(A) = det(B)', 'det(A) = 2det(B)'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Adding a multiple of one row to another doesn\'t change the determinant.'
    },
    {
      id: 'ch05-h04',
      question: 'The determinant is used to compute:',
      options: ['Only eigenvalues', 'Area/volume scaling, invertibility, eigenvalues', 'Only row rank', 'Only column rank'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Determinants determine invertibility, scaling of areas/volumes, and appear in eigenvalue computations.'
    },
    {
      id: 'ch05-h05',
      question: 'For the exterior algebra ∧V with dim(V) = n, the total dimension of ∧V is:',
      options: ['n', 'n!', '2ⁿ', 'n²'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'dim(∧V) = Σₖ C(n,k) = 2ⁿ.'
    },
    {
      id: 'ch05-h06',
      question: 'If det(A) = 5, then det(2A) for a 3 × 3 matrix equals:',
      options: ['10', '8', '40', '125'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'det(2A) = 2³ · det(A) = 8 · 5 = 40.'
    },
    {
      id: 'ch05-h07',
      question: 'The adjugate (classical adjoint) of A satisfies:',
      options: ['A · adj(A) = det(A) · I', 'adj(A) = A⁻¹', 'adj(A) = Aᵀ', 'A + adj(A) = I'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'A · adj(A) = adj(A) · A = det(A) · I.'
    },
    {
      id: 'ch05-h08',
      question: 'The uniqueness of the determinant means:',
      options: ['Every matrix has exactly one determinant', 'There is only one alternating multilinear function with D(I) = 1', 'Determinants are always unique', 'All of the above'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The determinant is the unique alternating n-linear function with D(I) = 1.'
    },
    {
      id: 'ch05-h09',
      question: 'For invertible A, det(A⁻¹) equals:',
      options: ['det(A)', '-det(A)', '1/det(A)', '(det(A))²'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'det(A⁻¹) = 1/det(A) since det(A)det(A⁻¹) = det(I) = 1.'
    },
    {
      id: 'ch05-h10',
      question: 'The sign (signature) of a permutation σ is:',
      options: ['Always +1', 'Always -1', '+1 or -1 depending on parity', '0'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'sgn(σ) = +1 for even permutations, -1 for odd permutations.'
    }
  ]
};
