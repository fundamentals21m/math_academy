export interface TheoremEntry {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Whether a proof is provided */
  hasProof?: boolean;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
  /** Optional: LaTeX-formatted proof content */
  proof?: string;
}

export const theorems: TheoremEntry[] = [
  // ==========================================================================
  // PART 1: ALGEBRAIC FOUNDATIONS
  // ==========================================================================
  
  // --- Section 1: Fields and Number Systems ---
  {
    id: 'def-field',
    title: 'Field',
    statement: 'A field $(F, +, \\cdot)$ is a set $F$ with two binary operations satisfying: (1) $(F, +)$ is an abelian group with identity $0$, (2) $(F \\setminus \\{0\\}, \\cdot)$ is an abelian group with identity $1$, and (3) multiplication distributes over addition.',
    sectionId: 1,
    sectionTitle: 'Fields and Number Systems',
    category: 'Algebraic Foundations',
    type: 'definition',
  },
  {
    id: 'thm-field-uniqueness',
    title: 'Uniqueness of Field Identities',
    statement: 'In any field $F$, the additive identity $0$ and multiplicative identity $1$ are unique.',
    sectionId: 1,
    sectionTitle: 'Fields and Number Systems',
    category: 'Algebraic Foundations',
    type: 'theorem',
    hasProof: true,
    proof: `
**Uniqueness of 0:** Suppose $0$ and $0'$ are both additive identities. Then:
$$0 = 0 + 0' = 0'$$
where the first equality uses that $0'$ is an identity and the second uses that $0$ is an identity.

**Uniqueness of 1:** Suppose $1$ and $1'$ are both multiplicative identities. Then:
$$1 = 1 \\cdot 1' = 1'$$
    `,
  },
  {
    id: 'thm-zero-product',
    title: 'Zero Product Property',
    statement: 'In any field $F$, for all $a \\in F$: $a \\cdot 0 = 0$.',
    sectionId: 1,
    sectionTitle: 'Fields and Number Systems',
    category: 'Algebraic Foundations',
    type: 'theorem',
    hasProof: true,
    proof: `
For any $a \\in F$:
$$a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$$

Adding $-(a \\cdot 0)$ to both sides:
$$0 = a \\cdot 0$$
    `,
  },
  
  // --- Section 2: Vector Spaces ---
  {
    id: 'def-vector-space',
    title: 'Vector Space',
    statement: 'A vector space over a field $F$ is a set $V$ with vector addition $+: V \\times V \\to V$ and scalar multiplication $\\cdot: F \\times V \\to V$ satisfying 8 axioms: (1) commutativity of addition, (2) associativity of addition, (3) additive identity, (4) additive inverses, (5) multiplicative identity ($1 \\cdot v = v$), (6) associativity of scalar multiplication, (7-8) distributive laws.',
    sectionId: 2,
    sectionTitle: 'Vector Spaces',
    category: 'Vector Spaces',
    type: 'definition',
  },
  {
    id: 'thm-unique-zero-vector',
    title: 'Uniqueness of Zero Vector',
    statement: 'Every vector space has exactly one zero vector $\\mathbf{0}$.',
    sectionId: 2,
    sectionTitle: 'Vector Spaces',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
Suppose $\\mathbf{0}$ and $\\mathbf{0}'$ are both zero vectors. Then:
$$\\mathbf{0} = \\mathbf{0} + \\mathbf{0}' = \\mathbf{0}'$$
where the first equality uses that $\\mathbf{0}'$ is a zero vector and the second uses that $\\mathbf{0}$ is a zero vector.
    `,
  },
  {
    id: 'thm-scalar-zero',
    title: 'Scalar Zero Property',
    statement: 'For any vector $v$ in a vector space $V$: $0 \\cdot v = \\mathbf{0}$.',
    sectionId: 2,
    sectionTitle: 'Vector Spaces',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
For any $v \\in V$:
$$0 \\cdot v = (0 + 0) \\cdot v = 0 \\cdot v + 0 \\cdot v$$

Adding $-(0 \\cdot v)$ to both sides:
$$\\mathbf{0} = 0 \\cdot v$$
    `,
  },
  {
    id: 'thm-negative-scalar',
    title: 'Negative Scalar Property',
    statement: 'For any scalar $c$ and vector $v$: $(-c) \\cdot v = -(c \\cdot v) = c \\cdot (-v)$.',
    sectionId: 2,
    sectionTitle: 'Vector Spaces',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
We show $(-c) \\cdot v + c \\cdot v = \\mathbf{0}$:
$$(-c) \\cdot v + c \\cdot v = ((-c) + c) \\cdot v = 0 \\cdot v = \\mathbf{0}$$

Therefore $(-c) \\cdot v$ is the additive inverse of $c \\cdot v$, i.e., $(-c) \\cdot v = -(c \\cdot v)$.

Similarly, $c \\cdot (-v) + c \\cdot v = c \\cdot ((-v) + v) = c \\cdot \\mathbf{0} = \\mathbf{0}$.
    `,
  },
  
  // --- Section 3: Subspaces ---
  {
    id: 'def-subspace',
    title: 'Subspace',
    statement: 'A subset $W$ of a vector space $V$ is a subspace if $W$ is itself a vector space under the operations inherited from $V$.',
    sectionId: 3,
    sectionTitle: 'Subspaces',
    category: 'Vector Spaces',
    type: 'definition',
  },
  {
    id: 'thm-subspace-test',
    title: 'Subspace Test',
    statement: 'A non-empty subset $W \\subseteq V$ is a subspace if and only if for all $u, v \\in W$ and $c \\in F$: (1) $u + v \\in W$ and (2) $c \\cdot u \\in W$.',
    sectionId: 3,
    sectionTitle: 'Subspaces',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
**(⇒)** If $W$ is a subspace, it is closed under addition and scalar multiplication by definition.

**(⇐)** Assume conditions (1) and (2) hold.
- **Zero vector:** Since $W$ is non-empty, there exists $w \\in W$. By (2), $0 \\cdot w = \\mathbf{0} \\in W$.
- **Additive inverse:** For $w \\in W$, by (2), $(-1) \\cdot w = -w \\in W$.
- The remaining axioms are inherited from $V$.

Therefore $W$ is a subspace.
    `,
  },
  {
    id: 'def-span',
    title: 'Span',
    statement: 'The span of a set $S \\subseteq V$ is the set of all linear combinations of vectors in $S$: $\\text{span}(S) = \\{c_1 v_1 + \\cdots + c_n v_n : c_i \\in F, v_i \\in S\\}$.',
    sectionId: 3,
    sectionTitle: 'Subspaces',
    category: 'Vector Spaces',
    type: 'definition',
  },
  {
    id: 'thm-span-subspace',
    title: 'Span is a Subspace',
    statement: 'For any subset $S$ of a vector space $V$, $\\text{span}(S)$ is a subspace of $V$. Moreover, it is the smallest subspace containing $S$.',
    sectionId: 3,
    sectionTitle: 'Subspaces',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
**Subspace:** Let $u = \\sum a_i v_i$ and $w = \\sum b_j u_j$ be in $\\text{span}(S)$.
- $u + w = \\sum a_i v_i + \\sum b_j u_j$ is a linear combination, so $u + w \\in \\text{span}(S)$.
- For $c \\in F$: $c \\cdot u = c \\sum a_i v_i = \\sum (ca_i) v_i \\in \\text{span}(S)$.

**Smallest:** Any subspace $W$ containing $S$ must contain all linear combinations of elements of $S$, hence $\\text{span}(S) \\subseteq W$.
    `,
  },
  {
    id: 'thm-subspace-intersection',
    title: 'Intersection of Subspaces',
    statement: 'The intersection of any collection of subspaces of $V$ is a subspace of $V$.',
    sectionId: 3,
    sectionTitle: 'Subspaces',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $\\{W_i\\}_{i \\in I}$ be subspaces of $V$ and let $W = \\bigcap_{i \\in I} W_i$.

- **Non-empty:** Each $W_i$ contains $\\mathbf{0}$, so $\\mathbf{0} \\in W$.
- **Closure under addition:** If $u, v \\in W$, then $u, v \\in W_i$ for all $i$. Since each $W_i$ is a subspace, $u + v \\in W_i$ for all $i$, so $u + v \\in W$.
- **Closure under scalar multiplication:** Similar argument.
    `,
  },
  
  // --- Section 4: Bases and Dimension ---
  {
    id: 'def-linear-independence',
    title: 'Linear Independence',
    statement: 'Vectors $v_1, \\ldots, v_n$ are linearly independent if $c_1 v_1 + \\cdots + c_n v_n = \\mathbf{0}$ implies $c_1 = \\cdots = c_n = 0$.',
    sectionId: 4,
    sectionTitle: 'Bases and Dimension',
    category: 'Vector Spaces',
    type: 'definition',
  },
  {
    id: 'def-basis',
    title: 'Basis',
    statement: 'A basis of a vector space $V$ is a linearly independent set that spans $V$.',
    sectionId: 4,
    sectionTitle: 'Bases and Dimension',
    category: 'Vector Spaces',
    type: 'definition',
  },
  {
    id: 'thm-unique-representation',
    title: 'Unique Representation',
    statement: 'If $\\{v_1, \\ldots, v_n\\}$ is a basis for $V$, then every vector $v \\in V$ can be written uniquely as $v = c_1 v_1 + \\cdots + c_n v_n$.',
    sectionId: 4,
    sectionTitle: 'Bases and Dimension',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
**Existence:** Since the basis spans $V$, every $v$ is a linear combination.

**Uniqueness:** Suppose $v = \\sum c_i v_i = \\sum d_i v_i$. Then:
$$\\sum (c_i - d_i) v_i = \\mathbf{0}$$

By linear independence, $c_i - d_i = 0$ for all $i$, so $c_i = d_i$.
    `,
  },
  {
    id: 'thm-steinitz-exchange',
    title: 'Steinitz Exchange Lemma',
    statement: 'Let $\\{v_1, \\ldots, v_m\\}$ span $V$ and let $\\{w_1, \\ldots, w_n\\}$ be linearly independent in $V$. Then $n \\leq m$, and after reordering, $\\{w_1, \\ldots, w_n, v_{n+1}, \\ldots, v_m\\}$ spans $V$.',
    sectionId: 4,
    sectionTitle: 'Bases and Dimension',
    category: 'Vector Spaces',
    type: 'lemma',
    hasProof: true,
    proof: `
We proceed by induction on $n$.

**Base case ($n = 1$):** Since $w_1 \\neq \\mathbf{0}$ and the $v_i$ span $V$, we can write $w_1 = \\sum a_i v_i$ with some $a_j \\neq 0$. After reordering, say $a_1 \\neq 0$. Then $v_1 \\in \\text{span}(w_1, v_2, \\ldots, v_m)$, so $\\{w_1, v_2, \\ldots, v_m\\}$ spans $V$.

**Inductive step:** Assume the result for $n-1$ linearly independent vectors. By induction hypothesis, $\\{w_1, \\ldots, w_{n-1}, v_n, \\ldots, v_m\\}$ spans $V$. Apply the base case argument to $w_n$ and this spanning set.
    `,
  },
  {
    id: 'thm-dimension-well-defined',
    title: 'Dimension is Well-Defined',
    statement: 'Any two bases of a finite-dimensional vector space have the same number of elements.',
    sectionId: 4,
    sectionTitle: 'Bases and Dimension',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $\\{v_1, \\ldots, v_m\\}$ and $\\{w_1, \\ldots, w_n\\}$ be bases of $V$.

Since $\\{v_1, \\ldots, v_m\\}$ spans $V$ and $\\{w_1, \\ldots, w_n\\}$ is linearly independent, by the Steinitz Exchange Lemma, $n \\leq m$.

Similarly, since $\\{w_1, \\ldots, w_n\\}$ spans $V$ and $\\{v_1, \\ldots, v_m\\}$ is linearly independent, $m \\leq n$.

Therefore $m = n$.
    `,
  },
  {
    id: 'def-dimension',
    title: 'Dimension',
    statement: 'The dimension of a finite-dimensional vector space $V$, denoted $\\dim(V)$, is the number of vectors in any basis of $V$.',
    sectionId: 4,
    sectionTitle: 'Bases and Dimension',
    category: 'Vector Spaces',
    type: 'definition',
  },
  {
    id: 'thm-extension-theorem',
    title: 'Basis Extension Theorem',
    statement: 'Every linearly independent set in a finite-dimensional vector space can be extended to a basis.',
    sectionId: 4,
    sectionTitle: 'Bases and Dimension',
    category: 'Vector Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $S = \\{v_1, \\ldots, v_k\\}$ be linearly independent in $V$ with $\\dim(V) = n$.

If $\\text{span}(S) = V$, then $S$ is already a basis.

Otherwise, there exists $v_{k+1} \\in V \\setminus \\text{span}(S)$. Then $\\{v_1, \\ldots, v_k, v_{k+1}\\}$ is linearly independent.

Continue this process. Since any linearly independent set has at most $n$ elements, this process must terminate with a basis.
    `,
  },
  
  // ==========================================================================
  // PART 2: LINEAR TRANSFORMATIONS
  // ==========================================================================
  
  // --- Section 5: Linear Transformations ---
  {
    id: 'def-linear-transformation',
    title: 'Linear Transformation',
    statement: 'A function $T: V \\to W$ between vector spaces is a linear transformation if for all $u, v \\in V$ and $c \\in F$: (1) $T(u + v) = T(u) + T(v)$ and (2) $T(cv) = cT(v)$.',
    sectionId: 5,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    type: 'definition',
  },
  {
    id: 'def-kernel-image',
    title: 'Kernel and Image',
    statement: 'For a linear transformation $T: V \\to W$: the kernel (null space) is $\\ker(T) = \\{v \\in V : T(v) = \\mathbf{0}\\}$ and the image (range) is $\\text{im}(T) = \\{T(v) : v \\in V\\}$.',
    sectionId: 5,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    type: 'definition',
  },
  {
    id: 'thm-kernel-image-subspace',
    title: 'Kernel and Image are Subspaces',
    statement: 'For any linear transformation $T: V \\to W$, $\\ker(T)$ is a subspace of $V$ and $\\text{im}(T)$ is a subspace of $W$.',
    sectionId: 5,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `
**Kernel:** 
- $T(\\mathbf{0}) = \\mathbf{0}$, so $\\mathbf{0} \\in \\ker(T)$.
- If $u, v \\in \\ker(T)$, then $T(u + v) = T(u) + T(v) = \\mathbf{0}$, so $u + v \\in \\ker(T)$.
- If $u \\in \\ker(T)$ and $c \\in F$, then $T(cu) = cT(u) = c \\cdot \\mathbf{0} = \\mathbf{0}$, so $cu \\in \\ker(T)$.

**Image:**
- $T(\\mathbf{0}) = \\mathbf{0} \\in \\text{im}(T)$.
- If $w_1, w_2 \\in \\text{im}(T)$, say $w_1 = T(v_1)$ and $w_2 = T(v_2)$, then $w_1 + w_2 = T(v_1 + v_2) \\in \\text{im}(T)$.
- If $w = T(v) \\in \\text{im}(T)$, then $cw = cT(v) = T(cv) \\in \\text{im}(T)$.
    `,
  },
  {
    id: 'def-rank-nullity',
    title: 'Rank and Nullity',
    statement: 'The rank of $T$ is $\\text{rank}(T) = \\dim(\\text{im}(T))$. The nullity of $T$ is $\\text{nullity}(T) = \\dim(\\ker(T))$.',
    sectionId: 5,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    type: 'definition',
  },
  {
    id: 'thm-rank-nullity',
    title: 'Rank-Nullity Theorem',
    statement: 'For a linear transformation $T: V \\to W$ where $V$ is finite-dimensional: $\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)$.',
    sectionId: 5,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $\\dim(V) = n$ and $\\dim(\\ker(T)) = k$. Let $\\{v_1, \\ldots, v_k\\}$ be a basis for $\\ker(T)$.

Extend this to a basis $\\{v_1, \\ldots, v_k, u_1, \\ldots, u_{n-k}\\}$ of $V$.

**Claim:** $\\{T(u_1), \\ldots, T(u_{n-k})\\}$ is a basis for $\\text{im}(T)$.

**Spanning:** Any $w \\in \\text{im}(T)$ equals $T(v)$ for some $v = \\sum a_i v_i + \\sum b_j u_j$. Then:
$$w = T(v) = \\sum a_i T(v_i) + \\sum b_j T(u_j) = \\sum b_j T(u_j)$$

**Linear independence:** If $\\sum c_j T(u_j) = \\mathbf{0}$, then $T(\\sum c_j u_j) = \\mathbf{0}$, so $\\sum c_j u_j \\in \\ker(T)$. Writing this as a linear combination of the kernel basis gives $c_j = 0$ for all $j$.

Therefore $\\text{rank}(T) = n - k$, i.e., $n = \\text{rank}(T) + \\text{nullity}(T)$.
    `,
  },
  {
    id: 'thm-injective-criterion',
    title: 'Injectivity Criterion',
    statement: 'A linear transformation $T: V \\to W$ is injective (one-to-one) if and only if $\\ker(T) = \\{\\mathbf{0}\\}$.',
    sectionId: 5,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `
**(⇒)** If $T$ is injective and $v \\in \\ker(T)$, then $T(v) = \\mathbf{0} = T(\\mathbf{0})$. By injectivity, $v = \\mathbf{0}$.

**(⇐)** If $\\ker(T) = \\{\\mathbf{0}\\}$ and $T(u) = T(v)$, then $T(u - v) = \\mathbf{0}$, so $u - v \\in \\ker(T) = \\{\\mathbf{0}\\}$. Thus $u = v$.
    `,
  },
  {
    id: 'thm-isomorphism',
    title: 'Isomorphism Theorem',
    statement: 'Two finite-dimensional vector spaces over the same field are isomorphic if and only if they have the same dimension.',
    sectionId: 5,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `
**(⇒)** If $T: V \\to W$ is an isomorphism, then $T$ is bijective. The rank-nullity theorem gives $\\dim(V) = \\dim(W) + 0 = \\dim(W)$.

**(⇐)** If $\\dim(V) = \\dim(W) = n$, let $\\{v_1, \\ldots, v_n\\}$ and $\\{w_1, \\ldots, w_n\\}$ be bases. Define $T(v_i) = w_i$ and extend linearly. Then $T$ is an isomorphism.
    `,
  },
  
  // --- Section 6: Matrix Representation ---
  {
    id: 'def-matrix-representation',
    title: 'Matrix Representation',
    statement: 'Let $T: V \\to W$ be linear with ordered bases $\\beta$ of $V$ and $\\gamma$ of $W$. The matrix $[T]_\\beta^\\gamma$ is defined by $[T(v_j)]_\\gamma = $ column $j$ of $[T]_\\beta^\\gamma$.',
    sectionId: 6,
    sectionTitle: 'Matrix Representation',
    category: 'Linear Transformations',
    type: 'definition',
  },
  {
    id: 'thm-matrix-multiplication',
    title: 'Matrix Multiplication as Composition',
    statement: 'For linear transformations $T: V \\to W$ and $S: W \\to X$ with appropriate bases: $[S \\circ T]_\\beta^\\delta = [S]_\\gamma^\\delta [T]_\\beta^\\gamma$.',
    sectionId: 6,
    sectionTitle: 'Matrix Representation',
    category: 'Linear Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $\\{v_1, \\ldots, v_n\\}$ be the basis $\\beta$ of $V$. For each $j$:
$$[(S \\circ T)(v_j)]_\\delta = [S(T(v_j))]_\\delta = [S]_\\gamma^\\delta [T(v_j)]_\\gamma = [S]_\\gamma^\\delta ([T]_\\beta^\\gamma)_j$$

where $([T]_\\beta^\\gamma)_j$ denotes column $j$ of $[T]_\\beta^\\gamma$.

This equals column $j$ of the product $[S]_\\gamma^\\delta [T]_\\beta^\\gamma$.
    `,
  },
  {
    id: 'def-similar-matrices',
    title: 'Similar Matrices',
    statement: 'Matrices $A$ and $B$ are similar if there exists an invertible matrix $P$ such that $B = P^{-1}AP$.',
    sectionId: 6,
    sectionTitle: 'Matrix Representation',
    category: 'Linear Transformations',
    type: 'definition',
  },
  {
    id: 'thm-change-of-basis',
    title: 'Change of Basis Formula',
    statement: 'If $[T]_\\beta$ and $[T]_{\\beta\'}$ are matrices of $T: V \\to V$ with respect to bases $\\beta$ and $\\beta\'$, then $[T]_{\\beta\'} = P^{-1}[T]_\\beta P$ where $P$ is the change of basis matrix from $\\beta\'$ to $\\beta$.',
    sectionId: 6,
    sectionTitle: 'Matrix Representation',
    category: 'Linear Transformations',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $I: V \\to V$ be the identity map. Then $[I]_{\\beta\'}^\\beta = P$ is the change of basis matrix.

We have $T = I \\circ T \\circ I$, so:
$$[T]_{\\beta\'} = [I]_\\beta^{\\beta\'} [T]_\\beta [I]_{\\beta\'}^\\beta = P^{-1} [T]_\\beta P$$
    `,
  },
  
  // --- Section 7: Linear Functionals and Dual Spaces ---
  {
    id: 'def-linear-functional',
    title: 'Linear Functional',
    statement: 'A linear functional on a vector space $V$ over $F$ is a linear transformation $f: V \\to F$.',
    sectionId: 7,
    sectionTitle: 'Linear Functionals and Dual Spaces',
    category: 'Dual Spaces',
    type: 'definition',
  },
  {
    id: 'def-dual-space',
    title: 'Dual Space',
    statement: 'The dual space of $V$, denoted $V^*$, is the vector space of all linear functionals on $V$.',
    sectionId: 7,
    sectionTitle: 'Linear Functionals and Dual Spaces',
    category: 'Dual Spaces',
    type: 'definition',
  },
  {
    id: 'thm-dual-dimension',
    title: 'Dual Space Dimension',
    statement: 'If $V$ is finite-dimensional, then $\\dim(V^*) = \\dim(V)$.',
    sectionId: 7,
    sectionTitle: 'Linear Functionals and Dual Spaces',
    category: 'Dual Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $\\{v_1, \\ldots, v_n\\}$ be a basis for $V$. Define $f_i: V \\to F$ by:
$$f_i(v_j) = \\delta_{ij} = \\begin{cases} 1 & i = j \\\\ 0 & i \\neq j \\end{cases}$$

**Claim:** $\\{f_1, \\ldots, f_n\\}$ is a basis for $V^*$.

**Spanning:** For any $f \\in V^*$, let $c_i = f(v_i)$. Then for any $v = \\sum a_j v_j$:
$$f(v) = \\sum a_j f(v_j) = \\sum a_j c_j = \\sum c_i f_i(v)$$
So $f = \\sum c_i f_i$.

**Linear independence:** If $\\sum c_i f_i = 0$, evaluate at $v_j$ to get $c_j = 0$.
    `,
  },
  {
    id: 'def-dual-basis',
    title: 'Dual Basis',
    statement: 'If $\\{v_1, \\ldots, v_n\\}$ is a basis for $V$, the dual basis $\\{f_1, \\ldots, f_n\\}$ of $V^*$ is defined by $f_i(v_j) = \\delta_{ij}$.',
    sectionId: 7,
    sectionTitle: 'Linear Functionals and Dual Spaces',
    category: 'Dual Spaces',
    type: 'definition',
  },
  {
    id: 'def-annihilator',
    title: 'Annihilator',
    statement: 'For a subspace $W \\subseteq V$, the annihilator $W^0 \\subseteq V^*$ is $W^0 = \\{f \\in V^* : f(w) = 0 \\text{ for all } w \\in W\\}$.',
    sectionId: 7,
    sectionTitle: 'Linear Functionals and Dual Spaces',
    category: 'Dual Spaces',
    type: 'definition',
  },
  {
    id: 'thm-annihilator-dimension',
    title: 'Annihilator Dimension',
    statement: 'For a subspace $W$ of finite-dimensional $V$: $\\dim(W^0) = \\dim(V) - \\dim(W)$.',
    sectionId: 7,
    sectionTitle: 'Linear Functionals and Dual Spaces',
    category: 'Dual Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
Define $\\phi: V^* \\to W^*$ by $\\phi(f) = f|_W$ (restriction to $W$).

$\\phi$ is linear and surjective (extend any functional on $W$ to $V$).

$\\ker(\\phi) = W^0$ (functionals that vanish on $W$).

By rank-nullity: $\\dim(V^*) = \\dim(W^*) + \\dim(W^0)$.

Since $\\dim(V^*) = \\dim(V)$ and $\\dim(W^*) = \\dim(W)$:
$$\\dim(W^0) = \\dim(V) - \\dim(W)$$
    `,
  },
  {
    id: 'thm-double-dual',
    title: 'Natural Isomorphism to Double Dual',
    statement: 'The map $\\phi: V \\to V^{**}$ defined by $\\phi(v)(f) = f(v)$ is a natural isomorphism for finite-dimensional $V$.',
    sectionId: 7,
    sectionTitle: 'Linear Functionals and Dual Spaces',
    category: 'Dual Spaces',
    type: 'theorem',
    hasProof: true,
    proof: `
**Linearity:** For $u, v \\in V$ and $f \\in V^*$:
$$\\phi(u + v)(f) = f(u + v) = f(u) + f(v) = \\phi(u)(f) + \\phi(v)(f)$$

**Injectivity:** If $\\phi(v) = 0$, then $f(v) = 0$ for all $f \\in V^*$. Choosing $f$ from the dual basis shows $v = \\mathbf{0}$.

**Dimension:** $\\dim(V) = \\dim(V^*) = \\dim(V^{**})$, so $\\phi$ is an isomorphism.

**Natural:** $\\phi$ doesn't depend on a choice of basis.
    `,
  },
  
  // ==========================================================================
  // PART 3: DETERMINANTS AND SYSTEMS
  // ==========================================================================
  
  // --- Section 8: Systems of Linear Equations ---
  {
    id: 'thm-homogeneous-solutions',
    title: 'Homogeneous System Solutions',
    statement: 'The solution set of a homogeneous system $Ax = \\mathbf{0}$ is a subspace of $F^n$, called the null space of $A$.',
    sectionId: 8,
    sectionTitle: 'Systems of Linear Equations',
    category: 'Systems and Determinants',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $N = \\{x \\in F^n : Ax = \\mathbf{0}\\}$.

- $A \\cdot \\mathbf{0} = \\mathbf{0}$, so $\\mathbf{0} \\in N$.
- If $x, y \\in N$, then $A(x + y) = Ax + Ay = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}$.
- If $x \\in N$ and $c \\in F$, then $A(cx) = c(Ax) = c \\cdot \\mathbf{0} = \\mathbf{0}$.
    `,
  },
  {
    id: 'thm-solution-structure',
    title: 'Solution Structure Theorem',
    statement: 'If $x_0$ is a particular solution to $Ax = b$ and $N$ is the null space of $A$, then the complete solution set is $\\{x_0 + n : n \\in N\\}$.',
    sectionId: 8,
    sectionTitle: 'Systems of Linear Equations',
    category: 'Systems and Determinants',
    type: 'theorem',
    hasProof: true,
    proof: `
**(⊆)** If $x$ is a solution, then $A(x - x_0) = Ax - Ax_0 = b - b = \\mathbf{0}$, so $x - x_0 \\in N$, meaning $x = x_0 + n$ for some $n \\in N$.

**(⊇)** If $x = x_0 + n$ with $n \\in N$, then $Ax = A(x_0 + n) = Ax_0 + An = b + \\mathbf{0} = b$.
    `,
  },
  {
    id: 'thm-row-equivalence',
    title: 'Row Equivalence Theorem',
    statement: 'Row equivalent matrices have the same row space and the same null space.',
    sectionId: 8,
    sectionTitle: 'Systems of Linear Equations',
    category: 'Systems and Determinants',
    type: 'theorem',
  },
  
  // --- Section 9: Determinants ---
  {
    id: 'def-determinant',
    title: 'Determinant',
    statement: 'The determinant is the unique function $\\det: M_n(F) \\to F$ that is (1) multilinear in columns, (2) alternating (det = 0 if two columns are equal), and (3) $\\det(I) = 1$.',
    sectionId: 9,
    sectionTitle: 'Determinants',
    category: 'Systems and Determinants',
    type: 'definition',
  },
  {
    id: 'thm-det-transpose',
    title: 'Determinant of Transpose',
    statement: '$\\det(A^T) = \\det(A)$ for any square matrix $A$.',
    sectionId: 9,
    sectionTitle: 'Determinants',
    category: 'Systems and Determinants',
    type: 'theorem',
  },
  {
    id: 'thm-det-product',
    title: 'Determinant Product Rule',
    statement: '$\\det(AB) = \\det(A) \\det(B)$ for any $n \\times n$ matrices $A$ and $B$.',
    sectionId: 9,
    sectionTitle: 'Determinants',
    category: 'Systems and Determinants',
    type: 'theorem',
    hasProof: true,
    proof: `
Consider the function $\\phi(A) = \\det(AB) / \\det(B)$ when $\\det(B) \\neq 0$.

$\\phi$ is multilinear and alternating in the columns of $A$ (properties inherited from det).

Since $\\phi(I) = \\det(B)/\\det(B) = 1$, by uniqueness of determinant, $\\phi(A) = \\det(A)$.

Therefore $\\det(AB) = \\det(A)\\det(B)$.

The case $\\det(B) = 0$ follows by continuity.
    `,
  },
  {
    id: 'thm-invertible-criterion',
    title: 'Invertibility and Determinant',
    statement: 'A square matrix $A$ is invertible if and only if $\\det(A) \\neq 0$.',
    sectionId: 9,
    sectionTitle: 'Determinants',
    category: 'Systems and Determinants',
    type: 'theorem',
    hasProof: true,
    proof: `
**(⇒)** If $A$ is invertible, then $AA^{-1} = I$. By the product rule:
$$\\det(A)\\det(A^{-1}) = \\det(I) = 1$$
So $\\det(A) \\neq 0$.

**(⇐)** If $\\det(A) \\neq 0$, then the columns of $A$ are linearly independent (if dependent, two columns would be proportional, giving det = 0). Thus $A$ has full rank and is invertible.
    `,
  },
  {
    id: 'thm-cofactor-expansion',
    title: 'Cofactor Expansion',
    statement: 'The determinant can be computed by expansion along any row $i$: $\\det(A) = \\sum_{j=1}^n a_{ij} C_{ij}$ where $C_{ij} = (-1)^{i+j} \\det(M_{ij})$ is the cofactor.',
    sectionId: 9,
    sectionTitle: 'Determinants',
    category: 'Systems and Determinants',
    type: 'theorem',
  },
  {
    id: 'thm-cramers-rule',
    title: "Cramer's Rule",
    statement: 'If $A$ is invertible and $Ax = b$, then $x_i = \\det(A_i) / \\det(A)$ where $A_i$ is $A$ with column $i$ replaced by $b$.',
    sectionId: 9,
    sectionTitle: 'Determinants',
    category: 'Systems and Determinants',
    type: 'theorem',
    hasProof: true,
    proof: `
Let $e_i$ be the $i$-th standard basis vector. Then $x_i = e_i^T x = e_i^T A^{-1} b$.

By the adjugate formula, $A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)$.

