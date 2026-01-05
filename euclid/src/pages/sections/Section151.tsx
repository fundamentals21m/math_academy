import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section151() {
  return (
    <LessonLayout sectionId={151}>
      <Proposition
        title="Proposition VI.6"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having one angle <em>BAC</em> equal to
              one angle <em>EDF</em>, and the sides about the equal angles proportional, so that, as{' '}
              <em>BA</em> is to <em>AC</em>, so is <em>ED</em> to <em>DF</em>.
            </p>
            <p className="mt-2">
              I say that the triangle <em>ABC</em> is equiangular with the triangle <em>DEF</em>,
              and will have the angle <em>ABC</em> equal to the angle <em>DEF</em>, and the angle{' '}
              <em>ACB</em> equal to the angle <em>DFE</em>.
            </p>
            <p className="mt-2">
              For on the straight line <em>DF</em>, and at the points <em>D</em>, <em>F</em> on it,
              let there be constructed the angle <em>FDG</em> equal to either of the angles{' '}
              <em>BAC</em>, <em>EDF</em>, and the angle <em>DFG</em> equal to the angle <em>ACB</em>;
              [I.23] therefore the remaining angle at <em>B</em> is equal to the remaining angle at{' '}
              <em>G</em>. [I.32]
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equiangular with the triangle <em>DGF</em>.
            </p>
            <p className="mt-2">
              Therefore, proportionally, as <em>BA</em> is to <em>AC</em>, so is <em>GD</em> to{' '}
              <em>DF</em>. [VI.4]
            </p>
            <p className="mt-2">
              But, ex hypothesi, as <em>BA</em> is to <em>AC</em>, so also is <em>ED</em> to{' '}
              <em>DF</em>; therefore also, as <em>ED</em> is to <em>DF</em>, so is <em>GD</em> to{' '}
              <em>DF</em>. [V.11]
            </p>
            <p className="mt-2">
              Therefore <em>ED</em> is equal to <em>GD</em>; [V.9] and <em>DF</em> is common;
              therefore the two sides <em>ED</em>, <em>DF</em> are equal to the two sides{' '}
              <em>GD</em>, <em>DF</em>; and the angle <em>EDF</em> is equal to the angle{' '}
              <em>GDF</em>; therefore the base <em>EF</em> is equal to the base <em>GF</em>, and
              the triangle <em>DEF</em> is equal to the triangle <em>DGF</em>, and the remaining
              angles will be equal to the remaining angles, namely those which the equal sides
              subtend. [I.4]
            </p>
            <p className="mt-2">
              Therefore the angle <em>DFG</em> is equal to the angle <em>DFE</em>, and the angle at{' '}
              <em>G</em> to the angle at <em>E</em>.
            </p>
            <p className="mt-2">
              But the angle <em>DFG</em> is equal to the angle <em>ACB</em>; therefore the angle{' '}
              <em>ACB</em> is also equal to the angle <em>DFE</em>.
            </p>
            <p className="mt-2">
              And the angle <em>BAC</em> is also equal to the angle <em>EDF</em>; therefore the
              remaining angle at <em>B</em> is also equal to the remaining angle at <em>E</em>.
              [I.32]
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equiangular with the triangle <em>DEF</em>.
            </p>
          </>
        }
      >
        <p>
          If two triangles have one angle equal to one angle and the sides about the equal angles
          proportional, the triangles will be equiangular and will have those angles equal which
          the corresponding sides subtend.
        </p>
      </Proposition>

      <h2>The SAS Similarity Criterion</h2>

      <p>
        This proposition establishes the <strong>Side-Angle-Side (SAS) similarity criterion</strong>:
        if two triangles have one pair of equal angles and the sides containing those angles are
        proportional, the triangles are similar.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 220" className="w-full max-w-lg">
          {/* First triangle ABC */}
          <polygon
            points="60,180 170,180 60,60"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Second triangle DEF (larger, with same angle at D) */}
          <polygon
            points="240,200 400,200 240,40"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Angle marks at A and D */}
          <path d="M 60,165 A 15,15 0 0,1 75,180" fill="none" stroke="#22c55e" strokeWidth="2" />
          <path d="M 240,180 A 20,20 0 0,1 260,200" fill="none" stroke="#22c55e" strokeWidth="2" />

          {/* Side labels for ABC */}
          <text x="50" y="120" textAnchor="end" fill="#f59e0b" fontSize="10">AB</text>
          <text x="115" y="195" textAnchor="middle" fill="#f59e0b" fontSize="10">AC</text>

          {/* Side labels for DEF */}
          <text x="230" y="120" textAnchor="end" fill="#3b82f6" fontSize="10">DE</text>
          <text x="320" y="215" textAnchor="middle" fill="#3b82f6" fontSize="10">DF</text>

          {/* Vertex labels */}
          <text x="55" y="55" textAnchor="middle" fill="#f59e0b" fontSize="12">B</text>
          <text x="55" y="195" textAnchor="middle" fill="#f59e0b" fontSize="12">A</text>
          <text x="180" y="185" textAnchor="middle" fill="#f59e0b" fontSize="12">C</text>

          <text x="235" y="35" textAnchor="middle" fill="#3b82f6" fontSize="12">E</text>
          <text x="235" y="215" textAnchor="middle" fill="#3b82f6" fontSize="12">D</text>
          <text x="410" y="205" textAnchor="middle" fill="#3b82f6" fontSize="12">F</text>

          {/* Equal angle notation */}
          <text x="90" y="175" textAnchor="middle" fill="#22c55e" fontSize="11">=</text>
          <text x="265" y="190" textAnchor="middle" fill="#22c55e" fontSize="11">=</text>
        </svg>
      </div>

      <h3>The Conditions</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Condition 1: One Equal Angle</h4>
          <p className="text-dark-200 mt-2">Angle BAC = Angle EDF</p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Condition 2: Proportional Adjacent Sides</h4>
          <p className="text-dark-200 mt-2 font-mono">BA : AC = ED : DF</p>
        </div>
      </div>

      <h3 className="mt-6">The Conclusion</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono mb-2">
          Triangle ABC ~ Triangle DEF
        </p>
        <p className="text-dark-400 text-sm">
          (All three pairs of angles are equal)
        </p>
      </div>

      <h3 className="mt-6">Proof Strategy</h3>

      <p>
        Similar to VI.5, Euclid constructs an auxiliary triangle and proves it must be congruent to
        the given triangle:
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 200" className="w-full max-w-md">
          {/* Triangle DEF */}
          <polygon
            points="50,170 250,170 50,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Auxiliary triangle DGF */}
          <polygon
            points="50,170 250,170 50,30"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />

          {/* Labels */}
          <text x="40" y="25" textAnchor="middle" fill="#3b82f6" fontSize="12">E = G</text>
          <text x="40" y="180" textAnchor="middle" fill="#3b82f6" fontSize="12">D</text>
          <text x="260" y="180" textAnchor="middle" fill="#3b82f6" fontSize="12">F</text>

          {/* Equal angles at D */}
          <path d="M 50,155 A 15,15 0 0,1 65,170" fill="none" stroke="#22c55e" strokeWidth="2" />

          {/* Explanation */}
          <text x="175" y="100" textAnchor="middle" fill="#9ca3af" fontSize="10">
            DGF constructed with
          </text>
          <text x="175" y="115" textAnchor="middle" fill="#9ca3af" fontSize="10">
            angle D = angle A (given)
          </text>
          <text x="175" y="130" textAnchor="middle" fill="#9ca3af" fontSize="10">
            angle F = angle C
          </text>
        </svg>
      </div>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Construct triangle <em>DGF</em> equiangular with <em>ABC</em>
        </li>
        <li>
          By VI.4, the sides of <em>ABC</em> and <em>DGF</em> are proportional
        </li>
        <li>
          The given proportion forces <em>ED</em> = <em>GD</em>
        </li>
        <li>
          By SAS congruence (I.4), triangles <em>DEF</em> and <em>DGF</em> are congruent
        </li>
        <li>
          Therefore <em>DEF</em> is equiangular with <em>ABC</em>
        </li>
      </ol>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Included Angle is Essential:</strong> The SAS
          criterion requires that the equal angle be <em>between</em> the proportional sides. If
          the angle is not included, the criterion fails (compare with VI.7 which addresses this
          case with additional conditions).
        </p>
      </div>

      <h3 className="mt-6">Comparison of Similarity Criteria</h3>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-dark-300 border-collapse">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left p-3 text-amber-400">Criterion</th>
              <th className="text-left p-3 text-amber-400">What You Need</th>
              <th className="text-left p-3 text-amber-400">Proposition</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="p-3">AA</td>
              <td className="p-3">Two pairs of equal angles</td>
              <td className="p-3">VI.4</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="p-3">SSS</td>
              <td className="p-3">All sides proportional</td>
              <td className="p-3">VI.5</td>
            </tr>
            <tr className="border-b border-dark-800 bg-amber-500/5">
              <td className="p-3 font-medium">SAS</td>
              <td className="p-3">One angle equal + adjacent sides proportional</td>
              <td className="p-3">VI.6 (this)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6">Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Proving Similarity:</strong> Often the most practical criterion when one angle
          is obviously equal
        </li>
        <li>
          <strong>Shadow Problems:</strong> Sun angle creates similar triangles with proportional
          heights and shadows
        </li>
        <li>
          <strong>Trigonometry:</strong> Defining trig ratios relies on similar triangles with
          equal angles
        </li>
        <li>
          <strong>Similar Triangles in Proofs:</strong> Constructing auxiliary similar triangles
        </li>
      </ul>
    </LessonLayout>
  );
}
