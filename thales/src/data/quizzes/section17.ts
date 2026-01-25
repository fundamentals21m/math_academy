import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 17: Alexandria from 300 BC to 200 BC
 */
export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'Which Greek island did both Pythagoras and Aristarchus come from?',
    options: [
      'Crete',
      'Rhodes',
      'Samos',
      'Cyprus',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Aristarchus came from Samos, the same Greek island that Pythagoras came from. Aristarchus made important contributions to astronomy using mathematical methods.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'How did Aristarchus determine the relative distances of the Sun and Moon from Earth?',
    options: [
      'By measuring the angle between Sun and Moon when the Moon is at first quarter',
      'By measuring the size of Earth\\\'s shadow during a lunar eclipse',
      'By timing the duration of solar eclipses',
      'By observing the phases of Venus',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'When the Moon is at first quarter, the angle at the Moon (SME) is a right angle. Aristarchus measured the angle SEM and used trigonometry to calculate that the Sun is about 19 times farther than the Moon (the actual ratio is about 400).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'What revolutionary astronomical hypothesis did Aristarchus propose?',
    options: [
      'That the Earth is flat',
      'That the Earth orbits the Sun (heliocentric model)',
      'That the Moon is larger than the Earth',
      'That stars are very distant suns',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'According to Plutarch, Aristarchus proposed that "the Earth moves in an oblique circle about the Sun." This heliocentric model predates Copernicus by nearly 1,800 years.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'Apollonius of Perga wrote a famous treatise on conics. How many propositions did it contain?',
    options: [
      '100 propositions',
      '400 propositions',
      '200 propositions',
      '1000 propositions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Apollonius\'s treatise on Conics contained 400 propositions arranged in eight books. It was the definitive treatment of conic sections for nearly two thousand years.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'What determines whether a conic section is an ellipse, parabola, or hyperbola?',
    options: [
      'The size of the focus',
      'The color of the curve',
      'The eccentricity (ratio of distance to focus vs. distance to directrix)',
      'The length of the directrix',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The eccentricity determines the type: ellipses have eccentricity < 1 (circles have 0), parabolas have eccentricity = 1, and hyperbolas have eccentricity > 1.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What was Eratosthenes\'s position at Alexandria?',
    options: [
      'Chief librarian at the Library of Alexandria',
      'Head of the Academy',
      'Governor of the city',
      'Temple priest',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Eratosthenes of Cyrene became the chief librarian at Alexandria. His wide-ranging interests earned him the nickname "Beta" from students who felt he was second-best in many fields rather than first in one.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'How did Eratosthenes measure the circumference of the Earth?',
    options: [
      'By sailing around it',
      'By observing lunar eclipses',
      'By counting steps between cities',
      'By measuring the difference in the Sun\\\\'s angle at Alexandria vs. Syene on the summer solstice',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Eratosthenes observed that at Syene the Sun was directly overhead at noon on midsummer\'s day, while at Alexandria it was 7.2° off vertical. Knowing the distance between the cities (5,000 stadia), he calculated the full circumference.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What was Eratosthenes\'s estimate for the circumference of the Earth?',
    options: [
      'About 10,000 km',
      'About 45,000 km (250,000 stadia)',
      'About 25,000 km',
      'About 100,000 km',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Eratosthenes calculated 250,000 stadia, which is about 45,000 km. This is remarkably close to the actual value of 40,000 km—the kilometer was originally defined as 1/40,000 of the Earth\'s circumference.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'Which of these is NOT attributed to Eratosthenes?',
    options: [
      'The Sieve for finding prime numbers',
      'Inventing the Julian calendar',
      'Measuring the circumference of the Earth',
      'Proving the parallel postulate',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Eratosthenes invented the Sieve for primes, the Julian calendar (with leap years), and measured Earth\'s circumference. The parallel postulate was never proved—it is independent of Euclid\'s other axioms.',
  },
];
