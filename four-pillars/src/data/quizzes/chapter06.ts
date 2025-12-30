import type { QuizQuestion } from './types';

// Section 40: Pappus and Desargues Revisited
export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The theorems of Pappus and Desargues are examples of what type of theorem?',
    options: [
      'Measurement theorems',
      'Incidence theorems',
      'Angle theorems',
      'Area theorems'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Pappus and Desargues theorems are incidence theorems—they involve only points, lines, and their meetings (incidences).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a Pappian plane?',
    options: [
      'Any projective plane',
      'A plane that satisfies the three projective axioms plus Pappus and Desargues',
      'A plane with no parallel lines',
      'A Euclidean plane with coordinates'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A Pappian plane satisfies the three projective plane axioms together with the Pappus and Desargues theorems.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Moulton plane an example of?',
    options: [
      'A Pappian plane',
      'A projective plane where Desargues fails',
      'A Euclidean plane',
      'A plane satisfying all field axioms'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Moulton plane is a projective plane where even the little Desargues theorem fails, showing that Desargues cannot be proved from the basic axioms.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the little Desargues theorem?',
    options: [
      'A weaker version where the center P lies on the line L',
      'The converse of Desargues',
      'Desargues applied to small triangles',
      'A theorem about parallel lines only'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The little Desargues theorem is the special case where the center of projection P lies on the line L where corresponding sides meet.',
  },
];

// Section 41: Coincidences
export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In projective geometry, what is a "coincidence"?',
    options: [
      'Two lines being parallel',
      'Two incidences occurring together (co-incidence)',
      'A measurement error',
      'Two points being equal'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A coincidence is literally a "co-incidence"—two incidences occurring together, such as three points lying on the same line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The tiled floor construction involves coincidences that can be traced to which theorem?',
    options: [
      'The Pythagorean theorem',
      'The little Desargues theorem',
      'The Pappus theorem only',
      'No theorem—it is purely computational'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The coincidence in the tiled floor construction can be traced to a special case of the little Desargues theorem.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When lines that meet on the horizon are drawn as actual parallels, what formulation of little Desargues applies?',
    options: [
      'The affine formulation',
      'The parallel formulation',
      'The Euclidean formulation',
      'The metric formulation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The parallel formulation of little Desargues is easier to visualize because lines meeting at infinity become actual parallel lines.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Does the tiled floor coincidence hold in the Moulton plane?',
    options: [
      'Yes, it always holds',
      'No, it fails when the x-axis is suitably positioned',
      'It depends on the size of the tiles',
      'The Moulton plane cannot have tiled floors'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The tiled floor coincidence fails in the Moulton plane when the x-axis is placed in a suitable position.',
  },
];

// Section 42: Variations on the Desargues Theorem
export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the converse Desargues theorem state?',
    options: [
      'If triangles are in perspective from a point, corresponding sides meet on a line',
      'If corresponding sides meet on a line, triangles are in perspective from a point',
      'Parallel lines meet at infinity',
      'The sum construction is independent of auxiliary choices'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The converse Desargues theorem states: If corresponding sides of two triangles meet on a line, then the triangles are in perspective from a point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the scissors theorem?',
    options: [
      'A theorem about cutting paper',
      'If three pairs of corresponding sides of quadrilaterals are parallel, the fourth pair is parallel',
      'Two triangles always have parallel sides',
      'Scissors-shaped figures have equal areas'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The scissors theorem states: If ABCD and A\'B\'C\'D\' are quadrilaterals with vertices alternately on two lines, and if three pairs of corresponding sides are parallel, then the fourth pair is also parallel.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is the scissors theorem proved?',
    options: [
      'Using only the projective plane axioms',
      'Using the converse Desargues theorem and the Desargues theorem',
      'By direct computation',
      'Using compass and straightedge'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The scissors theorem is proved by applying the converse Desargues theorem to find a center of perspective, then applying Desargues to conclude the fourth pair of sides is parallel.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who introduced the Moulton plane and when?',
    options: [
      'Hilbert in 1899',
      'Moulton in 1902',
      'Pappus around 300 CE',
      'Desargues in 1640'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Moulton introduced the Moulton plane in 1902 to show that the Desargues theorem cannot be proved from the basic projective plane axioms.',
  },
];

// Section 43: Projective Arithmetic
export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In projective arithmetic, how is the sum $a + b$ constructed?',
    options: [
      'By measuring lengths with a ruler',
      'By "copying" the length $Oa$ to the point $b$ using parallel lines',
      'By computing coordinates numerically',
      'By using a compass'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum $a + b$ is constructed by using parallel lines to "copy" the segment $Oa$ to the point $b$, analogous to compass constructions in Euclidean geometry.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The sum $a + b$ in projective arithmetic is independent of:',
    options: [
      'The choice of origin $O$',
      'The choice of auxiliary line $L$ parallel to the x-axis',
      'The positions of $a$ and $b$',
      'The choice of unit 1'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum $a + b$ is independent of the choice of the auxiliary line $L$ parallel to the x-axis, as shown by the little Desargues theorem.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the product construction in projective arithmetic require that addition does not?',
    options: [
      'A compass',
      'A choice of unit point 1',
      'Measurement of angles',
      'Calculation of areas'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The product construction requires choosing a point to be 1 (the unit), which determines the scale for multiplication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why do sums and products correspond on the x- and y-axes?',
    options: [
      'By definition only',
      'The Pappus theorem (for sums) and scissors theorem (for products)',
      'They do not correspond',
      'By the Euclidean parallel postulate'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Sums correspond by a Pappus configuration, and products correspond by the scissors theorem.',
  },
];

// Section 44: The Field Axioms
export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many field axioms are there?',
    options: [
      'Five',
      'Seven',
      'Nine',
      'Twelve'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'There are nine field axioms: two commutative laws, two associative laws, two identity laws, two inverse laws, and one distributive law.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which theorem implies the commutative law of multiplication $ab = ba$?',
    options: [
      'The Desargues theorem',
      'The Pappus theorem',
      'The scissors theorem',
      'The Pythagorean theorem'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Pappus theorem implies that $ab = ba$. This is demonstrated by showing both constructions on the same diagram.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the Desargues theorem imply about the field axioms?',
    options: [
      'All nine field axioms',
      'Eight field axioms—all but $ab = ba$',
      'Only the commutative laws',
      'Only the identity laws'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Desargues theorem implies eight of the nine field axioms—all except the commutative law of multiplication $ab = ba$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the "little Pappus theorem"?',
    options: [
      'The Pappus theorem for small hexagons',
      'A special case with hexagon vertices on parallel lines',
      'A converse of the Pappus theorem',
      'The Pappus theorem in finite planes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The little Pappus theorem is the special case where the vertices of the hexagon lie on two lines that meet at a point $P$, with two pairs of opposite sides meeting on a line through $P$.',
  },
];

// Section 45: The Associative Laws
export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which theorem is used to prove $a + (b + c) = (a + b) + c$?',
    options: [
      'The Pappus theorem',
      'The scissors theorem (from Desargues)',
      'The Pythagorean theorem',
      'The parallel postulate'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The associative law of addition is proved using the scissors theorem, which follows from the Desargues theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the associative law of addition, which form of Desargues is sufficient?',
    options: [
      'The full Desargues theorem',
      'The little Desargues theorem (little scissors theorem)',
      'The converse Desargues theorem',
      'No form of Desargues is needed'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Because the scissors in the addition proof lie between parallel lines, only the little scissors theorem (and hence little Desargues) is needed.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are quaternions?',
    options: [
      'Four-dimensional real numbers with noncommutative multiplication',
      'Complex numbers with four components',
      'Pairs of real numbers',
      'Numbers that commute under multiplication'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Quaternions are a four-dimensional number system (H = R^4) with noncommutative but associative multiplication.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who discovered the quaternions?',
    options: [
      'Euclid',
      'Sir William Rowan Hamilton in 1843',
      'David Hilbert in 1899',
      'Ruth Moufang in 1930'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hamilton discovered the quaternions in 1843 and famously carved the key formula on Brougham Bridge in Dublin.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does the quaternion projective plane HP² satisfy Desargues but not Pappus?',
    options: [
      'Quaternions are not real numbers',
      'Quaternion multiplication is associative but not commutative',
      'HP² is not a projective plane',
      'Desargues implies Pappus'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'HP² satisfies Desargues because quaternion multiplication is associative, but fails Pappus because multiplication is not commutative.',
  },
];

// Section 46: The Distributive Law
export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which theorem is used to prove the distributive law $a(b + c) = ab + ac$?',
    options: [
      'The Desargues theorem',
      'The Pappus theorem',
      'The scissors theorem',
      'The little Desargues theorem'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The distributive law is proved using the Pappus theorem, by combining addition on the x-axis with multiplication via parallels.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the other distributive law $(b + c)a = ba + ca$ not proved separately?',
    options: [
      'It is false',
      'It follows from Pappus implying commutative multiplication',
      'It requires different techniques',
      'It is an axiom, not a theorem'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since Pappus implies $ab = ba$, we have $(b+c)a = a(b+c) = ab + ac = ba + ca$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In systems with noncommutative multiplication like quaternions, how many distributive laws hold?',
    options: [
      'None',
      'One (left distribution)',
      'Both left and right distribution',
      'Distribution depends on the elements'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both distributive laws hold for quaternions because they are defined as matrices, and matrix multiplication distributes over addition from both sides.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The proof of the distributive law has the same structure as which earlier proof?',
    options: [
      'The proof of $ab = ba$',
      'The proof that sums correspond on both axes',
      'The proof of the scissors theorem',
      'The proof of the associative laws'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The distributive law proof has the same structure as the proof that sums correspond on both axes—only the labels change.',
  },
];

// Section 47: Discussion
export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who first developed projective geometry without using numbers?',
    options: [
      'Euclid',
      'Christian von Staudt in 1847',
      'Felix Klein in 1872',
      'Desargues in 1640'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Christian von Staudt developed projective geometry without numbers in 1847, an approach later refined by Hilbert.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who first proved that Pappus implies Desargues?',
    options: [
      'Hilbert in 1899',
      'Gerhard Hessenberg in 1904',
      'Ruth Moufang in 1930',
      'Hamilton in 1843'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hessenberg first proved this implication in 1904, though his original proof had an error corrected later.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What algebraic property does the little Desargues theorem correspond to?',
    options: [
      'Commutativity',
      'Associativity',
      'Alternativity (partial associativity)',
      'Distributivity'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The little Desargues theorem corresponds to alternativity: $a^{-1}(ab) = b = (ba)a^{-1}$, as discovered by Ruth Moufang.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are the octonions?',
    options: [
      'Eight-dimensional numbers with alternative but nonassociative multiplication',
      'Complex numbers in eight dimensions',
      'Quaternions with eight components',
      'Numbers that satisfy all field axioms'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The octonions (O) are an eight-dimensional number system with alternative but nonassociative multiplication, discovered by Graves in 1843.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does the octonion projective space OP³ not exist?',
    options: [
      'Octonions are too complicated',
      'The Desargues theorem holds in 3D projective spaces, but octonions are not associative',
      'There are not enough octonions',
      'OP³ would require 24 dimensions'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In any 3D projective space, Desargues holds (by spatial reasoning). This would imply octonions are associative—which they are not.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In which dimensions can "reasonable" multiplication be defined on R^n?',
    options: [
      'Any dimension',
      'Only dimensions 1, 2, 3, and 4',
      'Only dimensions 1, 2, 4, and 8',
      'Only even dimensions'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Reasonable multiplication (respecting dimension) exists only on R^1 (reals), R^2 (complex), R^4 (quaternions), and R^8 (octonions).',
  },
];
