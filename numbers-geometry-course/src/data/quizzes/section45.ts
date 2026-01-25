import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 45: Discussion (Trigonometry chapter summary)
 */
export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'What is the Leibniz formula for π/4?',
    options: [
      'π/4 = 1 + 1/2 + 1/3 + 1/4 + ...',
      'π/4 = 1 - 1/3 + 1/5 - 1/7 + ...',
      'π/4 = 1/1² + 1/2² + 1/3² + ...',
      'π/4 = √2/2',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Leibniz formula is π/4 = 1 - 1/3 + 1/5 - 1/7 + ..., an alternating sum of reciprocals of odd numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'What was mathematically significant about Viète\'s product formula for π?',
    options: [
      'It was the first approximation of π',
      'It proved π is rational',
      'It used only whole numbers',
      'It was the first infinite product in mathematics',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Viète\'s formula (1593) was the first infinite product in mathematics, expressing 2/π as an infinite product of nested square roots.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'What does the word "trigonometry" literally mean?',
    options: [
      'Circle measurement',
      'Angle calculation',
      'Wave analysis',
      'Triangle measurement',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'From Greek: trigonon (triangle) + metron (measure). Though the subject has grown far beyond triangles.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'Which formula connects trigonometry to complex numbers?',
    options: [
      'The Pythagorean theorem',
      'The tangent addition formula',
      'De Moivre\\'s formula: e^(iθ) = cos θ + i sin θ',
      'The law of cosines',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'De Moivre\'s formula (and Euler\'s formula e^(iθ) = cos θ + i sin θ) beautifully connects trigonometry to complex numbers.',
  },
  {
    id: 5,
    type: 'numeric',
    question:
      'In what year was the Leibniz formula for π rediscovered in Europe (approximately)?',
    correctAnswer: 1670,
    numericRange: { min: 1660, max: 1680, precision: 0 },
    difficulty: 'medium',
    explanation:
      'The formula was discovered in India around 1500 A.D. and rediscovered in Europe around 1670 by Leibniz and others.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What physical phenomena are described by circular functions?',
    options: [
      'Only planetary orbits',
      'Waves, vibrations, and harmonic motion',
      'Only sound waves',
      'Linear motion',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Circular functions describe all kinds of periodic phenomena: sound waves, light waves, vibrations, tides, and any oscillating system.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What connects the tangent addition formula to Pythagorean triples?',
    options: [
      'Rational slopes correspond to rational points on the circle, hence Pythagorean triples',
      'They are unrelated',
      'Both use the number 3',
      'Both were discovered by Pythagoras',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'A rational slope t gives a rational point ((1-t²)/(1+t²), 2t/(1+t²)) on the circle, corresponding to a Pythagorean triple.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What topic follows Trigonometry in this course?',
    options: [
      'Calculus',
      'Complex Numbers',
      'Finite Arithmetic',
      'Differential Equations'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The next chapter explores Finite Arithmetic—modular arithmetic, clock math, and algebraic structures based on remainders.',
  },
];
