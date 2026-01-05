import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section113() {
  return (
    <LessonLayout sectionId={113}>
      <Proposition
        title="Proposition IV.11"
        proof={
          <>
            <p>
              Let <em>ABCDE</em> be the given circle; it is required to inscribe in the circle{' '}
              <em>ABCDE</em> an equilateral and equiangular pentagon.
            </p>
            <p className="mt-2">
              Let the isosceles triangle <em>FGH</em> be set out having each of the angles at{' '}
              <em>G</em>, <em>H</em> double of the angle at <em>F</em>; [IV.10] let there be
              inscribed in the circle <em>ABCDE</em> the triangle <em>ACD</em> equiangular with the
              triangle <em>FGH</em>, so that the angle <em>CAD</em> is equal to the angle at{' '}
              <em>F</em> and the angles at <em>G</em>, <em>H</em> respectively equal to the angles{' '}
              <em>ACD</em>, <em>CDA</em>; [IV.2] therefore each of the angles <em>ACD</em>,{' '}
              <em>CDA</em> is also double of the angle <em>CAD</em>.
            </p>
            <p className="mt-2">
              Now let the angles <em>ACD</em>, <em>CDA</em> be bisected respectively by the straight
              lines <em>CE</em>, <em>DB</em> [I.9], and let <em>AB</em>, <em>BC</em>, <em>DE</em>,{' '}
              <em>EA</em> be joined.
            </p>
            <p className="mt-2">
              Then, since each of the angles <em>ACD</em>, <em>CDA</em> is double of the angle{' '}
              <em>CAD</em>, and they have been bisected by the straight lines <em>CE</em>,{' '}
              <em>DB</em>, therefore the five angles <em>DAC</em>, <em>ACE</em>, <em>ECD</em>,{' '}
              <em>CDB</em>, <em>BDA</em> are equal to one another.
            </p>
            <p className="mt-2">
              But equal angles stand on equal circumferences; [III.26] therefore the five
              circumferences <em>AB</em>, <em>BC</em>, <em>CD</em>, <em>DE</em>, <em>EA</em> are
              equal to one another.
            </p>
            <p className="mt-2">
              But equal circumferences are subtended by equal straight lines; [III.29] therefore the
              five straight lines <em>AB</em>, <em>BC</em>, <em>CD</em>, <em>DE</em>, <em>EA</em> are
              equal to one another; therefore the pentagon <em>ABCDE</em> is equilateral.
            </p>
            <p className="mt-2">
              I say next that it is also equiangular. For, since the circumference <em>AB</em> is
              equal to the circumference <em>DE</em>, let <em>BCD</em> be added to each; therefore
              the whole circumference <em>ABCD</em> is equal to the whole circumference <em>EDCB</em>
              .
            </p>
            <p className="mt-2">
              And the angle <em>AED</em> stands on the circumference <em>ABCD</em>, and the angle{' '}
              <em>BAE</em> on the circumference <em>EDCB</em>; therefore the angle <em>BAE</em> is
              also equal to the angle <em>AED</em>. [III.27]
            </p>
            <p className="mt-2">
              For the same reason each of the angles <em>ABC</em>, <em>BCD</em>, <em>CDE</em> is
              also equal to each of the angles <em>BAE</em>, <em>AED</em>; therefore the pentagon{' '}
              <em>ABCDE</em> is equiangular.
            </p>
            <p className="mt-2 font-medium">
              Therefore in the given circle an equilateral and equiangular pentagon has been
              inscribed.
            </p>
          </>
        }
      >
        <p>In a given circle to inscribe an equilateral and equiangular pentagon.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is one of the most celebrated constructions in the <em>Elements</em>. Euclid shows how
        to inscribe a regular pentagon in a circle using only compass and straightedge.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Regular pentagon - vertices at angles 90°, 162°, 234°, 306°, 378° from center */}
          <polygon
            points="140,50 224,106 192,205 88,205 56,106"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Diagonals showing golden ratio */}
          <line
            x1="140"
            y1="50"
            x2="88"
            y2="205"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="140"
            y1="50"
            x2="192"
            y2="205"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Vertices */}
          <circle cx="140" cy="50" r="4" fill="#22c55e" />
          <circle cx="224" cy="106" r="4" fill="#22c55e" />
          <circle cx="192" cy="205" r="4" fill="#22c55e" />
          <circle cx="88" cy="205" r="4" fill="#22c55e" />
          <circle cx="56" cy="106" r="4" fill="#22c55e" />
          {/* Center */}
          <circle cx="140" cy="140" r="2" fill="#ef4444" />
          {/* Labels */}
          <text x="140" y="40" fill="#22c55e" fontSize="11" textAnchor="middle">
            A
          </text>
          <text x="234" y="110" fill="#22c55e" fontSize="11">
            B
          </text>
          <text x="200" y="218" fill="#22c55e" fontSize="11">
            C
          </text>
          <text x="75" y="218" fill="#22c55e" fontSize="11">
            D
          </text>
          <text x="42" y="110" fill="#22c55e" fontSize="11">
            E
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Construct the golden triangle (36°-72°-72°) using IV.10</li>
        <li>
          Inscribe a triangle <em>ACD</em> in the circle with these angles [IV.2]
        </li>
        <li>
          Bisect angles <em>ACD</em> and <em>CDA</em> with chords <em>CE</em> and <em>DB</em> [I.9]
        </li>
        <li>
          Connect <em>AB</em>, <em>BC</em>, <em>DE</em>, <em>EA</em>
        </li>
        <li>
          <em>ABCDE</em> is the regular pentagon
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">The construction creates five equal central angles of 72° each:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          The golden triangle has angles 36° + 72° + 72° = 180°
        </li>
        <li>Bisecting the 72° angles gives 36° each</li>
        <li>
          Five angles of 36° at vertex <em>A</em> span the full circle
        </li>
        <li>Equal inscribed angles mean equal arcs (III.26)</li>
        <li>Equal arcs mean equal chords (III.29)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">The Pentagon and Golden Ratio</h4>
        <p className="text-dark-200">
          In a regular pentagon, the ratio of diagonal to side equals φ (the golden ratio). This
          is why IV.10 (the golden section) is essential for this construction.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.9 (bisecting an angle)</li>
        <li>Proposition III.26 (equal angles stand on equal arcs)</li>
        <li>Proposition III.27 (angles on equal arcs are equal)</li>
        <li>Proposition III.29 (equal arcs have equal chords)</li>
        <li>Proposition IV.2 (inscribing an equiangular triangle)</li>
        <li>Proposition IV.10 (golden triangle construction)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Significance:</strong> This construction
          fascinated the Pythagoreans, who used the pentagram (five-pointed star formed by the
          diagonals) as their secret symbol. The golden ratio's appearance in the pentagon connects
          it to number theory and the foundations of aesthetics.
        </p>
      </div>
    </LessonLayout>
  );
}
