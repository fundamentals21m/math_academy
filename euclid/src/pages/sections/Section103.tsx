import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section103() {
  return (
    <LessonLayout sectionId={103}>
      <Proposition
        title="Proposition IV.1"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given circle, and <em>D</em> a straight line not greater than
              the diameter of the circle.
            </p>
            <p className="mt-2">
              It is required to fit into the circle <em>ABC</em> a straight line equal to{' '}
              <em>D</em>.
            </p>
            <p className="mt-2">
              Let a diameter <em>BC</em> of the circle <em>ABC</em> be drawn.
            </p>
            <p className="mt-2">
              Then, if <em>BC</em> is equal to <em>D</em>, that which was required has been done;
              for <em>BC</em> has been fitted into the circle equal to <em>D</em>.
            </p>
            <p className="mt-2">
              But, if <em>BC</em> is greater than <em>D</em>, let <em>CE</em> be made equal to{' '}
              <em>D</em> [I.3], and with center <em>C</em> and radius <em>CE</em> let the circle{' '}
              <em>EAF</em> be described.
            </p>
            <p className="mt-2">
              Let <em>CA</em> be joined.
            </p>
            <p className="mt-2">
              Then, since the point <em>C</em> is the center of the circle <em>EAF</em>,{' '}
              <em>CA</em> is equal to <em>CE</em>.
            </p>
            <p className="mt-2">
              But <em>CE</em> is equal to <em>D</em>; therefore <em>D</em> is also equal to{' '}
              <em>CA</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore into the given circle <em>ABC</em> there has been fitted <em>CA</em> equal
              to the given straight line <em>D</em>.
            </p>
          </>
        }
      >
        <p>
          Into a given circle to fit a straight line equal to a given straight line which is not
          greater than the diameter of the circle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is a simple but essential construction: given a circle and a line segment (no longer
        than the diameter), place a chord of that length in the circle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 260" className="w-80 h-66">
          {/* Given circle ABC */}
          <circle cx="150" cy="130" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Diameter BC */}
          <line x1="70" y1="130" x2="230" y2="130" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Auxiliary circle from C with radius CE */}
          <circle
            cx="230"
            cy="130"
            r="55"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="4"
          />
          {/* Point A where circles intersect */}
          <circle cx="185" cy="65" r="4" fill="#ef4444" />
          {/* Chord CA - the result */}
          <line x1="230" y1="130" x2="185" y2="65" stroke="#ef4444" strokeWidth="2" />
          {/* Points */}
          <circle cx="70" cy="130" r="3" fill="#3b82f6" />
          <circle cx="230" cy="130" r="3" fill="#3b82f6" />
          {/* Given line D */}
          <line x1="30" y1="220" x2="85" y2="220" stroke="#9333ea" strokeWidth="2" />
          {/* Labels */}
          <text x="60" y="145" fill="#3b82f6" fontSize="11">
            B
          </text>
          <text x="235" y="145" fill="#3b82f6" fontSize="11">
            C
          </text>
          <text x="185" y="55" fill="#ef4444" fontSize="11">
            A
          </text>
          <text x="50" y="240" fill="#9333ea" fontSize="11">
            D (given)
          </text>
          <text x="195" y="105" fill="#ef4444" fontSize="10">
            CA = D
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Draw any diameter <em>BC</em> of the given circle
        </li>
        <li>
          If <em>BC</em> = <em>D</em>, we're done (the diameter itself is the answer)
        </li>
        <li>
          Otherwise, from endpoint <em>C</em>, cut off <em>CE</em> = <em>D</em> along the diameter
          [I.3]
        </li>
        <li>
          Draw a circle with center <em>C</em> and radius <em>CE</em>
        </li>
        <li>
          Let <em>A</em> be where this circle intersects the original circle
        </li>
        <li>
          Then <em>CA</em> is the required chord (since <em>CA</em> = <em>CE</em> = <em>D</em>)
        </li>
      </ol>

      <h3 className="mt-6">Why the Condition "Not Greater Than the Diameter"?</h3>

      <p className="mt-2">
        The diameter is the longest chord in a circle (III.15). If the given line <em>D</em> were
        longer than the diameter, no chord could equal it, and the construction would be impossible.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting off equal lines)</li>
        <li>Postulate 3 (drawing circles)</li>
        <li>The definition of a circle (all radii are equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Foundation for Book IV:</strong> This simple
          construction is the first step. The remaining propositions build on it to inscribe and
          circumscribe increasingly complex figures.
        </p>
      </div>
    </LessonLayout>
  );
}
