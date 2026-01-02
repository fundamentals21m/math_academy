import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 10: From Heraclitus to Democritus
 */
export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'Which philosopher believed that everything is constantly changing and that "one cannot step into the same river twice"?',
    options: ['Parmenides', 'Heraclitus', 'Zeno', 'Democritus'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Heraclitus of Ephesus (c. 500 BC) believed everything is in constant flux. He famously declared that one cannot step into the same river twice, since the waters are always flowing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Heraclitus believe was the fundamental substance?',
    options: ['Water', 'Air', 'Fire', 'Atoms'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Heraclitus believed fire was the fundamental substance. He declared that all matter can be transformed into fire (and vice versa), just as all goods can be exchanged for gold.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'Which philosopher took the view that change is an illusion and nothing really changes?',
    options: ['Heraclitus', 'Empedocles', 'Parmenides', 'Democritus'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Parmenides of Elea (c. 480 BC) proclaimed that nothing changes — change is merely an illusion. This view resembles the modern physicist\'s four-dimensional space-time, where events are replaced by unchanging world-lines.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "What was Zeno trying to prove with his famous paradoxes?",
    options: [
      'That atoms exist',
      'That motion is impossible',
      'That fire is the primal substance',
      'That the universe is expanding',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Zeno of Elea produced four paradoxes attempting to prove that motion is impossible. What he really showed was that without the concept of limits (infinite processes), you cannot use mathematics to analyze motion.",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      "In Zeno's Dichotomy paradox, why does he conclude a point can never travel from 0 to 1?",
    options: [
      'Because the distance is infinite',
      'Because it must first cover infinitely many smaller distances (1/2, 1/4, 1/8, ...)',
      'Because time stops at 1',
      'Because points cannot move',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Dichotomy argues that to go from 0 to 1, you must first cover 1/2, then 1/4, then 1/8, etc. After n steps you have covered 1 - 1/2ⁿ, which never equals 1 for any finite n. The modern solution uses limits.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "How do modern mathematicians resolve Zeno's paradoxes?",
    options: [
      'By proving motion does not exist',
      'By using the concept of limits',
      'By assuming time is discrete',
      'By rejecting mathematics entirely',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Modern mathematics resolves Zeno\'s paradoxes using limits. For example, the infinite sum 1/2 + 1/4 + 1/8 + ... has a limit of exactly 1. The rigorous definition of limits was developed by 19th-century mathematicians.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What two forces did Empedocles add to the four classical elements?',
    options: [
      'Good and evil',
      'Hot and cold',
      'Love and strife',
      'Light and darkness',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Empedocles postulated love and strife as cosmic forces beyond the four elements. He believed that when love prevails, the cosmos contracts, and when strife prevails, it expands — anticipating modern cosmology.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      "According to Democritus's atomic theory, what fills the space between atoms?",
    options: ['Air', 'Fire', 'Nothing (empty void)', 'Water'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      "Democritus proposed that atoms are separated by empty space (the void). The atoms themselves were physically indivisible, indestructible, constantly moving, and infinite in number but varying in shape and size.",
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'What mathematical formula is Democritus credited with discovering?',
    options: [
      'The Pythagorean theorem',
      'The volume of a pyramid or cone (1/3 × base × height)',
      'The area of a circle',
      'The sum of angles in a triangle',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Democritus is credited with discovering that the volume of a pyramid or cone equals one-third of the base area times the height: V = (1/3) × base × height. He also emphasized the importance of mathematical proofs.',
  },
];
