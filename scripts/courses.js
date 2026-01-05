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
  {
    id: 'seminal',
    title: 'Seminal Works',
    subtitle: 'Foundational texts that shaped mathematics',
    style: 'subject'
  },
  {
    id: 'austrian',
    title: 'Austrian Economics',
    subtitle: 'The study of human action and market processes',
    style: 'subject'
  },
  {
    id: 'discrete',
    title: 'Discrete Mathematics',
    subtitle: 'Combinatorics, graph theory, and discrete structures',
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
    url: 'https://cryptography-xi.vercel.app/',
    tags: ['12 Lessons', 'Interactive'],
    sections: ['featured'],
    totalSections: 12,
    progressPrefix: 'crypto:',
    leaderboardUrl: 'https://cryptography-xi.vercel.app/#/leaderboard',
    shortName: 'Cryptography',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'islr',
    title: 'Intro to Statistical Learning',
    description: "Master machine learning fundamentals with this interactive course based on James et al.'s acclaimed textbook. From linear regression to deep learning, with interactive visualizations.",
    icon: '📊',
    url: 'islr-deploy/',
    tags: ['13 Chapters', '62 Sections'],
    sections: ['featured'],
    totalSections: 62,
    progressPrefix: 'islr:',
    leaderboardUrl: 'islr-deploy/#/leaderboard',
    shortName: 'Statistical Learning',
    progressGradient: 'linear-gradient(90deg, #34d399, #6ee7b7)',
  },

  // BEGINNERS
  {
    id: 'calc_easy',
    title: 'Beginner Calculus',
    description: "Master calculus through Silvanus P. Thompson's timeless classic. From functions to integration, learn calculus the way it was meant to be taught—simply and clearly.",
    icon: '∂',
    url: 'calceasy-deploy/',
    tags: ['26 Sections', 'Interactive'],
    sections: ['beginners', 'calculus'],
    totalSections: 26,
    progressPrefix: 'calc_easy:',
    leaderboardUrl: 'calceasy-deploy/#/leaderboard',
    shortName: 'Beginner Calculus',
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },
  {
    id: 'ba',
    title: 'Basic Algebra',
    description: 'Master the fundamentals of algebra through interactive lessons and visualizations. From integers to complex numbers, covering equations, functions, and more.',
    icon: 'x²',
    url: 'basic-algebra-deploy/',
    tags: ['17 Chapters', '64 Sections'],
    sections: ['beginners', 'algebra'],
    totalSections: 64,
    progressPrefix: 'ba:',
    leaderboardUrl: 'basic-algebra-deploy/#/leaderboard',
    shortName: 'Basic Algebra',
    progressGradient: 'linear-gradient(90deg, #22c55e, #4ade80)',
  },
  {
    id: 'wm',
    title: 'Why Math?',
    description: "Discover the real reasons behind mathematical concepts with R.D. Driver's classic textbook. From arithmetic to infinity, understand why math works the way it does.",
    icon: '📚',
    url: 'why-math-deploy/',
    tags: ['8 Parts', '13 Sections'],
    sections: ['beginners'],
    totalSections: 13,
    progressPrefix: 'wm:',
    leaderboardUrl: 'why-math-deploy/#/leaderboard',
    shortName: 'Why Math?',
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
    url: 'calc-lib-art-deploy/',
    tags: ['Interactive', 'Conceptual'],
    sections: ['calculus'],
    totalSections: 10,
    progressPrefix: 'calc_lib_art:',
    leaderboardUrl: 'calc-lib-art-deploy/#/leaderboard',
    shortName: 'Calc Liberal Art',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'ra',
    title: 'Introduction to Real Analysis',
    description: "A rigorous introduction to real analysis covering limits, continuity, differentiation, and integration through formal proofs. Based on Kenneth A. Ross's Elementary Analysis.",
    icon: '📐',
    url: 'ra-deploy/',
    tags: ['4 Parts', '15 Sections'],
    sections: ['calculus'],
    totalSections: 15,
    progressPrefix: 'ra:',
    leaderboardUrl: 'ra-deploy/#/leaderboard',
    shortName: 'Real Analysis',
    progressGradient: 'linear-gradient(90deg, #10b981, #34d399)',
  },

  // ALGEBRA (Note: Basic Algebra also appears here via sections array)
  {
    id: 'linalg',
    title: 'Linear Algebra',
    description: "Master vectors, matrices, and linear transformations. Based on Gilbert Strang's Introduction to Linear Algebra, with interactive visualizations.",
    icon: '📐',
    iconImage: 'images/strang-planes.svg',
    url: 'linalg-deploy/',
    tags: ['Vectors & Matrices', 'Interactive'],
    sections: ['algebra'],
    totalSections: 19,
    progressPrefix: 'linalg:',
    leaderboardUrl: 'linalg-deploy/#/leaderboard',
    shortName: 'Linear Algebra',
    progressGradient: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
  },
  {
    id: 'advlinalg',
    title: 'Advanced Linear Algebra',
    description: "Deep dive into abstract linear algebra. Based on Hoffman & Kunze's classic text, covering vector spaces, linear transformations, and canonical forms.",
    icon: '\u2133',
    url: 'advlinalg-deploy/',
    tags: ['10 Chapters', '59 Sections'],
    sections: ['algebra'],
    totalSections: 59,
    progressPrefix: 'advlinalg:',
    leaderboardUrl: 'advlinalg-deploy/#/leaderboard',
    shortName: 'Advanced LinAlg',
    progressGradient: 'linear-gradient(90deg, #a855f7, #c084fc)',
  },
  {
    id: 'aa',
    title: 'Abstract Algebra',
    description: 'Explore the elegant world of algebraic structures. Groups, rings, fields, and the deep patterns underlying all of mathematics.',
    icon: 'G',
    url: 'aa-deploy/',
    tags: ['Groups & Rings', 'Fields'],
    sections: ['algebra'],
    totalSections: 50,
    progressPrefix: 'aa:',
    leaderboardUrl: 'aa-deploy/#/leaderboard',
    shortName: 'Abstract Algebra',
    progressGradient: 'linear-gradient(90deg, #f97316, #fb923c)',
  },

  // GEOMETRY
  {
    id: 'four_pillars',
    title: 'The Four Pillars of Geometry',
    description: "Explore geometry from four perspectives: Euclidean constructions, coordinates, projective geometry, and transformations. Based on John Stillwell's classic textbook.",
    icon: '🔺',
    url: 'four-pillars-deploy/',
    tags: ['8 Chapters', '66 Sections'],
    sections: ['geometry'],
    totalSections: 66,
    progressPrefix: 'four_pillars:',
    leaderboardUrl: 'four-pillars-deploy/#/leaderboard',
    shortName: 'Four Pillars',
    progressGradient: 'linear-gradient(90deg, #ec4899, #f472b6)',
  },

  // SEMINAL WORKS
  {
    id: 'euclid',
    title: "Euclid's Elements",
    description: "The foundational text of Western mathematics. Study all 13 books covering plane geometry, proportions, number theory, and solid geometry through interactive propositions and proofs.",
    icon: '📜',
    url: 'https://euclid-deploy.vercel.app/',
    tags: ['13 Books', '219 Sections'],
    sections: ['seminal', 'geometry'],
    totalSections: 219,
    progressPrefix: 'euclid:',
    leaderboardUrl: 'https://euclid-deploy.vercel.app/#/leaderboard',
    shortName: 'Elements',
    progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)',
  },
  {
    id: 'gauss',
    title: "Disquisitiones Arithmeticae",
    description: "Gauss's foundational 1801 treatise that systematized number theory. Study congruences, quadratic residues, quadratic forms, and the construction of regular polygons.",
    icon: '🔢',
    url: 'gauss-deploy/',
    tags: ['7 Sections', 'Number Theory'],
    sections: ['seminal'],
    totalSections: 7,
    progressPrefix: 'gauss:',
    leaderboardUrl: 'gauss-deploy/#/leaderboard',
    shortName: 'Disquisitiones',
    progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)',
  },

  // MATH HISTORY
  {
    id: 'mom',
    title: 'Men of Mathematics',
    description: "Journey through 2500 years of mathematical history based on E.T. Bell's classic. From Zeno to Poincaré, discover the lives and ideas of history's greatest mathematicians.",
    icon: '📜',
    url: 'mom-deploy/',
    tags: ['34 Sections', 'Interactive'],
    sections: ['history'],
    totalSections: 34,
    progressPrefix: 'mom:',
    leaderboardUrl: 'mom-deploy/#/leaderboard',
    shortName: 'Men of Math',
    progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  },
  {
    id: 'thales',
    title: 'The Heritage of Thales',
    description: "Journey through 2,500 years of mathematical history and foundations. From ancient Egypt through Greek mathematics, the Renaissance, and into modern foundations including set theory, logic, and category theory.",
    icon: '🏛️',
    url: 'thales-deploy/',
    tags: ['11 Parts', '66 Sections'],
    sections: ['history'],
    totalSections: 66,
    progressPrefix: 'thales:',
    leaderboardUrl: 'thales-deploy/#/leaderboard',
    shortName: 'Heritage of Thales',
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },

  // AUSTRIAN ECONOMICS
  {
    id: 'human_action',
    title: 'Human Action',
    description: "Ludwig von Mises' foundational treatise on economics. A comprehensive study of human action, market processes, and the Austrian school of economic thought.",
    icon: '📖',
    url: 'human-action-deploy/',
    tags: ['8 Parts', '40 Sections'],
    sections: ['austrian'],
    totalSections: 40,
    progressPrefix: 'human_action:',
    leaderboardUrl: 'human-action-deploy/#/leaderboard',
    shortName: 'Human Action',
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },
  {
    id: 'atlas_shrugged',
    title: 'Atlas Shrugged',
    description: "Ayn Rand's magnum opus exploring individualism, reason, and productive achievement. A philosophical novel about what happens when the world's producers go on strike.",
    icon: '🔥',
    url: 'https://atlas-shrugged-deploy.vercel.app/',
    tags: ['3 Parts', '30 Sections'],
    sections: ['austrian'],
    totalSections: 30,
    progressPrefix: 'atlas_shrugged:',
    leaderboardUrl: 'https://atlas-shrugged-deploy.vercel.app/#/leaderboard',
    shortName: 'Atlas Shrugged',
    progressGradient: 'linear-gradient(90deg, #ef4444, #f97316)',
  },
  {
    id: 'man_econ_state',
    title: 'Man, Economy, and State',
    description: "Murray Rothbard's comprehensive treatise on Austrian economics. From the fundamentals of human action through money, production, and intervention to the vision of a free society.",
    icon: '⚖️',
    url: 'https://man-econ-state.vercel.app/',
    tags: ['6 Parts', '19 Sections'],
    sections: ['austrian'],
    totalSections: 19,
    progressPrefix: 'man_econ_state:',
    leaderboardUrl: 'https://man-econ-state.vercel.app/#/leaderboard',
    shortName: 'Man, Economy, State',
    progressGradient: 'linear-gradient(90deg, #10b981, #34d399)',
  },
  {
    id: 'road_to_serfdom',
    title: 'The Road to Serfdom',
    description: "F.A. Hayek's classic warning against central planning and collectivism. Explore how good intentions lead to tyranny, why the worst get on top, and the case for individual freedom.",
    icon: '🔗',
    url: 'https://road-to-serfdom-deploy.vercel.app/',
    tags: ['16 Sections', 'Interactive'],
    sections: ['austrian'],
    totalSections: 16,
    progressPrefix: 'road_to_serfdom:',
    leaderboardUrl: 'https://road-to-serfdom-deploy.vercel.app/#/leaderboard',
    shortName: 'Road to Serfdom',
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },

  // DISCRETE MATHEMATICS
  {
    id: 'west_graphs',
    title: 'Introduction to Graph Theory',
    description: "Master graph theory with Douglas B. West's classic textbook. From basic definitions through trees, matching, network flows, coloring, planarity, and random graphs with 10 interactive visualizations.",
    icon: '🕸️',
    url: 'https://west-graphs.vercel.app/',
    tags: ['8 Chapters', '28 Sections'],
    sections: ['discrete'],
    totalSections: 28,
    progressPrefix: 'west_graphs:',
    leaderboardUrl: 'https://west-graphs.vercel.app/#/leaderboard',
    shortName: 'Graph Theory',
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
