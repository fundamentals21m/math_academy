import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 's15-e01',
    type: 'multiple-choice',
    question: 'Who developed the method of exhaustion?',
    difficulty: 'easy',
    options: [
      'Pythagoras',
      'Plato',
      'Eudoxus of Cnidus',
      'Aristotle',
    ],
    correctIndex: 2,
    explanation:
      'Eudoxus of Cnidus (c. 408-355 BCE) developed the method of exhaustion, which was later perfected by Archimedes.',
  },
  {
    id: 's15-e02',
    type: 'multiple-choice',
    question: 'The method of exhaustion proves areas by:',
    difficulty: 'easy',
    options: [
      'Direct measurement with rulers',
      'Counting unit squares',
      'Using algebraic formulas',
      'Double contradiction: showing the area is neither greater nor less than the claimed value',
    ],
    correctIndex: 3,
    explanation:
      'The method of exhaustion uses double reductio ad absurdum: it proves the area cannot be greater than the claimed value (using inscribed polygons) and cannot be less (using circumscribed polygons).',
  },
  {
    id: 's15-m01',
    type: 'multiple-choice',
    question:
      'What is the Axiom of Eudoxus (Archimedean Property)?',
    difficulty: 'medium',
    options: [
      ',
  },
      ',
      'Every circle has area $\\pi r^2
    correctIndex: 0,
    explanation:
      ',
      ',
      ',
      ',
      ',
    ],
    correctIndex: 3,
    explanation:
      'The Axiom of Eudoxus states that for any two magnitudes A < B, there exists n such that nA > B. This rules out infinitesimals and ensures inscribed polygons can get arbitrarily close to the curved figure.',
  },
  {
    id: 's15-m02',
    type: 'multiple-choice',
    question:
      'In Archimedes\' quadrature of the parabola, what fraction of the main triangle\'s area equals the parabolic segment\'s area?',
    difficulty: 'medium',
    options: ['1/2', '2/3', '4/3', '3/2'],
    correctIndex: 2,
    explanation:
      'Archimedes proved the parabolic segment has area $4/3$ times the inscribed triangle: $T(1 + 1/4 + 1/16 + \\cdots) = T \\cdot \\frac{4}{3}$.',
  }= T \\cdot \\frac{4}{3}$.',
  },
  {
    id: 's15-h01',
    type: 'multiple-choice',
    question:
      'Why was the method of exhaustion eventually replaced by calculus?',
    difficulty: 'hard',
    options: [
      'It gave wrong answers',
      'It was too easy',
      'It required knowing the answer first and had no general algorithm',
      'Archimedes asked mathematicians to stop using it',
    ],
    correctIndex: 2,
    explanation:
      'The method of exhaustion required guessing the answer first, then proving it correct via lengthy contradiction arguments. Calculus provides systematic algorithms that work for any problem, making it far more practical.',
  },
  {
    id: 's15-h02',
    type: 'numeric',
    question:
      'In the parabola quadrature, if the main inscribed triangle has area 12, what is the area of the parabolic segment?',
    difficulty: 'hard',
    correctAnswer: 16,
    explanation:
      'The parabolic segment has area $\\frac{4}{3}T = \\frac{4}{3} \\times 12 = 16$.',
  },
];
