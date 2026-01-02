import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 27: The Seventeenth Century Continued
 */
export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What method did Cavalieri rediscover for calculating areas and volumes?',
    options: [
      'The method of exhaustion',
      'The method of indivisibles',
      'The method of limits',
      'The method of fluxions',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Cavalieri rediscovered Archimedes\'s method of indivisibles, which thought of areas as "sums" of infinitely many lines. His most important result was ∫x^n dx = x^(n+1)/(n+1).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What notation did Wallis introduce to algebra?',
    options: [
      'The equals sign (=)',
      'Negative and fractional exponents',
      'The integral symbol (∫)',
      'The derivative notation (dy/dx)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Wallis introduced negative and fractional exponents: x^(-n) = 1/x^n and x^(p/q) = the qth root of x^p. He also discovered an infinite product formula for π.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What series did Gregory discover that gives π/4?',
    options: [
      '1 + 1/2 + 1/3 + 1/4 + ...',
      '1 - 1/2 + 1/3 - 1/4 + ...',
      '1 - 1/3 + 1/5 - 1/7 + ...',
      '1 + 1/4 + 1/9 + 1/16 + ...',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Gregory\'s series gives π/4 = 1 - 1/3 + 1/5 - 1/7 + ... This comes from his arctangent series evaluated at x = 1 (since arctan(1) = π/4).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why did Isaac Barrow resign his Cambridge professorship in 1669?',
    options: [
      'He was forced out due to controversy',
      'He wanted to pursue business interests',
      'So that the young Newton might take his place',
      'He was appointed to a government position',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Barrow resigned his professorship of geometry at Cambridge so that the young Newton might take his place. Thereafter, Barrow devoted himself to divinity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What did Newton call derivatives?',
    options: [
      'Differentials',
      'Infinitesimals',
      'Fluxions',
      'Variations',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Newton called derivatives "fluxions" and wrote ẋ for the first derivative with respect to time. He called indefinite integrals "fluents" and definite integrals "quadratures."',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'During which period did Newton withdraw to his family farm and think about gravitation?',
    options: [
      'The Great Fire of London (1666)',
      'The plague years (1665-66)',
      'The Glorious Revolution (1688)',
      'The Civil War (1642-51)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'During the plague of 1665-66, Newton withdrew to the family farm, where he thought about gravitation and made other fundamental discoveries. This period is sometimes called his "annus mirabilis" (miracle year).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What mathematical difficulty delayed Newton\'s publication of the Principia by 20 years?',
    options: [
      'He couldn\'t solve the three-body problem',
      'He needed to prove that a sphere gravitates as if all its mass were at the center',
      'He was waiting for better astronomical data',
      'He was involved in a priority dispute with Leibniz',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Newton initially assumed planets were points, but wasn\'t satisfied with this approximation. It took him about 20 years to prove that a solid sphere gravitates as if all its mass were concentrated at its center. Only then did he publish the Principia.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is Newton\'s Law of Gravitation?',
    options: [
      'F = ma',
      'F = GMm/r²',
      'E = mc²',
      'F = kx',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Newton\'s Law of Gravitation states that the force between two bodies with masses M and m, separated by distance r, is F = GMm/r², where G is a universal constant. This inverse square law implies Kepler\'s laws.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What government position did Newton hold after leaving Cambridge?',
    options: [
      'Chancellor of the Exchequer',
      'Master of the Mint',
      'Royal Astronomer',
      'Secretary to the Royal Society',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In 1696, Newton abandoned his Cambridge professorship for a government position in London, and three years later he was Master of the Mint. He was knighted in 1705.',
  },
];
