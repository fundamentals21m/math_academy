import type { QuizQuestion } from './types';

export const section04Quiz: QuizQuestion[] = [
  // Easy questions
  {
    id: 's04-e01',
    type: 'multiple-choice',
    question: 'Which R function is used to combine values into a vector?',
    options: ['vector()', 'c()', 'combine()', 'v()'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The c() function (short for "combine") creates vectors in R: c(1, 2, 3) creates a vector with elements 1, 2, 3.',
  },
  {
    id: 's04-e02',
    type: 'multiple-choice',
    question: 'In R, which function reads a CSV file into a data frame?',
    options: ['load.csv()', 'import.csv()', 'read.csv()', 'open.csv()'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'read.csv() is the standard function for loading comma-separated value files into R as data frames.',
  },
  {
    id: 's04-e03',
    type: 'multiple-choice',
    question: 'What does x[2] return in R if x = c(5, 10, 15, 20)?',
    options: ['5', '15', '20', '10'],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'R uses 1-based indexing, so x[2] returns the second element, which is 10.',
  },
  {
    id: 's04-e04',
    type: 'text',
    question: 'What R function computes the arithmetic mean of a vector? (one word)',
    correctAnswer: 'mean',
    difficulty: 'easy',
    explanation: 'The mean() function calculates the arithmetic average of a numeric vector.',
  },
  {
    id: 's04-e05',
    type: 'multiple-choice',
    question: 'Which R function displays the first few rows of a data frame?',
    options: ['head()', 'first()', 'top()', 'start()'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'head() shows the first 6 rows by default. You can specify a different number with head(df, n).',
  },
  // Medium questions
  {
    id: 's04-m01',
    type: 'multiple-choice',
    question: 'In R, what does seq(1, 10, by = 2) produce?',
    options: [
      '1 2 3 4 5 6 7 8 9 10',
      '1 3 5 7 9',
      '1 2',
      '2 4 6 8 10'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'seq(1, 10, by = 2) creates a sequence from 1 to 10, incrementing by 2: 1, 3, 5, 7, 9.',
  },
  {
    id: 's04-m02',
    type: 'multiple-choice',
    question: 'To access the "sales" column from a data frame called Advertising, which is NOT valid?',
    options: [
      'Advertising[, "sales"]',
      'Advertising["sales"]',
      'Advertising.sales',
      'Advertising$sales'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'R uses $ for column access, not the dot notation (which is used in Python/pandas). Advertising.sales would look for an object named "Advertising.sales".',
  },
  {
    id: 's04-m03',
    type: 'numeric',
    question: 'If x = c(2, 4, 6, 8, 10), what is the result of length(x)?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'length() returns the number of elements in a vector. This vector has 5 elements.',
  },
  {
    id: 's04-m04',
    type: 'multiple-choice',
    question: 'In R, what does matrix(1:6, nrow = 2, ncol = 3) create?',
    options: [
      'A 2x3 matrix filled by row',
      'A 3x2 matrix filled by column',
      'A 6x1 matrix',
      'A 2x3 matrix filled by column'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By default, R fills matrices by column. The first column gets 1,2, second gets 3,4, third gets 5,6.',
  },
  {
    id: 's04-m05',
    type: 'multiple-choice',
    question: 'Which function provides a statistical summary of all variables in a data frame?',
    options: ['summary()', 'describe()', 'stats()', 'info()'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'summary() provides min, max, median, mean, and quartiles for numeric variables, and counts for factors.',
  },
  // Hard questions
  {
    id: 's04-h01',
    type: 'multiple-choice',
    question: 'What does x[-c(2,4)] return if x = c(10, 20, 30, 40, 50)?',
    options: [
      '20 40',
      '10 30 50',
      '10 20 30 40 50',
      'An error'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Negative indexing in R excludes elements. x[-c(2,4)] removes the 2nd and 4th elements, leaving 10, 30, 50.',
  },
  {
    id: 's04-h02',
    type: 'multiple-choice',
    question: 'In R, what does A[2, ] return for a matrix A?',
    options: [
      'The second column of A',
      'An error',
      'The second row of A',
      'The element at position (2,2)'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A[row, col] accesses matrix elements. Leaving col blank returns the entire row, so A[2, ] returns the second row.',
  },
  {
    id: 's04-h03',
    type: 'multiple-choice',
    question: 'Which R function fits a linear regression model?',
    options: ['regression()', 'fit()', 'linear()', 'lm()'],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'lm() (linear model) fits linear regression. The syntax is lm(y ~ x, data = df) where ~ means "predicted by".',
  },
];
