import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 9: Discussion
 */
export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In how many different cultures was the Euclidean algorithm independently discovered?',
    options: [
      'One (Greece only)',
      'Three (Greece, India, and China)',
      'Two (Greece and India)',
      'Four (Greece, India, China, and Arabia)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Euclidean algorithm was discovered independently in ancient Greece (Euclid), India (Aryabhata, Bhaskara I around 500 AD), and China, for different mathematical purposes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Indian mathematicians discover about the gcd?',
    options: [
      'The linear representation $\\gcd(a,b) = ma + nb
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Indian mathematicians (Aryabhata and Bhaskara I) discovered the linear representation $\\gcd(a,b) = ma + nb$, which was important for solving equations $ax + by = c$.',
  },
      'That it always equals 1',
      'The prime factorization method',
      'That it divides all primes',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Indian mathematicians (Aryabhata and Bhaskara I) discovered the linear representation $\\gcd(a,b) = ma + nb$, which was important for solving equations $ax + by = c$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who first precisely formulated the "base step, induction step" format?',
    options: [
      'Fermat',
      'Euclid',
      'Gauss',
      'Pascal',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Blaise Pascal (1654) first clearly used the "base step, induction step" format to prove properties of Pascal\'s triangle.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What did Fermat\'s method of infinite descent prove?',
    options: [
      'There are no natural numbers with $a^4 + b^4 = c^2
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Fermat\'s most famous descent proof showed that there are no natural numbers $a, b, c$ with $a^4 + b^4 = c^2$.',
  },
      'The infinity of primes',
      'The Pythagorean theorem',
      'Every number has a prime factorization',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Fermat\'s most famous descent proof showed that there are no natural numbers $a, b, c$ with $a^4 + b^4 = c^2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why was descent preferred over ascent historically?',
    options: [
      'It was discovered later',
      'It was endorsed by Gauss',
      'It requires no base step and occurs more naturally',
      'It works only for primes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Descent is simpler because no base step is needed, and it seems to occur more naturally at lower levels of mathematics. Examples date from Euclid (~300 BC).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'In what year did Pascal first formulate induction precisely?',
    correctAnswer: 1654,
    numericRange: { min: 1600, max: 1700, precision: 0 },
    difficulty: 'easy',
    explanation:
      'Pascal formulated the "base step, induction step" format in 1654 while studying Pascal\'s triangle.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Grassmann and Dedekind\'s work on inductive definitions ultimately led to:',
    options: [
      'The discovery of calculus',
      'Proof of the Riemann hypothesis',
      'The theory of relativity',
      'Recursive function theory and computer science',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Their method of definition by induction led to the theory of recursive functions, which is fundamental to computer programming and computer science.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What happened to Grassmann\'s revolutionary textbook (1861)?',
    options: [
      'It fell into obscurity—he was ahead of his time',
      'Gauss praised it publicly',
      'It became immediately famous',
      'It was translated into all major languages',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Sadly, Grassmann was a generation ahead of his time. His work fell into obscurity so fast that even like-minded mathematicians of the 1880s were unaware of it.',
  },
];
