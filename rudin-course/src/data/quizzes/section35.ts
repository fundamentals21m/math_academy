import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Rolle\'s Theorem states that if $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then:',
    options: [
      '$f$ has a maximum at some $c \\in (a, b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Rolle\'s Theorem guarantees a point $c \\in (a,b)$ where $f\'(c) = 0$. Since $f(a) = f(b)$, the Mean Value Theorem reduces to Rolle\'s: there\'s a horizontal tangent somewhere in between.',
  },
      'There exists $c \\in (a, b)$ with $f\\'(c) = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Rolle\'s Theorem guarantees a point $c \\in (a,b)$ where $f\'(c) = 0$. Since $f(a) = f(b)$, the Mean Value Theorem reduces to Rolle\'s: there\'s a horizontal tangent somewhere in between.',
  },
      'There exists $c \\in (a, b)$ with $f\\'(c) = \\frac{f(b) - f(a)}{b - a}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Rolle\'s Theorem guarantees a point $c \\in (a,b)$ where $f\'(c) = 0$. Since $f(a) = f(b)$, the Mean Value Theorem reduces to Rolle\'s: there\'s a horizontal tangent somewhere in between.',
  },
      '$f$ is constant on $[a, b]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Rolle\'s Theorem guarantees a point $c \\in (a,b)$ where $f\'(c) = 0$. Since $f(a) = f(b)$, the Mean Value Theorem reduces to Rolle\'s: there\'s a horizontal tangent somewhere in between.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Rolle\'s Theorem guarantees a point $c \\in (a,b)$ where $f\'(c) = 0$. Since $f(a) = f(b)$, the Mean Value Theorem reduces to Rolle\'s: there\'s a horizontal tangent somewhere in between.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Mean Value Theorem guarantees that for $f$ continuous on $[a,b]$ and differentiable on $(a,b)$:',
    options: [
      '$f\\'(c) = 0$ for some $c \\in (a, b)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The MVT states there exists $c \\in (a,b)$ such that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$. Geometrically, there\'s a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.',
  },
      '$f\\'(c) = f(b) - f(a)$ for some $c \\in (a, b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The MVT states there exists $c \\in (a,b)$ such that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$. Geometrically, there\'s a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.',
  },
      '$f\\'(x)$ is bounded on $(a, b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The MVT states there exists $c \\in (a,b)$ such that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$. Geometrically, there\'s a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.',
  },
      '$f\\'(c) = \\frac{f(b) - f(a)}{b - a}$ for some $c \\in (a, b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The MVT states there exists $c \\in (a,b)$ such that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$. Geometrically, there\'s a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The MVT states there exists $c \\in (a,b)$ such that $f\'(c) = \\frac{f(b) - f(a)}{b - a}$. Geometrically, there\'s a point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f\'(x) > 0$ for all $x \\in (a, b)$, then on $[a, b]$:',
    options: [
      '$f$ is strictly increasing',
      '$f$ is constant',
      '$f$ is convex',
      '$f$ is bounded',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the MVT, if $x_1 < x_2$ in $[a,b]$, then $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1)$ for some $c \\in (x_1, x_2)$. Since $f\'(c) > 0$ and $x_2 - x_1 > 0$, we have $f(x_2) > f(x_1)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Generalized Mean Value Theorem (Cauchy\'s MVT) states that for $f, g$ continuous on $[a,b]$, differentiable on $(a,b)$:',
    options: [
      '$\\frac{f\'(c)}{g\'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$ for some $c \\in (a,b)$, if $g\'(c) \\neq 0$',
      '$f\'(c) \\cdot g\'(c) = [f(b) - f(a)][g(b) - g(a)]$ for some $c \\in (a,b)$',
      '$[f(b) - f(a)]g\'(c) = [g(b) - g(a)]f\'(c)$ for some $c \\in (a,b)$',
      '$f\'(c) + g\'(c) = \\frac{f(b) - f(a) + g(b) - g(a)}{b - a}$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Cauchy\'s MVT: There exists $c \\in (a,b)$ such that $[f(b) - f(a)]g\'(c) = [g(b) - g(a)]f\'(c)$. This is the basis for L\'Hospital\'s Rule. Note: we don\'t require $g\'(c) \\neq 0$ in the statement.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f\'(x) = 0$ for all $x \\in (a, b)$ and $f$ is continuous on $[a, b]$, then:',
    options: [
      '$f(a) = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the MVT, for any $x_1, x_2 \\in [a,b]$: $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1) = 0 \\cdot (x_2 - x_1) = 0$. Thus $f(x_1) = f(x_2)$ for all pairs, so $f$ is constant.',
  },
      '$f$ is constant on $[a, b]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the MVT, for any $x_1, x_2 \\in [a,b]$: $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1) = 0 \\cdot (x_2 - x_1) = 0$. Thus $f(x_1) = f(x_2)$ for all pairs, so $f$ is constant.',
  },
      '$f$ is differentiable on $[a, b]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the MVT, for any $x_1, x_2 \\in [a,b]$: $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1) = 0 \\cdot (x_2 - x_1) = 0$. Thus $f(x_1) = f(x_2)$ for all pairs, so $f$ is constant.',
  },
      '$f$ may not be constant',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the MVT, for any $x_1, x_2 \\in [a,b]$: $f(x_2) - f(x_1) = f\'(c)(x_2 - x_1) = 0 \\cdot (x_2 - x_1) = 0$. Thus $f(x_1) = f(x_2)$ for all pairs, so $f$ is constant.',
  },
];
