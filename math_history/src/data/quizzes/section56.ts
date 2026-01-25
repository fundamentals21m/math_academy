import type { QuizQuestion } from './types';

export const section56Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's56-e01',
    type: 'multiple-choice',
    question: 'Playfair\'s axiom states that given a line and a point not on it:',
    options: [
      'Infinitely many parallel lines exist through the point',
      'No parallel lines exist through the point',
      'Exactly one parallel line exists through the point',
      'Two parallel lines exist through the point'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Playfair\'s axiom is equivalent to Euclid\'s fifth postulate. It states that through a point not on a given line, there exists exactly one line parallel to the given line.',
  },
  {
    id: 's56-e02',
    type: 'multiple-choice',
    question: 'Why were mathematicians dissatisfied with Euclid\'s fifth postulate?',
    options: [
      'It contradicted the other four postulates',
      'It was too simple compared to the others',
      'Euclid never actually stated it',
      'It was more complex than the other postulates and seemed like it should be provable'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The fifth postulate is far more verbose and complex than the first four. Many mathematicians believed something so complicated should be derivable from simpler axioms rather than assumed as a basic truth.',
  },
  // Medium questions
  {
    id: 's56-m01',
    type: 'multiple-choice',
    question: 'In Saccheri\'s study of quadrilaterals, the "acute angle hypothesis" refers to:',
    options: [
      'Summit angles being less than 90 degrees',
      'Summit angles being greater than 90 degrees',
      'Summit angles being exactly 90 degrees',
      'Base angles being less than 90 degrees',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Saccheri studied quadrilaterals with two right angles at the base and equal sides. The acute angle hypothesis posits that the summit angles are less than 90°, which leads to hyperbolic geometry.',
  },
  {
    id: 's56-m02',
    type: 'multiple-choice',
    question: 'Lambert discovered that under the acute angle hypothesis:',
    options: [
      'Triangle angle sums are greater than 180°',
      'Triangle angle sums are less than 180° and the defect is proportional to area',
      'All triangles have equal area',
      'The Pythagorean theorem still holds'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Lambert proved that if the acute angle hypothesis holds, triangles have angle sums less than 180°, and the "defect" (180° minus the angle sum) is proportional to the triangle\'s area. This is characteristic of hyperbolic geometry.',
  },
  // Hard questions
  {
    id: 's56-h01',
    type: 'multiple-choice',
    question: 'Which of the following is NOT equivalent to Euclid\'s parallel postulate?',
    options: [
      'Similar triangles of different sizes exist',
      'The angle sum of every triangle is exactly 180°',
      'The sum of angles in a triangle can vary',
      'Rectangles exist'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'In Euclidean geometry (with the parallel postulate), every triangle has angle sum exactly 180°. If angle sums could vary, this would violate the parallel postulate. The other three statements are all equivalent to the parallel postulate.',
  },
  {
    id: 's56-h02',
    type: 'multiple-choice',
    question: 'Saccheri\'s work was a "near miss" for discovering non-Euclidean geometry because:',
    options: [
      'He assumed the parallel postulate in his proofs',
      'He proved the parallel postulate but made an error',
      'He only studied spherical geometry',
      'He derived valid hyperbolic geometry results but rejected them as absurd'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Saccheri derived many theorems of hyperbolic geometry (asymptotic lines, triangles with angle sum less than 180°) but couldn\'t accept them as legitimate mathematics. He declared them "repugnant" rather than recognizing he had discovered a consistent alternative geometry.',
  },
];
