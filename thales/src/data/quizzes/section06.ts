import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 6: Pythagoras and His School
 */
export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Where did Pythagoras found the Pythagorean Brotherhood?',
    options: [
      'Athens, Greece',
      'Croton, southern Italy',
      'Samos, Greece',
      'Alexandria, Egypt',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'About 525 BC, Pythagoras emigrated to Croton (modern Crotone) in southern Italy, where he founded a society half-way between a political party and a religious cult, known as the Pythagorean Brotherhood.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "What was Pythagoras's famous philosophical claim?",
    options: [
      '"All is water"',
      '"All is fire"',
      '"All is number"',
      '"All is infinite"',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Pythagoras taught that "all is number" — everything could be understood in terms of whole numbers and their ratios. This contrasted with Thales\'s claim that "all is water."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are amicable numbers?',
    options: [
      'Numbers where each is the sum of the proper divisors of the other',
      'Numbers that are both prime',
      'Numbers that differ by exactly 1',
      'Numbers that are both perfect squares',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Two natural numbers are amicable if each is the sum of the proper divisors of the other. The smallest amicable pair is (220, 284). Pythagoras said "friendship is as 220 is to 284."',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why did Pythagoras call 10 the "divine number"?',
    options: [
      'It was the number of gods in Greek mythology',
      'It is a triangular number (1+2+3+4) and the Pythagorean star has 10 vertices',
      'It is the largest single-digit number',
      'It represents the 10 commandments',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Pythagoras called 10 the "divine number" because it is the fourth triangular number (10 = 1+2+3+4) and the five-pointed Pythagorean star (pentagram) has 10 vertices.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Who actually introduced the word "mathematics"?',
    options: [
      'Thales',
      'Aristotle',
      'Euclid',
      'Pythagoras',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The word "mathematics" was introduced by Pythagoras. The first part is an old Indo-European root related to the English word "mind." The modern meaning of "mathematics" is due to Aristotle.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What discovery by Pythagorean followers challenged the "all is number" philosophy?',
    options: [
      'The existence of negative numbers',
      'The infinity of prime numbers',
      'The irrationality of √2',
      'The existence of perfect numbers',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      "The discovery that √2 (the diagonal of a unit square) is irrational challenged Pythagoras's belief that everything could be expressed as ratios of whole numbers. This created a crisis in Greek mathematics.",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the formula for the sum of the first n odd numbers?',
    options: [
      '$n(n+1)/2
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans discovered that 1 + 3 + 5 + ... + (2n-1) = n². They proved this using figurative numbers (pebble arrays) by showing that adding 2n+1 pebbles to an n×n square gives an (n+1)×(n+1) square.',
  },
      '$2n - 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans discovered that 1 + 3 + 5 + ... + (2n-1) = n². They proved this using figurative numbers (pebble arrays) by showing that adding 2n+1 pebbles to an n×n square gives an (n+1)×(n+1) square.',
  },
      '$n^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans discovered that 1 + 3 + 5 + ... + (2n-1) = n². They proved this using figurative numbers (pebble arrays) by showing that adding 2n+1 pebbles to an n×n square gives an (n+1)×(n+1) square.',
  },
      '$n(n+1)(2n+1)/6
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans discovered that 1 + 3 + 5 + ... + (2n-1) = n². They proved this using figurative numbers (pebble arrays) by showing that adding 2n+1 pebbles to an n×n square gives an (n+1)×(n+1) square.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Pythagoreans discovered that 1 + 3 + 5 + ... + (2n-1) = n². They proved this using figurative numbers (pebble arrays) by showing that adding 2n+1 pebbles to an n×n square gives an (n+1)×(n+1) square.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Which of these is NOT one of the three means studied by the Pythagoreans?',
    options: [
      'Geometric mean',
      'Arithmetic mean',
      'Harmonic mean',
      'Quadratic mean',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The Pythagoreans studied three means: arithmetic ((a+b)/2), geometric (√ab), and harmonic (2ab/(a+b)). The quadratic mean (root mean square) was not part of their original study.',
  },
  {
    id: 9,
    type: 'numeric',
    question:
      'The proper divisors of 220 sum to 284. What do the proper divisors of 284 sum to?',
    correctAnswer: 220,
    numericRange: { min: 1, max: 500, precision: 0 },
    difficulty: 'medium',
    explanation:
      'The proper divisors of 284 are 1, 2, 4, 71, and 142. Their sum is 1 + 2 + 4 + 71 + 142 = 220. This makes (220, 284) an amicable pair — each is the sum of the proper divisors of the other.',
  },
];
