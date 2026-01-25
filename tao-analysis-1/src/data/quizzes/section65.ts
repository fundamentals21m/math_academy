import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a direct proof of $P \\to Q$, one:',
    options: [
      'Assumes $Q$ is false and derives that $P$ must be false',
      'Assumes $P$ is true and logically derives that $Q$ must be true',
      'Assumes both $P$ and $Q$ are true',
      'Shows that $P$ and $\\neg Q$ lead to a contradiction'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A direct proof of $P \\to Q$ proceeds by assuming the hypothesis $P$ is true, then using logical steps to conclude that the conclusion $Q$ must also be true.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A proof by contrapositive of $P \\to Q$ involves:',
    options: [
      'Proving $\\neg Q \\to \\neg P$ instead',
      'Assuming $P$ and $Q$ are both true',
      'Proving $Q \\to P$ instead',
      'Finding a counterexample to $P \\to Q
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $P \\to Q$ is logically equivalent to its contrapositive $\\neg Q \\to \\neg P$, proving the contrapositive is sufficient to establish the original implication.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $P \\to Q$ is logically equivalent to its contrapositive $\\neg Q \\to \\neg P$, proving the contrapositive is sufficient to establish the original implication.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a proof by contradiction of statement $P$, one:',
    options: [
      'Shows $P$ is equivalent to a known true statement',
      'Assumes $P$ and derives a logical contradiction',
      'Assumes $\\neg P$ and derives a logical contradiction',
      'Finds an example where $P$ is true',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Proof by contradiction (reductio ad absurdum) assumes the negation of what we want to prove. If this assumption leads to a contradiction, then the original statement must be true.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To prove $P \\to Q$ by contradiction, one assumes:',
    options: [
      '$\\neg P \\land Q$ and derives a contradiction',
      '$P \\land Q$ and derives a contradiction',
      '$\\neg P \\land \\neg Q$ and derives a contradiction',
      '$P \\land \\neg Q$ and derives a contradiction',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The negation of $P \\to Q$ is $\\neg(\\neg P \\lor Q) = P \\land \\neg Q$. So to prove $P \\to Q$ by contradiction, assume the hypothesis $P$ is true and conclusion $Q$ is false, then derive a contradiction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which proof technique is being used: "Suppose $\\sqrt{2}$ is rational, i.e., $\\sqrt{2} = p/q$ in lowest terms. Then $2q^2 = p^2$, so $p$ is even. Write $p = 2k$. Then $2q^2 = 4k^2$, so $q^2 = 2k^2$, meaning $q$ is also even. But this contradicts $p/q$ being in lowest terms."',
    options: [
      'Direct proof',
      'Proof by contrapositive',
      'Proof by contradiction',
      'Proof by induction',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This classic proof assumes $\\sqrt{2}$ is rational (the negation of what we want to prove) and derives a contradiction (that $p$ and $q$ share a common factor 2, contradicting "lowest terms").',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A proof of $P \\leftrightarrow Q$ typically requires:',
    options: [
      'Proving $\\neg P \\to \\neg Q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Since $P \\leftrightarrow Q$ means $(P \\to Q) \\land (Q \\to P)$, proving a biconditional requires establishing both directions of the implication.',
  },
      'Proving both $P \\to Q$ and $Q \\to P
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $P \\leftrightarrow Q$ means $(P \\to Q) \\land (Q \\to P)$, proving a biconditional requires establishing both directions of the implication.',
  },
      'Proving only $P \\to Q
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $P \\leftrightarrow Q$ means $(P \\to Q) \\land (Q \\to P)$, proving a biconditional requires establishing both directions of the implication.',
  },
      'Proving $P \\land Q
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $P \\leftrightarrow Q$ means $(P \\to Q) \\land (Q \\to P)$, proving a biconditional requires establishing both directions of the implication.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $P \\leftrightarrow Q$ means $(P \\to Q) \\land (Q \\to P)$, proving a biconditional requires establishing both directions of the implication.',
  },
];
