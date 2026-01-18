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
  {
    id: 'number_theory',
    title: 'Number Theory',
    subtitle: 'Integers, primes, and cryptographic foundations',
    style: 'subject'
  },
  {
    id: 'prob_stats',
    title: 'Probability and Statistics',
    subtitle: 'Random variables, distributions, and statistical inference',
    style: 'subject'
  },
  {
    id: 'games',
    title: 'Games',
    subtitle: 'Practice with competitive math challenges',
    style: 'featured'
  },
  {
    id: 'podcast_focus',
    title: 'Podcast Focus Subjects',
    subtitle: 'Deep dives into topics from our podcasts',
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
    id: 'frost',
    title: 'FROST: Threshold Signatures',
    description: 'Master Flexible Round-Optimized Schnorr Threshold Signatures - from mathematical foundations to Bitcoin applications.',
    icon: '🔐',
    url: 'frost-deploy/',
    tags: ['10 Parts', '69 Sections'],
    sections: ['featured', 'number_theory'],
    totalSections: 69,
    progressPrefix: 'frost:',
    leaderboardUrl: 'frost-deploy/#/leaderboard',
    shortName: 'FROST',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'islr',
    title: 'Intro to Statistical Learning',
    description: "Master machine learning fundamentals with this interactive course based on James et al.'s acclaimed textbook. From linear regression to deep learning, with interactive visualizations.",
    icon: '📊',
    url: 'islr-deploy/',
    tags: ['13 Chapters', '62 Sections'],
    sections: ['prob_stats'],
    totalSections: 62,
    progressPrefix: 'islr:',
    leaderboardUrl: 'islr-deploy/#/leaderboard',
    shortName: 'Statistical Learning',
    progressGradient: 'linear-gradient(90deg, #34d399, #6ee7b7)',
  },
  {
    id: 'bfi',
    title: 'Bitcoin for Institutions',
    description: "A comprehensive guide to institutional Bitcoin adoption. From treasury management to deferred compensation, learn how institutions can successfully integrate Bitcoin into their operations.",
    icon: '₿',
    url: 'https://bfi-deploy.vercel.app/',
    tags: ['3 Parts', '15 Sections'],
    sections: ['featured'],
    totalSections: 15,
    progressPrefix: 'bfi:',
    leaderboardUrl: 'https://bfi-deploy.vercel.app/#/leaderboard',
    shortName: 'BFI',
    progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)',
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
  {
    id: 'rudin',
    title: 'Principles of Mathematical Analysis',
    description: "The classic 'Baby Rudin' - a rigorous introduction to real analysis covering sequences, series, continuity, differentiation, integration, and Lebesgue theory.",
    icon: '∫',
    url: 'https://rudin-deploy.vercel.app/',
    tags: ['11 Parts', '86 Sections'],
    sections: ['calculus'],
    totalSections: 86,
    progressPrefix: 'rudin:',
    leaderboardUrl: 'https://rudin-deploy.vercel.app/#/leaderboard',
    shortName: 'Baby Rudin',
    progressGradient: 'linear-gradient(90deg, #06b6d4, #22d3ee)',
  },
  {
    id: 'tao-analysis-1',
    title: "Tao's Analysis I",
    description: "A rigorous introduction to real analysis by Terence Tao, building from the Peano axioms through the construction of real numbers, sequences, series, continuity, differentiation, and Riemann integration.",
    icon: 'ε',
    url: 'tao-analysis-1-deploy/',
    tags: ['13 Parts', '72 Sections'],
    sections: ['calculus', 'seminal'],
    totalSections: 72,
    progressPrefix: 'tao-analysis-1:',
    leaderboardUrl: 'tao-analysis-1-deploy/#/leaderboard',
    shortName: 'Tao Analysis I',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'tao2',
    title: "Tao's Analysis II",
    description: "The sequel to Analysis I, covering metric spaces, continuous functions, uniform convergence, power series, Fourier series, several variable calculus, Lebesgue measure, and Lebesgue integration.",
    icon: 'δ',
    url: 'tao2-deploy/',
    tags: ['8 Parts', '48 Sections'],
    sections: ['calculus', 'seminal'],
    totalSections: 48,
    progressPrefix: 'tao2:',
    leaderboardUrl: 'tao2-deploy/#/leaderboard',
    shortName: 'Tao Analysis II',
    progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
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
  {
    id: 'df',
    title: 'Abstract Algebra (Dummit & Foote)',
    description: "The definitive graduate-level abstract algebra textbook. Covers groups, rings, modules, fields, Galois theory, algebraic geometry, homological algebra, and representation theory.",
    icon: 'G',
    url: 'df-deploy/',
    tags: ['6 Parts', '95 Sections'],
    sections: ['algebra'],
    totalSections: 95,
    progressPrefix: 'df:',
    leaderboardUrl: 'df-deploy/#/leaderboard',
    shortName: 'Dummit-Foote',
    progressGradient: 'linear-gradient(90deg, #e11d48, #f43f5e)',
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
  {
    id: 'numbers_geometry',
    title: 'Numbers and Geometry',
    description: "Explore the deep connections between arithmetic and geometry. Based on John Stillwell's textbook, covering primes, Euclid, coordinates, Pythagorean triples, modular arithmetic, complex numbers, conics, and elementary functions.",
    icon: '🔢',
    url: 'numbers-geometry-deploy/',
    tags: ['9 Chapters', '79 Sections'],
    sections: ['geometry'],
    totalSections: 79,
    progressPrefix: 'numbers_geometry:',
    leaderboardUrl: 'numbers-geometry-deploy/#/leaderboard',
    shortName: 'Numbers & Geometry',
    progressGradient: 'linear-gradient(90deg, #14b8a6, #2dd4bf)',
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
  {
    id: 'only_the_strong_survive',
    title: 'Only The Strong Survive',
    description: "A philosophical, technical, and economic critique of prospects in crypto beyond Bitcoin. By Allen Farrington and Anders Larson.",
    icon: '₿',
    url: 'only-the-strong-survive-deploy/',
    tags: ['8 Parts', '20 Sections'],
    sections: ['seminal'],
    totalSections: 20,
    progressPrefix: 'only_the_strong_survive:',
    leaderboardUrl: 'only-the-strong-survive-deploy/#/leaderboard',
    shortName: 'Only The Strong',
    progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)',
  },
  {
    id: 'euler_intro',
    title: 'Introduction to the Analysis of the Infinite',
    description: "Euler's 1748 masterpiece on the theory of curved lines. Study algebraic and transcendental curves, from conic sections to surfaces, through the revolutionary analytical approach that transformed mathematics.",
    icon: '∞',
    url: 'https://euler-intro-deploy.vercel.app/',
    tags: ['5 Parts', '22 Sections'],
    sections: ['seminal'],
    totalSections: 22,
    progressPrefix: 'euler-intro:',
    leaderboardUrl: 'https://euler-intro-deploy.vercel.app/#/leaderboard',
    shortName: 'Euler Intro',
    progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)',
  },
  {
    id: 'saylor-diss',
    title: "Michael Saylor's Dissertation",
    description: "A Machiavellian Interpretation of Political Dynamics - applying system dynamics to model Machiavelli's political philosophy. Saylor's 1987 MIT thesis.",
    icon: '📚',
    url: 'https://saylor-diss-deploy.vercel.app/',
    tags: ['5 Parts', '21 Sections'],
    sections: ['seminal'],
    totalSections: 21,
    progressPrefix: 'saylor-diss:',
    leaderboardUrl: 'https://saylor-diss-deploy.vercel.app/#/leaderboard',
    shortName: 'Saylor Diss',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
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
  {
    id: 'math_history',
    title: 'Mathematics and Its History',
    description: "A journey through 4,000 years of mathematical history based on John Stillwell's classic textbook. From Pythagoras to Turing, explore how mathematical ideas evolved and interconnect.",
    icon: '📜',
    url: 'https://mathhistory.vercel.app/',
    tags: ['19 Chapters', '72 Sections'],
    sections: ['history'],
    totalSections: 72,
    progressPrefix: 'math_history:',
    leaderboardUrl: 'https://mathhistory.vercel.app/#/leaderboard',
    shortName: 'Stillwell',
    progressGradient: 'linear-gradient(90deg, #F59E0B, #D97706)',
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
    url: 'https://man-econ-state-deploy.vercel.app/',
    tags: ['6 Parts', '19 Sections'],
    sections: ['austrian'],
    totalSections: 19,
    progressPrefix: 'man_econ_state:',
    leaderboardUrl: 'https://man-econ-state-deploy.vercel.app/#/leaderboard',
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
  {
    id: 'orange_btc',
    title: 'Orange is the New Green',
    description: "The emergence of Bitcoin money market funds. Explore how Bitcoin's unique properties can be harnessed to create seizure-resistant deposit facilities with positive real yields.",
    icon: '🟠',
    url: 'https://orange-is-new-green.vercel.app/',
    tags: ['5 Parts', '15 Sections'],
    sections: ['austrian'],
    totalSections: 15,
    progressPrefix: 'orange_btc:',
    leaderboardUrl: 'https://orange-is-new-green.vercel.app/#/leaderboard',
    shortName: 'Orange is New Green',
    progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)',
  },
  {
    id: 'rothbard_controversies',
    title: 'Economic Controversies',
    description: "Murray Rothbard's analysis of economic fallacies and controversies. From methodology and the Austrian school through property, taxation, trade, money, and the socialist calculation debate.",
    icon: '⚖️',
    url: 'https://rothbard-deploy.vercel.app/',
    tags: ['8 Parts', '52 Sections'],
    sections: ['austrian'],
    totalSections: 52,
    progressPrefix: 'rothbard_controversies:',
    leaderboardUrl: 'https://rothbard-deploy.vercel.app/#/leaderboard',
    shortName: 'Economic Controversies',
    progressGradient: 'linear-gradient(90deg, #dc2626, #ef4444)',
  },

  // DISCRETE MATHEMATICS
  {
    id: 'west_graphs',
    title: 'Introduction to Graph Theory',
    description: "Master graph theory with Douglas B. West's classic textbook. From basic definitions through trees, matching, network flows, coloring, planarity, and random graphs with 10 interactive visualizations.",
    icon: '🕸️',
    url: 'west-graphs-deploy/',
    tags: ['8 Chapters', '28 Sections'],
    sections: ['discrete'],
    totalSections: 28,
    progressPrefix: 'west_graphs:',
    leaderboardUrl: 'west-graphs-deploy/#/leaderboard',
    shortName: 'Graph Theory',
    progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  },
  {
    id: 'coding_theory',
    title: 'Algebraic Coding Theory',
    description: "Master error-correcting codes and their algebraic foundations. From Hamming and BCH codes to Reed-Solomon and quadratic residue codes. Based on L.R. Vermani's textbook.",
    icon: '🔢',
    url: 'coding-theory-deploy/',
    tags: ['11 Chapters', '41 Sections'],
    sections: ['discrete'],
    totalSections: 41,
    progressPrefix: 'coding_theory:',
    leaderboardUrl: 'coding-theory-deploy/#/leaderboard',
    shortName: 'Coding Theory',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'intro-discrete',
    title: 'Intro to Discrete Math',
    description: "Numbers, groups, and codes - learn combinatorics, group theory, and error-correcting codes. Based on Humphreys & Prest's Cambridge textbook.",
    icon: '🔢',
    url: 'intro-discrete-deploy/',
    tags: ['6 Chapters', '26 Sections'],
    sections: ['discrete'],
    totalSections: 26,
    progressPrefix: 'intro-discrete:',
    leaderboardUrl: 'intro-discrete-deploy/#/leaderboard',
    shortName: 'Intro Discrete',
    progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  },

  // NUMBER THEORY
  {
    id: 'koblitz',
    title: 'Advanced Number Theory and Cryptography',
    description: "A rigorous course in number theory and its applications to cryptography. Based on Neal Koblitz's classic textbook, covering primality testing, factorization algorithms, elliptic curves, and modern cryptosystems.",
    icon: '🔑',
    url: 'koblitz-course-deploy/',
    tags: ['3 Parts', '22 Sections'],
    sections: ['number_theory'],
    totalSections: 22,
    progressPrefix: 'koblitz:',
    leaderboardUrl: 'koblitz-course-deploy/#/leaderboard',
    shortName: 'Koblitz',
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },

  // PROBABILITY AND STATISTICS
  {
    id: 'ross-prob',
    title: 'Probability',
    description: "Master probability theory with Sheldon Ross's classic textbook. From combinatorial analysis through random variables, expectation, and limit theorems.",
    icon: '🎲',
    url: 'ross-prob-deploy/',
    tags: ['10 Chapters', '66 Sections'],
    sections: ['prob_stats'],
    totalSections: 9,
    progressPrefix: 'ross-prob:',
    leaderboardUrl: 'ross-prob-deploy/#/leaderboard',
    shortName: 'Probability',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },

  // PODCAST FOCUS
  {
    id: 'lcn',
    title: 'Little Crypto Notebook',
    description: 'Advanced cryptography: commitments, zero-knowledge proofs, and multi-signatures. Covers Pay-to-Contract, PSHVZK proofs, and Blind Sequential MuSig.',
    icon: '🔐',
    url: 'https://lcn-deploy.vercel.app/',
    tags: ['4 Parts', '9 Sections'],
    sections: ['podcast_focus'],
    totalSections: 9,
    progressPrefix: 'lcn:',
    leaderboardUrl: 'https://lcn-deploy.vercel.app/#/leaderboard',
    shortName: 'Crypto Notebook',
    progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    id: 'secp256k1',
    title: 'secp256k1: The Curve That Powers Bitcoin',
    description: 'From geometry to cryptography—the mathematics that makes Bitcoin possible. Covers elliptic curves, finite fields, ECDSA, and Schnorr signatures.',
    icon: '📐',
    url: 'https://secp256k1-deploy.vercel.app/',
    tags: ['4 Parts', '10 Sections'],
    sections: ['featured', 'number_theory'],
    totalSections: 10,
    progressPrefix: 'secp256k1:',
    leaderboardUrl: 'https://secp256k1-deploy.vercel.app/#/leaderboard',
    shortName: 'secp256k1',
    progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
  },

  // GAMES
  {
    id: 'mod-race',
    title: 'Mod Racing',
    description: 'Race to master modular arithmetic with competitive math challenges. 10 difficulty tiers from Beginner to Transcendent, with single-player and multiplayer modes.',
    icon: '🏎️',
    url: 'https://mod-race.vercel.app/',
    tags: ['10 Tiers', 'Multiplayer'],
    sections: ['games'],
    totalSections: 10,
    progressPrefix: 'mod-race:',
    leaderboardUrl: 'https://mod-race.vercel.app/#/leaderboard',
    shortName: 'Mod Racing',
    progressGradient: 'linear-gradient(90deg, #22d3ee, #6366f1)',
  },
  {
    id: 'base-race',
    title: 'Base Conversion Racing',
    description: 'Race to convert numbers between binary, decimal, and hexadecimal! 10 difficulty tiers with progressively harder conversions.',
    icon: '🔢',
    url: 'https://base-race-opal.vercel.app/',
    tags: ['10 Tiers', 'Binary/Hex'],
    sections: ['games'],
    totalSections: 10,
    progressPrefix: 'base-race:',
    leaderboardUrl: 'https://base-race-opal.vercel.app/#/leaderboard',
    shortName: 'Base Racing',
    progressGradient: 'linear-gradient(90deg, #10b981, #34d399)',
  },
  {
    id: 'tontines',
    title: 'Tontines: The Mathematics of Lifetime Income',
    description: 'From 17th century finance to modern retirement security - understanding the mathematics of longevity risk pooling.',
    icon: '💰',
    url: 'https://tontines-deploy.vercel.app/',
    tags: ['4 Parts', '45 Sections'],
    sections: ['prob_stats'],
    totalSections: 45,
    progressPrefix: 'tontines:',
    leaderboardUrl: 'https://tontines-deploy.vercel.app/#/leaderboard',
    shortName: 'Tontines',
    progressGradient: 'linear-gradient(90deg, #10b981, #34d399)',
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