The $(i,i)$ entry of $\\text{adj}(A) \\cdot b$ expanded gives:
$$\\sum_j C_{ji} b_j$$

This equals $\\det(A_i)$ by cofactor expansion along column $i$.
    `,
  },
  
  // ==========================================================================
  // PART 4: EIGENTHEORY AND CANONICAL FORMS
  // ==========================================================================
  
  // --- Section 10: Eigenvalues and Eigenvectors ---
  {
    id: 'def-eigenvalue',
    title: 'Eigenvalue and Eigenvector',
    statement: 'A scalar $\\lambda$ is an eigenvalue of $T: V \\to V$ if there exists a nonzero vector $v$ such that $T(v) = \\lambda v$. Such $v$ is called an eigenvector.',
    sectionId: 10,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigentheory',
    type: 'definition',
  },
  {
    id: 'def-characteristic-polynomial',
    title: 'Characteristic Polynomial',
    statement: 'The characteristic polynomial of a matrix $A$ is $p(\\lambda) = \\det(\\lambda I - A)$.',
    sectionId: 10,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigentheory',
    type: 'definition',
  },
  {
    id: 'thm-eigenvalue-root',
    title: 'Eigenvalues as Roots',
    statement: '$\\lambda$ is an eigenvalue of $A$ if and only if $\\lambda$ is a root of the characteristic polynomial.',
    sectionId: 10,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigentheory',
    type: 'theorem',
    hasProof: true,
    proof: `
