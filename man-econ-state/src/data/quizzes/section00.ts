import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the fundamental axiom of praxeology according to Rothbard?',
    options: [
      'Humans are rational beings',
      'Humans act purposefully to achieve goals',
      'Humans seek to maximize utility',
      'Humans respond to incentives'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The action axiom states that humans act purposefully, using means to achieve ends. This is the foundational premise of praxeological economics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to the law of marginal utility, why does the utility of additional units decrease?',
    options: [
      'Because goods become worn out with use',
      'Because people get bored with the same goods',
      'Because higher-valued ends are satisfied first',
      'Because production costs increase'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'As we acquire more units of a good, we satisfy our most urgent wants first. Each additional unit goes to a less important use, hence lower marginal utility.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "demonstrated preference" mean in praxeology?',
    options: [
      'Preferences stated in surveys',
      'Preferences revealed through actual choices and actions',
      'Preferences that can be measured numerically',
      'Preferences that remain constant over time'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Demonstrated preference means we can only know what people prefer by observing their actual actions, not by asking them hypothetically.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does Rothbard argue that utility cannot be measured cardinally?',
    options: [
      'Measurement tools are not accurate enough',
      'People lie about their preferences',
      'Utility is subjective and ordinal, not numerical',
      'Different cultures measure utility differently'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Utility is inherently subjective and can only be ranked (ordinal), not measured in units. We can say A > B, but not that A = 2B.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the relationship between means and ends in human action?',
    options: [
      'Ends determine what means are sought',
      'Means determine what ends are possible',
      'Ends and means are independent of each other',
      'Means always limit ends'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Humans first identify ends (goals) they wish to achieve, then seek means (resources, methods) to achieve those ends.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'According to Rothbard, what makes economic laws universal?',
    options: [
      'They are based on empirical observation across cultures',
      'They are derived logically from the action axiom',
      'They have been tested in laboratory experiments',
      'They are agreed upon by most economists'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Praxeological laws are derived through logical deduction from the action axiom, making them a priori true for all human action.',
  },
];
