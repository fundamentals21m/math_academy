import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.5 prove about isosceles triangles?',
    options: [
      'The base angles are equal',
      'The base angles are supplementary',
      'The vertex angle is a right angle',
      'The sides are perpendicular',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'I.5: "In isosceles triangles the angles at the base are equal to one another."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Proposition I.5 is historically called:',
    options: [
      'Thales\\\\' Theorem',
      'The Pythagorean Theorem',
      'The Isosceles Triangle Theorem',
      'The Bridge of Asses (Pons Asinorum)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'I.5 is called the "Pons Asinorum" (Bridge of Asses) because it was considered a test that separated serious students from those who couldn\'t proceed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which earlier proposition is essential to the proof of I.5?',
    options: [
      'Proposition I.1',
      'Proposition I.3',
      'Proposition I.4 (SAS)',
      'Proposition I.2',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof extends the equal sides and uses I.4 (SAS congruence) to show certain triangles are congruent.',
  },
];
