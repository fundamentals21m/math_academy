import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the purpose of BIP-1?',
    options: [
      'To specify HD wallets',
      'To introduce SegWit',
      'To define the BIP process and guidelines',
      'To define P2SH addresses',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-1 establishes the purpose, format, and workflow for all Bitcoin Improvement Proposals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who is typically the BIP Editor responsible for managing the BIP process?',
    options: [
      'Satoshi Nakamoto',
      'Bitcoin Core maintainers only',
      'Mining pool operators',
      'A designated community member',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP Editors are designated community members who manage the administrative aspects of the BIP process.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What format are BIPs typically written in (hint: a simple markup language)?',
    correctAnswer: 'MediaWiki',
    difficulty: 'medium',
    explanation: 'BIPs are traditionally written in MediaWiki format, though some newer BIPs use Markdown.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which section is required in every BIP according to BIP-1?',
    options: [
      'Code examples',
      'Abstract',
      'Performance benchmarks',
      'Security audit results',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every BIP must include an Abstract providing a short description of the technical issue being addressed.',
  },
];
