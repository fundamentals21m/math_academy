const n="Euclidean Domains, PIDs, and UFDs",e="Chapter 8",i=[{sectionId:"8.1",sectionTitle:"Euclidean Domains",textbookSection:"§8.1",examples:[{id:"ex-8.1.1",type:"example",title:"Example 8.1.1",statement:"Define a Euclidean domain and show that ℤ is a Euclidean domain with norm N(a) = |a|.",solution:`**Definition:**

An integral domain R is a **Euclidean domain** if there exists a function N: R \\ {0} → ℤ≥0 (called a **norm** or **Euclidean function**) such that:

For any a, b ∈ R with b ≠ 0, there exist q, r ∈ R with:
a = bq + r

where either r = 0 or N(r) < N(b).

**Proof that ℤ is Euclidean:**

Define N: ℤ \\ {0} → ℤ≥0 by N(a) = |a|.

Let a, b ∈ ℤ with b ≠ 0.

By the division algorithm for integers:
a = bq + r where 0 ≤ r < |b|.

If r ≠ 0, then N(r) = r < |b| = N(b).

Therefore ℤ is a Euclidean domain.

**Note:** The Euclidean algorithm for finding gcd works in any Euclidean domain.`},{id:"ex-8.1.2",type:"example",title:"Example 8.1.2",statement:"Prove that the Gaussian integers ℤ[i] form a Euclidean domain with norm N(a + bi) = a² + b².",solution:`**Proof:**

Define N: ℤ[i] \\ {0} → ℤ>0 by N(a + bi) = a² + b² = |a + bi|².

Let α, β ∈ ℤ[i] with β ≠ 0.

Consider α/β ∈ ℂ. Write α/β = x + yi where x, y ∈ ℚ.

Choose integers m, n such that |x - m| ≤ 1/2 and |y - n| ≤ 1/2.

Let q = m + ni ∈ ℤ[i] and r = α - βq.

**Claim: Either r = 0 or N(r) < N(β).**

r = α - βq = β(α/β - q) = β((x - m) + (y - n)i).

N(r) = N(β) · |((x-m) + (y-n)i)|²
= N(β) · ((x-m)² + (y-n)²)
≤ N(β) · (1/4 + 1/4)
= N(β) · (1/2)
< N(β).

Therefore ℤ[i] is a Euclidean domain.`}],exercises:[{id:"8.1.1",type:"exercise",title:"Exercise 8.1.1",statement:"Use the Euclidean algorithm to find gcd(11 + 3i, 8 + i) in ℤ[i].",solution:`**Solution:**

Let α = 11 + 3i and β = 8 + i.

**Step 1:** Divide α by β.
α/β = (11 + 3i)/(8 + i) = (11 + 3i)(8 - i)/((8 + i)(8 - i))
= (88 - 11i + 24i - 3i²)/(64 + 1)
= (88 + 3 + 13i)/65
= (91 + 13i)/65
= 91/65 + (13/65)i
= 1.4 + 0.2i

Round to q₁ = 1 + 0i = 1.
r₁ = α - βq₁ = (11 + 3i) - (8 + i)(1) = 3 + 2i.

**Step 2:** Divide β by r₁.
β/r₁ = (8 + i)/(3 + 2i) = (8 + i)(3 - 2i)/((3 + 2i)(3 - 2i))
= (24 - 16i + 3i - 2i²)/(9 + 4)
= (24 + 2 - 13i)/13
= 26/13 - 13i/13
= 2 - i.

This is exact! So q₂ = 2 - i and r₂ = 0.

**Conclusion:** gcd(11 + 3i, 8 + i) = r₁ = **3 + 2i**.

**Verification:** N(3 + 2i) = 13, N(11 + 3i) = 130 = 13·10, N(8 + i) = 65 = 13·5. ✓`},{id:"8.1.2",type:"exercise",title:"Exercise 8.1.2",statement:"Prove that every Euclidean domain is a PID.",solution:`**Proof:**

Let R be a Euclidean domain with norm N.
Let I ⊆ R be a non-zero ideal.

**Claim:** I = (d) for some d ∈ I.

Choose d ∈ I \\ {0} with N(d) minimal among all non-zero elements of I.

**Claim:** I = (d).

Clearly (d) ⊆ I since d ∈ I and I is an ideal.

Conversely, let a ∈ I. By the Euclidean property:
a = dq + r where r = 0 or N(r) < N(d).

Since a ∈ I and dq ∈ I (because d ∈ I), we have r = a - dq ∈ I.

If r ≠ 0, then N(r) < N(d), contradicting the minimality of N(d) among non-zero elements of I.

Therefore r = 0, so a = dq ∈ (d).

This proves I ⊆ (d), hence I = (d).

Therefore R is a PID.`}]},{sectionId:"8.2",sectionTitle:"Principal Ideal Domains",textbookSection:"§8.2",examples:[{id:"ex-8.2.1",type:"example",title:"Example 8.2.1",statement:"Define PIDs and give an example of a PID that is not a Euclidean domain.",solution:`**Definition:**

An integral domain R is a **Principal Ideal Domain (PID)** if every ideal of R is principal, i.e., of the form (a) = Ra for some a ∈ R.

**Example: ℤ[(1 + √-19)/2]**

Let ω = (1 + √-19)/2 and R = ℤ[ω] = {a + bω : a, b ∈ ℤ}.

**Fact:** R is a PID but NOT a Euclidean domain.

**Why it's a PID:**
R is the ring of integers in ℚ(√-19), which has class number 1.
Rings of integers with class number 1 are PIDs.

**Why it's not Euclidean:**
If R were Euclidean, there would exist a universal side divisor (an element that divides any element with quotient having smaller norm).

One can show that no element of R serves as a universal side divisor, so R is not Euclidean.

**Note:** This shows the strict inclusion: Euclidean domains ⊊ PIDs.`}],exercises:[{id:"8.2.1",type:"exercise",title:"Exercise 8.2.1",statement:"Prove that in a PID, every non-zero prime ideal is maximal.",solution:`**Proof:**

Let R be a PID and P = (p) be a non-zero prime ideal.

We proved this in the Rings chapter, but here's another approach:

Suppose (p) ⊆ (q) for some q ∈ R.

Then p = qr for some r ∈ R.

Since P = (p) is prime and qr = p ∈ P:
- Either q ∈ P, or
- r ∈ P.

**Case q ∈ P = (p):**
Then q = ps for some s, so p = qr = psr.
Since R is an integral domain and p ≠ 0, we get sr = 1.
So s is a unit, meaning (q) = (p).

**Case r ∈ P = (p):**
Then r = pt for some t, so p = qr = qpt.
Since p ≠ 0, we get qt = 1.
So q is a unit, meaning (q) = R.

Thus for any ideal (q) ⊇ (p), either (q) = (p) or (q) = R.

This means (p) is maximal.`},{id:"8.2.2",type:"exercise",title:"Exercise 8.2.2",statement:"Prove that if R is a PID and a, b ∈ R, then (a, b) = (gcd(a, b)).",solution:`**Proof:**

Let d = gcd(a, b).

Since R is a PID, the ideal (a, b) = {ra + sb : r, s ∈ R} is principal.
Say (a, b) = (g) for some g ∈ R.

**Claim 1: g | a and g | b.**

Since a ∈ (a, b) = (g), we have g | a.
Similarly, g | b.

**Claim 2: d | g.**

Since g ∈ (g) = (a, b), we have g = ra + sb for some r, s ∈ R.

Since d | a and d | b, we have d | (ra + sb) = g.

**Claim 3: g | d.**

By definition, d is a common divisor of a and b.
By Claim 1, g is also a common divisor.

Also, d is the greatest common divisor, meaning if c | a and c | b, then c | d.

Since g | a and g | b (Claim 1), we have g | d.

**Conclusion:**

Since d | g and g | d, we have (d) = (g).

Therefore (a, b) = (gcd(a, b)).`}]},{sectionId:"8.3",sectionTitle:"Unique Factorization Domains",textbookSection:"§8.3",examples:[{id:"ex-8.3.1",type:"example",title:"Example 8.3.1",statement:"Define UFDs and prove that every PID is a UFD.",solution:`**Definition:**

An integral domain R is a **Unique Factorization Domain (UFD)** if:
1. Every non-zero non-unit element can be written as a product of irreducibles.
2. This factorization is unique up to order and associates (units).

**Theorem: Every PID is a UFD.**

**Proof (outline):**

**Step 1: Existence of factorization.**

Assume for contradiction that some a ∈ R has no factorization.

Then a is not irreducible, so a = a₁b₁ where a₁, b₁ are non-units.

At least one of a₁, b₁ has no factorization; say a₁.

Since a₁ | a and a₁ is not a unit times a, we have (a) ⊊ (a₁).

Repeating: (a) ⊊ (a₁) ⊊ (a₂) ⊊ ...

This is an ascending chain of ideals.

**In a PID, ascending chains stabilize** (Noetherian property).
Contradiction.

**Step 2: Uniqueness.**

In a PID, irreducible ⟹ prime.

Uniqueness follows from the standard argument using primality:
If p₁...pₘ = q₁...qₙ, then p₁ | q₁...qₙ.
By primality, p₁ | qⱼ for some j.
Since both are irreducible, p₁ and qⱼ are associates.
Cancel and continue by induction.`},{id:"ex-8.3.2",type:"example",title:"Example 8.3.2",statement:"Show that ℤ[√-5] is NOT a UFD by finding two different factorizations of 6.",solution:`**Solution:**

In ℤ[√-5] = {a + b√-5 : a, b ∈ ℤ}:

6 = 2 · 3
6 = (1 + √-5)(1 - √-5)

**Verify (1 + √-5)(1 - √-5) = 6:**
(1 + √-5)(1 - √-5) = 1 - (√-5)² = 1 - (-5) = 6. ✓

**Claim: 2, 3, (1 + √-5), (1 - √-5) are all irreducible.**

Use the norm N(a + b√-5) = a² + 5b².

N is multiplicative: N(αβ) = N(α)N(β).

N(2) = 4, N(3) = 9, N(1 ± √-5) = 1 + 5 = 6.

For 2 to factor as αβ with α, β non-units:
N(α)N(β) = 4, so N(α), N(β) ∈ {2, 2} or {1, 4}.

N = 2: a² + 5b² = 2 has no integer solutions. ✗
N = 1: Only units have norm 1 (just ±1). ✗

So 2 is irreducible. Similarly for 3 and (1 ± √-5).

**Claim: 2 and (1 + √-5) are not associates.**

Associates differ by a unit. Units in ℤ[√-5] are ±1.
(1 + √-5) ≠ ±2. ✓

**Conclusion:** 6 has two essentially different factorizations, so ℤ[√-5] is not a UFD.`}],exercises:[{id:"8.3.1",type:"exercise",title:"Exercise 8.3.1",statement:"Prove that in a UFD, an element is prime if and only if it is irreducible.",solution:`**Proof:**

**(⟹) Prime implies irreducible (in any integral domain):**

Let p be prime. Suppose p = ab.
Then ab ∈ (p), so a ∈ (p) or b ∈ (p).

WLOG a ∈ (p), so a = pc.
Then p = pcb, so cb = 1 (canceling p).
Thus b is a unit, proving p is irreducible.

**(⟸) Irreducible implies prime (in a UFD):**

Let p be irreducible in a UFD R.
Suppose p | ab.

Then ab = pc for some c ∈ R.

Factor a, b, c into irreducibles:
a = p₁...pₘ
b = q₁...qₙ
c = r₁...rₖ

Then: p₁...pₘ · q₁...qₙ = p · r₁...rₖ.

By uniqueness of factorization, p is an associate of some pᵢ or qⱼ.

If p ~ pᵢ, then p | a.
If p ~ qⱼ, then p | b.

Therefore p is prime.`},{id:"8.3.2",type:"exercise",title:"Exercise 8.3.2",statement:"State the hierarchy: Fields ⊆ Euclidean Domains ⊆ PIDs ⊆ UFDs ⊆ Integral Domains. Give examples showing each inclusion is strict.",solution:`**The Hierarchy:**

Fields ⊊ Euclidean Domains ⊊ PIDs ⊊ UFDs ⊊ Integral Domains

**Examples showing strict inclusions:**

**1. Euclidean but not a field: ℤ**
- ℤ is Euclidean (with N(a) = |a|)
- ℤ is not a field (2 has no inverse)

**2. PID but not Euclidean: ℤ[(1+√-19)/2]**
- This is a PID (class number 1)
- Not Euclidean (no universal side divisor)

**3. UFD but not a PID: ℤ[x]**
- ℤ[x] is a UFD (polynomials over a UFD form a UFD)
- Not a PID: (2, x) is not principal
  - If (2, x) = (f), then f | 2 and f | x.
  - f | 2 ⟹ f ∈ {±1, ±2}.
  - f | x and deg(f) ≤ 1 ⟹ f = ±1 or f = ±x.
  - f = ±1 ⟹ (2, x) = ℤ[x], but 1 ∉ (2, x). ✗
  - f = ±2 doesn't divide x. ✗
  - f = ±x doesn't divide 2. ✗

**4. Integral domain but not a UFD: ℤ[√-5]**
- 6 = 2·3 = (1+√-5)(1-√-5) (two factorizations)
- The elements 2, 3, 1±√-5 are irreducible but not prime`}]}],a={partId:8,partTitle:n,textbookChapter:e,sections:i};export{a as p};
