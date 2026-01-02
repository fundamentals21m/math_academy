import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <Proposition
        title="Proposition III.3"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a circle, and in it let a straight line <em>CD</em>, not passing
              through the center, bisect a straight line <em>AB</em> which does not pass through
              the center, at the point <em>F</em>.
            </p>
            <p className="mt-2">
              I say that it also cuts it at right angles.
            </p>
            <p className="mt-2">
              For let the center of the circle <em>ABC</em> be taken, and let it be <em>E</em>; let{' '}
              <em>EA</em>, <em>EB</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AF</em> is equal to <em>FB</em>, and <em>FE</em> is common, two sides
              are equal to two sides; and the base <em>EA</em> is equal to the base <em>EB</em>;
              therefore the angle <em>AFE</em> is equal to the angle <em>BFE</em>. [I. 8]
            </p>
            <p className="mt-2">
              But, when a straight line set up on a straight line makes the adjacent angles equal to
              one another, each of the equal angles is right; [I. Def. 10] therefore each of the
              angles <em>AFE</em>, <em>BFE</em> is right.
            </p>
            <p className="mt-2">
              Therefore <em>CD</em>, which passes through the center and bisects <em>AB</em> which
              does not pass through the center, also cuts it at right angles.
            </p>
            <p className="mt-2">
              Again, let <em>CD</em> cut <em>AB</em> at right angles.
            </p>
            <p className="mt-2">
              I say that it also bisects it, that is, that <em>AF</em> is equal to <em>FB</em>.
            </p>
            <p className="mt-2">
              For, with the same construction, since <em>EA</em> is equal to <em>EB</em>, the angle{' '}
              <em>EAF</em> is also equal to the angle <em>EBF</em>. [I. 5]
            </p>
            <p className="mt-2">
              But the right angle <em>AFE</em> is also equal to the right angle <em>BFE</em>;
              therefore <em>EAF</em>, <em>EBF</em> are two triangles having two angles equal to two
              angles and one side equal to one side, namely <em>EF</em>, which is common to them,
              and subtends one of the equal angles; therefore they will also have the remaining
              sides equal to the remaining sides; [I. 26] therefore <em>AF</em> is equal to{' '}
              <em>FB</em>.
            </p>
            <p className="mt-2 font-medium">Therefore etc.</p>
          </>
        }
      >
        <p>
          If in a circle a straight line through the center bisect a straight line not through the
          center, it also cuts it at right angles; and if it cut it at right angles, it also
          bisects it.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is a crucial <strong>biconditional</strong> theorem about diameters and chords. It has
        two parts:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>If a diameter bisects a chord, it is perpendicular to that chord</li>
        <li>If a diameter is perpendicular to a chord, it bisects that chord</li>
      </ol>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 250" className="w-64 h-64">
          {/* Circle */}
          <circle cx="125" cy="125" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center E */}
          <circle cx="125" cy="125" r="3" fill="#f59e0b" />
          {/* Chord AB */}
          <line x1="60" y1="80" x2="190" y2="80" stroke="#3b82f6" strokeWidth="2" />
          {/* Diameter CD through center, perpendicular to AB */}
          <line x1="125" y1="45" x2="125" y2="205" stroke="#22c55e" strokeWidth="2" />
          {/* Midpoint F */}
          <circle cx="125" cy="80" r="4" fill="#ef4444" />
          {/* Radii EA and EB */}
          <line x1="125" y1="125" x2="60" y2="80" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <line x1="125" y1="125" x2="190" y2="80" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Right angle marker */}
          <path d="M 115 80 L 115 90 L 125 90" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="50" y="85" fill="#3b82f6" fontSize="12">A</text>
          <text x="195" y="85" fill="#3b82f6" fontSize="12">B</text>
          <text x="125" y="38" fill="#22c55e" fontSize="12" textAnchor="middle">C</text>
          <text x="125" y="220" fill="#22c55e" fontSize="12" textAnchor="middle">D</text>
          <text x="130" y="140" fill="#f59e0b" fontSize="12">E</text>
          <text x="130" y="75" fill="#ef4444" fontSize="12">F</text>
        </svg>
      </div>

      <h3>Part 1: Bisecting Implies Perpendicular</h3>

      <p>
        If <em>CD</em> passes through center <em>E</em> and bisects chord <em>AB</em> at <em>F</em>:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>AF</em> = <em>FB</em> (given: bisects)</li>
        <li><em>EA</em> = <em>EB</em> (radii)</li>
        <li><em>EF</em> = <em>EF</em> (common)</li>
        <li>Therefore triangles <em>EFA</em> and <em>EFB</em> are congruent by SSS (I.8)</li>
        <li>So angles <em>EFA</em> and <em>EFB</em> are equal</li>
        <li>Since they're supplementary, each is a right angle</li>
      </ul>

      <h3 className="mt-6">Part 2: Perpendicular Implies Bisecting</h3>

      <p>
        If <em>CD</em> is perpendicular to <em>AB</em> at <em>F</em>:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Angle <em>EFA</em> = angle <em>EFB</em> = 90° (given)</li>
        <li><em>EA</em> = <em>EB</em> implies angle <em>EAF</em> = angle <em>EBF</em> (I.5)</li>
        <li><em>EF</em> is common</li>
        <li>By AAS (I.26), triangles <em>EFA</em> and <em>EFB</em> are congruent</li>
        <li>Therefore <em>AF</em> = <em>FB</em></li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Proposition I.26 (AAS congruence)</li>
        <li>Definition I.10 (right angles)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Practical Application:</strong> This theorem provides
          an alternative method to find the center of a circle: construct the perpendicular
          bisectors of any two non-parallel chords; their intersection is the center.
        </p>
      </div>
    </LessonLayout>
  );
}
