const e="Representation Theory of Finite Groups",n="Chapter 18",t=[{sectionId:"18.1",sectionTitle:"Basic Definitions and Maschke's Theorem",textbookSection:"§18.1",examples:[{id:"ex-18.1.1",type:"example",title:"Maschke's Theorem",statement:"State and prove Maschke's Theorem.",solution:`**Maschke's Theorem:**

Let G be a finite group and F a field with char(F) ∤ |G|.

Then every finite-dimensional F[G]-module is completely reducible (a direct sum of simple modules).

**Proof:**

It suffices to show: If V is an F[G]-module and W ⊆ V is a submodule, then W has a complement (W' with V = W ⊕ W').

As vector spaces, V = W ⊕ U for some subspace U (not necessarily G-invariant).

Let π: V → W be the projection onto W along U.

**Define π̄: V → W by:**
π̄(v) = (1/|G|) Σ_{g∈G} g · π(g⁻¹ · v)

(This is well-defined since char(F) ∤ |G|.)

**Claim 1: π̄ is F[G]-linear.**

For h ∈ G:
h · π̄(v) = (1/|G|) Σ_{g∈G} hg · π(g⁻¹ · v)
= (1/|G|) Σ_{g'∈G} g' · π(g'⁻¹h · v)  (substituting g' = hg)
= π̄(h · v). ✓

**Claim 2: π̄|_W = id_W.**

For w ∈ W: g⁻¹ · w ∈ W, so π(g⁻¹ · w) = g⁻¹ · w.
π̄(w) = (1/|G|) Σ g · g⁻¹ · w = (1/|G|) Σ w = w. ✓

**Conclusion:** W' = ker(π̄) is a G-invariant complement of W.`}],exercises:[{id:"18.1.1",type:"exercise",title:"Exercise 18.1.1",statement:"Find all irreducible complex representations of ℤ/nℤ.",solution:`**Solution:**

Let G = ℤ/nℤ = ⟨g | gⁿ = 1⟩.

G is abelian, so all irreducible representations over ℂ are 1-dimensional.

**Why?** By Schur's Lemma, if V is irreducible, End_{ℂ[G]}(V) = ℂ.

For abelian G, every g ∈ G acts by a scalar (commutes with everything).

So V = ℂ and G acts by characters.

**Characters of ℤ/nℤ:**

A character χ: G → ℂ× satisfies χ(g)ⁿ = χ(gⁿ) = χ(1) = 1.

So χ(g) is an nth root of unity.

Let ζ = e^{2πi/n}. The characters are:
χ_k(g) = ζ^k for k = 0, 1, ..., n-1.

**Irreducible representations:**

ρ_k: ℤ/nℤ → GL₁(ℂ) = ℂ×
ρ_k(g^j) = ζ^{jk}

for k = 0, 1, ..., n-1.

**There are exactly n irreducible representations**, each 1-dimensional.`}]}],i={partId:18,partTitle:e,textbookChapter:n,sections:t};export{i as p};
