import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who first systematically classified cubic curves?',
    options: [
      'Newton',
      'Euler',
      'Descartes',
      'Leibniz',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Isaac Newton first systematically classified cubic curves into 72 species (later expanded to 78) in his work on curves.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a node on a cubic curve?',
    options: [
      'A point where the curve is vertical',
      'The highest point on the curve',
      'A point of maximum curvature',
      'A point where the curve intersects itself (double point)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A node is a singular point where the curve crosses itself, creating a double point with two distinct tangent directions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a cusp on a curve?',
    options: [
      'A point where two branches cross with different tangents',
      'The endpoint of a curve',
      'A point where two branches meet with the same tangent',
      'A point of inflection',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A cusp is a singular point where two branches of the curve meet and share the same tangent line, creating a sharp point.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The folium of Descartes $x^3 + y^3 = 3axy$ is an example of what type of cubic?',
    options: [
      'A cubic with a cusp',
      'A cubic with a node',
      'A non-singular cubic',
      'A degenerate cubic',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The folium of Descartes has a node (self-intersection) at the origin, where the curve crosses itself.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How did Euler organize cubic curves?',
    options: [
      'By the date they were discovered',
      'Alphabetically by name',
      'By the type and number of asymptotes and singular points',
      'By the size of their coefficients',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Euler organized cubics by their geometric features: the type of asymptotes (rectilinear vs parabolic), number of branches, and singular points (nodes, cusps).',
  },
];
