import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What distinguishes FROST2 from the original FROST protocol?',
    options: [
      'FROST2 uses a different elliptic curve',
      'FROST2 reduces the number of communication rounds in certain settings',
      'FROST2 requires more participants',
      'FROST2 eliminates the need for threshold signatures',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'FROST2 and similar variants optimize the protocol for specific deployment scenarios, often reducing round complexity or communication overhead.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is ROAST, and how does it relate to FROST?',
    options: [
      'A hash function for FROST',
      'A wrapper protocol that handles asynchrony and participant failures in FROST',
      'A replacement for Schnorr signatures',
      'A quantum-resistant version of FROST',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ROAST (Robust Asynchronous Schnorr Threshold) is a wrapper around FROST that provides robustness against Byzantine participants and network asynchrony.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why might different FROST variants be needed for different applications?',
    options: [
      'Different curves require different protocols',
      'Trade-offs between rounds, robustness, and security assumptions vary by use case',
      'Only one FROST variant exists',
      'Applications cannot use threshold signatures',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Applications have different requirements: some prioritize minimal rounds (latency), others need robustness against failures, and some have specific trust assumptions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is "robustness" in the context of threshold signature schemes?',
    options: [
      'Resistance to quantum computers',
      'The ability to complete signing even if some participants misbehave',
      'Using stronger hash functions',
      'Having a larger key size',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A robust protocol can identify and exclude misbehaving participants, completing the signing with the remaining honest parties (as long as threshold is met).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the key advantage of single-round FROST variants?',
    options: [
      'They use less memory',
      'Reduced latency by eliminating the commitment round',
      'They work with any threshold',
      'They do not require nonces',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Single-round variants (with pre-generated commitments or alternative designs) reduce signing latency, which is critical for high-frequency signing applications.',
  },
];
