import { useState } from 'react';
import { Header, Sidebar } from '@/components/layout';
import { ChannelBalanceVisualizer } from '@/components/visualizations/ChannelBalanceVisualizer';
import { SatoshiConverter } from '@/components/visualizations/SatoshiConverter';

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
  component: React.ComponentType;
}

const modules: InteractiveModule[] = [
  {
    id: 'satoshi-converter',
    title: 'Bitcoin Unit Converter',
    description: 'Convert between BTC, mBTC, satoshis, and millisatoshis. Understand the relationship between units used in Lightning payments.',
    sectionId: 1,
    sectionTitle: 'Bitcoin Fundamentals',
    category: 'Basics',
    icon: '🔢',
    component: SatoshiConverter,
  },
  {
    id: 'channel-visualizer',
    title: 'Channel Balance Visualizer',
    description: 'Explore how Lightning channels work. Visualize local/remote balances, open channels, and simulate payments.',
    sectionId: 7,
    sectionTitle: 'Channel Management',
    category: 'Channels',
    icon: '⚡',
    component: ChannelBalanceVisualizer,
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

  const activeModuleData = modules.find(m => m.id === activeModule);

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Interactive Modules</h1>
          <p className="text-dark-400 mb-8">
            Explore Zeus and Lightning concepts through hands-on interactive visualizations
          </p>

          {/* Show active module or module list */}
          {activeModule && activeModuleData ? (
            <div>
              <button
                onClick={() => setActiveModule(null)}
                className="mb-6 text-amber-400 hover:text-amber-300 flex items-center gap-2"
              >
                <span>&larr;</span> Back to all modules
              </button>
              <activeModuleData.component />
            </div>
          ) : (
            <>
              {/* Category filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === null
                      ? 'bg-amber-500 text-white'
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
                        ? 'bg-amber-500 text-white'
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
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className="p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group text-left"
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
                            Section {module.sectionId}: {module.sectionTitle}
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
            </>
          )}
        </div>
      </main>
    </div>
  );
}
