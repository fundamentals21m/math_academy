import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      {/* Introduction */}
      <p>
        <strong>Linear programming</strong> optimizes a linear objective function subject to linear
        constraints. It's one of the most successful applications of linear algebra in business,
        logistics, and operations research.
      </p>

      <h2>The Linear Programming Problem</h2>

      <Definition title="Standard Form" className="my-6">
        <p>
          <strong>Minimize</strong> (or maximize) a linear function:
        </p>
        <MathBlock>
          {`\\min \\mathbf{c}^T\\mathbf{x}`}
        </MathBlock>
        <p className="mt-2">subject to:</p>
        <MathBlock>
          {`A\\mathbf{x} = \\mathbf{b}, \\quad \\mathbf{x} \\geq \\mathbf{0}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`\\mathbf{c}`}</InlineMath> = cost vector, <InlineMath>A</InlineMath> = constraint matrix, <InlineMath>{`\\mathbf{b}`}</InlineMath> = requirements.
        </p>
      </Definition>

      <Example title="Production Planning" className="my-6">
        <p>
          A factory makes products A and B. Maximize profit subject to resource constraints:
        </p>
        <MathBlock>
          {`\\max 3x_1 + 5x_2`}
        </MathBlock>
        <MathBlock>
          {`\\text{subject to: } x_1 \\leq 4, \\quad 2x_2 \\leq 12, \\quad 3x_1 + 2x_2 \\leq 18`}
        </MathBlock>
        <p className="mt-2">
          Optimal solution is at a vertex of the feasible region.
        </p>
      </Example>

      <h2>Geometry of Linear Programming</h2>

      <Theorem
        title="Fundamental Theorem of LP"
        className="my-6"
        proof={
          <>
            <p><strong>Convexity:</strong> The constraints <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> and <InlineMath>{`\\mathbf{x} \\geq \\mathbf{0}`}</InlineMath> define an intersection of half-spaces, which is convex.</p>
            <p className="mt-2"><strong>Optimum at vertex:</strong> Suppose <InlineMath>{`\\mathbf{x}^*`}</InlineMath> is optimal but not a vertex. Then <InlineMath>{`\\mathbf{x}^* = \\alpha \\mathbf{y} + (1-\\alpha)\\mathbf{z}`}</InlineMath> for feasible <InlineMath>{`\\mathbf{y}, \\mathbf{z}`}</InlineMath>.</p>
            <p className="mt-2">The objective value <InlineMath>{`\\mathbf{c}^T\\mathbf{x}^* = \\alpha \\mathbf{c}^T\\mathbf{y} + (1-\\alpha)\\mathbf{c}^T\\mathbf{z}`}</InlineMath>.</p>
            <p className="mt-2">If <InlineMath>{`\\mathbf{x}^*`}</InlineMath> is optimal, both <InlineMath>{`\\mathbf{y}`}</InlineMath> and <InlineMath>{`\\mathbf{z}`}</InlineMath> must also be optimal (otherwise we could improve). Continue until we reach a vertex.</p>
            <p className="mt-2"><strong>Vertex = basic solution:</strong> A vertex is an extreme point where <InlineMath>n - m</InlineMath> variables are zero (the basic structure).</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li>The <strong>feasible region</strong> (set of valid <InlineMath>{`\\mathbf{x}`}</InlineMath>) is a convex polyhedron</li>
          <li>If an optimal solution exists, it occurs at a <strong>vertex</strong> (corner)</li>
          <li>A vertex corresponds to a <strong>basic feasible solution</strong></li>
        </ul>
      </Theorem>

      <Definition title="Basic Feasible Solution" className="my-6">
        <p>
          For <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> with <InlineMath>A</InlineMath> being <InlineMath>m \times n</InlineMath> (<InlineMath>m &lt; n</InlineMath>):
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Choose <InlineMath>m</InlineMath> columns of <InlineMath>A</InlineMath> to form basis <InlineMath>B</InlineMath></li>
          <li>Set remaining variables to zero</li>
          <li>Solve <InlineMath>{`B\\mathbf{x}_B = \\mathbf{b}`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          <strong>Basic:</strong> <InlineMath>m</InlineMath> variables nonzero. <strong>Feasible:</strong> <InlineMath>{`\\mathbf{x} \\geq 0`}</InlineMath>.
        </p>
      </Definition>

      <h2>The Simplex Method</h2>

      <Theorem
        title="Simplex Algorithm"
        className="my-6"
        proof={
          <>
            <p><strong>Correctness:</strong> At each step, we check if the current solution is optimal by examining the reduced costs.</p>
            <p className="mt-2">If all reduced costs <InlineMath>{`\\bar{c}_j \\geq 0`}</InlineMath> for a minimization problem, we're at an optimum.</p>
            <p className="mt-2"><strong>Progress:</strong> Each pivot moves to an adjacent vertex. The objective strictly improves (assuming non-degeneracy).</p>
            <p className="mt-2"><strong>Termination:</strong> There are finitely many vertices (at most <InlineMath>{`\\binom{n}{m}`}</InlineMath>). Since we never revisit a vertex (objective improves), the algorithm terminates.</p>
            <p className="mt-2"><strong>Adjacent vertices:</strong> Two vertices are adjacent if they share <InlineMath>m-1</InlineMath> basic variables. Moving between them = one variable enters, one leaves.</p>
          </>
        }
      >
        <p>The <strong>simplex method</strong> solves LP by:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Start at a basic feasible solution (vertex)</li>
          <li>Move to an adjacent vertex with better objective value</li>
          <li>Repeat until no improvement possible (optimum found)</li>
        </ol>
        <p className="mt-2 text-primary-400">
          Each step: one variable enters the basis, one leaves.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Simplex Efficiency</p>
        <p className="text-dark-300 text-sm">
          Despite worst-case exponential complexity, simplex is fast in practice.
          Modern variants (interior point methods) guarantee polynomial time.
        </p>
      </div>

      <h2>Duality</h2>

      <Theorem
        title="Dual Problem"
        className="my-6"
        proof={
          <>
            <p><strong>Weak duality:</strong> For any feasible <InlineMath>{`\\mathbf{x}`}</InlineMath> (primal) and <InlineMath>{`\\mathbf{y}`}</InlineMath> (dual):</p>
            <MathBlock>{`\\mathbf{c}^T\\mathbf{x} \\geq \\mathbf{y}^T A \\mathbf{x} \\geq \\mathbf{y}^T \\mathbf{b} = \\mathbf{b}^T\\mathbf{y}`}</MathBlock>
            <p className="mt-2">The first inequality uses <InlineMath>{`A^T\\mathbf{y} \\leq \\mathbf{c}`}</InlineMath>; the second uses <InlineMath>{`A\\mathbf{x} \\geq \\mathbf{b}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Strong duality:</strong> At optimality, the KKT conditions give <InlineMath>{`\\mathbf{c}^T\\mathbf{x}^* = \\mathbf{b}^T\\mathbf{y}^*`}</InlineMath>.</p>
            <p className="mt-2">The gap closes because complementary slackness holds: if a constraint is not tight, the corresponding dual variable is zero.</p>
          </>
        }
      >
        <p>
          Every LP (<strong>primal</strong>) has a <strong>dual</strong>:
        </p>
        <MathBlock>
          {`\\text{Primal: } \\min \\mathbf{c}^T\\mathbf{x} \\text{ s.t. } A\\mathbf{x} \\geq \\mathbf{b}, \\mathbf{x} \\geq 0`}
        </MathBlock>
        <MathBlock>
          {`\\text{Dual: } \\max \\mathbf{b}^T\\mathbf{y} \\text{ s.t. } A^T\\mathbf{y} \\leq \\mathbf{c}, \\mathbf{y} \\geq 0`}
        </MathBlock>
        <p className="mt-2">
          <strong>Strong duality:</strong> At optimum, primal objective = dual objective.
        </p>
      </Theorem>

      <h2>Applications</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">LP Applications</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>Transportation:</strong> Minimize shipping costs</li>
          <li><strong>Diet problem:</strong> Minimize cost meeting nutrition requirements</li>
          <li><strong>Scheduling:</strong> Airline crew scheduling</li>
          <li><strong>Network flow:</strong> Maximum flow, minimum cost flow</li>
          <li><strong>Portfolio optimization:</strong> Minimize risk for given return</li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>LP: minimize <InlineMath>{`\\mathbf{c}^T\\mathbf{x}`}</InlineMath> subject to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>, <InlineMath>{`\\mathbf{x} \\geq 0`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Optimal solution is at a vertex of the feasible polyhedron.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Simplex method: move from vertex to vertex improving objective.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Duality: primal min = dual max at optimum.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Applications: transportation, scheduling, network flow, portfolio.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
