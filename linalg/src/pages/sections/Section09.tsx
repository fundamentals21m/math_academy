import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Introduction */}
      <p>
        The <strong>LU factorization</strong> expresses elimination as matrix multiplication: <InlineMath>A = LU</InlineMath>.
        Here <InlineMath>L</InlineMath> is lower triangular (from the multipliers) and <InlineMath>U</InlineMath> is upper triangular (from elimination).
      </p>

      <h2>From Elimination to Factorization</h2>

      <p>
        Elimination transforms <InlineMath>A</InlineMath> to <InlineMath>U</InlineMath>: we have <InlineMath>EA = U</InlineMath>. Solving for <InlineMath>A</InlineMath> gives <InlineMath>{`A = E^{-1}U = LU`}</InlineMath>.
      </p>

      <Definition title="LU Factorization" className="my-6">
        <p>
          If elimination on <InlineMath>A</InlineMath> requires no row exchanges, then <InlineMath>A</InlineMath> factors into:
        </p>
        <MathBlock>
          {`A = LU`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>L</InlineMath> is <strong>lower triangular</strong> with 1's on the diagonal.<br />
          <InlineMath>U</InlineMath> is <strong>upper triangular</strong> with the pivots on its diagonal.
        </p>
      </Definition>

      <h2>Where Does <InlineMath>L</InlineMath> Come From?</h2>

      <p>
        The entries of <InlineMath>L</InlineMath> are the <strong>multipliers</strong> <InlineMath>{`\\ell_{ij}`}</InlineMath> from elimination.
        Below the diagonal of <InlineMath>L</InlineMath>, entry <InlineMath>(i, j)</InlineMath> is <InlineMath>{`\\ell_{ij}`}</InlineMath>.
      </p>

      <Example title="LU Factorization Example" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 2 & 1 \\\\ 6 & 7 \\end{bmatrix} \\quad \\text{Multiplier: } \\ell_{21} = \\frac{6}{2} = 3`}
        </MathBlock>
        <MathBlock>
          {`L = \\begin{bmatrix} 1 & 0 \\\\ 3 & 1 \\end{bmatrix} \\quad U = \\begin{bmatrix} 2 & 1 \\\\ 0 & 4 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Check: <InlineMath>{`LU = \\begin{bmatrix} 2 & 1 \\\\ 6 & 7 \\end{bmatrix} = A`}</InlineMath> ✓
        </p>
      </Example>

      <h2>Solving <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> with <InlineMath>LU</InlineMath></h2>

      <p>
        Once we have <InlineMath>A = LU</InlineMath>, solving <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> becomes two triangular systems:
      </p>

      <Definition title="Two-Step Solution" className="my-6">
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Forward substitution:</strong> Solve <InlineMath>{`L\\mathbf{c} = \\mathbf{b}`}</InlineMath> for <InlineMath>{`\\mathbf{c}`}</InlineMath>.</li>
          <li><strong>Back substitution:</strong> Solve <InlineMath>{`U\\mathbf{x} = \\mathbf{c}`}</InlineMath> for <InlineMath>{`\\mathbf{x}`}</InlineMath>.</li>
        </ol>
      </Definition>

      <h2>Why Factor?</h2>

      <p>
        For a single <InlineMath>{`\\mathbf{b}`}</InlineMath>, elimination and <InlineMath>LU</InlineMath> do the same work. But if you need to solve
        <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> for <em>many different</em> <InlineMath>{`\\mathbf{b}`}</InlineMath>'s, the <InlineMath>LU</InlineMath> factorization is computed once and reused!
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">MATLAB Command</p>
        <p className="text-dark-300 font-mono text-sm">
          [L, U] = lu(A)
        </p>
        <p className="text-dark-400 text-sm mt-2">
          The command <code>x = A\b</code> uses LU factorization internally.
        </p>
      </div>

      <h2>Cost of Elimination</h2>

      <Theorem
        title="Operation Count"
        className="my-6"
        proof={
          <>
            <p>At step <InlineMath>k</InlineMath> of elimination, we work on an <InlineMath>(n-k+1) \times (n-k+1)</InlineMath> submatrix.</p>
            <p className="mt-2">The work at step <InlineMath>k</InlineMath> is approximately <InlineMath>(n-k)^2</InlineMath> operations (one multiplication and subtraction for each entry below and to the right of pivot <InlineMath>k</InlineMath>).</p>
            <p className="mt-2">Total work:</p>
            <MathBlock>{`\\sum_{k=1}^{n-1}(n-k)^2 = (n-1)^2 + (n-2)^2 + \\cdots + 1^2 = \\frac{(n-1)n(2n-1)}{6} \\approx \\frac{n^3}{3}`}</MathBlock>
            <p>For back/forward substitution: each of the <InlineMath>n</InlineMath> equations involves about <InlineMath>n</InlineMath> operations, giving <InlineMath>n^2</InlineMath> total.</p>
          </>
        }
      >
        <p>
          For an <InlineMath>n \times n</InlineMath> matrix, elimination requires approximately:
        </p>
        <MathBlock>
          {`\\frac{n^3}{3} \\text{ multiplications/subtractions (to find } L \\text{ and } U\\text{)}`}
        </MathBlock>
        <p className="mt-2">
          Each solve <InlineMath>{`L\\mathbf{c} = \\mathbf{b}`}</InlineMath> and <InlineMath>{`U\\mathbf{x} = \\mathbf{c}`}</InlineMath> requires only <InlineMath>n^2</InlineMath> operations.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>A = LU</InlineMath>: <InlineMath>L</InlineMath> is lower triangular (1's on diagonal, multipliers below), <InlineMath>U</InlineMath> is upper triangular (pivots on diagonal).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Solve <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> in two steps: <InlineMath>{`L\\mathbf{c} = \\mathbf{b}`}</InlineMath> then <InlineMath>{`U\\mathbf{x} = \\mathbf{c}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Factoring costs <InlineMath>n^3/3</InlineMath> operations; each solve costs <InlineMath>n^2</InlineMath> operations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>For many right-hand sides, factor once and solve many times.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
