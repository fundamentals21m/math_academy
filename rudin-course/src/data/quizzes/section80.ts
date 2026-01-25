import type { QuizQuestion } from './types';

export const section80Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f: X \\to \\mathbb{R}$ (or $\\overline{\\mathbb{R}}$) is measurable if:',
    options: [
      '$f$ is continuous',
      '$f$ is bounded',
      '$f^{-1}((a, \\infty))$ is measurable for all $a \\in \\mathbb{R}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Measurability means preimages of simple sets (like rays $(a,\\infty)$) are measurable. Equivalently, preimages of all Borel sets are measurable.',
  },
      '$f^{-1}(\\{a\\})$ is measurable for all $a
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Measurability means preimages of simple sets (like rays $(a,\\infty)$) are measurable. Equivalently, preimages of all Borel sets are measurable.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Measurability means preimages of simple sets (like rays $(a,\\infty)$) are measurable. Equivalently, preimages of all Borel sets are measurable.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are measurable functions, then:',
    options: [
      'Only $f + g$ is measurable',
      '$f/g$ is always measurable',
      'None of the above are necessarily measurable',
      '$f + g$, $fg$, $\\max(f,g)$, and $\\min(f,g)$ are all measurable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Measurable functions form an algebra: sums, products, max, min of measurable functions are measurable. Quotients are measurable where the denominator is nonzero.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\{f_n\\}$ is a sequence of measurable functions, then:',
    options: [
      '$\\sup_n f_n$, $\\inf_n f_n$, $\\limsup_n f_n$, and $\\liminf_n f_n$ are all measurable',
      'The limit may not be measurable',
      'Only finite suprema are measurable',
      'Measurability is not preserved under suprema',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Measurability is preserved under countable suprema, infima, and limits. This is why $\\limsup$ and $\\liminf$ (hence pointwise limits) of measurable functions are measurable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Every continuous function $f: \\mathbb{R}^n \\to \\mathbb{R}$ is:',
    options: [
      'Measurable only on compact sets',
      'Borel measurable (hence Lebesgue measurable)',
      'Not necessarily measurable',
      'Measurable only if bounded',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Continuous functions are measurable because preimages of open sets are open. Since open sets are Borel (hence Lebesgue) measurable, continuous functions are measurable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A function $f$ is measurable if and only if:',
    options: [
      '$\\{x : f(x) = a\\}$ is measurable for every $a \\in \\mathbb{R}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The standard characterization: $f$ is measurable iff all upper level sets $\\{f > a\\}$ are measurable. Equivalent conditions use $\\{f \\geq a\\}$, $\\{f < a\\}$, or $\\{f \\leq a\\}$.',
  },
      '$\\{x : f(x) > a\\}$ is measurable for every $a \\in \\mathbb{R}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The standard characterization: $f$ is measurable iff all upper level sets $\\{f > a\\}$ are measurable. Equivalent conditions use $\\{f \\geq a\\}$, $\\{f < a\\}$, or $\\{f \\leq a\\}$.',
  },
      '$f$ is the limit of continuous functions',
      '$f$ is bounded',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The standard characterization: $f$ is measurable iff all upper level sets $\\{f > a\\}$ are measurable. Equivalent conditions use $\\{f \\geq a\\}$, $\\{f < a\\}$, or $\\{f \\leq a\\}$.',
  },
];
