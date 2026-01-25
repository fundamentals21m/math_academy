import type { QuizQuestion } from './types';

export const section153Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In probability terminology, an event $A$ is said to have occurred if:',
    options: [
      '$P(A) = 1$',
      '$P(A) > 0$',
      'The outcome $x$ satisfies $x \\in A$',
      '$A = S$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If an experiment produces outcome $x$, and $x \\in A$, then we say event $A$ has occurred.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The impossible event is represented by:',
    options: [
      'The sample space $S$',
      'The complement of $S$',
      'Any set with $P(A) < 1$',
      'The empty set $\\varnothing$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The empty set $\\varnothing$ is the impossible event because no outcome can belong to it, so it never occurs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The statement "At least one of $A$ or $B$ occurs" corresponds to which set?',
    options: [
      '$A \\cap B
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '"At least one of $A$ or $B$ occurs" means the outcome is in $A$ or $B$ (or both), which is the union $A \\cup B$.',
  },
      '$A \\cup B
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least one of $A$ or $B$ occurs" means the outcome is in $A$ or $B$ (or both), which is the union $A \\cup B$.',
  },
      '$A\\' \\cap B\\'
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least one of $A$ or $B$ occurs" means the outcome is in $A$ or $B$ (or both), which is the union $A \\cup B$.',
  },
      '$A - B
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least one of $A$ or $B$ occurs" means the outcome is in $A$ or $B$ (or both), which is the union $A \\cup B$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least one of $A$ or $B$ occurs" means the outcome is in $A$ or $B$ (or both), which is the union $A \\cup B$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Two events $A$ and $B$ are called mutually exclusive if:',
    options: [
      '$A \\cup B = S$',
      '$A \\cap B = \\varnothing$',
      '$P(A) = P(B)$',
      '$A \\subseteq B$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Events are mutually exclusive (or disjoint) if they cannot both occur, i.e., $A \\cap B = \\varnothing$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which statement is TRUE about events with probability zero?',
    options: [
      'An event with probability zero may be nonempty',
      'An event with probability zero must be the empty set',
      'An event with probability zero is always impossible',
      'Probability zero is not possible for any event',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'An event with probability zero is not necessarily impossible (empty). Some nonempty subsets may be assigned probability zero, especially in infinite sample spaces.',
  },
];
