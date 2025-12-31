// Chapter 10: Bilinear Forms (Sections 56-59)
// Based on Hoffman & Kunze Chapter 10
import type { QuizQuestion, DifficultyQuizData } from './types';

// Section 56: Bilinear Forms
export const section56Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's56-e01',
      question: 'A bilinear form f on V is:',
      options: ['Linear in one variable', 'Linear in both variables', 'Quadratic', 'Constant'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Bilinear means linear in each of two arguments separately.'
    },
    {
      id: 's56-e02',
      question: 'The matrix of bilinear form f relative to basis {v₁,...,vₙ} has (i,j) entry:',
      options: ['f(vᵢ,vⱼ)', 'f(vᵢ) + f(vⱼ)', '⟨vᵢ,vⱼ⟩', 'δᵢⱼ'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The matrix [f] has entries [f]ᵢⱼ = f(vᵢ,vⱼ).'
    },
    {
      id: 's56-e03',
      question: 'A symmetric bilinear form satisfies:',
      options: ['f(u,v) = -f(v,u)', 'f(u,v) = f(v,u)', 'f(u,u) = 0', 'f is zero'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Symmetric means f(u,v) = f(v,u) for all u, v.'
    },
    {
      id: 's56-e04',
      question: 'The matrix of a symmetric bilinear form is:',
      options: ['Skew-symmetric', 'Symmetric', 'Diagonal', 'The identity'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'f(vᵢ,vⱼ) = f(vⱼ,vᵢ) means the matrix is symmetric.'
    },
    {
      id: 's56-e05',
      question: 'A skew-symmetric (alternating) bilinear form satisfies:',
      options: ['f(u,v) = f(v,u)', 'f(u,v) = -f(v,u)', 'f(u,u) = 1', 'f is symmetric'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Skew-symmetric means f(u,v) = -f(v,u), which implies f(v,v) = 0.'
    },
    {
      id: 's56-e06',
      question: 'The quadratic form associated to symmetric bilinear form f is:',
      options: ['f(u,v)', 'Q(v) = f(v,v)', 'Always zero', '||f||'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The quadratic form is Q(v) = f(v,v).'
    }
  ],
  medium: [
    {
      id: 's56-m01',
      question: 'Under change of basis by P, the matrix B of f transforms to:',
      options: ['PBP', 'P⁻¹BP', 'PᵀBP', 'B'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Bilinear form matrix transforms as B → PᵀBP under basis change P.'
    },
    {
      id: 's56-m02',
      question: 'A bilinear form f is non-degenerate if:',
      options: ['f = 0', 'The only v with f(v,w) = 0 for all w is v = 0', 'f(v,v) > 0 for all v', 'f is symmetric'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Non-degenerate means the associated linear map V → V* is an isomorphism.'
    },
    {
      id: 's56-m03',
      question: 'The rank of a bilinear form is:',
      options: ['Always n', 'The rank of its matrix', 'Always 0', 'Undefined'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The rank is the rank of the representing matrix (or n minus the dimension of the radical).'
    },
    {
      id: 's56-m04',
      question: 'Two bilinear forms with matrices B and B\' are equivalent iff:',
      options: ['B = B\'', 'B\' = PᵀBP for some invertible P', 'They have the same rank', 'They are both symmetric'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Equivalent forms have congruent matrices.'
    },
    {
      id: 's56-m05',
      question: 'The Gram matrix of vectors v₁,...,vₖ with respect to inner product has (i,j) entry:',
      options: ['⟨vᵢ,vⱼ⟩', 'vᵢᵀvⱼ', 'δᵢⱼ', '0'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Gram matrix G has Gᵢⱼ = ⟨vᵢ,vⱼ⟩.'
    },
    {
      id: 's56-m06',
      question: 'det(Gram matrix) = 0 iff:',
      options: ['The vectors are orthonormal', 'The vectors are linearly dependent', 'The form is positive', 'The form is negative'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The Gram determinant is zero iff the vectors are linearly dependent.'
    }
  ],
  hard: [
    {
      id: 's56-h01',
      question: 'The radical of a bilinear form f is:',
      options: ['ker(f)', '{v : f(v,w) = 0 for all w}', 'V', '{0}'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The radical is the set of vectors orthogonal to everything under f.'
    },
    {
      id: 's56-h02',
      question: 'A form is non-degenerate iff its radical is:',
      options: ['V', '{0}', 'One-dimensional', 'Undefined'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Non-degenerate means trivial radical.'
    },
    {
      id: 's56-h03',
      question: 'Two symmetric bilinear forms over ℂ are equivalent iff:',
      options: ['They have the same signature', 'They have the same rank', 'They are equal', 'They have the same determinant'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Over ℂ, only rank matters for equivalence of symmetric forms.'
    },
    {
      id: 's56-h04',
      question: 'Over ℂ, all non-degenerate symmetric bilinear forms on ℂⁿ are:',
      options: ['Different', 'Equivalent (congruent)', 'Not comparable', 'All positive definite'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Over ℂ, any non-degenerate symmetric form is congruent to the sum of squares.'
    },
    {
      id: 's56-h05',
      question: 'The isometry group of a bilinear form f is:',
      options: ['Empty', '{A : f(Av, Aw) = f(v,w) for all v,w}', 'All invertible matrices', 'Only the identity'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Isometries preserve the form: f(Av, Aw) = f(v,w).'
    },
    {
      id: 's56-h06',
      question: 'For matrix B of f, the isometry group consists of A with:',
      options: ['AᵀBA = B', 'AB = BA', 'A = B', 'A² = I'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'AᵀBA = B is the matrix condition for f(Av, Aw) = f(v,w).'
    }
  ]
};

// Section 57: Symmetric Bilinear Forms
export const section57Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's57-e01',
      question: 'A symmetric bilinear form f is symmetric if:',
      options: ['f(u,v) = -f(v,u)', 'f(u,v) = f(v,u)', 'f(u,u) = 0', 'f is zero'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Symmetric means f(u,v) = f(v,u) for all u, v.'
    },
    {
      id: 's57-e02',
      question: 'The diagonal form of a symmetric bilinear form has:',
      options: ['All entries equal', 'Non-zero entries only on the diagonal', 'All zeros', 'Random entries'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A diagonal form has f(vᵢ,vⱼ) = 0 for i ≠ j.'
    },
    {
      id: 's57-e03',
      question: 'Over ℝ, a diagonal symmetric form has entries that are:',
      options: ['All positive', 'All negative', 'Positive, negative, or zero', 'All complex'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Real symmetric forms can have positive, negative, or zero diagonal entries.'
    },
    {
      id: 's57-e04',
      question: 'The signature of a real symmetric form is:',
      options: ['Its determinant', '(# positive, # negative diagonal entries in diagonalized form)', 'Always (n, 0)', 'Undefined'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Signature (p, q) counts positive and negative diagonal entries.'
    },
    {
      id: 's57-e05',
      question: 'A positive definite symmetric form has signature:',
      options: ['(0, n)', '(n, 0)', '(p, q) with p, q > 0', '(0, 0)'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Positive definite means all diagonal entries positive: signature (n, 0).'
    },
    {
      id: 's57-e06',
      question: 'A negative definite symmetric form has signature:',
      options: ['(0, n)', '(n, 0)', '(p, q) with p, q > 0', '(0, 0)'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Negative definite means all diagonal entries negative: signature (0, n).'
    }
  ],
  medium: [
    {
      id: 's57-m01',
      question: 'Every symmetric bilinear form over a field of characteristic ≠ 2 can be diagonalized to:',
      options: ['The identity matrix', 'A diagonal matrix', 'A triangular matrix', 'The zero matrix'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Symmetric bilinear forms can be diagonalized (diagonal matrix relative to some basis).'
    },
    {
      id: 's57-m02',
      question: 'Sylvester\'s law of inertia states that for a real symmetric form, the signature (p, q) is:',
      options: ['Basis-dependent', 'An invariant of the form', 'Always (n, 0)', 'Not defined'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The signature (# positive, # negative diagonal entries) is an invariant.'
    },
    {
      id: 's57-m03',
      question: 'Two real symmetric forms are equivalent iff they have:',
      options: ['The same entries', 'The same signature', 'The same determinant', 'The same trace'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Real symmetric bilinear forms are classified by their signature.'
    },
    {
      id: 's57-m04',
      question: 'An indefinite form has signature:',
      options: ['(n, 0)', '(0, n)', '(p, q) with both p > 0 and q > 0', '(0, 0)'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Indefinite means both positive and negative values occur.'
    },
    {
      id: 's57-m05',
      question: 'The index of a real symmetric form is:',
      options: ['The rank', 'The number of negative diagonal entries (in diagonalized form)', 'The trace', 'Zero'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The index is q in signature (p, q), counting negative entries.'
    },
    {
      id: 's57-m06',
      question: 'From quadratic form Q, the bilinear form f can be recovered (char ≠ 2) via:',
      options: ['f(u,v) = Q(u)Q(v)', 'f(u,v) = ½[Q(u+v) - Q(u) - Q(v)]', 'f(u,v) = Q(u)/Q(v)', 'Cannot be recovered'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Polarization identity: f(u,v) = ½[Q(u+v) - Q(u) - Q(v)].'
    }
  ],
  hard: [
    {
      id: 's57-h01',
      question: 'A symmetric form over 𝔽_2 (field with 2 elements) cannot be:',
      options: ['Defined', 'Diagonalized in general', 'Zero', 'Symmetric'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'In characteristic 2, symmetric forms may not diagonalize (polarization fails).'
    },
    {
      id: 's57-h02',
      question: 'The Witt index of a symmetric form is:',
      options: ['The rank', 'The dimension of a maximal isotropic subspace', 'The signature', 'Zero'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Witt index = maximum dimension of a subspace where f ≡ 0.'
    },
    {
      id: 's57-h03',
      question: 'A subspace W is isotropic if:',
      options: ['f = 0 on W (f(u,v) = 0 for all u,v ∈ W)', 'f is positive on W', 'W = V', 'W = {0}'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Isotropic means f restricted to W is identically zero.'
    },
    {
      id: 's57-h04',
      question: 'A hyperbolic plane has signature:',
      options: ['(2, 0)', '(0, 2)', '(1, 1)', '(1, 0)'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A hyperbolic plane is 2-dimensional with signature (1, 1).'
    },
    {
      id: 's57-h05',
      question: 'Witt\'s cancellation theorem says:',
      options: ['All forms are equivalent', 'If f ⊕ g ≅ f ⊕ h, then g ≅ h', 'f ≅ -f', 'Nothing can be cancelled'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Witt cancellation: isometric summands can be cancelled.'
    },
    {
      id: 's57-h06',
      question: 'The anisotropic part of a form is:',
      options: ['Always zero', 'What remains after removing all hyperbolic planes', 'The whole form', 'The radical'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Every form decomposes as hyperbolic planes ⊕ anisotropic part.'
    }
  ]
};

// Section 58: Skew-Symmetric Bilinear Forms
export const section58Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's58-e01',
      question: 'A bilinear form f is skew-symmetric (alternating) if:',
      options: ['f(u,v) = f(v,u)', 'f(u,v) = -f(v,u)', 'f(u,u) = 1', 'f is symmetric'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Skew-symmetric means f(u,v) = -f(v,u), which implies f(v,v) = 0.'
    },
    {
      id: 's58-e02',
      question: 'For a skew-symmetric form over any field, f(v,v) equals:',
      options: ['1', '-1', '0', 'Varies'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'f(v,v) = -f(v,v) implies 2f(v,v) = 0; if char ≠ 2, then f(v,v) = 0.'
    },
    {
      id: 's58-e03',
      question: 'A skew-symmetric matrix satisfies:',
      options: ['A = Aᵀ', 'A = -Aᵀ', 'A² = I', 'A = 0'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Skew-symmetric: A = -Aᵀ, so Aᵢⱼ = -Aⱼᵢ.'
    },
    {
      id: 's58-e04',
      question: 'The diagonal entries of a skew-symmetric matrix are:',
      options: ['All 1', 'All -1', 'All 0', 'Arbitrary'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Aᵢᵢ = -Aᵢᵢ implies Aᵢᵢ = 0.'
    },
    {
      id: 's58-e05',
      question: 'The determinant of a skew-symmetric n × n matrix with n odd is:',
      options: ['1', '-1', '0', 'n'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'det(A) = det(-Aᵀ) = (-1)ⁿ det(A), so det(A) = 0 when n is odd.'
    },
    {
      id: 's58-e06',
      question: 'A non-degenerate skew-symmetric form can only exist on spaces of dimension:',
      options: ['Any', 'Odd', 'Even', 'Prime'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Non-degenerate skew-symmetric forms require even dimension (they come in pairs).'
    }
  ],
  medium: [
    {
      id: 's58-m01',
      question: 'The standard symplectic form on ℝ²ⁿ has matrix:',
      options: ['I', '[[0,I],[-I,0]]', 'A diagonal matrix', 'The zero matrix'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Standard symplectic form has block matrix [[0,I],[-I,0]].'
    },
    {
      id: 's58-m02',
      question: 'A symplectic form is:',
      options: ['Symmetric', 'A non-degenerate skew-symmetric form', 'Positive definite', 'Zero'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Symplectic = non-degenerate alternating (skew-symmetric) bilinear form.'
    },
    {
      id: 's58-m03',
      question: 'All symplectic forms on ℝ²ⁿ are:',
      options: ['Different', 'Equivalent to the standard symplectic form', 'Zero', 'Positive'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'All non-degenerate skew-symmetric forms of the same dimension are equivalent.'
    },
    {
      id: 's58-m04',
      question: 'The symplectic group Sp(2n) preserves:',
      options: ['The inner product', 'A symplectic form', 'The determinant', 'Eigenvalues'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Sp(2n) = {A : Aᵀ J A = J} where J is the standard symplectic matrix.'
    },
    {
      id: 's58-m05',
      question: 'For A ∈ Sp(2n), det(A) equals:',
      options: ['0', '±1', '1', 'n'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Elements of the symplectic group have determinant 1.'
    },
    {
      id: 's58-m06',
      question: 'The Pfaffian of a skew-symmetric matrix A satisfies:',
      options: ['Pf(A) = det(A)', 'Pf(A)² = det(A)', 'Pf(A) = trace(A)', 'Pf(A) = 0'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The Pfaffian is a polynomial with Pf(A)² = det(A).'
    }
  ],
  hard: [
    {
      id: 's58-h01',
      question: 'A Lagrangian subspace L of a symplectic space (V, ω) satisfies:',
      options: ['dim(L) = dim(V)', 'dim(L) = ½ dim(V) and ω|_L = 0', 'L = V', 'L = {0}'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Lagrangian = maximal isotropic subspace, with dimension = ½ dim(V).'
    },
    {
      id: 's58-h02',
      question: 'The Darboux theorem states that symplectic forms locally look like:',
      options: ['Arbitrary', 'The standard form (no local invariants)', 'Different everywhere', 'Zero'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Darboux: all symplectic manifolds are locally equivalent to the standard form.'
    },
    {
      id: 's58-h03',
      question: 'The dimension of Sp(2n) as a Lie group is:',
      options: ['2n', 'n²', 'n(2n+1)', '4n²'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'dim(Sp(2n)) = n(2n+1).'
    },
    {
      id: 's58-h04',
      question: 'Sp(2n) ∩ O(2n) equals:',
      options: ['{I}', 'U(n) (the unitary group)', 'Sp(2n)', 'O(2n)'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The intersection of symplectic and orthogonal is the unitary group.'
    },
    {
      id: 's58-h05',
      question: 'The Pfaffian is defined only for:',
      options: ['All matrices', 'Skew-symmetric matrices of even size', 'Symmetric matrices', 'Unitary matrices'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Pfaffian is defined for skew-symmetric matrices of even dimension.'
    },
    {
      id: 's58-h06',
      question: 'Under A ↦ BABᵀ, the Pfaffian transforms as:',
      options: ['Pf(BABᵀ) = Pf(A)', 'Pf(BABᵀ) = det(B)Pf(A)', 'Pf(BABᵀ) = Pf(B)Pf(A)', 'No simple rule'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Pf(BABᵀ) = det(B) · Pf(A).'
    }
  ]
};

// Section 59: Groups Preserving Bilinear Forms
export const section59Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's59-e01',
      question: 'The orthogonal group O(n) preserves:',
      options: ['Any bilinear form', 'The standard inner product on ℝⁿ', 'Only the zero form', 'Determinant'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'O(n) = {A : AᵀA = I} preserves the standard inner product.'
    },
    {
      id: 's59-e02',
      question: 'The unitary group U(n) consists of:',
      options: ['Orthogonal matrices', 'Matrices A with A*A = I', 'Symmetric matrices', 'Nilpotent matrices'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'U(n) = {A ∈ M_n(ℂ) : A*A = I} preserves the standard Hermitian form.'
    },
    {
      id: 's59-e03',
      question: 'det(A) for A ∈ O(n) equals:',
      options: ['0', '1', '±1', 'n'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'det(A)² = det(AᵀA) = det(I) = 1, so det(A) = ±1.'
    },
    {
      id: 's59-e04',
      question: 'The special orthogonal group SO(n) is O(n) ∩:',
      options: ['U(n)', 'Matrices with det = 1', 'Symmetric matrices', 'Nilpotent matrices'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'SO(n) = {A ∈ O(n) : det(A) = 1} (orientation-preserving orthogonal maps).'
    },
    {
      id: 's59-e05',
      question: '|det(A)| for A ∈ U(n) equals:',
      options: ['0', '1', 'n', 'Varies'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '|det(A)|² = det(A*A) = 1, so |det(A)| = 1.'
    },
    {
      id: 's59-e06',
      question: 'SO(2) consists of:',
      options: ['Reflections', 'Rotations in the plane', 'All 2×2 matrices', 'Only the identity'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'SO(2) = rotations by angle θ, with matrices [[cos θ, -sin θ], [sin θ, cos θ]].'
    }
  ],
  medium: [
    {
      id: 's59-m01',
      question: 'The symplectic group Sp(2n) preserves:',
      options: ['The inner product', 'A non-degenerate skew-symmetric form', 'The determinant', 'Eigenvalues'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Sp(2n) preserves the standard symplectic (skew-symmetric) form.'
    },
    {
      id: 's59-m02',
      question: 'The Lorentz group preserves:',
      options: ['Euclidean distance', 'The Minkowski metric (signature (1,3) or (3,1))', 'The zero form', 'Volume'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The Lorentz group preserves the indefinite Minkowski inner product of special relativity.'
    },
    {
      id: 's59-m03',
      question: 'The pseudo-orthogonal group O(p,q) preserves a form of signature:',
      options: ['(n,0)', '(p,q)', '(0,0)', '(1,1) only'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'O(p,q) preserves the indefinite form with p positive and q negative signs.'
    },
    {
      id: 's59-m04',
      question: 'The dimension of O(n) as a Lie group is:',
      options: ['n', 'n²', 'n(n-1)/2', 'n(n+1)/2'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'dim(O(n)) = n(n-1)/2, the number of independent skew-symmetric parameters.'
    },
    {
      id: 's59-m05',
      question: 'The dimension of U(n) as a Lie group is:',
      options: ['n', 'n²', '2n²', 'n(n+1)/2'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'dim(U(n)) = n², the number of independent parameters in a unitary matrix.'
    },
    {
      id: 's59-m06',
      question: 'O(n) has:',
      options: ['One connected component', 'Two connected components (det = ±1)', 'n components', 'Infinitely many components'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'O(n) has two components: SO(n) with det = 1, and det = -1 coset.'
    }
  ],
  hard: [
    {
      id: 's59-h01',
      question: 'The Lie algebra of O(n) consists of:',
      options: ['Symmetric matrices', 'Skew-symmetric matrices', 'All matrices', 'Diagonal matrices'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The Lie algebra of O(n) is so(n) = {A : A + Aᵀ = 0}.'
    },
    {
      id: 's59-h02',
      question: 'The Lie algebra of U(n) consists of:',
      options: ['Hermitian matrices', 'Skew-Hermitian matrices', 'All matrices', 'Unitary matrices'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The Lie algebra of U(n) is u(n) = {A : A + A* = 0}.'
    },
    {
      id: 's59-h03',
      question: 'The exponential map exp: so(n) → SO(n) is:',
      options: ['Never surjective', 'Always surjective', 'Only defined at 0', 'Not continuous'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'For connected compact Lie groups, exp is surjective onto the identity component.'
    },
    {
      id: 's59-h04',
      question: 'The spin group Spin(n) is:',
      options: ['The same as SO(n)', 'A double cover of SO(n)', 'A subgroup of O(n)', 'Abelian'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Spin(n) is the universal double cover of SO(n) for n ≥ 3.'
    },
    {
      id: 's59-h05',
      question: 'The maximal compact subgroup of Sp(2n, ℝ) is:',
      options: ['Sp(2n, ℝ) itself', 'U(n)', 'O(2n)', 'SU(n)'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The maximal compact in Sp(2n, ℝ) is U(n) = Sp(2n, ℝ) ∩ O(2n).'
    },
    {
      id: 's59-h06',
      question: 'For a reductive group G preserving form f, the Cartan decomposition is:',
      options: ['G = K × K', 'G = K · exp(p) where K is maximal compact', 'G is simple', 'G = {e}'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Cartan: G = K · A · K where K is maximal compact and A is abelian (or G = K · exp(p)).'
    }
  ]
};

// Chapter 10 Comprehensive Quiz
export const chapter10Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch10-h01',
      question: 'The radical of a bilinear form f is:',
      options: ['ker(f)', '{v : f(v,w) = 0 for all w}', 'V', '{0}'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The radical is the set of vectors orthogonal to everything under f.'
    },
    {
      id: 'ch10-h02',
      question: 'A form is non-degenerate iff its radical is:',
      options: ['V', '{0}', 'One-dimensional', 'Undefined'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Non-degenerate means trivial radical.'
    },
    {
      id: 'ch10-h03',
      question: 'Two real symmetric matrices represent equivalent forms iff they have:',
      options: ['The same entries', 'The same signature', 'The same determinant', 'The same trace'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Real symmetric bilinear forms are classified by their signature.'
    },
    {
      id: 'ch10-h04',
      question: 'The special orthogonal group SO(n) is O(n) ∩:',
      options: ['U(n)', 'Matrices with det = 1', 'Symmetric matrices', 'Nilpotent matrices'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'SO(n) = {A ∈ O(n) : det(A) = 1} (orientation-preserving orthogonal maps).'
    },
    {
      id: 'ch10-h05',
      question: 'The dimension of Sp(2n) as a Lie group is:',
      options: ['2n', 'n²', 'n(2n+1)', '4n²'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'dim(Sp(2n)) = n(2n+1).'
    },
    {
      id: 'ch10-h06',
      question: 'Over ℂ, all non-degenerate symmetric bilinear forms on ℂⁿ are:',
      options: ['Different', 'Equivalent (congruent)', 'Not comparable', 'All positive definite'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Over ℂ, any non-degenerate symmetric form is congruent to the sum of squares.'
    },
    {
      id: 'ch10-h07',
      question: 'The Gram matrix of vectors v₁,...,vₖ in an inner product space has (i,j) entry:',
      options: ['⟨vᵢ,vⱼ⟩', 'vᵢᵀvⱼ', 'δᵢⱼ', '0'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Gram matrix G has Gᵢⱼ = ⟨vᵢ,vⱼ⟩.'
    },
    {
      id: 'ch10-h08',
      question: 'The pseudo-orthogonal group O(p,q) preserves a form of signature:',
      options: ['(n,0)', '(p,q)', '(0,0)', '(1,1) only'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'O(p,q) preserves the indefinite form with p positive and q negative signs.'
    },
    {
      id: 'ch10-h09',
      question: 'From quadratic form Q, the bilinear form f can be recovered (char ≠ 2) via:',
      options: ['f(u,v) = Q(u+v)', 'f(u,v) = ½[Q(u+v) - Q(u) - Q(v)]', 'f(u,v) = Q(u)Q(v)', 'Cannot be recovered'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Polarization identity: f(u,v) = ½[Q(u+v) - Q(u) - Q(v)].'
    },
    {
      id: 'ch10-h10',
      question: 'A non-degenerate skew-symmetric form can only exist on spaces of dimension:',
      options: ['Any', 'Odd', 'Even', 'Prime'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Non-degenerate skew-symmetric forms require even dimension.'
    }
  ]
};
