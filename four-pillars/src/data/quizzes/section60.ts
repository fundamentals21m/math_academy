import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A "generalized circle" in complex analysis includes:',
    options: [
      'Only circles',
      'All conic sections',
      'Circles and straight lines',
      'Only ellipses',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Generalized circles are either circles or lines (viewed as circles through ∞).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Möbius transformations map generalized circles to:',
    options: [
      'Generalized circles',
      'Only lines',
      'Only circles',
      'Arbitrary curves'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Möbius transformations preserve the class of generalized circles (circles and lines).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Under inversion $z \\mapsto 1/z$, a line through the origin maps to:',
    options: [
      'A line through the origin',
      'A circle through the origin',
      'A circle not through the origin',
      'A line not through the origin',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Lines through the origin map to themselves under inversion (they pass through both 0 and ∞).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why do Möbius transformations preserve non-Euclidean lines?',
    options: [
      'They preserve areas',
      'They preserve distances',
      'They are linear',
      'They preserve angles and the boundary',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Non-Euclidean lines meet the boundary at right angles; conformality and boundary preservation maintain this.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Under the map $z \\mapsto 2z$, a semicircle centered at 1 with radius 1 becomes:',
    options: [
      'A semicircle centered at 1 with radius 2',
      'A vertical line',
      'A semicircle centered at 2 with radius 1',
      'A semicircle centered at 2 with radius 2'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Scaling by 2 moves the center from 1 to 2 and doubles the radius from 1 to 2.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A vertical line $x = a$ (with $a \\neq 0$) under inversion $z \\mapsto 1/z$ becomes:',
    options: [
      'A horizontal line',
      'A circle through the origin',
      'A vertical line',
      'The same vertical line',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Lines not through the origin map to circles through the origin under inversion.',
  },
];
