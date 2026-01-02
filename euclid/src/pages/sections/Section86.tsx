import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section86() {
  return (
    <LessonLayout sectionId={86}>
      <Proposition
        title="Proposition III.22"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, and let <em>ABCD</em> be a quadrilateral in it.
            </p>
            <p className="mt-2">
              I say that the opposite angles are equal to two right angles.
            </p>
            <p className="mt-2">
              Let <em>AC</em>, <em>BD</em> be joined.
            </p>
            <p className="mt-2">
              Then, since in any triangle the three angles are equal to two right angles, [I. 32]
              the three angles <em>CAB</em>, <em>ABC</em>, <em>BCA</em> of the triangle <em>ABC</em>{' '}
              are equal to two right angles.
            </p>
            <p className="mt-2">
              But the angle <em>CAB</em> is equal to the angle <em>BDC</em>, for they are in the
              same segment <em>BADC</em>; [III. 21] and the angle <em>ACB</em> is equal to the
              angle <em>ADB</em>, for they are in the same segment <em>ADCB</em>; [III. 21]
            </p>
            <p className="mt-2">
              therefore the whole angle <em>ADC</em> is equal to the angles <em>BAC</em>,{' '}
              <em>ACB</em>.
            </p>
            <p className="mt-2">
              Let the angle <em>ABC</em> be added to each; therefore the angles <em>ABC</em>,{' '}
              <em>BAC</em>, <em>ACB</em> are equal to the angles <em>ABC</em>, <em>ADC</em>.
            </p>
            <p className="mt-2">
              But the angles <em>ABC</em>, <em>BAC</em>, <em>ACB</em> are equal to two right
              angles; therefore the angles <em>ABC</em>, <em>ADC</em> are also equal to two right
              angles.
            </p>
            <p className="mt-2 font-medium">
              Similarly we can prove that the angles <em>BAD</em>, <em>BCD</em> are also equal to
              two right angles.
            </p>
          </>
        }
      >
        <p>
          The opposite angles of quadrilaterals in circles are equal to two right angles.
        </p>
      </Proposition>

      <h2>Cyclic Quadrilaterals</h2>

      <p>
        A quadrilateral inscribed in a circle is called a <strong>cyclic quadrilateral</strong>.
        This proposition proves that opposite angles in any cyclic quadrilateral sum to 180°.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Quadrilateral vertices */}
          <circle cx="80" cy="80" r="4" fill="#3b82f6" />
          <circle cx="200" cy="80" r="4" fill="#3b82f6" />
          <circle cx="220" cy="180" r="4" fill="#22c55e" />
          <circle cx="60" cy="180" r="4" fill="#22c55e" />
          {/* Quadrilateral sides */}
          <polygon
            points="80,80 200,80 220,180 60,180"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Angle arcs */}
          <path d="M 95 80 A 15 15 0 0 1 85 95" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 205 180 A 15 15 0 0 1 215 165" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 185 80 A 15 15 0 0 0 195 95" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 75 180 A 15 15 0 0 0 65 165" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Labels */}
          <text x="70" y="70" fill="#3b82f6" fontSize="12">A</text>
          <text x="205" y="70" fill="#3b82f6" fontSize="12">B</text>
          <text x="225" y="190" fill="#22c55e" fontSize="12">C</text>
          <text x="45" y="190" fill="#22c55e" fontSize="12">D</text>
          {/* Angle labels */}
          <text x="95" y="100" fill="#ef4444" fontSize="10">α</text>
          <text x="195" y="170" fill="#ef4444" fontSize="10">α'</text>
          <text x="180" y="100" fill="#22c55e" fontSize="10">β</text>
          <text x="80" y="170" fill="#22c55e" fontSize="10">β'</text>
        </svg>
      </div>

      <h3>Key Theorem</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono mb-2">
          ∠A + ∠C = 180°
        </p>
        <p className="text-xl text-amber-400 font-mono">
          ∠B + ∠D = 180°
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <p>
        Draw diagonal <em>AC</em>. This creates triangle <em>ABC</em>. By III.21:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>∠<em>CAB</em> = ∠<em>CDB</em> (same arc <em>BC</em>)</li>
        <li>∠<em>ACB</em> = ∠<em>ADB</em> (same arc <em>AB</em>)</li>
      </ul>

      <p className="mt-4">
        So ∠<em>ADC</em> = ∠<em>ADB</em> + ∠<em>BDC</em> = ∠<em>ACB</em> + ∠<em>CAB</em>.
      </p>

      <p className="mt-4">
        Adding ∠<em>ABC</em> to both sides: ∠<em>ABC</em> + ∠<em>ADC</em> = ∠<em>ABC</em> +
        ∠<em>ACB</em> + ∠<em>CAB</em> = 180° (angles of triangle <em>ABC</em>).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.32 (angles of triangle sum to 180°)</li>
        <li>Proposition III.21 (angles in same segment are equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Converse:</strong> If a quadrilateral has opposite
          angles summing to 180°, then it can be inscribed in a circle. This is a test for
          whether four points are concyclic.
        </p>
      </div>
    </LessonLayout>
  );
}
