import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initial admin npub
const INITIAL_ADMIN_NPUB = 'npub12eml5kmtrjmdt0h8shgg32gye5yqsf2jha6a70jrqt82q9d960sspky99g';

// Section data
const SECTIONS = [
  { id: 'featured', title: 'Featured', subtitle: 'Our flagship courses', style: 'featured' },
  { id: 'beginners', title: 'Beginners', subtitle: 'Start here to build a strong foundation', style: 'beginner' },
  { id: 'calculus', title: 'Calculus', subtitle: 'Continuous mathematics and analysis', style: 'subject' },
  { id: 'algebra', title: 'Algebra', subtitle: 'Algebraic structures and systems', style: 'subject' },
  { id: 'geometry', title: 'Geometry', subtitle: 'Euclidean and non-Euclidean geometry', style: 'subject' },
  { id: 'history', title: 'Math History', subtitle: 'The stories behind the mathematics', style: 'subject' },
  { id: 'seminal', title: 'Seminal Works', subtitle: 'Foundational texts that shaped mathematics', style: 'subject' },
  { id: 'austrian', title: 'Austrian Economics', subtitle: 'The study of human action and market processes', style: 'subject' },
  { id: 'discrete', title: 'Discrete Mathematics', subtitle: 'Combinatorics, graph theory, and discrete structures', style: 'subject' },
  { id: 'number_theory', title: 'Number Theory', subtitle: 'Integers, primes, and cryptographic foundations', style: 'subject' },
  { id: 'prob_stats', title: 'Probability and Statistics', subtitle: 'Random variables, distributions, and statistical inference', style: 'subject' },
];

