import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section177() {
  return (
    <LessonLayout sectionId={177}>
      <Proposition
        title="Proposition VI.32"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DCE</em> be two triangles having two sides proportional,
              <em> BA</em> to <em>AC</em> as <em>DC</em> is to <em>DE</em>, so that <em>AB</em>
              {' '}corresponds to <em>DC</em> and <em>AC</em> to <em>DE</em>.
            </p>
            <p className="mt-2">
              And let them be placed together at one angle so that <em>AC</em> is in a straight
              line with <em>DE</em>.
            </p>
            <p className="mt-2">
              I say that <em>BC</em> is also in a straight line with <em>CE</em>.
            </p>
            <p className="mt-2">
              For, since <em>AC</em> is parallel to <em>DE</em>, and the straight lines
              <em> AB</em>, <em>DC</em> have met them, the alternate angles <em>BAC</em>,
              <em> ACD</em> are equal. [I.29]
            </p>
            <p className="mt-2">
              For the same reason the angles <em>CDE</em>, <em>ACD</em> are also equal.
            </p>
            <p className="mt-2">
              So that the angle <em>BAC</em> is equal to the angle <em>CDE</em>.
            </p>
            <p className="mt-2">
              And, since <em>ABC</em>, <em>DCE</em> are two triangles having one angle,
              the angle at <em>A</em>, equal to one angle, the angle at <em>D</em>, and
              the sides about the equal angles proportional, so that <em>BA</em> is to
              <em> AC</em> as <em>CD</em> is to <em>DE</em>, therefore the triangle <em>ABC</em>
              {' '}is equiangular with the triangle <em>DCE</em>. [VI.6]
            </p>
            <p className="mt-2">
              Therefore the angle <em>ABC</em> is equal to the angle <em>DCE</em>.
            </p>
            <p className="mt-2">
              But the angle <em>ACD</em> was also proved equal to the angle <em>BAC</em>;
              therefore the whole angle <em>ACE</em> is equal to the two angles <em>ABC</em>,
              <em> BAC</em>.
            </p>
            <p className="mt-2">
              Let the angle <em>ACB</em> be added to each; therefore the angles <em>ACE</em>,
              <em> ACB</em> are equal to the angles <em>BAC</em>, <em>ACB</em>, <em>CBA</em>.
            </p>
            <p className="mt-2">
              But the angles <em>BAC</em>, <em>ABC</em>, <em>ACB</em> are equal to two right
              angles. [I.32] Therefore the angles <em>ACE</em>, <em>ACB</em> are also equal
              to two right angles.
            </p>
            <p className="mt-2 font-medium">
              Therefore with a straight line <em>AC</em>, and at the point <em>C</em> on it,
              the two straight lines <em>BC</em>, <em>CE</em> not lying on the same side make
              the adjacent angles equal to two right angles; therefore <em>BC</em> is in a
              straight line with <em>CE</em>. [I.14]
            </p>
          </>
        }
      >
        <p>
          If two triangles having two sides proportional to two sides be placed together
          at one angle so that their corresponding sides are also parallel, the remaining
          sides of the triangles will be in a straight line.
        </p>
      </Proposition>

      <h2>Triangles with Parallel Sides Form a Line</h2>

      <p>
        This proposition describes a special configuration: when two triangles with
        proportional sides are positioned so that their corresponding sides are parallel,
        their third sides must lie on the same straight line.
      </p>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 250" className="w-full max-w-md">
          {/* First triangle ABC */}
          <polygon
            points="50,180 150,180 100,80"
            fill="#3b82f6"
            fillOpacity="0.15"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Second triangle DCE */}
          <polygon
            points="150,180 280,180 200,60"
            fill="#22c55e"
            fillOpacity="0.15"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* The parallel sides emphasized */}
          {/* AB parallel to DC */}
          <line x1="50" y1="180" x2="100" y2="80" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4" />
          <line x1="150" y1="180" x2="200" y2="60" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4" />

          {/* AC parallel to DE (actually collinear) */}
          <line x1="100" y1="80" x2="200" y2="60" stroke="#ec4899" strokeWidth="2" />

          {/* The straight line BC-CE */}
          <line x1="50" y1="180" x2="280" y2="180" stroke="#f59e0b" strokeWidth="3" />

          {/* Points */}
          <circle cx="50" cy="180" r="4" fill="#3b82f6" />
          <circle cx="100" cy="80" r="4" fill="#ec4899" />
          <circle cx="150" cy="180" r="4" fill="#f59e0b" />
          <circle cx="200" cy="60" r="4" fill="#ec4899" />
          <circle cx="280" cy="180" r="4" fill="#22c55e" />

          {/* Labels */}
          <text x="40" y="195" fill="#3b82f6" fontSize="14" fontWeight="bold">B</text>
          <text x="95" y="70" fill="#ec4899" fontSize="14" fontWeight="bold">A</text>
          <text x="150" y="200" fill="#f59e0b" fontSize="14" fontWeight="bold">C</text>
          <text x="205" y="55" fill="#ec4899" fontSize="14" fontWeight="bold">D</text>
          <text x="285" y="195" fill="#22c55e" fontSize="14" fontWeight="bold">E</text>

          {/* Parallel markers */}
          <text x="320" y="100" fill="#8b5cf6" fontSize="10">AB || DC</text>
          <text x="320" y="120" fill="#ec4899" fontSize="10">AC extended to D</text>

          {/* Result annotation */}
          <text x="165" y="230" fill="#f59e0b" fontSize="12" textAnchor="middle">
            BC and CE form a straight line!
          </text>
        </svg>
      </div>

      <h3 className="mt-6">The Setup</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Given two triangles ABC and DCE such that:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The sides are proportional: BA : AC = DC : DE
          </li>
          <li>
            The triangles share vertex C
          </li>
          <li>
            Corresponding sides are parallel: AB || DC and AC lies on the line DE
          </li>
        </ul>
        <p className="text-amber-400 mt-4">
          Conclusion: BC and CE are collinear (form one straight line)
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Since AB || DC, alternate angles give angle BAC = angle ACD (I.29)
          </li>
          <li>
            Similarly, angle CDE = angle ACD
          </li>
          <li>
            Therefore angle BAC = angle CDE
          </li>
          <li>
            With proportional sides and equal angles, triangles ABC and DCE are
            similar (VI.6)
          </li>
          <li>
            From similarity: angle ABC = angle DCE
          </li>
          <li>
            Adding angle ACB to both sides of angle ACE = angles ABC + BAC
          </li>
          <li>
            The sum equals two right angles (since angle sum in triangle = 180 degrees)
          </li>
          <li>
            By I.14, BC and CE must be collinear
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">I.14:</strong> Adjacent angles summing
          to two right angles form a straight line
        </li>
        <li>
          <strong className="text-amber-400">I.29:</strong> Parallel lines create
          equal alternate angles
        </li>
        <li>
          <strong className="text-amber-400">I.32:</strong> Angles in a triangle sum
          to two right angles
        </li>
        <li>
          <strong className="text-amber-400">VI.6:</strong> SAS similarity criterion
        </li>
      </ul>

      <h3 className="mt-6">Geometric Interpretation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 200" className="w-full max-w-sm">
          {/* Parallel lines */}
          <line x1="30" y1="50" x2="320" y2="50" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <line x1="30" y1="150" x2="320" y2="150" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />

          {/* Transversal AB and DC */}
          <line x1="80" y1="150" x2="140" y2="50" stroke="#8b5cf6" strokeWidth="2" />
          <line x1="180" y1="150" x2="260" y2="50" stroke="#8b5cf6" strokeWidth="2" />

          {/* Base line BCE */}
          <line x1="80" y1="150" x2="300" y2="150" stroke="#f59e0b" strokeWidth="3" />

          {/* Top line AD */}
          <line x1="140" y1="50" x2="260" y2="50" stroke="#ec4899" strokeWidth="2" />

          {/* Points */}
          <circle cx="80" cy="150" r="3" fill="#3b82f6" />
          <circle cx="140" cy="50" r="3" fill="#ec4899" />
          <circle cx="180" cy="150" r="4" fill="#f59e0b" />
          <circle cx="260" cy="50" r="3" fill="#ec4899" />
          <circle cx="300" cy="150" r="3" fill="#22c55e" />

          {/* Labels */}
          <text x="75" y="170" fill="#3b82f6" fontSize="12">B</text>
          <text x="135" y="40" fill="#ec4899" fontSize="12">A</text>
          <text x="180" y="170" fill="#f59e0b" fontSize="12">C</text>
          <text x="265" y="40" fill="#ec4899" fontSize="12">D</text>
          <text x="305" y="170" fill="#22c55e" fontSize="12">E</text>

          {/* Annotation */}
          <text x="200" y="100" fill="#6b7280" fontSize="10" textAnchor="middle">
            Parallel transversals
          </text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Application:</strong> This proposition is
          useful in geometric constructions where we need to extend or join figures
          while maintaining proportional relationships. It shows that similarity and
          parallelism together create collinearity&mdash;a powerful constraint that
          simplifies many construction problems.
        </p>
      </div>
    </LessonLayout>
  );
}
