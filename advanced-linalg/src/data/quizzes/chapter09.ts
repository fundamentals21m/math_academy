// Chapter 9: Operators on Inner Product Spaces (Sections 50-55)
// Based on Hoffman & Kunze Chapter 9
import type { DifficultyQuizData } from './types';

// Section 50: Introduction
export const section50Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's50-e01',
      question: 'Chapter 9 extends the study of operators to include:',
      options: ['Only real spaces', 'Only finite fields', 'Sesquilinear forms and their operators', 'Matrices only'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This chapter develops the theory of sesquilinear forms and associated operators.'
    },
    {
      id: 's50-e02',
      question: 'A sesquilinear form is linear in one argument and:',
      options: ['Linear in the other', 'Constant in the other', 'Zero in the other', 'Conjugate-linear in the other'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Sesquilinear means linear in one variable and conjugate-linear in the other.'
    },
    {
      id: 's50-e03',
      question: 'On a real vector space, sesquilinear forms reduce to:',
      options: ['Bilinear forms', 'Zero forms', 'Linear forms', 'Quadratic forms'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Over ℝ, conjugation is trivial, so sesquilinear = bilinear.'
    },
    {
      id: 's50-e04',
      question: 'The standard inner product on ℂⁿ is:',
      options: ['Bilinear', 'Sesquilinear', 'Neither', 'Constant'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The complex inner product is sesquilinear (conjugate-linear in one argument).'
    },
    {
      id: 's50-e05',
      question: 'A Hermitian form satisfies f(u,v) =:',
      options: ['f(v,u)', '-f(v,u)', 'Conjugate of f(v,u)', '0'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Hermitian means f(u,v) = f(v,u)* (conjugate symmetry).'
    },
    {
      id: 's50-e06',
      question: 'For a Hermitian form, f(v,v) is always:',
      options: ['Complex', 'Zero', 'Negative', 'Real'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'f(v,v) = f(v,v)*, so f(v,v) is real.'
    }
  ],
  medium: [
    {
      id: 's50-m01',
      question: 'Every sesquilinear form f on a finite-dimensional inner product space can be written as:',
      options: ['f(u,v) = ⟨Tu,v⟩ for unique operator T', 'f(u,v) = ||u|| ||v||', 'f(u,v) = 0', 'f(u,v) = ⟨u,v⟩'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The form f corresponds uniquely to an operator T via f(u,v) = ⟨Tu,v⟩.'
    },
    {
      id: 's50-m02',
      question: 'The matrix of a sesquilinear form relative to an orthonormal basis is:',
      options: ['Always diagonal', 'The same as the operator matrix', 'Always symmetric', 'Not well-defined'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'For orthonormal basis, the form\'s matrix equals the associated operator\'s matrix.'
    },
    {
      id: 's50-m03',
      question: 'A skew-Hermitian form satisfies f(u,v) =:',
      options: ['f(v,u)', 'f(v,u)*', '-conjugate of f(v,u)', '0'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Skew-Hermitian: f(u,v) = -f(v,u)* (negative conjugate symmetry).'
    },
    {
      id: 's50-m04',
      question: 'For a skew-Hermitian form, f(v,v) is always:',
      options: ['Real', 'Zero', 'Positive', 'Purely imaginary'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'f(v,v) = -f(v,v)*, so f(v,v) is purely imaginary.'
    },
    {
      id: 's50-m05',
      question: 'The operator T associated to form f via f(u,v) = ⟨Tu,v⟩ is Hermitian iff:',
      options: ['f is Hermitian', 'f is skew-Hermitian', 'f = 0', 'f is bilinear'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'T = T* iff the associated form is Hermitian.'
    },
    {
      id: 's50-m06',
      question: 'The quadratic form associated to Hermitian f is:',
      options: ['f(u,v)', 'Q(v) = f(v,v)', 'Always zero', 'Not defined'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The quadratic form Q(v) = f(v,v) determines a Hermitian form (char ≠ 2).'
    }
  ],
  hard: [
    {
      id: 's50-h01',
      question: 'Polarization recovers f from Q via:',
      options: ['f(u,v) = Q(u)Q(v)', 'f(u,v) = Q(u)/Q(v)', 'f(u,v) = Q(u+v) - Q(u) - Q(v) with suitable scaling', 'Cannot be recovered'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Polarization: f(u,v) = ¼[Q(u+v) - Q(u-v) + iQ(u+iv) - iQ(u-iv)] (complex case).'
    },
    {
      id: 's50-h02',
      question: 'The null space of sesquilinear form f is:',
      options: ['All of V', 'Empty', '{0}', '{v : f(v,w) = 0 for all w}'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The (left) null space is the set of vectors orthogonal to everything.'
    },
    {
      id: 's50-h03',
      question: 'f is non-degenerate iff:',
      options: ['The null space is {0}', 'f = 0', 'f is Hermitian', 'f(v,v) > 0 for all v'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Non-degenerate means only 0 is orthogonal to everything.'
    },
    {
      id: 's50-h04',
      question: 'The signature of a Hermitian form is:',
      options: ['Its determinant', '(# positive eigenvalues, # negative eigenvalues)', 'The trace', 'Not defined'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Signature (p, q) counts positive and negative eigenvalues of the associated operator.'
    },
    {
      id: 's50-h05',
      question: 'Sylvester\'s law of inertia states:',
      options: ['All forms are equivalent', 'Forms have no invariants', 'The signature is a complete invariant for Hermitian forms', 'Only dimension matters'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Two Hermitian forms are equivalent iff they have the same signature.'
    },
    {
      id: 's50-h06',
      question: 'An indefinite form has:',
      options: ['Signature (n, 0)', 'f(v,v) = 0 for all v', 'Signature (0, n)', 'Both positive and negative values of f(v,v)'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Indefinite means neither positive nor negative semi-definite.'
    }
  ]
};

// Section 51-52: Forms and Positive Forms
export const section51Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's51-e01',
      question: 'A positive semi-definite form satisfies:',
      options: ['f(v,v) ≥ 0 for all v', 'f(v,v) < 0', 'f(v,v) = 0', 'f is negative'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Positive semi-definite: f(v,v) ≥ 0 for all v.'
    },
    {
      id: 's51-e02',
      question: 'A positive definite form additionally requires:',
      options: ['f(v,v) = 0 for all v', 'f(v,v) > 0 for v ≠ 0', 'f is zero', 'Nothing more'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Positive definite: f(v,v) > 0 for all nonzero v.'
    },
    {
      id: 's51-e03',
      question: 'Inner products are:',
      options: ['Negative definite', 'Skew-Hermitian', 'Positive definite Hermitian forms', 'Bilinear only'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'An inner product is a positive definite Hermitian (or symmetric) form.'
    },
    {
      id: 's51-e04',
      question: 'A positive operator T satisfies:',
      options: ['T < 0', 'T is invertible', 'T² = 0', '⟨Tv,v⟩ ≥ 0 for all v'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Positive: ⟨Tv,v⟩ ≥ 0 for all v.'
    },
    {
      id: 's51-e05',
      question: 'A positive operator is always:',
      options: ['Self-adjoint', 'Nilpotent', 'Unitary', 'Zero'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Positive operators are self-adjoint (T = T*).'
    },
    {
      id: 's51-e06',
      question: 'The eigenvalues of a positive operator are:',
      options: ['Negative', 'Non-negative', 'Complex', 'Zero'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Positive operators have non-negative eigenvalues.'
    }
  ],
  medium: [
    {
      id: 's51-m01',
      question: 'T is positive iff:',
      options: ['T is invertible', 'T² = T', 'T = T* and all eigenvalues are ≥ 0', 'det(T) > 0'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Positive means self-adjoint with non-negative eigenvalues.'
    },
    {
      id: 's51-m02',
      question: 'Every positive operator has a unique positive:',
      options: ['Inverse', 'Transpose', 'Determinant', 'Square root'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Every positive operator T has a unique positive square root √T.'
    },
    {
      id: 's51-m03',
      question: 'If T is positive, then T = S² for:',
      options: ['A unique positive S', 'Any S', 'No S', 'Infinitely many S'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The unique positive square root S = √T satisfies T = S².'
    },
    {
      id: 's51-m04',
      question: 'T is strictly positive iff:',
      options: ['T ≥ 0', 'T > 0 (all eigenvalues > 0)', 'T = 0', 'T is invertible only'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Strictly positive means all eigenvalues are positive (not just non-negative).'
    },
    {
      id: 's51-m05',
      question: 'For positive T, √T can be computed via:',
      options: ['T² always', 'Guessing', 'Diagonalization then taking square roots', 'Only numerical methods'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Diagonalize T = UDU*, then √T = U√DU* where √D has √λᵢ on diagonal.'
    },
    {
      id: 's51-m06',
      question: 'T*T is always:',
      options: ['Negative', 'Zero', 'Undefined', 'Positive'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '⟨T*Tv,v⟩ = ⟨Tv,Tv⟩ = ||Tv||² ≥ 0, so T*T is positive.'
    }
  ],
  hard: [
    {
      id: 's51-h01',
      question: 'The singular values of T are:',
      options: ['Square roots of eigenvalues of T*T', 'Eigenvalues of T', 'Eigenvalues of T*T', 'Entries of T'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Singular values = √eigenvalues of T*T = eigenvalues of √(T*T).'
    },
    {
      id: 's51-h02',
      question: 'The polar decomposition writes T as:',
      options: ['T = T* + iT', 'T = UP where U is unitary and P is positive', 'T = D + N', 'T = LU'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Polar decomposition: T = UP (or PU) with U unitary and P = √(T*T) positive.'
    },
    {
      id: 's51-h03',
      question: 'In T = UP, P equals:',
      options: ['T', 'T*', '√(T*T)', 'I'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'P = √(T*T) is the unique positive square root of T*T.'
    },
    {
      id: 's51-h04',
      question: 'Polar decomposition T = UP is unique when:',
      options: ['Always', 'T is normal', 'Never', 'T is invertible'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'U is unique when T is invertible; otherwise P is unique but U may not be.'
    },
    {
      id: 's51-h05',
      question: 'The operator norm ||T|| equals:',
      options: ['The largest singular value', 'trace(T)', 'det(T)', 'The sum of eigenvalues'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '||T|| = max||v||=1 ||Tv|| = largest singular value.'
    },
    {
      id: 's51-h06',
      question: '||T||² equals:',
      options: ['trace(T)', 'Largest eigenvalue of T*T', 'det(T)', 'Sum of singular values'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '||T||² = largest eigenvalue of T*T = (largest singular value)².'
    }
  ]
};

// Section 54-55: Spectral Theory
export const section54Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's54-e01',
      question: 'The spectral theorem applies to:',
      options: ['All operators', 'Only nilpotent operators', 'Normal operators', 'Only invertible operators'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The spectral theorem applies to normal operators (TT* = T*T).'
    },
    {
      id: 's54-e02',
      question: 'A normal operator satisfies:',
      options: ['T = T*', 'T² = T', 'T* = 0', 'TT* = T*T'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Normal means T commutes with its adjoint.'
    },
    {
      id: 's54-e03',
      question: 'Self-adjoint, unitary, and positive operators are all:',
      options: ['Normal', 'Nilpotent', 'Zero', 'Singular'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Self-adjoint (T* = T), unitary (T*T = I), and positive are all normal.'
    },
    {
      id: 's54-e04',
      question: 'Normal operators on complex spaces are:',
      options: ['Never diagonalizable', 'Unitarily diagonalizable', 'Always nilpotent', 'Real'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Normal operators can be diagonalized by a unitary change of basis.'
    },
    {
      id: 's54-e05',
      question: 'Eigenvectors of a normal operator for distinct eigenvalues are:',
      options: ['Equal', 'Parallel', 'Orthogonal', 'Not related'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'For normal operators, eigenvectors for different eigenvalues are orthogonal.'
    },
    {
      id: 's54-e06',
      question: 'Self-adjoint operators have eigenvalues that are:',
      options: ['Complex', 'Purely imaginary', 'Zero', 'Real'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'T = T* implies all eigenvalues are real.'
    }
  ],
  medium: [
    {
      id: 's54-m01',
      question: 'The spectral decomposition of normal T writes T as:',
      options: ['Sum λᵢEᵢ where Eᵢ are orthogonal projections', 'Sum of nilpotent operators', 'Product of reflections', 'T = I'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'T = Σ λᵢEᵢ where λᵢ are eigenvalues and Eᵢ are orthogonal projections onto eigenspaces.'
    },
    {
      id: 's54-m02',
      question: 'The spectral projections Eᵢ satisfy:',
      options: ['Eᵢ² = 0', 'EᵢEⱼ = δᵢⱼEᵢ and ΣEᵢ = I', 'Eᵢ = T', 'Eᵢ are nilpotent'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Spectral projections are mutually orthogonal idempotents summing to I.'
    },
    {
      id: 's54-m03',
      question: 'For normal T, f(T) for polynomial f is computed via:',
      options: ['Matrix multiplication', 'Diagonalization only', 'f(T) = Σ f(λᵢ)Eᵢ', 'Cannot be computed'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'f(T) = Σ f(λᵢ)Eᵢ (functional calculus via spectral decomposition).'
    },
    {
      id: 's54-m04',
      question: 'The spectral radius of T is:',
      options: ['||T||', 'trace(T)', 'det(T)', 'max|λ| over eigenvalues λ'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Spectral radius = max{|λ| : λ is an eigenvalue of T}.'
    },
    {
      id: 's54-m05',
      question: 'For normal T, the spectral radius equals:',
      options: ['||T||', '0', '1', 'trace(T)'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For normal operators, spectral radius = operator norm.'
    },
    {
      id: 's54-m06',
      question: 'For T self-adjoint, e^{iT} is:',
      options: ['Self-adjoint', 'Unitary', 'Positive', 'Zero'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'If T = T*, then (e^{iT})* = e^{-iT*} = e^{-iT} = (e^{iT})⁻¹, so e^{iT} is unitary.'
    }
  ],
  hard: [
    {
      id: 's54-h01',
      question: 'The singular value decomposition writes T as:',
      options: ['T = T*', 'LU', 'UDV where U, V unitary and D diagonal with singular values', 'QR'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'SVD: T = UΣV* where U, V unitary and Σ has singular values on diagonal.'
    },
    {
      id: 's54-h02',
      question: 'A normal operator on a real inner product space:',
      options: ['Is always diagonalizable over ℝ', 'Has no eigenvalues', 'Is always zero', 'May have complex eigenvalues (coming in conjugate pairs)'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Real normal operators may have complex eigenvalue pairs; still orthogonally block-diagonalizable.'
    },
    {
      id: 's54-h03',
      question: 'On a real space, a normal operator can be put in form with blocks of size:',
      options: ['1 or 2', 'Only 1', 'Arbitrary', 'n'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Real normal operators have orthogonal canonical form with 1×1 (real eigenvalue) and 2×2 blocks (complex pairs).'
    },
    {
      id: 's54-h04',
      question: 'The 2×2 blocks for complex eigenvalue pair a ± bi have the form:',
      options: ['[[a,b],[b,a]]', '[[a,-b],[b,a]]', '[[a,0],[0,b]]', '[[1,0],[0,1]]'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Complex pair a ± bi gives block [[a,-b],[b,a]] representing rotation-scaling.'
    },
    {
      id: 's54-h05',
      question: 'The functional calculus for normal T allows computing:',
      options: ['Only polynomials in T', 'Nothing', 'Any continuous function f(T)', 'Only f(T) = T'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For normal T, f(T) = Σ f(λᵢ)Eᵢ works for any function defined on the spectrum.'
    },
    {
      id: 's54-h06',
      question: 'The Fuglede-Putnam theorem states:',
      options: ['Normal operators are diagonal', 'T* = T always', 'All operators are normal', 'If N is normal and TN = NT, then TN* = N*T'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'If T commutes with a normal N, then T also commutes with N*.'
    }
  ]
};

// Chapter 9 Comprehensive Quiz
export const chapter09Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch09-h01',
      question: 'A sesquilinear form f is Hermitian if:',
      options: ['f(u,v) = conjugate of f(v,u)', 'f(u,v) = f(v,u)', 'f(u,v) = -f(v,u)', 'f = 0'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Hermitian means f(u,v) = f(v,u)* (conjugate symmetry).'
    },
    {
      id: 'ch09-h02',
      question: 'T is positive iff:',
      options: ['T is invertible', 'T = T* and all eigenvalues are ≥ 0', 'T² = T', 'det(T) > 0'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Positive means self-adjoint with non-negative eigenvalues.'
    },
    {
      id: 'ch09-h03',
      question: 'The singular values of T are:',
      options: ['Eigenvalues of T', 'Eigenvalues of T*T', 'Square roots of eigenvalues of T*T', 'Entries of T'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Singular values = √eigenvalues of T*T.'
    },
    {
      id: 'ch09-h04',
      question: 'The singular value decomposition writes T as:',
      options: ['T = T*', 'LU', 'QR', 'UDV where U, V unitary and D diagonal with singular values'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'SVD: T = UΣV* where U, V unitary and Σ has singular values on diagonal.'
    },
    {
      id: 'ch09-h05',
      question: 'The operator norm ||T|| equals:',
      options: ['The largest singular value', 'trace(T)', 'det(T)', 'The sum of eigenvalues'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '||T|| = max||v||=1 ||Tv|| = largest singular value.'
    },
    {
      id: 'ch09-h06',
      question: 'For T self-adjoint, e^{iT} is:',
      options: ['Self-adjoint', 'Unitary', 'Positive', 'Zero'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'If T = T*, then (e^{iT})* = e^{-iT*} = e^{-iT} = (e^{iT})⁻¹, so e^{iT} is unitary.'
    },
    {
      id: 'ch09-h07',
      question: 'Polar decomposition T = UP is unique when:',
      options: ['Always', 'T is normal', 'T is invertible', 'Never'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'U is unique when T is invertible; otherwise P is unique but U may not be.'
    },
    {
      id: 'ch09-h08',
      question: '||T||² equals:',
      options: ['trace(T)', 'det(T)', 'Sum of singular values', 'Largest eigenvalue of T*T'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '||T||² = largest eigenvalue of T*T.'
    },
    {
      id: 'ch09-h09',
      question: 'The spectral radius of T is:',
      options: ['max|λ| over eigenvalues λ', '||T||', 'trace(T)', 'det(T)'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Spectral radius = max{|λ| : λ is an eigenvalue of T}.'
    },
    {
      id: 'ch09-h10',
      question: 'For normal T, the spectral radius equals:',
      options: ['0', '||T||', '1', 'trace(T)'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'For normal operators, spectral radius = operator norm.'
    }
  ]
};
