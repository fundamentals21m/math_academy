import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section78() {
  return (
    <LessonLayout sectionId={78}>
      <Proposition
        title="Proposition III.14"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, and let <em>AD</em>, <em>BC</em> be equal straight
              lines in it.
            </p>
            <p className="mt-2">
              I say that <em>AD</em>, <em>BC</em> are equally distant from the center.
            </p>
            <p className="mt-2">
              For let the center of the circle <em>ABCD</em> be taken [III. 1], and let it be{' '}
              <em>E</em>; from <em>E</em> let <em>EF</em>, <em>EG</em> be drawn perpendicular to{' '}
              <em>AD</em>, <em>BC</em> [I. 12], and let <em>AE</em>, <em>EC</em> be joined.
            </p>
            <p className="mt-2">
              Then, since a straight line <em>EF</em> through the center cuts a straight line{' '}
              <em>AD</em> not through the center at right angles, it also bisects it. [III. 3]
            </p>
            <p className="mt-2">
              Therefore <em>AF</em> is equal to <em>FD</em>; therefore <em>AD</em> is double{' '}
              <em>AF</em>. For the same reason, <em>BC</em> is also double <em>CG</em>.
            </p>
            <p className="mt-2">
              And <em>AD</em> is equal to <em>BC</em>; therefore <em>AF</em> is also equal to{' '}
              <em>CG</em>.
            </p>
            <p className="mt-2">
              And, since <em>AE</em> is equal to <em>EC</em>, the square on <em>AE</em> is also
              equal to the square on <em>EC</em>. But the squares on <em>AF</em>, <em>FE</em> are
              equal to the square on <em>AE</em>, for the angle at <em>F</em> is right. [I. 47]
            </p>
            <p className="mt-2">
              And the squares on <em>EG</em>, <em>GC</em> are equal to the square on <em>EC</em>,
              for the angle at <em>G</em> is right. [I. 47]
            </p>
            <p className="mt-2">
              Therefore the squares on <em>AF</em>, <em>FE</em> are equal to the squares on{' '}
              <em>CG</em>, <em>GE</em>. And of these the square on <em>AF</em> is equal to the
              square on <em>CG</em>, for <em>AF</em> is equal to <em>CG</em>; therefore the
              remaining square on <em>FE</em> is equal to the remaining square on <em>EG</em>;
              therefore <em>EF</em> is equal to <em>EG</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>AD</em>, <em>BC</em> are equally distant from the center. [The converse
              is proved similarly.]
            </p>
          </>
        }
      >
        <p>
          In a circle equal straight lines are equally distant from the center, and those which
          are equally distant from the center are equal to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is a biconditional theorem relating chord length to distance from the center:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Equal chords are equidistant from the center</li>
        <li>Chords equidistant from the center are equal</li>
      </ul>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center E */}
          <circle cx="140" cy="140" r="3" fill="#f59e0b" />
          {/* Chord AD */}
          <line x1="70" y1="80" x2="170" y2="80" stroke="#3b82f6" strokeWidth="2" />
          {/* Chord BC */}
          <line x1="70" y1="200" x2="170" y2="200" stroke="#22c55e" strokeWidth="2" />
          {/* Perpendiculars from center */}
          <line x1="140" y1="140" x2="120" y2="80" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <line x1="140" y1="140" x2="120" y2="200" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Foot points */}
          <circle cx="120" cy="80" r="3" fill="#3b82f6" />
          <circle cx="120" cy="200" r="3" fill="#22c55e" />
          {/* Right angle markers */}
          <path d="M 130 80 L 130 90 L 120 90" fill="none" stroke="#6b7280" strokeWidth="1" />
          <path d="M 130 200 L 130 190 L 120 190" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="60" y="85" fill="#3b82f6" fontSize="11">A</text>
          <text x="175" y="85" fill="#3b82f6" fontSize="11">D</text>
          <text x="60" y="205" fill="#22c55e" fontSize="11">B</text>
          <text x="175" y="205" fill="#22c55e" fontSize="11">C</text>
          <text x="145" y="135" fill="#f59e0b" fontSize="11">E</text>
          <text x="108" y="75" fill="#3b82f6" fontSize="10">F</text>
          <text x="108" y="215" fill="#22c55e" fontSize="10">G</text>
          {/* Equal marks on chords */}
          <text x="120" y="70" fill="#3b82f6" fontSize="10">= length</text>
          <text x="120" y="225" fill="#22c55e" fontSize="10">= length</text>
        </svg>
      </div>

      <h3>The Proof</h3>

      <p>Given equal chords <em>AD</em> and <em>BC</em>:</p>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw perpendiculars from center <em>E</em> to each chord</li>
        <li>These perpendiculars bisect the chords (by III.3)</li>
        <li>So <em>AF</em> = <em>AD</em>/2 = <em>BC</em>/2 = <em>CG</em></li>
        <li>Apply Pythagorean theorem: <em>AE</em>² = <em>AF</em>² + <em>EF</em>²</li>
        <li>Similarly: <em>CE</em>² = <em>CG</em>² + <em>EG</em>²</li>
        <li>Since <em>AE</em> = <em>CE</em> (radii) and <em>AF</em> = <em>CG</em>, we get <em>EF</em> = <em>EG</em></li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.12 (constructing perpendicular from a point)</li>
        <li>Proposition I.47 (Pythagorean theorem)</li>
        <li>Proposition III.1 (finding center)</li>
        <li>Proposition III.3 (perpendicular from center bisects chord)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Converse:</strong> The converse (equidistant chords
          are equal) is proved by reversing the argument. If <em>EF</em> = <em>EG</em>, then the
          Pythagorean theorem gives <em>AF</em> = <em>CG</em>, and since each is half the chord,{' '}
          <em>AD</em> = <em>BC</em>.
        </p>
      </div>
    </LessonLayout>
  );
}
