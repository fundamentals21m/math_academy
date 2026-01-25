import type { QuizQuestion } from './types';

// Section 15: The Number Line and the Number Plane
export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who are the two mathematicians credited with independently discovering the coordinate approach to geometry around 1630?',
    options: [
      'Fermat and Descartes',
      'Euclid and Pythagoras',
      'Newton and Leibniz',
      'Gauss and Riemann',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Pierre de Fermat and René Descartes independently discovered the advantages of using coordinates in geometry around 1630. Descartes published first in 1637.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the coordinate approach called "Cartesian" geometry?',
    options: [
      'From the old way of writing Descartes\\' name: Des Cartes',
      'It was developed in Carthage',
      'It uses carts to measure distances',
      'It was named after a Greek mathematician',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The coordinate approach became known as "Cartesian" from the old way of writing Descartes\' name: Des Cartes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What notation represents the Cartesian plane (number plane)?',
    options: [
      '$\\mathbb{Z}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Cartesian plane is denoted $\\mathbb{R}^2$, which is the set of all ordered pairs of real numbers.',
  },
      '$\\mathbb{R}^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Cartesian plane is denoted $\\mathbb{R}^2$, which is the set of all ordered pairs of real numbers.',
  },
      '$\\mathbb{Q}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Cartesian plane is denoted $\\mathbb{R}^2$, which is the set of all ordered pairs of real numbers.',
  },
      '$\\mathbb{C}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Cartesian plane is denoted $\\mathbb{R}^2$, which is the set of all ordered pairs of real numbers.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Cartesian plane is denoted $\\mathbb{R}^2$, which is the set of all ordered pairs of real numbers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is the order in an ordered pair $(a, b)$ important?',
    options: [
      'It\'s not important - $(a, b) = (b, a)$',
      'The first number is always larger',
      '$(3, 4)$ and $(4, 3)$ represent different points',
      'Order only matters for negative numbers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The order matters because (3, 4) is the point with x-coordinate 3 and y-coordinate 4, which is different from (4, 3). Just as 3rd Street and 4th Avenue differs from 4th Street and 3rd Avenue!',
  },
];

// Section 16: Lines and Their Equations
export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the slope of a line?',
    options: [
      'The y-intercept',
      'The length of the line',
      'The x-intercept',
      'The ratio of rise to run',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The slope is the ratio of the vertical change (rise) to the horizontal change (run) between any two points on the line: $\\frac{y_2 - y_1}{x_2 - x_1}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the equation $y = ax + c$, what does $c$ represent?',
    options: [
      'The slope',
      'The x-intercept',
      'The y-intercept',
      'The length of the line'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In the slope-intercept form $y = ax + c$, $a$ is the slope and $c$ is the y-intercept (where the line crosses the y-axis).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What type of line does NOT have a finite slope?',
    options: [
      'Horizontal line',
      'Diagonal line',
      'Vertical line',
      'All lines have finite slopes'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Vertical lines do not have a finite slope (they have infinite slope) because they don\'t cross the y-axis and have the form $x = c$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is true about parallel lines?',
    options: [
      'They have perpendicular slopes',
      'They have the same slope',
      'They always intersect',
      'They have different y-intercepts only'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Parallel lines have the same slope. Distinct lines $y = ax + c$ and $y = a\'x + c\'$ have a common point unless they have the same slope ($a = a\'$).',
  },
];

// Section 17: Distance
export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the distance formula for points $(x_1, y_1)$ and $(x_2, y_2)$?',
    options: [
      '$|x_2 - x_1| + |y_2 - y_1|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The distance formula comes from the Pythagorean theorem: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
  },
      '$(x_2 - x_1)(y_2 - y_1)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The distance formula comes from the Pythagorean theorem: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
  },
      '$\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The distance formula comes from the Pythagorean theorem: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
  },
      '$\\frac{x_2 + y_2}{x_1 + y_1}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The distance formula comes from the Pythagorean theorem: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The distance formula comes from the Pythagorean theorem: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the equation of a circle with center $(a, b)$ and radius $r$?',
    options: [
      '$(x + a)^2 + (y + b)^2 = r$',
      '$(x - a)^2 + (y - b)^2 = r^2$',
      '$x^2 + y^2 = a^2 + b^2$',
      '$(x - a) + (y - b) = r$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A circle is all points at distance $r$ from center $(a, b)$, giving the equation $(x - a)^2 + (y - b)^2 = r^2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The set of all points equidistant from two points A and B forms what?',
    options: [
      'A circle',
      'A parabola',
      'A line (the perpendicular bisector)',
      'An ellipse'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The set of all points equidistant from two distinct points forms the perpendicular bisector of the segment connecting them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the triangle inequality state?',
    options: [
      'All triangles have equal sides',
      'The angles of a triangle sum to 180°',
      'Any two sides together are greater than the third side',
      'Triangles have three vertices',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The triangle inequality states that for any triangle, the sum of any two sides is greater than the third side: $|OP| + |PQ| > |OQ|$.',
  },
];

// Section 18: Intersections of Lines and Circles
export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What operations are needed to find all intersection points in straightedge and compass constructions?',
    options: [
      'Only $+$ and $-
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All intersection points can be found using $+$, $-$, $\\times$, $\\div$, and $\\sqrt{}$. This is the algebraic criterion for constructibility.',
  },
      '$+$, $-$, $\\times$, $\\div$, and $\\sqrt{}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All intersection points can be found using $+$, $-$, $\\times$, $\\div$, and $\\sqrt{}$. This is the algebraic criterion for constructibility.',
  },
      'Only $\\times$ and $\\div
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All intersection points can be found using $+$, $-$, $\\times$, $\\div$, and $\\sqrt{}$. This is the algebraic criterion for constructibility.',
  },
      'Trigonometric functions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'All intersection points can be found using $+$, $-$, $\\times$, $\\div$, and $\\sqrt{}$. This is the algebraic criterion for constructibility.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When finding the intersection of two circles, what happens when you subtract one equation from the other?',
    options: [
      'You get another circle equation',
      'You get a cubic equation',
      'The equations have no solution',
      'The $x^2$ and $y^2$ terms cancel, leaving a linear equation',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Subtracting one circle equation from another eliminates the $x^2$ and $y^2$ terms, leaving a linear equation (the radical axis).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why can\'t we trisect an arbitrary angle with straightedge and compass?',
    options: [
      'It requires too many steps',
      'Ancient Greeks forbade it',
      'The compass isn\\'t accurate enough',
      '$\\cos(\\pi/9)$ cannot be expressed with finite square roots',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Trisecting $\\pi/3$ requires constructing $\\cos(\\pi/9)$, which cannot be expressed by a finite number of square roots, making it impossible with straightedge and compass.',
  },
];

