const e="Further Topics in Group Theory",n="Chapter 6",i=[{sectionId:"6.1",sectionTitle:"p-Groups and Nilpotent Groups",textbookSection:"§6.1",examples:[{id:"ex-6.1.1",type:"example",title:"Example 6.1.1",statement:"Define nilpotent groups and show that all p-groups are nilpotent.",solution:`**Definition of Nilpotent:**

A group G is **nilpotent** if it has a central series:
{e} = Z_0 ⊆ Z_1 ⊆ ... ⊆ Z_n = G

where Z_1 = Z(G) and Z_{i+1}/Z_i = Z(G/Z_i).

Equivalently, the upper central series terminates at G.

**Theorem: All p-groups are nilpotent.**

**Proof by induction on |G|:**

Base case: |G| = 1. Then G = {e} is nilpotent (Z_0 = G).

Inductive step: Let |G| = p^n with n ≥ 1.

We showed earlier that Z(G) ≠ {e} for p-groups.

Consider G/Z(G). This is a p-group with |G/Z(G)| < |G|.

By induction, G/Z(G) is nilpotent.

The preimage in G of the upper central series of G/Z(G) gives a central series for G:
{e} ⊆ Z(G) ⊆ Z_2 ⊆ ... ⊆ G

where Z_{i+1}/Z(G) = Z_i(G/Z(G)).

Therefore G is nilpotent.

**Note:** The converse is false: ℤ is nilpotent but not a p-group.`},{id:"ex-6.1.2",type:"example",title:"Example 6.1.2",statement:"Prove that a finite group G is nilpotent if and only if G is a direct product of its Sylow subgroups.",solution:`**Proof:**

**(⟹) Nilpotent implies direct product of Sylow subgroups:**

Let G be nilpotent and let P be a Sylow p-subgroup.

Claim: P ◁ G (all Sylow subgroups are normal).

Proof of claim: In a nilpotent group, all maximal subgroups are normal.

If P is not normal, then N_G(P) ⊊ G.
Let M be a maximal subgroup containing N_G(P).
By the normalizer condition for nilpotent groups, N_G(M) ⊃ M.

But this means there exists g ∈ N_G(M) \\ M with gPg⁻¹ ⊆ M.
Since P and gPg⁻¹ are both Sylow p-subgroups of M, they're conjugate in M.
This contradicts P ⊆ N_G(P) ⊆ M.

Since all Sylow subgroups are normal and have pairwise coprime orders:
G = P_1 × P_2 × ... × P_r

where P_i is the Sylow p_i-subgroup.

**(⟸) Direct product of p-groups implies nilpotent:**

Each P_i is a p-group, hence nilpotent.

The direct product of nilpotent groups is nilpotent.

(The upper central series of a direct product is the product of upper central series.)`}],exercises:[{id:"6.1.1",type:"exercise",title:"Exercise 6.1.1",statement:"Prove that a group G is nilpotent if and only if every maximal subgroup of G is normal.",solution:`**Proof:**

**(⟹) Nilpotent implies maximal subgroups are normal:**

Let G be nilpotent with upper central series Z_0 ⊆ Z_1 ⊆ ... ⊆ Z_n = G.

Let M be a maximal subgroup of G.

Find the largest i such that Z_i ⊆ M. Since Z_n = G ⊄ M, such i exists with i < n.

Then Z_i ⊆ M but Z_{i+1} ⊄ M.

Since M is maximal and Z_i ⊆ M, we have M · Z_{i+1} = G.

Now Z_{i+1}/Z_i = Z(G/Z_i), so Z_{i+1}/Z_i is central in G/Z_i.

For any g ∈ G, gZ_{i+1}g⁻¹ = Z_{i+1} (since Z_{i+1}/Z_i is central).

This means gMg⁻¹ · Z_{i+1} = gGg⁻¹ = G = M · Z_{i+1}.

Since [G : M] = [Z_{i+1} : M ∩ Z_{i+1}] is prime (M maximal), and M ∩ Z_{i+1} is normal in Z_{i+1}:
gMg⁻¹ = M.

**(⟸) Maximal subgroups normal implies nilpotent:**

We show Z(G) ≠ {e}, then use induction.

If Z(G) = {e}, pick a maximal subgroup M.
By hypothesis M ◁ G, so G/M is simple.
Since M is maximal, G/M has prime order p.

But then G/M ≅ ℤ_p, which is abelian.
This means [G, G] ⊆ M for all maximal M.
So [G, G] is in every maximal subgroup, making [G, G] ⊆ Φ(G).

By the Burnside basis theorem and properties of p-groups, this implies Z(G) ≠ {e}.

Induction completes the proof.`},{id:"6.1.2",type:"exercise",title:"Exercise 6.1.2",statement:"Let G be a nilpotent group and let H ≤ G with H ≠ G. Prove that N_G(H) ⊃ H (proper containment).",solution:`**Proof (Normalizer Condition):**

We prove by induction on the nilpotency class c of G.

Base case c = 1: G is abelian, so N_G(H) = G ⊃ H.

Inductive step: Let G have class c > 1.

Consider Z(G) ≠ {e}.

**Case 1: Z(G) ⊆ H.**

Then H/Z(G) ≤ G/Z(G), and G/Z(G) has class c - 1.

By induction: N_{G/Z(G)}(H/Z(G)) ⊃ H/Z(G).

Let π: G → G/Z(G) be the projection.
N_G(H) = π⁻¹(N_{G/Z(G)}(H/Z(G))) ⊃ π⁻¹(H/Z(G)) = H.

**Case 2: Z(G) ⊄ H.**

Then HZ(G) ⊃ H (proper containment).

Since Z(G) ⊆ N_G(H) (central elements normalize everything):
N_G(H) ⊇ HZ(G) ⊃ H.

In both cases, N_G(H) ⊃ H.

**Note:** This property characterizes nilpotent groups among finite groups.`}]},{sectionId:"6.2",sectionTitle:"Solvable Groups",textbookSection:"§6.2",examples:[{id:"ex-6.2.1",type:"example",title:"Example 6.2.1",statement:"Define solvable groups and prove that S_4 is solvable.",solution:`**Definition:**

A group G is **solvable** if it has a subnormal series:
{e} = G_0 ◁ G_1 ◁ ... ◁ G_n = G

where each quotient G_{i+1}/G_i is abelian.

Equivalently, the derived series G ⊇ G' ⊇ G'' ⊇ ... eventually reaches {e}.

**Proof that S_4 is solvable:**

Consider the series:
{e} ◁ V_4 ◁ A_4 ◁ S_4

where V_4 = {e, (12)(34), (13)(24), (14)(23)} (Klein four-group).

**Check each quotient is abelian:**

1. S_4/A_4 ≅ ℤ_2 (abelian).

2. A_4/V_4 ≅ ℤ_3 (abelian).
   |A_4| = 12, |V_4| = 4, so |A_4/V_4| = 3.

3. V_4/{e} ≅ V_4 ≅ ℤ_2 × ℤ_2 (abelian).

Therefore S_4 is solvable.

**Note:** S_n is NOT solvable for n ≥ 5 because A_n is simple and non-abelian.`},{id:"ex-6.2.2",type:"example",title:"Example 6.2.2",statement:"Prove that every nilpotent group is solvable.",solution:`**Proof:**

Let G be nilpotent with upper central series:
{e} = Z_0 ⊆ Z_1 ⊆ ... ⊆ Z_n = G

where Z_{i+1}/Z_i = Z(G/Z_i).

**Claim:** Z_{i+1}/Z_i is abelian for all i.

**Proof of claim:**
Z_{i+1}/Z_i = Z(G/Z_i), which is the center of G/Z_i.
The center of any group is abelian.

Therefore the upper central series is a subnormal series with abelian quotients.

Hence G is solvable.

**Note:** The converse is false. S_3 is solvable but not nilpotent:
- Solvable: {e} ◁ A_3 ◁ S_3 with abelian quotients.
- Not nilpotent: Z(S_3) = {e}, so the upper central series is stuck at {e}.`}],exercises:[{id:"6.2.1",type:"exercise",title:"Exercise 6.2.1",statement:"Prove that subgroups and quotients of solvable groups are solvable.",solution:`**Part 1: Subgroups of solvable groups are solvable.**

Let G be solvable with derived series:
G = G^{(0)} ⊇ G^{(1)} ⊇ ... ⊇ G^{(n)} = {e}

where G^{(i+1)} = [G^{(i)}, G^{(i)}].

Let H ≤ G. Consider H^{(i)} = [H^{(i-1)}, H^{(i-1)}].

Claim: H^{(i)} ⊆ G^{(i)} for all i.

Proof by induction:
- H^{(0)} = H ⊆ G = G^{(0)}.
- If H^{(i)} ⊆ G^{(i)}, then H^{(i+1)} = [H^{(i)}, H^{(i)}] ⊆ [G^{(i)}, G^{(i)}] = G^{(i+1)}.

Since G^{(n)} = {e}, we have H^{(n)} ⊆ {e}, so H^{(n)} = {e}.

Therefore H is solvable.

**Part 2: Quotients of solvable groups are solvable.**

Let G be solvable and N ◁ G.

Let π: G → G/N be the projection.

Claim: (G/N)^{(i)} = π(G^{(i)}) = G^{(i)}N/N.

Proof: π is surjective and preserves commutators:
[π(g), π(h)] = π([g, h]).

So π(G^{(i)}) = (G/N)^{(i)}.

Since G^{(n)} = {e}:
(G/N)^{(n)} = π(G^{(n)}) = π({e}) = {N/N} = {e_{G/N}}.

Therefore G/N is solvable.`},{id:"6.2.2",type:"exercise",title:"Exercise 6.2.2",statement:"Prove that S_n is not solvable for n ≥ 5.",solution:`**Proof:**

For n ≥ 5, A_n is simple and non-abelian.

**Step 1: The derived series of S_n.**

S_n' = [S_n, S_n] = A_n (the derived subgroup is the commutator subgroup).

This is because:
- Every commutator [σ, τ] = στσ⁻¹τ⁻¹ is an even permutation.
- Every even permutation can be written as a product of commutators.

**Step 2: For n ≥ 5, A_n is non-abelian and simple.**

Since A_n is non-abelian, A_n' = [A_n, A_n] ≠ {e}.

Since A_n is simple and A_n' ◁ A_n, we have A_n' = A_n.

**Step 3: The derived series doesn't terminate.**

S_n^{(0)} = S_n
S_n^{(1)} = A_n
S_n^{(2)} = A_n' = A_n
S_n^{(3)} = A_n' = A_n
...

The derived series stabilizes at A_n ≠ {e}.

Therefore S_n is not solvable for n ≥ 5.

**Note:** This is key to proving the insolvability of the general quintic by radicals.`}]},{sectionId:"6.3",sectionTitle:"Free Groups",textbookSection:"§6.3",examples:[{id:"ex-6.3.1",type:"example",title:"Example 6.3.1",statement:"Define the free group F(S) on a set S and state its universal property.",solution:`**Definition:**

Let S be a set. The **free group on S**, denoted F(S), is defined as:

1. Let S⁻¹ = {s⁻¹ : s ∈ S} be a disjoint copy of S (formal inverses).

2. A **word** in S ∪ S⁻¹ is a finite sequence w = a_1 a_2 ... a_n where each a_i ∈ S ∪ S⁻¹.

3. A word is **reduced** if it contains no adjacent pair ss⁻¹ or s⁻¹s.

4. F(S) is the set of reduced words, with:
   - Multiplication: concatenation followed by reduction
   - Identity: the empty word ε
   - Inverses: reverse the word and invert each letter

**Universal Property:**

For any group G and any function f: S → G, there exists a unique homomorphism φ: F(S) → G such that φ|_S = f.

\`\`\`
    S ----f----> G
    |            ↑
    |            | φ (unique)
    v            |
   F(S) ---------+
\`\`\`

**Consequence:** Every group is a quotient of a free group.

If G = ⟨g_i : i ∈ I | relations⟩, then G ≅ F(I)/N where N is the normal closure of the relations.`}],exercises:[{id:"6.3.1",type:"exercise",title:"Exercise 6.3.1",statement:"Prove that the free group F(S) is non-abelian if |S| ≥ 2.",solution:`**Proof:**

Let S contain at least two distinct elements a, b.

Consider the reduced words ab and ba in F(S).

**Claim: ab ≠ ba in F(S).**

In a free group, two reduced words are equal if and only if they are identical as sequences.

The sequence (a, b) is not the same as the sequence (b, a).

Therefore ab ≠ ba.

**Alternative proof using the universal property:**

Let G = S_3 (non-abelian group).

Define f: S → S_3 by:
- f(a) = (1 2)
- f(b) = (1 3)
- f(s) = e for other s ∈ S

By the universal property, f extends to φ: F(S) → S_3.

φ(ab) = (1 2)(1 3) = (1 3 2)
φ(ba) = (1 3)(1 2) = (1 2 3)

Since (1 3 2) ≠ (1 2 3), we have ab ≠ ba in F(S).

Therefore F(S) is non-abelian.`},{id:"6.3.2",type:"exercise",title:"Exercise 6.3.2",statement:"Prove that subgroups of free groups are free (Nielsen-Schreier Theorem).",solution:`**Statement (Nielsen-Schreier Theorem):**

Every subgroup of a free group is free.

**Proof sketch (topological approach):**

1. F(S) is the fundamental group of a bouquet of |S| circles (one-point union of circles).

2. Subgroups of π_1(X) correspond to covering spaces of X.

3. Every covering space of a graph (1-dimensional CW complex) is also a graph.

4. The fundamental group of a graph is free (generated by the edges not in a spanning tree).

5. Therefore every subgroup of F(S) is free.

**Rank formula for finite index subgroups:**

If H ≤ F_n has index m, then:
rank(H) = m(n - 1) + 1

**Example:**
F_2 has subgroups of any finite rank ≥ 2.
For m = 2, rank(H) = 2(2-1) + 1 = 3.

**Note:** This theorem is non-trivial! The analogous statement is false for other algebraic structures (e.g., submonoids of free monoids need not be free).`}]}],t={partId:6,partTitle:e,textbookChapter:n,sections:i};export{t as p};
