import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Wertfreiheit?',
    options: [
      'The doctrine that social science should describe and explain without making value judgments',
      'A German banking system',
      'A type of economic calculation',
      'Free trade policy',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Wertfreiheit, or value-freedom, holds that the social scientist must scrupulously separate his role as scientist from his role as citizen—analyzing cause and effect without evaluating or prescribing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the unanimity criterion in welfare economics?',
    options: [
      'All economists must agree on a theory',
      'Prices must be uniform across markets',
      'A policy change is an improvement if it makes some better off while harming none',
      'Everyone must vote for a policy',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The unanimity criterion (Pareto criterion) holds that a change is an improvement if it makes some better off without making anyone worse off—allowing recommendations without imposing values.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are interpersonal utility comparisons scientifically invalid?',
    options: [
      'People lie about their preferences',
      'We cannot add or compare the subjective utilities of different individuals',
      'Surveys are too expensive',
      'Utility changes too quickly',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'We cannot add or compare the subjective utilities of different individuals. Asserting that one person\'s gain exceeds another\'s loss requires measuring subjective experiences that cannot be measured.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How can economics contribute to ethical deliberation without making value judgments?',
    options: [
      'By showing the consequences of various policies so informed decisions can be made',
      'By telling people what to value',
      'By proving certain values are correct',
      'By ignoring consequences entirely',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Economics provides essential information for ethical deliberation by demonstrating the consequences of various policies. The economist shows what will happen; the citizen judges whether that is desirable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does praxeology take as given when analyzing human action?',
    options: [
      'Government policy',
      'Interest rates',
      'Market prices',
      'The ends (goals) of action',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Praxeology takes the ends of action as given. The economist does not ask whether preferences are good or bad; he simply analyzes the implications of acting on those preferences.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of exchange benefits both parties according to economic analysis?',
    options: [
      'Forced',
      'Subsidized',
      'Regulated',
      'Voluntary'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Voluntary exchange benefits both parties—if it did not, they would not trade. This basic proposition has normative relevance: restrictions on voluntary exchange harm those who would have traded.',
  },
];
