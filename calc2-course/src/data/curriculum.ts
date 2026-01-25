// =============================================================================
// CURRICULUM STRUCTURE
// =============================================================================
// Calculus II (Apostol) - Based on Tom M. Apostol's "Calculus, Volume II"
// Multi-Variable Calculus and Linear Algebra, with Applications to
// Differential Equations and Probability (Second Edition)
// =============================================================================

/**
 * Individual section within a part
 */
export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

/**
 * Part containing multiple sections
 */
export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

/**
 * Complete curriculum structure
 * 15 Parts (one per textbook chapter), organized into 3 major divisions:
 * - Part 1: Linear Analysis (Chapters 1-7)
 * - Part 2: Nonlinear Analysis (Chapters 8-12)
 * - Part 3: Special Topics (Chapters 13-15)
 *
 * Total: 191 sections (0-190)
 * - Chapters 1-14: Sections 0-180 (COMPLETE)
 * - Chapter 15: Sections 181-190 (TO BE CREATED)
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // PART 1: LINEAR ANALYSIS
  // ==========================================================================

  // Chapter 1: Linear Spaces (Sections 0-9)
  {
    id: 1,
    title: '1. Linear Spaces',
    slug: 'linear-spaces',
    sections: [
      {
        id: 0,
        title: 'Introduction to Linear Spaces',
        slug: 'intro-linear-spaces',
        description: 'Introduction and the definition of a linear space with its axioms.',
      },
      {
        id: 1,
        title: 'Examples of Linear Spaces',
        slug: 'examples-linear-spaces',
        description: 'Concrete examples: real numbers, complex numbers, n-tuples, function spaces.',
      },
      {
        id: 2,
        title: 'Elementary Consequences of the Axioms',
        slug: 'axiom-consequences',
        description: 'Uniqueness of zero element, uniqueness of negatives, and algebraic properties.',
      },
      {
        id: 3,
        title: 'Subspaces of a Linear Space',
        slug: 'subspaces',
        description: 'Subspaces, linear span, and the subspace spanned by a set.',
      },
      {
        id: 4,
        title: 'Dependent and Independent Sets in a Linear Space',
        slug: 'dependence-independence',
        description: 'Linear dependence, independence, and theorems about independent sets.',
      },
      {
        id: 5,
        title: 'Bases and Dimension',
        slug: 'bases-dimension',
        description: 'Finite bases, dimension of a linear space, and components.',
      },
      {
        id: 6,
        title: 'Inner Products and Euclidean Spaces',
        slug: 'inner-products',
        description: 'Inner products, norms, Euclidean spaces, and the Cauchy-Schwarz inequality.',
      },
      {
        id: 7,
        title: 'Orthogonality in Euclidean Spaces',
        slug: 'orthogonality',
        description: 'Orthogonal vectors, orthogonal sets, and orthonormal sets.',
      },
      {
        id: 8,
        title: 'The Gram-Schmidt Process',
        slug: 'gram-schmidt',
        description: 'Constructing orthogonal sets, the Gram-Schmidt orthogonalization process.',
      },
      {
        id: 9,
        title: 'Orthogonal Complements and Projections',
        slug: 'projections',
        description: 'Orthogonal complements, projections, and best approximation.',
      },
    ],
  },

  // Chapter 2: Linear Transformations and Matrices (Sections 10-19)
  {
    id: 2,
    title: '2. Linear Transformations and Matrices',
    slug: 'linear-transformations-matrices',
    sections: [
      {
        id: 10,
        title: 'Linear Transformations',
        slug: 'linear-transformations',
        description: 'Definition of linear transformations, null space, and range.',
      },
      {
        id: 11,
        title: 'Nullity and Rank',
        slug: 'nullity-rank',
        description: 'Nullity, rank, and the dimension theorem for linear transformations.',
      },
      {
        id: 12,
        title: 'Algebraic Operations on Linear Transformations',
        slug: 'operations-transformations',
        description: 'Addition, scalar multiplication, and composition of linear transformations.',
      },
      {
        id: 13,
        title: 'Inverses and One-to-One Transformations',
        slug: 'inverses',
        description: 'Inverse transformations and one-to-one linear transformations.',
      },
      {
        id: 14,
        title: 'Matrix Representations',
        slug: 'matrix-representations',
        description: 'Representing linear transformations with matrices, diagonal form.',
      },
      {
        id: 15,
        title: 'Linear Spaces of Matrices',
        slug: 'matrix-spaces',
        description: 'Matrices as elements of linear spaces, isomorphism with transformations.',
      },
      {
        id: 16,
        title: 'Matrix Multiplication',
        slug: 'matrix-multiplication',
        description: 'Multiplication of matrices and its properties.',
      },
      {
        id: 17,
        title: 'Systems of Linear Equations',
        slug: 'linear-systems',
        description: 'Solving systems of linear equations using matrices.',
      },
      {
        id: 18,
        title: 'Computation Techniques',
        slug: 'computation-techniques',
        description: 'Gaussian elimination and row reduction techniques.',
      },
      {
        id: 19,
        title: 'Inverses of Square Matrices',
        slug: 'matrix-inverses',
        description: 'Computing inverse matrices and their properties.',
      },
    ],
  },

  // Chapter 3: Determinants (Sections 20-25)
  {
    id: 3,
    title: '3. Determinants',
    slug: 'determinants',
    sections: [
      {
        id: 20,
        title: 'Introduction to Determinants',
        slug: 'intro-determinants',
        description: 'Motivation and axioms for determinant functions.',
      },
      {
        id: 21,
        title: 'Axioms for a Determinant Function',
        slug: 'determinant-axioms',
        description: 'The three axioms that define a determinant function.',
      },
      {
        id: 22,
        title: 'Computation of Determinants',
        slug: 'computing-determinants',
        description: 'Computing determinants using row operations.',
      },
      {
        id: 23,
        title: 'The Uniqueness Theorem and Product Formula',
        slug: 'uniqueness-product',
        description: 'Uniqueness of determinant and the product formula det(AB) = det(A)det(B).',
      },
      {
        id: 24,
        title: 'Cofactor Expansion and the Transpose',
        slug: 'cofactor-transpose',
        description: 'Expansion by cofactors and determinant of the transpose.',
      },
      {
        id: 25,
        title: "Cofactor Matrix and Cramer's Rule",
        slug: 'cramers-rule',
        description: "The cofactor matrix and Cramer's rule for solving systems.",
      },
    ],
  },

  // Chapter 4: Eigenvalues and Eigenvectors (Sections 26-31)
  {
    id: 4,
    title: '4. Eigenvalues and Eigenvectors',
    slug: 'eigenvalues-eigenvectors',
    sections: [
      {
        id: 26,
        title: 'Eigenvalues and Eigenvectors',
        slug: 'eigen-definition',
        description: 'Definition of eigenvectors and eigenvalues, linear independence.',
      },
      {
        id: 27,
        title: 'The Characteristic Polynomial',
        slug: 'characteristic-polynomials',
        description: 'Characteristic polynomials in finite-dimensional spaces.',
      },
      {
        id: 28,
        title: 'Calculating Eigenvalues and Eigenvectors',
        slug: 'calculating-eigenvalues',
        description: 'Computing eigenvalues and eigenvectors from the characteristic polynomial.',
      },
      {
        id: 29,
        title: 'Similar Matrices',
        slug: 'similar-matrices',
        description: 'Matrices representing the same transformation, similarity.',
      },
      {
        id: 30,
        title: 'Properties of the Trace',
        slug: 'trace-properties',
        description: 'The trace of a matrix and its properties.',
      },
      {
        id: 31,
        title: 'Applications and Further Properties of Eigenvalues',
        slug: 'eigen-applications',
        description: 'Applications of eigenvalues and additional properties.',
      },
    ],
  },

  // Chapter 5: Eigenvalues of Operators on Euclidean Spaces (Sections 32-43)
  {
    id: 5,
    title: '5. Eigenvalues on Euclidean Spaces',
    slug: 'eigenvalues-euclidean',
    sections: [
      {
        id: 32,
        title: 'Eigenvalues and Inner Products',
        slug: 'eigen-inner-products',
        description: 'Relationship between eigenvalues and inner products.',
      },
      {
        id: 33,
        title: 'Hermitian and Skew-Hermitian Transformations',
        slug: 'hermitian-transformations',
        description: 'Hermitian and skew-Hermitian transformations and their properties.',
      },
      {
        id: 34,
        title: 'Eigenvalues of Hermitian and Skew-Hermitian Operators',
        slug: 'hermitian-eigenvalues',
        description: 'Eigenvalues of Hermitian operators are real; skew-Hermitian are purely imaginary.',
      },
      {
        id: 35,
        title: 'Orthogonality of Eigenvectors',
        slug: 'orthogonal-eigenvectors',
        description: 'Eigenvectors of Hermitian operators for distinct eigenvalues are orthogonal.',
      },
      {
        id: 36,
        title: 'Existence of Orthonormal Eigenvectors',
        slug: 'orthonormal-eigenvectors',
        description: 'Every Hermitian operator has an orthonormal basis of eigenvectors.',
      },
      {
        id: 37,
        title: 'Matrix Representations for Hermitian Operators',
        slug: 'hermitian-matrix-rep',
        description: 'Matrix representations of Hermitian operators.',
      },
      {
        id: 38,
        title: 'Hermitian and Skew-Hermitian Matrices',
        slug: 'hermitian-matrices',
        description: 'Matrix characterization of Hermitian and skew-Hermitian operators.',
      },
      {
        id: 39,
        title: 'The Adjoint of a Matrix',
        slug: 'adjoint-matrix',
        description: 'The adjoint (conjugate transpose) of a matrix.',
      },
      {
        id: 40,
        title: 'Diagonalization of Hermitian Matrices',
        slug: 'diagonalization-hermitian',
        description: 'Diagonalization of Hermitian matrices by unitary similarity.',
      },
      {
        id: 41,
        title: 'Unitary Matrices',
        slug: 'unitary-matrices',
        description: 'Unitary matrices and their properties.',
      },
      {
        id: 42,
        title: 'Orthogonal Matrices',
        slug: 'orthogonal-matrices',
        description: 'Orthogonal matrices as the real case of unitary matrices.',
      },
      {
        id: 43,
        title: 'Quadratic Forms',
        slug: 'quadratic-forms',
        description: 'Quadratic forms and reduction to diagonal form.',
      },
    ],
  },

  // Chapter 6: Linear Differential Equations (Sections 44-62)
  {
    id: 6,
    title: '6. Linear Differential Equations',
    slug: 'linear-differential-equations',
    sections: [
      {
        id: 44,
        title: 'Historical Introduction to Differential Equations',
        slug: 'ode-history',
        description: 'Historical development of differential equations.',
      },
      {
        id: 45,
        title: 'Review: Linear Equations of First Order',
        slug: 'first-order-review',
        description: 'Review of first-order linear differential equations.',
      },
      {
        id: 46,
        title: 'Review: Second-Order Equations with Constant Coefficients',
        slug: 'second-order-review',
        description: 'Review of second-order linear equations with constant coefficients.',
      },
      {
        id: 47,
        title: 'Linear Differential Equations of Order n',
        slug: 'order-n-equations',
        description: 'Linear differential equations of order n, existence and uniqueness.',
      },
      {
        id: 48,
        title: 'The Existence-Uniqueness Theorem',
        slug: 'existence-uniqueness',
        description: 'Existence and uniqueness theorem for linear differential equations.',
      },
      {
        id: 49,
        title: 'Dimension of the Solution Space',
        slug: 'solution-space',
        description: 'Dimension of the solution space for homogeneous equations.',
      },
      {
        id: 50,
        title: 'The Algebra of Constant-Coefficient Operators',
        slug: 'constant-coefficient',
        description: 'Algebra of constant-coefficient differential operators.',
      },
      {
        id: 51,
        title: 'Finding Solutions by Factorization',
        slug: 'operator-factorization',
        description: 'Finding solutions by factorization of operators.',
      },
      {
        id: 52,
        title: 'Repeated Roots',
        slug: 'repeated-roots',
        description: 'Solutions when the characteristic equation has repeated roots.',
      },
      {
        id: 53,
        title: 'Complex Roots',
        slug: 'complex-roots',
        description: 'Solutions when the characteristic equation has complex roots.',
      },
      {
        id: 54,
        title: 'Nonhomogeneous Equations',
        slug: 'nonhomogeneous',
        description: 'Relationship between homogeneous and nonhomogeneous equations.',
      },
      {
        id: 55,
        title: 'Variation of Parameters',
        slug: 'variation-parameters',
        description: 'Method of variation of parameters.',
      },
      {
        id: 56,
        title: 'The Wronskian',
        slug: 'wronskian',
        description: 'Wronskian matrix and independence of solutions.',
      },
      {
        id: 57,
        title: 'The Annihilator Method',
        slug: 'annihilator-method',
        description: 'Annihilator method for particular solutions.',
      },
      {
        id: 58,
        title: 'Power Series Solutions',
        slug: 'power-series-solutions',
        description: 'Power series solutions of differential equations.',
      },
      {
        id: 59,
        title: 'The Legendre Equation',
        slug: 'legendre-equation',
        description: 'The Legendre equation and its solutions.',
      },
      {
        id: 60,
        title: 'Legendre Polynomials',
        slug: 'legendre-polynomials',
        description: 'Properties and applications of Legendre polynomials.',
      },
      {
        id: 61,
        title: 'The Method of Frobenius',
        slug: 'frobenius-method',
        description: 'Power series solutions and the method of Frobenius.',
      },
      {
        id: 62,
        title: 'The Bessel Equation',
        slug: 'bessel-equation',
        description: 'The Bessel equation and Bessel functions.',
      },
    ],
  },

  // Chapter 7: Systems of Differential Equations (Sections 63-76)
  {
    id: 7,
    title: '7. Systems of Differential Equations',
    slug: 'systems-differential-equations',
    sections: [
      {
        id: 63,
        title: 'Introduction to Systems of Differential Equations',
        slug: 'systems-intro',
        description: 'Introduction to systems of differential equations.',
      },
      {
        id: 64,
        title: 'Calculus of Matrix Functions',
        slug: 'matrix-functions',
        description: 'Calculus of matrix functions and matrix norms.',
      },
      {
        id: 65,
        title: 'The Matrix Exponential',
        slug: 'matrix-exponential',
        description: 'Infinite series of matrices and the exponential matrix.',
      },
      {
        id: 66,
        title: 'Uniqueness Theorem for Matrix Differential Equations',
        slug: 'matrix-uniqueness',
        description: 'Uniqueness theorem for matrix differential equations.',
      },
      {
        id: 67,
        title: 'The Law of Exponents for Matrix Exponentials',
        slug: 'matrix-exp-law',
        description: 'Law of exponents for matrix exponentials.',
      },
      {
        id: 68,
        title: 'Existence and Uniqueness for Homogeneous Systems',
        slug: 'homogeneous-systems',
        description: 'Existence and uniqueness for homogeneous systems with constant coefficients.',
      },
      {
        id: 69,
        title: 'Computing the Matrix Exponential',
        slug: 'computing-exp-matrix',
        description: 'Methods for calculating the exponential matrix.',
      },
      {
        id: 70,
        title: 'The Cayley-Hamilton Theorem',
        slug: 'cayley-hamilton',
        description: 'The Cayley-Hamilton theorem and its applications.',
      },
      {
        id: 71,
        title: "Putzer's Method for Computing e^tA",
        slug: 'putzers-method',
        description: "Putzer's method for computing exponential matrices.",
      },
      {
        id: 72,
        title: 'Alternate Methods for Computing e^tA',
        slug: 'alternate-exp-methods',
        description: 'Alternative methods for computing the matrix exponential.',
      },
      {
        id: 73,
        title: 'Nonhomogeneous Linear Systems with Constant Coefficients',
        slug: 'nonhomogeneous-systems',
        description: 'Nonhomogeneous linear systems with constant coefficients.',
      },
      {
        id: 74,
        title: 'The General Linear System with Variable Coefficients',
        slug: 'variable-coefficients',
        description: 'General linear systems with variable coefficients.',
      },
      {
        id: 75,
        title: 'Power Series Methods for Linear Systems',
        slug: 'power-series-systems',
        description: 'Power series methods for solving homogeneous systems.',
      },
      {
        id: 76,
        title: 'Existence and Uniqueness by Successive Approximations',
        slug: 'successive-approximations',
        description: 'Proof of existence theorem by successive approximations.',
      },
    ],
  },

  // ==========================================================================
  // PART 2: NONLINEAR ANALYSIS
  // ==========================================================================

  // Chapter 8: Differential Calculus of Scalar and Vector Fields (Sections 77-90)
  {
    id: 8,
    title: '8. Differential Calculus of Fields',
    slug: 'differential-calculus-fields',
    sections: [
      {
        id: 77,
        title: 'Functions from R^n to R^m: Scalar and Vector Fields',
        slug: 'functions-rn-rm',
        description: 'Scalar and vector fields, basic definitions.',
      },
      {
        id: 78,
        title: 'Open Balls and Open Sets',
        slug: 'open-sets',
        description: 'Open balls, open sets, and topology in R^n.',
      },
      {
        id: 79,
        title: 'Limits and Continuity in R^n',
        slug: 'limits-continuity',
        description: 'Limits and continuity for functions of several variables.',
      },
      {
        id: 80,
        title: 'The Derivative of a Scalar Field with Respect to a Vector',
        slug: 'scalar-derivative',
        description: 'Derivatives of scalar fields with respect to vectors.',
      },
      {
        id: 81,
        title: 'Directional Derivatives and Partial Derivatives',
        slug: 'directional-derivatives',
        description: 'Directional derivatives and partial derivatives.',
      },
      {
        id: 82,
        title: 'Directional Derivatives and Continuity',
        slug: 'derivatives-continuity',
        description: 'Relationship between directional derivatives and continuity.',
      },
      {
        id: 83,
        title: 'The Total Derivative',
        slug: 'total-derivative',
        description: 'Total derivative and differentiability.',
      },
      {
        id: 84,
        title: 'The Gradient of a Scalar Field',
        slug: 'gradient',
        description: 'The gradient vector and its properties.',
      },
      {
        id: 85,
        title: 'A Sufficient Condition for Differentiability',
        slug: 'differentiability-condition',
        description: 'Sufficient conditions for a scalar field to be differentiable.',
      },
      {
        id: 86,
        title: 'The Chain Rule for Scalar Fields',
        slug: 'chain-rules-scalar',
        description: 'Chain rule for derivatives of scalar fields.',
      },
      {
        id: 87,
        title: 'Level Sets and Tangent Planes',
        slug: 'level-sets-tangent',
        description: 'Applications to geometry: level sets and tangent planes.',
      },
      {
        id: 88,
        title: 'Derivatives of Vector Fields',
        slug: 'vector-field-derivatives',
        description: 'Derivatives of vector fields, differentiability implies continuity.',
      },
      {
        id: 89,
        title: 'The Chain Rule for Vector Fields',
        slug: 'chain-rule-vector',
        description: 'Chain rule for vector fields and matrix form.',
      },
      {
        id: 90,
        title: 'Summary: Differential Calculus in Higher Dimensions',
        slug: 'differential-calculus-summary',
        description: 'Summary of differential calculus in higher dimensions.',
      },
    ],
  },

  // Chapter 9: Applications of Differential Calculus (Sections 91-100)
  {
    id: 9,
    title: '9. Applications of Differential Calculus',
    slug: 'applications-differential',
    sections: [
      {
        id: 91,
        title: 'Introduction to Partial Differential Equations',
        slug: 'pdes-intro',
        description: 'Introduction to partial differential equations.',
      },
      {
        id: 92,
        title: 'First-Order PDEs with Constant Coefficients',
        slug: 'first-order-pdes',
        description: 'First-order PDEs with constant coefficients.',
      },
      {
        id: 93,
        title: 'The One-Dimensional Wave Equation',
        slug: 'wave-equation',
        description: 'The one-dimensional wave equation.',
      },
      {
        id: 94,
        title: 'Derivatives of Implicitly Defined Functions',
        slug: 'implicit-differentiation',
        description: 'Derivatives of functions defined implicitly.',
      },
      {
        id: 95,
        title: 'Maxima, Minima, and Saddle Points',
        slug: 'extrema',
        description: 'Critical points and classification of extrema.',
      },
      {
        id: 96,
        title: 'Second-Order Taylor Formula for Scalar Fields',
        slug: 'taylor-second-order',
        description: 'Taylor formula for scalar fields and the Hessian matrix.',
      },
      {
        id: 97,
        title: 'Classifying Stationary Points Using Eigenvalues',
        slug: 'eigenvalue-classification',
        description: 'Using eigenvalues of the Hessian to classify critical points.',
      },
      {
        id: 98,
        title: 'Second-Derivative Test for Functions of Two Variables',
        slug: 'second-derivative-test',
        description: 'Second-derivative test for extrema of functions of two variables.',
      },
      {
        id: 99,
        title: 'Lagrange Multipliers for Constrained Extrema',
        slug: 'lagrange-multipliers',
        description: 'Extrema with constraints and Lagrange multipliers.',
      },
      {
        id: 100,
        title: 'Extreme-Value and Uniform Continuity Theorems',
        slug: 'extreme-value',
        description: 'Extreme-value theorem and uniform continuity for scalar fields.',
      },
    ],
  },

  // Chapter 10: Line Integrals (Sections 101-112)
  {
    id: 10,
    title: '10. Line Integrals',
    slug: 'line-integrals',
    sections: [
      {
        id: 101,
        title: 'Introduction to Line Integrals',
        slug: 'line-integrals-intro',
        description: 'Introduction to paths, curves, and line integrals.',
      },
      {
        id: 102,
        title: 'Definition and Computation of Line Integrals',
        slug: 'line-integral-definition',
        description: 'Definition and computation of line integrals.',
      },
      {
        id: 103,
        title: 'Basic Properties of Line Integrals',
        slug: 'line-integral-properties',
        description: 'Basic properties and different notations for line integrals.',
      },
      {
        id: 104,
        title: 'Work as a Line Integral',
        slug: 'work-line-integral',
        description: 'Work as a line integral in physics.',
      },
      {
        id: 105,
        title: 'Line Integrals with Respect to Arc Length',
        slug: 'arc-length-integrals',
        description: 'Line integrals with respect to arc length.',
      },
      {
        id: 106,
        title: 'Open Connected Sets and Independence of Path',
        slug: 'path-independence',
        description: 'Open connected sets and independence of path.',
      },
      {
        id: 107,
        title: 'Second Fundamental Theorem for Line Integrals',
        slug: 'second-fundamental-theorem',
        description: 'Second fundamental theorem for line integrals.',
      },
      {
        id: 108,
        title: 'Applications to Mechanics: Potential Functions',
        slug: 'potential-functions',
        description: 'Applications of line integrals to potential functions.',
      },
      {
        id: 109,
        title: 'First Fundamental Theorem for Line Integrals',
        slug: 'first-fundamental-theorem',
        description: 'First fundamental theorem for line integrals.',
      },
      {
        id: 110,
        title: 'Necessary and Sufficient Conditions for a Gradient',
        slug: 'gradient-conditions',
        description: 'Necessary and sufficient conditions for a vector field to be a gradient.',
      },
      {
        id: 111,
        title: 'Constructing Potential Functions',
        slug: 'constructing-potentials',
        description: 'Methods for constructing potential functions.',
      },
      {
        id: 112,
        title: 'Applications to Exact Differential Equations',
        slug: 'exact-equations',
        description: 'Applications to exact differential equations of first order.',
      },
    ],
  },

  // Chapter 11: Multiple Integrals (Sections 113-136)
  {
    id: 11,
    title: '11. Multiple Integrals',
    slug: 'multiple-integrals',
    sections: [
      {
        id: 113,
        title: 'Introduction to Multiple Integrals',
        slug: 'multiple-integrals-intro',
        description: 'Introduction to multiple integrals.',
      },
      {
        id: 114,
        title: 'Partitions of Rectangles and Step Functions',
        slug: 'partitions-step-functions',
        description: 'Partitions of rectangles and step functions.',
      },
      {
        id: 115,
        title: 'The Double Integral of a Step Function',
        slug: 'step-function-integral',
        description: 'The double integral of a step function.',
      },
      {
        id: 116,
        title: 'Properties of Double Integrals for Step Functions',
        slug: 'step-integral-properties',
        description: 'Properties of double integrals for step functions.',
      },
      {
        id: 117,
        title: 'Definition of the Double Integral',
        slug: 'double-integral-definition',
        description: 'Definition of the double integral for general functions.',
      },
      {
        id: 118,
        title: 'Evaluation by Iterated Integration',
        slug: 'iterated-integrals',
        description: 'Evaluation by repeated one-dimensional integration.',
      },
      {
        id: 119,
        title: 'Geometric Interpretation as Volume',
        slug: 'volume-interpretation',
        description: 'Double integral as volume and worked examples.',
      },
      {
        id: 120,
        title: 'Integrability of Continuous Functions',
        slug: 'continuous-integrability',
        description: 'Integrability of continuous functions.',
      },
      {
        id: 121,
        title: 'Integrability of Bounded Functions with Discontinuities',
        slug: 'discontinuous-integrability',
        description: 'Integrability of bounded functions with discontinuities.',
      },
      {
        id: 122,
        title: 'Double Integrals Over More General Regions',
        slug: 'general-regions',
        description: 'Extending double integrals to more general regions.',
      },
      {
        id: 123,
        title: 'Applications to Area and Volume',
        slug: 'area-volume',
        description: 'Applications to computing area and volume.',
      },
      {
        id: 124,
        title: 'Further Applications: Mass, Center of Mass, and Moment of Inertia',
        slug: 'physical-applications',
        description: 'Center of mass, moments of inertia applications.',
      },
      {
        id: 125,
        title: 'Two Theorems of Pappus',
        slug: 'pappus-theorems',
        description: 'The two theorems of Pappus.',
      },
      {
        id: 126,
        title: "Green's Theorem in the Plane",
        slug: 'greens-theorem',
        description: "Green's theorem in the plane and applications.",
      },
      {
        id: 127,
        title: "Applications of Green's Theorem",
        slug: 'greens-applications',
        description: "Applications of Green's theorem.",
      },
      {
        id: 128,
        title: 'Simply Connected Sets and the Gradient Condition',
        slug: 'simply-connected',
        description: 'Simply connected sets and the gradient condition.',
      },
      {
        id: 129,
        title: "Green's Theorem for Multiply Connected Regions",
        slug: 'multiply-connected',
        description: "Green's theorem for multiply connected regions.",
      },
      {
        id: 130,
        title: 'The Winding Number',
        slug: 'winding-number',
        description: 'The winding number and its applications.',
      },
      {
        id: 131,
        title: 'Change of Variables in a Double Integral',
        slug: 'change-variables-double',
        description: 'Change of variables in double integrals, Jacobian.',
      },
      {
        id: 132,
        title: 'Polar Coordinates',
        slug: 'polar-coordinates',
        description: 'Double integrals in polar coordinates.',
      },
      {
        id: 133,
        title: 'Linear Transformations and Double Integrals',
        slug: 'linear-transform-integrals',
        description: 'Effect of linear transformations on double integrals.',
      },
      {
        id: 134,
        title: 'Extensions to Higher Dimensions',
        slug: 'higher-dimensional',
        description: 'Extensions to n-fold integrals and change of variables.',
      },
      {
        id: 135,
        title: 'Cylindrical Coordinates',
        slug: 'cylindrical-coordinates',
        description: 'Triple integrals in cylindrical coordinates.',
      },
      {
        id: 136,
        title: 'Spherical Coordinates',
        slug: 'spherical-coordinates',
        description: 'Triple integrals in spherical coordinates.',
      },
    ],
  },

  // Chapter 12: Surface Integrals (Sections 137-148)
  {
    id: 12,
    title: '12. Surface Integrals',
    slug: 'surface-integrals',
    sections: [
      {
        id: 137,
        title: 'Parametric Representation of a Surface',
        slug: 'parametric-surfaces',
        description: 'Parametric representation of surfaces.',
      },
      {
        id: 138,
        title: 'The Fundamental Vector Product',
        slug: 'fundamental-vector-product',
        description: 'The fundamental vector product as a normal to the surface.',
      },
      {
        id: 139,
        title: 'Area of a Parametric Surface',
        slug: 'surface-area',
        description: 'Area of a parametric surface.',
      },
      {
        id: 140,
        title: 'Surface Integrals',
        slug: 'surface-integrals-def',
        description: 'Definition and computation of surface integrals.',
      },
      {
        id: 141,
        title: 'Surface Integrals of Vector Fields',
        slug: 'vector-surface-integrals',
        description: 'Surface integrals of vector fields (flux integrals).',
      },
      {
        id: 142,
        title: "Stokes' Theorem",
        slug: 'stokes-theorem',
        description: "Stokes' theorem relating line and surface integrals.",
      },
      {
        id: 143,
        title: 'The Curl and Divergence of a Vector Field',
        slug: 'curl-divergence',
        description: 'The curl and divergence of a vector field.',
      },
      {
        id: 144,
        title: 'Properties of Curl and Divergence',
        slug: 'curl-div-properties',
        description: 'Further properties of curl and divergence.',
      },
      {
        id: 145,
        title: 'Reconstruction of a Vector Field from Its Curl',
        slug: 'reconstruction-curl',
        description: 'Reconstruction of a vector field from its curl.',
      },
      {
        id: 146,
        title: "Extensions of Stokes' Theorem",
        slug: 'stokes-extensions',
        description: "Extensions of Stokes' theorem.",
      },
      {
        id: 147,
        title: "The Divergence Theorem (Gauss' Theorem)",
        slug: 'divergence-theorem',
        description: "The divergence theorem (Gauss' theorem).",
      },
      {
        id: 148,
        title: 'Applications of the Divergence Theorem',
        slug: 'divergence-applications',
        description: 'Applications of the divergence theorem.',
      },
    ],
  },

  // ==========================================================================
  // PART 3: SPECIAL TOPICS
  // ==========================================================================

  // Chapter 13: Set Functions and Elementary Probability (Sections 149-162)
  {
    id: 13,
    title: '13. Set Functions and Probability',
    slug: 'set-functions-probability',
    sections: [
      {
        id: 149,
        title: 'Historical Introduction to Probability',
        slug: 'probability-history',
        description: 'Historical development of probability theory.',
      },
      {
        id: 150,
        title: 'Finitely Additive Set Functions',
        slug: 'set-functions',
        description: 'Finitely additive set functions.',
      },
      {
        id: 151,
        title: 'Finitely Additive Measures',
        slug: 'additive-measures',
        description: 'Finitely additive measures.',
      },
      {
        id: 152,
        title: 'Probability for Finite Sample Spaces',
        slug: 'finite-sample-spaces',
        description: 'Definition of probability for finite sample spaces.',
      },
      {
        id: 153,
        title: 'Probability Terminology',
        slug: 'probability-terminology',
        description: 'Special terminology peculiar to probability theory.',
      },
      {
        id: 154,
        title: 'Worked Examples in Probability',
        slug: 'probability-examples',
        description: 'Worked examples in probability.',
      },
      {
        id: 155,
        title: 'Combinatorial Analysis',
        slug: 'combinatorics',
        description: 'Basic principles of combinatorial analysis.',
      },
      {
        id: 156,
        title: 'Conditional Probability',
        slug: 'conditional-probability',
        description: 'Conditional probability.',
      },
      {
        id: 157,
        title: 'Independence',
        slug: 'independence',
        description: 'Independence of events.',
      },
      {
        id: 158,
        title: 'Compound Experiments',
        slug: 'compound-experiments',
        description: 'Compound experiments and product spaces.',
      },
      {
        id: 159,
        title: 'Bernoulli Trials',
        slug: 'bernoulli-trials',
        description: 'Bernoulli trials.',
      },
      {
        id: 160,
        title: 'The Most Probable Number of Successes',
        slug: 'most-probable-successes',
        description: 'The most probable number of successes in Bernoulli trials.',
      },
      {
        id: 161,
        title: 'Countable and Uncountable Sets',
        slug: 'countable-sets',
        description: 'Countable and uncountable sets.',
      },
      {
        id: 162,
        title: 'Probability for Countably Infinite Sample Spaces',
        slug: 'countable-spaces',
        description: 'Probability for countably infinite sample spaces.',
      },
    ],
  },

  // Chapter 14: Calculus of Probabilities (Sections 163-180)
  {
    id: 14,
    title: '14. Calculus of Probabilities',
    slug: 'calculus-probabilities',
    sections: [
      {
        id: 163,
        title: 'Introduction to the Calculus of Probabilities',
        slug: 'calculus-prob-intro',
        description: 'Introduction to the calculus of probabilities.',
      },
      {
        id: 164,
        title: 'Random Variables',
        slug: 'random-variables',
        description: 'Random variables and their properties.',
      },
      {
        id: 165,
        title: 'Distribution Functions',
        slug: 'distribution-functions',
        description: 'Distribution functions of random variables.',
      },
      {
        id: 166,
        title: 'Discrete Distributions',
        slug: 'discrete-distributions',
        description: 'Discrete distributions and probability mass functions.',
      },
      {
        id: 167,
        title: 'Continuous Distributions and Density Functions',
        slug: 'continuous-distributions',
        description: 'Continuous distributions and density functions.',
      },
      {
        id: 168,
        title: 'Uniform Distribution',
        slug: 'uniform-distribution',
        description: 'The uniform distribution.',
      },
      {
        id: 169,
        title: "Cauchy's Distribution",
        slug: 'cauchy-distribution',
        description: "Cauchy's distribution and its properties.",
      },
      {
        id: 170,
        title: 'Exponential Distributions',
        slug: 'exponential-distribution',
        description: 'Exponential distributions and their properties.',
      },
      {
        id: 171,
        title: 'Normal Distributions',
        slug: 'normal-distribution',
        description: 'Normal (Gaussian) distributions.',
      },
      {
        id: 172,
        title: 'Two-Dimensional Random Variables',
        slug: 'two-dim-random-variables',
        description: 'Two-dimensional random variables.',
      },
      {
        id: 173,
        title: 'Two-Dimensional Discrete Distributions',
        slug: 'two-dim-discrete',
        description: 'Two-dimensional discrete distributions.',
      },
      {
        id: 174,
        title: 'Two-Dimensional Continuous Distributions',
        slug: 'two-dim-continuous',
        description: 'Two-dimensional continuous distributions.',
      },
      {
        id: 175,
        title: 'Distributions of Functions of Random Variables',
        slug: 'functions-random-variables',
        description: 'Distributions of functions of random variables.',
      },
      {
        id: 176,
        title: 'Expectation',
        slug: 'expectation',
        description: 'Expected value and its properties.',
      },
      {
        id: 177,
        title: 'Variance',
        slug: 'variance',
        description: 'Variance and its properties.',
      },
      {
        id: 178,
        title: "Chebyshev's Inequality",
        slug: 'chebyshev-inequality',
        description: "Chebyshev's inequality and applications.",
      },
      {
        id: 179,
        title: 'Laws of Large Numbers',
        slug: 'laws-large-numbers',
        description: 'Weak and strong laws of large numbers.',
      },
      {
        id: 180,
        title: 'The Central Limit Theorem',
        slug: 'central-limit-theorem',
        description: 'The central limit theorem of probability.',
      },
    ],
  },

  // Chapter 15: Introduction to Numerical Analysis (Sections 181-190)
  // TO BE CREATED
  {
    id: 15,
    title: '15. Numerical Analysis',
    slug: 'numerical-analysis',
    sections: [
      {
        id: 181,
        title: 'Historical Introduction to Numerical Analysis',
        slug: 'numerical-history',
        description: 'Historical development of numerical analysis.',
      },
      {
        id: 182,
        title: 'Polynomial Approximation',
        slug: 'polynomial-approximation',
        description: 'Approximations by polynomials.',
      },
      {
        id: 183,
        title: 'Interpolating Polynomials',
        slug: 'interpolating-polynomials',
        description: 'Lagrange interpolation formula.',
      },
      {
        id: 184,
        title: 'Error in Polynomial Interpolation',
        slug: 'interpolation-error',
        description: 'Error analysis in polynomial interpolation.',
      },
      {
        id: 185,
        title: "Newton's Interpolation Formula",
        slug: 'newton-interpolation',
        description: "Newton's formula and the forward difference operator.",
      },
      {
        id: 186,
        title: 'Factorial Polynomials',
        slug: 'factorial-polynomials',
        description: 'Factorial polynomials and their properties.',
      },
      {
        id: 187,
        title: 'The Chebyshev Polynomials',
        slug: 'chebyshev-polynomials',
        description: 'Chebyshev polynomials and minimum problems.',
      },
      {
        id: 188,
        title: 'Approximate Integration: The Trapezoidal Rule',
        slug: 'trapezoidal-rule',
        description: 'Approximate integration using the trapezoidal rule.',
      },
      {
        id: 189,
        title: "Simpson's Rule",
        slug: 'simpsons-rule',
        description: "Simpson's rule for numerical integration.",
      },
      {
        id: 190,
        title: 'The Euler Summation Formula',
        slug: 'euler-summation',
        description: 'The Euler summation formula.',
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get section by ID
 */
export function getSectionById(id: number): Section | undefined {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === id);
    if (section) return section;
  }
  return undefined;
}

/**
 * Get part containing a section
 */
export function getPartBySectionId(sectionId: number): Part | undefined {
  return curriculum.find((part) =>
    part.sections.some((section) => section.id === sectionId)
  );
}

/**
 * Get adjacent sections (previous and next)
 */
export function getAdjacentSections(sectionId: number): {
  prev: Section | null;
  next: Section | null;
} {
  const allSections = curriculum.flatMap((part) => part.sections);
  const index = allSections.findIndex((s) => s.id === sectionId);

  return {
    prev: index > 0 ? allSections[index - 1] : null,
    next: index < allSections.length - 1 ? allSections[index + 1] : null,
  };
}

/**
 * Get total number of sections
 */
export function getTotalSections(): number {
  return curriculum.reduce((total, part) => total + part.sections.length, 0);
}

/**
 * Get all sections as a flat array
 */
export function getAllSections(): Section[] {
  return curriculum.flatMap((part) => part.sections);
}

/**
 * Get section index (position in course)
 */
export function getSectionIndex(sectionId: number): number {
  const allSections = getAllSections();
  return allSections.findIndex((s) => s.id === sectionId);
}
