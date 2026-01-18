const n="Artinian Rings, Discrete Valuation Rings, and Dedekind Domains",i="Chapter 16",e=[{sectionId:"16.1",sectionTitle:"Artinian Rings",textbookSection:"§16.1",examples:[{id:"ex-16.1.1",type:"example",title:"Artinian Rings",statement:"Define Artinian rings and prove that a commutative Artinian ring has only finitely many maximal ideals.",solution:`**Definition:**

A ring R is **Artinian** if it satisfies the descending chain condition (DCC) on ideals: every descending chain I₁ ⊇ I₂ ⊇ I₃ ⊇ ... eventually stabilizes.

**Theorem:** A commutative Artinian ring has finitely many maximal ideals.

**Proof:**

Suppose R has infinitely many distinct maximal ideals M₁, M₂, M₃, ...

Consider the descending chain:
M₁ ⊇ M₁ ∩ M₂ ⊇ M₁ ∩ M₂ ∩ M₃ ⊇ ...

**Claim:** This chain is strictly descending.

Suppose M₁ ∩ ... ∩ Mₙ = M₁ ∩ ... ∩ Mₙ ∩ Mₙ₊₁.

Then M₁ ∩ ... ∩ Mₙ ⊆ Mₙ₊₁.

By the prime avoidance lemma (or direct argument), one of M₁, ..., Mₙ is contained in Mₙ₊₁.

But maximal ideals are maximal, so Mᵢ = Mₙ₊₁ for some i.

This contradicts that the Mᵢ are distinct.

So the chain is strictly descending, contradicting DCC.

Therefore R has only finitely many maximal ideals.`}],exercises:[{id:"16.1.1",type:"exercise",title:"Exercise 16.1.1",statement:"Prove that a commutative Artinian ring is Noetherian.",solution:`**Proof:**

Let R be a commutative Artinian ring.

**Step 1:** R has finitely many maximal ideals M₁, ..., Mₙ.

**Step 2:** The Jacobson radical J(R) = M₁ ∩ ... ∩ Mₙ.

**Step 3:** J(R) is nilpotent.

Consider J(R) ⊇ J(R)² ⊇ J(R)³ ⊇ ...

By DCC, J(R)^k = J(R)^{k+1} for some k.

Let I = J(R)^k. Then I = I·J(R).

By Nakayama's Lemma (applicable since J(R) ⊆ all maximal ideals), I = 0.

So J(R)^k = 0.

**Step 4:** R/J(R) is semisimple.

R/J(R) has trivial Jacobson radical and is Artinian.
By Artin-Wedderburn, it's a product of fields (in the commutative case).
Hence Noetherian.

**Step 5:** Use induction on k.

R has a filtration with Noetherian quotients, so R is Noetherian.`}]}],t={partId:16,partTitle:n,textbookChapter:i,sections:e};export{t as p};
