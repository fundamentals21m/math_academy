import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 0: Egyptian Mathematics
 */
export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two primary sources of information on ancient Egyptian mathematics?',
    options: [
      'The Cairo Codex and the Alexandria Scroll',
      'The Pyramid Texts and the Book of the Dead',
      'The Ebers Papyrus and the Edwin Smith Papyrus',
      'The Moscow Papyrus and the Rhind Papyrus',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Moscow Mathematical Papyrus (c. 1850 BC) and the Rhind Mathematical Papyrus (c. 1650 BC) are our only original sources on ancient Egyptian mathematics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What technique did the Egyptians use for multiplication?',
    options: [
      'Doubling and adding',
      'Memorized multiplication tables',
      'Repeated subtraction',
      'Geometric construction',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Egyptians multiplied by repeatedly doubling one number and then adding the appropriate doubled values. This method works because any number can be expressed as a sum of powers of 2 (binary representation).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is special about Egyptian fractions?',
    options: [
      'They expressed all fractions as sums of distinct unit fractions (1/n)',
      'They only used fractions with even denominators',
      'They never used fractions smaller than 1/10',
      'They wrote fractions in decimal form',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Egyptians insisted on expressing all fractions (except 2/3) as sums of distinct unit fractions of the form 1/n. For example, 2/9 = 1/6 + 1/18.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Using the Egyptian method, what is $12 \\times 12$? (They would double 12 repeatedly: 12, 24, 48, 96, then add 48 + 96 since $12 = 4 + 8$)',
    correctAnswer: 144,
    numericRange: { min: 0, max: 500, precision: 0 },
    difficulty: 'easy',
    explanation:
      'Since 12 = 4 + 8, we have 12 × 12 = 12 × 4 + 12 × 8 = 48 + 96 = 144.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What formula did the Egyptians use for the volume of a truncated pyramid (frustum) with base side $a$, top side $b$, and height $h$?',
    options: [
      '$V = \\frac{1}{3}h(a^2 + b^2)
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Problem 14 of the Moscow Papyrus shows the Egyptians used V = (h/3)(a² + ab + b²), which is the correct formula for a truncated pyramid.',
  },
      '$V = \\frac{1}{2}h(a + b)^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Problem 14 of the Moscow Papyrus shows the Egyptians used V = (h/3)(a² + ab + b²), which is the correct formula for a truncated pyramid.',
  },
      '$V = \\frac{h}{3}(a^2 + ab + b^2)
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Problem 14 of the Moscow Papyrus shows the Egyptians used V = (h/3)(a² + ab + b²), which is the correct formula for a truncated pyramid.',
  },
      '$V = h(a^2 + b^2)/2
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Problem 14 of the Moscow Papyrus shows the Egyptians used V = (h/3)(a² + ab + b²), which is the correct formula for a truncated pyramid.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Problem 14 of the Moscow Papyrus shows the Egyptians used V = (h/3)(a² + ab + b²), which is the correct formula for a truncated pyramid.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "According to the Rhind Papyrus, which expression equals $\\frac{2}{13}$?",
    options: [
      '$\\frac{1}{7} + \\frac{1}{91}
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The Rhind Papyrus gives 2/13 = 1/8 + 1/52 + 1/104. This can be verified: 1/8 + 1/52 + 1/104 = 13/104 + 2/104 + 1/104 = 16/104 = 2/13.',
  },
      '$\\frac{1}{13} + \\frac{1}{13}
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Rhind Papyrus gives 2/13 = 1/8 + 1/52 + 1/104. This can be verified: 1/8 + 1/52 + 1/104 = 13/104 + 2/104 + 1/104 = 16/104 = 2/13.',
  },
      '$\\frac{1}{6} + \\frac{1}{78}
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Rhind Papyrus gives 2/13 = 1/8 + 1/52 + 1/104. This can be verified: 1/8 + 1/52 + 1/104 = 13/104 + 2/104 + 1/104 = 16/104 = 2/13.',
  },
      '$\\frac{1}{8} + \\frac{1}{52} + \\frac{1}{104}
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Rhind Papyrus gives 2/13 = 1/8 + 1/52 + 1/104. This can be verified: 1/8 + 1/52 + 1/104 = 13/104 + 2/104 + 1/104 = 16/104 = 2/13.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Rhind Papyrus gives 2/13 = 1/8 + 1/52 + 1/104. This can be verified: 1/8 + 1/52 + 1/104 = 13/104 + 2/104 + 1/104 = 16/104 = 2/13.',
  },
  {
    id: 7,
    type: 'text',
    question: 'Who was the scribe who wrote the Rhind Mathematical Papyrus around 1650 BC?',
    correctAnswer: 'Ahmose',
    difficulty: 'medium',
    explanation:
      'The Rhind Papyrus was written by the scribe Ahmose around 1650 BC, about the time the Bible dates Joseph as governor of Egypt.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: "The Egyptians' approximation for $\\pi$, implied by their circle area formula, was approximately:",
    options: [
      '3.0',
      '3.16',
      '3.14',
      '3.5',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Egyptians used the formula (8/9)⁴r² for the area of a circle, which implies π ≈ 3.16, remarkably close to the true value of π ≈ 3.14159.',
  },
];
