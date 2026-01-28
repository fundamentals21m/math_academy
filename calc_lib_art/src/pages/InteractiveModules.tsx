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
    id: 'calculus-dual-view',
    title: 'Derivative vs Integral',
    description: 'Toggle between tangent slope (derivative) and area (integral) views of the same curve.',
    sectionId: 0,
    sectionTitle: 'What is Calculus?',
    category: 'Foundations',
    icon: '🔄',
  },
  {
    id: 'achilles-tortoise',
    title: 'Achilles and the Tortoise',
    description: 'Watch the race unfold as infinite divisions converge to a finite answer.',
    sectionId: 1,
    sectionTitle: "Zeno's Paradoxes",
    category: 'Foundations',
    icon: '🐢',
  },
  {
    id: 'infinite-series',
    title: 'Infinite Series Visualizer',
    description: 'See how 1/2 + 1/4 + 1/8 + ... converges visually as partial sums accumulate.',
    sectionId: 2,
    sectionTitle: 'Taming Infinity',
    category: 'Foundations',
    icon: '∞',
  },
  {
    id: 'newton-fluxions',
    title: "Newton's Fluents and Fluxions",
    description: "Visualize Newton's motion-based approach to calculus with flowing quantities.",
    sectionId: 3,
    sectionTitle: "Newton's Approach",
    category: 'History',
    icon: '🍎',
  },
  {
    id: 'leibniz-notation',
    title: 'dy/dx Infinitesimals',
    description: 'Explore Leibniz notation with infinitesimally thin rectangles showing the ratio dy/dx.',
    sectionId: 4,
    sectionTitle: "Leibniz's Notation",
    category: 'History',
    icon: '📜',
  },
  {
    id: 'priority-timeline',
    title: 'Newton vs Leibniz Timeline',
    description: 'Interactive timeline of the calculus priority dispute between Newton and Leibniz.',
    sectionId: 5,
    sectionTitle: 'The Priority Dispute',
    category: 'History',
    icon: '📅',
  },
  {
    id: 'secant-to-tangent',
    title: 'Secant to Tangent',
    description: 'Drag the slider to see how a secant line becomes a tangent as h approaches 0.',
    sectionId: 6,
    sectionTitle: 'The Tangent Problem',
    category: 'Derivatives',
    icon: '📐',
  },
  {
    id: 'instantaneous-velocity',
    title: 'Instantaneous Velocity',
    description: 'Explore how average velocity becomes instantaneous as the time interval shrinks.',
    sectionId: 7,
    sectionTitle: 'Instantaneous Velocity',
    category: 'Derivatives',
    icon: '🚗',
  },
  {
    id: 'derivative-explorer',
    title: 'Derivative Explorer',
    description: 'Compare functions with their derivatives and explore tangent lines interactively.',
    sectionId: 8,
    sectionTitle: 'The Meaning of the Derivative',
    category: 'Derivatives',
    icon: '📈',
  },
  {
    id: 'riemann-sums',
    title: 'Riemann Sum Explorer',
    description: 'Add more rectangles to see the area approximation converge to the true integral.',
    sectionId: 9,
    sectionTitle: 'The Area Problem',
    category: 'Integrals',
    icon: '📊',
  },
  {
    id: 'accumulation-function',
    title: 'Accumulation Function',
    description: 'See how F(x) = ∫ f(t)dt accumulates area as you drag the endpoint.',
    sectionId: 10,
    sectionTitle: 'Accumulation and Totals',
    category: 'Integrals',
    icon: '📦',
  },
  {
    id: 'fundamental-theorem',
    title: 'Fundamental Theorem Demo',
    description: 'Visualize the connection between derivatives and integrals with linked graphs.',
    sectionId: 11,
    sectionTitle: 'The Fundamental Theorem',
    category: 'Integrals',
    icon: '🔗',
  },
  {
    id: 'physics-calculus',
    title: 'Position, Velocity, Acceleration',
    description: 'See how derivatives connect position, velocity, and acceleration in physics.',
    sectionId: 12,
    sectionTitle: 'Calculus and Physics',
    category: 'Applications',
    icon: '⚡',
  },
  {
    id: 'fourier-waves',
    title: 'Fourier Wave Synthesis',
    description: 'Combine sine waves to create complex sounds—the mathematics of music.',
    sectionId: 13,
    sectionTitle: 'Calculus in Art and Music',
    category: 'Applications',
    icon: '🎵',
  },
  {
    id: 'math-nature',
    title: 'Mathematics in Nature',
    description: 'Explore spirals, catenary curves, and planetary orbits—where calculus meets nature.',
    sectionId: 14,
    sectionTitle: 'Unreasonable Effectiveness',
    category: 'Applications',
    icon: '🌀',
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
