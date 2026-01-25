import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 's08-q1',
    type: 'multiple-choice',
    question: 'What is the sample space $S$ of an experiment?',
    options: [
      'The average of all outcomes',
      'A subset of favorable outcomes',
      'The probability of each outcome',
      'The set of all possible outcomes'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The sample space $S$ (or $\\Omega$) is the set of all possible outcomes of an experiment.'
  },
  {
    id: 's08-q2',
    type: 'multiple-choice',
    question: 'An event is defined as:',
    options: [
      'A subset of the sample space',
      'A single outcome',
      'The complement of the sample space',
      'The probability measure'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An event is a subset of the sample space $S$. We say event $E$ occurs if the outcome of the experiment is in $E$.'
  },
  {
    id: 's08-q3',
    type: 'multiple-choice',
    question: 'For die roll with $E = \\{1,2,3\\}$ and $F = \\{2,4,6\\}$, what is $E \\cap F$?',
    options: [
      '$\\{1,2,3,4,6\\}$',
      '$\\{2\\}$',
      '$\\{4,5,6\\}$',
      '$\\emptyset$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The intersection $E \\cap F$ contains elements in both $E$ and $F$. Only 2 is in both sets, so $E \\cap F = \\{2\\}$.'
  },
  {
    id: 's08-q4',
    type: 'multiple-choice',
    question: 'Two events $E$ and $F$ are mutually exclusive if:',
    options: [
      '$E \\cup F = \\emptyset$',
      '$E = F^c$',
      '$E \\cap F = \\emptyset$',
      '$E \\cup F = S$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Events are mutually exclusive (disjoint) if they cannot both occur, meaning $E \\cap F = \\emptyset$.'
  },
  {
    id: 's08-q5',
    type: 'multiple-choice',
    question: 'De Morgan\'s Law states that $(E \\cup F)^c$ equals:',
    options: [
      '$E \\cup F^c$',
      '$E^c \\cup F^c$',
      '$(E \\cap F)^c$',
      '$E^c \\cap F^c$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'De Morgan\'s Law: $(E \\cup F)^c = E^c \\cap F^c$. "Not (E or F)" equals "Not E AND Not F".'
  },
  {
    id: 's08-q6',
    type: 'text',
    question: 'What is the term for the event that never occurs (the empty set)?',
    correctAnswer: 'empty event',
    difficulty: 'easy',
    explanation: 'The empty event $\\emptyset$ is the event that never occurs, as no outcome can be in the empty set.'
  }
];
