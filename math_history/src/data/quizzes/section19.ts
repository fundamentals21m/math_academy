import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 's19-e01',
    type: 'multiple-choice',
    question: 'Which major mathematical concept was developed in India?',
    difficulty: 'easy',
    options: [
      'The Pythagorean theorem',
      'The decimal place-value system with zero',
      'Euclidean geometry',
      'The method of exhaustion',
    ],
    correctIndex: 1,
    explanation:
      'The decimal place-value system with zero as a number was developed in India by the 7th century CE. This system, transmitted through Arabic mathematicians, is now used worldwide.',
  },
  {
    id: 's19-e02',
    type: 'multiple-choice',
    question: 'Brahmagupta called positive numbers "fortunes" and negative numbers:',
    difficulty: 'easy',
    options: ['Losses', 'Debts', 'Shadows', 'Voids'],
    correctIndex: 1,
    explanation:
      'Brahmagupta used the terms "fortunes" for positive numbers and "debts" for negative numbers, reflecting a practical interpretation based on commerce.',
  },
  {
    id: 's19-m01',
    type: 'multiple-choice',
    question:
      'The infinite series $\\frac{\\pi}{4} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$ is often called the Leibniz formula (1676). Who discovered it about 250 years earlier?',
    difficulty: 'medium',
    options: ['Brahmagupta', 'Āryabhaṭa', 'Mādhava of Sangamagrāma', 'Bhāskara II'],
    correctIndex: 2,
    explanation:
      'Mādhava of Sangamagrāma (c. 1350-1425) of the Kerala School discovered this series around 1400 CE, nearly three centuries before Leibniz.',
  },
  {
    id: 's19-m02',
    type: 'multiple-choice',
    question: 'According to Brahmagupta\'s rules, what is (debt) × (debt)?',
    difficulty: 'medium',
    options: ['Debt', 'Fortune', 'Zero', 'Undefined'],
    correctIndex: 1,
    explanation:
      'Brahmagupta correctly stated that "debt × debt = fortune," which in modern terms means $(-) \\times (-) = (+)$, or a negative times a negative is positive.',
  },
  {
    id: 's19-h01',
    type: 'multiple-choice',
    question:
      'Brahmagupta\'s formula gives the area of a cyclic quadrilateral with sides $a, b, c, d$ and semiperimeter $s$ as:',
    difficulty: 'hard',
    options: [
      '$\\sqrt{s(s-a)(s-b)(s-c)}$',
      '$\\sqrt{(s-a)(s-b)(s-c)(s-d)}$',
      '$(a+b+c+d)/4$',
      '$abcd/4$',
    ],
    correctIndex: 1,
    explanation:
      'Brahmagupta\'s formula states Area $= \\sqrt{(s-a)(s-b)(s-c)(s-d)}$ for a cyclic quadrilateral. When $d = 0$, this reduces to Heron\'s formula for triangles.',
  },
  {
    id: 's19-h02',
    type: 'multiple-choice',
    question:
      'The Kerala School\'s discovery of infinite series for sine and cosine predates their European discovery by:',
    difficulty: 'hard',
    options: [
      'About 50 years',
      'About 100 years',
      'About 250 years',
      'About 500 years',
    ],
    correctIndex: 2,
    explanation:
      'Mādhava discovered the series for sine and cosine around 1400 CE. Taylor and Maclaurin developed them in Europe around 1715-1740, about 250-300 years later.',
  },
];
