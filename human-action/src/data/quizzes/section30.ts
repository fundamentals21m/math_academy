import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Price ceilings intended to help buyers actually:',
    options: [
      'Increase production',
      'Benefit all consumers equally',
      'Create shortages—making goods unavailable at any price',
      'Stabilize markets permanently',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Price ceilings produce results contrary to their purpose. By holding prices below equilibrium, they reduce supply while increasing demand, creating shortages, queues, and black markets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When government controls prices in one sector, the market response is:',
    options: [
      'Stable equilibrium',
      'Voluntary compliance',
      'Resources flee to uncontrolled sectors, requiring expanded controls',
      'Increased efficiency',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Resources flee controlled sectors. To prevent this, government must expand controls across all goods and services—eventually creating full central planning or abandoning intervention.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When minimum wages are set above market levels, the result is:',
    options: [
      'Institutional unemployment that cannot disappear while intervention remains',
      'Higher employment',
      'Equal wages for all',
      'Increased productivity',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Workers priced out of the market cannot find jobs at the mandated wage. They would work for less, but the law forbids it. Institutional unemployment emerges only when external pressure fixes wages above market levels.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Voluntary (catallactic) unemployment differs from institutional unemployment in that:',
    options: [
      'It is permanent',
      'It cannot be solved',
      'It requires government intervention',
      'Workers can find work immediately by accepting market wages'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Voluntary unemployment is self-correcting—workers can find work by accepting market wages. Institutional unemployment is created by intervention and cannot disappear while the intervention remains in force.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The intervention spiral ends in:',
    options: [
      'Stable mixed economy',
      'Comprehensive central planning or abandonment of intervention',
      'Perfect market equilibrium',
      'Gradual improvement',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'There is no stable middle ground. Each intervention requires more interventions until the system reaches either full central planning (socialism) or returns to market economy.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Minimum wage laws harm most:',
    options: [
      'The least skilled, least experienced workers whose productivity falls below the mandated wage',
      'Highly skilled workers',
      'Established businesses',
      'Employers only',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Those intended to be helped are harmed most. Workers whose productivity is below the minimum wage cannot legally work and gain skills. They are condemned to unemployment.',
  },
];
