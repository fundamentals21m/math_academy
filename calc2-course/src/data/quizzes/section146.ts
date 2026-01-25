import type { QuizQuestion } from './types';

export const section146Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Stokes\' theorem can be extended to surfaces with holes by:',
    options: [
      'Using Green\\\\'s theorem for multiply connected regions',
      'Ignoring the inner boundaries',
      'Restricting to simply connected parameter domains',
      'Requiring the surface to be closed',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For surfaces with holes, we extend Stokes\' theorem using the same technique as Green\'s theorem for multiply connected regions, with line integrals over all boundary components.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A surface is orientable if:',
    options: [
      'It is bounded',
      'It has no boundary',
      'It is simply connected',
      'A continuous unit normal can be defined over the entire surface',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Orientability means we can consistently choose a normal direction over the entire surface without discontinuities—the surface has two distinct "sides."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A Mobius band is:',
    options: [
      'Orientable and simply connected',
      'A closed surface',
      'Non-orientable (has only one side)',
      'A surface without boundary',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A Mobius band is the classic example of a non-orientable surface—it has only one side, and you cannot consistently define a continuous normal over it.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Stokes\' theorem cannot be extended to:',
    options: [
      'Surfaces with holes',
      'Non-orientable surfaces like the Mobius band',
      'Multiply connected parameter domains',
      'Surfaces given explicitly as $z = f(x, y)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Stokes\' theorem requires orientability. On non-orientable surfaces, we cannot consistently define the normal, so the theorem fails.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Stokes\' theorem requires orientability. On non-orientable surfaces, we cannot consistently define the normal, so the theorem fails.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For any closed orientable surface $S$ (no boundary):',
    options: [
      '$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = 0$ for all $\\mathbf{F}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A closed surface has no boundary, so by Stokes\' theorem the line integral (over empty boundary) is zero: $\\iint_S (\\text{curl } \\mathbf{F}) \\cdot d\\mathbf{S} = \\oint_\\emptyset \\mathbf{F} \\cdot d\\mathbf{r} = 0$.',
  },
      '$\\iint_S d\\mathbf{S} = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A closed surface has no boundary, so by Stokes\' theorem the line integral (over empty boundary) is zero: $\\iint_S (\\text{curl } \\mathbf{F}) \\cdot d\\mathbf{S} = \\oint_\\emptyset \\mathbf{F} \\cdot d\\mathbf{r} = 0$.',
  },
      '$\\iint_S (\\text{div } \\mathbf{F}) d\\mathbf{S} = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A closed surface has no boundary, so by Stokes\' theorem the line integral (over empty boundary) is zero: $\\iint_S (\\text{curl } \\mathbf{F}) \\cdot d\\mathbf{S} = \\oint_\\emptyset \\mathbf{F} \\cdot d\\mathbf{r} = 0$.',
  },
      '$\\iint_S (\\text{curl } \\mathbf{F}) \\cdot d\\mathbf{S} = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A closed surface has no boundary, so by Stokes\' theorem the line integral (over empty boundary) is zero: $\\iint_S (\\text{curl } \\mathbf{F}) \\cdot d\\mathbf{S} = \\oint_\\emptyset \\mathbf{F} \\cdot d\\mathbf{r} = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'A closed surface has no boundary, so by Stokes\' theorem the line integral (over empty boundary) is zero: $\\iint_S (\\text{curl } \\mathbf{F}) \\cdot d\\mathbf{S} = \\oint_\\emptyset \\mathbf{F} \\cdot d\\mathbf{r} = 0$.',
  },
];
