// Chapter 3: Linear Transformations (Sections 13-19)
// Based on Hoffman & Kunze Chapter 3
// Maps to curriculum sections 5 (Linear Transformations), 6 (Matrix Representation), 7 (Dual Spaces)
import type { DifficultyQuizData } from './types';

// =============================================================================
// Section 13: Linear Transformations (maps to curriculum Section 5)
// =============================================================================
export const section13Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's13-e01',
      question: 'The kernel (null space) of a linear transformation T: V → W is:',
      options: ['{v ∈ V : T(v) = 0}', '{w ∈ W : T(v) = w for some v}', 'V', 'W'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'ker(T) = {v ∈ V : T(v) = 0}, the set of vectors mapping to zero.'
    },
    {
      id: 's13-e02',
      question: 'For any linear transformation T, T(0) equals:',
      options: ['1', 'Undefined', '0', 'T'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'T(0) = T(0 · v) = 0 · T(v) = 0. Linear maps always send zero to zero.'
    },
    {
      id: 's13-e03',
      question: 'The zero transformation T(v) = 0 for all v is:',
      options: ['Not linear', 'Linear', 'An isomorphism', 'Not well-defined'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The zero map is linear: T(av + bw) = 0 = a·0 + b·0 = aT(v) + bT(w).'
    },
    {
      id: 's13-e04',
      question: 'The identity map I: V → V defined by I(v) = v is:',
      options: ['Not linear', 'Linear but not bijective', 'A linear isomorphism', 'Only defined for finite-dimensional V'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The identity map is linear, injective, and surjective—hence an isomorphism.'
    },
    {
      id: 's13-e05',
      question: 'If T: ℝ² → ℝ² is defined by T(x, y) = (2x, 2y), then T is:',
      options: ['Not linear', 'Linear', 'Not well-defined', 'Only linear for x = y'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Scalar multiplication is linear: T(av + bw) = aT(v) + bT(w).'
    },
    {
      id: 's13-e06',
      question: 'If T: ℝ² → ℝ² is defined by T(x, y) = (x + 1, y), then T is:',
      options: ['Linear', 'Not linear', 'An isomorphism', 'Has trivial kernel'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'T(0,0) = (1,0) ≠ (0,0), so T is not linear.'
    },
  ],
  medium: [
    {
      id: 's13-m01',
      question: 'A function T: V → W is a linear transformation if:',
      options: ['T is bijective', 'T(αv + βw) = αT(v) + βT(w) for all scalars α, β and vectors v, w', 'T(0) = 0', 'T is surjective'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'T is linear iff it preserves linear combinations: T(αv + βw) = αT(v) + βT(w).'
    },
    {
      id: 's13-m02',
      question: 'The image (range) of T: V → W is:',
      options: ['All of W', 'A subspace of W', 'Equal to V', 'The zero vector only'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Im(T) = {T(v) : v ∈ V} is always a subspace of W.'
    },
    {
      id: 's13-m03',
      question: 'T is injective (one-to-one) if and only if:',
      options: ['T is surjective', 'ker(T) = {0}', 'Im(T) = W', 'T is the identity'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'T is injective iff the only vector mapping to 0 is the zero vector itself.'
    },
    {
      id: 's13-m04',
      question: 'If T: V → W is linear and S ⊆ V is a subspace, then T(S) is:',
      options: ['Not necessarily a subspace', 'A subspace of W', 'Equal to W', 'Empty'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The image of a subspace under a linear map is always a subspace.'
    },
    {
      id: 's13-m05',
      question: 'If T: V → W is linear, then rank(T) is defined as:',
      options: ['dim(ker T)', 'dim(Im T)', 'dim(V)', 'dim(W)'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The rank of T is the dimension of its image (range).'
    },
    {
      id: 's13-m06',
      question: 'T is surjective (onto) if and only if:',
      options: ['ker(T) = {0}', 'Im(T) = W', 'T is injective', 'T is the identity'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'T is surjective iff every element of W is in the image of T.'
    },
  ],
  hard: [
    {
      id: 's13-h01',
      question: 'For T: V → W linear, dim(ker T) + dim(Im T) equals:',
      options: ['dim(W)', 'dim(V)', 'dim(V) + dim(W)', '0'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the rank-nullity theorem: nullity(T) + rank(T) = dim(V).'
    },
    {
      id: 's13-h02',
      question: 'If T: ℝ³ → ℝ² is linear and surjective, then dim(ker T) equals:',
      options: ['0', '1', '2', '3'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By rank-nullity: 3 = dim(ker T) + dim(Im T) = dim(ker T) + 2, so dim(ker T) = 1.'
    },
    {
      id: 's13-h03',
      question: 'If dim(V) = dim(W) and T: V → W is linear, then:',
      options: ['T is always an isomorphism', 'T injective ⟺ T surjective ⟺ T isomorphism', 'T is never an isomorphism', 'T must be the zero map'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'For equal finite dimensions, injective ⟺ surjective ⟺ bijective.'
    },
    {
      id: 's13-h04',
      question: 'A linear T: V → W is determined by its values on:',
      options: ['All of V', 'Any spanning set for V', 'Any basis for V', 'Any single non-zero vector'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A linear map is uniquely determined by its values on a basis.'
    },
    {
      id: 's13-h05',
      question: 'The composition of linear transformations is:',
      options: ['Never linear', 'Always linear', 'Linear only if both are isomorphisms', 'Linear only if both are the same'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'If T and U are linear, then UT is also linear.'
    },
    {
      id: 's13-h06',
      question: 'If T: V → W is linear and V is finite-dimensional, then:',
      options: ['W must be finite-dimensional', 'Im(T) is finite-dimensional', 'ker(T) is infinite-dimensional', 'rank(T) = dim(V)'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The image of a finite-dimensional space is finite-dimensional (Im(T) ⊆ W is spanned by images of a basis).'
    },
  ],
};

// =============================================================================
// Section 15: Matrix Representation (maps to curriculum Section 6)
// Combining sections 15, 16 for matrix representation
// =============================================================================
export const section15Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's15-e01',
      question: 'A linear transformation T: ℝⁿ → ℝᵐ can be represented by:',
      options: ['An m × n matrix', 'An n × m matrix', 'An n × n matrix', 'A 1 × 1 matrix'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'T: ℝⁿ → ℝᵐ is represented by an m × n matrix (m rows, n columns).'
    },
    {
      id: 's15-e02',
      question: 'If T is represented by matrix A, then T(v) equals:',
      options: ['A + v', 'Av', 'vA', 'A - v'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Matrix multiplication: T(v) = Av (matrix times column vector).'
    },
    {
      id: 's15-e03',
      question: 'The matrix of the identity map I: ℝⁿ → ℝⁿ is:',
      options: ['The zero matrix', 'The n × n identity matrix', 'Any invertible matrix', 'Undefined'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The identity map has the identity matrix as its representation in any basis.'
    },
    {
      id: 's15-e04',
      question: 'If A represents T and B represents U, then AB represents:',
      options: ['T + U', 'TU (composition)', 'UT (composition)', 'T - U'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Matrix multiplication AB corresponds to composition: first U, then T, so UT.'
    },
    {
      id: 's15-e05',
      question: 'The zero transformation is represented by:',
      options: ['The identity matrix', 'The zero matrix', 'Any matrix', 'No matrix'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'T(v) = 0 for all v corresponds to the zero matrix.'
    },
    {
      id: 's15-e06',
      question: 'An n × n matrix represents a linear operator on:',
      options: ['An (n+1)-dimensional space', 'An n-dimensional space', 'Any space', 'An (n-1)-dimensional space'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'An n × n matrix represents a linear map from an n-dimensional space to itself.'
    },
  ],
  medium: [
    {
      id: 's15-m01',
      question: 'A linear transformation T: V → W is an isomorphism if T is:',
      options: ['Injective', 'Surjective', 'Bijective and linear', 'Continuous'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'An isomorphism is a bijective linear transformation.'
    },
    {
      id: 's15-m02',
      question: 'Two finite-dimensional vector spaces over F are isomorphic iff:',
      options: ['They have the same elements', 'They have the same dimension', 'One contains the other', 'They are equal'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Finite-dimensional spaces over the same field are isomorphic iff they have equal dimension.'
    },
    {
      id: 's15-m03',
      question: 'Two matrices A and B are similar if:',
      options: ['A = B', 'B = P⁻¹AP for some invertible P', 'AB = BA', 'A + B = 0'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Similar matrices represent the same linear operator in different bases.'
    },
    {
      id: 's15-m04',
      question: 'An n × n matrix represents an isomorphism iff it is:',
      options: ['Symmetric', 'Diagonal', 'Invertible', 'Upper triangular'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'A linear operator is an isomorphism iff its matrix (in any basis) is invertible.'
    },
    {
      id: 's15-m05',
      question: 'If T: V → W is an isomorphism, then T⁻¹ is:',
      options: ['Not linear', 'Linear', 'Not defined', 'Only partially defined'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The inverse of an isomorphism is also a linear isomorphism.'
    },
    {
      id: 's15-m06',
      question: 'Matrix multiplication corresponds to:',
      options: ['Addition of transformations', 'Composition of transformations', 'Scalar multiplication', 'Taking transpose'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'If A and B represent T and U, then AB represents the composition.'
    },
  ],
  hard: [
    {
      id: 's15-h01',
      question: 'If T: V → W is linear and B, B\' are ordered bases for V, W, the matrix [T]_{B\',B} has:',
      options: ['Rows from T applied to B', 'Columns that are coordinate vectors of T(vᵢ)', 'All 1s', 'All 0s'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The jth column of [T]_{B\',B} is the coordinate vector of T(vⱼ) relative to B\'.'
    },
    {
      id: 's15-h02',
      question: 'If A is the matrix of T: V → V relative to basis B, and P is a change-of-basis matrix, the matrix relative to the new basis is:',
      options: ['PAP', 'P⁻¹AP', 'AP⁻¹', 'PA'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Under change of basis by P, the matrix transforms as P⁻¹AP.'
    },
    {
      id: 's15-h03',
      question: 'Similar matrices have:',
      options: ['The same entries', 'The same rank, determinant, and eigenvalues', 'The same size only', 'Nothing in common'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Similar matrices share all basis-independent properties: rank, determinant, trace, eigenvalues, etc.'
    },
    {
      id: 's15-h04',
      question: 'The relation "V is isomorphic to W" is:',
      options: ['Not symmetric', 'Not transitive', 'An equivalence relation', 'Not reflexive'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Isomorphism is reflexive (identity), symmetric (inverse), and transitive (composition).'
    },
    {
      id: 's15-h05',
      question: 'If A and B are similar matrices, then:',
      options: ['A = B', 'They have the same characteristic polynomial', 'They have different ranks', 'One is the transpose of the other'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Similar matrices represent the same operator and share the characteristic polynomial.'
    },
    {
      id: 's15-h06',
      question: 'The set of all n × n invertible matrices over F forms:',
      options: ['A field', 'A vector space', 'A group under multiplication', 'A ring'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'GL(n, F) is a group under matrix multiplication (the general linear group).'
    },
  ],
};

// =============================================================================
// Section 17: Linear Functionals and Dual Spaces (maps to curriculum Section 7)
// =============================================================================
export const section17Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's17-e01',
      question: 'A linear functional on V is a linear transformation from V to:',
      options: ['V', 'V × V', 'F (the scalar field)', 'Any vector space'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A linear functional maps vectors to scalars: f: V → F.'
    },
    {
      id: 's17-e02',
      question: 'If f: ℝ³ → ℝ is defined by f(x, y, z) = x + 2y + 3z, then f is:',
      options: ['Not linear', 'A linear functional', 'An isomorphism', 'Not well-defined'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'f is linear: f(av + bw) = af(v) + bf(w). It maps vectors to scalars.'
    },
    {
      id: 's17-e03',
      question: 'The dual space V* is a subset of:',
      options: ['V', 'The power set of V', 'The set of all functions from V to F', 'F'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'V* consists of linear functions from V to F, a subset of all functions V → F.'
    },
    {
      id: 's17-e04',
      question: 'V* itself is:',
      options: ['A field', 'A vector space over F', 'Not a vector space', 'Equal to V'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The dual space V* is a vector space (with pointwise operations).'
    },
    {
      id: 's17-e05',
      question: 'The zero functional f(v) = 0 for all v:',
      options: ['Is not in V*', 'Is the zero vector of V*', 'Is not linear', 'Is an isomorphism'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The zero functional is linear and serves as the additive identity in V*.'
    },
    {
      id: 's17-e06',
      question: 'For the standard basis {e₁, e₂, e₃} of ℝ³, a dual basis functional f₁ satisfies:',
      options: ['f₁(e₁) = 0', 'f₁(eᵢ) = 1 for all i', 'f₁(e₁) = 1, f₁(e₂) = f₁(e₃) = 0', 'f₁ = e₁'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The dual basis has fᵢ(eⱼ) = δᵢⱼ (1 if i=j, 0 otherwise).'
    },
  ],
  medium: [
    {
      id: 's17-m01',
      question: 'The dual space V* of V is:',
      options: ['Equal to V', 'The space of all linear functionals on V', 'Always infinite-dimensional', 'A subspace of V'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'V* = L(V, F) is the space of all linear functionals on V.'
    },
    {
      id: 's17-m02',
      question: 'If dim(V) = n, then dim(V*) equals:',
      options: ['0', '1', 'n', 'n²'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The dual space has the same dimension as the original space.'
    },
    {
      id: 's17-m03',
      question: 'The dual basis {f₁,...,fₙ} of {v₁,...,vₙ} satisfies:',
      options: ['fᵢ(vⱼ) = 0 for all i,j', 'fᵢ(vⱼ) = δᵢⱼ (Kronecker delta)', 'fᵢ(vⱼ) = 1 for all i,j', 'fᵢ = vᵢ'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The dual basis is defined by fᵢ(vⱼ) = δᵢⱼ = 1 if i=j, 0 otherwise.'
    },
    {
      id: 's17-m04',
      question: 'If T: V → W is linear, the transpose Tᵗ maps:',
      options: ['V* → W*', 'W* → V*', 'V → W*', 'W → V'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The transpose Tᵗ: W* → V* is defined by (Tᵗg)(v) = g(T(v)).'
    },
    {
      id: 's17-m05',
      question: '(ST)ᵗ equals:',
      options: ['TᵗSᵗ', 'SᵗTᵗ', '(Sᵗ)(Tᵗ)', 'Tᵗ + Sᵗ'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The transpose reverses the order of composition: (ST)ᵗ = TᵗSᵗ.'
    },
    {
      id: 's17-m06',
      question: 'The double dual V** is:',
      options: ['Equal to V', 'The dual of V*', 'Always larger than V', 'Not a vector space'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'V** = (V*)* is the dual of the dual space.'
    },
  ],
  hard: [
    {
      id: 's17-h01',
      question: 'The annihilator of a subspace W ⊆ V is:',
      options: ['A subspace of V', 'A subspace of V*', 'Equal to W', 'Equal to V*'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Ann(W) = {f ∈ V* : f(w) = 0 for all w ∈ W} is a subspace of V*.'
    },
    {
      id: 's17-h02',
      question: 'dim(Ann(W)) equals:',
      options: ['dim(W)', 'dim(V) - dim(W)', 'dim(V*)', '0'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'For W ⊆ V: dim(Ann(W)) = dim(V*) - dim(W) = dim(V) - dim(W).'
    },
    {
      id: 's17-h03',
      question: 'The canonical map from V to V** is:',
      options: ['Not injective', 'An isomorphism when V is finite-dimensional', 'The zero map', 'Not linear'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The canonical embedding v ↦ êᵥ is an isomorphism when dim(V) < ∞.'
    },
    {
      id: 's17-h04',
      question: 'For finite-dimensional V, V is naturally isomorphic to V** via:',
      options: ['Any isomorphism', 'A basis-dependent isomorphism', 'The canonical evaluation map', 'The identity'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The canonical isomorphism sends v to the evaluation functional êᵥ(f) = f(v).'
    },
    {
      id: 's17-h05',
      question: 'The matrix of Tᵗ relative to dual bases is:',
      options: ['The same as T', 'The transpose of the matrix of T', 'The inverse of the matrix of T', 'Unrelated to T'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The matrix of Tᵗ is the transpose of the matrix of T (relative to dual bases).'
    },
    {
      id: 's17-h06',
      question: 'If W is a subspace of V, then Ann(Ann(W)) under the canonical identification V ≅ V** equals:',
      options: ['{0}', 'V', 'W', 'V*'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Under the canonical identification, Ann(Ann(W)) = W (for finite-dimensional V).'
    },
  ],
};

// =============================================================================
// Chapter 3 Comprehensive Quiz (Hard Only)
// =============================================================================
export const chapter03Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch03-h01',
      question: 'The zero transformation T(v) = 0 for all v is:',
      options: ['Not linear', 'Linear but not injective', 'An isomorphism', 'Not well-defined'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The zero map is linear but has kernel = V, so it\'s not injective (unless V = {0}).'
    },
    {
      id: 'ch03-h02',
      question: 'If T: ℝ³ → ℝ² is linear and surjective, then dim(ker T) equals:',
      options: ['0', '1', '2', '3'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By rank-nullity: 3 = dim(ker T) + dim(Im T) = dim(ker T) + 2, so dim(ker T) = 1.'
    },
    {
      id: 'ch03-h03',
      question: 'The set L(V, W) of all linear transformations from V to W is:',
      options: ['A group', 'A ring', 'A vector space over F', 'Just a set'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'L(V, W) is a vector space under pointwise addition and scalar multiplication.'
    },
    {
      id: 'ch03-h04',
      question: 'The set L(V, V) of linear operators on V forms:',
      options: ['A field', 'A vector space only', 'An algebra', 'Neither'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'L(V, V) is an algebra: a vector space with a compatible multiplication (composition).'
    },
    {
      id: 'ch03-h05',
      question: 'Composition of linear transformations is:',
      options: ['Commutative', 'Associative', 'Both', 'Neither'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Composition is associative but generally NOT commutative.'
    },
    {
      id: 'ch03-h06',
      question: 'An n × n matrix represents an isomorphism iff it is:',
      options: ['Symmetric', 'Diagonal', 'Invertible', 'Upper triangular'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A linear operator is an isomorphism iff its matrix (in any basis) is invertible.'
    },
    {
      id: 'ch03-h07',
      question: 'rank(T) + nullity(T) = dim(V) is called:',
      options: ['The fundamental theorem', 'The rank-nullity theorem', 'Sylvester\'s law', 'The dimension formula'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'This is the rank-nullity theorem (or dimension theorem).'
    },
    {
      id: 'ch03-h08',
      question: 'If dim(V) = dim(W) and T: V → W is linear, then:',
      options: ['T is always an isomorphism', 'T injective ⟺ T surjective ⟺ T isomorphism', 'T is never an isomorphism', 'T must be the zero map'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'For equal finite dimensions, injective ⟺ surjective ⟺ bijective.'
    },
    {
      id: 'ch03-h09',
      question: 'The identity map I: V → V has matrix relative to any basis:',
      options: ['The zero matrix', 'A diagonal matrix with all diagonal entries equal to n', 'The identity matrix Iₙ', 'Depends on the basis'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The identity transformation always has the identity matrix as its representation.'
    },
    {
      id: 'ch03-h10',
      question: 'If A and B are similar matrices, then:',
      options: ['A = B', 'They have the same characteristic polynomial', 'They have different ranks', 'One is the transpose of the other'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Similar matrices represent the same operator and share the characteristic polynomial.'
    },
  ],
};
