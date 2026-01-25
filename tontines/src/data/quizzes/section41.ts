import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The "last mile problem" refers to:',
    options: [
      'The first year of a tontine',
      'Marketing challenges',
      'When the tontine pool shrinks to just a handful of survivors',
      'Regulatory approval process',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The last mile problem occurs when only 5-10 members remain, causing high volatility, prohibitive costs, and unpredictable mortality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'At age 105, a tontine that started with 1,000 members at age 65 might have payment volatility of:',
    options: [
      '<5%',
      '80%+',
      '8%',
      '20%',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With only ~5 expected survivors at age 105, payment volatility reaches 80%+ as each death causes massive payment swings.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Pool merger as a solution involves:',
    options: [
      'Stopping all payments',
      'Selling the pool to an insurance company',
      'Distributing all assets immediately',
      'Combining shrinking pools to restore statistical stability'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When pools fall below a threshold (e.g., 50 members), they can merge with other shrinking pools using actuarial present value for fair pricing.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Annuity conversion as a last-mile solution:',
    options: [
      'Eliminates volatility but loses mortality credits (typically 20% pay cut)',
      'Maintains mortality credits at full value',
      'Increases payments significantly',
      'Has no downsides'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Converting to annuities eliminates volatility but loses mortality credits—in the example, a 20% pay cut from ~$15k to $12k/year.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The recommended "hybrid approach" has three phases. In Phase 3 ($n < 50$):',
    options: [
      'Pure tontine operation continues',
      'Automatic conversion to annuities',
      'Pool merger is considered',
      'Lump sum distribution'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The hybrid approach: Phase 1 (n>100) = pure tontine, Phase 2 (50<n<100) = consider merger, Phase 3 (n<50) = automatic annuity conversion.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Annuity conversion typically costs 10-20% of tontine value due to all EXCEPT:',
    options: [
      'Insurance company profit margins',
      'Conservative mortality assumptions',
      'Higher investment returns',
      'Capital reserve requirements'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Conversion costs come from insurer profits, conservative mortality assumptions, and capital reserves—not from higher investment returns.',
  },
];
