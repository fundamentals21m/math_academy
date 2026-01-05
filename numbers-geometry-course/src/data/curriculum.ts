// =============================================================================
// CURRICULUM STRUCTURE - Numbers and Geometry (Stillwell, 1998)
// =============================================================================
// 9 Parts corresponding to the 9 chapters of the book.
// Sections marked with * in the book are harder/optional topics.
// =============================================================================

/**
 * Individual section within a part
 */
export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

/**
 * Part containing multiple sections
 */
export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

/**
 * Complete curriculum structure
 */
export const curriculum: Part[] = [
  // ==========================================================================
  // PART 1: ARITHMETIC
  // ==========================================================================
  {
    id: 1,
    title: 'Arithmetic',
    slug: 'arithmetic',
    sections: [
      {
        id: 0,
        title: 'The Natural Numbers',
        slug: 'natural-numbers',
        description: 'Introduction to natural numbers and their basic properties.',
      },
      {
        id: 1,
        title: 'Division, Divisors, and Primes',
        slug: 'division-divisors-primes',
        description: 'The division algorithm, divisibility, and prime numbers.',
      },
      {
        id: 2,
        title: 'The Mysterious Sequence of Primes',
        slug: 'sequence-of-primes',
        description: 'Exploring patterns and mysteries in the distribution of primes.',
      },
      {
        id: 3,
        title: 'Integers and Rationals',
        slug: 'integers-rationals',
        description: 'Extending the natural numbers to integers and rational numbers.',
      },
      {
        id: 4,
        title: 'Linear Equations',
        slug: 'linear-equations',
        description: 'Solving linear equations with integer coefficients.',
      },
      {
        id: 5,
        title: 'Unique Prime Factorization',
        slug: 'unique-prime-factorization',
        description: 'The Fundamental Theorem of Arithmetic.',
      },
      {
        id: 6,
        title: 'Prime Factorization and Divisors',
        slug: 'factorization-divisors',
        description: 'Using prime factorization to understand divisibility.',
      },
      {
        id: 7,
        title: 'Induction',
        slug: 'induction',
        description: 'Mathematical induction as a proof technique.',
      },
      {
        id: 8,
        title: 'Foundations',
        slug: 'foundations',
        description: 'Advanced: Foundational questions about natural numbers.',
      },
      {
        id: 9,
        title: 'Discussion',
        slug: 'arithmetic-discussion',
        description: 'Historical and mathematical perspectives on arithmetic.',
      },
    ],
  },

  // ==========================================================================
  // PART 2: GEOMETRY
  // ==========================================================================
  {
    id: 2,
    title: 'Geometry',
    slug: 'geometry',
    sections: [
      {
        id: 10,
        title: 'Geometric Intuition',
        slug: 'geometric-intuition',
        description: 'Developing geometric reasoning and visualization.',
      },
      {
        id: 11,
        title: 'Constructions',
        slug: 'constructions',
        description: 'Compass and straightedge constructions.',
      },
      {
        id: 12,
        title: 'Parallels and Angles',
        slug: 'parallels-angles',
        description: 'Parallel lines and angle relationships.',
      },
      {
        id: 13,
        title: 'Angles and Circles',
        slug: 'angles-circles',
        description: 'Inscribed angles and circle theorems.',
      },
      {
        id: 14,
        title: 'Length and Area',
        slug: 'length-area',
        description: 'Measuring lengths and areas of geometric figures.',
      },
      {
        id: 15,
        title: 'The Pythagorean Theorem',
        slug: 'pythagorean-theorem',
        description: 'The most famous theorem in geometry and its proofs.',
      },
      {
        id: 16,
        title: 'Volume',
        slug: 'volume',
        description: 'Measuring volumes of three-dimensional figures.',
      },
      {
        id: 17,
        title: 'The Whole and the Part',
        slug: 'whole-and-part',
        description: 'Advanced: Comparing infinite sets and paradoxes.',
      },
      {
        id: 18,
        title: 'Discussion',
        slug: 'geometry-discussion',
        description: 'Historical development of geometry from Euclid onwards.',
      },
    ],
  },

  // ==========================================================================
  // PART 3: COORDINATES
  // ==========================================================================
  {
    id: 3,
    title: 'Coordinates',
    slug: 'coordinates',
    sections: [
      {
        id: 19,
        title: 'Lines and Circles',
        slug: 'lines-circles',
        description: 'Equations for lines and circles in the coordinate plane.',
      },
      {
        id: 20,
        title: 'Intersections',
        slug: 'intersections',
        description: 'Finding intersections of geometric objects algebraically.',
      },
      {
        id: 21,
        title: 'The Real Numbers',
        slug: 'real-numbers',
        description: 'Defining and understanding the real number system.',
      },
      {
        id: 22,
        title: 'The Line',
        slug: 'the-line',
        description: 'The real line as a geometric and algebraic object.',
      },
      {
        id: 23,
        title: 'The Euclidean Plane',
        slug: 'euclidean-plane',
        description: 'Coordinate geometry in the Euclidean plane.',
      },
      {
        id: 24,
        title: 'Isometries of the Euclidean Plane',
        slug: 'isometries',
        description: 'Distance-preserving transformations: rotations, reflections, translations.',
      },
      {
        id: 25,
        title: 'The Triangle Inequality',
        slug: 'triangle-inequality',
        description: 'A fundamental property of distance in geometry.',
      },
      {
        id: 26,
        title: "Klein's Definition of Geometry",
        slug: 'klein-geometry',
        description: 'Advanced: Geometry as the study of invariants under transformations.',
      },
      {
        id: 27,
        title: 'The Non-Euclidean Plane',
        slug: 'non-euclidean-plane',
        description: 'Advanced: Introduction to hyperbolic geometry.',
      },
      {
        id: 28,
        title: 'Discussion',
        slug: 'coordinates-discussion',
        description: 'The marriage of algebra and geometry through coordinates.',
      },
    ],
  },

  // ==========================================================================
  // PART 4: RATIONAL POINTS
  // ==========================================================================
  {
    id: 4,
    title: 'Rational Points',
    slug: 'rational-points',
    sections: [
      {
        id: 29,
        title: 'Pythagorean Triples',
        slug: 'pythagorean-triples',
        description: 'Integer solutions to x² + y² = z².',
      },
      {
        id: 30,
        title: 'Pythagorean Triples in Euclid',
        slug: 'triples-euclid',
        description: "Euclid's formula for generating Pythagorean triples.",
      },
      {
        id: 31,
        title: 'Pythagorean Triples in Diophantus',
        slug: 'triples-diophantus',
        description: "Diophantus's approach using rational points on circles.",
      },
      {
        id: 32,
        title: 'Rational Triangles',
        slug: 'rational-triangles',
        description: 'Triangles with rational side lengths and areas.',
      },
      {
        id: 33,
        title: 'Rational Points on Quadratic Curves',
        slug: 'rational-quadratic-curves',
        description: 'Finding rational solutions to quadratic equations.',
      },
      {
        id: 34,
        title: 'Rational Points on the Sphere',
        slug: 'rational-sphere',
        description: 'Advanced: Extending to three dimensions.',
      },
      {
        id: 35,
        title: 'The Area of Rational Right Triangles',
        slug: 'rational-triangle-area',
        description: 'Advanced: Which numbers can be areas of rational right triangles?',
      },
      {
        id: 36,
        title: 'Discussion',
        slug: 'rational-points-discussion',
        description: 'Connections to number theory and Diophantine equations.',
      },
    ],
  },

  // ==========================================================================
  // PART 5: TRIGONOMETRY
  // ==========================================================================
  {
    id: 5,
    title: 'Trigonometry',
    slug: 'trigonometry',
    sections: [
      {
        id: 37,
        title: 'Angle Measure',
        slug: 'angle-measure',
        description: 'Degrees, radians, and measuring angles.',
      },
      {
        id: 38,
        title: 'Circular Functions',
        slug: 'circular-functions',
        description: 'Sine, cosine, and other trigonometric functions.',
      },
      {
        id: 39,
        title: 'Addition Formulas',
        slug: 'addition-formulas',
        description: 'Formulas for sin(a+b) and cos(a+b).',
      },
      {
        id: 40,
        title: 'A Rational Addition Formula',
        slug: 'rational-addition',
        description: 'The tangent half-angle substitution.',
      },
      {
        id: 41,
        title: "Hilbert's Third Problem",
        slug: 'hilbert-third',
        description: 'Advanced: Can a tetrahedron be cut into a cube?',
      },
      {
        id: 42,
        title: 'The Dehn Invariant',
        slug: 'dehn-invariant',
        description: 'Advanced: An obstruction to scissors congruence.',
      },
      {
        id: 43,
        title: 'Additive Functions',
        slug: 'additive-functions',
        description: 'Advanced: Functions satisfying f(x+y) = f(x) + f(y).',
      },
      {
        id: 44,
        title: 'The Tetrahedron and the Cube',
        slug: 'tetrahedron-cube',
        description: 'Advanced: Comparing volumes through dissection.',
      },
      {
        id: 45,
        title: 'Discussion',
        slug: 'trigonometry-discussion',
        description: 'The role of trigonometry in mathematics and science.',
      },
    ],
  },

  // ==========================================================================
  // PART 6: FINITE ARITHMETIC
  // ==========================================================================
  {
    id: 6,
    title: 'Finite Arithmetic',
    slug: 'finite-arithmetic',
    sections: [
      {
        id: 46,
        title: 'Three Examples',
        slug: 'three-examples',
        description: 'Clock arithmetic, calendars, and check digits.',
      },
      {
        id: 47,
        title: 'Arithmetic mod n',
        slug: 'arithmetic-mod-n',
        description: 'The basics of modular arithmetic.',
      },
      {
        id: 48,
        title: 'The Ring Z/nZ',
        slug: 'ring-z-mod-n',
        description: 'The algebraic structure of integers modulo n.',
      },
      {
        id: 49,
        title: 'Inverses mod n',
        slug: 'inverses-mod-n',
        description: 'When and how to divide in modular arithmetic.',
      },
      {
        id: 50,
        title: 'The Theorems of Fermat and Wilson',
        slug: 'fermat-wilson',
        description: "Fermat's Little Theorem and Wilson's Theorem.",
      },
      {
        id: 51,
        title: 'The Chinese Remainder Theorem',
        slug: 'chinese-remainder',
        description: 'Solving systems of congruences.',
      },
      {
        id: 52,
        title: 'Squares mod p',
        slug: 'squares-mod-p',
        description: 'Quadratic residues and non-residues.',
      },
      {
        id: 53,
        title: 'The Quadratic Character of -1 and 2',
        slug: 'quadratic-character',
        description: 'Advanced: When are -1 and 2 squares mod p?',
      },
      {
        id: 54,
        title: 'Quadratic Reciprocity',
        slug: 'quadratic-reciprocity',
        description: 'Advanced: The golden theorem of number theory.',
      },
      {
        id: 55,
        title: 'Discussion',
        slug: 'finite-arithmetic-discussion',
        description: 'Applications of modular arithmetic in cryptography and beyond.',
      },
    ],
  },

  // ==========================================================================
  // PART 7: COMPLEX NUMBERS
  // ==========================================================================
  {
    id: 7,
    title: 'Complex Numbers',
    slug: 'complex-numbers',
    sections: [
      {
        id: 56,
        title: 'Addition, Multiplication, and Absolute Value',
        slug: 'complex-operations',
        description: 'Basic operations with complex numbers.',
      },
      {
        id: 57,
        title: 'Argument and the Square Root of -1',
        slug: 'argument-sqrt-minus-one',
        description: 'The polar form of complex numbers.',
      },
      {
        id: 58,
        title: 'Isometries of the Plane',
        slug: 'complex-isometries',
        description: 'Using complex numbers to describe geometric transformations.',
      },
      {
        id: 59,
        title: 'The Gaussian Integers',
        slug: 'gaussian-integers',
        description: 'Integers in the complex plane: a + bi where a, b are integers.',
      },
      {
        id: 60,
        title: 'Unique Gaussian Prime Factorization',
        slug: 'gaussian-factorization',
        description: 'The Fundamental Theorem of Arithmetic for Gaussian integers.',
      },
      {
        id: 61,
        title: "Fermat's Two Squares Theorem",
        slug: 'two-squares-theorem',
        description: 'Which primes are sums of two squares?',
      },
      {
        id: 62,
        title: 'Factorizing a Sum of Two Squares',
        slug: 'factorizing-sum-squares',
        description: 'Advanced: Using Gaussian integers to factor.',
      },
      {
        id: 63,
        title: 'Discussion',
        slug: 'complex-discussion',
        description: 'The power and elegance of complex numbers.',
      },
    ],
  },

  // ==========================================================================
  // PART 8: CONIC SECTIONS
  // ==========================================================================
  {
    id: 8,
    title: 'Conic Sections',
    slug: 'conic-sections',
    sections: [
      {
        id: 64,
        title: 'Too Much, Too Little, and Just Right',
        slug: 'conic-intro',
        description: 'Ellipses, hyperbolas, and parabolas from slicing a cone.',
      },
      {
        id: 65,
        title: 'Properties of Conic Sections',
        slug: 'conic-properties',
        description: 'Focus-directrix and reflective properties.',
      },
      {
        id: 66,
        title: 'Quadratic Curves',
        slug: 'quadratic-curves',
        description: 'The general equation of a conic section.',
      },
      {
        id: 67,
        title: 'Intersections',
        slug: 'conic-intersections',
        description: 'Advanced: Where conics meet lines and other conics.',
      },
      {
        id: 68,
        title: 'Integer Points on Conics',
        slug: 'integer-points-conics',
        description: 'Finding integer solutions on conic sections.',
      },
      {
        id: 69,
        title: 'Square Roots and the Euclidean Algorithm',
        slug: 'sqrt-euclidean',
        description: 'Advanced: Continued fractions and square roots.',
      },
      {
        id: 70,
        title: "Pell's Equation",
        slug: 'pell-equation',
        description: 'Advanced: The equation x² - Dy² = 1.',
      },
      {
        id: 71,
        title: 'Discussion',
        slug: 'conic-discussion',
        description: 'Conic sections from ancient Greece to modern applications.',
      },
    ],
  },

  // ==========================================================================
  // PART 9: ELEMENTARY FUNCTIONS
  // ==========================================================================
  {
    id: 9,
    title: 'Elementary Functions',
    slug: 'elementary-functions',
    sections: [
      {
        id: 72,
        title: 'Algebraic and Transcendental Functions',
        slug: 'algebraic-transcendental',
        description: 'Classifying functions by their defining equations.',
      },
      {
        id: 73,
        title: 'The Area Bounded by a Curve',
        slug: 'area-under-curve',
        description: 'Introduction to integration through area.',
      },
      {
        id: 74,
        title: 'The Natural Logarithm and the Exponential',
        slug: 'ln-and-exp',
        description: 'Defining log and exp through areas and inverses.',
      },
      {
        id: 75,
        title: 'The Exponential Function',
        slug: 'exponential-function',
        description: 'Properties and applications of e^x.',
      },
      {
        id: 76,
        title: 'The Hyperbolic Functions',
        slug: 'hyperbolic-functions',
        description: 'Sinh, cosh, and their connection to the hyperbola.',
      },
      {
        id: 77,
        title: 'The Pell Equation Revisited',
        slug: 'pell-revisited',
        description: "Solving Pell's equation using hyperbolic functions.",
      },
      {
        id: 78,
        title: 'Discussion',
        slug: 'functions-discussion',
        description: 'The unity of mathematics revealed through functions.',
      },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get section by ID
 */
export function getSectionById(id: number): Section | undefined {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === id);
    if (section) return section;
  }
  return undefined;
}

/**
 * Get part containing a section
 */
export function getPartBySectionId(sectionId: number): Part | undefined {
  return curriculum.find((part) =>
    part.sections.some((section) => section.id === sectionId)
  );
}

/**
 * Get adjacent sections (previous and next)
 */
export function getAdjacentSections(sectionId: number): {
  prev: Section | null;
  next: Section | null;
} {
  const allSections = curriculum.flatMap((part) => part.sections);
  const index = allSections.findIndex((s) => s.id === sectionId);

  return {
    prev: index > 0 ? allSections[index - 1] : null,
    next: index < allSections.length - 1 ? allSections[index + 1] : null,
  };
}

/**
 * Get total number of sections
 */
export function getTotalSections(): number {
  return curriculum.reduce((total, part) => total + part.sections.length, 0);
}

/**
 * Get all sections as a flat array
 */
export function getAllSections(): Section[] {
  return curriculum.flatMap((part) => part.sections);
}

/**
 * Get section index (position in course)
 */
export function getSectionIndex(sectionId: number): number {
  const allSections = getAllSections();
  return allSections.findIndex((s) => s.id === sectionId);
}
