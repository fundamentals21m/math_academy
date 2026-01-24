import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary function of Branta Core?',
    options: [
      'Mining Bitcoin',
      'Monitoring clipboard for Bitcoin addresses and providing verification',
      'Managing Bitcoin wallets',
      'Processing payments',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Branta Core is a desktop application that monitors your clipboard for Bitcoin addresses and verifies them automatically.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What technology framework is Branta Core built with?',
    options: [
      'React Native',
      'Qt with C++',
      'Electron with Angular',
      'Swift and SwiftUI',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Branta Core uses Electron for cross-platform support with Angular for the frontend UI.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does Branta Core do when it detects clipboard hijacking malware?',
    options: [
      'Automatically deletes the malware',
      'Blocks all network traffic',
      'Shuts down the computer',
      'Alerts the user that the pasted address differs from what was copied',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Branta Core can detect when clipboard content has been modified and alerts users to the discrepancy.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the minimum Node.js version required for Branta Core?',
    correctAnswer: '22',
    difficulty: 'medium',
    explanation: 'Branta Core requires Node.js version 22 or higher.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the current platform support status for Branta Core?',
    options: [
      'Windows available, macOS and Linux coming soon',
      'All platforms fully supported',
      'macOS only',
      'Linux only',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Branta Core currently has Windows releases available, with macOS and Linux support planned for the future.',
  },
];
