import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a zero-knowledge proof, the prover convinces the verifier:',
    options: [
      'By revealing the secret',
      'Without revealing any information beyond the statement\\\\'s truth',
      'By providing half the secret',
      'Using encryption only',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Zero-knowledge: verifier learns nothing except that the statement is true.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The three properties of a zero-knowledge proof are:',
    options: [
      'Fast, secure, simple',
      'Authentication, integrity, confidentiality',
      'Completeness, soundness, zero-knowledge',
      'Public, private, shared',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Completeness (honest prover convinces), soundness (cheater fails), zero-knowledge (nothing leaked).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the graph isomorphism ZK protocol, the prover demonstrates knowledge of:',
    options: [
      'A permutation mapping one graph to another',
      'The adjacency matrices',
      'The number of vertices',
      'The chromatic number',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The prover knows a permutation $\\pi$ such that $G_1 = \\pi(G_0)$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If a ZK protocol has soundness error $1/2$ per round, how many rounds give error probability $< 1/1000$?',
    correctAnswer: 10,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'hard',
    explanation: 'After $k$ rounds, error is $(1/2)^k$. We need $(1/2)^{10} = 1/1024 < 1/1000$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What property ensures a cheating prover cannot convince a verifier of a false statement?',
    correctAnswer: 'soundness',
    difficulty: 'easy',
    explanation: 'Soundness: if the statement is false, no prover strategy succeeds with high probability.',
  },
];
