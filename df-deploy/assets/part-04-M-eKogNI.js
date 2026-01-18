const n="Group Actions",e="Chapter 4",t=[{sectionId:"4.1",sectionTitle:"Group Actions and Permutation Representations",textbookSection:"§4.1",examples:[{id:"ex-4.1.1",type:"example",title:"Example 4.1.1",statement:"Let G be a group acting on itself by left multiplication. Show this defines a group action and describe the associated permutation representation.",solution:`**Step 1: Define the action.**

For g ∈ G and x ∈ G, define g · x = gx (left multiplication).

**Step 2: Verify the group action axioms.**

Identity axiom: e · x = ex = x for all x ∈ G. ✓

Compatibility axiom: For g, h ∈ G and x ∈ G:
g · (h · x) = g · (hx) = g(hx) = (gh)x = (gh) · x ✓

**Step 3: Describe the permutation representation.**

The permutation representation φ: G → S_G is defined by:
φ(g) = σ_g where σ_g(x) = gx.

Each σ_g is a bijection G → G:
- Injective: If gx = gy, then x = y (by left cancellation).
- Surjective: For any y ∈ G, y = g(g⁻¹y), so y = σ_g(g⁻¹y).

**Step 4: Key property (Cayley's Theorem).**

φ is injective: If φ(g) = φ(h), then gx = hx for all x.
Taking x = e: g = h.

Therefore G ≅ φ(G) ≤ S_G, proving every group embeds in a symmetric group.`},{id:"ex-4.1.2",type:"example",title:"Example 4.1.2",statement:"Let G act on a set A. Define the orbit of a ∈ A and the stabilizer of a. Prove the Orbit-Stabilizer Theorem.",solution:`**Definitions:**

Orbit of a: O_a = G · a = {g · a : g ∈ G}

Stabilizer of a: G_a = Stab_G(a) = {g ∈ G : g · a = a}

**Orbit-Stabilizer Theorem:**
|G| = |O_a| · |G_a| (for finite groups)

More precisely: |O_a| = [G : G_a].

**Proof:**

Define f: G/G_a → O_a by f(gG_a) = g · a.

**Well-defined:** If gG_a = hG_a, then g⁻¹h ∈ G_a.
So (g⁻¹h) · a = a, meaning h · a = g · a.

**Injective:** If g · a = h · a, then h⁻¹g · a = a.
So h⁻¹g ∈ G_a, meaning gG_a = hG_a.

**Surjective:** Any element of O_a is g · a = f(gG_a) for some g.

Therefore f is a bijection, so |O_a| = |G/G_a| = [G : G_a].

By Lagrange's theorem: |G| = [G : G_a] · |G_a| = |O_a| · |G_a|.`}],exercises:[{id:"4.1.1",type:"exercise",title:"Exercise 4.1.1",statement:"Let G act on A. Prove that the orbits of this action partition A.",solution:`**Proof:**

Define an equivalence relation on A: a ~ b if and only if b ∈ O_a (i.e., b = g · a for some g ∈ G).

**Reflexive:** a = e · a, so a ∈ O_a, meaning a ~ a.

**Symmetric:** If a ~ b, then b = g · a for some g.
Then a = g⁻¹ · b (since g⁻¹ · (g · a) = (g⁻¹g) · a = a).
So a ∈ O_b, meaning b ~ a.

**Transitive:** If a ~ b and b ~ c, then:
b = g · a for some g
c = h · b for some h

Then c = h · (g · a) = (hg) · a.
So c ∈ O_a, meaning a ~ c.

Since ~ is an equivalence relation, its equivalence classes partition A.

The equivalence class of a is {b ∈ A : b ~ a} = {g · a : g ∈ G} = O_a.

Therefore the orbits partition A.`},{id:"4.1.2",type:"exercise",title:"Exercise 4.1.2",statement:"Let G act on A and let a ∈ A. Prove that G_a (the stabilizer of a) is a subgroup of G.",solution:`**Proof:**

**Identity:** e · a = a (by the identity axiom for group actions).
Therefore e ∈ G_a.

**Closure:** Let g, h ∈ G_a. Then g · a = a and h · a = a.
(gh) · a = g · (h · a) = g · a = a.
Therefore gh ∈ G_a.

**Inverses:** Let g ∈ G_a. Then g · a = a.
Apply g⁻¹ to both sides:
g⁻¹ · (g · a) = g⁻¹ · a
(g⁻¹g) · a = g⁻¹ · a
e · a = g⁻¹ · a
a = g⁻¹ · a

Therefore g⁻¹ ∈ G_a.

Since G_a satisfies the subgroup criteria, G_a ≤ G.`},{id:"4.1.3",type:"exercise",title:"Exercise 4.1.3",statement:"Let G act on A. Prove that for any g ∈ G and a ∈ A: G_{g·a} = gG_a g⁻¹.",solution:`**Proof:**

We show both inclusions.

**G_{g·a} ⊆ gG_a g⁻¹:**

Let h ∈ G_{g·a}. Then h · (g · a) = g · a.

We want to show h = gkg⁻¹ for some k ∈ G_a.

Let k = g⁻¹hg. We verify k ∈ G_a:
k · a = (g⁻¹hg) · a = g⁻¹ · (h · (g · a)) = g⁻¹ · (g · a) = a.

So k ∈ G_a, and h = gkg⁻¹ ∈ gG_a g⁻¹.

**gG_a g⁻¹ ⊆ G_{g·a}:**

Let h = gkg⁻¹ where k ∈ G_a.

h · (g · a) = (gkg⁻¹) · (g · a)
= g · (k · (g⁻¹ · (g · a)))
= g · (k · a)
= g · a  (since k ∈ G_a)

So h ∈ G_{g·a}.

**Conclusion:**
G_{g·a} = gG_a g⁻¹.

This shows that stabilizers of elements in the same orbit are conjugate subgroups.`}]},{sectionId:"4.2",sectionTitle:"Groups Acting on Themselves by Conjugation",textbookSection:"§4.2",examples:[{id:"ex-4.2.1",type:"example",title:"Example 4.2.1",statement:"Describe the conjugacy classes of S_3.",solution:`**Step 1: Elements of S_3.**

S_3 = {1, (1 2), (1 3), (2 3), (1 2 3), (1 3 2)}
|S_3| = 6

**Step 2: Conjugacy in S_n.**

In S_n, two permutations are conjugate if and only if they have the same cycle type.

**Step 3: List cycle types.**

- Identity (1): {1}
- Transpositions (cycle type 2): {(1 2), (1 3), (2 3)}
- 3-cycles (cycle type 3): {(1 2 3), (1 3 2)}

**Step 4: Conjugacy classes.**

Class 1: {1} (size 1)
Class 2: {(1 2), (1 3), (2 3)} (size 3)
Class 3: {(1 2 3), (1 3 2)} (size 2)

**Verification using class equation:**
|G| = |Z(G)| + Σ[G : C_G(g_i)]

For S_3: Z(S_3) = {1} (non-abelian group has trivial center for order ≤ 6, actually S_3 has center {1})

6 = 1 + 3 + 2 ✓`},{id:"ex-4.2.2",type:"example",title:"Example 4.2.2",statement:"Prove the Class Equation: |G| = |Z(G)| + Σ[G : C_G(g_i)] where the sum is over representatives of conjugacy classes of size > 1.",solution:`**Step 1: Set up the conjugation action.**

G acts on itself by conjugation: g · x = gxg⁻¹.

The orbits are the conjugacy classes.
The stabilizer of x is C_G(x), the centralizer of x.

**Step 2: Partition by orbits.**

By Orbit-Stabilizer: |conjugacy class of x| = [G : C_G(x)].

Since orbits partition G:
|G| = Σ (sizes of conjugacy classes)

**Step 3: Identify the center.**

The conjugacy class of x has size 1 ⟺ gxg⁻¹ = x for all g ∈ G ⟺ x ∈ Z(G).

So elements of Z(G) form singleton conjugacy classes.

**Step 4: Write the class equation.**

Let g₁, g₂, ..., g_r be representatives of conjugacy classes with size > 1.

|G| = (number of size-1 classes) + Σᵢ (size of class containing gᵢ)
= |Z(G)| + Σᵢ [G : C_G(gᵢ)]

Note: Each [G : C_G(gᵢ)] > 1 and divides |G|.`}],exercises:[{id:"4.2.1",type:"exercise",title:"Exercise 4.2.1",statement:"Use the Class Equation to prove that if |G| = p^n for a prime p, then Z(G) ≠ {e}.",solution:`**Proof:**

By the class equation:
|G| = |Z(G)| + Σ[G : C_G(gᵢ)]

where the sum is over representatives of non-central conjugacy classes.

**Key observations:**

1. |G| = p^n is divisible by p.

2. For each gᵢ not in Z(G):
   - C_G(gᵢ) is a proper subgroup (since gᵢ ∉ Z(G))
   - [G : C_G(gᵢ)] > 1
   - [G : C_G(gᵢ)] divides |G| = p^n
   - Therefore [G : C_G(gᵢ)] is a power of p, and since it's > 1, it's ≥ p.
   - Thus p divides [G : C_G(gᵢ)].

3. Rearranging:
   |Z(G)| = |G| - Σ[G : C_G(gᵢ)] = p^n - Σ[G : C_G(gᵢ)]

4. Since p divides |G| and p divides each [G : C_G(gᵢ)]:
   p divides |Z(G)|.

5. Since |Z(G)| ≥ 1 (the identity is always central) and p divides |Z(G)|:
   |Z(G)| ≥ p > 1.

Therefore Z(G) ≠ {e}.`},{id:"4.2.2",type:"exercise",title:"Exercise 4.2.2",statement:"Prove that every group of order p² (p prime) is abelian.",solution:`**Proof:**

Let |G| = p².

By the previous exercise, Z(G) ≠ {e}.

Since Z(G) ≤ G, by Lagrange's theorem |Z(G)| divides p² = |G|.

Possible values: |Z(G)| ∈ {1, p, p²}.

Since Z(G) ≠ {e}, we have |Z(G)| ∈ {p, p²}.

**Case 1: |Z(G)| = p².**
Then Z(G) = G, so G is abelian. Done.

**Case 2: |Z(G)| = p.**
Then |G/Z(G)| = p²/p = p.

Groups of prime order are cyclic, so G/Z(G) is cyclic.

But we proved earlier: If G/Z(G) is cyclic, then G is abelian.

This means Z(G) = G, contradicting |Z(G)| = p < p² = |G|.

**Conclusion:**
Case 2 is impossible, so |Z(G)| = p², meaning G = Z(G) and G is abelian.

**Corollary:** G ≅ ℤ_{p²} or G ≅ ℤ_p × ℤ_p.`},{id:"4.2.3",type:"exercise",title:"Exercise 4.2.3",statement:"Find the number of conjugacy classes in S_5.",solution:`**Solution:**

Conjugacy classes in S_n correspond to cycle types (partitions of n).

**Partitions of 5:**

1. 5 = 5 (one 5-cycle)
2. 5 = 4 + 1 (one 4-cycle, one fixed point)
3. 5 = 3 + 2 (one 3-cycle and one 2-cycle)
4. 5 = 3 + 1 + 1 (one 3-cycle, two fixed points)
5. 5 = 2 + 2 + 1 (two disjoint 2-cycles, one fixed point)
6. 5 = 2 + 1 + 1 + 1 (one transposition, three fixed points)
7. 5 = 1 + 1 + 1 + 1 + 1 (identity)

**Total: 7 conjugacy classes**

**Size of each class** (for reference):
- 5-cycles: 5!/5 = 24
- (4)(1)-type: 5!/(4·1) = 30
- (3)(2)-type: 5!/(3·2) = 20
- (3)(1)(1)-type: 5!/(3·2!) = 20
- (2)(2)(1)-type: 5!/(2·2·2!) = 15
- (2)(1)(1)(1)-type: 5!/(2·3!) = 10
- identity: 1

**Check:** 24 + 30 + 20 + 20 + 15 + 10 + 1 = 120 = |S_5| ✓`}]},{sectionId:"4.3",sectionTitle:"Automorphisms",textbookSection:"§4.3",examples:[{id:"ex-4.3.1",type:"example",title:"Example 4.3.1",statement:"Prove that Aut(ℤ_n) ≅ (ℤ/nℤ)× and find |Aut(ℤ_n)|.",solution:`**Step 1: Structure of Aut(ℤ_n).**

Any automorphism φ: ℤ_n → ℤ_n is determined by φ(1), since ℤ_n = ⟨1⟩.

For φ to be an automorphism, φ(1) must generate ℤ_n.

So φ(1) ∈ {k ∈ ℤ_n : gcd(k, n) = 1} = (ℤ/nℤ)×.

**Step 2: Define the isomorphism.**

Define Ψ: Aut(ℤ_n) → (ℤ/nℤ)× by Ψ(φ) = φ(1).

**Ψ is well-defined:** As shown, φ(1) ∈ (ℤ/nℤ)×.

**Ψ is a homomorphism:** 
Let φ, ψ ∈ Aut(ℤ_n).
Ψ(φ ∘ ψ) = (φ ∘ ψ)(1) = φ(ψ(1)) = φ(1) · ψ(1) (mod n)

Wait, let's be careful. If ψ(1) = a and φ(1) = b, then:
φ(ψ(1)) = φ(a) = a · φ(1) = ab.
So Ψ(φ ∘ ψ) = ab = Ψ(φ) · Ψ(ψ). ✓

**Ψ is injective:** If Ψ(φ) = Ψ(ψ), then φ(1) = ψ(1).
Since automorphisms are determined by the image of 1, φ = ψ.

**Ψ is surjective:** For any k ∈ (ℤ/nℤ)×, define φ_k(m) = km.
Then φ_k is an automorphism with φ_k(1) = k.

**Step 3: Conclusion.**

Aut(ℤ_n) ≅ (ℤ/nℤ)×.

|Aut(ℤ_n)| = φ(n) (Euler's totient function).`},{id:"ex-4.3.2",type:"example",title:"Example 4.3.2",statement:"Prove that Inn(G) ◁ Aut(G) and Aut(G)/Inn(G) ≅ Out(G), the outer automorphism group.",solution:`**Step 1: Define inner automorphisms.**

For g ∈ G, define φ_g: G → G by φ_g(x) = gxg⁻¹.

φ_g is an automorphism (conjugation).

Inn(G) = {φ_g : g ∈ G} ≤ Aut(G).

**Step 2: Prove Inn(G) ◁ Aut(G).**

Let σ ∈ Aut(G) and φ_g ∈ Inn(G).

We compute σ ∘ φ_g ∘ σ⁻¹:

(σ ∘ φ_g ∘ σ⁻¹)(x) = σ(φ_g(σ⁻¹(x)))
= σ(g · σ⁻¹(x) · g⁻¹)
= σ(g) · x · σ(g)⁻¹
= φ_{σ(g)}(x)

So σ ∘ φ_g ∘ σ⁻¹ = φ_{σ(g)} ∈ Inn(G).

Therefore Inn(G) ◁ Aut(G).

**Step 3: Define Out(G).**

The outer automorphism group is defined as:
Out(G) = Aut(G)/Inn(G)

Elements of Out(G) are cosets σ · Inn(G).

Two automorphisms represent the same outer automorphism iff they differ by an inner automorphism.

**Step 4: Connection to G/Z(G).**

The map G → Inn(G) given by g ↦ φ_g is a surjective homomorphism.
Its kernel is Z(G) (elements that commute with everything).

By the First Isomorphism Theorem:
G/Z(G) ≅ Inn(G)`}],exercises:[{id:"4.3.1",type:"exercise",title:"Exercise 4.3.1",statement:"Compute Aut(ℤ_2 × ℤ_2).",solution:`**Step 1: Identify the group structure.**

ℤ_2 × ℤ_2 = {(0,0), (1,0), (0,1), (1,1)} is the Klein four-group V₄.

Every non-identity element has order 2.

**Step 2: Determine automorphisms.**

An automorphism φ must permute the three elements of order 2:
{(1,0), (0,1), (1,1)}

φ is determined by φ((1,0)) and φ((0,1)), which must be:
- Distinct non-identity elements
- Generate the group (always true since any two distinct non-identity elements generate V₄)

**Step 3: Count possibilities.**

φ((1,0)) can be any of the 3 non-identity elements.
φ((0,1)) can be any of the remaining 2 non-identity elements.

|Aut(V₄)| = 3 × 2 = 6.

**Step 4: Identify the group.**

Aut(V₄) acts on the set {(1,0), (0,1), (1,1)} of 3 elements.

This gives a homomorphism Aut(V₄) → S_3.

Since |Aut(V₄)| = 6 = |S_3| and the homomorphism is injective (an automorphism is determined by its action on generators):

Aut(ℤ_2 × ℤ_2) ≅ S_3.`},{id:"4.3.2",type:"exercise",title:"Exercise 4.3.2",statement:"Let G be a group. Prove that if Aut(G) is trivial, then |G| ≤ 2.",solution:`**Proof:**

Assume Aut(G) = {id}.

**Step 1: Inn(G) is trivial.**

Since Inn(G) ≤ Aut(G) = {id}, we have Inn(G) = {id}.

This means φ_g = id for all g ∈ G.

So gxg⁻¹ = x for all g, x ∈ G.

Therefore G is abelian.

**Step 2: Every element has order ≤ 2.**

For abelian G, the inversion map ι: G → G defined by ι(x) = x⁻¹ is a homomorphism:
ι(xy) = (xy)⁻¹ = y⁻¹x⁻¹ = x⁻¹y⁻¹ = ι(x)ι(y) (using commutativity).

Also ι is bijective (ι⁻¹ = ι), so ι ∈ Aut(G).

Since Aut(G) = {id}, we have ι = id.

So x⁻¹ = x for all x ∈ G, meaning x² = e.

**Step 3: Conclude |G| ≤ 2.**

G is an abelian group where every element has order 1 or 2.

Such a group is a vector space over ℤ_2.

If G has dimension ≥ 2 over ℤ_2, then G contains ℤ_2 × ℤ_2 as a subgroup.

But Aut(ℤ_2 × ℤ_2) ≅ S_3 ≠ {id}, and we could extend automorphisms.

More directly: if |G| ≥ 4, pick two independent elements a, b. The map swapping a ↔ b extends to a non-trivial automorphism.

Therefore |G| ≤ 2. (G is either {e} or ℤ_2.)`}]},{sectionId:"4.4",sectionTitle:"Sylow Theorems",textbookSection:"§4.4-4.5",examples:[{id:"ex-4.4.1",type:"example",title:"Sylow Theorems",statement:"State the Sylow Theorems.",solution:`**Sylow Theorems**

Let G be a finite group with |G| = p^n m where p is prime and p ∤ m.

**First Sylow Theorem (Existence):**
G has a subgroup of order p^k for each k = 0, 1, ..., n.
In particular, G has a Sylow p-subgroup (subgroup of order p^n).

**Second Sylow Theorem (Conjugacy):**
All Sylow p-subgroups of G are conjugate.
That is, if P and Q are Sylow p-subgroups, then Q = gPg⁻¹ for some g ∈ G.

**Third Sylow Theorem (Counting):**
Let n_p denote the number of Sylow p-subgroups. Then:
1. n_p ≡ 1 (mod p)
2. n_p divides m = |G|/p^n
3. n_p = [G : N_G(P)] for any Sylow p-subgroup P

**Corollary:** If n_p = 1, then the unique Sylow p-subgroup is normal in G.`},{id:"ex-4.4.2",type:"example",title:"Example 4.4.2",statement:"Prove there is no simple group of order 12.",solution:`**Proof:**

|G| = 12 = 2² · 3.

**Step 1: Count Sylow subgroups.**

For Sylow 3-subgroups:
- n_3 ≡ 1 (mod 3)
- n_3 divides 4
- So n_3 ∈ {1, 4}

For Sylow 2-subgroups:
- n_2 ≡ 1 (mod 2)
- n_2 divides 3
- So n_2 ∈ {1, 3}

**Step 2: Assume G is simple.**

If G is simple, then no proper non-trivial subgroup is normal.

So n_3 ≠ 1 and n_2 ≠ 1.

Therefore n_3 = 4 and n_2 = 3.

**Step 3: Count elements.**

4 Sylow 3-subgroups, each of order 3, pairwise intersecting in {e}:
4 × (3-1) = 8 elements of order 3.

3 Sylow 2-subgroups, each of order 4.

Total elements so far: at least 8 + 1 = 9 (counting identity once).

Remaining spots: 12 - 9 = 3.

**Step 4: Analyze Sylow 2-subgroups.**

If the 3 Sylow 2-subgroups had trivial pairwise intersection, they'd contribute:
3 × 3 = 9 non-identity elements.

But we only have 3 spots for elements not of order 3.

So Sylow 2-subgroups must have non-trivial intersection.

Let P, Q be distinct Sylow 2-subgroups with P ∩ Q ≠ {e}.
|P ∩ Q| divides 4 and is > 1, so |P ∩ Q| = 2.

P ∩ Q is a subgroup of order 2, so it's ⟨x⟩ for some x of order 2.

N_G(P ∩ Q) contains both P and Q, so |N_G(P ∩ Q)| ≥ |PQ| ≥ 6.

Since |N_G(P ∩ Q)| divides 12 and is ≥ 6: |N_G(P ∩ Q)| ∈ {6, 12}.

If |N_G(P ∩ Q)| = 12, then P ∩ Q ◁ G, contradicting simplicity.

**Alternative conclusion:** At least one of n_2 or n_3 equals 1, so G has a normal Sylow subgroup and is not simple.`}],exercises:[{id:"4.4.1",type:"exercise",title:"Exercise 4.4.1",statement:"Classify groups of order 15.",solution:`**Solution:**

|G| = 15 = 3 · 5.

**Step 1: Apply Sylow theorems.**

For Sylow 5-subgroups:
- n_5 ≡ 1 (mod 5)
- n_5 divides 3
- n_5 ∈ {1} (since 6 doesn't divide 3)
- So n_5 = 1.

For Sylow 3-subgroups:
- n_3 ≡ 1 (mod 3)
- n_3 divides 5
- n_3 ∈ {1} (since 4 doesn't divide 5)
- So n_3 = 1.

**Step 2: Structure of G.**

Let P be the unique Sylow 5-subgroup (|P| = 5).
Let Q be the unique Sylow 3-subgroup (|Q| = 3).

Both P and Q are normal (unique Sylow subgroups).

P ∩ Q = {e} (coprime orders).

|PQ| = |P||Q|/|P ∩ Q| = 15 = |G|.

So G = PQ with P ◁ G, Q ◁ G, P ∩ Q = {e}.

**Step 3: Apply direct product theorem.**

Since P, Q ◁ G, P ∩ Q = {e}, and PQ = G:

G ≅ P × Q ≅ ℤ_5 × ℤ_3 ≅ ℤ_15.

**Conclusion:** There is exactly one group of order 15 (up to isomorphism): the cyclic group ℤ_15.`},{id:"4.4.2",type:"exercise",title:"Exercise 4.4.2",statement:"Prove that every group of order 35 is cyclic.",solution:`**Proof:**

|G| = 35 = 5 · 7.

**Step 1: Sylow analysis.**

For Sylow 7-subgroups:
- n_7 ≡ 1 (mod 7) and n_7 | 5
- n_7 ∈ {1, 8, 15, ...} ∩ {1, 5} = {1}
- So n_7 = 1.

For Sylow 5-subgroups:
- n_5 ≡ 1 (mod 5) and n_5 | 7
- n_5 ∈ {1, 6, 11, ...} ∩ {1, 7} = {1}
- So n_5 = 1.

**Step 2: Direct product structure.**

Let P = unique Sylow 7-subgroup ≅ ℤ_7.
Let Q = unique Sylow 5-subgroup ≅ ℤ_5.

Both are normal, P ∩ Q = {e}, and |PQ| = 35 = |G|.

By the direct product theorem:
G ≅ P × Q ≅ ℤ_7 × ℤ_5.

**Step 3: Conclude.**

Since gcd(7, 5) = 1:
ℤ_7 × ℤ_5 ≅ ℤ_35.

Therefore G is cyclic.

**Generalization:** Any group of order pq where p < q are primes and p ∤ (q-1) is cyclic.`},{id:"4.4.3",type:"exercise",title:"Exercise 4.4.3",statement:"Let G be a finite group and H ≤ G a subgroup. Prove that if gcd(|H|, [G:H]!) = 1, then H ◁ G.",solution:`**Proof:**

Let n = [G : H] and consider the action of G on G/H (left cosets) by left multiplication.

This gives a homomorphism φ: G → S_n (the permutation representation).

**Step 1: Analyze the kernel.**

K = ker(φ) is the largest normal subgroup of G contained in H.

(K is the intersection of all conjugates of H.)

**Step 2: Apply homomorphism theorem.**

G/K ≅ φ(G) ≤ S_n.

So |G/K| divides |S_n| = n!.

Equivalently, [G : K] divides [G : H]! = n!.

**Step 3: Factor [G : K].**

[G : K] = [G : H][H : K] = n · [H : K].

So [H : K] divides n!/n = (n-1)!.

Also [H : K] divides |H|.

**Step 4: Use the gcd condition.**

Since gcd(|H|, n!) = 1, and [H : K] divides both |H| and (n-1)! (which divides n!):

[H : K] = 1.

Therefore K = H.

**Step 5: Conclude.**

Since K ◁ G and K = H:

H ◁ G.`}]}],o={partId:4,partTitle:n,textbookChapter:e,sections:t};export{o as p};
