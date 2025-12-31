// Chapter 6: Elementary Canonical Forms (Sections 32-39)
// Based on Hoffman & Kunze Chapter 6
import type { QuizQuestion, DifficultyQuizData } from './types';

// Section 32: Introduction
export const section32Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's32-e01',
      question: 'The goal of studying canonical forms is to:',
      options: ['Make matrices larger', 'Find simple matrix representatives for linear operators', 'Avoid using matrices', 'Compute determinants'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Canonical forms provide the simplest possible matrix representation of a linear operator.'
    },
    {
      id: 's32-e02',
      question: 'Two matrices represent the same linear operator iff they are:',
      options: ['Equal', 'Similar', 'Transpose of each other', 'Have the same trace'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Similar matrices (A = P⁻¹BP) represent the same operator in different bases.'
    },
    {
      id: 's32-e03',
      question: 'Similar matrices have:',
      options: ['Different eigenvalues', 'The same characteristic polynomial', 'Different ranks', 'The same entries'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Similar matrices share eigenvalues, characteristic polynomial, trace, determinant, rank.'
    },
    {
      id: 's32-e04',
      question: 'A = P⁻¹BP means A and B are:',
      options: ['Equal', 'Inverses', 'Similar', 'Orthogonal'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'This is the definition of similarity: A and B are similar.'
    },
    {
      id: 's32-e05',
      question: 'Similarity is an equivalence relation because it is:',
      options: ['Only reflexive', 'Reflexive, symmetric, and transitive', 'Only symmetric', 'Not an equivalence relation'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Similarity satisfies all three properties of an equivalence relation.'
    },
    {
      id: 's32-e06',
      question: 'The simplest form for a diagonalizable matrix is:',
      options: ['Upper triangular', 'Lower triangular', 'Diagonal', 'Identity'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A diagonal matrix is the simplest canonical form for diagonalizable operators.'
    }
  ],
  medium: [
    {
      id: 's32-m01',
      question: 'A canonical form is useful because:',
      options: ['It is always diagonal', 'It uniquely represents a similarity class', 'It is always invertible', 'It has no eigenvalues'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A canonical form gives a unique representative for each similarity class.'
    },
    {
      id: 's32-m02',
      question: 'Two operators on V are equivalent (similar) iff:',
      options: ['They have the same domain', 'Their matrices are similar in some bases', 'They are both zero', 'They have the same kernel'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Operators are similar iff their matrix representations are similar.'
    },
    {
      id: 's32-m03',
      question: 'The trace of a matrix is:',
      options: ['The product of eigenvalues', 'The sum of diagonal entries (= sum of eigenvalues)', 'The determinant', 'The rank'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Trace = sum of diagonal entries = sum of eigenvalues.'
    },
    {
      id: 's32-m04',
      question: 'If A ~ B, then rank(A):',
      options: ['< rank(B)', '= rank(B)', '> rank(B)', 'Cannot be compared to rank(B)'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Similar matrices have the same rank.'
    },
    {
      id: 's32-m05',
      question: 'The eigenvalues of a matrix are invariant under:',
      options: ['Transposition only', 'Similarity transformations', 'Addition', 'Scalar multiplication'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Eigenvalues are preserved by similarity transformations.'
    },
    {
      id: 's32-m06',
      question: 'Finding a canonical form involves finding:',
      options: ['Any basis', 'A special basis that simplifies the matrix', 'The zero vector', 'The determinant'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Canonical forms arise from choosing bases that reveal the operator\'s structure.'
    }
  ],
  hard: [
    {
      id: 's32-h01',
      question: 'Complete invariants for similarity are:',
      options: ['Trace and determinant', 'The characteristic polynomial alone', 'The list of invariant factors', 'Only the eigenvalues'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Invariant factors (or elementary divisors) completely determine the similarity class.'
    },
    {
      id: 's32-h02',
      question: 'Two matrices with the same characteristic polynomial:',
      options: ['Are always similar', 'May not be similar', 'Have different eigenvalues', 'Have different dimensions'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Same characteristic polynomial is necessary but not sufficient for similarity.'
    },
    {
      id: 's32-h03',
      question: 'The problem of canonical forms is to find:',
      options: ['The inverse', 'A complete set of invariants and representatives', 'The largest eigenvalue', 'The trace'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'We seek complete invariants and canonical representatives for similarity classes.'
    },
    {
      id: 's32-h04',
      question: 'For operators on a finite-dimensional space, the canonical form is:',
      options: ['Never exists', 'Always a diagonal matrix', 'Depends on whether eigenvalues are in the field', 'Always the identity'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The canonical form (Jordan vs. rational) depends on whether eigenvalues lie in F.'
    },
    {
      id: 's32-h05',
      question: 'The minimal polynomial is:',
      options: ['Always equal to the characteristic polynomial', 'The smallest degree monic polynomial annihilating the matrix', 'The determinant', 'The trace polynomial'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The minimal polynomial is the monic polynomial of least degree such that p(A) = 0.'
    },
    {
      id: 's32-h06',
      question: 'Two matrices are similar iff they have:',
      options: ['The same trace', 'The same determinant', 'The same invariant factors', 'The same size'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Invariant factors (equivalently, rational canonical form) determine similarity.'
    }
  ]
};

// Section 33: Characteristic Values
export const section33Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's33-e01',
      question: 'λ is an eigenvalue of T iff:',
      options: ['T(v) = v for some v', 'T(v) = λv for some non-zero v', 'det(T) = λ', 'trace(T) = λ'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'An eigenvalue λ satisfies T(v) = λv for some non-zero eigenvector v.'
    },
    {
      id: 's33-e02',
      question: 'If V is n-dimensional over F, the characteristic polynomial has degree:',
      options: ['1', 'n - 1', 'n', '2n'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The characteristic polynomial has degree n = dim(V).'
    },
    {
      id: 's33-e03',
      question: 'The eigenvalues of T are the:',
      options: ['Diagonal entries', 'Roots of the characteristic polynomial', 'Entries of T', 'Pivots'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Eigenvalues are exactly the roots of the characteristic polynomial.'
    },
    {
      id: 's33-e04',
      question: 'The eigenspace for eigenvalue λ is:',
      options: ['All of V', 'ker(T - λI)', 'image(T)', 'A single vector'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The eigenspace is Eλ = ker(T - λI) = {v : Tv = λv}.'
    },
    {
      id: 's33-e05',
      question: 'The sum of eigenvalues (with multiplicity) equals:',
      options: ['The determinant', 'The trace', 'The rank', 'Zero'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The trace equals the sum of eigenvalues.'
    },
    {
      id: 's33-e06',
      question: 'The product of eigenvalues (with multiplicity) equals:',
      options: ['The trace', 'The determinant', 'The rank', 'One'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The determinant equals the product of eigenvalues.'
    }
  ],
  medium: [
    {
      id: 's33-m01',
      question: 'The characteristic polynomial of T is:',
      options: ['det(T)', 'det(T - λI)', 'trace(T - λI)', 'det(T)λ'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The characteristic polynomial is f(λ) = det(T - λI) or det(λI - T).'
    },
    {
      id: 's33-m02',
      question: 'Eigenvectors for distinct eigenvalues are:',
      options: ['Equal', 'Linearly independent', 'Orthogonal', 'Parallel'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Eigenvectors corresponding to distinct eigenvalues are linearly independent.'
    },
    {
      id: 's33-m03',
      question: 'A matrix with n distinct eigenvalues is:',
      options: ['Never diagonalizable', 'Always diagonalizable', 'Singular', 'Nilpotent'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'n distinct eigenvalues give n linearly independent eigenvectors, so the matrix is diagonalizable.'
    },
    {
      id: 's33-m04',
      question: 'The algebraic multiplicity of λ is:',
      options: ['dim(ker(T - λI))', 'The power of (x - λ) in the characteristic polynomial', 'Always 1', 'The trace'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Algebraic multiplicity = multiplicity as a root of the characteristic polynomial.'
    },
    {
      id: 's33-m05',
      question: 'The geometric multiplicity of λ is:',
      options: ['The algebraic multiplicity', 'dim(ker(T - λI))', 'Always equal to algebraic multiplicity', 'The trace'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Geometric multiplicity = dimension of the eigenspace.'
    },
    {
      id: 's33-m06',
      question: 'Geometric multiplicity ≤ algebraic multiplicity is:',
      options: ['Sometimes true', 'Always true', 'Never true', 'True only for symmetric matrices'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The geometric multiplicity never exceeds the algebraic multiplicity.'
    }
  ],
  hard: [
    {
      id: 's33-h01',
      question: 'T is diagonalizable iff:',
      options: ['det(T) ≠ 0', 'For each eigenvalue, geometric multiplicity = algebraic multiplicity', 'T has n eigenvalues', 'T is invertible'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Diagonalizability requires that each eigenspace has dimension equal to the algebraic multiplicity.'
    },
    {
      id: 's33-h02',
      question: 'If T has characteristic polynomial (x - λ)ⁿ and is diagonalizable, then T equals:',
      options: ['λI', 'The zero operator', 'An arbitrary operator', 'A nilpotent operator'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If only eigenvalue is λ and T is diagonalizable, T = λI (scalar matrix).'
    },
    {
      id: 's33-h03',
      question: 'The spectrum of T is:',
      options: ['The set of eigenvectors', 'The set of eigenvalues', 'The characteristic polynomial', 'The trace'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The spectrum is the set of all eigenvalues of T.'
    },
    {
      id: 's33-h04',
      question: 'Over an algebraically closed field, every operator has:',
      options: ['No eigenvalues', 'At least one eigenvalue', 'Exactly n eigenvalues', 'Complex eigenvalues only'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Over an algebraically closed field, the characteristic polynomial has a root.'
    },
    {
      id: 's33-h05',
      question: 'If f(λ) = λⁿ + aₙ₋₁λⁿ⁻¹ + ... + a₀ is the characteristic polynomial, then a₀ equals:',
      options: ['trace(T)', '(-1)ⁿ det(T)', 'The sum of eigenvalues', 'Zero'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The constant term of the characteristic polynomial is (-1)ⁿ det(T).'
    },
    {
      id: 's33-h06',
      question: 'The coefficient of λⁿ⁻¹ in the characteristic polynomial equals:',
      options: ['det(T)', '-trace(T)', 'trace(T)', 'Zero'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The coefficient of λⁿ⁻¹ is -trace(T) (or trace(T) depending on sign convention).'
    }
  ]
};

// Section 34: Annihilating Polynomials
export const section34Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's34-e01',
      question: 'A polynomial p annihilates T if:',
      options: ['p(T) = I', 'p(T) = 0', 'p(λ) = 0 for some eigenvalue', 'deg(p) = n'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'p annihilates T means p(T) = 0 (the zero operator).'
    },
    {
      id: 's34-e02',
      question: 'Every operator T has at least one annihilating polynomial because:',
      options: ['T = 0', 'The space of operators is finite-dimensional', 'T is diagonalizable', 'T has eigenvalues'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The powers I, T, T², ... must be linearly dependent, giving a polynomial relation.'
    },
    {
      id: 's34-e03',
      question: 'The zero polynomial annihilates:',
      options: ['Every operator', 'No operator', 'Only the zero operator', 'Only the identity'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The zero polynomial gives 0(T) = 0, but we consider non-zero annihilating polynomials.'
    },
    {
      id: 's34-e04',
      question: 'If p annihilates T and q = rp, then:',
      options: ['q annihilates T', 'q does not annihilate T', 'q = 0', 'r = 0'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'q(T) = r(T)p(T) = r(T)·0 = 0, so any multiple also annihilates T.'
    },
    {
      id: 's34-e05',
      question: 'The minimal polynomial is:',
      options: ['Any annihilating polynomial', 'The monic polynomial of least degree annihilating T', 'Always the characteristic polynomial', 'The zero polynomial'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The minimal polynomial is the unique monic polynomial of smallest degree annihilating T.'
    },
    {
      id: 's34-e06',
      question: 'If the minimal polynomial has degree k, then I, T, T², ..., T^{k-1} are:',
      options: ['All zero', 'Linearly independent', 'All equal', 'Linearly dependent'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Minimality means no smaller degree relation exists, so these powers are independent.'
    }
  ],
  medium: [
    {
      id: 's34-m01',
      question: 'The minimal polynomial of T is:',
      options: ['The characteristic polynomial', 'The monic polynomial of least degree annihilating T', 'Always degree 1', 'Not unique'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The minimal polynomial is the unique monic polynomial of smallest degree that annihilates T.'
    },
    {
      id: 's34-m02',
      question: 'The minimal polynomial divides:',
      options: ['Nothing', 'Every annihilating polynomial', 'Only the characteristic polynomial', 'The trace'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The minimal polynomial divides every polynomial that annihilates T.'
    },
    {
      id: 's34-m03',
      question: 'The Cayley-Hamilton theorem states:',
      options: ['Every matrix is diagonalizable', 'The minimal polynomial equals the characteristic polynomial', 'Every operator is annihilated by its characteristic polynomial', 'Eigenvalues are always real'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Cayley-Hamilton: if f is the characteristic polynomial of T, then f(T) = 0.'
    },
    {
      id: 's34-m04',
      question: 'The minimal polynomial divides the characteristic polynomial because:',
      options: ['They are equal', 'Cayley-Hamilton and minimality', 'They have the same degree', 'They have different roots'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'By Cayley-Hamilton the characteristic polynomial annihilates T, so minimal divides it.'
    },
    {
      id: 's34-m05',
      question: 'If the minimal polynomial equals the characteristic polynomial, then T:',
      options: ['Is diagonalizable', 'Has a cyclic vector', 'Is nilpotent', 'Has no eigenvalues'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Equality means T has a cyclic vector (companion matrix form).'
    },
    {
      id: 's34-m06',
      question: 'The roots of the minimal polynomial are:',
      options: ['Different from eigenvalues', 'Exactly the eigenvalues of T', 'Only some eigenvalues', 'Not related to eigenvalues'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The minimal polynomial has the same roots as the characteristic polynomial (the eigenvalues).'
    }
  ],
  hard: [
    {
      id: 's34-h01',
      question: 'T is diagonalizable iff the minimal polynomial:',
      options: ['Has degree n', 'Equals the characteristic polynomial', 'Has no repeated roots (splits into distinct linear factors)', 'Is constant'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'T is diagonalizable iff minimal polynomial = ∏(x - λᵢ) with distinct λᵢ.'
    },
    {
      id: 's34-h02',
      question: 'If T is nilpotent of index k, the minimal polynomial is:',
      options: ['x - 1', 'x^k', 'The characteristic polynomial', '1'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Nilpotent of index k means T^k = 0 but T^{k-1} ≠ 0, so minimal polynomial is x^k.'
    },
    {
      id: 's34-h03',
      question: 'The characteristic polynomial divided by the minimal polynomial:',
      options: ['Is always 1', 'Gives a quotient with the same roots', 'Has different roots', 'Is the trace'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Both have the same roots (eigenvalues), but with possibly different multiplicities.'
    },
    {
      id: 's34-h04',
      question: 'For a 2×2 matrix with characteristic polynomial (x - λ)², the minimal polynomial is:',
      options: ['Always (x - λ)²', 'Always (x - λ)', 'Either (x - λ) or (x - λ)²', 'x²'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'It\'s (x - λ) if the matrix is λI (diagonalizable), otherwise (x - λ)².'
    },
    {
      id: 's34-h05',
      question: 'The annihilating ideal of T in F[x] is:',
      options: ['Not an ideal', '(m) where m is the minimal polynomial', 'The zero ideal', 'F[x]'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'All annihilating polynomials form the principal ideal generated by the minimal polynomial.'
    },
    {
      id: 's34-h06',
      question: 'If p(T) = 0 and q(T) = 0, then gcd(p, q)(T):',
      options: ['≠ 0 in general', '= 0', '= I', 'Is undefined'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'gcd(p, q) = ap + bq for some a, b, so gcd(p, q)(T) = a(T)p(T) + b(T)q(T) = 0.'
    }
  ]
};

// Section 35-39 combined into a comprehensive section quiz
export const section35Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's35-e01',
      question: 'A subspace W is T-invariant if:',
      options: ['T(W) = V', 'T(W) ⊆ W', 'W ⊆ T(V)', 'T(W) = {0}'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'W is T-invariant if T maps W into itself: T(w) ∈ W for all w ∈ W.'
    },
    {
      id: 's35-e02',
      question: '{0} and V are called:',
      options: ['Proper subspaces', 'Trivial invariant subspaces', 'Eigenspaces', 'Generalized eigenspaces'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '{0} and V are trivially T-invariant for any T.'
    },
    {
      id: 's35-e03',
      question: 'The eigenspace for eigenvalue λ is:',
      options: ['Never T-invariant', 'Always T-invariant', 'Equal to V', 'Empty'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Eigenspaces ker(T - λI) are always T-invariant.'
    },
    {
      id: 's35-e04',
      question: 'V = W₁ ⊕ W₂ (direct sum) means:',
      options: ['W₁ = W₂', 'V = W₁ + W₂ and W₁ ∩ W₂ = {0}', 'W₁ ⊆ W₂', 'dim(V) = 2'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Direct sum means V is the sum and the intersection is trivial.'
    },
    {
      id: 's35-e05',
      question: 'A projection E satisfies:',
      options: ['E² = I', 'E² = E', 'E = 0', 'E² = -E'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A projection is idempotent: E² = E.'
    },
    {
      id: 's35-e06',
      question: 'If W is T-invariant, we can consider:',
      options: ['Only T', 'The restriction T|_W', 'T² only', 'Nothing new'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'T restricts to an operator on W when W is invariant.'
    }
  ],
  medium: [
    {
      id: 's35-m01',
      question: 'T is triangulable if:',
      options: ['T has all eigenvalues in F', 'There exists a basis with respect to which the matrix is upper triangular', 'T is diagonalizable', 'T = 0'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'T is triangulable iff there\'s a basis giving an upper triangular matrix.'
    },
    {
      id: 's35-m02',
      question: 'A family of operators is simultaneously diagonalizable if:',
      options: ['Each is diagonalizable', 'They all commute and each is diagonalizable', 'They have the same eigenvalues', 'They are all zero'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Simultaneous diagonalizability requires commuting diagonalizable operators.'
    },
    {
      id: 's35-m03',
      question: 'If V = W₁ ⊕ W₂, the projection onto W₁ along W₂ is:',
      options: ['Not unique', 'Uniquely determined', 'Always zero', 'The identity'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The direct sum decomposition uniquely determines the projections.'
    },
    {
      id: 's35-m04',
      question: 'If V = W₁ ⊕ ... ⊕ Wₖ with each Wᵢ T-invariant, then T is determined by:',
      options: ['Its action on W₁ only', 'Its restriction to each Wᵢ', 'Its trace', 'Its determinant'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'T is completely determined by its restrictions T|_{Wᵢ} to the invariant subspaces.'
    },
    {
      id: 's35-m05',
      question: 'The matrix of T relative to a basis compatible with V = W₁ ⊕ ... ⊕ Wₖ is:',
      options: ['Diagonal', 'Block diagonal', 'Upper triangular', 'The identity'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'With basis vectors from each Wᵢ grouped together, the matrix is block diagonal.'
    },
    {
      id: 's35-m06',
      question: 'The generalized eigenspace for λ is:',
      options: ['ker(T - λI)', 'ker((T - λI)ⁿ) for sufficiently large n', 'V', '{0}'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The generalized eigenspace is ker((T - λI)^k) for large enough k.'
    }
  ],
  hard: [
    {
      id: 's35-h01',
      question: 'The primary decomposition theorem says if the minimal polynomial factors as p₁^{r₁}...pₖ^{rₖ}:',
      options: ['T is diagonalizable', 'V = ker(p₁(T)^{r₁}) ⊕ ... ⊕ ker(pₖ(T)^{rₖ})', 'T = 0', 'All eigenvalues are distinct'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Primary decomposition: V decomposes as a direct sum of primary components ker(pᵢ(T)^{rᵢ}).'
    },
    {
      id: 's35-h02',
      question: 'T is diagonalizable iff the minimal polynomial:',
      options: ['Has degree n', 'Equals the characteristic polynomial', 'Has no repeated roots', 'Is constant'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'T is diagonalizable iff the minimal polynomial splits into distinct linear factors.'
    },
    {
      id: 's35-h03',
      question: 'Every operator on a complex vector space is:',
      options: ['Diagonalizable', 'Triangulable', 'Nilpotent', 'Unitary'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Over ℂ, every operator can be put in upper triangular form.'
    },
    {
      id: 's35-h04',
      question: 'The index of nilpotency of N is:',
      options: ['The smallest k with N^k = 0', 'The dimension of ker(N)', 'The rank of N', 'Always 1'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The index is the smallest positive integer k such that N^k = 0.'
    },
    {
      id: 's35-h05',
      question: 'If T = S + N where S is diagonalizable, N is nilpotent, and SN = NS, this is:',
      options: ['Not unique', 'The Jordan decomposition', 'The polar decomposition', 'The QR decomposition'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the (additive) Jordan decomposition: T = S + N with S semisimple, N nilpotent, [S,N] = 0.'
    },
    {
      id: 's35-h06',
      question: 'The number of Jordan blocks for eigenvalue λ equals:',
      options: ['The algebraic multiplicity', 'The geometric multiplicity', 'The dimension of V', 'One'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Each Jordan block corresponds to an independent eigenvector, so count = geometric multiplicity.'
    }
  ]
};

// Chapter 6 Comprehensive Quiz
export const chapter06Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch06-h01',
      question: 'The sum of eigenvalues equals:',
      options: ['det(T)', 'trace(T)', 'rank(T)', '0'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The trace equals the sum of eigenvalues (with multiplicity).'
    },
    {
      id: 'ch06-h02',
      question: 'The product of eigenvalues equals:',
      options: ['trace(T)', 'det(T)', 'rank(T)', 'nullity(T)'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The determinant equals the product of eigenvalues (with multiplicity).'
    },
    {
      id: 'ch06-h03',
      question: 'T is nilpotent if:',
      options: ['T = 0', 'Tᵏ = 0 for some k', 'T has eigenvalue 0', 'T is invertible'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Nilpotent means some power of T is zero.'
    },
    {
      id: 'ch06-h04',
      question: 'The only eigenvalue of a nilpotent operator is:',
      options: ['1', '-1', '0', 'No eigenvalues'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'If T is nilpotent and Tv = λv with v ≠ 0, then 0 = Tᵏv = λᵏv, so λ = 0.'
    },
    {
      id: 'ch06-h05',
      question: 'A matrix is diagonalizable iff:',
      options: ['It is symmetric', 'It has n linearly independent eigenvectors', 'It is invertible', 'det ≠ 0'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'An n × n matrix is diagonalizable iff it has n linearly independent eigenvectors.'
    },
    {
      id: 'ch06-h06',
      question: 'Eigenvectors for distinct eigenvalues are:',
      options: ['Equal', 'Linearly independent', 'Orthogonal', 'Parallel'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Eigenvectors corresponding to distinct eigenvalues are always linearly independent.'
    },
    {
      id: 'ch06-h07',
      question: 'The algebraic multiplicity of eigenvalue λ is:',
      options: ['dim(ker(T - λI))', 'The multiplicity of λ as root of characteristic polynomial', 'Always 1', 'The trace'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Algebraic multiplicity = power of (x - λ) in the characteristic polynomial.'
    },
    {
      id: 'ch06-h08',
      question: 'Geometric multiplicity ≤ algebraic multiplicity is:',
      options: ['Sometimes true', 'Always true', 'Never true', 'True only for symmetric matrices'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Geometric multiplicity (dim of eigenspace) is always ≤ algebraic multiplicity.'
    },
    {
      id: 'ch06-h09',
      question: 'By Cayley-Hamilton, an n × n matrix A satisfies:',
      options: ['A = 0', 'Aⁿ = 0', 'The characteristic polynomial equation', 'A is invertible'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'If p(λ) is the characteristic polynomial of A, then p(A) = 0.'
    },
    {
      id: 'ch06-h10',
      question: 'Similar matrices have:',
      options: ['Different eigenvalues', 'The same characteristic polynomial', 'Different ranks', 'The same entries'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Similar matrices share eigenvalues, characteristic polynomial, trace, determinant, rank.'
    }
  ]
};
