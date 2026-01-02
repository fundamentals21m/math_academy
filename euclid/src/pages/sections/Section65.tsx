import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <Proposition
        title="Proposition III.1"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given circle; thus it is required to find the center of the
              circle <em>ABC</em>.
            </p>
            <p className="mt-2">
              Let a straight line <em>AB</em> be drawn through it at random, and let it be bisected
              at the point <em>D</em>; from <em>D</em> let <em>DC</em> be drawn at right angles to{' '}
              <em>AB</em>, and let it be drawn through to <em>E</em>; let <em>CE</em> be bisected at{' '}
              <em>F</em>.
            </p>
            <p className="mt-2">
              I say that <em>F</em> is the center of the circle <em>ABC</em>.
            </p>
            <p className="mt-2">
              For suppose it is not, but, if possible, let <em>G</em> be the center, and let{' '}
              <em>GA</em>, <em>GD</em>, <em>GB</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AD</em> is equal to <em>DB</em>, and <em>DG</em> is common, the two
              sides <em>AD</em>, <em>DG</em> are equal to the two sides <em>BD</em>, <em>DG</em>{' '}
              respectively; and the base <em>GA</em> is equal to the base <em>GB</em>, for they are
              radii; therefore the angle <em>ADG</em> is equal to the angle <em>GDB</em>. [I. 8]
            </p>
            <p className="mt-2">
              But, when a straight line set up on a straight line makes the adjacent angles equal to
              one another, each of the equal angles is right; [I. Def. 10] therefore the angle{' '}
              <em>GDB</em> is right.
            </p>
            <p className="mt-2">
              But the angle <em>FDB</em> is also right; therefore the angle <em>FDB</em> is equal to
              the angle <em>GDB</em>, the greater to the less: which is impossible.
            </p>
            <p className="mt-2">
              Therefore <em>G</em> is not the center of the circle <em>ABC</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that neither is any other point except <em>F</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the point <em>F</em> is the center of the circle <em>ABC</em>.
            </p>
          </>
        }
      >
        <p>To find the center of a given circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition provides the fundamental construction for locating the center of any
        circle. The method relies on a key property: the perpendicular bisector of any chord passes
        through the center.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 250" className="w-64 h-64">
          {/* Circle */}
          <circle cx="125" cy="125" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Chord AB */}
          <line x1="60" y1="160" x2="190" y2="160" stroke="#3b82f6" strokeWidth="2" />
          {/* Perpendicular bisector CE */}
          <line x1="125" y1="45" x2="125" y2="205" stroke="#22c55e" strokeWidth="2" />
          {/* Midpoint D */}
          <circle cx="125" cy="160" r="4" fill="#3b82f6" />
          {/* Center F */}
          <circle cx="125" cy="125" r="4" fill="#f59e0b" />
          {/* Points on circle */}
          <circle cx="60" cy="160" r="3" fill="#f59e0b" />
          <circle cx="190" cy="160" r="3" fill="#f59e0b" />
          <circle cx="125" cy="45" r="3" fill="#22c55e" />
          <circle cx="125" cy="205" r="3" fill="#22c55e" />
          {/* Right angle marker */}
          <path d="M 135 160 L 135 150 L 125 150" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="50" y="165" fill="#f59e0b" fontSize="12">A</text>
          <text x="195" y="165" fill="#f59e0b" fontSize="12">B</text>
          <text x="130" y="175" fill="#3b82f6" fontSize="12">D</text>
          <text x="125" y="40" fill="#22c55e" fontSize="12" textAnchor="middle">C</text>
          <text x="125" y="220" fill="#22c55e" fontSize="12" textAnchor="middle">E</text>
          <text x="130" y="120" fill="#f59e0b" fontSize="12">F</text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw any chord <em>AB</em></li>
        <li>Find the midpoint <em>D</em> of <em>AB</em> (using I.10)</li>
        <li>Draw a perpendicular to <em>AB</em> at <em>D</em> (using I.11)</li>
        <li>This perpendicular intersects the circle at <em>C</em> and <em>E</em></li>
        <li>The center is the midpoint <em>F</em> of <em>CE</em></li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Definition I.10 (right angles from equal adjacent angles)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Insight:</strong> The proof uses contradiction. If
          the center were at any point <em>G</em> not on the perpendicular bisector, then <em>G</em>{' '}
          would need to be equidistant from <em>A</em> and <em>B</em>. But this would make the angle{' '}
          <em>GDB</em> a right angle, contradicting the fact that <em>FDB</em> is already right.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Corollary:</strong> The perpendicular bisector of any
          chord passes through the center of the circle. Conversely, any line through the center
          perpendicular to a chord bisects that chord (see III.3).
        </p>
      </div>
    </LessonLayout>
  );
}
