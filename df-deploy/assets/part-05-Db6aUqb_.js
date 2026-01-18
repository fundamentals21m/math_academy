const n="Direct and Semidirect Products and Abelian Groups",e="Chapter 5",i=[{sectionId:"5.1",sectionTitle:"Direct Products",textbookSection:"§5.1",examples:[{id:"ex-5.1.1",type:"example",title:"Example 5.1.1",statement:"Prove that ℤ_6 ≅ ℤ_2 × ℤ_3.",solution:`**Proof using the Chinese Remainder Theorem:**

Since gcd(2, 3) = 1, by CRT:
ℤ_6 ≅ ℤ_2 × ℤ_3.

**Direct verification:**

Define φ: ℤ_6 → ℤ_2 × ℤ_3 by φ(n) = (n mod 2, n mod 3).

**φ is a homomorphism:**
φ(n + m) = ((n+m) mod 2, (n+m) mod 3) = (n mod 2 + m mod 2, n mod 3 + m mod 3) = φ(n) + φ(m).

**φ is injective:**
ker(φ) = {n ∈ ℤ_6 : 2|n and 3|n} = {n : 6|n} = {0}.

**φ is surjective:**
|ℤ_6| = 6 = |ℤ_2 × ℤ_3|, and φ is injective, so φ is surjective.

**Explicit isomorphism:**
- φ(0) = (0, 0)
- φ(1) = (1, 1)
- φ(2) = (0, 2)
- φ(3) = (1, 0)
- φ(4) = (0, 1)
- φ(5) = (1, 2)`},{id:"ex-5.1.2",type:"example",title:"Example 5.1.2",statement:"Prove that if gcd(m, n) = 1, then ℤ_{mn} ≅ ℤ_m × ℤ_n.",solution:`**Proof:**

Define φ: ℤ → ℤ_m × ℤ_n by φ(a) = (a mod m, a mod n).

**Step 1: φ is a homomorphism.**
φ(a + b) = ((a+b) mod m, (a+b) mod n) = (a mod m + b mod m, a mod n + b mod n) = φ(a) + φ(b).

**Step 2: Find ker(φ).**
ker(φ) = {a ∈ ℤ : m|a and n|a}.

Since gcd(m, n) = 1, we have m|a and n|a implies mn|a.
So ker(φ) = mnℤ.

**Step 3: φ is surjective.**
By the Chinese Remainder Theorem, for any (r, s) ∈ ℤ_m × ℤ_n, there exists a ∈ ℤ with:
a ≡ r (mod m) and a ≡ s (mod n).

So φ(a) = (r, s).

**Step 4: Apply First Isomorphism Theorem.**
ℤ/ker(φ) ≅ ℤ_m × ℤ_n
ℤ/mnℤ ≅ ℤ_m × ℤ_n
ℤ_{mn} ≅ ℤ_m × ℤ_n.

**Note:** This fails when gcd(m, n) > 1. For example:
ℤ_4 ≇ ℤ_2 × ℤ_2 (the left is cyclic, the right is not).`}],exercises:[{id:"5.1.1",type:"exercise",title:"Exercise 5.1.1",statement:"Let G = G_1 × G_2 × ... × G_n be a direct product. Prove that Z(G) = Z(G_1) × Z(G_2) × ... × Z(G_n).",solution:`**Proof:**

Let z = (z_1, z_2, ..., z_n) ∈ G.

**z ∈ Z(G) ⟺ z commutes with all g ∈ G.**

For any g = (g_1, ..., g_n) ∈ G:
zg = (z_1g_1, z_2g_2, ..., z_ng_n)
gz = (g_1z_1, g_2z_2, ..., g_nz_n)

zg = gz ⟺ z_ig_i = g_iz_i for all i and all g_i ∈ G_i.

This happens ⟺ z_i ∈ Z(G_i) for all i.

**Therefore:**
z ∈ Z(G) ⟺ z_i ∈ Z(G_i) for all i ⟺ z ∈ Z(G_1) × ... × Z(G_n).

So Z(G) = Z(G_1) × Z(G_2) × ... × Z(G_n).`},{id:"5.1.2",type:"exercise",title:"Exercise 5.1.2",statement:"Prove that G × H ≅ H × G for any groups G and H.",solution:`**Proof:**

Define φ: G × H → H × G by φ(g, h) = (h, g).

**φ is a homomorphism:**
φ((g_1, h_1)(g_2, h_2)) = φ(g_1g_2, h_1h_2) = (h_1h_2, g_1g_2)
= (h_1, g_1)(h_2, g_2) = φ(g_1, h_1)φ(g_2, h_2). ✓

**φ is injective:**
If φ(g, h) = (e_H, e_G), then h = e_H and g = e_G.
So ker(φ) = {(e_G, e_H)}. ✓

**φ is surjective:**
For any (h, g) ∈ H × G, we have φ(g, h) = (h, g). ✓

**Therefore φ is an isomorphism:**
G × H ≅ H × G.`},{id:"5.1.3",type:"exercise",title:"Exercise 5.1.3",statement:"Let G and H be groups with |G| = m and |H| = n where gcd(m, n) = 1. Prove that Aut(G × H) ≅ Aut(G) × Aut(H).",solution:`**Proof:**

The key observation is that G × {e_H} and {e_G} × H are characteristic subgroups of G × H.

**Step 1: G × {e_H} is characteristic.**

G × {e_H} = {(g, e_H) : g ∈ G} consists of elements whose order divides |G| = m.

{e_G} × H consists of elements whose order divides |H| = n.

Since gcd(m, n) = 1, an element (g, h) has order lcm(|g|, |h|).

Elements of order dividing m must have h = e_H (since |h| must divide both m and n, so |h| = 1).

Thus G × {e_H} = {x ∈ G × H : x^m = e}, which is preserved by automorphisms.

Similarly for {e_G} × H.

**Step 2: Define the map.**

For φ ∈ Aut(G × H), define:
- φ_G: G → G by φ((g, e_H)) = (φ_G(g), e_H)
- φ_H: H → H by φ((e_G, h)) = (e_G, φ_H(h))

Then φ_G ∈ Aut(G) and φ_H ∈ Aut(H).

**Step 3: Show φ is determined by (φ_G, φ_H).**

φ(g, h) = φ((g, e_H)(e_G, h)) = φ(g, e_H) · φ(e_G, h) = (φ_G(g), φ_H(h)).

**Step 4: Conclude.**

The map Aut(G × H) → Aut(G) × Aut(H) given by φ ↦ (φ_G, φ_H) is an isomorphism.`}]},{sectionId:"5.2",sectionTitle:"Semidirect Products",textbookSection:"§5.2",examples:[{id:"ex-5.2.1",type:"example",title:"Example 5.2.1",statement:"Define the semidirect product N ⋊_φ H and describe its group operation.",solution:`**Definition:**

Let N and H be groups and let φ: H → Aut(N) be a homomorphism.

The semidirect product N ⋊_φ H is the set N × H with multiplication:
(n_1, h_1) · (n_2, h_2) = (n_1 · φ(h_1)(n_2), h_1h_2)

**Verification this is a group:**

**Identity:** (e_N, e_H) is the identity:
(e_N, e_H) · (n, h) = (e_N · φ(e_H)(n), e_H · h) = (n, h).
(n, h) · (e_N, e_H) = (n · φ(h)(e_N), h) = (n, h).

**Inverses:** (n, h)^{-1} = (φ(h^{-1})(n^{-1}), h^{-1}).

Verify: (n, h) · (φ(h^{-1})(n^{-1}), h^{-1}) = (n · φ(h)(φ(h^{-1})(n^{-1})), e_H)
= (n · n^{-1}, e_H) = (e_N, e_H). ✓

**Associativity:** (Tedious but straightforward check.)

**Key features:**
- N ≅ N × {e_H} ◁ N ⋊_φ H (N is normal).
- H ≅ {e_N} × H ≤ N ⋊_φ H (H is a subgroup).
- (N ⋊_φ H)/N ≅ H.
- If φ is trivial (φ(h) = id for all h), then N ⋊_φ H = N × H (direct product).`},{id:"ex-5.2.2",type:"example",title:"Example 5.2.2",statement:"Show that the dihedral group D_{2n} is isomorphic to ℤ_n ⋊ ℤ_2.",solution:`**Construction:**

D_{2n} = ⟨r, s | r^n = s^2 = e, srs^{-1} = r^{-1}⟩.

Let N = ⟨r⟩ ≅ ℤ_n and H = ⟨s⟩ ≅ ℤ_2.

**Step 1: N ◁ D_{2n}.**

|N| = n and [D_{2n} : N] = 2, so N ◁ D_{2n}.

**Step 2: Define the action.**

φ: H → Aut(N) where φ(s): r ↦ r^{-1} (inversion).

This is the unique non-trivial automorphism of ℤ_n when n > 2.

**Step 3: Verify the semidirect product structure.**

N ∩ H = {e} and NH = D_{2n}.

The multiplication rule in D_{2n}:
(r^a)(s^b) · (r^c)(s^d) = r^a s^b r^c s^d

When b = 1: s^1 r^c = r^{-c} s^1 (from the relation srs^{-1} = r^{-1}).

So: r^a s r^c s = r^a r^{-c} s^2 = r^{a-c}.

This matches: (r^a, s)(r^c, e) = (r^a · φ(s)(r^c), s) = (r^a · r^{-c}, s) = (r^{a-c}, s).

**Conclusion:**
D_{2n} ≅ ℤ_n ⋊_φ ℤ_2 where φ(1) is the inversion automorphism.`}],exercises:[{id:"5.2.1",type:"exercise",title:"Exercise 5.2.1",statement:"How many non-isomorphic groups of order 21 are there? Describe them.",solution:`**Solution:**

|G| = 21 = 3 · 7.

**Step 1: Sylow analysis.**

n_7 ≡ 1 (mod 7) and n_7 | 3 ⟹ n_7 = 1.
n_3 ≡ 1 (mod 3) and n_3 | 7 ⟹ n_3 ∈ {1, 7}.

Let P = unique Sylow 7-subgroup ≅ ℤ_7 (normal).
Let Q = a Sylow 3-subgroup ≅ ℤ_3.

G = PQ with P ◁ G, P ∩ Q = {e}.

So G ≅ ℤ_7 ⋊_φ ℤ_3 for some φ: ℤ_3 → Aut(ℤ_7).

**Step 2: Determine possible φ.**

Aut(ℤ_7) ≅ ℤ_6 (cyclic of order 6).

Homomorphisms φ: ℤ_3 → ℤ_6 are determined by where 1 ∈ ℤ_3 maps.

φ(1) must have order dividing 3 in ℤ_6.
Elements of order dividing 3 in ℤ_6: {0, 2, 4}.

So there are 3 homomorphisms.

**Step 3: Classify up to isomorphism.**

**Case φ trivial:** G ≅ ℤ_7 × ℤ_3 ≅ ℤ_21 (cyclic).

**Case φ non-trivial:** Both non-trivial φ give isomorphic groups.

The non-trivial action: generator of ℤ_3 acts on ℤ_7 by multiplication by a primitive cube root of unity mod 7 (which is 2 or 4 mod 7, since 2³ ≡ 1 mod 7).

**Conclusion:**
There are exactly **2 groups of order 21**:
1. ℤ_21 (cyclic, abelian)
2. ℤ_7 ⋊ ℤ_3 (non-abelian)`},{id:"5.2.2",type:"exercise",title:"Exercise 5.2.2",statement:"Prove that if H acts trivially on N, then N ⋊ H = N × H.",solution:`**Proof:**

Let φ: H → Aut(N) be the trivial homomorphism, i.e., φ(h) = id_N for all h ∈ H.

The semidirect product multiplication:
(n_1, h_1) · (n_2, h_2) = (n_1 · φ(h_1)(n_2), h_1h_2)
= (n_1 · id_N(n_2), h_1h_2)
= (n_1 · n_2, h_1h_2)
= (n_1, h_1) ·_{direct} (n_2, h_2)

This is exactly the multiplication in the direct product N × H.

Therefore N ⋊_φ H = N × H when φ is trivial.`}]},{sectionId:"5.3",sectionTitle:"Fundamental Theorem of Finitely Generated Abelian Groups",textbookSection:"§5.3",examples:[{id:"ex-5.3.1",type:"example",title:"Fundamental Theorem",statement:"State the Fundamental Theorem of Finitely Generated Abelian Groups.",solution:`**Fundamental Theorem of Finitely Generated Abelian Groups:**

Every finitely generated abelian group G is isomorphic to:

G ≅ ℤ^r × ℤ_{n_1} × ℤ_{n_2} × ... × ℤ_{n_k}

where:
- r ≥ 0 is the **rank** (or **free rank**) of G
- n_1 | n_2 | ... | n_k (each divides the next) are the **invariant factors**
- n_i > 1 for all i

**Alternative form (elementary divisors):**

G ≅ ℤ^r × ℤ_{p_1^{a_1}} × ℤ_{p_2^{a_2}} × ... × ℤ_{p_m^{a_m}}

where the p_i^{a_i} are prime powers (not necessarily distinct primes).

**Uniqueness:** Both decompositions are unique.

**Example:**
ℤ_12 ≅ ℤ_4 × ℤ_3 (elementary divisors: 4 = 2², 3)
ℤ_12 has invariant factor form: ℤ_12 (since 12 is the only invariant factor).

ℤ_2 × ℤ_6 ≅ ℤ_2 × ℤ_2 × ℤ_3.
Invariant factors: 2, 6 (since gcd structure gives 2 | 6).`},{id:"ex-5.3.2",type:"example",title:"Example 5.3.2",statement:"List all abelian groups of order 72 up to isomorphism.",solution:`**Solution:**

72 = 8 · 9 = 2³ · 3².

**Step 1: Partition into prime power parts.**

By the fundamental theorem, an abelian group of order 72 is:
G ≅ (2-group of order 8) × (3-group of order 9)

**Step 2: List abelian groups of order 8 = 2³.**

Partitions of 3: (3), (2,1), (1,1,1)

- ℤ_8 (cyclic)
- ℤ_4 × ℤ_2
- ℤ_2 × ℤ_2 × ℤ_2

**Step 3: List abelian groups of order 9 = 3².**

Partitions of 2: (2), (1,1)

- ℤ_9 (cyclic)
- ℤ_3 × ℤ_3

**Step 4: Take all combinations.**

1. ℤ_8 × ℤ_9 ≅ ℤ_72
2. ℤ_8 × ℤ_3 × ℤ_3
3. ℤ_4 × ℤ_2 × ℤ_9
4. ℤ_4 × ℤ_2 × ℤ_3 × ℤ_3
5. ℤ_2 × ℤ_2 × ℤ_2 × ℤ_9
6. ℤ_2 × ℤ_2 × ℤ_2 × ℤ_3 × ℤ_3

**Total: 6 abelian groups of order 72.**`}],exercises:[{id:"5.3.1",type:"exercise",title:"Exercise 5.3.1",statement:"How many abelian groups of order 360 are there?",solution:`**Solution:**

360 = 8 · 45 = 8 · 9 · 5 = 2³ · 3² · 5.

**Count partitions:**

- Partitions of 3 (for 2³): 3 partitions
  - (3): ℤ_8
  - (2,1): ℤ_4 × ℤ_2
  - (1,1,1): ℤ_2 × ℤ_2 × ℤ_2

- Partitions of 2 (for 3²): 2 partitions
  - (2): ℤ_9
  - (1,1): ℤ_3 × ℤ_3

- Partitions of 1 (for 5¹): 1 partition
  - (1): ℤ_5

**Total number of abelian groups:**
3 × 2 × 1 = **6 abelian groups of order 360**.`},{id:"5.3.2",type:"exercise",title:"Exercise 5.3.2",statement:"Let G be a finite abelian group. Prove that G is cyclic if and only if for every prime p, the Sylow p-subgroup of G is cyclic.",solution:`**Proof:**

**(⟹) G cyclic implies Sylow p-subgroups are cyclic:**

If G is cyclic, then G ≅ ℤ_n for some n.

The Sylow p-subgroup of ℤ_n is ℤ_{p^k} where p^k is the exact power of p dividing n.

ℤ_{p^k} is cyclic.

**(⟸) Sylow p-subgroups cyclic implies G cyclic:**

Let |G| = p_1^{a_1} · p_2^{a_2} · ... · p_r^{a_r}.

By the fundamental theorem:
G ≅ P_1 × P_2 × ... × P_r

where P_i is the Sylow p_i-subgroup.

By assumption, each P_i ≅ ℤ_{p_i^{a_i}} is cyclic.

Since gcd(|P_i|, |P_j|) = 1 for i ≠ j:

G ≅ ℤ_{p_1^{a_1}} × ℤ_{p_2^{a_2}} × ... × ℤ_{p_r^{a_r}}
≅ ℤ_{p_1^{a_1} · p_2^{a_2} · ... · p_r^{a_r}}
= ℤ_{|G|}

So G is cyclic.`},{id:"5.3.3",type:"exercise",title:"Exercise 5.3.3",statement:"Find the invariant factors and elementary divisors of ℤ_4 × ℤ_6 × ℤ_15.",solution:`**Solution:**

**Step 1: Find elementary divisors.**

4 = 2²
6 = 2 · 3
15 = 3 · 5

Elementary divisors (prime power factors):
- From ℤ_4: 2² = 4
- From ℤ_6: 2, 3
- From ℤ_15: 3, 5

So: **Elementary divisors: 2, 3, 3, 4, 5**

(Regrouping: 2¹, 2², 3¹, 3¹, 5¹)

**Step 2: Convert to invariant factors.**

Arrange prime powers in a grid:

p=2: 2, 4
p=3: 3, 3
p=5: 5

To form invariant factors, take products column by column (aligning to the right):

| p | col 1 | col 2 |
|---|-------|-------|
| 2 | 2     | 4     |
| 3 | 3     | 3     |
| 5 |       | 5     |

Invariant factor 1: 2 · 3 = 6
Invariant factor 2: 4 · 3 · 5 = 60

Check: 6 | 60 ✓

**Invariant factors: 6, 60**

**Verification:**
ℤ_4 × ℤ_6 × ℤ_15 ≅ ℤ_6 × ℤ_60

Order: 4 · 6 · 15 = 360 = 6 · 60 ✓`}]}],t={partId:5,partTitle:n,textbookChapter:e,sections:i};export{t as p};
