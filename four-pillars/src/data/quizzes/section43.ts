import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Projective arithmetic constructs addition and multiplication using:',
    options: [
      'Compass and straightedge',
      'Straightedge only',
      'Computer calculations',
      'Protractor only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Projective constructions use only straightedge, avoiding metric tools like compass.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In projective arithmetic, "parallel lines" means lines that meet:',
    options: [
      'At right angles',
      'Never',
      'At the origin',
      'On a designated line at infinity',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '"Parallel" in projective geometry means meeting on the designated line at infinity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The construction of $a + b$ is different from the construction of $b + a$ because:',
    options: [
      'Addition is undefined for negative numbers',
      'One attaches $Oa$ at $b$, the other attaches $Ob$ at $a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum a + b attaches segment Oa at point b, while b + a attaches Ob at point a—different constructions.',
  },
      'Subtraction is involved',
      'They use different lines at infinity',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sum a + b attaches segment Oa at point b, while b + a attaches Ob at point a—different constructions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The position of the product $ab$ depends on the choice of:',
    options: [
      'The origin only',
      'The line at infinity only',
      'The point 1 on the x-axis (but not the y-axis)',
      'Nothing—it is always unique',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Choosing 1 on the x-axis sets the unit of length. The position of ab depends on this choice.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The sum $a + b$ is independent of the choice of the auxiliary line $L$ because of:',
    options: [
      'The Pythagorean theorem',
      'The definition of infinity',
      'Symmetry of the plane',
      'The little Desargues theorem',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The little Desargues theorem shows that different choices of L give the same sum.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'When we try to construct $a + \\infty$, the result is:',
    options: [
      'Undefined or incompatible with ordinary arithmetic',
      'Always $a
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Operations involving ∞ are incompatible with ordinary arithmetic, which is why ∞ is excluded from the points we add and multiply.',
  },
      'Always zero',
      'Equal to $\\infty
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Operations involving ∞ are incompatible with ordinary arithmetic, which is why ∞ is excluded from the points we add and multiply.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Operations involving ∞ are incompatible with ordinary arithmetic, which is why ∞ is excluded from the points we add and multiply.',
  },
];
