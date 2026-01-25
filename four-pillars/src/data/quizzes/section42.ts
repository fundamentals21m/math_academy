import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Converse Desargues Theorem states that if corresponding sides of two triangles meet on a line, then:',
    options: [
      'The triangles are in perspective from a point',
      'The triangles are congruent',
      'The triangles share a vertex',
      'The triangles are similar',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The converse reverses the original: sides meeting on a line implies perspective from a point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Scissors Theorem involves two quadrilaterals with vertices alternately on:',
    options: [
      'A circle',
      'A single line',
      'Four lines',
      'Two lines',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The scissors configuration has quadrilateral vertices alternating between two lines.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the Scissors Theorem, if three pairs of corresponding sides are parallel, then:',
    options: [
      'All vertices coincide',
      'The lines are perpendicular',
      'The quadrilaterals are congruent',
      'The fourth pair is also parallel',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The scissors theorem shows that if three pairs of sides are parallel, so is the fourth pair.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Converse Desargues Theorem is proved using:',
    options: [
      'Coordinate geometry',
      'The Pythagorean theorem',
      'The Desargues theorem itself',
      'Circle properties'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The converse is deduced from the original Desargues theorem by a proof by contradiction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To prove the Scissors Theorem, one first shows that triangles ABE and A′B′E′ are:',
    options: [
      'Congruent',
      'In perspective from the intersection of AA′ and BB′',
      'Reflections of each other',
      'Similar with ratio 2',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The proof uses the converse Desargues theorem to show these triangles are in perspective from a point.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Moulton himself showed his plane fails the Desargues theorem by:',
    options: [
      'Constructing parallel lines that meet',
      'Showing that its converse fails',
      'Using complex numbers',
      'Finding non-collinear points on a line',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Moulton used the failure of the converse Desargues theorem to demonstrate the failure of Desargues.',
  },
];
