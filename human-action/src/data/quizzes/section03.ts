import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Mises, the revolt against reason originated from:',
    options: [
      'Socialist critics unable to defeat classical economics through rational argument',
      'Scientists questioning natural laws',
      'Religious leaders defending faith',
      'Artists promoting irrationalism',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The attack on reason began with socialist critics who could not refute classical economics logically and so attacked the universality of reason itself.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Polylogism is the doctrine that:',
    options: [
      'Logic has many applications',
      'Different groups have fundamentally different and incompatible logical structures',
      'There are many types of valid arguments',
      'Mathematics is the foundation of logic',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Polylogism claims different groups (classes, races) have incompatible logical structures, so their conclusions cannot be compared or debated.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Marxian polylogism claims that different logical structures belong to different:',
    options: [
      'Races',
      'Nations',
      'Age groups',
      'Social classes',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Marxian polylogism asserts that bourgeoisie and proletariat have fundamentally different logical structures, so "bourgeois economics" is mere ideology.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Mises\'s main critique of polylogism is that its proponents:',
    options: [
      'Are not sincere in their beliefs',
      'Lack academic credentials',
      'Never specify exactly how the different logics differ',
      'Ignore scientific discoveries',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'No polylogist has ever actually specified how the different logics differ - what axioms or rules of inference vary. They simply assert incompatibility.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Marxian concept of "ideology" is self-defeating because:',
    options: [
      'It is too abstract',
      'It contradicts historical materialism',
      'False beliefs cannot genuinely advance anyone\'s interests',
      'Marx never defined it precisely'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If a doctrine is factually wrong, it cannot serve anyone\'s interests - acting on false beliefs leads to failure. And motives don\'t affect theoretical validity.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Mises argues that polylogism is primarily:',
    options: [
      'An evasion tactic to dismiss arguments without engaging them',
      'A philosophical advancement',
      'A scientific hypothesis',
      'A useful analytical tool',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Polylogism allows dismissing opponents without actually engaging their reasoning - it is a rhetorical strategy for evading arguments one cannot refute.',
  },
];
