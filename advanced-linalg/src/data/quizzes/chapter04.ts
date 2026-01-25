// Chapter 4: Polynomials (Sections 20-24)
// Based on Hoffman & Kunze Chapter 4
import type { DifficultyQuizData } from './types';

// Section 20: Algebras
export const section20Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's20-e01',
      question: 'An algebra over F is a vector space that also has:',
      options: ['An inner product', 'A compatible multiplication', 'A norm', 'A division'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'An algebra is a vector space with a bilinear multiplication satisfying associativity axioms.'
    },
    {
      id: 's20-e02',
      question: 'A subalgebra must be closed under:',
      options: [
      'Only addition',
      'Addition, scalar multiplication, and the algebra multiplication',
      'Only multiplication',
      'Only scalar multiplication',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A subalgebra must be closed under all three operations.'
    },
    {
      id: 's20-e03',
      question: 'The set of n × n matrices over F forms:',
      options: [
      'An algebra with matrix multiplication',
      'Only a vector space',
      'A field',
      'A group',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'n × n matrices form an algebra under matrix addition, scalar multiplication, and matrix multiplication.'
    },
    {
      id: 's20-e04',
      question: 'The algebra L(V, V) of linear operators on V is:',
      options: [
      'Commutative',
      'Non-associative',
      'Generally non-commutative',
      'A field',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'L(V, V) is an associative algebra but composition is not commutative in general.'
    },
    {
      id: 's20-e05',
      question: 'A commutative algebra has multiplication satisfying:',
      options: [
      'ab = 0',
      'ab = ba',
      'ab = -ba',
      '(ab)c = a(bc)',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Commutative means the multiplication is commutative: ab = ba.'
    },
    {
      id: 's20-e06',
      question: 'The polynomial algebra F[x] is:',
      options: [
      'Non-commutative',
      'Commutative',
      'Finite-dimensional',
      'A field',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'F[x] is a commutative algebra since polynomial multiplication is commutative.'
    }
  ],
  medium: [
    {
      id: 's20-m01',
      question: 'An algebra homomorphism preserves:',
      options: ['Only addition', 'Only multiplication', 'Addition, scalar multiplication, and algebra multiplication', 'Only the identity'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'An algebra homomorphism is a linear map that also preserves the algebra multiplication.'
    },
    {
      id: 's20-m02',
      question: 'The center of an algebra A consists of elements that:',
      options: [
      'Are zero',
      'Commute with all elements of A',
      'Are units',
      'Have no inverse',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The center Z(A) = {a ∈ A : ab = ba for all b ∈ A}.'
    },
    {
      id: 's20-m03',
      question: 'A unital algebra has:',
      options: [
      'No identity',
      'A multiplicative identity element',
      'Exactly one element',
      'Infinite dimension',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A unital algebra has an identity element 1 such that 1·a = a·1 = a for all a.'
    },
    {
      id: 's20-m04',
      question: 'The algebra of diagonal n × n matrices is:',
      options: [
      'Non-commutative',
      'Commutative',
      'Not closed under multiplication',
      'Trivial',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Diagonal matrices commute with each other, forming a commutative subalgebra.'
    },
    {
      id: 's20-m05',
      question: 'An ideal I of an algebra A satisfies:',
      options: [
      'aI ⊆ I and Ia ⊆ I for all a ∈ A',
      'I = A',
      'I is one-dimensional',
      'I contains only zero',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'A two-sided ideal is closed under multiplication by any algebra element.'
    },
    {
      id: 's20-m06',
      question: 'The quotient algebra A/I is well-defined when I is:',
      options: [
      'Any subspace',
      'A subalgebra',
      'An ideal',
      'The whole algebra',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The quotient inherits algebra structure when I is an ideal.'
    }
  ],
  hard: [
    {
      id: 's20-h01',
      question: 'A simple algebra is:',
      options: [
      'Commutative',
      'Has exactly one element',
      'Has no proper two-sided ideals except {0}',
      'Is nilpotent',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A simple algebra has no proper non-zero two-sided ideals.'
    },
    {
      id: 's20-h02',
      question: 'The Wedderburn theorem classifies simple finite-dimensional algebras over algebraically closed fields as:',
      options: ['Polynomial algebras', 'Matrix algebras Mₙ(F)', 'Division algebras', 'Exterior algebras'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Simple finite-dimensional algebras over algebraically closed F are isomorphic to Mₙ(F).'
    },
    {
      id: 's20-h03',
      question: 'A division algebra is:',
      options: [
      'A commutative algebra',
      'A finite algebra',
      'An algebra with zero divisors',
      'An algebra where every non-zero element is a unit',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'In a division algebra, every non-zero element has a multiplicative inverse.'
    },
    {
      id: 's20-h04',
      question: 'The only finite-dimensional division algebras over ℝ are:',
      options: [
      'ℝ, ℂ, and ℍ (quaternions)',
      'Only ℝ',
      'ℝ and ℂ',
      'Infinitely many',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Frobenius theorem: the only finite-dimensional real division algebras are ℝ, ℂ, and ℍ.'
    },
    {
      id: 's20-h05',
      question: 'A nil ideal I satisfies:',
      options: [
      'I = 0',
      'I² = I',
      'I is maximal',
      'Every element of I is nilpotent',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A nil ideal consists entirely of nilpotent elements.'
    },
    {
      id: 's20-h06',
      question: 'The Jacobson radical of an algebra is:',
      options: [
      'The intersection of all maximal left ideals',
      'Always zero',
      'The center',
      'The whole algebra',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Jacobson radical J(A) is the intersection of all maximal left (or right) ideals.'
    }
  ]
};

// Section 21: The Algebra of Polynomials
export const section21Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's21-e01',
      question: 'The degree of the zero polynomial is:',
      options: [
      'Undefined or -∞',
      '0',
      '1',
      '-1',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The zero polynomial has no leading term, so its degree is typically undefined or taken as -∞.'
    },
    {
      id: 's21-e02',
      question: 'If deg(f) = m and deg(g) = n, then deg(fg) equals:',
      options: [
      'max(m, n)',
      'min(m, n)',
      'm + n',
      'mn',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The degree of a product is the sum of degrees: deg(fg) = deg(f) + deg(g).'
    },
    {
      id: 's21-e03',
      question: 'A monic polynomial is one where:',
      options: [
      'All coefficients are 1',
      'The constant term is 1',
      'The degree is 1',
      'The leading coefficient is 1',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A monic polynomial has leading coefficient equal to 1.'
    },
    {
      id: 's21-e04',
      question: 'deg(f + g) is:',
      options: [
      'Always deg(f) + deg(g)',
      'At most max(deg(f), deg(g))',
      'max(deg(f), deg(g))',
      'min(deg(f), deg(g))',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'deg(f + g) ≤ max(deg(f), deg(g)), with equality when deg(f) ≠ deg(g).'
    },
    {
      id: 's21-e05',
      question: 'The set of polynomials of degree ≤ n forms:',
      options: [
      'A subalgebra',
      'An ideal',
      'A field',
      'A subspace (not subalgebra)',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Polynomials of degree ≤ n form a subspace but not a subalgebra (not closed under multiplication).'
    },
    {
      id: 's21-e06',
      question: 'The dimension of the space of polynomials of degree ≤ n over F is:',
      options: [
      'n',
      '2n',
      'Infinite',
      'n + 1',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The space has basis {1, x, x², ..., xⁿ}, which has n + 1 elements.'
    }
  ],
  medium: [
    {
      id: 's21-m01',
      question: 'F[x] is an integral domain, which means:',
      options: [
      'fg = 0 implies f = 0 or g = 0',
      'Every element is invertible',
      'It has characteristic 0',
      'It is finite',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'An integral domain has no zero divisors: the product of non-zero elements is non-zero.'
    },
    {
      id: 's21-m02',
      question: 'F[x] is:',
      options: [
      'A principal ideal domain',
      'A field',
      'Not an integral domain',
      'A finite ring',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'F[x] is a principal ideal domain (PID): every ideal is generated by one element.'
    },
    {
      id: 's21-m03',
      question: 'A polynomial f ∈ F[x] is a unit iff:',
      options: [
      'f = 1',
      'f is monic',
      'f is a non-zero constant',
      'deg(f) = 1',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Units in F[x] are exactly the non-zero constants (elements of F*).'
    },
    {
      id: 's21-m04',
      question: 'The roots of f(x) = x³ - 2 over ℚ are:',
      options: [
      'All in ℚ',
      'One in ℚ',
      'Two in ℚ',
      'None in ℚ',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The real cube root of 2 is irrational, and the complex roots are also not in ℚ.'
    },
    {
      id: 's21-m05',
      question: 'Over a field F, a polynomial of degree n has at most:',
      options: [
      'n² roots',
      'n roots',
      '2n roots',
      'Infinitely many roots',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A non-zero polynomial of degree n over a field has at most n roots.'
    },
    {
      id: 's21-m06',
      question: 'If f divides g and g divides f in F[x], then:',
      options: [
      'f = g',
      'f = 0',
      'g = 0',
      'f and g differ by a non-zero scalar',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'f | g and g | f implies f and g are associates, differing by a unit (non-zero scalar).'
    }
  ],
  hard: [
    {
      id: 's21-h01',
      question: 'The formal derivative of xⁿ in characteristic p > 0 is:',
      options: [
      'nxⁿ⁻¹ always',
      'Undefined',
      'xⁿ',
      '0 if p | n',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'In characteristic p, the derivative of xⁿ is nxⁿ⁻¹, which is 0 when p divides n.'
    },
    {
      id: 's21-h02',
      question: 'A polynomial f has a repeated root iff:',
      options: [
      'gcd(f, f\\') ≠ 1',
      'deg(f) > 1',
      'f is monic',
      'f is irreducible',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'f has a repeated root iff gcd(f, f\') is non-constant.'
    },
    {
      id: 's21-h03',
      question: 'A separable polynomial is one:',
      options: [
      'With no roots',
      'Of degree 1',
      'With real coefficients',
      'With no repeated roots in any extension',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Separable means no repeated roots in any field extension (algebraic closure).'
    },
    {
      id: 's21-h04',
      question: 'Over a perfect field, every irreducible polynomial is:',
      options: [
      'Linear',
      'Monic',
      'Separable',
      'Of even degree',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'In a perfect field (like ℚ, ℝ, ℂ, or finite fields), all irreducibles are separable.'
    },
    {
      id: 's21-h05',
      question: 'The content of a polynomial in ℤ[x] is:',
      options: [
      'Its degree',
      'Its leading coefficient',
      'The gcd of its coefficients',
      'Its constant term',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The content is the gcd of all coefficients; primitive polynomials have content 1.'
    },
    {
      id: 's21-h06',
      question: 'Gauss\'s lemma states that the product of primitive polynomials is:',
      options: [
      'Monic',
      'Irreducible',
      'Primitive',
      'Zero',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Gauss\'s lemma: the product of primitive polynomials in ℤ[x] is primitive.'
    }
  ]
};

// Section 22: Lagrange Interpolation
export const section22Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's22-e01',
      question: 'Interpolation finds a polynomial passing through:',
      options: [
      'Given data points',
      'No points',
      'Only one point',
      'Infinitely many points',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Interpolation constructs a polynomial that passes through specified data points.'
    },
    {
      id: 's22-e02',
      question: 'To interpolate n+1 points, we typically use a polynomial of degree at most:',
      options: [
      'n',
      'n - 1',
      'n + 1',
      '2n',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'n+1 points uniquely determine a polynomial of degree at most n.'
    },
    {
      id: 's22-e03',
      question: 'If two polynomials of degree ≤ n agree at n+1 points, they are:',
      options: [
      'Equal',
      'Different',
      'Orthogonal',
      'Independent',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Their difference has degree ≤ n but n+1 roots, so it must be zero.'
    },
    {
      id: 's22-e04',
      question: 'The Lagrange basis polynomial Lⱼ(tⱼ) equals:',
      options: [
      '0',
      '1',
      'j',
      'n',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Lⱼ is constructed so that Lⱼ(tⱼ) = 1 and Lⱼ(tᵢ) = 0 for i ≠ j.'
    },
    {
      id: 's22-e05',
      question: 'The interpolating polynomial through (0,1), (1,2), (2,5) has degree at most:',
      options: [
      '0',
      '1',
      '2',
      '3',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Three points determine a polynomial of degree at most 2.'
    },
    {
      id: 's22-e06',
      question: 'Lagrange interpolation works over:',
      options: [
      'Only ℝ',
      'Only ℂ',
      'Only finite fields',
      'Any field',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The construction works over any field where the interpolation points are distinct.'
    }
  ],
  medium: [
    {
      id: 's22-m01',
      question: 'Given n+1 distinct points (t₀, c₀), ..., (tₙ, cₙ), there exists a unique polynomial of degree ≤ n passing through them. This is:',
      options: [
      'Lagrange interpolation theorem',
      'Always false',
      'Only true for n = 1',
      'Only true over ℝ',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Lagrange interpolation guarantees existence and uniqueness of an interpolating polynomial of degree ≤ n.'
    },
    {
      id: 's22-m02',
      question: 'The Lagrange interpolation formula uses polynomials Lⱼ(x) that satisfy:',
      options: [
      'Lⱼ(tᵢ) = 1 for all i',
      'Lⱼ(x) = xʲ',
      'Lⱼ(tᵢ) = δᵢⱼ',
      'Lⱼ(tⱼ) = 0',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The Lagrange basis polynomials satisfy Lⱼ(tᵢ) = 1 if i = j, and 0 otherwise.'
    },
    {
      id: 's22-m03',
      question: 'If a polynomial f of degree n has n+1 distinct roots, then:',
      options: [
      'f has more roots',
      'f = 1',
      'This is impossible',
      'f is the zero polynomial',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'A non-zero polynomial of degree n has at most n roots, so n+1 roots implies f = 0.'
    },
    {
      id: 's22-m04',
      question: 'The Vandermonde matrix for interpolation is invertible iff:',
      options: [
      'The interpolation points are distinct',
      'All values are 0',
      'n = 1',
      'The matrix is square',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The Vandermonde matrix det is ∏(tⱼ - tᵢ) for i < j, non-zero iff points are distinct.'
    },
    {
      id: 's22-m05',
      question: 'Newton\'s divided differences provide:',
      options: [
      'The same polynomial in a different form',
      'A different polynomial than Lagrange',
      'An approximation',
      'Only linear interpolation',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Newton\'s method gives the same unique polynomial but in a form easier to update.'
    },
    {
      id: 's22-m06',
      question: 'The error in polynomial interpolation depends on:',
      options: [
      'The spacing of nodes and higher derivatives of f',
      'Only the degree',
      'Only the number of points',
      'Nothing',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Interpolation error involves the (n+1)th derivative and product of (x - tᵢ) terms.'
    }
  ],
  hard: [
    {
      id: 's22-h01',
      question: 'Chebyshev nodes minimize:',
      options: [
      'The degree',
      'Computation time',
      'The number of points',
      'The maximum interpolation error (Runge phenomenon)',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Chebyshev nodes minimize the maximum of |∏(x - tᵢ)|, reducing Runge phenomenon.'
    },
    {
      id: 's22-h02',
      question: 'The Runge phenomenon refers to:',
      options: [
      'Fast convergence',
      'Numerical instability',
      'Perfect interpolation',
      'Oscillation at endpoints with equally spaced nodes',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Runge phenomenon: high-degree polynomial interpolation can oscillate wildly at endpoints.'
    },
    {
      id: 's22-h03',
      question: 'Hermite interpolation extends Lagrange by also matching:',
      options: [
      'Only function values',
      'Integrals',
      'Fourier coefficients',
      'Derivatives at interpolation points',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Hermite interpolation matches both function values and derivative values.'
    },
    {
      id: 's22-h04',
      question: 'The Lⱼ(x) in Lagrange interpolation have degree:',
      options: [
      'n',
      'j',
      'n - 1',
      '1',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Each Lⱼ is the product of n linear factors, so deg(Lⱼ) = n.'
    },
    {
      id: 's22-h05',
      question: 'Barycentric form of Lagrange interpolation is:',
      options: ['Numerically unstable', 'O(n²) to evaluate', 'O(n) to evaluate after preprocessing', 'Inexact'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Barycentric Lagrange interpolation achieves O(n) evaluation with O(n) preprocessing.'
    },
    {
      id: 's22-h06',
      question: 'In finite fields, interpolation through |F| points determines:',
      options: [
      'A unique polynomial of any degree',
      'No polynomial',
      'The zero polynomial',
      'A polynomial of degree < |F|',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Over a field of size q, a polynomial is determined by its values at all q points up to degree q-1.'
    }
  ]
};

// Section 23: Polynomial Ideals
export const section23Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's23-e01',
      question: 'An ideal I in F[x] is a subset closed under:',
      options: [
      'Only addition',
      'Only multiplication',
      'Addition and multiplication by any polynomial',
      'Nothing',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'An ideal is closed under addition and multiplication by any ring element.'
    },
    {
      id: 's23-e02',
      question: 'The ideal (x) in F[x] consists of:',
      options: [
      'All polynomials',
      'Polynomials with zero constant term',
      'Only x',
      'Only constants',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '(x) = xF[x] = all multiples of x, which are polynomials with zero constant term.'
    },
    {
      id: 's23-e03',
      question: 'A principal ideal is generated by:',
      options: [
      'No elements',
      'One element',
      'Two elements',
      'Infinitely many elements',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A principal ideal has the form (g) = {fg : f ∈ R} for some generator g.'
    },
    {
      id: 's23-e04',
      question: 'The ideal (0) in F[x] contains:',
      options: [
      'All polynomials',
      'All constants',
      'Only monic polynomials',
      'Only 0',
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The zero ideal contains only the zero polynomial.'
    },
    {
      id: 's23-e05',
      question: 'F[x] itself is an ideal generated by:',
      options: [
      '0',
      '1',
      'x',
      'x²',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: '(1) = F[x] since every polynomial is 1 times itself.'
    },
    {
      id: 's23-e06',
      question: 'In F[x], f ∈ (g) means:',
      options: [
      'f = g',
      'f divides g',
      'g divides f',
      'f and g are equal',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'f ∈ (g) means f = hg for some h, i.e., g divides f.'
    }
  ],
  medium: [
    {
      id: 's23-m01',
      question: 'An ideal I in F[x] is principal, meaning:',
      options: [
      'I = (g) for some polynomial g',
      'I contains only constants',
      'I is the whole ring',
      'I is empty',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Every ideal in F[x] is principal: I = (g) = {fg : f ∈ F[x]} for some g.'
    },
    {
      id: 's23-m02',
      question: 'The division algorithm in F[x] states that for f, g with g ≠ 0:',
      options: [
      'f = qg for some q',
      'f/g is a polynomial',
      'f = g + r',
      'f = qg + r with deg(r) < deg(g)',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'f = qg + r where q is the quotient and r is the remainder with deg(r) < deg(g).'
    },
    {
      id: 's23-m03',
      question: 'f and g are relatively prime (coprime) iff:',
      options: [
      'f divides g',
      'gcd(f, g) = 1 (a non-zero constant)',
      'g divides f',
      'fg = 0',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Relatively prime means gcd(f, g) is a unit (non-zero constant), typically normalized to 1.'
    },
    {
      id: 's23-m04',
      question: 'The Euclidean algorithm applied to polynomials finds:',
      options: [
      'Their greatest common divisor',
      'Their product',
      'Their sum',
      'Their least common multiple',
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The Euclidean algorithm computes gcd(f, g) via repeated division.'
    },
    {
      id: 's23-m05',
      question: '(f) ⊆ (g) in F[x] iff:',
      options: [
      'f = g',
      'f divides g',
      'deg(f) < deg(g)',
      'g divides f',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '(f) ⊆ (g) iff every multiple of f is a multiple of g, iff g | f.'
    },
    {
      id: 's23-m06',
      question: 'The ideal (f, g) in F[x] equals:',
      options: [
      '(f) ∩ (g)',
      '(gcd(f, g))',
      '(f) + (g)',
      '(fg)',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'In a PID, (f, g) = (gcd(f, g)).'
    }
  ],
  hard: [
    {
      id: 's23-h01',
      question: 'The greatest common divisor gcd(f, g) can be written as:',
      options: [
      'af + bg for some polynomials a, b',
      'fg',
      'f + g',
      'f/g',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Bézout\'s identity: gcd(f, g) = af + bg for some polynomials a, b.'
    },
    {
      id: 's23-h02',
      question: 'An ideal I in F[x] is maximal iff:',
      options: ['I = F[x]', 'I = (p) for irreducible p', 'I = (0)', 'I is finite'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Maximal ideals in F[x] are exactly (p) for irreducible polynomials p.'
    },
    {
      id: 's23-h03',
      question: 'F[x]/(p) is a field iff:',
      options: [
      'p = 0',
      'p is a unit',
      'p is irreducible',
      'deg(p) = 1',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'F[x]/(p) is a field iff (p) is maximal iff p is irreducible.'
    },
    {
      id: 's23-h04',
      question: 'The Chinese Remainder Theorem for F[x] applies when:',
      options: [
      'f and g share a root',
      'f = g',
      'f and g are irreducible',
      'gcd(f, g) = 1',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'CRT: F[x]/(fg) ≅ F[x]/(f) × F[x]/(g) when gcd(f, g) = 1.'
    },
    {
      id: 's23-h05',
      question: 'The number of monic irreducible polynomials of degree n over 𝔽_q is approximately:',
      options: [
      'qⁿ/n',
      'q',
      'n',
      '1',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'There are approximately qⁿ/n monic irreducibles of degree n over 𝔽_q.'
    },
    {
      id: 's23-h06',
      question: 'The sum (f) + (g) of ideals equals:',
      options: [
      '(f + g)',
      '(fg)',
      '(gcd(f, g))',
      '(lcm(f, g))',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '(f) + (g) = {af + bg : a, b ∈ F[x]} = (gcd(f, g)).'
    }
  ]
};

// Section 24: The Prime Factorization of a Polynomial
export const section24Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's24-e01',
      question: 'A polynomial is irreducible if it cannot be factored into:',
      options: [
      'Any factors',
      'Lower-degree polynomial factors over the field',
      'Real factors',
      'Integer factors',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Irreducible means no factorization into polynomials of smaller degree over the given field.'
    },
    {
      id: 's24-e02',
      question: 'Over any field, polynomials of degree 1 are:',
      options: [
      'Reducible',
      'Irreducible',
      'Zero',
      'Units',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Linear polynomials (degree 1) are always irreducible.'
    },
    {
      id: 's24-e03',
      question: 'x² - 1 over ℝ factors as:',
      options: [
      '(x-1)(x+1)',
      'Irreducible',
      '(x-i)(x+i)',
      'x·x - 1',
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'x² - 1 = (x - 1)(x + 1) over any field containing 1 and -1.'
    },
    {
      id: 's24-e04',
      question: 'Over ℂ, every irreducible polynomial has degree:',
      options: [
      '0',
      '2',
      '1',
      'Any degree',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'By the fundamental theorem of algebra, every non-constant polynomial over ℂ has a root, so irreducibles have degree 1.'
    },
    {
      id: 's24-e05',
      question: 'x² + 1 is irreducible over:',
      options: [
      'ℂ',
      'Neither',
      'ℝ',
      'Both',
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'x² + 1 is irreducible over ℝ (no real roots) but factors as (x-i)(x+i) over ℂ.'
    },
    {
      id: 's24-e06',
      question: 'The number of irreducible factors of f (counting multiplicity) is called:',
      options: [
      'The degree',
      'The total degree or length',
      'The content',
      'The norm',
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The sum of multiplicities of irreducible factors is sometimes called the length.'
    }
  ],
  medium: [
    {
      id: 's24-m01',
      question: 'A polynomial p is irreducible over F if:',
      options: ['p has degree 1', 'p cannot be factored as a product of lower-degree polynomials over F', 'p has no roots', 'p is monic'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'p is irreducible if it\'s non-constant and its only factorizations are p = (unit)·(associate).'
    },
    {
      id: 's24-m02',
      question: 'Unique factorization in F[x] means:',
      options: [
      'Every polynomial has a factorization',
      'Only monic polynomials factor',
      'Factorization is never unique',
      'Factorization into irreducibles is unique up to order and units',
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Unique factorization: every non-zero polynomial factors uniquely into irreducibles (up to order and unit factors).'
    },
    {
      id: 's24-m03',
      question: 'Over ℝ, irreducible polynomials have degree:',
      options: [
      'Only 1',
      'Only 2',
      '1 or 2',
      'Any degree',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Over ℝ, irreducibles are linear or irreducible quadratics (with negative discriminant).'
    },
    {
      id: 's24-m04',
      question: 'x² + x + 1 is irreducible over:',
      options: [
      'Only ℝ',
      'ℚ and ℝ but not ℂ',
      'ℚ, ℝ, and ℂ',
      'No field',
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'x² + x + 1 has no rational or real roots (discriminant < 0), but factors over ℂ.'
    },
    {
      id: 's24-m05',
      question: 'Eisenstein\'s criterion helps determine:',
      options: ['Roots of polynomials', 'Irreducibility over ℚ', 'Factorizations over ℝ', 'The degree'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Eisenstein\'s criterion gives a sufficient condition for irreducibility over ℚ.'
    },
    {
      id: 's24-m06',
      question: 'The polynomial xⁿ - 2 is irreducible over ℚ by:',
      options: [
      'Degree argument',
      'Root counting',
      'Eisenstein with p = 2',
      'Factorization',
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Eisenstein\'s criterion with prime p = 2 shows xⁿ - 2 is irreducible over ℚ.'
    }
  ],
  hard: [
    {
      id: 's24-h01',
      question: 'The cyclotomic polynomial Φₙ(x) is:',
      options: [
      'The minimal polynomial of primitive n-th roots of unity over ℚ',
      'Always reducible',
      'xⁿ - 1',
      'Of degree n',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Φₙ(x) is the irreducible polynomial whose roots are primitive n-th roots of unity.'
    },
    {
      id: 's24-h02',
      question: 'The degree of Φₙ(x) equals:',
      options: ['n', 'n - 1', 'φ(n) (Euler\'s totient)', 'n/2'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'deg(Φₙ) = φ(n), the number of integers 1 ≤ k ≤ n with gcd(k, n) = 1.'
    },
    {
      id: 's24-h03',
      question: 'Over a finite field 𝔽_q, irreducible polynomials exist for:',
      options: [
      'Only degree 1',
      'Only prime degrees',
      'No degrees',
      'Every positive degree',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Irreducible polynomials of every degree exist over any finite field.'
    },
    {
      id: 's24-h04',
      question: 'The splitting field of f over F is:',
      options: [
      'F itself',
      'The algebraic closure',
      'The field of coefficients',
      'The smallest extension of F containing all roots of f',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The splitting field is the minimal extension where f factors completely into linear factors.'
    },
    {
      id: 's24-h05',
      question: 'An irreducible polynomial f ∈ F[x] defines a field extension F[x]/(f) of degree:',
      options: [
      '1',
      '2·deg(f)',
      'deg(f)',
      'Infinite',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'F[x]/(f) is a field of dimension deg(f) over F when f is irreducible.'
    },
    {
      id: 's24-h06',
      question: 'Reducibility of a polynomial can depend on:',
      options: [
      'The base field',
      'Only the polynomial itself',
      'Only the degree',
      'Only the leading coefficient',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'A polynomial may be irreducible over ℚ but reducible over ℝ or ℂ.'
    }
  ]
};

// Chapter 4 Comprehensive Quiz
export const chapter04Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch04-h01',
      question: 'F[x] is:',
      options: [
      'A principal ideal domain',
      'A field',
      'Not an integral domain',
      'A finite ring',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'F[x] is a principal ideal domain (PID): every ideal is generated by one element.'
    },
    {
      id: 'ch04-h02',
      question: 'x² + 1 is irreducible over:',
      options: [
      'ℂ',
      'Both ℂ and ℝ',
      'ℝ',
      'Neither',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'x² + 1 is irreducible over ℝ (no real roots) but factors as (x-i)(x+i) over ℂ.'
    },
    {
      id: 'ch04-h03',
      question: 'If f divides g and g divides f in F[x], then:',
      options: [
      'f = g',
      'f = 0',
      'g = 0',
      'f and g differ by a non-zero scalar',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'f | g and g | f implies f and g are associates, differing by a unit (non-zero scalar).'
    },
    {
      id: 'ch04-h04',
      question: 'The roots of f(x) = x³ - 2 over ℚ are:',
      options: [
      'All in ℚ',
      'None in ℚ',
      'One in ℚ',
      'Two in ℚ',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The real cube root of 2 is irrational, and the complex roots are also not in ℚ.'
    },
    {
      id: 'ch04-h05',
      question: 'The ideal generated by x and 2 in ℤ[x] contains:',
      options: ['Only multiples of 2x', 'All polynomials with even constant term', 'All of ℤ[x]', 'Only x and 2'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '(x, 2) = {fx + 2g : f, g ∈ ℤ[x]} consists of polynomials with even constant term.'
    },
    {
      id: 'ch04-h06',
      question: 'The greatest common divisor gcd(f, g) can be written as:',
      options: ['fg', 'f + g', 'af + bg for some polynomials a, b', 'f/g'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Bézout\'s identity: gcd(f, g) = af + bg for some polynomials a, b.'
    },
    {
      id: 'ch04-h07',
      question: 'Unique factorization in F[x] means:',
      options: [
      'Every polynomial has a factorization',
      'Only monic polynomials factor',
      'Factorization into irreducibles is unique up to order and units',
      'Factorization is never unique',
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Unique factorization: every non-zero polynomial factors uniquely into irreducibles (up to order and unit factors).'
    },
    {
      id: 'ch04-h08',
      question: 'Over ℝ, irreducible polynomials have degree:',
      options: [
      'Only 1',
      '1 or 2',
      'Only 2',
      'Any degree',
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Over ℝ, irreducibles are linear or irreducible quadratics (with negative discriminant).'
    },
    {
      id: 'ch04-h09',
      question: 'The division algorithm in F[x] states that for f, g with g ≠ 0:',
      options: [
      'f = qg + r with deg(r) < deg(g)',
      'f = qg for some q',
      'f/g is a polynomial',
      'f = g + r',
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'f = qg + r where q is the quotient and r is the remainder with deg(r) < deg(g).'
    },
    {
      id: 'ch04-h10',
      question: 'A polynomial f ∈ F[x] is a unit iff:',
      options: [
      'f = 1',
      'f is monic',
      'deg(f) = 1',
      'f is a non-zero constant',
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Units in F[x] are exactly the non-zero constants (elements of F*).'
    }
  ]
};
