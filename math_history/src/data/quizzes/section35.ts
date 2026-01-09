import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 's35-e01',
    type: 'multiple-choice',
    question: 'What is the brachistochrone problem?',
    difficulty: 'easy',
    options: [
      'Finding the shortest distance between two points',
      'Finding the curve of fastest descent under gravity',
      'Finding the area under a curve',
      'Finding the tangent to a curve',
    ],
    correctIndex: 1,
    explanation:
      'The brachistochrone ("shortest time" in Greek) asks: what curve allows a bead sliding under gravity to travel between two points in the least time? Surprisingly, it\'s not a straight line!',
  },
  {
    id: 's35-e02',
    type: 'multiple-choice',
    question: 'What curve is the solution to the brachistochrone problem?',
    difficulty: 'easy',
    options: [
      'A straight line',
      'A parabola',
      'A cycloid',
      'A circle',
    ],
    correctIndex: 2,
    explanation:
      'The brachistochrone is a cycloid—the curve traced by a point on the rim of a rolling wheel. Johann Bernoulli posed this problem in 1696, and it was solved by Newton, Leibniz, L\'Hôpital, and both Bernoulli brothers.',
  },
  {
    id: 's35-m01',
    type: 'multiple-choice',
    question: 'What special property does the cycloid have besides being the brachistochrone?',
    difficulty: 'medium',
    options: [
      'It has constant curvature',
      'It is the tautochrone (isochronous curve)',
      'It has no inflection points',
      'It is algebraic',
    ],
    correctIndex: 1,
    explanation:
      'The cycloid is also the tautochrone: a bead sliding on an inverted cycloid reaches the bottom in the same time regardless of starting position. Huygens discovered this in 1673 and used it to design pendulum clocks.',
  },
  {
    id: 's35-m02',
    type: 'multiple-choice',
    question: 'What shape does a hanging chain take under its own weight?',
    difficulty: 'medium',
    options: [
      'A parabola',
      'A circular arc',
      'A catenary ($y = a\\cosh(x/a)$)',
      'A cycloid',
    ],
    correctIndex: 2,
    explanation:
      'A flexible chain hanging under its own weight forms a catenary, $y = a\\cosh(x/a)$. Galileo thought it was a parabola, but Leibniz, Huygens, and Johann Bernoulli found the true answer in 1691.',
  },
  {
    id: 's35-h01',
    type: 'multiple-choice',
    question:
      'What did Newton prove about planetary orbits using calculus?',
    difficulty: 'hard',
    options: [
      'Planets move in circles',
      'An inverse-square force law implies elliptical orbits',
      'Gravity only affects nearby objects',
      'The speed of planets is constant',
    ],
    correctIndex: 1,
    explanation:
      'Newton showed that if gravity follows an inverse-square law ($F \\propto 1/r^2$), then orbits must be conic sections (ellipses for bound orbits). This mathematically derived what Kepler had discovered empirically.',
  },
  {
    id: 's35-h02',
    type: 'multiple-choice',
    question:
      'Who reportedly solved the brachistochrone problem in one evening after receiving it at 4 PM?',
    difficulty: 'hard',
    options: [
      'Leibniz',
      'Johann Bernoulli',
      'Newton',
      'Euler',
    ],
    correctIndex: 2,
    explanation:
      'Newton received Bernoulli\'s challenge at 4 PM after a tiring day at the Royal Mint. He solved it before bed and sent his solution anonymously. Bernoulli recognized the author: "I recognize the lion by his claw."',
  },
];
