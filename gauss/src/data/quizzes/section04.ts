import type { QuizQuestion } from './types';

/**
 * Section 4: Binary Quadratic Forms
 * Topics: Quadratic forms, discriminant, equivalence, reduction, class number, composition
 */
export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A binary quadratic form is an expression of the type:',
    options: [
      '$ax + by
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A binary quadratic form has the general form $ax^2 + bxy + cy^2$ with integer coefficients $a, b, c$.',
  },
      '$ax^2 + by^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A binary quadratic form has the general form $ax^2 + bxy + cy^2$ with integer coefficients $a, b, c$.',
  },
      '$ax^3 + bx^2 + cx + d
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A binary quadratic form has the general form $ax^2 + bxy + cy^2$ with integer coefficients $a, b, c$.',
  },
      '$ax^2 + bxy + cy^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A binary quadratic form has the general form $ax^2 + bxy + cy^2$ with integer coefficients $a, b, c$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A binary quadratic form has the general form $ax^2 + bxy + cy^2$ with integer coefficients $a, b, c$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the discriminant of the form $x^2 + y^2$ (i.e., $a=1, b=0, c=1$)?',
    correctAnswer: -4,
    numericRange: { min: -100, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'The discriminant is $D = b^2 - 4ac = 0 - 4(1)(1) = -4$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two binary quadratic forms are equivalent if:',
    options: [
      'They have the same coefficients',
      'One can be transformed to the other by a substitution with determinant $\\pm 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Forms are equivalent if related by a linear substitution $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} \\alpha & \\beta \\\\ \\gamma & \\delta \\end{pmatrix} \\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix}$ with $\\alpha\\delta - \\beta\\gamma = \\pm 1$.',
  },
      'They represent the same single integer',
      'They have different discriminants',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Forms are equivalent if related by a linear substitution $\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} \\alpha & \\beta \\\\ \\gamma & \\delta \\end{pmatrix} \\begin{pmatrix} x\' \\\\ y\' \\end{pmatrix}$ with $\\alpha\\delta - \\beta\\gamma = \\pm 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A positive integer $n$ is a sum of two squares if and only if:',
    options: [
      '$n$ is odd',
      '$n$ is prime',
      'Every prime factor $\\equiv 3 \\pmod{4}$ appears to an even power',
      '$n \\equiv 1 \\pmod{4}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$n$ is a sum of two squares iff every prime factor of the form $4k+3$ appears to an even power in the factorization.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$n$ is a sum of two squares iff every prime factor of the form $4k+3$ appears to an even power in the factorization.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Is $21 = 3 \\times 7$ a sum of two squares? (Enter 1 for yes, 0 for no)',
    correctAnswer: 0,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: 'Both $3$ and $7$ are primes $\\equiv 3 \\pmod{4}$ and each appears to an odd power (once). So $21$ is NOT a sum of two squares.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Is $45 = 9 \\times 5 = 3^2 \\times 5$ a sum of two squares? (Enter 1 for yes, 0 for no)',
    correctAnswer: 1,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: 'The prime $3 \\equiv 3 \\pmod{4}$ appears to power $2$ (even), and $5 \\equiv 1 \\pmod{4}$. So $45$ IS a sum of two squares: $45 = 3^2 + 6^2$.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'The class number $h(D)$ counts:',
    options: [
      'The number of primes less than $|D|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The class number $h(D)$ is the number of equivalence classes of binary quadratic forms with discriminant $D$.',
  },
      'The number of solutions to $x^2 + y^2 = D
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The class number $h(D)$ is the number of equivalence classes of binary quadratic forms with discriminant $D$.',
  },
      'The discriminant divided by $4
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The class number $h(D)$ is the number of equivalence classes of binary quadratic forms with discriminant $D$.',
  },
      'The number of equivalence classes of forms with discriminant $D
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The class number $h(D)$ is the number of equivalence classes of binary quadratic forms with discriminant $D$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The class number $h(D)$ is the number of equivalence classes of binary quadratic forms with discriminant $D$.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'The class number $h(-4) = ?$ (The form $x^2 + y^2$ has discriminant $-4$.)',
    correctAnswer: 1,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'For $D = -4$, there is only one reduced form: $(1, 0, 1)$ representing $x^2 + y^2$. So $h(-4) = 1$.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Gauss discovered that equivalence classes of forms can be composed (multiplied). This structure is now called:',
    options: [
      'The Gauss ring',
      'The form lattice',
      'The class group',
      'The quadratic field',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The set of equivalence classes with Gauss\'s composition law forms the class group, a fundamental object in algebraic number theory.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'For a negative discriminant $D$, a form $(a, b, c)$ is reduced if:',
    options: [
      '$|b| \\le a \\le c
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For $D < 0$, a form is reduced if $|b| \\le a \\le c$ (with additional tie-breaking rules when equality holds).',
  },
      '$a > b > c
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $D < 0$, a form is reduced if $|b| \\le a \\le c$ (with additional tie-breaking rules when equality holds).',
  },
      '$b = 0
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $D < 0$, a form is reduced if $|b| \\le a \\le c$ (with additional tie-breaking rules when equality holds).',
  },
      '$a = b = c
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $D < 0$, a form is reduced if $|b| \\le a \\le c$ (with additional tie-breaking rules when equality holds).',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For $D < 0$, a form is reduced if $|b| \\le a \\le c$ (with additional tie-breaking rules when equality holds).',
  },
];
