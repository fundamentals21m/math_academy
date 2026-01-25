import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 33: Rational Points on Quadratic Curves
 */
export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'What is required for Diophantus\'s method to find all rational points on a quadratic curve?',
    options: [
      'The curve must be a circle',
      'The curve must pass through the origin',
      'The curve must have rational coefficients',
      'The curve must be symmetric',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The curve must have rational coefficients. Otherwise, a line with rational slope through a rational point may intersect the curve at an irrational point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'If a quadratic curve with rational coefficients has one rational point, how many does it have?',
    options: [
      'Exactly one',
      'Infinitely many',
      'Finitely many',
      'Exactly two',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'If a quadratic curve with rational coefficients has one rational point, it has infinitely many, because there are infinitely many lines of rational slope through any point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The curve $x^2 + y^2 = 3$ has:',
    options: [
      'Infinitely many rational points',
      'Exactly one rational point',
      'No rational points',
      'Exactly four rational points',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The curve x² + y² = 3 has no rational points. This can be proved by considering remainders modulo 4: the sum of two squares cannot leave remainder 3 mod 4.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'Why does the curve $y = \\sqrt{2}x^2$ fail to have the expected rational points?',
    options: [
      'Its coefficient is irrational',
      'It has no rational point to start from',
      'It is not a closed curve',
      'It is not a quadratic curve',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The curve y = √2·x² has irrational coefficient √2. Even though (0,0) is a rational point and y = x has rational slope, the second intersection x = 1/√2 is irrational.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'For the hyperbola $x^2 - dy^2 = 1$, what are the rational points (except $(-1,0)$)?',
    options: [
      '$x = \\frac{1-t^2}{1+t^2}$, $y = \\frac{2t}{1+t^2}
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The rational points on x² - dy² = 1 (other than (-1,0)) are given by x = (1+dt²)/(1-dt²), y = 2t/(1-dt²) for rational t.',
  },
      '$x = t^2$, $y = t
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The rational points on x² - dy² = 1 (other than (-1,0)) are given by x = (1+dt²)/(1-dt²), y = 2t/(1-dt²) for rational t.',
  },
      '$x = 1+t$, $y = t
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The rational points on x² - dy² = 1 (other than (-1,0)) are given by x = (1+dt²)/(1-dt²), y = 2t/(1-dt²) for rational t.',
  },
      '$x = \\frac{1+dt^2}{1-dt^2}$, $y = \\frac{2t}{1-dt^2}
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The rational points on x² - dy² = 1 (other than (-1,0)) are given by x = (1+dt²)/(1-dt²), y = 2t/(1-dt²) for rational t.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The rational points on x² - dy² = 1 (other than (-1,0)) are given by x = (1+dt²)/(1-dt²), y = 2t/(1-dt²) for rational t.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What argument shows that $x^2 + y^2 = 3$ has no rational points?',
    options: [
      'The equation has no real solutions',
      'The discriminant is negative',
      'Apply Fermat\\\\'s Last Theorem',
      'Consider remainders modulo 4',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Squares modulo 4 are 0 or 1. So u² + v² mod 4 can only be 0, 1, or 2. But 3w² mod 4 is 0 or 3. Since these don\'t overlap (except both 0, which forces a common factor), there\'s no solution.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'Who first stated that $x^2 + y^2 = 15$ has no rational solution?',
    options: [
      'Euclid',
      'Diophantus',
      'Pythagoras',
      'Brahmagupta',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Diophantus stated in his Arithmetica (Book VI, Problem 14) that x² + y² = 15 has no rational solution. The argument is the same as for x² + y² = 3, since 15 ≡ 3 (mod 4).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What is the dichotomy for rational points on quadratic curves with rational coefficients?',
    options: [
      'Either 0 or infinitely many rational points',
      'Either 0 or 1 rational points',
      'Either finitely many or countably many',
      'Either rational or irrational points',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A quadratic curve with rational coefficients has either no rational points or infinitely many. There is no in-between: one rational point generates all others via lines of rational slope.',
  },
];
