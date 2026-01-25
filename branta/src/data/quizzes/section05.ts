import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a supply chain attack?',
    options: [
      'Attacking physical shipping of hardware',
      'Intercepting network traffic at ISPs',
      'Stealing credentials from developers',
      'Targeting third-party components that applications depend on',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Supply chain attacks target the less-secure elements in the software supply network, such as libraries, build systems, or distribution channels.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is dependency confusion?',
    options: [
      'Publishing malicious packages with names similar to internal packages',
      'Installing wrong versions of packages',
      'Mixing incompatible library versions',
      'Confusing npm with yarn commands',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Dependency confusion occurs when attackers publish malicious public packages with the same names as internal private packages.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What made the event-stream npm package attack particularly dangerous for Bitcoin users?',
    options: [
      'It crashed Bitcoin nodes',
      'It slowed down block validation',
      'It specifically targeted Bitcoin wallets to steal private keys',
      'It modified transaction fees',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The event-stream attack contained code that specifically targeted the Copay Bitcoin wallet to steal private keys.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the term for publishing malicious packages with names that are common misspellings of popular packages?',
    correctAnswer: 'typosquatting',
    difficulty: 'medium',
    explanation: 'Typosquatting involves registering package names that are common misspellings of legitimate popular packages.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Branta help mitigate supply chain attack risks?',
    options: [
      'By scanning code for vulnerabilities',
      'By providing verification independent of potentially compromised application code',
      'By blocking malicious packages',
      'By encrypting all dependencies',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Branta acts as an independent trust anchor outside the application supply chain, so even compromised code cannot fake verified registrations.',
  },
];
