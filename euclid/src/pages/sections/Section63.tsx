import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section63() {
  return (
    <LessonLayout sectionId={63}>
      <Proposition
        title="Proposition II.14"
        proof={
          <>
            <p>
              Let <em>A</em> be the given rectilinear figure; thus it is required to construct a
              square equal to the rectilinear figure <em>A</em>.
            </p>
            <p className="mt-2">
              For let there be constructed the rectangular parallelogram <em>BD</em> equal to the
              rectilinear figure <em>A</em>. [I. 45]
            </p>
            <p className="mt-2">
              Then, if <em>BE</em> is equal to <em>ED</em>, that which was enjoined will have been
              done; for a square <em>BD</em> has been constructed equal to the rectilinear figure{' '}
              <em>A</em>.
            </p>
            <p className="mt-2">
              But, if not, one of the straight lines <em>BE</em>, <em>ED</em> is greater.
            </p>
            <p className="mt-2">
              Let <em>BE</em> be greater, and let it be produced to <em>F</em>; let <em>EF</em> be
              made equal to <em>ED</em>, and let <em>BF</em> be bisected at <em>G</em>.
            </p>
            <p className="mt-2">
              With centre <em>G</em> and distance one of the straight lines <em>GB</em>, <em>GF</em>{' '}
              let the semicircle <em>BHF</em> be described; let <em>DE</em> be produced to{' '}
              <em>H</em>, and let <em>GH</em> be joined.
            </p>
            <p className="mt-2">
              Then, since the straight line <em>BF</em> has been cut into equal segments at{' '}
              <em>G</em>, and into unequal segments at <em>E</em>, the rectangle contained by{' '}
              <em>BE</em>, <em>EF</em> together with the square on <em>EG</em> is equal to the
              square on <em>GF</em>. [II. 5]
            </p>
            <p className="mt-2">
              But <em>GF</em> is equal to <em>GH</em>; therefore the rectangle <em>BE</em>,{' '}
              <em>EF</em> together with the square on <em>GE</em> is equal to the square on{' '}
              <em>GH</em>.
            </p>
            <p className="mt-2">
              But the squares on <em>HE</em>, <em>EG</em> are equal to the square on <em>GH</em>;
              [I. 47] therefore the rectangle <em>BE</em>, <em>EF</em> together with the square on{' '}
              <em>GE</em> is equal to the squares on <em>HE</em>, <em>EG</em>.
            </p>
            <p className="mt-2">
              Let the square on <em>GE</em> be subtracted from each; therefore the rectangle
              contained by <em>BE</em>, <em>EF</em> which remains is equal to the square on{' '}
              <em>EH</em>.
            </p>
            <p className="mt-2">
              But the rectangle <em>BE</em>, <em>EF</em> is <em>BD</em>, for <em>EF</em> is equal to{' '}
              <em>ED</em>; therefore the parallelogram <em>BD</em> is equal to the square on{' '}
              <em>HE</em>.
            </p>
            <p className="mt-2">
              And <em>BD</em> is equal to the rectilinear figure <em>A</em>.
            </p>
            <p className="mt-2">
              Therefore the rectilinear figure <em>A</em> is also equal to the square which can be
              described on <em>EH</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore a square, namely that which can be described on <em>EH</em>, has been
              constructed equal to the given rectilinear figure <em>A</em>.
            </p>
          </>
        }
      >
        <p>To construct a square equal to a given rectilinear figure.</p>
      </Proposition>

      <h2>Squaring a Figure</h2>

      <p>
        This proposition solves the problem of <strong>quadrature</strong>: given any polygon, find
        a square with the same area. This is one of the fundamental constructions of Greek
        geometry.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 180" className="w-full max-w-lg">
          {/* Original polygon */}
          <polygon points="30,80 60,30 120,50 100,120 50,130" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
          <text x="75" y="85" fill="#f59e0b" fontSize="12" textAnchor="middle">A</text>

          {/* Arrow */}
          <path d="M 140 80 L 180 80" fill="none" stroke="#6b7280" strokeWidth="2" />
          <polygon points="180,75 190,80 180,85" fill="#6b7280" />

          {/* Equal square */}
          <rect x="210" y="40" width="80" height="80" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
          <text x="250" y="85" fill="#f59e0b" fontSize="12" textAnchor="middle">EH²</text>

          {/* Equal sign */}
          <text x="165" y="75" fill="#6b7280" fontSize="16">=</text>
        </svg>
      </div>

      <h3 className="mt-6">The Construction</h3>

      <p>The construction proceeds in two steps:</p>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Convert the given polygon into a rectangle with the same area (using I.45). Let the
          rectangle have sides <em>BE</em> and <em>ED</em>.
        </li>
        <li>
          Convert the rectangle into a square using a semicircle construction based on II.5.
        </li>
      </ol>

      <p className="mt-4">
        If the rectangle has sides <em>a</em> and <em>b</em> (with <em>a {">"} b</em>), the
        construction finds <em>s</em> such that <em>s² = ab</em>. This <em>s</em> is the{' '}
        <strong>geometric mean</strong> of <em>a</em> and <em>b</em>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">s = √(ab)</p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 160" className="w-full max-w-md">
          {/* Base line */}
          <line x1="30" y1="120" x2="270" y2="120" stroke="#f59e0b" strokeWidth="2" />
          {/* Semicircle */}
          <path d="M 30 120 A 120 120 0 0 1 270 120" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Perpendicular */}
          <line x1="180" y1="120" x2="180" y2="24" stroke="#3b82f6" strokeWidth="2" />
          {/* Points */}
          <circle cx="30" cy="120" r="4" fill="#f59e0b" />
          <circle cx="150" cy="120" r="4" fill="#f59e0b" />
          <circle cx="180" cy="120" r="4" fill="#3b82f6" />
          <circle cx="270" cy="120" r="4" fill="#f59e0b" />
          <circle cx="180" cy="24" r="4" fill="#3b82f6" />
          {/* Labels */}
          <text x="30" y="140" fill="#f59e0b" fontSize="11" textAnchor="middle">B</text>
          <text x="150" y="140" fill="#f59e0b" fontSize="11" textAnchor="middle">G</text>
          <text x="180" y="140" fill="#3b82f6" fontSize="11" textAnchor="middle">E</text>
          <text x="270" y="140" fill="#f59e0b" fontSize="11" textAnchor="middle">F</text>
          <text x="180" y="15" fill="#3b82f6" fontSize="11" textAnchor="middle">H</text>
          {/* Segment labels */}
          <text x="105" y="110" fill="#d1d5db" fontSize="10" textAnchor="middle">a</text>
          <text x="225" y="110" fill="#d1d5db" fontSize="10" textAnchor="middle">b</text>
          <text x="165" y="70" fill="#3b82f6" fontSize="11" textAnchor="end">s</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.45 (constructing parallelogram equal to figure)</li>
        <li>Proposition I.47 (Pythagorean theorem)</li>
        <li>Proposition II.5 (rectangle and square relation)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Squaring the Circle:</strong> This proposition shows
          that any <em>polygon</em> can be squared. The ancient problem of "squaring the circle"
          asks whether a circle can also be squared with compass and straightedge. This was proved
          impossible in 1882 when Lindemann showed that π is transcendental.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Book II Complete:</strong> This proposition concludes
          Book II. The fourteen propositions have established the geometric foundations of algebra,
          including the distributive law, sum and difference of squares, completing the square,
          the golden ratio, and the law of cosines.
        </p>
      </div>
    </LessonLayout>
  );
}
