import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the three properties of a zero-knowledge argument of knowledge?',
    options: [
      'Binding, hiding, soundness',
      'Completeness, soundness, zero-knowledge',
      'Privacy, integrity, availability',
      'Commitment, challenge, response'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A ZKAK must satisfy completeness (honest prover succeeds), soundness (cheating prover fails), and zero-knowledge (verifier learns nothing).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Completeness requires that:',
    options: [
      'The verifier always rejects',
      'A prover with a valid witness can convince the verifier',
      'The proof is short',
      'No computation is needed'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Completeness says an honest prover with a valid witness convinces the verifier with overwhelming probability.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Soundness protects against:',
    options: [
      'A malicious verifier',
      'A prover trying to prove a false statement',
      'Network attackers',
      'Quantum computers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Soundness ensures a prover cannot convince the verifier of a false statement (when $(\\sigma, x, w) \\notin \\mathcal{R}$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Zero-knowledge is formalized through the existence of:',
    options: [
      'A hash function',
      'A simulator that can produce proofs without the witness',
      'A trusted third party',
      'A random oracle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ZK requires a simulator that produces identically distributed transcripts without knowing the witness.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The difference between an "argument" and a "proof" is:',
    options: [
      'Arguments are interactive, proofs are not',
      'Arguments have computational soundness, proofs have information-theoretic soundness',
      'Arguments are longer than proofs',
      'There is no difference'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Arguments are sound against PPT adversaries; proofs are sound against unbounded adversaries.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What symbol denotes a witness for statement $x$ in a relation $\\mathcal{R}$?',
    correctAnswer: 'w',
    difficulty: 'easy',
    explanation: 'The witness is denoted $w$, where $(\\sigma, x, w) \\in \\mathcal{R}$ if $w$ is valid for statement $x$.',
  },
];
