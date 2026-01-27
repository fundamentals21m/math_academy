import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did Cantor prove using his diagonal argument?',
    options: [
      'The integers are countable',
      'There is a largest prime number',
      'The rational numbers are uncountable',
      'The real numbers are uncountable'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Cantor\'s diagonal argument proves that the real numbers cannot be listed in a sequence, making them uncountable.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the symbol for the cardinality of the natural numbers (the smallest infinity)?',
    options: [
      '$\\aleph_0$',
      '$\\omega$',
      '$\\infty$',
      '$\\mathfrak{c}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\aleph_0$ (aleph-null) denotes the cardinality of countably infinite sets like the natural numbers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Cantor\'s theorem, how does $|P(S)|$ compare to $|S|$ for any set $S$?',
    options: [
      '$|P(S)| = |S|$',
      '$|P(S)| > |S|$',
      '$|P(S)| < |S|$',
      'They cannot be compared'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Cantor\'s theorem states that the power set $P(S)$ is always strictly larger than $S$, so $|P(S)| > |S|$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following sets is countable?',
    options: [
      'The real numbers $\\mathbb{R}$',
      'The irrational numbers',
      'The rational numbers $\\mathbb{Q}$',
      'The power set of natural numbers $P(\\mathbb{N})$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rational numbers are countable because they can be enumerated using a diagonal listing argument.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the Cantor set constructed by?',
    options: [
      'Adding the middle third at each step',
      'Halving the interval at each step',
      'Doubling the interval at each step',
      'Removing the middle third at each step'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Cantor set is constructed by repeatedly removing the middle third of each remaining interval.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is paradoxical about the Cantor set?',
    options: [
      'It has zero length but uncountably many points',
      'It has infinite length but no points',
      'It has finite length and countably many points',
      'It contains all rational numbers'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Cantor set has total length zero (the lengths removed sum to 1) but contains uncountably many points.',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'What is $\\aleph_0 + \\aleph_0$ in cardinal arithmetic?',
    correctAnswer: 0,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'In cardinal arithmetic, $\\aleph_0 + \\aleph_0 = \\aleph_0$. The answer 0 represents $\\aleph_0$ (subscript).',
  },
  {
    id: 8,
    type: 'text',
    question: 'What is the name of Cantor\'s famous conjecture about whether there is an infinity between $\\aleph_0$ and $2^{\\aleph_0}$?',
    correctAnswer: 'continuum hypothesis',
    difficulty: 'medium',
    explanation: 'The Continuum Hypothesis states that there is no set whose cardinality is strictly between $\\aleph_0$ and $2^{\\aleph_0}$.',
  },
  {
    id: 9,
    type: 'text',
    question: 'Who said "No one shall expel us from the Paradise that Cantor has created"?',
    correctAnswer: 'Hilbert',
    difficulty: 'hard',
    explanation: 'David Hilbert defended Cantor\'s set theory against critics with this famous declaration.',
  },
];
