import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a diameter of a curve?',
    options: [
      'The longest chord of the curve',
      'The distance across the curve through the center',
      'The axis of symmetry',
      'A line that bisects all chords parallel to a given direction',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A diameter is a locus of midpoints of parallel chords. For each direction of chords, there is a corresponding diameter.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a conic section, what shape is any diameter?',
    options: [
      'A curved line',
      'A straight line',
      'A parabola',
      'An ellipse',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For conic sections (second-order curves), every diameter is a straight line. This follows from the linear formula for the sum of roots.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are conjugate diameters?',
    options: [
      'Diameters where each bisects chords parallel to the other',
      'Diameters that are perpendicular',
      'Diameters of equal length',
      'Diameters that pass through the foci',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Two diameters are conjugate if each one bisects all chords parallel to the other. In an ellipse, conjugate diameters are not generally perpendicular.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the principal diameter (axis) of a conic?',
    options: [
      'Any diameter through the center',
      'A diameter perpendicular to its conjugate',
      'The diameter along the directrix',
      'The shortest diameter',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The principal diameter (or axis) of a conic is a diameter that is perpendicular to its conjugate. For an ellipse, these are the major and minor axes.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For higher-order curves (degree > 2), diameters are generally:',
    options: [
      'Always curved',
      'Always straight lines',
      'Curves of degree one less than the original',
      'Non-existent',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For a curve of degree $n$, the locus of midpoints of parallel chords is generally a curve of degree $n-1$. Only for conics ($n=2$) are diameters lines ($n-1=1$).',
  },
];
