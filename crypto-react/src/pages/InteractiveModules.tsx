import { useState } from 'react';
import { Header, Sidebar } from '@/components/layout';
import { ClockArithmetic, GCDCalculator, PrimeCalculator, TotientCalculator, RSADemo } from '@/components/visualizations';

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
    id: 'clock-arithmetic',
    title: 'Clock Arithmetic',
    description: 'Visualize modular arithmetic using a clock face. See how numbers wrap around.',
    category: 'Modular Arithmetic',
    icon: '🕐',
    component: ClockArithmetic,
  },
  {
    id: 'prime-calculator',
    title: 'Prime Calculator',
    description: 'Check if numbers are prime and find their prime factorization.',
    category: 'Number Theory',
    icon: '🔢',
    component: PrimeCalculator,
  },
  {
    id: 'gcd-calculator',
    title: 'GCD Calculator',
    description: 'Step through the Euclidean algorithm to find the greatest common divisor.',
    category: 'Number Theory',
    icon: '📐',
    component: GCDCalculator,
  },
  {
    id: 'totient-calculator',
    title: "Euler's Totient",
    description: "Calculate φ(n) and see which numbers are coprime to n.",
    category: 'Number Theory',
    icon: 'φ',
    component: TotientCalculator,
  },
  {
    id: 'rsa-demo',
    title: 'RSA Encryption',
    description: 'Generate RSA keys and encrypt/decrypt messages step by step.',
    category: 'Cryptography',
    icon: '🔐',
    component: RSADemo,
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

  const selectedModule = modules.find((m) => m.id === activeModule);

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Interactive Modules</h1>
          <p className="text-dark-400 mb-8">
            Explore cryptographic concepts through hands-on interactive visualizations
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

          {/* Active module display */}
          {selectedModule && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-dark-100">
                  {selectedModule.icon} {selectedModule.title}
                </h2>
                <button
                  onClick={() => setActiveModule(null)}
                  className="px-3 py-1 rounded-lg bg-dark-800 text-dark-400 hover:text-dark-200 text-sm transition-colors"
                >
                  Close
                </button>
              </div>
              <selectedModule.component />
            </div>
          )}

          {/* Module grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredModules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id === activeModule ? null : module.id)}
                className={`p-6 rounded-2xl border transition-colors text-left ${
                  activeModule === module.id
                    ? 'bg-primary-500/10 border-primary-500/50'
                    : 'bg-dark-800/50 border-dark-700/50 hover:border-primary-500/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-2xl">
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold transition-colors ${
                      activeModule === module.id ? 'text-primary-400' : 'text-dark-100'
                    }`}>
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
