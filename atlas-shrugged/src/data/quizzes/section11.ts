import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "The Aristocracy of Pull" refer to?',
    options: [
      'The nobility of old Europe',
      'Those who gain power through political connections rather than merit',
      'The strongest athletes',
      'Railroad workers\' unions'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '"Pull" means political influence - the aristocracy of pull are those who succeed through government connections rather than productive ability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do members of the "aristocracy of pull" gain their position?',
    options: [
      'Through hard work and innovation',
      'Through inherited wealth',
      'Through political favors, connections, and government power',
      'Through public elections'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The aristocracy of pull gains power through political connections, lobbying, and the ability to influence government decisions in their favor.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens to genuine merit in a system dominated by "pull"?',
    options: [
      'It is rewarded even more',
      'It becomes irrelevant as connections matter more than ability',
      'It is accurately measured by government',
      'It receives public recognition'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In the pull system, actual ability becomes worthless - what matters is who you know and what favors you can trade.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which character benefits most from the aristocracy of pull?',
    options: [
      'Hank Rearden',
      'Dagny Taggart',
      'James Taggart',
      'Ellis Wyatt'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'James Taggart exemplifies the aristocracy of pull - he maintains power through political connections rather than competence.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What economic system does the "aristocracy of pull" create?',
    options: [
      'Free market capitalism',
      'Pure communism',
      'Crony capitalism or corporatism',
      'Traditional feudalism'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The aristocracy of pull creates crony capitalism - a corrupt system where business success depends on government favor, not free competition.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What moral corruption does the chapter expose in the pull system?',
    options: [
      'Only that it is inefficient',
      'That it rewards vice (manipulation) and punishes virtue (production)',
      'That it is too democratic',
      'That it is too traditional'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rand shows the pull system as morally inverted - rewarding political manipulation while punishing honest productive achievement.',
  },
];
