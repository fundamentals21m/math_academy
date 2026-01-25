import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 23: Mathematics in the Renaissance
 */
export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What Chinese invention, reaching Europe in 1450, revolutionized the spread of mathematical knowledge?',
    options: [
      'Gunpowder',
      'The compass',
      'Printing',
      'Paper money',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Printing reached Europe in 1450 and revolutionized the spread of mathematical knowledge. Before this, texts had to be copied by hand, and many existed only in single copies at places like the Library of Alexandria.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In what year did the symbols + and − first appear in print?',
    options: [
      '1450',
      '1525',
      '1489',
      '1558',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Johannes Widman\'s "Mercantile Arithmetic" (1489) was the first book to use the modern symbols + and − in print.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who was the first person to use the symbol = for equality?',
    options: [
      'Johannes Widman',
      'Thomas Harriot',
      'Christoff Rudolff',
      'Robert Recorde',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Robert Recorde (1510-1558) was the first to use = for equality, asserting that "noe 2 thynges can be more equalle." He unfortunately died in jail after a dispute with the Earl of Pembroke.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who introduced the symbols > and < for strict inequality?',
    options: [
      'Michael Stifel',
      'Thomas Harriot',
      'Robert Recorde',
      'Adam Riese',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Thomas Harriot (1560-1621) introduced the symbols > and < for strict inequality. He also went to America with Sir Walter Raleigh and computed the area of a spherical triangle.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Who illustrated Luca Pacioli\'s book "Divina Proportione" (Divine Ratio)?',
    options: [
      'Michelangelo',
      'Leonardo da Vinci',
      'Raphael',
      'Botticelli',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Leonardo da Vinci illustrated Luca Pacioli\'s "Divina Proportione" (1509), which was about the golden ratio and regular polyhedra.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What mathematical first is Michael Stifel credited with?',
    options: [
      'First use of negative integers as exponents',
      'First use of the equals sign',
      'First use of the plus sign',
      'First use of the square root symbol',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Michael Stifel (1487-1567) was the first to use negative integers as exponents. He is also remembered for predicting the end of the world for October 18, 1533—a prediction that landed him in jail when it failed to come true!',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How did Columbus use Regiomontanus\'s astronomical tables on his fourth voyage?',
    options: [
      'To intimidate natives by predicting a lunar eclipse',
      'To navigate across the Atlantic',
      'To determine his latitude',
      'To calculate the circumference of the Earth',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Columbus used Regiomontanus\'s Ephemerides to predict the lunar eclipse of February 29, 1504. When stranded with hostile natives in Jamaica, he used this knowledge to intimidate them by claiming he would make the moon disappear.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the "spherical excess" of a spherical triangle?',
    options: [
      'The difference between its perimeter and a plane triangle',
      'The area of the triangle divided by the radius',
      'The radius of its inscribed circle',
      'The amount by which its angles sum exceeds 180°',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The spherical excess is A + B + C - 180°, where A, B, and C are the angles of the spherical triangle. Unlike plane triangles (whose angles sum to exactly 180°), spherical triangles have angles that sum to more than 180°.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Why did Scipione Ferro keep his method for solving cubic equations secret?',
    options: [
      'He was afraid of the Inquisition',
      'He wanted an advantage in mathematical contests',
      'The method was too dangerous to publish',
      'He had not finished proving it',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Scipione Ferro kept his method for solving x³ + bx = c secret so that he would have an advantage over other mathematicians in mathematical contests. He passed the secret to Antonio Fiore just before he died.',
  },
];
