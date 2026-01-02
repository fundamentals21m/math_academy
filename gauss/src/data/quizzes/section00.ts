import type { QuizQuestion } from './types';

/**
 * Section 0: Congruent Numbers and Moduli
 * Topics: Congruence notation, residues, least residues, elementary properties
 */
export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does $17 \\equiv 5 \\pmod{12}$ mean?',
    options: [
      '$17$ and $5$ have the same remainder when divided by $12$',
      '$17$ is divisible by $5$ and $12$',
      '$17 - 5 = 12$',
      '$17 \\times 5 = 12$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two numbers are congruent modulo $m$ if they have the same remainder when divided by $m$. Since $17 = 1 \\cdot 12 + 5$ and $5 = 0 \\cdot 12 + 5$, both have remainder $5$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is congruent to $23$ modulo $7$?',
    options: [
      '$8$',
      '$9$',
      '$2$',
      '$5$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$23 = 3 \\cdot 7 + 2$, so $23 \\equiv 2 \\pmod{7}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the least non-negative residue of $47$ modulo $9$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 8, precision: 0 },
    difficulty: 'easy',
    explanation: '$47 = 5 \\cdot 9 + 2$, so the least non-negative residue is $2$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $a \\equiv 3 \\pmod{7}$ and $b \\equiv 5 \\pmod{7}$, what is $a + b \\pmod{7}$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: '$a + b \\equiv 3 + 5 = 8 \\equiv 1 \\pmod{7}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $a \\equiv 4 \\pmod{5}$ and $b \\equiv 3 \\pmod{5}$, what is $a \\cdot b \\pmod{5}$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 4, precision: 0 },
    difficulty: 'medium',
    explanation: '$a \\cdot b \\equiv 4 \\cdot 3 = 12 \\equiv 2 \\pmod{5}$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the complete residue system modulo $4$?',
    options: [
      '$\\{1, 2, 3, 4\\}$',
      '$\\{0, 1, 2, 3\\}$',
      '$\\{-2, -1, 0, 1\\}$',
      'Both B and C are correct'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A complete residue system modulo $m$ contains exactly one representative from each congruence class. Both $\\{0, 1, 2, 3\\}$ and $\\{-2, -1, 0, 1\\}$ satisfy this.',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'What is $2^{10} \\pmod{7}$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 6, precision: 0 },
    difficulty: 'hard',
    explanation: '$2^3 = 8 \\equiv 1 \\pmod{7}$, so $2^{10} = 2^9 \\cdot 2 = (2^3)^3 \\cdot 2 \\equiv 1^3 \\cdot 2 = 2 \\pmod{7}$.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In what year did Gauss publish the Disquisitiones Arithmeticae?',
    options: [
      '$1789$',
      '$1801$',
      '$1815$',
      '$1832$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Gauss published the Disquisitiones Arithmeticae in $1801$ when he was $24$ years old.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'If $a \\equiv b \\pmod{m}$, which of the following must be true?',
    options: [
      '$m$ divides $a$',
      '$m$ divides $b$',
      '$m$ divides $(a - b)$',
      '$a$ divides $m$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By definition, $a \\equiv b \\pmod{m}$ means $m \\mid (a - b)$, i.e., $m$ divides the difference.',
  },
  {
    id: 10,
    type: 'numeric',
    question: 'What is the absolute least residue of $23$ modulo $7$? (Use negative if applicable)',
    correctAnswer: 2,
    numericRange: { min: -3, max: 3, precision: 0 },
    difficulty: 'medium',
    explanation: '$23 = 3 \\cdot 7 + 2$, so the least non-negative residue is $2$. Since $|2| < |2-7| = 5$, the absolute least residue is also $2$.',
  },
];
