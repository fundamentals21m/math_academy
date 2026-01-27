import type { QuizQuestion } from './types';

export const section03Quiz = {
  easy: [
    {
      id: 's03-e01',
      type: 'multiple-choice',
      question: 'A set $S$ is called finite if:',
      options: [
        'It contains no elements',
        'There exists a bijection between $S$ and $\\{1, 2, \\ldots, n\\}$ for some natural number $n$, or $S = \\emptyset$',
        'It contains at most one element',
        'It is a subset of the natural numbers'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A set $S$ is finite if it is empty or there exists a bijection between $S$ and the set $\\{1, 2, \\ldots, n\\}$ for some natural number $n$. The number $n$ is called the cardinality of $S$.'
    },
    {
      id: 's03-e02',
      type: 'multiple-choice',
      question: 'Which of the following sets is infinite?',
      options: [
        'The set of letters in the English alphabet',
        'The set of prime numbers less than 100',
        'The set of all even natural numbers',
        'The set of solutions to $x^2 = 4$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The set of all even natural numbers $\\{2, 4, 6, 8, \\ldots\\}$ is infinite because there is no largest even number. The other sets are all finite.'
    },
    {
      id: 's03-e03',
      type: 'multiple-choice',
      question: 'A set is called countable if:',
      options: [
        'It is finite',
        'It has the same cardinality as the real numbers',
        'It contains only integers',
        'It is finite or has the same cardinality as the natural numbers'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A set is countable if it is either finite or countably infinite (i.e., there exists a bijection with the natural numbers $\\mathbb{N}$). This means the elements can be "listed" or "enumerated."'
    },
    {
      id: 's03-e04',
      type: 'multiple-choice',
      question: 'The cardinality of a set $A$, denoted $|A|$, represents:',
      options: [
        'The number of elements in $A$',
        'The largest element in $A$',
        'The sum of all elements in $A$',
        'The dimension of $A$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The cardinality of a set is the number of elements it contains. For finite sets, this is a natural number. For infinite sets, cardinality is described using cardinal numbers like $\\aleph_0$.'
    },
    {
      id: 's03-e05',
      type: 'multiple-choice',
      question: 'Which of the following sets is countably infinite?',
      options: [
        'The empty set $\\emptyset$',
        'The set of all integers $\\mathbb{Z}$',
        'The set $\\{1, 2, 3\\}$',
        'The set of all real numbers $\\mathbb{R}$'
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The set of integers $\\mathbb{Z}$ is countably infinite because we can list them as $0, 1, -1, 2, -2, 3, -3, \\ldots$. This defines a bijection with $\\mathbb{N}$.'
    },
    {
      id: 's03-e06',
      type: 'multiple-choice',
      question: 'Two sets $A$ and $B$ have the same cardinality if:',
      options: [
        'They have the same elements',
        '$A \\subseteq B$ and $B \\subseteq A$',
        'There exists a bijection $f: A \\to B$',
        'They are both infinite'
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'Two sets have the same cardinality if and only if there exists a bijection (one-to-one correspondence) between them. This is written as $|A| = |B|$.'
    },
    {
      id: 's03-e07',
      type: 'multiple-choice',
      question: 'The symbol $\\aleph_0$ (aleph-null) represents:',
      options: [
        'The cardinality of the real numbers',
        'Zero',
        'An undefined quantity',
        'The smallest infinite cardinal number'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: '$\\aleph_0$ is the cardinality of the natural numbers and is the smallest infinite cardinal number. It represents the "size" of countably infinite sets.'
    },
    {
      id: 's03-e08',
      type: 'multiple-choice',
      question: 'Which statement about the set of rational numbers $\\mathbb{Q}$ is true?',
      options: [
        '$\\mathbb{Q}$ is countably infinite',
        '$\\mathbb{Q}$ is uncountable',
        '$\\mathbb{Q}$ is finite',
        '$\\mathbb{Q}$ has cardinality greater than $\\mathbb{R}$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The rational numbers $\\mathbb{Q}$ are countably infinite. This can be shown using a diagonal enumeration (Cantor\'s pairing function) that lists all positive rationals.'
    },
    {
      id: 's03-e09',
      type: 'numeric',
      question: 'How many elements are in the power set of $\\{a, b, c\\}$?',
      correctAnswer: 8,
      difficulty: 'easy',
      explanation: 'The power set of a set with $n$ elements has $2^n$ elements. Since $\\{a, b, c\\}$ has 3 elements, its power set has $2^3 = 8$ elements.'
    },
    {
      id: 's03-e10',
      type: 'multiple-choice',
      question: 'The power set of $A$, denoted $\\mathcal{P}(A)$, is:',
      options: [
        'The set of all elements in $A$',
        'The set of all subsets of $A$',
        'The set $A \\times A$',
        'The complement of $A$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The power set $\\mathcal{P}(A)$ is the set of all subsets of $A$, including the empty set $\\emptyset$ and $A$ itself.'
    },
    {
      id: 's03-e11',
      type: 'multiple-choice',
      question: 'Which of the following sets is uncountable?',
      options: [
        'The set of natural numbers $\\mathbb{N}$',
        'The set of integers $\\mathbb{Z}$',
        'The set of real numbers $\\mathbb{R}$',
        'The set of rational numbers $\\mathbb{Q}$'
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The set of real numbers $\\mathbb{R}$ is uncountable, as proved by Cantor\'s diagonal argument. The other three sets are all countably infinite.'
    },
    {
      id: 's03-e12',
      type: 'numeric',
      question: 'If a finite set has 5 elements, how many elements are in its power set?',
      correctAnswer: 32,
      difficulty: 'easy',
      explanation: 'The power set of a set with $n$ elements has $2^n$ elements. For $n = 5$, this gives $2^5 = 32$ subsets.'
    },
    {
      id: 's03-e13',
      type: 'multiple-choice',
      question: 'A bijection is a function that is:',
      options: [
        'Only injective (one-to-one)',
        'Only surjective (onto)',
        'Neither injective nor surjective',
        'Both injective and surjective'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A bijection is a function that is both injective (one-to-one) and surjective (onto). This means every element in the codomain is hit exactly once.'
    },
    {
      id: 's03-e14',
      type: 'multiple-choice',
      question: 'The interval $(0, 1)$ of real numbers is:',
      options: [
        'Uncountable',
        'Finite',
        'Countably infinite',
        'Empty'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The open interval $(0, 1)$ is uncountable. It has the same cardinality as the entire real line $\\mathbb{R}$, which is $2^{\\aleph_0}$ or $\\mathfrak{c}$ (the cardinality of the continuum).'
    },
    {
      id: 's03-e15',
      type: 'multiple-choice',
      question: 'If $A$ is a subset of $B$, then:',
      options: [
        '$|A| > |B|$',
        '$|A| \\leq |B|$',
        '$|A| = |B|$',
        '$|A|$ and $|B|$ are incomparable'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'If $A \\subseteq B$, then $|A| \\leq |B|$ because we can define an injection $f: A \\to B$ by $f(a) = a$. This shows the cardinality of $A$ is at most that of $B$.'
    },
    {
      id: 's03-e16',
      type: 'multiple-choice',
      question: 'The empty set $\\emptyset$ is:',
      options: [
        'Infinite',
        'Uncountable',
        'Finite with cardinality 0',
        'Neither finite nor infinite'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'The empty set $\\emptyset$ is finite with cardinality 0. By definition, a set is finite if it is empty or has a bijection with $\\{1, 2, \\ldots, n\\}$ for some $n$.'
    },
    {
      id: 's03-e17',
      type: 'multiple-choice',
      question: 'Which set has the same cardinality as the set of positive even integers?',
      options: [
        'The set $\\{1, 2, 3, 4, 5\\}$',
        'The set of real numbers between 0 and 1',
        'The empty set',
        'The set of positive odd integers'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'The positive even integers and positive odd integers are both countably infinite. The bijection $f(n) = 2n - 1$ maps even $2n$ to odd $2n-1$, or simply $f(2k) = 2k-1$.'
    },
    {
      id: 's03-e18',
      type: 'numeric',
      question: 'What is the cardinality of the set $\\{x \\in \\mathbb{Z} : -3 \\leq x \\leq 3\\}$?',
      correctAnswer: 7,
      difficulty: 'easy',
      explanation: 'The set is $\\{-3, -2, -1, 0, 1, 2, 3\\}$, which contains exactly 7 elements.'
    },
    {
      id: 's03-e19',
      type: 'multiple-choice',
      question: 'An infinite set is called countable if:',
      options: [
        'There exists a bijection with the natural numbers $\\mathbb{N}$',
        'Its elements cannot be counted',
        'It is larger than the real numbers',
        'It contains only countable subsets'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'An infinite set is countably infinite if there exists a bijection between it and the natural numbers. This means its elements can be listed as a sequence $a_1, a_2, a_3, \\ldots$'
    },
    {
      id: 's03-e20',
      type: 'multiple-choice',
      question: 'The set of all finite subsets of $\\mathbb{N}$ is:',
      options: [
        'Finite',
        'Countably infinite',
        'Uncountable',
        'Not a set'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The set of all finite subsets of $\\mathbb{N}$ is countably infinite. Each finite subset can be encoded as a natural number (e.g., using prime factorization), establishing a bijection with $\\mathbb{N}$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's03-m01',
      type: 'multiple-choice',
      question: 'The function $f: \\mathbb{Z} \\to \\mathbb{N}$ defined by $f(n) = 2n$ if $n > 0$ and $f(n) = -2n + 1$ if $n \\leq 0$ is:',
      options: [
        'Injective but not surjective',
        'Surjective but not injective',
        'A bijection',
        'Neither injective nor surjective'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'This function maps positive integers to even naturals and non-positive integers to odd naturals: $f(1)=2, f(2)=4, \\ldots$ and $f(0)=1, f(-1)=3, f(-2)=5, \\ldots$. Every natural is hit exactly once, so it\'s a bijection proving $|\\mathbb{Z}| = |\\mathbb{N}|$.'
    },
    {
      id: 's03-m02',
      type: 'multiple-choice',
      question: 'Cantor\'s diagonal argument proves that the real numbers are uncountable by:',
      options: [
        'Counting all the real numbers one by one',
        'Finding a bijection between $\\mathbb{R}$ and $\\mathbb{N}$',
        'Proving that the rationals are uncountable',
        'Showing that every list of reals misses at least one real number'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Cantor\'s diagonal argument assumes a list of all reals in $(0,1)$ and constructs a real number that differs from the $n$-th number in the $n$-th decimal place. This number cannot be in the list, contradicting the assumption that all reals were listed.'
    },
    {
      id: 's03-m03',
      type: 'multiple-choice',
      question: 'If $|A| = \\aleph_0$ and $|B| = \\aleph_0$, what is $|A \\cup B|$?',
      options: [
        '$\\aleph_0$',
        '$2\\aleph_0$',
        '$\\aleph_0^2$',
        'It depends on whether $A$ and $B$ are disjoint'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The union of two countably infinite sets is countably infinite. We can enumerate $A \\cup B$ by alternating between elements of $A$ and $B$: $a_1, b_1, a_2, b_2, \\ldots$. So $|A \\cup B| = \\aleph_0$.'
    },
    {
      id: 's03-m04',
      type: 'multiple-choice',
      question: 'The Cartesian product $\\mathbb{N} \\times \\mathbb{N}$ is:',
      options: [
        'Finite',
        'Countably infinite',
        'Uncountable',
        'Has cardinality $\\aleph_0^2$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The set $\\mathbb{N} \\times \\mathbb{N}$ is countably infinite. Cantor\'s pairing function $\\pi(m, n) = \\frac{(m+n)(m+n+1)}{2} + n$ provides a bijection with $\\mathbb{N}$. The diagonal enumeration also works.'
    },
    {
      id: 's03-m05',
      type: 'multiple-choice',
      question: 'Which of the following is true about the set of algebraic numbers?',
      options: [
        'It is finite',
        'It is uncountable',
        'It is countably infinite',
        'It equals the set of real numbers'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The algebraic numbers (roots of polynomials with integer coefficients) are countably infinite. There are countably many polynomials with integer coefficients, each with finitely many roots, so the algebraic numbers form a countable set.'
    },
    {
      id: 's03-m06',
      type: 'multiple-choice',
      question: 'If $f: A \\to B$ is an injection, then:',
      options: [
        '$|A| \\geq |B|$',
        '$|A| = |B|$',
        'We cannot compare $|A|$ and $|B|$',
        '$|A| \\leq |B|$'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'An injection $f: A \\to B$ shows that $|A| \\leq |B|$ because each element of $A$ maps to a distinct element of $B$. This means $A$ is "no larger than" $B$ in terms of cardinality.'
    },
    {
      id: 's03-m07',
      type: 'multiple-choice',
      question: 'The continuum hypothesis states that:',
      options: [
        'There is no set with cardinality strictly between $\\aleph_0$ and $2^{\\aleph_0}$',
        'The real numbers are countable',
        'Every infinite set is countable',
        '$\\aleph_0 = 2^{\\aleph_0}$'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The continuum hypothesis (CH) states that there is no set whose cardinality is strictly between that of the integers ($\\aleph_0$) and the real numbers ($2^{\\aleph_0}$). Equivalently, it states $\\aleph_1 = 2^{\\aleph_0}$.'
    },
    {
      id: 's03-m08',
      type: 'numeric',
      question: 'If $|A| = 4$, what is $|\\mathcal{P}(A)|$ (the cardinality of the power set of $A$)?',
      correctAnswer: 16,
      difficulty: 'medium',
      explanation: 'For any finite set $A$ with $|A| = n$, we have $|\\mathcal{P}(A)| = 2^n$. With $n = 4$, this gives $2^4 = 16$ subsets.'
    },
    {
      id: 's03-m09',
      type: 'multiple-choice',
      question: 'The set of all sequences of 0s and 1s (binary sequences) has cardinality:',
      options: [
        '$\\aleph_0$',
        '$2^{\\aleph_0}$',
        '$\\aleph_1$',
        'Finite'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The set of all binary sequences $\\{0, 1\\}^{\\mathbb{N}}$ has cardinality $2^{\\aleph_0}$, the same as the real numbers. Each binary sequence can be interpreted as the binary expansion of a real number in $[0, 1]$.'
    },
    {
      id: 's03-m10',
      type: 'multiple-choice',
      question: 'If $A$ is an infinite set and $B \\subset A$ is finite, then $A \\setminus B$ is:',
      options: [
        'Finite',
        'Countably infinite',
        'Has the same cardinality as $A$',
        'Empty'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Removing a finite set from an infinite set does not change its cardinality. If $A$ is infinite and $B$ is finite, then $|A \\setminus B| = |A|$.'
    },
    {
      id: 's03-m11',
      type: 'multiple-choice',
      question: 'The set of irrational numbers is:',
      options: [
        'Countably infinite',
        'Finite',
        'Empty',
        'Uncountable'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The irrationals are uncountable. Since $\\mathbb{R} = \\mathbb{Q} \\cup (\\mathbb{R} \\setminus \\mathbb{Q})$ and $\\mathbb{Q}$ is countable while $\\mathbb{R}$ is uncountable, the irrationals must be uncountable.'
    },
    {
      id: 's03-m12',
      type: 'multiple-choice',
      question: 'For any set $A$, Cantor\'s theorem states that:',
      options: [
        '$|A| < |\\mathcal{P}(A)|$',
        '$|A| = |\\mathcal{P}(A)|$',
        '$|A| > |\\mathcal{P}(A)|$',
        '$|A|$ and $|\\mathcal{P}(A)|$ are incomparable'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Cantor\'s theorem states that for any set $A$, the power set $\\mathcal{P}(A)$ has strictly greater cardinality than $A$. This is proved using a diagonal argument showing no surjection from $A$ to $\\mathcal{P}(A)$ exists.'
    },
    {
      id: 's03-m13',
      type: 'multiple-choice',
      question: 'A countable union of countable sets is:',
      options: [
        'Always finite',
        'Always countable',
        'Always uncountable',
        'Sometimes countable, sometimes uncountable'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'A countable union of countable sets is countable. If $A_1, A_2, A_3, \\ldots$ are countable sets, we can list their elements in a grid and enumerate diagonally to show $\\bigcup_{i=1}^{\\infty} A_i$ is countable.'
    },
    {
      id: 's03-m14',
      type: 'multiple-choice',
      question: 'The set $(0, 1)$ and the set $(0, 2)$ have:',
      options: [
        'Different cardinalities since $(0, 2)$ is "larger"',
        'Cardinality that cannot be compared',
        'The same cardinality',
        '$(0, 2)$ has twice the cardinality of $(0, 1)$'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The function $f(x) = 2x$ is a bijection from $(0, 1)$ to $(0, 2)$, so they have the same cardinality. In fact, all non-degenerate intervals have the same cardinality as $\\mathbb{R}$.'
    },
    {
      id: 's03-m15',
      type: 'numeric',
      question: 'How many subsets does the set $\\{1, 2, 3, 4, 5, 6\\}$ have?',
      correctAnswer: 64,
      difficulty: 'medium',
      explanation: 'A set with $n$ elements has $2^n$ subsets. For $n = 6$, we have $2^6 = 64$ subsets.'
    },
    {
      id: 's03-m16',
      type: 'multiple-choice',
      question: 'The Schröder-Bernstein theorem states that if there exist injections $f: A \\to B$ and $g: B \\to A$, then:',
      options: [
        '$A = B$',
        '$A \\subset B$',
        '$A$ and $B$ are both countable',
        'There exists a bijection between $A$ and $B$'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'The Schröder-Bernstein theorem states that if $|A| \\leq |B|$ and $|B| \\leq |A|$ (i.e., there are injections both ways), then $|A| = |B|$ (there exists a bijection). This is a powerful tool for proving equal cardinality.'
    },
    {
      id: 's03-m17',
      type: 'multiple-choice',
      question: 'The set of all functions from $\\mathbb{N}$ to $\\{0, 1\\}$ has cardinality:',
      options: [
        '$2^{\\aleph_0}$',
        '$\\aleph_0$',
        '$2$',
        'Finite'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'The set of all functions from $\\mathbb{N}$ to $\\{0, 1\\}$ is denoted $\\{0, 1\\}^{\\mathbb{N}}$ and has cardinality $2^{\\aleph_0}$, the cardinality of the continuum. Each such function corresponds to a subset of $\\mathbb{N}$ (its preimage of 1).'
    },
    {
      id: 's03-m18',
      type: 'multiple-choice',
      question: 'If $A$ is uncountable and $B \\subset A$ is countable, then $A \\setminus B$ is:',
      options: [
        'Countable',
        'Uncountable',
        'Finite',
        'Empty'
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'If $A$ is uncountable and $B$ is countable, then $A \\setminus B$ must be uncountable. Otherwise, $A = (A \\setminus B) \\cup (A \\cap B)$ would be a union of two countable sets, hence countable, contradicting that $A$ is uncountable.'
    },
    {
      id: 's03-m19',
      type: 'numeric',
      question: 'A set has 10 elements. How many proper subsets does it have?',
      correctAnswer: 1023,
      difficulty: 'medium',
      explanation: 'A set with $n$ elements has $2^n$ subsets total. Proper subsets exclude the set itself, so there are $2^n - 1$ proper subsets. For $n = 10$: $2^{10} - 1 = 1024 - 1 = 1023$.'
    },
    {
      id: 's03-m20',
      type: 'multiple-choice',
      question: 'The set of all polynomials with integer coefficients is:',
      options: [
        'Finite',
        'Uncountable',
        'Countably infinite',
        'Has cardinality $2^{\\aleph_0}$'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'Polynomials with integer coefficients are countable. For each degree $n$, a polynomial is determined by $n+1$ integer coefficients. Since $\\mathbb{Z}^{n+1}$ is countable for each $n$, and we have countably many degrees, the union is countable.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's03-h01',
      type: 'multiple-choice',
      question: 'In Cantor\'s proof that $|A| < |\\mathcal{P}(A)|$, consider the set $S = \\{a \\in A : a \\notin f(a)\\}$ where $f: A \\to \\mathcal{P}(A)$. If $S = f(s)$ for some $s \\in A$, we get a contradiction because:',
      options: [
        '$S$ is empty',
        '$S$ equals $A$',
        '$f$ cannot be defined',
        '$s \\in S$ if and only if $s \\in f(s)$, but $S = f(s)$, so $s \\in S$ iff $s \\notin S$'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'If $S = f(s)$, then $s \\in S \\Leftrightarrow s \\in f(s)$. But by definition of $S$, $s \\in S \\Leftrightarrow s \\notin f(s)$. Combined: $s \\in f(s) \\Leftrightarrow s \\notin f(s)$, a contradiction. So no such $s$ exists, meaning $f$ is not surjective.'
    },
    {
      id: 's03-h02',
      type: 'multiple-choice',
      question: 'The cardinality of the set of all continuous functions from $\\mathbb{R}$ to $\\mathbb{R}$ is:',
      options: [
        '$2^{\\aleph_0}$',
        '$\\aleph_0$',
        '$2^{2^{\\aleph_0}}$',
        'Larger than $2^{2^{\\aleph_0}}$'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'A continuous function on $\\mathbb{R}$ is determined by its values on $\\mathbb{Q}$ (by continuity). Since $|\\mathbb{Q}| = \\aleph_0$ and each value is in $\\mathbb{R}$, the set of continuous functions has cardinality at most $|\\mathbb{R}|^{\\aleph_0} = (2^{\\aleph_0})^{\\aleph_0} = 2^{\\aleph_0}$. Constant functions give the lower bound.'
    },
    {
      id: 's03-h03',
      type: 'multiple-choice',
      question: 'Consider the statement: "There exists an uncountable set of disjoint open intervals in $\\mathbb{R}$." This statement is:',
      options: [
        'True, by taking intervals $(n, n+1)$ for all real $n$',
        'False, because each open interval contains a distinct rational',
        'True, by Cantor\'s theorem',
        'Undecidable in ZFC'
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Each non-empty open interval contains at least one rational number. If we have disjoint open intervals, we can choose a distinct rational from each. Since there are only countably many rationals, there can only be countably many disjoint open intervals.'
    },
    {
      id: 's03-h04',
      type: 'multiple-choice',
      question: 'The cardinality of the Cantor set is:',
      options: [
        'Zero (it\'s empty)',
        'Countably infinite',
        'Uncountable (equal to $2^{\\aleph_0}$)',
        'Finite but large'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The Cantor set has cardinality $2^{\\aleph_0}$. Each point can be represented by a sequence of choices (left or right third), giving a bijection with $\\{0, 2\\}^{\\mathbb{N}}$, which has cardinality $2^{\\aleph_0}$.'
    },
    {
      id: 's03-h05',
      type: 'multiple-choice',
      question: 'Which statement about $\\aleph_1$ is true in ZFC?',
      options: [
        '$\\aleph_1 = 2^{\\aleph_0}$ (this is provable)',
        '$\\aleph_1 < 2^{\\aleph_0}$ (this is provable)',
        '$\\aleph_1$ does not exist',
        '$\\aleph_1$ is the smallest uncountable cardinal'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$\\aleph_1$ is defined as the smallest cardinal greater than $\\aleph_0$, i.e., the smallest uncountable cardinal. Whether $\\aleph_1 = 2^{\\aleph_0}$ is the continuum hypothesis, which is independent of ZFC.'
    },
    {
      id: 's03-h06',
      type: 'multiple-choice',
      question: 'The set of all well-orderings of $\\mathbb{N}$ has cardinality:',
      options: [
        '$2^{\\aleph_0}$',
        '$\\aleph_0$',
        '$\\aleph_1$',
        'The same as the countable ordinals'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'A well-ordering of $\\mathbb{N}$ is a bijection $\\mathbb{N} \\to \\mathbb{N}$ plus an ordering, but actually is determined by which element is first, second, etc. The set of permutations of $\\mathbb{N}$ has cardinality $\\aleph_0! = 2^{\\aleph_0}$.'
    },
    {
      id: 's03-h07',
      type: 'multiple-choice',
      question: 'If $\\kappa$ is an infinite cardinal, then $\\kappa + \\kappa$ equals:',
      options: [
        '$2\\kappa$ (a larger cardinal)',
        '$\\kappa$',
        '$\\kappa^2$',
        '$2^\\kappa$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'For infinite cardinals, $\\kappa + \\kappa = \\kappa$. We can partition an infinite set of cardinality $\\kappa$ into two disjoint sets each of cardinality $\\kappa$ (e.g., evens and odds for $\\aleph_0$). Cardinal addition differs from ordinal addition.'
    },
    {
      id: 's03-h08',
      type: 'multiple-choice',
      question: 'The Dedekind definition of an infinite set states that a set $A$ is infinite if and only if:',
      options: [
        '$A$ is uncountable',
        '$A$ cannot be well-ordered',
        '$A$ has a proper subset $B \\subsetneq A$ with $|A| = |B|$',
        '$A$ contains the natural numbers'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Dedekind\'s definition: A set is infinite if and only if it is equipotent to a proper subset of itself. For example, $\\mathbb{N}$ is equinumerous with the even numbers $\\{2, 4, 6, \\ldots\\}$ via $n \\mapsto 2n$.'
    },
    {
      id: 's03-h09',
      type: 'multiple-choice',
      question: 'The set of all subsets of $\\mathbb{R}$ has cardinality:',
      options: [
        '$2^{\\aleph_0}$',
        '$\\aleph_1$',
        '$\\aleph_0$',
        '$2^{2^{\\aleph_0}}$'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The power set of $\\mathbb{R}$ has cardinality $|\\mathcal{P}(\\mathbb{R})| = 2^{|\\mathbb{R}|} = 2^{2^{\\aleph_0}}$. By Cantor\'s theorem, this is strictly larger than $2^{\\aleph_0}$.'
    },
    {
      id: 's03-h10',
      type: 'multiple-choice',
      question: 'Consider the set $T$ of all transcendental real numbers. Then:',
      options: [
        '$T$ is uncountable',
        '$T$ is finite',
        '$T$ is countably infinite',
        '$T$ is empty'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The algebraic numbers are countable, and $\\mathbb{R}$ is uncountable. Since $\\mathbb{R}$ = (algebraic) $\\cup$ (transcendental), and a countable union with something equals uncountable, the transcendentals must be uncountable.'
    },
    {
      id: 's03-h11',
      type: 'numeric',
      question: 'If $|A| = 2^{100}$, what is $\\log_2(|\\mathcal{P}(A)|)$?',
      correctAnswer: 1267650600228229401496703205376,
      difficulty: 'hard',
      explanation: '$|\\mathcal{P}(A)| = 2^{|A|} = 2^{2^{100}}$. Therefore $\\log_2(|\\mathcal{P}(A)|) = 2^{100} \\approx 1.27 \\times 10^{30}$.'
    },
    {
      id: 's03-h12',
      type: 'multiple-choice',
      question: 'For infinite cardinals $\\kappa$ and $\\lambda$ with $\\kappa \\leq \\lambda$, we have $\\kappa \\cdot \\lambda$ equals:',
      options: [
        '$\\kappa + \\lambda$',
        '$\\max(\\kappa, \\lambda) = \\lambda$',
        '$\\kappa^\\lambda$',
        '$2^{\\kappa + \\lambda}$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'For infinite cardinals, $\\kappa \\cdot \\lambda = \\max(\\kappa, \\lambda)$. If $\\kappa \\leq \\lambda$ are both infinite, then $\\kappa \\cdot \\lambda = \\lambda$. This is a fundamental property of infinite cardinal arithmetic.'
    },
    {
      id: 's03-h13',
      type: 'multiple-choice',
      question: 'A set $A$ is called "Dedekind-finite" if:',
      options: [
        'It has finitely many elements',
        'It is a subset of a finite set',
        'Every injection $f: A \\to A$ is a bijection',
        '$|A| < \\aleph_0$'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'A set is Dedekind-finite if every injection from the set to itself is also surjective (hence a bijection). In ZFC, Dedekind-finite is equivalent to finite, but without the Axiom of Choice, there could be infinite Dedekind-finite sets.'
    },
    {
      id: 's03-h14',
      type: 'multiple-choice',
      question: 'The set of all functions from $\\mathbb{R}$ to $\\mathbb{R}$ has cardinality:',
      options: [
        '$2^{\\aleph_0}$',
        '$2^{2^{\\aleph_0}}$',
        '$\\aleph_0^{2^{\\aleph_0}}$',
        '$(2^{\\aleph_0})^{2^{\\aleph_0}} = 2^{2^{\\aleph_0}}$'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The set $\\mathbb{R}^\\mathbb{R}$ has cardinality $|\\mathbb{R}|^{|\\mathbb{R}|} = (2^{\\aleph_0})^{2^{\\aleph_0}} = 2^{\\aleph_0 \\cdot 2^{\\aleph_0}} = 2^{2^{\\aleph_0}}$, using cardinal exponentiation rules.'
    },
    {
      id: 's03-h15',
      type: 'multiple-choice',
      question: 'In the Cantor diagonal argument, if we have a list $r_1, r_2, r_3, \\ldots$ of reals in $(0,1)$, the constructed number $d$ differs from $r_n$ in the:',
      options: [
        '$n$-th decimal place',
        'First decimal place',
        'Last decimal place',
        'Every decimal place'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The diagonal number $d$ is constructed so that its $n$-th decimal digit differs from the $n$-th decimal digit of $r_n$. This ensures $d \\neq r_n$ for all $n$, so $d$ is not in the list.'
    },
    {
      id: 's03-h16',
      type: 'multiple-choice',
      question: 'König\'s theorem in set theory states that if $\\kappa_i < \\lambda_i$ for all $i \\in I$, then:',
      options: [
        '$\\sum_{i \\in I} \\kappa_i < \\sum_{i \\in I} \\lambda_i$',
        '$\\sum_{i \\in I} \\kappa_i < \\prod_{i \\in I} \\lambda_i$',
        '$\\prod_{i \\in I} \\kappa_i < \\sum_{i \\in I} \\lambda_i$',
        '$\\max_i \\kappa_i < \\min_i \\lambda_i$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'König\'s theorem states that $\\sum_{i \\in I} \\kappa_i < \\prod_{i \\in I} \\lambda_i$ when $\\kappa_i < \\lambda_i$ for all $i$. A key corollary: $\\text{cf}(2^\\kappa) > \\kappa$, so $2^{\\aleph_0} \\neq \\aleph_\\omega$.'
    },
    {
      id: 's03-h17',
      type: 'multiple-choice',
      question: 'The cofinality of $\\aleph_\\omega$ is:',
      options: [
        '$\\aleph_\\omega$',
        '$\\aleph_1$',
        '$\\omega = \\aleph_0$',
        '$2^{\\aleph_0}$'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$\\aleph_\\omega = \\sup\\{\\aleph_n : n < \\omega\\}$ is the limit of the sequence $\\aleph_0, \\aleph_1, \\aleph_2, \\ldots$. This sequence has length $\\omega$, so $\\text{cf}(\\aleph_\\omega) = \\omega = \\aleph_0$.'
    },
    {
      id: 's03-h18',
      type: 'multiple-choice',
      question: 'If $2^{\\aleph_0} = \\aleph_2$, then the Generalized Continuum Hypothesis (GCH) is:',
      options: [
        'True',
        'Still undetermined from this information alone',
        'Equivalent to this statement',
        'False'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'GCH states that $2^{\\aleph_\\alpha} = \\aleph_{\\alpha+1}$ for all ordinals $\\alpha$. If $2^{\\aleph_0} = \\aleph_2 \\neq \\aleph_1$, then GCH fails at $\\alpha = 0$, so GCH is false.'
    },
    {
      id: 's03-h19',
      type: 'multiple-choice',
      question: 'The set of Borel sets in $\\mathbb{R}$ has cardinality:',
      options: [
        '$2^{\\aleph_0}$',
        '$\\aleph_0$',
        '$2^{2^{\\aleph_0}}$',
        '$\\aleph_1$ (in ZFC)'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'The Borel $\\sigma$-algebra on $\\mathbb{R}$ has cardinality $2^{\\aleph_0}$. This is proved by transfinite induction: starting from countably many open intervals and applying countable operations countably many times still yields only $2^{\\aleph_0}$ sets.'
    },
    {
      id: 's03-h20',
      type: 'multiple-choice',
      question: 'In ZFC, the statement "every set can be well-ordered" is:',
      options: [
        'Provable without additional axioms',
        'Equivalent to the Axiom of Choice',
        'False',
        'Independent of ZFC'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'The Well-Ordering Theorem states that every set can be well-ordered. This is equivalent to the Axiom of Choice (AC) in ZF set theory. In ZFC (which includes AC), every set can be well-ordered.'
    }
  ] as QuizQuestion[],
};
