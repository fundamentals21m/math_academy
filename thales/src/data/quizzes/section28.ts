import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 28: Leibniz
 */
export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why was Leibniz refused a Doctor of Law degree in 1666?',
    options: [
      'His thesis was rejected',
      'He failed the examinations',
      'He was a foreigner',
      'He was too young',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Leibniz was refused the degree of Doctor of Law on the grounds that he was too young. In the same year, he conceived the idea of symbolic logic—a universal language for expressing all rational thinking.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What idea did Leibniz conceive in 1666, centuries before it was realized?',
    options: [
      'Symbolic logic',
      'The theory of relativity',
      'Set theory',
      'Non-Euclidean geometry',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'In 1666, Leibniz conceived the idea of symbolic logic—a universal language in which all rational thinking could be expressed. This idea was only fully realized in the 19th and 20th centuries.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who introduced Leibniz to geometry and physics in Paris?',
    options: [
      'Huygens',
      'Descartes',
      'Newton',
      'Fermat'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'In Paris, Leibniz met Huygens, who introduced him to geometry and physics. Huygens challenged Leibniz to sum the series 2/n(n+1), which Leibniz solved using the telescoping method.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What notation did Leibniz introduce that we still use today?',
    options: [
      'The dot notation ẋ for derivatives',
      'The notation dy/dx and ∫',
      'The notation f\'(x) for derivatives',
      'The notation Δx for increments',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Leibniz introduced the notation dy/dx for derivatives and ∫ for integrals, which we still use today. Newton used the dot notation (ẋ), which is now mainly used in physics for time derivatives.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In what year did Leibniz publish his work on calculus?',
    options: [
      '1666',
      '1673',
      '1686',
      '1684',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Leibniz\'s work on the calculus appeared in 1684, before Newton had gotten around to publishing his results. This led to a bitter priority dispute between the two mathematicians.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who famously criticized infinitesimals as "the ghosts of departed quantities"?',
    options: [
      'Newton',
      'Voltaire',
      'George Berkeley',
      'Weierstrass',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The philosopher and bishop George Berkeley (1685-1753) criticized the concept of infinitesimals, asking how we can divide by dx if it is 0, yet get the right answer if it is not 0. He called them "the ghosts of departed quantities."',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Who put calculus on rigorous foundations using the epsilon-delta definition of limits?',
    options: [
      'Leibniz',
      'Weierstrass',
      'Berkeley',
      'Newton',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Karl Weierstrass (1815-1897) put calculus on firm foundations using the epsilon-delta definition of limits. The derivative is now seen not as a quotient but as a limit of quotients.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Who ridiculed Leibniz\'s view that this is "the best of all possible worlds"?',
    options: [
      'Voltaire',
      'Newton',
      'Berkeley',
      'Descartes',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Voltaire ridiculed Leibniz\'s optimistic philosophy in his novel Candide. However, Leibniz probably did not mean "happiest" by "best"—he may have meant something like "most energy-efficient."',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What did Abraham Robinson introduce in 1966 that vindicated Leibniz\'s intuitions about infinitesimals?',
    options: [
      'Category theory',
      'Set theory',
      'Nonstandard analysis',
      'Model theory',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Abraham Robinson introduced nonstandard analysis in 1966, giving a rigorous foundation for infinitesimals using mathematical logic. This vindicated Leibniz\'s original intuitions about dx and dy being infinitely small but non-zero quantities.',
  },
];
