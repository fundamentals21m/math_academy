import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a non-inertial reference frame moving with velocity $\\dot{\\mathbf{b}}$ and rotating with angular velocity $\\boldsymbol{\\omega}$, what is the correct velocity transformation formula?',
    options: [
      '$\\mathbf{v} = \\mathbf{v}_{rel} + \\boldsymbol{\\omega} \\times \\mathbf{r}_{rel} + \\dot{\\mathbf{b}}$',
      '$\\mathbf{v} = \\mathbf{v}_{rel} + \\dot{\\mathbf{b}}$',
      '$\\mathbf{v} = \\mathbf{v}_{rel} + \\boldsymbol{\\omega} \\times \\mathbf{r}_{rel}$',
      '$\\mathbf{v} = \\boldsymbol{\\omega} \\times \\mathbf{r}_{rel}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The complete velocity transformation includes three terms: the relative velocity $\\mathbf{v}_{rel}$, the rotational contribution $\\boldsymbol{\\omega} \\times \\mathbf{r}_{rel}$, and the translation of the origin $\\dot{\\mathbf{b}}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What distinguishes an inertial reference frame from a non-inertial one?',
    options: [
      'Newton\'s laws hold without modification in inertial frames',
      'Inertial frames must be at rest',
      'Non-inertial frames cannot rotate',
      'Inertial frames are always attached to the Earth'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An inertial reference frame is one in which Newton\'s laws of motion hold without the need for fictitious forces. Non-inertial frames require the introduction of inertial forces to apply Newton\'s laws.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The time derivative of a vector $\\mathbf{A}$ as observed from a rotating frame with angular velocity $\\boldsymbol{\\omega}$ is related to the inertial derivative by:',
    options: [
      '$\\left(\\frac{d\\mathbf{A}}{dt}\\right)_{inertial} = \\left(\\frac{d\\mathbf{A}}{dt}\\right)_{rot} + \\boldsymbol{\\omega} \\times \\mathbf{A}$',
      '$\\left(\\frac{d\\mathbf{A}}{dt}\\right)_{inertial} = \\left(\\frac{d\\mathbf{A}}{dt}\\right)_{rot}$',
      '$\\left(\\frac{d\\mathbf{A}}{dt}\\right)_{inertial} = \\boldsymbol{\\omega} \\times \\mathbf{A}$',
      '$\\left(\\frac{d\\mathbf{A}}{dt}\\right)_{inertial} = \\left(\\frac{d\\mathbf{A}}{dt}\\right)_{rot} - \\boldsymbol{\\omega} \\times \\mathbf{A}$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The transport theorem states that the inertial derivative equals the rotating frame derivative plus the cross product $\\boldsymbol{\\omega} \\times \\mathbf{A}$, accounting for the rotation of the basis vectors.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name of the theorem that relates time derivatives in rotating and inertial frames?',
    correctAnswer: 'transport theorem',
    difficulty: 'medium',
    explanation: 'The transport theorem (also called the rotating frame derivative formula) relates the time derivative of a vector as seen from an inertial frame to its derivative in a rotating frame.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a frame rotating with constant angular velocity $\\boldsymbol{\\omega}$ about a fixed axis, what is $\\dot{\\boldsymbol{\\omega}}$?',
    options: [
      '$\\mathbf{0}$',
      '$\\boldsymbol{\\omega}$',
      '$\\boldsymbol{\\omega} \\times \\boldsymbol{\\omega}$',
      'Cannot be determined'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For constant angular velocity rotation, $\\dot{\\boldsymbol{\\omega}} = \\mathbf{0}$. This simplifies the acceleration transformation equations.',
  },
];
