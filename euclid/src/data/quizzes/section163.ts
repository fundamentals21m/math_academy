import type { QuizQuestion } from './types';

export const section163Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.18 describes how to construct:',
    options: [
      'A circle similar to a given polygon',
      'A rectilineal figure similar to a given one on a given straight line',
      'A polygon with double the area of a given one',
      'A regular polygon from an irregular one',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.18 constructs a polygon similar to a given polygon, with one side equal to a given line segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The construction in VI.18 works by:',
    options: [
      'Dividing into triangles and constructing similar triangles on the given line',
      'Rotating the original polygon',
      'Drawing a circumscribed circle',
      'Using only parallel lines',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The polygon is divided into triangles from one vertex. Similar triangles are then constructed on the given line, reassembling into a similar polygon.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is VI.18 foundational for later propositions about similar figures?',
    options: [
      'It proves all polygons are similar',
      'It proves circles are polygons',
      'It shows all triangles are congruent',
      'It establishes that similar figures can be scaled to any size',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'VI.18 is an existence theorem: given any polygon and any line segment, we can construct a similar polygon at that scale. This enables comparisons of similar figures.',
  },
];
