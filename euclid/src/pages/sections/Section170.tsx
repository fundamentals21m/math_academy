import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section170() {
  return (
    <LessonLayout sectionId={170}>
      <Proposition
        title="Proposition VI.25"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given rectilinear figure to which the figure to be
              constructed must be similar, and <em>D</em> that to which it must be equal.
            </p>
            <p className="mt-2">
              It is required to construct one and the same figure similar to <em>ABC</em> and
              equal to <em>D</em>.
            </p>
            <p className="mt-2">
              Let there be applied to <em>BC</em> the parallelogram <em>BE</em> equal to the
              triangle <em>ABC</em> [I.44], and to <em>CE</em> the parallelogram <em>CM</em> equal
              to <em>D</em> in the angle <em>FCE</em> which is equal to the angle <em>CBL</em>.
              [I.45]
            </p>
            <p className="mt-2">
              Therefore <em>BC</em> is in a straight line with <em>CF</em>, and <em>LE</em> with{' '}
              <em>EM</em>.
            </p>
            <p className="mt-2">
              Now let <em>GH</em> be taken a mean proportional to <em>BC</em>, <em>CF</em> [VI.13],
              and on <em>GH</em> let <em>KGH</em> be described similar and similarly situated to{' '}
              <em>ABC</em>. [VI.18]
            </p>
            <p className="mt-2">
              Then, since as <em>BC</em> is to <em>GH</em>, so is <em>GH</em> to <em>CF</em>, and,
              if three straight lines be proportional, as the first is to the third, so is the
              figure on the first to the similar and similarly situated figure described on the
              second [VI.19, Por.], therefore as <em>BC</em> is to <em>CF</em>, so is the triangle{' '}
              <em>ABC</em> to the triangle <em>KGH</em>.
            </p>
            <p className="mt-2">
              But, as <em>BC</em> is to <em>CF</em>, so also is the parallelogram <em>BE</em> to
              the parallelogram <em>EF</em>. [VI.1]
            </p>
            <p className="mt-2">
              Therefore also, as the triangle <em>ABC</em> is to the triangle <em>KGH</em>, so is
              the parallelogram <em>BE</em> to the parallelogram <em>EF</em>. [V.11]
            </p>
            <p className="mt-2">
              Therefore, alternately, as the triangle <em>ABC</em> is to the parallelogram{' '}
              <em>BE</em>, so is the triangle <em>KGH</em> to the parallelogram <em>EF</em>. [V.16]
            </p>
            <p className="mt-2">
              But the triangle <em>ABC</em> is equal to the parallelogram <em>BE</em>; therefore
              the triangle <em>KGH</em> is also equal to the parallelogram <em>EF</em>.
            </p>
            <p className="mt-2">
              But the parallelogram <em>EF</em> is equal to <em>D</em>; therefore <em>KGH</em> is
              also equal to <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              And <em>KGH</em> is also similar to <em>ABC</em>. Therefore one and the same figure{' '}
              <em>KGH</em> has been constructed similar to the given rectilinear figure <em>ABC</em>{' '}
              and equal to the other given figure <em>D</em>.
            </p>
          </>
        }
      >
        <p>
          To construct one and the same figure similar to a given rectilinear figure and equal
          to another.
        </p>
      </Proposition>

      <h2>A Classic Construction Problem</h2>

      <p>
        This is one of the most elegant constructions in the Elements: given two figures, construct
        a third figure that has the same shape as the first and the same area as the second.
        It beautifully combines similarity with equality of area.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 280" className="w-full max-w-lg">
          {/* Given figure ABC (triangle) */}
          <g>
            <polygon
              points="30,120 100,120 65,60"
              fill="rgba(59, 130, 246, 0.15)"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <text x="55" y="100" fill="#3b82f6" fontSize="10">ABC</text>
            <text x="40" y="145" fill="#94a3b8" fontSize="9">Given shape</text>
          </g>

          {/* Given figure D (rectangle representing area) */}
          <g>
            <rect
              x="130"
              y="70"
              width="60"
              height="50"
              fill="rgba(239, 68, 68, 0.15)"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <text x="150" y="100" fill="#ef4444" fontSize="10">D</text>
            <text x="130" y="145" fill="#94a3b8" fontSize="9">Given area</text>
          </g>

          {/* Arrow indicating construction */}
          <path d="M 200 95 L 240 95" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
          </defs>

          {/* Constructed figure KGH (triangle with same shape as ABC, same area as D) */}
          <g>
            <polygon
              points="260,140 370,140 315,50"
              fill="rgba(34, 197, 94, 0.15)"
              stroke="#22c55e"
              strokeWidth="2"
            />
            <text x="300" y="110" fill="#22c55e" fontSize="11">KGH</text>
            <text x="265" y="165" fill="#94a3b8" fontSize="9">Similar to ABC</text>
            <text x="265" y="180" fill="#94a3b8" fontSize="9">Equal in area to D</text>
          </g>

          {/* Construction elements below */}
          <g transform="translate(50, 190)">
            {/* Line BC */}
            <line x1="0" y1="30" x2="50" y2="30" stroke="#f59e0b" strokeWidth="2" />
            <text x="20" y="45" fill="#f59e0b" fontSize="9">BC</text>

            {/* Line CF */}
            <line x1="50" y1="30" x2="130" y2="30" stroke="#f59e0b" strokeWidth="2" />
            <text x="85" y="45" fill="#f59e0b" fontSize="9">CF</text>

            {/* Mean proportional GH */}
            <line x1="170" y1="30" x2="250" y2="30" stroke="#22c55e" strokeWidth="2" />
            <text x="200" y="45" fill="#22c55e" fontSize="9">GH (mean prop.)</text>

            <text x="0" y="70" fill="#94a3b8" fontSize="9">BC : GH = GH : CF</text>
          </g>
        </svg>
      </div>

      <h3>The Construction Method</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Convert the given triangle ABC to a parallelogram BE with the same area (using I.44)
        </li>
        <li>
          Convert the given figure D to a parallelogram CM with the same area, sharing a vertex
          with BE (using I.45)
        </li>
        <li>
          Find GH, the mean proportional between BC and CF (using VI.13)
        </li>
        <li>
          Construct triangle KGH similar to ABC on the base GH (using VI.18)
        </li>
        <li>
          The resulting figure KGH is similar to ABC and equal in area to D
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p>
        The key is the mean proportional. If GH is the mean proportional between BC and CF, then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-mono text-center mb-2">
          BC : GH = GH : CF
        </p>
        <p className="text-amber-400 font-mono text-center mb-2">
          Therefore: BC : CF = BC² : GH² = Area(ABC) : Area(KGH)
        </p>
        <p className="text-amber-400 font-mono text-center">
          Since BC : CF = Area(BE) : Area(EF) = Area(ABC) : Area(D)
        </p>
      </div>

      <p className="mt-4">
        This forces Area(KGH) = Area(D), while KGH remains similar to ABC by construction.
      </p>

      <h3 className="mt-6">Modern Perspective</h3>

      <p>
        In modern terms, we are scaling the given figure by a factor k such that k² times the
        original area equals the target area. The mean proportional construction gives us exactly
        this scale factor.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-lg text-amber-400 font-mono">
          k = sqrt(Area_target / Area_original)
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.44 (applying a parallelogram to a line)</li>
        <li>Proposition I.45 (constructing a parallelogram equal to a given figure)</li>
        <li>Proposition V.11, V.16 (properties of proportions)</li>
        <li>Proposition VI.1 (parallelograms of same height)</li>
        <li>Proposition VI.13 (finding a mean proportional)</li>
        <li>Proposition VI.18 (constructing a similar figure)</li>
        <li>Proposition VI.19 Porism (duplicate ratio of similar figures)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Problem-Solving Power:</strong> This construction
          demonstrates the full power of Greek geometric methods. Without algebra, Euclid can
          solve what we would express as: "Find the scale factor k such that k²A₁ = A₂, then
          scale figure F₁ by k to get F₂." The mean proportional is the geometric key to
          extracting square roots.
        </p>
      </div>
    </LessonLayout>
  );
}