$\\lambda$ is an eigenvalue $\\iff$ $(A - \\lambda I)v = 0$ has a nonzero solution
$\\iff$ $A - \\lambda I$ is not invertible
$\\iff$ $\\det(A - \\lambda I) = 0$
$\\iff$ $\\det(\\lambda I - A) = 0$
$\\iff$ $\\lambda$ is a root of the characteristic polynomial.
    `,
  },
  {
    id: 'def-eigenspace',
    title: 'Eigenspace',
    statement: 'The eigenspace of eigenvalue $\\lambda$ is $E_\\lambda = \\ker(T - \\lambda I) = \\{v : T(v) = \\lambda v\\}$.',
    sectionId: 10,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigentheory',
    type: 'definition',
  },
  {
    id: 'thm-eigenvectors-independent',
    title: 'Eigenvectors for Distinct Eigenvalues',
    statement: 'Eigenvectors corresponding to distinct eigenvalues are linearly independent.',
    sectionId: 10,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigentheory',
    type: 'theorem',
    hasProof: true,
    proof: `
Suppose $\\lambda_1, \\ldots, \\lambda_k$ are distinct eigenvalues with eigenvectors $v_1, \\ldots, v_k$.

Proceed by induction on $k$. The case $k = 1$ is trivial.

Suppose $c_1 v_1 + \\cdots + c_k v_k = \\mathbf{0}$. Apply $T$:
$$c_1 \\lambda_1 v_1 + \\cdots + c_k \\lambda_k v_k = \\mathbf{0}$$

