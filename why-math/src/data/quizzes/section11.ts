import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 5\\}$, what is $A \\cap B$?',
    options: [
      '$\\{1, 2, 3, 5\\}$',
      '$\\{2, 3\\}$',
      '$\\{1, 5\\}$',
      '$\\{2\\}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$A \\cap B$ is the intersection—elements in both sets. Both $A$ and $B$ contain 2 and 3, so $A \\cap B = \\{2, 3\\}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 5\\}$, what is $A \\cup B$?',
    options: [
      '$\\{2, 3\\}$',
      '$\\{1, 5\\}$',
      '$\\{1, 2, 3, 5\\}$',
      '$\\{1, 2, 3, 2, 3, 5\\}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\cup B$ is the union—all elements in either set. Combining both sets (without duplicates): $\\{1, 2, 3, 5\\}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many possible outcomes are there when tossing 4 coins?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Each coin has 2 outcomes. By the multiplication principle: $2 \\times 2 \\times 2 \\times 2 = 2^4 = 16$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $5!$ (5 factorial)?',
    correctAnswer: 120,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'easy',
    explanation: '$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many ways can you arrange 4 different books on a shelf?',
    options: [
      '$4$',
      '$16$',
      '$256$',
      '$24$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'This is a permutation of 4 objects: $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ arrangements.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'How many ways can you choose a committee of 2 people from a group of 5?',
    correctAnswer: 10,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'This is a combination: $\\binom{5}{2} = \\frac{5 \\times 4}{2!} = \\frac{20}{2} = 10$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'When rolling two dice, how many total outcomes are in the sample space?',
    options: [
      '$36$',
      '$12$',
      '$6$',
      '$72$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each die has 6 outcomes. By the multiplication principle: $6 \\times 6 = 36$ total outcomes.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'If sets $A$ and $B$ are disjoint, what is $A \\cap B$?',
    options: [
      '$A \\cup B$',
      '$\\emptyset$ (the empty set)',
      '$B$',
      '$A$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Disjoint sets have no elements in common, so their intersection is the empty set $\\emptyset$.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'How many different 3-letter "words" can be formed from the letters A, B, C, D, E if no letter is repeated?',
    correctAnswer: 60,
    numericRange: { min: 0, max: 200, precision: 0 },
    difficulty: 'medium',
    explanation: 'This is a permutation: first slot has 5 choices, second has 4, third has 3. So $5 \\times 4 \\times 3 = 60$.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'What does $\\binom{n}{k}$ represent?',
    options: [
      'The number of ways to arrange $n$ objects in $k$ positions',
      'The number of ways to choose $k$ objects from $n$ objects (order matters)',
      'The number of ways to choose $k$ objects from $n$ objects (order does not matter)',
      'The product $n \\times k$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\binom{n}{k}$ is the combination formula—it counts unordered selections of $k$ items from $n$ items.',
  },
];
