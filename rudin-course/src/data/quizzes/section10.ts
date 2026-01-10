import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 'sec10-q1',
    type: 'multiple-choice',
    question: 'A set $K$ in a metric space is compact if:',
    options: [
      'Every sequence in $K$ is bounded',
      'Every open cover of $K$ has a finite subcover',
      '$K$ is closed',
      '$K$ is bounded'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$K$ is compact if every open cover $\\{V_\\alpha\\}$ of $K$ (meaning $K \\subset \\bigcup V_\\alpha$) contains a finite subcover. This is the defining property of compactness.',
  },
  {
    id: 'sec10-q2',
    type: 'multiple-choice',
    question: 'The Heine-Borel theorem states that in $\\mathbb{R}^k$, a set is compact if and only if it is:',
    options: [
      'Open and bounded',
      'Closed and bounded',
      'Connected and bounded',
      'Closed and connected'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Heine-Borel theorem: A subset of $\\mathbb{R}^k$ is compact if and only if it is closed and bounded. This characterization does not hold in general metric spaces.',
  },
  {
    id: 'sec10-q3',
    type: 'multiple-choice',
    question: 'Is the interval $(0, 1)$ compact in $\\mathbb{R}$?',
    options: [
      'Yes, because it is bounded',
      'Yes, because it is an interval',
      'No, because it is not closed',
      'No, because it is not connected'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By Heine-Borel, $(0,1)$ is not compact because it is not closed. Alternatively, the open cover $\\{(1/n, 1) : n \\geq 2\\}$ has no finite subcover.',
  },
  {
    id: 'sec10-q4',
    type: 'multiple-choice',
    question: 'If $K$ is compact and $F \\subset K$ is closed, then:',
    options: [
      '$F$ is open',
      '$F$ is compact',
      '$F$ is unbounded',
      '$K \\setminus F$ is compact'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A closed subset of a compact set is compact. This follows because any open cover of $F$ can be extended to an open cover of $K$ by adding $F^c$, which then has a finite subcover.',
  },
  {
    id: 'sec10-q5',
    type: 'multiple-choice',
    question: 'In a compact set $K$, every infinite subset:',
    options: [
      'Is also compact',
      'Is closed',
      'Has a limit point in $K$',
      'Is countable'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Every infinite subset of a compact set has a limit point in that set. This is equivalent to sequential compactness: every sequence in $K$ has a convergent subsequence with limit in $K$.',
  },
];
