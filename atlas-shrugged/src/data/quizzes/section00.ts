import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the famous opening line of Atlas Shrugged?',
    options: [
      '"Who is John Galt?"',
      '"It was the best of times, it was the worst of times."',
      '"Call me Ishmael."',
      '"The railroad was dying."'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '"Who is John Galt?" is the iconic opening line of Atlas Shrugged, a phrase that has become a slang expression of despair in the novel\'s world.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Dagny Taggart\'s position at Taggart Transcontinental?',
    options: [
      'President',
      'Vice President in Charge of Operations',
      'Chairman of the Board',
      'Chief Financial Officer'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Dagny Taggart serves as Vice President in Charge of Operations at Taggart Transcontinental, making her the person who actually keeps the railroad running.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who is the President of Taggart Transcontinental?',
    options: [
      'Dagny Taggart',
      'Hank Rearden',
      'James Taggart',
      'Eddie Willers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'James Taggart is the President of the railroad, though he operates through political connections rather than competence. His sister Dagny is the one who actually runs the railroad.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does the novel characterize the state of New York City in Chapter 1?',
    options: [
      'Thriving and prosperous',
      'Newly built and modern',
      'Completely abandoned',
      'Decaying with crumbling infrastructure'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The novel depicts New York City in decline: buildings with cracks running down their facades, gold leaf peeling from spires, and every fourth storefront dark and empty.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What giant object hangs over the city displaying "September 2"?',
    options: [
      'A calendar',
      'A clock',
      'A billboard',
      'A flag'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A giant calendar hangs over New York City, displaying the date. It serves as a symbol of time passing as civilization slowly crumbles.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Into how many parts is Atlas Shrugged divided?',
    options: [
      'Two',
      'Three',
      'Four',
      'Five'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Atlas Shrugged is divided into three parts: "Non-Contradiction," "Either-Or," and "A Is A"—each named after a principle of Aristotelian logic.',
  },
];
