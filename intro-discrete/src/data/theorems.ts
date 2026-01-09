/** Base fields shared by all theorem entries */
interface TheoremEntryBase {
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
  /** Optional: Type of entry */
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
}

/** Theorem entry without a proof */
interface TheoremEntryWithoutProof extends TheoremEntryBase {
  hasProof?: false;
  proof?: never;
}

/** Theorem entry with a proof - proof content is REQUIRED when hasProof is true */
interface TheoremEntryWithProof extends TheoremEntryBase {
  hasProof: true;
  /** LaTeX-formatted proof content - REQUIRED when hasProof is true */
  proof: string;
}

/**
 * Discriminated union type for theorem entries.
 * Enforces that when hasProof: true, proof content must be provided.
 */
export type TheoremEntry = TheoremEntryWithoutProof | TheoremEntryWithProof;

export const theorems: TheoremEntry[] = [
  // ==========================================================================
  // CHAPTER 1: NUMBER THEORY (Sections 0-5)
  // ==========================================================================

  // Section 0: Division Algorithm and GCD
  {
    id: 'def-well-ordering',
    title: 'Well-Ordering Principle',
    statement: 'Any non-empty set $X$ of positive integers has a smallest element.',
    sectionId: 0,
    sectionTitle: 'The Division Algorithm and GCD',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-division',
    title: 'Division Theorem',
    statement: 'Let $a$ and $b$ be natural numbers with $a > 0$. Then there exist unique natural numbers $q$ (quotient) and $r$ (remainder) with $0 \\leq r < a$ such that $b = aq + r$.',
    sectionId: 0,
    sectionTitle: 'The Division Algorithm and GCD',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Consider the set $D = \\{b - ak : b - ak \\geq 0, k \\in \\mathbb{N}\\}$. By well-ordering, $D$ has a least element $r = b - aq$. If $r \\geq a$, then $r - a \\in D$ contradicts minimality. Hence $0 \\leq r < a$.`,
  },
  {
    id: 'def-divisibility',
    title: 'Divisibility',
    statement: 'Given integers $a$ and $b$, we say $a$ divides $b$ (written $a \\mid b$) if there is an integer $k$ such that $ak = b$.',
    sectionId: 0,
    sectionTitle: 'The Division Algorithm and GCD',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'def-gcd',
    title: 'Greatest Common Divisor',
    statement: 'The greatest common divisor $\\gcd(a,b)$ is the largest positive integer that divides both $a$ and $b$, and every common divisor divides it.',
    sectionId: 0,
    sectionTitle: 'The Division Algorithm and GCD',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-gcd-linear-combo',
    title: 'GCD as Linear Combination',
    statement: 'For positive integers $a, b$, there exist integers $s, t$ such that $\\gcd(a, b) = as + bt$.',
    sectionId: 0,
    sectionTitle: 'The Division Algorithm and GCD',
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'thm-euclidean-algorithm',
    title: 'Euclidean Algorithm',
    statement: 'The GCD can be computed by repeated division. If $b = aq_1 + r_1$, then $\\gcd(b, a) = \\gcd(a, r_1)$. Continue until remainder is 0.',
    sectionId: 0,
    sectionTitle: 'The Division Algorithm and GCD',
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'def-relatively-prime',
    title: 'Relatively Prime',
    statement: 'Two positive integers $a$ and $b$ are relatively prime (coprime) if $\\gcd(a, b) = 1$.',
    sectionId: 0,
    sectionTitle: 'The Division Algorithm and GCD',
    category: 'Number Theory',
    type: 'definition',
  },

  // Section 1: Mathematical Induction
  {
    id: 'def-induction',
    title: 'Induction Principle',
    statement: 'If $P(1)$ holds and $P(k) \\Rightarrow P(k+1)$ for all $k$, then $P(n)$ holds for all positive integers $n$.',
    sectionId: 1,
    sectionTitle: 'Mathematical Induction',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-sum-of-integers',
    title: 'Sum of First n Positive Integers',
    statement: '$1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$',
    sectionId: 1,
    sectionTitle: 'Mathematical Induction',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Base case: $n=1$ gives $1 = 1(2)/2$. Induction step: Assume true for $k$. Then $1 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1) = \\frac{(k+1)(k+2)}{2}$.`,
  },
  {
    id: 'def-binomial-coefficient',
    title: 'Binomial Coefficient',
    statement: 'For $0 \\leq k \\leq n$, $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ where $n! = n(n-1)\\cdots 1$ and $0! = 1$.',
    sectionId: 1,
    sectionTitle: 'Mathematical Induction',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-binomial',
    title: 'Binomial Theorem',
    statement: '$(x + y)^n = \\sum_{i=0}^{n} \\binom{n}{i} x^{n-i} y^i$',
    sectionId: 1,
    sectionTitle: 'Mathematical Induction',
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'def-strong-induction',
    title: 'Strong Induction',
    statement: 'If $P(0)$ holds and [$P(m)$ for all $m \\leq k$] implies $P(k+1)$, then $P(n)$ holds for all natural numbers.',
    sectionId: 1,
    sectionTitle: 'Mathematical Induction',
    category: 'Number Theory',
    type: 'definition',
  },

  // Section 2: Primes and Unique Factorisation
  {
    id: 'def-prime',
    title: 'Prime Number',
    statement: 'A positive integer $p$ is prime if it has exactly two positive divisors: 1 and $p$.',
    sectionId: 2,
    sectionTitle: 'Primes and Unique Factorisation',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-prime-divisibility',
    title: 'Prime Divisibility Property',
    statement: 'If $p$ is prime and $p \\mid ab$, then $p \\mid a$ or $p \\mid b$.',
    sectionId: 2,
    sectionTitle: 'Primes and Unique Factorisation',
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'thm-fundamental-arithmetic',
    title: 'Fundamental Theorem of Arithmetic',
    statement: 'Every integer $n \\geq 2$ can be written uniquely as a product of primes (up to order).',
    sectionId: 2,
    sectionTitle: 'Primes and Unique Factorisation',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Existence by strong induction. Uniqueness: if $p_1 \\cdots p_r = q_1 \\cdots q_s$, then $p_1 \\mid q_j$ for some $j$ by prime divisibility, so $p_1 = q_j$. Cancel and apply induction.`,
  },
  {
    id: 'thm-infinitude-primes',
    title: 'Infinitude of Primes',
    statement: 'There are infinitely many prime numbers.',
    sectionId: 2,
    sectionTitle: 'Primes and Unique Factorisation',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Given primes $p_1, \\ldots, p_n$, consider $N = p_1 \\cdots p_n + 1$. No $p_i$ divides $N$, so $N$ has a prime factor not in the list.`,
  },
  {
    id: 'thm-gcd-lcm-primes',
    title: 'GCD and LCM from Prime Factorisations',
    statement: 'If $a = \\prod p_i^{\\alpha_i}$ and $b = \\prod p_i^{\\beta_i}$, then $\\gcd(a,b) = \\prod p_i^{\\min(\\alpha_i, \\beta_i)}$ and $\\text{lcm}(a,b) = \\prod p_i^{\\max(\\alpha_i, \\beta_i)}$.',
    sectionId: 2,
    sectionTitle: 'Primes and Unique Factorisation',
    category: 'Number Theory',
    type: 'theorem',
  },

  // Section 3: Congruence Classes
  {
    id: 'def-congruence',
    title: 'Congruence Modulo n',
    statement: '$a \\equiv b \\pmod{n}$ if and only if $n \\mid (a - b)$, equivalently if $a$ and $b$ have the same remainder when divided by $n$.',
    sectionId: 3,
    sectionTitle: 'Congruence Classes',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'def-congruence-class',
    title: 'Congruence Class',
    statement: '$[a]_n = \\{b : b \\equiv a \\pmod{n}\\}$. The set $\\mathbb{Z}_n$ consists of all congruence classes mod $n$.',
    sectionId: 3,
    sectionTitle: 'Congruence Classes',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-congruence-arithmetic',
    title: 'Arithmetic with Congruences',
    statement: 'If $a \\equiv b \\pmod{n}$, then $a + c \\equiv b + c$ and $ac \\equiv bc \\pmod{n}$.',
    sectionId: 3,
    sectionTitle: 'Congruence Classes',
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'def-invertible-zero-divisor',
    title: 'Invertible Elements and Zero-Divisors',
    statement: '$[a]_n$ is invertible if $[a][b] = [1]$ for some $b$. A non-zero $[a]_n$ is a zero-divisor if $[a][b] = [0]$ for some $[b] \\neq [0]$.',
    sectionId: 3,
    sectionTitle: 'Congruence Classes',
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-invertibility-criterion',
    title: 'Criterion for Invertibility',
    statement: '$[a]_n$ has an inverse if and only if $\\gcd(a, n) = 1$.',
    sectionId: 3,
    sectionTitle: 'Congruence Classes',
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'thm-primes-give-fields',
    title: 'Primes Give Fields',
    statement: 'If $p$ is prime, every non-zero element of $\\mathbb{Z}_p$ is invertible.',
    sectionId: 3,
    sectionTitle: 'Congruence Classes',
    category: 'Number Theory',
    type: 'theorem',
  },

  // Section 4: Solving Linear Congruences
  {
    id: 'thm-linear-congruence',
    title: 'Linear Congruence Theorem',
    statement: '$ax \\equiv b \\pmod{n}$ has solutions iff $\\gcd(a,n) \\mid b$. If solvable, there are exactly $\\gcd(a,n)$ solutions mod $n$.',
    sectionId: 4,
    sectionTitle: 'Solving Linear Congruences',
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'thm-chinese-remainder',
    title: 'Chinese Remainder Theorem',
    statement: 'If $\\gcd(m, n) = 1$, the system $x \\equiv a \\pmod{m}$, $x \\equiv b \\pmod{n}$ has a unique solution modulo $mn$.',
    sectionId: 4,
    sectionTitle: 'Solving Linear Congruences',
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Since $\\gcd(m,n) = 1$, write $mk + nt = 1$. Then $c = bmk + ant$ satisfies both congruences. Uniqueness: if $c, d$ both work, then $mn \\mid (c - d)$.`,
  },

  // Section 5: Euler's Theorem and RSA
  {
    id: 'def-multiplicative-order',
    title: 'Multiplicative Order',
    statement: 'The order of $a$ modulo $n$ is the smallest positive $k$ with $a^k \\equiv 1 \\pmod{n}$.',
    sectionId: 5,
    sectionTitle: "Euler's Theorem and RSA",
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-fermat-little',
    title: "Fermat's Little Theorem",
    statement: 'If $p$ is prime and $p \\nmid a$, then $a^{p-1} \\equiv 1 \\pmod{p}$.',
    sectionId: 5,
    sectionTitle: "Euler's Theorem and RSA",
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Let $G_p = \\{[1], \\ldots, [p-1]\\}$. Multiplying all elements by $[a]$ permutes $G_p$. Product of $aG_p$ equals $[a]^{p-1}$ times product of $G_p$. Cancel to get $[a]^{p-1} = [1]$.`,
  },
  {
    id: 'def-euler-phi',
    title: "Euler's Phi Function",
    statement: '$\\phi(n)$ is the number of integers from 1 to $n$ that are relatively prime to $n$.',
    sectionId: 5,
    sectionTitle: "Euler's Theorem and RSA",
    category: 'Number Theory',
    type: 'definition',
  },
  {
    id: 'thm-phi-prime-power',
    title: 'Phi of Prime Powers',
    statement: '$\\phi(p^n) = p^n - p^{n-1} = p^{n-1}(p-1)$',
    sectionId: 5,
    sectionTitle: "Euler's Theorem and RSA",
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'thm-phi-multiplicative',
    title: 'Phi is Multiplicative',
    statement: 'If $\\gcd(a, b) = 1$, then $\\phi(ab) = \\phi(a)\\phi(b)$.',
    sectionId: 5,
    sectionTitle: "Euler's Theorem and RSA",
    category: 'Number Theory',
    type: 'theorem',
  },
  {
    id: 'thm-euler',
    title: "Euler's Theorem",
    statement: 'If $\\gcd(a, n) = 1$, then $a^{\\phi(n)} \\equiv 1 \\pmod{n}$.',
    sectionId: 5,
    sectionTitle: "Euler's Theorem and RSA",
    category: 'Number Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Generalizes Fermat's proof. Multiplication by $[a]$ permutes $G_n$. Product of $[a]G_n$ is $[a]^{\\phi(n)}$ times product of $G_n$. Cancel to get $[a]^{\\phi(n)} = [1]$.`,
  },

  // ==========================================================================
  // CHAPTER 2: SETS, FUNCTIONS AND RELATIONS (Sections 6-9)
  // ==========================================================================

  // Section 6: Elementary Set Theory
  {
    id: 'def-set',
    title: 'Set',
    statement: 'A set is a well-defined collection of distinct objects called elements. $x \\in A$ means $x$ is an element of $A$.',
    sectionId: 6,
    sectionTitle: 'Elementary Set Theory',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-subset',
    title: 'Subset',
    statement: '$A \\subseteq B$ means every element of $A$ is also an element of $B$.',
    sectionId: 6,
    sectionTitle: 'Elementary Set Theory',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'thm-de-morgan',
    title: "De Morgan's Laws",
    statement: '$(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$',
    sectionId: 6,
    sectionTitle: 'Elementary Set Theory',
    category: 'Sets and Relations',
    type: 'theorem',
  },
  {
    id: 'def-power-set',
    title: 'Power Set',
    statement: 'The power set $\\mathcal{P}(A)$ is the set of all subsets of $A$. If $|A| = n$, then $|\\mathcal{P}(A)| = 2^n$.',
    sectionId: 6,
    sectionTitle: 'Elementary Set Theory',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-cartesian-product',
    title: 'Cartesian Product',
    statement: '$A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$. If $|A| = m$ and $|B| = n$, then $|A \\times B| = mn$.',
    sectionId: 6,
    sectionTitle: 'Elementary Set Theory',
    category: 'Sets and Relations',
    type: 'definition',
  },

  // Section 7: Functions
  {
    id: 'def-function',
    title: 'Function',
    statement: 'A function $f: A \\to B$ assigns to each element of $A$ exactly one element of $B$.',
    sectionId: 7,
    sectionTitle: 'Functions',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-injection',
    title: 'Injection (One-to-One)',
    statement: '$f$ is injective if $f(a_1) = f(a_2)$ implies $a_1 = a_2$.',
    sectionId: 7,
    sectionTitle: 'Functions',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-surjection',
    title: 'Surjection (Onto)',
    statement: '$f: A \\to B$ is surjective if for every $b \\in B$, there exists $a \\in A$ with $f(a) = b$.',
    sectionId: 7,
    sectionTitle: 'Functions',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-bijection',
    title: 'Bijection',
    statement: 'A function is bijective if it is both injective and surjective. Bijections have inverses.',
    sectionId: 7,
    sectionTitle: 'Functions',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'thm-composition-properties',
    title: 'Composition of Functions',
    statement: 'The composition of two injections is injective. The composition of two surjections is surjective. The composition of two bijections is bijective.',
    sectionId: 7,
    sectionTitle: 'Functions',
    category: 'Sets and Relations',
    type: 'theorem',
  },

  // Section 8: Relations
  {
    id: 'def-relation',
    title: 'Relation',
    statement: 'A relation on set $A$ is a subset $R \\subseteq A \\times A$. We write $a \\sim b$ if $(a, b) \\in R$.',
    sectionId: 8,
    sectionTitle: 'Relations',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-equivalence-relation',
    title: 'Equivalence Relation',
    statement: 'A relation is an equivalence relation if it is reflexive ($a \\sim a$), symmetric ($a \\sim b \\Rightarrow b \\sim a$), and transitive ($a \\sim b, b \\sim c \\Rightarrow a \\sim c$).',
    sectionId: 8,
    sectionTitle: 'Relations',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-equivalence-class',
    title: 'Equivalence Class',
    statement: 'The equivalence class of $a$ is $[a] = \\{b \\in A : a \\sim b\\}$.',
    sectionId: 8,
    sectionTitle: 'Relations',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'thm-partition-equivalence',
    title: 'Partition-Equivalence Correspondence',
    statement: 'Equivalence relations on $A$ correspond bijectively to partitions of $A$. The equivalence classes form the partition.',
    sectionId: 8,
    sectionTitle: 'Relations',
    category: 'Sets and Relations',
    type: 'theorem',
  },
  {
    id: 'def-partial-order',
    title: 'Partial Order',
    statement: 'A partial order is reflexive, antisymmetric ($a \\leq b$ and $b \\leq a$ implies $a = b$), and transitive.',
    sectionId: 8,
    sectionTitle: 'Relations',
    category: 'Sets and Relations',
    type: 'definition',
  },

  // Section 9: Finite State Machines
  {
    id: 'def-dfa',
    title: 'Deterministic Finite Automaton',
    statement: 'A DFA is $(Q, \\Sigma, \\delta, q_0, F)$: states, alphabet, transition function, start state, accepting states.',
    sectionId: 9,
    sectionTitle: 'Finite State Machines',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'def-nfa',
    title: 'Nondeterministic Finite Automaton',
    statement: 'An NFA allows multiple transitions from a state on the same input, including $\\varepsilon$-transitions.',
    sectionId: 9,
    sectionTitle: 'Finite State Machines',
    category: 'Sets and Relations',
    type: 'definition',
  },
  {
    id: 'thm-nfa-dfa-equivalence',
    title: 'NFA-DFA Equivalence',
    statement: 'Every NFA can be converted to an equivalent DFA (subset construction). They recognize the same languages.',
    sectionId: 9,
    sectionTitle: 'Finite State Machines',
    category: 'Sets and Relations',
    type: 'theorem',
  },

  // ==========================================================================
  // CHAPTER 3: LOGIC AND MATHEMATICAL ARGUMENT (Sections 10-12)
  // ==========================================================================

  // Section 10: Propositional Logic
  {
    id: 'def-proposition',
    title: 'Proposition',
    statement: 'A proposition is a declarative statement that is either true or false, but not both.',
    sectionId: 10,
    sectionTitle: 'Propositional Logic',
    category: 'Logic',
    type: 'definition',
  },
  {
    id: 'def-logical-connectives',
    title: 'Logical Connectives',
    statement: 'Negation ($\\neg$), conjunction ($\\land$), disjunction ($\\lor$), implication ($\\Rightarrow$), biconditional ($\\Leftrightarrow$).',
    sectionId: 10,
    sectionTitle: 'Propositional Logic',
    category: 'Logic',
    type: 'definition',
  },
  {
    id: 'def-tautology',
    title: 'Tautology',
    statement: 'A tautology is a compound proposition that is true for all truth value assignments.',
    sectionId: 10,
    sectionTitle: 'Propositional Logic',
    category: 'Logic',
    type: 'definition',
  },
  {
    id: 'thm-logical-equivalences',
    title: 'Logical Equivalences',
    statement: '$P \\Rightarrow Q \\equiv \\neg P \\lor Q$ and $P \\Leftrightarrow Q \\equiv (P \\Rightarrow Q) \\land (Q \\Rightarrow P)$',
    sectionId: 10,
    sectionTitle: 'Propositional Logic',
    category: 'Logic',
    type: 'theorem',
  },
  {
    id: 'thm-contrapositive',
    title: 'Contrapositive',
    statement: '$P \\Rightarrow Q$ is logically equivalent to $\\neg Q \\Rightarrow \\neg P$.',
    sectionId: 10,
    sectionTitle: 'Propositional Logic',
    category: 'Logic',
    type: 'theorem',
  },

  // Section 11: Quantifiers
  {
    id: 'def-universal-quantifier',
    title: 'Universal Quantifier',
    statement: '$\\forall x \\, P(x)$ means "for all $x$, $P(x)$ is true".',
    sectionId: 11,
    sectionTitle: 'Quantifiers',
    category: 'Logic',
    type: 'definition',
  },
  {
    id: 'def-existential-quantifier',
    title: 'Existential Quantifier',
    statement: '$\\exists x \\, P(x)$ means "there exists an $x$ such that $P(x)$ is true".',
    sectionId: 11,
    sectionTitle: 'Quantifiers',
    category: 'Logic',
    type: 'definition',
  },
  {
    id: 'thm-quantifier-negation',
    title: 'Negation of Quantified Statements',
    statement: '$\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$ and $\\neg(\\exists x \\, P(x)) \\equiv \\forall x \\, \\neg P(x)$',
    sectionId: 11,
    sectionTitle: 'Quantifiers',
    category: 'Logic',
    type: 'theorem',
  },

  // Section 12: Proof Strategies
  {
    id: 'def-direct-proof',
    title: 'Direct Proof',
    statement: 'To prove $P \\Rightarrow Q$, assume $P$ and derive $Q$ through logical steps.',
    sectionId: 12,
    sectionTitle: 'Proof Strategies',
    category: 'Logic',
    type: 'definition',
  },
  {
    id: 'def-proof-by-contrapositive',
    title: 'Proof by Contrapositive',
    statement: 'To prove $P \\Rightarrow Q$, prove the equivalent $\\neg Q \\Rightarrow \\neg P$.',
    sectionId: 12,
    sectionTitle: 'Proof Strategies',
    category: 'Logic',
    type: 'definition',
  },
  {
    id: 'def-proof-by-contradiction',
    title: 'Proof by Contradiction',
    statement: 'To prove $P$, assume $\\neg P$ and derive a contradiction.',
    sectionId: 12,
    sectionTitle: 'Proof Strategies',
    category: 'Logic',
    type: 'definition',
  },

  // ==========================================================================
  // CHAPTER 4: EXAMPLES OF GROUPS (Sections 13-16)
  // ==========================================================================

  // Section 13: Permutations
  {
    id: 'def-permutation',
    title: 'Permutation',
    statement: 'A permutation of a set $X$ is a bijection from $X$ to itself. The set of all permutations of $\\{1, \\ldots, n\\}$ is denoted $S_n$.',
    sectionId: 13,
    sectionTitle: 'Permutations',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'def-cycle-notation',
    title: 'Cycle Notation',
    statement: 'A cycle $(a_1 \\, a_2 \\, \\cdots \\, a_k)$ maps $a_i \\mapsto a_{i+1}$ (indices mod $k$). Disjoint cycles commute.',
    sectionId: 13,
    sectionTitle: 'Permutations',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'thm-cycle-decomposition',
    title: 'Cycle Decomposition',
    statement: 'Every permutation can be written uniquely (up to order) as a product of disjoint cycles.',
    sectionId: 13,
    sectionTitle: 'Permutations',
    category: 'Groups',
    type: 'theorem',
  },
  {
    id: 'thm-symmetric-group-order',
    title: 'Order of Symmetric Group',
    statement: '$|S_n| = n!$',
    sectionId: 13,
    sectionTitle: 'Permutations',
    category: 'Groups',
    type: 'theorem',
  },

  // Section 14: Order and Sign of a Permutation
  {
    id: 'def-transposition',
    title: 'Transposition',
    statement: 'A transposition is a 2-cycle $(a \\, b)$ that swaps two elements.',
    sectionId: 14,
    sectionTitle: 'Order and Sign of a Permutation',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'thm-transposition-generation',
    title: 'Generation by Transpositions',
    statement: 'Every permutation can be written as a product of transpositions.',
    sectionId: 14,
    sectionTitle: 'Order and Sign of a Permutation',
    category: 'Groups',
    type: 'theorem',
  },
  {
    id: 'def-sign-permutation',
    title: 'Sign of a Permutation',
    statement: '$\\text{sgn}(\\sigma) = (-1)^k$ where $k$ is the number of transpositions. Even permutations have $\\text{sgn} = 1$.',
    sectionId: 14,
    sectionTitle: 'Order and Sign of a Permutation',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'def-alternating-group',
    title: 'Alternating Group',
    statement: '$A_n$ is the set of even permutations in $S_n$. $|A_n| = n!/2$ for $n \\geq 2$.',
    sectionId: 14,
    sectionTitle: 'Order and Sign of a Permutation',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'thm-order-permutation',
    title: 'Order of a Permutation',
    statement: 'The order of a permutation is the lcm of its cycle lengths.',
    sectionId: 14,
    sectionTitle: 'Order and Sign of a Permutation',
    category: 'Groups',
    type: 'theorem',
  },

  // Section 15: Definition and Examples of Groups
  {
    id: 'def-group',
    title: 'Group',
    statement: 'A group $(G, *)$ satisfies: closure, associativity, identity element $e$, and inverses.',
    sectionId: 15,
    sectionTitle: 'Definition and Examples of Groups',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'def-abelian-group',
    title: 'Abelian Group',
    statement: 'A group is abelian (commutative) if $a * b = b * a$ for all $a, b$.',
    sectionId: 15,
    sectionTitle: 'Definition and Examples of Groups',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'thm-unique-identity-inverse',
    title: 'Uniqueness of Identity and Inverses',
    statement: 'The identity element is unique. Each element has a unique inverse.',
    sectionId: 15,
    sectionTitle: 'Definition and Examples of Groups',
    category: 'Groups',
    type: 'theorem',
  },
  {
    id: 'def-cyclic-group',
    title: 'Cyclic Group',
    statement: 'A group $G$ is cyclic if $G = \\langle g \\rangle = \\{g^n : n \\in \\mathbb{Z}\\}$ for some generator $g$.',
    sectionId: 15,
    sectionTitle: 'Definition and Examples of Groups',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'def-order-element',
    title: 'Order of an Element',
    statement: 'The order of $g$ is the smallest positive integer $n$ with $g^n = e$, or $\\infty$ if none exists.',
    sectionId: 15,
    sectionTitle: 'Definition and Examples of Groups',
    category: 'Groups',
    type: 'definition',
  },

  // Section 16: Algebraic Structures
  {
    id: 'def-ring',
    title: 'Ring',
    statement: 'A ring $(R, +, \\cdot)$ has abelian group $(R, +)$, associative multiplication, and distributivity.',
    sectionId: 16,
    sectionTitle: 'Algebraic Structures',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'def-field',
    title: 'Field',
    statement: 'A field is a commutative ring where every non-zero element has a multiplicative inverse.',
    sectionId: 16,
    sectionTitle: 'Algebraic Structures',
    category: 'Groups',
    type: 'definition',
  },
  {
    id: 'def-integral-domain',
    title: 'Integral Domain',
    statement: 'An integral domain is a commutative ring with no zero-divisors: $ab = 0$ implies $a = 0$ or $b = 0$.',
    sectionId: 16,
    sectionTitle: 'Algebraic Structures',
    category: 'Groups',
    type: 'definition',
  },

  // ==========================================================================
  // CHAPTER 5: GROUP THEORY AND CODES (Sections 17-20)
  // ==========================================================================

  // Section 17: Subgroups and Preliminaries
  {
    id: 'def-subgroup',
    title: 'Subgroup',
    statement: '$H \\leq G$ is a subgroup if $H$ is non-empty and closed under the operation and inverses.',
    sectionId: 17,
    sectionTitle: 'Subgroups and Preliminaries',
    category: 'Group Theory',
    type: 'definition',
  },
  {
    id: 'thm-subgroup-test',
    title: 'Subgroup Test',
    statement: '$H \\leq G$ iff $H \\neq \\emptyset$ and for all $a, b \\in H$, $ab^{-1} \\in H$.',
    sectionId: 17,
    sectionTitle: 'Subgroups and Preliminaries',
    category: 'Group Theory',
    type: 'theorem',
  },
  {
    id: 'thm-cyclic-subgroups',
    title: 'Subgroups of Cyclic Groups',
    statement: 'Every subgroup of a cyclic group is cyclic. If $|G| = n$, subgroups correspond to divisors of $n$.',
    sectionId: 17,
    sectionTitle: 'Subgroups and Preliminaries',
    category: 'Group Theory',
    type: 'theorem',
  },

  // Section 18: Cosets and Lagrange's Theorem
  {
    id: 'def-coset',
    title: 'Coset',
    statement: 'For $H \\leq G$ and $g \\in G$, the left coset is $gH = \\{gh : h \\in H\\}$.',
    sectionId: 18,
    sectionTitle: "Cosets and Lagrange's Theorem",
    category: 'Group Theory',
    type: 'definition',
  },
  {
    id: 'thm-cosets-partition',
    title: 'Cosets Partition the Group',
    statement: 'The distinct left cosets of $H$ in $G$ partition $G$. All cosets have size $|H|$.',
    sectionId: 18,
    sectionTitle: "Cosets and Lagrange's Theorem",
    category: 'Group Theory',
    type: 'theorem',
  },
  {
    id: 'thm-lagrange',
    title: "Lagrange's Theorem",
    statement: 'If $H \\leq G$ and $G$ is finite, then $|H|$ divides $|G|$. The index is $[G:H] = |G|/|H|$.',
    sectionId: 18,
    sectionTitle: "Cosets and Lagrange's Theorem",
    category: 'Group Theory',
    type: 'theorem',
    hasProof: true,
    proof: `Cosets partition $G$ into $[G:H]$ sets, each of size $|H|$. Thus $|G| = [G:H] \\cdot |H|$.`,
  },
  {
    id: 'cor-order-divides',
    title: 'Order Divides Group Order',
    statement: 'The order of any element divides the order of the group.',
    sectionId: 18,
    sectionTitle: "Cosets and Lagrange's Theorem",
    category: 'Group Theory',
    type: 'corollary',
  },
  {
    id: 'cor-prime-order-cyclic',
    title: 'Prime Order Groups are Cyclic',
    statement: 'Every group of prime order is cyclic.',
    sectionId: 18,
    sectionTitle: "Cosets and Lagrange's Theorem",
    category: 'Group Theory',
    type: 'corollary',
  },

  // Section 19: Groups of Small Order
  {
    id: 'thm-groups-order-4',
    title: 'Groups of Order 4',
    statement: 'Up to isomorphism, there are exactly two groups of order 4: $\\mathbb{Z}_4$ (cyclic) and $V_4$ (Klein four-group).',
    sectionId: 19,
    sectionTitle: 'Groups of Small Order',
    category: 'Group Theory',
    type: 'theorem',
  },
  {
    id: 'thm-groups-order-6',
    title: 'Groups of Order 6',
    statement: 'Up to isomorphism, there are exactly two groups of order 6: $\\mathbb{Z}_6$ and $S_3$.',
    sectionId: 19,
    sectionTitle: 'Groups of Small Order',
    category: 'Group Theory',
    type: 'theorem',
  },

  // Section 20: Error-Detecting and Error-Correcting Codes
  {
    id: 'def-hamming-distance',
    title: 'Hamming Distance',
    statement: '$d(x, y)$ is the number of positions where codewords $x$ and $y$ differ.',
    sectionId: 20,
    sectionTitle: 'Error-Detecting and Error-Correcting Codes',
    category: 'Codes',
    type: 'definition',
  },
  {
    id: 'def-minimum-distance',
    title: 'Minimum Distance',
    statement: 'The minimum distance $d$ of a code is the smallest Hamming distance between distinct codewords.',
    sectionId: 20,
    sectionTitle: 'Error-Detecting and Error-Correcting Codes',
    category: 'Codes',
    type: 'definition',
  },
  {
    id: 'thm-error-detection-correction',
    title: 'Error Detection and Correction',
    statement: 'A code with minimum distance $d$ can detect up to $d-1$ errors and correct up to $\\lfloor(d-1)/2\\rfloor$ errors.',
    sectionId: 20,
    sectionTitle: 'Error-Detecting and Error-Correcting Codes',
    category: 'Codes',
    type: 'theorem',
  },
  {
    id: 'def-linear-code',
    title: 'Linear Code',
    statement: 'A linear code is a subspace of $\\mathbb{Z}_2^n$. An $[n, k]$ code has length $n$ and dimension $k$ (containing $2^k$ codewords).',
    sectionId: 20,
    sectionTitle: 'Error-Detecting and Error-Correcting Codes',
    category: 'Codes',
    type: 'definition',
  },
  {
    id: 'def-hamming-code',
    title: 'Hamming Code',
    statement: 'The $[7, 4]$ Hamming code has minimum distance 3, correcting single-bit errors.',
    sectionId: 20,
    sectionTitle: 'Error-Detecting and Error-Correcting Codes',
    category: 'Codes',
    type: 'definition',
  },

  // ==========================================================================
  // CHAPTER 6: POLYNOMIALS (Sections 21-25)
  // ==========================================================================

  // Section 21: Introduction to Polynomials
  {
    id: 'def-polynomial',
    title: 'Polynomial',
    statement: 'A polynomial over $F$ is $f(x) = a_n x^n + \\cdots + a_1 x + a_0$ with coefficients $a_i \\in F$.',
    sectionId: 21,
    sectionTitle: 'Introduction to Polynomials',
    category: 'Polynomials',
    type: 'definition',
  },
  {
    id: 'def-degree',
    title: 'Degree of a Polynomial',
    statement: 'The degree of $f$ is the highest power of $x$ with non-zero coefficient. $\\deg(fg) = \\deg f + \\deg g$.',
    sectionId: 21,
    sectionTitle: 'Introduction to Polynomials',
    category: 'Polynomials',
    type: 'definition',
  },
  {
    id: 'def-polynomial-ring',
    title: 'Polynomial Ring',
    statement: '$F[x]$ is the ring of polynomials over field $F$ with standard addition and multiplication.',
    sectionId: 21,
    sectionTitle: 'Introduction to Polynomials',
    category: 'Polynomials',
    type: 'definition',
  },
  {
    id: 'thm-polynomial-root',
    title: 'Root Theorem',
    statement: '$a$ is a root of $f(x)$ iff $(x - a)$ divides $f(x)$.',
    sectionId: 21,
    sectionTitle: 'Introduction to Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-max-roots',
    title: 'Maximum Number of Roots',
    statement: 'A polynomial of degree $n$ over a field has at most $n$ roots.',
    sectionId: 21,
    sectionTitle: 'Introduction to Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },

  // Section 22: Division Algorithm for Polynomials
  {
    id: 'thm-polynomial-division',
    title: 'Division Algorithm for Polynomials',
    statement: 'For $f, g \\in F[x]$ with $g \\neq 0$, there exist unique $q, r$ with $f = qg + r$ and $\\deg r < \\deg g$ or $r = 0$.',
    sectionId: 22,
    sectionTitle: 'Division Algorithm for Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-polynomial-gcd',
    title: 'Polynomial GCD',
    statement: 'The GCD of polynomials can be computed using the Euclidean algorithm, yielding the unique monic divisor of highest degree.',
    sectionId: 22,
    sectionTitle: 'Division Algorithm for Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-polynomial-bezout',
    title: "Bézout's Identity for Polynomials",
    statement: '$\\gcd(f, g) = sf + tg$ for some polynomials $s, t$.',
    sectionId: 22,
    sectionTitle: 'Division Algorithm for Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-remainder-theorem',
    title: 'Remainder Theorem',
    statement: 'The remainder when $f(x)$ is divided by $(x - a)$ is $f(a)$.',
    sectionId: 22,
    sectionTitle: 'Division Algorithm for Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },

  // Section 23: Factorisation of Polynomials
  {
    id: 'def-irreducible-polynomial',
    title: 'Irreducible Polynomial',
    statement: 'A polynomial $f$ is irreducible over $F$ if it cannot be factored as $f = gh$ with $\\deg g, \\deg h > 0$.',
    sectionId: 23,
    sectionTitle: 'Factorisation of Polynomials',
    category: 'Polynomials',
    type: 'definition',
  },
  {
    id: 'thm-low-degree-test',
    title: 'Low-Degree Test',
    statement: 'A polynomial of degree 2 or 3 is irreducible over $F$ iff it has no roots in $F$.',
    sectionId: 23,
    sectionTitle: 'Factorisation of Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-polynomial-unique-factorization',
    title: 'Unique Factorization for Polynomials',
    statement: 'Every non-constant polynomial factors uniquely (up to order and constants) into irreducible polynomials.',
    sectionId: 23,
    sectionTitle: 'Factorisation of Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-eisenstein',
    title: "Eisenstein's Criterion",
    statement: 'For $f \\in \\mathbb{Z}[x]$, if prime $p$ divides all but the leading coefficient, does not divide the leading, and $p^2$ does not divide the constant, then $f$ is irreducible over $\\mathbb{Q}$.',
    sectionId: 23,
    sectionTitle: 'Factorisation of Polynomials',
    category: 'Polynomials',
    type: 'theorem',
  },

  // Section 24: Polynomial Congruence Classes
  {
    id: 'def-polynomial-congruence',
    title: 'Polynomial Congruence',
    statement: '$f \\equiv g \\pmod{m(x)}$ if $m(x)$ divides $f(x) - g(x)$.',
    sectionId: 24,
    sectionTitle: 'Polynomial Congruence Classes',
    category: 'Polynomials',
    type: 'definition',
  },
  {
    id: 'def-quotient-ring',
    title: 'Quotient Ring',
    statement: '$F[x]/(m(x))$ is the set of congruence classes mod $m(x)$, with representatives of degree $< \\deg m$.',
    sectionId: 24,
    sectionTitle: 'Polynomial Congruence Classes',
    category: 'Polynomials',
    type: 'definition',
  },
  {
    id: 'thm-quotient-field',
    title: 'Quotient by Irreducible is a Field',
    statement: 'If $p(x)$ is irreducible over $F$, then $F[x]/(p(x))$ is a field.',
    sectionId: 24,
    sectionTitle: 'Polynomial Congruence Classes',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-finite-field-existence',
    title: 'Finite Field Existence',
    statement: 'For every prime power $q = p^n$, there exists a unique field $GF(q)$ with $q$ elements.',
    sectionId: 24,
    sectionTitle: 'Polynomial Congruence Classes',
    category: 'Polynomials',
    type: 'theorem',
  },
  {
    id: 'thm-multiplicative-group-cyclic',
    title: 'Multiplicative Group of Finite Field',
    statement: 'The non-zero elements of $GF(q)$ form a cyclic group of order $q - 1$.',
    sectionId: 24,
    sectionTitle: 'Polynomial Congruence Classes',
    category: 'Polynomials',
    type: 'theorem',
  },

  // Section 25: Cyclic Codes
  {
    id: 'def-cyclic-shift',
    title: 'Cyclic Shift',
    statement: 'A cyclic shift of $(c_0, c_1, \\ldots, c_{n-1})$ is $(c_{n-1}, c_0, \\ldots, c_{n-2})$.',
    sectionId: 25,
    sectionTitle: 'Cyclic Codes',
    category: 'Codes',
    type: 'definition',
  },
  {
    id: 'def-cyclic-code',
    title: 'Cyclic Code',
    statement: 'A linear code is cyclic if every cyclic shift of a codeword is also a codeword. Equivalently, an ideal in $\\mathbb{Z}_2[x]/(x^n - 1)$.',
    sectionId: 25,
    sectionTitle: 'Cyclic Codes',
    category: 'Codes',
    type: 'definition',
  },
  {
    id: 'thm-generator-polynomial',
    title: 'Generator Polynomial',
    statement: 'Every cyclic code of length $n$ is generated by a unique monic polynomial $g(x)$ dividing $x^n - 1$. Dimension $k = n - \\deg g$.',
    sectionId: 25,
    sectionTitle: 'Cyclic Codes',
    category: 'Codes',
    type: 'theorem',
  },
  {
    id: 'def-check-polynomial',
    title: 'Check Polynomial',
    statement: 'If $g(x)h(x) = x^n - 1$, then $h(x)$ is the check polynomial. $c(x)$ is a codeword iff $c(x)h(x) \\equiv 0 \\pmod{x^n - 1}$.',
    sectionId: 25,
    sectionTitle: 'Cyclic Codes',
    category: 'Codes',
    type: 'definition',
  },
  {
    id: 'def-syndrome-polynomial',
    title: 'Syndrome Polynomial',
    statement: 'For received $r(x)$, the syndrome is $s(x) = r(x) \\mod g(x)$. If $s(x) = 0$, then $r(x)$ is a valid codeword.',
    sectionId: 25,
    sectionTitle: 'Cyclic Codes',
    category: 'Codes',
    type: 'definition',
  },
];

export function getTheoremsByCategory(category: string): TheoremEntry[] {
  return theorems.filter((t) => t.category === category);
}

export function getTheoremsBySection(sectionId: number): TheoremEntry[] {
  return theorems.filter((t) => t.sectionId === sectionId);
}

export function getCategories(): string[] {
  return [...new Set(theorems.map((t) => t.category).filter((c): c is string => Boolean(c)))];
}

export function searchTheorems(query: string): TheoremEntry[] {
  const lowerQuery = query.toLowerCase();
  return theorems.filter(
    (t) =>
      t.title.toLowerCase().includes(lowerQuery) ||
      t.statement.toLowerCase().includes(lowerQuery)
  );
}
