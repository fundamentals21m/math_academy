import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the fundamental cause of the trade cycle according to Mises?',
    options: [
      'Credit expansion by banks not backed by real saving',
      'Animal spirits and irrational exuberance',
      'Underconsumption by workers',
      'External shocks like wars and natural disasters'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Mises identifies credit expansion—the creation of money and credit by banks not backed by genuine saving—as the fundamental cause of the boom-bust cycle. This artificially lowers interest rates and distorts the structure of production.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is "malinvestment"?',
    options: [
      'Any investment that doesn\\'t pay dividends',
      'Investment in foreign countries',
      'Investment in projects that seem profitable only due to artificially low interest rates',
      'Investment by government rather than private enterprise',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Malinvestment refers to investment projects that appear profitable during the artificial boom but cannot actually be completed with the real resources available. The artificially low interest rates send false signals, directing capital into projects that wouldn\'t be undertaken if interest rates reflected true time preferences.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why must an artificial boom eventually turn into a bust?',
    options: [
      'Because workers demand higher wages',
      'Because the real resources to complete all the projects don\\'t exist',
      'Because government always raises taxes',
      'Because foreign competition increases',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Credit expansion creates the illusion of capital without the reality. When entrepreneurs try to complete their expanded projects, they discover there aren\'t enough real resources—labor, materials, equipment. The bust is the painful process of liquidating malinvestments and reallocating resources.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens to the structure of production during a credit-induced boom?',
    options: [
      'It becomes shorter and more focused on consumer goods',
      'It becomes more efficient through competition',
      'It remains unchanged because only prices are affected',
      'It lengthens artificially as if more saving had occurred'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The artificially low interest rates make longer, more roundabout production processes seem profitable. Entrepreneurs invest in earlier stages of production as if genuine saving had increased. But this lengthening is unsustainable because real resources haven\'t actually been released from consumption.'
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Mises, what is the proper policy response to a bust?',
    options: [
      'Further credit expansion to prevent deflation',
      'Price and wage controls to stabilize the economy',
      'Massive government spending to stimulate demand',
      'Allow the liquidation of malinvestments and reallocation of resources',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Mises argues that the bust is actually the cure, not the disease. It\'s the process of correcting the malinvestments of the boom. Attempting to prevent the correction through further inflation or stimulus only prolongs the agony and sets the stage for a worse crash later.'
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What role do fractional reserve banks play in the trade cycle?',
    options: [
      'They create fiduciary media (credit not backed by savings), enabling credit expansion',
      'They are innocent victims of government policy',
      'They prevent cycles by providing liquidity',
      'They have no role; only central banks matter',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Fractional reserve banks create fiduciary media—money substitutes not fully backed by reserves. This credit expansion beyond genuine saving is the mechanism that lowers interest rates artificially and initiates the boom-bust cycle. Banks profit from this process but contribute to economic instability.'
  }
];
