import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 31: Pythagorean Triples in Diophantus
 */
export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Around what year did Diophantus discover his method for Pythagorean triples?',
    options: [
      '500 B.C.',
      '300 B.C.',
      '250 A.D.',
      '1000 A.D.',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Diophantus discovered his method around 250 A.D. and presented it in his book the Arithmetica.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "rational point" on the unit circle?',
    options: [
      'Any point on the circle',
      'A point at a rational angle',
      'The center of the circle',
      'A point with both coordinates rational',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A rational point is a point (x, y) where both x and y are rational numbers. Finding rational points on x² + y² = 1 is equivalent to finding Pythagorean triples.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What known point on the unit circle does Diophantus use to start his construction?',
    options: [
      '(0, 0)',
      '(-1, 0)',
      '(1, 0)',
      '(0, 1)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Diophantus uses the obvious rational point (-1, 0) on the unit circle. Lines through this point with rational slope intersect the circle at other rational points.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Diophantus\'s formula for rational points on $x^2 + y^2 = 1$ is:',
    options: [
      '$x = \\frac{1-t^2}{1+t^2}$, $y = \\frac{2t}{1+t^2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Diophantus\'s formula is x = (1-t²)/(1+t²), y = 2t/(1+t²). These give all rational points on the circle except (-1, 0) as t varies over rational values.',
  },
      '$x = t$, $y = 1-t
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Diophantus\'s formula is x = (1-t²)/(1+t²), y = 2t/(1+t²). These give all rational points on the circle except (-1, 0) as t varies over rational values.',
  },
      '$x = \\cos t$, $y = \\sin t
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Diophantus\'s formula is x = (1-t²)/(1+t²), y = 2t/(1+t²). These give all rational points on the circle except (-1, 0) as t varies over rational values.',
  },
      '$x = t^2$, $y = 1-t^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Diophantus\'s formula is x = (1-t²)/(1+t²), y = 2t/(1+t²). These give all rational points on the circle except (-1, 0) as t varies over rational values.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Diophantus\'s formula is x = (1-t²)/(1+t²), y = 2t/(1+t²). These give all rational points on the circle except (-1, 0) as t varies over rational values.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Diophantus\'s formula relate to Euclid\'s?',
    options: [
      'Setting $t = v/u$ recovers Euclid\\\\'s formula',
      'They are completely different',
      'Euclid\\\\'s is more general',
      'Diophantus came first',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Setting t = v/u in Diophantus\'s formula and clearing denominators gives (2uv, u² - v², u² + v²), which is exactly Euclid\'s formula.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is a "rational function"?',
    options: [
      'A function whose values are always rational',
      'A function with rational domain',
      'A function built from a variable and constants by +, −, ×, ÷',
      'A function that equals a ratio',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A rational function is built from a variable t and constants using only the rational operations: addition, subtraction, multiplication, and division.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which function can be "rationalized" using Diophantus\'s substitution?',
    options: [
      '$\\sqrt{1 - x^3}
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      '√(1-x²) can be rationalized by substituting x = (1-t²)/(1+t²), giving √(1-x²) = 2t/(1+t²). In contrast, √(1-x³) and √(1-x⁴) cannot be rationalized—a deep fact.',
  },
      '$\\sqrt{1 - x^4}
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      '√(1-x²) can be rationalized by substituting x = (1-t²)/(1+t²), giving √(1-x²) = 2t/(1+t²). In contrast, √(1-x³) and √(1-x⁴) cannot be rationalized—a deep fact.',
  },
      '$\\sqrt{x}
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      '√(1-x²) can be rationalized by substituting x = (1-t²)/(1+t²), giving √(1-x²) = 2t/(1+t²). In contrast, √(1-x³) and √(1-x⁴) cannot be rationalized—a deep fact.',
  },
      '$\\sqrt{1 - x^2}
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      '√(1-x²) can be rationalized by substituting x = (1-t²)/(1+t²), giving √(1-x²) = 2t/(1+t²). In contrast, √(1-x³) and √(1-x⁴) cannot be rationalized—a deep fact.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      '√(1-x²) can be rationalized by substituting x = (1-t²)/(1+t²), giving √(1-x²) = 2t/(1+t²). In contrast, √(1-x³) and √(1-x⁴) cannot be rationalized—a deep fact.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why is Diophantus\'s formula simpler than Euclid\'s?',
    options: [
      'It uses smaller numbers',
      'It avoids square roots',
      'It works for all triangles',
      'It uses only one parameter instead of three',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Diophantus\'s formula uses only the single parameter t, while Euclid\'s requires three parameters u, v, and w. Working with rationals instead of integers simplifies the story considerably.',
  },
];
