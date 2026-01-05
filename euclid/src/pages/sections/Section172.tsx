import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section172() {
  return (
    <LessonLayout sectionId={172}>
      <Proposition
        title="Proposition VI.27"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line, let it be bisected at <em>C</em>, and
              let the parallelogram <em>AD</em> be applied to the straight line <em>AB</em>{' '}
              deficient by a parallelogrammic figure <em>DB</em> described on the half of <em>AB</em>,
              that is, <em>CB</em>.
            </p>
            <p className="mt-2">
              I say that, of all the parallelograms applied to <em>AB</em> and deficient by
              parallelogrammic figures similar and similarly situated to <em>DB</em>, <em>AD</em>{' '}
              is greatest.
            </p>
            <p className="mt-2">
              For let there be applied to the straight line <em>AB</em> the parallelogram{' '}
              <em>AF</em> deficient by the parallelogrammic figure <em>FB</em> similar and
              similarly situated to <em>DB</em>.
            </p>
            <p className="mt-2">
              I say that <em>AD</em> is greater than <em>AF</em>.
            </p>
            <p className="mt-2">
              For, since the parallelogram <em>DB</em> is similar to the parallelogram <em>FB</em>,
              they are about the same diameter. [VI.26]
            </p>
            <p className="mt-2">
              Let their diameter <em>DB</em> be drawn, and let the figure be described.
            </p>
            <p className="mt-2">
              Then, since <em>CF</em> is equal to <em>FE</em> [I.43], and <em>FB</em> is common,
              therefore the whole <em>CH</em> is equal to the whole <em>KE</em>.
            </p>
            <p className="mt-2">
              But <em>CH</em> is equal to <em>CG</em>, since <em>AC</em> is also equal to{' '}
              <em>CB</em>. [I.36]
            </p>
            <p className="mt-2">
              Therefore <em>GC</em> is also equal to <em>EK</em>.
            </p>
            <p className="mt-2">
              Let <em>CF</em> be added to each; therefore the gnomon <em>LMN</em> is equal to the
              parallelogram <em>CE</em>.
            </p>
            <p className="mt-2">
              But <em>CE</em> is equal to <em>AD</em>. [I.36]
            </p>
            <p className="mt-2 font-medium">
              Therefore the gnomon <em>LMN</em> is also equal to <em>AD</em>. Therefore <em>AD</em>{' '}
              is greater than <em>AF</em>.
            </p>
          </>
        }
      >
        <p>
          Of all the parallelograms applied to the same straight line and deficient by
          parallelogrammic figures similar and similarly situated to that described on the half
          of the straight line, that parallelogram is greatest which is applied to the half of
          the straight line and is similar to the defect.
        </p>
      </Proposition>

      <h2>An Optimization Problem</h2>

      <p>
        This proposition solves an ancient optimization problem: among all parallelograms applied
        to a line with similar defects, which has the largest area? The answer: the one applied
        to the half-line, where the defect is on the other half.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-lg">
          {/* Base line AB */}
          <line x1="40" y1="150" x2="360" y2="150" stroke="#f59e0b" strokeWidth="2" />
          <text x="35" y="170" fill="#f59e0b" fontSize="11">A</text>
          <text x="355" y="170" fill="#f59e0b" fontSize="11">B</text>

          {/* Midpoint C */}
          <circle cx="200" cy="150" r="3" fill="#ef4444" />
          <text x="195" y="170" fill="#ef4444" fontSize="11">C</text>

          {/* Optimal parallelogram AD (on first half) */}
          <polygon
            points="40,150 200,150 200,70 40,70"
            fill="rgba(34, 197, 94, 0.2)"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <text x="110" y="115" fill="#22c55e" fontSize="11">AD</text>
          <text x="100" y="130" fill="#22c55e" fontSize="9">(maximum)</text>

          {/* Defect DB (on second half) */}
          <polygon
            points="200,150 360,150 360,70 200,70"
            fill="rgba(59, 130, 246, 0.15)"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5"
          />
          <text x="270" y="115" fill="#3b82f6" fontSize="11">DB</text>
          <text x="260" y="130" fill="#3b82f6" fontSize="9">(defect)</text>

          {/* Smaller example AF below */}
          <g transform="translate(0, 50)">
            <line x1="40" y1="150" x2="360" y2="150" stroke="#94a3b8" strokeWidth="1" />

            {/* Smaller parallelogram AF */}
            <polygon
              points="40,150 150,150 150,110 40,110"
              fill="rgba(168, 85, 247, 0.15)"
              stroke="#a855f7"
              strokeWidth="1.5"
            />
            <text x="85" y="135" fill="#a855f7" fontSize="9">AF (smaller)</text>

            {/* Larger defect FB */}
            <polygon
              points="150,150 360,150 360,70 150,70"
              fill="rgba(94, 234, 212, 0.1)"
              stroke="#5eead4"
              strokeWidth="1.5"
              strokeDasharray="4"
            />
            <text x="240" y="115" fill="#5eead4" fontSize="9">FB (defect)</text>
          </g>
        </svg>
      </div>

      <h3>What Does "Applied with Defect" Mean?</h3>

      <p>
        "Applying a parallelogram to a line with defect" means constructing a parallelogram
        along part of the line, where the remaining part of the line forms the base of another
        parallelogram (the "defect"). The applied parallelogram plus the defect together span
        the entire line.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          <strong className="text-amber-400">Applied parallelogram:</strong> Sits on the first
          part of line AB
        </p>
        <p className="text-dark-300 mb-2">
          <strong className="text-amber-400">Defect:</strong> Parallelogram on the remaining
          part of AB
        </p>
        <p className="text-dark-300">
          <strong className="text-amber-400">Constraint:</strong> All defects must be similar
          to the one on CB (the half-line)
        </p>
      </div>

      <h3 className="mt-6">Why the Half-Line is Optimal</h3>

      <p>
        The proof uses the gnomon - the L-shaped region that remains when a similar parallelogram
        is removed from a larger one. When the dividing point is at the midpoint:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>The complements CF and FE are equal (by I.43)</li>
        <li>The half-parallelograms CG and CH are equal (by I.36, since AC = CB)</li>
        <li>This symmetry maximizes the applied parallelogram AD</li>
      </ul>

      <p className="mt-4">
        For any other position of the dividing point, the gnomon (AD minus AF) is positive,
        proving AD is larger.
      </p>

      <h3 className="mt-6">Modern Analogy</h3>

      <p>
        This is related to the optimization problem: given a fixed perimeter, which rectangle
        has maximum area? The answer is a square (equal sides). Here, the constraint is on the
        total line length and similarity of defects, and the optimum occurs at the symmetric
        midpoint division.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.36 (parallelograms on equal bases with same height)</li>
        <li>Proposition I.43 (complements about the diagonal are equal)</li>
        <li>Proposition VI.26 (similar parallelograms share a diagonal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Optimization Principle:</strong> This proposition
          represents one of the earliest optimization results in mathematics. The symmetric
          solution (midpoint) being optimal foreshadows the calculus-based optimization methods
          developed two millennia later, where symmetric critical points often yield extrema.
        </p>
      </div>
    </LessonLayout>
  );
}
