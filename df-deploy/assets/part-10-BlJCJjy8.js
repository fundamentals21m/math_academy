const n="Introduction to Module Theory",e="Chapter 10",i=[{sectionId:"10.1",sectionTitle:"Basic Definitions and Examples",textbookSection:"§10.1-10.2",examples:[{id:"ex-10.1.1",type:"example",title:"Example 10.1.1",statement:"Define a module over a ring R and give examples.",solution:`**Definition:**

Let R be a ring. A **left R-module** is an abelian group (M, +) with a scalar multiplication R × M → M, written (r, m) ↦ rm, satisfying:

1. r(m + n) = rm + rn (distributivity over M)
2. (r + s)m = rm + sm (distributivity over R)
3. (rs)m = r(sm) (associativity)
4. 1m = m (if R has unity)

**Examples:**

1. **Vector spaces:** If F is a field, an F-module is exactly an F-vector space.

2. **Abelian groups:** Every abelian group A is a ℤ-module with:
   n · a = a + a + ... + a (n times) for n > 0
   0 · a = 0
   n · a = -((-n) · a) for n < 0

3. **Ideals:** If I ⊆ R is a left ideal, then I is a left R-module under the ring multiplication.

4. **R[x]-modules:** An R[x]-module M is an R-module together with an R-linear map T: M → M (where x acts as T).

5. **Matrix modules:** R^n (column vectors) is a left M_n(R)-module.`},{id:"ex-10.1.2",type:"example",title:"Example 10.1.2",statement:"Define submodules and quotient modules, and state the First Isomorphism Theorem for modules.",solution:`**Submodule:**

A subset N of an R-module M is a **submodule** if:
1. N is a subgroup of (M, +)
2. rn ∈ N for all r ∈ R, n ∈ N

**Quotient Module:**

If N is a submodule of M, the quotient M/N is an R-module with:
- Addition: (m + N) + (m' + N) = (m + m') + N
- Scalar multiplication: r(m + N) = rm + N

**First Isomorphism Theorem for Modules:**

If φ: M → N is an R-module homomorphism, then:
1. ker(φ) is a submodule of M
2. im(φ) is a submodule of N
3. M/ker(φ) ≅ im(φ)

**Proof sketch:**
Same as for groups/rings:
- Define ψ: M/ker(φ) → im(φ) by ψ(m + ker(φ)) = φ(m)
- Verify well-defined, R-linear, bijective`}],exercises:[{id:"10.1.1",type:"exercise",title:"Exercise 10.1.1",statement:"Prove that an abelian group A is a simple ℤ-module (no proper non-trivial submodules) if and only if A ≅ ℤ_p for some prime p.",solution:`**Proof:**

**(⟹) A simple implies A ≅ ℤ_p:**

ℤ-submodules of A are exactly the subgroups of A.

A is simple means A has no proper non-trivial subgroups.

Let a ∈ A be non-zero. Then ⟨a⟩ is a non-trivial subgroup.

Since A is simple, ⟨a⟩ = A, so A is cyclic.

If A were infinite cyclic (A ≅ ℤ), then 2ℤ would be a proper non-trivial subgroup. ✗

So A ≅ ℤ_n for some n > 1.

If n = ab with 1 < a < n, then ⟨a⟩ ≅ ℤ_{n/a} is a proper non-trivial subgroup. ✗

So n must be prime.

**(⟸) A ≅ ℤ_p implies A is simple:**

Subgroups of ℤ_p have order dividing p (prime).

So subgroups have order 1 or p.

Order 1: trivial subgroup {0}.
Order p: the whole group.

Thus ℤ_p has no proper non-trivial subgroups, making it simple.`},{id:"10.1.2",type:"exercise",title:"Exercise 10.1.2",statement:"Let R be a ring and M an R-module. Prove that Ann(M) = {r ∈ R : rm = 0 for all m ∈ M} is a two-sided ideal of R.",solution:`**Proof:**

**Step 1: Ann(M) is a subgroup of (R, +).**

- 0 ∈ Ann(M): 0·m = 0 for all m. ✓
- Closure: If r, s ∈ Ann(M), then (r + s)m = rm + sm = 0 + 0 = 0 for all m. ✓
- Inverses: If r ∈ Ann(M), then (-r)m = -(rm) = -0 = 0 for all m. ✓

**Step 2: Ann(M) absorbs multiplication on the left.**

For s ∈ R and r ∈ Ann(M), and any m ∈ M:
(sr)m = s(rm) = s·0 = 0.

So sr ∈ Ann(M). ✓

**Step 3: Ann(M) absorbs multiplication on the right.**

For s ∈ R and r ∈ Ann(M), and any m ∈ M:
(rs)m = r(sm).

Since r ∈ Ann(M), r annihilates ALL elements of M, including sm.

So r(sm) = 0.

Thus rs ∈ Ann(M). ✓

**Conclusion:** Ann(M) is a two-sided ideal.`}]},{sectionId:"10.2",sectionTitle:"Free Modules",textbookSection:"§10.3",examples:[{id:"ex-10.2.1",type:"example",title:"Example 10.2.1",statement:"Define free modules and state the universal property.",solution:`**Definition:**

An R-module F is **free** with basis B ⊆ F if every element of F can be written uniquely as a finite R-linear combination of elements of B.

Equivalently: F ≅ R^{(B)} = ⊕_{b ∈ B} R (direct sum of copies of R indexed by B).

**Universal Property:**

For any R-module M and any function f: B → M, there exists a unique R-module homomorphism φ: F → M such that φ|_B = f.

\`\`\`
   B ----f----> M
   |            ↑
   |            | φ (unique)
   v            |
   F -----------+
\`\`\`

**Proof:**

Define φ(Σ r_b · b) = Σ r_b · f(b).

This is well-defined by uniqueness of representation.
It's R-linear by construction.
It's unique because any homomorphism is determined by its values on a generating set.

**Note:** Unlike vector spaces, not every module is free. For example, ℤ_n is not a free ℤ-module (it's torsion).`}],exercises:[{id:"10.2.1",type:"exercise",title:"Exercise 10.2.1",statement:"Prove that if R is a commutative ring with unity and F is a free R-module with finite basis, then any two bases have the same cardinality.",solution:`**Proof:**

Let F be a free R-module with bases B and B' of sizes n and m respectively.

Let I be a maximal ideal of R. Such an ideal exists by Zorn's Lemma.

Consider F/IF, which is an R/I-module.

**Claim:** F/IF is a vector space over R/I with dimension n (and also m).

The images of B in F/IF span F/IF and are linearly independent over R/I.

This is because if Σ (r_i + I)(b_i + IF) = 0 + IF, then Σ r_i b_i ∈ IF = Σ_{i,j} I·b_j.

Since {b_i} are a basis and the coefficients of the b_i in Σ r_i b_i are r_i, we must have r_i ∈ I for all i.

Thus r_i + I = 0 in R/I.

So dim_{R/I}(F/IF) = |B| = n.

Similarly, dim_{R/I}(F/IF) = |B'| = m.

Since R/I is a field, dimensions are unique, so n = m.`}]}],o={partId:10,partTitle:n,textbookChapter:e,sections:i};export{o as p};
