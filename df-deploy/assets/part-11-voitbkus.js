const n="Vector Spaces",e="Chapter 11",i=[{sectionId:"11.1",sectionTitle:"Definitions and Basic Theorems",textbookSection:"§11.1",examples:[{id:"ex-11.1.1",type:"example",title:"Example 11.1.1",statement:"Prove that every vector space has a basis (requires Zorn's Lemma).",solution:`**Theorem:** Every vector space V over a field F has a basis.

**Proof using Zorn's Lemma:**

Let S = {linearly independent subsets of V}.

S is non-empty: ∅ ∈ S (vacuously independent).

Partially order S by inclusion.

**Claim:** Every chain in S has an upper bound.

Let C = {S_i : i ∈ I} be a chain in S.
Let S = ∪_{i ∈ I} S_i.

S is linearly independent:
If Σ c_j v_j = 0 with v_j ∈ S and c_j ∈ F, then all v_j lie in some S_i (finitely many elements, chain property).
Since S_i is linearly independent, all c_j = 0.

So S ∈ S is an upper bound for C.

By Zorn's Lemma, S has a maximal element B.

**Claim:** B is a basis.

B is linearly independent by construction.

B spans V: If v ∉ span(B), then B ∪ {v} would be linearly independent (prove!), contradicting maximality.

Therefore B is a basis.`}],exercises:[{id:"11.1.1",type:"exercise",title:"Exercise 11.1.1",statement:"Prove that all bases of a finite-dimensional vector space have the same cardinality.",solution:`**Proof (Steinitz Exchange Lemma approach):**

Let B = {b_1, ..., b_n} and C = {c_1, ..., c_m} be bases of V.

**Claim: n = m.**

We show m ≤ n and n ≤ m.

**Showing m ≤ n:**

Start with B. Since c_1 ∈ V = span(B), we can write c_1 as a linear combination of B.

c_1 = α_1 b_1 + ... + α_n b_n with some α_i ≠ 0 (WLOG α_1 ≠ 0).

Then B_1 = {c_1, b_2, ..., b_n} is still a basis (exchange lemma).

Continue: Express c_2 in terms of B_1, exchange with some b_j.

After m steps: {c_1, c_2, ..., c_m, b_{j_1}, ...} spans V.

If m > n, we'd have more than n vectors, but we started with n basis vectors and only exchanged. This means some c_i would be dependent on previous ones, contradicting that C is a basis.

**Showing n ≤ m:** Symmetric argument.

Therefore n = m.`},{id:"11.1.2",type:"exercise",title:"Exercise 11.1.2",statement:"Let V be a finite-dimensional vector space and W ⊆ V a subspace. Prove dim(V/W) = dim(V) - dim(W).",solution:`**Proof:**

Let dim(W) = m and dim(V) = n.

Let {w_1, ..., w_m} be a basis for W.

Extend to a basis {w_1, ..., w_m, v_1, ..., v_k} for V, where k = n - m.

**Claim:** {v_1 + W, ..., v_k + W} is a basis for V/W.

**Spanning:**

Any v ∈ V can be written as:
v = α_1 w_1 + ... + α_m w_m + β_1 v_1 + ... + β_k v_k.

Then v + W = β_1 v_1 + ... + β_k v_k + W = β_1(v_1 + W) + ... + β_k(v_k + W).

So {v_i + W} spans V/W.

**Linear independence:**

Suppose β_1(v_1 + W) + ... + β_k(v_k + W) = W (zero in V/W).

Then β_1 v_1 + ... + β_k v_k ∈ W.

So β_1 v_1 + ... + β_k v_k = γ_1 w_1 + ... + γ_m w_m for some γ_i.

This gives β_1 v_1 + ... + β_k v_k - γ_1 w_1 - ... - γ_m w_m = 0.

By independence of the full basis, all coefficients are 0, so β_i = 0.

Therefore dim(V/W) = k = n - m = dim(V) - dim(W).`}]}],a={partId:11,partTitle:n,textbookChapter:e,sections:i};export{a as p};
