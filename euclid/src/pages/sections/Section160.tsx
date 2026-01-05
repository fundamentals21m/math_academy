import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section160() {
  return (
    <LessonLayout sectionId={160}>
      <Proposition
        title="Proposition VI.15"
        proof={
          <>
            <p>
              Let <em>ABC</em> and <em>ADE</em> be equal triangles having angle <em>BAC</em> equal
              to angle <em>DAE</em>.
            </p>
            <p className="mt-2">
              I say that the sides about the equal angles are reciprocally proportional, that is,
              CA:AD = EA:AB.
            </p>
            <p className="mt-2">
              Place them so that CA is in a straight line with AD. Then EA is also in a straight
              line with AB. [I.14]
            </p>
            <p className="mt-2">
              Join BD. Since triangle ABC is equal to triangle ADE, and ABD is another triangle,
              therefore triangle ABC:triangle ABD = triangle ADE:triangle ABD. [V.7]
            </p>
            <p className="mt-2">
              But triangle ABC:triangle ABD = CA:AD (same height from B), [VI.1] and triangle
              ADE:triangle ABD = EA:AB (same height from D). [VI.1]
            </p>
            <p className="mt-2 font-medium">
              Therefore CA:AD = EA:AB, which means the sides about the equal angles are
              reciprocally proportional.
            </p>
            <p className="mt-2">
              Conversely, if CA:AD = EA:AB, we can reverse the argument to show the triangles are
              equal.
            </p>
          </>
        }
      >
        <p>
          In equal triangles which have one angle equal to one angle the sides about the equal
          angles are reciprocally proportional; and those triangles which have one angle equal to
          one angle and in which the sides about the equal angles are reciprocally proportional are
          equal.
        </p>
      </Proposition>

      <h2>Reciprocal Proportion in Equal Triangles</h2>

      <p>
        This proposition establishes a fundamental connection between equal areas and reciprocal
        proportions. When two triangles have equal areas and share a common angle, their sides
        exhibit a specific relationship: the sides are <strong>reciprocally proportional</strong>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 220" className="w-80 h-56">
          {/* Triangle ABC */}
          <polygon
            points="160,30 80,180 220,180"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Triangle ADE (overlapping at A) */}
          <polygon
            points="160,30 100,140 250,100"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="4"
          />
          {/* Common vertex A */}
          <circle cx="160" cy="30" r="4" fill="#ef4444" />
          {/* Points */}
          <circle cx="80" cy="180" r="3" fill="#f59e0b" />
          <circle cx="220" cy="180" r="3" fill="#f59e0b" />
          <circle cx="100" cy="140" r="3" fill="#3b82f6" />
          <circle cx="250" cy="100" r="3" fill="#3b82f6" />
          {/* Labels */}
          <text x="160" y="20" textAnchor="middle" fill="#ef4444" fontSize="12">A</text>
          <text x="70" y="190" textAnchor="middle" fill="#f59e0b" fontSize="12">B</text>
          <text x="230" y="190" textAnchor="middle" fill="#f59e0b" fontSize="12">C</text>
          <text x="85" y="140" textAnchor="end" fill="#3b82f6" fontSize="12">D</text>
          <text x="260" y="100" textAnchor="start" fill="#3b82f6" fontSize="12">E</text>
          {/* Equal angle indicator */}
          <path
            d="M 160,30 Q 145,50 155,55"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
          />
          <path
            d="M 160,30 Q 175,50 165,55"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
          />
          {/* Area labels */}
          <text x="150" y="140" textAnchor="middle" fill="#f59e0b" fontSize="10">ABC</text>
          <text x="185" y="80" textAnchor="middle" fill="#3b82f6" fontSize="10">ADE</text>
        </svg>
      </div>

      <p className="text-center text-dark-400 text-sm mt-2">
        Triangles ABC (amber) and ADE (blue) have equal areas and share angle A
      </p>

      <h3 className="mt-6">Key Formula</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-lg text-dark-300 mb-2">If triangles ABC and ADE are equal with angle A common:</p>
        <p className="text-2xl text-amber-400 font-mono">
          CA : AD = EA : AB
        </p>
        <p className="text-dark-400 mt-2 text-sm">
          (Sides are reciprocally proportional, not directly proportional)
        </p>
      </div>

      <h3 className="mt-6">Understanding Reciprocal Proportion</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          In a <strong>direct proportion</strong>, we would have CA:AD = AB:AE (corresponding sides
          in the same ratio).
        </p>
        <p className="text-dark-300 mt-2">
          In a <strong>reciprocal proportion</strong>, we have CA:AD = EA:AB (the second ratio is
          inverted).
        </p>
        <p className="text-dark-300 mt-2">
          This means: as one pair of sides increases, the other pair must decrease proportionally
          to maintain equal area.
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <p>
        The proof uses the fundamental area relationship from VI.1:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Position the triangles so that CA and AD form a straight line</li>
        <li>Then EA and AB also form a straight line (by I.14)</li>
        <li>Use VI.1: triangles with same height are as their bases</li>
        <li>Apply V.7 (equal ratios to same magnitude)</li>
        <li>The ratio chain yields CA:AD = EA:AB</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold">Modern Application</h4>
        <p className="text-dark-300 mt-2">
          This proposition is fundamental to understanding how area is preserved under certain
          transformations. In coordinate geometry, if two triangles share a vertex and have equal
          areas, their other vertices satisfy a specific algebraic relationship that follows from
          this reciprocal proportion.
        </p>
      </div>
    </LessonLayout>
  );
}
