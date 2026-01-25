import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The standard deviation of deaths in a pool of $n$ members with mortality rate $q$ is:',
    options: [
      '$n \\cdot q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The standard deviation of deaths is σ_D = √(n × q × (1-q)) ≈ √(n × q) for small q.',
  },
      '$n / q
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The standard deviation of deaths is σ_D = √(n × q × (1-q)) ≈ √(n × q) for small q.',
  },
      '$\\sqrt{n \\cdot q}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The standard deviation of deaths is σ_D = √(n × q × (1-q)) ≈ √(n × q) for small q.',
  },
      '$q / n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The standard deviation of deaths is σ_D = √(n × q × (1-q)) ≈ √(n × q) for small q.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The standard deviation of deaths is σ_D = √(n × q × (1-q)) ≈ √(n × q) for small q.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A tontine with only 10 members (age 65, q=1%) has payment volatility of approximately:',
    options: [
      '5%',
      '15%',
      '1%',
      '40%+',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With only 10 members, the range of payments varies from $6,000 to $8,571 depending on deaths—over 40% variation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The coefficient of variation (relative volatility) is given by:',
    options: [
      '$1/\\sqrt{n \\cdot q}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'CV = σ_D / E[D] = √(nq) / (nq) = 1/√(nq). Larger pools have lower relative volatility.',
  },
      '$q / n
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'CV = σ_D / E[D] = √(nq) / (nq) = 1/√(nq). Larger pools have lower relative volatility.',
  },
      '$\\sqrt{n \\cdot q}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'CV = σ_D / E[D] = √(nq) / (nq) = 1/√(nq). Larger pools have lower relative volatility.',
  },
      '$n \\cdot q
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'CV = σ_D / E[D] = √(nq) / (nq) = 1/√(nq). Larger pools have lower relative volatility.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'CV = σ_D / E[D] = √(nq) / (nq) = 1/√(nq). Larger pools have lower relative volatility.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The practical recommendation for minimum pool size is:',
    options: [
      '10-50 members',
      '500-1,000 members',
      '100-200 members',
      '10,000+ members',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The practical recommendation is 500-1,000 members, providing acceptable stability (10-15% volatility) at reasonable administrative cost.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which is NOT a solution for small pool volatility?',
    options: [
      'Reinsurance',
      'Smoothing rules with buffer accounts',
      'Ignoring volatility',
      'Cohort aggregation',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Reinsurance, smoothing rules, and cohort aggregation are all valid solutions. Ignoring volatility is not a solution.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A pool with 1,000+ members has payment volatility of:',
    options: [
      '<5%',
      '40%+',
      '15-20%',
      '>50%',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'With 1,000+ members, the law of large numbers ensures payment volatility of less than 5%—excellent stability.',
  },
];
