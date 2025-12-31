import { useState } from 'react';
import { Header, Sidebar } from '@/components/layout';
import {
  VectorSpaceExplorer,
  TransformationVisualizer,
  MatrixCalculator,
  EigenvalueExplorer,
  DeterminantCalculator,
} from '@/components/visualizations';

// =============================================================================
// INTERACTIVE MODULE DEFINITIONS
// =============================================================================
interface InteractiveModule {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  component: React.ComponentType<{ className?: string }>;
}

const modules: InteractiveModule[] = [
  {
    id: 'vector-space',
    title: 'Vector Space Explorer',
    description: 'Visualize vectors, linear combinations, and span in R².',
    category: 'Vector Spaces',
    icon: '📐',
    component: VectorSpaceExplorer,
  },
  {
    id: 'transformation',
    title: 'Transformation Visualizer',
    description: 'See how matrices transform the plane and basis vectors.',
    category: 'Linear Transformations',
    icon: '🔄',
    component: TransformationVisualizer,
  },
  {
    id: 'matrix-calc',
    title: 'Matrix Calculator',
    description: 'Perform matrix operations with step-by-step solutions.',
    category: 'Matrices',
    icon: '🧮',
    component: MatrixCalculator,
  },
  {
    id: 'eigenvalue',
    title: 'Eigenvalue Explorer',
    description: 'Visualize eigenvectors and how matrices act on them.',
    category: 'Eigentheory',
    icon: '🎯',
    component: EigenvalueExplorer,
  },
  {
    id: 'determinant',
    title: 'Determinant Calculator',
    description: 'Compute determinants using cofactor expansion or row reduction.',
    category: 'Determinants',
    icon: '📊',
    component: DeterminantCalculator,
  },
];
// =============================================================================

export default function InteractiveModules() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const categories = [...new Set(modules.map((m) => m.category))];
  const filteredModules = selectedCategory
    ? modules.filter((m) => m.category === selectedCategory)
    : modules;

  const ActiveComponent = activeModule
    ? modules.find((m) => m.id === activeModule)?.component
    : null;

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Interactive Modules</h1>
          <p className="text-dark-400 mb-8">
            Explore linear algebra concepts through hands-on interactive visualizations
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setActiveModule(null);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === null && !activeModule
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveModule(null);
                }}
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

          {/* Active module display */}
          {activeModule && ActiveComponent && (
            <div className="mb-8">
              <button
                onClick={() => setActiveModule(null)}
                className="mb-4 text-dark-400 hover:text-dark-200 flex items-center gap-2"
              >
                ← Back to all modules
              </button>
              <ActiveComponent />
            </div>
          )}

          {/* Module grid */}
          {!activeModule && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredModules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-colors group text-left"
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
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {filteredModules.length === 0 && !activeModule && (
            <div className="text-center py-12 text-dark-400">
              No modules found in this category.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
