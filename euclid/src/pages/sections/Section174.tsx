import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section174() {
  return (
    <LessonLayout sectionId={174}>
      <Proposition
        title="Proposition VI.29"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line, <em>C</em> the given rectilinear figure
              to which the figure applied is to be equal, and <em>D</em> the parallelogram to
              which the excess is to be similar.
            </p>
            <p className="mt-2">
              It is required to apply to <em>AB</em> a parallelogram equal to <em>C</em> and
              exceeding by a parallelogrammic figure similar to <em>D</em>.
            </p>
            <p className="mt-2">
              Let <em>AB</em> be bisected at <em>E</em>, and on <em>EB</em> let the parallelogram
              <em> BF</em> be described similar and similarly situated to <em>D</em>. [VI.18]
            </p>
            <p className="mt-2">
              Then the parallelogram <em>BF</em> is either equal to <em>C</em>, or greater than
              <em>C</em>, or less.
            </p>
            <p className="mt-2">
              First, let it be equal to <em>C</em>. Then <em>BF</em> has been applied to <em>AB</em>
              {' '}exceeding by a parallelogrammic figure <em>BF</em> similar to <em>D</em>.
            </p>
            <p className="mt-2">
              Next, let <em>BF</em> be greater than <em>C</em>. Then <em>BF</em> is to <em>C</em>
              {' '}as <em>BF</em> is to some smaller figure <em>G</em>, and <em>G</em> is to <em>C</em>
              {' '}as <em>BF</em> is to <em>G</em>. [VI.25]
            </p>
            <p className="mt-2">
              Through the construction involving means and the application of VI.25, VI.26,
              and VI.28, we obtain the parallelogram <em>KM</em> applied to <em>AB</em>, equal
              to <em>C</em>, and exceeding by a figure similar to <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore to the given straight line there has been applied a parallelogram
              equal to the given rectilinear figure and exceeding by a parallelogrammic
              figure similar to the given one.
            </p>
          </>
        }
      >
        <p>
          To a given straight line to apply a parallelogram equal to a given rectilinear
          figure and exceeding by a parallelogrammic figure similar to a given one.
        </p>
      </Proposition>

      <h2>Application of Areas with Excess</h2>

      <p>
        This proposition is the <strong>hyperbolic application</strong> of areas&mdash;constructing
        a parallelogram on a line that equals a given area but <em>exceeds</em> beyond the
        line by a figure of specified shape. It complements VI.28 (elliptic application, with
        defect) and VI.27 (exact fit).
      </p>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 250" className="w-full max-w-md">
          {/* The given line AB */}
          <line x1="50" y1="150" x2="250" y2="150" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="50" cy="150" r="4" fill="#f59e0b" />
          <circle cx="250" cy="150" r="4" fill="#f59e0b" />
          <text x="50" y="170" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">A</text>
          <text x="250" y="170" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">B</text>

          {/* Midpoint E */}
          <circle cx="150" cy="150" r="3" fill="#a855f7" />
          <text x="150" y="170" fill="#a855f7" fontSize="12" textAnchor="middle">E</text>

          {/* The applied parallelogram AGFB (goes beyond B) */}
          <polygon
            points="50,150 50,80 300,80 300,150"
            fill="#3b82f6"
            fillOpacity="0.2"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* The excess part beyond B */}
          <polygon
            points="250,150 250,80 300,80 300,150"
            fill="#22c55e"
            fillOpacity="0.3"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* Labels */}
          <text x="45" y="75" fill="#3b82f6" fontSize="12">G</text>
          <text x="305" y="75" fill="#22c55e" fontSize="12">F</text>
          <text x="305" y="155" fill="#22c55e" fontSize="12">H</text>

          {/* Annotations */}
          <text x="140" y="115" fill="#3b82f6" fontSize="11" textAnchor="middle">
            Applied parallelogram
          </text>
          <text x="275" y="115" fill="#22c55e" fontSize="11" textAnchor="middle">
            Excess
          </text>

          {/* The given figure C (to match area) */}
          <rect x="50" y="200" width="60" height="40" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="1" />
          <text x="80" y="225" fill="#ec4899" fontSize="12" textAnchor="middle">C</text>

          {/* The given parallelogram D (for similarity) */}
          <polygon
            points="150,240 150,200 200,200 200,240"
            fill="#8b5cf6"
            fillOpacity="0.3"
            stroke="#8b5cf6"
            strokeWidth="1"
          />
          <text x="175" y="225" fill="#8b5cf6" fontSize="12" textAnchor="middle">D</text>

          {/* Similarity indicator */}
          <text x="300" y="195" fill="#6b7280" fontSize="10" textAnchor="middle">
            Excess ~ D
          </text>
          <path d="M 275 180 Q 285 175 295 180" fill="none" stroke="#6b7280" strokeWidth="1" />
        </svg>
      </div>

      <h3 className="mt-6">The Three Types of Application</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          Euclid considers three ways to apply a parallelogram equal to a given area
          to a given line:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-dark-300">
          <li>
            <strong className="text-amber-400">VI.27:</strong> Exact fit (area exactly
            fills parallelogram on the line)
          </li>
          <li>
            <strong className="text-blue-400">VI.28:</strong> With <em>defect</em>&mdash;the
            applied parallelogram falls short of covering the whole line
          </li>
          <li>
            <strong className="text-green-400">VI.29 (this):</strong> With <em>excess</em>&mdash;the
            applied parallelogram extends beyond the line
          </li>
        </ul>
      </div>

      <h3 className="mt-6">Connection to Quadratic Equations</h3>

      <p>
        This proposition solves quadratic equations of the form:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">
          x(x + a) = c
        </p>
        <p className="text-dark-400 text-sm mt-2">
          where a = AB (the given line), c = C (the given area)
        </p>
      </div>

      <p className="mt-4">
        The solution constructs a rectangle of area <em>c</em> whose dimensions exceed
        the given line. The "excess" is the amount by which x exceeds a.
      </p>

      <h3 className="mt-6">Proof Strategy</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Bisect AB at E</li>
          <li>On EB, construct parallelogram BF similar to D</li>
          <li>Compare BF to C (equal, greater, or less)</li>
          <li>Use VI.25 to find a mean proportional</li>
          <li>Apply VI.26 (constructing similar figures in given ratio)</li>
          <li>The result gives the required parallelogram</li>
        </ol>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Note:</strong> The application
          of areas was the Greek method for solving quadratic problems geometrically.
          This technique, developed by the Pythagoreans and refined by Euclid, anticipated
          algebraic equation-solving by two millennia. The term "hyperbola" comes from
          this "exceeding" application.
        </p>
      </div>
    </LessonLayout>
  );
}
