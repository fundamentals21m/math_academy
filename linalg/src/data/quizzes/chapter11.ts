// Chapter 11: Numerical Linear Algebra (Sections 45-47)
import type { QuizQuestion } from './types';

// Section 45: Gaussian Elimination in Practice
export const section45Quiz: QuizQuestion[] = [
  {
    id: 's45-q1',
    question: 'Partial pivoting chooses the pivot with:',
    options: ['Largest absolute value in column', 'Smallest absolute value', 'Random selection', 'First nonzero entry'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Partial pivoting: choose largest |entry| in column below pivot.'
  },
  {
    id: 's45-q2',
    question: 'Floating-point errors accumulate due to:',
    options: ['Exact arithmetic', 'Rounding at each operation', 'Matrix size', 'Determinant value'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Finite precision means each operation introduces small errors.'
  },
  {
    id: 's45-q3',
    question: 'An ill-conditioned matrix has condition number that is:',
    options: ['Close to 1', 'Negative', 'Very large', 'Zero'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Large κ(A) = σmax/σmin means high sensitivity to errors.'
  },
  {
    id: 's45-q4',
    question: 'Complete pivoting searches for the largest entry in:',
    options: ['Current column only', 'Current row only', 'Diagonal only', 'Entire remaining submatrix'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Complete pivoting: max over all remaining entries (costly).'
  }
];

// Section 46: Iterative Methods
export const section46Quiz: QuizQuestion[] = [
  {
    id: 's46-q1',
    question: 'The Jacobi method updates xₙ₊₁ using:',
    options: ['Only xₙ values', 'Mix of xₙ and xₙ₊₁', 'Only xₙ₊₁ values', 'Random values'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Jacobi uses all old values xₙ to compute new xₙ₊₁.'
  },
  {
    id: 's46-q2',
    question: 'Gauss-Seidel differs from Jacobi by:',
    options: ['Being slower', 'Using updated values immediately', 'Never converging', 'Using random order'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gauss-Seidel uses new values as soon as computed.'
  },
  {
    id: 's46-q3',
    question: 'Iterative methods converge when the spectral radius ρ(M) is:',
    options: ['> 1', '= 1', '< 1', 'Complex'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Convergence requires ρ(M) < 1 for iteration matrix M.'
  },
  {
    id: 's46-q4',
    question: 'Conjugate gradient method is designed for:',
    options: ['Any matrix', 'Singular matrices', 'Complex matrices', 'Symmetric positive definite matrices'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'CG exploits symmetry and positive definiteness for efficiency.'
  }
];

// Section 47: Eigenvalue Algorithms
export const section47Quiz: QuizQuestion[] = [
  {
    id: 's47-q1',
    question: 'Power iteration finds:',
    options: ['The largest eigenvalue (in magnitude)', 'All eigenvalues', 'The smallest eigenvalue', 'The median eigenvalue'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Power method: Aᵏv converges to dominant eigenvector.'
  },
  {
    id: 's47-q2',
    question: 'Inverse iteration finds eigenvalues near:',
    options: ['Zero', 'A chosen shift μ', 'Infinity', 'One'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '(A - μI)⁻¹ has largest eigenvalue 1/(λ - μ) for λ nearest μ.'
  },
  {
    id: 's47-q3',
    question: 'The QR algorithm computes eigenvalues by:',
    options: ['Direct formula', 'Random sampling', 'Repeated QR factorizations', 'Interpolation'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A = QR, then A\' = RQ, repeat: converges to eigenvalue form.'
  },
  {
    id: 's47-q4',
    question: 'Shifting in QR algorithm (A - μI) accelerates convergence near:',
    options: ['All eigenvalues', 'Zero', 'Infinity', 'The eigenvalue closest to μ'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Shift μ speeds up convergence for eigenvalue near μ.'
  }
];

// Chapter 11 Comprehensive Quiz
export const chapter11Quiz: QuizQuestion[] = [
  {
    id: 'ch11-q1',
    question: 'Why is pivoting important in Gaussian elimination?',
    options: ['It prevents division by zero and reduces error', 'It makes the algorithm faster', 'It computes eigenvalues', 'It is not important'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Pivoting avoids zero pivots and small divisors (stability).'
  },
  {
    id: 'ch11-q2',
    question: 'The relative error in solving Ax = b is bounded by:',
    options: ['det(A)', 'κ(A) × relative error in b', 'rank(A)', '1/det(A)'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Condition number κ(A) amplifies input errors.'
  },
  {
    id: 'ch11-q3',
    question: 'For a diagonally dominant matrix, Jacobi and Gauss-Seidel:',
    options: ['Never converge', 'Sometimes converge', 'Always converge', 'Are identical'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Diagonal dominance guarantees convergence of both methods.'
  },
  {
    id: 'ch11-q4',
    question: 'Successive Over-Relaxation (SOR) uses parameter ω to:',
    options: ['Slow down convergence', 'Guarantee divergence', 'Compute eigenvalues', 'Speed up convergence'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Optimal ω (1 < ω < 2) can greatly accelerate Gauss-Seidel.'
  },
  {
    id: 'ch11-q5',
    question: 'Power iteration requires the matrix to have:',
    options: ['One dominant eigenvalue', 'All equal eigenvalues', 'Complex eigenvalues', 'Zero determinant'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Need |λ₁| > |λ₂| for convergence to λ₁ eigenvector.'
  },
  {
    id: 'ch11-q6',
    question: 'The rate of convergence of power iteration depends on:',
    options: ['Matrix size', '|λ₂/λ₁|', 'The determinant', 'The trace'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Smaller |λ₂/λ₁| means faster convergence.'
  },
  {
    id: 'ch11-q7',
    question: 'Hessenberg form (for QR algorithm) has zeros:',
    options: ['Everywhere', 'Above the diagonal', 'Below the subdiagonal', 'On the diagonal'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Upper Hessenberg: aᵢⱼ = 0 for i > j + 1.'
  },
  {
    id: 'ch11-q8',
    question: 'Sparse matrices benefit from iterative methods because:',
    options: ['Direct methods fail', 'They are always faster', 'They give exact answers', 'They preserve sparsity'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Direct methods create fill-in; iterative methods preserve sparsity.'
  },
  {
    id: 'ch11-q9',
    question: 'The Rayleigh quotient R(x) = xᵀAx/xᵀx approximates:',
    options: ['An eigenvalue', 'The determinant', 'The trace', 'The norm'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'R(x) equals an eigenvalue when x is an eigenvector.'
  },
  {
    id: 'ch11-q10',
    question: 'Krylov subspace methods build solutions from:',
    options: ['Random vectors', 'Span of {b, Ab, A²b, ...}', 'Eigenvectors only', 'Null space vectors'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Krylov space Kₖ = span{b, Ab, ..., Aᵏ⁻¹b}.'
  }
];
