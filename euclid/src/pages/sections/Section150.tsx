import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section150() {
  return (
    <LessonLayout sectionId={150}>
      <Proposition
        title="Proposition VI.5"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having their sides proportional, so
              that, as <em>AB</em> is to <em>BC</em>, so is <em>DE</em> to <em>EF</em>; as <em>BC</em>{' '}
              is to <em>CA</em>, so is <em>EF</em> to <em>FD</em>; and further, as <em>BA</em> is to{' '}
              <em>AC</em>, so is <em>ED</em> to <em>DF</em>.
            </p>
            <p className="mt-2">
              I say that the triangle <em>ABC</em> is equiangular with the triangle <em>DEF</em>,
              and they will have those angles equal which the corresponding sides subtend.
            </p>
            <p className="mt-2">
              For on the straight line <em>EF</em>, and at the points <em>E</em>, <em>F</em> on it,
              let there be constructed the angle <em>FEG</em> equal to the angle <em>ABC</em>, and
              the angle <em>EFG</em> equal to the angle <em>ACB</em>; [I.23] therefore the remaining
              angle at <em>A</em> is equal to the remaining angle at <em>G</em>. [I.32]
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equiangular with the triangle <em>GEF</em>.
            </p>
            <p className="mt-2">
              Therefore in the triangles <em>ABC</em>, <em>GEF</em> the sides about the equal angles
              are proportional, and those are corresponding sides which subtend the equal angles.
              [VI.4]
            </p>
            <p className="mt-2">
              Therefore, as <em>AB</em> is to <em>BC</em>, so is <em>GE</em> to <em>EF</em>.
            </p>
            <p className="mt-2">
              But, as <em>AB</em> is to <em>BC</em>, so by hypothesis is <em>DE</em> to <em>EF</em>;
              therefore, as <em>DE</em> is to <em>EF</em>, so is <em>GE</em> to <em>EF</em>. [V.11]
            </p>
            <p className="mt-2">
              Therefore each of the straight lines <em>DE</em>, <em>GE</em> has the same ratio to{' '}
              <em>EF</em>; therefore <em>DE</em> is equal to <em>GE</em>. [V.9]
            </p>
            <p className="mt-2">
              For the same reason <em>DF</em> is also equal to <em>GF</em>.
            </p>
            <p className="mt-2">
              Since then <em>DE</em> is equal to <em>EG</em>, and <em>EF</em> is common, the two
              sides <em>DE</em>, <em>EF</em> are equal to the two sides <em>GE</em>, <em>EF</em>;
              and the base <em>DF</em> is equal to the base <em>GF</em>; therefore the angle{' '}
              <em>DEF</em> is equal to the angle <em>GEF</em>, [I.8] and the triangle <em>DEF</em>{' '}
              is equal to the triangle <em>GEF</em>.
            </p>
            <p className="mt-2">
              Therefore the remaining angles are equal to the remaining angles, namely those which
              the equal sides subtend. [I.4]
            </p>
            <p className="mt-2">
              Therefore the angle <em>DFE</em> is also equal to the angle <em>GFE</em>, and the
              angle <em>EDF</em> to the angle <em>EGF</em>.
            </p>
            <p className="mt-2">
              And, since the angle <em>FED</em> is equal to the angle <em>GEF</em>, while the angle{' '}
              <em>GEF</em> is equal to the angle <em>ABC</em>, therefore the angle <em>ABC</em> is
              also equal to the angle <em>DEF</em>.
            </p>
            <p className="mt-2">
              For the same reason the angle <em>ACB</em> is also equal to the angle <em>DFE</em>,
              and further, the angle at <em>A</em> to the angle at <em>D</em>.
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equiangular with the triangle <em>DEF</em>.
            </p>
          </>
        }
      >
        <p>
          If two triangles have their sides proportional, the triangles will be equiangular and
          will have those angles equal which the corresponding sides subtend.
        </p>
      </Proposition>

      <h2>The SSS Similarity Criterion</h2>

      <p>
        This proposition is the converse of VI.4. It shows that if all three pairs of corresponding
        sides are in proportion, the triangles must have equal corresponding angles. This is the{' '}
        <strong>Side-Side-Side (SSS) similarity criterion</strong>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 220" className="w-full max-w-lg">
          {/* First triangle ABC (smaller) */}
          <polygon
            points="50,180 150,180 100,60"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Second triangle DEF (larger, proportional) */}
          <polygon
            points="220,200 400,200 310,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Side length indicators for ABC */}
          <text x="100" y="195" textAnchor="middle" fill="#f59e0b" fontSize="10">a</text>
          <text x="65" y="115" textAnchor="middle" fill="#f59e0b" fontSize="10">c</text>
          <text x="135" y="115" textAnchor="middle" fill="#f59e0b" fontSize="10">b</text>

          {/* Side length indicators for DEF (proportional) */}
          <text x="310" y="215" textAnchor="middle" fill="#3b82f6" fontSize="10">ka</text>
          <text x="250" y="115" textAnchor="middle" fill="#3b82f6" fontSize="10">kc</text>
          <text x="375" y="115" textAnchor="middle" fill="#3b82f6" fontSize="10">kb</text>

          {/* Vertex labels */}
          <text x="100" y="50" textAnchor="middle" fill="#f59e0b" fontSize="12">A</text>
          <text x="40" y="190" textAnchor="middle" fill="#f59e0b" fontSize="12">B</text>
          <text x="160" y="190" textAnchor="middle" fill="#f59e0b" fontSize="12">C</text>

          <text x="310" y="22" textAnchor="middle" fill="#3b82f6" fontSize="12">D</text>
          <text x="210" y="210" textAnchor="middle" fill="#3b82f6" fontSize="12">E</text>
          <text x="410" y="210" textAnchor="middle" fill="#3b82f6" fontSize="12">F</text>

          {/* Scale factor */}
          <text x="185" y="120" textAnchor="middle" fill="#22c55e" fontSize="12">k</text>
          <text x="185" y="135" textAnchor="middle" fill="#9ca3af" fontSize="10">scale</text>
        </svg>
      </div>

      <h3>The Hypothesis</h3>

      <p>If the sides are in proportion:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          AB : DE = BC : EF = CA : FD
        </p>
      </div>

      <h3 className="mt-6">The Conclusion</h3>

      <p>Then the angles are equal:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono mb-2">Angle A = Angle D</p>
        <p className="text-amber-400 font-mono mb-2">Angle B = Angle E</p>
        <p className="text-amber-400 font-mono">Angle C = Angle F</p>
      </div>

      <h3 className="mt-6">Proof Strategy</h3>

      <p>
        Euclid uses an auxiliary construction: he builds a triangle <em>GEF</em> that is known to
        be equiangular with <em>ABC</em>, and then shows that this triangle must be congruent to{' '}
        <em>DEF</em>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 200" className="w-full max-w-md">
          {/* Triangle DEF */}
          <polygon
            points="50,170 250,170 150,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Auxiliary triangle GEF (dashed, congruent to DEF) */}
          <polygon
            points="50,170 250,170 150,30"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="4,4"
          />

          {/* Point G coinciding with D */}
          <circle cx="150" cy="30" r="4" fill="#22c55e" />

          {/* Labels */}
          <text x="150" y="20" textAnchor="middle" fill="#3b82f6" fontSize="12">D = G</text>
          <text x="40" y="180" textAnchor="middle" fill="#3b82f6" fontSize="12">E</text>
          <text x="260" y="180" textAnchor="middle" fill="#3b82f6" fontSize="12">F</text>

          {/* Explanation */}
          <text x="175" y="120" textAnchor="middle" fill="#9ca3af" fontSize="10">
            GEF constructed equiangular to ABC
          </text>
          <text x="175" y="135" textAnchor="middle" fill="#9ca3af" fontSize="10">
            GEF turns out to equal DEF (SSS)
          </text>
        </svg>
      </div>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Construct triangle <em>GEF</em> with angle <em>GEF</em> = angle <em>ABC</em> and angle{' '}
          <em>GFE</em> = angle <em>ACB</em>
        </li>
        <li>
          By VI.4, triangles <em>ABC</em> and <em>GEF</em> have proportional sides
        </li>
        <li>Since <em>ABC</em> and <em>DEF</em> also have proportional sides, we get <em>GE</em> ={' '}
          <em>DE</em> and <em>GF</em> = <em>DF</em>
        </li>
        <li>
          By SSS congruence (I.8), triangles <em>GEF</em> and <em>DEF</em> are congruent
        </li>
        <li>
          Therefore <em>DEF</em> is equiangular with <em>ABC</em>
        </li>
      </ol>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">VI.4 and VI.5 Together:</strong> These two propositions
          establish that "equiangular" and "sides proportional" are equivalent conditions for
          triangles. This is the essence of similarity: same shape, possibly different size.
        </p>
      </div>

      <h3 className="mt-6">The Three Similarity Criteria</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">AA (VI.4)</h4>
          <p className="text-dark-200 mt-2">
            Two pairs of equal angles imply proportional sides
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30">
          <h4 className="text-amber-400 font-semibold">SSS (VI.5) - This Proposition</h4>
          <p className="text-dark-200 mt-2">
            Three pairs of proportional sides imply equal angles
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">SAS (VI.6)</h4>
          <p className="text-dark-200 mt-2">
            One equal angle with proportional adjacent sides implies similarity
          </p>
        </div>
      </div>

      <h3 className="mt-6">Practical Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Testing Similarity:</strong> Check if three ratios are equal to verify similarity
        </li>
        <li>
          <strong>Scale Models:</strong> Preserving proportions ensures the same angles
        </li>
        <li>
          <strong>Engineering:</strong> Similar structures have the same stress distributions
        </li>
      </ul>
    </LessonLayout>
  );
}
