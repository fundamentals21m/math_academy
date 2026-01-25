import type { QuizQuestion } from './types';

export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Proposition I.48?',
    options: [
      'A generalization of I.47',
      'A special case of I.47',
      'The proof of I.47 for isosceles right triangles',
      'The converse of I.47 (the Pythagorean theorem)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'I.48 is the converse: if $a^2 + b^2 = c^2$, then the angle opposite side $c$ is a right angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What proof technique does I.48 use?',
    options: [
      'Direct computation',
      'Proof by contradiction',
      'Constructing a right triangle and using SSS congruence',
      'Using similar triangles',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'I.48 constructs a right triangle with the same two shorter sides, uses I.47 to show the hypotenuses are equal, then I.8 (SSS) to prove congruence.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is I.48 practically useful?',
    options: [
      'It allows calculating areas',
      'It lets us verify right angles using only length measurements (like the 3-4-5 triangle)',
      'It constructs perfect circles',
      'It proves all triangles are right triangles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.48 means we can verify a right angle by measuring sides: if $3^2 + 4^2 = 5^2$, the angle is right. Used in construction for millennia.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'With I.47 and I.48, what has Euclid established?',
    options: [
      'Only that the Pythagorean theorem is true',
      'That all triangles satisfy the Pythagorean theorem',
      'Only that the converse is true',
      'A complete characterization: right triangle iff $a^2 + b^2 = c^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Together, I.47 and I.48 prove: a triangle has a right angle if and only if the sum of squares on two sides equals the square on the third.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Together, I.47 and I.48 prove: a triangle has a right angle if and only if the sum of squares on two sides equals the square on the third.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does the completion of I.48 signify in Book I?',
    options: [
      'The climax and end of Book I, completing the theory of plane geometry foundations',
      'The beginning of number theory',
      'The introduction to Book II',
      'The definition of squares',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'I.47-48 are the crowning achievements of Book I, bringing together all the earlier propositions into the famous Pythagorean theorem and its converse.',
  },
];
