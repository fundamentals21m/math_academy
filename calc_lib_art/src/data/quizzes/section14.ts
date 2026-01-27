import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'Who wrote the famous essay "The Unreasonable Effectiveness of Mathematics in the Natural Sciences"?',
    correctAnswer: 'Wigner',
    difficulty: 'hard',
    explanation: 'Eugene Wigner, a physicist, wrote this influential 1960 essay questioning why mathematics describes physical reality so well.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main mystery Wigner described?',
    options: [
      'Why mathematics developed for pure reasons describes physical reality so precisely',
      'Why mathematics is so difficult',
      'Why physicists don\'t use more mathematics',
      'Why mathematicians ignore physics'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Wigner marveled that mathematics invented for abstract, aesthetic reasons repeatedly turns out to describe physical reality with stunning accuracy.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Riemannian geometry was developed in 1854 as pure mathematics. It was later used for:',
    options: [
      'Counting money',
      'Einstein\'s general relativity (60 years later)',
      'Building bridges',
      'Weather prediction'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Riemann developed curved-space geometry as pure mathematics. Sixty years later, Einstein needed exactly this for general relativity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Complex numbers (involving $i = \\sqrt{-1}$) were invented for abstract algebra but turned out to be essential for:',
    options: [
      'Cooking recipes',
      'Counting animals',
      'Quantum mechanics',
      'Weather forecasting'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Complex numbers, which seemed like pure mathematical fiction, turned out to be fundamental to quantum mechanics.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Physicists often use mathematical beauty as:',
    options: [
      'A distraction from real work',
      'Something to avoid',
      'A way to confuse students',
      'A guide to discovering true physical laws'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Physicists like Dirac found that mathematically beautiful equations often turn out to describe nature—beauty seems to correlate with truth.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Calculus can be considered a "liberal art" because:',
    options: [
      'It combines practical power with deep philosophical questions about reality',
      'It is politically liberal',
      'It requires no technical skill',
      'It was invented by liberal politicians'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Like the classical liberal arts, calculus is both practically powerful and raises profound questions about the nature of reality and human understanding.',
  },
];