// Course data
const COURSES = [
  { id: 'crypto', title: 'Cryptography Math', description: 'Learn the mathematics that powers modern encryption.', icon: '🔐', url: 'https://cryptography-xi.vercel.app/', tags: ['12 Lessons', 'Interactive'], sections: ['featured'], totalSections: 12, progressPrefix: 'crypto:', leaderboardUrl: 'https://cryptography-xi.vercel.app/#/leaderboard', shortName: 'Cryptography', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'islr', title: 'Intro to Statistical Learning', description: "Master machine learning fundamentals.", icon: '📊', url: 'islr-deploy/', tags: ['13 Chapters', '62 Sections'], sections: ['prob_stats'], totalSections: 62, progressPrefix: 'islr:', leaderboardUrl: 'islr-deploy/#/leaderboard', shortName: 'Statistical Learning', progressGradient: 'linear-gradient(90deg, #34d399, #6ee7b7)' },
  { id: 'bfi', title: 'Bitcoin for Institutions', description: "A comprehensive guide to institutional Bitcoin adoption.", icon: '₿', url: 'https://bfi-liart.vercel.app/', tags: ['3 Parts', '15 Sections'], sections: ['featured'], totalSections: 15, progressPrefix: 'bfi:', leaderboardUrl: 'https://bfi-liart.vercel.app/#/leaderboard', shortName: 'BFI', progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)' },
  { id: 'calc_easy', title: 'Beginner Calculus', description: "Master calculus through Silvanus P. Thompson's timeless classic.", icon: '∂', url: 'calceasy-deploy/', tags: ['26 Sections', 'Interactive'], sections: ['beginners', 'calculus'], totalSections: 26, progressPrefix: 'calc_easy:', leaderboardUrl: 'calceasy-deploy/#/leaderboard', shortName: 'Beginner Calculus', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'ba', title: 'Basic Algebra', description: 'Master the fundamentals of algebra through interactive lessons.', icon: 'x²', url: 'basic-algebra-deploy/', tags: ['17 Chapters', '64 Sections'], sections: ['beginners', 'algebra'], totalSections: 64, progressPrefix: 'ba:', leaderboardUrl: 'basic-algebra-deploy/#/leaderboard', shortName: 'Basic Algebra', progressGradient: 'linear-gradient(90deg, #22c55e, #4ade80)' },
  { id: 'wm', title: 'Why Math?', description: "Discover the real reasons behind mathematical concepts.", icon: '📚', url: 'why-math-deploy/', tags: ['8 Parts', '13 Sections'], sections: ['beginners'], totalSections: 13, progressPrefix: 'wm:', leaderboardUrl: 'why-math-deploy/#/leaderboard', shortName: 'Why Math?', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'calc1', title: 'Intermediate Calculus', description: "One-variable calculus with an introduction to linear algebra.", icon: '∫', url: 'calc1-deploy/', tags: ['17 Parts', '101 Sections'], sections: ['calculus'], totalSections: 101, progressPrefix: 'calc1:', leaderboardUrl: 'calc1-deploy/#/leaderboard', shortName: 'Intermediate Calculus', progressGradient: 'linear-gradient(90deg, #f97316, #fb923c)' },
  { id: 'calc_lib_art', title: 'Calculus as a Liberal Art', description: 'Explore calculus through a liberal arts lens.', icon: '📚', url: 'calc-lib-art-deploy/', tags: ['Interactive', 'Conceptual'], sections: ['calculus'], totalSections: 10, progressPrefix: 'calc_lib_art:', leaderboardUrl: 'calc-lib-art-deploy/#/leaderboard', shortName: 'Calc Liberal Art', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'ra', title: 'Introduction to Real Analysis', description: "A rigorous introduction to real analysis.", icon: '📐', url: 'ra-deploy/', tags: ['4 Parts', '15 Sections'], sections: ['calculus'], totalSections: 15, progressPrefix: 'ra:', leaderboardUrl: 'ra-deploy/#/leaderboard', shortName: 'Real Analysis', progressGradient: 'linear-gradient(90deg, #10b981, #34d399)' },
  { id: 'linalg', title: 'Linear Algebra', description: "Master vectors, matrices, and linear transformations.", icon: '📐', url: 'linalg-deploy/', tags: ['Vectors & Matrices', 'Interactive'], sections: ['algebra'], totalSections: 19, progressPrefix: 'linalg:', leaderboardUrl: 'linalg-deploy/#/leaderboard', shortName: 'Linear Algebra', progressGradient: 'linear-gradient(90deg, #06b6d4, #22d3ee)' },
  { id: 'advlinalg', title: 'Advanced Linear Algebra', description: "Deep dive into abstract linear algebra.", icon: 'ℳ', url: 'advlinalg-deploy/', tags: ['10 Chapters', '59 Sections'], sections: ['algebra'], totalSections: 59, progressPrefix: 'advlinalg:', leaderboardUrl: 'advlinalg-deploy/#/leaderboard', shortName: 'Advanced LinAlg', progressGradient: 'linear-gradient(90deg, #a855f7, #c084fc)' },
  { id: 'aa', title: 'Abstract Algebra', description: 'Explore the elegant world of algebraic structures.', icon: 'G', url: 'aa-deploy/', tags: ['Groups & Rings', 'Fields'], sections: ['algebra'], totalSections: 50, progressPrefix: 'aa:', leaderboardUrl: 'aa-deploy/#/leaderboard', shortName: 'Abstract Algebra', progressGradient: 'linear-gradient(90deg, #f97316, #fb923c)' },
  { id: 'four_pillars', title: 'The Four Pillars of Geometry', description: "Explore geometry from four perspectives.", icon: '🔺', url: 'four-pillars-deploy/', tags: ['8 Chapters', '66 Sections'], sections: ['geometry'], totalSections: 66, progressPrefix: 'four_pillars:', leaderboardUrl: 'four-pillars-deploy/#/leaderboard', shortName: 'Four Pillars', progressGradient: 'linear-gradient(90deg, #ec4899, #f472b6)' },
  { id: 'numbers_geometry', title: 'Numbers and Geometry', description: "Explore the deep connections between arithmetic and geometry.", icon: '🔢', url: 'numbers-geometry-deploy/', tags: ['9 Chapters', '79 Sections'], sections: ['geometry'], totalSections: 79, progressPrefix: 'numbers_geometry:', leaderboardUrl: 'numbers-geometry-deploy/#/leaderboard', shortName: 'Numbers & Geometry', progressGradient: 'linear-gradient(90deg, #14b8a6, #2dd4bf)' },
  { id: 'euclid', title: "Euclid's Elements", description: "The foundational text of Western mathematics.", icon: '📜', url: 'https://euclid-deploy.vercel.app/', tags: ['13 Books', '219 Sections'], sections: ['seminal', 'geometry'], totalSections: 219, progressPrefix: 'euclid:', leaderboardUrl: 'https://euclid-deploy.vercel.app/#/leaderboard', shortName: 'Elements', progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)' },
  { id: 'gauss', title: "Disquisitiones Arithmeticae", description: "Gauss's foundational 1801 treatise.", icon: '🔢', url: 'gauss-deploy/', tags: ['7 Sections', 'Number Theory'], sections: ['seminal'], totalSections: 7, progressPrefix: 'gauss:', leaderboardUrl: 'gauss-deploy/#/leaderboard', shortName: 'Disquisitiones', progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)' },
  { id: 'only_the_strong_survive', title: 'Only The Strong Survive', description: "A critique of prospects in crypto beyond Bitcoin.", icon: '₿', url: 'only-the-strong-survive-deploy/', tags: ['8 Parts', '20 Sections'], sections: ['seminal'], totalSections: 20, progressPrefix: 'only_the_strong_survive:', leaderboardUrl: 'only-the-strong-survive-deploy/#/leaderboard', shortName: 'Only The Strong', progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)' },
  { id: 'euler_intro', title: 'Introduction to the Analysis of the Infinite', description: "Euler's 1748 masterpiece on the theory of curved lines.", icon: '∞', url: 'https://euler-intro.vercel.app/', tags: ['5 Parts', '22 Sections'], sections: ['seminal'], totalSections: 22, progressPrefix: 'euler-intro:', leaderboardUrl: 'https://euler-intro.vercel.app/#/leaderboard', shortName: 'Euler Intro', progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)' },
  { id: 'mom', title: 'Men of Mathematics', description: "Journey through 2500 years of mathematical history.", icon: '📜', url: 'mom-deploy/', tags: ['34 Sections', 'Interactive'], sections: ['history'], totalSections: 34, progressPrefix: 'mom:', leaderboardUrl: 'mom-deploy/#/leaderboard', shortName: 'Men of Math', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'thales', title: 'The Heritage of Thales', description: "Journey through 2,500 years of mathematical history.", icon: '🏛️', url: 'thales-deploy/', tags: ['11 Parts', '66 Sections'], sections: ['history'], totalSections: 66, progressPrefix: 'thales:', leaderboardUrl: 'thales-deploy/#/leaderboard', shortName: 'Heritage of Thales', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'math_history', title: 'Mathematics and Its History', description: "A journey through 4,000 years of mathematical history.", icon: '📜', url: 'https://mathhistory.vercel.app/', tags: ['19 Chapters', '72 Sections'], sections: ['history'], totalSections: 72, progressPrefix: 'math_history:', leaderboardUrl: 'https://mathhistory.vercel.app/#/leaderboard', shortName: 'Stillwell', progressGradient: 'linear-gradient(90deg, #F59E0B, #D97706)' },
  { id: 'human_action', title: 'Human Action', description: "Ludwig von Mises' foundational treatise on economics.", icon: '📖', url: 'human-action-deploy/', tags: ['8 Parts', '40 Sections'], sections: ['austrian'], totalSections: 40, progressPrefix: 'human_action:', leaderboardUrl: 'human-action-deploy/#/leaderboard', shortName: 'Human Action', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'atlas_shrugged', title: 'Atlas Shrugged', description: "Ayn Rand's magnum opus.", icon: '🔥', url: 'https://atlas-shrugged-deploy.vercel.app/', tags: ['3 Parts', '30 Sections'], sections: ['austrian'], totalSections: 30, progressPrefix: 'atlas_shrugged:', leaderboardUrl: 'https://atlas-shrugged-deploy.vercel.app/#/leaderboard', shortName: 'Atlas Shrugged', progressGradient: 'linear-gradient(90deg, #ef4444, #f97316)' },
  { id: 'man_econ_state', title: 'Man, Economy, and State', description: "Murray Rothbard's comprehensive treatise.", icon: '⚖️', url: 'https://man-econ-state.vercel.app/', tags: ['6 Parts', '19 Sections'], sections: ['austrian'], totalSections: 19, progressPrefix: 'man_econ_state:', leaderboardUrl: 'https://man-econ-state.vercel.app/#/leaderboard', shortName: 'Man, Economy, State', progressGradient: 'linear-gradient(90deg, #10b981, #34d399)' },
  { id: 'road_to_serfdom', title: 'The Road to Serfdom', description: "F.A. Hayek's classic warning.", icon: '🔗', url: 'https://road-to-serfdom-deploy.vercel.app/', tags: ['16 Sections', 'Interactive'], sections: ['austrian'], totalSections: 16, progressPrefix: 'road_to_serfdom:', leaderboardUrl: 'https://road-to-serfdom-deploy.vercel.app/#/leaderboard', shortName: 'Road to Serfdom', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'orange_btc', title: 'Orange is the New Green', description: "The emergence of Bitcoin money market funds.", icon: '🟠', url: 'https://orange-is-new-green.vercel.app/', tags: ['5 Parts', '15 Sections'], sections: ['austrian'], totalSections: 15, progressPrefix: 'orange_btc:', leaderboardUrl: 'https://orange-is-new-green.vercel.app/#/leaderboard', shortName: 'Orange is New Green', progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)' },
  { id: 'west_graphs', title: 'Introduction to Graph Theory', description: "Master graph theory.", icon: '🕸️', url: 'west-graphs-deploy/', tags: ['8 Chapters', '28 Sections'], sections: ['discrete'], totalSections: 28, progressPrefix: 'west_graphs:', leaderboardUrl: 'west-graphs-deploy/#/leaderboard', shortName: 'Graph Theory', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'coding_theory', title: 'Algebraic Coding Theory', description: "Master error-correcting codes.", icon: '🔢', url: 'coding-theory-deploy/', tags: ['11 Chapters', '41 Sections'], sections: ['discrete'], totalSections: 41, progressPrefix: 'coding_theory:', leaderboardUrl: 'coding-theory-deploy/#/leaderboard', shortName: 'Coding Theory', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'intro-discrete', title: 'Intro to Discrete Math', description: "Numbers, groups, and codes.", icon: '🔢', url: 'intro-discrete-deploy/', tags: ['6 Chapters', '26 Sections'], sections: ['discrete'], totalSections: 26, progressPrefix: 'intro-discrete:', leaderboardUrl: 'intro-discrete-deploy/#/leaderboard', shortName: 'Intro Discrete', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'koblitz', title: 'Advanced Number Theory and Cryptography', description: "A rigorous course in number theory.", icon: '🔑', url: 'koblitz-course-deploy/', tags: ['3 Parts', '22 Sections'], sections: ['number_theory'], totalSections: 22, progressPrefix: 'koblitz:', leaderboardUrl: 'koblitz-course-deploy/#/leaderboard', shortName: 'Koblitz', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'ross-prob', title: 'Probability', description: "Master probability theory.", icon: '🎲', url: 'ross-prob-deploy/', tags: ['10 Chapters', '66 Sections'], sections: ['prob_stats'], totalSections: 9, progressPrefix: 'ross-prob:', leaderboardUrl: 'ross-prob-deploy/#/leaderboard', shortName: 'Probability', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
];

/**
 * One-time seed function to populate courseConfig collection
 * Call via HTTP: https://us-central1-magic-internet-math-96630.cloudfunctions.net/seedCourseConfig?secret=YOUR_SECRET
 */
export const seedCourseConfig = functions.https.onRequest(
  async (req, res) => {
    // Simple secret check to prevent unauthorized calls
    const secret = req.query.secret;
    if (secret !== '***REMOVED***') {
      res.status(403).send('Forbidden');
      return;
    }

    const force = req.query.force === 'true';
    const db = admin.firestore();
    const configRef = db.collection('courseConfig').doc('config');

    // Check if already seeded
    const configDoc = await configRef.get();
    if (configDoc.exists && !force) {
      res.status(200).send('Already seeded. Use ?force=true to overwrite.');
      return;
    }

    const batch = db.batch();

    // Set metadata
    batch.set(configRef, {
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: 'seed-function',
      version: 1
    });

    // Create sections
    SECTIONS.forEach((section, index) => {
      const sectionRef = configRef.collection('sections').doc(section.id);
      batch.set(sectionRef, { ...section, order: index });
    });

    // Create courses
    COURSES.forEach((course, index) => {
      const courseRef = configRef.collection('courses').doc(course.id);
      batch.set(courseRef, { ...course, order: index });
    });

    // Create initial admin
    const adminRef = configRef.collection('admins').doc(INITIAL_ADMIN_NPUB);
    batch.set(adminRef, {
      npub: INITIAL_ADMIN_NPUB,
      displayName: 'Initial Admin',
      addedAt: admin.firestore.FieldValue.serverTimestamp(),
      addedBy: 'seed-function'
    });

    await batch.commit();

    res.status(200).send(`Seeded ${SECTIONS.length} sections, ${COURSES.length} courses, 1 admin`);
  }
);
