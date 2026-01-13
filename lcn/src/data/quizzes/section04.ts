import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does PSHVZK stand for?',
    options: [
      'Provably Secure Hash Verification Zero Knowledge',
      'Perfect Special Honest Verifier Zero Knowledge',
      'Probabilistic Signature Hiding Verification Zero Knowledge',
      'Private Secret Hash Verification Zero Knowledge'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'PSHVZK stands for Perfect Special Honest Verifier Zero Knowledge.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In PSHVZK, "Special" refers to the fact that:',
    options: [
      'The proof is especially short',
      'The simulator gets access to the verifier\'s randomness',
      'The verifier is especially powerful',
      'The protocol has special setup requirements'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '"Special" means the simulator receives the same randomness $\\rho$ that the honest verifier uses.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In PSHVZK, "Perfect" means:',
    options: [
      'The protocol never fails',
      'The simulated and real distributions are identical (not just computationally indistinguishable)',
      'Perfect completeness',
      'The proof is optimal in size'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '"Perfect" means the distributions are exactly equal, providing information-theoretic ZK.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the PSHVZK definition, the distinguisher $\\mathcal{A}_2$ is:',
    options: [
      'PPT only',
      'Not restricted to polynomial time',
      'The same as the prover',
      'A trusted third party'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The adversary $\\mathcal{A}_2$ is not restricted to polynomial time and knows the witness.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The simulator in PSHVZK has access to:',
    options: [
      'The witness $w$',
      'The statement $x$ and verifier randomness $\\rho$',
      'The prover\'s secret key',
      'A random oracle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The simulator gets the statement $x$ and randomness $\\rho$, but NOT the witness $w$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '"Honest Verifier" in PSHVZK means:',
    options: [
      'The verifier never lies',
      'The verifier follows the protocol and uses truly random challenges',
      'The verifier is trusted',
      'The verifier reveals the outcome'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Honest verifier means the verifier follows the protocol exactly, using genuine randomness.',
  },
];
