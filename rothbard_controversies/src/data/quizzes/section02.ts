import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Verstehen?',
    options: [
      'Interpretive understanding of motivated, intentional human action',
      'A German economic theory',
      'Statistical analysis of behavior',
      'The scientific method applied to economics'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Verstehen is the "interpretive understanding" that Alfred Schütz pointed out as the common-sense knowledge of the universality of motivated, intentional human action.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a Gedankenexperiment?',
    options: [
      'A laboratory experiment in Germany',
      'A mathematical proof',
      'An empirical observation',
      'A mental experiment used as a substitute for controlled laboratory experiments',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Gedankenexperiment, or "mental experiment," is the economic theorist\'s substitute for the natural scientist\'s controlled laboratory experiment, since social variables cannot actually be held constant.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are economic laws necessarily qualitative rather than quantitative?',
    options: [
      'Economists are not good at math',
      'The axioms of human action are qualitative, so only qualitative conclusions can emerge',
      'Data collection is too expensive',
      'Governments restrict access to quantitative data',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since only the qualitative enters into the logical process from the real world (goals, preferences, choices), only the qualitative can emerge in economic laws.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What has prevented econometricians from finding quantitative constants in economics?',
    options: [
      'Insufficient computing power',
      'Poor data quality',
      'Human beings change their minds and actions unpredictably',
      'Lack of funding for research',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'People change their minds and actions all the time; their behavior cannot be predicted with exact precision. Every factor determining supply and demand is subject to continuing and unpredictable change.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does praxeological prediction differ from soothsaying?',
    options: [
      'It predicts what would happen if certain conditions occur, not what will happen',
      'It uses computers',
      'It is more accurate',
      'It uses mathematical models'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The praxeologist predicts what would happen if such and such should occur (e.g., if demand rises, price will rise), not what will happen in the world. This is the same type of prediction as in natural science.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What Latin term describes economic laws that hold "other things being equal"?',
    options: [
      'Ad hoc',
      'Ex post facto',
      'Prima facie',
      'Ceteris paribus',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Economics arrives at ceteris paribus laws—laws that hold when other things are equal, allowing the economist to mentally isolate the effect of one variable on another.',
  },
];
