import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What type of security does Shamir Secret Sharing provide against an attacker with $t-1$ shares?',
    options: [
      'Computational security - hard to break but theoretically possible',
      'Heuristic security - secure in practice but unproven',
      'Information-theoretic security - impossible to break even with infinite computing power',
      'Probabilistic security - likely secure with high probability',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Shamir SSS provides information-theoretic security: with $t-1$ shares, every possible secret is equally consistent with the known shares. No amount of computation can determine the true secret.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'With 2 shares from a degree-2 polynomial, how many different secrets are consistent with those shares?',
    options: [
      'Infinitely many - every possible secret value',
      'Exactly 2 possible secrets',
      'A finite number equal to the field size $q
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For every possible secret $s^*$, there exists exactly one degree-2 polynomial passing through the 2 known points with $f(0) = s^*$. Thus infinitely many secrets (or all $q$ values in a finite field) are equally consistent.',
  },
      'Only 1 if the shares are correct',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'For every possible secret $s^*$, there exists exactly one degree-2 polynomial passing through the 2 known points with $f(0) = s^*$. Thus infinitely many secrets (or all $q$ values in a finite field) are equally consistent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Given $t-1$ points and a target secret $s^*$, why does exactly one consistent polynomial exist?',
    options: [
      'Because the discrete logarithm is hard to compute',
      'Because Lagrange interpolation always succeeds',
      'Because polynomials are uniquely determined by their roots',
      'Because we have $t$ constraints ($t-1$ points plus $f(0) = s^*$) and $t$ unknown coefficients',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A degree $t-1$ polynomial has $t$ coefficients. With $t-1$ known points plus the constraint $f(0) = s^*$, we have $t$ linear equations in $t$ unknowns, which has exactly one solution.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does information-theoretic security differ from computational security?',
    options: [
      'Computational security can be broken with enough time; information-theoretic cannot be broken at all',
      'Information-theoretic requires larger key sizes',
      'Information-theoretic only works with prime fields',
      'They are equivalent for practical purposes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Computational security (e.g., discrete log) assumes breaking is infeasible but not impossible. Information-theoretic security means the information literally does not exist - no computation can extract it.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For secp256k1 with field size $q \\approx 2^{256}$, what is an attacker\'s probability of guessing the secret with $t-1$ shares?',
    options: [
      '$1/2$ (50% chance)',
      '$1/q \\approx 1/2^{256}$ (astronomically small)',
      '$1/t$ (depends on threshold)',
      '$0$ (impossible)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With $t-1$ shares, every secret in $\\mathbb{Z}_q$ is equally likely. The probability of guessing correctly is $1/q \\approx 1/2^{256}$, which is astronomically small.',
  },
];
