import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section169() {
  return (
    <LessonLayout sectionId={169}>
      <Proposition
        title="Proposition VI.24"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a parallelogram, and <em>AC</em> its diameter, and about{' '}
              <em>AC</em> let <em>EG</em>, <em>HK</em> be parallelograms.
            </p>
            <p className="mt-2">
              I say that each of the parallelograms <em>EG</em>, <em>HK</em> is similar both to
              the whole <em>ABCD</em> and to the other.
            </p>
            <p className="mt-2">
              For, since <em>EF</em> has been drawn parallel to <em>BC</em>, one of the sides of
              the triangle <em>ABC</em>, proportionally, as <em>BE</em> is to <em>EA</em>, so is{' '}
              <em>CF</em> to <em>FA</em>. [VI.2]
            </p>
            <p className="mt-2">
              Again, since <em>FG</em> has been drawn parallel to <em>CD</em>, one of the sides of
              the triangle <em>ACD</em>, proportionally, as <em>CF</em> is to <em>FA</em>, so is{' '}
              <em>DG</em> to <em>GA</em>. [VI.2]
            </p>
            <p className="mt-2">
              But it was proved that, as <em>CF</em> is to <em>FA</em>, so also is <em>BE</em> to{' '}
              <em>EA</em>; therefore also, as <em>BE</em> is to <em>EA</em>, so is <em>DG</em> to{' '}
              <em>GA</em>, and therefore, componendo, as <em>BA</em> is to <em>AE</em>, so is{' '}
              <em>DA</em> to <em>AG</em> [V.18], and, alternately, as <em>BA</em> is to <em>AD</em>,
              so is <em>EA</em> to <em>AG</em>. [V.16]
            </p>
            <p className="mt-2">
              Therefore in the parallelograms <em>ABCD</em>, <em>EG</em> the sides about the common
              angle <em>BAD</em> are proportional.
            </p>
            <p className="mt-2">
              And, since <em>GF</em> is parallel to <em>DC</em>, the angle <em>AFG</em> is equal
              to the angle <em>DCA</em>; [I.29] and the angle <em>DAC</em> is common to the two
              triangles <em>ADC</em>, <em>AGF</em>; therefore the triangle <em>ADC</em> is
              equiangular with the triangle <em>AGF</em>.
            </p>
            <p className="mt-2">
              For the same reason the triangle <em>ACB</em> is also equiangular with the triangle{' '}
              <em>AFE</em>, and the whole parallelogram <em>ABCD</em> is equiangular with the
              parallelogram <em>EG</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the parallelogram <em>ABCD</em> is similar to the parallelogram <em>EG</em>.
              [VI. Def. 1]
            </p>
            <p className="mt-2 font-medium">
              For the same reason the parallelogram <em>ABCD</em> is also similar to the
              parallelogram <em>KH</em>; therefore each of the parallelograms <em>EG</em>,{' '}
              <em>HK</em> is similar to <em>ABCD</em>.
            </p>
            <p className="mt-2">
              But figures similar to the same rectilinear figure are also similar to one another;
              [VI.21] therefore the parallelogram <em>EG</em> is also similar to the parallelogram{' '}
              <em>HK</em>.
            </p>
          </>
        }
      >
        <p>
          In any parallelogram the parallelograms about the diameter are similar both to the whole
          and to one another.
        </p>
      </Proposition>

      <h2>Similar Parallelograms About the Diagonal</h2>

      <p>
        When we draw lines parallel to the sides of a parallelogram through points on its diagonal,
        we create smaller parallelograms that are all similar to the original and to each other.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 240" className="w-full max-w-md">
          {/* Main parallelogram ABCD */}
          <polygon
            points="50,200 300,200 250,40 50,40"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Diagonal AC */}
          <line x1="50" y1="200" x2="250" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5" />

          {/* Point F on diagonal */}
          <circle cx="120" cy="145" r="3" fill="#ef4444" />

          {/* Lines through F parallel to sides */}
          <line x1="50" y1="145" x2="170" y2="145" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="120" y1="200" x2="120" y2="68" stroke="#3b82f6" strokeWidth="1.5" />

          {/* Parallelogram EG (about the diagonal, lower) */}
          <polygon
            points="50,200 120,200 120,145 50,145"
            fill="rgba(59, 130, 246, 0.15)"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Point H on diagonal (upper) */}
          <circle cx="180" cy="92" r="3" fill="#ef4444" />

          {/* Lines through H parallel to sides */}
          <line x1="130" y1="92" x2="250" y2="92" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="180" y1="145" x2="180" y2="40" stroke="#22c55e" strokeWidth="1.5" />

          {/* Parallelogram HK (about the diagonal, upper) */}
          <polygon
            points="130,92 180,92 180,40 130,40"
            fill="rgba(34, 197, 94, 0.15)"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* Vertex labels */}
          <text x="40" y="215" fill="#f59e0b" fontSize="11">A</text>
          <text x="300" y="215" fill="#f59e0b" fontSize="11">B</text>
          <text x="255" y="35" fill="#f59e0b" fontSize="11">C</text>
          <text x="40" y="35" fill="#f59e0b" fontSize="11">D</text>

          {/* Interior labels */}
          <text x="75" y="180" fill="#3b82f6" fontSize="10">EG</text>
          <text x="145" y="70" fill="#22c55e" fontSize="10">HK</text>
          <text x="130" y="150" fill="#ef4444" fontSize="9">F</text>
          <text x="185" y="100" fill="#ef4444" fontSize="9">H</text>
        </svg>
      </div>

      <h3>The Configuration</h3>

      <p>
        Given parallelogram ABCD with diagonal AC:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
        <li>Choose any point F on diagonal AC</li>
        <li>Draw lines through F parallel to the sides AB, BC, CD, DA</li>
        <li>These lines form parallelogram EG "about the diagonal"</li>
        <li>Similarly for any other point H on the diagonal, forming HK</li>
      </ul>

      <h3 className="mt-6">Why They Are Similar</h3>

      <p>
        The key insight comes from VI.2: when a line is drawn parallel to one side of a triangle,
        it divides the other sides proportionally. This means:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-mono text-center mb-2">
          BE : EA = CF : FA (from parallel to BC in triangle ABC)
        </p>
        <p className="text-amber-400 font-mono text-center">
          CF : FA = DG : GA (from parallel to CD in triangle ACD)
        </p>
      </div>

      <p className="mt-4">
        This gives us equal ratios of corresponding sides. Combined with the parallel lines ensuring
        equal angles, we have similarity by VI. Definition 1.
      </p>

      <h3 className="mt-6">Proof Structure</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Use VI.2 to establish proportional sides from parallel lines</li>
        <li>Apply V.18 (componendo) and V.16 (alternando) to show BA:AD = EA:AG</li>
        <li>Use I.29 to show corresponding angles are equal</li>
        <li>Conclude EG is similar to ABCD by VI. Def. 1</li>
        <li>Similarly prove HK is similar to ABCD</li>
        <li>By VI.21, figures similar to the same figure are similar to each other</li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.29 (parallel lines make equal angles)</li>
        <li>Proposition V.16 (alternando)</li>
        <li>Proposition V.18 (componendo)</li>
        <li>Proposition VI.2 (parallel line divides proportionally)</li>
        <li>Proposition VI.21 (transitivity of similarity)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Geometric Insight:</strong> This proposition reveals
          that the diagonal of a parallelogram acts as a "similarity axis" - any cross-section
          parallel to the sides produces a similar figure. This self-similar structure is related
          to affine transformations in modern geometry.
        </p>
      </div>
    </LessonLayout>
  );
}
