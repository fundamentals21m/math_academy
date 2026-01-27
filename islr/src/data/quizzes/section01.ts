import type { QuizQuestion } from './types';

export const section01Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's01-e01',
    type: 'multiple-choice',
    question: 'In statistical learning, what do we call the variable we are trying to predict?',
    options: ['Predictor', 'Feature', 'Response', 'Coefficient'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The response variable (also called output or dependent variable) is denoted $Y$ and is what we try to predict based on the input variables.',
  },
  {
    id: 's01-e02',
    type: 'multiple-choice',
    question: 'Which type of learning involves predicting a response variable based on input variables?',
    options: ['Unsupervised learning', 'Reinforcement learning', 'Transfer learning', 'Supervised learning'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Supervised learning involves building a model to predict a response $Y$ based on predictors $X$. The "supervision" comes from having known response values to learn from.',
  },
  {
    id: 's01-e03',
    type: 'multiple-choice',
    question: 'Predicting house prices (a numerical value) is an example of what type of problem?',
    options: ['Regression', 'Classification', 'Clustering', 'Dimensionality reduction'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Regression problems involve predicting a quantitative (numerical) response. Classification involves predicting a qualitative (categorical) response.',
  },
  {
    id: 's01-e04',
    type: 'multiple-choice',
    question: 'In the model $Y = f(X) + \\epsilon$, what does $\\epsilon$ represent?',
    options: ['The prediction', 'The error term', 'The coefficient', 'The intercept'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The error term $\\epsilon$ captures measurement errors and other discrepancies between the true function $f(X)$ and the observed response $Y$.',
  },
  {
    id: 's01-e05',
    type: 'text',
    question: 'What type of learning is used when we have input data but no response variable to predict? (one word)',
    correctAnswer: 'unsupervised',
    difficulty: 'easy',
    explanation: 'Unsupervised learning is used when we observe measurements but have no associated response variable. Common tasks include clustering and dimensionality reduction.',
  },
  // Medium questions
  {
    id: 's01-m01',
    type: 'multiple-choice',
    question: 'Which of the following is a classification problem?',
    options: [
      'Predicting tomorrow\'s stock price',
      'Predicting the amount of rainfall next week',
      'Predicting whether an email is spam or not spam',
      'Predicting a person\'s annual income'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Spam detection is classification because the response (spam/not spam) is qualitative. The other examples involve quantitative responses (regression).',
  },
  {
    id: 's01-m02',
    type: 'multiple-choice',
    question: 'What is the primary goal when estimating $f$ for prediction purposes?',
    options: [
      'To understand which predictors are important',
      'To identify clusters in the data',
      'To maximize the number of predictors used',
      'To minimize the difference between predicted and actual values'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For prediction, we want $\\hat{Y} = \\hat{f}(X)$ to be as close as possible to the true $Y$. Understanding the relationship is the goal of inference, not prediction.',
  },
  {
    id: 's01-m03',
    type: 'multiple-choice',
    question: 'In the advertising example, TV, radio, and newspaper budgets are examples of:',
    options: ['Predictor variables', 'Response variables', 'Error terms', 'Parameters'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'TV, radio, and newspaper are predictor variables (inputs) used to predict the response variable (sales).',
  },
  {
    id: 's01-m04',
    type: 'multiple-choice',
    question: 'Which question is most relevant when the goal is inference rather than prediction?',
    options: [
      'How accurately can we predict Y?',
      'Which predictors are associated with Y?',
      'How flexible should our model be?',
      'What is the test error rate?'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Inference focuses on understanding the relationship between predictors and response, such as which predictors matter and how they affect Y.',
  },
  {
    id: 's01-m05',
    type: 'numeric',
    question: 'If we have $p = 3$ predictors, how many total variables (including the response) are in our dataset?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'With $p = 3$ predictors ($X_1, X_2, X_3$) plus the response variable $Y$, we have 4 variables total.',
  },
  // Hard questions
  {
    id: 's01-h01',
    type: 'multiple-choice',
    question: 'A medical researcher wants to understand how exercise, diet, and genetics affect heart disease risk. This is primarily:',
    options: [
      'A prediction problem',
      'An unsupervised learning problem',
      'An inference problem',
      'A classification problem only'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The goal is to understand relationships (how factors affect risk), which is inference. While prediction may be useful, the primary interest is in understanding the mechanism.',
  },
  {
    id: 's01-h02',
    type: 'multiple-choice',
    question: 'The function $f$ in $Y = f(X) + \\epsilon$ represents:',
    options: [
      'The exact relationship we will discover',
      'The random noise in our measurements',
      'The predicted values from our model',
      'The systematic information X provides about Y'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$f$ represents the systematic (non-random) relationship between $X$ and $Y$. The error term $\\epsilon$ captures everything $f$ misses.',
  },
  {
    id: 's01-h03',
    type: 'multiple-choice',
    question: 'Which scenario would benefit most from unsupervised learning?',
    options: [
      'Identifying natural groupings among customers based on purchasing behavior',
      'Predicting customer churn based on usage patterns',
      'Classifying tumors as malignant or benign',
      'Predicting house prices from square footage'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Finding natural groupings without predefined categories is clustering, an unsupervised task. The other options have known response variables (supervised).',
  },
];
