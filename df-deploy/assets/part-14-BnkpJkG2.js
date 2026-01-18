const e="Galois Theory",n="Chapter 14",i=[{sectionId:"14.1",sectionTitle:"The Fundamental Theorem of Galois Theory",textbookSection:"§14.1-14.2",examples:[{id:"ex-14.1.1",type:"example",title:"Fundamental Theorem",statement:"State the Fundamental Theorem of Galois Theory.",solution:`**Setup:**

Let K/F be a finite Galois extension with Galois group G = Gal(K/F).

**Fundamental Theorem:**

There is an inclusion-reversing bijection:

{Intermediate fields F ⊆ E ⊆ K} ↔ {Subgroups H ⊆ G}

given by:
- E ↦ Gal(K/E) = {σ ∈ G : σ(e) = e for all e ∈ E}
- H ↦ K^H = {α ∈ K : σ(α) = α for all σ ∈ H} (fixed field)

**Properties:**

1. [K : E] = |Gal(K/E)| and [E : F] = [G : Gal(K/E)].

2. E/F is normal ⟺ Gal(K/E) ◁ G.
   In this case, Gal(E/F) ≅ G/Gal(K/E).

3. E/F is separable ⟺ always (since K/F is Galois).

4. E/F is Galois ⟺ Gal(K/E) ◁ G.`},{id:"ex-14.1.2",type:"example",title:"Example 14.1.2",statement:"Find the Galois group of x⁴ - 2 over ℚ and describe the subgroup lattice.",solution:`**Step 1: Find the splitting field.**

Roots of x⁴ - 2: ⁴√2, ⁴√2·i, ⁴√2·(-1), ⁴√2·(-i) = ⁴√2, ⁴√2·i, -⁴√2, -⁴√2·i.

More clearly: ⁴√2 · ζ where ζ⁴ = 1, i.e., ζ ∈ {1, i, -1, -i}.

Splitting field: K = ℚ(⁴√2, i).

**Step 2: Compute [K : ℚ].**

[ℚ(⁴√2) : ℚ] = 4 (x⁴ - 2 is irreducible by Eisenstein).
[K : ℚ(⁴√2)] = 2 (i ∉ ℚ(⁴√2) ⊂ ℝ).
[K : ℚ] = 8.

**Step 3: Determine Gal(K/ℚ).**

|Gal(K/ℚ)| = [K : ℚ] = 8.

Automorphisms are determined by:
- σ(⁴√2) = ⁴√2 · ζ for some 4th root of unity
- τ(i) = ±i

Let σ: ⁴√2 ↦ ⁴√2·i, i ↦ i.
Let τ: ⁴√2 ↦ ⁴√2, i ↦ -i.

Then σ⁴ = 1, τ² = 1, and τστ⁻¹ = σ⁻¹.

**Gal(K/ℚ) ≅ D₈** (dihedral group of order 8).`}],exercises:[{id:"14.1.1",type:"exercise",title:"Exercise 14.1.1",statement:"Prove that a polynomial of degree n over a field F is solvable by radicals if and only if its Galois group is a solvable group.",solution:`**Theorem (Galois):**

Let f(x) ∈ F[x] and let K be its splitting field over F.

f is solvable by radicals ⟺ Gal(K/F) is solvable.

**Proof outline:**

**(⟸) Solvable Galois group ⟹ solvable by radicals:**

1. If G = Gal(K/F) is solvable, there's a chain:
   {1} = G₀ ◁ G₁ ◁ ... ◁ Gₙ = G
   with Gᵢ₊₁/Gᵢ cyclic.

2. By FTGT, this corresponds to:
   K = K₀ ⊃ K₁ ⊃ ... ⊃ Kₙ = F
   with Kᵢ/Kᵢ₊₁ cyclic Galois.

3. Cyclic extensions (over fields with enough roots of unity) are radical extensions.

**(⟹) Solvable by radicals ⟹ solvable Galois group:**

If K ⊂ L where L is obtained by adjoining radicals:
F = L₀ ⊂ L₁ ⊂ ... ⊂ Lₘ = L

with Lᵢ₊₁ = Lᵢ(ⁿ√aᵢ).

The Galois group of each radical extension is cyclic or trivial.

By properties of solvable groups, Gal(K/F) is solvable.

**Consequence:** The general quintic is not solvable by radicals because S₅ is not solvable (A₅ is simple and non-abelian).`}]}],o={partId:14,partTitle:e,textbookChapter:n,sections:i};export{o as p};
