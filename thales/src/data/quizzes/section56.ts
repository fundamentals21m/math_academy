import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 56: Intuitionistic Predicate Calculus
 */
export const section56Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the difference between a free variable and a bound variable?',
    options: [
      'Free variables are constants, bound variables are not',
      'Free variables are not captured by any quantifier, bound variables are',
      'Free variables can only be integers, bound variables can be anything',
      'There is no difference',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A free variable is not captured by any quantifier (∀ or ∃). A bound variable is captured by a quantifier. For example, in ∀x A(x,y), x is bound and y is free.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the axiom of Universal Specification (US) state?',
    options: [
      'A(t) ⊢ ∀x A(x)',
      '∀x A(x) ⊢ A(t)',
      '∃x A(x) ⊢ A(t)',
      'A(t) ⊢ ∃x A(x)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Universal Specification (US) states that ∀x A(x) ⊢ A(t): if something holds for all x, it holds for any specific term t (provided t is substitutable for x).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is there a substitutability restriction on Universal Specification?',
    options: [
      'To avoid infinite loops in proofs',
      'To prevent free variables in t from being captured by quantifiers',
      'To ensure proofs are constructive',
      'To make the logic decidable',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The substitutability restriction prevents variable capture. Without it, from ∀x∃yB(x,y) we could incorrectly infer ∃yB(y,y) — from "everybody blames somebody" we would get "somebody blames himself."',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What restriction does Universal Generalization (UG) require?',
    options: [
      'The variable x must appear in all formulas',
      'The variable x must not be free in the assumptions Γ',
      'The formula A(x) must be atomic',
      'The term t must be a constant',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Universal Generalization requires that x is not free in Γ. Otherwise, from "x is afraid" (where x is assumed to be some specific individual), we could incorrectly conclude "everyone is afraid."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is provable: ∃y∀xF(x,y) ⊢ ∀x∃yF(x,y) or its converse?',
    options: [
      'Only the converse is provable',
      'Both directions are provable',
      'Only ∃y∀xF(x,y) ⊢ ∀x∃yF(x,y) is provable',
      'Neither direction is provable',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Only ∃y∀xF(x,y) ⊢ ∀x∃yF(x,y) is provable. The converse fails: "for every person there exists someone they love" does NOT imply "there exists someone whom everyone loves."',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What can be proved intuitionistically from ¬∃xF(x)?',
    options: [
      '∃x¬F(x)',
      '∀xF(x)',
      '∀x¬F(x)',
      '¬∀xF(x)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'From ¬∃xF(x) ("nothing has property F") we can prove ∀x¬F(x) ("everything lacks property F"). The proof uses EG and the deduction rule.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the abbreviation for Existential Generalization?',
    options: [
      'US',
      'UG',
      'EG',
      'ES',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'EG stands for Existential Generalization: A(t) ⊢ ∃x A(x). If something holds for a specific t, then it holds for some x. The other abbreviations are: US (Universal Specification), UG (Universal Generalization), ES (Existential Specification).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'From ∀x¬F(x), what can be proved intuitionistically?',
    options: [
      '∃xF(x)',
      '¬∃xF(x)',
      '¬¬∃xF(x)',
      'Both ¬∃xF(x) and ¬¬∃xF(x)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'From ∀x¬F(x) we can prove both ¬∃xF(x) and (using contraposition) ¬¬∃xF(x). However, we cannot prove ∃xF(x) intuitionistically — that would require double negation elimination, which is not valid in intuitionistic logic.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is the key philosophical difference between classical and intuitionistic treatment of ∀x¬F(x)?',
    options: [
      'Classical logic allows proving ∃xF(x), but intuitionistic only allows ¬¬∃xF(x)',
      'Intuitionistic logic is stronger than classical logic',
      'Classical logic does not have the ∀ quantifier',
      'There is no difference',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Classically, from ∀x¬F(x) we can prove ∃xF(x) using double negation elimination. Intuitionistically, we can only prove ¬¬∃xF(x). This matters because a constructive proof of ∀x¬F(x) would then give a nonconstructive existence proof — a philosophical contradiction!',
  },
];
