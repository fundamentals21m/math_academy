import { LessonLayout } from '@/components/layout/LessonLayout';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2>Book II: Geometric Algebra</h2>

      <p>
        Book II of the <em>Elements</em> is often called <strong>"Geometric Algebra"</strong> because
        it proves algebraic identities using geometric constructions. Instead of writing equations
        with symbols, Euclid represents numbers as line segments and products as rectangles.
      </p>

      <p className="mt-4">
        This book contains only 2 definitions and 14 propositions, but they encode fundamental
        algebraic identities that we now express symbolically, such as (a + b)² = a² + 2ab + b².
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 mt-6 border border-dark-700">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">Definitions</h3>

        <div className="space-y-4">
          <div>
            <p className="font-medium text-dark-200">Definition 1</p>
            <p className="text-dark-300 mt-1">
              Any rectangular parallelogram is said to be <em>contained</em> by the two straight
              lines containing the right angle. Thus a rectangle with sides <em>a</em> and{' '}
              <em>b</em> is said to be "the rectangle contained by <em>a</em> and <em>b</em>."
            </p>
          </div>

          <div>
            <p className="font-medium text-dark-200">Definition 2</p>
            <p className="text-dark-300 mt-1">
              And in any parallelogrammic area let any one whatever of the parallelograms about its
              diagonal with the two complements be called a <em>gnomon</em>.
            </p>
          </div>
        </div>
      </div>

      <h3 className="mt-8">The Gnomon</h3>

      <p>
        The <strong>gnomon</strong> is an L-shaped figure formed by removing a smaller square from
        the corner of a larger square. It appears throughout Book II and is crucial for proving
        many algebraic identities geometrically.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 200" className="w-64 h-64">
          {/* Large square */}
          <rect x="20" y="20" width="160" height="160" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Small square (removed) */}
          <rect x="20" y="20" width="80" height="80" fill="#1f2937" stroke="#6b7280" strokeWidth="1" />
          {/* Gnomon (L-shape) */}
          <path d="M 20 100 L 100 100 L 100 20 L 180 20 L 180 180 L 20 180 Z" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
          {/* Labels */}
          <text x="55" y="55" fill="#6b7280" fontSize="12" textAnchor="middle">removed</text>
          <text x="140" y="100" fill="#f59e0b" fontSize="14" textAnchor="middle">gnomon</text>
        </svg>
      </div>

      <h3 className="mt-8">Geometric Representation of Algebra</h3>

      <p>
        In Book II, Euclid represents algebraic quantities geometrically:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Numbers</strong> are represented as <em>line segments</em>
        </li>
        <li>
          <strong>Products</strong> (ab) are represented as <em>rectangles</em> with sides a and b
        </li>
        <li>
          <strong>Squares</strong> (a²) are represented as <em>squares</em> with side a
        </li>
        <li>
          <strong>Sums</strong> are represented by <em>combining</em> areas
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Context:</strong> This geometric approach
          to algebra was necessary because the Greeks had no symbolic notation for algebra. Yet
          their geometric proofs are completely rigorous and capture the same truths we express
          today with equations.
        </p>
      </div>

      <h3 className="mt-8">Overview of Book II Propositions</h3>

      <div className="grid gap-4 mt-4">
        <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
          <p className="font-medium text-dark-200">II.1–II.3: Basic Rectangle Identities</p>
          <p className="text-dark-400 text-sm mt-1">Distributive properties of rectangles</p>
        </div>
        <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
          <p className="font-medium text-dark-200">II.4: Square of a Sum</p>
          <p className="text-dark-400 text-sm mt-1">(a + b)² = a² + 2ab + b²</p>
        </div>
        <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
          <p className="font-medium text-dark-200">II.5–II.6: Completing the Square</p>
          <p className="text-dark-400 text-sm mt-1">Techniques for solving quadratic problems</p>
        </div>
        <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
          <p className="font-medium text-dark-200">II.7–II.10: More Algebraic Identities</p>
          <p className="text-dark-400 text-sm mt-1">Various sum and difference of squares results</p>
        </div>
        <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
          <p className="font-medium text-dark-200">II.11: The Golden Ratio</p>
          <p className="text-dark-400 text-sm mt-1">Dividing a line in extreme and mean ratio</p>
        </div>
        <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
          <p className="font-medium text-dark-200">II.12–II.13: Law of Cosines</p>
          <p className="text-dark-400 text-sm mt-1">Generalizations of the Pythagorean theorem</p>
        </div>
        <div className="bg-dark-800/30 rounded-lg p-4 border border-dark-700">
          <p className="font-medium text-dark-200">II.14: Squaring a Figure</p>
          <p className="text-dark-400 text-sm mt-1">Constructing a square equal to any polygon</p>
        </div>
      </div>
    </LessonLayout>
  );
}
