import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 22: New Beginnings in Europe
 */
export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many outstanding European mathematicians were there in the thousand years from 400 to 1400 AD?',
    options: [
      'None',
      'One (Fibonacci)',
      'About a dozen',
      'Hundreds',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'In the thousand years from 400 to 1400 AD, there was exactly one outstanding European mathematician: Leonardo of Pisa, better known as Fibonacci.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Gerbert\'s mathematical abilities lead his contemporaries to believe about him?',
    options: [
      'That he was divinely inspired',
      'That he had a pact with the devil',
      'That he was secretly Greek',
      'That he was immortal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Gerbert\'s mathematical knowledge so overawed his contemporaries that they believed he had a pact with the devil! Despite this reputation, he became Pope Sylvester II.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How did Adelhard of Bath obtain a copy of Euclid\'s Elements in Arabic?',
    options: [
      'He received it as a gift from the Caliph',
      'He purchased it from merchants',
      'He disguised himself as a Muslim and attended lectures in Cordova',
      'He inherited it from his teacher',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Around 1120, Adelhard of Bath attended lectures at Cordova in Spain, disguising himself as a Muslim. There he obtained a copy of Euclid\'s Elements in Arabic, which he translated into Latin.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What important mathematical result did Nicole Oresme prove?',
    options: [
      'The divergence of the harmonic series',
      'The Pythagorean theorem',
      'The quadratic formula',
      'Fermat\\\\\'s Last Theorem',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Nicole Oresme (1320-1382), a French bishop, gave the first proof that the harmonic series 1 + 1/2 + 1/3 + 1/4 + ... diverges to infinity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the famous sequence 1, 1, 2, 3, 5, 8, 13, 21, ... called?',
    options: [
      'The Euclidean sequence',
      'The Pythagorean sequence',
      'The Fibonacci sequence',
      'The geometric sequence',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'This is the Fibonacci sequence, named after Leonardo of Pisa (Fibonacci). Each number is the sum of the two preceding numbers, and it arose from a problem about rabbit breeding in his Liber abaci.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the golden ratio φ (phi) approximately equal to?',
    options: [
      '1.414',
      '2.718',
      '3.142',
      '1.618',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The golden ratio φ = (1 + √5)/2 ≈ 1.618. It is connected to the Fibonacci sequence: the ratio of consecutive Fibonacci numbers approaches φ as the numbers get larger.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What identity did Fibonacci prove in his Liber quadratorum?',
    options: [
      '(a+b)² = a² + 2ab + b²',
      'a² + b² = c² for right triangles',
      '(a²+b²)(c²+d²) = (ac-bd)² + (bc+ad)²',
      '(a-b)(a+b) = a² - b²',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Fibonacci proved the two-squares identity: (a²+b²)(c²+d²) = (ac-bd)² + (bc+ad)². This shows that if each of two integers is a sum of two squares, then so is their product.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What problem in the Liber abaci led to the Fibonacci sequence?',
    options: [
      'Calculating compound interest',
      'Dividing inheritance',
      'Building pyramids',
      'Breeding rabbits',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Fibonacci sequence arose from this problem: How many pairs of rabbits will be produced in a year, beginning with a single pair, if every month each pair bears a new pair which becomes productive from the second month on?',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Where do Fibonacci numbers appear in nature?',
    options: [
      'The spiral patterns of sunflower seeds',
      'The number of planets in the solar system',
      'The phases of the moon',
      'The colors of the rainbow',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Fibonacci numbers appear in sunflower seed spirals: if there are 21 clockwise arcs, there are typically 13 counterclockwise arcs—consecutive Fibonacci numbers! This pattern appears in many plants.',
  },
];
