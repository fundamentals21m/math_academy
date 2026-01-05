import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Caesar cipher with shift 3, what does "ABC" encrypt to?',
    options: ['"XYZ"', '"DEF"', '"BCD"', '"CDE"'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Caesar cipher shifts each letter by 3: A→D, B→E, C→F, so "ABC"→"DEF".',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What type of attack exploits letter frequency patterns in ciphertext?',
    options: [
      'Brute force attack',
      'Frequency analysis',
      'Man-in-the-middle attack',
      'Side channel attack'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Frequency analysis uses the fact that letters like E, T, A appear most often in English text.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many possible keys does a simple substitution cipher have? Express as $n!$ where $n$ is the alphabet size (26).',
    correctAnswer: 26,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'A substitution cipher permutes the 26-letter alphabet, giving $26!$ possible keys.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Vigenère cipher is best described as:',
    options: [
      'A single substitution cipher',
      'Multiple Caesar ciphers with a repeating keyword',
      'A transposition cipher',
      'An asymmetric cipher'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Vigenère uses a keyword to cycle through multiple Caesar shifts, making frequency analysis harder.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name of the cipher where each plaintext letter is replaced by a different letter according to a fixed permutation?',
    correctAnswer: 'substitution',
    difficulty: 'easy',
    explanation: 'A substitution cipher replaces each letter with another letter according to a fixed mapping.',
  },
];
