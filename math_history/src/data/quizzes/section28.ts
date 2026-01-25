import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 's28-e01',
    type: 'multiple-choice',
    question: 'How many species of cubic curves did Newton identify in his classification?',
    difficulty: 'easy',
    options: [
      '5',
      '12',
      '72',
      '100',
    ],
    correctIndex: 2,
    explanation:
      'Newton identified 72 species of cubic curves by reducing the general cubic equation to standard forms and subdividing by root structure. Later mathematicians found 6 additional species he had missed.',
  },
  {
    id: 's28-e02',
    type: 'multiple-choice',
    question: 'What is the equation of the semicubical parabola?',
    difficulty: 'easy',
    options: [
      '$y = x^2
    correctIndex: 2,
    explanation:
      'The semicubical parabola $y^2 = x^3$ is the simplest cubic curve with a cusp. It was historically significant as the first curve whose arc length was calculated (by Neil and van Heuraet in 1657).',
  },
      '$y = x^3
    correctIndex: 0,
    explanation:
      'The semicubical parabola $y^2 = x^3$ is the simplest cubic curve with a cusp. It was historically significant as the first curve whose arc length was calculated (by Neil and van Heuraet in 1657).',
  },
      '$y^2 = x^3
    correctIndex: 0,
    explanation:
      'The semicubical parabola $y^2 = x^3$ is the simplest cubic curve with a cusp. It was historically significant as the first curve whose arc length was calculated (by Neil and van Heuraet in 1657).',
  },
      '$y^3 = x^2
    correctIndex: 0,
    explanation:
      'The semicubical parabola $y^2 = x^3$ is the simplest cubic curve with a cusp. It was historically significant as the first curve whose arc length was calculated (by Neil and van Heuraet in 1657).',
  },
    ],
    correctIndex: 0,
    explanation:
      'The semicubical parabola $y^2 = x^3$ is the simplest cubic curve with a cusp. It was historically significant as the first curve whose arc length was calculated (by Neil and van Heuraet in 1657).',
  },
  {
    id: 's28-m01',
    type: 'multiple-choice',
    question:
      'Newton showed that all 72+ cubic curves are projectively equivalent to how many basic types?',
    difficulty: 'medium',
    options: [
      '5',
      '2',
      '10',
      '72',
    ],
    correctIndex: 0,
    explanation:
      'Newton made the remarkable observation that using projective transformations ("shadows"), all cubic curves reduce to just 5 fundamental types, distinguished by the root structure of the cubic polynomial.',
  },
  {
    id: 's28-m02',
    type: 'multiple-choice',
    question:
      'According to Bézout\'s theorem, a line and a cubic curve intersect in how many points?',
    difficulty: 'medium',
    options: [
      '1',
      '2',
      '6',
      '3',
    ],
    correctIndex: 3,
    explanation:
      'By Bézout\'s theorem, curves of degrees $m$ and $n$ intersect in $mn$ points. A line (degree 1) and a cubic (degree 3) intersect in $1 \\times 3 = 3$ points (counted with multiplicity, including complex points).',
  },
  {
    id: 's28-h01',
    type: 'multiple-choice',
    question:
      'What is a parametric representation of the semicubical parabola $y^2 = x^3$?',
    difficulty: 'hard',
    options: [
      '$x = t, y = t^2
    correctIndex: 1,
    explanation:
      'Setting $x = t^2$ and $y = t^3$, we verify: $y^2 = (t^3)^2 = t^6$ and $x^3 = (t^2)^3 = t^6$. So $y^2 = x^3$. This rational parameterization shows the curve is a "rational curve."',
  },
      '$x = t^2, y = t^3
    correctIndex: 3,
    explanation:
      'Setting $x = t^2$ and $y = t^3$, we verify: $y^2 = (t^3)^2 = t^6$ and $x^3 = (t^2)^3 = t^6$. So $y^2 = x^3$. This rational parameterization shows the curve is a "rational curve."',
  },
      '$x = \\cos t, y = \\sin t
    correctIndex: 3,
    explanation:
      'Setting $x = t^2$ and $y = t^3$, we verify: $y^2 = (t^3)^2 = t^6$ and $x^3 = (t^2)^3 = t^6$. So $y^2 = x^3$. This rational parameterization shows the curve is a "rational curve."',
  },
      '$x = t^3, y = t^2
    correctIndex: 3,
    explanation:
      'Setting $x = t^2$ and $y = t^3$, we verify: $y^2 = (t^3)^2 = t^6$ and $x^3 = (t^2)^3 = t^6$. So $y^2 = x^3$. This rational parameterization shows the curve is a "rational curve."',
  },
    ],
    correctIndex: 3,
    explanation:
      'Setting $x = t^2$ and $y = t^3$, we verify: $y^2 = (t^3)^2 = t^6$ and $x^3 = (t^2)^3 = t^6$. So $y^2 = x^3$. This rational parameterization shows the curve is a "rational curve."',
  },
  {
    id: 's28-h02',
    type: 'multiple-choice',
    question:
      'Why was the rectification (arc length calculation) of the semicubical parabola historically significant?',
    difficulty: 'hard',
    options: [
      'It was the first curve studied by Newton',
      'It proved Descartes wrong about the impossibility of measuring algebraic curve lengths',
      'It required the invention of calculus',
      'It was the first transcendental curve to be measured',
    ],
    correctIndex: 1,
    explanation:
      'Descartes believed that comparing curved and straight lengths was impossible ("no exact proportion can exist"). Neil and van Heuraet\'s 1657 calculation of the semicubical parabola\'s arc length proved him wrong.',
  },
];
