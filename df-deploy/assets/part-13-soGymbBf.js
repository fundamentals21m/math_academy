const n="Field Theory",e="Chapter 13",i=[{sectionId:"13.1",sectionTitle:"Basic Theory of Field Extensions",textbookSection:"§13.1-13.2",examples:[{id:"ex-13.1.1",type:"example",title:"Example 13.1.1",statement:"Define algebraic and transcendental elements. Show that √2 is algebraic over ℚ.",solution:`**Definitions:**

Let K/F be a field extension.

An element α ∈ K is **algebraic over F** if there exists a non-zero polynomial p(x) ∈ F[x] such that p(α) = 0.

An element α ∈ K is **transcendental over F** if it is not algebraic over F.

**Example: √2 is algebraic over ℚ.**

Consider p(x) = x² - 2 ∈ ℚ[x].

p(√2) = (√2)² - 2 = 2 - 2 = 0.

Since p(x) is a non-zero polynomial and p(√2) = 0, √2 is algebraic over ℚ.

**Minimal polynomial:**

The **minimal polynomial** of √2 over ℚ is x² - 2:
- It's monic
- It's irreducible over ℚ (by Eisenstein with p = 2, or rational root test)
- It annihilates √2

The degree [ℚ(√2) : ℚ] = deg(min poly) = 2.`},{id:"ex-13.1.2",type:"example",title:"Example 13.1.2",statement:"Prove the Tower Law: If L/K/F are field extensions, then [L:F] = [L:K][K:F].",solution:`**Tower Law:**

If L/K and K/F are field extensions (possibly infinite), then:
[L : F] = [L : K] · [K : F]

(where ∞ · n = n · ∞ = ∞ · ∞ = ∞)

**Proof (finite case):**

Let {α₁, ..., αₘ} be a basis for K over F.
Let {β₁, ..., βₙ} be a basis for L over K.

**Claim:** {αᵢβⱼ : 1 ≤ i ≤ m, 1 ≤ j ≤ n} is a basis for L over F.

**Spanning:**

Any λ ∈ L can be written as λ = Σⱼ kⱼβⱼ with kⱼ ∈ K.

Each kⱼ = Σᵢ fᵢⱼαᵢ with fᵢⱼ ∈ F.

So λ = Σⱼ (Σᵢ fᵢⱼαᵢ)βⱼ = Σᵢⱼ fᵢⱼ(αᵢβⱼ).

**Linear independence:**

Suppose Σᵢⱼ fᵢⱼ(αᵢβⱼ) = 0 with fᵢⱼ ∈ F.

Rewrite as Σⱼ (Σᵢ fᵢⱼαᵢ)βⱼ = 0.

Since {βⱼ} are independent over K, each Σᵢ fᵢⱼαᵢ = 0.

Since {αᵢ} are independent over F, each fᵢⱼ = 0.

Therefore [L : F] = mn = [L : K][K : F].`}],exercises:[{id:"13.1.1",type:"exercise",title:"Exercise 13.1.1",statement:"Find [ℚ(√2, √3) : ℚ] and give a basis.",solution:`**Solution:**

**Step 1: Build the tower.**

ℚ ⊂ ℚ(√2) ⊂ ℚ(√2, √3)

[ℚ(√2) : ℚ] = 2 (minimal polynomial x² - 2).

**Step 2: Find [ℚ(√2, √3) : ℚ(√2)].**

Consider x² - 3 over ℚ(√2).

If √3 ∈ ℚ(√2), then √3 = a + b√2 for some a, b ∈ ℚ.

Squaring: 3 = a² + 2b² + 2ab√2.

Since √2 ∉ ℚ: ab = 0 and 3 = a² + 2b².

- If b = 0: a² = 3, no rational solution.
- If a = 0: 2b² = 3, no rational solution.

So √3 ∉ ℚ(√2), meaning x² - 3 is irreducible over ℚ(√2).

[ℚ(√2, √3) : ℚ(√2)] = 2.

**Step 3: Apply Tower Law.**

[ℚ(√2, √3) : ℚ] = [ℚ(√2, √3) : ℚ(√2)] · [ℚ(√2) : ℚ] = 2 · 2 = **4**.

**Basis:** {1, √2, √3, √6}.`},{id:"13.1.2",type:"exercise",title:"Exercise 13.1.2",statement:"Prove that the set of algebraic numbers over ℚ forms a field.",solution:`**Proof:**

Let A = {α ∈ ℂ : α is algebraic over ℚ}.

**Claim: A is a field (the algebraic closure of ℚ in ℂ).**

Let α, β ∈ A. We show α + β, αβ, α⁻¹ (if α ≠ 0) are in A.

**Key fact:** If α is algebraic over ℚ, then [ℚ(α) : ℚ] < ∞.

**α + β is algebraic:**

Consider ℚ(α, β).

By Tower Law:
[ℚ(α, β) : ℚ] = [ℚ(α, β) : ℚ(α)] · [ℚ(α) : ℚ]
≤ [ℚ(β) : ℚ] · [ℚ(α) : ℚ] < ∞.

Since α + β ∈ ℚ(α, β), we have:
[ℚ(α + β) : ℚ] ≤ [ℚ(α, β) : ℚ] < ∞.

A finite extension is algebraic, so α + β is algebraic.

**αβ is algebraic:** Same argument; αβ ∈ ℚ(α, β).

**α⁻¹ is algebraic:** α⁻¹ ∈ ℚ(α), which has finite degree over ℚ.

Therefore A is a field.`}]}],a={partId:13,partTitle:n,textbookChapter:e,sections:i};export{a as p};