// Section 19: Angle and Slope
export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why do we use slope instead of angle in algebraic geometry?',
    options: [
      'Slope is easier to measure',
      'Slope is an algebraic function, but $\\tan^{-1}$ is not',
      'Angles don\\'t exist in geometry',
      'Ancient Greeks didn\\'t know about angles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The angle $\\theta = \\tan^{-1}(t)$ is not an algebraic function. To stay within the world of algebra, we work with slope $t$ rather than angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two lines with slopes $t_1$ and $t_2$ are perpendicular if and only if:',
    options: [
      '$t_1 = t_2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The condition for perpendicularity is $t_1 \\cdot t_2 = -1$. The product of slopes of perpendicular lines is $-1$.',
  },
      '$t_1 + t_2 = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The condition for perpendicularity is $t_1 \\cdot t_2 = -1$. The product of slopes of perpendicular lines is $-1$.',
  },
      '$t_1 \\cdot t_2 = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The condition for perpendicularity is $t_1 \\cdot t_2 = -1$. The product of slopes of perpendicular lines is $-1$.',
  },
      '$t_1 \\cdot t_2 = -1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The condition for perpendicularity is $t_1 \\cdot t_2 = -1$. The product of slopes of perpendicular lines is $-1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The condition for perpendicularity is $t_1 \\cdot t_2 = -1$. The product of slopes of perpendicular lines is $-1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A rotation $r_{c,s}$ about the origin sends $(x, y)$ to:',
    options: [
      '$(cx - sy, sx + cy)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The rotation $r_{c,s}$ sends $(x, y)$ to $(cx - sy, sx + cy)$, where $c = \\cos\\theta$ and $s = \\sin\\theta$.',
  },
      '$(x + c, y + s)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rotation $r_{c,s}$ sends $(x, y)$ to $(cx - sy, sx + cy)$, where $c = \\cos\\theta$ and $s = \\sin\\theta$.',
  },
      '$(cx, sy)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rotation $r_{c,s}$ sends $(x, y)$ to $(cx - sy, sx + cy)$, where $c = \\cos\\theta$ and $s = \\sin\\theta$.',
  },
      '$(x - c, y - s)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rotation $r_{c,s}$ sends $(x, y)$ to $(cx - sy, sx + cy)$, where $c = \\cos\\theta$ and $s = \\sin\\theta$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rotation $r_{c,s}$ sends $(x, y)$ to $(cx - sy, sx + cy)$, where $c = \\cos\\theta$ and $s = \\sin\\theta$.',
  },
];

