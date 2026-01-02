import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section72() {
  return (
    <LessonLayout sectionId={72}>
      <Proposition
        title="Proposition III.8"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a circle, and let <em>D</em> be a point outside <em>ABC</em>;
              let straight lines <em>DA</em>, <em>DE</em>, <em>DF</em>, <em>DC</em> be drawn from{' '}
              <em>D</em> to the circle, and let <em>DA</em> be through the center <em>M</em>.
            </p>
            <p className="mt-2">
              I say that, of the straight lines falling on the circumference, <em>DA</em> passing
              through the center is greatest; <em>DE</em> is greater than <em>DF</em>, and{' '}
              <em>DF</em> than <em>DC</em>; and <em>DG</em> is less than <em>DC</em>, and{' '}
              <em>DK</em> less than <em>DG</em>, and <em>DB</em> passing through the center is
              least.
            </p>
            <p className="mt-2">
              For let <em>ME</em>, <em>MF</em>, <em>MC</em>, <em>MK</em>, <em>MG</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AM</em> is equal to <em>EM</em>, let <em>MD</em> be added to each;
              therefore <em>AD</em> is equal to <em>EM</em>, <em>MD</em>.
            </p>
            <p className="mt-2">
              But <em>EM</em>, <em>MD</em> are greater than <em>ED</em>; [I. 20] therefore{' '}
              <em>AD</em> is also greater than <em>ED</em>.
            </p>
            <p className="mt-2">
              Again, since <em>ME</em> is equal to <em>MF</em>, and <em>MD</em> is common,{' '}
              <em>EM</em>, <em>MD</em> are equal to <em>FM</em>, <em>MD</em>; and the angle{' '}
              <em>EMD</em> is greater than the angle <em>FMD</em>; therefore the base <em>ED</em>{' '}
              is greater than the base <em>FD</em>. [I. 24]
            </p>
            <p className="mt-2">
              Similarly we can prove that <em>FD</em> is greater than <em>CD</em>.
            </p>
            <p className="mt-2">
              Again, since <em>GK</em>, <em>KM</em> are greater than <em>GM</em>, [I. 20] and{' '}
              <em>GM</em> is equal to <em>KM</em>, therefore <em>GK</em>, <em>KM</em> are greater
              than <em>KM</em>; therefore <em>GK</em> is greater than zero, which means{' '}
              <em>GK</em> is positive.
            </p>
            <p className="mt-2">
              Now <em>MG</em>, <em>GD</em> are greater than <em>MD</em>, and <em>MD</em> equals{' '}
              <em>MK</em> + <em>KD</em>; so we can show <em>GD</em> is greater than <em>KD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>DA</em> is greatest, <em>DB</em> is least, and nearer lines are greater
              than farther ones on each side.
            </p>
          </>
        }
      >
        <p>
          If a point be taken outside a circle and from the point straight lines be drawn through
          to the circle, one of which is through the center and the others are drawn at random,
          then, of the straight lines which fall on the concave circumference, that through the
          center is greatest, while of the rest the nearer to that through the center is always
          greater than the more remote; but, of the straight lines falling on the convex
          circumference, that between the point and the diameter is least, while of the rest the
          nearer to the least is always less than the more remote.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the companion to III.7, dealing with lines from an <em>external</em> point to a
        circle (instead of an internal point on the diameter).
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 240" className="w-80 h-60">
          {/* Circle */}
          <circle cx="160" cy="120" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center M */}
          <circle cx="160" cy="120" r="3" fill="#f59e0b" />
          {/* External point D */}
          <circle cx="40" cy="120" r="4" fill="#ef4444" />
          {/* Points on circle */}
          <circle cx="90" cy="120" r="3" fill="#3b82f6" />
          <circle cx="230" cy="120" r="3" fill="#3b82f6" />
          <circle cx="105" cy="70" r="3" fill="#22c55e" />
          <circle cx="130" cy="55" r="3" fill="#22c55e" />
          <circle cx="105" cy="170" r="3" fill="#22c55e" />
          <circle cx="130" cy="185" r="3" fill="#22c55e" />
          {/* Lines from D */}
          <line x1="40" y1="120" x2="230" y2="120" stroke="#3b82f6" strokeWidth="2" />
          <line x1="40" y1="120" x2="105" y2="70" stroke="#6b7280" strokeWidth="1" />
          <line x1="40" y1="120" x2="130" y2="55" stroke="#6b7280" strokeWidth="1" />
          <line x1="40" y1="120" x2="105" y2="170" stroke="#6b7280" strokeWidth="1" />
          <line x1="40" y1="120" x2="130" y2="185" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="30" y="115" fill="#ef4444" fontSize="11">D</text>
          <text x="165" y="110" fill="#f59e0b" fontSize="11">M</text>
          <text x="80" y="115" fill="#3b82f6" fontSize="11">B</text>
          <text x="235" y="125" fill="#3b82f6" fontSize="11">A</text>
          <text x="95" y="65" fill="#22c55e" fontSize="11">E</text>
          <text x="135" y="50" fill="#22c55e" fontSize="11">F</text>
          <text x="95" y="180" fill="#22c55e" fontSize="11">G</text>
          <text x="135" y="195" fill="#22c55e" fontSize="11">K</text>
        </svg>
      </div>

      <h3>Two Types of Lines</h3>

      <p>Lines from external point <em>D</em> to the circle fall into two categories:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 mb-3">
          <strong className="text-amber-400">Lines to the "far" arc (through the center):</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><em>DA</em> (through center) is <strong>greatest</strong></li>
          <li>Lines closer to <em>DA</em> are longer</li>
        </ul>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 mb-3">
          <strong className="text-amber-400">Lines to the "near" arc:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><em>DB</em> (through center) is <strong>least</strong></li>
          <li>Lines closer to <em>DB</em> are shorter</li>
        </ul>
      </div>

      <h3 className="mt-6">Intuition</h3>

      <p>
        The line through the center to the far side of the circle is longest because it traverses
        the full diameter plus the distance from <em>D</em> to the near edge. The line to the near
        edge is shortest. Other lines fall in between based on the angle they make with the
        diameter.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.20 (triangle inequality)</li>
        <li>Proposition I.24 (hinge theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Application:</strong> This proposition is fundamental
          for understanding tangent lines. The <em>shortest</em> line from an external point to a
          circle that just touches it (tangent) will be between the shortest secant and a line
          perpendicular to the diameter.
        </p>
      </div>
    </LessonLayout>
  );
}
