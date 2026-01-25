import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 21: Mathematics in Islamic Countries
 */
export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'From which Arabic mathematician\'s name do we get the word "algorithm"?',
    options: [
      'Al-Khwarizmi',
      'Al-Mamun',
      'Thabit Ibn-Qurra',
      'Omar Khayyam',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Al-Khwarizmi wrote a book on Indian numerals whose Latin translation began "Spoken has Algoritmi..."—giving us the word "algorithm" from his Latinized name.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'From which Arabic word do we get the term "algebra"?',
    options: [
      'al-jabr (combining)',
      'al-Mamun (wisdom)',
      'al-Khayyam (tent-maker)',
      'al-Qurra (reader)'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'We get "algebra" from al-Khwarizmi\'s book "Hisab al-jabr w\'al-muqabalah". The word "al-jabr" means combining, as in combining terms to solve an equation. In old Spanish, "algebrista" meant a bone-setter!',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What institution did Caliph al-Mamun establish in Baghdad in the 9th century?',
    options: [
      'The House of Wisdom',
      'The Library of Alexandria',
      'The Academy of Athens',
      'The Museum of Mathematics',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Caliph al-Mamun established the "House of Wisdom" (essentially a university) at Baghdad, where he ordered translations of many Greek manuscripts, helping to preserve these works for posterity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are "amicable numbers"?',
    options: [
      'Consecutive prime numbers',
      'Numbers whose proper divisors sum to each other',
      'Numbers that form a magic square',
      'Numbers that can be expressed as sums of two squares',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Two numbers are amicable if the sum of proper divisors of each equals the other. For example, 220 and 284: the proper divisors of 220 sum to 284, and the proper divisors of 284 sum to 220.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the first pair of amicable numbers, found using Thabit\'s rule with n = 2?',
    options: [
      '6 and 28',
      '1184 and 1210',
      '220 and 284',
      '496 and 8128',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Using Thabit\'s rule with n = 2, we get the amicable pair 220 and 284. This was known to the Pythagoreans, but Thabit provided the first general rule for generating such pairs.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which Islamic mathematician believed in actual infinity (unlike Aristotle\'s potential infinity)?',
    options: [
      'Al-Khwarizmi',
      'Thabit Ibn-Qurra',
      'Omar Khayyam',
      'Al-Mamun',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Thabit Ibn-Qurra believed in actual infinity, as opposed to Aristotle\'s concept of potential infinity. He was an extraordinary polymath who also did pioneering work in spherical trigonometry and calculus.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Omar Khayyam developed a method for solving cubic equations using what approach?',
    options: [
      'Algebraic formulas like the quadratic formula',
      'Numerical approximation',
      'Geometric intersection of curves',
      'Successive substitution',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Omar Khayyam developed a geometric method for finding positive real roots of cubic and quartic equations by intersecting conic sections (hyperbolas and circles) and finding their intersection points.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Omar Khayyam is famous not only as a mathematician but also as the author of what literary work?',
    options: [
      'The Arabian Nights',
      'The Book of Kings',
      'The Conference of Birds',
      'The Rubaiyat',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Omar Khayyam wrote the Rubaiyat, a famous collection of Persian poetry. Its 19th-century English translation by Edward FitzGerald became a bestseller and is still widely read today.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What was the primary importance of Islamic mathematics for the history of mathematics?',
    options: [
      'They invented calculus',
      'They proved Fermat\'s Last Theorem',
      'They discovered irrational numbers',
      'They bridged Greek antiquity and the European Renaissance'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Islamic mathematicians served as a crucial bridge between ancient and modern mathematics. They preserved Greek texts through Arabic translations, transmitted Indian numerals to Europe, and developed algebra as a systematic discipline.',
  },
];
