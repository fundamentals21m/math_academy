import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Hayek distinguishes two kinds of security. The "dangerous" kind threatens freedom because:',
    options: [
      'It guarantees a particular income level, which can only be done by controlling or abolishing the market',
      'It provides too little protection',
      'It costs too much',
      'It is provided by private insurance'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Limited security (basic minimums) can be provided for all, but absolute security (guaranteed income at a particular level) can only be provided by controlling the market, destroying freedom of occupation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Hayek, what can the state legitimately provide without threatening freedom?',
    options: [
      'Guaranteed income at former levels',
      'Protection from all economic risk',
      'Jobs for everyone in their preferred occupation',
      'Minimum sustenance, social insurance against sickness/accident, and disaster relief',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The state can provide minimum sustenance, organize social insurance, and offer disaster relief without threatening freedom—these operate outside and supplementary to the market.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Hayek says "the last resort of a competitive economy is the bailiff; the ultimate sanction of a planned economy is the hangman." This means:',
    options: [
      'Planned economies are more lenient',
      'Both systems are equally harsh',
      'Competition never has penalties',
      'Competition uses financial penalties while planning requires coercion up to corporal punishment',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Without a free labor market where people can be hired/fired, discipline cannot be maintained without corporal punishment. In planning, mistakes become crimes against the community.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Hayek contrasts "commercial" and "military" types of society. In the military type:',
    options: [
      'Individuals have more freedom',
      'Competition is maximized',
      'The individual is relieved of both choice and risk—work is allotted by authority',
      'There is no government',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In the military type, individuals are relieved of choice and risk—position is assigned by authority. This is "the security of the barracks," inseparable from restrictions on liberty.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When security is granted piecemeal to some groups as privilege, what happens?',
    options: [
      'The economy grows faster',
      'The insecurity of everyone else increases, creating demand for more security',
      'Everyone becomes more secure',
      'Freedom is enhanced',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Security granted as privilege to some necessarily increases insecurity for others, creating a vicious cycle where eventually "no price, not even liberty, seems too high."',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Benjamin Franklin\'s quote "Those who would give up essential liberty to purchase a little temporary safety deserve neither" applies to:',
    options: [
      'Both our individual lives and our nations—freedom always has a price',
      'Only national defense decisions',
      'Only economic matters',
      'Only historical situations',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Hayek applies this principle to both individual and national life—freedom can only be had at a price, and we must be willing to make material sacrifices to preserve liberty.',
  },
];
