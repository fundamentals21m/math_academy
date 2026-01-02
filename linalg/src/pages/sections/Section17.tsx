import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      {/* Introduction */}
      <p>
        When <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has no solution, the best we can do is <strong>project</strong>
        <InlineMath>{`\\mathbf{b}`}</InlineMath> onto the column space. Projections are the key to least squares.
      </p>

      <h2>Projection onto a Line</h2>

      <Definition title="Projection onto a Vector" className="my-6">
        <p>
          The projection of <InlineMath>{`\\mathbf{b}`}</InlineMath> onto the line through <InlineMath>{`\\mathbf{a}`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\mathbf{p} = \\frac{\\mathbf{a}^T\\mathbf{b}}{\\mathbf{a}^T\\mathbf{a}}\\mathbf{a}`}
        </MathBlock>
        <p className="mt-2">
          The <strong>error</strong> <InlineMath>{`\\mathbf{e} = \\mathbf{b} - \\mathbf{p}`}</InlineMath> is perpendicular to <InlineMath>{`\\mathbf{a}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Project b onto a" className="my-6">
        <MathBlock>
          {`\\mathbf{a} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\quad \\mathbf{b} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`\\mathbf{p} = \\frac{\\mathbf{a}^T\\mathbf{b}}{\\mathbf{a}^T\\mathbf{a}}\\mathbf{a} = \\frac{1+2+3}{1+1+1}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\frac{6}{3}\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 2 \\\\ 2 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>The Projection Matrix</h2>

      <Definition title="Projection Matrix P (onto a line)" className="my-6">
        <p>
          The projection onto the line through <InlineMath>{`\\mathbf{a}`}</InlineMath> is <InlineMath>{`\\mathbf{p} = P\\mathbf{b}`}</InlineMath>, where:
        </p>
        <MathBlock>
          {`P = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}`}
        </MathBlock>
        <p className="mt-2 text-amber-400">
          Note: <InlineMath>{`\\mathbf{a}\\mathbf{a}^T`}</InlineMath> is a matrix, <InlineMath>{`\\mathbf{a}^T\\mathbf{a}`}</InlineMath> is a number!
        </p>
      </Definition>

      <Theorem
        title="Properties of P"
        className="my-6"
        proof={
          <>
            <p><strong><InlineMath>P^2 = P</InlineMath>:</strong> Once a vector is projected onto the line, projecting again doesn't change it. Algebraically:</p>
            <MathBlock>{`P^2 = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}} \\cdot \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}} = \\frac{\\mathbf{a}(\\mathbf{a}^T\\mathbf{a})\\mathbf{a}^T}{(\\mathbf{a}^T\\mathbf{a})^2} = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}} = P`}</MathBlock>
            <p className="mt-2"><strong><InlineMath>P^T = P</InlineMath>:</strong></p>
            <MathBlock>{`P^T = \\left(\\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}\\right)^T = \\frac{(\\mathbf{a}\\mathbf{a}^T)^T}{\\mathbf{a}^T\\mathbf{a}} = \\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}} = P`}</MathBlock>
            <p className="mt-2"><strong>Rank = 1:</strong> <InlineMath>{`P = \\mathbf{a}\\mathbf{a}^T / (\\mathbf{a}^T\\mathbf{a})`}</InlineMath> is a scalar times a rank-1 matrix (column times row).</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>P^2 = P</InlineMath> (projecting twice = projecting once)</li>
          <li><InlineMath>P^T = P</InlineMath> (P is symmetric)</li>
          <li>Column space of <InlineMath>P</InlineMath> = line through <InlineMath>{`\\mathbf{a}`}</InlineMath></li>
          <li>Rank of <InlineMath>P</InlineMath> = 1</li>
        </ul>
      </Theorem>

      <h2>Projection onto a Subspace</h2>

      <p>
        When projecting onto a subspace spanned by several vectors (columns of <InlineMath>A</InlineMath>),
        we need to generalize.
      </p>

      <Definition title="Projection onto Column Space" className="my-6">
        <p>
          The projection of <InlineMath>{`\\mathbf{b}`}</InlineMath> onto the column space of <InlineMath>A</InlineMath> is <InlineMath>{`\\mathbf{p} = A\\hat{x}`}</InlineMath>,
          where <InlineMath>{`\\hat{x}`}</InlineMath> solves the <strong>normal equations</strong>:
        </p>
        <MathBlock>
          {`A^TA\\hat{x} = A^T\\mathbf{b}`}
        </MathBlock>
        <p className="mt-2">
          The projection is: <InlineMath>{`\\mathbf{p} = A\\hat{x} = A(A^TA)^{-1}A^T\\mathbf{b}`}</InlineMath>
        </p>
      </Definition>

      <Theorem
        title="Projection Matrix P (onto a subspace)"
        className="my-6"
        proof={
          <>
            <p>We need <InlineMath>{`\\mathbf{p} = A\\hat{x}`}</InlineMath> where the error <InlineMath>{`\\mathbf{e} = \\mathbf{b} - A\\hat{x}`}</InlineMath> is perpendicular to <InlineMath>C(A)</InlineMath>.</p>
            <p className="mt-2">For <InlineMath>{`\\mathbf{e}`}</InlineMath> to be perpendicular to every column of <InlineMath>A</InlineMath>:</p>
            <MathBlock>{`A^T(\\mathbf{b} - A\\hat{x}) = \\mathbf{0} \\quad \\Rightarrow \\quad A^TA\\hat{x} = A^T\\mathbf{b}`}</MathBlock>
            <p>These are the normal equations. Solving for <InlineMath>{`\\hat{x}`}</InlineMath> (assuming <InlineMath>A</InlineMath> has independent columns):</p>
            <MathBlock>{`\\hat{x} = (A^TA)^{-1}A^T\\mathbf{b}`}</MathBlock>
            <p>The projection is <InlineMath>{`\\mathbf{p} = A\\hat{x} = A(A^TA)^{-1}A^T\\mathbf{b} = P\\mathbf{b}`}</InlineMath>.</p>
          </>
        }
      >
        <MathBlock>
          {`P = A(A^TA)^{-1}A^T`}
        </MathBlock>
        <p className="mt-2 text-amber-400">
          Warning: <InlineMath>{`(A^TA)^{-1}`}</InlineMath> is <strong>not</strong> the same as <InlineMath>{`A^{-1}(A^T)^{-1}`}</InlineMath>!
        </p>
      </Theorem>

      <Example title="Projection in 2D" className="my-6">
        <p>Project onto the column space of:</p>
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\\\ 1 & 2 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`A^TA = \\begin{bmatrix} 3 & 3 \\\\ 3 & 5 \\end{bmatrix}, \\quad (A^TA)^{-1} = \\frac{1}{6}\\begin{bmatrix} 5 & -3 \\\\ -3 & 3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The projection matrix <InlineMath>{`P = A(A^TA)^{-1}A^T`}</InlineMath> is <InlineMath>3 \times 3</InlineMath> with rank 2.
        </p>
      </Example>

      <h2>The Error Vector</h2>

      <Theorem
        title="Error is Perpendicular"
        className="my-6"
        proof={
          <>
            <p>The projection <InlineMath>{`\\mathbf{p}`}</InlineMath> is the closest point to <InlineMath>{`\\mathbf{b}`}</InlineMath> in <InlineMath>C(A)</InlineMath>. For <InlineMath>{`\\mathbf{p}`}</InlineMath> to minimize distance, the error <InlineMath>{`\\mathbf{e}`}</InlineMath> must be perpendicular to <InlineMath>C(A)</InlineMath>.</p>
            <p className="mt-2">Algebraically: <InlineMath>{`\\hat{x}`}</InlineMath> satisfies <InlineMath>{`A^TA\\hat{x} = A^T\\mathbf{b}`}</InlineMath>, which rearranges to:</p>
            <MathBlock>{`A^TA\\hat{x} - A^T\\mathbf{b} = \\mathbf{0} \\quad \\Rightarrow \\quad A^T(A\\hat{x} - \\mathbf{b}) = \\mathbf{0} \\quad \\Rightarrow \\quad A^T\\mathbf{e} = \\mathbf{0}`}</MathBlock>
            <p>Since <InlineMath>{`A^T\\mathbf{e} = \\mathbf{0}`}</InlineMath>, the error is orthogonal to every column of <InlineMath>A</InlineMath>, hence to the entire column space.</p>
          </>
        }
      >
        <p>
          The error <InlineMath>{`\\mathbf{e} = \\mathbf{b} - \\mathbf{p} = \\mathbf{b} - A\\hat{x}`}</InlineMath> is perpendicular
          to the column space:
        </p>
        <MathBlock>
          {`A^T(\\mathbf{b} - A\\hat{x}) = \\mathbf{0}`}
        </MathBlock>
        <p className="mt-2">
          This is exactly why the normal equations <InlineMath>{`A^TA\\hat{x} = A^T\\mathbf{b}`}</InlineMath> work!
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Project <InlineMath>{`\\mathbf{b}`}</InlineMath> onto line through <InlineMath>{`\\mathbf{a}`}</InlineMath>: <InlineMath>{`\\mathbf{p} = \\mathbf{a}(\\mathbf{a}^T\\mathbf{a})^{-1}\\mathbf{a}^T\\mathbf{b}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Project <InlineMath>{`\\mathbf{b}`}</InlineMath> onto column space of <InlineMath>A</InlineMath>: <InlineMath>{`\\mathbf{p} = A(A^TA)^{-1}A^T\\mathbf{b}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Projection matrix: <InlineMath>{`P = A(A^TA)^{-1}A^T`}</InlineMath>. Properties: <InlineMath>P^2 = P</InlineMath> and <InlineMath>P^T = P</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The error <InlineMath>{`\\mathbf{e} = \\mathbf{b} - \\mathbf{p}`}</InlineMath> is perpendicular to the column space.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span><InlineMath>{`\\hat{x}`}</InlineMath> comes from the normal equations: <InlineMath>{`A^TA\\hat{x} = A^T\\mathbf{b}`}</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
