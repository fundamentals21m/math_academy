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
  // ===========================================================================
  // LINEAR SPACES (Chapter 1)
  // ===========================================================================
  {
    id: 'vector-space-basis',
    title: 'Basis and Dimension Explorer',
    description: 'Visualize linear independence, spanning sets, and bases in R^2 and R^3.',
    sectionId: 5,
    sectionTitle: 'Bases and Dimension',
    category: 'Linear Spaces',
    icon: '⊕',
  },
  {
    id: 'inner-product',
    title: 'Inner Product Visualizer',
    description: 'Explore inner products, norms, and the Cauchy-Schwarz inequality.',
    sectionId: 6,
    sectionTitle: 'Inner Products and Euclidean Spaces',
    category: 'Linear Spaces',
    icon: '⟨⟩',
  },
  {
    id: 'gram-schmidt',
    title: 'Gram-Schmidt Process',
    description: 'Step through the Gram-Schmidt orthogonalization algorithm interactively.',
    sectionId: 8,
    sectionTitle: 'The Gram-Schmidt Process',
    category: 'Linear Spaces',
    icon: '⊥',
  },

  // ===========================================================================
  // LINEAR TRANSFORMATIONS (Chapter 2)
  // ===========================================================================
  {
    id: 'linear-transform-2d',
    title: 'Linear Transformation Visualizer',
    description: 'See how matrices transform vectors and shapes in 2D.',
    sectionId: 10,
    sectionTitle: 'Linear Transformations',
    category: 'Linear Transformations',
    icon: '→',
  },
  {
    id: 'matrix-multiplication',
    title: 'Matrix Multiplication Explorer',
    description: 'Visualize matrix multiplication as composition of transformations.',
    sectionId: 16,
    sectionTitle: 'Matrix Multiplication',
    category: 'Linear Transformations',
    icon: '×',
  },

  // ===========================================================================
  // EIGENVALUES (Chapters 4-5)
  // ===========================================================================
  {
    id: 'eigenvalue-explorer',
    title: 'Eigenvalue Explorer',
    description: 'Find and visualize eigenvectors and eigenvalues of 2×2 matrices.',
    sectionId: 26,
    sectionTitle: 'Eigenvalues and Eigenvectors',
    category: 'Eigenvalues',
    icon: 'λ',
  },
  {
    id: 'quadratic-form',
    title: 'Quadratic Form Visualizer',
    description: 'Visualize quadratic forms and their classification via eigenvalues.',
    sectionId: 43,
    sectionTitle: 'Quadratic Forms',
    category: 'Eigenvalues',
    icon: '∂²',
  },

  // ===========================================================================
  // DIFFERENTIAL EQUATIONS (Chapters 6-7)
  // ===========================================================================
  {
    id: 'ode-phase-portrait',
    title: 'Phase Portrait Plotter',
    description: 'Visualize solutions to systems of linear ODEs in the phase plane.',
    sectionId: 63,
    sectionTitle: 'Systems of Differential Equations',
    category: 'Differential Equations',
    icon: '⤿',
  },
  {
    id: 'matrix-exponential',
    title: 'Matrix Exponential Calculator',
    description: 'Compute and visualize e^(tA) for 2×2 matrices.',
    sectionId: 65,
    sectionTitle: 'The Matrix Exponential',
    category: 'Differential Equations',
    icon: 'eᴬ',
  },

  // ===========================================================================
  // DIFFERENTIAL CALCULUS (Chapters 8-9)
  // ===========================================================================
  {
    id: 'gradient-field',
    title: 'Gradient Field Visualizer',
    description: 'Plot gradient vector fields and level curves of scalar functions.',
    sectionId: 84,
    sectionTitle: 'The Gradient of a Scalar Field',
    category: 'Vector Calculus',
    icon: '∇',
  },
  {
    id: 'directional-derivative',
    title: 'Directional Derivative Explorer',
    description: 'Explore how directional derivatives relate to the gradient.',
    sectionId: 81,
    sectionTitle: 'Directional Derivatives',
    category: 'Vector Calculus',
    icon: '∂ᵤ',
  },
  {
    id: 'lagrange-multipliers',
    title: 'Lagrange Multipliers Visualizer',
    description: 'Find constrained extrema graphically with the method of Lagrange multipliers.',
    sectionId: 99,
    sectionTitle: 'Lagrange Multipliers',
    category: 'Vector Calculus',
    icon: '∧',
  },

  // ===========================================================================
  // LINE INTEGRALS (Chapter 10)
  // ===========================================================================
  {
    id: 'line-integral',
    title: 'Line Integral Calculator',
    description: 'Compute and visualize line integrals along parametric curves.',
    sectionId: 102,
    sectionTitle: 'Definition and Computation of Line Integrals',
    category: 'Line Integrals',
    icon: '∮',
  },
  {
    id: 'path-independence',
    title: 'Path Independence Checker',
    description: 'Test if a vector field is conservative and find potential functions.',
    sectionId: 106,
    sectionTitle: 'Independence of Path',
    category: 'Line Integrals',
    icon: '⟳',
  },

  // ===========================================================================
  // MULTIPLE INTEGRALS (Chapter 11)
  // ===========================================================================
  {
    id: 'double-integral',
    title: 'Double Integral Visualizer',
    description: 'Set up and evaluate double integrals over various regions.',
    sectionId: 117,
    sectionTitle: 'Definition of the Double Integral',
    category: 'Multiple Integrals',
    icon: '∬',
  },
  {
    id: 'greens-theorem',
    title: "Green's Theorem Explorer",
    description: "Verify Green's theorem by comparing line and double integrals.",
    sectionId: 126,
    sectionTitle: "Green's Theorem in the Plane",
    category: 'Multiple Integrals',
    icon: '∂Ω',
  },
  {
    id: 'polar-integration',
    title: 'Polar Coordinates Integrator',
    description: 'Convert and evaluate integrals in polar coordinates.',
    sectionId: 132,
    sectionTitle: 'Polar Coordinates',
    category: 'Multiple Integrals',
    icon: 'θ',
  },

  // ===========================================================================
  // SURFACE INTEGRALS (Chapter 12)
  // ===========================================================================
  {
    id: 'parametric-surface',
    title: 'Parametric Surface Plotter',
    description: 'Visualize parametric surfaces and their fundamental vector products.',
    sectionId: 137,
    sectionTitle: 'Parametric Representation of a Surface',
    category: 'Surface Integrals',
    icon: 'Σ',
  },
  {
    id: 'curl-divergence',
    title: 'Curl and Divergence Calculator',
    description: 'Compute and visualize curl and divergence of 3D vector fields.',
    sectionId: 143,
    sectionTitle: 'The Curl and Divergence',
    category: 'Surface Integrals',
    icon: '∇×',
  },

  // ===========================================================================
  // PROBABILITY (Chapters 13-14)
  // ===========================================================================
  {
    id: 'probability-calculator',
    title: 'Probability Calculator',
    description: 'Compute probabilities using combinatorics and the multiplication rule.',
    sectionId: 155,
    sectionTitle: 'Combinatorial Analysis',
    category: 'Probability',
    icon: 'P',
  },
  {
    id: 'distribution-plotter',
    title: 'Distribution Plotter',
    description: 'Visualize discrete and continuous probability distributions.',
    sectionId: 167,
    sectionTitle: 'Continuous Distributions',
    category: 'Probability',
    icon: '📊',
  },
  {
    id: 'normal-distribution',
    title: 'Normal Distribution Explorer',
    description: 'Explore the Gaussian distribution and standard normal tables.',
    sectionId: 171,
    sectionTitle: 'Normal Distributions',
    category: 'Probability',
    icon: 'φ',
  },
  {
    id: 'clt-simulator',
    title: 'Central Limit Theorem Simulator',
    description: 'Simulate the CLT by sampling from various distributions.',
    sectionId: 180,
    sectionTitle: 'The Central Limit Theorem',
    category: 'Probability',
    icon: '∞',
  },

  // ===========================================================================
  // NUMERICAL ANALYSIS (Chapter 15)
  // ===========================================================================
  {
    id: 'lagrange-interpolation',
    title: 'Lagrange Interpolation',
    description: 'Construct and visualize interpolating polynomials through data points.',
    sectionId: 183,
    sectionTitle: 'Interpolating Polynomials',
    category: 'Numerical Analysis',
    icon: 'L',
  },
  {
    id: 'numerical-integration',
    title: 'Numerical Integration',
    description: "Compare Trapezoidal rule, Simpson's rule, and exact integration.",
    sectionId: 188,
    sectionTitle: 'Approximate Integration',
    category: 'Numerical Analysis',
    icon: '≈',
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
