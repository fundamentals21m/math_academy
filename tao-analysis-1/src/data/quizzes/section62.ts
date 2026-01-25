import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Integration by parts for Riemann integrals states that if $f$ and $g$ are differentiable on $[a,b]$ with continuous derivatives, then:',
    options: [
      '$\\int_a^b f(x) g\\'(x) \\, dx = f(a)g(a) - f(b)g(b) + \\int_a^b f\\'(x) g(x) \\, dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Integration by parts is derived from the product rule $(fg)\' = f\'g + fg\'$. Integrating both sides and rearranging gives the formula.',
  },
      '$\\int_a^b f(x) g(x) \\, dx = f(b)g(b) - f(a)g(a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration by parts is derived from the product rule $(fg)\' = f\'g + fg\'$. Integrating both sides and rearranging gives the formula.',
  },
      '$\\int_a^b f(x) g\\'(x) \\, dx = f(b)g(b) - f(a)g(a) - \\int_a^b f\\'(x) g(x) \\, dx
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration by parts is derived from the product rule $(fg)\' = f\'g + fg\'$. Integrating both sides and rearranging gives the formula.',
  },
      '$\\int_a^b f\\'(x) g\\'(x) \\, dx = f(b)g(b) - f(a)g(a)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration by parts is derived from the product rule $(fg)\' = f\'g + fg\'$. Integrating both sides and rearranging gives the formula.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration by parts is derived from the product rule $(fg)\' = f\'g + fg\'$. Integrating both sides and rearranging gives the formula.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The substitution rule (change of variables) for Riemann integrals states that if $\\phi: [\\alpha, \\beta] \\to [a,b]$ is continuously differentiable and $f$ is continuous on $[a,b]$, then:',
    options: [
      '$\\int_a^b f(x) \\, dx = \\int_\\alpha^\\beta f(\\phi(t)) \\phi\\'(t) \\, dt$ where $\\phi(\\alpha) = a$, $\\phi(\\beta) = b
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The substitution rule transforms the integral by replacing $x = \\phi(t)$ and $dx = \\phi\'(t) \\, dt$, with the limits changing accordingly.',
  },
      '$\\int_a^b f(\\phi(x)) \\, dx = \\int_\\alpha^\\beta f(t) \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The substitution rule transforms the integral by replacing $x = \\phi(t)$ and $dx = \\phi\'(t) \\, dt$, with the limits changing accordingly.',
  },
      '$\\int_a^b f(x) \\, dx = \\int_\\alpha^\\beta f(\\phi(t)) \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The substitution rule transforms the integral by replacing $x = \\phi(t)$ and $dx = \\phi\'(t) \\, dt$, with the limits changing accordingly.',
  },
      '$\\int_a^b f(x) \\phi(x) \\, dx = \\int_\\alpha^\\beta f(t) \\, dt
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The substitution rule transforms the integral by replacing $x = \\phi(t)$ and $dx = \\phi\'(t) \\, dt$, with the limits changing accordingly.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The substitution rule transforms the integral by replacing $x = \\phi(t)$ and $dx = \\phi\'(t) \\, dt$, with the limits changing accordingly.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Use integration by parts to evaluate $\\int_0^1 x e^x \\, dx$. Give your answer to 2 decimal places.',
    correctAnswer: 1,
    numericRange: { min: 0, max: 100, precision: 2 },
    difficulty: 'medium',
    explanation: 'Let $f(x) = x$ and $g\'(x) = e^x$, so $f\'(x) = 1$ and $g(x) = e^x$. Then $\\int_0^1 x e^x \\, dx = [xe^x]_0^1 - \\int_0^1 e^x \\, dx = e - (e - 1) = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is Riemann integrable on $[a,b]$ and $|f(x)| \\leq M$ for all $x \\in [a,b]$, then:',
    options: [
      '$\\left| \\int_a^b f(x) \\, dx \\right| \\leq M
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'This is a consequence of the triangle inequality for integrals: $|\\int_a^b f| \\leq \\int_a^b |f| \\leq M(b-a)$.',
  },
      '$\\left| \\int_a^b f(x) \\, dx \\right| \\leq M(b-a)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is a consequence of the triangle inequality for integrals: $|\\int_a^b f| \\leq \\int_a^b |f| \\leq M(b-a)$.',
  },
      '$\\left| \\int_a^b f(x) \\, dx \\right| = M(b-a)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is a consequence of the triangle inequality for integrals: $|\\int_a^b f| \\leq \\int_a^b |f| \\leq M(b-a)$.',
  },
      '$\\int_a^b f(x) \\, dx \\leq M
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is a consequence of the triangle inequality for integrals: $|\\int_a^b f| \\leq \\int_a^b |f| \\leq M(b-a)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'This is a consequence of the triangle inequality for integrals: $|\\int_a^b f| \\leq \\int_a^b |f| \\leq M(b-a)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Mean Value Theorem for Integrals states that if $f$ is continuous on $[a,b]$, then there exists $c \\in [a,b]$ such that:',
    options: [
      '$f(b) - f(a) = f\\'(c)(b-a)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem for Integrals guarantees that the average value of $f$ over $[a,b]$, which is $\\frac{1}{b-a}\\int_a^b f$, is attained at some point $c$ in the interval.',
  },
      '$\\int_a^b f(x) \\, dx = f(c)(b-a)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem for Integrals guarantees that the average value of $f$ over $[a,b]$, which is $\\frac{1}{b-a}\\int_a^b f$, is attained at some point $c$ in the interval.',
  },
      '$\\int_a^b f(x) \\, dx = f(a) + f(b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem for Integrals guarantees that the average value of $f$ over $[a,b]$, which is $\\frac{1}{b-a}\\int_a^b f$, is attained at some point $c$ in the interval.',
  },
      '$f(c) = \\frac{f(a) + f(b)}{2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem for Integrals guarantees that the average value of $f$ over $[a,b]$, which is $\\frac{1}{b-a}\\int_a^b f$, is attained at some point $c$ in the interval.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Mean Value Theorem for Integrals guarantees that the average value of $f$ over $[a,b]$, which is $\\frac{1}{b-a}\\int_a^b f$, is attained at some point $c$ in the interval.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $f$ is continuous on $[0,4]$ and $\\int_0^4 f(x) \\, dx = 12$, what is the average value of $f$ on $[0,4]$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 100, precision: 2 },
    difficulty: 'easy',
    explanation: 'The average value of $f$ on $[a,b]$ is $\\frac{1}{b-a}\\int_a^b f(x) \\, dx = \\frac{1}{4-0} \\cdot 12 = 3$.',
  },
];
