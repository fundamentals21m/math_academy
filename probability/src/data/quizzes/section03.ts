import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 's03-q1',
    type: 'multiple-choice',
    question: 'What is a permutation?',
    options: [
      'An ordered arrangement of objects',
      'An unordered selection of objects',
      'A random sample of objects',
      'A probability distribution',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A permutation is an ordered arrangement of objects. When order matters, we count permutations.'
  },
  {
    id: 's03-q2',
    type: 'numeric',
    question: 'How many ways can 6 different books be arranged on a shelf?',
    correctAnswer: 720,
    numericRange: { min: 0, max: 10000, precision: 0 },
    difficulty: 'easy',
    explanation: '$6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720$'
  },
  {
    id: 's03-q3',
    type: 'multiple-choice',
    question: 'The formula for $P(n,r)$, the number of $r$-permutations of $n$ objects, is:',
    options: [
      '$n^r$',
      '$\\frac{n!}{r!}$',
      '$\\frac{n!}{r!(n-r)!}$',
      '$\\frac{n!}{(n-r)!}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(n,r) = n(n-1)(n-2)\\cdots(n-r+1) = \\frac{n!}{(n-r)!}$'
  },
  {
    id: 's03-q4',
    type: 'numeric',
    question: 'A club with 10 members elects a president, vice president, and treasurer. How many ways can this be done?',
    correctAnswer: 720,
    numericRange: { min: 0, max: 10000, precision: 0 },
    difficulty: 'medium',
    explanation: '$P(10,3) = 10 \\cdot 9 \\cdot 8 = 720$'
  },
  {
    id: 's03-q5',
    type: 'multiple-choice',
    question: 'How many circular permutations are there of $n$ distinct objects?',
    options: [
      '$n!
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For circular arrangements, rotations are considered identical, so we fix one object and arrange the remaining $(n-1)$ objects, giving $(n-1)!$ arrangements.'
  },
      '$(n-1)!
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For circular arrangements, rotations are considered identical, so we fix one object and arrange the remaining $(n-1)$ objects, giving $(n-1)!$ arrangements.'
  },
      '$(n+1)!
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For circular arrangements, rotations are considered identical, so we fix one object and arrange the remaining $(n-1)$ objects, giving $(n-1)!$ arrangements.'
  },
      '$\\frac{n!}{2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For circular arrangements, rotations are considered identical, so we fix one object and arrange the remaining $(n-1)$ objects, giving $(n-1)!$ arrangements.'
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For circular arrangements, rotations are considered identical, so we fix one object and arrange the remaining $(n-1)$ objects, giving $(n-1)!$ arrangements.'
  },
  {
    id: 's03-q6',
    type: 'numeric',
    question: 'How many distinguishable arrangements are there of the letters in MISSISSIPPI?',
    correctAnswer: 34650,
    numericRange: { min: 0, max: 100000, precision: 0 },
    difficulty: 'hard',
    explanation: 'MISSISSIPPI has 11 letters: 1 M, 4 I\'s, 4 S\'s, 2 P\'s. The answer is $\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39916800}{1 \\cdot 24 \\cdot 24 \\cdot 2} = 34650$'
  }
];