Subtract $\\lambda_k$ times the original equation:
$$c_1 (\\lambda_1 - \\lambda_k) v_1 + \\cdots + c_{k-1} (\\lambda_{k-1} - \\lambda_k) v_{k-1} = \\mathbf{0}$$

By induction, $c_i (\\lambda_i - \\lambda_k) = 0$ for $i < k$. Since $\\lambda_i \\neq \\lambda_k$, we have $c_i = 0$.

Then $c_k v_k = \\mathbf{0}$, so $c_k = 0$.
    `,
  },
  {
    id: 'def-algebraic-geometric-multiplicity',
    title: 'Algebraic and Geometric Multiplicity',
    statement: 'The algebraic multiplicity of $\\lambda$ is its multiplicity as a root of the characteristic polynomial. The geometric multiplicity is $\\dim(E_\\lambda)$.',
    sectionId: 10,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigentheory',
    type: 'definition',
  },
  {
    id: 'thm-multiplicity-inequality',
    title: 'Multiplicity Inequality',
    statement: 'For any eigenvalue $\\lambda$: geometric multiplicity $\\leq$ algebraic multiplicity.',
    sectionId: 10,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigentheory',
    type: 'theorem',
  },
  
  // --- Section 11: Diagonalization ---
  {
    id: 'def-diagonalizable',
    title: 'Diagonalizable',
    statement: 'A linear operator $T$ (or matrix $A$) is diagonalizable if there exists a basis of eigenvectors for $V$.',
    sectionId: 11,
    sectionTitle: 'Diagonalization',
    category: 'Eigentheory',
    type: 'definition',
  },
  {
    id: 'thm-diagonalization-criterion',
    title: 'Diagonalization Criterion',
    statement: '$T$ is diagonalizable if and only if the sum of the dimensions of eigenspaces equals $\\dim(V)$, i.e., geometric multiplicity equals algebraic multiplicity for each eigenvalue.',
    sectionId: 11,
    sectionTitle: 'Diagonalization',
    category: 'Eigentheory',
    type: 'theorem',
    hasProof: true,
    proof: `
