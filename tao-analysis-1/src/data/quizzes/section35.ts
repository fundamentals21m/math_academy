import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Cantor\'s diagonal argument proves that:',
    options: [
      'The integers are countable',
      'The real numbers are uncountable',
      'The rationals are countable',
      'Every infinite set is countable',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Cantor\'s diagonal argument shows that no enumeration of real numbers can be complete. Given any list, we can construct a real number not in the list, proving $\\mathbb{R}$ is uncountable.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Cantor\'s diagonal argument, given a list of reals $r_1, r_2, r_3, \\ldots$ with decimal expansions, we construct a new real by:',
    options: [
      'Reversing the decimal expansion of $r_1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The diagonal argument constructs a real $r$ where the $n$-th decimal digit differs from the $n$-th digit of $r_n$. This ensures $r \\neq r_n$ for all $n$.',
  },
      'Summing all the listed reals',
      'Choosing the $n$-th digit to differ from the $n$-th digit of $r_n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The diagonal argument constructs a real $r$ where the $n$-th decimal digit differs from the $n$-th digit of $r_n$. This ensures $r \\neq r_n$ for all $n$.',
  },
      'Taking the average of consecutive terms',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The diagonal argument constructs a real $r$ where the $n$-th decimal digit differs from the $n$-th digit of $r_n$. This ensures $r \\neq r_n$ for all $n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The interval $(0, 1)$ has the same cardinality as:',
    options: [
      '$\\mathbb{N}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The function $f(x) = \\tan(\\pi x - \\pi/2)$ is a bijection from $(0,1)$ to $\\mathbb{R}$. So $|(0,1)| = |\\mathbb{R}|$, both uncountable with cardinality $\\mathfrak{c}$.',
  },
      '$\\mathbb{Q}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The function $f(x) = \\tan(\\pi x - \\pi/2)$ is a bijection from $(0,1)$ to $\\mathbb{R}$. So $|(0,1)| = |\\mathbb{R}|$, both uncountable with cardinality $\\mathfrak{c}$.',
  },
      '$\\{0, 1\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The function $f(x) = \\tan(\\pi x - \\pi/2)$ is a bijection from $(0,1)$ to $\\mathbb{R}$. So $|(0,1)| = |\\mathbb{R}|$, both uncountable with cardinality $\\mathfrak{c}$.',
  },
      '$\\mathbb{R}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The function $f(x) = \\tan(\\pi x - \\pi/2)$ is a bijection from $(0,1)$ to $\\mathbb{R}$. So $|(0,1)| = |\\mathbb{R}|$, both uncountable with cardinality $\\mathfrak{c}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The function $f(x) = \\tan(\\pi x - \\pi/2)$ is a bijection from $(0,1)$ to $\\mathbb{R}$. So $|(0,1)| = |\\mathbb{R}|$, both uncountable with cardinality $\\mathfrak{c}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The power set $\\mathcal{P}(\\mathbb{N})$ (set of all subsets of $\\mathbb{N}$) is:',
    options: [
      'Countably infinite',
      'Finite',
      'Uncountable with cardinality $|\\mathbb{R}|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$|\\mathcal{P}(\\mathbb{N})| = 2^{\\aleph_0} = \\mathfrak{c} = |\\mathbb{R}|$. Each subset corresponds to a binary sequence, which can be mapped to a real in $[0,1]$.',
  },
      'Larger than $|\\mathbb{R}|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|\\mathcal{P}(\\mathbb{N})| = 2^{\\aleph_0} = \\mathfrak{c} = |\\mathbb{R}|$. Each subset corresponds to a binary sequence, which can be mapped to a real in $[0,1]$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$|\\mathcal{P}(\\mathbb{N})| = 2^{\\aleph_0} = \\mathfrak{c} = |\\mathbb{R}|$. Each subset corresponds to a binary sequence, which can be mapped to a real in $[0,1]$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Cantor\'s theorem states that for any set $A$:',
    options: [
      '$|A| > |\\mathcal{P}(A)|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cantor\'s theorem: the power set always has strictly greater cardinality. The proof uses a diagonal argument: consider $B = \\{x \\in A : x \\notin f(x)\\}$ for any $f: A \\to \\mathcal{P}(A)$.',
  },
      '$|A| = |\\mathcal{P}(A)|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cantor\'s theorem: the power set always has strictly greater cardinality. The proof uses a diagonal argument: consider $B = \\{x \\in A : x \\notin f(x)\\}$ for any $f: A \\to \\mathcal{P}(A)$.',
  },
      '$|\\mathcal{P}(A)| = 2|A|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cantor\'s theorem: the power set always has strictly greater cardinality. The proof uses a diagonal argument: consider $B = \\{x \\in A : x \\notin f(x)\\}$ for any $f: A \\to \\mathcal{P}(A)$.',
  },
      '$|A| < |\\mathcal{P}(A)|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cantor\'s theorem: the power set always has strictly greater cardinality. The proof uses a diagonal argument: consider $B = \\{x \\in A : x \\notin f(x)\\}$ for any $f: A \\to \\mathcal{P}(A)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cantor\'s theorem: the power set always has strictly greater cardinality. The proof uses a diagonal argument: consider $B = \\{x \\in A : x \\notin f(x)\\}$ for any $f: A \\to \\mathcal{P}(A)$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The set of all infinite binary sequences $\\{0, 1\\}^{\\mathbb{N}}$ is:',
    options: [
      'Empty',
      'Countably infinite',
      'Finite',
      'Uncountable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\{0,1\\}^{\\mathbb{N}}$ is in bijection with $\\mathcal{P}(\\mathbb{N})$ (via characteristic functions) and also with $[0,1]$ (via binary expansions). All have cardinality $\\mathfrak{c}$, which is uncountable.',
  },
];
