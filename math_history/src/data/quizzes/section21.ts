import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 's21-e01',
    type: 'multiple-choice',
    question: 'What does the Arabic word "al-jabr" mean?',
    difficulty: 'easy',
    options: [
      'Restoring',
      'Calculation',
      'Equation',
      'Unknown',
    ],
    correctIndex: 0,
    explanation:
      'The word "algebra" comes from "al-jabr" meaning "restoring." In the context of equations, this meant adding equal terms to both sides.',
  },
  {
    id: 's21-e02',
    type: 'multiple-choice',
    question: 'Which word do we get from al-Khwarizmi\'s name?',
    difficulty: 'easy',
    options: [
      'Arithmetic',
      'Algebra',
      'Algorithm',
      'Analysis',
    ],
    correctIndex: 2,
    explanation:
      'The word "algorithm" derives from al-Khwarizmi\'s name. His book on algebra also gave us the word "algebra" from "al-jabr."',
  },
  {
    id: 's21-m01',
    type: 'multiple-choice',
    question:
      'Why did al-Khwarizmi\'s work become more influential than Brahmagupta\'s earlier work?',
    difficulty: 'medium',
    options: [
      'Brahmagupta\\'s work was lost',
      'Al-Khwarizmi discovered more formulas',
      'Brahmagupta used incorrect methods',
      'Arabic mathematics was positioned to unite Eastern algebra and Western geometry',
    ],
    correctIndex: 3,
    explanation:
      'Arabic mathematics developed at the right time and place to absorb both the geometry of the Greeks and the algebra of India, recognizing algebra as a separate field with its own methods.',
  },
  {
    id: 's21-m02',
    type: 'multiple-choice',
    question:
      'In al-Khwarizmi\'s geometric solution of $x^2 + 10x = 39$, what is the key step?',
    difficulty: 'medium',
    options: [
      'Factoring the left side',
      'Completing the square by adding 25',
      'Dividing by 10',
      'Taking the square root of both sides',
    ],
    correctIndex: 1,
    explanation:
      'Al-Khwarizmi completed the square by adding $25 = 5^2$ to both sides. The area $25 + 39 = 64$ gives a square of side $x + 5 = 8$, so $x = 3$.',
  },
  {
    id: 's21-h01',
    type: 'numeric',
    question:
      'Using completing the square, solve $x^2 + 6x = 7$. What is the positive solution?',
    difficulty: 'hard',
    correctAnswer: 1,
    explanation:
      'Add $(6/2)^2 = 9$ to both sides: $(x + 3)^2 = 16$. So $x + 3 = 4$, giving $x = 1$. (The negative solution is $x = -7$.)',
  },
  {
    id: 's21-h02',
    type: 'multiple-choice',
    question:
      'Without negative coefficients, how many distinct forms does the quadratic equation have?',
    difficulty: 'hard',
    options: [
      '2 forms',
      '3 forms',
      '1 form',
      '4 forms',
    ],
    correctIndex: 1,
    explanation:
      'Without negative coefficients, there are three forms: $x^2 + ax = b$, $x^2 = ax + b$, and $x^2 + b = ax$. Each required its own solution method.',
  },
];
