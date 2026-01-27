import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What three words are written on the note the dark-haired girl passes to Winston?',
    options: ['I love you', 'Big Brother watches', 'You are dead', 'Join the Brotherhood'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Julia\'s note—"I love you"—transforms Winston\'s terror into hope and revives his will to live.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does the girl manage to pass the note to Winston?',
    options: ['She drops it in his pocket on the train', 'She falls in a corridor and presses it into his hand as he helps her', 'She hands it to him during the Two Minutes Hate', 'She slides it under his door'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Julia stages a fall in the corridor and passes Winston the note as he helps her up.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is it so difficult for Winston and the girl to meet?',
    options: ['She lives in another city', 'She works night shifts', 'Telescreens and patrols monitor all public spaces', 'Her family is watching her'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The constant surveillance of telescreens and patrols makes any unexplained conversation or meeting extremely dangerous.'
  },
  {
    id: 4,
    type: 'text',
    question: 'In Oceania, expressing love for another individual is considered a form of what?',
    correctAnswer: 'rebellion',
    difficulty: 'medium',
    explanation: 'Love creates loyalty outside the Party\'s control, making it a form of political rebellion.'
  }
];
