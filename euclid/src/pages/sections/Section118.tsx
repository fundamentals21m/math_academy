import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section118() {
  return (
    <LessonLayout sectionId={118}>
      <Proposition
        title="Proposition IV.16"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be the given circle; it is required to inscribe in the circle{' '}
              <em>ABCD</em> a fifteen-angled figure which shall be both equilateral and equiangular.
            </p>
            <p className="mt-2">
              In the circle <em>ABCD</em> let there be inscribed a side <em>AC</em> of the
              equilateral triangle inscribed in it, and a side <em>AB</em> of an equilateral
              pentagon; [IV.2, IV.11] therefore, of the equal segments of which there are fifteen in
              the circle <em>ABCD</em>, the arc <em>ABC</em> being a third of the circle will
              contain five, and the arc <em>AB</em> being a fifth of the circle will contain three.
            </p>
            <p className="mt-2">
              Therefore the remainder, the arc <em>BC</em>, will contain two of the equal segments.
            </p>
            <p className="mt-2">
              Let the arc <em>BC</em> be bisected at <em>E</em>; [III.30] therefore each of the arcs{' '}
              <em>BE</em>, <em>EC</em> is a fifteenth of the circle <em>ABCD</em>.
            </p>
            <p className="mt-2">
              If therefore we join <em>BE</em>, <em>EC</em> and fit into the circle <em>ABCD</em>{' '}
              straight lines equal to them in succession, [IV.1] a fifteen-angled figure which is
              both equilateral and equiangular will have been inscribed in it.
            </p>
            <p className="mt-2 font-medium">
              Therefore in a given circle a fifteen-angled figure has been inscribed which is both
              equilateral and equiangular.
            </p>
          </>
        }
      >
        <p>In a given circle to inscribe a fifteen-angled figure which shall be both equilateral and equiangular.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This ingenious construction combines the triangle (3 sides) and pentagon (5 sides) to
        produce a 15-gon. The key insight is that 1/3 - 1/5 = 2/15, allowing us to find 1/15 of the
        circle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 300" className="w-80 h-80">
          {/* Circle */}
          <circle cx="150" cy="150" r="100" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Regular 15-gon */}
          {(() => {
            const points = [];
            for (let i = 0; i < 15; i++) {
              const angle = (i * 24 - 90) * (Math.PI / 180);
              const x = 150 + 100 * Math.cos(angle);
              const y = 150 + 100 * Math.sin(angle);
              points.push(`${x},${y}`);
            }
            return (
              <polygon
                points={points.join(' ')}
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
              />
            );
          })()}
          {/* Highlight triangle arc (5 segments = 1/3) */}
          <path
            d="M 150 50 A 100 100 0 0 1 236.6 200"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
          {/* Highlight pentagon arc (3 segments = 1/5) */}
          <path
            d="M 150 50 A 100 100 0 0 1 245.1 119.1"
            fill="none"
            stroke="#9333ea"
            strokeWidth="3"
          />
          {/* Points A, B, C */}
          <circle cx="150" cy="50" r="5" fill="#ef4444" />
          <circle cx="245.1" cy="119.1" r="5" fill="#ef4444" />
          <circle cx="236.6" cy="200" r="5" fill="#ef4444" />
          {/* Point E (bisection of BC) */}
          <circle cx="250" cy="158" r="4" fill="#22c55e" />
          {/* Labels */}
          <text x="150" y="35" fill="#ef4444" fontSize="12" textAnchor="middle">
            A
          </text>
          <text x="260" y="118" fill="#ef4444" fontSize="12">
            B
          </text>
          <text x="252" y="210" fill="#ef4444" fontSize="12">
            C
          </text>
          <text x="262" y="162" fill="#22c55e" fontSize="11">
            E
          </text>
          {/* Arc labels */}
          <text x="210" y="75" fill="#9333ea" fontSize="10">
            1/5
          </text>
          <text x="255" y="170" fill="#3b82f6" fontSize="10">
            2/15
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Inscribe an equilateral triangle; take one vertex as <em>A</em> and another as <em>C</em>{' '}
          [IV.2]
        </li>
        <li>
          Inscribe a regular pentagon with one vertex at <em>A</em>; call the adjacent vertex{' '}
          <em>B</em> [IV.11]
        </li>
        <li>
          Arc <em>AC</em> = 1/3 of circle = 5/15 of circle
        </li>
        <li>
          Arc <em>AB</em> = 1/5 of circle = 3/15 of circle
        </li>
        <li>
          Therefore arc <em>BC</em> = 5/15 - 3/15 = 2/15 of circle
        </li>
        <li>
          Bisect arc <em>BC</em> at <em>E</em> [III.30]
        </li>
        <li>
          Arc <em>BE</em> = arc <em>EC</em> = 1/15 of circle
        </li>
        <li>
          Mark off 15 equal arcs around the circle using this length [IV.1]
        </li>
        <li>Connect consecutive points to form the 15-gon</li>
      </ol>

      <h3 className="mt-6">The Arithmetic</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-mono text-center text-lg mb-2">
          1/3 - 1/5 = 5/15 - 3/15 = 2/15
        </p>
        <p className="text-dark-300 text-center">Bisecting 2/15 gives 1/15</p>
      </div>

      <p className="mt-4">
        This is the earliest recorded use of combining polygon constructions arithmetically. The
        method works because 3 and 5 are coprime (share no common factors except 1).
      </p>

      <h3 className="mt-6">Why It Matters</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          The 15-gon was important for ancient astronomy—dividing the zodiac into 24 parts (each
          sign is 30°, and 360°/15 = 24°)
        </li>
        <li>It demonstrates how to combine constructible polygons to create new ones</li>
        <li>
          The technique generalizes: if you can construct an <em>m</em>-gon and an <em>n</em>-gon
          with gcd(<em>m</em>,<em>n</em>) = 1, you can construct an <em>mn</em>-gon
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.30 (bisecting an arc)</li>
        <li>Proposition IV.1 (fitting a chord)</li>
        <li>Proposition IV.2 (inscribing an equilateral triangle)</li>
        <li>Proposition IV.11 (inscribing a regular pentagon)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Gauss's Discovery (1796):</strong> Over 2000 years
          later, Carl Friedrich Gauss discovered which regular polygons can be constructed with
          compass and straightedge. The 17-gon, 257-gon, and 65537-gon are constructible, but the
          7-gon, 9-gon, 11-gon, and 13-gon are not. The 15-gon marks the end of Euclid's exploration
          of this deep question.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">End of Book IV</h4>
        <p className="text-dark-200">
          With the 15-gon, Euclid completes Book IV's study of inscribed and circumscribed figures.
          The book demonstrates both the power of geometric construction and its limits—certain
          polygons (like the regular heptagon) remain forever beyond compass and straightedge.
        </p>
      </div>
    </LessonLayout>
  );
}
