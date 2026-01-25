import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Austrian Business Cycle Theory (ABCT)?',
    options: [
      'Business cycles are random',
      'Credit expansion lowers interest rates artificially, causing malinvestment that must eventually liquidate',
      'Cycles don\\'t exist',
      'Government should manage cycles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ABCT explains cycles as the result of credit expansion lowering interest rates below natural levels. This causes entrepreneurs to undertake investments that aren\'t sustainable, leading to an eventual bust.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is "malinvestment"?',
    options: [
      'Investment in projects that appear profitable only due to artificially low interest rates',
      'Bad management',
      'Foreign investment',
      'Government investment'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Malinvestment is investment in projects that would not be profitable at natural interest rates. Artificially low rates make long-term projects appear viable when they are not, leading to eventual failure.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What role do artificially low interest rates play in the business cycle?',
    options: [
      'They prevent cycles',
      'They have no effect',
      'They only affect consumers',
      'They send false signals to entrepreneurs, leading to unsustainable investment patterns',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Low interest rates signal that consumers have saved more and prefer future goods. But if rates are lowered by credit expansion rather than real savings, the signal is false and investments will fail.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the Austrian prescription during a recession?',
    options: [
      'Massive government spending',
      'Print more money',
      'Allow liquidation of malinvestments and resist the temptation to re-inflate',
      'Freeze all prices'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Austrians argue that recessions are the cure, not the disease. Malinvestments must be liquidated and resources reallocated. Further credit expansion only delays recovery and creates new distortions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does ABCT differ from Keynesian business cycle theory?',
    options: [
      'They are identical',
      'Keynesians oppose government action',
      'ABCT blames credit expansion; Keynesians blame insufficient aggregate demand',
      'ABCT supports more spending',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'ABCT locates the cause in credit expansion and the cure in liquidation. Keynesian theory blames insufficient demand and prescribes government spending. The theories have opposite diagnoses and prescriptions.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What Austrian term describes investment in unsustainable projects caused by artificially low interest rates?',
    options: [
      'Malinvestment',
      'Overinvestment',
      'Speculation',
      'Capital flight'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Malinvestment refers to investment in projects that only appear profitable due to distorted interest rates. These investments must eventually be liquidated when reality reasserts itself.',
  },
];
