import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 'sec08-q1',
    type: 'multiple-choice',
    question: 'A set $A$ is countable if:',
    options: [
      '$A$ is finite',
      'There exists a bijection from $A$ to a subset of $\\mathbb{Z}^+$',
      '$A$ has the same cardinality as $\\mathbb{R}$',
      '$A$ contains only integers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set is countable if it is finite or countably infinite (in bijection with $\\mathbb{Z}^+$). Equivalently, $A$ is countable if there exists an injection from $A$ into $\\mathbb{Z}^+$.',
  },
  {
    id: 'sec08-q2',
    type: 'multiple-choice',
    question: 'Which of the following sets is uncountable?',
    options: [
      '$\\mathbb{Z}$ (the integers)',
      '$\\mathbb{Q}$ (the rationals)',
      'The set of all finite subsets of $\\mathbb{N}$',
      '$\\mathbb{R}$ (the reals)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\mathbb{Z}$, $\\mathbb{Q}$, and the finite subsets of $\\mathbb{N}$ are all countable. Cantor\'s diagonal argument proves $\\mathbb{R}$ is uncountable.',
  },
  {
    id: 'sec08-q3',
    type: 'multiple-choice',
    question: 'Cantor\'s diagonal argument shows that the interval $(0,1)$ is uncountable by:',
    options: [
      'Showing $(0,1)$ contains $\\mathbb{Q}$',
      'Constructing a real number in $(0,1)$ not in any proposed listing',
      'Proving $(0,1)$ is not bounded',
      'Showing $(0,1)$ is an open set'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Given any listing $x_1, x_2, x_3, \\ldots$ of reals in $(0,1)$, Cantor constructs a number whose $n$-th decimal digit differs from the $n$-th digit of $x_n$. This number is in $(0,1)$ but not in the list.',
  },
  {
    id: 'sec08-q4',
    type: 'multiple-choice',
    question: 'The union of countably many countable sets is:',
    options: [
      'Always uncountable',
      'Countable',
      'Finite',
      'Empty'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $A_1, A_2, A_3, \\ldots$ are each countable, then $\\bigcup_{n=1}^{\\infty} A_n$ is countable. This is proven using a diagonal enumeration argument.',
  },
  {
    id: 'sec08-q5',
    type: 'multiple-choice',
    question: 'Why is $\\mathbb{Q}$ countable?',
    options: [
      'Because every rational is an integer',
      'Because $\\mathbb{Q}$ is a subset of $\\mathbb{R}$',
      'Because $\\mathbb{Q}$ is a countable union of countable sets (e.g., $\\{m/n : m \\in \\mathbb{Z}\\}$ for each $n$)',
      'Because $\\mathbb{Q}$ is dense in $\\mathbb{R}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'We can write $\\mathbb{Q} = \\bigcup_{n=1}^{\\infty} \\{m/n : m \\in \\mathbb{Z}\\}$. Each set $\\{m/n : m \\in \\mathbb{Z}\\}$ is countable (it bijects with $\\mathbb{Z}$), and a countable union of countable sets is countable.',
  },
];
