import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What mathematical system did Descartes invent that unified algebra and geometry?',
    options: [
      'Differential calculus',
      'The Cartesian coordinate system',
      'Boolean algebra',
      'Set theory'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Descartes invented the coordinate system that bears his name, allowing geometric shapes to be described by algebraic equations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Descartes\'s most famous philosophical statement?',
    options: [
      'Knowledge is power',
      'I think, therefore I am',
      'The unexamined life is not worth living',
      'Man is the measure of all things'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '"Cogito, ergo sum" (I think, therefore I am) was Descartes\'s foundational principle of certainty.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Descartes\'s notation, what do $x$, $y$, $z$ typically represent?',
    options: [
      'Constants',
      'Unknown quantities (variables)',
      'Exponents',
      'Coefficients'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Descartes established the convention of using letters from the end of the alphabet for unknowns.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The equation of a circle centered at the origin with radius $r$ in Cartesian coordinates is:',
    options: [
      '$x + y = r$',
      '$x^2 + y^2 = r^2$',
      '$xy = r$',
      '$x^2 - y^2 = r^2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The distance formula gives $\\sqrt{x^2 + y^2} = r$, so $x^2 + y^2 = r^2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Descartes\'s Rule of Signs helps determine:',
    options: [
      'The derivative of a polynomial',
      'The number of positive and negative real roots',
      'Whether a number is prime',
      'The area under a curve'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Rule of Signs uses sign changes in coefficients to bound the number of positive and negative real roots.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What is the title of Descartes\'s 1637 work that introduced analytic geometry (as an appendix)?',
    correctAnswer: 'Geometry',
    difficulty: 'hard',
    explanation: 'La Géométrie (Geometry) was an appendix to Discourse on the Method, introducing coordinate geometry.',
  },
];
