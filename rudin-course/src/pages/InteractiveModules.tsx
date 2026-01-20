import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';

// =============================================================================
// INTERACTIVE MODULE DEFINITIONS - Baby Rudin Real Analysis Visualizations
// =============================================================================
interface InteractiveModule {
  id: string;
  title: string;
  description: string;
  sectionId: number;
  sectionTitle: string;
  category: string;
  icon: string;
}

const modules: InteractiveModule[] = [
  // Chapter 1: The Real and Complex Number Systems
  {
    id: 'irrationality-sqrt2',
    title: 'Irrationality of √2',
    description: 'Visualize why √2 cannot be expressed as a ratio of integers using the classic proof by contradiction.',
    sectionId: 0,
    sectionTitle: 'Introduction',
    category: 'Number Systems',
    icon: '√',
  },
  {
    id: 'dedekind-cuts',
    title: 'Dedekind Cuts Explorer',
    description: 'Understand how the real numbers are constructed by "cutting" the rationals at irrational points.',
    sectionId: 1,
    sectionTitle: 'Ordered Sets',
    category: 'Number Systems',
    icon: '✂️',
  },
  {
    id: 'supremum-infimum',
    title: 'Supremum & Infimum',
    description: 'Explore the least upper bound and greatest lower bound properties with interactive examples.',
    sectionId: 2,
    sectionTitle: 'Supremum and Infimum',
    category: 'Number Systems',
    icon: '⬆️',
  },

  // Chapter 2: Basic Topology
  {
    id: 'metric-spaces',
    title: 'Metric Space Explorer',
    description: 'Visualize distance functions and neighborhoods in different metric spaces.',
    sectionId: 5,
    sectionTitle: 'Metric Spaces',
    category: 'Topology',
    icon: '📏',
  },
  {
    id: 'open-closed-sets',
    title: 'Open & Closed Sets',
    description: 'Interactive demonstration of open balls, open sets, closed sets, and their complements.',
    sectionId: 6,
    sectionTitle: 'Open and Closed Sets',
    category: 'Topology',
    icon: '⭕',
  },
  {
    id: 'compact-cover',
    title: 'Compact Set Cover Demo',
    description: 'Visualize the definition of compactness: every open cover has a finite subcover.',
    sectionId: 10,
    sectionTitle: 'Compact Sets',
    category: 'Topology',
    icon: '📦',
  },
  {
    id: 'nested-intervals',
    title: 'Nested Intervals Theorem',
    description: 'Watch how nested closed intervals converge to a common point.',
    sectionId: 10,
    sectionTitle: 'Compact Sets',
    category: 'Topology',
    icon: '🎯',
  },
  {
    id: 'heine-borel',
    title: 'Heine-Borel Visualization',
    description: 'Explore the equivalence of closed-bounded, compact, and limit-point properties in ℝⁿ.',
    sectionId: 10,
    sectionTitle: 'Compact Sets',
    category: 'Topology',
    icon: '🔲',
  },
  {
    id: 'connected-sets',
    title: 'Connected Sets Demo',
    description: 'Visualize connected and disconnected sets, with separation examples.',
    sectionId: 11,
    sectionTitle: 'Connected Sets',
    category: 'Topology',
    icon: '🔗',
  },

  // Chapter 3: Numerical Sequences and Series
  {
    id: 'sequence-convergence',
    title: 'Sequence Convergence',
    description: 'Watch sequences converge to their limits with adjustable epsilon tolerance bands.',
    sectionId: 12,
    sectionTitle: 'Convergent Sequences',
    category: 'Sequences & Series',
    icon: '📈',
  },
  {
    id: 'subsequences',
    title: 'Subsequences Explorer',
    description: 'Extract and visualize subsequences from parent sequences.',
    sectionId: 14,
    sectionTitle: 'Subsequences',
    category: 'Sequences & Series',
    icon: '🔀',
  },
  {
    id: 'cauchy-sequences',
    title: 'Cauchy Sequences',
    description: 'Understand Cauchy sequences: terms eventually become arbitrarily close to each other.',
    sectionId: 15,
    sectionTitle: 'Cauchy Sequences',
    category: 'Sequences & Series',
    icon: '🎯',
  },
  {
    id: 'limsup-liminf',
    title: 'Limit Superior & Inferior',
    description: 'Visualize lim sup and lim inf as the largest and smallest cluster points.',
    sectionId: 16,
    sectionTitle: 'Upper and Lower Limits',
    category: 'Sequences & Series',
    icon: '↕️',
  },
  {
    id: 'series-convergence',
    title: 'Series Convergence Tests',
    description: 'Compare partial sums of convergent and divergent series.',
    sectionId: 17,
    sectionTitle: 'Series',
    category: 'Sequences & Series',
    icon: 'Σ',
  },
  {
    id: 'root-ratio-tests',
    title: 'Root & Ratio Tests',
    description: 'Apply the root and ratio tests to determine series convergence.',
    sectionId: 18,
    sectionTitle: 'Series Tests',
    category: 'Sequences & Series',
    icon: '🧪',
  },
  {
    id: 'power-series',
    title: 'Power Series Explorer',
    description: 'Visualize power series convergence within the radius of convergence.',
    sectionId: 19,
    sectionTitle: 'Power Series',
    category: 'Sequences & Series',
    icon: 'xⁿ',
  },

  // Chapter 4: Continuity
  {
    id: 'epsilon-delta-limits',
    title: 'ε-δ Definition of Limits',
    description: 'Interactive exploration of the epsilon-delta definition of function limits.',
    sectionId: 25,
    sectionTitle: 'Limits of Functions',
    category: 'Continuity',
    icon: 'ε',
  },
  {
    id: 'continuity-explorer',
    title: 'Continuity Explorer',
    description: 'Understand continuity through the epsilon-delta definition with interactive controls.',
    sectionId: 26,
    sectionTitle: 'Continuous Functions',
    category: 'Continuity',
    icon: '〰️',
  },
  {
    id: 'ivt-demo',
    title: 'Intermediate Value Theorem',
    description: 'Visualize why continuous functions on intervals must take all intermediate values.',
    sectionId: 30,
    sectionTitle: 'Continuity and Connectedness',
    category: 'Continuity',
    icon: '📊',
  },
  {
    id: 'uniform-continuity',
    title: 'Uniform Continuity',
    description: 'Compare uniform continuity with pointwise continuity on bounded and unbounded domains.',
    sectionId: 31,
    sectionTitle: 'Uniform Continuity',
    category: 'Continuity',
    icon: '≡',
  },
  {
    id: 'extreme-value',
    title: 'Extreme Value Theorem',
    description: 'Continuous functions on compact sets attain their maximum and minimum.',
    sectionId: 29,
    sectionTitle: 'Continuity and Compactness',
    category: 'Continuity',
    icon: '⛰️',
  },

  // Chapter 5: Differentiation
  {
    id: 'derivative-definition',
    title: 'Derivative as Limit',
    description: 'Watch secant lines approach the tangent line as h approaches 0.',
    sectionId: 35,
    sectionTitle: 'The Derivative',
    category: 'Differentiation',
    icon: "f'",
  },
  {
    id: 'mean-value-theorem',
    title: 'Mean Value Theorem',
    description: 'Visualize why there exists a point where the tangent equals the secant slope.',
    sectionId: 37,
    sectionTitle: 'Mean Value Theorem',
    category: 'Differentiation',
    icon: '📐',
  },
  {
    id: 'taylor-theorem',
    title: 'Taylor\'s Theorem',
    description: 'See how Taylor polynomials approximate functions near a point.',
    sectionId: 38,
    sectionTitle: 'Taylor\'s Theorem',
    category: 'Differentiation',
    icon: '🎯',
  },
  {
    id: 'lhopital',
    title: 'L\'Hôpital\'s Rule Demo',
    description: 'Evaluate limits of indeterminate forms using derivatives.',
    sectionId: 37,
    sectionTitle: 'Mean Value Theorem',
    category: 'Differentiation',
    icon: '0/0',
  },

  // Chapter 6: The Riemann-Stieltjes Integral
  {
    id: 'riemann-sums',
    title: 'Riemann Sum Visualizer',
    description: 'Partition intervals and watch upper/lower sums converge to the integral.',
    sectionId: 42,
    sectionTitle: 'Definition of the Integral',
    category: 'Integration',
    icon: '∫',
  },
  {
    id: 'upper-lower-sums',
    title: 'Upper & Lower Sums',
    description: 'Compare Darboux upper and lower sums as partitions refine.',
    sectionId: 42,
    sectionTitle: 'Definition of the Integral',
    category: 'Integration',
    icon: '▭',
  },
  {
    id: 'ftc-demo',
    title: 'Fundamental Theorem of Calculus',
    description: 'Visualize the connection between integration and differentiation.',
    sectionId: 45,
    sectionTitle: 'The Fundamental Theorem',
    category: 'Integration',
    icon: '🔄',
  },

  // Chapter 7: Sequences and Series of Functions
  {
    id: 'pointwise-convergence',
    title: 'Pointwise Convergence',
    description: 'Watch function sequences converge point by point to a limit function.',
    sectionId: 50,
    sectionTitle: 'Pointwise Convergence',
    category: 'Function Sequences',
    icon: '•',
  },
  {
    id: 'uniform-convergence',
    title: 'Uniform Convergence',
    description: 'Visualize uniform convergence using the epsilon-band criterion.',
    sectionId: 51,
    sectionTitle: 'Uniform Convergence',
    category: 'Function Sequences',
    icon: '≋',
  },
  {
    id: 'weierstrass-m-test',
    title: 'Weierstrass M-Test',
    description: 'Apply the M-test to establish uniform convergence of function series.',
    sectionId: 52,
    sectionTitle: 'Uniform Convergence Tests',
    category: 'Function Sequences',
    icon: 'M',
  },
  {
    id: 'stone-weierstrass',
    title: 'Stone-Weierstrass Approximation',
    description: 'Approximate continuous functions uniformly by polynomials.',
    sectionId: 55,
    sectionTitle: 'Stone-Weierstrass',
    category: 'Function Sequences',
    icon: 'Pₙ',
  },

  // Chapter 8: Special Functions
  {
    id: 'exponential-function',
    title: 'The Exponential Function',
    description: 'Explore e^x through its power series and fundamental properties.',
    sectionId: 60,
    sectionTitle: 'Power Series',
    category: 'Special Functions',
    icon: 'eˣ',
  },
  {
    id: 'trig-series',
    title: 'Trigonometric Series',
    description: 'Visualize sine and cosine as infinite series.',
    sectionId: 62,
    sectionTitle: 'Trigonometric Functions',
    category: 'Special Functions',
    icon: 'sin',
  },
  {
    id: 'fourier-series',
    title: 'Fourier Series',
    description: 'Decompose periodic functions into sums of sines and cosines.',
    sectionId: 65,
    sectionTitle: 'Fourier Series',
    category: 'Special Functions',
    icon: '🌊',
  },
  {
    id: 'gamma-function',
    title: 'The Gamma Function',
    description: 'Explore Γ(x) as an extension of the factorial to real numbers.',
    sectionId: 68,
    sectionTitle: 'The Gamma Function',
    category: 'Special Functions',
    icon: 'Γ',
  },

  // Chapter 9: Functions of Several Variables
  {
    id: 'partial-derivatives',
    title: 'Partial Derivatives',
    description: 'Visualize derivatives in each coordinate direction for multivariable functions.',
    sectionId: 70,
    sectionTitle: 'Differentiation',
    category: 'Multivariable',
    icon: '∂',
  },
  {
    id: 'contour-gradient',
    title: 'Contours & Gradients',
    description: 'See how gradients point perpendicular to level curves.',
    sectionId: 72,
    sectionTitle: 'The Gradient',
    category: 'Multivariable',
    icon: '∇',
  },
  {
    id: 'inverse-function',
    title: 'Inverse Function Theorem',
    description: 'Visualize when local inverses exist based on the Jacobian.',
    sectionId: 75,
    sectionTitle: 'Inverse Function Theorem',
    category: 'Multivariable',
    icon: 'f⁻¹',
  },
  {
    id: 'implicit-function',
    title: 'Implicit Function Theorem',
    description: 'Explore how implicit equations define explicit functions locally.',
    sectionId: 76,
    sectionTitle: 'Implicit Function Theorem',
    category: 'Multivariable',
    icon: 'F=0',
  },

  // Chapter 10: Integration of Differential Forms
  {
    id: 'line-integrals',
    title: 'Line Integrals',
    description: 'Integrate vector fields along curves in 2D and 3D.',
    sectionId: 80,
    sectionTitle: 'Integration',
    category: 'Differential Forms',
    icon: '∮',
  },
  {
    id: 'greens-theorem',
    title: 'Green\'s Theorem',
    description: 'Relate a line integral around a curve to a double integral over the enclosed region.',
    sectionId: 82,
    sectionTitle: 'Green\'s Theorem',
    category: 'Differential Forms',
    icon: '🟢',
  },
  {
    id: 'stokes-theorem',
    title: 'Stokes\' Theorem',
    description: 'Visualize the generalization of Green\'s theorem to surfaces in 3D.',
    sectionId: 84,
    sectionTitle: 'Stokes\' Theorem',
    category: 'Differential Forms',
    icon: '🔵',
  },

  // Chapter 11: Lebesgue Theory
  {
    id: 'measure-theory',
    title: 'Measure Theory Intro',
    description: 'Understand the concept of measure as a generalization of length.',
    sectionId: 85,
    sectionTitle: 'Set Functions',
    category: 'Lebesgue Theory',
    icon: 'μ',
  },
  {
    id: 'lebesgue-integral',
    title: 'Lebesgue vs Riemann',
    description: 'Compare the Lebesgue and Riemann integral approaches.',
    sectionId: 86,
    sectionTitle: 'The Lebesgue Integral',
    category: 'Lebesgue Theory',
    icon: '∫ₗ',
  },
];
// =============================================================================

