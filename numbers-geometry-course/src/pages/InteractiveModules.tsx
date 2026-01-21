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
  // Part 1: Arithmetic
  {
    id: 'prime-sieve',
    title: 'Sieve of Eratosthenes',
    description: 'Watch how the ancient algorithm finds all primes by crossing out multiples step by step.',
    sectionId: 2,
    sectionTitle: 'The Mysterious Sequence of Primes',
    category: 'Arithmetic',
    icon: '🔢',
  },
  {
    id: 'euclidean-algorithm',
    title: 'Euclidean Algorithm',
    description: 'Step through the GCD algorithm visually. See how repeated division finds the greatest common divisor.',
    sectionId: 5,
    sectionTitle: 'The Euclidean Algorithm',
    category: 'Arithmetic',
    icon: '➗',
  },
  // Part 2: Numbers in Geometry
  {
    id: 'fibonacci-spiral',
    title: 'Fibonacci Numbers',
    description: 'Watch the Fibonacci sequence grow and see how it relates to the golden ratio and spirals in nature.',
    sectionId: 10,
    sectionTitle: 'The Fibonacci Numbers',
    category: 'Numbers & Geometry',
    icon: '🐚',
  },
  {
    id: 'pythagorean-theorem',
    title: 'Pythagorean Theorem',
    description: 'Explore visual proofs of a² + b² = c² with adjustable triangles and squares.',
    sectionId: 15,
    sectionTitle: 'The Pythagorean Theorem',
    category: 'Geometry',
    icon: '📐',
  },
  // Part 3: Coordinates
  {
    id: 'coordinate-plane',
    title: 'Lines and Circles',
    description: 'Plot lines y = mx + b and circles (x-h)² + (y-k)² = r² and find their intersections.',
    sectionId: 19,
    sectionTitle: 'Lines and Circles',
    category: 'Coordinates',
    icon: '📊',
  },
  {
    id: 'vectors',
    title: 'Vector Operations',
    description: 'Add and scale vectors graphically. See how vector addition forms parallelograms.',
    sectionId: 22,
    sectionTitle: 'Vectors',
    category: 'Coordinates',
    icon: '➡️',
  },
  {
    id: 'isometries',
    title: 'Isometries Demo',
    description: 'Apply rotations, reflections, and translations to shapes and see how distances are preserved.',
    sectionId: 24,
    sectionTitle: 'Isometries of the Euclidean Plane',
    category: 'Coordinates',
    icon: '🔄',
  },
  // Part 4: Area and Volume
  {
    id: 'area-formulas',
    title: 'Area Explorer',
    description: 'Derive area formulas visually: parallelograms from rectangles, triangles from parallelograms.',
    sectionId: 28,
    sectionTitle: 'Areas of Basic Figures',
    category: 'Area & Volume',
    icon: '⬛',
  },
  // Part 5: Trigonometry
  {
    id: 'unit-circle-trig',
    title: 'Unit Circle & Trigonometry',
    description: 'Visualize sin, cos, and tan as coordinates and ratios on the unit circle.',
    sectionId: 38,
    sectionTitle: 'Circular Functions',
    category: 'Trigonometry',
    icon: '⭕',
  },
  {
    id: 'inverse-trig',
    title: 'Inverse Trig Functions',
    description: 'Explore arcsin, arccos, arctan and understand their domains and ranges through interactive graphs.',
    sectionId: 42,
    sectionTitle: 'The Inverse Circular Functions',
    category: 'Trigonometry',
    icon: '↩️',
  },
  // Part 6: Finite Arithmetic
  {
    id: 'modular-arithmetic',
    title: 'Clock Arithmetic',
    description: 'Explore addition, multiplication, and powers in modular arithmetic with a clock visualization.',
    sectionId: 47,
    sectionTitle: 'Arithmetic mod n',
    category: 'Finite Arithmetic',
    icon: '🕐',
  },
  {
    id: 'quadratic-residues',
    title: 'Quadratic Residues',
    description: 'Discover which numbers are perfect squares mod p. See patterns in the Legendre symbol.',
    sectionId: 51,
    sectionTitle: 'Quadratic Residues',
    category: 'Finite Arithmetic',
    icon: '²',
  },
  // Part 7: Complex Numbers
  {
    id: 'complex-plane',
    title: 'Complex Numbers',
    description: 'Add, multiply, and raise complex numbers to powers. Watch how multiplication rotates and scales!',
    sectionId: 56,
    sectionTitle: 'Addition, Multiplication, and Absolute Value',
    category: 'Complex Numbers',
    icon: '💫',
  },
  {
    id: 'roots-of-unity',
    title: 'Roots of Unity',
    description: 'Find the n-th roots of 1 and see them form regular polygons on the unit circle.',
    sectionId: 60,
    sectionTitle: 'Roots of Complex Numbers',
    category: 'Complex Numbers',
    icon: '🔮',
  },
  // Part 8: Conic Sections
  {
    id: 'conic-sections',
    title: 'Conic Sections',
    description: 'Explore ellipses, parabolas, and hyperbolas. See their foci, directrices, and equations.',
    sectionId: 64,
    sectionTitle: 'Too Much, Too Little, and Just Right',
    category: 'Conic Sections',
    icon: '🥚',
  },
  {
    id: 'kepler-orbits',
    title: 'Planetary Orbits',
    description: 'See how planets trace elliptical orbits with the sun at one focus. Visualize Kepler\'s laws.',
    sectionId: 68,
    sectionTitle: 'Planetary Orbits',
    category: 'Conic Sections',
    icon: '🪐',
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
