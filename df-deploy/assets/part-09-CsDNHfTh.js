const n="Polynomial Rings",e="Chapter 9",i=[{sectionId:"9.1",sectionTitle:"Definitions and Basic Properties",textbookSection:"§9.1-9.2",examples:[{id:"ex-9.1.1",type:"example",title:"Example 9.1.1",statement:"Prove that if R is an integral domain, then R[x] is an integral domain.",solution:`**Proof:**

Let R be an integral domain. We need to show R[x] has no zero divisors.

Let f(x) = aₙxⁿ + ... + a₁x + a₀ with aₙ ≠ 0 (deg f = n).
Let g(x) = bₘxᵐ + ... + b₁x + b₀ with bₘ ≠ 0 (deg g = m).

Assume f(x) ≠ 0 and g(x) ≠ 0.

**Compute f(x)g(x):**

The leading term of f(x)g(x) is aₙbₘxⁿ⁺ᵐ.

Since R is an integral domain and aₙ ≠ 0, bₘ ≠ 0:
aₙbₘ ≠ 0.

Therefore f(x)g(x) ≠ 0.

**Conclusion:** R[x] is an integral domain.

**Corollary:** deg(fg) = deg(f) + deg(g) when R is an integral domain.`},{id:"ex-9.1.2",type:"example",title:"Example 9.1.2",statement:"State and prove the Division Algorithm for polynomials over a field.",solution:`**Division Algorithm:**

Let F be a field and f(x), g(x) ∈ F[x] with g(x) ≠ 0.

Then there exist unique q(x), r(x) ∈ F[x] such that:
f(x) = g(x)q(x) + r(x)

where r(x) = 0 or deg r < deg g.

**Proof of existence (by strong induction on deg f):**

Base case: If deg f < deg g, take q = 0, r = f.

Inductive step: Let deg f = n ≥ deg g = m.

Let f(x) = aₙxⁿ + ... and g(x) = bₘxᵐ + ...

Consider f₁(x) = f(x) - (aₙ/bₘ)xⁿ⁻ᵐg(x).

The leading terms cancel, so deg f₁ < n.

By induction: f₁(x) = g(x)q₁(x) + r(x) with deg r < m.

Then:
f(x) = f₁(x) + (aₙ/bₘ)xⁿ⁻ᵐg(x)
= g(x)q₁(x) + r(x) + (aₙ/bₘ)xⁿ⁻ᵐg(x)
= g(x)(q₁(x) + (aₙ/bₘ)xⁿ⁻ᵐ) + r(x)

Let q(x) = q₁(x) + (aₙ/bₘ)xⁿ⁻ᵐ. Done.

**Proof of uniqueness:** Standard (if f = gq + r = gq' + r', then g(q-q') = r'-r, compare degrees).`}],exercises:[{id:"9.1.1",type:"exercise",title:"Exercise 9.1.1",statement:"Prove that F[x] is a PID when F is a field.",solution:`**Proof:**

F[x] is a Euclidean domain with norm N(f) = deg(f).

The division algorithm shows:
For f, g ∈ F[x] with g ≠ 0, there exist q, r with:
f = gq + r and (r = 0 or deg r < deg g).

Since every Euclidean domain is a PID, F[x] is a PID.

**Alternative direct proof:**

Let I ⊆ F[x] be a non-zero ideal.

Let g(x) ∈ I be a non-zero polynomial of minimum degree.

**Claim: I = (g).**

For any f ∈ I, divide: f = gq + r with deg r < deg g or r = 0.

Since f, gq ∈ I, we have r = f - gq ∈ I.

If r ≠ 0, then r ∈ I with deg r < deg g, contradicting minimality.

So r = 0, meaning f = gq ∈ (g).

Therefore I ⊆ (g), and clearly (g) ⊆ I, so I = (g).`},{id:"9.1.2",type:"exercise",title:"Exercise 9.1.2",statement:"Prove that if R is a UFD, then R[x] is a UFD.",solution:`**Theorem (Gauss):** If R is a UFD, then R[x] is a UFD.

**Proof outline:**

Let K = Frac(R) be the field of fractions.

**Step 1: Content and primitive polynomials.**

For f(x) ∈ R[x], the **content** c(f) is the gcd of its coefficients.
f is **primitive** if c(f) = 1.

Every f ∈ R[x] can be written as f = c(f) · f* where f* is primitive.

**Step 2: Gauss's Lemma.**
Product of primitive polynomials is primitive.

**Step 3: Factor in K[x].**

K[x] is a PID, hence a UFD.

If f ∈ R[x] is primitive and f = gh in K[x], then after clearing denominators, we can assume g, h ∈ R[x] primitive.

**Step 4: Conclude.**

Irreducibles in R[x] are either:
- Irreducible elements of R (constant polynomials), or
- Primitive polynomials irreducible over K.

The factorization in R[x] combines factorization of content (in R) and factorization of primitive part (essentially in K[x]).`}]},{sectionId:"9.2",sectionTitle:"Irreducibility Criteria",textbookSection:"§9.3-9.4",examples:[{id:"ex-9.2.1",type:"example",title:"Eisenstein's Criterion",statement:"State and prove Eisenstein's Criterion for irreducibility.",solution:`**Eisenstein's Criterion:**

Let f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀ ∈ ℤ[x].

If there exists a prime p such that:
1. p ∤ aₙ (p doesn't divide leading coefficient)
2. p | aᵢ for all i < n (p divides all other coefficients)
3. p² ∤ a₀ (p² doesn't divide constant term)

Then f(x) is irreducible in ℚ[x].

**Proof:**

Suppose f = gh in ℤ[x] with deg g, deg h ≥ 1.
(By Gauss's Lemma, if f factors in ℚ[x], it factors in ℤ[x].)

Let g = bᵣxʳ + ... + b₀ and h = cₛxˢ + ... + c₀.

Then r + s = n, bᵣcₛ = aₙ, and b₀c₀ = a₀.

**From condition 3:** p | a₀ = b₀c₀ but p² ∤ a₀.
So exactly one of p | b₀ or p | c₀.
WLOG p | b₀ and p ∤ c₀.

**From condition 1:** p ∤ aₙ = bᵣcₛ.
So p ∤ bᵣ.

Let k be the smallest index with p ∤ bₖ. Then 0 < k ≤ r < n.

**Consider aₖ:**
aₖ = bₖc₀ + bₖ₋₁c₁ + ... + b₀cₖ.

p | bᵢ for i < k, so p | (bₖ₋₁c₁ + ... + b₀cₖ).
p | aₖ (by condition 2, since k < n).

So p | bₖc₀. But p ∤ bₖ and p ∤ c₀. Contradiction.

Therefore f is irreducible.`},{id:"ex-9.2.2",type:"example",title:"Example 9.2.2",statement:"Use Eisenstein's Criterion to prove that x⁴ + 1 is irreducible over ℚ.",solution:`**Solution:**

Eisenstein doesn't apply directly to x⁴ + 1.

**Substitution trick:** Let y = x + 1, so x = y - 1.

(x + 1)⁴ = x⁴ + 4x³ + 6x² + 4x + 1.

Substitute x → y - 1:

(y)⁴ = y⁴
4(y-1)³ = 4y³ - 12y² + 12y - 4
6(y-1)² = 6y² - 12y + 6
4(y-1) = 4y - 4
1 = 1

So we need to compute f(y-1) where f(x) = x⁴ + 1.

(y-1)⁴ + 1 = y⁴ - 4y³ + 6y² - 4y + 1 + 1
= y⁴ - 4y³ + 6y² - 4y + 2.

**Apply Eisenstein with p = 2:**

- 2 ∤ 1 (leading coefficient) ✓
- 2 | -4, 6, -4, 2 (all others) ✓
- 4 ∤ 2 (constant term) ✓

By Eisenstein, y⁴ - 4y³ + 6y² - 4y + 2 is irreducible over ℚ.

Since f(x) is irreducible iff f(x + 1) is irreducible:

**x⁴ + 1 is irreducible over ℚ.**`}],exercises:[{id:"9.2.1",type:"exercise",title:"Exercise 9.2.1",statement:"Prove that the cyclotomic polynomial Φₚ(x) = xᵖ⁻¹ + xᵖ⁻² + ... + x + 1 is irreducible over ℚ for prime p.",solution:`**Proof:**

Note: Φₚ(x) = (xᵖ - 1)/(x - 1).

**Substitution:** Let y = x + 1.

Φₚ(y-1) = ((y-1)ᵖ - 1)/((y-1) - 1)
= ((y-1)ᵖ - 1)/(y - 2)

**Compute (y-1)ᵖ - 1:**

By binomial theorem:
(y-1)ᵖ = Σₖ₌₀ᵖ C(p,k) yᵏ (-1)ᵖ⁻ᵏ
= yᵖ - py^{p-1} + ... + (-1)ᵖ.

So (y-1)ᵖ - 1 = yᵖ - py^{p-1} + ... + ((-1)ᵖ - 1).

Actually, let's use y = x + 1 so x = y - 1:

Φₚ(x) = (xᵖ - 1)/(x - 1).
Φₚ(y + 1) = ((y+1)ᵖ - 1)/y.

(y+1)ᵖ - 1 = Σₖ₌₁ᵖ C(p,k) yᵏ = py + C(p,2)y² + ... + yᵖ.

Dividing by y:
Φₚ(y+1) = p + C(p,2)y + ... + y^{p-1}.

**Apply Eisenstein with prime p:**

- p ∤ 1 (leading coefficient of y^{p-1}) ✓
- p | C(p,k) for 1 ≤ k ≤ p-1 ✓ (since C(p,k) = p!/(k!(p-k)!))
- p² ∤ p (constant term) ✓

By Eisenstein, Φₚ(y+1) is irreducible.

Therefore Φₚ(x) is irreducible over ℚ.`}]}],t={partId:9,partTitle:n,textbookChapter:e,sections:i};export{t as p};
