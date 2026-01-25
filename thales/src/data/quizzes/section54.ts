import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 54: Intuitionistic Propositional Calculus
 */
export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who proposed dropping the law of excluded middle from logic?',
    options: [
      'L. E. J. Brouwer',
      'Aristotle',
      'Frege',
      'Bertrand Russell',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'L. E. J. Brouwer (1882–1966), a topologist, observed that all nonconstructive arguments in mathematics depend on Aristotle\'s law of excluded middle, and proposed dropping it to create a constructive foundation for mathematics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the law of excluded middle?',
    options: [
      'For every p, p implies p',
      'For every p, p and not p cannot both be true',
      'For every p, either p or not p',
      'For every p and q, p implies q or q implies p',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The law of excluded middle states that for every proposition p, either p or ¬p holds (p ∨ ¬p). Brouwer proposed that this law should not be accepted in constructive mathematics.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is negation (¬A) defined in intuitionistic logic?',
    options: [
      '¬A ≡ A ⇒ ⊥',
      '¬A ≡ A ∧ ⊥',
      '¬A ≡ A ∨ ⊥',
      '¬A ≡ ⊥ ⇒ A',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'In intuitionistic logic, negation is defined as: ¬A ≡ A ⇒ ⊥. This means "not A" is defined as "A implies a contradiction (false)."',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is provable in intuitionistic logic?',
    options: [
      'A ∨ ¬A',
      'A ⇒ ¬¬A',
      '¬¬A ⇒ A',
      '((A ⇒ B) ⇒ A) ⇒ A',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'While ¬¬A ⇒ A (double negation elimination) is NOT provable intuitionistically, A ⇒ ¬¬A IS provable. If you have A, you can show that assuming ¬A leads to a contradiction, hence ¬¬A.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which rule of inference allows us to conclude A ⇒ B from the derivation Γ, A ⊢ B?',
    options: [
      'Modus Ponens (MP)',
      'Argument by Cases (AC)',
      'Deduction Rule (DR)',
      'Ex Falso Quodlibet',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Deduction Rule (DR) states: if Γ, A ⊢ B, then Γ ⊢ A ⇒ B. It allows us to move an assumption into the conclusion as the antecedent of an implication.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Who formally introduced the structural rules for logic?',
    options: [
      'Brouwer',
      'Heyting',
      'Kolmogorov',
      'Gentzen',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Gerhard Gentzen (1919–1945) formally introduced the structural rules: identity (A ⊢ A), exchange (interchanging assumptions), weakening (adding superfluous assumptions), and contraction (merging duplicate assumptions).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does the axiom ⊥ ⊢ A express?',
    options: [
      'False implies itself',
      'From a contradiction, anything follows',
      'A is always false',
      'Every proposition implies false',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The axiom ⊥ ⊢ A is called "ex falso quodlibet" (from falsehood, anything follows). It states that if you can derive a contradiction (⊥), you can derive any proposition A.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Is ¬¬(A ∨ ¬A) provable in intuitionistic logic?',
    options: [
      'No, neither A ∨ ¬A nor its double negation are provable',
      'Yes, because it is equivalent to A ∨ ¬A',
      'No, because negation is not defined intuitionistically',
      'Yes, even though A ∨ ¬A itself is not provable',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'While A ∨ ¬A (the law of excluded middle) is not provable intuitionistically, its double negation ¬¬(A ∨ ¬A) IS provable. The proof shows that assuming (A ∨ ¬A) ⇒ ⊥ leads to a contradiction.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is the main advantage of intuitionistic logic according to Brouwer?',
    options: [
      'It is simpler than classical logic',
      'It eliminates the need for axioms',
      'It corresponds to constructive mathematics where proofs provide explicit constructions',
      'It allows more theorems to be proven',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Brouwer advocated intuitionistic logic because it corresponds to constructive mathematics. In this framework, a proof of existence must provide an explicit construction, not just show that non-existence leads to contradiction.',
  },
];
