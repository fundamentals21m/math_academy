import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What object does Winston buy from Mr. Charrington\'s shop?',
    options: ['A glass paperweight with coral inside', 'A diary', 'An old photograph', 'An antique clock'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Winston buys a beautiful glass paperweight containing a piece of pink coral, which becomes a symbol of the fragile private world he tries to create.'
  },
  {
    id: 2,
    type: 'text',
    question: 'What is the name of the shop owner who sells Winston the paperweight?',
    correctAnswer: 'Charrington',
    difficulty: 'easy',
    explanation: 'Mr. Charrington appears to be a gentle, cultured old man who shares Winston\'s love of the past.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What nursery rhyme does Mr. Charrington teach Winston fragments of?',
    options: ['Jack and Jill', 'Oranges and Lemons', 'Humpty Dumpty', 'London Bridge'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '"Oranges and Lemons" is an old nursery rhyme about London\'s churches. Its final lines—about a chopper to chop off your head—foreshadow Winston\'s fate.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who does Winston see as he leaves the shop, filling him with terror?',
    options: ['O\'Brien', 'Syme', 'The dark-haired girl', 'A Thought Police officer'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Winston sees the dark-haired girl from the Two Minutes Hate and is certain she is spying on him.'
  }
];
