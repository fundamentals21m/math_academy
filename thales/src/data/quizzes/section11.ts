import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 11: Mathematics in Athens
 */
export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'After defeating which empire in 490 BC did Athens become a center of mathematics?',
    options: [
      'Egyptian',
      'Persian',
      'Roman',
      'Babylonian',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'After an alliance of Greek cities defeated the Persians in 490 BC, Athens became a great center of civilization and mathematics for over a hundred years.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'What curve did Hippias discover that could be used to trisect angles and square the circle?',
    options: [
      'Quadratrix',
      'Parabola',
      'Ellipse',
      'Hyperbola',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Hippias of Elis discovered the quadratrix, a curve traced by the intersection of a moving line segment and a rotating line. It can be used to trisect any angle and to square the circle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why did Plato criticize Hippias\'s use of the quadratrix?',
    options: [
      'It was too difficult to understand',
      'He believed constructions should use only straightedge and compass',
      'It gave incorrect answers',
      'It was discovered by a sophist',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Plato insisted that geometric constructions should use only a straightedge (for drawing straight lines) and compass (for drawing circles). He considered using curves like the quadratrix to be "inelegant" or cheating.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'What method did Antiphon use to approximate the area of a circle?',
    options: [
      'Circumscribed squares',
      'Integration',
      'Inscribed regular polygons',
      'The quadratrix',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Antiphon suggested calculating the area of a circle using inscribed regular polygons. An inscribed square takes up more than 1/2 the area, an octagon more than 3/4, and so on.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'Who gave the first rigorous proof that circle area is proportional to the square of its diameter?',
    options: [
      'Hippias',
      'Eudoxus',
      'Antiphon',
      'Hippocrates',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Eudoxus (408-355 BC) gave a rigorous proof that the area of a circle is proportional to the square of its diameter. This result is expressed today as A = πr².',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Hippocrates of Chios contributed material to which books of Euclid\'s Elements?',
    options: [
      'Books I and II',
      'Books V and VI',
      'Books XI and XII',
      'Books III and IV',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Hippocrates of Chios was responsible for much of the material in Books III and IV of Euclid\'s Elements. He also coined the term "dynamos" for the square of a quantity, giving us the word "power."',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What was the first curved region whose area was calculated exactly?',
    options: [
      'The lunes of Hippocrates',
      'A circle',
      'An ellipse',
      'A parabolic segment',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Hippocrates was the first to find the exact area of a region bounded by curves. He proved that the sum of the areas of the two lunes (crescent shapes) on a right triangle equals the area of the triangle.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'According to legend, why did the Athenians need to double a cube during the plague of 430 BC?',
    options: [
      'To build a larger temple',
      'To store more grain',
      'The oracle of Delos told them to double Apollo\\\'s altar',
      'As a mathematical competition prize',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Legend says the oracle of Delos told the Athenians to double the altar of Apollo (a marble cube) to end the plague. They mistakenly doubled the edge instead of the volume.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'Hippocrates showed that doubling the cube is equivalent to finding what?',
    options: [
      'The square root of 2',
      'The circumference of a circle',
      'A regular heptagon',
      'Two mean proportionals between 1 and 2',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Hippocrates showed that to double the cube, one needs to find x and y such that 1/x = x/y = y/2. These are called two mean proportionals between 1 and 2, and they give x³ = 2.',
  },
];