// Section 20: Isometries
export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an isometry?',
    options: [
      'A transformation that preserves distances',
      'A transformation that changes all distances',
      'A type of triangle',
      'A measurement tool',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An isometry (from Greek for "same length") is a transformation that preserves the distance between any two points: $|f(P_1)f(P_2)| = |P_1P_2|$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a type of isometry?',
    options: [
      'Translation',
      'Dilation (scaling)',
      'Rotation',
      'Reflection',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Dilation (scaling) changes distances and is not an isometry. The four types of plane isometries are translation, rotation, reflection, and glide reflection.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A translation $t_{a,b}$ sends the point $(x, y)$ to:',
    options: [
      '$(ax, by)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A translation moves every point by the same amount: $t_{a,b}(x, y) = (x + a, y + b)$.',
  },
      '$(x - a, y - b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A translation moves every point by the same amount: $t_{a,b}(x, y) = (x + a, y + b)$.',
  },
      '$(xa, yb)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A translation moves every point by the same amount: $t_{a,b}(x, y) = (x + a, y + b)$.',
  },
      '$(x + a, y + b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A translation moves every point by the same amount: $t_{a,b}(x, y) = (x + a, y + b)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A translation moves every point by the same amount: $t_{a,b}(x, y) = (x + a, y + b)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Reflection in the x-axis sends $(x, y)$ to:',
    options: [
      '$(-x, y)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Reflection in the x-axis flips the y-coordinate: $(x, y) \\mapsto (x, -y)$.',
  },
      '$(-x, -y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflection in the x-axis flips the y-coordinate: $(x, y) \\mapsto (x, -y)$.',
  },
      '$(x, -y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflection in the x-axis flips the y-coordinate: $(x, y) \\mapsto (x, -y)$.',
  },
      '$(y, x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflection in the x-axis flips the y-coordinate: $(x, y) \\mapsto (x, -y)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflection in the x-axis flips the y-coordinate: $(x, y) \\mapsto (x, -y)$.',
  },
];

// Section 21: The Three Reflections Theorem
export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An isometry of $\\mathbb{R}^2$ is determined by the images of how many points (not in a line)?',
    options: [
      'One',
      'Two',
      'Four',
      'Three',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'An isometry is completely determined by the images of three points not in a line, because any point P is uniquely determined by its distances from three non-collinear points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to the Three Reflections Theorem, any isometry is a combination of at most how many reflections?',
    options: [
      'One',
      'Two',
      'Three',
      'Four'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Three Reflections Theorem states that any isometry of $\\mathbb{R}^2$ is a combination of one, two, or three reflections.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A combination of two reflections in parallel lines produces:',
    options: [
      'A rotation',
      'A translation',
      'A glide reflection',
      'Another reflection'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Two reflections in parallel lines combine to form a translation perpendicular to the lines, through twice the distance between them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A combination of two reflections in intersecting lines produces:',
    options: [
      'A rotation',
      'A translation',
      'A glide reflection',
      'The identity',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Two reflections in lines meeting at angle $\\theta/2$ combine to form a rotation through angle $\\theta$ about the point of intersection.',
  },
];

// Section 22: Discussion
export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the name of Felix Klein\'s 1872 address that characterized geometry as the study of transformation groups?',
    options: [
      'The Erlanger Programm',
      'The Principia',
      'The Elements',
      'The Foundations',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Klein\'s Erlanger Programm (1872) characterized geometry as the study of transformation groups and their invariants.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the invariants preserved by the isometry group of $\\mathbb{R}^2$?',
    options: [
      'Only length',
      'Only area',
      'Only orientation',
      'Length, angle, and straightness',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Isometries preserve length, angle, and straightness. These are the geometric properties unchanged by translations, rotations, reflections, and glide reflections.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the "arithmetization of geometry"?',
    options: [
      'Building geometry from numbers using coordinates',
      'Counting geometric shapes',
      'Measuring angles numerically',
      'Using calculators in geometry',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The arithmetization of geometry means building geometry from numbers, using coordinates to define points, lines, circles, and other geometric objects.',
  },
];
