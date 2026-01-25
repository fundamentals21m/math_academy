import type { QuizQuestion } from './types';

export const section153Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does VI.8 prove about the altitude to the hypotenuse of a right triangle?',
    options: [
      'It creates two triangles similar to each other and to the original triangle',
      'It bisects the hypotenuse',
      'It is always the longest segment in the triangle',
      'It equals the geometric mean of the legs',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VI.8 proves that the altitude to the hypotenuse creates two smaller triangles, each similar to the original and to each other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In right triangle ABC with right angle at C and altitude CD to hypotenuse AB, which of the following is true by VI.8?',
    options: [
      'Triangle ACD is similar to triangle BCD only',
      'All four triangles (ABC, ACD, CBD, and ADB) are similar',
      'Triangle ACD is similar to triangle ABC and triangle CBD',
      'Only triangles ACD and CBD are similar',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By VI.8, triangle ACD ~ triangle ABC ~ triangle CBD. The altitude creates three mutually similar triangles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VI.8 is fundamental for proving which important result?',
    options: [
      'The law of cosines',
      'That all right triangles are congruent',
      'That the sum of angles in a triangle is 180 degrees',
      'That the altitude is the geometric mean of the hypotenuse segments (and hence relates to the Pythagorean theorem)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'From VI.8, we derive that h^2 = p*q (altitude squared equals product of hypotenuse segments), which leads to an elegant proof of the Pythagorean theorem.',
  },
];
