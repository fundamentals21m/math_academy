import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 's04-q1',
    type: 'multiple-choice',
    question: 'Understanding bitcoin is compared to learning to play:',
    options: [
      'Sports at an Olympic level',
      'Multiple instruments at the same time',
      'A single instrument quickly',
      'Chess at a professional level',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Understanding bitcoin is like learning to play multiple instruments at the same time - guitar, piano, drums, horns - and you need to know how they all come together.'
  },
  {
    id: 's04-q2',
    type: 'multiple-choice',
    question: 'Which fields are required to understand bitcoin according to the book?',
    options: [
      'Austrian economics, computer science, history, mathematics, game theory, and cryptography',
      'Only computer science and mathematics',
      'Finance, marketing, and business administration',
      'Physics, chemistry, and biology'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Learning bitcoin requires minimal competence in many disparate fields: Austrian Economics, Computer Science, History, Mathematics, Game Theory, and Cryptography.'
  },
  {
    id: 's04-q3',
    type: 'numeric',
    question: 'Approximately how many people on Earth have the mastery required for institutional bitcoin implementation?',
    correctAnswer: 5000,
    numericRange: { min: 1000, max: 10000, precision: 0 },
    difficulty: 'medium',
    explanation: 'Arguably, there aren\'t more than 5,000 people on Earth that have the mastery required to successfully implement institutional bitcoin strategies.'
  },
  {
    id: 's04-q4',
    type: 'multiple-choice',
    question: 'How do companies typically think in terms of time, according to the book?',
    options: [
      'Decades',
      'Years',
      'Quarters',
      'Daily',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Companies think in terms of quarters, not years, and not multiple years - creating a fundamental mismatch with bitcoin\'s longer time horizons.'
  },
  {
    id: 's04-q5',
    type: 'multiple-choice',
    question: 'What does the book say about companies and bitcoin mastery?',
    options: [
      'They can achieve it within a quarter',
      'They should wait until bitcoin is easier to understand',
      'Only tech companies can achieve it',
      'They should accept they won\\'t contribute much for a while, but starting today gets them there faster',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The book states there are no easy answers - companies need to accept they won\'t contribute much to bitcoin for quite a while, but starting today will get them there faster.'
  }
];
