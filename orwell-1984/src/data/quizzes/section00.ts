import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the opening line of Nineteen Eighty-Four?',
    options: [
      'It was a bright cold day in April, and the clocks were striking thirteen.',
      'It was the best of times, it was the worst of times.',
      'Big Brother is watching you.',
      'In a hole in the ground there lived a hobbit.'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The famous opening line establishes the strangeness of Oceania from the first sentence—clocks striking thirteen indicates a society that has rejected traditional time-keeping.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the function of a telescreen?',
    options: [
      'It only broadcasts propaganda',
      'It both broadcasts propaganda and monitors citizens',
      'It only monitors citizens',
      'It is used for entertainment only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The telescreen is a two-way device that simultaneously broadcasts Party propaganda and watches citizens, symbolizing the total erasure of privacy.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the three Party slogans?',
    options: [
      'War is Peace',
      'Freedom is Slavery',
      'Knowledge is Power',
      'Ignorance is Strength'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The three Party slogans are: War is Peace, Freedom is Slavery, and Ignorance is Strength. "Knowledge is Power" is from Francis Bacon and contradicts the Party\'s ideology.'
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the daily ritual where Party members gather to express hatred toward Emmanuel Goldstein called?',
    correctAnswer: 'Two Minutes Hate',
    difficulty: 'easy',
    explanation: 'The Two Minutes Hate is a daily ritual where Party members watch images of Goldstein and work themselves into a frenzy of hatred.'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Where does Winston work?',
    options: [
      'Ministry of Peace',
      'Ministry of Love',
      'Ministry of Plenty',
      'Ministry of Truth'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Winston works at the Ministry of Truth (Minitrue), which handles propaganda and the falsification of historical records.'
  }
];
