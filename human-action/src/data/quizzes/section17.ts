import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Mises, what is a medium of exchange?',
    options: [
      'A good acquired for direct consumption',
      'A good acquired with the intention of exchanging it later for other goods',
      'A government-issued certificate of value',
      'A commodity that has intrinsic value',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A medium of exchange is a good that people acquire not for their own consumption or production activities, but with the intention of exchanging it later for goods they actually want to use.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What fundamental problem of barter does indirect exchange solve?',
    options: [
      'The problem of measuring value',
      'The problem of storing wealth',
      'The double coincidence of wants',
      'The problem of divisibility',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Direct exchange (barter) requires a double coincidence of wants—each party must want what the other has. Indirect exchange through money eliminates this requirement by allowing exchange to occur in two separate transactions.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to the regression theorem, how is the purchasing power of money originally established?',
    options: [
      'By tracing back to when the money commodity was valued for its direct (non-monetary) uses',
      'By government decree',
      'By international agreement among trading nations',
      'By the amount of labor required to produce it',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Mises\' regression theorem explains that today\'s purchasing power is based on yesterday\'s, which was based on the day before\'s, going back to when the money commodity was valued solely for its direct use (e.g., gold valued for jewelry before becoming money).'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the difference between money certificates and fiduciary media?',
    options: [
      'Money certificates are issued by governments while fiduciary media are private',
      'Money certificates are 100% backed by reserves while fiduciary media are not fully backed',
      'Money certificates are made of paper while fiduciary media are digital',
      'There is no difference; they are synonyms',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Money certificates are claims to money that are 100% backed by actual money held in reserve. Fiduciary media are claims that are NOT fully backed by reserves, effectively increasing the money supply beyond the underlying base money.'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the Cantillon effect?',
    options: [
      'The phenomenon where new money benefits first recipients at the expense of later recipients',
      'The tendency of gold to appreciate over time',
      'The stabilizing effect of the gold standard',
      'The correlation between money supply and interest rates',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Cantillon effect describes how new money enters the economy at specific points. First recipients can spend it at old prices, gaining real purchasing power, while later recipients find that prices have already risen—causing redistribution of wealth.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'According to Mises, the gold standard emerged primarily through:',
    options: [
      'Government planning and design',
      'International treaties and agreements',
      'Academic recommendation and expert consensus',
      'Spontaneous market evolution as participants converged on gold',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The gold standard was not deliberately designed by governments but emerged spontaneously as market participants converged on gold as the most suitable money commodity due to its superior qualities: durability, divisibility, portability, uniformity, limited supply, and recognizability.'
  }
];