$T$ is diagonalizable $\\iff$ $V$ has a basis of eigenvectors
$\\iff$ $V = E_{\\lambda_1} \\oplus \\cdots \\oplus E_{\\lambda_k}$ (direct sum of eigenspaces)
$\\iff$ $\\dim(V) = \\sum \\dim(E_{\\lambda_i}) = \\sum$ (geometric multiplicities)

Since $\\sum$ (algebraic multiplicities) $= n = \\dim(V)$ and geometric $\\leq$ algebraic for each eigenvalue, equality holds iff all geometric = algebraic.
    `,
  },
  {
    id: 'thm-distinct-eigenvalues-diagonalizable',
    title: 'Distinct Eigenvalues Imply Diagonalizable',
    statement: 'If a linear operator on an $n$-dimensional space has $n$ distinct eigenvalues, it is diagonalizable.',
    sectionId: 11,
    sectionTitle: 'Diagonalization',
    category: 'Eigentheory',
    type: 'corollary',
    hasProof: true,
    proof: `
If $T$ has $n$ distinct eigenvalues $\\lambda_1, \\ldots, \\lambda_n$, choose an eigenvector $v_i$ for each.

By the theorem on independence of eigenvectors for distinct eigenvalues, $\\{v_1, \\ldots, v_n\\}$ is linearly independent.

