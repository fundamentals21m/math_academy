import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <Proposition
        title="Proposition III.7"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, let <em>AD</em> be a diameter of it, and let some point{' '}
              <em>F</em> be taken on <em>AD</em> which is not the center of the circle; let{' '}
              <em>E</em> be the center of the circle.
            </p>
            <p className="mt-2">
              I say that, of the straight lines falling upon the circumference from <em>F</em>,{' '}
              <em>FA</em> is greatest, <em>FD</em> is least, and of the others, <em>FB</em> is
              greater than <em>FC</em>, and <em>FC</em> than <em>FG</em>.
            </p>
            <p className="mt-2">
              For let <em>BE</em>, <em>CE</em>, <em>GE</em> be joined.
            </p>
            <p className="mt-2">
              Then, since in any triangle two sides are greater than the remaining one, [I. 20]{' '}
              <em>EB</em>, <em>EF</em> are greater than <em>BF</em>.
            </p>
            <p className="mt-2">
              But <em>AE</em> is equal to <em>BE</em>; therefore <em>AE</em>, <em>EF</em> are
              greater than <em>BF</em>.
            </p>
            <p className="mt-2">
              But <em>AE</em>, <em>EF</em> is <em>AF</em>; therefore <em>AF</em> is greater than{' '}
              <em>BF</em>.
            </p>
            <p className="mt-2">
              Again, since <em>BE</em> is equal to <em>CE</em>, and <em>FE</em> is common, the two
              sides <em>BE</em>, <em>EF</em> are equal to the two sides <em>CE</em>, <em>EF</em>.
            </p>
            <p className="mt-2">
              But the angle <em>BEF</em> is greater than the angle <em>CEF</em>; therefore the base{' '}
              <em>BF</em> is greater than the base <em>CF</em>. [I. 24]
            </p>
            <p className="mt-2">
              For the same reason <em>CF</em> is also greater than <em>GF</em>.
            </p>
            <p className="mt-2">
              Again, since <em>GF</em>, <em>FE</em> are greater than <em>EG</em>, [I. 20] and{' '}
              <em>EG</em> is equal to <em>ED</em>, <em>GF</em>, <em>FE</em> are greater than{' '}
              <em>ED</em>.
            </p>
            <p className="mt-2">
              Let <em>EF</em> be subtracted from each; therefore the remainder <em>GF</em> is
              greater than the remainder <em>FD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>FA</em> is greatest, <em>FD</em> is least, and <em>FB</em> is greater
              than <em>FC</em>, and <em>FC</em> than <em>FG</em>.
            </p>
          </>
        }
      >
        <p>
          If on the diameter of a circle a point be taken which is not the center of the circle,
          and from the point straight lines fall upon the circle, that will be greatest on which
          the center is, the least will be the remainder of the same diameter, and of the rest the
          nearer to the straight line through the center is always greater than the more remote.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition compares the lengths of line segments from a point on a diameter (but not
        the center) to various points on the circle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Diameter AD */}
          <line x1="50" y1="140" x2="230" y2="140" stroke="#3b82f6" strokeWidth="2" />
          {/* Center E */}
          <circle cx="140" cy="140" r="3" fill="#f59e0b" />
          {/* Point F on diameter */}
          <circle cx="100" cy="140" r="4" fill="#ef4444" />
          {/* Points on circumference */}
          <circle cx="50" cy="140" r="3" fill="#22c55e" />
          <circle cx="230" cy="140" r="3" fill="#22c55e" />
          <circle cx="90" cy="60" r="3" fill="#22c55e" />
          <circle cx="140" cy="50" r="3" fill="#22c55e" />
          <circle cx="190" cy="60" r="3" fill="#22c55e" />
          {/* Lines from F */}
          <line x1="100" y1="140" x2="50" y2="140" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="100" y1="140" x2="230" y2="140" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
          <line x1="100" y1="140" x2="90" y2="60" stroke="#6b7280" strokeWidth="1" />
          <line x1="100" y1="140" x2="140" y2="50" stroke="#6b7280" strokeWidth="1" />
          <line x1="100" y1="140" x2="190" y2="60" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="40" y="155" fill="#22c55e" fontSize="12">A</text>
          <text x="235" y="155" fill="#22c55e" fontSize="12">D</text>
          <text x="80" y="55" fill="#22c55e" fontSize="12">B</text>
          <text x="145" y="45" fill="#22c55e" fontSize="12">C</text>
          <text x="195" y="55" fill="#22c55e" fontSize="12">G</text>
          <text x="145" y="155" fill="#f59e0b" fontSize="12">E</text>
          <text x="95" y="155" fill="#ef4444" fontSize="12">F</text>
        </svg>
      </div>

      <h3>Key Results</h3>

      <p>For point <em>F</em> on diameter <em>AD</em>, with center at <em>E</em>:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ul className="space-y-2 text-dark-300">
          <li><strong className="text-amber-400">Greatest:</strong> <em>FA</em> (toward the farther end of the diameter)</li>
          <li><strong className="text-amber-400">Least:</strong> <em>FD</em> (toward the nearer end of the diameter)</li>
          <li><strong className="text-amber-400">In between:</strong> Lines closer to the diameter are longer than those farther away</li>
        </ul>
      </div>

      <h3 className="mt-6">Why Is This True?</h3>

      <p>
        For the greatest: <em>FA</em> = <em>FE</em> + <em>EA</em> = <em>FE</em> + radius. By the
        triangle inequality, this exceeds any other line from <em>F</em> to the circle.
      </p>

      <p className="mt-4">
        For the least: <em>FD</em> = <em>ED</em> - <em>EF</em> = radius - <em>EF</em>. This is the
        smallest possible distance.
      </p>

      <p className="mt-4">
        For in-between points: Using I.24 (if two sides are equal and the included angle is
        greater, the opposite side is greater), points closer to the diameter have larger included
        angles and thus longer lines.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.20 (triangle inequality)</li>
        <li>Proposition I.24 (hinge theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Special Case:</strong> When <em>F</em> = <em>E</em>{' '}
          (the center), all lines to the circumference are equal—they're all radii. This
          proposition only applies when <em>F</em> is off-center.
        </p>
      </div>
    </LessonLayout>
  );
}
