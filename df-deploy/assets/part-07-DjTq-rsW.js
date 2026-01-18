const n="Introduction to Rings",e="Chapter 7",i=[{sectionId:"7.1",sectionTitle:"Basic Definitions and Examples",textbookSection:"§7.1",examples:[{id:"ex-7.1.1",type:"example",title:"Example 7.1.1",statement:"Define a ring and verify that ℤ[i] = {a + bi : a, b ∈ ℤ} is a ring under the usual operations.",solution:`**Definition of a Ring:**

A **ring** R is a set with two binary operations + (addition) and · (multiplication) such that:

1. (R, +) is an abelian group (with identity 0).
2. Multiplication is associative: (ab)c = a(bc).
3. Distributive laws hold:
   - a(b + c) = ab + ac
   - (a + b)c = ac + bc

If multiplication is commutative, R is a **commutative ring**.
If R has a multiplicative identity 1 ≠ 0, R is a **ring with unity**.

**Verification for ℤ[i] (Gaussian integers):**

**Step 1: (ℤ[i], +) is an abelian group.**
- Closure: (a + bi) + (c + di) = (a+c) + (b+d)i ∈ ℤ[i] ✓
- Associativity: Inherited from ℂ ✓
- Identity: 0 = 0 + 0i ✓
- Inverses: -(a + bi) = -a + (-b)i ∈ ℤ[i] ✓
- Commutativity: Inherited from ℂ ✓

**Step 2: Multiplication is associative.**
Inherited from ℂ. ✓

**Step 3: Distributive laws.**
Inherited from ℂ. ✓

**Step 4: Closure under multiplication.**
(a + bi)(c + di) = (ac - bd) + (ad + bc)i ∈ ℤ[i] ✓

**Step 5: Additional properties.**
- Commutative: Yes (inherited from ℂ)
- Has unity: 1 = 1 + 0i

ℤ[i] is a commutative ring with unity.`},{id:"ex-7.1.2",type:"example",title:"Example 7.1.2",statement:"Show that M_2(ℝ), the set of 2×2 real matrices, is a non-commutative ring.",solution:`**Verification:**

**Step 1: (M_2(ℝ), +) is an abelian group.**
- Closure: Sum of matrices is a matrix ✓
- Associativity: Matrix addition is associative ✓
- Identity: Zero matrix [[0,0],[0,0]] ✓
- Inverses: -A exists for each A ✓
- Commutativity: A + B = B + A ✓

**Step 2: Multiplication is associative.**
Matrix multiplication is associative: (AB)C = A(BC). ✓

**Step 3: Distributive laws.**
- A(B + C) = AB + AC ✓
- (A + B)C = AC + BC ✓

**Step 4: Unity exists.**
The identity matrix I = [[1,0],[0,1]] satisfies AI = IA = A. ✓

**Step 5: Non-commutativity.**

Let A = [[1,0],[0,0]] and B = [[0,1],[0,0]].

AB = [[0,1],[0,0]]
BA = [[0,0],[0,0]]

AB ≠ BA, so M_2(ℝ) is non-commutative.

**Note:** M_2(ℝ) has zero divisors:
[[1,0],[0,0]] · [[0,0],[0,1]] = [[0,0],[0,0]]

Neither factor is zero, but the product is zero.`}],exercises:[{id:"7.1.1",type:"exercise",title:"Exercise 7.1.1",statement:"Let R be a ring with unity 1. Prove that (-1)a = -a for all a ∈ R.",solution:`**Proof:**

We need to show that (-1)a + a = 0.

(-1)a + a = (-1)a + 1·a
= (-1 + 1)a  (by distributivity)
= 0·a
= 0

The last step follows from:
0·a = (0 + 0)·a = 0·a + 0·a
⟹ 0 = 0·a

Since (-1)a + a = 0, we have (-1)a = -a.`},{id:"7.1.2",type:"exercise",title:"Exercise 7.1.2",statement:"An element a in a ring R is called nilpotent if aⁿ = 0 for some positive integer n. Prove that if a is nilpotent, then 1 - a is a unit.",solution:`**Proof:**

Let aⁿ = 0 for some n ≥ 1.

Consider the geometric series identity:
(1 - a)(1 + a + a² + ... + aⁿ⁻¹) = 1 - aⁿ = 1 - 0 = 1

Let b = 1 + a + a² + ... + aⁿ⁻¹.

We verify this is also a right inverse:
(1 + a + a² + ... + aⁿ⁻¹)(1 - a)
= 1 + a + a² + ... + aⁿ⁻¹ - a - a² - ... - aⁿ⁻¹ - aⁿ
= 1 - aⁿ
= 1

So (1 - a)b = b(1 - a) = 1.

Therefore 1 - a is a unit with inverse b = Σᵢ₌₀ⁿ⁻¹ aⁱ.

**Example:** In ℤ/8ℤ, a = 2 is nilpotent (2³ = 8 ≡ 0).
1 - 2 = -1 ≡ 7 (mod 8).
Indeed 7 is a unit: 7·7 = 49 ≡ 1 (mod 8).`},{id:"7.1.3",type:"exercise",title:"Exercise 7.1.3",statement:"Let R be a commutative ring. Prove that if a and b are nilpotent, then a + b is nilpotent.",solution:`**Proof:**

Let aᵐ = 0 and bⁿ = 0.

We claim (a + b)^{m+n-1} = 0.

By the binomial theorem (valid since R is commutative):
(a + b)^{m+n-1} = Σₖ₌₀^{m+n-1} C(m+n-1, k) aᵏ b^{m+n-1-k}

For each term:
- If k ≥ m, then aᵏ = aᵐ · aᵏ⁻ᵐ = 0 · aᵏ⁻ᵐ = 0.
- If k < m, then m + n - 1 - k ≥ m + n - 1 - (m-1) = n, so b^{m+n-1-k} = 0.

Either way, each term is 0.

Therefore (a + b)^{m+n-1} = 0.

**Note:** Commutativity is essential! In a non-commutative ring, the binomial theorem doesn't hold, and the sum of two nilpotent elements need not be nilpotent.`}]},{sectionId:"7.2",sectionTitle:"Ideals and Quotient Rings",textbookSection:"§7.2-7.3",examples:[{id:"ex-7.2.1",type:"example",title:"Example 7.2.1",statement:"Define ideals and prove that in a commutative ring R, (a) = Ra = {ra : r ∈ R} is an ideal.",solution:`**Definition of Ideal:**

A subset I of a ring R is a **left ideal** if:
1. I is a subgroup of (R, +)
2. For all r ∈ R and a ∈ I: ra ∈ I

**Right ideal:** ar ∈ I for all r ∈ R, a ∈ I.

**Two-sided ideal:** Both left and right ideal.

In commutative rings, left = right = two-sided.

**Proof that (a) = Ra is an ideal:**

**Step 1: (a) is an additive subgroup.**

Closure: ra + sa = (r + s)a ∈ (a). ✓
Identity: 0 = 0·a ∈ (a). ✓
Inverses: -(ra) = (-r)a ∈ (a). ✓

**Step 2: Absorption property.**

For r ∈ R and sa ∈ (a):
r(sa) = (rs)a ∈ (a). ✓

(In a commutative ring, (sa)r = (sr)a ∈ (a) as well.)

**Notation:**
- (a) is called the **principal ideal** generated by a.
- (a₁, a₂, ..., aₙ) = Ra₁ + Ra₂ + ... + Raₙ is the ideal generated by a₁, ..., aₙ.`},{id:"ex-7.2.2",type:"example",title:"Example 7.2.2",statement:"Construct the quotient ring ℤ[x]/(x² + 1) and show it is isomorphic to ℂ.",solution:`**Construction:**

Let I = (x² + 1) be the ideal generated by x² + 1 in ℤ[x].

ℤ[x]/I consists of cosets f(x) + I.

**Key fact:** x² + 1 ≡ 0 (mod I), so x² ≡ -1 in the quotient.

**Representatives:**
Every polynomial can be reduced modulo x² + 1.
Division algorithm: f(x) = (x² + 1)q(x) + r(x) where deg(r) < 2.

So r(x) = a + bx for some a, b ∈ ℤ.

Thus every coset has a unique representative of the form a + bx.

**Ring structure:**
ℤ[x]/I = {a + bx̄ : a, b ∈ ℤ} where x̄ = x + I.

Addition: (a + bx̄) + (c + dx̄) = (a+c) + (b+d)x̄

Multiplication: (a + bx̄)(c + dx̄) = ac + (ad + bc)x̄ + bdx̄²
= ac + (ad + bc)x̄ + bd(-1)
= (ac - bd) + (ad + bc)x̄

**Isomorphism with ℂ:**

Define φ: ℤ[x]/I → ℂ by φ(a + bx̄) = a + bi.

This extends to φ: ℚ[x]/(x² + 1) → ℂ, which is an isomorphism.

(For ℤ[x]/(x² + 1), we get the Gaussian integers ℤ[i].)`}],exercises:[{id:"7.2.1",type:"exercise",title:"Exercise 7.2.1",statement:"Let R be a commutative ring and I, J ideals of R. Prove that I + J = {a + b : a ∈ I, b ∈ J} is an ideal.",solution:`**Proof:**

**Step 1: I + J is an additive subgroup.**

Closure: (a₁ + b₁) + (a₂ + b₂) = (a₁ + a₂) + (b₁ + b₂) ∈ I + J.
(Since a₁ + a₂ ∈ I and b₁ + b₂ ∈ J.)

Identity: 0 = 0 + 0 ∈ I + J.

Inverses: -(a + b) = (-a) + (-b) ∈ I + J.

**Step 2: Absorption property.**

For r ∈ R and a + b ∈ I + J:
r(a + b) = ra + rb ∈ I + J.

(Since ra ∈ I and rb ∈ J.)

**Therefore I + J is an ideal.**

**Note:** I + J is the smallest ideal containing both I and J.`},{id:"7.2.2",type:"exercise",title:"Exercise 7.2.2",statement:"Prove that an ideal I of a commutative ring R with unity equals R if and only if I contains a unit.",solution:`**Proof:**

**(⟹) I = R implies I contains a unit.**

If I = R, then 1 ∈ I, and 1 is a unit.

**(⟸) I contains a unit implies I = R.**

Let u ∈ I be a unit. Then u⁻¹ exists in R.

For any r ∈ R:
r = r · 1 = r · (u · u⁻¹) = (ru⁻¹) · u ∈ I

(Since u ∈ I and I absorbs multiplication.)

Actually, more directly: 1 = u⁻¹ · u ∈ I.

Then for any r ∈ R: r = r · 1 ∈ I.

So I = R.

**Corollary:** A proper ideal contains no units.

**Corollary:** In a field F, the only ideals are {0} and F.
(Every non-zero element is a unit.)`},{id:"7.2.3",type:"exercise",title:"Exercise 7.2.3",statement:"State and prove the First Isomorphism Theorem for rings.",solution:`**First Isomorphism Theorem for Rings:**

If φ: R → S is a ring homomorphism, then:
1. ker(φ) is an ideal of R
2. R/ker(φ) ≅ φ(R)

**Proof:**

**Part 1: ker(φ) is an ideal.**

ker(φ) = {r ∈ R : φ(r) = 0}.

*Additive subgroup:*
- φ(0) = 0, so 0 ∈ ker(φ).
- If φ(a) = φ(b) = 0, then φ(a + b) = φ(a) + φ(b) = 0.
- If φ(a) = 0, then φ(-a) = -φ(a) = 0.

*Absorption:*
For r ∈ R, a ∈ ker(φ):
φ(ra) = φ(r)φ(a) = φ(r) · 0 = 0.
So ra ∈ ker(φ). Similarly ar ∈ ker(φ).

**Part 2: R/ker(φ) ≅ φ(R).**

Define ψ: R/ker(φ) → φ(R) by ψ(r + ker(φ)) = φ(r).

*Well-defined:* If r + ker(φ) = s + ker(φ), then r - s ∈ ker(φ).
So φ(r - s) = 0, meaning φ(r) = φ(s).

*Homomorphism:*
ψ((r + I)(s + I)) = ψ(rs + I) = φ(rs) = φ(r)φ(s) = ψ(r + I)ψ(s + I).
Similarly for addition.

*Injective:* If ψ(r + I) = 0, then φ(r) = 0, so r ∈ I = ker(φ).

*Surjective:* ψ maps onto φ(R) by construction.`}]},{sectionId:"7.3",sectionTitle:"Prime and Maximal Ideals",textbookSection:"§7.4",examples:[{id:"ex-7.3.1",type:"example",title:"Example 7.3.1",statement:"Define prime and maximal ideals and characterize them in terms of quotient rings.",solution:`**Definitions:**

Let R be a commutative ring with unity and I ⊊ R a proper ideal.

**Prime ideal:** I is **prime** if: ab ∈ I implies a ∈ I or b ∈ I.

**Maximal ideal:** I is **maximal** if there is no ideal J with I ⊊ J ⊊ R.

**Characterizations:**

**Theorem 1:** I is prime ⟺ R/I is an integral domain.

*Proof:*
R/I is an integral domain ⟺ R/I has no zero divisors
⟺ (a + I)(b + I) = 0 implies a + I = 0 or b + I = 0
⟺ ab ∈ I implies a ∈ I or b ∈ I
⟺ I is prime.

**Theorem 2:** I is maximal ⟺ R/I is a field.

*Proof:*
Ideals of R/I correspond bijectively to ideals of R containing I.
I is maximal ⟺ R/I has no proper non-trivial ideals ⟺ R/I is a field.

**Corollary:** Every maximal ideal is prime.

*Proof:* Every field is an integral domain.`},{id:"ex-7.3.2",type:"example",title:"Example 7.3.2",statement:"Find all prime and maximal ideals of ℤ.",solution:`**Ideals of ℤ:**

Every ideal of ℤ has the form nℤ = (n) for some n ≥ 0.

**Prime ideals:**

nℤ is prime ⟺ ℤ/nℤ is an integral domain.

- n = 0: ℤ/0ℤ = ℤ is an integral domain. ✓
- n = 1: ℤ/ℤ = {0}, not an integral domain (or trivially so, but not proper).
- n prime: ℤ/pℤ = ℤ_p is a field, hence an integral domain. ✓
- n composite: If n = ab with 1 < a, b < n, then ā · b̄ = 0̄ in ℤ_n.
  So ℤ_n has zero divisors. ✗

**Prime ideals of ℤ:** (0) and (p) for prime p.

**Maximal ideals:**

nℤ is maximal ⟺ ℤ/nℤ is a field.

- n = 0: ℤ is not a field. ✗
- n prime: ℤ_p is a field. ✓
- n composite: ℤ_n is not a field (has zero divisors). ✗

**Maximal ideals of ℤ:** (p) for prime p.

**Note:** (0) is prime but not maximal.`}],exercises:[{id:"7.3.1",type:"exercise",title:"Exercise 7.3.1",statement:"Prove that in a PID (Principal Ideal Domain), every non-zero prime ideal is maximal.",solution:`**Proof:**

Let R be a PID and let P = (p) be a non-zero prime ideal.

Since R is a PID, every ideal is principal.

Suppose P ⊆ M ⊆ R where M = (m) is a proper ideal.

Since (p) ⊆ (m), we have m | p.

So p = m · k for some k ∈ R.

Since P is prime and p = mk ∈ P:
- Either m ∈ P, or
- k ∈ P.

**Case 1: m ∈ P = (p).**
Then p | m, so m = p · j for some j.
Thus p = mk = pjk, so jk = 1.
This means k is a unit, so (m) = (p) = P.

**Case 2: k ∈ P = (p).**
Then k = pℓ for some ℓ.
So p = m(pℓ) = pℓm, meaning ℓm = 1.
Thus m is a unit, so (m) = R.

In either case, M = P or M = R.

Therefore P is maximal.`},{id:"7.3.2",type:"exercise",title:"Exercise 7.3.2",statement:"Find all prime and maximal ideals of ℤ[x]/(x² - 1).",solution:`**Solution:**

**Step 1: Factor x² - 1.**
x² - 1 = (x - 1)(x + 1).

**Step 2: Apply CRT.**
Since gcd(x - 1, x + 1) = 1 in ℤ[x] (their difference is 2, and they share no common roots):

Actually, in ℤ[x], x - 1 and x + 1 are coprime modulo 2.

ℤ[x]/(x² - 1) ≅ ℤ[x]/(x - 1) × ℤ[x]/(x + 1) = ℤ × ℤ

The isomorphism sends f(x) + (x² - 1) ↦ (f(1), f(-1)).

**Step 3: Find ideals of ℤ × ℤ.**

Ideals of ℤ × ℤ are products nℤ × mℤ.

**Step 4: Prime ideals.**

nℤ × mℤ is prime ⟺ (ℤ × ℤ)/(nℤ × mℤ) ≅ ℤ_n × ℤ_m is an integral domain.

ℤ_n × ℤ_m is an integral domain ⟺ one factor is {0}.
- If n = 0 and m = 1: Get ℤ × {0} ≅ ℤ. Prime ideals are (0) × ℤ and (p) × ℤ.
- If n = 1 and m = 0: Get {0} × ℤ ≅ ℤ. Prime ideals are ℤ × (0) and ℤ × (p).

**Prime ideals:** (x - 1), (x + 1), (p, x - 1), (p, x + 1) for primes p.

**Maximal ideals:** (p, x - 1), (p, x + 1) for primes p.

(These give quotients ℤ_p.)`}]}],a={partId:7,partTitle:n,textbookChapter:e,sections:i};export{a as p};
