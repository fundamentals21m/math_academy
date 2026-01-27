import type { QuizQuestion } from './types';

export const section10Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's10-e01',
    type: 'multiple-choice',
    question: 'KNN regression predicts the response by:',
    options: [
      'Fitting a linear equation',
      'Averaging responses of the K nearest neighbors',
      'Using the maximum response value',
      'Minimizing squared residuals globally'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'KNN regression predicts $\\hat{f}(x_0) = \\frac{1}{K}\\sum_{i \\in \\mathcal{N}_0} y_i$, the average of the K nearest neighbors\' responses.',
  },
  {
    id: 's10-e02',
    type: 'multiple-choice',
    question: 'KNN is an example of which type of method?',
    options: ['Parametric', 'Bayesian', 'Non-parametric', 'Regularized'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'KNN makes no assumptions about the functional form of $f$ - it is non-parametric.',
  },
  {
    id: 's10-e03',
    type: 'multiple-choice',
    question: 'A small value of K in KNN (like K=1) typically results in:',
    options: [
      'A smooth prediction function',
      'High bias, low variance',
      'Optimal predictions',
      'Low bias, high variance'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Small K = very flexible = can fit complex patterns (low bias) but is sensitive to noise (high variance).',
  },
  {
    id: 's10-e04',
    type: 'text',
    question: 'The problem that non-parametric methods face in high dimensions is called the "curse of ___"',
    correctAnswer: 'dimensionality',
    difficulty: 'easy',
    explanation: 'The curse of dimensionality: as $p$ increases, the nearest neighbors become increasingly far away and dissimilar.',
  },
  {
    id: 's10-e05',
    type: 'multiple-choice',
    question: 'Linear regression is preferred over KNN when:',
    options: [
      'The true relationship is approximately linear',
      'The true relationship is highly non-linear',
      'We have very few predictors',
      'We have unlimited data'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When the true relationship is linear (or close to it), linear regression\'s correct assumption gives it an advantage.',
  },
  // Medium questions
  {
    id: 's10-m01',
    type: 'multiple-choice',
    question: 'A large value of K in KNN (like K=100) typically results in:',
    options: [
      'A very flexible fit',
      'High bias, low variance',
      'Low bias, high variance',
      'Perfect test predictions'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Large K = less flexible = averages many neighbors = smoother but potentially biased predictions.',
  },
  {
    id: 's10-m02',
    type: 'multiple-choice',
    question: 'With $p = 20$ predictors, KNN is likely to:',
    options: [
      'Outperform linear regression',
      'Be unaffected by the number of predictors',
      'Perform poorly due to the curse of dimensionality',
      'Require exactly 20 neighbors'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In high dimensions, neighbors are far away and not truly "similar," degrading KNN performance.',
  },
  {
    id: 's10-m03',
    type: 'multiple-choice',
    question: 'Why might linear regression outperform KNN even when the relationship is slightly non-linear?',
    options: [
      'Linear regression is always better',
      'KNN cannot handle non-linearity',
      'KNN requires normally distributed data',
      'Linear regression\'s lower variance can offset its higher bias'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The bias-variance tradeoff: a small increase in bias from assuming linearity may be offset by reduced variance.',
  },
  {
    id: 's10-m04',
    type: 'multiple-choice',
    question: 'KNN is most appropriate when:',
    options: [
      '$p$ is small and the relationship is non-linear',
      '$p$ is large and $n$ is small',
      'Interpretability is important',
      'The relationship is known to be linear'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'KNN works best with few predictors (avoids curse of dimensionality) and when flexibility is needed for non-linear patterns.',
  },
  {
    id: 's10-m05',
    type: 'numeric',
    question: 'To capture 10% of data as neighbors in 10 dimensions, approximately what fraction of each dimension\'s range is needed? (Enter as decimal, e.g., 0.79)',
    correctAnswer: 0.79,
    numericRange: { min: 0.5, max: 1, precision: 2 },
    difficulty: 'medium',
    explanation: 'To get 10% of points: need $(\\text{fraction})^{10} = 0.10$, so fraction = $0.10^{1/10} \\approx 0.79$ of each dimension.',
  },
  // Hard questions
  {
    id: 's10-h01',
    type: 'multiple-choice',
    question: 'In the curse of dimensionality, as $p$ increases:',
    options: [
      'All points become equidistant from each other',
      'The nearest neighbors become relatively farther away',
      'Linear regression fails completely',
      'KNN predictions become more accurate'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In high dimensions, distances become less meaningful - even nearest neighbors are relatively far away.',
  },
  {
    id: 's10-h02',
    type: 'multiple-choice',
    question: 'Linear regression uses how many parameters regardless of sample size $n$?',
    options: [
      '$p$ parameters',
      '$n$ parameters',
      '$p + 1$ parameters',
      '$n \\times p$ parameters'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Linear regression estimates $p$ slope coefficients plus one intercept = $p + 1$ parameters total.',
  },
  {
    id: 's10-h03',
    type: 'multiple-choice',
    question: 'KNN is called a "memory-based" or "instance-based" method because:',
    options: [
      'It requires large computer memory',
      'It memorizes the test data',
      'It has poor memory of past predictions',
      'It stores training data and uses it directly for predictions'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'KNN doesn\'t fit parameters; it stores all training data and queries it to make each prediction.',
  },
  {
    id: 's10-h04',
    type: 'multiple-choice',
    question: 'When comparing methods on simulated data, KNN-1 outperformed linear regression only when:',
    options: [
      'The relationship was highly non-linear',
      'The relationship was linear',
      'The sample size was small',
      'There were many predictors'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'KNN-1 (most flexible) only wins decisively when the true relationship is substantially non-linear, where linear regression\'s bias hurts.',
  },
];
