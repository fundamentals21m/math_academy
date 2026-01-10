import type { QuizQuestion } from './types';

export const section71Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The change of variables formula states that if $T: U \\to V$ is a $C^1$ diffeomorphism, then:',
    options: [
      '$\\int_V f(y) \\, dy = \\int_U f(T(x)) |\\det T\'(x)| \\, dx$',
      '$\\int_V f(y) \\, dy = \\int_U f(T(x)) \\, dx$',
      '$\\int_V f(y) \\, dy = \\int_U f(x) |\\det T\'(x)| \\, dx$',
      '$\\int_V f(y) \\, dy = \\int_U f(T(x)) \\det T\'(x) \\, dx$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The change of variables formula requires the absolute value of the Jacobian determinant as the volume scaling factor. This accounts for the change in the volume element.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In polar coordinates $(r, \\theta)$, the Jacobian determinant is:',
    options: [
      '$r$',
      '$1$',
      '$r^2$',
      '$2\\pi r$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For $(x,y) = (r\\cos\\theta, r\\sin\\theta)$, the Jacobian is $\\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix} = r$. So $dx\\,dy = r\\,dr\\,d\\theta$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In spherical coordinates $(\\rho, \\phi, \\theta)$ where $x = \\rho\\sin\\phi\\cos\\theta$, the volume element is:',
    options: [
      '$\\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$',
      '$\\rho^2 \\, d\\rho \\, d\\phi \\, d\\theta$',
      '$\\rho \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$',
      '$d\\rho \\, d\\phi \\, d\\theta$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Jacobian for spherical coordinates is $\\rho^2 \\sin\\phi$, giving the volume element $dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The change of variables formula requires $T$ to be:',
    options: [
      'A $C^1$ diffeomorphism (bijective with $C^1$ inverse)',
      'Any continuous function',
      'A linear transformation',
      'Measure-preserving'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The formula requires $T$ to be a $C^1$ diffeomorphism so that the Jacobian is well-defined and nonzero, and the inverse mapping exists.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Jacobian determinant $|\\det T\'(x)|$ represents:',
    options: [
      'The local volume magnification factor of the transformation',
      'The derivative of the volume function',
      'The curvature of the transformation',
      'The speed of the transformation'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Jacobian determinant measures how infinitesimal volumes are scaled by the transformation. A small region of volume $dV$ maps to a region of volume approximately $|\\det T\'| dV$.',
  },
];
