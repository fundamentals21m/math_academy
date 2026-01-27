import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What happens to Winston during the "rehabilitation" phase?',
    options: ['He is physically healed and mentally reconstructed', 'He is executed', 'He escapes', 'He joins the Inner Party'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Winston is fed, allowed to rest, and his body heals while he practices doublethink and learns to believe the Party\'s reality.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the one thing Winston hopes to preserve until his execution?',
    options: ['His memories of Julia', 'His hatred of Big Brother', 'His diary', 'His knowledge of the past'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Winston hopes to die hating Big Brother—to preserve one small victory by maintaining his internal resistance to the end.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What reveals that Winston has not been fully broken?',
    options: ['He refuses to eat', 'He attacks O\'Brien', 'He wakes shouting Julia\'s name', 'He tries to escape'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Winston dreams of Julia and wakes shouting her name—proving he has not betrayed her in his heart. The Party must eliminate this last resistance.'
  }
];
