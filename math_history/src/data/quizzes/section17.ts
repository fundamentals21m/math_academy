import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 's17-e01',
    type: 'multiple-choice',
    question: 'What is "potential infinity"?',
    difficulty: 'easy',
    options: [
      'A completed infinite totality',
      'A type of infinite decimal',
      'A process that can be continued indefinitely but is never complete',
      'The largest possible number',
    ],
    correctIndex: 2,
    explanation:
      'Potential infinity refers to a process that can always be extended further (like counting: 1, 2, 3, ...) but is never treated as a completed whole.',
  },
  {
    id: 's17-e02',
    type: 'multiple-choice',
    question: 'Which Greek philosopher argued that actual infinity should be rejected?',
    difficulty: 'easy',
    options: [
      'Plato',
      'Aristotle',
      'Pythagoras',
      'Archimedes',
    ],
    correctIndex: 1,
    explanation:
      'Aristotle argued in his Physics that "the infinite is potential, never actual." This view dominated Western thought for nearly two millennia.',
  },
  {
    id: 's17-m01',
    type: 'multiple-choice',
    question:
      'How did Euclid phrase his theorem about prime numbers to avoid actual infinity?',
    difficulty: 'medium',
    options: [
      '"Prime numbers are more than any assigned multitude of prime numbers"',
      '"There are infinitely many primes"',
      '"The primes form a complete infinite set"',
      '"Primes continue forever"',
    ],
    correctIndex: 0,
    explanation:
      'Euclid said primes are "more than any assigned multitude"—given any finite collection, you can find another prime. This expresses potential infinity without claiming an actual infinite totality exists.',
  },
  {
    id: 's17-m02',
    type: 'multiple-choice',
    question: 'Galileo\'s paradox showed that:',
    difficulty: 'medium',
    options: [
      'Infinity doesn\\\'t exist',
      'Natural numbers can be matched one-to-one with perfect squares, despite squares being a subset',
      'Perfect squares outnumber natural numbers',
      'Aristotle was wrong about everything',
    ],
    correctIndex: 1,
    explanation:
      'Galileo showed that natural numbers (1,2,3,...) can be paired one-to-one with perfect squares (1,4,9,...) even though squares are a proper subset. This seemed paradoxical before Cantor\'s work.',
  },
  {
    id: 's17-h01',
    type: 'multiple-choice',
    question:
      'How did Cantor resolve Galileo\'s paradox in the 19th century?',
    difficulty: 'hard',
    options: [
      'He proved the paradox was based on a mathematical error',
      'He showed that perfect squares actually outnumber natural numbers',
      'He rejected the existence of infinite sets entirely',
      'He defined infinite sets as precisely those that can be matched with a proper subset of themselves',
    ],
    correctIndex: 3,
    explanation:
      'Cantor embraced the paradox by defining infinite sets as those that can be put in one-to-one correspondence with a proper subset. This became part of the foundation of set theory.',
  },
  {
    id: 's17-h02',
    type: 'multiple-choice',
    question:
      'The method of exhaustion avoided actual infinity by:',
    difficulty: 'hard',
    options: [
      'Never using infinite sequences',
      'Using actual infinity but calling it something else',
      'Using only finite polygons but showing the difference from the claimed area can be made arbitrarily small',
      'Proving that infinity doesn\\\'t exist',
    ],
    correctIndex: 2,
    explanation:
      'The method of exhaustion never invokes actual infinity. It proves that for ANY positive difference ε, a polygon can be found within ε of the claimed area—purely potential infinity.',
  },
];
