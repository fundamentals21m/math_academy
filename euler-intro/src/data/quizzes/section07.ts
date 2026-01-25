import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an asymptote of a curve?',
    options: [
      'A tangent line at a point on the curve',
      'The axis of symmetry of the curve',
      'A chord connecting two points on the curve',
      'A line that the curve approaches but never reaches as it extends to infinity',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An asymptote is a line that a curve approaches arbitrarily closely as the curve extends to infinity, without ever touching it (in most cases).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many asymptotes does a hyperbola have?',
    options: [
      'Two',
      'None',
      'One',
      'Four',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A hyperbola has exactly two asymptotes, which are the lines the two branches approach as they extend to infinity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are the asymptotes of the hyperbola $x^2/a^2 - y^2/b^2 = 1$?',
    options: [
      '$y = \\pm x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The asymptotes of $x^2/a^2 - y^2/b^2 = 1$ are the lines $y = \\pm(b/a)x$, obtained by setting the equation equal to 0 instead of 1.',
  },
      '$y = \\pm (a/b)x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The asymptotes of $x^2/a^2 - y^2/b^2 = 1$ are the lines $y = \\pm(b/a)x$, obtained by setting the equation equal to 0 instead of 1.',
  },
      '$y = \\pm (b/a)x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The asymptotes of $x^2/a^2 - y^2/b^2 = 1$ are the lines $y = \\pm(b/a)x$, obtained by setting the equation equal to 0 instead of 1.',
  },
      '$x = \\pm a
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The asymptotes of $x^2/a^2 - y^2/b^2 = 1$ are the lines $y = \\pm(b/a)x$, obtained by setting the equation equal to 0 instead of 1.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The asymptotes of $x^2/a^2 - y^2/b^2 = 1$ are the lines $y = \\pm(b/a)x$, obtained by setting the equation equal to 0 instead of 1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Does a parabola have asymptotes?',
    options: [
      'Yes, one asymptote',
      'No, parabolas have no asymptotes',
      'Yes, two asymptotes',
      'It depends on the parabola'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A parabola has no asymptotes. Although it extends to infinity, it doesn\'t approach any straight line—it continues curving away.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Euler find the asymptotes of a curve algebraically?',
    options: [
      'By setting the equation equal to zero',
      'By examining the highest-degree terms as coordinates approach infinity',
      'By finding where the curve crosses the axes',
      'By computing the derivative',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Asymptotes are found by examining the dominant (highest-degree) terms of the equation as $x$ and/or $y$ approach infinity.',
  },
];
