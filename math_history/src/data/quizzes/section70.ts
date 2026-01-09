import type { QuizQuestion } from './types';

export const section70Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's70-e01',
    type: 'multiple-choice',
    question: 'Gödel\'s First Incompleteness Theorem states that any consistent system capable of basic arithmetic:',
    options: [
      'Contains true statements that cannot be proved within the system',
      'Is necessarily inconsistent',
      'Can prove all true statements',
      'Contains no true statements',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Gödel\'s First Incompleteness Theorem shows that any consistent formal system strong enough to express basic arithmetic is incomplete—there exist true statements about natural numbers that cannot be proved within the system.',
  },
  {
    id: 's70-e02',
    type: 'multiple-choice',
    question: 'The Gödel sentence $G$ for a system $F$ essentially says:',
    options: [
      '"This sentence is not provable in F"',
      '"This sentence is false"',
      '"F is inconsistent"',
      '"All statements are provable"',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Gödel sentence G says "G is not provable in F." If F is consistent: if G were provable, it would be false (contradiction), so G is not provable. But then G is true! So G is true but unprovable.',
  },
  // Medium questions
  {
    id: 's70-m01',
    type: 'multiple-choice',
    question: 'Gödel\'s Second Incompleteness Theorem states that a consistent system:',
    options: [
      'Cannot prove its own consistency',
      'Must be incomplete',
      'Can prove every true statement',
      'Has no unprovable statements',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Second Theorem shows that if F is consistent and sufficiently powerful, then the statement "F is consistent" cannot be proved within F itself. This demolished Hilbert\'s hope of proving mathematics consistent from within.',
  },
  {
    id: 's70-m02',
    type: 'multiple-choice',
    question: 'Gödel numbering allows statements about proofs to become:',
    options: [
      'Arithmetic statements about natural numbers',
      'Geometric statements',
      'Statements about physical reality',
      'Statements that are always true',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Gödel numbering assigns unique natural numbers to symbols, formulas, and proofs. This encoding allows metamathematical statements (statements about the system) to be expressed as arithmetic statements within the system itself—the key to self-reference.',
  },
  // Hard questions
  {
    id: 's70-h01',
    type: 'multiple-choice',
    question: 'Gödel\'s incompleteness theorems ended Hilbert\'s program because they showed:',
    options: [
      'No sufficiently powerful system can be both complete and able to prove its own consistency',
      'Mathematics is inconsistent',
      'All mathematical statements are undecidable',
      'Arithmetic doesn\'t exist',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Hilbert wanted a complete, consistent formal system whose consistency could be proved. Gödel showed: (1) no such system is complete, and (2) no such system can prove its own consistency. This made Hilbert\'s program, in its original form, impossible.',
  },
  {
    id: 's70-h02',
    type: 'multiple-choice',
    question: 'A common misunderstanding of Gödel\'s theorems is that they prove:',
    options: [
      'Human minds are superior to computers',
      'Some true arithmetic statements are unprovable in any given consistent system',
      'Formal systems have limitations',
      'Mathematics requires axioms',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The claim that Gödel\'s theorems prove human minds exceed machines is a misinterpretation. The theorems apply to ANY formal system (human or machine). They show limitations of formal systems, not that humans somehow transcend formalization. Options B, C, D are actually correct implications.',
  },
];
