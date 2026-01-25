import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 's06-q1',
    type: 'multiple-choice',
    question: 'What does CBDC stand for?',
    options: [
      'Centralized Bitcoin Digital Coin',
      'Central Bank Digital Currency',
      'Commercial Bank Digital Credit',
      'Cryptocurrency Banking Digital Certificate'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'CBDC stands for Central Bank Digital Currency, which is already being used in China.'
  },
  {
    id: 's06-q2',
    type: 'multiple-choice',
    question: 'The book argues that freedom to transact is a natural extension of:',
    options: [
      'Property rights',
      'Freedom of assembly',
      'Freedom of speech',
      'Right to privacy'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Many believe that freedom to transact is a natural right and an extension of freedom of speech, as monetary transactions in the digital world are little more than messages.'
  },
  {
    id: 's06-q3',
    type: 'multiple-choice',
    question: 'During the Canadian Freedom Convoy, what did the Trudeau government invoke to freeze bank accounts?',
    options: [
      'Martial Law',
      'The War Measures Act',
      'The Banking Security Act',
      'The Emergencies Act'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Trudeau government invoked the "Emergencies Act" to freeze the bank accounts of individuals who donated to the protests.'
  },
  {
    id: 's06-q4',
    type: 'multiple-choice',
    question: 'What happened to the GoFundMe donations for the Freedom Convoy?',
    options: [
      'About $1 million was released before government intervention',
      'All funds were distributed to truckers',
      'The funds were donated to charity',
      'GoFundMe kept the money'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The GoFundMe reached CAD $10 million, but only about CAD $1 million was released to the organizers before the platform was forced to take action.'
  },
  {
    id: 's06-q5',
    type: 'multiple-choice',
    question: 'Why is bitcoin censorship-resistant according to this section?',
    options: [
      'It\'s backed by governments',
      'In self-custody, it could not have been blocked, frozen, or redirected',
      'It uses secret encryption',
      'It\'s anonymous'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bitcoin in self-custody could not have been blocked, frozen, or redirected by the Canadian government, demonstrating its censorship-resistant properties.'
  }
];
