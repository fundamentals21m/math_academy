import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section147() {
  return (
    <LessonLayout sectionId={147}>
      <Proposition
        title="Proposition VI.2"
        proof={
          <>
            <p>
              Let <em>DE</em> be drawn parallel to <em>BC</em>, one of the sides of the triangle{' '}
              <em>ABC</em>.
            </p>
            <p className="mt-2">
              I say that, as <em>BD</em> is to <em>DA</em>, so is <em>CE</em> to <em>EA</em>.
            </p>
            <p className="mt-2">
              For let <em>BE</em>, <em>CD</em> be joined.
            </p>
            <p className="mt-2">
              Therefore the triangle <em>BDE</em> is equal to the triangle <em>CDE</em>; for they
              are on the same base <em>DE</em> and in the same parallels <em>DE</em>, <em>BC</em>.
              [I.38]
            </p>
            <p className="mt-2">
              And <em>ADE</em> is another triangle.
            </p>
            <p className="mt-2">
              But equals have the same ratio to the same; [V.7] therefore, as the triangle{' '}
              <em>BDE</em> is to the triangle <em>ADE</em>, so is the triangle <em>CDE</em> to the
              triangle <em>ADE</em>.
            </p>
            <p className="mt-2">
              But, as the triangle <em>BDE</em> is to <em>ADE</em>, so is <em>BD</em> to <em>DA</em>;
              for, being under the same height, the perpendicular drawn from <em>E</em> to{' '}
              <em>AB</em>, they are to one another as their bases. [VI.1]
            </p>
            <p className="mt-2">
              For the same reason also, as the triangle <em>CDE</em> is to <em>ADE</em>, so is{' '}
              <em>CE</em> to <em>EA</em>.
            </p>
            <p className="mt-2">
              Therefore also, as <em>BD</em> is to <em>DA</em>, so is <em>CE</em> to <em>EA</em>.
              [V.11]
            </p>
            <p className="mt-2 font-medium">
              [The converse is proved by reductio ad absurdum, showing that if <em>DE</em> were not
              parallel to <em>BC</em>, we would get a contradiction with the given proportions.]
            </p>
          </>
        }
      >
        <p>
          If a straight line be drawn parallel to one of the sides of a triangle, it will cut the
          sides of the triangle proportionally; and, if the sides of the triangle be cut
          proportionally, the line joining the points of section will be parallel to the remaining
          side of the triangle.
        </p>
      </Proposition>

      <h2>The Basic Proportionality Theorem</h2>

      <p>
        This proposition establishes the fundamental connection between parallel lines and
        proportional division. It is often called the <strong>Basic Proportionality Theorem</strong>{' '}
        or <strong>Thales' Theorem</strong> (in some traditions).
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 280" className="w-full max-w-md">
          {/* Triangle ABC */}
          <polygon
            points="175,30 60,250 290,250"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Parallel line DE */}
          <line x1="105" y1="140" x2="245" y2="140" stroke="#3b82f6" strokeWidth="2" />

          {/* Vertex labels */}
          <text x="175" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12">
            A
          </text>
          <text x="50" y="260" textAnchor="middle" fill="#f59e0b" fontSize="12">
            B
          </text>
          <text x="300" y="260" textAnchor="middle" fill="#f59e0b" fontSize="12">
            C
          </text>
          <text x="95" y="135" textAnchor="middle" fill="#3b82f6" fontSize="12">
            D
          </text>
          <text x="255" y="135" textAnchor="middle" fill="#3b82f6" fontSize="12">
            E
          </text>

          {/* Points on sides */}
          <circle cx="105" cy="140" r="3" fill="#3b82f6" />
          <circle cx="245" cy="140" r="3" fill="#3b82f6" />

          {/* Parallel marks */}
          <line x1="110" y1="250" x2="130" y2="250" stroke="#22c55e" strokeWidth="2" />
          <line x1="110" y1="246" x2="130" y2="246" stroke="#22c55e" strokeWidth="2" />
          <line x1="145" y1="140" x2="165" y2="140" stroke="#22c55e" strokeWidth="2" />
          <line x1="145" y1="136" x2="165" y2="136" stroke="#22c55e" strokeWidth="2" />

          {/* Segment labels */}
          <text x="75" y="180" textAnchor="middle" fill="#ef4444" fontSize="10">
            BD
          </text>
          <text x="125" y="85" textAnchor="middle" fill="#ef4444" fontSize="10">
            DA
          </text>
          <text x="270" y="180" textAnchor="middle" fill="#10b981" fontSize="10">
            CE
          </text>
          <text x="225" y="85" textAnchor="middle" fill="#10b981" fontSize="10">
            EA
          </text>
        </svg>
      </div>

      <h3>The Two Parts</h3>

      <p>This proposition is really two theorems in one:</p>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Part 1 (Direct)</h4>
          <p className="text-dark-200 mt-2">
            If <em>DE</em> || <em>BC</em>, then <em>BD</em> : <em>DA</em> = <em>CE</em> : <em>EA</em>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Part 2 (Converse)</h4>
          <p className="text-dark-200 mt-2">
            If <em>BD</em> : <em>DA</em> = <em>CE</em> : <em>EA</em>, then <em>DE</em> ||{' '}
            <em>BC</em>
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Relationships</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">BD : DA = CE : EA</p>
      </div>

      <p className="mt-4">Equivalently, we also have:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono mb-2">AB : AD = AC : AE</p>
        <p className="text-amber-400 font-mono">AB : DB = AC : EC</p>
      </div>

      <h3 className="mt-6">Proof Strategy</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Triangles <em>BDE</em> and <em>CDE</em> have equal area (same base <em>DE</em>, between
          parallels)
        </li>
        <li>
          Apply VI.1 to compare <em>BDE</em> : <em>ADE</em> with <em>BD</em> : <em>DA</em>
        </li>
        <li>
          Similarly for <em>CDE</em> : <em>ADE</em> and <em>CE</em> : <em>EA</em>
        </li>
        <li>Use V.7 and V.11 to establish the proportion</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Why This Matters:</strong> This proposition is the key
          link between parallel lines and proportionality. It underlies all the similarity theorems
          that follow and is essential for coordinate geometry, where proportional division is
          fundamental.
        </p>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Midpoint Theorem:</strong> A special case where <em>D</em> and <em>E</em> are
          midpoints
        </li>
        <li>
          <strong>Coordinate Geometry:</strong> Finding points dividing a segment in a given ratio
        </li>
        <li>
          <strong>Similar Triangles:</strong> Foundation for proving triangles are similar
        </li>
        <li>
          <strong>Computer Graphics:</strong> Interpolation and texture mapping
        </li>
      </ul>
    </LessonLayout>
  );
}
