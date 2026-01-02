import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <Proposition
        title="Proposition III.2"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a circle, and let the two points <em>A</em>, <em>B</em> be taken
              at random on its circumference.
            </p>
            <p className="mt-2">
              I say that the straight line joining <em>A</em> to <em>B</em> will fall within the
              circle.
            </p>
            <p className="mt-2">
              For suppose it does not, but, if possible, let it fall outside, as <em>AEB</em>; let
              the center of the circle <em>ABC</em> be taken [III. 1], and let it be <em>D</em>; let{' '}
              <em>DA</em>, <em>DB</em> be joined, and let <em>DFE</em> be drawn through.
            </p>
            <p className="mt-2">
              Then, since <em>DA</em> is equal to <em>DB</em>, the angle <em>DAE</em> is also equal
              to the angle <em>DBE</em>. [I. 5]
            </p>
            <p className="mt-2">
              And, since one side <em>AEB</em> of the triangle <em>DAE</em> is produced, the angle{' '}
              <em>DEB</em> is greater than the angle <em>DAE</em>. [I. 16]
            </p>
            <p className="mt-2">
              But the angle <em>DAE</em> is equal to the angle <em>DBE</em>; therefore the angle{' '}
              <em>DEB</em> is greater than the angle <em>DBE</em>.
            </p>
            <p className="mt-2">
              And the greater angle is subtended by the greater side; [I. 19] therefore <em>DB</em>{' '}
              is greater than <em>DE</em>. But <em>DB</em> is equal to <em>DF</em>; therefore{' '}
              <em>DF</em> is greater than <em>DE</em>, the less than the greater: which is
              impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore the straight line joined from <em>A</em> to <em>B</em> will not fall
              outside the circle. Similarly we can prove that neither will it fall on the
              circumference itself; therefore it will fall within.
            </p>
          </>
        }
      >
        <p>
          If on the circumference of a circle two points be taken at random, the straight line
          joining the points will fall within the circle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes that a chord (a line segment connecting two points on a circle)
        lies entirely inside the circle. This is fundamental to the concept of circles as{' '}
        <strong>convex</strong> figures.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 200" className="w-64 h-52">
          {/* Circle */}
          <circle cx="125" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center */}
          <circle cx="125" cy="100" r="3" fill="#f59e0b" />
          {/* Points A and B */}
          <circle cx="70" cy="65" r="4" fill="#3b82f6" />
          <circle cx="180" cy="65" r="4" fill="#3b82f6" />
          {/* Chord AB (inside circle) */}
          <line x1="70" y1="65" x2="180" y2="65" stroke="#22c55e" strokeWidth="2" />
          {/* Radii */}
          <line x1="125" y1="100" x2="70" y2="65" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <line x1="125" y1="100" x2="180" y2="65" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Labels */}
          <text x="60" y="60" fill="#3b82f6" fontSize="12">A</text>
          <text x="185" y="60" fill="#3b82f6" fontSize="12">B</text>
          <text x="130" y="115" fill="#f59e0b" fontSize="12">D</text>
          <text x="125" y="55" fill="#22c55e" fontSize="10" textAnchor="middle">chord</text>
        </svg>
      </div>

      <h3>Why Can't the Chord Go Outside?</h3>

      <p>
        The proof uses contradiction. If the line from <em>A</em> to <em>B</em> went outside the
        circle at some point <em>E</em>, consider the triangle <em>DAE</em> where <em>D</em> is the
        center.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 220" className="w-72 h-56">
          {/* Circle */}
          <circle cx="140" cy="110" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center D */}
          <circle cx="140" cy="110" r="3" fill="#f59e0b" />
          {/* Points A and B */}
          <circle cx="85" cy="70" r="4" fill="#3b82f6" />
          <circle cx="195" cy="70" r="4" fill="#3b82f6" />
          {/* Hypothetical external point E */}
          <circle cx="140" cy="25" r="4" fill="#ef4444" />
          {/* Hypothetical external path AEB */}
          <path d="M 85 70 Q 140 10 195 70" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" />
          {/* Radii DA and DB */}
          <line x1="140" y1="110" x2="85" y2="70" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="140" y1="110" x2="195" y2="70" stroke="#6b7280" strokeWidth="1.5" />
          {/* DE */}
          <line x1="140" y1="110" x2="140" y2="25" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
          {/* DF (to circumference) */}
          <line x1="140" y1="110" x2="140" y2="40" stroke="#22c55e" strokeWidth="1.5" />
          <circle cx="140" cy="40" r="3" fill="#22c55e" />
          {/* Labels */}
          <text x="75" y="65" fill="#3b82f6" fontSize="12">A</text>
          <text x="200" y="65" fill="#3b82f6" fontSize="12">B</text>
          <text x="145" y="125" fill="#f59e0b" fontSize="12">D</text>
          <text x="145" y="20" fill="#ef4444" fontSize="12">E</text>
          <text x="145" y="50" fill="#22c55e" fontSize="12">F</text>
        </svg>
      </div>

      <p className="mt-4">
        If <em>E</em> is outside the circle, then <em>DE</em> &gt; <em>DF</em> (radius). But the
        exterior angle theorem and isosceles triangle properties lead to <em>DB</em> &gt;{' '}
        <em>DE</em>, meaning <em>DF</em> = <em>DB</em> &gt; <em>DE</em>. Contradiction!
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.1 (finding the center)</li>
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.16 (exterior angle theorem)</li>
        <li>Proposition I.19 (greater angle subtended by greater side)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Convexity:</strong> This proposition shows that a
          circle is a <strong>convex</strong> figure: for any two points on or inside the circle,
          the line segment joining them lies entirely within or on the circle.
        </p>
      </div>
    </LessonLayout>
  );
}
