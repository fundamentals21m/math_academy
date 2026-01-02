export interface TheoremEntry {
  id: string;
  title: string;
  statement: string;
  sectionId: number;
  sectionTitle?: string;
  category?: string;
  hasProof?: boolean;
  type?: 'theorem' | 'definition' | 'lemma' | 'corollary' | 'proposition';
  proof?: string;
}

export const theorems: TheoremEntry[] = [
  // =============================================================================
  // SECTION 0: CONGRUENT NUMBERS IN GENERAL
  // =============================================================================
  {
    id: 'def-congruence',
    title: 'Congruence',
    statement: 'Two integers $a$ and $b$ are congruent modulo $m$, written $a \\equiv b \\pmod{m}$, if $m$ divides their difference $a - b$.',
    sectionId: 0,
    sectionTitle: 'Congruent Numbers and Moduli',
    category: 'Foundations',
    type: 'definition',
  },
  {
    id: 'def-residue',
    title: 'Residue',
    statement: 'If $a \\equiv b \\pmod{m}$, then $b$ is called a residue of $a$ modulo $m$. The least non-negative residue is the unique $r$ with $0 \\le r < m$ and $a \\equiv r \\pmod{m}$.',
    sectionId: 0,
    sectionTitle: 'Congruent Numbers and Moduli',
    category: 'Foundations',
    type: 'definition',
  },
  {
    id: 'thm-congruence-arithmetic',
    title: 'Arithmetic of Congruences',
    statement: 'If $a \\equiv b \\pmod{m}$ and $c \\equiv d \\pmod{m}$, then $a + c \\equiv b + d \\pmod{m}$ and $ac \\equiv bd \\pmod{m}$.',
    sectionId: 0,
    sectionTitle: 'Congruent Numbers and Moduli',
    category: 'Foundations',
    type: 'theorem',
    hasProof: true,
    proof: `Since $m \\mid (a-b)$ and $m \\mid (c-d)$, we have $m \\mid [(a-b) + (c-d)] = (a+c) - (b+d)$, so $a+c \\equiv b+d \\pmod{m}$.

For multiplication: $ac - bd = ac - bc + bc - bd = c(a-b) + b(c-d)$. Since $m \\mid (a-b)$ and $m \\mid (c-d)$, we have $m \\mid [c(a-b) + b(c-d)] = ac - bd$.`,
  },
  {
    id: 'def-complete-residue-system',
    title: 'Complete Residue System',
    statement: 'A complete residue system modulo $m$ is a set of $m$ integers containing exactly one representative from each congruence class modulo $m$. The standard choice is $\\{0, 1, 2, \\ldots, m-1\\}$.',
    sectionId: 0,
    sectionTitle: 'Congruent Numbers and Moduli',
    category: 'Foundations',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 1: CONGRUENCES OF THE FIRST DEGREE
  // =============================================================================
  {
    id: 'def-gcd',
    title: 'Greatest Common Divisor',
    statement: 'The greatest common divisor $\\gcd(a, b)$ is the largest positive integer that divides both $a$ and $b$. If $\\gcd(a, b) = 1$, we say $a$ and $b$ are coprime.',
    sectionId: 1,
    sectionTitle: 'Linear Congruences',
    category: 'Linear Congruences',
    type: 'definition',
  },
  {
    id: 'thm-euclidean-algorithm',
    title: 'Euclidean Algorithm',
    statement: 'For positive integers $a > b$, $\\gcd(a, b) = \\gcd(b, a \\mod b)$. Repeated application yields the GCD in finitely many steps.',
    sectionId: 1,
    sectionTitle: 'Linear Congruences',
    category: 'Linear Congruences',
    type: 'theorem',
  },
  {
    id: 'thm-bezout',
    title: "Bézout's Identity",
    statement: 'For any integers $a$ and $b$, there exist integers $x$ and $y$ such that $ax + by = \\gcd(a, b)$.',
    sectionId: 1,
    sectionTitle: 'Linear Congruences',
    category: 'Linear Congruences',
    type: 'theorem',
    hasProof: true,
    proof: `The extended Euclidean algorithm computes $x$ and $y$ by back-substitution. Starting from $\\gcd(a,b) = \\gcd(b, r_1) = \\cdots = r_n$, each step $r_{i-1} = q_i r_i + r_{i+1}$ can be rearranged to express $r_{i+1}$ as a linear combination of $r_{i-1}$ and $r_i$, ultimately yielding $\\gcd(a,b) = ax + by$.`,
  },
  {
    id: 'thm-linear-congruence-solvability',
    title: 'Linear Congruence Solvability',
    statement: 'The congruence $ax \\equiv b \\pmod{m}$ has a solution if and only if $\\gcd(a, m) \\mid b$. When solvable, there are exactly $\\gcd(a, m)$ solutions modulo $m$.',
    sectionId: 1,
    sectionTitle: 'Linear Congruences',
    category: 'Linear Congruences',
    type: 'theorem',
  },
  {
    id: 'thm-crt',
    title: 'Chinese Remainder Theorem',
    statement: 'If $m_1, m_2, \\ldots, m_k$ are pairwise coprime, then the system $x \\equiv a_i \\pmod{m_i}$ for $i = 1, \\ldots, k$ has a unique solution modulo $M = m_1 m_2 \\cdots m_k$.',
    sectionId: 1,
    sectionTitle: 'Linear Congruences',
    category: 'Linear Congruences',
    type: 'theorem',
    hasProof: true,
    proof: `For each $i$, let $M_i = M/m_i$. Since $\\gcd(M_i, m_i) = 1$, there exists $y_i$ with $M_i y_i \\equiv 1 \\pmod{m_i}$. Then $x = \\sum_{i=1}^k a_i M_i y_i$ satisfies all congruences. Uniqueness follows from the fact that any two solutions differ by a multiple of $M$.`,
  },
  {
    id: 'def-multiplicative-inverse',
    title: 'Multiplicative Inverse',
    statement: 'If $\\gcd(a, m) = 1$, then $a$ has a multiplicative inverse modulo $m$: an integer $a^{-1}$ such that $a \\cdot a^{-1} \\equiv 1 \\pmod{m}$.',
    sectionId: 1,
    sectionTitle: 'Linear Congruences',
    category: 'Linear Congruences',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 2: RESIDUES OF POWERS (PRIMITIVE ROOTS)
  // =============================================================================
  {
    id: 'thm-fermat-little',
    title: "Fermat's Little Theorem",
    statement: 'If $p$ is prime and $\\gcd(a, p) = 1$, then $a^{p-1} \\equiv 1 \\pmod{p}$.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'theorem',
    hasProof: true,
    proof: `Consider the residues $a, 2a, 3a, \\ldots, (p-1)a \\pmod{p}$. These are a permutation of $1, 2, \\ldots, p-1$ since $\\gcd(a,p)=1$ prevents any two from being congruent.

Multiplying all together: $a \\cdot 2a \\cdot 3a \\cdots (p-1)a \\equiv 1 \\cdot 2 \\cdot 3 \\cdots (p-1) \\pmod{p}$

This gives $a^{p-1} \\cdot (p-1)! \\equiv (p-1)! \\pmod{p}$. Since $\\gcd((p-1)!, p) = 1$, we can cancel to get $a^{p-1} \\equiv 1 \\pmod{p}$.`,
  },
  {
    id: 'def-order',
    title: 'Order of an Element',
    statement: 'The order of $a$ modulo $m$, denoted $\\text{ord}_m(a)$, is the smallest positive integer $k$ such that $a^k \\equiv 1 \\pmod{m}$.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'definition',
  },
  {
    id: 'thm-order-divides',
    title: 'Order Divides Exponent',
    statement: 'If $a^n \\equiv 1 \\pmod{m}$, then $\\text{ord}_m(a)$ divides $n$. In particular, for prime $p$, $\\text{ord}_p(a)$ divides $p-1$.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'theorem',
  },
  {
    id: 'def-primitive-root',
    title: 'Primitive Root',
    statement: 'An integer $g$ is a primitive root modulo $m$ if $\\text{ord}_m(g) = \\phi(m)$, where $\\phi$ is Euler\'s totient function. For prime $p$, this means $\\text{ord}_p(g) = p - 1$.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'definition',
  },
  {
    id: 'thm-primitive-root-existence',
    title: 'Existence of Primitive Roots',
    statement: 'Primitive roots exist modulo $m$ if and only if $m = 1, 2, 4, p^k$, or $2p^k$ for an odd prime $p$.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'theorem',
  },
  {
    id: 'thm-primitive-root-count',
    title: 'Number of Primitive Roots',
    statement: 'If primitive roots exist modulo $m$, then there are exactly $\\phi(\\phi(m))$ of them.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'theorem',
  },
  {
    id: 'thm-wilson',
    title: "Wilson's Theorem",
    statement: 'An integer $p > 1$ is prime if and only if $(p-1)! \\equiv -1 \\pmod{p}$.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'theorem',
    hasProof: true,
    proof: `For prime $p$, each $a \\in \\{1, 2, \\ldots, p-1\\}$ has a unique inverse $a^{-1}$ in that set. The elements that equal their own inverse satisfy $a^2 \\equiv 1$, i.e., $a \\equiv \\pm 1$. So only $1$ and $p-1$ are self-inverse.

Thus in $(p-1)! = 1 \\cdot 2 \\cdots (p-1)$, all elements except $1$ and $p-1$ pair up with their inverses to give $1$. We're left with $1 \\cdot (p-1) = p-1 \\equiv -1 \\pmod{p}$.`,
  },
  {
    id: 'def-index',
    title: 'Index (Discrete Logarithm)',
    statement: 'If $g$ is a primitive root modulo $p$ and $a \\equiv g^k \\pmod{p}$, then $k$ is called the index of $a$ to base $g$, written $\\text{ind}_g(a) = k$. This is the discrete logarithm.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    type: 'definition',
  },

  // =============================================================================
  // SECTION 3: CONGRUENCES OF THE SECOND DEGREE (QUADRATIC RESIDUES)
  // =============================================================================
  {
    id: 'def-quadratic-residue',
    title: 'Quadratic Residue',
    statement: 'An integer $a$ with $\\gcd(a, p) = 1$ is a quadratic residue (QR) modulo $p$ if $x^2 \\equiv a \\pmod{p}$ has a solution. Otherwise, $a$ is a quadratic non-residue (NR).',
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    type: 'definition',
  },
  {
    id: 'thm-qr-count',
    title: 'Count of Quadratic Residues',
    statement: 'For an odd prime $p$, exactly $(p-1)/2$ of the integers $1, 2, \\ldots, p-1$ are quadratic residues, and $(p-1)/2$ are non-residues.',
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    type: 'theorem',
  },
  {
    id: 'def-legendre-symbol',
    title: 'Legendre Symbol',
    statement: 'For odd prime $p$ and integer $a$, the Legendre symbol is: $\\left(\\frac{a}{p}\\right) = \\begin{cases} 1 & \\text{if } a \\text{ is a QR mod } p \\\\ -1 & \\text{if } a \\text{ is a NR mod } p \\\\ 0 & \\text{if } p \\mid a \\end{cases}$',
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    type: 'definition',
  },
  {
    id: 'thm-euler-criterion',
    title: "Euler's Criterion",
    statement: 'For odd prime $p$ and $\\gcd(a, p) = 1$: $\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod{p}$',
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    type: 'theorem',
    hasProof: true,
    proof: `By Fermat's Little Theorem, $a^{p-1} \\equiv 1 \\pmod{p}$, so $(a^{(p-1)/2})^2 \\equiv 1$. Thus $a^{(p-1)/2} \\equiv \\pm 1 \\pmod{p}$.

If $a = b^2$ is a QR, then $a^{(p-1)/2} = b^{p-1} \\equiv 1 \\pmod{p}$.

Conversely, if $a^{(p-1)/2} \\equiv 1$, let $g$ be a primitive root with $a \\equiv g^k$. Then $g^{k(p-1)/2} \\equiv 1$, so $(p-1) \\mid k(p-1)/2$, meaning $k$ is even. Thus $a = g^k = (g^{k/2})^2$ is a QR.`,
  },
  {
    id: 'thm-qr-minus-one',
    title: 'When is -1 a Quadratic Residue?',
    statement: '$\\left(\\frac{-1}{p}\\right) = (-1)^{(p-1)/2} = \\begin{cases} 1 & \\text{if } p \\equiv 1 \\pmod{4} \\\\ -1 & \\text{if } p \\equiv 3 \\pmod{4} \\end{cases}$',
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    type: 'theorem',
  },
  {
    id: 'thm-qr-two',
    title: 'When is 2 a Quadratic Residue?',
    statement: '$\\left(\\frac{2}{p}\\right) = (-1)^{(p^2-1)/8} = \\begin{cases} 1 & \\text{if } p \\equiv \\pm 1 \\pmod{8} \\\\ -1 & \\text{if } p \\equiv \\pm 3 \\pmod{8} \\end{cases}$',
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    type: 'theorem',
  },
  {
    id: 'thm-quadratic-reciprocity',
    title: 'Law of Quadratic Reciprocity',
    statement: 'For distinct odd primes $p$ and $q$: $\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2} \\cdot \\frac{q-1}{2}}$. Equivalently, the symbols are equal unless both $p \\equiv q \\equiv 3 \\pmod{4}$.',
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    type: 'theorem',
    hasProof: false,
  },

  // =============================================================================
  // SECTION 4: FORMS AND INDETERMINATE EQUATIONS (BINARY QUADRATIC FORMS)
  // =============================================================================
  {
    id: 'def-binary-quadratic-form',
    title: 'Binary Quadratic Form',
    statement: 'A binary quadratic form is a homogeneous polynomial $f(x, y) = ax^2 + bxy + cy^2$ with integer coefficients. Gauss writes it as $(a, b, c)$.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'definition',
  },
  {
    id: 'def-discriminant',
    title: 'Discriminant of a Form',
    statement: 'The discriminant of the form $(a, b, c)$ is $D = b^2 - 4ac$. Forms with $D < 0$ are positive definite (if $a > 0$) or negative definite.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'definition',
  },
  {
    id: 'def-equivalence-forms',
    title: 'Equivalence of Forms',
    statement: 'Two forms are equivalent if one can be transformed to the other by a linear substitution $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} \\alpha & \\beta \\\\ \\gamma & \\delta \\end{pmatrix} \\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix}$ with $\\alpha\\delta - \\beta\\gamma = \\pm 1$.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'definition',
  },
  {
    id: 'thm-equivalent-same-discriminant',
    title: 'Equivalent Forms Have Same Discriminant',
    statement: 'Equivalent forms have the same discriminant and represent the same set of integers.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'theorem',
  },
  {
    id: 'def-reduced-form',
    title: 'Reduced Form',
    statement: 'For $D < 0$, a form $(a, b, c)$ is reduced if $|b| \\le a \\le c$, with additional conditions when equality holds: if $|b| = a$, then $b \\ge 0$; if $a = c$, then $b \\ge 0$.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'definition',
  },
  {
    id: 'thm-unique-reduced',
    title: 'Unique Reduced Representative',
    statement: 'Every positive definite binary quadratic form is properly equivalent to a unique reduced form.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'theorem',
  },
  {
    id: 'def-class-number',
    title: 'Class Number',
    statement: 'The class number $h(D)$ is the number of equivalence classes of primitive binary quadratic forms with discriminant $D$.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'definition',
  },
  {
    id: 'thm-two-squares',
    title: 'Two Squares Theorem',
    statement: 'A positive integer $n$ is a sum of two squares if and only if every prime factor $p \\equiv 3 \\pmod{4}$ appears to an even power in the factorization of $n$.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'theorem',
  },
  {
    id: 'thm-prime-two-squares',
    title: 'Primes as Sums of Two Squares',
    statement: 'An odd prime $p$ is a sum of two squares if and only if $p \\equiv 1 \\pmod{4}$. The representation is unique up to order and signs.',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 5: VARIOUS APPLICATIONS (DIOPHANTINE EQUATIONS)
  // =============================================================================
  {
    id: 'def-diophantine',
    title: 'Diophantine Equation',
    statement: 'A Diophantine equation is a polynomial equation where we seek integer solutions.',
    sectionId: 5,
    sectionTitle: 'Diophantine Applications',
    category: 'Diophantine Equations',
    type: 'definition',
  },
  {
    id: 'def-pell',
    title: "Pell's Equation",
    statement: "Pell's equation is $x^2 - Dy^2 = 1$ where $D$ is a positive non-square integer.",
    sectionId: 5,
    sectionTitle: 'Diophantine Applications',
    category: 'Diophantine Equations',
    type: 'definition',
  },
  {
    id: 'thm-pell-infinite',
    title: "Pell's Equation Has Infinitely Many Solutions",
    statement: "For any positive non-square integer $D$, Pell's equation $x^2 - Dy^2 = 1$ has infinitely many solutions. All solutions are generated from the fundamental solution $(x_1, y_1)$ by $(x_n + y_n\\sqrt{D}) = (x_1 + y_1\\sqrt{D})^n$.",
    sectionId: 5,
    sectionTitle: 'Diophantine Applications',
    category: 'Diophantine Equations',
    type: 'theorem',
  },
  {
    id: 'thm-three-squares',
    title: 'Three Squares Theorem',
    statement: 'A positive integer $n$ can be written as a sum of three squares $n = x^2 + y^2 + z^2$ if and only if $n$ is not of the form $4^a(8b + 7)$.',
    sectionId: 5,
    sectionTitle: 'Diophantine Applications',
    category: 'Diophantine Equations',
    type: 'theorem',
  },
  {
    id: 'thm-four-squares',
    title: "Lagrange's Four Squares Theorem",
    statement: 'Every positive integer can be written as a sum of four squares: $n = a^2 + b^2 + c^2 + d^2$ for some non-negative integers $a, b, c, d$.',
    sectionId: 5,
    sectionTitle: 'Diophantine Applications',
    category: 'Diophantine Equations',
    type: 'theorem',
  },

  // =============================================================================
  // SECTION 6: EQUATIONS DEFINING SECTIONS OF A CIRCLE (CYCLOTOMY)
  // =============================================================================
  {
    id: 'def-roots-unity',
    title: 'Roots of Unity',
    statement: 'The $n$-th roots of unity are the solutions to $z^n = 1$. They are $\\zeta_k = e^{2\\pi i k/n} = \\cos(2\\pi k/n) + i\\sin(2\\pi k/n)$ for $k = 0, 1, \\ldots, n-1$.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    type: 'definition',
  },
  {
    id: 'def-primitive-root-unity',
    title: 'Primitive Root of Unity',
    statement: 'A primitive $n$-th root of unity is a root $\\zeta$ such that $\\zeta^n = 1$ but $\\zeta^k \\ne 1$ for $0 < k < n$. Equivalently, $\\zeta = e^{2\\pi i k/n}$ where $\\gcd(k, n) = 1$.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    type: 'definition',
  },
  {
    id: 'def-cyclotomic-polynomial',
    title: 'Cyclotomic Polynomial',
    statement: 'The $n$-th cyclotomic polynomial $\\Phi_n(x)$ is the minimal polynomial over $\\mathbb{Q}$ of a primitive $n$-th root of unity. Its degree is $\\phi(n)$.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    type: 'definition',
  },
  {
    id: 'def-fermat-prime',
    title: 'Fermat Prime',
    statement: 'A Fermat prime is a prime of the form $F_k = 2^{2^k} + 1$. The known Fermat primes are $F_0 = 3$, $F_1 = 5$, $F_2 = 17$, $F_3 = 257$, $F_4 = 65537$.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    type: 'definition',
  },
  {
    id: 'thm-constructibility',
    title: 'Constructibility Criterion',
    statement: 'A length is constructible with compass and straightedge if and only if it lies in a field extension of $\\mathbb{Q}$ of degree $2^k$ for some $k \\ge 0$.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    type: 'theorem',
  },
  {
    id: 'thm-gauss-wantzel',
    title: 'Gauss-Wantzel Theorem',
    statement: 'A regular $n$-gon is constructible with compass and straightedge if and only if $n = 2^k p_1 p_2 \\cdots p_m$ where $k \\ge 0$ and $p_1, \\ldots, p_m$ are distinct Fermat primes.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    type: 'theorem',
  },
  {
    id: 'thm-17-gon',
    title: 'Constructibility of the Regular 17-gon',
    statement: 'The regular 17-gon is constructible because $17 = F_2 = 2^{2^2} + 1$ is a Fermat prime. Gauss showed $\\cos(2\\pi/17)$ can be expressed using nested square roots.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    type: 'theorem',
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
