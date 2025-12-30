/**
 * Course and Section Data for Magic Internet Math Hub
 *
 * @typedef {Object} Section
 * @property {string} id - Unique section identifier
 * @property {string} title - Display title
 * @property {string} subtitle - Section description
 * @property {string} style - CSS style class (featured, beginner, subject)
 *
 * @typedef {Object} Course
 * @property {string} id - Unique course identifier
 * @property {string} title - Display title
 * @property {string} description - Course description
 * @property {string} icon - Emoji or text icon
 * @property {string} url - Course URL
 * @property {string[]} tags - Meta tags for display
 * @property {string[]} sections - Section IDs where course appears
 * @property {number} totalSections - Total sections for progress tracking
 * @property {string} progressPrefix - Prefix for localStorage section IDs
 * @property {string} [leaderboardUrl] - Leaderboard URL
 * @property {string} [shortName] - Short name for leaderboard links
 * @property {boolean} [external] - True if link opens in new tab
 * @property {string} [progressGradient] - CSS gradient for progress bar
 */

/** @type {Section[]} */
export const SECTIONS = [
  {
    id: 'featured',
    title: 'Featured',
    subtitle: 'Our flagship courses',
    style: 'featured'
  },
  {
    id: 'beginners',
    title: 'Beginners',
    subtitle: 'Start here to build a strong foundation',
    style: 'beginner'
  },
  {
    id: 'calculus',
    title: 'Calculus',
    subtitle: 'Continuous mathematics and analysis',
    style: 'subject'
  },
  {
    id: 'algebra',
    title: 'Algebra',
    subtitle: 'Algebraic structures and systems',
    style: 'subject'
  },
  {
    id: 'geometry',
    title: 'Geometry',
    subtitle: 'Euclidean and non-Euclidean geometry',
    style: 'subject'
  },
  {
    id: 'history',
    title: 'Math History',
    subtitle: 'The stories behind the mathematics',
    style: 'subject'
  },
];

