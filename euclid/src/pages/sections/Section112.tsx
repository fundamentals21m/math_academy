import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section112() {
  return (
    <LessonLayout sectionId={112}>
      <Proposition
        title="Proposition IV.10"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line; it is required to cut it so that the
              rectangle contained by the whole and one of the segments is equal to the square on the
              remaining segment.
            </p>
            <p className="mt-2">
              Let the square <em>ABDC</em> be described on <em>AB</em>; [I.46] let <em>AC</em> be
              bisected at the point <em>E</em>, and let <em>BE</em> be joined; let <em>CA</em> be
              produced to <em>F</em>, and let <em>EF</em> be made equal to <em>EB</em>; let the
              square <em>FH</em> be described on <em>AF</em>, and let <em>GH</em> be produced to{' '}
              <em>K</em>.
            </p>
            <p className="mt-2">
              I say that <em>AB</em> has been cut at <em>H</em> so that the rectangle <em>AB</em>,{' '}
              <em>BH</em> is equal to the square on <em>AH</em>.
            </p>
            <p className="mt-2">
              For, since the straight line <em>AC</em> has been bisected at <em>E</em>, and{' '}
              <em>FA</em> is added to it, the rectangle <em>CF</em>, <em>FA</em> together with the
              square on <em>AE</em> is equal to the square on <em>EF</em>. [II.6]
            </p>
            <p className="mt-2">
              But <em>EF</em> is equal to <em>EB</em>; therefore the rectangle <em>CF</em>,{' '}
              <em>FA</em> together with the square on <em>AE</em> is equal to the square on{' '}
              <em>EB</em>.
            </p>
            <p className="mt-2">
              But the squares on <em>BA</em>, <em>AE</em> are equal to the square on <em>EB</em>,
              for the angle at <em>A</em> is right; [I.47] therefore the rectangle <em>CF</em>,{' '}
              <em>FA</em> together with the square on <em>AE</em> is equal to the squares on{' '}
              <em>BA</em>, <em>AE</em>.
            </p>
            <p className="mt-2">
              Let the square on <em>AE</em> be subtracted from each; therefore the rectangle{' '}
              <em>CF</em>, <em>FA</em> which remains is equal to the square on <em>AB</em>.
            </p>
            <p className="mt-2">
              Now the rectangle <em>CF</em>, <em>FA</em> is <em>FK</em>, for <em>AF</em> is equal to{' '}
              <em>FG</em>; and the square on <em>AB</em> is <em>AD</em>; therefore <em>FK</em> is
              equal to <em>AD</em>.
            </p>
            <p className="mt-2">
              Let <em>AK</em> be subtracted from each; therefore <em>FH</em> which remains is equal
              to <em>HD</em>.
            </p>
            <p className="mt-2">
              And <em>HD</em> is the rectangle <em>AB</em>, <em>BH</em>, for <em>AB</em> is equal to{' '}
              <em>BD</em>; and <em>FH</em> is the square on <em>AH</em>; therefore the rectangle
              contained by <em>AB</em>, <em>BH</em> is equal to the square on <em>HA</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the given straight line <em>AB</em> has been cut at <em>H</em> so as to make
              the rectangle contained by <em>AB</em>, <em>BH</em> equal to the square on <em>AH</em>
              .
            </p>
          </>
        }
      >
        <p>
          To construct an isosceles triangle having each of the angles at the base double the
          remaining one.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition constructs the <strong>golden ratio</strong>, one of the most important
        ratios in mathematics. The line <em>AB</em> is divided at point <em>H</em> so that:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">AB : AH = AH : HB</p>
        <p className="text-dark-300 mt-2">
          (The whole is to the larger part as the larger part is to the smaller)
        </p>
      </div>

      <p className="mt-4">
        This ratio is called <strong>φ (phi)</strong>, approximately 1.618. The resulting isosceles
        triangle has angles of 36°, 72°, and 72°.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 200" className="w-full max-w-md h-52">
          {/* The golden isosceles triangle */}
          <polygon
            points="160,20 80,180 240,180"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Base angles markers */}
          <path d="M 100 165 A 25 25 0 0 1 110 180" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 220 165 A 25 25 0 0 0 210 180" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Apex angle marker */}
          <path d="M 145 45 A 25 25 0 0 1 175 45" fill="none" stroke="#9333ea" strokeWidth="1.5" />
          {/* Labels */}
          <text x="160" y="15" fill="#f59e0b" fontSize="11" textAnchor="middle">
            A
          </text>
          <text x="70" y="190" fill="#f59e0b" fontSize="11">
            B
          </text>
          <text x="245" y="190" fill="#f59e0b" fontSize="11">
            C
          </text>
          <text x="155" y="60" fill="#9333ea" fontSize="10">
            36°
          </text>
          <text x="95" y="165" fill="#22c55e" fontSize="10">
            72°
          </text>
          <text x="210" y="165" fill="#22c55e" fontSize="10">
            72°
          </text>
          {/* Side length annotations */}
          <text x="105" y="100" fill="#3b82f6" fontSize="10">
            φ
          </text>
          <text x="205" y="100" fill="#3b82f6" fontSize="10">
            φ
          </text>
          <text x="160" y="195" fill="#3b82f6" fontSize="10" textAnchor="middle">
            1
          </text>
        </svg>
      </div>

      <h3>The Golden Section</h3>

      <p className="mt-2">
        The "extreme and mean ratio" (as Euclid calls it) divides a line so that:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          If <em>AB</em> = 1, then <em>AH</em> = φ - 1 ≈ 0.618
        </li>
        <li>
          Equivalently, <em>AB</em> × <em>HB</em> = <em>AH</em>²
        </li>
        <li>
          This appears in pentagons, decagons, and the Fibonacci sequence
        </li>
      </ul>

      <h3 className="mt-6">The Golden Triangle</h3>

      <p className="mt-2">
        This isosceles triangle with base angles of 72° and apex angle of 36° is called the{' '}
        <strong>golden gnomon</strong>. Its ratio of leg to base equals φ.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Self-Similarity</h4>
        <p className="text-dark-200">
          If you bisect one of the base angles of the golden triangle, you create a smaller golden
          triangle inside it. This process can continue infinitely, creating a logarithmic spiral.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.46 (constructing a square)</li>
        <li>Proposition I.47 (Pythagorean theorem)</li>
        <li>Proposition II.6 (rectangle with bisected line)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Foundation for Pentagons:</strong> This proposition is
          essential for the pentagon constructions that follow (IV.11-14). The 36° angle is one-tenth
          of a full rotation, which is why the golden ratio appears in regular pentagons and
          ten-sided figures.
        </p>
      </div>
    </LessonLayout>
  );
}
