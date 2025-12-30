import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two sets have the same cardinality if:',
    options: [
      'They have the same number of elements (for finite sets only)',
      'They can be put into one-to-one correspondence',
      'One is a subset of the other',
      'They have no elements in common'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Cardinality is defined by one-to-one correspondence, which works for both finite and infinite sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A set is countably infinite if:',
    options: [
      'It has finitely many elements',
      'It can be put into one-to-one correspondence with the positive integers',
      'It cannot be listed',
      'It has more elements than the real numbers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Countably infinite means the elements can be "listed" in a sequence that corresponds to 1, 2, 3, ...',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following sets is countable?',
    options: [
      'The real numbers between 0 and 1',
      'All irrational numbers',
      'The set of all rational numbers',
      'The set of all real numbers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rationals are countable (can be listed using the diagonal method). The reals and irrationals are uncountable.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What symbol denotes the cardinality of countably infinite sets? (Write as "aleph" followed by a digit)',
    correctAnswer: 'aleph0',
    difficulty: 'easy',
    explanation: 'The cardinality of countably infinite sets is denoted $\\aleph_0$ (aleph nought or aleph null).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The set of all integers $\\mathbb{Z} = \\{..., -2, -1, 0, 1, 2, ...\\}$ is:',
    options: [
      'Uncountable because it extends infinitely in both directions',
      'Countable because it can be listed as $0, 1, -1, 2, -2, 3, -3, ...$',
      'Larger than the natural numbers',
      'Not comparable to the natural numbers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By alternating between positive and negative integers, we can list all integers: $0, 1, -1, 2, -2, ...$',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Cantor\'s diagonal argument proves that:',
    options: [
      'The rationals are countable',
      'The integers are countable',
      'The real numbers in $[0, 1)$ are uncountable',
      'All infinite sets have the same cardinality'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Cantor\'s diagonal argument constructs a real number that differs from every number in any proposed "complete" list, proving $[0,1)$ is uncountable.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'According to Cantor, which statement is true?',
    options: [
      'All infinities are the same size',
      'There is only one size of infinity',
      'There are different sizes of infinity',
      'Infinity cannot be compared'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Cantor showed there are different sizes of infinity: $\\aleph_0$ (countable) is smaller than $\\aleph_1$ (uncountable).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which has larger cardinality: the natural numbers $\\mathbb{N}$ or the real numbers $\\mathbb{R}$?',
    options: [
      'They have the same cardinality',
      '$\\mathbb{N}$ is larger',
      '$\\mathbb{R}$ is larger',
      'They cannot be compared'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The reals $\\mathbb{R}$ are uncountable (cardinality $\\aleph_1$), while $\\mathbb{N}$ is countable (cardinality $\\aleph_0$). Since $\\aleph_0 < \\aleph_1$, $\\mathbb{R}$ is larger.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'A paradoxical fact about rationals and irrationals is:',
    options: [
      'There are more rationals than irrationals',
      'Between any two rationals there is an irrational, yet there are far more irrationals',
      'Irrationals are countable',
      'Rationals and irrationals have the same cardinality'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Despite both being "densely" distributed, the irrationals vastly outnumber the rationals (uncountable vs. countable).',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'The interval $(0, 1)$ and the entire real line $(-\\infty, \\infty)$ have:',
    options: [
      'Different cardinalities because $(-\\infty, \\infty)$ is infinitely longer',
      'The same cardinality because both are uncountable',
      'The same cardinality because there exists a one-to-one correspondence between them',
      'Incomparable cardinalities'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Using geometric constructions (similar triangles), we can create a one-to-one correspondence between $(0,1)$ and $(-\\infty, \\infty)$, so they have the same cardinality.',
  },
];
