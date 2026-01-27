import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Coriolis force on a particle of mass $m$ moving with relative velocity $\\mathbf{v}_{rel}$ in a frame rotating with angular velocity $\\boldsymbol{\\omega}$ is:',
    options: [
      '$\\mathbf{F}_{Cor} = -2m\\boldsymbol{\\omega} \\times \\mathbf{v}_{rel}$',
      '$\\mathbf{F}_{Cor} = -m\\boldsymbol{\\omega} \\times \\mathbf{v}_{rel}$',
      '$\\mathbf{F}_{Cor} = 2m\\boldsymbol{\\omega} \\times \\mathbf{v}_{rel}$',
      '$\\mathbf{F}_{Cor} = -m\\boldsymbol{\\omega}^2 \\mathbf{r}_{rel}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Coriolis force is $\\mathbf{F}_{Cor} = -2m\\boldsymbol{\\omega} \\times \\mathbf{v}_{rel}$. The factor of 2 arises from the double application of the transport theorem when computing acceleration.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The centrifugal force on a particle at position $\\mathbf{r}_{rel}$ in a rotating frame is:',
    options: [
      '$\\mathbf{F}_{centrif} = -m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{rel})$',
      '$\\mathbf{F}_{centrif} = m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{rel})$',
      '$\\mathbf{F}_{centrif} = -m\\boldsymbol{\\omega}^2 \\mathbf{r}_{rel}$',
      '$\\mathbf{F}_{centrif} = m\\omega^2 r_{rel}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The centrifugal force is $\\mathbf{F}_{centrif} = -m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\mathbf{r}_{rel})$. Using the BAC-CAB rule, this can be written as $m\\omega^2 \\mathbf{r}_\\perp$ where $\\mathbf{r}_\\perp$ is perpendicular to $\\boldsymbol{\\omega}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are the Coriolis and centrifugal forces called "fictitious" or "inertial" forces?',
    options: [
      'They arise from the non-inertial nature of the reference frame, not from physical interactions',
      'They are imaginary and have no physical effects',
      'They only appear in theoretical calculations',
      'They violate Newton\'s third law in all frames'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'These forces are called fictitious because they do not arise from physical interactions between bodies, but rather from the acceleration of the reference frame itself. They are very real in their effects within the non-inertial frame.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'A particle moves with speed $v_{rel} = 5$ m/s in a frame rotating at $\\omega = 2$ rad/s. If $\\mathbf{v}_{rel}$ is perpendicular to $\\boldsymbol{\\omega}$, what is the magnitude of the Coriolis acceleration in m/s$^2$?',
    correctAnswer: 20,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'The Coriolis acceleration magnitude is $|\\mathbf{a}_{Cor}| = 2\\omega v_{rel} = 2 \\times 2 \\times 5 = 20$ m/s$^2$ when $\\mathbf{v}_{rel} \\perp \\boldsymbol{\\omega}$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name of the inertial force that acts on a particle at rest in a rotating frame, directed radially outward from the rotation axis?',
    correctAnswer: 'centrifugal',
    difficulty: 'easy',
    explanation: 'The centrifugal force points radially outward from the rotation axis and acts on all particles in a rotating frame, including those at rest relative to the frame.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In which direction does the Coriolis force act on a particle moving horizontally in the Northern Hemisphere?',
    options: [
      'To the right of the velocity direction',
      'To the left of the velocity direction',
      'Vertically upward',
      'Vertically downward'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In the Northern Hemisphere, the Coriolis force deflects moving objects to the right of their velocity direction. This is responsible for the rotation of large-scale weather systems.',
  },
];
