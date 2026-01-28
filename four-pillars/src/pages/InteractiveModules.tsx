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
  // Chapter 1: Straightedge and Compass
  {
    id: 'compass-construction',
    title: 'Compass & Straightedge Constructions',
    description: 'Step through classical constructions: equilateral triangles, perpendicular bisectors, angle bisectors, and square roots.',
    sectionId: 1,
    sectionTitle: "Euclid's Construction of the Equilateral Triangle",
    category: 'Constructions',
    icon: '📐',
  },
  {
    id: 'multiplication-division',
    title: 'Geometric Multiplication',
    description: 'Construct products and quotients of lengths using similar triangles.',
    sectionId: 3,
    sectionTitle: 'Multiplication and Division',
    category: 'Constructions',
    icon: '✕',
  },
  // Chapter 2: Euclid's Approach
  {
    id: 'pythagorean-theorem',
    title: 'Pythagorean Theorem',
    description: 'Visualize multiple proofs of the most famous theorem in geometry.',
    sectionId: 10,
    sectionTitle: 'The Pythagorean Theorem',
    category: 'Euclidean',
    icon: '△',
  },
  {
    id: 'thales-theorem',
    title: 'Thales Theorem',
    description: 'An angle inscribed in a semicircle is always a right angle.',
    sectionId: 11,
    sectionTitle: 'Proof of the Thales Theorem',
    category: 'Euclidean',
    icon: '⌓',
  },
  {
    id: 'circle-angles',
    title: 'Angles in a Circle',
    description: 'Explore inscribed angles, central angles, and their relationships.',
    sectionId: 12,
    sectionTitle: 'Angles in a Circle',
    category: 'Euclidean',
    icon: '◔',
  },
  // Chapter 3: Coordinates
  {
    id: 'coordinate-plane',
    title: 'Coordinate Plane Explorer',
    description: 'Interactive Cartesian plane with lines, circles, and intersections.',
    sectionId: 15,
    sectionTitle: 'The Number Line and the Number Plane',
    category: 'Coordinates',
    icon: '⊞',
  },
  {
    id: 'distance-formula',
    title: 'Distance Explorer',
    description: 'See how the Pythagorean theorem gives us the distance formula.',
    sectionId: 17,
    sectionTitle: 'Distance',
    category: 'Coordinates',
    icon: '↔',
  },
  {
    id: 'isometry-explorer',
    title: 'Isometry Explorer',
    description: 'Explore distance-preserving transformations: reflections, rotations, translations, and glide reflections.',
    sectionId: 20,
    sectionTitle: 'Isometries',
    category: 'Transformations',
    icon: '🔄',
  },
  // Chapter 4: Vectors
  {
    id: 'vector-operations',
    title: 'Vector Operations',
    description: 'Add vectors, scale them, and see linear combinations in action.',
    sectionId: 23,
    sectionTitle: 'Vectors',
    category: 'Vectors',
    icon: '→',
  },
  {
    id: 'triangle-centers',
    title: 'Triangle Centers',
    description: 'Find centroids, incenters, circumcenters, and orthocenters using vectors.',
    sectionId: 25,
    sectionTitle: 'Midpoints and Centroids',
    category: 'Vectors',
    icon: '◬',
  },
  {
    id: 'dot-product',
    title: 'Dot Product & Angle',
    description: 'Visualize the relationship between inner products and angles.',
    sectionId: 27,
    sectionTitle: 'Inner Product and Cosine',
    category: 'Vectors',
    icon: '∠',
  },
  {
    id: 'complex-rotation',
    title: 'Complex Number Rotations',
    description: 'See how multiplication by complex numbers rotates and scales.',
    sectionId: 29,
    sectionTitle: 'Rotations, Matrices, and Complex Numbers',
    category: 'Vectors',
    icon: 'ⅈ',
  },
  // Chapter 5: Perspective
  {
    id: 'perspective-projection',
    title: 'Perspective Projection',
    description: 'Understand how 3D scenes project onto 2D canvases.',
    sectionId: 31,
    sectionTitle: 'Perspective Drawing',
    category: 'Projective',
    icon: '🎨',
  },
  {
    id: 'homogeneous-coords',
    title: 'Homogeneous Coordinates',
    description: 'See how adding a coordinate makes parallel lines meet at infinity.',
    sectionId: 34,
    sectionTitle: 'Homogeneous Coordinates',
    category: 'Projective',
    icon: '∞',
  },
  {
    id: 'cross-ratio',
    title: 'Cross-Ratio Visualizer',
    description: 'See why the cross-ratio is invariant under projection. Move points and watch the ratio stay constant!',
    sectionId: 37,
    sectionTitle: 'The Cross-Ratio',
    category: 'Projective',
    icon: '×',
  },
  // Chapter 6: Projective Planes
  {
    id: 'pappus-theorem',
    title: 'Pappus Theorem',
    description: 'Points on two lines create collinear intersections.',
    sectionId: 40,
    sectionTitle: 'Pappus and Desargues Revisited',
    category: 'Projective',
    icon: '⫿',
  },
  {
    id: 'desargues-theorem',
    title: 'Desargues Theorem',
    description: 'Perspective triangles have collinear intersection points.',
    sectionId: 40,
    sectionTitle: 'Pappus and Desargues Revisited',
    category: 'Projective',
    icon: '△△',
  },
  // Chapter 7: Transformations
  {
    id: 'reflection-composition',
    title: 'Reflection Composition',
    description: 'See how two reflections make a rotation or translation.',
    sectionId: 48,
    sectionTitle: 'The Group of Isometries of the Plane',
    category: 'Transformations',
    icon: '⇆',
  },
  {
    id: 'spherical-geometry',
    title: 'Spherical Geometry',
    description: 'Explore great circles, spherical triangles, and angle sums > 180°.',
    sectionId: 51,
    sectionTitle: 'Spherical Geometry',
    category: 'Non-Euclidean',
    icon: '🌐',
  },
  {
    id: 'quaternion-rotation',
    title: 'Quaternion Rotations',
    description: 'Visualize 3D rotations using Hamilton quaternions.',
    sectionId: 53,
    sectionTitle: 'Representing Space Rotations by Quaternions',
    category: 'Transformations',
    icon: '🔁',
  },
  // Chapter 8: Non-Euclidean Geometry
  {
    id: 'hyperbolic-plane',
    title: 'Hyperbolic Plane (Poincaré Disk)',
    description: 'Explore non-Euclidean geometry. See geodesics as circular arcs and how distance stretches near the boundary.',
    sectionId: 60,
    sectionTitle: 'Preserving Non-Euclidean Lines',
    category: 'Non-Euclidean',
    icon: '◯',
  },
  {
    id: 'mobius-transform',
    title: 'Möbius Transformations',
    description: 'Watch circles transform under complex projective mappings.',
    sectionId: 59,
    sectionTitle: 'Reflections and Mobius Transformations',
    category: 'Non-Euclidean',
    icon: '↺',
  },
  {
    id: 'hyperbolic-distance',
    title: 'Hyperbolic Distance',
    description: 'Measure distance in the Poincaré disk where infinity lies at the boundary.',
    sectionId: 62,
    sectionTitle: 'Non-Euclidean Distance',
    category: 'Non-Euclidean',
    icon: '⟷',
  },
  {
    id: 'hyperbolic-isometries',
    title: 'Hyperbolic Isometries',
    description: 'Explore hyperbolic reflections, rotations, and translations.',
    sectionId: 63,
    sectionTitle: 'Non-Euclidean Translations and Rotations',
    category: 'Non-Euclidean',
    icon: '↻',
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
