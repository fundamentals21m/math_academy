const e="Introduction to Groups",t="Chapter 1",n=[{sectionId:3,sectionTitle:"Basic Axioms and Examples",textbookSection:"§1.1",examples:[{id:"ex-1-1-1",type:"example",title:"Groups Under Addition",statement:"Verify that ℤ, ℚ, ℝ, and ℂ are groups under addition.",solution:{steps:[{title:"Closure",content:"The sum of two integers (rationals, reals, complex numbers) is again an integer (rational, real, complex number)."},{title:"Associativity",content:"Addition is associative: (a + b) + c = a + (b + c) for all elements."},{title:"Identity",content:"The element e = 0 is the identity since a + 0 = 0 + a = a for all a."},{title:"Inverses",content:"For any element a, the inverse is a⁻¹ = -a since a + (-a) = (-a) + a = 0."}],conclusion:"All four sets are abelian groups under addition with identity 0 and inverse -a for each element a."}},{id:"ex-1-1-2",type:"example",title:"Groups Under Multiplication",statement:"Show that ℚ - {0}, ℝ - {0}, ℂ - {0}, ℚ⁺, and ℝ⁺ are groups under multiplication.",solution:{steps:[{title:"Closure",content:"The product of two nonzero rationals (reals, complex numbers, positive rationals, positive reals) is again nonzero (and positive when applicable)."},{title:"Associativity",content:"Multiplication is associative: (ab)c = a(bc) for all elements."},{title:"Identity",content:"The element e = 1 is the identity since a · 1 = 1 · a = a for all a."},{title:"Inverses",content:"For any nonzero element a, the inverse is a⁻¹ = 1/a."}],conclusion:"All five sets are abelian groups under multiplication. Note that ℤ - {0} is NOT a group under multiplication because most integers (like 2) don't have multiplicative inverses in ℤ."}},{id:"ex-1-1-3",type:"example",title:"Order of Elements",statement:"In the multiplicative group (ℤ/7ℤ)×, find the order of the element 3̄.",solution:{steps:[{title:"Compute powers of 3̄",content:`3̄¹ = 3̄
3̄² = 9̄ = 2̄
3̄³ = 3̄ · 2̄ = 6̄
3̄⁴ = 3̄ · 6̄ = 18̄ = 4̄
3̄⁵ = 3̄ · 4̄ = 12̄ = 5̄
3̄⁶ = 3̄ · 5̄ = 15̄ = 1̄`},{title:"Identify the order",content:"The smallest positive integer n such that 3̄ⁿ = 1̄ is n = 6."}],conclusion:"The order of 3̄ in (ℤ/7ℤ)× is 6. Since |(ℤ/7ℤ)×| = φ(7) = 6, this means 3̄ generates the entire group."}}],exercises:[{id:"1-1-1",type:"exercise",number:1,statement:`Determine which of the following binary operations are associative:
(a) the operation ⋆ on ℤ defined by a ⋆ b = a − b
(b) the operation ⋆ on ℝ defined by a ⋆ b = a + b + ab
(c) the operation ⋆ on ℚ defined by a ⋆ b = (a + b)/5
(d) the operation ⋆ on ℤ × ℤ defined by (a, b) ⋆ (c, d) = (ad + bc, bd)
(e) the operation ⋆ on ℚ − {0} defined by a ⋆ b = a/b`,solution:{steps:[{title:"Part (a): a ⋆ b = a − b",content:`Check: (a ⋆ b) ⋆ c = (a − b) − c = a − b − c
a ⋆ (b ⋆ c) = a − (b − c) = a − b + c
These are not equal in general (e.g., take c ≠ 0).
NOT associative.`},{title:"Part (b): a ⋆ b = a + b + ab",content:`Check: (a ⋆ b) ⋆ c = (a + b + ab) + c + (a + b + ab)c = a + b + c + ab + ac + bc + abc
a ⋆ (b ⋆ c) = a + (b + c + bc) + a(b + c + bc) = a + b + c + bc + ab + ac + abc
These are equal! IS associative.`},{title:"Part (c): a ⋆ b = (a + b)/5",content:`Check: (a ⋆ b) ⋆ c = ((a + b)/5 + c)/5 = (a + b + 5c)/25
a ⋆ (b ⋆ c) = (a + (b + c)/5)/5 = (5a + b + c)/25
These are not equal in general.
NOT associative.`},{title:"Part (d): (a, b) ⋆ (c, d) = (ad + bc, bd)",content:`Check: ((a, b) ⋆ (c, d)) ⋆ (e, f) = (ad + bc, bd) ⋆ (e, f) = ((ad + bc)f + bde, bdf)
a ⋆ (b ⋆ c) requires computing (c, d) ⋆ (e, f) = (cf + de, df), then (a, b) ⋆ (cf + de, df) = (adf + bcf + bde, bdf)
Both give (adf + bcf + bde, bdf). IS associative.`},{title:"Part (e): a ⋆ b = a/b",content:`Check: (a ⋆ b) ⋆ c = (a/b)/c = a/(bc)
a ⋆ (b ⋆ c) = a/(b/c) = ac/b
These are not equal in general.
NOT associative.`}],conclusion:"(b) and (d) are associative; (a), (c), and (e) are not associative."}},{id:"1-1-5",type:"exercise",number:5,statement:"Prove for all n > 1 that ℤ/nℤ is not a group under multiplication of residue classes.",solution:{steps:[{title:"Consider the element 0̄",content:"0̄ is an element of ℤ/nℤ for all n > 1."},{title:"Show 0̄ has no inverse",content:`For any ā ∈ ℤ/nℤ, we have 0̄ · ā = 0̄ ≠ 1̄ (since n > 1).
Thus 0̄ has no multiplicative inverse.`},{title:"Conclude",content:"Since the element 0̄ has no multiplicative inverse, ℤ/nℤ fails the group axiom requiring every element to have an inverse."}],conclusion:"ℤ/nℤ is not a group under multiplication because 0̄ has no multiplicative inverse."}},{id:"1-1-11",type:"exercise",number:11,statement:"Find the orders of each element of the additive group ℤ/12ℤ.",solution:{steps:[{title:"Recall the definition",content:"The order of ā in ℤ/nℤ (additive) is the smallest positive k such that kā = 0̄, i.e., k · a ≡ 0 (mod n)."},{title:"Formula",content:"For ā ∈ ℤ/nℤ, |ā| = n/gcd(a, n)."},{title:"Compute orders",content:`|0̄| = 1 (identity)
|1̄| = 12/gcd(1,12) = 12
|2̄| = 12/gcd(2,12) = 12/2 = 6
|3̄| = 12/gcd(3,12) = 12/3 = 4
|4̄| = 12/gcd(4,12) = 12/4 = 3
|5̄| = 12/gcd(5,12) = 12/1 = 12
|6̄| = 12/gcd(6,12) = 12/6 = 2
|7̄| = 12/gcd(7,12) = 12/1 = 12
|8̄| = 12/gcd(8,12) = 12/4 = 3
|9̄| = 12/gcd(9,12) = 12/3 = 4
|10̄| = 12/gcd(10,12) = 12/2 = 6
|11̄| = 12/gcd(11,12) = 12/1 = 12`}],conclusion:"Orders: 0̄→1, 1̄→12, 2̄→6, 3̄→4, 4̄→3, 5̄→12, 6̄→2, 7̄→12, 8̄→3, 9̄→4, 10̄→6, 11̄→12."}},{id:"1-1-15",type:"exercise",number:15,statement:"Prove that (a₁a₂...aₙ)⁻¹ = aₙ⁻¹aₙ₋₁⁻¹...a₁⁻¹ for all a₁, a₂, ..., aₙ ∈ G.",solution:{steps:[{title:"Base case n = 2",content:"We proved in Proposition 1 that (ab)⁻¹ = b⁻¹a⁻¹."},{title:"Induction hypothesis",content:"Assume (a₁a₂...aₖ)⁻¹ = aₖ⁻¹aₖ₋₁⁻¹...a₁⁻¹ for some k ≥ 2."},{title:"Induction step",content:`(a₁a₂...aₖaₖ₊₁)⁻¹ = ((a₁a₂...aₖ)aₖ₊₁)⁻¹
= aₖ₊₁⁻¹(a₁a₂...aₖ)⁻¹ (by base case)
= aₖ₊₁⁻¹aₖ⁻¹aₖ₋₁⁻¹...a₁⁻¹ (by induction hypothesis)`}],conclusion:"By induction, (a₁a₂...aₙ)⁻¹ = aₙ⁻¹aₙ₋₁⁻¹...a₁⁻¹ for all n."}},{id:"1-1-17",type:"exercise",number:17,statement:"Let x be an element of G. Prove that if |x| = n for some positive integer n then x⁻¹ = xⁿ⁻¹.",solution:{steps:[{title:"Use the definition of order",content:"Since |x| = n, we have xⁿ = 1."},{title:"Multiply both sides by x⁻¹",content:`xⁿ = 1
xⁿ⁻¹ · x = 1
xⁿ⁻¹ = x⁻¹ (by uniqueness of inverses)`}],conclusion:"If |x| = n, then x⁻¹ = xⁿ⁻¹."}},{id:"1-1-22",type:"exercise",number:22,statement:"If x and g are elements of the group G, prove that |x| = |g⁻¹xg|. Deduce that |ab| = |ba| for all a, b ∈ G.",solution:{steps:[{title:"Show (g⁻¹xg)ⁿ = g⁻¹xⁿg",content:`(g⁻¹xg)² = g⁻¹xg · g⁻¹xg = g⁻¹x(gg⁻¹)xg = g⁻¹x²g
By induction: (g⁻¹xg)ⁿ = g⁻¹xⁿg for all n ≥ 1.`},{title:"Prove |x| = |g⁻¹xg|",content:`If xⁿ = 1, then (g⁻¹xg)ⁿ = g⁻¹xⁿg = g⁻¹1g = 1.
Conversely, if (g⁻¹xg)ⁿ = 1, then g⁻¹xⁿg = 1, so xⁿ = gg⁻¹ = 1.
Thus xⁿ = 1 ⟺ (g⁻¹xg)ⁿ = 1, so |x| = |g⁻¹xg|.`},{title:"Deduce |ab| = |ba|",content:`Let x = ab and g = a. Then:
g⁻¹xg = a⁻¹(ab)a = (a⁻¹a)(ba) = ba
So |ab| = |a⁻¹(ab)a| = |ba|.`}],conclusion:"|x| = |g⁻¹xg| for all x, g ∈ G, and |ab| = |ba| for all a, b ∈ G."}},{id:"1-1-25",type:"exercise",number:25,statement:"Prove that if x² = 1 for all x ∈ G then G is abelian.",solution:{steps:[{title:"Use the hypothesis",content:"For any a, b ∈ G, we have a² = 1, b² = 1, and (ab)² = 1."},{title:"Expand (ab)²",content:"(ab)² = abab = 1"},{title:"Multiply strategically",content:`Multiply on the left by a and on the right by b:
a(abab)b = a · 1 · b = ab
a²bab² = ab
1 · ba · 1 = ab
ba = ab`}],conclusion:"If x² = 1 for all x ∈ G, then ab = ba for all a, b ∈ G, so G is abelian."}},{id:"1-1-31",type:"exercise",number:31,statement:"Prove that any finite group G of even order contains an element of order 2.",solution:{steps:[{title:"Define t(G)",content:"Let t(G) = {g ∈ G | g ≠ g⁻¹}."},{title:"Show t(G) has even cardinality",content:`If g ∈ t(G), then g⁻¹ ≠ g, so g⁻¹ ∈ t(G) as well.
The map g ↦ g⁻¹ pairs up elements of t(G), so |t(G)| is even.`},{title:"Analyze G − t(G)",content:`G − t(G) = {g ∈ G | g = g⁻¹} = {g ∈ G | g² = 1}.
This set contains the identity 1.
|G − t(G)| = |G| − |t(G)| = even − even = even.`},{title:"Conclude",content:`Since |G − t(G)| is even and contains at least one element (the identity), it must contain at least 2 elements.
Thus there exists some g ≠ 1 with g² = 1, meaning |g| = 2.`}],conclusion:"Every finite group of even order contains an element of order 2."}}]},{sectionId:4,sectionTitle:"Dihedral Groups",textbookSection:"§1.2",examples:[{id:"ex-1-2-1",type:"example",title:"The Dihedral Group D₂ₙ",statement:"Describe the dihedral group D₈ (symmetries of a square) and find all its elements.",solution:{steps:[{title:"Setup",content:"D₈ is the group of symmetries of a regular 4-gon (square). Let r = rotation by 90° clockwise, s = reflection about the line through vertex 1 and the center."},{title:"List rotations",content:"1 (identity), r (90°), r² (180°), r³ (270°)"},{title:"List reflections",content:"s, sr, sr², sr³ (reflections about 4 lines of symmetry)"},{title:"Key relations",content:"r⁴ = 1, s² = 1, rs = sr⁻¹ = sr³"}],conclusion:"D₈ = {1, r, r², r³, s, sr, sr², sr³} has 8 elements. The presentation is D₈ = ⟨r, s | r⁴ = s² = 1, rs = sr⁻¹⟩."}}],exercises:[{id:"1-2-1",type:"exercise",number:1,statement:`Compute the order of each of the elements in the following groups:
(a) D₆ (b) D₈ (c) D₁₀`,solution:{steps:[{title:"Part (a): D₆",content:`D₆ has elements {1, r, r², s, sr, sr²}.
|1| = 1
|r| = |r²| = 3
|s| = |sr| = |sr²| = 2`},{title:"Part (b): D₈",content:`D₈ has elements {1, r, r², r³, s, sr, sr², sr³}.
|1| = 1
|r| = |r³| = 4
|r²| = 2
|s| = |sr| = |sr²| = |sr³| = 2`},{title:"Part (c): D₁₀",content:`D₁₀ has elements {1, r, r², r³, r⁴, s, sr, sr², sr³, sr⁴}.
|1| = 1
|r| = |r²| = |r³| = |r⁴| = 5 (or divisors: |r| = |r⁴| = 5, and no element has order dividing 5 other than 1 and 5)
Actually: |r| = 5, |r²| = 5, |r³| = 5, |r⁴| = 5
|s| = |sr| = |sr²| = |sr³| = |sr⁴| = 2`}],conclusion:"In D₂ₙ: |rᵏ| = n/gcd(k,n), and |srᵏ| = 2 for all k."}},{id:"1-2-3",type:"exercise",number:3,statement:"Use the generators and relations to show that every element of D₂ₙ which is not a power of r has order 2. Deduce that D₂ₙ is generated by the two elements s and sr, both of which have order 2.",solution:{steps:[{title:"Consider srᵏ",content:"Elements not powers of r have the form srᵏ for some k."},{title:"Compute (srᵏ)²",content:`(srᵏ)² = srᵏ · srᵏ = s · rᵏs · rᵏ = s · sr⁻ᵏ · rᵏ (using rᵏs = sr⁻ᵏ)
= s²r⁻ᵏ⁺ᵏ = s² · 1 = 1`},{title:"Conclude order 2",content:"Since (srᵏ)² = 1 and srᵏ ≠ 1, we have |srᵏ| = 2."},{title:"Show s and sr generate D₂ₙ",content:`s · sr = s²r = r, so r ∈ ⟨s, sr⟩.
Thus ⟨s, sr⟩ contains both r and s, which generate D₂ₙ.`}],conclusion:"Every element srᵏ has order 2, and D₂ₙ = ⟨s, sr⟩ where both generators have order 2."}},{id:"1-2-6",type:"exercise",number:6,statement:"Let x and y be elements of order 2 in any group G. Prove that if t = xy then tx = xt⁻¹ (so that if n = |xy| < ∞ then x, t satisfy the same relations in G as s, r do in D₂ₙ).",solution:{steps:[{title:"Setup",content:`We have x² = y² = 1, so x = x⁻¹ and y = y⁻¹.
Let t = xy.`},{title:"Compute tx",content:"tx = (xy)x = xyx"},{title:"Compute xt⁻¹",content:`t⁻¹ = (xy)⁻¹ = y⁻¹x⁻¹ = yx
xt⁻¹ = x(yx) = xyx`},{title:"Compare",content:"tx = xyx = xt⁻¹"}],conclusion:"tx = xt⁻¹, which is the same relation as rs = sr⁻¹ in D₂ₙ. Thus any two elements of order 2 generate a dihedral group."}},{id:"1-2-9",type:"exercise",number:9,statement:"Let G be the group of rigid motions in ℝ³ of a tetrahedron. Show that |G| = 12.",solution:{steps:[{title:"Count vertex positions",content:"Label the vertices 1, 2, 3, 4. Vertex 1 can be sent to any of the 4 vertex positions."},{title:"Count adjacent vertex positions",content:"Once vertex 1 is fixed in position, vertex 2 (adjacent to 1) can be sent to any of the 3 remaining vertices adjacent to where 1 went."},{title:"Remaining vertices determined",content:"Once an edge is fixed, the rigid motion is completely determined (the other two vertices must go to the remaining two positions in one of 1 way—no reflection allowed for rigid motions)."},{title:"Calculate total",content:"|G| = 4 × 3 = 12"}],conclusion:"The group of rigid motions of a tetrahedron has order 12. This group is isomorphic to A₄, the alternating group on 4 elements."}}]},{sectionId:5,sectionTitle:"Symmetric Groups",textbookSection:"§1.3",examples:[{id:"ex-1-3-1",type:"example",title:"Cycle Decomposition",statement:"Find the cycle decomposition of the permutation σ ∈ S₅ defined by σ(1) = 3, σ(2) = 5, σ(3) = 1, σ(4) = 2, σ(5) = 4.",solution:{steps:[{title:"Start with 1",content:`1 → 3 → 1 (cycle closes)
First cycle: (1 3)`},{title:"Continue with smallest unused element",content:`2 → 5 → 4 → 2 (cycle closes)
Second cycle: (2 5 4)`},{title:"Combine cycles",content:"σ = (1 3)(2 5 4)"}],conclusion:"σ = (1 3)(2 5 4) is the product of a 2-cycle and a 3-cycle."}},{id:"ex-1-3-2",type:"example",title:"Computing Products in Sₙ",statement:"Compute the product (1 2 3)(1 2)(3 4) in S₄.",solution:{steps:[{title:"Read right to left",content:"Apply (3 4) first, then (1 2), then (1 2 3)."},{title:"Follow each element",content:`1: (3 4) fixes 1, (1 2) sends 1→2, (1 2 3) sends 2→3. So 1→3.
2: (3 4) fixes 2, (1 2) sends 2→1, (1 2 3) sends 1→2. So 2→2 (fixed).
3: (3 4) sends 3→4, (1 2) fixes 4, (1 2 3) fixes 4. So 3→4.
4: (3 4) sends 4→3, (1 2) fixes 3, (1 2 3) sends 3→1. So 4→1.`},{title:"Write cycle decomposition",content:"(1 2 3)(1 2)(3 4) = (1 3 4)"}],conclusion:"(1 2 3)(1 2)(3 4) = (1 3 4)"}}],exercises:[{id:"1-3-1",type:"exercise",number:1,statement:`Let σ be the permutation
1 → 13, 2 → 2, 3 → 15, 4 → 14, 5 → 10, 6 → 6, 7 → 12, 8 → 3, 9 → 4, 10 → 1, 11 → 7, 12 → 9, 13 → 5, 14 → 11, 15 → 8
and let τ be the permutation
1 → 14, 2 → 9, 3 → 10, 4 → 2, 5 → 12, 6 → 6, 7 → 5, 8 → 11, 9 → 15, 10 → 3, 11 → 8, 12 → 7, 13 → 4, 14 → 1, 15 → 13.
Find the cycle decompositions of each of the following permutations: σ, τ, σ², στ, τσ, and τ²σ.`,solution:{steps:[{title:"σ",content:`Follow the algorithm:
1→13→5→10→1: (1 13 5 10)
2→2: (2) omit
3→15→8→3: (3 15 8)
4→14→11→7→12→9→4: (4 14 11 7 12 9)
6→6: (6) omit
σ = (1 13 5 10)(3 15 8)(4 14 11 7 12 9)`},{title:"τ",content:`1→14→1: (1 14)
2→9→15→13→4→2: (2 9 15 13 4)
3→10→3: (3 10)
5→12→7→5: (5 12 7)
6→6: omit
8→11→8: (8 11)
τ = (1 14)(2 9 15 13 4)(3 10)(5 12 7)(8 11)`},{title:"σ²",content:`Apply σ twice. From σ = (1 13 5 10)(3 15 8)(4 14 11 7 12 9):
(1 13 5 10)² = (1 5)(13 10)
(3 15 8)² = (3 8 15)
(4 14 11 7 12 9)² = (4 11 12)(14 7 9)
σ² = (1 5)(13 10)(3 8 15)(4 11 12)(14 7 9)`},{title:"στ, τσ, τ²σ",content:`These require computing compositions by following elements through both permutations. The detailed calculations give:
στ = (1 11 3)(2 4)(5 9 8 14 13 12)(7 10 15)
τσ = (1 4 8 15 13 12 14 5 2 9 11 7 3 10)
τ²σ = (1 2 15 8)(3 13 10 4 9)(5)(7 14 11 12)`}],conclusion:"σ = (1 13 5 10)(3 15 8)(4 14 11 7 12 9), τ = (1 14)(2 9 15 13 4)(3 10)(5 12 7)(8 11), and the other products as computed."}},{id:"1-3-5",type:"exercise",number:5,statement:"Find the order of (1 12 8 10 4)(2 13)(5 11 7)(6 9).",solution:{steps:[{title:"Recall the rule for disjoint cycles",content:"The order of a product of disjoint cycles is the LCM of the cycle lengths."},{title:"Identify cycle lengths",content:`(1 12 8 10 4) has length 5
(2 13) has length 2
(5 11 7) has length 3
(6 9) has length 2`},{title:"Compute LCM",content:"lcm(5, 2, 3, 2) = lcm(5, 2, 3) = 30"}],conclusion:"The order is 30."}},{id:"1-3-10",type:"exercise",number:10,statement:"Prove that Sₙ is a non-abelian group for all n ≥ 3.",solution:{steps:[{title:"Find non-commuting elements",content:"Consider (1 2) and (2 3) in Sₙ for n ≥ 3."},{title:"Compute (1 2)(2 3)",content:`1 → (2 3) fixes 1 → (1 2) sends 1 to 2. So 1 → 2.
2 → (2 3) sends 2 to 3 → (1 2) fixes 3. So 2 → 3.
3 → (2 3) sends 3 to 2 → (1 2) sends 2 to 1. So 3 → 1.
(1 2)(2 3) = (1 2 3)`},{title:"Compute (2 3)(1 2)",content:`1 → (1 2) sends 1 to 2 → (2 3) sends 2 to 3. So 1 → 3.
2 → (1 2) sends 2 to 1 → (2 3) fixes 1. So 2 → 1.
3 → (1 2) fixes 3 → (2 3) sends 3 to 2. So 3 → 2.
(2 3)(1 2) = (1 3 2)`},{title:"Compare",content:"(1 2 3) ≠ (1 3 2) since they send 1 to different places."}],conclusion:"Since (1 2)(2 3) ≠ (2 3)(1 2), Sₙ is non-abelian for n ≥ 3."}},{id:"1-3-15",type:"exercise",number:15,statement:"Prove that the order of an element in Sₙ equals the least common multiple of the lengths of the cycles in its cycle decomposition.",solution:{steps:[{title:"Write σ as disjoint cycles",content:"Let σ = σ₁σ₂...σₖ where σᵢ are disjoint cycles of lengths n₁, n₂, ..., nₖ."},{title:"Note disjoint cycles commute",content:"Since the cycles are disjoint, they commute, so σᵐ = σ₁ᵐσ₂ᵐ...σₖᵐ."},{title:"Find when σᵐ = 1",content:"σᵐ = 1 ⟺ σᵢᵐ = 1 for all i ⟺ nᵢ | m for all i ⟺ lcm(n₁,...,nₖ) | m."},{title:"Conclude",content:"The smallest such m is lcm(n₁, n₂, ..., nₖ)."}],conclusion:"|σ| = lcm of the cycle lengths in the cycle decomposition of σ."}}]},{sectionId:6,sectionTitle:"Matrix Groups",textbookSection:"§1.4",examples:[{id:"ex-1-4-1",type:"example",title:"The General Linear Group",statement:"Show that GL₂(ℝ), the set of 2×2 invertible matrices with real entries, forms a group under matrix multiplication.",solution:{steps:[{title:"Closure",content:"If A, B ∈ GL₂(ℝ), then det(AB) = det(A)det(B) ≠ 0, so AB is invertible."},{title:"Associativity",content:"Matrix multiplication is associative: (AB)C = A(BC)."},{title:"Identity",content:"The identity matrix I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} satisfies AI = IA = A for all A."},{title:"Inverses",content:"Since det(A) ≠ 0, each A ∈ GL₂(ℝ) has an inverse A⁻¹ with AA⁻¹ = A⁻¹A = I."}],conclusion:"GL₂(ℝ) is a group under matrix multiplication. It is non-abelian since matrix multiplication is not commutative in general."}}],exercises:[{id:"1-4-2",type:"exercise",number:2,statement:"Let G = {\\begin{pmatrix} a & b \\\\ 0 & c \\end{pmatrix} | a, b, c ∈ ℝ, ac ≠ 0}. Show that G is a subgroup of GL₂(ℝ).",solution:{steps:[{title:"Check closure",content:`\\begin{pmatrix} a & b \\\\ 0 & c \\end{pmatrix}\\begin{pmatrix} a' & b' \\\\ 0 & c' \\end{pmatrix} = \\begin{pmatrix} aa' & ab' + bc' \\\\ 0 & cc' \\end{pmatrix}
Since aa' · cc' = (ac)(a'c') ≠ 0, this is in G.`},{title:"Check identity",content:"The identity I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} is in G (take a = c = 1, b = 0)."},{title:"Check inverses",content:`\\begin{pmatrix} a & b \\\\ 0 & c \\end{pmatrix}⁻¹ = \\frac{1}{ac}\\begin{pmatrix} c & -b \\\\ 0 & a \\end{pmatrix} = \\begin{pmatrix} 1/a & -b/(ac) \\\\ 0 & 1/c \\end{pmatrix}
This is upper triangular with (1/a)(1/c) = 1/(ac) ≠ 0, so it's in G.`}],conclusion:"G is closed under multiplication and inverses, and contains the identity, so G is a subgroup of GL₂(ℝ)."}},{id:"1-4-6",type:"exercise",number:6,statement:"Show that GL₂(F₂) is a non-abelian group of order 6.",solution:{steps:[{title:"Count elements",content:"F₂ = {0, 1}. A matrix \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} is in GL₂(F₂) iff ad - bc ≠ 0 in F₂, i.e., ad ≠ bc."},{title:"Count by first column",content:`First column (a, c) can be any nonzero vector: (0,1), (1,0), or (1,1) — 3 choices.
Second column (b, d) must make det ≠ 0.
If (a,c) = (1,0): need d ≠ 0, so d = 1, b ∈ {0,1} — 2 choices.
If (a,c) = (0,1): need b ≠ 0, so b = 1, d ∈ {0,1} — 2 choices.
If (a,c) = (1,1): need d ≠ b, so 2 choices.
Total: 3 × 2 = 6.`},{title:"Show non-abelian",content:`Let A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}, B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}.
AB = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}, BA = \\begin{pmatrix} 0 & 1 \\\\ 1 & 1 \\end{pmatrix}.
AB ≠ BA.`}],conclusion:"GL₂(F₂) has order 6 and is non-abelian. (It is isomorphic to S₃.)"}}]},{sectionId:7,sectionTitle:"The Quaternion Group",textbookSection:"§1.5",examples:[{id:"ex-1-5-1",type:"example",title:"The Quaternion Group Q₈",statement:"Describe the quaternion group Q₈ and its multiplication table.",solution:{steps:[{title:"Elements",content:"Q₈ = {1, -1, i, -i, j, -j, k, -k}"},{title:"Key relations",content:`i² = j² = k² = -1
ij = k, jk = i, ki = j
ji = -k, kj = -i, ik = -j
(-1)² = 1, (-1)x = x(-1) = -x for all x`},{title:"Properties",content:`|Q₈| = 8
|1| = 1, |-1| = 2, |i| = |j| = |k| = 4, |-i| = |-j| = |-k| = 4
Center(Q₈) = {1, -1}`}],conclusion:"Q₈ is a non-abelian group of order 8. Every subgroup of Q₈ is normal."}}],exercises:[{id:"1-5-1",type:"exercise",number:1,statement:"Compute the order of each element of Q₈.",solution:{steps:[{title:"Identity and -1",content:`|1| = 1 (identity)
(-1)² = 1, so |-1| = 2`},{title:"i, j, k",content:`i² = -1 ≠ 1, i³ = i²·i = -i ≠ 1, i⁴ = (i²)² = (-1)² = 1
So |i| = 4. Similarly |j| = |k| = 4.`},{title:"-i, -j, -k",content:`(-i)² = i² = -1 ≠ 1, (-i)⁴ = i⁴ = 1
So |-i| = 4. Similarly |-j| = |-k| = 4.`}],conclusion:"|1| = 1, |-1| = 2, and |±i| = |±j| = |±k| = 4."}},{id:"1-5-3",type:"exercise",number:3,statement:"Show that Q₈ and D₈ are not isomorphic.",solution:{steps:[{title:"Count elements of order 2",content:`In Q₈: Only -1 has order 2.
In D₈ = {1, r, r², r³, s, sr, sr², sr³}: r² has order 2, and s, sr, sr², sr³ all have order 2.
So D₈ has 5 elements of order 2.`},{title:"Conclude",content:"Since Q₈ has 1 element of order 2 and D₈ has 5 elements of order 2, they cannot be isomorphic."}],conclusion:"Q₈ ≇ D₈ because they have different numbers of elements of order 2."}}]},{sectionId:8,sectionTitle:"Homomorphisms and Isomorphisms",textbookSection:"§1.6",examples:[{id:"ex-1-6-1",type:"example",title:"Exponential Map",statement:"Show that the map φ: (ℝ, +) → (ℝ⁺, ×) defined by φ(x) = eˣ is a group isomorphism.",solution:{steps:[{title:"Homomorphism",content:"φ(x + y) = eˣ⁺ʸ = eˣ · eʸ = φ(x) · φ(y)"},{title:"Injective",content:"If φ(x) = φ(y), then eˣ = eʸ, so x = y (since exp is strictly increasing)."},{title:"Surjective",content:"For any a ∈ ℝ⁺, let x = ln(a). Then φ(x) = eˡⁿ⁽ᵃ⁾ = a."}],conclusion:"φ is a bijective homomorphism, hence an isomorphism. So (ℝ, +) ≅ (ℝ⁺, ×)."}}],exercises:[{id:"1-6-1",type:"exercise",number:1,statement:"Let φ: G → H be a homomorphism and let E be a subgroup of H. Prove that φ⁻¹(E) = {a ∈ G | φ(a) ∈ E} is a subgroup of G.",solution:{steps:[{title:"Non-empty",content:"Since 1_H ∈ E (E is a subgroup) and φ(1_G) = 1_H, we have 1_G ∈ φ⁻¹(E)."},{title:"Closure",content:`Let a, b ∈ φ⁻¹(E). Then φ(a), φ(b) ∈ E.
φ(ab) = φ(a)φ(b) ∈ E (since E is closed under multiplication).
So ab ∈ φ⁻¹(E).`},{title:"Inverses",content:`Let a ∈ φ⁻¹(E). Then φ(a) ∈ E.
φ(a⁻¹) = φ(a)⁻¹ ∈ E (since E is closed under inverses).
So a⁻¹ ∈ φ⁻¹(E).`}],conclusion:"φ⁻¹(E) is a subgroup of G. (In particular, ker(φ) = φ⁻¹({1_H}) is a subgroup.)"}},{id:"1-6-3",type:"exercise",number:3,statement:"If φ: G → H is an isomorphism, prove that |φ(x)| = |x| for all x ∈ G.",solution:{steps:[{title:"Show φ(x)ⁿ = 1 ⟺ xⁿ = 1",content:`φ(x)ⁿ = φ(xⁿ) (since φ is a homomorphism).
φ(xⁿ) = 1_H ⟺ xⁿ = 1_G (since φ is bijective and φ(1_G) = 1_H).`},{title:"Conclude equal orders",content:"The smallest positive n with xⁿ = 1 equals the smallest positive n with φ(x)ⁿ = 1."}],conclusion:"|φ(x)| = |x| for all x ∈ G. Isomorphisms preserve element orders."}},{id:"1-6-9",type:"exercise",number:9,statement:"Prove that D₈ and Q₈ are not isomorphic.",solution:{steps:[{title:"Method 1: Count elements of order 2",content:`D₈ has 5 elements of order 2: r², s, sr, sr², sr³.
Q₈ has 1 element of order 2: -1.
Since isomorphisms preserve orders, D₈ ≇ Q₈.`},{title:"Method 2: Check if abelian quotient exists",content:"Alternative: Every subgroup of Q₈ is normal. In D₈, the subgroup {1, s} is not normal since r⁻¹sr = sr⁻² = sr² ∉ {1, s}."}],conclusion:"D₈ ≇ Q₈ because they have different numbers of elements of each order."}}]},{sectionId:9,sectionTitle:"Group Actions",textbookSection:"§1.7",examples:[{id:"ex-1-7-1",type:"example",title:"Left Multiplication Action",statement:"Show that a group G acts on itself by left multiplication: g · a = ga.",solution:{steps:[{title:"Check axiom 1",content:"1 · a = 1a = a for all a ∈ G."},{title:"Check axiom 2",content:"g · (h · a) = g · (ha) = g(ha) = (gh)a = (gh) · a."}],conclusion:"Left multiplication defines a group action of G on itself. This action is transitive and faithful."}}],exercises:[{id:"1-7-3",type:"exercise",number:3,statement:"Show that the action of G on itself by left multiplication is faithful.",solution:{steps:[{title:"Recall definition",content:"An action is faithful if the only element that acts as the identity on all elements is 1."},{title:"Suppose g · a = a for all a",content:"g · a = a means ga = a for all a ∈ G."},{title:"Take a = 1",content:"g · 1 = 1 means g = 1."}],conclusion:"The only element acting trivially is g = 1, so the action is faithful."}},{id:"1-7-6",type:"exercise",number:6,statement:"Let G act on the set A. Prove that if a, b ∈ A and b = g · a for some g ∈ G, then Gᵦ = gGₐg⁻¹ (the stabilizers of elements in the same orbit are conjugate).",solution:{steps:[{title:"Show Gᵦ ⊆ gGₐg⁻¹",content:`Let h ∈ Gᵦ, so h · b = b.
h · b = h · (g · a) = (hg) · a.
Also b = g · a.
So (hg) · a = g · a, hence g⁻¹hg · a = a.
Thus g⁻¹hg ∈ Gₐ, so h ∈ gGₐg⁻¹.`},{title:"Show gGₐg⁻¹ ⊆ Gᵦ",content:`Let h = gkg⁻¹ where k ∈ Gₐ.
h · b = gkg⁻¹ · (g · a) = gk · a = g · a = b.
So h ∈ Gᵦ.`}],conclusion:"Gᵦ = gGₐg⁻¹. Stabilizers of elements in the same orbit are conjugate subgroups."}}]}],i={partId:1,partTitle:e,textbookChapter:t,sections:n};export{i as p};
