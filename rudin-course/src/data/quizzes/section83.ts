import type { QuizQuestion } from './types';

export const section83Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Every Riemann integrable function on $[a,b]$ is:',
    options: [
      'Lebesgue integrable with the same integral value',
      'Continuous',
      'Not necessarily Lebesgue integrable',
      'Lebesgue integrable but may have different integral',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Lebesgue integral extends the Riemann integral: every Riemann integrable function is Lebesgue integrable, and the integrals agree.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A bounded function on $[a,b]$ is Riemann integrable if and only if:',
    options: [
      'It is continuous',
      'It is monotonic',
      'It has at most countably many discontinuities',
      'Its set of discontinuities has Lebesgue measure zero',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lebesgue\'s criterion: a bounded function is Riemann integrable iff it is continuous almost everywhere (discontinuities form a set of measure zero).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The characteristic function $\\chi_\\mathbb{Q}$ of the rationals on $[0,1]$ is:',
    options: [
      'Both Riemann and Lebesgue integrable',
      'Lebesgue integrable (with integral 0) but not Riemann integrable',
      'Neither Riemann nor Lebesgue integrable',
      'Riemann integrable but not Lebesgue integrable',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\chi_\\mathbb{Q}$ is discontinuous everywhere, so not Riemann integrable. But $\\mathbb{Q}$ has measure zero, so $\\int \\chi_\\mathbb{Q} = 0$ in the Lebesgue sense.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The main advantage of Lebesgue integration over Riemann integration is:',
    options: [
      'Works only for continuous functions',
      'Easier computation of integrals',
      'Does not require measure theory',
      'Better convergence theorems (MCT, DCT) and larger class of integrable functions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Lebesgue integration allows powerful limit theorems (Monotone, Dominated Convergence) and integrates more functions. This makes it essential for modern analysis.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For improper Riemann integrals like $\\int_1^\\infty \\frac{\\sin x}{x} dx$:',
    options: [
      'It is Lebesgue integrable but not Riemann integrable',
      'It exists as both Riemann and Lebesgue integral',
      'It exists as improper Riemann but the function is not Lebesgue integrable',
      'It does not exist in any sense',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The integral $\\int_1^\\infty \\frac{\\sin x}{x} dx$ converges conditionally as an improper Riemann integral, but $\\int_1^\\infty |\\frac{\\sin x}{x}| dx = \\infty$, so it is not Lebesgue integrable.',
  },
];
