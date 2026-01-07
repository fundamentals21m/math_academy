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
    id: 'platonic-solids',
    title: 'Platonic Solids',
    description: 'Explore the five regular polyhedra: tetrahedron, cube, octahedron, dodecahedron, and icosahedron. Rotate them and verify Euler\'s formula.',
    sectionId: 8,
    sectionTitle: 'Regular Polyhedra',
    category: 'Dawn of Greek Mathematics',
    icon: '🎲',
  },
  {
    id: 'irrational-sqrt2',
    title: 'The Irrationality of √2',
    description: 'See why √2 cannot be a ratio of integers through geometric and algebraic proofs. Explore continued fraction approximations.',
    sectionId: 9,
    sectionTitle: 'The Crisis of Incommensurables',
    category: 'Dawn of Greek Mathematics',
    icon: '📐',
  },
  {
    id: 'ruler-compass',
    title: 'Ruler & Compass Constructions',
    description: 'Step through classical geometric constructions: perpendiculars, angle bisectors, equilateral triangles, and regular hexagons.',
    sectionId: 13,
    sectionTitle: 'Constructions with Ruler and Compass',
    category: 'Classical Greek Mathematics',
    icon: '📏',
  },
  {
    id: 'continued-fractions',
    title: 'Continued Fractions',
    description: 'See how real numbers unfold as continued fractions. Discover patterns in √2, φ, e, and π. Find best rational approximations.',
    sectionId: 44,
    sectionTitle: 'Continued Fractions',
    category: 'Set Theory and Number Theory',
    icon: '🔢',
  },
  {
    id: 'turing-machine',
    title: 'Turing Machine',
    description: 'Watch a simple Turing machine increment a binary number. See the tape, head, states, and transitions in action.',
    sectionId: 49,
    sectionTitle: 'What Is a Calculation?',
    category: 'Computability and Logic',
    icon: '🤖',
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

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
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
