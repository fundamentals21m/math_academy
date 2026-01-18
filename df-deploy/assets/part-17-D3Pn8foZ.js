const e="Introduction to Homological Algebra",n="Chapter 17",t=[{sectionId:"17.1",sectionTitle:"Exact Sequences and the Snake Lemma",textbookSection:"§17.1",examples:[{id:"ex-17.1.1",type:"example",title:"Exact Sequences",statement:"Define exact sequences and prove the Short Five Lemma.",solution:`**Definition:**

A sequence of R-modules and homomorphisms:
... → Aₙ₊₁ →^{fₙ₊₁} Aₙ →^{fₙ} Aₙ₋₁ → ...

is **exact at Aₙ** if im(fₙ₊₁) = ker(fₙ).

It's **exact** if it's exact at every term.

**Short exact sequence:** 0 → A →^f B →^g C → 0
means f is injective, g is surjective, and im(f) = ker(g).

**Short Five Lemma:**

Given a commutative diagram with exact rows:

0 → A → B → C → 0
    ↓α   ↓β   ↓γ
0 → A' → B' → C' → 0

If α and γ are isomorphisms, then β is an isomorphism.

**Proof:**

*β injective:* Let b ∈ ker(β). Then γ(g(b)) = g'(β(b)) = 0.
Since γ is injective, g(b) = 0, so b ∈ ker(g) = im(f).
b = f(a) for some a. Then 0 = β(b) = β(f(a)) = f'(α(a)).
Since f' is injective, α(a) = 0. Since α is injective, a = 0.
So b = 0.

*β surjective:* Diagram chase using surjectivity of α and γ.`}],exercises:[{id:"17.1.1",type:"exercise",title:"Exercise 17.1.1",statement:"Prove that if 0 → A → B → C → 0 is exact and C is free, then B ≅ A ⊕ C.",solution:`**Proof:**

Let 0 → A →^i B →^π C → 0 be exact with C free.

Since C is free, let {cⱼ}_{j∈J} be a basis.

For each cⱼ, pick bⱼ ∈ B with π(bⱼ) = cⱼ.

**Define s: C → B by s(cⱼ) = bⱼ, extended linearly.**

Then π ∘ s = id_C (s is a **section** of π).

**Claim:** B = i(A) ⊕ s(C).

*Spanning:* For b ∈ B, let c = π(b). Then:
b - s(c) ∈ ker(π) = im(i) = i(A).
So b = (b - s(c)) + s(c) ∈ i(A) + s(C).

*Direct sum:* If b ∈ i(A) ∩ s(C), then:
π(b) = 0 (since b ∈ i(A) = ker(π))
b = s(c) for some c ∈ C.
π(b) = π(s(c)) = c = 0.
So b = s(0) = 0.

Thus B ≅ A ⊕ C.

This says: **Short exact sequences with free quotient split.**`}]}],i={partId:17,partTitle:e,textbookChapter:n,sections:t};export{i as p};
