// Chapter 2: Vector Spaces (Sections 7-12)
// Based on Hoffman & Kunze Chapter 2
// Maps to curriculum sections 2 (Vector Spaces), 3 (Subspaces), 4 (Bases and Dimension)
import type { DifficultyQuizData } from './types';

// =============================================================================
// Section 7: Vector Spaces (maps to curriculum Section 2)
// =============================================================================
export const section07Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's07-e01',
      question: 'In a vector space V over F, the zero vector is:',
      options: ['Any vector', 'The scalar 0', 'Unique', 'Not required to exist'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The zero vector in a vector space is unique and satisfies v + 0 = v for all v ∈ V.'
    },
    {
      id: 's07-e02',
      question: 'For any vector v and scalar c = 0:',
      options: ['cv = v', 'cv = 0', 'cv is undefined', 'cv = -v'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '0·v = 0 for any vector v (where the result is the zero vector).'
    },
    {
      id: 's07-e03',
      question: 'For any scalar c and the zero vector 0:',
      options: ['c · 0 = c', 'c · 0 = 0', 'c · 0 = 1', 'c · 0 is undefined'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'c · 0 = 0 for any scalar c (the result is the zero vector).'
    },
    {
      id: 's07-e04',
      question: '1 · v equals:',
      options: ['0', 'v', '1', 'The zero vector'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The scalar 1 is the multiplicative identity: 1 · v = v for all vectors v.'
    },
    {
      id: 's07-e05',
      question: 'The additive inverse of a vector v is denoted:',
      options: ['1/v', 'v⁻¹', '-v', 'v*'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The additive inverse of v is written -v and satisfies v + (-v) = 0.'
    },
    {
      id: 's07-e06',
      question: 'ℝ² is a vector space over:',
      options: ['ℤ only', 'ℝ only', 'ℂ only', 'Both ℝ and ℂ'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'ℝ² is naturally a vector space over ℝ. It is not a vector space over ℂ in the standard sense.'
    },
  ],
  medium: [
    {
      id: 's07-m01',
      question: 'The set Fⁿ (n-tuples from F) is a vector space over F with dimension:',
      options: ['1', 'n', 'n²', 'Infinite'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Fⁿ has dimension n over F, with the standard basis e₁, ..., eₙ.'
    },
    {
      id: 's07-m02',
      question: 'The set of all polynomials over F is a vector space that is:',
      options: ['Finite-dimensional', 'Infinite-dimensional', 'Not a vector space', 'Zero-dimensional'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The polynomial ring F[x] is infinite-dimensional as a vector space over F.'
    },
    {
      id: 's07-m03',
      question: '(-1) · v equals:',
      options: ['v', '0', '-v', '1'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '(-1) · v = -v, the additive inverse of v.'
    },
    {
      id: 's07-m04',
      question: 'The set of m × n matrices over F forms a vector space of dimension:',
      options: ['m + n', 'm · n', 'max(m, n)', 'm - n'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The space of m × n matrices has dimension mn, with basis {Eᵢⱼ} (matrix units).'
    },
    {
      id: 's07-m05',
      question: 'ℂ as a vector space over ℝ has dimension:',
      options: ['1', '2', 'Infinite', '0'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'ℂ is 2-dimensional over ℝ with basis {1, i}.'
    },
    {
      id: 's07-m06',
      question: 'A vector space must satisfy associativity for:',
      options: ['Vector addition only', 'Scalar multiplication only', 'Both operations', 'Neither operation'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Vector addition is associative: (u + v) + w = u + (v + w). Scalar multiplication has a different property: (ab)v = a(bv).'
    },
  ],
  hard: [
    {
      id: 's07-h01',
      question: 'A vector space V over a field F must satisfy how many axioms?',
      options: ['6', '8', '10', '12'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'A vector space satisfies 8 axioms: 4 for addition (closure, associativity, identity, inverses) and 4 relating scalar multiplication to vector addition.'
    },
    {
      id: 's07-h02',
      question: 'The set of continuous functions from [0,1] to ℝ is:',
      options: ['Not a vector space', 'A finite-dimensional vector space', 'An infinite-dimensional vector space', 'A field'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'C([0,1]) is an infinite-dimensional vector space over ℝ.'
    },
    {
      id: 's07-h03',
      question: 'If V is a vector space over ℂ, then V is also a vector space over:',
      options: ['Only ℂ', 'ℝ', 'ℚ', 'All of the above'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A vector space over ℂ is also a vector space over any subfield of ℂ, including ℝ and ℚ.'
    },
    {
      id: 's07-h04',
      question: 'The set {(x, y) ∈ ℝ² : xy = 0} is:',
      options: ['A vector space', 'Not a vector space (not closed under addition)', 'A subspace of ℝ²', 'The zero vector only'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '(1,0) and (0,1) satisfy xy = 0, but (1,0) + (0,1) = (1,1) does not.'
    },
    {
      id: 's07-h05',
      question: 'The polynomials of degree exactly 2 form:',
      options: ['A vector space', 'Not a vector space', 'A subspace of F[x]', 'A field'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Not closed under addition: x² + (-x²) = 0 has degree < 2. (Polynomials of degree at most 2 do form a vector space.)'
    },
    {
      id: 's07-h06',
      question: 'If F is a field, then F is a vector space over F of dimension:',
      options: ['0', '1', '2', 'Infinite'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Any field F is a 1-dimensional vector space over itself with basis {1}.'
    },
  ],
};

// =============================================================================
// Section 8: Subspaces (maps to curriculum Section 3)
// =============================================================================
export const section08Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's08-e01',
      question: 'The zero vector must be in every subspace because:',
      options: ['It is defined that way', 'Subspaces are closed under scalar multiplication (0 · v = 0)', 'Subspaces are non-empty', 'The zero vector spans everything'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'If W is a subspace and v ∈ W, then 0 · v = 0 ∈ W by closure under scalar multiplication.'
    },
    {
      id: 's08-e02',
      question: '{0} (the set containing only the zero vector) is:',
      options: ['Not a subspace', 'A subspace of every vector space', 'A subspace only of {0}', 'Equal to the empty set'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '{0} is the trivial subspace, contained in every vector space.'
    },
    {
      id: 's08-e03',
      question: 'Every vector space V is a subspace of:',
      options: ['Only {0}', 'Only V itself', 'V and any larger space containing it', 'Nothing'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'V is always a subspace of itself, and of any vector space containing V.'
    },
    {
      id: 's08-e04',
      question: 'A line through the origin in ℝ² is:',
      options: ['Not a subspace', 'A 1-dimensional subspace', 'A 2-dimensional subspace', 'Equal to ℝ²'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A line through the origin is a 1-dimensional subspace of ℝ².'
    },
    {
      id: 's08-e05',
      question: 'A line NOT through the origin in ℝ² is:',
      options: ['A subspace', 'Not a subspace', 'A 1-dimensional subspace', 'The whole space'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A line not containing the origin does not contain 0, so it is not a subspace.'
    },
    {
      id: 's08-e06',
      question: 'The span of the empty set is:',
      options: ['The whole space', '{0}', 'Undefined', 'The empty set'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'By convention, span(∅) = {0} (the trivial subspace).'
    },
  ],
  medium: [
    {
      id: 's08-m01',
      question: 'A non-empty subset W of V is a subspace if and only if:',
      options: ['W contains 0', 'W is closed under addition and scalar multiplication', 'W equals V', 'W is finite'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'W is a subspace iff it is closed under vector addition and scalar multiplication (which implies 0 ∈ W).'
    },
    {
      id: 's08-m02',
      question: 'The intersection of any collection of subspaces is:',
      options: ['Empty', 'Not a subspace', 'A subspace', 'Equal to V'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The intersection of any collection of subspaces is itself a subspace.'
    },
    {
      id: 's08-m03',
      question: 'The subspace spanned by a set S is:',
      options: ['The largest subspace containing S', 'The smallest subspace containing S', 'Equal to S', 'The empty set'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'span(S) is the smallest subspace containing S, consisting of all linear combinations of elements of S.'
    },
    {
      id: 's08-m04',
      question: 'The sum W₁ + W₂ of subspaces is:',
      options: ['W₁ ∪ W₂', 'W₁ ∩ W₂', '{w₁ + w₂ : w₁ ∈ W₁, w₂ ∈ W₂}', 'Always equal to V'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The sum consists of all vectors that can be written as w₁ + w₂.'
    },
    {
      id: 's08-m05',
      question: 'W₁ + W₂ is a subspace that:',
      options: ['Equals W₁ ∪ W₂', 'Contains both W₁ and W₂', 'Is contained in W₁ ∩ W₂', 'Equals W₁ ∩ W₂'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'W₁ + W₂ is the smallest subspace containing both W₁ and W₂.'
    },
    {
      id: 's08-m06',
      question: 'The null space of a matrix A is:',
      options: ['A subspace of the column space', 'A subspace of the domain', 'A subspace of the codomain', 'Never a subspace'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The null space {x : Ax = 0} is a subspace of Fⁿ (the domain of the linear map).'
    },
  ],
  hard: [
    {
      id: 's08-h01',
      question: 'If W₁ and W₂ are subspaces, then W₁ ∪ W₂ is a subspace:',
      options: ['Always', 'Never', 'Only if one contains the other', 'Only if they are equal'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'W₁ ∪ W₂ is a subspace iff W₁ ⊆ W₂ or W₂ ⊆ W₁.'
    },
    {
      id: 's08-h02',
      question: 'The direct sum W₁ ⊕ W₂ means:',
      options: ['W₁ + W₂ where W₁ ∩ W₂ = {0}', 'W₁ × W₂', 'W₁ ∪ W₂', 'W₁ ∩ W₂'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'W₁ ⊕ W₂ is the direct sum: W₁ + W₂ with the additional condition that W₁ ∩ W₂ = {0}.'
    },
    {
      id: 's08-h03',
      question: 'If V = W₁ ⊕ W₂, then every v ∈ V can be written uniquely as:',
      options: ['v = w₁ or v = w₂', 'v = w₁ + w₂ with w₁ ∈ W₁, w₂ ∈ W₂', 'v = w₁w₂', 'v = w₁ - w₂'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'In a direct sum, every vector has a unique decomposition v = w₁ + w₂.'
    },
    {
      id: 's08-h04',
      question: 'The column space of A equals the row space of:',
      options: ['A', 'A⁻¹', 'Aᵀ', 'A²'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The columns of A are the rows of Aᵀ, so col(A) = row(Aᵀ).'
    },
    {
      id: 's08-h05',
      question: 'For subspaces W₁, W₂ of a finite-dimensional V, dim(W₁) + dim(W₂) = dim(V) and W₁ ∩ W₂ = {0} implies:',
      options: ['W₁ = W₂', 'W₁ + W₂ = V', 'W₁ ⊆ W₂', 'dim(W₁) = dim(W₂)'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'By the dimension formula, dim(W₁ + W₂) = dim(W₁) + dim(W₂) - dim(W₁ ∩ W₂) = dim(V), so W₁ + W₂ = V.'
    },
    {
      id: 's08-h06',
      question: 'The set of solutions to a non-homogeneous system Ax = b (b ≠ 0) is:',
      options: ['A subspace', 'Not a subspace', 'The null space', 'Always empty'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The solution set of Ax = b (when b ≠ 0) does not contain 0, so it is not a subspace. It is a coset of the null space.'
    },
  ],
};

// =============================================================================
// Section 9: Bases and Dimension (maps to curriculum Section 4)
// =============================================================================
export const section09Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's09-e01',
      question: 'A basis for V is a set that is:',
      options: ['Linearly independent', 'Spanning', 'Both linearly independent and spanning', 'Orthogonal'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A basis is a linearly independent set that spans the entire space.'
    },
    {
      id: 's09-e02',
      question: 'The standard basis for ℝ³ is:',
      options: ['{(1,0,0), (0,1,0), (0,0,1)}', '{(1,1,1)}', 'Any three vectors', '{(1,0,0), (1,1,0)}'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The standard basis consists of the unit vectors e₁, e₂, e₃.'
    },
    {
      id: 's09-e03',
      question: 'The dimension of ℝ³ is:',
      options: ['1', '2', '3', 'Infinite'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'ℝ³ has dimension 3 (the standard basis has 3 elements).'
    },
    {
      id: 's09-e04',
      question: 'The dimension of the zero subspace {0} is:',
      options: ['0', '1', 'Undefined', '-1'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The zero subspace has dimension 0 (empty basis).'
    },
    {
      id: 's09-e05',
      question: 'Two vectors in ℝ² are linearly dependent if:',
      options: ['They are perpendicular', 'One is a scalar multiple of the other', 'They have the same length', 'They point in opposite directions'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Two vectors are linearly dependent iff one is a scalar multiple of the other (they are parallel).'
    },
    {
      id: 's09-e06',
      question: 'A set containing the zero vector is always:',
      options: ['Linearly independent', 'Linearly dependent', 'A basis', 'Spanning'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'If 0 is in the set, then 1·0 = 0 is a non-trivial linear combination giving 0.'
    },
  ],
  medium: [
    {
      id: 's09-m01',
      question: 'A set of vectors is linearly independent if:',
      options: ['They span V', 'The only linear combination equal to 0 is the trivial one', 'They are orthogonal', 'There are n of them'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Vectors v₁,...,vₖ are linearly independent iff c₁v₁ + ... + cₖvₖ = 0 implies all cᵢ = 0.'
    },
    {
      id: 's09-m02',
      question: 'If V has a basis with n elements, then every basis of V has:',
      options: ['At most n elements', 'At least n elements', 'Exactly n elements', 'More than n elements'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'All bases of a vector space have the same cardinality, which defines the dimension.'
    },
    {
      id: 's09-m03',
      question: 'If dim(V) = n and S has more than n vectors, then S is:',
      options: ['A basis', 'Linearly independent', 'Linearly dependent', 'Spanning'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Any set with more vectors than the dimension must be linearly dependent.'
    },
    {
      id: 's09-m04',
      question: 'If dim(V) = n and S has fewer than n vectors, then S:',
      options: ['Cannot span V', 'Must be linearly independent', 'Is a basis', 'Spans V'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'A spanning set must have at least n vectors if dim(V) = n.'
    },
    {
      id: 's09-m05',
      question: 'Vectors v₁, v₂, v₃ are linearly dependent iff:',
      options: ['v₁ + v₂ + v₃ = 0', 'One is a linear combination of the others', 'They span a 3-dimensional space', 'All are zero'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Linear dependence means at least one vector is a linear combination of the others.'
    },
    {
      id: 's09-m06',
      question: 'The dimension of the space of polynomials of degree at most n is:',
      options: ['n', 'n + 1', 'n - 1', 'Infinite'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The basis is {1, x, x², ..., xⁿ}, which has n + 1 elements.'
    },
  ],
  hard: [
    {
      id: 's09-h01',
      question: 'Any linearly independent set in a finite-dimensional V can be:',
      options: ['Made smaller', 'Extended to a basis', 'Made orthogonal', 'Reduced to a single vector'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Any linearly independent set can be extended to a basis by adding appropriate vectors.'
    },
    {
      id: 's09-h02',
      question: 'Any spanning set of a finite-dimensional V contains:',
      options: ['Exactly dim(V) vectors', 'At least dim(V) vectors', 'At most dim(V) vectors', 'No linearly independent vectors'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'A spanning set can be reduced to a basis by removing redundant vectors, so it has ≥ dim(V) vectors.'
    },
    {
      id: 's09-h03',
      question: 'A set of n vectors in an n-dimensional space V is a basis iff it is:',
      options: ['Linearly independent', 'Spanning', 'Either linearly independent or spanning', 'Orthogonal'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'For n vectors in an n-dimensional space, linear independence is equivalent to being spanning.'
    },
    {
      id: 's09-h04',
      question: 'If W is a subspace of V with dim(W) = dim(V), then:',
      options: ['W is a proper subspace', 'W = V', 'W = {0}', 'dim(W) = 0'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'A subspace with the same dimension as the ambient space must be the whole space.'
    },
    {
      id: 's09-h05',
      question: 'The dimension formula states: dim(W₁ + W₂) equals:',
      options: ['dim(W₁) + dim(W₂)', 'dim(W₁) · dim(W₂)', 'dim(W₁) + dim(W₂) - dim(W₁ ∩ W₂)', 'max(dim(W₁), dim(W₂))'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'dim(W₁ + W₂) = dim(W₁) + dim(W₂) - dim(W₁ ∩ W₂).'
    },
    {
      id: 's09-h06',
      question: 'If A is m × n with rank r, then dim(null space of A) equals:',
      options: ['r', 'm - r', 'n - r', 'm'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By the Rank-Nullity Theorem: rank(A) + nullity(A) = n, so nullity = n - r.'
    },
  ],
};

// =============================================================================
// Chapter 2 Comprehensive Quiz (Hard Only)
// =============================================================================
export const chapter02Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch02-h01',
      question: 'If V is a vector space over ℝ with dim(V) = n, then V is isomorphic to:',
      options: ['ℝ', 'ℝⁿ', 'ℂⁿ', 'Any field'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Every n-dimensional real vector space is isomorphic to ℝⁿ.'
    },
    {
      id: 'ch02-h02',
      question: 'If dim(V) = n and W is a proper subspace of V, then:',
      options: ['dim(W) = n', 'dim(W) > n', 'dim(W) < n', 'dim(W) is undefined'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A proper subspace has strictly smaller dimension than the ambient space.'
    },
    {
      id: 'ch02-h03',
      question: 'The null space of an m × n matrix is a subspace of:',
      options: ['Fᵐ', 'Fⁿ', 'F^(m×n)', 'F'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The null space consists of n-tuples x satisfying Ax = 0, so it\'s a subspace of Fⁿ.'
    },
    {
      id: 'ch02-h04',
      question: 'If A is m × n with rank r, the dimension of the column space is:',
      options: ['m', 'n', 'r', 'm - r'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The dimension of the column space equals the rank r.'
    },
    {
      id: 'ch02-h05',
      question: 'If W₁ ∩ W₂ = {0} and dim(W₁) = 2, dim(W₂) = 3, then dim(W₁ + W₂) equals:',
      options: ['2', '3', '5', '6'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'By the dimension formula: dim(W₁ + W₂) = 2 + 3 - 0 = 5.'
    },
    {
      id: 'ch02-h06',
      question: 'Every finite-dimensional vector space (dim > 0) has:',
      options: ['A unique basis', 'No basis', 'At least one basis', 'Infinitely many bases'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A finite-dimensional space (dim > 0) has infinitely many bases.'
    },
    {
      id: 'ch02-h07',
      question: 'The rank-nullity theorem for an m × n matrix A states:',
      options: ['rank + nullity = m', 'rank + nullity = n', 'rank · nullity = mn', 'rank - nullity = m'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'rank(A) + nullity(A) = n (the number of columns).'
    },
    {
      id: 'ch02-h08',
      question: 'If {v₁, v₂, v₃} spans V and dim(V) = 2, then:',
      options: ['The set is a basis', 'The set is linearly independent', 'The set is linearly dependent', 'V = {0}'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '3 vectors in a 2-dimensional space must be linearly dependent.'
    },
    {
      id: 'ch02-h09',
      question: 'A linear map T: V → W is injective iff:',
      options: ['ker(T) = V', 'ker(T) = {0}', 'im(T) = W', 'T is surjective'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'T is injective iff its kernel (null space) is trivial.'
    },
    {
      id: 'ch02-h10',
      question: 'If V = W₁ ⊕ W₂ (direct sum), then dim(V) equals:',
      options: ['max(dim(W₁), dim(W₂))', 'dim(W₁) · dim(W₂)', 'dim(W₁) + dim(W₂)', 'min(dim(W₁), dim(W₂))'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'In a direct sum, dimensions add: dim(W₁ ⊕ W₂) = dim(W₁) + dim(W₂).'
    },
  ],
};
