import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 34: Rational Points on the Sphere
 */
export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is stereographic projection?',
    options: [
      'A map from sphere to sphere',
      'A projection onto a tangent plane',
      'A rotation of the sphere',
      'A map from plane to sphere (or vice versa) via lines through a pole',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Stereographic projection maps the plane to the sphere (or vice versa) by connecting points to the "north pole" (0, 0, 1). Each line through the pole hits both the plane and the sphere.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the "north pole" in stereographic projection of the unit sphere?',
    options: [
      '(0, 0, 1)',
      '(0, 0, 0)',
      '(1, 0, 0)',
      '(0, 1, 0)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The "north pole" is N = (0, 0, 1), the topmost point of the unit sphere x² + y² + z² = 1. Lines through this point connect plane points to sphere points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'What does stereographic projection tell us about rational points on the sphere?',
    options: [
      'There are no rational points',
      'Only integer points are preserved',
      'Rational (u, v) in the plane give rational (p, q, r) on the sphere',
      'The projection distorts all rationals',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The formulas show that p, q, r are rational if and only if u and v are rational. So rational points in the plane correspond exactly to rational points on the sphere (except the north pole).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Rational points on the unit sphere correspond to integer solutions of:',
    options: [
      '$a + b + c = d
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Each rational point (a/d, b/d, c/d) on the sphere satisfies (a/d)² + (b/d)² + (c/d)² = 1, which gives a² + b² + c² = d². Stereographic projection finds all such quadruples.',
  },
      '$a^2 + b^2 = c^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Each rational point (a/d, b/d, c/d) on the sphere satisfies (a/d)² + (b/d)² + (c/d)² = 1, which gives a² + b² + c² = d². Stereographic projection finds all such quadruples.',
  },
      '$a^2 + b^2 + c^2 = d^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Each rational point (a/d, b/d, c/d) on the sphere satisfies (a/d)² + (b/d)² + (c/d)² = 1, which gives a² + b² + c² = d². Stereographic projection finds all such quadruples.',
  },
      '$a^3 + b^3 + c^3 = d^3
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Each rational point (a/d, b/d, c/d) on the sphere satisfies (a/d)² + (b/d)² + (c/d)² = 1, which gives a² + b² + c² = d². Stereographic projection finds all such quadruples.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Each rational point (a/d, b/d, c/d) on the sphere satisfies (a/d)² + (b/d)² + (c/d)² = 1, which gives a² + b² + c² = d². Stereographic projection finds all such quadruples.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The formula for $r$ in stereographic projection (plane to sphere) is:',
    options: [
      '$r = \\frac{2u}{u^2 + v^2 + 1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The z-coordinate of the projected point is r = (u² + v² - 1)/(u² + v² + 1). Note that r ranges from -1 (at the origin) toward 1 (as u² + v² → ∞).',
  },
      '$r = \\frac{2v}{u^2 + v^2 + 1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The z-coordinate of the projected point is r = (u² + v² - 1)/(u² + v² + 1). Note that r ranges from -1 (at the origin) toward 1 (as u² + v² → ∞).',
  },
      '$r = u^2 + v^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The z-coordinate of the projected point is r = (u² + v² - 1)/(u² + v² + 1). Note that r ranges from -1 (at the origin) toward 1 (as u² + v² → ∞).',
  },
      '$r = \\frac{u^2 + v^2 - 1}{u^2 + v^2 + 1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The z-coordinate of the projected point is r = (u² + v² - 1)/(u² + v² + 1). Note that r ranges from -1 (at the origin) toward 1 (as u² + v² → ∞).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The z-coordinate of the projected point is r = (u² + v² - 1)/(u² + v² + 1). Note that r ranges from -1 (at the origin) toward 1 (as u² + v² → ∞).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why does the sphere $x^2 + y^2 + z^2 = 7$ have no rational points?',
    options: [
      '7 is prime',
      'Consider remainders modulo 8',
      '7 is not a perfect square',
      'The sphere is too small',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Squares modulo 8 are 0, 1, or 4. The sum of three squares mod 8 can be 0, 1, 2, 3, 4, 5, or 6, but not 7. So a² + b² + c² = 7d² is impossible, meaning no rational points exist.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the inverse formula for stereographic projection (sphere to plane)?',
    options: [
      '$u = p(1-r)$, $v = q(1-r)
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'To go from sphere point (p, q, r) back to plane point (u, v), use u = p/(1-r) and v = q/(1-r). This formula breaks down at the north pole where r = 1.',
  },
      '$u = p/(1-r)$, $v = q/(1-r)
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'To go from sphere point (p, q, r) back to plane point (u, v), use u = p/(1-r) and v = q/(1-r). This formula breaks down at the north pole where r = 1.',
  },
      '$u = p + r$, $v = q + r
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'To go from sphere point (p, q, r) back to plane point (u, v), use u = p/(1-r) and v = q/(1-r). This formula breaks down at the north pole where r = 1.',
  },
      '$u = p/r$, $v = q/r
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'To go from sphere point (p, q, r) back to plane point (u, v), use u = p/(1-r) and v = q/(1-r). This formula breaks down at the north pole where r = 1.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'To go from sphere point (p, q, r) back to plane point (u, v), use u = p/(1-r) and v = q/(1-r). This formula breaks down at the north pole where r = 1.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Stereographic projection generalizes to n-dimensional spheres. What do rational points correspond to?',
    options: [
      'Integer solutions to $x_1^2 + \\cdots + x_n^2 = x_{n+1}^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'In n dimensions, rational points on the unit sphere correspond to integer solutions of x₁² + x₂² + ⋯ + xₙ² = xₙ₊₁². The stereographic projection formulas generalize naturally.',
  },
      'Integer solutions to $x_1 + \\cdots + x_n = x_{n+1}
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'In n dimensions, rational points on the unit sphere correspond to integer solutions of x₁² + x₂² + ⋯ + xₙ² = xₙ₊₁². The stereographic projection formulas generalize naturally.',
  },
      'Real solutions only',
      'Complex points',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'In n dimensions, rational points on the unit sphere correspond to integer solutions of x₁² + x₂² + ⋯ + xₙ² = xₙ₊₁². The stereographic projection formulas generalize naturally.',
  },
];
