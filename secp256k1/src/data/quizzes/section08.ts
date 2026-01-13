import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Ethereum uses secp256k1 but differs from Bitcoin in that:',
    options: [
      'Ethereum uses a different curve equation',
      'Ethereum addresses are derived directly from the public key hash, not via RIPEMD160',
      'Ethereum uses RSA instead',
      'Ethereum has no digital signatures'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Ethereum addresses are the last 20 bytes of keccak256(public_key), while Bitcoin adds RIPEMD160 hashing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is an adaptor signature?',
    options: [
      'A signature that adapts to different message formats',
      'An incomplete signature that requires a secret to complete',
      'A signature that works on multiple blockchains',
      'A signature optimized for mobile devices'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Adaptor signatures are "locked" with a secret; revealing the completed signature reveals the secret, enabling atomic swaps.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Lightning Network uses secp256k1 for:',
    options: [
      'Only channel funding',
      'Channel funding, HTLCs, revocation keys, and onion routing',
      'Only payment verification',
      'Lightning doesn\'t use cryptography'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Lightning relies heavily on secp256k1 for 2-of-2 multisig channels, HTLC contracts, punishment mechanisms, and route blinding.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does ECRECOVER in Ethereum do?',
    options: [
      'Recovers lost private keys',
      'Returns the signer\'s address given a message hash and signature',
      'Encrypts data for recovery',
      'Generates new key pairs'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ECRECOVER is a precompiled contract that extracts the signer\'s address from a signature, enabling on-chain verification.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Nostr uses secp256k1 for:',
    options: [
      'Encrypting all messages',
      'User identity (public keys as identifiers) and event signing',
      'Only relay authentication',
      'Nostr uses a different cryptographic system'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Nostr identities are secp256k1 public keys, and all events are signed with the corresponding private keys.',
  },
];
