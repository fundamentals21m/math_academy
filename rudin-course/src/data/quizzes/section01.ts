import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 'sec01-q1',
    type: 'multiple-choice',
    question: 'Let $S$ be a nonempty subset of an ordered set. What is the definition of $\\sup S$?',
    options: [
      'The largest element of $S
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The supremum (least upper bound) $\\alpha = \\sup S$ is an upper bound with the property that no smaller element is also an upper bound. Equivalently, $\\alpha$ is an upper bound and for every $\\varepsilon > 0$, there exists $x \\in S$ with $x > \\alpha - \\varepsilon$.',
  },
      'Any upper bound of $S
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The supremum (least upper bound) $\\alpha = \\sup S$ is an upper bound with the property that no smaller element is also an upper bound. Equivalently, $\\alpha$ is an upper bound and for every $\\varepsilon > 0$, there exists $x \\in S$ with $x > \\alpha - \\varepsilon$.',
  },
      'An upper bound $\\alpha$ of $S$ such that $\\gamma < \\alpha$ implies $\\gamma$ is not an upper bound of $S
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The supremum (least upper bound) $\\alpha = \\sup S$ is an upper bound with the property that no smaller element is also an upper bound. Equivalently, $\\alpha$ is an upper bound and for every $\\varepsilon > 0$, there exists $x \\in S$ with $x > \\alpha - \\varepsilon$.',
  },
      'The average of all elements in $S
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The supremum (least upper bound) $\\alpha = \\sup S$ is an upper bound with the property that no smaller element is also an upper bound. Equivalently, $\\alpha$ is an upper bound and for every $\\varepsilon > 0$, there exists $x \\in S$ with $x > \\alpha - \\varepsilon$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The supremum (least upper bound) $\\alpha = \\sup S$ is an upper bound with the property that no smaller element is also an upper bound. Equivalently, $\\alpha$ is an upper bound and for every $\\varepsilon > 0$, there exists $x \\in S$ with $x > \\alpha - \\varepsilon$.',
  },
  {
    id: 'sec01-q2',
    type: 'multiple-choice',
    question: 'If $S = (0, 1) = \\{x \\in \\mathbb{R} : 0 < x < 1\\}$, what are $\\sup S$ and $\\inf S$?',
    options: [
      '$\\sup S = 1$, $\\inf S = 0$, and both belong to $S
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For the open interval $(0,1)$, the supremum is $1$ and the infimum is $0$. Neither endpoint belongs to the set, but they are still the least upper bound and greatest lower bound respectively.',
  },
      '$\\sup S$ and $\\inf S$ do not exist',
      '$\\sup S = 0.999...$, $\\inf S = 0.001
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For the open interval $(0,1)$, the supremum is $1$ and the infimum is $0$. Neither endpoint belongs to the set, but they are still the least upper bound and greatest lower bound respectively.',
  },
      '$\\sup S = 1$, $\\inf S = 0$, and neither belongs to $S
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For the open interval $(0,1)$, the supremum is $1$ and the infimum is $0$. Neither endpoint belongs to the set, but they are still the least upper bound and greatest lower bound respectively.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For the open interval $(0,1)$, the supremum is $1$ and the infimum is $0$. Neither endpoint belongs to the set, but they are still the least upper bound and greatest lower bound respectively.',
  },
  {
    id: 'sec01-q3',
    type: 'multiple-choice',
    question: 'An ordered set $S$ has the least upper bound property if:',
    options: [
      'Every nonempty subset of $S$ that is bounded above has a supremum in $S
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The least upper bound property (or completeness) states that every nonempty subset that is bounded above has a least upper bound (supremum) within $S$. This is the key property that distinguishes $\\mathbb{R}$ from $\\mathbb{Q}$.',
  },
      'Every subset of $S$ has a supremum',
      '$S$ is finite',
      '$S$ contains both a maximum and minimum element',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The least upper bound property (or completeness) states that every nonempty subset that is bounded above has a least upper bound (supremum) within $S$. This is the key property that distinguishes $\\mathbb{R}$ from $\\mathbb{Q}$.',
  },
  {
    id: 'sec01-q4',
    type: 'multiple-choice',
    question: 'If $S$ has the least upper bound property and $B \\subset S$ is nonempty and bounded below, what can we conclude?',
    options: [
      '$B$ has no infimum',
      '$B$ must be finite',
      '$B$ has a minimum element',
      '$\\inf B$ exists and belongs to $S
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Rudin proves that the LUB property implies the GLB (greatest lower bound) property. If $L$ is the set of lower bounds of $B$, then $L$ is nonempty and bounded above (by any element of $B$). Thus $\\sup L$ exists and equals $\\inf B$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Rudin proves that the LUB property implies the GLB (greatest lower bound) property. If $L$ is the set of lower bounds of $B$, then $L$ is nonempty and bounded above (by any element of $B$). Thus $\\sup L$ exists and equals $\\inf B$.',
  },
  {
    id: 'sec01-q5',
    type: 'multiple-choice',
    question: 'Let $A = \\{1/n : n \\in \\mathbb{Z}^+\\}$. What is $\\inf A$?',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The set $A = \\{1, 1/2, 1/3, 1/4, \\ldots\\}$ is bounded below by $0$. Since $1/n \\to 0$ as $n \\to \\infty$, no positive number can be a lower bound. Thus $\\inf A = 0$, though $0 \\notin A$.',
  },
      '$1/2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The set $A = \\{1, 1/2, 1/3, 1/4, \\ldots\\}$ is bounded below by $0$. Since $1/n \\to 0$ as $n \\to \\infty$, no positive number can be a lower bound. Thus $\\inf A = 0$, though $0 \\notin A$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The set $A = \\{1, 1/2, 1/3, 1/4, \\ldots\\}$ is bounded below by $0$. Since $1/n \\to 0$ as $n \\to \\infty$, no positive number can be a lower bound. Thus $\\inf A = 0$, though $0 \\notin A$.',
  },
      'The infimum does not exist',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The set $A = \\{1, 1/2, 1/3, 1/4, \\ldots\\}$ is bounded below by $0$. Since $1/n \\to 0$ as $n \\to \\infty$, no positive number can be a lower bound. Thus $\\inf A = 0$, though $0 \\notin A$.',
  },
];
