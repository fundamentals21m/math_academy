import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section168() {
  return (
    <LessonLayout sectionId={168}>
      <Proposition
        title="Proposition VI.23"
        proof={
          <>
            <p>
              Let <em>AC</em>, <em>CF</em> be equiangular parallelograms having the angle <em>BCD</em>{' '}
              equal to the angle <em>ECG</em>.
            </p>
            <p className="mt-2">
              I say that the parallelogram <em>AC</em> has to the parallelogram <em>CF</em> the ratio
              compounded of the ratios of the sides.
            </p>
            <p className="mt-2">
              For let them be placed so that <em>BC</em> is in a straight line with <em>CG</em>.
              Then <em>DC</em> is also in a straight line with <em>CE</em>.
            </p>
            <p className="mt-2">
              Let the parallelogram <em>DG</em> be completed. Let a straight line <em>K</em> be set
              out, and let it be contrived that, as <em>BC</em> is to <em>CG</em>, so is <em>K</em>{' '}
              to <em>L</em>, and, as <em>DC</em> is to <em>CE</em>, so is <em>L</em> to <em>M</em>.
              [VI.12]
            </p>
            <p className="mt-2">
              Then the ratios of <em>K</em> to <em>L</em> and of <em>L</em> to <em>M</em> are the
              same as the ratios of the sides, namely of <em>BC</em> to <em>CG</em> and of{' '}
              <em>DC</em> to <em>CE</em>.
            </p>
            <p className="mt-2">
              But the ratio of <em>K</em> to <em>M</em> is compounded of the ratio of <em>K</em> to{' '}
              <em>L</em> and of that of <em>L</em> to <em>M</em>; so that <em>K</em> has also to{' '}
              <em>M</em> the ratio compounded of the ratios of the sides.
            </p>
            <p className="mt-2">
              Now, since as <em>BC</em> is to <em>CG</em>, so is the parallelogram <em>AC</em> to the
              parallelogram <em>CH</em> [VI.1], but as <em>BC</em> is to <em>CG</em>, so is <em>K</em>{' '}
              to <em>L</em>, therefore also as <em>K</em> is to <em>L</em>, so is <em>AC</em> to{' '}
              <em>CH</em>. [V.11]
            </p>
            <p className="mt-2">
              Again, since as <em>DC</em> is to <em>CE</em>, so is the parallelogram <em>CH</em> to{' '}
              <em>CF</em> [VI.1], but as <em>DC</em> is to <em>CE</em>, so is <em>L</em> to{' '}
              <em>M</em>, therefore also, as <em>L</em> is to <em>M</em>, so is the parallelogram{' '}
              <em>CH</em> to the parallelogram <em>CF</em>. [V.11]
            </p>
            <p className="mt-2 font-medium">
              Since then it was proved that, as <em>K</em> is to <em>L</em>, so is the parallelogram{' '}
              <em>AC</em> to the parallelogram <em>CH</em>, and, as <em>L</em> is to <em>M</em>, so
              is the parallelogram <em>CH</em> to the parallelogram <em>CF</em>, therefore, ex
              aequali, as <em>K</em> is to <em>M</em>, so is <em>AC</em> to the parallelogram{' '}
              <em>CF</em>. [V.22]
            </p>
            <p className="mt-2 font-medium">
              But <em>K</em> has to <em>M</em> the ratio compounded of the ratios of the sides;
              therefore <em>AC</em> also has to <em>CF</em> the ratio compounded of the ratios of
              the sides.
            </p>
          </>
        }
      >
        <p>
          Equiangular parallelograms have to one another the ratio compounded of the ratios of
          their sides.
        </p>
      </Proposition>

      <h2>The Compound Ratio Theorem</h2>

      <p>
        This proposition introduces one of the most important concepts in Greek mathematics: the
        <strong> compound (or composed) ratio</strong>. The ratio of two equiangular parallelograms
        equals the product of the ratios of their corresponding sides.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 220" className="w-full max-w-md">
          {/* First parallelogram AC */}
          <g>
            <polygon
              points="40,140 130,140 160,60 70,60"
              fill="rgba(245, 158, 11, 0.1)"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            <text x="90" y="110" fill="#f59e0b" fontSize="12">AC</text>
            {/* Side labels */}
            <text x="80" y="155" fill="#3b82f6" fontSize="10">BC</text>
            <text x="25" y="100" fill="#22c55e" fontSize="10">DC</text>
            {/* Vertices */}
            <text x="35" y="155" fill="#94a3b8" fontSize="9">A</text>
            <text x="125" y="155" fill="#94a3b8" fontSize="9">B</text>
            <text x="160" y="55" fill="#94a3b8" fontSize="9">C</text>
            <text x="60" y="55" fill="#94a3b8" fontSize="9">D</text>
          </g>

          {/* Second parallelogram CF */}
          <g>
            <polygon
              points="200,150 320,150 360,50 240,50"
              fill="rgba(34, 197, 94, 0.1)"
              stroke="#22c55e"
              strokeWidth="2"
            />
            <text x="270" y="110" fill="#22c55e" fontSize="12">CF</text>
            {/* Side labels */}
            <text x="255" y="165" fill="#3b82f6" fontSize="10">CG</text>
            <text x="180" y="100" fill="#22c55e" fontSize="10">CE</text>
            {/* Vertices */}
            <text x="195" y="165" fill="#94a3b8" fontSize="9">E</text>
            <text x="320" y="165" fill="#94a3b8" fontSize="9">C</text>
            <text x="360" y="45" fill="#94a3b8" fontSize="9">G</text>
            <text x="232" y="45" fill="#94a3b8" fontSize="9">F</text>
          </g>

          {/* Angle indicator */}
          <path d="M 120 140 A 15 15 0 0 0 130 125" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 270 150 A 15 15 0 0 0 280 135" fill="none" stroke="#ef4444" strokeWidth="1.5" />

          {/* Formula */}
          <text x="80" y="195" fill="#94a3b8" fontSize="11">AC : CF = (BC : CG) composed with (DC : CE)</text>
        </svg>
      </div>

      <h3>What is a Compound Ratio?</h3>

      <p>
        A compound ratio is formed by "multiplying" two ratios together. In modern notation, if we
        have ratios a:b and c:d, their compound is ac:bd. Euclid expresses this by finding a
        middle term: a:b and b:c compound to give a:c.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-mono text-center mb-3">
          K : L = BC : CG (first side ratio)
        </p>
        <p className="text-amber-400 font-mono text-center mb-3">
          L : M = DC : CE (second side ratio)
        </p>
        <p className="text-amber-400 font-mono text-center border-t border-dark-600 pt-3">
          K : M = (BC : CG) composed with (DC : CE)
        </p>
      </div>

      <h3 className="mt-6">Modern Interpretation</h3>

      <p>
        In modern terms, if parallelogram AC has sides of length a and b at an angle theta, and
        parallelogram CF has sides of length c and d at the same angle:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          Area(AC) / Area(CF) = (a/c) * (b/d)
        </p>
      </div>

      <p className="mt-4">
        This is equivalent to the modern formula: the area of a parallelogram equals the product
        of its sides times the sine of the included angle.
      </p>

      <h3 className="mt-6">Proof Strategy</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Position the parallelograms so they share vertex C with sides collinear</li>
        <li>Complete the auxiliary parallelogram DG</li>
        <li>Use VI.12 to construct lines K, L, M representing the side ratios</li>
        <li>Apply VI.1 to relate parallelograms with the same height</li>
        <li>Use ex aequali (V.22) to combine the proportions</li>
      </ol>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition V.11 (transitivity of proportions)</li>
        <li>Proposition V.22 (ex aequali)</li>
        <li>Proposition VI.1 (parallelograms with same height)</li>
        <li>Proposition VI.12 (finding a fourth proportional)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Significance:</strong> The compound ratio
          concept was crucial for Greek mathematicians dealing with areas and volumes before the
          development of algebra. It allowed them to express relationships like "area scales as
          length squared" without explicit multiplication of ratios.
        </p>
      </div>
    </LessonLayout>
  );
}
