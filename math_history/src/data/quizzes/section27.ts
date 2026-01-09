import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 's27-e01',
    type: 'multiple-choice',
    question: 'What is an algebraic curve?',
    difficulty: 'easy',
    options: [
      'Any curve that can be drawn with a compass',
      'A curve defined by a polynomial equation $f(x, y) = 0$',
      'A curve with no sharp corners',
      'A curve that passes through the origin',
    ],
    correctIndex: 1,
    explanation:
      'An algebraic curve is one that can be expressed by a polynomial equation in two variables. Descartes called these "geometric" curves, distinguishing them from "mechanical" curves like the cycloid.',
  },
  {
    id: 's27-e02',
    type: 'multiple-choice',
    question: 'What is the degree of a conic section (ellipse, parabola, or hyperbola)?',
    difficulty: 'easy',
    options: [
      '1',
      '2',
      '3',
      '4',
    ],
    correctIndex: 1,
    explanation:
      'Conics are degree 2 curves. Their general equation is $ax^2 + bxy + cy^2 + dx + ey + f = 0$. The highest total degree of any term is 2.',
  },
  {
    id: 's27-m01',
    type: 'multiple-choice',
    question: 'What type of singular point does the curve $y^2 = x^3$ have at the origin?',
    difficulty: 'medium',
    options: [
      'An inflection point',
      'A node (double point where the curve crosses itself)',
      'A cusp (sharp point where branches meet tangentially)',
      'No singular point',
    ],
    correctIndex: 2,
    explanation:
      'The curve $y^2 = x^3$ (the semicubical parabola) has a cusp at the origin. The two branches of the curve meet and share a common tangent line (the x-axis) at that point.',
  },
  {
    id: 's27-m02',
    type: 'multiple-choice',
    question: 'According to Bézout\'s theorem, how many points can two conics intersect in?',
    difficulty: 'medium',
    options: [
      '2 points',
      '3 points',
      '4 points',
      '6 points',
    ],
    correctIndex: 2,
    explanation:
      'By Bézout\'s theorem, curves of degrees $m$ and $n$ intersect in $mn$ points (counted with multiplicity, including complex and infinite points). Two conics: $2 \\times 2 = 4$.',
  },
  {
    id: 's27-h01',
    type: 'multiple-choice',
    question:
      'The Folium of Descartes is given by $x^3 + y^3 = 3axy$. What degree is this curve?',
    difficulty: 'hard',
    options: [
      '2',
      '3',
      '4',
      '6',
    ],
    correctIndex: 1,
    explanation:
      'The Folium of Descartes is a cubic (degree 3) curve. The terms $x^3$ and $y^3$ are both degree 3, and $3axy$ is degree 2. The degree of a polynomial equation is the highest degree of any term.',
  },
  {
    id: 's27-h02',
    type: 'multiple-choice',
    question:
      'Which of the following is a transcendental (non-algebraic) curve?',
    difficulty: 'hard',
    options: [
      'The circle $x^2 + y^2 = 1$',
      'The folium $x^3 + y^3 = 3xy$',
      'The cycloid (path traced by a point on a rolling circle)',
      'The semicubical parabola $y^2 = x^3$',
    ],
    correctIndex: 2,
    explanation:
      'The cycloid cannot be expressed by any polynomial equation $f(x, y) = 0$. Descartes called such curves "mechanical" and excluded them from his geometry. The other three are all algebraic curves.',
  },
];
