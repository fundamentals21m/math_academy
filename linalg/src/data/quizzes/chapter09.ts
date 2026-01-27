// Chapter 9: Complex Vectors and Matrices (Sections 35-37)
import type { QuizQuestion } from './types';

// Section 35: Complex Numbers
export const section35Quiz: QuizQuestion[] = [
  {
    id: 's35-q1',
    question: 'The imaginary unit i satisfies:',
    options: ['i² = -1', 'i = 1', 'i² = 1', 'i = -1'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, i² = -1, so i = √(-1).'
  },
  {
    id: 's35-q2',
    question: 'The complex conjugate of a + bi is:',
    options: ['a + bi', 'a - bi', '-a + bi', '-a - bi'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Conjugate flips the sign of the imaginary part: z̄ = a - bi.'
  },
  {
    id: 's35-q3',
    question: '|a + bi| equals:',
    options: ['a + b', 'a² + b²', '√(a² + b²)', '|a| + |b|'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Modulus: |z| = √(a² + b²), the distance from origin.'
  },
  {
    id: 's35-q4',
    question: 'e^(iθ) equals:',
    options: ['cos θ + sin θ', 'i(cos θ + sin θ)', 'cos θ - i sin θ', 'cos θ + i sin θ'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Euler\'s formula: e^(iθ) = cos θ + i sin θ.'
  }
];

// Section 36: Hermitian and Unitary Matrices
export const section36Quiz: QuizQuestion[] = [
  {
    id: 's36-q1',
    question: 'The Hermitian transpose (conjugate transpose) of A is:',
    options: ['Aᴴ = Āᵀ', 'Aᵀ', 'Ā', 'A*'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Hermitian transpose: Aᴴ = Āᵀ (transpose and conjugate).'
  },
  {
    id: 's36-q2',
    question: 'A Hermitian matrix satisfies:',
    options: ['A = Aᵀ', 'A = Aᴴ', 'A = -Aᴴ', 'A = A⁻¹'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hermitian: A = Aᴴ (equals its own conjugate transpose).'
  },
  {
    id: 's36-q3',
    question: 'Eigenvalues of a Hermitian matrix are:',
    options: ['Complex', 'Purely imaginary', 'Real', 'Zero'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Hermitian matrices always have real eigenvalues.'
  },
  {
    id: 's36-q4',
    question: 'A unitary matrix U satisfies:',
    options: ['UᵀU = I', 'U² = I', 'U + Uᴴ = I', 'UᴴU = I'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Unitary: UᴴU = I, the complex analog of orthogonal.'
  }
];

// Section 37: The Fast Fourier Transform
export const section37Quiz: QuizQuestion[] = [
  {
    id: 's37-q1',
    question: 'The DFT matrix F has entries:',
    options: ['Fⱼₖ = e^(2πijk/n)', 'Fⱼₖ = jk', 'Fⱼₖ = 1/(j+k)', 'Fⱼₖ = cos(jk)'],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'DFT: Fⱼₖ = ωⁿʲᵏ where ωₙ = e^(2πi/n).'
  },
  {
    id: 's37-q2',
    question: 'The FFT reduces DFT complexity from O(n²) to:',
    options: ['O(n)', 'O(n log n)', 'O(n³)', 'O(log n)'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FFT uses divide-and-conquer to achieve O(n log n).'
  },
  {
    id: 's37-q3',
    question: 'The Fourier matrix F is:',
    options: ['Real symmetric', 'Lower triangular', 'Complex unitary (after scaling)', 'Sparse'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '(1/√n)F is unitary: preserves lengths in complex space.'
  },
  {
    id: 's37-q4',
    question: 'FFT is most efficient when n is:',
    options: ['Prime', 'Odd', 'Any integer', 'A power of 2'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Powers of 2 allow perfect halving at each step.'
  }
];

// Chapter 9 Comprehensive Quiz
export const chapter09Quiz: QuizQuestion[] = [
  {
    id: 'ch09-q1',
    question: 'z · z̄ equals:',
    options: ['|z|²', '0', '2a (if z = a + bi)', 'z²'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'z · z̄ = (a + bi)(a - bi) = a² + b² = |z|².'
  },
  {
    id: 'ch09-q2',
    question: 'The complex inner product ⟨u, v⟩ is:',
    options: ['uᵀv', 'uᴴv', 'ūᵀv', 'u · v'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Complex inner product: ⟨u, v⟩ = uᴴv = Σ ūᵢvᵢ.'
  },
  {
    id: 'ch09-q3',
    question: 'Skew-Hermitian matrix satisfies:',
    options: ['A = Aᴴ', 'A = Aᵀ', 'A = -Aᴴ', 'A = -A'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Skew-Hermitian: A = -Aᴴ (eigenvalues are purely imaginary).'
  },
  {
    id: 'ch09-q4',
    question: 'The n-th roots of unity are evenly spaced on:',
    options: ['The real line', 'The imaginary axis', 'A random curve', 'The unit circle'],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'ωₙᵏ = e^(2πik/n) are n points on the unit circle.'
  },
  {
    id: 'ch09-q5',
    question: 'Real symmetric is to orthogonal as Hermitian is to:',
    options: ['Unitary', 'Symmetric', 'Orthogonal', 'Diagonal'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Unitary is the complex analog of orthogonal.'
  },
  {
    id: 'ch09-q6',
    question: 'Eigenvectors of a Hermitian matrix (for distinct eigenvalues) are:',
    options: ['Parallel', 'Orthogonal', 'Real', 'Zero'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Just like symmetric matrices, Hermitian has orthogonal eigenvectors.'
  },
  {
    id: 'ch09-q7',
    question: 'In polar form, z = re^(iθ), r represents:',
    options: ['The argument', 'The real part', 'The modulus |z|', 'The imaginary part'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'r = |z| is the distance from origin (modulus).'
  },
  {
    id: 'ch09-q8',
    question: 'The FFT key insight is that ωₙ² = :',
    options: ['ωₙ', 'ω₂ₙ', '1', 'ωₙ/₂'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'ωₙ² = e^(4πi/n) = e^(2πi/(n/2)) = ωₙ/₂, allowing recursion.'
  },
  {
    id: 'ch09-q9',
    question: 'For unitary U, |Ux| = :',
    options: ['|x|', '0', '|U||x|', '|x|²'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Unitary matrices preserve length: |Ux| = |x|.'
  },
  {
    id: 'ch09-q10',
    question: 'The spectral theorem for Hermitian A says A = :',
    options: ['LU', 'UDUᴴ with U unitary, D real diagonal', 'QR', 'SVD'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A = UDUᴴ where U is unitary and D has real eigenvalues.'
  }
];
