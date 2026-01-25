import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 5: The Dawn of Greek Mathematics
 */
export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who is considered the first Greek mathematician and philosopher?',
    options: [
      'Pythagoras of Samos',
      'Euclid of Alexandria',
      'Aristotle of Athens',
      'Thales of Miletus',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Thales of Miletus (600 BC) is considered the first Greek mathematician and philosopher. He visited Egypt and brought back knowledge of geometry, and is credited with being the first to prove geometric theorems.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What was the essential difference between Greek and pre-Greek mathematics?',
    options: [
      'The Greeks gave abstract proofs of their results',
      'The Greeks used a decimal number system',
      'The Greeks invented algebra',
      'The Greeks used more accurate approximations',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The essential difference between Greek and pre-Greek (Egyptian, Babylonian) mathematics was that the Greeks established logical connections among their results and gave the first abstract proofs in mathematics.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "What does Thales's Theorem state?",
    options: [
      'The sum of angles in a triangle equals 180°',
      'The base angles of an isosceles triangle are equal',
      'When two lines intersect, vertically opposite angles are equal',
      'An angle inscribed in a semicircle (subtended by a diameter) is a right angle',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      "Thales's Theorem states that if A, B, C are points on a circle and AC is a diameter, then ∠ABC is a right angle. In other words, an angle inscribed in a semicircle is always 90°.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What event did Thales famously predict in May of 585 BC?',
    options: [
      'A solar eclipse',
      'A great flood',
      'A volcanic eruption',
      'An earthquake',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Thales is said to have predicted the solar eclipse that occurred over the Near East in May of 585 BC. He may have used observations accumulated by the Babylonians over centuries to make this prediction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "What was Thales's famous philosophical claim about the nature of reality?",
    options: [
      '"All is number"',
      '"All is water"',
      '"All is fire"',
      '"All is infinite"',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Thales claimed that "everything is made of water." He took the view that the material universe is best understood in terms of a single, continuous substance. He likely noticed that ice and steam are both forms of water.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which philosopher identified the primal substance as fire?',
    options: [
      'Anaximenes of Miletus',
      'Anaximander of Miletus',
      'Heraclitus of Ephesus',
      'Thales of Miletus',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Heraclitus of Ephesus (500 BC) held that everything is made of fire. Other Ionian philosophers proposed different primal substances: Thales (water), Anaximenes (air), and Anaximander (the Infinite).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Where did Greek mathematics and philosophy first begin?',
    options: [
      'Athens',
      'Alexandria',
      'Rome',
      'Ionia (western Turkey)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Greek philosophy and mathematics began in Ionia (modern western Turkey), where the influence of older civilizations like Babylon was greatest. Later it spread to Italy, then Athens, and finally Alexandria.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What did Pythagoras and Democritus believe about the nature of reality, in contrast to Thales?',
    options: [
      'That reality is fundamentally continuous',
      'That reality cannot be understood mathematically',
      'That reality is fundamentally discrete (based on numbers)',
      'That reality is made of water',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In contrast to Thales\'s continuous view, Pythagoras and Democritus took the view that reality is basically discrete. Pythagoras taught that "all is number" — everything could be understood in terms of whole numbers and their ratios.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "What did Anaximander call the primal substance?",
    options: [
      'Water',
      'The Infinite (apeiron)',
      'Fire',
      'Air',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Anaximander of Miletus, a follower of Thales, thought the primal substance was something he called "the Infinite" (apeiron), which could take on the forms of earth, water, air, and fire — roughly corresponding to solid, liquid, gas, and energy.',
  },
];
