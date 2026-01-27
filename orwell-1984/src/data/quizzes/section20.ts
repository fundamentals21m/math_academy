import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to O\'Brien, why does the Party seek power?',
    options: ['Power for its own sake—power as an end, not a means', 'To create a better society', 'To protect the people', 'To defeat foreign enemies'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"Power is not a means; it is an end." The Party seeks power entirely for itself, with no pretense of serving any higher purpose.'
  },
  {
    id: 2,
    type: 'text',
    question: 'Complete O\'Brien\'s vision: "If you want a picture of the future, imagine a boot stamping on a human face—_____."',
    correctAnswer: 'forever',
    difficulty: 'easy',
    explanation: 'This famous quote encapsulates the Party\'s vision of eternal, purposeless power over humanity.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does O\'Brien say the Party differs from previous tyrannies?',
    options: ['It is more democratic', 'It admits it wants only power, not pretending to serve the people', 'It is less violent', 'It allows more freedom'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Unlike the Nazis (who claimed to serve the German race) or Communists (the proletariat), the Party makes no such claims—it seeks power purely for itself.'
  }
];
