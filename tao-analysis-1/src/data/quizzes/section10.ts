import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two sets $A$ and $B$ have the same cardinality (written $|A| = |B|$) if and only if:',
    options: [
      'They have the same number of subsets',
      'One is a subset of the other',
      'There exists a bijection $f: A \\to B
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cardinality is defined via bijections: $|A| = |B|$ iff there exists a bijective function between them. This works for both finite and infinite sets.',
  },
      'Their union equals their intersection',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cardinality is defined via bijections: $|A| = |B|$ iff there exists a bijective function between them. This works for both finite and infinite sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A set $A$ is finite if and only if:',
    options: [
      'It has infinitely many subsets',
      'It is countable',
      'It contains only natural numbers',
      'There exists a bijection from $A$ to $\\{1, 2, \\ldots, n\\}$ for some natural number $n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A set is finite if it is empty or can be put in bijection with $\\{1, 2, \\ldots, n\\}$ for some $n \\in \\mathbb{N}$. This $n$ is the cardinality.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set is finite if it is empty or can be put in bijection with $\\{1, 2, \\ldots, n\\}$ for some $n \\in \\mathbb{N}$. This $n$ is the cardinality.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the cardinality of the set $\\{a, b, c, d, e\\}$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'The set has $5$ distinct elements, so its cardinality is $5$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A set $A$ is countably infinite if:',
    options: [
      'There exists a bijection from $A$ to $\\mathbb{N}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A set is countably infinite if it can be put in bijection with the natural numbers $\\mathbb{N}$. Examples include $\\mathbb{Z}$ and $\\mathbb{Q}$.',
  },
      'It is finite',
      'It has the same cardinality as $\\mathbb{R}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A set is countably infinite if it can be put in bijection with the natural numbers $\\mathbb{N}$. Examples include $\\mathbb{Z}$ and $\\mathbb{Q}$.',
  },
      'It cannot be listed',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A set is countably infinite if it can be put in bijection with the natural numbers $\\mathbb{N}$. Examples include $\\mathbb{Z}$ and $\\mathbb{Q}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following sets is uncountable?',
    options: [
      'The integers $\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cantor proved that $\\mathbb{R}$ is uncountable using the diagonal argument. In contrast, $\\mathbb{Z}$ and $\\mathbb{Q}$ are countable.',
  },
      'The real numbers $\\mathbb{R}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cantor proved that $\\mathbb{R}$ is uncountable using the diagonal argument. In contrast, $\\mathbb{Z}$ and $\\mathbb{Q}$ are countable.',
  },
      'The rational numbers $\\mathbb{Q}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cantor proved that $\\mathbb{R}$ is uncountable using the diagonal argument. In contrast, $\\mathbb{Z}$ and $\\mathbb{Q}$ are countable.',
  },
      'The even natural numbers',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Cantor proved that $\\mathbb{R}$ is uncountable using the diagonal argument. In contrast, $\\mathbb{Z}$ and $\\mathbb{Q}$ are countable.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Cantor\'s theorem states that for any set $A$:',
    options: [
      '$|A| = |\\mathcal{P}(A)|
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Cantor\'s theorem proves that no set can be in bijection with its power set: $|A| < |\\mathcal{P}(A)|$ strictly. This implies there is no largest cardinality.',
  },
      '$|A| < |\\mathcal{P}(A)|
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Cantor\'s theorem proves that no set can be in bijection with its power set: $|A| < |\\mathcal{P}(A)|$ strictly. This implies there is no largest cardinality.',
  },
      '$|A| > |\\mathcal{P}(A)|
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Cantor\'s theorem proves that no set can be in bijection with its power set: $|A| < |\\mathcal{P}(A)|$ strictly. This implies there is no largest cardinality.',
  },
      '$|A| \\leq |\\mathcal{P}(A)|$ with equality possible',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Cantor\'s theorem proves that no set can be in bijection with its power set: $|A| < |\\mathcal{P}(A)|$ strictly. This implies there is no largest cardinality.',
  },
];
