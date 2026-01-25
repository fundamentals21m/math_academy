import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP stand for?',
    options: [
      'Bitcoin Improvement Proposal',
      'Bitcoin Implementation Protocol',
      'Bitcoin Interchange Process',
      'Bitcoin Integration Plan'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP stands for Bitcoin Improvement Proposal, the standardized process for proposing changes to Bitcoin.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which BIP number is traditionally reserved for the BIP process itself?',
    options: [
      'BIP-0',
      'BIP-2',
      'BIP-100',
      'BIP-1',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-1 defines the BIP Purpose and Guidelines, establishing the process for Bitcoin improvement proposals.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What is the primary programming language used in Bitcoin Core?',
    correctAnswer: 'C++',
    difficulty: 'medium',
    explanation: 'Bitcoin Core is primarily written in C++, chosen for its performance and low-level memory control.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIPs are most similar to which other standardization process?',
    options: [
      'ISO standards',
      'Python Enhancement Proposals (PEPs)',
      'World Wide Web Consortium (W3C) standards',
      'ANSI standards',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The BIP process was directly inspired by Python Enhancement Proposals (PEPs).',
  },
];
