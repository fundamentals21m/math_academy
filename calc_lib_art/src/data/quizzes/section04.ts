import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What notation did Leibniz introduce for the derivative?',
    options: [
      '$\\frac{dy}{dx}$ (fraction notation)',
      '$f\'(x)$ (prime notation)',
      '$\\dot{x}$ (dot notation)',
      '$D_x y$ (operator notation)'
    ],
    correctIndex: 0,
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
      'It only works for physics problems',
      'It suggests algebraic manipulations that often give correct results',
      'Newton\'s notation was incorrect'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Leibniz\'s notation suggests manipulations like "canceling" in the chain rule: $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$—not rigorous, but a powerful mnemonic.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What was Leibniz\'s dream of a "characteristica universalis"?',
    options: [
      'A mechanical computer',
      'A way to communicate with aliens',
      'A universal alphabet for all languages',
      'A universal language of reasoning where all disputes could be settled by calculation'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Leibniz dreamed of a universal symbolic language that could reduce all reasoning to calculation, resolving disputes through logic rather than debate.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who published their calculus first—Newton or Leibniz?',
    options: [
      'Leibniz, in 1684',
      'Newton, in 1687 (Principia)',
      'Newton, in 1666',
      'They published simultaneously'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Leibniz published his calculus paper in 1684, while Newton\'s work appeared in the Principia in 1687—though Newton had developed his methods earlier privately.',
  },
];
