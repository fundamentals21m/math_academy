import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 24: The Cubic and Quartic Equations
 */
export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "Tartaglia" mean, and why was Niccolo given this name?',
    options: [
      '"The genius" — for his mathematical ability',
      '"The stammerer" — his jaws were split by a soldier\\'s sword',
      '"The teacher" — for his lectures at Verona',
      '"The victor" — for winning the cubic contest',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Tartaglia means "the stammerer." When the French captured Brescia in 1512, young Niccolo\'s jaws were split by a soldier\'s sword during the massacre, leaving him with a speech impediment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who first solved the cubic equation x³ + bx = c?',
    options: [
      'Scipione Ferro',
      'Cardano',
      'Tartaglia',
      'Ferrari',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Scipione Ferro of Bologna (1465-1526) first solved equations of the form x³ + bx = c. He kept his method secret to maintain an advantage in mathematical contests, passing it to Antonio Fiore only on his deathbed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happened in the mathematical contest between Tartaglia and Fiore?',
    options: [
      'They tied',
      'Fiore won all the problems',
      'Tartaglia solved all of Fiore\\'s problems and Fiore couldn\\'t solve Tartaglia\\'s',
      'The contest was declared invalid',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Tartaglia won decisively. He solved all of Fiore\'s problems (which were all of the form x³ + bx = c), while Fiore couldn\'t solve Tartaglia\'s problems (which were of the form x³ + ax² = c).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why was Cardano imprisoned for heresy?',
    options: [
      'He published a horoscope of Jesus Christ',
      'He criticized the Pope\\'s mathematics',
      'He used imaginary numbers',
      'He broke his promise to Tartaglia',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Cardano was imprisoned in 1570 for heresy because he published a horoscope of Jesus Christ. This was heretical because it suggested that God was subject to the stars. He was freed only after he recanted.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What mathematical first is Cardano credited with in his Ars Magna?',
    options: [
      'First use of decimal notation',
      'First use of the equals sign',
      'First use of imaginary numbers in print',
      'First use of algebraic symbols'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Cardano was the first person to use imaginary numbers in print. His Ars Magna (1545) contained a treatment of the cubic equation that included imaginary numbers.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What clever technique did Ferrari use to solve the quartic equation?',
    options: [
      'He guessed and checked',
      'He factored it directly',
      'He used geometric constructions',
      'He reduced it to a cubic equation'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Ferrari\'s brilliant insight was to reduce the quartic equation to a cubic equation by introducing a parameter t. Once the associated cubic is solved, the quartic can be written as two perfect squares.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What did Bombelli discover about the "irreducible case" of the cubic?',
    options: [
      'It has only complex solutions',
      'It has no solutions',
      'It cannot be solved by radicals',
      'It actually gives three real roots',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Bombelli showed that when the cubic formula produces complex radicals (the "irreducible case" where q² - p³ < 0), the equation actually has three distinct real roots! The complex numbers cancel out to give real answers.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What was proved about the quintic (degree 5) equation in the 19th century?',
    options: [
      'It cannot be solved by radicals in general',
      'It can be solved by a formula involving fifth roots',
      'It has no solutions',
      'It always has five real roots',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Ruffini, Abel, and Galois proved that the general equation of degree 5 or more cannot be solved by radicals (i.e., by formulas involving roots). This was one of the profound results of 19th century algebra.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'When Viète was challenged by King Henry IV to solve a degree-45 equation, how did he solve it?',
    options: [
      'He used numerical approximation',
      'He recognized it involved the chord of 360°/45',
      'He factored it by hand',
      'He admitted it was impossible',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Viète gave the answer in just a few minutes by recognizing that the equation was satisfied by the chord of an angle of 360°/45 = 8°. This allowed him to use trigonometric identities instead of algebraic methods.',
  },
];
