import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A mathematical statement (or proposition) is:',
    options: [
      'Any sentence involving mathematical symbols',
      'A declarative sentence that is either true or false, but not both',
      'A question about mathematical objects',
      'An instruction to perform a calculation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In mathematical logic, a statement or proposition is a declarative sentence with a definite truth value (true or false), following the law of excluded middle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a valid mathematical statement?',
    options: [
      '$x + 2 = 5
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$x + 2 = 5$ is not a statement because it contains a free variable $x$. Its truth value depends on what $x$ represents. It becomes a statement only when $x$ is specified or quantified.',
  },
      'Every even integer greater than 2 is the sum of two primes',
      '$2 + 2 = 4
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$x + 2 = 5$ is not a statement because it contains a free variable $x$. Its truth value depends on what $x$ represents. It becomes a statement only when $x$ is specified or quantified.',
  },
      '$\\pi$ is irrational',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$x + 2 = 5$ is not a statement because it contains a free variable $x$. Its truth value depends on what $x$ represents. It becomes a statement only when $x$ is specified or quantified.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $P$ and $Q$ are statements, the conjunction $P \\land Q$ is true exactly when:',
    options: [
      'Neither $P$ nor $Q$ is true',
      'At least one of $P$ or $Q$ is true',
      'Both $P$ and $Q$ are true',
      '$P$ is true or $Q$ is false',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The conjunction (logical AND) $P \\land Q$ is true if and only if both $P$ and $Q$ are true. If either is false, the conjunction is false.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The disjunction $P \\lor Q$ (logical OR) is false exactly when:',
    options: [
      'Both $P$ and $Q$ are true',
      'Both $P$ and $Q$ are false',
      'Exactly one of $P$ or $Q$ is true',
      '$P$ is true and $Q$ is false',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In classical logic, the disjunction $P \\lor Q$ is true when at least one of $P$ or $Q$ is true. It is false only when both are false.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The negation $\\neg P$ of a statement $P$ satisfies which property?',
    options: [
      '$\\neg P$ is always false',
      '$\\neg P$ and $P$ can both be true',
      '$\\neg P$ is true if and only if $P$ is false',
      '$\\neg P$ is true if $P$ is true',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The negation operator flips the truth value: $\\neg P$ is true exactly when $P$ is false, and vice versa.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which logical equivalence is known as De Morgan\'s Law?',
    options: [
      '$P \\lor (Q \\land R) \\equiv (P \\lor Q) \\land R
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'De Morgan\'s Laws state that $\\neg(P \\land Q) \\equiv (\\neg P) \\lor (\\neg Q)$ and $\\neg(P \\lor Q) \\equiv (\\neg P) \\land (\\neg Q)$. Negation distributes over conjunction/disjunction by switching the connective.',
  },
      '$\\neg(P \\land Q) \\equiv (\\neg P) \\land (\\neg Q)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'De Morgan\'s Laws state that $\\neg(P \\land Q) \\equiv (\\neg P) \\lor (\\neg Q)$ and $\\neg(P \\lor Q) \\equiv (\\neg P) \\land (\\neg Q)$. Negation distributes over conjunction/disjunction by switching the connective.',
  },
      '$(P \\to Q) \\equiv (Q \\to P)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'De Morgan\'s Laws state that $\\neg(P \\land Q) \\equiv (\\neg P) \\lor (\\neg Q)$ and $\\neg(P \\lor Q) \\equiv (\\neg P) \\land (\\neg Q)$. Negation distributes over conjunction/disjunction by switching the connective.',
  },
      '$\\neg(P \\land Q) \\equiv (\\neg P) \\lor (\\neg Q)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'De Morgan\'s Laws state that $\\neg(P \\land Q) \\equiv (\\neg P) \\lor (\\neg Q)$ and $\\neg(P \\lor Q) \\equiv (\\neg P) \\land (\\neg Q)$. Negation distributes over conjunction/disjunction by switching the connective.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'De Morgan\'s Laws state that $\\neg(P \\land Q) \\equiv (\\neg P) \\lor (\\neg Q)$ and $\\neg(P \\lor Q) \\equiv (\\neg P) \\land (\\neg Q)$. Negation distributes over conjunction/disjunction by switching the connective.',
  },
];
