import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set $E \\subseteq Y$ is relatively open with respect to $Y$ if and only if:',
    options: [
      '$E$ is open in $X
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A set is relatively open in $Y$ precisely when it is the intersection of $Y$ with some open set in the ambient space $X$.',
  },
      '$E = V \\cap Y$ for some open set $V$ in $X
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A set is relatively open in $Y$ precisely when it is the intersection of $Y$ with some open set in the ambient space $X$.',
  },
      '$Y \\setminus E$ is open in $X
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A set is relatively open in $Y$ precisely when it is the intersection of $Y$ with some open set in the ambient space $X$.',
  },
      '$E$ is closed in $Y
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A set is relatively open in $Y$ precisely when it is the intersection of $Y$ with some open set in the ambient space $X$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A set is relatively open in $Y$ precisely when it is the intersection of $Y$ with some open set in the ambient space $X$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Consider $Y = [0, 2]$ as a subspace of $\\mathbf{R}$. Is $[0, 1)$ relatively open in $Y$?',
    options: [
      'No, because $[0, 1)$ is not open in $\\mathbf{R}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$[0, 1) = (-1, 1) \\cap [0, 2]$, and $(-1, 1)$ is open in $\\mathbf{R}$, so $[0, 1)$ is relatively open in $[0, 2]$.',
  },
      'No, because it contains the endpoint $0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$[0, 1) = (-1, 1) \\cap [0, 2]$, and $(-1, 1)$ is open in $\\mathbf{R}$, so $[0, 1)$ is relatively open in $[0, 2]$.',
  },
      'Yes, because all subsets of $Y$ are relatively open',
      'Yes, because $[0, 1) = (-1, 1) \\cap [0, 2]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$[0, 1) = (-1, 1) \\cap [0, 2]$, and $(-1, 1)$ is open in $\\mathbf{R}$, so $[0, 1)$ is relatively open in $[0, 2]$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$[0, 1) = (-1, 1) \\cap [0, 2]$, and $(-1, 1)$ is open in $\\mathbf{R}$, so $[0, 1)$ is relatively open in $[0, 2]$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which of the following properties is intrinsic (depends only on the metric restricted to a subset)?',
    options: [
      'Being open',
      'Compactness',
      'Being closed',
      'Having non-empty boundary',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Compactness is intrinsic—it depends only on the metric restricted to the subset. Open and closed depend on the ambient space.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Let $X = \\mathbf{R}$ and $Y = (-1, 1)$. Is $[0, 1)$ relatively closed in $Y$?',
    options: [
      'No, because $1$ is an adherent point of $[0, 1)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$[0, 1) = [0, 1] \\cap (-1, 1)$, and $[0, 1]$ is closed in $\\mathbf{R}$, so $[0, 1)$ is relatively closed in $(-1, 1)$. Note that $1 \\notin Y$, so $1$ is not an adherent point in $Y$.',
  },
      'No, because $[0, 1)$ contains $0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$[0, 1) = [0, 1] \\cap (-1, 1)$, and $[0, 1]$ is closed in $\\mathbf{R}$, so $[0, 1)$ is relatively closed in $(-1, 1)$. Note that $1 \\notin Y$, so $1$ is not an adherent point in $Y$.',
  },
      'Yes, because $[0, 1)$ is closed in $\\mathbf{R}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$[0, 1) = [0, 1] \\cap (-1, 1)$, and $[0, 1]$ is closed in $\\mathbf{R}$, so $[0, 1)$ is relatively closed in $(-1, 1)$. Note that $1 \\notin Y$, so $1$ is not an adherent point in $Y$.',
  },
      'Yes, because $[0, 1) = [0, 1] \\cap (-1, 1)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$[0, 1) = [0, 1] \\cap (-1, 1)$, and $[0, 1]$ is closed in $\\mathbf{R}$, so $[0, 1)$ is relatively closed in $(-1, 1)$. Note that $1 \\notin Y$, so $1$ is not an adherent point in $Y$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$[0, 1) = [0, 1] \\cap (-1, 1)$, and $[0, 1]$ is closed in $\\mathbf{R}$, so $[0, 1)$ is relatively closed in $(-1, 1)$. Note that $1 \\notin Y$, so $1$ is not an adherent point in $Y$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The segment $\\{(x, 0) : -1 < x < 1\\}$ on the $x$-axis is:',
    options: [
      'Open in $\\mathbf{R}^2$ and open in the $x$-axis',
      'Not open in either $\\mathbf{R}^2$ or the $x$-axis',
      'Not open in $\\mathbf{R}^2$ but open in the $x$-axis',
      'Open in $\\mathbf{R}^2$ but not open in the $x$-axis',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In $\\mathbf{R}^2$, any ball around a point on the $x$-axis contains points off the axis, so it\'s not open. In the $x$-axis as a subspace, it is open.',
  },
];
