import type { QuizQuestion } from './types';

export const section04Quiz = {
  easy: [
    {
      id: 's04-e01',
      type: 'multiple-choice',
      question: 'A function $f: A \\to B$ is defined as:',
      options: [
        'A rule that assigns to each element of $B$ exactly one element of $A$',
        'Any subset of $A \\times B$',
        'A rule that assigns to each element of $A$ exactly one element of $B$',
        'A bijection between $A$ and $B$'
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'A function $f: A \\to B$ assigns to each element $a \\in A$ exactly one element $f(a) \\in B$. The set $A$ is called the domain and $B$ is called the codomain.'
    },
    {
      id: 's04-e02',
      type: 'multiple-choice',
      question: 'For the function $f(x) = x^2$ with domain $\\mathbb{R}$, what is the range?',
      options: [
        '$\\mathbb{R}$',
        '$(-\\infty, 0]$',
        '$(0, \\infty)$',
        '$[0, \\infty)$'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'Since $x^2 \\geq 0$ for all $x \\in \\mathbb{R}$, and for any $y \\geq 0$ we have $f(\\sqrt{y}) = y$, the range is $[0, \\infty)$.'
    },
    {
      id: 's04-e03',
      type: 'multiple-choice',
      question: 'The domain of the function $f(x) = \\frac{1}{x-2}$ is:',
      options: [
        '$\\mathbb{R} \\setminus \\{2\\}$',
        '$\\mathbb{R}$',
        '$\\mathbb{R} \\setminus \\{0\\}$',
        '$(2, \\infty)$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'The function is undefined when the denominator equals zero, i.e., when $x = 2$. Therefore, the domain is all real numbers except 2, written as $\\mathbb{R} \\setminus \\{2\\}$.'
    },
    {
      id: 's04-e04',
      type: 'multiple-choice',
      question: 'A function $f: A \\to B$ is injective (one-to-one) if:',
      options: [
        'Every element in $B$ is mapped to by some element in $A$',
        '$f(a_1) = f(a_2)$ implies $a_1 = a_2$ for all $a_1, a_2 \\in A$',
        'The function has an inverse',
        '$f$ maps $A$ onto all of $B$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A function is injective if different inputs always produce different outputs. Equivalently, if $f(a_1) = f(a_2)$, then we must have $a_1 = a_2$.'
    },
    {
      id: 's04-e05',
      type: 'multiple-choice',
      question: 'Which of the following functions is NOT injective on $\\mathbb{R}$?',
      options: [
        '$f(x) = 2x + 3$',
        '$f(x) = x^3$',
        '$f(x) = x^2$',
        '$f(x) = e^x$'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$f(x) = x^2$ is not injective because $f(1) = f(-1) = 1$, but $1 \\neq -1$. The other functions are all strictly monotonic and hence injective.'
    },
    {
      id: 's04-e06',
      type: 'multiple-choice',
      question: 'A function $f: A \\to B$ is surjective (onto) if:',
      options: [
        'Every element of $A$ maps to a unique element of $B$',
        'The function is invertible',
        '$|A| = |B|$',
        'For every $b \\in B$, there exists $a \\in A$ such that $f(a) = b$'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A function is surjective if every element in the codomain $B$ is the image of at least one element from the domain $A$. This means the range equals the codomain.'
    },
    {
      id: 's04-e07',
      type: 'multiple-choice',
      question: 'The function $f: \\mathbb{R} \\to \\mathbb{R}$ defined by $f(x) = x^3$ is:',
      options: [
        'Bijective',
        'Injective but not surjective',
        'Surjective but not injective',
        'Neither injective nor surjective'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: '$f(x) = x^3$ is strictly increasing (hence injective), and for any $y \\in \\mathbb{R}$, we have $f(\\sqrt[3]{y}) = y$ (hence surjective). Therefore, it is bijective.'
    },
    {
      id: 's04-e08',
      type: 'multiple-choice',
      question: 'If $f: A \\to B$ and $g: B \\to C$, the composition $g \\circ f$ is a function from:',
      options: [
        '$C$ to $A$',
        '$A$ to $C$',
        '$B$ to $A$',
        '$A$ to $B$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The composition $g \\circ f$ means "apply $f$ first, then $g$." Since $f$ takes elements from $A$ to $B$, and $g$ takes elements from $B$ to $C$, the composition takes elements from $A$ to $C$.'
    },
    {
      id: 's04-e09',
      type: 'multiple-choice',
      question: 'For $f(x) = 2x$ and $g(x) = x + 3$, what is $(g \\circ f)(x)$?',
      options: [
        '$2x + 6$',
        '$2(x + 3)$',
        '$2x + 3$',
        '$x + 6$'
    ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: '$(g \\circ f)(x) = g(f(x)) = g(2x) = 2x + 3$. We first apply $f$ to get $2x$, then apply $g$ to add 3.'
    },
    {
      id: 's04-e10',
      type: 'multiple-choice',
      question: 'A relation $R$ on a set $A$ is reflexive if:',
      options: [
        '$(a, b) \\in R$ implies $(b, a) \\in R$',
        '$(a, b), (b, c) \\in R$ implies $(a, c) \\in R$',
        '$R$ contains exactly one pair for each element',
        '$(a, a) \\in R$ for all $a \\in A$'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'A relation is reflexive if every element is related to itself. Formally, for all $a \\in A$, we have $(a, a) \\in R$ or equivalently $aRa$.'
    },
    {
      id: 's04-e11',
      type: 'multiple-choice',
      question: 'A relation $R$ on a set $A$ is symmetric if:',
      options: [
        '$(a, b) \\in R$ implies $(b, a) \\in R$',
        '$(a, a) \\in R$ for all $a \\in A$',
        '$(a, b), (b, c) \\in R$ implies $(a, c) \\in R$',
        '$(a, b) \\in R$ and $(b, a) \\in R$ implies $a = b$'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'A relation is symmetric if whenever $a$ is related to $b$, then $b$ is also related to $a$. Formally, $(a, b) \\in R \\Rightarrow (b, a) \\in R$.'
    },
    {
      id: 's04-e12',
      type: 'multiple-choice',
      question: 'A relation $R$ on a set $A$ is transitive if:',
      options: [
        '$(a, a) \\in R$ for all $a \\in A$',
        '$(a, b), (b, c) \\in R$ implies $(a, c) \\in R$',
        '$(a, b) \\in R$ implies $(b, a) \\in R$',
        '$(a, b) \\in R$ or $(b, a) \\in R$ for all $a, b$'
    ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'A relation is transitive if the relation "chains together": if $a$ is related to $b$ and $b$ is related to $c$, then $a$ is related to $c$.'
    },
    {
      id: 's04-e13',
      type: 'multiple-choice',
      question: 'An equivalence relation must be:',
      options: [
        'Reflexive and symmetric only',
        'Symmetric and transitive only',
        'Reflexive, symmetric, and transitive',
        'Reflexive and transitive only'
      ],
      correctIndex: 2,
      difficulty: 'easy',
      explanation: 'An equivalence relation must satisfy all three properties: reflexive (every element related to itself), symmetric (if $aRb$ then $bRa$), and transitive (if $aRb$ and $bRc$ then $aRc$).'
    },
    {
      id: 's04-e14',
      type: 'multiple-choice',
      question: 'The inverse of the function $f(x) = 3x + 5$ is:',
      options: [
        '$f^{-1}(x) = \\frac{x + 5}{3}$',
        '$f^{-1}(x) = 3x - 5$',
        '$f^{-1}(x) = \\frac{1}{3x + 5}$',
        '$f^{-1}(x) = \\frac{x - 5}{3}$'
    ],
      correctIndex: 3,
      difficulty: 'easy',
      explanation: 'To find the inverse, solve $y = 3x + 5$ for $x$: $x = \\frac{y - 5}{3}$. Therefore, $f^{-1}(x) = \\frac{x - 5}{3}$.'
    },
    {
      id: 's04-e15',
      type: 'multiple-choice',
      question: 'Which of the following is an example of an equivalence relation on $\\mathbb{Z}$?',
      options: [
        '$a \\equiv b \\pmod{n}$ for fixed $n$',
        '$a < b$',
        '$a \\leq b$',
        '$a \\mid b$ (a divides b)'
    ],
      correctIndex: 0,
      difficulty: 'easy',
      explanation: 'Congruence modulo $n$ is reflexive ($a \\equiv a$), symmetric (if $a \\equiv b$ then $b \\equiv a$), and transitive (if $a \\equiv b$ and $b \\equiv c$ then $a \\equiv c$).'
    },
    {
      id: 's04-e16',
      type: 'numeric',
      question: 'If $f(x) = 2x + 1$ and $g(x) = x^2$, what is $(f \\circ g)(3)$?',
      correctAnswer: 19,
      difficulty: 'easy',
      explanation: '$(f \\circ g)(3) = f(g(3)) = f(3^2) = f(9) = 2(9) + 1 = 19$.'
    },
    {
      id: 's04-e17',
      type: 'numeric',
      question: 'If $f(x) = 3x - 2$, what is $f^{-1}(7)$?',
      correctAnswer: 3,
      difficulty: 'easy',
      explanation: 'First find $f^{-1}(x) = \\frac{x + 2}{3}$. Then $f^{-1}(7) = \\frac{7 + 2}{3} = \\frac{9}{3} = 3$.'
    },
    {
      id: 's04-e18',
      type: 'numeric',
      question: 'For the function $f: \\{1, 2, 3, 4\\} \\to \\{a, b, c\\}$, what is the maximum number of elements in the range?',
      correctAnswer: 3,
      difficulty: 'easy',
      explanation: 'The range is a subset of the codomain $\\{a, b, c\\}$, which has 3 elements. So the range can have at most 3 elements.'
    },
    {
      id: 's04-e19',
      type: 'multiple-choice',
      question: 'The identity function $\\text{id}_A: A \\to A$ is defined by:',
      options: [
        '$\\text{id}_A(x) = 0$ for all $x$',
        '$\\text{id}_A(x) = x$ for all $x \\in A$',
        '$\\text{id}_A(x) = 1$ for all $x$',
        '$\\text{id}_A(x) = -x$ for all $x$'
      ],
      correctIndex: 1,
      difficulty: 'easy',
      explanation: 'The identity function maps every element to itself: $\\text{id}_A(x) = x$ for all $x \\in A$. It is the unique function such that $f \\circ \\text{id}_A = f$ and $\\text{id}_A \\circ f = f$ for any compatible function $f$.'
    },
    {
      id: 's04-e20',
      type: 'numeric',
      question: 'How many functions are there from a set with 2 elements to a set with 3 elements?',
      correctAnswer: 9,
      difficulty: 'easy',
      explanation: 'If $|A| = 2$ and $|B| = 3$, the number of functions from $A$ to $B$ is $|B|^{|A|} = 3^2 = 9$. Each of the 2 elements in $A$ can map to any of the 3 elements in $B$.'
    }
  ] as QuizQuestion[],

  medium: [
    {
      id: 's04-m01',
      type: 'multiple-choice',
      question: 'Prove that $f(x) = \\frac{x}{1+|x|}$ is injective on $\\mathbb{R}$. The key observation is:',
      options: [
        '$f$ has a unique fixed point',
        '$f$ is bounded',
        '$f$ is strictly increasing on $\\mathbb{R}$',
        '$f$ is continuous'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The function $f(x) = \\frac{x}{1+|x|}$ is strictly increasing: for $x > 0$, $f\'(x) = \\frac{1}{(1+x)^2} > 0$, and similarly for $x < 0$. A strictly monotonic function is always injective.'
    },
    {
      id: 's04-m02',
      type: 'multiple-choice',
      question: 'The function $f: \\mathbb{R} \\to (0, 1)$ defined by $f(x) = \\frac{1}{1 + e^{-x}}$ is:',
      options: [
        'Injective but not surjective',
        'Surjective but not injective',
        'Neither injective nor surjective',
        'Bijective'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'This is the logistic function. It is strictly increasing (hence injective), and as $x \\to -\\infty$, $f(x) \\to 0$, and as $x \\to \\infty$, $f(x) \\to 1$. By the intermediate value theorem, every value in $(0, 1)$ is achieved, so it is surjective onto $(0, 1)$.'
    },
    {
      id: 's04-m03',
      type: 'multiple-choice',
      question: 'If $f$ and $g$ are both injective, then $g \\circ f$ is:',
      options: [
        'Always injective',
        'Always surjective',
        'Always bijective',
        'Not necessarily injective'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Suppose $(g \\circ f)(a_1) = (g \\circ f)(a_2)$. Then $g(f(a_1)) = g(f(a_2))$. Since $g$ is injective, $f(a_1) = f(a_2)$. Since $f$ is injective, $a_1 = a_2$. Therefore $g \\circ f$ is injective.'
    },
    {
      id: 's04-m04',
      type: 'multiple-choice',
      question: 'If $f$ and $g$ are both surjective, then $g \\circ f$ is:',
      options: [
        'Always injective',
        'Always surjective',
        'Always bijective',
        'Not necessarily surjective'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Let $c \\in C$ (the codomain of $g$). Since $g$ is surjective, there exists $b \\in B$ with $g(b) = c$. Since $f$ is surjective, there exists $a \\in A$ with $f(a) = b$. Then $(g \\circ f)(a) = g(f(a)) = g(b) = c$. So $g \\circ f$ is surjective.'
    },
    {
      id: 's04-m05',
      type: 'multiple-choice',
      question: 'If $g \\circ f$ is injective, which of the following must be true?',
      options: [
        '$g$ must be injective',
        'Both $f$ and $g$ must be injective',
        '$f$ must be injective',
        '$f$ must be surjective'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'If $f(a_1) = f(a_2)$, then $g(f(a_1)) = g(f(a_2))$, so $(g \\circ f)(a_1) = (g \\circ f)(a_2)$. Since $g \\circ f$ is injective, $a_1 = a_2$. Thus $f$ is injective. Note: $g$ need not be injective on all of its domain, only on the range of $f$.'
    },
    {
      id: 's04-m06',
      type: 'multiple-choice',
      question: 'If $g \\circ f$ is surjective, which of the following must be true?',
      options: [
        '$f$ must be surjective',
        'Both $f$ and $g$ must be surjective',
        '$f$ must be injective',
        '$g$ must be surjective'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'For any $c$ in the codomain of $g$, since $g \\circ f$ is surjective, there exists $a$ with $(g \\circ f)(a) = c$, i.e., $g(f(a)) = c$. So every $c$ is in the range of $g$, meaning $g$ is surjective. Note: $f$ need not be surjective.'
    },
    {
      id: 's04-m07',
      type: 'multiple-choice',
      question: 'The inverse of a bijection $f: A \\to B$ satisfies:',
      options: [
        '$f^{-1} \\circ f = \\text{id}_A$ and $f \\circ f^{-1} = \\text{id}_B$',
        '$f \\circ f^{-1} = \\text{id}_A$ only',
        '$f^{-1}(f(x)) = x$ for some $x \\in A$',
        '$f^{-1}$ exists only when $f$ is injective'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'For a bijection $f: A \\to B$, the inverse $f^{-1}: B \\to A$ satisfies both $(f^{-1} \\circ f)(a) = a$ for all $a \\in A$ (i.e., $f^{-1} \\circ f = \\text{id}_A$) and $(f \\circ f^{-1})(b) = b$ for all $b \\in B$ (i.e., $f \\circ f^{-1} = \\text{id}_B$).'
    },
    {
      id: 's04-m08',
      type: 'multiple-choice',
      question: 'Find the inverse of $f(x) = \\frac{2x+1}{x-3}$ for $x \\neq 3$:',
      options: [
        '$f^{-1}(x) = \\frac{3x-1}{x+2}$',
        '$f^{-1}(x) = \\frac{3x+1}{x-2}$',
        '$f^{-1}(x) = \\frac{x-3}{2x+1}$',
        '$f^{-1}(x) = \\frac{3x+1}{x+2}$'
    ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'Set $y = \\frac{2x+1}{x-3}$. Then $y(x-3) = 2x+1$, so $yx - 3y = 2x + 1$, giving $x(y-2) = 3y + 1$, hence $x = \\frac{3y+1}{y-2}$. Therefore $f^{-1}(x) = \\frac{3x+1}{x-2}$.'
    },
    {
      id: 's04-m09',
      type: 'multiple-choice',
      question: 'For the equivalence relation "congruence modulo 3" on $\\mathbb{Z}$, how many equivalence classes are there?',
      options: [
        '1',
        '2',
        '3',
        'Infinitely many'
      ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'The equivalence classes are $[0] = \\{..., -6, -3, 0, 3, 6, ...\\}$, $[1] = \\{..., -5, -2, 1, 4, 7, ...\\}$, and $[2] = \\{..., -4, -1, 2, 5, 8, ...\\}$. Every integer belongs to exactly one of these three classes.'
    },
    {
      id: 's04-m10',
      type: 'multiple-choice',
      question: 'If $R$ is an equivalence relation on a set $A$, then the equivalence classes:',
      options: [
        'May overlap (share elements)',
        'Are always finite',
        'Always have the same cardinality',
        'Partition $A$ into disjoint non-empty subsets'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Equivalence classes form a partition of $A$: every element belongs to exactly one equivalence class (its own class $[a]$), and two classes are either identical or disjoint.'
    },
    {
      id: 's04-m11',
      type: 'multiple-choice',
      question: 'The relation $R$ on $\\mathbb{R}^2$ defined by $(a, b) R (c, d)$ iff $a^2 + b^2 = c^2 + d^2$ is:',
      options: [
        'An equivalence relation',
        'Reflexive and symmetric but not transitive',
        'Symmetric and transitive but not reflexive',
        'Only reflexive'
    ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Reflexive: $a^2 + b^2 = a^2 + b^2$. Symmetric: if $a^2 + b^2 = c^2 + d^2$, then $c^2 + d^2 = a^2 + b^2$. Transitive: if $a^2 + b^2 = c^2 + d^2$ and $c^2 + d^2 = e^2 + f^2$, then $a^2 + b^2 = e^2 + f^2$. The equivalence classes are circles centered at the origin.'
    },
    {
      id: 's04-m12',
      type: 'multiple-choice',
      question: 'For a function $f: A \\to B$ to have a left inverse $g: B \\to A$ (i.e., $g \\circ f = \\text{id}_A$), $f$ must be:',
      options: [
        'Surjective',
        'Injective',
        'Bijective',
        'Continuous'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'If $g \\circ f = \\text{id}_A$ and $f(a_1) = f(a_2)$, then $a_1 = g(f(a_1)) = g(f(a_2)) = a_2$. So $f$ must be injective. Conversely, if $f$ is injective, a left inverse can always be constructed (assuming the axiom of choice for infinite sets).'
    },
    {
      id: 's04-m13',
      type: 'multiple-choice',
      question: 'For a function $f: A \\to B$ to have a right inverse $h: B \\to A$ (i.e., $f \\circ h = \\text{id}_B$), $f$ must be:',
      options: [
        'Injective',
        'Bijective',
        'Surjective',
        'Monotonic'
    ],
      correctIndex: 2,
      difficulty: 'medium',
      explanation: 'If $f \\circ h = \\text{id}_B$, then for any $b \\in B$, we have $f(h(b)) = b$, so $b$ is in the range of $f$. Thus $f$ is surjective. Conversely, if $f$ is surjective, a right inverse can be constructed by choosing one preimage for each element of $B$.'
    },
    {
      id: 's04-m14',
      type: 'multiple-choice',
      question: 'The function $f: \\mathbb{Z} \\to \\mathbb{Z}$ defined by $f(n) = n + 1$ is:',
      options: [
        'Injective but not surjective',
        'Surjective but not injective',
        'Neither injective nor surjective',
        'Bijective'
    ],
      correctIndex: 3,
      difficulty: 'medium',
      explanation: 'Injective: if $n + 1 = m + 1$, then $n = m$. Surjective: for any $k \\in \\mathbb{Z}$, we have $f(k-1) = k$. Thus $f$ is bijective with inverse $f^{-1}(n) = n - 1$.'
    },
    {
      id: 's04-m15',
      type: 'multiple-choice',
      question: 'The function $f: \\mathbb{N} \\to \\mathbb{N}$ defined by $f(n) = n + 1$ is:',
      options: [
        'Injective but not surjective',
        'Surjective but not injective',
        'Bijective',
        'Neither injective nor surjective'
      ],
      correctIndex: 0,
      difficulty: 'medium',
      explanation: 'Injective: if $n + 1 = m + 1$, then $n = m$. Not surjective: $1 \\in \\mathbb{N}$ (if $\\mathbb{N} = \\{1, 2, 3, ...\\}$) has no preimage since $f(n) = n + 1 \\geq 2$ for all $n \\in \\mathbb{N}$.'
    },
    {
      id: 's04-m16',
      type: 'numeric',
      question: 'If $f(x) = x^2 - 4x + 3$ and $g(x) = 2x + 1$, what is $(f \\circ g)(1)$?',
      correctAnswer: 0,
      difficulty: 'medium',
      explanation: '$(f \\circ g)(1) = f(g(1)) = f(2 \\cdot 1 + 1) = f(3) = 3^2 - 4(3) + 3 = 9 - 12 + 3 = 0$.'
    },
    {
      id: 's04-m17',
      type: 'numeric',
      question: 'How many bijections are there from a set of 4 elements to itself?',
      correctAnswer: 24,
      difficulty: 'medium',
      explanation: 'A bijection from a set to itself is a permutation. The number of permutations of 4 elements is $4! = 4 \\times 3 \\times 2 \\times 1 = 24$.'
    },
    {
      id: 's04-m18',
      type: 'numeric',
      question: 'How many injective functions are there from a set of 3 elements to a set of 5 elements?',
      correctAnswer: 60,
      difficulty: 'medium',
      explanation: 'For an injective function, the first element has 5 choices, the second has 4 remaining choices, and the third has 3. Total: $5 \\times 4 \\times 3 = 60$.'
    },
    {
      id: 's04-m19',
      type: 'numeric',
      question: 'If $f^{-1}(x) = \\frac{x-1}{2}$, what is $f(3)$?',
      correctAnswer: 7,
      difficulty: 'medium',
      explanation: 'If $f^{-1}(x) = \\frac{x-1}{2}$, then $f(x) = 2x + 1$. Therefore, $f(3) = 2(3) + 1 = 7$. Alternatively, $f(3) = y$ means $f^{-1}(y) = 3$, so $\\frac{y-1}{2} = 3$, giving $y = 7$.'
    },
    {
      id: 's04-m20',
      type: 'multiple-choice',
      question: 'Let $f: A \\to B$ be a function. The preimage (inverse image) of a set $S \\subseteq B$ is defined as:',
      options: [
        '$f^{-1}(S) = \\{f(a) : a \\in A, f(a) \\in S\\}$',
        '$f^{-1}(S) = \\{a \\in A : f(a) \\in S\\}$',
        '$f^{-1}(S) = \\{b \\in B : b \\in S\\}$',
        '$f^{-1}(S) = \\{a \\in A : a \\in S\\}$'
      ],
      correctIndex: 1,
      difficulty: 'medium',
      explanation: 'The preimage of $S$ under $f$ is the set of all elements in $A$ that map into $S$. This is well-defined even when $f$ is not invertible.'
    }
  ] as QuizQuestion[],

  hard: [
    {
      id: 's04-h01',
      type: 'multiple-choice',
      question: 'Let $f: A \\to B$ and $g: B \\to C$ be functions. If $g \\circ f$ is bijective, which statement is TRUE?',
      options: [
        'Both $f$ and $g$ must be bijective',
        '$f$ is surjective and $g$ is injective',
        '$f$ is injective and $g$ is surjective',
        'Neither $f$ nor $g$ needs to be bijective'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'Since $g \\circ f$ is bijective, it is injective and surjective. $g \\circ f$ injective implies $f$ is injective (proved earlier). $g \\circ f$ surjective implies $g$ is surjective (proved earlier). However, $f$ need not be surjective and $g$ need not be injective.'
    },
    {
      id: 's04-h02',
      type: 'multiple-choice',
      question: 'Prove or disprove: If $f: \\mathbb{R} \\to \\mathbb{R}$ satisfies $f(f(x)) = x$ for all $x$, then $f$ is bijective.',
      options: [
        'False: $f$ could be the zero function',
        'True: only if $f$ is continuous',
        'False: $f$ could be neither injective nor surjective',
        'True: $f \\circ f = \\text{id}$ implies $f$ is its own inverse, hence bijective'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'If $f(f(x)) = x$, then $f$ is its own inverse: $f^{-1} = f$. This means $f \\circ f = \\text{id}$, so $f$ has both a left and right inverse (namely, itself). A function with a left inverse is injective, and one with a right inverse is surjective. Thus $f$ is bijective.'
    },
    {
      id: 's04-h03',
      type: 'multiple-choice',
      question: 'Let $f: A \\to B$ and $g: B \\to A$ satisfy $g \\circ f = \\text{id}_A$. If $|A| = |B|$ and both are finite, then:',
      options: [
        '$f$ is bijective and $g = f^{-1}$',
        '$f$ is injective but $g$ is not necessarily $f^{-1}$',
        '$g$ is bijective but $f$ may not be',
        '$f$ is surjective but not necessarily injective'
      ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'We know $f$ is injective (from having a left inverse). For finite sets of equal cardinality, an injection is also a surjection (pigeonhole principle). So $f$ is bijective. Then $g \\circ f = \\text{id}_A$ and $f$ bijective implies $g = f^{-1}$.'
    },
    {
      id: 's04-h04',
      type: 'multiple-choice',
      question: 'Define $f: \\mathcal{P}(\\mathbb{N}) \\to \\mathcal{P}(\\mathbb{N})$ by $f(S) = \\mathbb{N} \\setminus S$ (complement). This function is:',
      options: [
        'Injective but not surjective',
        'Bijective with $f^{-1} = f$',
        'Surjective but not injective',
        'Neither injective nor surjective'
    ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Injective: if $\\mathbb{N} \\setminus S = \\mathbb{N} \\setminus T$, then $S = T$. Surjective: for any $T \\in \\mathcal{P}(\\mathbb{N})$, we have $f(\\mathbb{N} \\setminus T) = \\mathbb{N} \\setminus (\\mathbb{N} \\setminus T) = T$. Also, $f(f(S)) = S$, so $f^{-1} = f$ (involution).'
    },
    {
      id: 's04-h05',
      type: 'multiple-choice',
      question: 'Let $\\sim$ be an equivalence relation on $A$. The quotient set $A/\\sim$ is:',
      options: [
        'The set of all pairs $(a, b)$ with $a \\sim b$',
        'A subset of $A$ containing one element from each class',
        'The set of all equivalence classes $[a]$ for $a \\in A$',
        'The relation $\\sim$ itself'
    ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The quotient set $A/\\sim$ is the set of all equivalence classes. Each element of $A/\\sim$ is itself a set (an equivalence class $[a] = \\{b \\in A : b \\sim a\\}$). The quotient set partitions $A$.'
    },
    {
      id: 's04-h06',
      type: 'multiple-choice',
      question: 'The canonical projection $\\pi: A \\to A/\\sim$ defined by $\\pi(a) = [a]$ is:',
      options: [
        'Always injective',
        'Always surjective but rarely injective',
        'Bijective if and only if $\\sim$ is equality',
        'Both B and C'
      ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: '$\\pi$ is always surjective: every class $[a]$ is $\\pi(a)$. $\\pi$ is injective iff $[a] = [b]$ implies $a = b$, which happens iff the only equivalence class of size 1 is $\\{a\\}$, i.e., iff $\\sim$ is equality. So both B and C are correct.'
    },
    {
      id: 's04-h07',
      type: 'multiple-choice',
      question: 'A function $f: A \\to B$ induces an equivalence relation on $A$ defined by $a_1 \\sim a_2$ iff:',
      options: [
        '$f(a_1) = f(a_2)$',
        '$f(a_1) \\neq f(a_2)$',
        '$a_1$ and $a_2$ are in the same subset of a partition',
        '$f(a_1)$ and $f(a_2)$ are both in the range of $f$'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Define $a_1 \\sim a_2$ iff $f(a_1) = f(a_2)$. This is reflexive ($f(a) = f(a)$), symmetric, and transitive (by transitivity of equality). The equivalence classes are the fibers $f^{-1}(\\{b\\})$ for $b$ in the range of $f$.'
    },
    {
      id: 's04-h08',
      type: 'multiple-choice',
      question: 'The First Isomorphism Theorem for sets states: if $f: A \\to B$, then there is a bijection between:',
      options: [
        '$A$ and $B$',
        '$A/\\ker(f)$ and $\\text{Im}(f)$, where $\\ker(f)$ is the equivalence relation induced by $f$',
        '$A$ and $A/\\ker(f)$',
        '$\\ker(f)$ and $\\text{Im}(f)$'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Define $\\ker(f) = \\{(a_1, a_2) : f(a_1) = f(a_2)\\}$, the equivalence relation induced by $f$. The map $\\bar{f}: A/\\ker(f) \\to \\text{Im}(f)$ defined by $\\bar{f}([a]) = f(a)$ is a well-defined bijection. This is the set-theoretic analog of the First Isomorphism Theorem.'
    },
    {
      id: 's04-h09',
      type: 'multiple-choice',
      question: 'Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) = x^3 - x$. The induced equivalence relation has how many elements in the class $[0]$?',
      options: [
        '1',
        '2',
        '3',
        'Infinitely many'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'The class $[0]$ consists of all $x$ with $f(x) = f(0) = 0$. Solving $x^3 - x = 0$: $x(x^2 - 1) = x(x-1)(x+1) = 0$, giving $x \\in \\{-1, 0, 1\\}$. So $[0] = \\{-1, 0, 1\\}$ has 3 elements.'
    },
    {
      id: 's04-h10',
      type: 'multiple-choice',
      question: 'Cantor-Bernstein Theorem: If there exist injections $f: A \\to B$ and $g: B \\to A$, then:',
      options: [
        'There exists a surjection from $A$ to $B$',
        '$A$ and $B$ must be finite',
        '$f$ or $g$ must be bijective',
        'There exists a bijection between $A$ and $B$'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'The Cantor-Bernstein (or Schröder-Bernstein) theorem states that if there are injections in both directions between sets $A$ and $B$, then there exists a bijection between them. This is a fundamental result in set theory that does not require the Axiom of Choice.'
    },
    {
      id: 's04-h11',
      type: 'multiple-choice',
      question: 'Consider the relation $R$ on $\\mathbb{R}$ where $xRy$ iff $x - y \\in \\mathbb{Q}$. The equivalence class $[\\sqrt{2}]$ is:',
      options: [
        '$\\{\\sqrt{2} + q : q \\in \\mathbb{Q}\\}$',
        '$\\{\\sqrt{2}\\}$',
        '$\\mathbb{Q}$',
        '$\\mathbb{R}$'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: '$[\\sqrt{2}] = \\{x \\in \\mathbb{R} : x - \\sqrt{2} \\in \\mathbb{Q}\\} = \\{x : x = \\sqrt{2} + q \\text{ for some } q \\in \\mathbb{Q}\\}$. This is the "rational translates" of $\\sqrt{2}$, a countable set that is dense in $\\mathbb{R}$.'
    },
    {
      id: 's04-h12',
      type: 'multiple-choice',
      question: 'For the equivalence relation in the previous question, how many equivalence classes are there?',
      options: [
        'Countably many',
        'Uncountably many',
        'Finitely many',
        'Exactly $|\\mathbb{R}|$ many'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Each equivalence class is countable (a translate of $\\mathbb{Q}$). If there were only countably many classes, $\\mathbb{R}$ would be a countable union of countable sets, hence countable. But $\\mathbb{R}$ is uncountable, so there must be uncountably many classes.'
    },
    {
      id: 's04-h13',
      type: 'multiple-choice',
      question: 'A function $f: A \\to B$ is a bijection iff it has:',
      options: [
        'A left inverse only',
        'A right inverse only',
        'Both a left and right inverse (which must be equal)',
        'Any inverse (left or right)'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: 'If $g$ is a left inverse ($g \\circ f = \\text{id}_A$) and $h$ is a right inverse ($f \\circ h = \\text{id}_B$), then $g = g \\circ \\text{id}_B = g \\circ (f \\circ h) = (g \\circ f) \\circ h = \\text{id}_A \\circ h = h$. So left and right inverses are equal, and $f$ is bijective with inverse $g = h$.'
    },
    {
      id: 's04-h14',
      type: 'multiple-choice',
      question: 'Let $f: \\mathbb{R} \\to \\mathbb{R}^2$ be defined by $f(t) = (\\cos t, \\sin t)$. This function is:',
      options: [
        'Injective',
        'Surjective',
        'Bijective',
        'Neither injective nor surjective'
    ],
      correctIndex: 3,
      difficulty: 'hard',
      explanation: 'Not injective: $f(0) = f(2\\pi) = (1, 0)$ but $0 \\neq 2\\pi$. Not surjective: the range is the unit circle $\\{(x, y) : x^2 + y^2 = 1\\}$, not all of $\\mathbb{R}^2$. For example, $(0, 0) \\notin \\text{range}(f)$.'
    },
    {
      id: 's04-h15',
      type: 'multiple-choice',
      question: 'The function $f: [0, 2\\pi) \\to S^1$ (unit circle) defined by $f(t) = (\\cos t, \\sin t)$ is:',
      options: [
        'Bijective',
        'Injective but not surjective',
        'Surjective but not injective',
        'Neither injective nor surjective'
    ],
      correctIndex: 0,
      difficulty: 'hard',
      explanation: 'Injective: on $[0, 2\\pi)$, different angles give different points on the circle. Surjective: every point on $S^1$ can be written as $(\\cos t, \\sin t)$ for some $t \\in [0, 2\\pi)$. Thus $f$ is bijective.'
    },
    {
      id: 's04-h16',
      type: 'multiple-choice',
      question: 'For functions $f, g, h: A \\to A$, composition is:',
      options: [
        'Commutative: $f \\circ g = g \\circ f$',
        'Associative: $(f \\circ g) \\circ h = f \\circ (g \\circ h)$',
        'Both commutative and associative',
        'Neither commutative nor associative'
      ],
      correctIndex: 1,
      difficulty: 'hard',
      explanation: 'Associative: $((f \\circ g) \\circ h)(x) = (f \\circ g)(h(x)) = f(g(h(x)))$ and $(f \\circ (g \\circ h))(x) = f((g \\circ h)(x)) = f(g(h(x)))$. Not commutative: for $f(x) = x + 1$ and $g(x) = 2x$, $(f \\circ g)(x) = 2x + 1 \\neq 2x + 2 = (g \\circ f)(x)$.'
    },
    {
      id: 's04-h17',
      type: 'numeric',
      question: 'Let $f(x) = \\frac{x}{x+1}$ for $x > 0$. If $f^{-1}(a) = 2$, what is the value of $a$ (as a decimal)?',
      correctAnswer: 0.667,
      numericRange: { min: 0.66, max: 0.67, precision: 3 },
      difficulty: 'hard',
      explanation: 'If $f^{-1}(a) = 2$, then $f(2) = a$. So $a = \\frac{2}{2+1} = \\frac{2}{3} \\approx 0.667$.'
    },
    {
      id: 's04-h18',
      type: 'numeric',
      question: 'How many surjective functions are there from a set of 4 elements onto a set of 3 elements?',
      correctAnswer: 36,
      difficulty: 'hard',
      explanation: 'Using inclusion-exclusion, the number of surjections from an $n$-set to a $k$-set is $\\sum_{i=0}^{k} (-1)^i \\binom{k}{i}(k-i)^n$. Here: $\\binom{3}{0}3^4 - \\binom{3}{1}2^4 + \\binom{3}{2}1^4 = 81 - 48 + 3 = 36$.'
    },
    {
      id: 's04-h19',
      type: 'numeric',
      question: 'For the equivalence relation on $\\{1, 2, 3, 4, 5, 6\\}$ defined by $a \\sim b$ iff $a \\equiv b \\pmod{3}$, how many equivalence classes are there?',
      correctAnswer: 3,
      difficulty: 'hard',
      explanation: 'The equivalence classes are $[1] = \\{1, 4\\}$ (remainder 1), $[2] = \\{2, 5\\}$ (remainder 2), and $[3] = \\{3, 6\\}$ (remainder 0). There are 3 equivalence classes, corresponding to the three possible remainders when dividing by 3.'
    },
    {
      id: 's04-h20',
      type: 'multiple-choice',
      question: 'Let $f: A \\to B$ be a function. Define $f^{\\to}: \\mathcal{P}(A) \\to \\mathcal{P}(B)$ by $f^{\\to}(S) = \\{f(a) : a \\in S\\}$. If $f$ is surjective, then $f^{\\to}$ is:',
      options: [
        'Always injective',
        'Always surjective',
        'Surjective but not necessarily injective',
        'Neither injective nor surjective in general'
      ],
      correctIndex: 2,
      difficulty: 'hard',
      explanation: '$f^{\\to}$ is surjective: for any $T \\subseteq B$, let $S = f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}$. Since $f$ is surjective, $f^{\\to}(S) = T$. But $f^{\\to}$ is not injective in general: if $f$ is not injective, we can have $f^{\\to}(S_1) = f^{\\to}(S_2)$ for $S_1 \\neq S_2$.'
    }
  ] as QuizQuestion[],
};