/** @type {Course[]} */
export const COURSES = [
  // FEATURED
  {
    id: 'crypto',
    title: 'Cryptography Math',
    description: 'Learn the mathematics that powers modern encryption. From modular arithmetic to RSA and elliptic curves, discover how math keeps the internet secure.',
    icon: '🔐',
    url: 'cryptography/',
    tags: ['12 Lessons', 'Interactive'],
    sections: ['featured'],
    totalSections: 12,
    progressPrefix: 'crypto:',
    leaderboardUrl: 'cryptography/#/leaderboard',
    shortName: 'Cryptography',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'islr',
    title: 'Intro to Statistical Learning',
    description: "Master machine learning fundamentals with this interactive course based on James et al.'s acclaimed textbook. From linear regression to deep learning, with interactive visualizations.",
    icon: '📊',
    url: 'https://islr.vercel.app',
    tags: ['13 Chapters', '62 Sections'],
    sections: ['featured'],
    totalSections: 62,
    progressPrefix: 'islr:',
    leaderboardUrl: 'https://islr.vercel.app/#/leaderboard',
    shortName: 'Statistical Learning',
    external: true,
    progressGradient: 'linear-gradient(90deg, #34d399, #6ee7b7)',
  },

  // BEGINNERS
  {
    id: 'calc_easy',
    title: 'Calculus Made Easy',
    description: "Master calculus through Silvanus P. Thompson's timeless classic. From functions to integration, learn calculus the way it was meant to be taught—simply and clearly.",
    icon: '∂',
    url: 'https://calceasy-green.vercel.app',
    tags: ['26 Sections', 'Interactive'],
    sections: ['beginners', 'calculus'],
    totalSections: 26,
    progressPrefix: 'calc_easy:',
    leaderboardUrl: 'https://calceasy-green.vercel.app/#/leaderboard',
    shortName: 'Calculus Easy',
    external: true,
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },
  {
    id: 'ba',
    title: 'Basic Algebra',
    description: 'Master the fundamentals of algebra through interactive lessons and visualizations. From integers to complex numbers, covering equations, functions, and more.',
    icon: 'x²',
    url: 'https://basic-algebra.vercel.app',
    tags: ['17 Chapters', '64 Sections'],
    sections: ['beginners', 'algebra'],
    totalSections: 64,
    progressPrefix: 'ba:',
    leaderboardUrl: 'https://basic-algebra.vercel.app/#/leaderboard',
    shortName: 'Basic Algebra',
    external: true,
    progressGradient: 'linear-gradient(90deg, #22c55e, #4ade80)',
  },
  {
    id: 'wm',
    title: 'Why Math?',
    description: "Discover the real reasons behind mathematical concepts with R.D. Driver's classic textbook. From arithmetic to infinity, understand why math works the way it does.",
    icon: '📚',
    url: 'https://why-math.vercel.app',
    tags: ['8 Parts', '13 Sections'],
    sections: ['beginners'],
    totalSections: 13,
    progressPrefix: 'wm:',
    leaderboardUrl: 'https://why-math.vercel.app/#/leaderboard',
    shortName: 'Why Math?',
    external: true,
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },

  // CALCULUS
  {
    id: 'calc1',
    title: 'Intermediate Calculus',
    description: "One-variable calculus with an introduction to linear algebra. Based on Tom M. Apostol's classic textbook, covering integration, differentiation, and infinite series.",
    icon: '∫',
    url: 'calc1-deploy/',
    tags: ['17 Parts', '101 Sections'],
    sections: ['calculus'],
    totalSections: 101,
    progressPrefix: 'calc1:',
    leaderboardUrl: 'calc1-deploy/#/leaderboard',
    shortName: 'Intermediate Calculus',
    progressGradient: 'linear-gradient(90deg, #f97316, #fb923c)',
  },
  {
    id: 'calc_lib_art',
    title: 'Calculus as a Liberal Art',
    description: 'Explore calculus through a liberal arts lens, emphasizing concepts, history, and connections to broader human knowledge rather than computational techniques.',
    icon: '📚',
    url: 'https://calc-lib-art.vercel.app',
    tags: ['Interactive', 'Conceptual'],
    sections: ['calculus'],
    totalSections: 10,
    progressPrefix: 'calc_lib_art:',
    leaderboardUrl: 'https://calc-lib-art.vercel.app/#/leaderboard',
    shortName: 'Calc Liberal Art',
    external: true,
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'ra',
    title: 'Introduction to Real Analysis',
    description: "A rigorous introduction to real analysis covering limits, continuity, differentiation, and integration through formal proofs. Based on Kenneth A. Ross's Elementary Analysis.",
    icon: '📐',
    url: 'https://real-analysis-eta.vercel.app',
    tags: ['4 Parts', '15 Sections'],
    sections: ['calculus'],
    totalSections: 15,
    progressPrefix: 'ra:',
    leaderboardUrl: 'https://real-analysis-eta.vercel.app/#/leaderboard',
    shortName: 'Real Analysis',
    external: true,
    progressGradient: 'linear-gradient(90deg, #10b981, #34d399)',
  },

  // ALGEBRA (Note: Basic Algebra also appears here via sections array)
  {
    id: 'linalg',
    title: 'Linear Algebra',
    description: "Master vectors, matrices, and linear transformations. Based on Gilbert Strang's Introduction to Linear Algebra, with interactive visualizations.",
    icon: '📐',
    iconImage: 'images/strang-planes.svg',
    url: 'https://linalg-pink.vercel.app',
    tags: ['Vectors & Matrices', 'Interactive'],
    sections: ['algebra'],
    totalSections: 19,
    progressPrefix: 'linalg:',
    leaderboardUrl: 'https://linalg-pink.vercel.app/#/leaderboard',
    shortName: 'Linear Algebra',
    external: true,
    progressGradient: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
  },
  {
    id: 'advlinalg',
    title: 'Advanced Linear Algebra',
    description: "Deep dive into abstract linear algebra. Based on Hoffman & Kunze's classic text, covering vector spaces, linear transformations, and canonical forms.",
    icon: '\u2133',
    url: 'https://advanced-linalg.vercel.app',
    tags: ['10 Chapters', '59 Sections'],
    sections: ['algebra'],
    totalSections: 59,
    progressPrefix: 'advlinalg:',
    leaderboardUrl: 'https://advanced-linalg.vercel.app/#/leaderboard',
    shortName: 'Advanced LinAlg',
    external: true,
    progressGradient: 'linear-gradient(90deg, #a855f7, #c084fc)',
  },
  {
    id: 'aa',
    title: 'Abstract Algebra',
    description: 'Explore the elegant world of algebraic structures. Groups, rings, fields, and the deep patterns underlying all of mathematics.',
    icon: 'G',
    url: 'aa/',
    tags: ['Groups & Rings', 'Fields'],
    sections: ['algebra'],
    totalSections: 50,
    progressPrefix: 'aa:',
    leaderboardUrl: 'aa/#/leaderboard',
    shortName: 'Abstract Algebra',
    progressGradient: 'linear-gradient(90deg, #f97316, #fb923c)',
  },

  // GEOMETRY
  {
    id: 'four_pillars',
    title: 'The Four Pillars of Geometry',
    description: "Explore geometry from four perspectives: Euclidean constructions, coordinates, projective geometry, and transformations. Based on John Stillwell's classic textbook.",
    icon: '🔺',
    url: 'https://four-pillars.vercel.app',
    tags: ['8 Chapters', '66 Sections'],
    sections: ['geometry'],
    totalSections: 66,
    progressPrefix: 'four_pillars:',
    leaderboardUrl: 'https://four-pillars.vercel.app/#/leaderboard',
    shortName: 'Four Pillars',
    external: true,
    progressGradient: 'linear-gradient(90deg, #ec4899, #f472b6)',
  },

  // MATH HISTORY
  {
    id: 'mom',
    title: 'Men of Mathematics',
    description: "Journey through 2500 years of mathematical history based on E.T. Bell's classic. From Zeno to Poincaré, discover the lives and ideas of history's greatest mathematicians.",
    icon: '📜',
    url: 'men-of-math/',
    tags: ['34 Sections', 'Interactive'],
    sections: ['history'],
    totalSections: 34,
    progressPrefix: 'mom:',
    leaderboardUrl: 'men-of-math/#/leaderboard',
    shortName: 'Men of Math',
    progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  },
];

/**
 * Get courses for a specific section
 * @param {string} sectionId
 * @returns {Course[]}
 */
export function getCoursesForSection(sectionId) {
  return COURSES.filter(course => course.sections.includes(sectionId));
}

/**
 * Get a course by ID
 * @param {string} courseId
 * @returns {Course | undefined}
 */
export function getCourseById(courseId) {
  return COURSES.find(course => course.id === courseId);
}

/**
 * Get all unique courses (no duplicates)
 * @returns {Course[]}
 */
export function getAllCourses() {
  return COURSES;
}
