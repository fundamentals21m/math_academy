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
  {
    id: 'metric-balls',
    title: 'Metric Balls Visualizer',
    description: 'Compare open balls in Euclidean, taxicab, and sup norm metrics to see how different metrics define "nearness".',
    sectionId: 0,
    sectionTitle: 'Metric Spaces',
    category: 'Metric Spaces',
    icon: '⭕',
  },
  {
    id: 'sequence-convergence',
    title: 'Sequence Convergence',
    description: 'Visualize how sequences converge with interactive ε-bands and N-thresholds.',
    sectionId: 2,
    sectionTitle: 'Point-Set Topology',
    category: 'Metric Spaces',
    icon: '📈',
  },
  {
    id: 'epsilon-delta',
    title: 'ε-δ Continuity',
    description: 'Explore the epsilon-delta definition of continuity with interactive sliders.',
    sectionId: 5,
    sectionTitle: 'Continuous Functions',
    category: 'Continuous Functions',
    icon: '🎯',
  },
  {
    id: 'uniform-convergence',
    title: 'Uniform vs Pointwise Convergence',
    description: 'Compare uniform and pointwise convergence using fₙ(x) = xⁿ on [0,1].',
    sectionId: 11,
    sectionTitle: 'Pointwise & Uniform Convergence',
    category: 'Uniform Convergence',
    icon: '📊',
  },
  {
    id: 'power-series',
    title: 'Power Series Convergence',
    description: 'Watch partial sums of power series converge to their exact values.',
    sectionId: 18,
    sectionTitle: 'Formal Power Series',
    category: 'Power Series',
    icon: '∑',
  },
  {
    id: 'fourier-series',
    title: 'Fourier Series Approximation',
    description: 'See how Fourier series approximate square, sawtooth, and triangle waves.',
    sectionId: 25,
    sectionTitle: 'Periodic Functions',
    category: 'Fourier Series',
    icon: '🌊',
  },
  {
    id: 'gradient-field',
    title: 'Gradient Vector Field',
    description: 'Visualize gradient vectors on contour plots of multivariable functions.',
    sectionId: 32,
    sectionTitle: 'Partial & Directional Derivatives',
    category: 'Multivariable Calculus',
    icon: '🧭',
  },
  {
    id: 'implicit-function',
    title: 'Implicit Function Theorem',
    description: 'Explore level curves with tangent and normal vectors using implicit differentiation.',
    sectionId: 37,
    sectionTitle: 'Implicit Function Theorem',
    category: 'Multivariable Calculus',
    icon: '🔄',
  },
  {
    id: 'contraction-mapping',
    title: 'Contraction Mapping Iteration',
    description: 'Visualize fixed-point iteration with cobweb diagrams.',
    sectionId: 35,
    sectionTitle: 'Contraction Mapping Theorem',
    category: 'Multivariable Calculus',
    icon: '🎪',
  },
  {
    id: 'riemann-lebesgue',
    title: 'Riemann vs Lebesgue Integration',
    description: 'Compare vertical (Riemann) and horizontal (Lebesgue) slicing approaches to integration.',
    sectionId: 43,
    sectionTitle: 'Comparison with Riemann',
    category: 'Lebesgue Integration',
    icon: '📐',
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
