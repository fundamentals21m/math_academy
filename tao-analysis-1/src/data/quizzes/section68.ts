import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To prove $\\forall x \\, P(x)$, a valid approach is to:',
    options: [
      'Prove $P(x)$ for $x = 0, 1, 2$ only',
      'Find one specific example where $P(x)$ is true',
      'Let $x$ be an arbitrary element of the domain and prove $P(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'To prove a universal statement, we introduce an arbitrary (generic) element $x$ and show $P(x)$ holds without using any special properties of $x$. This ensures the proof works for all elements.',
  },
      'Assume $\\exists x \\, \\neg P(x)$ and find that element',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'To prove a universal statement, we introduce an arbitrary (generic) element $x$ and show $P(x)$ holds without using any special properties of $x$. This ensures the proof works for all elements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To prove $\\exists x \\, P(x)$, a valid approach is to:',
    options: [
      'Prove $P(x)$ for an arbitrary $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An existential statement is proved by providing a witness: a concrete example $x_0$ together with a verification that $P(x_0)$ holds.',
  },
      'Show that $\\forall x \\, \\neg P(x)$ is false without finding an example',
      'Prove that $P(x)$ is consistent',
      'Exhibit a specific element $x_0$ and verify that $P(x_0)$ is true',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An existential statement is proved by providing a witness: a concrete example $x_0$ together with a verification that $P(x_0)$ holds.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To disprove $\\forall x \\, P(x)$, it suffices to:',
    options: [
      'Show that $P(x)$ fails for all $x$',
      'Find a single counterexample: some $x_0$ with $\\neg P(x_0)$',
      'Prove that $P(x)$ is sometimes true',
      'Show that the domain is empty'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A universal statement is false if there exists even one counterexample. Since $\\neg(\\forall x \\, P(x)) \\equiv \\exists x \\, \\neg P(x)$, one counterexample suffices.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Consider proving: "For all $\\epsilon > 0$, there exists $N \\in \\mathbb{N}$ such that $1/N < \\epsilon$." Which is the correct proof structure?',
    options: [
      'Assume no such $N$ exists. Then $1/N \\geq \\epsilon$ for all $N$, contradiction.',
      'Choose $N = 1$. Then for $\\epsilon = 2$, we have $1/N = 1 < 2 = \\epsilon$.',
      'Let $N$ be arbitrary. Then there exists $\\epsilon > 1/N$.',
      'Let $\\epsilon > 0$ be given. Choose $N > 1/\\epsilon$ (which exists by the Archimedean property). Then $1/N < \\epsilon$.',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For $\\forall \\epsilon \\, \\exists N$, we first let $\\epsilon$ be arbitrary, then construct $N$ that may depend on $\\epsilon$. The Archimedean property guarantees such an $N$ exists.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The statement "There exists a smallest positive real number" is:',
    options: [
      'False, because for any $x > 0$, we have $x/2 > 0$ with $x/2 < x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Formally, the statement is $\\exists x > 0 \\, \\forall y > 0 \\, (x \\leq y)$. This is false because given any positive $x$, we can find a smaller positive number (e.g., $x/2$), contradicting minimality.',
  },
      'Neither true nor false',
      'True, and that number is $1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Formally, the statement is $\\exists x > 0 \\, \\forall y > 0 \\, (x \\leq y)$. This is false because given any positive $x$, we can find a smaller positive number (e.g., $x/2$), contradicting minimality.',
  },
      'True, and that number is $1/\\infty
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Formally, the statement is $\\exists x > 0 \\, \\forall y > 0 \\, (x \\leq y)$. This is false because given any positive $x$, we can find a smaller positive number (e.g., $x/2$), contradicting minimality.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Formally, the statement is $\\exists x > 0 \\, \\forall y > 0 \\, (x \\leq y)$. This is false because given any positive $x$, we can find a smaller positive number (e.g., $x/2$), contradicting minimality.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'To prove: "If $f$ is differentiable at $a$, then $f$ is continuous at $a$," which proof structure is appropriate?',
    options: [
      'Assume $f$ is continuous at $a$, then prove $f$ is differentiable at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is a direct proof: assume the hypothesis (differentiability at $a$), then derive the conclusion (continuity at $a$) by verifying the $\\epsilon$-$\\delta$ definition of continuity.',
  },
      'Find a function that is both differentiable and continuous',
      'Assume $f$ is differentiable at $a$, then prove $\\forall \\epsilon > 0 \\, \\exists \\delta > 0$ such that $|x-a| < \\delta \\Rightarrow |f(x) - f(a)| < \\epsilon
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This is a direct proof: assume the hypothesis (differentiability at $a$), then derive the conclusion (continuity at $a$) by verifying the $\\epsilon$-$\\delta$ definition of continuity.',
  },
      'Prove the contrapositive: if $f$ is not continuous, then $f$ is not differentiable',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This is a direct proof: assume the hypothesis (differentiability at $a$), then derive the conclusion (continuity at $a$) by verifying the $\\epsilon$-$\\delta$ definition of continuity.',
  },
];
