import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 25: Renaissance Mathematics Continued
 */
export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who invented logarithms, spending 20 years constructing the tables?',
    options: [
      'Henry Briggs',
      'John Napier',
      'Simon Stevin',
      'Johann Kepler',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'John Napier (1550-1617), a Scottish aristocrat, spent 20 years constructing tables of logarithms. His "Construction of the Wonderful Canon of Logarithms" was published in 1619, two years after his death.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What terms did Henry Briggs introduce for the parts of a logarithm?',
    options: [
      'Numerator and denominator',
      'Mantissa and characteristic',
      'Base and exponent',
      'Integer and fraction',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Briggs introduced the terms "mantissa" (the decimal part) and "characteristic" (the integer part) for base-10 logarithms. The practical advantage is that 173, 17.3, 1.73, and 0.173 all have the same mantissa.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What did Galileo discover by timing a swinging lamp with his pulse?',
    options: [
      'The speed of light',
      'The period of oscillation is independent of amplitude',
      'The law of falling bodies',
      'The rotation of the Earth',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'According to legend, Galileo used his pulse to time a swinging lamp during church services and discovered that the period of a pendulum\'s oscillation does not depend on the amplitude. This discovery led to pendulum clocks.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What celestial discovery did Galileo make in 1610 using the telescope?',
    options: [
      'The rings of Saturn',
      'The moons of Jupiter',
      'The planet Neptune',
      'Sunspots',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Galileo was the first to use the telescope for astronomy (1609) and discovered the moons of Jupiter in 1610. These discoveries seemed to support the Copernican heliocentric hypothesis.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What geometric shapes did Kepler initially try to use to explain planetary distances?',
    options: [
      'The conic sections',
      'The five Platonic solids',
      'Regular polygons',
      'Spheres and cylinders',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Kepler\'s "Cosmic Mystery" tried to explain planetary distances using the five Platonic solids nested between the six known planetary orbits. Though we don\'t attribute significance to this today, it led him to seek better observational data.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is Kepler\'s First Law of planetary motion?',
    options: [
      'Planets move in circular orbits',
      'Planets move in elliptical orbits with the Sun at one focus',
      'Planets move at constant speed',
      'All planets have the same orbital period',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Kepler\'s First Law (1609) states that each planet describes an ellipse with the Sun at one focus. This was a major break from the ancient assumption of circular orbits.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'According to Kepler\'s Third Law, what quantity is proportional to the cube of a planet\'s orbital semi-major axis?',
    options: [
      'The planet\'s mass',
      'The planet\'s velocity',
      'The square of the planet\'s orbital period',
      'The planet\'s distance from Earth',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Kepler\'s Third Law (1619) states that T² ∝ a³, where T is the orbital period and a is the semi-major axis. This law was later confirmed by Newton\'s theory of universal gravitation.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Whose astronomical observations did Kepler use to formulate his laws?',
    options: [
      'Ptolemy',
      'Copernicus',
      'Galileo',
      'Tycho Brahe',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Kepler used the highly accurate observational data of Tycho Brahe (1546-1601), a Danish astronomer. Kepler became Brahe\'s assistant in Prague in 1599 and inherited his data after Brahe\'s death in 1601.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What cynical view did Kepler express about astrology?',
    options: [
      'It was completely true and scientific',
      'It was the most important branch of mathematics',
      '"The daughter must support the mother by her charms" — astronomers needed it for income',
      'It should be banned by the Church',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Kepler wrote that it was fine for philosophers to criticize the "daughter" of astronomy (astrology), without realizing that "the daughter must support the mother by her charms." He pointed out that astronomers couldn\'t make a living unless they encouraged belief in horoscopes.',
  },
];
