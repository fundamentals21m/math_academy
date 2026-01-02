import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      {/* Introduction */}
      <p>
        When <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has no exact solution, <strong>least squares</strong> finds the
        <InlineMath>{`\\hat{x}`}</InlineMath> that minimizes the error <InlineMath>{`\\|A\\mathbf{x} - \\mathbf{b}\\|^2`}</InlineMath>.
      </p>

      <h2>The Least Squares Problem</h2>

      <Definition title="Least Squares Solution" className="my-6">
        <p>
          The <strong>least squares solution</strong> <InlineMath>{`\\hat{x}`}</InlineMath> minimizes the sum of squared errors:
        </p>
        <MathBlock>
          {`E = \\|A\\mathbf{x} - \\mathbf{b}\\|^2 = \\sum_{i=1}^{m} (\\text{error}_i)^2`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`\\hat{x}`}</InlineMath> is found from the <strong>normal equations</strong>: <InlineMath>{`A^TA\\hat{x} = A^T\\mathbf{b}`}</InlineMath>
        </p>
      </Definition>

      <h2>Fitting a Straight Line</h2>

      <Example title="Best-Fit Line Through Data Points" className="my-6">
        <p>Fit a line <InlineMath>y = C + Dt</InlineMath> through points <InlineMath>(0,6)</InlineMath>, <InlineMath>(1,0)</InlineMath>, <InlineMath>(2,0)</InlineMath>:</p>
        <MathBlock>
          {`\\begin{aligned}
C + D(0) &= 6 \\\\
C + D(1) &= 0 \\\\
C + D(2) &= 0
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">In matrix form <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>:</p>
        <MathBlock>
          {`\\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{bmatrix}\\begin{bmatrix} C \\\\ D \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 0 \\\\ 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Three equations, two unknowns—no exact solution exists. We need least squares!
        </p>
      </Example>

      <h2>Setting Up the Normal Equations</h2>

      <Example title="Solving the Normal Equations" className="my-6">
        <MathBlock>
          {`A^TA = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\end{bmatrix}\\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{bmatrix} = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`A^T\\mathbf{b} = \\begin{bmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\end{bmatrix}\\begin{bmatrix} 6 \\\\ 0 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">Normal equations:</p>
        <MathBlock>
          {`\\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}\\begin{bmatrix} C \\\\ D \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">Solution: <InlineMath>{`\\hat{x} = (C, D) = (5, -3)`}</InlineMath></p>
        <p className="mt-2 text-primary-400">
          Best-fit line: <InlineMath>y = 5 - 3t</InlineMath>
        </p>
      </Example>

      <h2>Why Does This Work?</h2>

      <Theorem
        title="Minimizing the Error"
        className="my-6"
        proof={
          <>
            <p>Write <InlineMath>{`\\mathbf{b} = \\mathbf{p} + \\mathbf{e}`}</InlineMath> where <InlineMath>{`\\mathbf{p}`}</InlineMath> is in <InlineMath>C(A)</InlineMath> and <InlineMath>{`\\mathbf{e}`}</InlineMath> is perpendicular to <InlineMath>C(A)</InlineMath>.</p>
            <p className="mt-2">For any <InlineMath>{`\\mathbf{x}`}</InlineMath>, we have <InlineMath>{`A\\mathbf{x} \\in C(A)`}</InlineMath>. The squared error is:</p>
            <MathBlock>{`\\|A\\mathbf{x} - \\mathbf{b}\\|^2 = \\|A\\mathbf{x} - \\mathbf{p} - \\mathbf{e}\\|^2 = \\|A\\mathbf{x} - \\mathbf{p}\\|^2 + \\|\\mathbf{e}\\|^2`}</MathBlock>
            <p>The cross term vanishes because <InlineMath>{`(A\\mathbf{x} - \\mathbf{p})`}</InlineMath> is in <InlineMath>C(A)</InlineMath> and <InlineMath>{`\\mathbf{e}`}</InlineMath> is perpendicular to <InlineMath>C(A)</InlineMath>.</p>
            <p className="mt-2">Since <InlineMath>{`\\|\\mathbf{e}\\|^2`}</InlineMath> is fixed, the minimum occurs when <InlineMath>{`A\\mathbf{x} = \\mathbf{p}`}</InlineMath>. At this point, <InlineMath>{`A\\mathbf{x} - \\mathbf{b} = -\\mathbf{e}`}</InlineMath> is perpendicular to <InlineMath>C(A)</InlineMath>.</p>
          </>
        }
      >
        <p>
          The error <InlineMath>{`E = \\|A\\mathbf{x} - \\mathbf{b}\\|^2`}</InlineMath> is minimized when
          <InlineMath>{`A\\mathbf{x} - \\mathbf{b}`}</InlineMath> is perpendicular to the column space of <InlineMath>A</InlineMath>.
        </p>
        <p className="mt-2">
          This perpendicularity condition is exactly: <InlineMath>{`A^T(A\\mathbf{x} - \\mathbf{b}) = \\mathbf{0}`}</InlineMath>
        </p>
        <p className="mt-2">
          Rearranging: <InlineMath>{`A^TA\\mathbf{x} = A^T\\mathbf{b}`}</InlineMath>
        </p>
      </Theorem>

      <h2>Computing the Error</h2>

      <Example title="The Minimum Error" className="my-6">
        <p>With <InlineMath>{`\\hat{x} = (5, -3)`}</InlineMath>:</p>
        <MathBlock>
          {`\\mathbf{p} = A\\hat{x} = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{bmatrix}\\begin{bmatrix} 5 \\\\ -3 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 2 \\\\ -1 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`\\mathbf{e} = \\mathbf{b} - \\mathbf{p} = \\begin{bmatrix} 6 \\\\ 0 \\\\ 0 \\end{bmatrix} - \\begin{bmatrix} 5 \\\\ 2 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -2 \\\\ 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Minimum error: <InlineMath>{`E = \\|\\mathbf{e}\\|^2 = 1 + 4 + 1 = 6`}</InlineMath>
        </p>
      </Example>

      <h2>When Is <InlineMath>A^TA</InlineMath> Invertible?</h2>

      <Theorem
        title="Invertibility of A^T A"
        className="my-6"
        proof={
          <>
            <p>We show <InlineMath>A^TA</InlineMath> is invertible by proving its nullspace is trivial.</p>
            <p className="mt-2">Suppose <InlineMath>{`A^TA\\mathbf{x} = \\mathbf{0}`}</InlineMath>. Multiply both sides by <InlineMath>{`\\mathbf{x}^T`}</InlineMath>:</p>
            <MathBlock>{`\\mathbf{x}^TA^TA\\mathbf{x} = 0 \\quad \\Rightarrow \\quad (A\\mathbf{x})^T(A\\mathbf{x}) = 0 \\quad \\Rightarrow \\quad \\|A\\mathbf{x}\\|^2 = 0`}</MathBlock>
            <p>So <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>. If <InlineMath>A</InlineMath> has independent columns, then <InlineMath>{`\\mathbf{x} = \\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2">Therefore <InlineMath>{`N(A^TA) = \\{\\mathbf{0}\\}`}</InlineMath>, so <InlineMath>A^TA</InlineMath> is invertible.</p>
            <p className="mt-2">Note: This also shows <InlineMath>N(A^TA) = N(A)</InlineMath> for any matrix <InlineMath>A</InlineMath>.</p>
          </>
        }
      >
        <p>
          <InlineMath>A^TA</InlineMath> is invertible when <InlineMath>A</InlineMath> has <strong>independent columns</strong>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <InlineMath>A</InlineMath> has rank <InlineMath>n</InlineMath> (full column rank), then <InlineMath>A^TA</InlineMath> is <InlineMath>n \times n</InlineMath> and invertible.</li>
          <li>The nullspace of <InlineMath>A</InlineMath> is <InlineMath>{`\\mathbf{Z}`}</InlineMath> (only zero).</li>
          <li>The least squares solution <InlineMath>{`\\hat{x}`}</InlineMath> is unique.</li>
        </ul>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Least squares solves <InlineMath>{`A^TA\\hat{x} = A^T\\mathbf{b}`}</InlineMath> when <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has no solution.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The solution <InlineMath>{`\\hat{x}`}</InlineMath> minimizes <InlineMath>{`E = \\|A\\mathbf{x} - \\mathbf{b}\\|^2`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>{`\\mathbf{p} = A\\hat{x}`}</InlineMath> is the projection of <InlineMath>{`\\mathbf{b}`}</InlineMath> onto the column space of <InlineMath>A</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The error <InlineMath>{`\\mathbf{e} = \\mathbf{b} - \\mathbf{p}`}</InlineMath> is perpendicular to the column space.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span><InlineMath>A^TA</InlineMath> is invertible when <InlineMath>A</InlineMath> has independent columns.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
