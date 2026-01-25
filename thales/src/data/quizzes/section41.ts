import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 41: Quaternions in Quantum Mechanics
 */
export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the Pauli spin matrices related to in quaternion notation?',
    options: [
      'The matrices ii₁, ii₂, ii₃',
      'The quaternion norm',
      'The quaternion conjugate',
      'The real part of quaternions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Pauli spin matrices are closely related to the matrices ii₁, ii₂, ii₃ (the quaternion basis matrices multiplied by the complex unit i). They are fundamental in describing electron spin.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the Klein-Gordon equation?',
    options: [
      'The non-relativistic Schrödinger equation',
      'The equation for gravitational waves',
      'The relativistic form of Schrödinger\\'s wave equation',
      'Maxwell\\'s equations in quaternion form',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The Klein-Gordon equation is the relativistic form of Schrödinger\'s wave equation for the electron. It is a second-order differential equation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is special about Dirac\'s equation compared to the Klein-Gordon equation?',
    options: [
      'It is second order',
      'It is first order',
      'It only works for massless particles',
      'It is not Lorentz invariant',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Dirac\'s equation is a first-order differential equation, whereas the Klein-Gordon equation is second order. Dirac achieved this by introducing spinors and gamma matrices (related to quaternions).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How many components does the wave function ψ have in Dirac\'s equation?',
    options: [
      '4',
      '1',
      '2',
      '8',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The wave function ψ in Dirac\'s equation is a 4-component spinor: ψ = (ψ₀, ψ₁, ψ₂, ψ₃)ᵀ. This is related to the 4×4 matrix structure of the quaternion representation.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does the electron have spin ½?',
    options: [
      'Because p and -p give the same Lorentz transformation but different ψ transformations',
      'Because it is very small',
      'Because of the Pauli exclusion principle',
      'Because the Klein-Gordon equation requires it',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The biquaternions p and -p both give the same Lorentz transformation x → pxp^(ct), but they induce distinct transformations on ψ (sending it to pψ and -pψ). This double-valued nature is the mathematical reason for spin ½.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What particle did Dirac predict from his equation?',
    options: [
      'The neutron',
      'The neutrino',
      'The photon',
      'The positron',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Dirac observed that in his equation, μ might as well be replaced by -μ, predicting that the electron must have an anti-particle. This was later discovered and named the positron.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the biquaternion form of the Klein-Gordon equation?',
    options: [
      'Dφ = μφ',
      'D^c Dφ = -μ²φ',
      'D + D^c = 0',
      'DDφ = μφ',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In biquaternion notation, the Klein-Gordon equation is written as D^c Dφ = -μ²φ, where D = ∂/(c∂t) + i∇ is the differential operator.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What property does Dirac\'s equation have under coordinate transformations?',
    options: [
      'It is not invariant',
      'It is Galilean invariant',
      'It changes sign',
      'It is Lorentz invariant'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Dirac\'s equation is Lorentz invariant. Under a Lorentz transformation, if ψ transforms as ψ → pψ, the equation remains valid in the new reference frame.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Who predicted electromagnetic waves from mathematical equations?',
    options: ['Dirac', 'Einstein', 'Maxwell', 'Schrödinger'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Maxwell predicted from his equations that electromagnetic energy is propagated in waves. This was a remarkable prediction from pure mathematical formalism that was later confirmed experimentally.',
  },
];
