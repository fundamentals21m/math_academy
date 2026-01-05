import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section171() {
  return (
    <LessonLayout sectionId={171}>
      <Proposition
        title="Proposition VI.26"
        proof={
          <>
            <p>
              From the parallelogram <em>ABCD</em> let there be taken away the parallelogram{' '}
              <em>AF</em> similar and similarly situated to <em>ABCD</em> and having the angle{' '}
              <em>DAB</em> common with it.
            </p>
            <p className="mt-2">
              I say that <em>AF</em> is about the same diameter with the whole <em>ABCD</em>.
            </p>
            <p className="mt-2">
              For suppose it is not, but, if possible, let <em>AHC</em> be the diameter [of{' '}
              <em>ABCD</em>], let <em>GF</em> be produced and carried through to <em>H</em>, and
              let <em>HK</em> be drawn through <em>H</em> parallel to either of the straight lines{' '}
              <em>AD</em>, <em>BC</em>. [I.31]
            </p>
            <p className="mt-2">
              Since, then, <em>ABCD</em> is about the same diameter with <em>KG</em>, therefore,
              as <em>DA</em> is to <em>AB</em>, so is <em>GA</em> to <em>AK</em>. [VI.24]
            </p>
            <p className="mt-2">
              But also, because of the similarity of <em>ABCD</em>, <em>EG</em>, as <em>DA</em> is
              to <em>AB</em>, so is <em>GA</em> to <em>AE</em>; [VI. Def. 1]
            </p>
            <p className="mt-2">
              therefore also, as <em>GA</em> is to <em>AK</em>, so is <em>GA</em> to <em>AE</em>.
              [V.11]
            </p>
            <p className="mt-2">
              Therefore <em>GA</em> has the same ratio to each of the straight lines <em>AK</em>,{' '}
              <em>AE</em>.
            </p>
            <p className="mt-2">
              Therefore <em>AE</em> is equal to <em>AK</em> [V.9], the less to the greater: which
              is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>ABCD</em> cannot but be about the same diameter with <em>AF</em>.
              Therefore the parallelogram <em>AF</em> is about the same diameter with the
              parallelogram <em>ABCD</em>.
            </p>
          </>
        }
      >
        <p>
          If from a parallelogram there be taken away a parallelogram similar and similarly
          situated to the whole and having a common angle with it, it is about the same diameter
          with the whole.
        </p>
      </Proposition>

      <h2>The Converse of VI.24</h2>

      <p>
        This proposition is the converse of VI.24. Where VI.24 showed that parallelograms about
        the diagonal are similar to the whole, VI.26 shows that any similar parallelogram sharing
        a common angle must lie along the diagonal.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 240" className="w-full max-w-md">
          {/* Main parallelogram ABCD */}
          <polygon
            points="40,200 280,200 230,50 40,50"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />

          {/* Diagonal AC */}
          <line x1="40" y1="200" x2="230" y2="50" stroke="#ef4444" strokeWidth="2" />

          {/* Similar parallelogram AF (about the diagonal) */}
          <polygon
            points="40,200 150,200 130,125 40,125"
            fill="rgba(59, 130, 246, 0.2)"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* Point where AF meets diagonal */}
          <circle cx="100" cy="150" r="4" fill="#22c55e" />

          {/* Vertex labels */}
          <text x="25" y="210" fill="#f59e0b" fontSize="11">A</text>
          <text x="280" y="210" fill="#f59e0b" fontSize="11">B</text>
          <text x="235" y="45" fill="#f59e0b" fontSize="11">C</text>
          <text x="25" y="45" fill="#f59e0b" fontSize="11">D</text>

          {/* Interior labels */}
          <text x="75" y="175" fill="#3b82f6" fontSize="10">AF</text>
          <text x="155" y="135" fill="#f59e0b" fontSize="10">ABCD</text>

          {/* Legend */}
          <text x="250" y="100" fill="#94a3b8" fontSize="9">AF similar to ABCD</text>
          <text x="250" y="115" fill="#94a3b8" fontSize="9">Common angle at A</text>
          <text x="250" y="130" fill="#ef4444" fontSize="9">Must share diagonal</text>
        </svg>
      </div>

      <h3>Understanding the Statement</h3>

      <p>
        Given parallelogram ABCD and a smaller parallelogram AF that:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
        <li>Is similar to ABCD (same angles, proportional sides)</li>
        <li>Is similarly situated (same orientation)</li>
        <li>Shares the corner angle at A</li>
      </ul>
      <p className="mt-2">
        Then the parallelogram AF must be "about the diagonal" - meaning the diagonal of ABCD
        passes through the opposite corner of AF.
      </p>

      <h3 className="mt-6">The Proof by Contradiction</h3>

      <p>
        Euclid proves this by assuming the opposite: suppose AF is NOT about the diagonal AHC.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          1. If the diagonal doesn't pass through the corner of AF, construct parallelogram KG
          that IS about the diagonal
        </p>
        <p className="text-dark-300 mb-2">
          2. By VI.24, KG is similar to ABCD, so DA : AB = GA : AK
        </p>
        <p className="text-dark-300 mb-2">
          3. By assumption, AF is similar to ABCD, so DA : AB = GA : AE
        </p>
        <p className="text-dark-300 mb-2">
          4. Therefore GA : AK = GA : AE (by V.11)
        </p>
        <p className="text-amber-400">
          5. This forces AE = AK (by V.9), but E and K are different points - contradiction!
        </p>
      </div>

      <h3 className="mt-6">Visual Intuition</h3>

      <p>
        The diagonal of a parallelogram determines a unique "similarity direction" - all similar
        parallelograms with the same orientation and sharing the corner must have their opposite
        corners along this line. Any deviation would change the side ratios and break similarity.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallel lines)</li>
        <li>Proposition V.9 (equal ratios imply equal magnitudes)</li>
        <li>Proposition V.11 (transitivity of proportions)</li>
        <li>Proposition VI.24 (parallelograms about the diagonal are similar)</li>
        <li>Definition VI.1 (definition of similar figures)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Geometric Constraint:</strong> This proposition
          reveals a rigid constraint on similar parallelograms: once you fix one corner and
          require similarity with the same orientation, the position of the opposite corner is
          completely determined by the diagonal. There is exactly one such parallelogram for
          each position along the diagonal.
        </p>
      </div>
    </LessonLayout>
  );
}
