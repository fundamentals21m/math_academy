import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a BIP39 passphrase (25th word)?',
    options: [
      'The PIN for your wallet',
      'An extra security word that modifies your seed',
      'A backup of your seed phrase',
      'A password for your node',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A BIP39 passphrase is an optional additional word that modifies your seed, creating a completely different wallet. It requires both the 24 words AND the passphrase to access.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Stealth Mode in Zeus?',
    options: [
      'Using Tor for connections',
      'Making payments invisible on-chain',
      'Hiding all sensitive information including balances and history',
      'Anonymous channel opens',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Stealth Mode hides all sensitive information including balances, transaction history, and node details, making the app appear empty to observers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why use Tor with Zeus?',
    options: [
      'Faster transactions',
      'Lower fees',
      'Hide your IP, access through firewalls, protect your location',
      'Automatic backups',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Tor hides your IP address, works through firewalls and NAT without port forwarding, and prevents linking your identity to your node.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens if you forget your BIP39 passphrase?',
    options: [
      'You can reset it with your seed phrase',
      'Customer support can recover it',
      'You lose access for 24 hours',
      'Your funds are UNRECOVERABLE',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If you set a passphrase and forget it, your funds are unrecoverable. The seed alone cannot access a passphrase-protected wallet - both are required.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What should you do before sending large on-chain payments?',
    options: [
      'Verify the address first and last characters on multiple devices',
      'Wait for lower fees',
      'Convert to Lightning first',
      'Contact the recipient'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Before sending large amounts, verify the first and last characters of the address on multiple devices. Malware can swap addresses on the clipboard.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is NOT a recommended seed phrase storage practice?',
    options: [
      'Writing on paper and storing in a fireproof safe',
      'Taking a photo and storing in cloud',
      'Periodically testing recovery',
      'Making multiple copies in different locations'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Never store your seed phrase digitally - no photos, no cloud storage. Store it on paper or metal in multiple secure physical locations.',
  },
];
