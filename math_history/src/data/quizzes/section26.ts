import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 's26-e01',
    type: 'multiple-choice',
    question: 'What technique did Fermat call "adequality"?',
    difficulty: 'easy',
    options: [
      'Setting nearly equal quantities equal to find extrema',
      'Solving quadratic equations',
      'Constructing perpendicular lines',
      'Calculating areas under curves'
    ],
    correctIndex: 0,
    explanation:
      'Fermat\'s "adequality" (adaequalitas) was the technique of setting $f(x + e) \\approx f(x)$ for small $e$, simplifying, dividing by $e$, then setting $e = 0$. This finds maxima and minima.',
  },
  {
    id: 's26-e02',
    type: 'multiple-choice',
    question: 'What does a tangent line to a curve at a point represent?',
    difficulty: 'easy',
    options: [
      'The line perpendicular to the curve',
      'The line that best approximates the curve near that point',
      'Any line through the point',
      'The line connecting two points on the curve',
    ],
    correctIndex: 1,
    explanation:
      'A tangent line at a point is the line that best approximates (or "touches") the curve at that point. It\'s the limit of secant lines as the second point approaches the first.',
  },
  {
    id: 's26-m01',
    type: 'multiple-choice',
    question:
      'Using Fermat\'s method, what is the slope of the tangent to $y = x^2$ at the point $(3, 9)$?',
    difficulty: 'medium',
    options: [
      '3',
      '9',
      '6',
      '2'
    ],
    correctIndex: 2,
    explanation:
      'For $f(x) = x^2$, Fermat\'s method gives slope $= 2a$ at point $(a, a^2)$. At $a = 3$, the slope is $2 \\cdot 3 = 6$.',
  },
  {
    id: 's26-m02',
    type: 'multiple-choice',
    question:
      'What modern concept is essentially the same as Fermat\'s adequality method?',
    difficulty: 'medium',
    options: [
      'Integration',
      'Matrix multiplication',
      'Completing the square',
      'The derivative'
    ],
    correctIndex: 3,
    explanation:
      'Fermat\'s adequality is essentially computing $\\lim_{e \\to 0} \\frac{f(a+e) - f(a)}{e}$, which is exactly the definition of the derivative $f\'(a)$.',
  },
  {
    id: 's26-h01',
    type: 'numeric',
    question:
      'Using Fermat\'s method, find where $f(x) = x(6-x)$ has its maximum. What is the x-value?',
    difficulty: 'hard',
    correctAnswer: 3,
    explanation:
      'Setting $f(x+e) \\approx f(x)$: $(x+e)(6-x-e) \\approx x(6-x)$. Expanding and simplifying gives $6 - 2x - e \\approx 0$. Setting $e = 0$: $x = 3$.',
  },
  {
    id: 's26-h02',
    type: 'multiple-choice',
    question:
      'How many years before Newton and Leibniz did Fermat discover his method for tangents?',
    difficulty: 'hard',
    options: [
      'About 40 years',
      'About 20 years',
      'About 10 years',
      'About 100 years'
    ],
    correctIndex: 0,
    explanation:
      'Fermat discovered his methods around 1629. Newton and Leibniz developed calculus in the late 1660s and 1670s—about 40 years later. Fermat never systematized his approach into a general theory.',
  },
];
