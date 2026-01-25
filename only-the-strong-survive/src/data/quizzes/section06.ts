import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why do the authors argue crypto projects inevitably centralize?',
    options: [
      'The technical requirements for functionality create natural centralization pressures',
      'Regulators force them to',
      'Users prefer centralization',
      'Centralization is more profitable',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'To achieve the throughput and functionality crypto projects promise, they must make design choices (larger state, complex validation) that naturally lead to fewer, more powerful nodes—centralization.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "social attack vector" in the context of centralized crypto?',
    options: [
      'Hacking social media accounts',
      'The ability to coerce, regulate, or pressure identifiable operators',
      'Social engineering phishing attacks',
      'Spreading misinformation',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When crypto centralizes around identifiable parties (validators, foundations, core developers), these parties become targets for regulation, coercion, or legal pressure—undermining the "censorship resistance" claim.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens when a crypto project has a known development team or foundation?',
    options: [
      'The project gains legitimacy',
      'Development is faster',
      'Regulators and governments have a target to pressure or shut down',
      'Users trust the project more',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A known foundation or development team creates a single point of failure. Governments can subpoena, regulate, or shut down these entities, making the "decentralized" claims hollow.',
  },
];
