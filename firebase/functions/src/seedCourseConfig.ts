import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initial admin npub
const INITIAL_ADMIN_NPUB = 'npub12eml5kmtrjmdt0h8shgg32gye5yqsf2jha6a70jrqt82q9d960sspky99g';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://mathacademy-cyan.vercel.app',
  'https://*.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
];

// Timing-safe string comparison (prevents timing attacks)
function timingSafeEqual(a: string | undefined, b: string | undefined): boolean {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

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
  { id: 'games', title: 'Games', subtitle: 'Practice with competitive math challenges', style: 'featured' },
  { id: 'podcast_focus', title: 'Podcast Focus Subjects', subtitle: 'Deep dives into topics from our podcasts', style: 'subject' },
];

// Course data
const COURSES = [
  { id: 'crypto', title: 'Cryptography Math', description: 'Learn the mathematics that powers modern encryption.', icon: '🔐', url: 'https://cryptography-xi.vercel.app/', tags: ['12 Lessons', 'Interactive'], sections: ['featured'], totalSections: 12, progressPrefix: 'crypto:', leaderboardUrl: 'https://cryptography-xi.vercel.app/#/leaderboard', shortName: 'Cryptography', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'frost', title: 'FROST: Threshold Signatures', description: 'Master Flexible Round-Optimized Schnorr Threshold Signatures - from mathematical foundations to Bitcoin applications.', icon: '🔐', url: 'frost-deploy/', tags: ['10 Parts', '69 Sections'], sections: ['featured', 'number_theory'], totalSections: 69, progressPrefix: 'frost:', leaderboardUrl: 'frost-deploy/#/leaderboard', shortName: 'FROST', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'islr', title: 'Intro to Statistical Learning', description: "Master machine learning fundamentals.", icon: '📊', url: 'islr-deploy/', tags: ['13 Chapters', '62 Sections'], sections: ['prob_stats'], totalSections: 62, progressPrefix: 'islr:', leaderboardUrl: 'islr-deploy/#/leaderboard', shortName: 'Statistical Learning', progressGradient: 'linear-gradient(90deg, #34d399, #6ee7b7)' },
  { id: 'bfi', title: 'Bitcoin for Institutions', description: "A comprehensive guide to institutional Bitcoin adoption.", icon: '₿', url: 'https://bfi-liart.vercel.app/', tags: ['3 Parts', '15 Sections'], sections: ['featured'], totalSections: 15, progressPrefix: 'bfi:', leaderboardUrl: 'https://bfi-liart.vercel.app/#/leaderboard', shortName: 'BFI', progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)' },
  { id: 'bips', title: 'Bitcoin Improvement Proposals', description: 'A comprehensive course covering 100+ Bitcoin Improvement Proposals.', icon: '📜', url: 'bips-deploy/', tags: ['8 Parts', '95 Sections'], sections: ['featured', 'number_theory'], totalSections: 95, progressPrefix: 'bips:', leaderboardUrl: 'bips-deploy/#/leaderboard', shortName: 'BIPs', progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)' },
  { id: 'calc_easy', title: 'Beginner Calculus', description: "Master calculus through Silvanus P. Thompson's timeless classic.", icon: '∂', url: 'calceasy-deploy/', tags: ['26 Sections', 'Interactive'], sections: ['beginners', 'calculus'], totalSections: 26, progressPrefix: 'calc_easy:', leaderboardUrl: 'calceasy-deploy/#/leaderboard', shortName: 'Beginner Calculus', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'ba', title: 'Basic Algebra', description: 'Master the fundamentals of algebra through interactive lessons.', icon: 'x²', url: 'basic-algebra-deploy/', tags: ['17 Chapters', '64 Sections'], sections: ['beginners', 'algebra'], totalSections: 64, progressPrefix: 'ba:', leaderboardUrl: 'basic-algebra-deploy/#/leaderboard', shortName: 'Basic Algebra', progressGradient: 'linear-gradient(90deg, #22c55e, #4ade80)' },
  { id: 'wm', title: 'Why Math?', description: "Discover the real reasons behind mathematical concepts.", icon: '📚', url: 'why-math-deploy/', tags: ['8 Parts', '13 Sections'], sections: ['beginners'], totalSections: 13, progressPrefix: 'wm:', leaderboardUrl: 'why-math-deploy/#/leaderboard', shortName: 'Why Math?', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'calc1', title: 'Intermediate Calculus', description: "One-variable calculus with an introduction to linear algebra.", icon: '∫', url: 'calc1-deploy/', tags: ['17 Parts', '101 Sections'], sections: ['calculus'], totalSections: 101, progressPrefix: 'calc1:', leaderboardUrl: 'calc1-deploy/#/leaderboard', shortName: 'Intermediate Calculus', progressGradient: 'linear-gradient(90deg, #f97316, #fb923c)' },
  { id: 'calc2', title: 'Advanced Calculus', description: "Multi-variable calculus and linear algebra with applications to differential equations and probability.", icon: '∫∫', url: 'calc2-deploy/', tags: ['15 Parts', '191 Sections'], sections: ['calculus', 'algebra'], totalSections: 191, progressPrefix: 'calc2:', leaderboardUrl: 'calc2-deploy/#/leaderboard', shortName: 'Advanced Calculus', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'calc_lib_art', title: 'Calculus as a Liberal Art', description: 'Explore calculus through a liberal arts lens.', icon: '📚', url: 'calc-lib-art-deploy/', tags: ['Interactive', 'Conceptual'], sections: ['calculus'], totalSections: 15, progressPrefix: 'calc_lib_art:', leaderboardUrl: 'calc-lib-art-deploy/#/leaderboard', shortName: 'Calc Liberal Art', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'ra', title: 'Introduction to Real Analysis', description: "A rigorous introduction to real analysis.", icon: '📐', url: 'ra-deploy/', tags: ['4 Parts', '15 Sections'], sections: ['calculus'], totalSections: 15, progressPrefix: 'ra:', leaderboardUrl: 'ra-deploy/#/leaderboard', shortName: 'Real Analysis', progressGradient: 'linear-gradient(90deg, #10b981, #34d399)' },
  { id: 'rudin', title: 'Principles of Mathematical Analysis', description: "The classic 'Baby Rudin' - a rigorous introduction to real analysis covering sequences, series, continuity, differentiation, integration, and Lebesgue theory.", icon: '∫', url: 'rudin-deploy/', tags: ['11 Parts', '86 Sections'], sections: ['calculus'], totalSections: 86, progressPrefix: 'rudin:', leaderboardUrl: 'rudin-deploy/#/leaderboard', shortName: 'Baby Rudin', progressGradient: 'linear-gradient(90deg, #06b6d4, #22d3ee)' },
  { id: 'tao-analysis-1', title: "Tao's Analysis I", description: "A rigorous introduction to real analysis by Terence Tao, building from Peano axioms through real numbers, sequences, series, continuity, differentiation, and Riemann integration.", icon: 'ε', url: 'tao-analysis-1-deploy/', tags: ['13 Parts', '72 Sections'], sections: ['calculus', 'seminal'], totalSections: 72, progressPrefix: 'tao-analysis-1:', leaderboardUrl: 'tao-analysis-1-deploy/#/leaderboard', shortName: 'Tao Analysis I', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'tao2', title: "Tao's Analysis II", description: "The sequel to Analysis I, covering metric spaces, continuous functions, uniform convergence, power series, Fourier series, several variable calculus, Lebesgue measure, and Lebesgue integration.", icon: 'δ', url: 'tao2-deploy/', tags: ['8 Parts', '48 Sections'], sections: ['calculus', 'seminal'], totalSections: 48, progressPrefix: 'tao2:', leaderboardUrl: 'tao2-deploy/#/leaderboard', shortName: 'Tao Analysis II', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'linalg', title: 'Linear Algebra', description: "Master vectors, matrices, and linear transformations.", icon: '📐', url: 'linalg-deploy/', tags: ['Vectors & Matrices', 'Interactive'], sections: ['algebra'], totalSections: 50, progressPrefix: 'linalg:', leaderboardUrl: 'linalg-deploy/#/leaderboard', shortName: 'Linear Algebra', progressGradient: 'linear-gradient(90deg, #06b6d4, #22d3ee)' },
  { id: 'advlinalg', title: 'Advanced Linear Algebra', description: "Deep dive into abstract linear algebra.", icon: 'ℳ', url: 'advlinalg-deploy/', tags: ['10 Chapters', '59 Sections'], sections: ['algebra'], totalSections: 12, progressPrefix: 'advlinalg:', leaderboardUrl: 'advlinalg-deploy/#/leaderboard', shortName: 'Advanced LinAlg', progressGradient: 'linear-gradient(90deg, #a855f7, #c084fc)' },
  { id: 'aa', title: 'Abstract Algebra', description: 'Explore the elegant world of algebraic structures.', icon: 'G', url: 'aa-deploy/', tags: ['Groups & Rings', 'Fields'], sections: ['algebra'], totalSections: 50, progressPrefix: 'aa:', leaderboardUrl: 'aa-deploy/#/leaderboard', shortName: 'Abstract Algebra', progressGradient: 'linear-gradient(90deg, #f97316, #fb923c)' },
  { id: 'df', title: 'Abstract Algebra (Dummit & Foote)', description: "The definitive graduate-level abstract algebra textbook.", icon: 'G', url: 'df-deploy/', tags: ['6 Parts', '95 Sections'], sections: ['algebra'], totalSections: 95, progressPrefix: 'df:', leaderboardUrl: 'df-deploy/#/leaderboard', shortName: 'Dummit-Foote', progressGradient: 'linear-gradient(90deg, #e11d48, #f43f5e)' },
  { id: 'four_pillars', title: 'The Four Pillars of Geometry', description: "Explore geometry from four perspectives.", icon: '🔺', url: 'four-pillars-deploy/', tags: ['8 Chapters', '66 Sections'], sections: ['geometry'], totalSections: 66, progressPrefix: 'four_pillars:', leaderboardUrl: 'four-pillars-deploy/#/leaderboard', shortName: 'Four Pillars', progressGradient: 'linear-gradient(90deg, #ec4899, #f472b6)' },
  { id: 'numbers_geometry', title: 'Numbers and Geometry', description: "Explore the deep connections between arithmetic and geometry.", icon: '🔢', url: 'numbers-geometry-deploy/', tags: ['9 Chapters', '79 Sections'], sections: ['geometry'], totalSections: 79, progressPrefix: 'numbers_geometry:', leaderboardUrl: 'numbers-geometry-deploy/#/leaderboard', shortName: 'Numbers & Geometry', progressGradient: 'linear-gradient(90deg, #14b8a6, #2dd4bf)' },
  { id: 'euclid', title: "Euclid's Elements", description: "The foundational text of Western mathematics.", icon: '📜', url: 'euclid-deploy/', tags: ['13 Books', '219 Sections'], sections: ['seminal', 'geometry'], totalSections: 219, progressPrefix: 'euclid:', leaderboardUrl: 'euclid-deploy/#/leaderboard', shortName: 'Elements', progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)' },
  { id: 'gauss', title: "Disquisitiones Arithmeticae", description: "Gauss's foundational 1801 treatise.", icon: '🔢', url: 'gauss-deploy/', tags: ['7 Sections', 'Number Theory'], sections: ['seminal'], totalSections: 7, progressPrefix: 'gauss:', leaderboardUrl: 'gauss-deploy/#/leaderboard', shortName: 'Disquisitiones', progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)' },
  { id: 'only_the_strong_survive', title: 'Only The Strong Survive', description: "A critique of prospects in crypto beyond Bitcoin.", icon: '₿', url: 'only-the-strong-survive-deploy/', tags: ['8 Parts', '20 Sections'], sections: ['seminal'], totalSections: 20, progressPrefix: 'only_the_strong_survive:', leaderboardUrl: 'only-the-strong-survive-deploy/#/leaderboard', shortName: 'Only The Strong', progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)' },
  { id: 'euler_intro', title: 'Introduction to the Analysis of the Infinite', description: "Euler's 1748 masterpiece on the theory of curved lines.", icon: '∞', url: 'euler-intro-deploy/', tags: ['5 Parts', '22 Sections'], sections: ['seminal'], totalSections: 22, progressPrefix: 'euler-intro:', leaderboardUrl: 'euler-intro-deploy/#/leaderboard', shortName: 'Euler Intro', progressGradient: 'linear-gradient(90deg, #d97706, #f59e0b)' },
  { id: 'saylor-diss', title: "Michael Saylor's Dissertation", description: "A Machiavellian Interpretation of Political Dynamics - applying system dynamics to model Machiavelli's political philosophy. Saylor's 1987 MIT thesis.", icon: '📚', url: 'saylor-diss-deploy/', tags: ['5 Parts', '21 Sections'], sections: ['seminal'], totalSections: 21, progressPrefix: 'saylor-diss:', leaderboardUrl: 'saylor-diss-deploy/#/leaderboard', shortName: 'Saylor Diss', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'mom', title: 'Men of Mathematics', description: "Journey through 2500 years of mathematical history.", icon: '📜', url: 'mom-deploy/', tags: ['34 Sections', 'Interactive'], sections: ['history'], totalSections: 34, progressPrefix: 'mom:', leaderboardUrl: 'mom-deploy/#/leaderboard', shortName: 'Men of Math', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'thales', title: 'The Heritage of Thales', description: "Journey through 2,500 years of mathematical history.", icon: '🏛️', url: 'thales-deploy/', tags: ['11 Parts', '66 Sections'], sections: ['history'], totalSections: 66, progressPrefix: 'thales:', leaderboardUrl: 'thales-deploy/#/leaderboard', shortName: 'Heritage of Thales', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'math_history', title: 'Mathematics and Its History', description: "A journey through 4,000 years of mathematical history.", icon: '📜', url: 'https://mathhistory.vercel.app/', tags: ['19 Chapters', '72 Sections'], sections: ['history'], totalSections: 72, progressPrefix: 'math_history:', leaderboardUrl: 'https://mathhistory.vercel.app/#/leaderboard', shortName: 'Stillwell', progressGradient: 'linear-gradient(90deg, #F59E0B, #D97706)' },
  { id: 'human_action', title: 'Human Action', description: "Ludwig von Mises' foundational treatise on economics.", icon: '📖', url: 'human-action-deploy/', tags: ['8 Parts', '40 Sections'], sections: ['austrian'], totalSections: 40, progressPrefix: 'human_action:', leaderboardUrl: 'human-action-deploy/#/leaderboard', shortName: 'Human Action', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'atlas_shrugged', title: 'Atlas Shrugged', description: "Ayn Rand's magnum opus.", icon: '🔥', url: 'atlas-shrugged-deploy/', tags: ['3 Parts', '30 Sections'], sections: ['austrian'], totalSections: 30, progressPrefix: 'atlas_shrugged:', leaderboardUrl: 'atlas-shrugged-deploy/#/leaderboard', shortName: 'Atlas Shrugged', progressGradient: 'linear-gradient(90deg, #ef4444, #f97316)' },
  { id: 'man_econ_state', title: 'Man, Economy, and State', description: "Murray Rothbard's comprehensive treatise.", icon: '⚖️', url: 'man-econ-state-deploy/', tags: ['6 Parts', '19 Sections'], sections: ['austrian'], totalSections: 19, progressPrefix: 'man_econ_state:', leaderboardUrl: 'man-econ-state-deploy/#/leaderboard', shortName: 'Man, Economy, State', progressGradient: 'linear-gradient(90deg, #10b981, #34d399)' },
  { id: 'road_to_serfdom', title: 'The Road to Serfdom', description: "F.A. Hayek's classic warning.", icon: '🔗', url: 'road-to-serfdom-deploy/', tags: ['16 Sections', 'Interactive'], sections: ['austrian'], totalSections: 16, progressPrefix: 'road_to_serfdom:', leaderboardUrl: 'road-to-serfdom-deploy/#/leaderboard', shortName: 'Road to Serfdom', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'orange_btc', title: 'Orange is the New Green', description: "The emergence of Bitcoin money market funds.", icon: '🟠', url: 'https://orange-is-new-green.vercel.app/', tags: ['5 Parts', '15 Sections'], sections: ['austrian'], totalSections: 15, progressPrefix: 'orange_btc:', leaderboardUrl: 'https://orange-is-new-green.vercel.app/#/leaderboard', shortName: 'Orange is New Green', progressGradient: 'linear-gradient(90deg, #f97316, #fbbf24)' },
  { id: 'rothbard_controversies', title: 'Economic Controversies', description: "Murray Rothbard's analysis of economic fallacies and controversies.", icon: '⚖️', url: 'rothbard-deploy/', tags: ['8 Parts', '52 Sections'], sections: ['austrian'], totalSections: 52, progressPrefix: 'rothbard_controversies:', leaderboardUrl: 'rothbard-deploy/#/leaderboard', shortName: 'Economic Controversies', progressGradient: 'linear-gradient(90deg, #dc2626, #ef4444)' },
  { id: 'west_graphs', title: 'Introduction to Graph Theory', description: "Master graph theory.", icon: '🕸️', url: 'west-graphs-deploy/', tags: ['8 Chapters', '28 Sections'], sections: ['discrete'], totalSections: 28, progressPrefix: 'west_graphs:', leaderboardUrl: 'west-graphs-deploy/#/leaderboard', shortName: 'Graph Theory', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'coding_theory', title: 'Algebraic Coding Theory', description: "Master error-correcting codes.", icon: '🔢', url: 'coding-theory-deploy/', tags: ['11 Chapters', '41 Sections'], sections: ['discrete'], totalSections: 41, progressPrefix: 'coding_theory:', leaderboardUrl: 'coding-theory-deploy/#/leaderboard', shortName: 'Coding Theory', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'intro-discrete', title: 'Intro to Discrete Math', description: "Numbers, groups, and codes.", icon: '🔢', url: 'intro-discrete-deploy/', tags: ['6 Chapters', '26 Sections'], sections: ['discrete'], totalSections: 26, progressPrefix: 'intro-discrete:', leaderboardUrl: 'intro-discrete-deploy/#/leaderboard', shortName: 'Intro Discrete', progressGradient: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' },
  { id: 'koblitz', title: 'Advanced Number Theory and Cryptography', description: "A rigorous course in number theory.", icon: '🔑', url: 'koblitz-course-deploy/', tags: ['3 Parts', '22 Sections'], sections: ['number_theory'], totalSections: 22, progressPrefix: 'koblitz:', leaderboardUrl: 'koblitz-course-deploy/#/leaderboard', shortName: 'Koblitz', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'ross-prob', title: 'Probability', description: "Master probability theory.", icon: '🎲', url: 'ross-prob-deploy/', tags: ['10 Chapters', '66 Sections'], sections: ['prob_stats'], totalSections: 9, progressPrefix: 'ross-prob:', leaderboardUrl: 'ross-prob-deploy/#/leaderboard', shortName: 'Probability', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'mod-race', title: 'Mod Racing', description: 'Race to master modular arithmetic with competitive math challenges.', icon: '🏎️', url: 'mod-race-deploy/', tags: ['10 Tiers', 'Multiplayer'], sections: ['games'], totalSections: 10, progressPrefix: 'mod-race:', leaderboardUrl: 'mod-race-deploy/#/leaderboard', shortName: 'Mod Racing', progressGradient: 'linear-gradient(90deg, #22d3ee, #6366f1)' },
  { id: 'base-race', title: 'Base Conversion Racing', description: 'Race to convert numbers between binary, decimal, and hexadecimal!', icon: '🔢', url: 'https://base-race-opal.vercel.app/', tags: ['10 Tiers', 'Binary/Hex'], sections: ['games'], totalSections: 10, progressPrefix: 'base-race:', leaderboardUrl: 'https://base-race-opal.vercel.app/#/leaderboard', shortName: 'Base Racing', progressGradient: 'linear-gradient(90deg, #10b981, #34d399)' },
  { id: 'lcn', title: 'Little Crypto Notebook', description: 'Advanced cryptography: commitments, zero-knowledge proofs, and multi-signatures.', icon: '🔐', url: 'lcn-deploy/', tags: ['4 Parts', '9 Sections'], sections: ['podcast_focus'], totalSections: 9, progressPrefix: 'lcn:', leaderboardUrl: 'lcn-deploy/#/leaderboard', shortName: 'Crypto Notebook', progressGradient: 'linear-gradient(90deg, #6366f1, #818cf8)' },
  { id: 'secp256k1', title: 'secp256k1: The Curve That Powers Bitcoin', description: 'From geometry to cryptography—the mathematics that makes Bitcoin possible.', icon: '📐', url: 'secp256k1-deploy/', tags: ['4 Parts', '10 Sections'], sections: ['featured', 'number_theory'], totalSections: 10, progressPrefix: 'secp256k1:', leaderboardUrl: 'secp256k1-deploy/#/leaderboard', shortName: 'secp256k1', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'branta', title: 'Branta: Bitcoin Transaction Security', description: 'Learn pre-payment verification with Guardrail. Protect against address swaps, phishing, MITM attacks, and supply chain compromises.', icon: '🛡️', url: 'branta-deploy/', tags: ['6 Parts', '17 Sections'], sections: ['number_theory'], totalSections: 17, progressPrefix: 'branta:', leaderboardUrl: 'branta-deploy/#/leaderboard', shortName: 'Branta', progressGradient: 'linear-gradient(90deg, #f59e0b, #d97706)' },
  { id: 'ln-bolts', title: 'Lightning Network BOLTs', description: 'The complete Basis of Lightning Technology specifications. From encrypted transport to payment encoding, master the protocol that enables instant Bitcoin payments.', icon: '⚡', url: 'ln-bolts-deploy/', tags: ['8 Parts', '23 Sections'], sections: ['featured', 'number_theory'], totalSections: 23, progressPrefix: 'ln-bolts:', leaderboardUrl: 'ln-bolts-deploy/#/leaderboard', shortName: 'LN BOLTs', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'tontines', title: 'Tontines: The Mathematics of Lifetime Income', description: 'From 17th century finance to modern retirement security - understanding the mathematics of longevity risk pooling.', icon: '💰', url: 'tontines-deploy/', tags: ['4 Parts', '45 Sections'], sections: ['prob_stats'], totalSections: 45, progressPrefix: 'tontines:', leaderboardUrl: 'tontines-deploy/#/leaderboard', shortName: 'Tontines', progressGradient: 'linear-gradient(90deg, #10b981, #34d399)' },
  { id: 'sparrow', title: 'Sparrow Bitcoin Wallet', description: 'A comprehensive course on Sparrow Wallet: Bitcoin security, PSBT transactions, hardware wallet integration, multisig, and privacy-focused self-custody.', icon: '🐦', url: 'https://sparrow-deploy.vercel.app/', tags: ['10 Parts', '44 Sections'], sections: ['featured', 'number_theory'], totalSections: 44, progressPrefix: 'sparrow:', leaderboardUrl: 'https://sparrow-deploy.vercel.app/#/leaderboard', shortName: 'Sparrow Wallet', progressGradient: 'linear-gradient(90deg, #f59e0b, #fbbf24)' },
  { id: 'dh-taleb', title: 'Dynamic Hedging', description: "Master options risk management with Nassim Taleb's classic. From delta hedging and the Greeks to exotic options, learn the practitioner's approach to managing vanilla and exotic derivatives.", icon: '📈', url: 'https://dh-taleb-deploy.vercel.app/', tags: ['8 Parts', '32 Sections'], sections: ['prob_stats'], totalSections: 32, progressPrefix: 'dh-taleb:', leaderboardUrl: 'https://dh-taleb-deploy.vercel.app/#/leaderboard', shortName: 'Dynamic Hedging', progressGradient: 'linear-gradient(90deg, #10b981, #34d399)' },
];

// Seed function only adds NEW courses - existing courses are never modified
// This preserves all admin customizations (titles, descriptions, ordering, etc.)

/**
 * Seed function to sync courses/sections to courseConfig/staging collection.
 *
 * Workflow:
 * 1. Seed adds new courses/sections to STAGING
 * 2. Admin reviews changes in admin panel
 * 3. Admin pushes to PRODUCTION from admin panel
 *
 * Behavior:
 * - NEW items: Added with all fields from seed
 * - EXISTING items: Critical fields (url, leaderboardUrl, etc.) are UPDATED from seed
 * - Order is preserved for existing items (respects admin reordering)
 *
 * This ensures the seed file is the source of truth for deployment URLs,
 * while preserving admin customizations like ordering.
 *
 * Call via HTTP: https://us-central1-magic-internet-math-96630.cloudfunctions.net/seedCourseConfig?secret=YOUR_SECRET
 *
 * SECURITY: Secret must be set via Firebase Functions config:
 *   firebase functions:config:set seed.secret="YOUR_NEW_SECRET"
 */
export const seedCourseConfig = functions.https.onRequest(
  async (req, res) => {
    // CORS: Handle OPTIONS preflight
    if (req.method === 'OPTIONS') {
      const origin = req.headers.origin;
      if (origin && ALLOWED_ORIGINS.some(allowed => origin === allowed || origin.startsWith(allowed.replace('*.', '')))) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Max-Age', '86400');
      }
      res.status(204).send('');
      return;
    }

    // CORS: Validate origin for actual requests
    const origin = req.headers.origin;
    if (origin) {
      const isAllowed = ALLOWED_ORIGINS.some(allowed => 
        origin === allowed || origin.startsWith(allowed.replace('*.', ''))
      );
      if (!isAllowed) {
        console.error('CORS: Unauthorized origin attempt:', origin);
        res.status(403).send('Forbidden origin');
        return;
      }
    }

    // Secret check using environment config (NOT hardcoded)
    const expectedSecret = functions.config().seed?.secret;
    const providedSecret = req.query.secret;

    if (!expectedSecret) {
      console.error('SECURITY: seed.secret not configured. Run: firebase functions:config:set seed.secret="YOUR_SECRET"');
      res.status(500).send('Server configuration error');
      return;
    }

    // Use timing-safe comparison to prevent timing attacks
    if (!timingSafeEqual(providedSecret as string, expectedSecret)) {
      console.error('CORS: Unauthorized seed secret attempt from origin:', origin);
      res.status(403).send('Forbidden');
      return;
    }

    const db = admin.firestore();
    // Write to staging so admin can review and push to production
    const configRef = db.collection('courseConfig').doc('staging');

    // Get existing sections and courses
    const [existingSectionsSnap, existingCoursesSnap, existingAdminsSnap] = await Promise.all([
      configRef.collection('sections').get(),
      configRef.collection('courses').get(),
      configRef.collection('admins').get()
    ]);

    const existingSectionIds = new Set(existingSectionsSnap.docs.map(d => d.id));
    const existingCourseIds = new Set(existingCoursesSnap.docs.map(d => d.id));
    const existingAdminNpubs = new Set(existingAdminsSnap.docs.map(d => d.id));

    const batch = db.batch();
    let addedSections = 0;
    let addedCourses = 0;
    let addedAdmins = 0;

    // Update metadata (merge, don't overwrite)
    batch.set(configRef, {
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      updatedBy: 'seed-function',
    }, { merge: true });

    // Only add NEW sections (preserve existing ones)
    const maxExistingSectionOrder = existingSectionsSnap.docs.reduce(
      (max, doc) => Math.max(max, doc.data().order ?? 0), -1
    );

    SECTIONS.forEach((section, index) => {
      if (!existingSectionIds.has(section.id)) {
        const sectionRef = configRef.collection('sections').doc(section.id);
        batch.set(sectionRef, { ...section, order: maxExistingSectionOrder + index + 1 });
        addedSections++;
      }
    });

    // Process courses: add new ones, update existing ones with canonical fields
    const maxExistingCourseOrder = existingCoursesSnap.docs.reduce(
      (max, doc) => Math.max(max, doc.data().order ?? 0), -1
    );

    COURSES.forEach((course, index) => {
      const courseRef = configRef.collection('courses').doc(course.id);

      if (!existingCourseIds.has(course.id)) {
        // NEW course: add with all fields
        batch.set(courseRef, { ...course, order: maxExistingCourseOrder + index + 1 });
        addedCourses++;
      } else {
        // EXISTING course: update critical fields (url, leaderboardUrl) from seed
        // This ensures deployment URLs stay in sync while preserving admin customizations
        batch.set(courseRef, {
          url: course.url,
          leaderboardUrl: course.leaderboardUrl,
          totalSections: course.totalSections,
        }, { merge: true });
      }
    });

    // Only add admin if doesn't exist
    if (!existingAdminNpubs.has(INITIAL_ADMIN_NPUB)) {
      const adminRef = configRef.collection('admins').doc(INITIAL_ADMIN_NPUB);
      batch.set(adminRef, {
        npub: INITIAL_ADMIN_NPUB,
        displayName: 'Initial Admin',
        addedAt: admin.firestore.FieldValue.serverTimestamp(),
        addedBy: 'seed-function'
      });
      addedAdmins++;
    }

    await batch.commit();

    const skippedCourses = COURSES.length - addedCourses;

    // CORS: Add response headers
    if (origin) {
      res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Credentials', 'true');

    res.status(200).send(
      `Added ${addedSections} new sections, ${addedCourses} new courses, ${addedAdmins} new admins. ` +
      `${skippedCourses} existing courses unchanged (admin customizations preserved).`
    );
  }
);
