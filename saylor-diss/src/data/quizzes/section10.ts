import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the model, political power depends on:',
    options: [
      'Military strength alone',
      'Numbers, wealth, organization, and willingness to act',
      'Religious authority only',
      'Foreign support',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Political power is a function of multiple factors including numbers, wealth, organization, and mobilization.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "minimum winning coalition" in the model?',
    options: [
      'Enough combined support to prevent successful rebellion',
      'All citizens supporting the executive',
      'A simple majority vote',
      'Support from the military only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A minimum winning coalition is the threshold of support needed to maintain power.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does the aristocracy often have disproportionate political power?',
    options: [
      'Divine right',
      'They are more numerous',
      'Wealth, organization, and control of resources',
      'Popular election',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The aristocracy\'s wealth, better organization, and resource control amplify their influence.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens if the executive loses the minimum winning coalition?',
    options: [
      'Nothing changes',
      'Automatic re-election',
      'Foreign invasion occurs',
      'The regime becomes vulnerable to overthrow',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Losing the minimum coalition makes the regime vulnerable to rebellion or revolution.',
  },
];
