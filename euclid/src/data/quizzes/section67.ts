import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.3 state about a diameter and a chord?',
    options: [
      'A diameter is the longest chord',
      'If a diameter bisects a chord (not a diameter), it is perpendicular to it',
      'All chords are parallel to a diameter',
      'A diameter divides the circle into equal arcs'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.3 states that if a diameter bisects a chord that is not a diameter, then it cuts the chord at right angles; and if at right angles, it bisects the chord.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to III.3, what is the relationship between perpendicularity and bisection for a diameter and chord?',
    options: [
      'They are equivalent (each implies the other)',
      'They are unrelated',
      'Perpendicularity implies bisection, but not vice versa',
      'Bisection implies perpendicularity, but not vice versa',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'III.3 is a biconditional: a diameter perpendicular to a chord bisects it, AND a diameter that bisects a chord is perpendicular to it.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof uses which earlier result about isosceles triangles?',
    options: [
      'I.32 (angle sum of triangle)',
      'I.5 (base angles of isosceles triangle are equal)',
      'I.47 (Pythagorean theorem)',
      'I.4 (SAS congruence)'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The proof uses I.4 (SAS) to show triangles formed by the center, midpoint, and endpoints are congruent.',
  },
];