Since this is an independent set of $n$ vectors in an $n$-dimensional space, it's a basis.

Thus $T$ is diagonalizable.
    `,
  },
  {
    id: 'thm-spectral-theorem-symmetric',
    title: 'Spectral Theorem (Real Symmetric Matrices)',
    statement: 'Every real symmetric matrix is orthogonally diagonalizable: $A = QDQ^T$ where $Q$ is orthogonal and $D$ is diagonal.',
    sectionId: 11,
    sectionTitle: 'Diagonalization',
    category: 'Eigentheory',
    type: 'theorem',
    hasProof: true,
    proof: `
**Step 1: Eigenvalues are real.** If $Av = \\lambda v$ with $v \\neq 0$:
$$\\bar{\\lambda} \\bar{v}^T v = \\bar{v}^T \\bar{\\lambda} v = \\bar{v}^T A v = (A^T \\bar{v})^T v = (A\\bar{v})^T v = \\lambda \\bar{v}^T v$$
Since $\\bar{v}^T v = \\|v\\|^2 > 0$, we have $\\bar{\\lambda} = \\lambda$.

**Step 2: Eigenvectors for distinct eigenvalues are orthogonal.** If $Av = \\lambda v$ and $Aw = \\mu w$ with $\\lambda \\neq \\mu$:
$$\\lambda (v \\cdot w) = (Av) \\cdot w = v \\cdot (A^T w) = v \\cdot (Aw) = \\mu (v \\cdot w)$$
So $(\\lambda - \\mu)(v \\cdot w) = 0$, giving $v \\cdot w = 0$.

