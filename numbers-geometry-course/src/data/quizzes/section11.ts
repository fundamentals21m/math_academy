import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 11: Constructions
 */
export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two basic tools of Euclidean geometry?',
    options: [
      'Protractor and ruler',
      'Compass and calculator',
      'Ruler and set square',
      'Ruler and compass',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euclidean geometry uses the ruler (for drawing straight lines) and the compass (for drawing circles) as its two basic construction tools.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Euclid\'s first proposition in the Elements?',
    options: [
      'Construction of an equilateral triangle',
      'The Pythagorean theorem',
      'The parallel postulate',
      'Bisecting an angle',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Euclid\'s first proposition shows how to construct an equilateral triangle with a given side, using two intersecting circles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How do you construct a perpendicular to a line through an external point $O$?',
    options: [
      'Use a protractor',
      'Draw a circle centered at $O$ that cuts the line at two points, then bisect the angle',
      'Draw parallel lines',
      'It is impossible with ruler and compass',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Draw a circle centered at O large enough to cut the line at points A and B. The bisector of angle AOB is the required perpendicular.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What year did Gauss discover how to construct the regular 17-gon?',
    options: [
      '1637',
      '1837',
      '1796',
      '1899',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Gauss discovered the construction of the regular 17-gon in 1796, leading to a complete algebraic theory of constructibility.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The regular $n$-gon is constructible if and only if $n$ is:',
    options: [
      'A product of a power of 2 and distinct Fermat primes',
      'Any prime number',
      'A power of 2',
      'Any odd number',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Gauss-Wantzel theorem states that the regular n-gon is constructible iff n is a product of a power of 2 by distinct Fermat primes (primes of the form $2^{2^k} + 1$).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To divide segment $AB$ into $n$ equal parts, you need to construct:',
    options: [
      'Perpendicular lines',
      'Circles only',
      'Parallel lines',
      'Nothing—it cannot be done',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'To divide AB into n equal parts, mark n equally spaced points on any line through A, join the last to B, then draw parallels through the others. These cut AB into n equal parts.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Who completed the algebraic theory of constructibility started by Gauss?',
    options: [
      'Euclid',
      'Descartes',
      'Hilbert',
      'Pierre Wantzel',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Pierre Wantzel completed the theory in 1837, proving which regular polygons can and cannot be constructed with ruler and compass.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why can the regular 7-gon NOT be constructed with ruler and compass?',
    options: [
      'It was simply never discovered',
      '7 is not of the form "power of 2 times distinct Fermat primes"',
      'The ancient Greeks forbade it',
      'It requires a protractor',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The regular 7-gon is impossible because 7 is not a Fermat prime (it is not of the form $2^{2^k} + 1$) and cannot be expressed as required by the Gauss-Wantzel theorem.',
  },
];
