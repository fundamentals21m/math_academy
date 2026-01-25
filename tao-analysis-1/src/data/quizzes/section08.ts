import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a function $f: A \\to B$ and a subset $S \\subseteq A$, the image $f(S)$ is defined as:',
    options: [
      '$\\{a \\in A : f(a) \\in S\\}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The image $f(S) = \\{f(a) : a \\in S\\}$ is the set of all outputs obtained from inputs in $S$.',
  },
      '$\\{(a, f(a)) : a \\in S\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The image $f(S) = \\{f(a) : a \\in S\\}$ is the set of all outputs obtained from inputs in $S$.',
  },
      '$S \\cap B
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The image $f(S) = \\{f(a) : a \\in S\\}$ is the set of all outputs obtained from inputs in $S$.',
  },
      '$\\{b \\in B : b = f(a) \\text{ for some } a \\in S\\}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The image $f(S) = \\{f(a) : a \\in S\\}$ is the set of all outputs obtained from inputs in $S$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The image $f(S) = \\{f(a) : a \\in S\\}$ is the set of all outputs obtained from inputs in $S$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a function $f: A \\to B$ and a subset $T \\subseteq B$, the inverse image (preimage) $f^{-1}(T)$ is:',
    options: [
      'The inverse function applied to $T
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The preimage $f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}$ consists of all inputs that map into $T$. This is defined even when $f$ has no inverse function.',
  },
      '$\\{f(a) : a \\in T\\}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The preimage $f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}$ consists of all inputs that map into $T$. This is defined even when $f$ has no inverse function.',
  },
      '$\\{a \\in A : f(a) \\in T\\}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The preimage $f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}$ consists of all inputs that map into $T$. This is defined even when $f$ has no inverse function.',
  },
      '$T \\cap A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The preimage $f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}$ consists of all inputs that map into $T$. This is defined even when $f$ has no inverse function.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The preimage $f^{-1}(T) = \\{a \\in A : f(a) \\in T\\}$ consists of all inputs that map into $T$. This is defined even when $f$ has no inverse function.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For any function $f: A \\to B$ and subsets $S, T \\subseteq B$, which equality always holds?',
    options: [
      '$f^{-1}(S \\cup T) = f^{-1}(S) \\cup f^{-1}(T)$',
      '$f(S \\cup T) = f(S) \\cap f(T)$',
      '$f^{-1}(S) = f(S)$',
      '$f^{-1}(S \\cap T) = f^{-1}(S) \\cup f^{-1}(T)$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Inverse images preserve unions: $f^{-1}(S \\cup T) = f^{-1}(S) \\cup f^{-1}(T)$. They also preserve intersections, complements, and set differences.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a function $f: A \\to B$ and subsets $S_1, S_2 \\subseteq A$, which statement is always true?',
    options: [
      '$f(S_1 \\cap S_2) = f(S_1) \\cap f(S_2)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Images preserve unions but only partially preserve intersections: $f(S_1 \\cap S_2) \\subseteq f(S_1) \\cap f(S_2)$, with equality when $f$ is injective.',
  },
      '$f(S_1) \\cap f(S_2) \\subseteq f(S_1 \\cap S_2)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Images preserve unions but only partially preserve intersections: $f(S_1 \\cap S_2) \\subseteq f(S_1) \\cap f(S_2)$, with equality when $f$ is injective.',
  },
      '$f(S_1 \\cap S_2) \\subseteq f(S_1) \\cap f(S_2)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Images preserve unions but only partially preserve intersections: $f(S_1 \\cap S_2) \\subseteq f(S_1) \\cap f(S_2)$, with equality when $f$ is injective.',
  },
      '$f(S_1 \\cup S_2) \\subseteq f(S_1) \\cup f(S_2)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Images preserve unions but only partially preserve intersections: $f(S_1 \\cap S_2) \\subseteq f(S_1) \\cap f(S_2)$, with equality when $f$ is injective.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Images preserve unions but only partially preserve intersections: $f(S_1 \\cap S_2) \\subseteq f(S_1) \\cap f(S_2)$, with equality when $f$ is injective.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f: A \\to B$ and $S \\subseteq A$, then $S \\subseteq f^{-1}(f(S))$. When is equality $S = f^{-1}(f(S))$ guaranteed?',
    options: [
      'When $f$ is surjective',
      'When $f$ is injective',
      'When $A = B
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If $f$ is injective, no element outside $S$ can map to $f(S)$, so $f^{-1}(f(S)) = S$. Without injectivity, other elements may also map into $f(S)$.',
  },
      'Always',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If $f$ is injective, no element outside $S$ can map to $f(S)$, so $f^{-1}(f(S)) = S$. Without injectivity, other elements may also map into $f(S)$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Let $f: \\{1,2,3,4\\} \\to \\{a,b,c\\}$ with $f(1)=a, f(2)=b, f(3)=b, f(4)=c$. How many elements are in $f^{-1}(\\{b\\})$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$f^{-1}(\\{b\\}) = \\{x : f(x) = b\\} = \\{2, 3\\}$, which has $2$ elements.',
  },
];
