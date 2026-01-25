import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the Cauchy sequence construction, a real number is defined as:',
    options: [
      'A Cauchy sequence of rationals',
      'An equivalence class of Cauchy sequences of rationals',
      'A limit of a Cauchy sequence',
      'A decimal expansion',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A real number is an equivalence class of Cauchy sequences, where two sequences are equivalent if their difference converges to zero. This ensures each real has a unique representation (as a class).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Addition of real numbers (as equivalence classes $[(a_n)]$ and $[(b_n)]$) is defined by:',
    options: [
      '$[(a_n)] + [(b_n)] = [(a_n + b_n)]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Addition is defined termwise: $[(a_n)] + [(b_n)] = [(a_n + b_n)]$. One must verify this is well-defined (independent of representative choice) and that $(a_n + b_n)$ is Cauchy.',
  },
      '$[(a_n)] + [(b_n)] = [(a_1 + b_1, a_1 + b_1, \\ldots)]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Addition is defined termwise: $[(a_n)] + [(b_n)] = [(a_n + b_n)]$. One must verify this is well-defined (independent of representative choice) and that $(a_n + b_n)$ is Cauchy.',
  },
      'Taking the limit of $a_n + b_n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Addition is defined termwise: $[(a_n)] + [(b_n)] = [(a_n + b_n)]$. One must verify this is well-defined (independent of representative choice) and that $(a_n + b_n)$ is Cauchy.',
  },
      '$[(a_n)] + [(b_n)] = [(a_n \\cdot b_n)]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Addition is defined termwise: $[(a_n)] + [(b_n)] = [(a_n + b_n)]$. One must verify this is well-defined (independent of representative choice) and that $(a_n + b_n)$ is Cauchy.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Addition is defined termwise: $[(a_n)] + [(b_n)] = [(a_n + b_n)]$. One must verify this is well-defined (independent of representative choice) and that $(a_n + b_n)$ is Cauchy.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The rationals $\\mathbb{Q}$ are embedded into $\\mathbb{R}$ by mapping each $q \\in \\mathbb{Q}$ to:',
    options: [
      'The equivalence class of $(q, q/2, q/3, \\ldots)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The constant sequence $(q, q, q, \\ldots)$ is trivially Cauchy, and its equivalence class represents the real number corresponding to $q$. This embedding preserves arithmetic operations.',
  },
      'The equivalence class of $(0, q, 0, q, \\ldots)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The constant sequence $(q, q, q, \\ldots)$ is trivially Cauchy, and its equivalence class represents the real number corresponding to $q$. This embedding preserves arithmetic operations.',
  },
      'The equivalence class of $(q, q, q, \\ldots)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The constant sequence $(q, q, q, \\ldots)$ is trivially Cauchy, and its equivalence class represents the real number corresponding to $q$. This embedding preserves arithmetic operations.',
  },
      'The Cauchy sequence $(q^n)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The constant sequence $(q, q, q, \\ldots)$ is trivially Cauchy, and its equivalence class represents the real number corresponding to $q$. This embedding preserves arithmetic operations.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The constant sequence $(q, q, q, \\ldots)$ is trivially Cauchy, and its equivalence class represents the real number corresponding to $q$. This embedding preserves arithmetic operations.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To show multiplication of reals is well-defined, we must prove that if $(a_n) \\sim (a_n\')$ and $(b_n) \\sim (b_n\')$, then:',
    options: [
      '$(a_n + b_n) \\sim (a_n\\' + b_n\\')
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Well-definedness of multiplication requires showing that changing representatives does not change the equivalence class of the product. This uses boundedness of Cauchy sequences.',
  },
      '$a_n = a_n\\'$ for all $n
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Well-definedness of multiplication requires showing that changing representatives does not change the equivalence class of the product. This uses boundedness of Cauchy sequences.',
  },
      '$(a_n \\cdot b_n) \\sim (a_n\\' \\cdot b_n\\')
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Well-definedness of multiplication requires showing that changing representatives does not change the equivalence class of the product. This uses boundedness of Cauchy sequences.',
  },
      '$(a_n / b_n) \\sim (a_n\\' / b_n\\')
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Well-definedness of multiplication requires showing that changing representatives does not change the equivalence class of the product. This uses boundedness of Cauchy sequences.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Well-definedness of multiplication requires showing that changing representatives does not change the equivalence class of the product. This uses boundedness of Cauchy sequences.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The real number $\\sqrt{2}$ in the Cauchy construction is represented by:',
    options: [
      'Both B and C (which are equivalent representations)',
      'A single sequence whose terms are all irrational',
      'Any Cauchy sequence of rationals whose squares converge to $2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Both descriptions give Cauchy sequences equivalent to each other, representing $\\sqrt{2}$. The decimal approximations and any rational sequence whose squares approach $2$ are equivalent.',
  },
      'The decimal sequence $(1, 1.4, 1.41, 1.414, \\ldots)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Both descriptions give Cauchy sequences equivalent to each other, representing $\\sqrt{2}$. The decimal approximations and any rational sequence whose squares approach $2$ are equivalent.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Both descriptions give Cauchy sequences equivalent to each other, representing $\\sqrt{2}$. The decimal approximations and any rational sequence whose squares approach $2$ are equivalent.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'The sequence $a_n = (1 + 1/n)^n$ approaches what famous constant (to 2 decimal places)?',
    correctAnswer: 2.72,
    numericRange: { min: 2, max: 3, precision: 2 },
    difficulty: 'medium',
    explanation: 'The sequence $(1 + 1/n)^n$ is Cauchy and represents Euler\'s number $e \\approx 2.71828...$, a fundamental real number constructed as a limit of rationals.',
  },
];
