import type { QuizQuestion } from './types';

export const section91Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.27 is the converse of III.26. It proves that equal arcs in equal circles subtend:',
    options: [
      'Equal chords only',
      'Equal central angles',
      'Unequal angles',
      'Right angles'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.27 proves that in equal circles, equal arcs subtend equal angles at the center.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Together, III.26 and III.27 show that in equal circles, equal angles and equal arcs are:',
    options: [
      'Unrelated',
      'Sometimes related',
      'Equivalent (each determines the other)',
      'Proportional'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.26 shows equal angles → equal arcs; III.27 shows equal arcs → equal angles. They are equivalent in equal circles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is the condition "equal circles" necessary?',
    options: [
      'It\'s not actually necessary',
      'In unequal circles, the same arc length subtends different angles',
      'In unequal circles, arcs cannot be compared',
      'Equal circles are easier to construct'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The same arc length in a smaller circle subtends a larger central angle than in a larger circle.',
  },
];
