import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.46 construct?',
    options: [
      'A square on a given straight line',
      'A rectangle on a given line',
      'A rhombus on a given line',
      'A circle inscribed in a square',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'I.46: "On a given straight line to describe a square."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is I.46 essential for the Pythagorean theorem (I.47)?',
    options: [
      'It proves right angles exist',
      'It establishes parallel lines',
      'It allows construction of squares on the sides of a right triangle',
      'It defines what a square is',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'I.47 requires constructing squares on all three sides of a right triangle, which I.46 enables.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which propositions does I.46 use in its construction?',
    options: [
      'I.1 and I.3',
      'I.29 and I.30',
      'I.4 and I.8',
      'I.11, I.31, and I.34',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'I.46 uses I.11 (perpendicular), I.31 (parallel), and I.34 (parallelogram properties) to construct a square.',
  },
];
