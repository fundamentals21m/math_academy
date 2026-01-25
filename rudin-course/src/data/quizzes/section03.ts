import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 'sec03-q1',
    type: 'multiple-choice',
    question: 'The real number system $\\mathbb{R}$ is characterized as:',
    options: [
      'An ordered field with the least upper bound property',
      'The only ordered field',
      'The completion of the integers',
      'The set of all decimal expansions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{R}$ is an ordered field that satisfies the least upper bound property: every nonempty set bounded above has a supremum. This property, combined with being an ordered field, essentially characterizes $\\mathbb{R}$ uniquely (up to isomorphism).',
  },
  {
    id: 'sec03-q2',
    type: 'multiple-choice',
    question: 'The Archimedean property of $\\mathbb{R}$ states that:',
    options: [
      'Every real number has a square root',
      '$\\mathbb{R}$ is uncountable',
      'For any $x, y \\in \\mathbb{R}$ with $x > 0$, there exists $n \\in \\mathbb{Z}^+$ such that $nx > y
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Archimedean property says there are no infinitely large or infinitesimally small elements: given any $x > 0$ and any $y$, we can find a positive integer $n$ with $nx > y$. This follows from the LUB property.',
  },
      'Between any two reals there is a rational',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Archimedean property says there are no infinitely large or infinitesimally small elements: given any $x > 0$ and any $y$, we can find a positive integer $n$ with $nx > y$. This follows from the LUB property.',
  },
  {
    id: 'sec03-q3',
    type: 'multiple-choice',
    question: 'Which statement about the density of $\\mathbb{Q}$ in $\\mathbb{R}$ is correct?',
    options: [
      'Between any two distinct rationals there is an irrational',
      'Between any two distinct reals there is a rational',
      'Neither of the above',
      'Both of the above',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$. Between any two distinct real numbers, we can find both a rational number and an irrational number.',
  },
  {
    id: 'sec03-q4',
    type: 'multiple-choice',
    question: 'For $x > 0$ and $n \\in \\mathbb{Z}^+$, the existence of a unique $y > 0$ with $y^n = x$ follows from:',
    options: [
      'The field axioms alone',
      'The Archimedean property alone',
      'The definition of exponentiation',
      'The least upper bound property',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Rudin proves that $n$th roots exist by considering $E = \\{t > 0 : t^n < x\\}$. This set is nonempty and bounded above, so $y = \\sup E$ exists by the LUB property. One then shows $y^n = x$.',
  },
  {
    id: 'sec03-q5',
    type: 'multiple-choice',
    question: 'If $x, y \\in \\mathbb{R}$ with $x < y$, which of the following is guaranteed to exist in the interval $(x, y)$?',
    options: [
      'An integer',
      'Both a rational and an irrational number',
      'A rational number',
      'An irrational number',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By density, there exists $q \\in \\mathbb{Q}$ with $x < q < y$. For the irrational, consider $x/\\sqrt{2} < y/\\sqrt{2}$; there exists rational $r$ between them, so $r\\sqrt{2}$ is irrational and lies in $(x, y)$ (with care for signs).',
  },
];
