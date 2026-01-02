import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 18: Archimedes
 */
export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What problem did Archimedes famously solve while taking a bath, leading him to shout "Eureka!"?',
    options: [
      'How to determine the ratio of gold to silver in an alloy',
      'How to calculate the area of a circle',
      'How to construct a regular heptagon',
      'How to measure the distance to the Sun',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Archimedes discovered that by immersing an object in water and measuring the displaced volume, he could determine its composition. This allowed him to tell King Hieron whether a goldsmith had cheated him.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What bounds did Archimedes establish for the value of π using 96-sided polygons?',
    options: [
      '3 < π < 4',
      '3 10/71 < π < 3 1/7',
      '3.14 < π < 3.15',
      '22/7 < π < 25/8',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'By inscribing and circumscribing 96-gons around a circle, Archimedes proved that 3 10/71 < π < 3 1/7 (approximately 3.1408 to 3.1429). This was the first rigorous bounding of π.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What ancient mathematical technique, used by Archimedes to prove the area of a circle equals πr², was a precursor to integral calculus?',
    options: [
      'The method of tangents',
      'The method of exhaustion',
      'The method of fluxions',
      'The method of indivisibles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The method of exhaustion uses a proof by contradiction: if the area is greater than πr², we get a contradiction; if less, another contradiction. By the Law of Excluded Middle, they must be equal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When was Archimedes\'s Cattle Problem finally solved?',
    options: [
      '1868, when Beltrami published his work',
      '1899, when Hilbert axiomatized geometry',
      '1965, using a computer',
      '1906, when the Method was rediscovered',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Cattle Problem was so difficult that it wasn\'t solved until 1965, when H.C. Williams, R.A. German, and C.R. Zarnke used a computer. The answer has 206,545 digits!',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of Archimedes\'s books, containing his "mechanical" method for discovering results before proving them rigorously, was lost for centuries and only rediscovered in 1906?',
    options: [
      'On the Sphere and Cylinder',
      'The Sand Reckoner',
      'The Method',
      'On Floating Bodies',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Method was lost for centuries and only rediscovered in 1906. In it, Archimedes revealed how he used mechanical intuition to discover results before proving them by the method of exhaustion.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'According to Archimedes\'s Principle, what force does a body immersed in fluid experience?',
    options: [
      'A downward force equal to its weight',
      'An upward buoyant force equal to the weight of fluid displaced',
      'A horizontal force proportional to its velocity',
      'A force inversely proportional to its density',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Archimedes\'s Principle states that a body immersed in fluid experiences an upward buoyant force equal to the weight of the fluid it displaces. This is the foundation of hydrostatics.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Archimedes proved that the area of a circle equals the area of a right triangle whose legs are:',
    options: [
      'The diameter and the circumference',
      'The radius and the circumference',
      'Twice the radius and the diameter',
      'The radius and the area of the inscribed square',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Archimedes proved that Area = ½ × circumference × radius = ½ × (2πr) × r = πr². This elegant formulation connects the circle\'s area directly to its radius and circumference.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'How did Archimedes die?',
    options: [
      'He died peacefully of old age in Alexandria',
      'He was killed by a Roman soldier when Syracuse fell',
      'He drowned in his bath during an experiment',
      'He was executed by King Hieron for treason',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'When Syracuse fell to the Romans in 212 BC, Archimedes was killed by an unknown soldier, despite orders from General Marcellus to bring him unharmed. Plutarch recorded the story in his biography of Marcellus.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What axiom, used by Archimedes in his proofs, states that given any two magnitudes, some multiple of the smaller exceeds the larger?',
    options: [
      'The Parallel Axiom',
      'The Completeness Axiom',
      'The Axiom of Archimedes',
      'The Axiom of Choice',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The Axiom of Archimedes states that given areas e and f, there exists a natural number m such that me > f. Though named after Archimedes, it actually appears earlier in Euclid\'s Elements Book V and Aristotle\'s Physics.',
  },
];
