import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What organization is working on FROST standardization?',
    options: [
      'IEEE',
      'IETF (Internet Engineering Task Force)',
      'ISO',
      'W3C',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The IETF CFRG (Crypto Forum Research Group) is developing standards for FROST to ensure interoperability across implementations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is standardization important for FROST adoption?',
    options: [
      'To make FROST slower',
      'To ensure different implementations can interoperate securely',
      'To limit who can use FROST',
      'Standards are not important',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Standards define exact algorithms, serialization formats, and protocol messages, allowing different software to work together and enabling security audits.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the IETF FROST draft specify?',
    options: [
      'Only the mathematical formulas',
      'Key generation, signing protocol, ciphersuites, and wire formats',
      'Just the hash functions',
      'Hardware requirements',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The FROST draft specifies complete protocols including DKG, signing rounds, supported ciphersuites (curves + hashes), and message serialization.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a "ciphersuite" in the context of FROST standards?',
    options: [
      'A hardware security module',
      'A specific combination of elliptic curve, hash function, and parameter choices',
      'A type of encryption',
      'A software library',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A ciphersuite defines the exact cryptographic primitives (e.g., secp256k1 + SHA-256) ensuring all participants use compatible parameters.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What challenge exists in standardizing FROST for multiple application domains?',
    options: [
      'FROST cannot be standardized',
      'Different applications (Bitcoin, general TLS, etc.) may need different ciphersuites or protocol variants',
      'Standards bodies disagree on mathematics',
      'Standardization is too fast',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Bitcoin requires secp256k1/BIP-340 compatibility, while other applications use different curves. Standards must accommodate multiple ciphersuites and use cases.',
  },
];
