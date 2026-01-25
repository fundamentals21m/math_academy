import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The 3-sphere $S^3$ is the set of points in $\\mathbb{R}^4$ satisfying:',
    options: [
      '$a^2 + b^2 + c^2 + d^2 = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'S³ is defined by the unit sphere condition in ℝ⁴: a² + b² + c² + d² = 1.',
  },
      '$a + b + c + d = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'S³ is defined by the unit sphere condition in ℝ⁴: a² + b² + c² + d² = 1.',
  },
      '$\\max(a, b, c, d) = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'S³ is defined by the unit sphere condition in ℝ⁴: a² + b² + c² + d² = 1.',
  },
      '$|a| + |b| + |c| + |d| = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'S³ is defined by the unit sphere condition in ℝ⁴: a² + b² + c² + d² = 1.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'S³ is defined by the unit sphere condition in ℝ⁴: a² + b² + c² + d² = 1.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Points of $\\mathbb{R}P^3$ correspond to:',
    options: [
      'Great circles on $S^3$',
      'Single points on $S^3$',
      'Pairs of antipodal points on $S^3$',
      'Planes in $\\mathbb{R}^4$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Points of ℝP³ are lines through O in ℝ⁴, which meet S³ in antipodal pairs ±(a,b,c,d).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An isomorphism of groups is a one-to-one correspondence that:',
    options: [
      'Preserves distance',
      'Maps identity to identity only',
      'Preserves products',
      'Reverses order',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An isomorphism ϕ: G → G\' satisfies ϕ(g₁g₂) = ϕ(g₁)ϕ(g₂).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The only spheres with continuous group structures are:',
    options: [
      '$S^1$ and $S^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'S¹ (complex numbers) and S³ (quaternions) are the only spheres admitting continuous group structures.',
  },
      '$S^1$ only',
      '$S^1$, $S^3$, and $S^7
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'S¹ (complex numbers) and S³ (quaternions) are the only spheres admitting continuous group structures.',
  },
      '$S^1$ and $S^3
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'S¹ (complex numbers) and S³ (quaternions) are the only spheres admitting continuous group structures.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'S¹ (complex numbers) and S³ (quaternions) are the only spheres admitting continuous group structures.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The group structure on $S^1$ corresponds to:',
    options: [
      'Quaternion multiplication',
      'Adding angles',
      'Cross product',
      'Matrix addition'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The product of points on S¹ is (cos θ₁, sin θ₁) · (cos θ₂, sin θ₂) = (cos(θ₁ + θ₂), sin(θ₁ + θ₂)).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The reason $S^7$ does not have a continuous group structure is that:',
    options: [
      'Octonions are not associative',
      'There are no regular 8D polytopes',
      '7 is prime',
      '$S^7$ is not connected',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'S⁷ corresponds to unit octonions, but octonions lack associativity, so there is no group structure.',
  },
];
