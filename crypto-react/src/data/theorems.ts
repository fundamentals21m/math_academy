export interface TheoremEntry {
  /** Unique identifier for theorem */
  id: string;
  /** Display title (e.g., "Pythagorean Theorem") */
  title: string;
  /** Mathematical statement of theorem - can contain LaTeX */
  statement: string;
  /** Section ID where this theorem is introduced */
  sectionId: number;
  /** Section title for display */
  sectionTitle?: string;
  /** Category for grouping (e.g., "Fundamentals", "Advanced") */
  category?: string;
  /** Whether a proof is provided */
  hasProof?: boolean;
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
  /** Optional: LaTeX-formatted proof content */
  proof?: string;
}

export const theorems: TheoremEntry[] = [
  // ==========================================================================
  // PRIME NUMBERS (Section 4)
  // ==========================================================================
  {
    id: 'thm-fundamental-arithmetic',
    title: 'Fundamental Theorem of Arithmetic',
    statement: 'Every integer greater than 1 can be expressed as a unique product of prime numbers (up to reordering).',
    sectionId: 4,
    sectionTitle: 'Prime Numbers',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
**Existence:** We prove by strong induction. For $n = 2$, we're done (2 is prime). For $n > 2$, either $n$ is prime (done) or $n = ab$ for $1 < a, b < n$. By induction, both $a$ and $b$ have prime factorizations, so their product $n$ does too.

**Uniqueness:** Suppose $n = p_1 p_2 \\cdots p_k = q_1 q_2 \\cdots q_m$. Since $p_1$ divides the left side, it divides the right side. By Euclid's Lemma (if a prime divides a product, it divides at least one factor), $p_1$ divides some $q_j$. Since both are prime, $p_1 = q_j$. Cancel and repeat to show the factorizations are identical up to reordering.
    `,
  },
  {
    id: 'thm-infinitude-primes',
    title: 'Infinitude of Primes',
    statement: 'There are infinitely many prime numbers.',
    sectionId: 4,
    sectionTitle: 'Prime Numbers',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
**Proof (Euclid, c. 300 BCE):**

Suppose, for contradiction, that there are only finitely many primes: $p_1, p_2, \\ldots, p_n$.

Consider $N = p_1 \\cdot p_2 \\cdots p_n + 1$.

$N$ is either prime or composite:
- If $N$ is prime, then $N$ is a prime not in our list (since $N > p_i$ for all $i$).
- If $N$ is composite, it must have a prime factor $p$. But $N \\equiv 1 \\pmod{p_i}$ for all $i$, so $p \\neq p_i$ for any $i$.

Either way, we have found a prime not in our list. Contradiction.

Therefore, there are infinitely many primes.
    `,
  },

  // ==========================================================================
  // GCD (Section 5)
  // ==========================================================================
  {
    id: 'thm-bezout',
    title: "Bézout's Identity",
    statement: 'For any integers $a$ and $b$ (not both zero), there exist integers $x$ and $y$ such that $ax + by = \\gcd(a, b)$.',
    sectionId: 5,
    sectionTitle: 'Greatest Common Divisor',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
**Proof (by the Extended Euclidean Algorithm):**

We prove by strong induction on $\\min(|a|, |b|)$.

**Base case:** If $b = 0$, then $\\gcd(a, 0) = |a| = a \\cdot 1 + 0 \\cdot 0$, so $x = 1, y = 0$ works.

**Inductive step:** Assume the result holds for all pairs with smaller minimum. By the Euclidean algorithm, $\\gcd(a, b) = \\gcd(b, a \\bmod b)$. 

By induction, there exist $x', y'$ with $bx' + (a \\bmod b)y' = \\gcd(b, a \\bmod b)$.

Since $a \\bmod b = a - \\lfloor a/b \\rfloor \\cdot b$, we get:
$$bx' + (a - \\lfloor a/b \\rfloor \\cdot b)y' = a \\cdot y' + b \\cdot (x' - \\lfloor a/b \\rfloor \\cdot y') = \\gcd(a, b)$$

So $x = y'$ and $y = x' - \\lfloor a/b \\rfloor \\cdot y'$ satisfy $ax + by = \\gcd(a, b)$.
    `,
  },

  // ==========================================================================
  // MODULAR INVERSE (Section 6)
  // ==========================================================================
  {
    id: 'thm-modular-inverse-existence',
    title: 'Existence of Modular Inverse',
    statement: 'The modular inverse of $a$ modulo $n$ exists if and only if $\\gcd(a, n) = 1$.',
    sectionId: 6,
    sectionTitle: 'Modular Inverse',
    category: 'Modular Arithmetic',
    type: 'theorem',
    hasProof: true,
    proof: `
**(⇒ Direction)** Suppose $a^{-1}$ exists, so $ax \\equiv 1 \\pmod{n}$ for some $x$. 

Then $ax = 1 + kn$ for some integer $k$, meaning $ax - kn = 1$. 

Any common divisor of $a$ and $n$ must divide 1, so $\\gcd(a, n) = 1$.

**(⇐ Direction)** Suppose $\\gcd(a, n) = 1$. 

By Bézout's Identity, there exist integers $x, y$ such that $ax + ny = 1$. 

Taking this mod $n$: $ax \\equiv 1 \\pmod{n}$, so $x$ is the modular inverse of $a$.

This is why the Extended Euclidean Algorithm computes the inverse: it finds the Bézout coefficients!
    `,
  },

  // ==========================================================================
  // EULER'S TOTIENT (Section 7)
  // ==========================================================================
  {
    id: 'thm-euler',
    title: "Euler's Theorem",
    statement: 'If $\\gcd(a, n) = 1$, then $a^{\\varphi(n)} \\equiv 1 \\pmod{n}$.',
    sectionId: 7,
    sectionTitle: "Euler's Totient Function",
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `
**Proof Sketch:**

1. Let $\\{r_1, r_2, \\ldots, r_{\\varphi(n)}\\}$ be the reduced residue system mod $n$ (all integers coprime to $n$ in $[1, n-1]$).

2. Since $\\gcd(a, n) = 1$, the set $\\{a \\cdot r_1, a \\cdot r_2, \\ldots, a \\cdot r_{\\varphi(n)}\\}$ is also a reduced residue system mod $n$ (just permuted).

3. Therefore:
$$(a \\cdot r_1)(a \\cdot r_2) \\cdots (a \\cdot r_{\\varphi(n)}) \\equiv r_1 \\cdot r_2 \\cdots r_{\\varphi(n)} \\pmod{n}$$

4. This gives us:
$$a^{\\varphi(n)} \\cdot (r_1 r_2 \\cdots r_{\\varphi(n)}) \\equiv r_1 r_2 \\cdots r_{\\varphi(n)} \\pmod{n}$$

5. Since each $r_i$ is coprime to $n$, their product is also coprime to $n$. We can cancel it to get:
$$a^{\\varphi(n)} \\equiv 1 \\pmod{n}$$
    `,
  },
  {
    id: 'thm-fermat-little',
    title: "Fermat's Little Theorem",
    statement: 'If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.',
    sectionId: 7,
    sectionTitle: "Euler's Totient Function",
    category: 'Number Theory',
    type: 'corollary',
    hasProof: true,
    proof: `
This is a special case of Euler's Theorem.

For a prime $p$, we have $\\varphi(p) = p - 1$ (every integer from 1 to $p-1$ is coprime to $p$).

By Euler's Theorem, if $\\gcd(a, p) = 1$:
$$a^{\\varphi(p)} = a^{p-1} \\equiv 1 \\pmod{p}$$
    `,
  },

  // ==========================================================================
  // RSA (Section 10)
  // ==========================================================================
  {
    id: 'thm-rsa-correctness',
    title: 'RSA Correctness',
    statement: 'For properly chosen $e$ and $d$, decryption correctly recovers the original message: $m^{ed} \\equiv m \\pmod{n}$.',
    sectionId: 10,
    sectionTitle: 'RSA Encryption',
    category: 'Cryptographic Protocols',
    type: 'theorem',
    hasProof: true,
    proof: `
**Setup:** Let $n = pq$ for distinct primes $p, q$. Let $e$ be coprime to $\\varphi(n) = (p-1)(q-1)$, and let $d = e^{-1} \\pmod{\\varphi(n)}$.

This means $ed = 1 + k \\cdot \\varphi(n)$ for some integer $k$.

**Proof:**

We need to show $m^{ed} \\equiv m \\pmod{n}$ for any message $m$ with $0 \\leq m < n$.

$$m^{ed} = m^{1 + k \\cdot \\varphi(n)} = m \\cdot (m^{\\varphi(n)})^k$$

**Case 1:** If $\\gcd(m, n) = 1$, by Euler's Theorem:
$$m^{\\varphi(n)} \\equiv 1 \\pmod{n}$$
So $m^{ed} = m \\cdot 1^k = m \\pmod{n}$.

**Case 2:** If $\\gcd(m, n) \\neq 1$, then $m$ is divisible by $p$ or $q$ (or both).

If $p | m$ but $q \\nmid m$: By Fermat's Little Theorem, $m^{q-1} \\equiv 1 \\pmod{q}$.
So $m^{ed} \\equiv m \\pmod{q}$ and $m^{ed} \\equiv 0 \\equiv m \\pmod{p}$.
By CRT, $m^{ed} \\equiv m \\pmod{n}$.

Similar argument for other cases.
    `,
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter(Boolean))] as string[];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
