import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is deflation in Austrian terms?',
    options: [
      'Falling prices',
      'Currency weakness',
      'Economic contraction',
      'A decrease in the money supply'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Austrians define deflation as a decrease in the money supply, not falling prices. Falling prices can result from deflation or from productivity improvements—these have different causes and effects.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is "good deflation" from productivity growth beneficial?',
    options: [
      'It causes recession',
      'It hurts consumers',
      'It requires government intervention',
      'Falling prices mean the same wages buy more goods, raising real living standards',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When prices fall due to productivity improvements, the same wages buy more goods. This is how economic progress raises living standards. It is not the harmful deflation of monetary contraction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do mainstream economists fear deflation?',
    options: [
      'It has never happened',
      'They fear debt deflation spirals and consumers deferring purchases',
      'It causes inflation',
      'It is too predictable',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Mainstream economists fear that falling prices increase real debt burdens and that consumers will defer purchases, creating a deflationary spiral. Austrians argue these fears are exaggerated.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the Austrian response to fears of deflation?',
    options: [
      'Market adjustment to deflation is normal; resisting it causes more harm',
      'Deflation should always be prevented',
      'Only government can stop deflation',
      'Deflation never occurs',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Austrians argue that markets adjust to deflation. People still buy things they need; they don\'t wait forever for lower prices. Resisting deflation through inflation creates new problems.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What happened during the 19th century when prices generally fell?',
    options: [
      'Economic collapse',
      'Currency crisis',
      'Strong economic growth as productivity increases outpaced money supply',
      'Hyperinflation',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The 19th century saw generally falling prices alongside strong economic growth. Productivity improvements outpaced the gold-backed money supply. This "good deflation" raised living standards.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of deflation results from improvements in productivity and is beneficial for living standards?',
    options: [
      'Good deflation',
      'Bad deflation',
      'Monetary deflation',
      'Asset deflation'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Good deflation occurs when productivity improvements lower prices. Unlike monetary deflation, it represents genuine economic progress—the same income buys more goods.',
  },
];
