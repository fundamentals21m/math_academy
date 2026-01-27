import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Julia, what does the Party do with people\'s energy that would otherwise go to sex?',
    options: ['Converts it into political fervor and war hysteria', 'Channels it into work productivity', 'Uses it for physical training', 'Ignores it completely'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Julia explains that the marching, cheering, and flag-waving is "sex gone sour"—the Party converts desire into political energy.'
  },
  {
    id: 2,
    type: 'text',
    question: 'According to Julia, "What you say or do doesn\'t matter; only _____ matter."',
    correctAnswer: 'feelings',
    difficulty: 'medium',
    explanation: 'Julia believes that forced confessions don\'t constitute true betrayal—only if they could make her stop loving Winston would that be real betrayal.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does Julia maintain her cover as an orthodox Party member?',
    options: ['She never breaks any rules', 'She appears zealously orthodox in public while rebelling in private', 'She works as a Thought Police informant', 'She avoids all social interactions'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Julia serves on committees, organizes hikes, and hands out leaflets—appearing utterly orthodox while secretly conducting affairs and buying black market goods.'
  }
];
