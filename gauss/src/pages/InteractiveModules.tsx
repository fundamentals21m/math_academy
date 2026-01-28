import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';
import {
  ModularArithmeticCalculator,
  EuclideanAlgorithmVisualizer,
  PrimitiveRootExplorer,
  QuadraticResidueChecker,
  BinaryQuadraticFormExplorer,
  PellEquationSolver,
  ConstructiblePolygonDemo,
} from '@/components/visualizations';

// =============================================================================
// INTERACTIVE MODULE DEFINITIONS
// =============================================================================
interface InteractiveModule {
  id: string;
  title: string;
  description: string;
  sectionId: number;
  sectionTitle: string;
  category: string;
  icon: string;
  component: React.ComponentType<{ className?: string }>;
}

const modules: InteractiveModule[] = [
  {
    id: 'modular-arithmetic',
    title: 'Modular Arithmetic Calculator',
    description: 'Perform addition, subtraction, multiplication, and exponentiation modulo m.',
    sectionId: 0,
    sectionTitle: 'Congruent Numbers and Moduli',
    category: 'Foundations',
    icon: '🔢',
    component: ModularArithmeticCalculator,
  },
  {
    id: 'euclidean-algorithm',
    title: 'Euclidean Algorithm Visualizer',
    description: 'Watch the Euclidean algorithm find the GCD step by step.',
    sectionId: 1,
    sectionTitle: 'Linear Congruences',
    category: 'Foundations',
    icon: '📐',
    component: EuclideanAlgorithmVisualizer,
  },
  {
    id: 'primitive-roots',
    title: 'Primitive Root Explorer',
    description: 'Find primitive roots and explore the multiplicative group modulo a prime.',
    sectionId: 2,
    sectionTitle: 'Primitive Roots',
    category: 'Primitive Roots',
    icon: '🌱',
    component: PrimitiveRootExplorer,
  },
  {
    id: 'quadratic-residues',
    title: 'Quadratic Residue Checker',
    description: "Test whether a number is a quadratic residue using Euler's criterion.",
    sectionId: 3,
    sectionTitle: 'Quadratic Residues',
    category: 'Quadratic Residues',
    icon: '✓',
    component: QuadraticResidueChecker,
  },
  {
    id: 'binary-quadratic-forms',
    title: 'Binary Quadratic Form Explorer',
    description: 'Explore which integers can be represented by ax² + bxy + cy².',
    sectionId: 4,
    sectionTitle: 'Binary Quadratic Forms',
    category: 'Quadratic Forms',
    icon: '📊',
    component: BinaryQuadraticFormExplorer,
  },
  {
    id: 'pell-equation',
    title: 'Pell Equation Solver',
    description: 'Find solutions to x² - Dy² = 1 using continued fractions.',
    sectionId: 5,
    sectionTitle: 'Various Applications',
    category: 'Diophantine Equations',
    icon: '🔍',
    component: PellEquationSolver,
  },
  {
    id: 'constructible-polygons',
    title: 'Constructible Polygon Demo',
    description: 'Explore which regular n-gons can be constructed with compass and straightedge.',
    sectionId: 6,
    sectionTitle: 'Cyclotomy',
    category: 'Cyclotomy',
    icon: '⬡',
    component: ConstructiblePolygonDemo,
  },
];
// =============================================================================

export default function InteractiveModules() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

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
            Explore number theory concepts through hands-on interactive visualizations
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

          {/* Module cards with expandable demos */}
          <div className="space-y-4">
            {filteredModules.map((module) => {
              const isExpanded = expandedModule === module.id;
              const ModuleComponent = module.component;

              return (
                <div
                  key={module.id}
                  className="rounded-2xl bg-dark-800/50 border border-dark-700/50 overflow-hidden transition-all duration-300"
                >
                  {/* Header */}
                  <div
                    onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                    className="p-6 cursor-pointer hover:bg-dark-800/70 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-2xl flex-shrink-0">
                        {module.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-dark-100">
                            {module.title}
                          </h3>
                          <svg
                            className={`w-5 h-5 text-dark-400 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-dark-400 mt-1">{module.description}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xs px-2 py-1 rounded bg-dark-700 text-dark-300">
                            {module.category}
                          </span>
                          <Link
                            to={`/section/${module.sectionId}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs text-primary-400 hover:text-primary-300"
                          >
                            Section {module.sectionId}: {module.sectionTitle}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded module */}
                  {isExpanded && (
                    <div className="border-t border-dark-700/50 p-6 bg-dark-900/30">
                      <ModuleComponent />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredModules.length === 0 && (
            <div className="text-center py-12 text-dark-400">
              No modules found in this category.
            </div>
          )}

          {/* Info callout */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-dark-800/50 border border-amber-500/20">
            <p className="text-amber-300 text-sm">
              <span className="font-semibold">Tip:</span> These interactive modules are also
              embedded in their respective lesson sections for context-aware learning.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
