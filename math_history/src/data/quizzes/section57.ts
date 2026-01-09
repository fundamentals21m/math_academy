import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's57-e01',
    type: 'multiple-choice',
    question: 'In hyperbolic geometry, given a line and a point not on it, how many parallel lines pass through the point?',
    options: [
      'Infinitely many',
      'Exactly one',
      'Exactly two',
      'None',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'In hyperbolic geometry, there are infinitely many lines through a point that do not intersect a given line. Two of these are "limiting parallels" that approach the line asymptotically, and infinitely many "ultra-parallels" diverge from the line.',
  },
  {
    id: 's57-e02',
    type: 'multiple-choice',
    question: 'In hyperbolic geometry, the sum of angles in a triangle is:',
    options: [
      'Strictly less than 180 degrees',
      'Exactly 180 degrees',
      'Strictly greater than 180 degrees',
      'It varies unpredictably',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'A fundamental property of hyperbolic geometry is that the angle sum of any triangle is strictly less than 180°. The difference from 180° is called the angular defect and is proportional to the triangle\'s area.',
  },
  // Medium questions
  {
    id: 's57-m01',
    type: 'multiple-choice',
    question: 'What is the "angular defect" of a hyperbolic triangle?',
    options: [
      '$180°$ minus the sum of the triangle\'s angles',
      'The largest angle in the triangle',
      'The sum of the triangle\'s angles',
      'The difference between the largest and smallest angles',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The angular defect δ = 180° - (α + β + γ) measures how much the angle sum falls short of the Euclidean value. Remarkably, the area of a hyperbolic triangle equals k²δ, where k is a constant related to curvature.',
  },
  {
    id: 's57-m02',
    type: 'multiple-choice',
    question: 'In hyperbolic geometry, similar triangles (same angles, different sizes):',
    options: [
      'Cannot exist - same angles implies congruence',
      'Exist just like in Euclidean geometry',
      'Can only exist for right triangles',
      'Have the same area but different perimeters',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Since angle sum determines area in hyperbolic geometry (Area = k²δ), two triangles with the same angles must have the same area and are therefore congruent. This is fundamentally different from Euclidean geometry where similar figures of any size exist.',
  },
  // Hard questions
  {
    id: 's57-h01',
    type: 'multiple-choice',
    question: 'The angle of parallelism $\\Pi(d)$ in hyperbolic geometry:',
    options: [
      'Approaches 90° as distance $d$ approaches 0, and 0° as $d$ approaches infinity',
      'Is always exactly 45°',
      'Approaches 0° as $d$ approaches 0',
      'Is independent of distance',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The angle of parallelism Π(d) = 2arctan(e^(-d/k)) depends on distance. As d → 0, Π(d) → 90° (Euclidean-like behavior for small scales). As d → ∞, Π(d) → 0° (the limiting parallel becomes nearly coincident with the perpendicular from the point).',
  },
  {
    id: 's57-h02',
    type: 'multiple-choice',
    question: 'An "ideal triangle" in hyperbolic geometry (with all three vertices at infinity) has:',
    options: [
      'All angles equal to 0° and finite, maximal area',
      'All angles equal to 60°',
      'Infinite area',
      'Zero area',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'An ideal triangle has all three vertices at infinity (where asymptotic parallels meet). All three angles are 0°, giving angular defect δ = 180°. Despite having "infinite" vertices, the area is finite: πk². All ideal triangles are congruent and have maximum possible area for hyperbolic triangles.',
  },
];
