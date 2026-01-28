import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';

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
}

const modules: InteractiveModule[] = [
  {
    id: 'attack-flow-simulator',
    title: 'Attack Flow Simulator',
    description: 'Step-by-step animation showing how clipboard hijacking attacks work, with and without Branta protection.',
    sectionId: 2,
    sectionTitle: 'Address Swap Attacks',
    category: 'Security',
    icon: '🔄',
  },
  {
    id: 'address-swap-detector',
    title: 'Address Swap Detector',
    description: 'Interactive clipboard simulation demonstrating how malware swaps addresses in real-time.',
    sectionId: 4,
    sectionTitle: 'Clipboard Hijacking',
    category: 'Security',
    icon: '📋',
  },
  {
    id: 'verification-flow',
    title: 'Verification Flow Diagram',
    description: 'Animated flowchart showing the complete registration → verification → payment lifecycle.',
    sectionId: 6,
    sectionTitle: 'What is Guardrail?',
    category: 'Verification',
    icon: '✓',
  },
  {
    id: 'api-request-builder',
    title: 'API Request Builder',
    description: 'Build Guardrail API requests interactively and see the expected responses.',
    sectionId: 9,
    sectionTitle: 'Adding Payments',
    category: 'API',
    icon: '🔧',
  },
  {
    id: 'ttl-timeline',
    title: 'TTL Timeline Visualizer',
    description: 'Visual timeline showing how registrations expire, with time simulation controls.',
    sectionId: 11,
    sectionTitle: 'TTL & Payment Lifecycle',
    category: 'API',
    icon: '⏱️',
  },
  {
    id: 'zero-knowledge-demo',
    title: 'Zero-Knowledge Demo',
    description: 'Visual explanation of commitment schemes and how ZK verification preserves privacy.',
    sectionId: 16,
    sectionTitle: 'Zero Knowledge Verification',
    category: 'Privacy',
    icon: '🔐',
  },
  {
    id: 'bitcoin-address-explorer',
    title: 'Bitcoin Address Explorer',
    description: 'Explore different Bitcoin address formats (Legacy, SegWit, Taproot) and their characteristics.',
    sectionId: 6,
    sectionTitle: 'What is Guardrail?',
    category: 'Technical',
    icon: '₿',
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
            Explore Branta concepts through hands-on interactive visualizations
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center text-2xl">
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark-100 group-hover:text-amber-400 transition-colors">
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
