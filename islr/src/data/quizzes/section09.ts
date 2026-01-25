import type { QuizQuestion } from './types';

export const section09Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's09-e01',
    type: 'multiple-choice',
    question: 'In the advertising case study, which media was found to NOT be significantly associated with sales?',
    options: ['TV', 'Radio', 'Newspaper', 'All were significant'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In multiple regression, newspaper had a p-value of 0.86 - not significant when TV and radio were included.',
  },
  {
    id: 's09-e02',
    type: 'multiple-choice',
    question: 'The advertising data showed strong synergy between:',
    options: ['TV and newspaper', 'Radio and newspaper', 'TV and radio', 'All three media'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The TV×radio interaction term was highly significant (p < 0.0001), indicating their combined effect exceeds the sum of individual effects.',
  },
  {
    id: 's09-e03',
    type: 'multiple-choice',
    question: 'A significant interaction term indicates:',
    options: [
      'The effect of one predictor depends on another',
      'The predictors are independent',
      'The model is overfitting',
      'The intercept is zero'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Interaction means the effect of TV advertising on sales depends on the level of radio advertising (and vice versa).',
  },
  {
    id: 's09-e04',
    type: 'text',
    question: 'When the combined effect of two predictors exceeds the sum of their individual effects, this is called: (one word)',
    correctAnswer: 'synergy',
    difficulty: 'easy',
    explanation: 'Synergy (or positive interaction) means the predictors enhance each other\'s effects.',
  },
  {
    id: 's09-e05',
    type: 'multiple-choice',
    question: 'Adding the TV×radio interaction improved $R^2$ from 0.897 to:',
    options: ['0.90', '0.92', '0.95', '0.97'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The interaction model achieved $R^2 = 0.968$, a substantial improvement showing the importance of synergy.',
  },
  // Medium questions
  {
    id: 's09-m01',
    type: 'multiple-choice',
    question: 'Why was newspaper significant in simple regression but not multiple regression?',
    options: [
      'Simple regression is wrong',
      'Newspaper spending was correlated with radio spending',
      'The sample size was too small',
      'Newspaper data was missing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Markets with high newspaper spending also had high radio spending. Simple regression attributed radio\'s effect to newspaper.',
  },
  {
    id: 's09-m02',
    type: 'multiple-choice',
    question: 'The confidence interval for newspaper coefficient included zero, meaning:',
    options: [
      'Newspaper has a large effect',
      'Newspaper is the most important predictor',
      'We cannot rule out zero effect for newspaper',
      'The model is incorrect'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A CI containing zero means zero is a plausible value for the true coefficient - the effect may be negligible.',
  },
  {
    id: 's09-m03',
    type: 'multiple-choice',
    question: 'In the interaction model, the effect of \\$1,000 more TV spending when radio = 0 is approximately:',
    options: [
      '189 more units sold',
      '46 more units sold',
      '100 more units sold',
      '19 more units sold'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With no radio spending, the TV effect is just the main effect coefficient: about 0.019 × 1000 ≈ 19 units.',
  },
  {
    id: 's09-m04',
    type: 'multiple-choice',
    question: 'What does RSE = 1.69 mean in the advertising context?',
    options: [
      'Average prediction error is about 1,690 units',
      '$R^2$ is 1.69',
      'The slope is 1.69',
      'We need 1.69 more predictors'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'RSE is in the units of Y (sales). RSE ≈ 1.69 means predictions are off by about 1,690 units on average.',
  },
  {
    id: 's09-m05',
    type: 'numeric',
    question: 'If TV coefficient = 0.046 and radio coefficient = 0.189, spending \\$1,000 more on radio vs TV yields how many more additional sales? (Round to nearest integer)',
    correctAnswer: 143,
    numericRange: { min: 100, max: 200, precision: 0 },
    difficulty: 'medium',
    explanation: 'Radio effect: 0.189 × 1000 = 189 units. TV effect: 0.046 × 1000 = 46 units. Difference: 189 - 46 = 143.',
  },
  // Hard questions
  {
    id: 's09-h01',
    type: 'multiple-choice',
    question: 'In the interaction model, as radio spending increases, the marginal effect of TV:',
    options: [
      'Decreases',
      'Increases',
      'Stays constant',
      'Becomes negative'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Effect of TV = $0.019 + 0.0011 \\times \\text{radio}$. Since the interaction coefficient (0.0011) is positive, TV\'s effect increases with radio.',
  },
  {
    id: 's09-h02',
    type: 'multiple-choice',
    question: 'The main business recommendation from the case study was to:',
    options: [
      'Spend equally on all three media',
      'Focus only on TV advertising',
      'Reallocate newspaper budget to TV and radio',
      'Stop all advertising'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Since newspaper showed no significant effect while TV and radio (with synergy) did, reallocating makes sense.',
  },
  {
    id: 's09-h03',
    type: 'multiple-choice',
    question: 'A prediction interval is wider than a confidence interval because it accounts for:',
    options: [
      'Only coefficient uncertainty',
      'Only irreducible error',
      'Neither type of uncertainty',
      'Both coefficient uncertainty and irreducible error'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Prediction intervals account for uncertainty in the estimated regression line PLUS the inherent variability in individual outcomes.',
  },
];
