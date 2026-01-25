import type { QuizQuestion } from './types';

export const section81Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A simple function is:',
    options: [
      'Any step function',
      'A measurable function taking only finitely many values',
      'A continuous function',
      'A function with simple (non-repeated) roots'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A simple function has the form $s = \\sum_{i=1}^n a_i \\chi_{E_i}$ where $a_i$ are distinct values and $E_i$ are measurable sets. It takes finitely many values.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every non-negative measurable function is:',
    options: [
      'The pointwise limit of an increasing sequence of simple functions',
      'Continuous',
      'A simple function',
      'Bounded',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This approximation theorem is fundamental: any non-negative measurable $f$ can be approximated from below by simple functions $s_n \\nearrow f$ pointwise.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The integral of a simple function $s = \\sum_{i=1}^n a_i \\chi_{E_i}$ is defined as:',
    options: [
      '$\\int s \\, d\\mu = \\sum_{i=1}^n a_i \\mu(E_i)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of a simple function is the weighted sum of its values, where each value $a_i$ is weighted by the measure of the set where $s = a_i$.',
  },
      '$\\int s \\, d\\mu = n \\cdot \\mu(X)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral of a simple function is the weighted sum of its values, where each value $a_i$ is weighted by the measure of the set where $s = a_i$.',
  },
      '$\\int s \\, d\\mu = \\max_i a_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral of a simple function is the weighted sum of its values, where each value $a_i$ is weighted by the measure of the set where $s = a_i$.',
  },
      '$\\int s \\, d\\mu = \\sum_{i=1}^n a_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral of a simple function is the weighted sum of its values, where each value $a_i$ is weighted by the measure of the set where $s = a_i$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral of a simple function is the weighted sum of its values, where each value $a_i$ is weighted by the measure of the set where $s = a_i$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $s$ and $t$ are simple functions with $s \\leq t$ pointwise, then:',
    options: [
      '$\\int s \\, d\\mu = \\int t \\, d\\mu
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The integral of simple functions is monotone: if $s \\leq t$ pointwise, then $\\int s \\leq \\int t$. This monotonicity extends to the Lebesgue integral.',
  },
      '$\\int s \\, d\\mu \\geq \\int t \\, d\\mu
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of simple functions is monotone: if $s \\leq t$ pointwise, then $\\int s \\leq \\int t$. This monotonicity extends to the Lebesgue integral.',
  },
      'The integrals cannot be compared',
      '$\\int s \\, d\\mu \\leq \\int t \\, d\\mu
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of simple functions is monotone: if $s \\leq t$ pointwise, then $\\int s \\leq \\int t$. This monotonicity extends to the Lebesgue integral.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of simple functions is monotone: if $s \\leq t$ pointwise, then $\\int s \\leq \\int t$. This monotonicity extends to the Lebesgue integral.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The standard representation of a simple function $s$ taking values $\\{a_1, \\ldots, a_n\\}$ is:',
    options: [
      'Any sum of characteristic functions',
      'A polynomial representation',
      '$s = \\sum_{i=1}^n a_i \\chi_{E_i}$ where $E_i = s^{-1}(\\{a_i\\})$ are disjoint',
      'A Fourier series',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The standard (canonical) representation uses the disjoint level sets $E_i = \\{x : s(x) = a_i\\}$. This representation is unique up to ordering.',
  },
];
