import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Introduction */}
      <p>
        This chapter solves <InlineMath>n</InlineMath> equations in <InlineMath>n</InlineMath> unknowns. We start with the simplest case:
        two equations in two unknowns. The key is to understand <strong>two different pictures</strong> of what
        those equations mean.
      </p>

      <h2>The Row Picture</h2>

      <p>
        Each equation represents a <strong>line</strong> (in 2D) or a <strong>plane</strong> (in 3D) or a
        <strong>hyperplane</strong> (in higher dimensions). The solution is where the lines/planes intersect.
      </p>

      <Example title="Two Equations in Two Unknowns" className="my-6">
        <p>Consider the system:</p>
        <MathBlock>
          {`\\begin{cases} x - 2y = 1 \\\\ 3x + 2y = 11 \\end{cases}`}
        </MathBlock>
        <p className="mt-2">
          <strong>Row picture:</strong> Each equation is a line. The solution <InlineMath>(x, y) = (3, 1)</InlineMath> is
          where the two lines intersect.
        </p>
      </Example>

      <h2>The Column Picture</h2>

      <p>
        The column picture looks at the same equations in a completely different way. The left side of the
        vector equation is a <em>linear combination</em> of the columns. The problem is to find the right
        coefficients <InlineMath>x = 3</InlineMath> and <InlineMath>y = 1</InlineMath>.
      </p>

      <Definition title="Column Picture" className="my-6">
        <p>
          The equation <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> asks: what combination of the columns of <InlineMath>A</InlineMath> produces <InlineMath>{`\\mathbf{b}`}</InlineMath>?
        </p>
        <MathBlock>
          {`x \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} + y \\begin{bmatrix} -2 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 11 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          We need <InlineMath>x = 3</InlineMath> times column 1, plus <InlineMath>y = 1</InlineMath> times column 2, to get <InlineMath>{`\\mathbf{b}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Verifying the Column Picture" className="my-6">
        <MathBlock>
          {`3 \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix} + 1 \\begin{bmatrix} -2 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 9 \\end{bmatrix} + \\begin{bmatrix} -2 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 11 \\end{bmatrix} = \\mathbf{b}`}
        </MathBlock>
      </Example>

      <h2>The Matrix Form <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath></h2>

      <p>
        We combine the equations into a single matrix problem. The <strong>coefficient matrix</strong> <InlineMath>A</InlineMath> contains
        all the coefficients from the left side of the equations:
      </p>

      <Definition title="Matrix Equation" className="my-6">
        <MathBlock>
          {`A\\mathbf{x} = \\mathbf{b} \\quad \\text{is} \\quad \\begin{bmatrix} 1 & -2 \\\\ 3 & 2 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 11 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The rows of <InlineMath>A</InlineMath> give the row picture (intersecting lines). The columns of <InlineMath>A</InlineMath> give
          the column picture (combining vectors).
        </p>
      </Definition>

      <h2>Three Equations in Three Unknowns</h2>

      <p>
        The three unknowns are <InlineMath>x, y, z</InlineMath>. We have three linear equations:
      </p>

      <MathBlock className="my-4">
        {`\\begin{cases} x + 2y + 3z = 6 \\\\ 2x + 5y + 2z = 4 \\\\ 6x - 3y + z = 2 \\end{cases}`}
      </MathBlock>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-primary-500/20">
          <p className="font-semibold text-primary-400 mb-2">Row Picture</p>
          <p className="text-dark-300 text-sm">
            Three planes meeting at a single point.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
          <p className="font-semibold text-amber-400 mb-2">Column Picture</p>
          <p className="text-dark-300 text-sm">
            Combine three columns to produce <InlineMath>{`\\mathbf{b} = (6, 4, 2)`}</InlineMath>.
          </p>
        </div>
      </div>

      <h2>Looking Ahead: Key Ideas</h2>

      <p>
        This chapter will develop <strong>elimination</strong>—the systematic method to solve <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>.
        Here are the four key steps:
      </p>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ol className="space-y-3 text-dark-200 list-decimal list-inside">
          <li>
            <strong>Elimination</strong> goes from <InlineMath>A</InlineMath> to a triangular matrix <InlineMath>U</InlineMath> by a sequence
            of matrix steps <InlineMath>{`E_{ij}`}</InlineMath>.
          </li>
          <li>
            The triangular system is solved by <strong>back substitution</strong>: working bottom to top.
          </li>
          <li>
            In matrix language, <InlineMath>A</InlineMath> is factored into <InlineMath>LU = </InlineMath> (lower triangular)(upper triangular).
          </li>
          <li>
            Elimination succeeds if <InlineMath>A</InlineMath> is invertible. (But it may need row exchanges.)
          </li>
        </ol>
      </div>

      <Theorem
        title="When Does the Solution Exist?"
        className="my-6"
        proof={
          <>
            <p><strong>Case 1 (A invertible):</strong> If <InlineMath>{`A^{-1}`}</InlineMath> exists, then <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath> is the unique solution, as shown in the Existence and Uniqueness theorem.</p>
            <p className="mt-3"><strong>Case 2 (A not invertible):</strong> If <InlineMath>A</InlineMath> is singular, then <InlineMath>{`\\det(A) = 0`}</InlineMath>, meaning the columns of <InlineMath>A</InlineMath> are linearly dependent.</p>
            <p>If <InlineMath>{`\\mathbf{b}`}</InlineMath> is not in the column space of <InlineMath>A</InlineMath>, there is no solution (the system is inconsistent).</p>
            <p>If <InlineMath>{`\\mathbf{b}`}</InlineMath> is in the column space, there are infinitely many solutions because we can add any multiple of a nonzero solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          For a square matrix <InlineMath>A</InlineMath> with <InlineMath>n</InlineMath> equations in <InlineMath>n</InlineMath> unknowns:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <InlineMath>A</InlineMath> is <strong>invertible</strong>, there is exactly <strong>one solution</strong> <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath>.</li>
          <li>If <InlineMath>A</InlineMath> is <strong>not invertible</strong>, there are either <strong>no solutions</strong> or <strong>infinitely many</strong>.</li>
        </ul>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The <strong>row picture</strong> shows <InlineMath>n</InlineMath> planes meeting at a single point (the solution).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The <strong>column picture</strong> combines the columns of <InlineMath>A</InlineMath> to produce <InlineMath>{`\\mathbf{b}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The matrix equation <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> contains both pictures: rows for equations, columns for combinations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The column picture is easier to visualize in high dimensions—we combine <InlineMath>n</InlineMath> column vectors.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
