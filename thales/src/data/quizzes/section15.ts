import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 15: Euclid
 */
export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'What institution did Ptolemy I establish in Alexandria that became the mathematical center of the ancient world?',
    options: [
      'The Academy',
      'The Lyceum',
      'The Library of Pergamon',
      'The Museum',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Ptolemy I established the Museum in Alexandria, which soon acquired a library of over 600,000 papyrus scrolls. For more than 600 years, Alexandria was the mathematical and scientific center of the world.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'According to a famous anecdote, what did Euclid tell King Ptolemy about learning geometry?',
    options: [
      '"Mathematics is the queen of sciences"',
      '"Let no one ignorant of geometry enter"',
      '"There is no royal road to learning"',
      '"Give me a place to stand and I will move the Earth"'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'When the impatient King Ptolemy asked if there was a shorter way to learn geometry, Euclid famously replied: "There is no royal road to learning."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'How many "books" (chapters) does Euclid\'s Elements contain?',
    options: [
      '5 books',
      '13 books',
      '10 books',
      '23 books',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Elements consists of 13 books (chapters) that presented the foundations of all mathematics known in Euclid\'s day, covering plane geometry, number theory, and solid geometry.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'In Euclid\'s system, what is the difference between "axioms" and "postulates"?',
    options: [
      'Axioms deal with mathematics in general; postulates deal with geometry specifically',
      'Axioms are true and postulates are assumptions',
      'Postulates are more fundamental than axioms',
      'There is no difference—they are synonyms'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Euclid subdivided his assumptions into axioms (dealing with mathematics in general, like "equals added to equals are equal") and postulates (dealing with geometry specifically, like the ability to draw lines and circles).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'Which of Euclid\'s five postulates is the most famous and would later lead to non-Euclidean geometry?',
    options: [
      'Postulate I (drawing a line between two points)',
      'Postulate IV (all right angles are equal)',
      'Postulate V (the parallel postulate)',
      'Postulate III (drawing a circle with any center and radius)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Postulate V, the parallel postulate, is the most famous. For over 2,000 years mathematicians tried to prove it from the other postulates; their failure led to the discovery of non-Euclidean geometry.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What gap in rigor exists in Euclid\'s very first proposition (constructing an equilateral triangle)?',
    options: [
      'He doesn\\'t prove that the triangle is equilateral',
      'He doesn\\'t prove that the two circles actually intersect',
      'He doesn\\'t prove that the segment AB exists',
      'He doesn\\'t prove that triangles exist',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'In Proposition 1, Euclid draws two circles and considers their point of intersection. However, two circles may meet in two points, one point, or not at all—and Euclid\'s axioms don\'t guarantee that these particular circles meet.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'Which ancient mathematician\'s theory of proportion appears in Book V of the Elements?',
    options: [
      'Eudoxus',
      'Pythagoras',
      'Hippocrates',
      'Theaetetus',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Book V presents Eudoxus\'s theory of proportion, which provided a rigorous way to handle ratios of incommensurable magnitudes. Book XII, also by Eudoxus, gives rigorous volumes of pyramids, cones, and spheres.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'How did Euclid approach the concept of area before having a theory of irrational multiplication?',
    options: [
      'He avoided discussing area entirely',
      'He defined area as length times width',
      'He used Archimedes\\' method of exhaustion',
      'He used dissection—two polygons have equal area if one can be cut and reassembled into the other',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Euclid defined equal area through dissection: two polygons have the same area if one can be dissected into triangles and reassembled to form a polygon congruent to the second. Only in Book VI, after Eudoxus\'s theory, is "length times width" justified.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'What is the highest regular polygon construction that appears in Euclid\'s Elements?',
    options: [
      'The regular pentagon (5 sides)',
      'The regular hexagon (6 sides)',
      'The regular 15-gon (15 sides)',
      'The regular 17-gon (17 sides)',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Book IV culminates with the construction of the regular 15-gon. This achievement remained unsurpassed until 1796, when Gauss found a construction for the regular 17-gon.',
  },
];
