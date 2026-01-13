import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is "cold storage" in Bitcoin custody?',
    options: [
      'Storing Bitcoin in cold climates for efficiency',
      'Keeping signing keys offline, disconnected from the internet',
      'Using liquid cooling for mining hardware',
      'Storing encrypted backups in cloud storage',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Cold storage means keeping private keys on devices that are never connected to the internet (air-gapped). This prevents remote attacks but requires physical access to sign transactions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In a 3-of-5 FROST cold storage setup, what is a typical key distribution strategy?',
    options: [
      'All 5 keys on one hardware device',
      'Keys distributed across different geographic locations and device types',
      'All keys stored in the same bank vault',
      'Keys memorized by 5 different people',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Best practice distributes keys across: different physical locations (home, office, bank vault), different device types (hardware wallets, air-gapped computers), and different custodians. This maximizes resilience against various failure modes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does FROST signing work with air-gapped cold storage devices?',
    options: [
      'It cannot work - FROST requires internet connectivity',
      'Signing data is transferred via QR codes, USB drives, or SD cards between devices',
      'Cold devices must briefly connect to the internet to sign',
      'Only the coordinator needs to be online',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Air-gapped FROST signing transfers data physically: the coordinator prepares signing requests, transfers via QR/USB/SD to cold devices, each device computes its share offline, and shares are collected back for aggregation. No internet needed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the signing workflow for a cold storage FROST transaction?',
    options: [
      'Single-click automatic signing',
      '1) Coordinator prepares request, 2) Transfer to cold devices, 3) Each signs offline, 4) Collect shares, 5) Aggregate and broadcast',
      'All devices sign simultaneously online',
      'The coordinator signs on behalf of all devices',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cold FROST signing involves: coordinator creating the signing request with all commitments, physically transferring to each cold device, each device computing its share independently, collecting shares back, aggregating into final signature, and broadcasting.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a key advantage of 3-of-5 FROST over 3-of-5 Bitcoin multisig for cold storage?',
    options: [
      'FROST is more secure cryptographically',
      'FROST produces a single signature, saving fees and hiding the multisig structure',
      'FROST signing is faster',
      'FROST requires fewer hardware devices',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Traditional 3-of-5 multisig requires 3 signatures and reveals the 3-of-5 structure on-chain. FROST produces one 64-byte signature indistinguishable from single-key spending, saving ~60% in fees and providing complete privacy about the custody setup.',
  },
];
