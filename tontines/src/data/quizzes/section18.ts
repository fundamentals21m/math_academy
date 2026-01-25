import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A utility function $u(c)$ maps:',
    options: [
      'Risk to reward',
      'Income to taxes',
      'Investment to returns',
      'Consumption (spending) to happiness/satisfaction'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A utility function u(c) maps consumption (spending) to "happiness" or satisfaction, allowing us to compare different consumption patterns.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The property $u\'(c) > 0$ means:',
    options: [
      'More is better',
      'Less is better',
      'Utility is constant',
      'Utility decreases with age'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'u\'(c) > 0 means the first derivative is positive—more consumption always increases utility, i.e., "more is better."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The property $u\'\'(c) < 0$ represents:',
    options: [
      'Increasing marginal utility',
      'Diminishing marginal utility',
      'Constant marginal utility',
      'Negative utility'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'u\'\'(c) < 0 means the second derivative is negative—each additional dollar provides less utility than the previous one (diminishing marginal utility).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'With diminishing marginal utility, which consumption pattern gives MORE total utility (same $100,000 total)?',
    options: [
      'They give equal utility since the total is the same',
      '$10,000/year for 10 years vs $50,000 one year + $5,000 for other 9 years',
      '$50,000 one year + $5,000 for other 9 years is better',
      'It depends on inflation',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With diminishing marginal utility, smooth consumption ($10k/year) provides more utility than volatile consumption ($50k + $5k×9), even with the same total.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The classic tontine\'s 800% late-game payouts are suboptimal because:',
    options: [
      'The volatility hurts utility due to diminishing marginal utility',
      'They occur too early',
      'They violate regulations',
      'They are too small',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Even if actuarially fair, extreme volatility (4% to 800%) reduces total utility because of diminishing marginal utility—smooth consumption is preferred.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Diminishing marginal utility implies:',
    options: [
      'Risk-seeking behavior',
      'Risk neutrality',
      'Risk aversion—preferring certainty to equal-expected-value uncertainty',
      'No preference between certain and uncertain outcomes',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Diminishing marginal utility implies risk aversion: people prefer a certain outcome to an uncertain one with the same expected value because the potential loss hurts more than the potential gain helps.',
  },
];
