import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Catallactics is defined as:',
    options: [
      'The study of government economic policy',
      'The analysis of actions conducted on the basis of monetary calculation',
      'Mathematical economics',
      'The science of catastrophes',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Catallactics is economics in the narrower sense - the study of market phenomena involving monetary calculation: prices, wages, interest, profits.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The "method of imaginary constructions" is used because:',
    options: [
      'Economists cannot run laboratory experiments on societies',
      'Real data is too expensive to collect',
      'Government forbids economic research',
      'Pure theory is superior to observation',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'We cannot create two identical economies and change one variable. Mental models isolate specific aspects of action for logical analysis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "pure market economy" is:',
    options: [
      'A description of actual historical economies',
      'An analytical tool for understanding market processes',
      'An ideological goal economists advocate',
      'Identical to modern capitalism',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The pure market is a methodological tool, not a claim about history or a political goal. We must understand markets before analyzing interventions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The "evenly rotating economy" (ERE) is useful for:',
    options: [
      'Predicting actual economic outcomes',
      'Planning socialist production',
      'Eliminating market uncertainty',
      'Separating interest from entrepreneurial profit'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'In the ERE with perfect certainty, there are no entrepreneurial profits or losses - only pure interest remains. This isolates interest as a distinct phenomenon.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '"Profit maximization" in economics means:',
    options: [
      'People only care about money',
      'Everyone is selfish and greedy',
      'People prefer better outcomes to worse ones',
      'Corporations exploit workers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Economics doesn\'t assume selfishness. It observes that people prefer outcomes they value more. What they value is entirely up to them.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Scarcity, according to Mises, is:',
    options: [
      'An artificial creation of capitalism',
      'Eliminable through money printing',
      'Real and fundamental - the problem humans must face',
      'Only a problem in underdeveloped countries',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Scarcity is not a social construct. Time is always scarce, resources are limited, wants exceed means. This is the fundamental human condition.',
  },
];
