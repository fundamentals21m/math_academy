import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Economics analyzes only extroversive labor because:',
    options: [
      'Introversive labor is too difficult to measure',
      'Government statistics exclude it',
      'Introversive labor is treated as consumption, not production',
      'Only paid labor counts'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Introversive labor (done for its own sake, like mountain climbing) is consumption because the disutility is part of the value. Economics analyzes only extroversive labor—work done for external reward.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to marginal productivity theory, wages tend toward:',
    options: [
      'The value that an additional worker adds to production',
      'A government-mandated minimum',
      'Whatever unions can negotiate',
      'Historical averages in the industry',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Wages are determined by marginal productivity—the value that an additional worker contributes. Competition among employers drives wages toward this level.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Catallactic unemployment differs from institutional unemployment in that catallactic unemployment is:',
    options: [
      'Caused by government policy',
      'Voluntary—workers choose to wait for better opportunities',
      'The result of union activity',
      'Always involuntary',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Catallactic unemployment is voluntary—workers remain unemployed while seeking better opportunities. Institutional unemployment is involuntary, caused by interventions like minimum wages that prevent market-clearing.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What causes persistent mass unemployment according to Mises?',
    options: [
      'Insufficient consumer demand',
      'Wage rates held above market-clearing levels by intervention',
      'Technological change',
      'Population growth'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'On an unhampered market, wages adjust until all willing workers find employment. Persistent mass unemployment results from institutional interference that holds wages above market-clearing levels.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Real wages rise primarily through:',
    options: [
      'Capital accumulation that increases labor productivity',
      'Minimum wage laws',
      'Union bargaining power',
      'Government redistribution',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Capital accumulation makes labor more productive. Workers operating modern machinery produce far more than those with primitive tools—and are paid accordingly. This, not legislation, raises real wages.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The disutility of labor refers to:',
    options: [
      'Unemployment benefits',
      'Dangerous working conditions',
      'Unfair wage discrimination',
      'The sacrifice of leisure that workers endure'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Disutility of labor is the sacrifice of leisure. Workers prefer leisure to labor, all else equal. They work because compensation outweighs this disutility.',
  },
];
