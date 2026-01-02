import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      {/* Introduction */}
      <p>
        Every matrix <InlineMath>A</InlineMath> has <strong>four fundamental subspaces</strong>. Understanding their dimensions
        and relationships is the heart of linear algebra.
      </p>

      <h2>The Four Subspaces</h2>

      <Definition title="The Four Fundamental Subspaces" className="my-6">
        <p>For an <InlineMath>m \times n</InlineMath> matrix <InlineMath>A</InlineMath> with rank <InlineMath>r</InlineMath>:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-900/50 p-4 rounded-lg border border-primary-500/30">
            <p className="text-primary-400 font-semibold">Column Space <InlineMath>C(A)</InlineMath></p>
            <p className="text-sm text-dark-300">All <InlineMath>{`A\\mathbf{x}`}</InlineMath></p>
            <p className="text-sm text-dark-400">In <InlineMath>{`\\mathbf{R}^m`}</InlineMath>, dimension <InlineMath>r</InlineMath></p>
          </div>
          <div className="bg-dark-900/50 p-4 rounded-lg border border-amber-500/30">
            <p className="text-amber-400 font-semibold">Row Space <InlineMath>C(A^T)</InlineMath></p>
            <p className="text-sm text-dark-300">All <InlineMath>{`A^T\\mathbf{y}`}</InlineMath></p>
            <p className="text-sm text-dark-400">In <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, dimension <InlineMath>r</InlineMath></p>
          </div>
          <div className="bg-dark-900/50 p-4 rounded-lg border border-emerald-500/30">
            <p className="text-emerald-400 font-semibold">Nullspace <InlineMath>N(A)</InlineMath></p>
            <p className="text-sm text-dark-300">All <InlineMath>{`\\mathbf{x}`}</InlineMath> with <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath></p>
            <p className="text-sm text-dark-400">In <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, dimension <InlineMath>n - r</InlineMath></p>
          </div>
          <div className="bg-dark-900/50 p-4 rounded-lg border border-cyan-500/30">
            <p className="text-cyan-400 font-semibold">Left Nullspace <InlineMath>N(A^T)</InlineMath></p>
            <p className="text-sm text-dark-300">All <InlineMath>{`\\mathbf{y}`}</InlineMath> with <InlineMath>{`A^T\\mathbf{y} = \\mathbf{0}`}</InlineMath></p>
            <p className="text-sm text-dark-400">In <InlineMath>{`\\mathbf{R}^m`}</InlineMath>, dimension <InlineMath>m - r</InlineMath></p>
          </div>
        </div>
      </Definition>

      <h2>The Big Picture</h2>

      <div className="bg-gradient-to-r from-primary-500/10 via-dark-800/50 to-amber-500/10 rounded-xl p-6 my-6 border border-primary-500/20">
        <p className="text-center text-lg font-semibold mb-4">The Fundamental Theorem of Linear Algebra</p>
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          <div className="text-center">
            <p className="text-primary-400 font-semibold"><InlineMath>{`\\mathbf{R}^n`}</InlineMath></p>
            <p className="text-sm">Row space: dim <InlineMath>r</InlineMath></p>
            <p className="text-sm">Nullspace: dim <InlineMath>n - r</InlineMath></p>
          </div>
          <div className="text-2xl">→</div>
          <div className="text-center">
            <p className="text-amber-400 font-semibold"><InlineMath>{`\\mathbf{R}^m`}</InlineMath></p>
            <p className="text-sm">Column space: dim <InlineMath>r</InlineMath></p>
            <p className="text-sm">Left nullspace: dim <InlineMath>m - r</InlineMath></p>
          </div>
        </div>
      </div>

      <Theorem
        title="Dimension Formulas"
        className="my-6"
        proof={
          <>
            <p><strong><InlineMath>{`\\dim C(A) = r`}</InlineMath>:</strong> The pivot columns are a basis for <InlineMath>C(A)</InlineMath>. There are <InlineMath>r</InlineMath> pivots.</p>
            <p className="mt-2"><strong><InlineMath>{`\\dim C(A^T) = r`}</InlineMath>:</strong> The nonzero rows of <InlineMath>R</InlineMath> are a basis for the row space. There are <InlineMath>r</InlineMath> nonzero rows (one per pivot).</p>
            <p className="mt-2"><strong><InlineMath>{`\\dim N(A) = n - r`}</InlineMath>:</strong> There are <InlineMath>n - r</InlineMath> free variables, each giving one special solution. These <InlineMath>n - r</InlineMath> special solutions are independent and span the nullspace.</p>
            <p className="mt-2"><strong><InlineMath>{`\\dim N(A^T) = m - r`}</InlineMath>:</strong> Apply the nullspace formula to <InlineMath>A^T</InlineMath>: this is an <InlineMath>n \times m</InlineMath> matrix with rank <InlineMath>r</InlineMath>, so <InlineMath>{`\\dim N(A^T) = m - r`}</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>\dim C(A) = \dim C(A^T) = r</InlineMath> (the rank)</li>
          <li><InlineMath>\dim N(A) = n - r</InlineMath></li>
          <li><InlineMath>\dim N(A^T) = m - r</InlineMath></li>
          <li><InlineMath>r + (n - r) = n</InlineMath> and <InlineMath>r + (m - r) = m</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Finding Bases for the Four Subspaces</h2>

      <Example title="Complete Example" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 3 & 5 & 0 & 7 \\\\ 0 & 0 & 0 & 1 & 2 \\\\ 1 & 3 & 5 & 1 & 9 \\end{bmatrix} \\rightarrow R = \\begin{bmatrix} 1 & 3 & 5 & 0 & 7 \\\\ 0 & 0 & 0 & 1 & 2 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Rank <InlineMath>r = 2</InlineMath>. Size is <InlineMath>3 \times 5</InlineMath> (<InlineMath>m = 3</InlineMath>, <InlineMath>n = 5</InlineMath>).
        </p>
      </Example>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-primary-500/20">
          <p className="font-semibold text-primary-400 mb-2">1. Column Space <InlineMath>C(A)</InlineMath></p>
          <p className="text-dark-300 text-sm">
            Basis: pivot columns of <InlineMath>A</InlineMath> (columns 1 and 4)<br />
            Dimension: <InlineMath>r = 2</InlineMath>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
          <p className="font-semibold text-amber-400 mb-2">2. Row Space <InlineMath>C(A^T)</InlineMath></p>
          <p className="text-dark-300 text-sm">
            Basis: nonzero rows of <InlineMath>R</InlineMath><br />
            Dimension: <InlineMath>r = 2</InlineMath>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-emerald-500/20">
          <p className="font-semibold text-emerald-400 mb-2">3. Nullspace <InlineMath>N(A)</InlineMath></p>
          <p className="text-dark-300 text-sm">
            Basis: special solutions from free variables (columns 2, 3, 5)<br />
            Dimension: <InlineMath>n - r = 5 - 2 = 3</InlineMath>
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-cyan-500/20">
          <p className="font-semibold text-cyan-400 mb-2">4. Left Nullspace <InlineMath>N(A^T)</InlineMath></p>
          <p className="text-dark-300 text-sm">
            Basis: from row operations that produce zero rows<br />
            Dimension: <InlineMath>m - r = 3 - 2 = 1</InlineMath>
          </p>
        </div>
      </div>

      <Theorem
        title="The Rank Theorem"
        className="my-6"
        proof={
          <>
            <p>Row reduction preserves the row space (each new row is a combination of previous rows). The row space of <InlineMath>R</InlineMath> equals the row space of <InlineMath>A</InlineMath>.</p>
            <p className="mt-2">In <InlineMath>R</InlineMath>, the <InlineMath>r</InlineMath> nonzero rows are clearly independent (each has a leading 1 in a different column). So <InlineMath>{`\\dim C(A^T) = r`}</InlineMath>.</p>
            <p className="mt-2">The pivot columns of <InlineMath>A</InlineMath> form a basis for <InlineMath>C(A)</InlineMath>, so <InlineMath>{`\\dim C(A) = r`}</InlineMath>.</p>
            <p className="mt-2">Both dimensions equal <InlineMath>r</InlineMath>, the number of pivots.</p>
          </>
        }
      >
        <p>
          <strong>Column rank = Row rank</strong>. The number of independent columns equals the number
          of independent rows.
        </p>
        <MathBlock>
          {`\\dim C(A) = \\dim C(A^T) = r`}
        </MathBlock>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The four subspaces of <InlineMath>A</InlineMath>: <InlineMath>C(A)</InlineMath>, <InlineMath>N(A)</InlineMath>, <InlineMath>C(A^T)</InlineMath>, <InlineMath>N(A^T)</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>C(A)</InlineMath> and <InlineMath>C(A^T)</InlineMath> both have dimension <InlineMath>r</InlineMath> (column rank = row rank).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>N(A)</InlineMath> has dimension <InlineMath>n - r</InlineMath>; <InlineMath>N(A^T)</InlineMath> has dimension <InlineMath>m - r</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Basis for <InlineMath>C(A)</InlineMath>: pivot columns of <InlineMath>A</InlineMath>. Basis for <InlineMath>C(A^T)</InlineMath>: nonzero rows of <InlineMath>R</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The dimensions always satisfy <InlineMath>r + (n-r) = n</InlineMath> and <InlineMath>r + (m-r) = m</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
