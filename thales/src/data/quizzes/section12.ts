import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 12: Plato and Aristotle on Mathematics
 */
export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'In Plato\'s dialogue Meno, how did Socrates demonstrate that an uneducated slave could "recollect" how to double the area of a square?',
    options: [
      'By doubling the side length',
      'By adding four smaller squares',
      'By constructing a square on the diagonal',
      'By using the quadratrix'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Socrates showed that a square built on the diagonal of the original square has exactly double the area. The slave first incorrectly suggested doubling the side (which quadruples the area).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'What famous inscription was placed at the entrance of Plato\'s Academy?',
    options: [
      '"Knowledge is virtue"',
      '"All is number"',
      '"The unexamined life is not worth living"',
      '"Let no one ignorant of geometry enter here"'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The inscription "Let no one ignorant of geometry enter here" reflected Plato\'s belief that mathematical knowledge was essential for philosophical understanding.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'According to Plato, how do mathematical objects like numbers and squares exist?',
    options: [
      'As physical objects we can touch',
      'As mental constructs created by humans',
      'In an immaterial realm, independent of the physical world',
      'Only as approximations in drawings',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Plato believed mathematical objects exist in an immaterial realm, separate from the changing, imperfect physical world. The drawing of a square is material, but the square "as such" is immaterial and perfect.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'What is "Platonism" as a philosophy of mathematics?',
    options: [
      'The view that mathematics is merely a human invention',
      'The view that mathematical objects actually exist independently of human minds',
      'The rejection of infinite sets',
      'The belief that only straightedge and compass constructions are valid',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Platonism holds that mathematical objects (like real numbers and geometric figures) actually exist independently of the human mind. Their properties are discovered, not created.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'How did Aristotle view the word "two" differently from Plato?',
    options: [
      'As a noun designating an abstract object',
      'As a mystical symbol',
      'As an approximation',
      'As an adjective describing concrete objects',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'For Aristotle, "two" is not a noun designating an abstract entity but an adjective describing concrete things — like "the two-yard ladder" or "a two-year period." Mathematical objects are abstractions from physical reality.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What was Aristotle\'s position on actual infinite sets and magnitudes?',
    options: [
      'He accepted them as necessary for mathematics',
      'He was a finitist who rejected actual infinities',
      'He never addressed the question',
      'He believed they existed in the immaterial realm',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Aristotle was a staunch finitist who rejected infinite sets, infinite magnitudes, and infinitesimals. He would have rejected Cantor\'s transfinite numbers.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What is the distinction Aristotle made between "potential infinity" and "actual infinity"?',
    options: [
      'Potential infinity is larger than actual infinity',
      'Potential infinity means always extendable; actual infinity means a completed infinite whole',
      'They are the same thing with different names',
      'Actual infinity applies only to time, potential infinity only to space',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Aristotle distinguished between potential infinity (always being able to extend further) and actual infinity (a completed infinite totality). He accepted only potential infinity — a geometer can extend a line as much as needed, but cannot have the whole infinite line.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What philosophical puzzle did Aristotle raise about the statement "there will be a sea battle tomorrow"?',
    options: [
      'Whether it is either true or false (the principle of bivalence)',
      'Whether it can be proven mathematically',
      'Whether the gods control naval warfare',
      'Whether geometry applies to the sea',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'In "On Interpretation," Aristotle questioned whether statements about future contingent events (like "there will be a sea battle tomorrow") are either true or false. This raised deep questions about determinism and the nature of truth.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'Which modern school of mathematical philosophy is most similar to Aristotle\'s human-centered, finitist approach?',
    options: [
      'Intuitionism',
      'Set theory',
      'Mathematical realism',
      'Formalism',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Like 20th-century intuitionists, Aristotle\'s view is human-centered. Intuitionism rejects actual infinities and emphasizes constructive methods, similar to Aristotle\'s rejection of completed infinite wholes.',
  },
];
