import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A proposition is:',
    options: [
      'A statement that is either true or false',
      'A question',
      'A command',
      'An expression with a variable',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A proposition is a declarative statement with a definite truth value.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The negation of $P$ is written as:',
    options: [
      '$P^c
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Negation is denoted $\\neg P$ (or sometimes $\\sim P$).',
  },
      '$\\neg P
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Negation is denoted $\\neg P$ (or sometimes $\\sim P$).',
  },
      '$P^{-1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Negation is denoted $\\neg P$ (or sometimes $\\sim P$).',
  },
      '$\\overline{P}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Negation is denoted $\\neg P$ (or sometimes $\\sim P$).',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Negation is denoted $\\neg P$ (or sometimes $\\sim P$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$P \\Rightarrow Q$ is logically equivalent to:',
    options: [
      '$\\neg P \\lor Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An implication $P \\Rightarrow Q$ is true when $P$ is false or $Q$ is true.',
  },
      '$P \\lor Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'An implication $P \\Rightarrow Q$ is true when $P$ is false or $Q$ is true.',
  },
      '$P \\land Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'An implication $P \\Rightarrow Q$ is true when $P$ is false or $Q$ is true.',
  },
      '$\\neg P \\land Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'An implication $P \\Rightarrow Q$ is true when $P$ is false or $Q$ is true.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'An implication $P \\Rightarrow Q$ is true when $P$ is false or $Q$ is true.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The contrapositive of $P \\Rightarrow Q$ is:',
    options: [
      '$Q \\Rightarrow P
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The contrapositive $\\neg Q \\Rightarrow \\neg P$ is logically equivalent to $P \\Rightarrow Q$.',
  },
      '$\\neg P \\Rightarrow \\neg Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The contrapositive $\\neg Q \\Rightarrow \\neg P$ is logically equivalent to $P \\Rightarrow Q$.',
  },
      '$P \\land \\neg Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The contrapositive $\\neg Q \\Rightarrow \\neg P$ is logically equivalent to $P \\Rightarrow Q$.',
  },
      '$\\neg Q \\Rightarrow \\neg P
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The contrapositive $\\neg Q \\Rightarrow \\neg P$ is logically equivalent to $P \\Rightarrow Q$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The contrapositive $\\neg Q \\Rightarrow \\neg P$ is logically equivalent to $P \\Rightarrow Q$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A tautology is:',
    options: [
      'A statement that is always false',
      'A statement that depends on its variables',
      'A statement that is always true regardless of truth values',
      'A statement with no logical connectives',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A tautology is true for all possible truth value assignments.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which is a tautology?',
    options: [
      '$P \\Rightarrow P \\land Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P \\lor \\neg P$ (law of excluded middle) is always true.',
  },
      '$P \\land \\neg P
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P \\lor \\neg P$ (law of excluded middle) is always true.',
  },
      '$P \\land Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P \\lor \\neg P$ (law of excluded middle) is always true.',
  },
      '$P \\lor \\neg P
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P \\lor \\neg P$ (law of excluded middle) is always true.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P \\lor \\neg P$ (law of excluded middle) is always true.',
  },
];
