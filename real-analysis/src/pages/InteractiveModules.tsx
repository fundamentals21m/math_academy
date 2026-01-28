import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';

// =============================================================================
// INTERACTIVE MODULE DEFINITIONS - Add your modules here
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
  // Part 1: Foundations
  {
    id: 'completeness',
    title: 'Completeness of ℝ',
    description: 'Explore the least upper bound property. See why ℚ has "holes" and how ℝ fills them. Visualize Dedekind cuts.',
    sectionId: 1,
    sectionTitle: 'The Real Number System',
    category: 'Foundations',
    icon: '∅',
  },
  {
    id: 'countability',
    title: 'Countable vs Uncountable',
    description: 'Compare the sizes of infinite sets. See Cantor\'s diagonal argument proving ℝ is uncountable while ℚ is countable.',
    sectionId: 3,
    sectionTitle: 'Finite and Infinite Sets',
    category: 'Foundations',
    icon: '∞',
  },
  // Part 2: Sequences and Series
  {
    id: 'sequence-convergence',
    title: 'Sequence Convergence Explorer',
    description: 'Visualize the ε-N definition of sequence convergence. See how sequences approach their limits and find the N that works for any ε.',
    sectionId: 5,
    sectionTitle: 'Sequences and Their Limits',
    category: 'Sequences',
    icon: '📈',
  },
  {
    id: 'series-convergence',
    title: 'Series Convergence Demo',
    description: 'Watch partial sums of infinite series converge (or diverge). Compare famous series like the Basel problem, geometric series, and harmonic series.',
    sectionId: 6,
    sectionTitle: 'Infinite Series',
    category: 'Series',
    icon: 'Σ',
  },
  {
    id: 'convergence-tests',
    title: 'Convergence Tests Visualizer',
    description: 'Apply ratio test, root test, and comparison tests to series. See why each test works through visual comparisons.',
    sectionId: 7,
    sectionTitle: 'Convergence Tests',
    category: 'Series',
    icon: '⚖️',
  },
  {
    id: 'power-series',
    title: 'Power Series Explorer',
    description: 'Explore radius of convergence. See how Taylor series approximate functions better as you add more terms.',
    sectionId: 8,
    sectionTitle: 'Power Series',
    category: 'Series',
    icon: 'xⁿ',
  },
  // Part 3: Continuity and Differentiation
  {
    id: 'epsilon-delta',
    title: 'ε-δ Definition of Limits',
    description: 'Interactive exploration of the rigorous epsilon-delta definition of limits. Adjust ε and δ to see how they constrain the function.',
    sectionId: 9,
    sectionTitle: 'Limits and Continuity',
    category: 'Limits',
    icon: 'δ',
  },
  {
    id: 'intermediate-value',
    title: 'Intermediate Value Theorem',
    description: 'See why continuous functions on closed intervals hit every value between f(a) and f(b). Visualize root-finding.',
    sectionId: 10,
    sectionTitle: 'Continuous Functions',
    category: 'Continuity',
    icon: '↔',
  },
  {
    id: 'mean-value',
    title: 'Mean Value Theorem',
    description: 'Find the point where the tangent is parallel to the secant. See the geometric and analytic meaning of MVT.',
    sectionId: 11,
    sectionTitle: 'Differentiation',
    category: 'Differentiation',
    icon: '∥',
  },
  // Part 4: Integration
  {
    id: 'riemann-sums',
    title: 'Riemann Sums Visualizer',
    description: 'Build the Riemann integral from partitions. Compare left, right, and midpoint sums as partitions get finer.',
    sectionId: 13,
    sectionTitle: 'The Riemann Integral',
    category: 'Integration',
    icon: '∫',
  },
  {
    id: 'ftc',
    title: 'Fundamental Theorem of Calculus',
    description: 'See the connection between differentiation and integration. Watch how the area function\'s derivative equals the original function.',
    sectionId: 14,
    sectionTitle: 'Fundamental Theorem of Calculus',
    category: 'Integration',
    icon: '∮',
  },
  {
    id: 'uniform-convergence',
    title: 'Uniform vs Pointwise Convergence',
    description: 'Compare uniform and pointwise convergence of function sequences. See why the supremum norm matters for uniform convergence.',
    sectionId: 15,
    sectionTitle: 'Sequences of Functions',
    category: 'Function Sequences',
    icon: '∥∥',
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

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-72 lg:pr-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Interactive Modules</h1>
          <p className="text-dark-400 mb-8">
            Explore concepts through hands-on interactive visualizations
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
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Module grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredModules.map((module) => (
              <Link
                key={module.id}
                to={`/section/${module.sectionId}`}
                className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-2xl">
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm text-dark-400 mt-1">{module.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xs px-2 py-1 rounded bg-dark-700 text-dark-300">
                        {module.category}
                      </span>
                      <span className="text-xs text-dark-500">
                        Section {module.sectionId}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
