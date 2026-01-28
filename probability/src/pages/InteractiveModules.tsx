import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';

// =============================================================================
// INTERACTIVE MODULE DEFINITIONS - Probability & Combinatorics
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
  // Introduction & Basic Counting
  {
    id: 'counting-intro',
    title: 'Counting Fundamentals',
    description: 'Explore why systematic counting is the foundation of probability.',
    sectionId: 1,
    sectionTitle: 'Introduction',
    category: 'Fundamentals',
    icon: '🔢',
  },
  {
    id: 'multiplication-principle',
    title: 'Multiplication Principle',
    description: 'Visualize multi-stage processes where choices are independent.',
    sectionId: 1,
    sectionTitle: 'Introduction',
    category: 'Fundamentals',
    icon: '×',
  },
  {
    id: 'tree-diagrams',
    title: 'Tree Diagram Builder',
    description: 'Construct tree diagrams to enumerate all outcomes of sequential choices.',
    sectionId: 1,
    sectionTitle: 'Introduction',
    category: 'Fundamentals',
    icon: '🌳',
  },

  // Permutations
  {
    id: 'permutation-calculator',
    title: 'Permutation Calculator',
    description: 'Compute P(n,r) = n!/(n-r)! for ordered arrangements.',
    sectionId: 2,
    sectionTitle: 'Permutations',
    category: 'Permutations',
    icon: 'P',
  },
  {
    id: 'factorial-visualizer',
    title: 'Factorial Visualizer',
    description: 'See how n! grows and why it counts all arrangements of n objects.',
    sectionId: 2,
    sectionTitle: 'Permutations',
    category: 'Permutations',
    icon: 'n!',
  },
  {
    id: 'arrangement-generator',
    title: 'Arrangement Generator',
    description: 'Generate and explore all permutations of a set of objects.',
    sectionId: 2,
    sectionTitle: 'Permutations',
    category: 'Permutations',
    icon: '🔀',
  },
  {
    id: 'circular-permutations',
    title: 'Circular Permutations',
    description: 'Understand arrangements around a circle where rotations are equivalent.',
    sectionId: 2,
    sectionTitle: 'Permutations',
    category: 'Permutations',
    icon: '⭕',
  },

  // Combinations
  {
    id: 'combination-calculator',
    title: 'Combination Calculator',
    description: 'Compute C(n,r) = n!/(r!(n-r)!) for unordered selections.',
    sectionId: 3,
    sectionTitle: 'Combinations',
    category: 'Combinations',
    icon: 'C',
  },
  {
    id: 'pascals-triangle',
    title: 'Pascal\'s Triangle',
    description: 'Explore the binomial coefficients and their beautiful patterns.',
    sectionId: 3,
    sectionTitle: 'Combinations',
    category: 'Combinations',
    icon: '△',
  },
  {
    id: 'subset-enumerator',
    title: 'Subset Enumerator',
    description: 'List all subsets of a given size from a set.',
    sectionId: 3,
    sectionTitle: 'Combinations',
    category: 'Combinations',
    icon: '{ }',
  },
  {
    id: 'binomial-theorem',
    title: 'Binomial Theorem',
    description: 'Visualize (a+b)^n expansion and connect to Pascal\'s triangle.',
    sectionId: 3,
    sectionTitle: 'Combinations',
    category: 'Combinations',
    icon: '(a+b)ⁿ',
  },

  // Multinomials
  {
    id: 'multinomial-calculator',
    title: 'Multinomial Calculator',
    description: 'Compute n!/(n₁!n₂!...nₖ!) for dividing objects into groups.',
    sectionId: 4,
    sectionTitle: 'Multinomials',
    category: 'Advanced Counting',
    icon: 'M',
  },
  {
    id: 'partition-visualizer',
    title: 'Partition Visualizer',
    description: 'See all ways to divide n objects into specified groups.',
    sectionId: 4,
    sectionTitle: 'Multinomials',
    category: 'Advanced Counting',
    icon: '📊',
  },
  {
    id: 'anagram-counter',
    title: 'Anagram Counter',
    description: 'Count arrangements of letters with repetition (like MISSISSIPPI).',
    sectionId: 4,
    sectionTitle: 'Multinomials',
    category: 'Advanced Counting',
    icon: '🔤',
  },

  // Integer Solutions
  {
    id: 'stars-bars',
    title: 'Stars and Bars',
    description: 'Visualize solutions to x₁+x₂+...+xₖ=n using the stars and bars method.',
    sectionId: 5,
    sectionTitle: 'Integer Solutions',
    category: 'Advanced Counting',
    icon: '★|',
  },
  {
    id: 'distribution-counter',
    title: 'Distribution Counter',
    description: 'Count ways to distribute indistinguishable objects into distinguishable boxes.',
    sectionId: 5,
    sectionTitle: 'Integer Solutions',
    category: 'Advanced Counting',
    icon: '📦',
  },

  // Probability Basics
  {
    id: 'sample-space',
    title: 'Sample Space Explorer',
    description: 'Build and visualize sample spaces for random experiments.',
    sectionId: 6,
    sectionTitle: 'Probability Basics',
    category: 'Probability',
    icon: 'Ω',
  },
  {
    id: 'event-operations',
    title: 'Event Operations',
    description: 'Explore union, intersection, and complement of events with Venn diagrams.',
    sectionId: 6,
    sectionTitle: 'Probability Basics',
    category: 'Probability',
    icon: '∩∪',
  },
  {
    id: 'probability-calculator',
    title: 'Classical Probability',
    description: 'Compute P(A) = |A|/|Ω| for equally likely outcomes.',
    sectionId: 6,
    sectionTitle: 'Probability Basics',
    category: 'Probability',
    icon: 'P(A)',
  },

  // Card & Dice Problems
  {
    id: 'dice-simulator',
    title: 'Dice Simulator',
    description: 'Roll dice and explore probability distributions empirically.',
    sectionId: 7,
    sectionTitle: 'Applications',
    category: 'Simulations',
    icon: '🎲',
  },
  {
    id: 'card-probability',
    title: 'Card Probability',
    description: 'Calculate probabilities for poker hands and card deals.',
    sectionId: 7,
    sectionTitle: 'Applications',
    category: 'Simulations',
    icon: '🃏',
  },
  {
    id: 'coin-flip-sim',
    title: 'Coin Flip Simulator',
    description: 'Flip coins and watch relative frequency converge to probability.',
    sectionId: 7,
    sectionTitle: 'Applications',
    category: 'Simulations',
    icon: '🪙',
  },
  {
    id: 'birthday-problem',
    title: 'Birthday Problem',
    description: 'Explore the surprisingly high probability of shared birthdays.',
    sectionId: 7,
    sectionTitle: 'Applications',
    category: 'Simulations',
    icon: '🎂',
  },

  // Conditional Probability
  {
    id: 'conditional-prob',
    title: 'Conditional Probability',
    description: 'Visualize P(A|B) = P(A∩B)/P(B) with dynamic examples.',
    sectionId: 8,
    sectionTitle: 'Conditional Probability',
    category: 'Probability',
    icon: 'P(A|B)',
  },
  {
    id: 'bayes-theorem',
    title: 'Bayes\' Theorem',
    description: 'Update probabilities with new evidence using Bayes\' formula.',
    sectionId: 8,
    sectionTitle: 'Conditional Probability',
    category: 'Probability',
    icon: '🔄',
  },
  {
    id: 'independence-test',
    title: 'Independence Explorer',
    description: 'Test whether events are independent: P(A∩B) = P(A)×P(B).',
    sectionId: 8,
    sectionTitle: 'Conditional Probability',
    category: 'Probability',
    icon: '⊥',
  },
  {
    id: 'monty-hall',
    title: 'Monty Hall Problem',
    description: 'Simulate the famous game show problem and see why switching wins.',
    sectionId: 8,
    sectionTitle: 'Conditional Probability',
    category: 'Simulations',
    icon: '🚪',
  },

  // Random Variables
  {
    id: 'random-variable',
    title: 'Random Variables',
    description: 'Define random variables and explore their probability distributions.',
    sectionId: 9,
    sectionTitle: 'Random Variables',
    category: 'Distributions',
    icon: 'X',
  },
  {
    id: 'expected-value',
    title: 'Expected Value',
    description: 'Compute and visualize E[X] = Σx·P(X=x).',
    sectionId: 9,
    sectionTitle: 'Random Variables',
    category: 'Distributions',
    icon: 'E[X]',
  },
  {
    id: 'variance-std',
    title: 'Variance & Std Dev',
    description: 'Understand Var(X) = E[X²] - (E[X])² and σ.',
    sectionId: 9,
    sectionTitle: 'Random Variables',
    category: 'Distributions',
    icon: 'σ²',
  },
  {
    id: 'binomial-dist',
    title: 'Binomial Distribution',
    description: 'Explore B(n,p) for counting successes in independent trials.',
    sectionId: 9,
    sectionTitle: 'Random Variables',
    category: 'Distributions',
    icon: 'B(n,p)',
  },
  {
    id: 'poisson-dist',
    title: 'Poisson Distribution',
    description: 'Model rare events with the Poisson distribution.',
    sectionId: 9,
    sectionTitle: 'Random Variables',
    category: 'Distributions',
    icon: 'λ',
  },
  {
    id: 'geometric-dist',
    title: 'Geometric Distribution',
    description: 'Count trials until the first success.',
    sectionId: 9,
    sectionTitle: 'Random Variables',
    category: 'Distributions',
    icon: 'G(p)',
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

  // Group modules by category for display
  const groupedModules = filteredModules.reduce(
    (acc, module) => {
      if (!acc[module.category]) {
        acc[module.category] = [];
      }
      acc[module.category].push(module);
      return acc;
    },
    {} as Record<string, InteractiveModule[]>
  );

  return (
    <div className="min-h-screen bg-dark-950">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-20 pb-12 px-4 lg:pl-72 lg:pr-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Interactive Modules</h1>
          <p className="text-dark-400 mb-4">
            Explore probability and combinatorics through hands-on visualizations
          </p>
          <p className="text-sm text-dark-500 mb-8">
            {modules.length} interactive modules across {categories.length} categories
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
            {categories.map((category) => {
              const count = modules.filter((m) => m.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Module grid - grouped by category when viewing all */}
          {selectedCategory === null ? (
            Object.entries(groupedModules).map(([category, categoryModules]) => (
              <div key={category} className="mb-10">
                <h2 className="text-xl font-semibold text-dark-200 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryModules.map((module) => (
                    <Link
                      key={module.id}
                      to={`/section/${module.sectionId}`}
                      className="p-5 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-200 group hover:bg-dark-800/70"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-xl shrink-0">
                          {module.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-dark-100 group-hover:text-primary-400 transition-colors truncate">
                            {module.title}
                          </h3>
                          <p className="text-xs text-dark-400 mt-1 line-clamp-2">
                            {module.description}
                          </p>
                          <div className="text-xs text-dark-500 mt-2">
                            Section {module.sectionId}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModules.map((module) => (
                <Link
                  key={module.id}
                  to={`/section/${module.sectionId}`}
                  className="p-5 rounded-2xl bg-dark-800/50 border border-dark-700/50 hover:border-primary-500/30 transition-all duration-200 group hover:bg-dark-800/70"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-xl shrink-0">
                      {module.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                        {module.title}
                      </h3>
                      <p className="text-xs text-dark-400 mt-1 line-clamp-2">
                        {module.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-dark-500">
                          Section {module.sectionId}: {module.sectionTitle}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

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
