import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What dramatic event happens during Hate Week?',
    options: ['The enemy changes from Eurasia to Eastasia mid-speech', 'Big Brother is assassinated', 'Goldstein is captured', 'A bomb destroys the Ministry'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Mid-speech, the orator seamlessly adjusts as the enemy changes. "Oceania was at war with Eastasia: Oceania had always been at war with Eastasia."'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to The Book, what is the purpose of perpetual war?',
    options: ['To gain territory', 'To consume surplus production and justify surveillance', 'To protect the proles', 'To spread Ingsoc to other countries'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Perpetual war consumes surplus production (preventing comfort) and justifies constant surveillance and hatred of enemies.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to The Book, what does Winston understand about the Party?',
    options: ['Only WHY they want power', 'Both HOW and WHY', 'Only HOW they maintain power', 'Neither'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Book explains the mechanics of power (HOW) but not the motivation (WHY). Winston still cannot understand why the Party wants power.'
  }
];
