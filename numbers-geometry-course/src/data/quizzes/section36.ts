import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 36: Discussion - Diophantus and His Legacy
 */
export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When did Diophantus of Alexandria live?',
    options: [
      '150-300 A.D.',
      '500-400 B.C.',
      '300-200 B.C.',
      '500-600 A.D.',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Diophantus lived sometime between 150 A.D. and 300 A.D. in Alexandria. His exact dates are uncertain, but he represents the last peak of classical Greek mathematics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Diophantus\'s major surviving work called?',
    options: [
      'Elements',
      'Almagest',
      'Arithmetica',
      'Conics',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Diophantus\'s major work is the Arithmetica, a collection of problems about finding integers or rationals satisfying various conditions. It inspired Fermat and Euler.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are "Diophantine equations"?',
    options: [
      'Equations with complex solutions',
      'Quadratic equations only',
      'Equations without solutions',
      'Equations to be solved in integers or rationals',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Diophantine equations are equations to be solved in integers or rational numbers, named in honor of Diophantus. They combine algebra, geometry, and number theory.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which famous mathematician praised Diophantus\'s methods as "as general as those in use today"?',
    options: [
      'Newton',
      'Gauss',
      'Euler',
      'Fermat',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Euler praised Diophantus, writing that his methods "are as general as those which are in use today" and that "there is hardly any method yet invented... of which there are not sufficiently distinct traces to be discovered in Diophantus."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is special about rational points on cubic curves (elliptic curves)?',
    options: [
      'There are always infinitely many',
      'They form a finitely generated group',
      'There are always none',
      'They cannot be studied geometrically',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Mordell\'s theorem (1922) states that the rational points on an elliptic curve form a finitely generated group. This is much more subtle than the quadratic case, where there are either 0 or infinitely many points.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'In what year was Fermat\'s Last Theorem finally proved by Andrew Wiles?',
    correctAnswer: 1995,
    numericRange: { min: 1990, max: 2000, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Andrew Wiles proved Fermat\'s Last Theorem in 1995, using deep connections between elliptic curves and modular forms. The theorem had remained unproved for over 350 years.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is Diophantus\'s method of lines powerful for quadratic curves?',
    options: [
      'It avoids all computation',
      'It works for all polynomial equations',
      'It finds integer points directly',
      'One rational point generates infinitely many via lines of rational slope',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'For quadratic curves with rational coefficients, one rational point plus lines of rational slope generate all rational points. This is why such curves have either 0 or infinitely many rational points.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the Birch and Swinnerton-Dyer (BSD) conjecture about?',
    options: [
      'Prime numbers',
      'Rational points on elliptic curves',
      'Non-Euclidean geometry',
      'Pythagorean triples',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The BSD conjecture connects the number of rational points on an elliptic curve to properties of an associated analytic function. It is one of the Millennium Prize Problems, with a $1 million reward.',
  },
];
