import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $r(t)$ is the rate at which water flows into a tank, what does $\\int_0^{10} r(t)\\,dt$ represent?',
    options: [
      'The rate of flow at time 10',
      'The total amount of water that flowed in from time 0 to 10',
      'The average flow rate',
      'The maximum flow rate'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Integrating a rate gives the total quantity. The integral of flow rate over time gives the total volume of water.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the relationship between velocity and position?',
    options: [
      'Position is the derivative of velocity',
      'Velocity is the integral of position',
      'Position is the integral of velocity',
      'They are unrelated'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Position is obtained by integrating velocity over time: $x(t) = \\int v(t)\\,dt$. (Velocity is the derivative of position.)',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the difference between "net displacement" and "total distance traveled"?',
    options: [
      'They are the same thing',
      'Net displacement can be negative (if you go backward); total distance is always positive',
      'Total distance is always less than displacement',
      'Net displacement is always greater'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Net displacement is final position minus initial position (can be negative). Total distance uses absolute value of velocity to count all movement.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If you know how fast something is changing at every instant, you can:',
    options: [
      'Only find the maximum value',
      'Reconstruct the original quantity through integration',
      'Only find when it equals zero',
      'Nothing useful'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Integration lets you reconstruct a quantity from its rate of change. This is the inverse relationship between derivatives and integrals.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does the "constant of integration" represent in $\\int f(x)\\,dx = F(x) + C$?',
    options: [
      'A measurement error',
      'The unknown initial value (since we only know the rate of change)',
      'A rounding error',
      'The maximum value of F'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When reconstructing from a rate, we don\'t know the starting value. Any constant $C$ works because its derivative is zero—it doesn\'t affect the rate.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Your electric bill measures energy usage. If $P(t)$ is power (watts), energy is:',
    options: [
      'The derivative of power',
      'The integral of power over time',
      'Power divided by time',
      'Power squared'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Energy (joules) = $\\int P(t)\\,dt$. Power is the rate of energy consumption; integrating gives total energy used.',
  },
];
