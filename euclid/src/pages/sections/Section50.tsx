import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section50() {
  return (
    <LessonLayout sectionId={50}>
      <Proposition
        title="Proposition II.1"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>BC</em> be two straight lines, and let <em>BC</em> be cut at
              random at the points <em>D</em>, <em>E</em>.
            </p>
            <p className="mt-2">
              I say that the rectangle contained by <em>A</em>, <em>BC</em> is equal to the
              rectangle contained by <em>A</em>, <em>BD</em>, by <em>A</em>, <em>DE</em>, and by{' '}
              <em>A</em>, <em>EC</em>.
            </p>
            <p className="mt-2">
              For let <em>BF</em> be drawn from <em>B</em> at right angles to <em>BC</em>; [I. 11]
              let <em>BG</em> be made equal to <em>A</em>, [I. 3] through <em>G</em> let <em>GH</em>{' '}
              be drawn parallel to <em>BC</em>, [I. 31] and through <em>D</em>, <em>E</em>,{' '}
              <em>C</em> let <em>DK</em>, <em>EL</em>, <em>CH</em> be drawn parallel to <em>BG</em>.
            </p>
            <p className="mt-2">
              Then <em>BH</em> is equal to <em>BK</em>, <em>DL</em>, <em>EH</em>.
            </p>
            <p className="mt-2">
              Now <em>BH</em> is the rectangle <em>A</em>, <em>BC</em>, for it is contained by{' '}
              <em>GB</em>, <em>BC</em>, and <em>BG</em> is equal to <em>A</em>;
            </p>
            <p className="mt-2">
              <em>BK</em> is the rectangle <em>A</em>, <em>BD</em>, for it is contained by{' '}
              <em>GB</em>, <em>BD</em>, and <em>BG</em> is equal to <em>A</em>;
            </p>
            <p className="mt-2">
              and <em>DL</em> is the rectangle <em>A</em>, <em>DE</em>, for <em>DK</em>, that is{' '}
              <em>BG</em>, [I. 34] is equal to <em>A</em>.
            </p>
            <p className="mt-2">
              Similarly also <em>EH</em> is the rectangle <em>A</em>, <em>EC</em>.
            </p>
            <p className="mt-2">
              Therefore the rectangle <em>A</em>, <em>BC</em> is equal to the rectangle <em>A</em>,{' '}
              <em>BD</em>, the rectangle <em>A</em>, <em>DE</em>, and the rectangle <em>A</em>,{' '}
              <em>EC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If there be two straight lines, and one of them be cut into any number of segments
          whatever, the rectangle contained by the two straight lines is equal to the rectangles
          contained by the uncut straight line and each of the segments.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition proves the <strong>distributive law</strong> geometrically. In modern
        notation, if one line has length <em>a</em> and another line <em>b + c + d</em>, then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          a(b + c + d) = ab + ac + ad
        </p>
      </div>

      <p className="mt-4">
        The proof constructs a rectangle with one side equal to <em>a</em> and the other equal to
        the whole line <em>b + c + d</em>. This rectangle is then divided into smaller rectangles
        by drawing parallels at each cut point.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 150" className="w-full max-w-md">
          {/* Main rectangle */}
          <rect x="20" y="20" width="260" height="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Vertical dividers */}
          <line x1="100" y1="20" x2="100" y2="100" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          <line x1="180" y1="20" x2="180" y2="100" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          {/* Labels */}
          <text x="10" y="65" fill="#f59e0b" fontSize="14" textAnchor="end">a</text>
          <text x="60" y="115" fill="#f59e0b" fontSize="12" textAnchor="middle">b</text>
          <text x="140" y="115" fill="#f59e0b" fontSize="12" textAnchor="middle">c</text>
          <text x="220" y="115" fill="#f59e0b" fontSize="12" textAnchor="middle">d</text>
          {/* Area labels */}
          <text x="60" y="55" fill="#d1d5db" fontSize="11" textAnchor="middle">ab</text>
          <text x="140" y="55" fill="#d1d5db" fontSize="11" textAnchor="middle">ac</text>
          <text x="220" y="55" fill="#d1d5db" fontSize="11" textAnchor="middle">ad</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting off equal lengths)</li>
        <li>Proposition I.11 (perpendicular at a point)</li>
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.34 (properties of parallelograms)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Algebraic Significance:</strong> This is the geometric
          version of the distributive property of multiplication over addition, one of the
          fundamental laws of arithmetic. Euclid proves it purely from geometric principles.
        </p>
      </div>
    </LessonLayout>
  );
}
