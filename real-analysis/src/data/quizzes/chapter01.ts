import type { QuizQuestion } from './types';

/**
 * Chapter 1: Foundations of Analysis
 * 20 Hard questions covering Sections 1-4:
 * - Section 1: The Real Number System
 * - Section 2: Mathematical Induction
 * - Section 3: Finite and Infinite Sets
 * - Section 4: Functions and Relations
 */
export const chapter01Quiz: QuizQuestion[] = [
  // Section 1: The Real Number System
  {
    id: 'ch01-h01',
    type: 'multiple-choice',
    question: 'The completeness axiom distinguishes $\\mathbb{R}$ from $\\mathbb{Q}$ because:',
    options: [
      '$\\mathbb{Q}$ has gaps where suprema should exist',
      '$\\mathbb{Q}$ is finite',
      '$\\mathbb{Q}$ is not ordered',
      '$\\mathbb{Q}$ has no upper bounds'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'E.g., $\\{x \\in \\mathbb{Q} : x^2 < 2\\}$ has no supremum in $\\mathbb{Q}$; $\\sqrt{2}$ fills this gap in $\\mathbb{R}$.'
  },
  {
    id: 'ch01-h02',
    type: 'multiple-choice',
    question: 'The Archimedean property is equivalent to:',
    options: [
      'Every Cauchy sequence converging',
      '$\\mathbb{N}$ being unbounded in $\\mathbb{R}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Archimedean: for all $x \\in \\mathbb{R}$, there exists $n \\in \\mathbb{N}$ with $n > x$.'
  },
      'The existence of $\\sqrt{2}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Archimedean: for all $x \\in \\mathbb{R}$, there exists $n \\in \\mathbb{N}$ with $n > x$.'
  },
      'The field axioms',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Archimedean: for all $x \\in \\mathbb{R}$, there exists $n \\in \\mathbb{N}$ with $n > x$.'
  },
  {
    id: 'ch01-h03',
    type: 'multiple-choice',
    question: 'Dedekind cuts construct $\\mathbb{R}$ by:',
    options: [
      'Partitioning $\\mathbb{Q}$ into sets $(A, B)$ where every $a \\in A$ is less than every $b \\in B
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Dedekind cuts: each real is a partition of rationals into lower and upper sets.'
  },
      'Taking limits of sequences',
      'Adding $\\sqrt{2}$ to $\\mathbb{Q}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Dedekind cuts: each real is a partition of rationals into lower and upper sets.'
  },
      'Using infinite decimals',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Dedekind cuts: each real is a partition of rationals into lower and upper sets.'
  },
  {
    id: 'ch01-h04',
    type: 'multiple-choice',
    question: 'Cauchy\'s construction of $\\mathbb{R}$ uses:',
    options: [
      'Dedekind cuts',
      'Infinite decimals',
      'Continued fractions',
      'Equivalence classes of Cauchy sequences in $\\mathbb{Q}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Cauchy: $\\mathbb{R}$ = equivalence classes of Cauchy sequences under the relation $(a_n) \\sim (b_n)$ iff $a_n - b_n \\to 0$.'
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cauchy: $\\mathbb{R}$ = equivalence classes of Cauchy sequences under the relation $(a_n) \\sim (b_n)$ iff $a_n - b_n \\to 0$.'
  },
  {
    id: 'ch01-h05',
    type: 'multiple-choice',
    question: 'The infimum of a non-empty set $S$ bounded below is characterized by:',
    options: [
      '$\\inf S \\in S$ always',
      '$\\inf S = -\\sup S
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Infimum is the greatest lower bound: a lower bound that is $\\varepsilon$-close to $S$ for any $\\varepsilon > 0$.'
  },
      '$\\inf S$ is a lower bound, and for any $\\varepsilon > 0$, there exists $s \\in S$ with $s < \\inf S + \\varepsilon
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Infimum is the greatest lower bound: a lower bound that is $\\varepsilon$-close to $S$ for any $\\varepsilon > 0$.'
  },
      '$\\inf S$ is the smallest element of $S
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Infimum is the greatest lower bound: a lower bound that is $\\varepsilon$-close to $S$ for any $\\varepsilon > 0$.'
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Infimum is the greatest lower bound: a lower bound that is $\\varepsilon$-close to $S$ for any $\\varepsilon > 0$.'
  },
  // Section 2: Mathematical Induction
  {
    id: 'ch01-h06',
    type: 'multiple-choice',
    question: 'Strong induction differs from weak induction in that:',
    options: [
      'It has no base case',
      'The inductive hypothesis assumes $P(k)$ for all $k < n$, not just $P(n-1)$',
      'It only works for even numbers',
      'It requires two base cases'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Strong induction: assume $P(1), P(2), \\ldots, P(n-1)$ to prove $P(n)$.'
  },
  {
    id: 'ch01-h07',
    type: 'multiple-choice',
    question: 'The Well-Ordering Principle states:',
    options: [
      'Every set of reals has a minimum',
      '$\\mathbb{N}$ is bounded',
      'Every sequence is monotonic',
      'Every non-empty subset of $\\mathbb{N}$ has a least element',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Well-ordering: every non-empty subset of natural numbers has a minimum.'
  },
  {
    id: 'ch01-h08',
    type: 'multiple-choice',
    question: 'The Well-Ordering Principle is equivalent to:',
    options: [
      'The Archimedean property only',
      'The completeness axiom',
      'The existence of rationals',
      'Mathematical induction (both weak and strong)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Well-ordering and mathematical induction are logically equivalent over the Peano axioms.'
  },
  {
    id: 'ch01-h09',
    type: 'multiple-choice',
    question: 'To prove $n! > 2^n$ for $n \\geq 4$ by induction, the inductive step shows:',
    options: [
      '$n! = 2^n
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Key: $(n+1) > 2$ for $n \\geq 4$, so $(n+1) \\cdot 2^n > 2^{n+1}$.'
  },
      'The statement is false',
      '$(n+1)! = (n+1) \\cdot n! > (n+1) \\cdot 2^n > 2 \\cdot 2^n = 2^{n+1}$ for $n \\geq 4
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Key: $(n+1) > 2$ for $n \\geq 4$, so $(n+1) \\cdot 2^n > 2^{n+1}$.'
  },
      'No induction is needed',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Key: $(n+1) > 2$ for $n \\geq 4$, so $(n+1) \\cdot 2^n > 2^{n+1}$.'
  },
  {
    id: 'ch01-h10',
    type: 'multiple-choice',
    question: 'Structural induction generalizes mathematical induction to:',
    options: [
      'Recursively defined structures (trees, formulas, etc.)',
      'Real numbers',
      'Continuous functions',
      'Matrices',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Structural induction proves properties of recursively defined objects.'
  },
  // Section 3: Finite and Infinite Sets
  {
    id: 'ch01-h11',
    type: 'multiple-choice',
    question: 'Cantor\'s theorem states that for any set $A$:',
    options: [
      '$|A| = |\\mathcal{P}(A)|
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Cantor: no surjection from $A$ to $\\mathcal{P}(A)$ exists (diagonal argument).'
  },
      '$A$ is countable',
      '$A$ is finite',
      '$|A| < |\\mathcal{P}(A)|$ (power set has strictly greater cardinality)',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cantor: no surjection from $A$ to $\\mathcal{P}(A)$ exists (diagonal argument).'
  },
  {
    id: 'ch01-h12',
    type: 'multiple-choice',
    question: 'The Schröder-Bernstein theorem states:',
    options: [
      'Every infinite set is countable',
      '$\\mathbb{R}$ is countable',
      'If $|A| \\leq |B|$ and $|B| \\leq |A|$, then $|A| = |B|
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Schröder-Bernstein: mutual injections imply bijection.'
  },
      'All infinities are equal',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Schröder-Bernstein: mutual injections imply bijection.'
  },
  {
    id: 'ch01-h13',
    type: 'multiple-choice',
    question: 'The continuum hypothesis (CH) states:',
    options: [
      'There is no cardinality strictly between $|\\mathbb{N}|$ and $|\\mathbb{R}|
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'CH: no set has cardinality strictly between $\\aleph_0$ and $2^{\\aleph_0}$.'
  },
      '$|\\mathbb{R}| = |\\mathbb{N}|
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'CH: no set has cardinality strictly between $\\aleph_0$ and $2^{\\aleph_0}$.'
  },
      '$\\mathbb{R}$ is countable',
      '$|\\mathbb{R}| = 2
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'CH: no set has cardinality strictly between $\\aleph_0$ and $2^{\\aleph_0}$.'
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'CH: no set has cardinality strictly between $\\aleph_0$ and $2^{\\aleph_0}$.'
  },
  {
    id: 'ch01-h14',
    type: 'multiple-choice',
    question: 'The set of all finite subsets of $\\mathbb{N}$ is:',
    options: [
      'Uncountable',
      'Finite',
      'Countable',
      'Empty',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Finite subsets of $\\mathbb{N}$: countable union of finite sets, hence countable.'
  },
  {
    id: 'ch01-h15',
    type: 'multiple-choice',
    question: 'The cardinality of $\\mathbb{R}^n$ for any $n \\geq 1$ is:',
    options: [
      '$|\\mathbb{R}|$ (the continuum)',
      '$n \\cdot |\\mathbb{R}|
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$|\\mathbb{R}^n| = |\\mathbb{R}|^n = (2^{\\aleph_0})^n = 2^{\\aleph_0} = |\\mathbb{R}|$.'
  },
      '$|\\mathbb{N}|
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$|\\mathbb{R}^n| = |\\mathbb{R}|^n = (2^{\\aleph_0})^n = 2^{\\aleph_0} = |\\mathbb{R}|$.'
  },
      'Depends on $n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$|\\mathbb{R}^n| = |\\mathbb{R}|^n = (2^{\\aleph_0})^n = 2^{\\aleph_0} = |\\mathbb{R}|$.'
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$|\\mathbb{R}^n| = |\\mathbb{R}|^n = (2^{\\aleph_0})^n = 2^{\\aleph_0} = |\\mathbb{R}|$.'
  },
  // Section 4: Functions and Relations
  {
    id: 'ch01-h16',
    type: 'multiple-choice',
    question: 'A function $f: A \\to B$ is a bijection iff:',
    options: [
      '$f$ is injective',
      '$f$ has a two-sided inverse',
      '$f$ is surjective',
      '$A = B
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Bijection $\\Leftrightarrow$ exists $g: B \\to A$ with $g \\circ f = \\text{id}_A$ and $f \\circ g = \\text{id}_B$.'
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Bijection $\\Leftrightarrow$ exists $g: B \\to A$ with $g \\circ f = \\text{id}_A$ and $f \\circ g = \\text{id}_B$.'
  },
  {
    id: 'ch01-h17',
    type: 'multiple-choice',
    question: 'An equivalence relation must be:',
    options: [
      'Reflexive only',
      'Symmetric only',
      'Reflexive, symmetric, and transitive',
      'A function'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Equivalence relation: reflexive ($a \\sim a$), symmetric ($a \\sim b \\Rightarrow b \\sim a$), transitive.'
  },
  {
    id: 'ch01-h18',
    type: 'multiple-choice',
    question: 'The kernel of a function $f: A \\to B$ is the equivalence relation:',
    options: [
      '$\\ker f = f^{-1}(0)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Kernel: pairs with same image; equivalence classes are fibers $f^{-1}(\\{y\\})$.'
  },
      '$\\ker f = \\{f(a) : a \\in A\\}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Kernel: pairs with same image; equivalence classes are fibers $f^{-1}(\\{y\\})$.'
  },
      '$\\ker f = A
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Kernel: pairs with same image; equivalence classes are fibers $f^{-1}(\\{y\\})$.'
  },
      '$\\ker f = \\{(a, b) : f(a) = f(b)\\}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Kernel: pairs with same image; equivalence classes are fibers $f^{-1}(\\{y\\})$.'
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Kernel: pairs with same image; equivalence classes are fibers $f^{-1}(\\{y\\})$.'
  },
  {
    id: 'ch01-h19',
    type: 'multiple-choice',
    question: 'If $f: A \\to B$ is injective and $g: B \\to C$ is injective, then $g \\circ f$:',
    options: [
      'May not be injective',
      'Is surjective',
      'Is not defined',
      'Is injective',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Composition of injections: $g(f(a_1)) = g(f(a_2)) \\Rightarrow f(a_1) = f(a_2) \\Rightarrow a_1 = a_2$.'
  },
  {
    id: 'ch01-h20',
    type: 'multiple-choice',
    question: 'The Axiom of Choice is equivalent to:',
    options: [
      'The completeness of $\\mathbb{R}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'AC, Well-Ordering, and Zorn\'s Lemma are equivalent in ZF set theory.'
  },
      'The Well-Ordering Theorem',
      'Mathematical induction',
      'The Archimedean property',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'AC, Well-Ordering, and Zorn\'s Lemma are equivalent in ZF set theory.'
  }
];
