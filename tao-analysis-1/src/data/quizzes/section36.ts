import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the Axiom of Choice assert about a collection of non-empty sets $\\{X_\\alpha\\}_{\\alpha \\in I}$?',
    options: [
      'The union $\\bigcup_{\\alpha \\in I} X_\\alpha$ is countable',
      'There exists a function $f: I \\to \\bigcup_{\\alpha \\in I} X_\\alpha$ with $f(\\alpha) \\in X_\\alpha$ for all $\\alpha
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Axiom of Choice states that for any collection of non-empty sets, there exists a choice function that selects one element from each set.',
  },
      'Each $X_\\alpha$ must be finite',
      'The index set $I$ must be well-ordered',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Axiom of Choice states that for any collection of non-empty sets, there exists a choice function that selects one element from each set.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following statements is equivalent to the Axiom of Choice?',
    options: [
      'Every continuous function is differentiable',
      'Every vector space has a basis',
      'Every bounded sequence converges',
      'Every open cover has a finite subcover',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The statement "every vector space has a basis" is equivalent to the Axiom of Choice. This is a deep result in set theory and linear algebra.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When is the Axiom of Choice NOT needed to prove the existence of a choice function?',
    options: [
      'When the collection of sets is uncountable',
      'When each set in the collection has a specified well-ordering',
      'When the sets are subsets of $\\mathbb{R}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If each set has a specified well-ordering, we can define a choice function by selecting the least element from each set without invoking the Axiom of Choice.',
  },
      'When the index set is the natural numbers',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If each set has a specified well-ordering, we can define a choice function by selecting the least element from each set without invoking the Axiom of Choice.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which statement about the Axiom of Choice is TRUE?',
    options: [
      'It can be proved from the other axioms of ZF set theory',
      'It can be disproved from the other axioms of ZF set theory',
      'It is independent of the other axioms of ZF set theory',
      'It contradicts the axiom of infinity',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'G\\"odel and Cohen showed that the Axiom of Choice is independent of ZF: it cannot be proved or disproved from the other axioms.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a finite collection of non-empty sets $\\{X_1, X_2, \\ldots, X_n\\}$, the existence of a choice function:',
    options: [
      'Requires the Axiom of Choice',
      'Is impossible to establish',
      'Depends on whether the sets are countable',
      'Can be proved without the Axiom of Choice by induction',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For finitely many non-empty sets, we can prove the existence of a choice function by induction without needing the Axiom of Choice.',
  },
];
