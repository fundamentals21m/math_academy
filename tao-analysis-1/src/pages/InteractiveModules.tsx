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
  // Real Numbers & Sequences
  {
    id: 'cauchy-sequence-explorer',
    title: 'Cauchy Sequence Explorer',
    description: 'Visualize how Cauchy sequences converge. Adjust ε and see which terms satisfy |aₙ - aₘ| < ε for large n, m.',
    sectionId: 15,
    sectionTitle: 'Cauchy sequences',
    category: 'Real Numbers',
    icon: '∞',
  },
  {
    id: 'supremum-infimum-tool',
    title: 'Supremum & Infimum Explorer',
    description: 'Explore the least upper bound property. Adjust sets and see how suprema and infima are determined.',
    sectionId: 19,
    sectionTitle: 'The least upper bound property',
    category: 'Real Numbers',
    icon: '⊔',
  },
  // Limits
  {
    id: 'sequence-limit-visualizer',
    title: 'Sequence Limit Visualizer',
    description: 'See the ε-N definition in action. Choose ε and find N such that |aₙ - L| < ε for all n > N.',
    sectionId: 21,
    sectionTitle: 'Convergence and limit laws',
    category: 'Limits',
    icon: 'ε',
  },
  {
    id: 'function-limit-explorer',
    title: 'Function Limit Explorer',
    description: 'Explore limits of functions at a point. Visualize the ε-δ definition interactively.',
    sectionId: 40,
    sectionTitle: 'Limiting values of functions',
    category: 'Limits',
    icon: 'δ',
  },
  // Infinite Sets
  {
    id: 'cantor-diagonal',
    title: 'Cantor Diagonal Argument',
    description: "Step through Cantor's diagonal proof that ℝ is uncountable. Build the anti-diagonal number interactively.",
    sectionId: 35,
    sectionTitle: 'Uncountable sets',
    category: 'Infinite Sets',
    icon: '⋱',
  },
  // Continuity
  {
    id: 'continuity-tester',
    title: 'Continuity Tester',
    description: 'Test if functions are continuous at a point using the ε-δ game. Given ε, find δ to win!',
    sectionId: 41,
    sectionTitle: 'Continuous functions',
    category: 'Continuity',
    icon: '≈',
  },
  {
    id: 'ivt-visualizer',
    title: 'IVT Visualizer',
    description: 'See the Intermediate Value Theorem in action. Find roots using bisection on continuous functions.',
    sectionId: 44,
    sectionTitle: 'The intermediate value theorem',
    category: 'Continuity',
    icon: '⟷',
  },
  // Differentiation
  {
    id: 'derivative-explorer',
    title: 'Derivative Explorer',
    description: 'Watch secant lines approach the tangent as h → 0. Understand the derivative as a limit geometrically.',
    sectionId: 48,
    sectionTitle: 'Basic definitions',
    category: 'Differentiation',
    icon: "f'",
  },
  // Integration
  {
    id: 'riemann-sum-visualizer',
    title: 'Riemann Sum Visualizer',
    description: 'Explore upper and lower Darboux sums. See how they converge as partitions get finer.',
    sectionId: 55,
    sectionTitle: 'Upper and lower Riemann integrals',
    category: 'Integration',
    icon: '∫',
  },
  // Series
  {
    id: 'series-convergence',
    title: 'Series Convergence Tester',
    description: 'Visualize partial sums and test series convergence. Apply root and ratio tests interactively.',
    sectionId: 32,
    sectionTitle: 'The root and ratio tests',
    category: 'Series',
    icon: 'Σ',
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
