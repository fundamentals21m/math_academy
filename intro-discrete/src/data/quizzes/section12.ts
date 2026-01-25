import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a direct proof of $P \\to Q$, what do we assume?',
    options: [
      'We assume $Q$ is true',
      'We assume $\\neg P$ is true',
      'We assume $P$ is true',
      'We assume $\\neg Q$ is true',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A direct proof assumes the hypothesis $P$ and derives the conclusion $Q$ through logical steps.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the contrapositive of $P \\to Q$?',
    options: [
      '$Q \\to P
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$, which is logically equivalent to the original statement.',
  },
      '$\\neg P \\to \\neg Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$, which is logically equivalent to the original statement.',
  },
      '$P \\land \\neg Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$, which is logically equivalent to the original statement.',
  },
      '$\\neg Q \\to \\neg P
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$, which is logically equivalent to the original statement.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The contrapositive of $P \\to Q$ is $\\neg Q \\to \\neg P$, which is logically equivalent to the original statement.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a proof by contradiction, what do we do first?',
    options: [
      'Assume the statement is false',
      'Assume the statement is true',
      'Find a counterexample',
      'Split into cases',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In a proof by contradiction, we assume the negation of what we want to prove and derive a contradiction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How do you disprove a universal statement $\\forall x \\, P(x)$?',
    options: [
      'Prove $P(x)$ for all $x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A single counterexample—a value $a$ where $P(a)$ is false—disproves a universal statement.',
  },
      'Prove $P(x)$ for one specific $x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A single counterexample—a value $a$ where $P(a)$ is false—disproves a universal statement.',
  },
      'Use contradiction',
      'Find one counterexample where $P(a)$ is false',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A single counterexample—a value $a$ where $P(a)$ is false—disproves a universal statement.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The classic proof that $\\sqrt{2}$ is irrational uses which technique?',
    options: [
      'Direct proof',
      'Proof by cases',
      'Proof by contrapositive',
      'Proof by contradiction',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The classic proof assumes $\\sqrt{2} = a/b$ in lowest terms and derives a contradiction (both $a$ and $b$ must be even).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To prove $\\exists! x \\, P(x)$ (unique existence), what must we show?',
    options: [
      'Only that some $x$ satisfies $P
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Unique existence requires both showing existence (some $a$ satisfies $P$) and uniqueness (if $P(b)$ and $P(c)$, then $b = c$).',
  },
      'That no $x$ satisfies $P
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Unique existence requires both showing existence (some $a$ satisfies $P$) and uniqueness (if $P(b)$ and $P(c)$, then $b = c$).',
  },
      'That all $x$ satisfy $P
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Unique existence requires both showing existence (some $a$ satisfies $P$) and uniqueness (if $P(b)$ and $P(c)$, then $b = c$).',
  },
      'Existence of such an $x$ AND that any two solutions are equal',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Unique existence requires both showing existence (some $a$ satisfies $P$) and uniqueness (if $P(b)$ and $P(c)$, then $b = c$).',
  },
];
