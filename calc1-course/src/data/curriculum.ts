// =============================================================================
// CURRICULUM STRUCTURE - Apostol's Calculus, Volume 1
// =============================================================================
// Based on Tom M. Apostol's "Calculus, Volume 1" (2nd Edition)
// One-Variable Calculus with an Introduction to Linear Algebra
// =============================================================================

export interface Section {
  id: number;
  title: string;
  slug: string;
  description: string;
}

export interface Part {
  id: number;
  title: string;
  slug: string;
  sections: Section[];
}

export const curriculum: Part[] = [
  // ==========================================================================
  // INTRODUCTION
  // ==========================================================================
  {
    id: 1,
    title: "Introduction",
    slug: "introduction",
    sections: [
      { id: 0, title: "Historical Introduction", slug: "historical-intro", description: "The two basic concepts of calculus and their historical development" },
      { id: 1, title: "The Method of Exhaustion", slug: "method-of-exhaustion", description: "Archimedes' method for computing the area of a parabolic segment" },
      { id: 2, title: "Set Theory Basics", slug: "set-theory", description: "Introduction to sets, subsets, unions, and intersections" },
      { id: 3, title: "The Real Number System", slug: "real-numbers", description: "Field axioms, order axioms, and the completeness axiom" },
      { id: 4, title: "Mathematical Induction", slug: "induction", description: "Proof by induction and the well-ordering principle" },
      { id: 5, title: "Summation Notation", slug: "summation", description: "Sigma notation and absolute values" },
    ],
  },
  // ==========================================================================
  // INTEGRAL CALCULUS
  // ==========================================================================
  {
    id: 2,
    title: "The Concepts of Integral Calculus",
    slug: "integral-calculus",
    sections: [
      { id: 6, title: "Cartesian Geometry and Functions", slug: "cartesian-functions", description: "Coordinate systems and the definition of functions" },
      { id: 7, title: "The Concept of Area", slug: "concept-of-area", description: "Area as a set function with key properties" },
      { id: 8, title: "Step Functions and Partitions", slug: "step-functions", description: "Partitions, step functions, and their operations" },
      { id: 9, title: "The Integral for Step Functions", slug: "integral-step-functions", description: "Defining the integral and its properties for step functions" },
      { id: 10, title: "Upper and Lower Integrals", slug: "upper-lower-integrals", description: "Extending integration to more general functions" },
      { id: 11, title: "Monotonic Functions", slug: "monotonic-functions", description: "Integrability of bounded monotonic functions" },
      { id: 12, title: "Basic Properties of the Integral", slug: "integral-properties", description: "Linearity, additivity, and comparison properties" },
    ],
  },
  // ==========================================================================
  // APPLICATIONS OF INTEGRATION
  // ==========================================================================
  {
    id: 3,
    title: "Applications of Integration",
    slug: "integration-applications",
    sections: [
      { id: 13, title: "Area Between Curves", slug: "area-between-curves", description: "Computing areas between two graphs" },
      { id: 14, title: "Trigonometric Functions", slug: "trig-functions", description: "Sine and cosine defined via integration" },
      { id: 15, title: "Polar Coordinates", slug: "polar-coordinates", description: "Polar coordinate systems and area integrals" },
      { id: 16, title: "Volumes of Revolution", slug: "volumes", description: "Computing volumes using integration" },
      { id: 17, title: "Work and Average Value", slug: "work-average", description: "Physical applications: work and average value of functions" },
      { id: 18, title: "Indefinite Integrals", slug: "indefinite-integrals", description: "The integral as a function of the upper limit" },
    ],
  },
  // ==========================================================================
  // CONTINUOUS FUNCTIONS
  // ==========================================================================
  {
    id: 4,
    title: "Continuous Functions",
    slug: "continuous-functions",
    sections: [
      { id: 19, title: "Limits and Continuity", slug: "limits-continuity", description: "Definition of limits and continuous functions" },
      { id: 20, title: "Basic Limit Theorems", slug: "limit-theorems", description: "Algebraic properties of limits and continuity" },
      { id: 21, title: "Composite Functions", slug: "composite-functions", description: "Continuity of composite functions" },
      { id: 22, title: "Bolzano's Theorem", slug: "bolzano-theorem", description: "The intermediate value theorem for continuous functions" },
      { id: 23, title: "Inverses of Functions", slug: "inverse-functions", description: "Properties preserved by inversion" },
      { id: 24, title: "Extreme Value Theorem", slug: "extreme-value-theorem", description: "Continuous functions on closed intervals attain extrema" },
      { id: 25, title: "Uniform Continuity", slug: "uniform-continuity", description: "The small-span theorem and integrability" },
    ],
  },
  // ==========================================================================
  // DIFFERENTIAL CALCULUS
  // ==========================================================================
  {
    id: 5,
    title: "Differential Calculus",
    slug: "differential-calculus",
    sections: [
      { id: 26, title: "Historical Introduction to Derivatives", slug: "derivative-history", description: "Velocity problems and the birth of differential calculus" },
      { id: 27, title: "The Derivative", slug: "derivative-definition", description: "Definition of the derivative and basic examples" },
      { id: 28, title: "Algebra of Derivatives", slug: "derivative-algebra", description: "Sum, product, and quotient rules" },
      { id: 29, title: "Geometric Interpretation", slug: "derivative-geometry", description: "The derivative as slope of the tangent line" },
      { id: 30, title: "The Chain Rule", slug: "chain-rule", description: "Differentiating composite functions" },
      { id: 31, title: "Related Rates", slug: "related-rates", description: "Applications of the chain rule and implicit differentiation" },
      { id: 32, title: "Extrema of Functions", slug: "extrema", description: "Finding maximum and minimum values" },
      { id: 33, title: "Mean Value Theorem", slug: "mean-value-theorem", description: "The mean value theorem and its applications" },
      { id: 34, title: "Curve Sketching", slug: "curve-sketching", description: "Using derivatives to analyze and sketch curves" },
    ],
  },
  // ==========================================================================
  // INTEGRATION AND DIFFERENTIATION
  // ==========================================================================
  {
    id: 6,
    title: "Integration and Differentiation",
    slug: "integration-differentiation",
    sections: [
      { id: 35, title: "First Fundamental Theorem", slug: "ftc-1", description: "The derivative of an indefinite integral" },
      { id: 36, title: "Second Fundamental Theorem", slug: "ftc-2", description: "Primitive functions and evaluation of integrals" },
      { id: 37, title: "Integration by Substitution", slug: "substitution", description: "The substitution method for integration" },
      { id: 38, title: "Integration by Parts", slug: "integration-by-parts", description: "The product rule in reverse" },
    ],
  },
  // ==========================================================================
  // TRANSCENDENTAL FUNCTIONS
  // ==========================================================================
  {
    id: 7,
    title: "Logarithm, Exponential, and Inverse Trig Functions",
    slug: "transcendental-functions",
    sections: [
      { id: 39, title: "The Natural Logarithm", slug: "natural-log", description: "Defining the logarithm as an integral" },
      { id: 40, title: "Properties of Logarithms", slug: "log-properties", description: "Functional equations and logarithms to any base" },
      { id: 41, title: "The Exponential Function", slug: "exponential", description: "The inverse of the logarithm and powers of e" },
      { id: 42, title: "Exponential Growth and Decay", slug: "exp-growth", description: "Differentiation and integration with exponentials" },
      { id: 43, title: "Hyperbolic Functions", slug: "hyperbolic", description: "Sinh, cosh, and related functions" },
      { id: 44, title: "Inverse Trigonometric Functions", slug: "inverse-trig", description: "Arcsin, arccos, arctan and their derivatives" },
      { id: 45, title: "Integration by Partial Fractions", slug: "partial-fractions", description: "Decomposing rational functions for integration" },
    ],
  },
  // ==========================================================================
  // POLYNOMIAL APPROXIMATIONS
  // ==========================================================================
  {
    id: 8,
    title: "Polynomial Approximations",
    slug: "polynomial-approximations",
    sections: [
      { id: 46, title: "Taylor Polynomials", slug: "taylor-polynomials", description: "Approximating functions with polynomials" },
      { id: 47, title: "Taylor's Formula with Remainder", slug: "taylor-remainder", description: "Error estimates for Taylor approximations" },
      { id: 48, title: "The o-Notation", slug: "little-o", description: "Asymptotic notation and error analysis" },
      { id: 49, title: "Indeterminate Forms", slug: "indeterminate-forms", description: "Applying Taylor polynomials to limits" },
      { id: 50, title: "L'Hopital's Rule", slug: "lhopital", description: "Computing limits of indeterminate forms" },
      { id: 51, title: "Infinite Limits", slug: "infinite-limits", description: "Behavior of log x and e^x for large x" },
    ],
  },
  // ==========================================================================
  // DIFFERENTIAL EQUATIONS
  // ==========================================================================
  {
    id: 9,
    title: "Introduction to Differential Equations",
    slug: "differential-equations",
    sections: [
      { id: 52, title: "Basic Concepts", slug: "ode-basics", description: "Terminology, notation, and first examples" },
      { id: 53, title: "First-Order Linear Equations", slug: "first-order-linear", description: "Solving y' + P(x)y = Q(x)" },
      { id: 54, title: "Physical Applications", slug: "ode-applications", description: "Growth, decay, and mixing problems" },
      { id: 55, title: "Second-Order Linear Equations", slug: "second-order-linear", description: "Equations with constant coefficients" },
      { id: 56, title: "Homogeneous Equations", slug: "homogeneous-ode", description: "Solutions of y'' + ay' + by = 0" },
      { id: 57, title: "Nonhomogeneous Equations", slug: "nonhomogeneous", description: "Particular solutions and the method of undetermined coefficients" },
      { id: 58, title: "Direction Fields", slug: "direction-fields", description: "Integral curves and qualitative analysis" },
      { id: 59, title: "Separable Equations", slug: "separable", description: "Separation of variables technique" },
    ],
  },
  // ==========================================================================
  // COMPLEX NUMBERS
  // ==========================================================================
  {
    id: 10,
    title: "Complex Numbers",
    slug: "complex-numbers",
    sections: [
      { id: 60, title: "Complex Number System", slug: "complex-intro", description: "Definition, field properties, and the imaginary unit" },
      { id: 61, title: "Geometric Interpretation", slug: "complex-geometry", description: "Modulus, argument, and the complex plane" },
      { id: 62, title: "Complex Exponentials", slug: "complex-exp", description: "Euler's formula and polar form" },
      { id: 63, title: "Complex-Valued Functions", slug: "complex-functions", description: "Differentiation and integration of complex functions" },
    ],
  },
  // ==========================================================================
  // SEQUENCES AND SERIES
  // ==========================================================================
  {
    id: 11,
    title: "Sequences, Series, and Improper Integrals",
    slug: "sequences-series",
    sections: [
      { id: 64, title: "Sequences", slug: "sequences", description: "Convergence, monotonicity, and Zeno's paradox" },
      { id: 65, title: "Infinite Series", slug: "infinite-series", description: "Partial sums, convergence, and the geometric series" },
      { id: 66, title: "Convergence Tests", slug: "convergence-tests", description: "Comparison, integral, root, and ratio tests" },
      { id: 67, title: "Alternating Series", slug: "alternating-series", description: "Leibniz test and conditional vs absolute convergence" },
      { id: 68, title: "Improper Integrals", slug: "improper-integrals", description: "Integrals with infinite limits or discontinuities" },
    ],
  },
  // ==========================================================================
  // SEQUENCES AND SERIES OF FUNCTIONS
  // ==========================================================================
  {
    id: 12,
    title: "Sequences and Series of Functions",
    slug: "function-series",
    sections: [
      { id: 69, title: "Pointwise Convergence", slug: "pointwise-convergence", description: "Convergence of sequences of functions at each point" },
      { id: 70, title: "Uniform Convergence", slug: "uniform-convergence", description: "Uniform convergence and its properties" },
      { id: 71, title: "Power Series", slug: "power-series", description: "Circle of convergence and properties" },
      { id: 72, title: "Taylor Series", slug: "taylor-series", description: "Representing functions as power series" },
      { id: 73, title: "Binomial Series", slug: "binomial-series", description: "Power series for (1+x)^a" },
    ],
  },
  // ==========================================================================
  // VECTOR ALGEBRA
  // ==========================================================================
  {
    id: 13,
    title: "Vector Algebra",
    slug: "vector-algebra",
    sections: [
      { id: 74, title: "Vectors in n-Space", slug: "vectors-intro", description: "The vector space of n-tuples of real numbers" },
      { id: 75, title: "Dot Product", slug: "dot-product", description: "Inner product, length, and orthogonality" },
      { id: 76, title: "Projections and Angles", slug: "projections", description: "Projecting vectors and measuring angles" },
      { id: 77, title: "Linear Span", slug: "linear-span", description: "Spanning sets and linear combinations" },
      { id: 78, title: "Linear Independence", slug: "linear-independence", description: "Independence, dependence, and bases" },
    ],
  },
  // ==========================================================================
  // ANALYTIC GEOMETRY
  // ==========================================================================
  {
    id: 14,
    title: "Applications to Analytic Geometry",
    slug: "analytic-geometry",
    sections: [
      { id: 79, title: "Lines in n-Space", slug: "lines", description: "Parametric equations for lines" },
      { id: 80, title: "Planes", slug: "planes", description: "Planes in Euclidean space and normal vectors" },
      { id: 81, title: "Cross Product", slug: "cross-product", description: "The cross product and scalar triple product" },
      { id: 82, title: "Conic Sections", slug: "conics", description: "Ellipses, parabolas, and hyperbolas" },
    ],
  },
  // ==========================================================================
  // VECTOR-VALUED FUNCTIONS
  // ==========================================================================
  {
    id: 15,
    title: "Calculus of Vector-Valued Functions",
    slug: "vector-calculus",
    sections: [
      { id: 83, title: "Vector Functions", slug: "vector-functions", description: "Limits, derivatives, and integrals of vector functions" },
      { id: 84, title: "Curves and Tangency", slug: "curves-tangency", description: "Tangent vectors and applications to curves" },
      { id: 85, title: "Velocity and Acceleration", slug: "velocity-acceleration", description: "Applications to curvilinear motion" },
      { id: 86, title: "Arc Length", slug: "arc-length", description: "Definition and computation of arc length" },
      { id: 87, title: "Curvature", slug: "curvature", description: "Curvature, unit tangent, and principal normal" },
      { id: 88, title: "Planetary Motion", slug: "planetary-motion", description: "Kepler's laws and orbital mechanics" },
    ],
  },
  // ==========================================================================
  // LINEAR SPACES
  // ==========================================================================
  {
    id: 16,
    title: "Linear Spaces",
    slug: "linear-spaces",
    sections: [
      { id: 89, title: "Definition of Linear Spaces", slug: "linear-space-def", description: "Axioms and examples of linear spaces" },
      { id: 90, title: "Subspaces", slug: "subspaces", description: "Subspaces and their properties" },
      { id: 91, title: "Bases and Dimension", slug: "bases-dimension", description: "Finite-dimensional spaces and dimension" },
      { id: 92, title: "Inner Product Spaces", slug: "inner-product-spaces", description: "Euclidean spaces and norms" },
      { id: 93, title: "Orthogonality", slug: "orthogonality", description: "Orthogonal sets and the Gram-Schmidt process" },
      { id: 94, title: "Best Approximation", slug: "best-approximation", description: "Projections and least squares" },
    ],
  },
  // ==========================================================================
  // LINEAR TRANSFORMATIONS
  // ==========================================================================
  {
    id: 17,
    title: "Linear Transformations and Matrices",
    slug: "linear-transformations",
    sections: [
      { id: 95, title: "Linear Transformations", slug: "linear-trans-def", description: "Definition, null space, and range" },
      { id: 96, title: "Nullity and Rank", slug: "nullity-rank", description: "The rank-nullity theorem" },
      { id: 97, title: "Matrix Representations", slug: "matrix-repr", description: "Representing transformations with matrices" },
      { id: 98, title: "Matrix Algebra", slug: "matrix-algebra", description: "Addition and multiplication of matrices" },
      { id: 99, title: "Systems of Linear Equations", slug: "linear-systems", description: "Solving Ax = b using matrices" },
      { id: 100, title: "Matrix Inverses", slug: "matrix-inverses", description: "Computing inverses of square matrices" },
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getSectionById(id: number): Section | undefined {
  for (const part of curriculum) {
    const section = part.sections.find((s) => s.id === id);
    if (section) return section;
  }
  return undefined;
}

export function getPartBySectionId(sectionId: number): Part | undefined {
  return curriculum.find((part) =>
    part.sections.some((section) => section.id === sectionId)
  );
}

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

export function getTotalSections(): number {
  return curriculum.reduce((total, part) => total + part.sections.length, 0);
}

export function getAllSections(): Section[] {
  return curriculum.flatMap((part) => part.sections);
}

export function getSectionIndex(sectionId: number): number {
  const allSections = getAllSections();
  return allSections.findIndex((s) => s.id === sectionId);
}
