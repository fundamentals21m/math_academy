import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section146() {
  return (
    <LessonLayout sectionId={146}>
      <Proposition
        title="Proposition VI.1"
        proof={
          <>
            <p>
              Let <em>ABC</em> and <em>ACD</em> be triangles, and let <em>EC</em> and <em>CF</em> be
              parallelograms, under the same height, the perpendicular drawn from <em>A</em> to{' '}
              <em>BD</em>.
            </p>
            <p className="mt-2">
              I say that, as the base <em>BC</em> is to the base <em>CD</em>, so is the triangle{' '}
              <em>ABC</em> to the triangle <em>ACD</em>, and the parallelogram <em>EC</em> to the
              parallelogram <em>CF</em>.
            </p>
            <p className="mt-2">
              For let <em>BD</em> be produced in both directions to the points <em>H</em>,{' '}
              <em>L</em>; let [any number of straight lines] <em>BG</em>, <em>GH</em> be made equal
              to the base <em>BC</em>, and any number of straight lines <em>DK</em>, <em>KL</em>{' '}
              equal to the base <em>CD</em>; let <em>AG</em>, <em>AH</em>, <em>AK</em>, <em>AL</em>{' '}
              be joined.
            </p>
            <p className="mt-2">
              Then, since <em>CB</em>, <em>BG</em>, <em>GH</em> are equal to one another, the
              triangles <em>ABC</em>, <em>AGB</em>, <em>AHG</em> are also equal to one another.
              [I.38]
            </p>
            <p className="mt-2">
              Therefore, whatever multiple the base <em>HC</em> is of the base <em>BC</em>, that
              multiple also is the triangle <em>AHC</em> of the triangle <em>ABC</em>.
            </p>
            <p className="mt-2">
              For the same reason, whatever multiple the base <em>LC</em> is of the base <em>CD</em>,
              that multiple also is the triangle <em>ALC</em> of the triangle <em>ACD</em>.
            </p>
            <p className="mt-2">
              And if the base <em>HC</em> is equal to the base <em>CL</em>, the triangle{' '}
              <em>AHC</em> is also equal to the triangle <em>ACL</em>; if the base <em>HC</em> is in
              excess, the triangle <em>AHC</em> is also in excess; and, if less, less.
            </p>
            <p className="mt-2">
              Thus, there being four magnitudes, two bases <em>BC</em>, <em>CD</em> and two triangles{' '}
              <em>ABC</em>, <em>ACD</em>, equimultiples have been taken of the base <em>BC</em> and
              the triangle <em>ABC</em>, namely the base <em>HC</em> and the triangle <em>AHC</em>;
              and of the base <em>CD</em> and the triangle <em>ACD</em> other, arbitrary,
              equimultiples, namely the base <em>LC</em> and the triangle <em>ALC</em>.
            </p>
            <p className="mt-2">
              And it has been proved that, if the base <em>HC</em> is in excess of the base{' '}
              <em>CL</em>, the triangle <em>AHC</em> is also in excess of the triangle <em>ALC</em>;
              if equal, equal; and, if less, less.
            </p>
            <p className="mt-2">
              Therefore, as the base <em>BC</em> is to the base <em>CD</em>, so is the triangle{' '}
              <em>ABC</em> to the triangle <em>ACD</em>. [V. Def. 5]
            </p>
            <p className="mt-2 font-medium">
              The proof for parallelograms follows similarly, since a parallelogram is double the
              corresponding triangle with the same base and height [I.41].
            </p>
          </>
        }
      >
        <p>
          Triangles and parallelograms which are under the same height are to one another as their
          bases.
        </p>
      </Proposition>

      <h2>The Fundamental Area Proportion</h2>

      <p>
        This proposition establishes the foundational relationship between bases and areas when
        figures share the same height. It is the gateway to the theory of similar figures.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 220" className="w-full max-w-lg">
          {/* Baseline */}
          <line x1="40" y1="180" x2="360" y2="180" stroke="#6b7280" strokeWidth="1" />

          {/* First triangle ABC */}
          <polygon
            points="60,180 160,180 110,60"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Second triangle ACD */}
          <polygon
            points="160,180 300,180 110,60"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Height line */}
          <line
            x1="110"
            y1="60"
            x2="110"
            y2="180"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="4,4"
          />

          {/* Vertex labels */}
          <text x="110" y="50" textAnchor="middle" fill="#f59e0b" fontSize="12">
            A
          </text>
          <text x="55" y="195" textAnchor="middle" fill="#f59e0b" fontSize="12">
            B
          </text>
          <text x="160" y="195" textAnchor="middle" fill="#9ca3af" fontSize="12">
            C
          </text>
          <text x="305" y="195" textAnchor="middle" fill="#3b82f6" fontSize="12">
            D
          </text>

          {/* Base labels */}
          <text x="110" y="210" textAnchor="middle" fill="#f59e0b" fontSize="11">
            BC
          </text>
          <text x="230" y="210" textAnchor="middle" fill="#3b82f6" fontSize="11">
            CD
          </text>

          {/* Height label */}
          <text x="95" y="120" textAnchor="end" fill="#22c55e" fontSize="11">
            h
          </text>
        </svg>
      </div>

      <h3>Key Insight</h3>

      <p>
        When two triangles (or parallelograms) share the same height, their areas are proportional
        to their bases:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          Area(ABC) : Area(ACD) = BC : CD
        </p>
      </div>

      <p className="mt-4">In modern terms, if h is the common height:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono mb-2">Area(ABC) = (1/2) * BC * h</p>
        <p className="text-amber-400 font-mono mb-2">Area(ACD) = (1/2) * CD * h</p>
        <p className="text-amber-400 font-mono">Ratio = BC / CD</p>
      </div>

      <h3 className="mt-6">Proof Strategy</h3>

      <p>
        Euclid's proof uses the definition of proportion from Book V (Definition 5). He shows that
        equimultiples of the bases correspond to equimultiples of the areas, establishing the
        proportion rigorously without relying on numerical measures.
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Take any multiples m and n of the bases</li>
        <li>The corresponding multiples of the triangles have the same order relationship</li>
        <li>By V. Def. 5, this establishes the proportion</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Foundation for Similarity:</strong> This proposition
          is essential for the theory of similar figures. It allows us to compare areas by comparing
          one-dimensional measurements, connecting the proportion theory of Book V to geometric
          magnitudes.
        </p>
      </div>
    </LessonLayout>
  );
}
