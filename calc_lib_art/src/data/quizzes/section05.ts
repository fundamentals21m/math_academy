import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What was the main accusation against Leibniz in the priority dispute?',
    options: [
      'That his notation was inferior',
      'That he plagiarized calculus from Newton\'s manuscripts',
      'That he published too many papers',
      'That he was not a real mathematician'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Newton\'s supporters accused Leibniz of stealing the idea of calculus after seeing Newton\'s private manuscripts during a visit to London in 1676.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What was suspicious about the Royal Society\'s 1712 investigation into the priority dispute?',
    options: [
      'Leibniz was not allowed to defend himself',
      'Newton, as president, secretly wrote much of the report himself',
      'The committee members were all German',
      'The investigation lasted only one day'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Newton abused his position as Royal Society president by secretly writing much of the supposedly "impartial" report that condemned Leibniz.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the modern historical consensus about the invention of calculus?',
    options: [
      'Newton invented it and Leibniz stole it',
      'Leibniz invented it and Newton stole it',
      'Both invented it independently',
      'Neither really invented calculus'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Historians agree that Newton and Leibniz independently invented calculus—Newton first (privately) around 1666, Leibniz around 1675.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What negative consequence did the priority dispute have for British mathematics?',
    options: [
      'Britain banned mathematics teaching',
      'British mathematicians refused to adopt Leibniz\'s superior notation for over a century',
      'All British mathematicians moved to Germany',
      'British universities closed their math departments'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Out of loyalty to Newton, British mathematicians stubbornly used his inferior notation, causing them to fall behind Continental mathematicians for over a century.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What was the name of the Royal Society\'s report that condemned Leibniz?',
    correctAnswer: 'Commercium Epistolicum',
    difficulty: 'hard',
    explanation: 'The "Commercium Epistolicum" (1712) was the Royal Society\'s biased report on the priority dispute, largely ghostwritten by Newton himself.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What happened to Leibniz in his final years?',
    options: [
      'He became wealthy and famous',
      'He died largely alone and forgotten, with even his employer not attending his funeral',
      'He was celebrated as a hero in Germany',
      'He became president of the Royal Society'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Leibniz died in 1716, his reputation tarnished by the dispute. Even his employer didn\'t attend his funeral. History would later vindicate his independent discovery.',
  },
];
