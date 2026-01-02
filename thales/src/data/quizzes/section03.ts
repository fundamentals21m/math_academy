import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 3: Sumerian-Babylonian Mathematics
 */
export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What base did the Babylonians use for their number system?',
    options: [
      'Base 10 (decimal)',
      'Base 12 (duodecimal)',
      'Base 60 (sexagesimal)',
      'Base 20 (vigesimal)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The Babylonians used a sexagesimal (base 60) number system. This is why we still have 60 seconds in a minute, 60 minutes in an hour, and 360 degrees in a circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Where do we still use the Babylonian base-60 system today?',
    options: [
      'In measuring weight and distance',
      'In measuring time and angles',
      'In computer programming',
      'In currency and finance',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'We still use base 60 for time (60 seconds = 1 minute, 60 minutes = 1 hour) and angles (60 minutes = 1 degree). This was adopted by Greek astronomers around 150 BC.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What important mathematical symbol did the Babylonians invent?',
    options: [
      'The equals sign (=)',
      'The zero placeholder symbol',
      'The fraction bar',
      'The infinity symbol (∞)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The later Babylonians invented a symbol for zero as a placeholder. Ptolemy (150 AD) later replaced this with a small circle, from the Greek word "ouden" meaning "nothing".',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How did the Babylonians perform division?',
    options: [
      'Using long division like we do today',
      'By repeated subtraction',
      'By multiplying by the reciprocal using tables of inverses',
      'They could not perform division',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Babylonians divided by using the identity a/b = a × (1/b). They created extensive tables of reciprocals to make this practical.',
  },
  {
    id: 5,
    type: 'numeric',
    question:
      'How many shekels were in one mina according to the Babylonian system?',
    correctAnswer: 60,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation:
      'In the Babylonian weight system: 60 shekels = 1 mina, and 60 minas = 1 talent. This reflects their base-60 number system.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Why did Babylonian scribes not include 7 in their table of reciprocals?',
    options: [
      '7 was considered unlucky',
      '1/7 gives a repeating sexagesimal (7 has a prime factor not dividing 60)',
      'The symbol for 7 was too complex',
      '7 was not commonly used in trade',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The scribes only listed reciprocals of numbers whose only prime factors are 2, 3, or 5 (the factors of 60). Numbers like 7 would give infinitely repeating sexagesimal expansions.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'The Babylonian tablet YBC7289 (circa 1600 BC) contains an approximation of which value?',
    options: ['π (pi)', '√2 (square root of 2)', 'e (Euler\'s number)', 'φ (golden ratio)'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Tablet YBC7289 gives √2 ≈ 1°24'51\"10''' in sexagesimal notation, which equals approximately 1.41421296 in decimal — remarkably close to the true value of 1.41421356...",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      "The Babylonian square root algorithm (later called Heron's method) uses what iterative formula?",
    options: [
      '$a_{n+1} = a_n - a/a_n$',
      '$a_{n+1} = (a_n + a/a_n)/2$',
      '$a_{n+1} = a_n^2/a$',
      '$a_{n+1} = 2a_n - a$',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'To find √a, the Babylonians used: a_{n+1} = (a_n + a/a_n)/2. Starting with a guess a_1, this converges very rapidly to √a.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'How many divisors does 60 have? (Count 1 and 60 themselves)',
    correctAnswer: 12,
    numericRange: { min: 1, max: 30, precision: 0 },
    difficulty: 'medium',
    explanation:
      'The divisors of 60 are: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 — that is 12 divisors. This high divisibility is one reason the Babylonians chose base 60.',
  },
];
