import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 40: Quaternions Applied to Physics
 */
export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why was Hamilton\'s application of quaternions to physics initially difficult?',
    options: [
      'Physical space has only three dimensions, not four',
      'Quaternions are too abstract',
      'Complex numbers were preferred',
      'Physicists rejected non-commutative algebra',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Hamilton was stymied by the fact that physical space has only three dimensions. A quaternion has four components, which doesn\'t directly match 3D space.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who developed vector analysis using dot and cross products from quaternion multiplication?',
    options: [
      'Hamilton',
      'Heaviside',
      'Maxwell',
      'Einstein',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Oliver Heaviside extracted the scalar (dot) product and vector (cross) product from quaternion multiplication, developing vector analysis which replaced quaternions in physics.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the scalar (dot) product of two vectors ξ and η?',
    options: [
      'The scalar part of ξη',
      'The vector part of ξη',
      'The norm of ξη',
      'The negative of the scalar part of ξη',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The dot product ξ ∘ η = x₁y₁ + x₂y₂ + x₃y₃ is the negative of the scalar part of the quaternion product ξη.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What expression is invariant in Einstein\'s theory of relativity?',
    options: [
      'x² + y² + z²',
      'c²t² + x² + y² + z²',
      'c²t² - x² - y² - z²',
      't² - x² - y² - z²',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The expression s² = c²t² - x² - y² - z² is invariant under Lorentz transformations. This is the spacetime interval in special relativity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a biquaternion?',
    options: [
      'A quaternion with integer coefficients',
      'A product of two quaternions',
      'A quaternion with norm 2',
      'A quaternion with complex coefficients',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A biquaternion is a quaternion whose coefficients a₀, a₁, a₂, a₃ are complex numbers rather than real numbers.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How is a Lorentz transformation expressed using biquaternions?',
    options: [
      'x → px',
      'x → xp',
      'x → p + x',
      'x → pxp^(ct)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A Lorentz transformation sends x to pxp^(ct), where p is a biquaternion of norm 1. This preserves the norm N(x), which corresponds to the spacetime interval.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What characterizes a Hermitian biquaternion?',
    options: [
      'x^t = x^c',
      'x^c = x',
      'x^t = x',
      'N(x) = 1',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'A biquaternion x is Hermitian if x^t = x^c (quaternion conjugate equals complex conjugate). Hermitian biquaternions represent points in Minkowski space.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is Einstein\'s famous mass-energy equation?',
    options: [
      'E = mv',
      'E = mc²',
      'E = mc',
      'E = m²c',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Einstein\'s equation E = mc² identifies the total energy of a particle, consisting of rest energy m₀c² plus kinetic energy.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Who first noted that Maxwell\'s equations are preserved under Lorentz transformations?',
    options: [
      'Maxwell',
      'Einstein',
      'Poincaré',
      'Lorentz',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The fact that Maxwell\'s equations are preserved under Lorentz transformations appears to have first been noted by Henri Poincaré.',
  },
];
