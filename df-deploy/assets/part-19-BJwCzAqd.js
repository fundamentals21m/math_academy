const e="Character Theory and Applications",n="Chapter 19",t=[{sectionId:"19.1",sectionTitle:"Characters and Orthogonality Relations",textbookSection:"§19.1",examples:[{id:"ex-19.1.1",type:"example",title:"Character Orthogonality",statement:"State and prove the orthogonality relations for characters.",solution:`**Setup:**

Let G be a finite group and let χ₁, ..., χᵣ be the irreducible characters over ℂ.

Define an inner product on class functions:
⟨f, g⟩ = (1/|G|) Σ_{x∈G} f(x) · overline{g(x)}

**First Orthogonality Relation (row orthogonality):**

⟨χᵢ, χⱼ⟩ = δᵢⱼ

i.e., (1/|G|) Σ_{x∈G} χᵢ(x) · overline{χⱼ(x)} = {1 if i=j, 0 otherwise}

**Proof sketch:**

For representations ρᵢ, ρⱼ, consider the space Hom(Vᵢ, Vⱼ) as a G-module.

By Schur's Lemma:
- If i ≠ j: Hom_G(Vᵢ, Vⱼ) = 0
- If i = j: Hom_G(Vᵢ, Vᵢ) = ℂ·id

The averaging projection onto G-fixed points gives:
dim Hom_G(Vᵢ, Vⱼ) = (1/|G|) Σ χᵢ(g) overline{χⱼ(g)}

**Second Orthogonality Relation (column orthogonality):**

Σᵢ χᵢ(g) · overline{χᵢ(h)} = {|C_G(g)| if g ~ h, 0 otherwise}

where g ~ h means g and h are conjugate.`}],exercises:[{id:"19.1.1",type:"exercise",title:"Exercise 19.1.1",statement:"Use characters to prove that the number of irreducible representations of G equals the number of conjugacy classes.",solution:`**Proof:**

**Step 1: Characters are class functions.**

χ(ghg⁻¹) = Tr(ρ(ghg⁻¹)) = Tr(ρ(g)ρ(h)ρ(g)⁻¹) = Tr(ρ(h)) = χ(h).

**Step 2: The irreducible characters form an orthonormal set in the space of class functions.**

By the first orthogonality relation: ⟨χᵢ, χⱼ⟩ = δᵢⱼ.

**Step 3: The irreducible characters form a basis for class functions.**

Let CF(G) be the space of class functions G → ℂ.

dim CF(G) = (number of conjugacy classes).

*Claim:* {χ₁, ..., χᵣ} spans CF(G).

If f ∈ CF(G) is orthogonal to all χᵢ, then f = 0.

(This follows from the decomposition of the regular representation.)

**Step 4: Conclude.**

Since {χ₁, ..., χᵣ} is an orthonormal basis for CF(G):

r = dim CF(G) = (number of conjugacy classes).

Therefore: **|Irr(G)| = |Conj. classes of G|**.`},{id:"19.1.2",type:"exercise",title:"Exercise 19.1.2",statement:"Construct the character table of S₃.",solution:`**S₃ has 3 conjugacy classes:**

1. {e} - identity (size 1)
2. {(12), (13), (23)} - transpositions (size 3)
3. {(123), (132)} - 3-cycles (size 2)

**By the theorem, S₃ has 3 irreducible representations.**

**Degree equation:** Σ dᵢ² = |G| = 6.

Possibilities: 1² + 1² + 2² = 6. ✓

**The three irreducible representations:**

1. **Trivial representation χ₁:** χ₁(g) = 1 for all g.

2. **Sign representation χ₂:** χ₂(g) = sgn(g).
   χ₂(e) = 1, χ₂(transposition) = -1, χ₂(3-cycle) = 1.

3. **2-dimensional representation χ₃:** From the standard action on {1,2,3}.
   χ₃(g) = (number of fixed points) - 1... Actually:
   χ₃(e) = 2, χ₃(transposition) = 0, χ₃(3-cycle) = -1.

**Character Table:**

|  | e | (12) | (123) |
|--|---|------|-------|
|χ₁| 1 |  1   |   1   |
|χ₂| 1 | -1   |   1   |
|χ₃| 2 |  0   |  -1   |

**Verify orthogonality:** (1/6)[1·1 + 3·1·(-1) + 2·1·1] = 0 ✓ (for χ₁, χ₂)`}]}],o={partId:19,partTitle:e,textbookChapter:n,sections:t};export{o as p};
