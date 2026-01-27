import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Newton\'s method of fluxions is now called:',
    options: [
      'Algebra',
      'Geometry',
      'Calculus',
      'Statistics'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Newton\'s fluxions and fluents are what we now call derivatives and integrals in calculus.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does Newton\'s law of universal gravitation state about the force between two masses?',
    options: [
      'Force is proportional to the sum of the masses',
      'Force is inversely proportional to distance',
      'Force is constant regardless of distance',
      'Force is proportional to the product of masses and inversely proportional to distance squared'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$F = G\\frac{m_1 m_2}{r^2}$ — force is proportional to both masses and inversely proportional to distance squared.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Newton\'s famous statement "If I have seen further, it is by standing on the shoulders of giants" appeared in a letter to:',
    options: [
      'Hooke',
      'Halley',
      'Leibniz',
      'Euler'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Newton wrote this to Robert Hooke in 1675, possibly as a veiled insult since Hooke was short.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The binomial series, discovered by Newton, expands $(1+x)^n$ for:',
    options: [
      'Only positive integer $n$',
      'Any real number $n$',
      'Only negative integer $n$',
      'Only rational $n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Newton generalized the binomial theorem to work for any real exponent, giving an infinite series.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Newton\'s Principia Mathematica was published in what year?',
    correctAnswer: 1687,
    numericRange: { min: 1600, max: 1800, precision: 0 },
    difficulty: 'medium',
    explanation: 'The Principia was published in 1687, laying out the laws of motion and universal gravitation.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What fruit supposedly inspired Newton\'s discovery of gravity?',
    correctAnswer: 'apple',
    difficulty: 'easy',
    explanation: 'The famous (possibly apocryphal) story has Newton observing a falling apple and wondering about gravity.',
  },
];
