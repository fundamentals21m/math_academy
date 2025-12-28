import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What notation did Leibniz introduce for the derivative?',
    options: [
      '$\\dot{x}$ (dot notation)',
      '$f\'(x)$ (prime notation)',
      '$\\frac{dy}{dx}$ (fraction notation)',
      '$D_x y$ (operator notation)'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Leibniz introduced $\\frac{dy}{dx}$ notation, treating the derivative as a ratio of infinitesimal changes—notation we still use today.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the integral symbol $\\int$ represent, according to Leibniz?',
    options: [
      'The letter "I" for "infinite"',
      'An elongated "S" for "summa" (sum)',
      'The Greek letter sigma',
      'A stylized infinity symbol'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Leibniz designed the integral sign ∫ as an elongated S, standing for "summa" (Latin for sum), representing the sum of infinitely many infinitesimal pieces.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What was Leibniz\'s profession besides mathematician?',
    correctAnswer: 'philosopher',
    difficulty: 'medium',
    explanation: 'Leibniz was a polymath who made major contributions to philosophy (monads, theodicy), as well as to law, history, and technology.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is Leibniz\'s notation considered superior to Newton\'s for many purposes?',
    options: [
      'It uses fewer symbols',
      'It suggests algebraic manipulations that often give correct results',
      'It only works for physics problems',
      'Newton\'s notation was incorrect'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Leibniz\'s notation suggests manipulations like "canceling" in the chain rule: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$—not rigorous, but a powerful mnemonic.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What was Leibniz\'s dream of a "characteristica universalis"?',
    options: [
      'A universal language of reasoning where all disputes could be settled by calculation',
      'A way to communicate with aliens',
      'A universal alphabet for all languages',
      'A mechanical computer'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Leibniz dreamed of a universal symbolic language that could reduce all reasoning to calculation, resolving disputes through logic rather than debate.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who published their calculus first—Newton or Leibniz?',
    options: [
      'Newton, in 1666',
      'Newton, in 1687 (Principia)',
      'Leibniz, in 1684',
      'They published simultaneously'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Leibniz published his calculus paper in 1684, while Newton\'s work appeared in the Principia in 1687—though Newton had developed his methods earlier privately.',
  },
];
