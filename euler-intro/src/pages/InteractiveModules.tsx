import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Sidebar } from '@/components/layout';

// =============================================================================
// INTERACTIVE MODULE DEFINITIONS - Euler's Introduction to Analysis
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
  // Chapter I: Curved Lines in General
  {
    id: 'coordinate-system',
    title: 'Coordinate System Explorer',
    description: 'Explore Euler\'s framework: abscissas, ordinates, and how functions become curves.',
    sectionId: 0,
    sectionTitle: 'On Curved Lines in General',
    category: 'Foundations',
    icon: '📐',
  },
  {
    id: 'function-curve',
    title: 'Function to Curve',
    description: 'Watch how algebraic functions generate geometric curves point by point.',
    sectionId: 0,
    sectionTitle: 'On Curved Lines in General',
    category: 'Foundations',
    icon: '📈',
  },
  {
    id: 'continuous-discontinuous',
    title: 'Continuous vs. Discontinuous',
    description: 'Compare curves defined by single functions versus piecewise definitions.',
    sectionId: 0,
    sectionTitle: 'On Curved Lines in General',
    category: 'Foundations',
    icon: '〰️',
  },

  // Chapter II: Straight Lines
  {
    id: 'straight-line-forms',
    title: 'Straight Line Forms',
    description: 'Explore slope-intercept, point-slope, and general forms of linear equations.',
    sectionId: 1,
    sectionTitle: 'Straight Lines',
    category: 'Lines',
    icon: '📏',
  },
  {
    id: 'parallel-perpendicular',
    title: 'Parallel & Perpendicular',
    description: 'Visualize the slope relationships for parallel and perpendicular lines.',
    sectionId: 1,
    sectionTitle: 'Straight Lines',
    category: 'Lines',
    icon: '⊥',
  },

  // Chapter III: Circle
  {
    id: 'circle-equation',
    title: 'Circle Equation Explorer',
    description: 'See how (x-h)² + (y-k)² = r² defines a circle with center (h,k) and radius r.',
    sectionId: 2,
    sectionTitle: 'The Circle',
    category: 'Conics',
    icon: '⭕',
  },
  {
    id: 'circle-tangent',
    title: 'Tangent Lines to Circles',
    description: 'Construct and analyze tangent lines at any point on a circle.',
    sectionId: 2,
    sectionTitle: 'The Circle',
    category: 'Conics',
    icon: '➡️',
  },

  // Chapter IV: Ellipse
  {
    id: 'ellipse-construction',
    title: 'Ellipse Construction',
    description: 'Explore the ellipse as the locus of points with constant sum of focal distances.',
    sectionId: 3,
    sectionTitle: 'The Ellipse',
    category: 'Conics',
    icon: '⬭',
  },
  {
    id: 'ellipse-eccentricity',
    title: 'Ellipse Eccentricity',
    description: 'Adjust eccentricity to transform between circle and highly elongated ellipse.',
    sectionId: 3,
    sectionTitle: 'The Ellipse',
    category: 'Conics',
    icon: 'e',
  },
  {
    id: 'ellipse-reflection',
    title: 'Ellipse Reflection Property',
    description: 'See how rays from one focus reflect through the other focus.',
    sectionId: 3,
    sectionTitle: 'The Ellipse',
    category: 'Conics',
    icon: '🔆',
  },

  // Chapter V: Hyperbola
  {
    id: 'hyperbola-construction',
    title: 'Hyperbola Construction',
    description: 'Visualize the hyperbola as points with constant difference of focal distances.',
    sectionId: 4,
    sectionTitle: 'The Hyperbola',
    category: 'Conics',
    icon: '⋈',
  },
  {
    id: 'hyperbola-asymptotes',
    title: 'Hyperbola Asymptotes',
    description: 'Watch how hyperbola branches approach their asymptotes at infinity.',
    sectionId: 4,
    sectionTitle: 'The Hyperbola',
    category: 'Conics',
    icon: '↗️',
  },
  {
    id: 'rectangular-hyperbola',
    title: 'Rectangular Hyperbola',
    description: 'Explore the special case xy = c with perpendicular asymptotes.',
    sectionId: 4,
    sectionTitle: 'The Hyperbola',
    category: 'Conics',
    icon: 'xy',
  },

  // Chapter VI: Parabola
  {
    id: 'parabola-focus-directrix',
    title: 'Parabola Focus-Directrix',
    description: 'Construct the parabola as equidistant from focus and directrix.',
    sectionId: 5,
    sectionTitle: 'The Parabola',
    category: 'Conics',
    icon: '⌒',
  },
  {
    id: 'parabola-reflection',
    title: 'Parabolic Reflection',
    description: 'See how parallel rays focus at the focal point (satellite dish principle).',
    sectionId: 5,
    sectionTitle: 'The Parabola',
    category: 'Conics',
    icon: '📡',
  },
  {
    id: 'conic-sections-unified',
    title: 'Unified Conic Sections',
    description: 'Transform between ellipse, parabola, and hyperbola by varying eccentricity.',
    sectionId: 5,
    sectionTitle: 'The Parabola',
    category: 'Conics',
    icon: '🔄',
  },

  // Chapter VII: Properties of Conics
  {
    id: 'conic-diameters',
    title: 'Conjugate Diameters',
    description: 'Explore how conjugate diameters bisect parallel chords.',
    sectionId: 6,
    sectionTitle: 'Properties of Conics',
    category: 'Conics',
    icon: '⟂',
  },
  {
    id: 'polar-equations',
    title: 'Polar Form of Conics',
    description: 'Express conics in polar coordinates with focus at origin.',
    sectionId: 6,
    sectionTitle: 'Properties of Conics',
    category: 'Conics',
    icon: 'r,θ',
  },

  // Chapter VIII: Infinite Branches
  {
    id: 'asymptotic-behavior',
    title: 'Asymptotic Behavior',
    description: 'Analyze how curves behave as x or y approaches infinity.',
    sectionId: 7,
    sectionTitle: 'Infinite Branches',
    category: 'Advanced Curves',
    icon: '∞',
  },
  {
    id: 'parabolic-hyperbolic',
    title: 'Parabolic vs. Hyperbolic',
    description: 'Compare branches that approach asymptotes versus those that don\'t.',
    sectionId: 7,
    sectionTitle: 'Infinite Branches',
    category: 'Advanced Curves',
    icon: '↕️',
  },

  // Chapter IX-X: Higher Order Curves
  {
    id: 'cubic-curves',
    title: 'Cubic Curve Gallery',
    description: 'Explore the rich variety of third-degree algebraic curves.',
    sectionId: 8,
    sectionTitle: 'Cubic Curves',
    category: 'Higher Curves',
    icon: 'x³',
  },
  {
    id: 'folium-descartes',
    title: 'Folium of Descartes',
    description: 'Investigate x³ + y³ = 3axy with its loop and asymptote.',
    sectionId: 8,
    sectionTitle: 'Cubic Curves',
    category: 'Higher Curves',
    icon: '🍃',
  },
  {
    id: 'elliptic-curves',
    title: 'Elliptic Curves',
    description: 'Explore y² = x³ + ax + b curves fundamental to modern cryptography.',
    sectionId: 9,
    sectionTitle: 'Special Cubics',
    category: 'Higher Curves',
    icon: '🔐',
  },

  // Chapter XI: Infinite Branches of Cubics
  {
    id: 'cubic-branches',
    title: 'Cubic Infinite Branches',
    description: 'Visualize how cubics can have 1, 2, or 3 infinite branches.',
    sectionId: 10,
    sectionTitle: 'Infinite Branches of Cubics',
    category: 'Higher Curves',
    icon: '3',
  },
  {
    id: 'newton-classification',
    title: 'Newton\'s 72 Cubics',
    description: 'Explore Newton\'s classification of cubic curves into 72 species.',
    sectionId: 10,
    sectionTitle: 'Infinite Branches of Cubics',
    category: 'Higher Curves',
    icon: '📋',
  },

  // Chapters XII-XV: Quartic and Higher
  {
    id: 'quartic-curves',
    title: 'Quartic Curves',
    description: 'Investigate fourth-degree curves including ovals and lemniscates.',
    sectionId: 11,
    sectionTitle: 'Quartic Curves',
    category: 'Higher Curves',
    icon: 'x⁴',
  },
  {
    id: 'lemniscate-bernoulli',
    title: 'Lemniscate of Bernoulli',
    description: 'Explore the figure-eight curve (x² + y²)² = a²(x² - y²).',
    sectionId: 11,
    sectionTitle: 'Quartic Curves',
    category: 'Higher Curves',
    icon: '∞',
  },
  {
    id: 'cassini-ovals',
    title: 'Cassini Ovals',
    description: 'The locus where product of distances to two foci is constant.',
    sectionId: 12,
    sectionTitle: 'Special Quartics',
    category: 'Higher Curves',
    icon: '🥚',
  },

  // Chapters XVI-XVIII: Transcendental Curves
  {
    id: 'exponential-curve',
    title: 'Exponential Curve',
    description: 'Visualize y = aˣ and its fundamental properties.',
    sectionId: 15,
    sectionTitle: 'Transcendental Curves',
    category: 'Transcendental',
    icon: 'eˣ',
  },
  {
    id: 'logarithmic-curve',
    title: 'Logarithmic Curve',
    description: 'Explore y = log(x) as the inverse of the exponential.',
    sectionId: 15,
    sectionTitle: 'Transcendental Curves',
    category: 'Transcendental',
    icon: 'ln',
  },
  {
    id: 'trigonometric-curves',
    title: 'Trigonometric Curves',
    description: 'Visualize sine, cosine, and tangent curves with period and amplitude.',
    sectionId: 16,
    sectionTitle: 'Trigonometric Curves',
    category: 'Transcendental',
    icon: 'sin',
  },
  {
    id: 'catenary',
    title: 'The Catenary',
    description: 'Explore y = cosh(x), the curve of a hanging chain.',
    sectionId: 17,
    sectionTitle: 'Catenary and Tractrix',
    category: 'Transcendental',
    icon: '⌢',
  },
  {
    id: 'tractrix',
    title: 'The Tractrix',
    description: 'The curve traced by dragging an object on a string.',
    sectionId: 17,
    sectionTitle: 'Catenary and Tractrix',
    category: 'Transcendental',
    icon: '🧲',
  },

  // Chapters XIX-XXII: Spirals and Cycloids
  {
    id: 'archimedean-spiral',
    title: 'Archimedean Spiral',
    description: 'Explore r = aθ, the spiral with constant arc spacing.',
    sectionId: 18,
    sectionTitle: 'Spirals',
    category: 'Spirals',
    icon: '🌀',
  },
  {
    id: 'logarithmic-spiral',
    title: 'Logarithmic Spiral',
    description: 'The self-similar spiral r = aeᵇᶿ found throughout nature.',
    sectionId: 18,
    sectionTitle: 'Spirals',
    category: 'Spirals',
    icon: '🐚',
  },
  {
    id: 'cycloid',
    title: 'The Cycloid',
    description: 'Trace the path of a point on a rolling circle.',
    sectionId: 19,
    sectionTitle: 'Cycloid',
    category: 'Mechanical Curves',
    icon: '🔄',
  },
  {
    id: 'brachistochrone',
    title: 'Brachistochrone Problem',
    description: 'The cycloid as the fastest descent curve under gravity.',
    sectionId: 19,
    sectionTitle: 'Cycloid',
    category: 'Mechanical Curves',
    icon: '⏱️',
  },
  {
    id: 'epicycloid-hypocycloid',
    title: 'Epicycloids & Hypocycloids',
    description: 'Curves traced by circles rolling on circles.',
    sectionId: 20,
    sectionTitle: 'Epicycloids',
    category: 'Mechanical Curves',
    icon: '⚙️',
  },

  // General Tools
  {
    id: 'curve-sketcher',
    title: 'Curve Sketcher',
    description: 'Enter any equation and visualize its curve with intercepts and asymptotes.',
    sectionId: 21,
    sectionTitle: 'Summary',
    category: 'Tools',
    icon: '✏️',
  },
  {
    id: 'tangent-normal',
    title: 'Tangent & Normal Lines',
    description: 'Construct tangent and normal lines at any point on a curve.',
    sectionId: 21,
    sectionTitle: 'Summary',
    category: 'Tools',
    icon: '⊤',
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

      <main className="pt-20 pb-12 px-4 lg:pl-80 lg:pr-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-dark-100 mb-2">Interactive Modules</h1>
          <p className="text-dark-400 mb-4">
            Explore Euler's <em>Introductio in Analysin Infinitorum</em> through hands-on visualizations
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
