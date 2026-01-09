import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A Pythagorean triple $(a, b, c)$ is called primitive if:',
    options: [
      '$a < b < c$',
      '$\\gcd(a, b, c) = 1$',
      '$a + b = c$',
      '$c$ is prime'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A primitive Pythagorean triple has no common factor greater than 1, meaning $\\gcd(a, b, c) = 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Using Euclid\'s formula with $m=3$ and $n=1$, which triple is generated?',
    options: [
      '$(3, 4, 5)$',
      '$(5, 12, 13)$',
      '$(8, 6, 10)$',
      '$(15, 8, 17)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With $m=3, n=1$: $a = m^2-n^2 = 9-1 = 8$, $b = 2mn = 6$, $c = m^2+n^2 = 10$. So the triple is $(8, 6, 10)$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $(a, b, c) = (5, 12, c)$ is a Pythagorean triple, what is $c$?',
    correctAnswer: 13,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Plimpton 322 tablet shows that Pythagorean triples were known by:',
    options: [
      'The Greeks around 500 BCE',
      'The Babylonians around 1800 BCE',
      'The Egyptians around 3000 BCE',
      'The Romans around 100 CE'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Plimpton 322 tablet is a Babylonian clay tablet from around 1800 BCE containing a list of Pythagorean triples.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Is $(6, 8, 10)$ a primitive triple? (Enter 1 for yes, 0 for no)',
    correctAnswer: 0,
    numericRange: { min: 0, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: '$(6, 8, 10)$ is not primitive because all three numbers share a common factor of 2. Dividing by 2 gives the primitive triple $(3, 4, 5)$.',
  },
];