export default function InteractiveModules() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(modules.map((m) => m.category))];
  const filteredModules = selectedCategory
    ? modules.filter((m) => m.category === selectedCategory)
    : modules;

  // Group modules by category for display
  const groupedModules = filteredModules.reduce(
    (acc, module) => {
      if (!acc[module.category]) {
        acc[module.category] = [];
      }
      acc[module.category].push(module);
      return acc;
    },
    {} as Record<string, InteractiveModule[]>
  );

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Interactive Modules</h1>
          <p className="text-dark-400 mb-4">
            Explore Rudin's Principles of Mathematical Analysis through hands-on visualizations
          </p>
          <p className="text-sm text-dark-500 mb-8">
            {modules.length} interactive modules across {categories.length} categories
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
              }`}
            >
              All ({modules.length})
            </button>
            {categories.map((category) => {
              const count = modules.filter((m) => m.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Module grid - grouped by category when viewing all */}
          {selectedCategory === null ? (
            Object.entries(groupedModules).map(([category, categoryModules]) => (
              <div key={category} className="mb-10">
                <h2 className="text-xl font-semibold text-dark-200 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryModules.map((module) => (
                    <Link
                      key={module.id}
                      to={`/section/${module.sectionId}`}
                      className="p-5 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-200 group hover:bg-dark-800/70"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-xl shrink-0">
                          {module.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-dark-100 group-hover:text-primary-400 transition-colors truncate">
                            {module.title}
                          </h3>
                          <p className="text-xs text-dark-400 mt-1 line-clamp-2">
                            {module.description}
                          </p>
                          <div className="text-xs text-dark-500 mt-2">
                            Section {module.sectionId}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModules.map((module) => (
                <Link
                  key={module.id}
                  to={`/section/${module.sectionId}`}
                  className="p-5 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-200 group hover:bg-dark-800/70"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-xl shrink-0">
                      {module.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-xs text-dark-400 mt-1 line-clamp-2">
                        {module.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-dark-500">
                          Section {module.sectionId}: {module.sectionTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {filteredModules.length === 0 && (
            <div className="text-center py-12 text-dark-400">
              No modules found in this category.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
