import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 's13-e01',
    type: 'multiple-choice',
    question: 'Does the equation $6x + 9y = 7$ have integer solutions?',
    difficulty: 'easy',
    options: [
      'Yes, because 7 is prime',
      'Yes, because 6 and 9 are both positive',
      'No, because $\\gcd(6, 9) = 3$ does not divide 7',
      'No, because 7 is odd',
    ],
    correctIndex: 2,
    explanation:
      'A linear Diophantine equation $ax + by = c$ has solutions if and only if $\\gcd(a, b)$ divides $c$. Here $\\gcd(6, 9) = 3$, which does not divide 7, so no solutions exist.',
  },
  {
    id: 's13-e02',
    type: 'multiple-choice',
    question:
      'Which formula generates the primitive Pythagorean triple (3, 4, 5)?',
    difficulty: 'easy',
    options: [
      '$m = 3, n = 1
    correctIndex: 3,
    explanation:
      'With $m = 2, n = 1$: $x = m^2 - n^2 = 3$, $y = 2mn = 4$, $z = m^2 + n^2 = 5$. This gives the triple (3, 4, 5).',
  },
      '$m = 2, n = 0
    correctIndex: 0,
    explanation:
      'With $m = 2, n = 1$: $x = m^2 - n^2 = 3$, $y = 2mn = 4$, $z = m^2 + n^2 = 5$. This gives the triple (3, 4, 5).',
  },
      '$m = 1, n = 2
    correctIndex: 0,
    explanation:
      'With $m = 2, n = 1$: $x = m^2 - n^2 = 3$, $y = 2mn = 4$, $z = m^2 + n^2 = 5$. This gives the triple (3, 4, 5).',
  },
      '$m = 2, n = 1
    correctIndex: 0,
    explanation:
      'With $m = 2, n = 1$: $x = m^2 - n^2 = 3$, $y = 2mn = 4$, $z = m^2 + n^2 = 5$. This gives the triple (3, 4, 5).',
  },
    ],
    correctIndex: 0,
    explanation:
      'With $m = 2, n = 1$: $x = m^2 - n^2 = 3$, $y = 2mn = 4$, $z = m^2 + n^2 = 5$. This gives the triple (3, 4, 5).',
  },
  {
    id: 's13-m01',
    type: 'multiple-choice',
    question:
      'If $(x_0, y_0) = (2, 1)$ is a solution to $5x + 3y = 13$, what is another solution?',
    difficulty: 'medium',
    options: [
      '$(5, -2)
    correctIndex: 1,
    explanation:
      'The general solution is $x = x_0 + (b/d)t = 2 + 3t$ and $y = y_0 - (a/d)t = 1 - 5t$ where $d = \\gcd(5,3) = 1$. With $t = -1$: $x = 2 - 3 = -1$, $y = 1 + 5 = 6$. Check: $5(-1) + 3(6) = -5 + 18 = 13$.',
  },
      '$(-1, 6)
    correctIndex: 2,
    explanation:
      'The general solution is $x = x_0 + (b/d)t = 2 + 3t$ and $y = y_0 - (a/d)t = 1 - 5t$ where $d = \\gcd(5,3) = 1$. With $t = -1$: $x = 2 - 3 = -1$, $y = 1 + 5 = 6$. Check: $5(-1) + 3(6) = -5 + 18 = 13$.',
  },
      '$(5, -4)
    correctIndex: 2,
    explanation:
      'The general solution is $x = x_0 + (b/d)t = 2 + 3t$ and $y = y_0 - (a/d)t = 1 - 5t$ where $d = \\gcd(5,3) = 1$. With $t = -1$: $x = 2 - 3 = -1$, $y = 1 + 5 = 6$. Check: $5(-1) + 3(6) = -5 + 18 = 13$.',
  },
      '$(0, 4)
    correctIndex: 2,
    explanation:
      'The general solution is $x = x_0 + (b/d)t = 2 + 3t$ and $y = y_0 - (a/d)t = 1 - 5t$ where $d = \\gcd(5,3) = 1$. With $t = -1$: $x = 2 - 3 = -1$, $y = 1 + 5 = 6$. Check: $5(-1) + 3(6) = -5 + 18 = 13$.',
  },
    ],
    correctIndex: 2,
    explanation:
      'The general solution is $x = x_0 + (b/d)t = 2 + 3t$ and $y = y_0 - (a/d)t = 1 - 5t$ where $d = \\gcd(5,3) = 1$. With $t = -1$: $x = 2 - 3 = -1$, $y = 1 + 5 = 6$. Check: $5(-1) + 3(6) = -5 + 18 = 13$.',
  },
  {
    id: 's13-m02',
    type: 'numeric',
    question:
      'For Pell\'s equation $x^2 - 2y^2 = 1$, if $(3, 2)$ is a solution, verify by computing $3^2 - 2 \\cdot 2^2$. What is the result?',
    difficulty: 'medium',
    correctAnswer: 1,
    explanation:
      '$3^2 - 2 \\cdot 2^2 = 9 - 2 \\cdot 4 = 9 - 8 = 1$. Indeed, $(3, 2)$ satisfies Pell\'s equation with $N = 2$.',
  },
  {
    id: 's13-h01',
    type: 'multiple-choice',
    question:
      'Fermat\'s method of infinite descent proves equations have no solutions by:',
    difficulty: 'hard',
    options: [
      'Showing any solution leads to a smaller solution, contradicting minimality',
      'Finding all solutions and showing the set is empty',
      'Proving the equation has infinitely many solutions',
      'Using modular arithmetic to find contradictions',
    ],
    correctIndex: 0,
    explanation:
      'Infinite descent assumes a minimal positive solution exists, then constructs a smaller one—a contradiction. This proves no positive solution can exist.',
  },
  {
    id: 's13-h02',
    type: 'multiple-choice',
    question:
      'Fermat\'s Last Theorem states that $x^n + y^n = z^n$ has no positive integer solutions for $n \\geq 3$. Who finally proved this, and when?',
    difficulty: 'hard',
    options: [
      'Euler in 1770',
      'Kummer in 1850',
      'Fermat in 1637',
      'Wiles in 1995',
    ],
    correctIndex: 3,
    explanation:
      'Andrew Wiles proved Fermat\'s Last Theorem in 1995, 358 years after Fermat\'s original claim. The proof used modern techniques involving elliptic curves and modular forms.',
  },
];