**Step 3: Induction argument** shows $A$ is diagonalizable with orthonormal eigenbasis.
    `,
  },
  
  // --- Section 12: Jordan Canonical Form ---
  {
    id: 'def-generalized-eigenvector',
    title: 'Generalized Eigenvector',
    statement: 'A generalized eigenvector of $T$ for eigenvalue $\\lambda$ is a nonzero $v$ such that $(T - \\lambda I)^k v = \\mathbf{0}$ for some $k \\geq 1$.',
    sectionId: 12,
    sectionTitle: 'Jordan Canonical Form',
    category: 'Canonical Forms',
    type: 'definition',
  },
  {
    id: 'def-jordan-block',
    title: 'Jordan Block',
    statement: 'A Jordan block $J_k(\\lambda)$ is a $k \\times k$ matrix with $\\lambda$ on the diagonal, $1$s on the superdiagonal, and $0$s elsewhere.',
    sectionId: 12,
    sectionTitle: 'Jordan Canonical Form',
    category: 'Canonical Forms',
    type: 'definition',
  },
  {
    id: 'thm-jordan-canonical-form',
    title: 'Jordan Canonical Form Theorem',
    statement: 'Every linear operator on a finite-dimensional complex vector space has a unique Jordan canonical form (up to ordering of blocks).',
    sectionId: 12,
    sectionTitle: 'Jordan Canonical Form',
    category: 'Canonical Forms',
    type: 'theorem',
    hasProof: true,
    proof: `
