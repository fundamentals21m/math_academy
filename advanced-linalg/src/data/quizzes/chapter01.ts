// Chapter 1: Linear Equations (Sections 1-6)
// Based on Hoffman & Kunze Chapter 1
import type { DifficultyQuizData } from './types';

// =============================================================================
// Section 1: Fields
// =============================================================================
export const section01Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's01-e01',
      question: 'Which of the following is NOT a field?',
      options: ['The integers ℤ', 'The rational numbers ℚ', 'The real numbers ℝ', 'The complex numbers ℂ'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The integers are not a field because non-zero integers (except ±1) do not have multiplicative inverses in ℤ.'
    },
    {
      id: 's01-e02',
      question: 'What is the additive identity in any field F?',
      options: ['1', '0', '-1', 'There is no additive identity'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The additive identity is 0, satisfying a + 0 = a for all a ∈ F.'
    },
    {
      id: 's01-e03',
      question: 'What is the multiplicative identity in any field F?',
      options: ['0', '2', '1', 'It depends on the field'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The multiplicative identity is 1, satisfying a · 1 = a for all a ∈ F.'
    },
    {
      id: 's01-e04',
      question: 'In a field, every non-zero element has:',
      options: ['An additive inverse only', 'A multiplicative inverse only', 'No inverses', 'Both additive and multiplicative inverses'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'In a field, every element has an additive inverse, and every non-zero element has a multiplicative inverse.'
    },
    {
      id: 's01-e05',
      question: 'Which operation is commutative in a field?',
      options: ['Both addition and multiplication', 'Only addition', 'Only multiplication', 'Neither'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Both addition and multiplication are commutative in a field: a + b = b + a and a · b = b · a.'
    },
    {
      id: 's01-e06',
      question: 'The set of even integers is NOT a field because:',
      options: ['It lacks an additive identity', 'It lacks a multiplicative identity', 'It is not closed under addition', 'It lacks multiplicative inverses'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The set of even integers does not contain 1, which would be the multiplicative identity.'
    },
  ],
  medium: [
    {
      id: 's01-m01',
      question: 'A subfield of ℂ must contain:',
      options: ['Only 0', 'Only 1', 'Both 0 and 1', 'Neither 0 nor 1'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'A subfield must contain the additive identity 0 and the multiplicative identity 1.'
    },
    {
      id: 's01-m02',
      question: 'The set {a + b√2 : a, b ∈ ℚ} is:',
      options: ['Not closed under multiplication', 'Not a field', 'Equal to ℝ', 'A subfield of ℝ'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'This is ℚ(√2), a subfield of ℝ. It is closed under all field operations.'
    },
    {
      id: 's01-m03',
      question: 'In any field F, 0 · a equals:',
      options: ['0', 'a', '1', 'Undefined'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For any element a in a field, 0 · a = 0. This follows from the field axioms.'
    },
    {
      id: 's01-m04',
      question: 'If a · b = 0 in a field, then:',
      options: ['Both a and b are zero', 'At least one of a or b is zero', 'Neither a nor b is zero', 'This is impossible'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Fields have no zero divisors: if ab = 0, then a = 0 or b = 0.'
    },
    {
      id: 's01-m05',
      question: 'The distributive law in a field states:',
      options: ['a + (bc) = (a + b)(a + c)', '(ab)c = a(bc)', 'a(b + c) = ab + ac', 'a + b = b + a'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The distributive law connects addition and multiplication: a(b + c) = ab + ac.'
    },
    {
      id: 's01-m06',
      question: 'The smallest field containing ℤ is:',
      options: ['ℤ itself', 'ℝ', 'ℂ', 'ℚ'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The rationals ℚ are the smallest field containing ℤ (the field of fractions of ℤ).'
    },
  ],
  hard: [
    {
      id: 's01-h01',
      question: 'If F has characteristic p > 0, then:',
      options: ['1 + 1 + ... + 1 (p times) = 0', 'p is composite', 'F is finite', 'F contains ℚ'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The characteristic p is the smallest positive integer such that p·1 = 0 in F.'
    },
    {
      id: 's01-h02',
      question: 'A field of characteristic 0:',
      options: ['Must be finite', 'Contains a copy of ℚ', 'Has exactly two elements', 'Cannot exist'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Fields of characteristic zero contain a copy of the rationals as a subfield.'
    },
    {
      id: 's01-h03',
      question: 'The finite field with p elements (p prime) is denoted:',
      options: ['ℚₚ', 'ℝₚ', 'ℤₚ or 𝔽ₚ', 'ℂₚ'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The integers modulo p form a field when p is prime, denoted ℤₚ or 𝔽ₚ.'
    },
    {
      id: 's01-h04',
      question: 'In a field F, (-1)(-1) equals:',
      options: ['-1', '0', 'It depends on F', '1'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'In any field, (-1)(-1) = 1. This can be proved from the field axioms.'
    },
    {
      id: 's01-h05',
      question: 'If F is a finite field with q elements, then q must be:',
      options: ['A prime power', 'Any positive integer', 'A prime number', 'An even number'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Every finite field has pⁿ elements for some prime p and positive integer n.'
    },
    {
      id: 's01-h06',
      question: 'The algebraic closure of ℝ is:',
      options: ['ℝ itself', 'ℂ', 'ℚ', 'Does not exist'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The complex numbers ℂ are the algebraic closure of ℝ—every polynomial with real coefficients has all roots in ℂ.'
    },
  ],
};

// =============================================================================
// Section 2: Systems of Linear Equations
// =============================================================================
export const section02Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's02-e01',
      question: 'A system of linear equations is homogeneous if:',
      options: ['All coefficients are equal', 'It has a unique solution', 'All constant terms are zero', 'It has infinitely many solutions'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A homogeneous system has all constant terms equal to zero: Ax = 0.'
    },
    {
      id: 's02-e02',
      question: 'A homogeneous system always has:',
      options: ['No solutions', 'A unique solution', 'Infinitely many solutions', 'At least the trivial solution'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The trivial solution x₁ = x₂ = ... = xₙ = 0 always satisfies Ax = 0.'
    },
    {
      id: 's02-e03',
      question: 'The trivial solution of Ax = 0 is:',
      options: ['x = (0, 0, ..., 0)', 'x = (1, 1, ..., 1)', 'x does not exist', 'x = (1, 0, ..., 0)'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The trivial solution is the zero vector: all components equal to 0.'
    },
    {
      id: 's02-e04',
      question: 'A system Ax = b is consistent if:',
      options: ['A is square', 'It has at least one solution', 'It has exactly one solution', 'b = 0'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A system is consistent if its solution set is non-empty (at least one solution exists).'
    },
    {
      id: 's02-e05',
      question: 'The system x + y = 1, 2x + 2y = 2 has:',
      options: ['No solutions', 'Exactly one solution', 'Infinitely many solutions', 'Two solutions'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The second equation is a multiple of the first, giving infinitely many solutions along a line.'
    },
    {
      id: 's02-e06',
      question: 'A linear equation in variables x, y, z has the form:',
      options: ['ax² + by² + cz² = d', 'xyz = d', '1/x + 1/y + 1/z = d', 'ax + by + cz = d'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A linear equation involves only first powers of variables with constant coefficients.'
    },
  ],
  medium: [
    {
      id: 's02-m01',
      question: 'Two systems of linear equations are equivalent if:',
      options: ['Each equation in one is a linear combination of equations in the other', 'They have the same coefficients', 'They have the same number of equations', 'They have the same number of unknowns'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Equivalent systems have each equation in one system expressible as a linear combination of equations in the other, and vice versa.'
    },
    {
      id: 's02-m02',
      question: 'If two systems are equivalent, then they have:',
      options: ['The same coefficients', 'Exactly the same solutions', 'The same constant terms', 'At least one common solution'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Equivalent systems have exactly the same solution set (Theorem 1).'
    },
    {
      id: 's02-m03',
      question: 'If a homogeneous system has more unknowns than equations, it has:',
      options: ['No solutions', 'Only the trivial solution', 'Infinitely many solutions', 'Cannot be determined'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'If m < n (more unknowns than equations), there are free variables and thus infinitely many solutions.'
    },
    {
      id: 's02-m04',
      question: 'The solution set of a homogeneous system Ax = 0 is called:',
      options: ['The row space of A', 'The column space of A', 'The range of A', 'The null space of A'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The null space (or kernel) of A is the set of all vectors x such that Ax = 0.'
    },
    {
      id: 's02-m05',
      question: 'A non-homogeneous system Ax = b is consistent if and only if:',
      options: ['b is in the column space of A', 'A is invertible', 'b = 0', 'A is square'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The system Ax = b has a solution iff b can be written as a linear combination of the columns of A.'
    },
    {
      id: 's02-m06',
      question: 'If Ax = b has a particular solution x₀ and x₁ is any solution of Ax = 0, then:',
      options: ['x₀ + x₁ is not a solution', 'x₀ + x₁ is a solution of Ax = b', 'x₀ - x₁ is a solution of Ax = 0', 'x₁ must equal 0'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A(x₀ + x₁) = Ax₀ + Ax₁ = b + 0 = b, so x₀ + x₁ solves Ax = b.'
    },
  ],
  hard: [
    {
      id: 's02-h01',
      question: 'A system of m equations in n unknowns with m < n always has:',
      options: ['No solutions', 'A unique solution', 'Infinitely many solutions if consistent', 'Exactly m solutions'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'With more unknowns than equations, there will be free variables, leading to infinitely many solutions if consistent.'
    },
    {
      id: 's02-h02',
      question: 'The general solution of Ax = b equals:',
      options: ['The null space of A', 'The column space of A', 'The row space of A', 'A particular solution plus the null space'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'All solutions have the form x = x₀ + xₕ where x₀ is a particular solution and xₕ is in the null space.'
    },
    {
      id: 's02-h03',
      question: 'If Ax = 0 has only the trivial solution, then for any b, Ax = b has:',
      options: ['At most one solution', 'No solutions', 'Infinitely many solutions', 'Exactly n solutions'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If the null space is {0}, then any two solutions would differ by an element of the null space, hence be equal.'
    },
    {
      id: 's02-h04',
      question: 'The dimension of the solution space of Ax = 0 for an m × n matrix of rank r is:',
      options: ['r', 'n - r', 'm - r', 'n'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The nullity (dimension of null space) is n - r by the Rank-Nullity Theorem.'
    },
    {
      id: 's02-h05',
      question: 'For an n × n matrix A, Ax = b has a unique solution for every b if and only if:',
      options: ['A has rank less than n', 'A is symmetric', 'A has rank n', 'A is upper triangular'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A square matrix of full rank is invertible, giving unique solutions x = A⁻¹b.'
    },
    {
      id: 's02-h06',
      question: 'If A is 3×5 with rank 2, the solution space of Ax = 0 has dimension:',
      options: ['2', '5', '3', '3'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Nullity = n - rank = 5 - 2 = 3. The null space is 3-dimensional.'
    },
  ],
};

// =============================================================================
// Section 3: Matrices and Elementary Row Operations
// =============================================================================
export const section03Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's03-e01',
      question: 'Which is NOT an elementary row operation?',
      options: ['Add two rows and store in a third row', 'Multiply a row by a non-zero scalar', 'Add a multiple of one row to another', 'Interchange two rows'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The three elementary row operations are: scalar multiplication of a row, adding a multiple of one row to another, and interchanging rows.'
    },
    {
      id: 's03-e02',
      question: 'A 3 × 4 matrix has how many entries?',
      options: ['3', '12', '4', '7'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'An m × n matrix has m · n entries. Here: 3 × 4 = 12.'
    },
    {
      id: 's03-e03',
      question: 'The entry in row 2, column 3 of matrix A is denoted:',
      options: ['A₃₂', 'A²³', 'A₂₃', 'A(3,2)'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The entry Aᵢⱼ has the row index first, column index second: A₂₃.'
    },
    {
      id: 's03-e04',
      question: 'Interchanging two rows of a matrix:',
      options: ['Changes its rank', 'Changes its solution set for Ax = 0', 'Cannot be undone', 'Is an elementary row operation'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Interchanging rows is one of the three types of elementary row operations.'
    },
    {
      id: 's03-e05',
      question: 'Multiplying a row by 0 is:',
      options: ['Not an elementary row operation', 'An elementary row operation', 'Allowed only for zero rows', 'The same as deleting a row'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Row scaling requires a non-zero scalar; multiplying by 0 is not allowed.'
    },
    {
      id: 's03-e06',
      question: 'Two matrices are row-equivalent if:',
      options: ['They have the same size', 'One can be obtained from the other by elementary row operations', 'They have the same rank', 'They are equal'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'Row-equivalence means one matrix can be transformed into the other using elementary row operations.'
    },
  ],
  medium: [
    {
      id: 's03-m01',
      question: 'An m × n matrix A is a function from:',
      options: ['F to F', 'Fⁿ to Fᵐ', '{1,...,m} × {1,...,n} to F', 'F to Fⁿ'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'A matrix A assigns to each pair (i,j) with 1 ≤ i ≤ m, 1 ≤ j ≤ n a scalar Aᵢⱼ in F.'
    },
    {
      id: 's03-m02',
      question: 'Every elementary row operation is:',
      options: ['Irreversible', 'Only applicable to square matrices', 'Commutative with other operations', 'Reversible by an operation of the same type'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Each elementary row operation has an inverse of the same type (Theorem 2).'
    },
    {
      id: 's03-m03',
      question: 'If A and B are row-equivalent, the systems AX = 0 and BX = 0 have:',
      options: ['Exactly the same solutions', 'No common solutions', 'At least one common solution', 'Solutions differing by a constant'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Row-equivalent matrices give equivalent homogeneous systems with identical solution sets (Theorem 3).'
    },
    {
      id: 's03-m04',
      question: 'The inverse of "multiply row i by c ≠ 0" is:',
      options: ['Multiply row i by -c', 'Multiply row i by 1/c', 'Add -c times row i to another row', 'Interchange row i with another'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Multiplying by c is reversed by multiplying by 1/c.'
    },
    {
      id: 's03-m05',
      question: 'The inverse of "add c times row i to row j" is:',
      options: ['Add c times row j to row i', 'Multiply row j by -c', 'Add -c times row i to row j', 'Interchange rows i and j'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Adding c times row i to row j is reversed by adding -c times row i to row j.'
    },
    {
      id: 's03-m06',
      question: 'Row operations preserve:',
      options: ['The entries of the matrix', 'The solution set of AX = b for all b', 'The column space', 'The row space'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Elementary row operations preserve the row space but may change the column space.'
    },
  ],
  hard: [
    {
      id: 's03-h01',
      question: 'A matrix is row-reduced if:',
      options: ['The first non-zero entry in each row is 1, and that column has all other entries 0', 'All entries are 0 or 1', 'It is upper triangular', 'It is the identity matrix'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Row-reduced means: (a) leading entries are 1, (b) columns with leading 1s have zeros elsewhere.'
    },
    {
      id: 's03-h02',
      question: 'Row-equivalence of matrices is:',
      options: ['Reflexive only', 'An equivalence relation', 'Symmetric only', 'Transitive only'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Row-equivalence is reflexive, symmetric, and transitive, hence an equivalence relation.'
    },
    {
      id: 's03-h03',
      question: 'An elementary matrix is:',
      options: ['Any 2×2 matrix', 'Always diagonal', 'The result of performing one elementary row operation on I', 'Never invertible'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'An elementary matrix is obtained by performing a single elementary row operation on the identity matrix.'
    },
    {
      id: 's03-h04',
      question: 'Multiplying A on the left by an elementary matrix E:',
      options: ['Performs a column operation on A', 'Has no effect', 'Makes A invertible', 'Performs the corresponding row operation on A'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Left multiplication EA performs the row operation corresponding to E on matrix A.'
    },
    {
      id: 's03-h05',
      question: 'Every invertible matrix is a product of:',
      options: ['Elementary matrices', 'Diagonal matrices', 'Symmetric matrices', 'Upper triangular matrices'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Any invertible matrix can be written as a product of elementary matrices.'
    },
    {
      id: 's03-h06',
      question: 'The rank of a matrix equals:',
      options: ['The number of rows', 'The number of pivot positions in its RREF', 'The number of columns', 'The number of zero rows'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The rank equals the number of leading 1s (pivots) in the row-reduced echelon form.'
    },
  ],
};

// =============================================================================
// Section 4: Row-Reduced Echelon Matrices
// =============================================================================
export const section04Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's04-e01',
      question: 'In a row-reduced echelon matrix, all zero rows appear:',
      options: ['At the top', 'Anywhere', 'At the bottom', 'In the middle'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Zero rows are placed at the bottom in echelon form.'
    },
    {
      id: 's04-e02',
      question: 'The leading entry of a non-zero row in RREF is:',
      options: ['0', 'Any non-zero number', 'The row number', '1'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'In RREF, each leading entry (first non-zero entry in a row) equals 1.'
    },
    {
      id: 's04-e03',
      question: 'The identity matrix I is in:',
      options: ['Reduced row echelon form', 'Row echelon form only', 'Neither echelon form', 'Cannot be determined'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The identity matrix satisfies all conditions for RREF.'
    },
    {
      id: 's04-e04',
      question: 'A pivot position in a matrix is:',
      options: ['Any entry equal to 1', 'The location of a leading 1 in RREF', 'The diagonal entries', 'The largest entry in each row'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A pivot position is where a leading 1 appears in the row-reduced echelon form.'
    },
    {
      id: 's04-e05',
      question: 'A column containing a pivot is called a:',
      options: ['Free column', 'Basic column', 'Pivot column', 'Zero column'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Columns with pivots are called pivot columns; the corresponding variables are basic variables.'
    },
    {
      id: 's04-e06',
      question: 'Variables corresponding to non-pivot columns are called:',
      options: ['Basic variables', 'Dependent variables', 'Leading variables', 'Free variables'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Free variables can take any value; they correspond to non-pivot columns.'
    },
  ],
  medium: [
    {
      id: 's04-m01',
      question: 'In a row-reduced echelon matrix, the leading 1s must:',
      options: ['Move strictly to the right as rows increase', 'Be on the diagonal', 'All be in the same column', 'Be in consecutive columns'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The "echelon" condition requires that the column index of the leading 1 increases as we go down rows.'
    },
    {
      id: 's04-m02',
      question: 'Every matrix is row-equivalent to:',
      options: ['The identity matrix', 'A unique row-reduced echelon matrix', 'Multiple row-reduced echelon matrices', 'No row-reduced matrix'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Every matrix is row-equivalent to a unique row-reduced echelon matrix.'
    },
    {
      id: 's04-m03',
      question: 'In RREF, each column containing a leading 1 has:',
      options: ['All entries equal to 1', 'Entries summing to 1', 'All other entries equal to 0', 'At most one non-zero entry'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'In RREF, a pivot column has 1 in the pivot position and 0 elsewhere.'
    },
    {
      id: 's04-m04',
      question: 'If a 4×6 matrix has RREF with 3 pivot positions, the number of free variables is:',
      options: ['1', '4', '6', '3'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Free variables = columns - pivots = 6 - 3 = 3.'
    },
    {
      id: 's04-m05',
      question: 'The RREF of a non-zero matrix always has:',
      options: ['At least one leading 1', 'All entries equal to 0 or 1', 'The same entries as the original', 'No zero rows'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'A non-zero matrix must have at least one non-zero row, which will have a leading 1 in RREF.'
    },
    {
      id: 's04-m06',
      question: 'Two matrices have the same RREF if and only if they:',
      options: ['Are equal', 'Are row-equivalent', 'Have the same size', 'Have the same determinant'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Row-equivalent matrices reduce to the same unique RREF.'
    },
  ],
  hard: [
    {
      id: 's04-h01',
      question: 'The number of non-zero rows in the row-reduced echelon form equals:',
      options: ['The number of unknowns', 'The number of solutions', 'The rank of the matrix', 'The dimension of the null space'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The number of non-zero rows (pivot rows) equals the rank of the matrix.'
    },
    {
      id: 's04-h02',
      question: 'If the RREF of the augmented matrix [A|b] has a row [0 0 ... 0 | 1], then:',
      options: ['The system has infinitely many solutions', 'The system has a unique solution', 'The system is homogeneous', 'The system is inconsistent'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The equation 0 = 1 is a contradiction, so the system has no solution.'
    },
    {
      id: 's04-h03',
      question: 'For an m × n matrix of rank r, the RREF has exactly:',
      options: ['r non-zero rows', 'm non-zero rows', 'n non-zero rows', 'm - r non-zero rows'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The rank r equals the number of pivot positions, which equals the number of non-zero rows in RREF.'
    },
    {
      id: 's04-h04',
      question: 'The RREF of an n × n invertible matrix is:',
      options: ['A diagonal matrix', 'The identity matrix', 'An upper triangular matrix', 'The zero matrix'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'An invertible matrix has rank n, so its RREF must be the n × n identity matrix.'
    },
    {
      id: 's04-h05',
      question: 'If A is m × n with rank r, the dimension of the column space of A is:',
      options: ['m', 'n', 'r', 'n - r'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The column space has dimension r (the rank). This equals the number of pivot columns.'
    },
    {
      id: 's04-h06',
      question: 'The row space and column space of a matrix have:',
      options: ['Different dimensions', 'The same dimension only if square', 'No relationship', 'The same dimension'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Both the row space and column space have dimension equal to the rank.'
    },
  ],
};

// =============================================================================
// Section 5: Matrix Multiplication
// =============================================================================
export const section05Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's05-e01',
      question: 'If A is m × n and B is n × p, then AB is:',
      options: ['m × p', 'n × n', 'p × m', 'Undefined'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Matrix multiplication AB gives an m × p matrix when A is m × n and B is n × p.'
    },
    {
      id: 's05-e02',
      question: 'For matrix multiplication AB to be defined, we need:',
      options: ['A and B to be square', 'Columns of A = rows of B', 'A and B to have the same size', 'Rows of A = columns of B'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The number of columns of A must equal the number of rows of B.'
    },
    {
      id: 's05-e03',
      question: 'AI = A when I is:',
      options: ['Any matrix', 'The zero matrix', 'The identity matrix of appropriate size', 'Equal to A'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The identity matrix I satisfies AI = IA = A.'
    },
    {
      id: 's05-e04',
      question: 'A · 0 = 0 where 0 is:',
      options: ['The number zero', 'Undefined', 'Equal to A', 'The zero matrix of appropriate size'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Multiplying any matrix by the zero matrix gives the zero matrix.'
    },
    {
      id: 's05-e05',
      question: 'If A is 2×3 and B is 3×2, then AB is:',
      options: ['2×2', '3×3', '2×3', '3×2'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'A (2×3) times B (3×2) gives a 2×2 matrix.'
    },
    {
      id: 's05-e06',
      question: 'Matrix multiplication distributes over addition:',
      options: ['Never', 'Always (when defined)', 'Only for square matrices', 'Only for diagonal matrices'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A(B + C) = AB + AC and (A + B)C = AC + BC when all products are defined.'
    },
  ],
  medium: [
    {
      id: 's05-m01',
      question: 'Matrix multiplication is:',
      options: ['Commutative', 'Both commutative and associative', 'Associative', 'Neither commutative nor associative'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Matrix multiplication is associative (ABC = A(BC)) but NOT commutative (AB ≠ BA in general).'
    },
    {
      id: 's05-m02',
      question: 'The entry (AB)ᵢⱼ equals:',
      options: ['AᵢⱼBᵢⱼ', 'Σₖ AₖᵢBⱼₖ', 'AᵢⱼBⱼᵢ', 'Σₖ AᵢₖBₖⱼ'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: '(AB)ᵢⱼ = Σₖ AᵢₖBₖⱼ is the dot product of row i of A with column j of B.'
    },
    {
      id: 's05-m03',
      question: 'If A is 2×3 and B is 3×2, then BA is:',
      options: ['3×3', 'Undefined', '2×2', '3×2'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'B (3×2) times A (2×3) gives a 3×3 matrix.'
    },
    {
      id: 's05-m04',
      question: 'The transpose of AB equals:',
      options: ['AᵀBᵀ', 'BᵀAᵀ', '(AB)ᵀ = AB', 'BAᵀ'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: '(AB)ᵀ = BᵀAᵀ. The order reverses when transposing a product.'
    },
    {
      id: 's05-m05',
      question: 'If A is m × n, then AᵀA is:',
      options: ['m × m', 'm × n', 'n × n', 'n × m'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Aᵀ is n × m, so AᵀA is n × n (and AAᵀ is m × m).'
    },
    {
      id: 's05-m06',
      question: 'For square matrices, AB = BA:',
      options: ['Always', 'Never', 'Only if A = B', 'Sometimes'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Matrix multiplication is not commutative in general, but specific matrices may commute.'
    },
  ],
  hard: [
    {
      id: 's05-h01',
      question: 'If AB and BA are both defined and square, then:',
      options: ['AB and BA may have different sizes', 'AB = BA always', 'AB and BA have the same size', 'AB and BA have the same rank'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'If A is m × n and B is n × m, then AB is m × m and BA is n × n, which may differ.'
    },
    {
      id: 's05-h02',
      question: 'For any matrix A, the matrix AᵀA is:',
      options: ['Always invertible', 'Always symmetric', 'Always diagonal', 'Always the identity'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: '(AᵀA)ᵀ = Aᵀ(Aᵀ)ᵀ = AᵀA, so AᵀA is symmetric.'
    },
    {
      id: 's05-h03',
      question: 'AB = 0 implies:',
      options: ['A = 0', 'B = 0', 'None of the above (A and B can both be non-zero)', 'A = 0 or B = 0'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Unlike fields, matrix algebra has zero divisors. AB = 0 does not imply A = 0 or B = 0.'
    },
    {
      id: 's05-h04',
      question: 'rank(AB) is:',
      options: ['Always equal to rank(A)', 'Always equal to rank(B)', 'Always equal to rank(A) · rank(B)', 'At most min(rank(A), rank(B))'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'rank(AB) ≤ min(rank(A), rank(B)). The rank can only decrease under multiplication.'
    },
    {
      id: 's05-h05',
      question: 'If A is n × n and A² = A, then A is called:',
      options: ['Idempotent', 'Involutory', 'Nilpotent', 'Orthogonal'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'A matrix A with A² = A is called idempotent.'
    },
    {
      id: 's05-h06',
      question: 'If A is n × n and A² = I, then A is called:',
      options: ['Idempotent', 'Involutory', 'Nilpotent', 'Unitary'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'A matrix A with A² = I is called involutory. Such matrices equal their own inverse.'
    },
  ],
};

// =============================================================================
// Section 6: Invertible Matrices
// =============================================================================
export const section06Quiz: DifficultyQuizData = {
  easy: [
    {
      id: 's06-e01',
      question: 'A square matrix A is invertible if there exists B such that:',
      options: ['AB = I', 'BA = I', 'AB = BA = I', 'A + B = I'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A is invertible if there exists B with AB = BA = I. Such B is denoted A⁻¹.'
    },
    {
      id: 's06-e02',
      question: 'If A is invertible, then (A⁻¹)⁻¹ equals:',
      options: ['I', 'Aᵀ', '(Aᵀ)⁻¹', 'A'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The inverse of the inverse is the original matrix: (A⁻¹)⁻¹ = A.'
    },
    {
      id: 's06-e03',
      question: 'The identity matrix I is:',
      options: ['Its own inverse', 'Not invertible', 'Never used in practice', 'Only defined for 2×2'],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'I · I = I, so I⁻¹ = I.'
    },
    {
      id: 's06-e04',
      question: 'A matrix with a row of zeros is:',
      options: ['Always invertible', 'Never invertible', 'Sometimes invertible', 'Equal to the identity'],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A row of zeros means the matrix has rank less than n, so it is not invertible.'
    },
    {
      id: 's06-e05',
      question: 'If A is 2×2 and A⁻¹ exists, then A⁻¹ is:',
      options: ['2×3', '3×2', '2×2', '1×1'],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The inverse of an n × n matrix is also n × n.'
    },
    {
      id: 's06-e06',
      question: 'If A is invertible, then Ax = b has:',
      options: ['No solutions', 'Infinitely many solutions', 'Two solutions', 'Exactly one solution'],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'If A is invertible, the unique solution is x = A⁻¹b.'
    },
  ],
  medium: [
    {
      id: 's06-m01',
      question: 'If A and B are both invertible, then (AB)⁻¹ equals:',
      options: ['B⁻¹A⁻¹', 'A⁻¹B⁻¹', '(BA)⁻¹', 'AB⁻¹'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '(AB)⁻¹ = B⁻¹A⁻¹. The order reverses!'
    },
    {
      id: 's06-m02',
      question: 'Elementary matrices are:',
      options: ['Never invertible', 'Always invertible', 'Invertible only if square', 'Invertible only if symmetric'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Every elementary matrix is invertible, with its inverse being another elementary matrix of the same type.'
    },
    {
      id: 's06-m03',
      question: 'If A is invertible, then (Aᵀ)⁻¹ equals:',
      options: ['Aᵀ', 'A', '(A⁻¹)ᵀ', '(Aᵀ)²'],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: '(Aᵀ)⁻¹ = (A⁻¹)ᵀ. Transpose and inverse commute.'
    },
    {
      id: 's06-m04',
      question: 'A square matrix is invertible if and only if its columns are:',
      options: ['All zero', 'All equal', 'Orthogonal to each other', 'Linearly independent'],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'An n × n matrix is invertible iff its columns form a linearly independent set.'
    },
    {
      id: 's06-m05',
      question: 'If A⁻¹ exists and c ≠ 0, then (cA)⁻¹ equals:',
      options: ['(1/c)A⁻¹', 'cA⁻¹', 'c⁻¹A', 'A⁻¹/c²'],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: '(cA)(1/c · A⁻¹) = I, so (cA)⁻¹ = (1/c)A⁻¹.'
    },
    {
      id: 's06-m06',
      question: 'For a 2×2 matrix A = [[a,b],[c,d]], A is invertible if:',
      options: ['a + d ≠ 0', 'ad - bc ≠ 0', 'ad + bc ≠ 0', 'a, b, c, d are all non-zero'],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A 2×2 matrix is invertible iff its determinant ad - bc is non-zero.'
    },
  ],
  hard: [
    {
      id: 's06-h01',
      question: 'An n × n matrix A is invertible if and only if:',
      options: ['A has n non-zero entries', 'A is symmetric', 'The row-reduced echelon form of A is I', 'A has positive entries'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A is invertible iff its row-reduced echelon form is the identity matrix.'
    },
    {
      id: 's06-h02',
      question: 'If A is invertible, then the null space of A is:',
      options: ['All of Fⁿ', 'A line through the origin', 'The same as the column space', '{0}'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'If A is invertible, Ax = 0 implies x = 0, so the null space contains only the zero vector.'
    },
    {
      id: 's06-h03',
      question: 'Every invertible matrix is a product of:',
      options: ['Elementary matrices', 'At most 2 matrices', 'Diagonal matrices', 'Symmetric matrices'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Since A row-reduces to I, we have E₁...EₖA = I, so A = Eₖ⁻¹...E₁⁻¹, a product of elementary matrices.'
    },
    {
      id: 's06-h04',
      question: 'If A and B are n × n and AB is invertible, then:',
      options: ['A is invertible but B might not be', 'Both A and B are invertible', 'B is invertible but A might not be', 'Neither A nor B need be invertible'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'If AB is invertible, both A and B must be invertible (rank considerations).'
    },
    {
      id: 's06-h05',
      question: 'The set of all invertible n × n matrices forms a:',
      options: ['Field', 'Vector space', 'Group under multiplication', 'Ring'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The invertible matrices form a group called GL(n, F), with matrix multiplication as the operation.'
    },
    {
      id: 's06-h06',
      question: 'If A² = A and A is invertible, then A equals:',
      options: ['The zero matrix', 'Any idempotent matrix', '-I', 'The identity matrix'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'A² = A implies A(A - I) = 0. If A is invertible, A - I = 0, so A = I.'
    },
  ],
};

// =============================================================================
// Chapter 1 Comprehensive Quiz (Hard Only)
// =============================================================================
export const chapter01Quiz: DifficultyQuizData = {
  easy: [],
  medium: [],
  hard: [
    {
      id: 'ch01-h01',
      question: 'The field of rational numbers ℚ is a subfield of:',
      options: ['Both ℝ and ℂ', 'Only ℝ', 'Only ℂ', 'Neither ℝ nor ℂ'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'ℚ ⊂ ℝ ⊂ ℂ, so ℚ is a subfield of both ℝ and ℂ.'
    },
    {
      id: 'ch01-h02',
      question: 'Row-equivalence of matrices is:',
      options: ['Reflexive only', 'An equivalence relation', 'Symmetric only', 'Transitive only'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Row-equivalence is reflexive, symmetric, and transitive, hence an equivalence relation.'
    },
    {
      id: 'ch01-h03',
      question: 'If A is m × n with m < n, then AX = 0 has:',
      options: ['No solutions', 'Only the trivial solution', 'Infinitely many solutions', 'Cannot be determined'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'If m < n, there are more unknowns than equations, so there are free variables and infinitely many solutions.'
    },
    {
      id: 'ch01-h04',
      question: 'The product of two invertible n × n matrices is:',
      options: ['Never invertible', 'Invertible only if they commute', 'Sometimes invertible', 'Always invertible'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'If A and B are invertible, then AB is invertible with (AB)⁻¹ = B⁻¹A⁻¹.'
    },
    {
      id: 'ch01-h05',
      question: 'For a field F of characteristic zero:',
      options: ['F contains a copy of ℚ', 'F is finite', '1 = 0 in F', 'F has exactly two elements'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Fields of characteristic zero contain a copy of the rationals.'
    },
    {
      id: 'ch01-h06',
      question: 'The number of pivot columns in the row-reduced echelon form of A equals:',
      options: ['The number of rows of A', 'The rank of A', 'The number of columns of A', 'The nullity of A'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The number of pivot columns equals the rank of the matrix.'
    },
    {
      id: 'ch01-h07',
      question: 'If AB = I and BA = I for square matrices A and B, then:',
      options: ['A and B are unique', 'A = B', 'B is the unique inverse of A', 'A and B are both symmetric'],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The inverse of a matrix, when it exists, is unique.'
    },
    {
      id: 'ch01-h08',
      question: 'An elementary row operation on an augmented matrix [A|b] corresponds to:',
      options: ['Changing the unknowns', 'Adding a new equation', 'Removing an equation', 'Forming a linear combination of equations'],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Elementary row operations correspond to taking linear combinations of the equations in the system.'
    },
    {
      id: 'ch01-h09',
      question: 'The set of all 2 × 2 matrices over ℝ is:',
      options: ['Closed under multiplication but not a field', 'A field', 'Not closed under multiplication', 'Equal to ℝ⁴ as a field'],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'M₂(ℝ) is closed under addition and multiplication but is not a field (non-zero matrices may fail to be invertible, and multiplication is not commutative).'
    },
    {
      id: 'ch01-h10',
      question: 'If the row-reduced echelon form of A has r non-zero rows and A is m × n, then the solution space of AX = 0 has dimension:',
      options: ['r', 'n - r', 'm - r', 'n'],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The dimension of the null space (solution space of AX = 0) is n - r, where r is the rank.'
    },
  ],
};
