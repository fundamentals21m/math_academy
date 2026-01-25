import type { QuizQuestion } from './types';

export const section121Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A bounded subset $A$ of the plane has content zero if:',
    options: [
      'For every $\\epsilon > 0$, there is a finite set of rectangles whose union contains $A$ with total area $\\leq \\epsilon
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'By definition, a bounded plane set has content zero if it can be enclosed in a union of finitely many rectangles whose total area is arbitrarily small.',
  },
      'The area of $A$ is exactly zero',
      '$A$ contains no interior points',
      '$A$ is contained in a single rectangle',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, a bounded plane set has content zero if it can be enclosed in a union of finitely many rectangles whose total area is arbitrarily small.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following sets does NOT have content zero?',
    options: [
      'A finite set of points',
      'A line segment',
      'The graph of a continuous function on $[a, b]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An open disk has positive area, so it cannot be covered by rectangles with arbitrarily small total area. Finite point sets, line segments, and graphs of continuous functions all have content zero.',
  },
      'An open disk',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An open disk has positive area, so it cannot be covered by rectangles with arbitrarily small total area. Finite point sets, line segments, and graphs of continuous functions all have content zero.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Theorem 11.7, if $f$ is bounded on rectangle $Q$ and its set of discontinuities has content zero, then:',
    options: [
      '$f$ is continuous on $Q
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Theorem 11.7 states that a bounded function on a rectangle is integrable if the set of its discontinuities has content zero. This extends integrability beyond just continuous functions.',
  },
      '$f$ is integrable on $Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 11.7 states that a bounded function on a rectangle is integrable if the set of its discontinuities has content zero. This extends integrability beyond just continuous functions.',
  },
      'The integral of $f$ is zero',
      '$f$ has no discontinuities',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 11.7 states that a bounded function on a rectangle is integrable if the set of its discontinuities has content zero. This extends integrability beyond just continuous functions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the proof of Theorem 11.7, subrectangles containing points of discontinuity contribute to the difference $\\iint_Q t - \\iint_Q s$ by at most:',
    options: [
      '$\\epsilon \\cdot a(Q)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'On subrectangles containing discontinuities, the step functions $s$ and $t$ are set to $-M$ and $M$ respectively. The contribution is bounded by $2M$ times the total area $\\delta$ of these subrectangles, which can be made arbitrarily small.',
  },
      '$M \\cdot a(Q)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'On subrectangles containing discontinuities, the step functions $s$ and $t$ are set to $-M$ and $M$ respectively. The contribution is bounded by $2M$ times the total area $\\delta$ of these subrectangles, which can be made arbitrarily small.',
  },
      '$2M\\delta$ where $M$ bounds $|f|$ and $\\delta$ is the total area of subrectangles containing discontinuities',
      'Zero',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'On subrectangles containing discontinuities, the step functions $s$ and $t$ are set to $-M$ and $M$ respectively. The contribution is bounded by $2M$ times the total area $\\delta$ of these subrectangles, which can be made arbitrarily small.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which property of sets of content zero is used in extending integrability beyond continuous functions?',
    options: [
      'Every set of content zero is empty',
      'Sets of content zero are always bounded',
      'Subsets of sets of content zero also have content zero',
      'The union of infinitely many sets of content zero has content zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A key property is that every subset of a set of content zero also has content zero. Additionally, the finite union of bounded sets of content zero has content zero.',
  },
];
