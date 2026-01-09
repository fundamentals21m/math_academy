import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "construction of equations" mean in Euler\'s context?',
    options: [
      'Writing equations symbolically',
      'Solving algebraic equations geometrically using curve intersections',
      'Deriving equations from axioms',
      'Programming equations into a computer'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euler shows how to solve polynomial equations by finding where curves intersect. The coordinates of intersection points give the roots.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How can a quadratic equation $x^2 + bx + c = 0$ be solved geometrically?',
    options: [
      'Using only a straight line',
      'Finding where a line intersects a parabola',
      'Using three circles',
      'It cannot be solved geometrically'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A quadratic can be solved by intersecting the parabola $y = x^2$ with the line $y = -bx - c$. The $x$-coordinates of intersection are the roots.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the advantage of geometric construction of roots?',
    options: [
      'It gives exact decimal answers',
      'It provides visual insight and approximate values',
      'It works only for linear equations',
      'It requires no curves'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Geometric constructions provide visual understanding of how many real roots exist and their approximate values by showing where curves intersect.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To solve a cubic equation geometrically, what curves might we use?',
    options: [
      'Only straight lines',
      'A conic and a line',
      'Two circles',
      'Only parabolas'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A cubic (degree 3) can be solved by intersecting a conic (degree 2) with a line (degree 1), giving $2 \\times 1 + 1 = 3$ solutions when accounting properly.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is the geometric method of solving equations historically significant?',
    options: [
      'It replaced algebra completely',
      'It connected algebra with geometry before modern notation existed',
      'It was faster than numerical methods',
      'It only worked for Greeks'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Before modern symbolic algebra, geometric methods provided a way to solve equations. This connection between algebra and geometry influenced mathematics for centuries.',
  },
];
