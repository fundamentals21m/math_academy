import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is BTCPay Server?',
    options: [
      'A Bitcoin mining pool',
      'A cryptocurrency exchange',
      'A self-hosted, open-source Bitcoin payment processor',
      'A Bitcoin wallet app',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BTCPay Server is a free, open-source Bitcoin payment processor that allows merchants to accept Bitcoin directly.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do you install the Branta BTCPay plugin?',
    options: [
      'By downloading from the App Store',
      'Through the Bitcoin Core software',
      'Via command line only',
      'Through the BTCPay Server plugin marketplace',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Branta plugin can be installed from the BTCPay Server admin panel under Server Settings → Plugins.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When does the BTCPay plugin automatically register addresses with Branta?',
    options: [
      'When invoices are created during checkout',
      'When users log into BTCPay',
      'Once per day at midnight',
      'When payments are confirmed',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The plugin automatically registers payment addresses with Branta when BTCPay generates new invoices.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the plugin use as the default TTL for registrations?',
    options: [
      'Always 24 hours',
      'The invoice expiry time',
      'The maximum 1 year',
      '15 minutes',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By default, the plugin matches the registration TTL to the invoice expiry time, ensuring they expire together.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What programming language is the BTCPay plugin written in?',
    correctAnswer: 'C#',
    difficulty: 'hard',
    explanation: 'The BTCPay plugin is written in C# to integrate with BTCPay Server\'s .NET-based architecture.',
  },
];
