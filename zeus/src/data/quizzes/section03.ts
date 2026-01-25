import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which are official sources to download Zeus?',
    options: [
      'Google Play Store, Apple App Store, or GitHub releases',
      'Any app store with the Zeus name',
      'Links sent via social media DMs',
      'Third-party APK websites',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Always download Zeus from official sources: Google Play Store (Android), Apple App Store (iOS), F-Droid, or verified GitHub releases. Never use third-party sources.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the PIN protect?',
    options: [
      'Your actual Bitcoin funds',
      'Access to the Zeus app',
      'Your Lightning channels',
      'Your internet connection',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The PIN protects access to the Zeus app itself. A seed passphrase (different from PIN) protects your actual funds. Both are recommended for maximum security.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are the main options when first launching Zeus?',
    options: [
      'Only create a new wallet',
      'Only connect to an exchange',
      'Connect to remote node, use embedded node, or add wallet',
      'Download blockchain or use light mode',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Zeus offers three main options: Connect to a Remote Node (external hardware), Use Embedded Node (run on phone), or Add a New Wallet (create or restore).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which balance types does Zeus display separately?',
    options: [
      'Savings and checking',
      'Hot and cold storage',
      'Confirmed and unconfirmed',
      'On-chain and Lightning',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Zeus shows separate balances for on-chain bitcoin (UTXOs) and Lightning (channel balances), as well as the total combined balance.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What feature lets you conceal your balance when others might see your screen?',
    correctAnswer: 'Hide Balance',
    difficulty: 'medium',
    explanation: 'The "Hide Balance" feature conceals amounts when the app is visible to others, protecting your financial privacy from shoulder-surfing.',
  },
];
