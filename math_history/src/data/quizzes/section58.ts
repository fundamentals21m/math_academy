import type { QuizQuestion } from './types';

export const section58Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's58-e01',
    type: 'multiple-choice',
    question: 'In the Poincaré disk model, hyperbolic "lines" are represented as:',
    options: [
      'Parabolas',
      'Straight line segments',
      'Ellipses',
      'Circular arcs perpendicular to the boundary circle (and diameters)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'In the Poincaré disk model, hyperbolic lines are either diameters of the disk or circular arcs that meet the boundary circle at right angles. This ensures they satisfy the axioms of hyperbolic geometry.',
  },
  {
    id: 's58-e02',
    type: 'multiple-choice',
    question: 'In the Klein disk model, hyperbolic lines are represented as:',
    options: [
      'Hyperbolas',
      'Circular arcs',
      'Spirals',
      'Straight chords of the disk',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Unlike the Poincaré models, the Klein disk model represents hyperbolic lines as ordinary straight line segments (chords) connecting points on the boundary. This makes parallel properties easy to visualize, but angles are distorted.',
  },
  // Medium questions
  {
    id: 's58-m01',
    type: 'multiple-choice',
    question: 'The Poincaré disk model is called "conformal" because it:',
    options: [
      'Preserves angles between hyperbolic lines',
      'Preserves distances',
      'Preserves areas',
      'Uses straight lines for geodesics',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A conformal model preserves angles: the Euclidean angle between two circular arcs in the Poincaré disk equals the hyperbolic angle between the corresponding lines. This makes it excellent for visualizing angle properties like triangle angle sums.',
  },
  {
    id: 's58-m02',
    type: 'multiple-choice',
    question: 'In the Poincaré disk model, the boundary circle represents:',
    options: [
      'The center of the hyperbolic plane',
      'Points at infinity in hyperbolic space',
      'Ordinary points in the hyperbolic plane',
      'The origin of coordinates'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The boundary circle is not part of the hyperbolic plane—it represents "infinity." As you approach the boundary, hyperbolic distances grow without bound. The entire infinite hyperbolic plane fits inside the finite disk.',
  },
  // Hard questions
  {
    id: 's58-h01',
    type: 'multiple-choice',
    question: 'The pseudosphere is significant because it:',
    options: [
      'Has zero curvature everywhere',
      'Is a perfect model of the entire hyperbolic plane',
      'Is a surface with constant negative curvature that partially models hyperbolic geometry',
      'Can only exist in 4-dimensional space',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The pseudosphere (surface of revolution of a tractrix) has constant negative Gaussian curvature, making it locally isometric to the hyperbolic plane. However, it only models part of the hyperbolic plane—the complete hyperbolic plane cannot be embedded in 3D Euclidean space without self-intersection.',
  },
  {
    id: 's58-h02',
    type: 'multiple-choice',
    question: 'The hyperboloid model represents the hyperbolic plane as:',
    options: [
      'A torus embedded in 4D space',
      'A sphere with the usual metric',
      'One sheet of $x^2 + y^2 - z^2 = -1$ with the Minkowski metric',
      'A flat plane with distorted distances',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The hyperboloid model uses one sheet of the two-sheeted hyperboloid x² + y² - z² = -1 (with z > 0) in Minkowski space. Distance is measured with the Minkowski metric dx² + dy² - dz². This model has natural symmetries and connects hyperbolic geometry to special relativity.',
  },
];
