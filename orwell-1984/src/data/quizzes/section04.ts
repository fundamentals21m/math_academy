import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'What is the official language of Oceania that is designed to limit thought?',
    correctAnswer: 'Newspeak',
    difficulty: 'easy',
    explanation: 'Newspeak is the official language designed to limit the range of thought by eliminating words and the concepts they represent.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Syme\'s job?',
    options: ['Working on the Newspeak dictionary', 'Thought Police agent', 'Records Department clerk', 'Inner Party official'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Syme is a philologist working on the Eleventh Edition of the Newspeak dictionary, enthusiastically destroying words to limit thought.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Newspeak, how would you say "bad"?',
    options: ['Nobad', 'Ungood', 'Badful', 'Minusgood'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In Newspeak, "bad" is replaced by "ungood." The prefix "un-" eliminates the need for negative words.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does Winston predict Syme will be vaporized?',
    options: ['He is lazy at his work', 'He has committed a crime', 'He is too intelligent and sees too clearly', 'He criticizes Big Brother'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Winston observes that Syme is too intelligent and speaks too plainly. The Party does not want people who understand its methods—only those who follow blindly.'
  }
];