**Existence:** By the primary decomposition theorem, $V = V_1 \\oplus \\cdots \\oplus V_k$ where $V_i$ is the generalized eigenspace for $\\lambda_i$.

On each $V_i$, $(T - \\lambda_i I)$ is nilpotent. For nilpotent operators, there exists a Jordan basis giving blocks of the form $J_m(0)$.

Combining these for each eigenvalue gives the Jordan form.

**Uniqueness:** The number of Jordan blocks of size $\\geq k$ for eigenvalue $\\lambda$ equals $\\dim(\\ker(T - \\lambda I)^k) - \\dim(\\ker(T - \\lambda I)^{k-1})$, which is an invariant of $T$.
    `,
  },
  {
    id: 'thm-cayley-hamilton',
    title: 'Cayley-Hamilton Theorem',
    statement: 'Every square matrix satisfies its own characteristic polynomial: if $p(\\lambda) = \\det(\\lambda I - A)$, then $p(A) = 0$.',
    sectionId: 12,
    sectionTitle: 'Jordan Canonical Form',
    category: 'Canonical Forms',
    type: 'theorem',
    hasProof: true,
    proof: `
**Proof using Jordan form:** Over $\\mathbb{C}$, $A$ is similar to its Jordan form $J$. Since $p(A)$ and $p(J)$ are similar, it suffices to show $p(J) = 0$.

For a Jordan block $J_k(\\lambda)$, the characteristic polynomial is $(t - \\lambda)^k$.

We have $(J_k(\\lambda) - \\lambda I)^k = N^k$ where $N$ is nilpotent with $1$s on the superdiagonal.

Since $N^k = 0$ (the $k$-th power of a $k \\times k$ nilpotent matrix is zero), the result follows.
    `,
  },
  {
    id: 'def-minimal-polynomial',
    title: 'Minimal Polynomial',
    statement: 'The minimal polynomial of $T$ is the monic polynomial $m(x)$ of least degree such that $m(T) = 0$.',
    sectionId: 12,
    sectionTitle: 'Jordan Canonical Form',
    category: 'Canonical Forms',
    type: 'definition',
  },
  {
    id: 'thm-minimal-polynomial-divides',
    title: 'Minimal Polynomial Divides Characteristic',
    statement: 'The minimal polynomial divides the characteristic polynomial. Both have the same roots (the eigenvalues).',
    sectionId: 12,
    sectionTitle: 'Jordan Canonical Form',
    category: 'Canonical Forms',
    type: 'theorem',
  },
  {
    id: 'thm-diagonalizable-minimal',
    title: 'Diagonalizability via Minimal Polynomial',
    statement: '$T$ is diagonalizable if and only if its minimal polynomial is a product of distinct linear factors.',
    sectionId: 12,
    sectionTitle: 'Jordan Canonical Form',
    category: 'Canonical Forms',
    type: 'theorem',
    hasProof: true,
    proof: `
**(⇒)** If $T$ is diagonalizable with eigenvalues $\\lambda_1, \\ldots, \\lambda_k$, then $(T - \\lambda_1 I) \\cdots (T - \\lambda_k I) = 0$ on each eigenbasis vector, hence on all of $V$. The minimal polynomial divides $(x - \\lambda_1) \\cdots (x - \\lambda_k)$.

**(⇐)** If $m(x) = (x - \\lambda_1) \\cdots (x - \\lambda_k)$ with distinct $\\lambda_i$, then $V = \\ker(T - \\lambda_1 I) \\oplus \\cdots \\oplus \\ker(T - \\lambda_k I)$ by the primary decomposition theorem (since factors are coprime). Thus $V$ is spanned by eigenvectors.
    `,
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter(Boolean))] as string[];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
