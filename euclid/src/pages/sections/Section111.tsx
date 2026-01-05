import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section111() {
  return (
    <LessonLayout sectionId={111}>
      <Proposition
        title="Proposition IV.9"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be the given square; it is required to circumscribe a circle about
              the given square.
            </p>
            <p className="mt-2">
              For let <em>AC</em>, <em>BD</em> be joined, and let them cut one another at{' '}
              <em>E</em>.
            </p>
            <p className="mt-2">
              Then, since <em>DA</em> is equal to <em>AB</em>, and <em>AC</em> is common, the two
              sides <em>DA</em>, <em>AC</em> are equal to the two sides <em>BA</em>, <em>AC</em>;
              and the base <em>DC</em> is equal to the base <em>BC</em>; therefore the angle{' '}
              <em>DAC</em> is equal to the angle <em>BAC</em>. [I.8]
            </p>
            <p className="mt-2">
              Therefore the angle <em>DAB</em> is bisected by <em>AC</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that each of the angles <em>ABC</em>, <em>BCD</em>,{' '}
              <em>CDA</em> is bisected by the straight lines <em>AC</em>, <em>DB</em>.
            </p>
            <p className="mt-2">
              Now, since the angle <em>DAB</em> is equal to the angle <em>ABC</em>, and the angle{' '}
              <em>EAB</em> is half the angle <em>DAB</em>, and the angle <em>EBA</em> is half the
              angle <em>ABC</em>, therefore the angle <em>EAB</em> is also equal to the angle{' '}
              <em>EBA</em>; so that the side <em>EA</em> is also equal to <em>EB</em>. [I.6]
            </p>
            <p className="mt-2">
              Similarly we can prove that each of the straight lines <em>EA</em>, <em>EB</em> is
              also equal to each of the straight lines <em>EC</em>, <em>ED</em>.
            </p>
            <p className="mt-2">
              Therefore the four straight lines <em>EA</em>, <em>EB</em>, <em>EC</em>, <em>ED</em>{' '}
              are equal to one another.
            </p>
            <p className="mt-2 font-medium">
              Therefore the circle described with center <em>E</em> and radius one of the straight
              lines <em>EA</em>, <em>EB</em>, <em>EC</em>, <em>ED</em> will pass also through the
              remaining points; and it will have been circumscribed about the square <em>ABCD</em>.
            </p>
          </>
        }
      >
        <p>About a given square to circumscribe a circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction finds the <strong>circumscribed circle</strong> (or{' '}
        <strong>circumcircle</strong>) of a square—the circle passing through all four vertices.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circumscribed circle */}
          <circle cx="140" cy="140" r="100" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Square */}
          <polygon
            points="69,69 211,69 211,211 69,211"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Diagonals */}
          <line x1="69" y1="69" x2="211" y2="211" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="211" y1="69" x2="69" y2="211" stroke="#22c55e" strokeWidth="1.5" />
          {/* Center E */}
          <circle cx="140" cy="140" r="4" fill="#ef4444" />
          {/* Vertices */}
          <circle cx="69" cy="69" r="3" fill="#3b82f6" />
          <circle cx="211" cy="69" r="3" fill="#3b82f6" />
          <circle cx="211" cy="211" r="3" fill="#3b82f6" />
          <circle cx="69" cy="211" r="3" fill="#3b82f6" />
          {/* Radius */}
          <line
            x1="140"
            y1="140"
            x2="69"
            y2="69"
            stroke="#9333ea"
            strokeWidth="1.5"
            strokeDasharray="3"
          />
          {/* Labels */}
          <text x="55" y="65" fill="#3b82f6" fontSize="11">
            A
          </text>
          <text x="215" y="65" fill="#3b82f6" fontSize="11">
            B
          </text>
          <text x="215" y="220" fill="#3b82f6" fontSize="11">
            C
          </text>
          <text x="55" y="220" fill="#3b82f6" fontSize="11">
            D
          </text>
          <text x="145" y="155" fill="#ef4444" fontSize="11">
            E
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Draw the diagonals <em>AC</em> and <em>BD</em>
        </li>
        <li>
          Let <em>E</em> be the point where the diagonals intersect
        </li>
        <li>
          Draw a circle with center <em>E</em> and radius <em>EA</em> (or <em>EB</em>, <em>EC</em>,{' '}
          <em>ED</em>—they're all equal)
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">
        The diagonals of a square bisect each other and bisect the corner angles (by SSS
        congruence, I.8):
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Diagonal <em>AC</em> divides angle <em>DAB</em> into two equal parts
        </li>
        <li>Since all corner angles are equal (90°), their halves are also equal (45°)</li>
        <li>
          In triangle <em>EAB</em>, angles <em>EAB</em> and <em>EBA</em> are equal
        </li>
        <li>
          By I.6, <em>EA</em> = <em>EB</em> (sides opposite equal angles)
        </li>
        <li>
          Similarly, all four distances <em>EA</em>, <em>EB</em>, <em>EC</em>, <em>ED</em> are equal
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Radius</h4>
        <p className="text-dark-200">
          If the square has side length <em>s</em>, the circumscribed circle has radius{' '}
          <em>s√2/2</em> (half the diagonal).
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.6 (isosceles triangle theorem, converse)</li>
        <li>Proposition I.8 (SSS congruence)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">IV.8 vs IV.9:</strong> The inscribed circle (IV.8)
          touches the sides; the circumscribed circle (IV.9) passes through the vertices. Both are
          centered at the same point—the center of the square.
        </p>
      </div>
    </LessonLayout>
  );
}
