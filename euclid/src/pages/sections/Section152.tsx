import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section152() {
  return (
    <LessonLayout sectionId={152}>
      <Proposition
        title="Proposition VI.7"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having one angle <em>BAC</em> equal
              to one angle <em>EDF</em>, the sides about other angles <em>ABC</em> and <em>DEF</em>{' '}
              proportional, so that, as <em>AB</em> is to <em>BC</em>, so is <em>DE</em> to{' '}
              <em>EF</em>, and, first, each of the remaining angles at <em>C</em>, <em>F</em>{' '}
              less than a right angle.
            </p>
            <p className="mt-2">
              I say that the triangle <em>ABC</em> is equiangular with the triangle <em>DEF</em>,
              the angle <em>ABC</em> will be equal to the angle <em>DEF</em>, and the remaining
              angle, namely the angle at <em>C</em>, equal to the remaining angle, the angle at{' '}
              <em>F</em>.
            </p>
            <p className="mt-2">
              For, if the angle <em>ABC</em> is unequal to the angle <em>DEF</em>, one of them is
              greater. Let the angle <em>ABC</em> be greater; and on the straight line <em>AB</em>,
              and at the point <em>B</em> on it, let the angle <em>ABG</em> be constructed equal to
              the angle <em>DEF</em>. [I.23]
            </p>
            <p className="mt-2">
              Then, since the angle <em>A</em> is equal to <em>D</em>, and the angle <em>ABG</em>{' '}
              to the angle <em>DEF</em>, therefore the remaining angle <em>AGB</em> is equal to
              the remaining angle <em>DFE</em>. [I.32]
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABG</em> is equiangular with the triangle <em>DEF</em>.
            </p>
            <p className="mt-2">
              Therefore, as <em>AB</em> is to <em>BG</em>, so is <em>DE</em> to <em>EF</em>. [VI.4]
            </p>
            <p className="mt-2">
              But, as <em>DE</em> is to <em>EF</em>, so by hypothesis is <em>AB</em> to <em>BC</em>;
              therefore <em>AB</em> has the same ratio to each of the straight lines <em>BC</em>,{' '}
              <em>BG</em>; [V.11] therefore <em>BC</em> is equal to <em>BG</em>. [V.9]
            </p>
            <p className="mt-2">
              Therefore the angle at <em>C</em> is also equal to the angle <em>BGC</em>. [I.5]
            </p>
            <p className="mt-2">
              But, by hypothesis, the angle at <em>C</em> is less than a right angle; therefore
              the angle <em>BGC</em> is also less than a right angle; so that the angle{' '}
              <em>AGB</em> adjacent to it is greater than a right angle. [I.13]
            </p>
            <p className="mt-2">
              And it was proved equal to the angle at <em>F</em>; therefore the angle at <em>F</em>{' '}
              is also greater than a right angle.
            </p>
            <p className="mt-2">
              But it is by hypothesis less than a right angle: which is absurd.
            </p>
            <p className="mt-2">
              Therefore the angle <em>ABC</em> is not unequal to the angle <em>DEF</em>; therefore
              it is equal to it.
            </p>
            <p className="mt-2">
              But the angle at <em>A</em> is also equal to the angle at <em>D</em>; therefore the
              remaining angle at <em>C</em> is equal to the remaining angle at <em>F</em>. [I.32]
            </p>
            <p className="mt-2 font-medium">
              [The case where both angles at <em>C</em> and <em>F</em> are not less than a right
              angle is proved similarly.]
            </p>
          </>
        }
      >
        <p>
          If two triangles have one angle equal to one angle, the sides about other angles
          proportional, and the remaining angles either both less than a right angle or both not
          less than a right angle, the triangles will be equiangular and will have those angles
          equal which the corresponding sides subtend.
        </p>
      </Proposition>

      <h2>The SSA Similarity Criterion (with Conditions)</h2>

      <p>
        This proposition addresses the tricky case when the equal angle is <em>not</em> between the
        proportional sides. Unlike VI.6 (SAS), this requires an additional condition about the
        remaining angles.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 250" className="w-full max-w-lg">
          {/* First triangle ABC */}
          <polygon
            points="50,200 180,200 130,70"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Second triangle DEF */}
          <polygon
            points="250,210 400,210 340,50"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Equal angle marks at A and D */}
          <path d="M 65,200 A 15,15 0 0,1 75,185" fill="none" stroke="#22c55e" strokeWidth="2" />
          <path d="M 265,210 A 15,15 0 0,1 275,195" fill="none" stroke="#22c55e" strokeWidth="2" />

          {/* Proportional sides highlighted */}
          <line x1="50" y1="200" x2="130" y2="70" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="130" y1="70" x2="180" y2="200" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="250" y1="210" x2="340" y2="50" stroke="#ef4444" strokeWidth="2.5" />
          <line x1="340" y1="50" x2="400" y2="210" stroke="#ef4444" strokeWidth="2.5" />

          {/* Acute angle marks at C and F */}
          <path d="M 168,200 A 12,12 0 0,0 172,188" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <text x="165" y="218" fill="#a855f7" fontSize="9">&lt; 90</text>
          <path d="M 388,210 A 12,12 0 0,0 392,198" fill="none" stroke="#a855f7" strokeWidth="1.5" />
          <text x="385" y="228" fill="#a855f7" fontSize="9">&lt; 90</text>

          {/* Vertex labels */}
          <text x="130" y="60" textAnchor="middle" fill="#f59e0b" fontSize="12">B</text>
          <text x="40" y="210" textAnchor="middle" fill="#f59e0b" fontSize="12">A</text>
          <text x="190" y="210" textAnchor="middle" fill="#f59e0b" fontSize="12">C</text>

          <text x="340" y="42" textAnchor="middle" fill="#3b82f6" fontSize="12">E</text>
          <text x="240" y="220" textAnchor="middle" fill="#3b82f6" fontSize="12">D</text>
          <text x="410" y="218" textAnchor="middle" fill="#3b82f6" fontSize="12">F</text>

          {/* Proportion notation */}
          <text x="85" y="130" textAnchor="middle" fill="#ef4444" fontSize="10">AB</text>
          <text x="165" y="130" textAnchor="middle" fill="#ef4444" fontSize="10">BC</text>
          <text x="290" y="125" textAnchor="middle" fill="#ef4444" fontSize="10">DE</text>
          <text x="380" y="125" textAnchor="middle" fill="#ef4444" fontSize="10">EF</text>
        </svg>
      </div>

      <h3>The Conditions</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Condition 1: One Equal Angle</h4>
          <p className="text-dark-200 mt-2">Angle A = Angle D</p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Condition 2: Sides About Other Angles Proportional</h4>
          <p className="text-dark-200 mt-2 font-mono">AB : BC = DE : EF</p>
          <p className="text-dark-400 text-sm mt-1">
            (Note: angle A is NOT between AB and BC)
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/30">
          <h4 className="text-amber-400 font-semibold">Condition 3: The Critical Restriction</h4>
          <p className="text-dark-200 mt-2">
            The remaining angles (at C and F) are either:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Both less than a right angle (both acute), OR</li>
            <li>Both not less than a right angle (both right or obtuse)</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-6">Why the Extra Condition?</h3>

      <p>
        The SSA configuration is ambiguous without additional information. This is related to the
        famous "ambiguous case" of solving triangles:
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 380 180" className="w-full max-w-md">
          {/* Base and given side */}
          <line x1="50" y1="150" x2="200" y2="150" stroke="#f59e0b" strokeWidth="2" />

          {/* First possible triangle (acute) */}
          <line x1="50" y1="150" x2="140" y2="50" stroke="#3b82f6" strokeWidth="2" />
          <line x1="200" y1="150" x2="140" y2="50" stroke="#22c55e" strokeWidth="2" />

          {/* Second possible triangle (obtuse) - dashed */}
          <line x1="200" y1="150" x2="85" y2="100" stroke="#22c55e" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="50" y1="150" x2="85" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,4" />

          {/* Arc showing the swing of the side */}
          <path d="M 85,100 A 70,70 0 0,1 140,50" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2" />

          {/* Labels */}
          <text x="125" y="165" textAnchor="middle" fill="#f59e0b" fontSize="11">base</text>
          <text x="85" y="100" textAnchor="middle" fill="#3b82f6" fontSize="11">C'</text>
          <text x="145" y="45" textAnchor="middle" fill="#3b82f6" fontSize="11">C</text>
          <text x="40" y="155" textAnchor="middle" fill="#f59e0b" fontSize="11">A</text>
          <text x="210" y="155" textAnchor="middle" fill="#f59e0b" fontSize="11">B</text>

          {/* Explanation */}
          <text x="280" y="80" textAnchor="start" fill="#9ca3af" fontSize="10">Two possible</text>
          <text x="280" y="95" textAnchor="start" fill="#9ca3af" fontSize="10">triangles with</text>
          <text x="280" y="110" textAnchor="start" fill="#9ca3af" fontSize="10">same SSA data</text>
        </svg>
      </div>

      <p className="mt-4">
        Given the same angle at A, and the same ratio AB:BC, there could be two different triangles
        - one with an acute angle at C, and one with an obtuse angle at C. The condition ensures we
        are comparing triangles of the same "type."
      </p>

      <h3 className="mt-6">Proof Strategy (Reductio ad Absurdum)</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Assume angle B is not equal to angle E
        </li>
        <li>
          Construct angle ABG equal to angle DEF
        </li>
        <li>
          Show that triangle ABG is equiangular with DEF (by VI.4)
        </li>
        <li>
          The proportions force BG = BC
        </li>
        <li>
          This makes angle BCG = angle BGC (isosceles triangle)
        </li>
        <li>
          But this leads to a contradiction about whether angle C is acute or not
        </li>
        <li>
          Therefore, our assumption was wrong, and angle B = angle E
        </li>
      </ol>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Ambiguous Case Resolved:</strong> In modern
          trigonometry, when solving triangles with SSA data, we must check for two solutions.
          Euclid's proposition shows that specifying whether the remaining angle is acute or
          obtuse removes the ambiguity.
        </p>
      </div>

      <h3 className="mt-6">Summary of All Similarity Criteria</h3>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-dark-300 border-collapse">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left p-3 text-amber-400">Criterion</th>
              <th className="text-left p-3 text-amber-400">Conditions</th>
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
              <td className="p-3">All three pairs of sides proportional</td>
              <td className="p-3">VI.5</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="p-3">SAS</td>
              <td className="p-3">Included angle equal + adjacent sides proportional</td>
              <td className="p-3">VI.6</td>
            </tr>
            <tr className="border-b border-dark-800 bg-amber-500/5">
              <td className="p-3 font-medium">SSA*</td>
              <td className="p-3">
                Non-included angle equal + adjacent sides proportional + remaining angles same type
              </td>
              <td className="p-3">VI.7 (this)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-dark-400 text-sm mt-2">
        * Requires the additional condition about remaining angles being of the same type (both
        acute, or both not acute).
      </p>
    </LessonLayout>
  );
}
