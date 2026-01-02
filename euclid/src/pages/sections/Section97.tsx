import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section97() {
  return (
    <LessonLayout sectionId={97}>
      <Proposition
        title="Proposition III.33"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line, and the angle at <em>C</em> the given
              rectilinear angle; thus it is required to describe on the given straight line{' '}
              <em>AB</em> a segment of a circle admitting an angle equal to the angle at{' '}
              <em>C</em>.
            </p>
            <p className="mt-2">
              The angle at <em>C</em> is then either acute, or right, or obtuse.
            </p>
            <p className="mt-2">
              First let it be acute; on the straight line <em>AB</em> and at the point <em>A</em>{' '}
              let the angle <em>BAD</em> be constructed equal to the angle at <em>C</em>; [I. 23]
              therefore the angle <em>BAD</em> is also acute.
            </p>
            <p className="mt-2">
              Let <em>AE</em> be drawn at right angles to <em>DA</em>, let <em>AB</em> be
              bisected at <em>F</em>, let <em>FG</em> be drawn from the point <em>F</em> at
              right angles to <em>AB</em>, and let <em>GB</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AF</em> is equal to <em>FB</em>, and <em>FG</em> is common, the two
              sides <em>AF</em>, <em>FG</em> are equal to the two sides <em>BF</em>, <em>FG</em>;
              and the angle <em>AFG</em> is equal to the angle <em>BFG</em>; therefore the base{' '}
              <em>AG</em> is equal to the base <em>BG</em>. [I. 4]
            </p>
            <p className="mt-2">
              Therefore the circle described with center <em>G</em> and distance <em>GA</em> will
              pass through <em>B</em> also.
            </p>
            <p className="mt-2">
              Let it be drawn, and let it be <em>ABE</em>; let <em>EB</em> be joined.
            </p>
            <p className="mt-2">
              Now, since <em>AD</em> is drawn from <em>A</em>, the end of the diameter <em>AE</em>,
              at right angles to <em>AE</em>, the tangent <em>AD</em> touches the circle. [III. 16]
            </p>
            <p className="mt-2">
              Since then a straight line <em>AD</em> touches the circle <em>ABE</em>, and from
              the point of contact at <em>A</em> a straight line <em>AB</em> is drawn across in
              the circle, the angle <em>DAB</em> is equal to the angle <em>AEB</em> in the
              alternate segment. [III. 32]
            </p>
            <p className="mt-2 font-medium">
              But the angle <em>DAB</em> is equal to the angle at <em>C</em>; therefore the
              segment <em>AEB</em> admits an angle equal to the angle at <em>C</em>.
            </p>
          </>
        }
      >
        <p>
          On a given straight line to describe a segment of a circle admitting an angle equal to
          a given rectilinear angle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction creates a circular arc such that any inscribed angle on that arc
        equals a given angle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 250" className="w-76 h-64">
          {/* Circle */}
          <circle cx="150" cy="130" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Base line AB */}
          <line x1="80" y1="170" x2="220" y2="170" stroke="#3b82f6" strokeWidth="2" />
          {/* Segment arc */}
          <path d="M 80 170 A 80 80 0 0 1 220 170" fill="none" stroke="#22c55e" strokeWidth="3" />
          {/* Point E on arc */}
          <circle cx="150" cy="50" r="4" fill="#22c55e" />
          {/* Lines from E */}
          <line x1="150" y1="50" x2="80" y2="170" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="150" y1="50" x2="220" y2="170" stroke="#22c55e" strokeWidth="1.5" />
          {/* Inscribed angle */}
          <path d="M 130 70 A 25 25 0 0 1 170 70" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Given angle C */}
          <line x1="30" y1="220" x2="70" y2="220" stroke="#ef4444" strokeWidth="1.5" />
          <line x1="30" y1="220" x2="50" y2="195" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 45 220 A 15 15 0 0 1 40 210" fill="none" stroke="#ef4444" strokeWidth="1" />
          {/* Points */}
          <circle cx="80" cy="170" r="3" fill="#3b82f6" />
          <circle cx="220" cy="170" r="3" fill="#3b82f6" />
          {/* Labels */}
          <text x="70" y="180" fill="#3b82f6" fontSize="11">A</text>
          <text x="225" y="180" fill="#3b82f6" fontSize="11">B</text>
          <text x="155" y="45" fill="#22c55e" fontSize="11">E</text>
          <text x="150" y="85" fill="#22c55e" fontSize="10">∠C</text>
          <text x="30" y="240" fill="#ef4444" fontSize="10">given angle C</text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>At point <em>A</em>, construct angle <em>BAD</em> equal to the given angle <em>C</em></li>
        <li>Draw <em>AE</em> perpendicular to <em>AD</em></li>
        <li>Bisect <em>AB</em> at <em>F</em></li>
        <li>Draw perpendicular from <em>F</em> to <em>AB</em>, meeting <em>AE</em> at <em>G</em></li>
        <li>Draw circle with center <em>G</em> and radius <em>GA</em></li>
      </ol>

      <p className="mt-4">
        By III.32, the tangent-chord angle ∠<em>DAB</em> equals the inscribed angle in the
        alternate segment. Since ∠<em>DAB</em> = ∠<em>C</em>, the segment admits angle <em>C</em>.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.23 (copying an angle)</li>
        <li>Proposition III.16 (perpendicular to radius is tangent)</li>
        <li>Proposition III.32 (tangent-chord angle theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Three Cases:</strong> The construction differs
          slightly for acute, right, and obtuse angles. For a right angle, the segment is a
          semicircle (by III.31).
        </p>
      </div>
    </LessonLayout>
  );
}
