import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Introduction */}
      <p>
        This section starts with vectors and combines them using <strong>matrices</strong>.
        A matrix is a rectangular array of numbers. The matrix <InlineMath>A</InlineMath> "acts on" a vector <InlineMath>{`\\mathbf{x}`}</InlineMath> to
        produce the output <InlineMath>{`A\\mathbf{x}`}</InlineMath>. This is the key operation of linear algebra.
      </p>

      <h2>What is a Matrix?</h2>

      <Definition title="Matrix" className="my-6">
        <p>
          A <strong>matrix</strong> is a rectangular array of numbers with <InlineMath>m</InlineMath> rows and <InlineMath>n</InlineMath> columns.
          We say <InlineMath>A</InlineMath> is an "<InlineMath>m</InlineMath> by <InlineMath>n</InlineMath>" matrix, written as <InlineMath>m \times n</InlineMath>.
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{bmatrix} \\quad \\text{is a } 3 \\times 2 \\text{ matrix: } m = 3 \\text{ rows and } n = 2 \\text{ columns.}`}
        </MathBlock>
      </Definition>

      <h2>Matrix Times Vector</h2>

      <p>
        The most important operation is multiplying a matrix <InlineMath>A</InlineMath> by a vector <InlineMath>{`\\mathbf{x}`}</InlineMath>.
        There are <em>two ways</em> to think about <InlineMath>{`A\\mathbf{x}`}</InlineMath>:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-primary-500/20">
          <p className="font-semibold text-primary-400 mb-2">Column Picture</p>
          <p className="text-dark-300 text-sm">
            <InlineMath>{`A\\mathbf{x}`}</InlineMath> is a <strong>linear combination of the columns</strong> of <InlineMath>A</InlineMath>.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-amber-500/20">
          <p className="font-semibold text-amber-400 mb-2">Row Picture</p>
          <p className="text-dark-300 text-sm">
            Each component of <InlineMath>{`A\\mathbf{x}`}</InlineMath> is a <strong>dot product</strong> of a row with <InlineMath>{`\\mathbf{x}`}</InlineMath>.
          </p>
        </div>
      </div>

      <Definition title="Matrix-Vector Multiplication (Column View)" className="my-6">
        <p>
          If <InlineMath>A</InlineMath> has columns <InlineMath>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w}`}</InlineMath> and <InlineMath>{`\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix}`}</InlineMath>, then:
        </p>
        <MathBlock>
          {`A\\mathbf{x} = x_1\\mathbf{u} + x_2\\mathbf{v} + x_3\\mathbf{w}`}
        </MathBlock>
        <p className="mt-2">
          The output <InlineMath>{`A\\mathbf{x}`}</InlineMath> is a <strong>combination of the columns</strong> of <InlineMath>A</InlineMath>.
        </p>
      </Definition>

      <Example title="Matrix Times Vector (Combination of Columns)" className="my-6">
        <p>
          Consider the matrix and vector:
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{bmatrix} \\quad \\text{and} \\quad \\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The product <InlineMath>{`A\\mathbf{x}`}</InlineMath> is a combination of the two columns:
        </p>
        <MathBlock>
          {`A\\mathbf{x} = x_1 \\begin{bmatrix} 1 \\\\ 3 \\\\ 5 \\end{bmatrix} + x_2 \\begin{bmatrix} 2 \\\\ 4 \\\\ 6 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Row Picture: Dot Products</h2>

      <p>
        Another way to compute <InlineMath>{`A\\mathbf{x}`}</InlineMath>: each component is a <strong>dot product</strong> of a row of <InlineMath>A</InlineMath> with <InlineMath>{`\\mathbf{x}`}</InlineMath>.
      </p>

      <Example title="Matrix Times Vector (Dot Products with Rows)" className="my-6">
        <MathBlock>
          {`\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\\\ 5 & 6 \\end{bmatrix} \\begin{bmatrix} 7 \\\\ 8 \\end{bmatrix} = \\begin{bmatrix} 1 \\cdot 7 + 2 \\cdot 8 \\\\ 3 \\cdot 7 + 4 \\cdot 8 \\\\ 5 \\cdot 7 + 6 \\cdot 8 \\end{bmatrix} = \\begin{bmatrix} 23 \\\\ 53 \\\\ 83 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Each entry is the dot product of one row with the vector <InlineMath>(7, 8)</InlineMath>.
        </p>
      </Example>

      <h2>Linear Equations <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath></h2>

      <p>
        Now comes the central problem of linear algebra: <strong>solving equations</strong>.
        Given a matrix <InlineMath>A</InlineMath> and a vector <InlineMath>{`\\mathbf{b}`}</InlineMath>, find <InlineMath>{`\\mathbf{x}`}</InlineMath> so that <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>.
      </p>

      <Definition title="System of Linear Equations" className="my-6">
        <p>
          The matrix equation <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> represents a <strong>system of linear equations</strong>:
        </p>
        <MathBlock>
          {`\\begin{bmatrix} 2 & 5 \\\\ 3 & 7 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} b_1 \\\\ b_2 \\end{bmatrix} \\quad \\text{replaces} \\quad \\begin{cases} 2x_1 + 5x_2 = b_1 \\\\ 3x_1 + 7x_2 = b_2 \\end{cases}`}
        </MathBlock>
      </Definition>

      <p>
        This is the <em>inverse problem</em>—to find the input <InlineMath>{`\\mathbf{x}`}</InlineMath> that gives the desired output <InlineMath>{`\\mathbf{b} = A\\mathbf{x}`}</InlineMath>.
        The old question was: compute the linear combination <InlineMath>{`x_1\\mathbf{u} + x_2\\mathbf{v} + x_3\\mathbf{w}`}</InlineMath> to find <InlineMath>{`\\mathbf{b}`}</InlineMath>.
        The new question is: which combination of <InlineMath>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w}`}</InlineMath> produces a particular vector <InlineMath>{`\\mathbf{b}`}</InlineMath>?
      </p>

      <h2>The Inverse Matrix</h2>

      <p>
        The solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> can be written as <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath>, if <InlineMath>A</InlineMath> has an inverse.
        But some matrices don't allow <InlineMath>{`A^{-1}`}</InlineMath>!
      </p>

      <Definition title="Inverse Matrix" className="my-6">
        <p>
          A matrix <InlineMath>A</InlineMath> is <strong>invertible</strong> if there exists a matrix <InlineMath>{`A^{-1}`}</InlineMath> such that:
        </p>
        <MathBlock>
          {`A^{-1}A = I \\quad \\text{and} \\quad AA^{-1} = I`}
        </MathBlock>
        <p className="mt-2">
          When <InlineMath>A</InlineMath> is invertible, the solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\mathbf{x} = A^{-1}\\mathbf{b}`}
        </MathBlock>
      </Definition>

      <Example title="A Difference Matrix and Its Inverse" className="my-6">
        <p>
          The "difference matrix" <InlineMath>A</InlineMath> and its inverse <InlineMath>{`A^{-1}`}</InlineMath> (the "sum matrix"):
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 0 & 0 \\\\ -1 & 1 & 0 \\\\ 0 & -1 & 1 \\end{bmatrix} \\quad \\text{has inverse} \\quad A^{-1} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 1 & 1 & 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The matrix <InlineMath>A</InlineMath> takes <em>differences</em>. The inverse <InlineMath>{`A^{-1}`}</InlineMath> takes <em>sums</em>.
        </p>
      </Example>

      <Theorem
        title="Existence and Uniqueness"
        className="my-6"
        proof={
          <>
            <p><strong>Existence:</strong> Given any <InlineMath>{`\\mathbf{b}`}</InlineMath>, set <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath>. Then:</p>
            <MathBlock>{`A\\mathbf{x} = A(A^{-1}\\mathbf{b}) = (AA^{-1})\\mathbf{b} = I\\mathbf{b} = \\mathbf{b}`}</MathBlock>
            <p>So <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath> is indeed a solution.</p>
            <p className="mt-3"><strong>Uniqueness:</strong> Suppose <InlineMath>{`\\mathbf{x}_1`}</InlineMath> and <InlineMath>{`\\mathbf{x}_2`}</InlineMath> are both solutions:</p>
            <MathBlock>{`A\\mathbf{x}_1 = \\mathbf{b} \\quad \\text{and} \\quad A\\mathbf{x}_2 = \\mathbf{b}`}</MathBlock>
            <p>Multiplying both sides by <InlineMath>{`A^{-1}`}</InlineMath>:</p>
            <MathBlock>{`\\mathbf{x}_1 = A^{-1}\\mathbf{b} = \\mathbf{x}_2`}</MathBlock>
            <p>Therefore, the solution is unique.</p>
          </>
        }
      >
        <p>
          For an invertible matrix <InlineMath>A</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>For every <InlineMath>{`\\mathbf{b}`}</InlineMath> there is <strong>one solution</strong> to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>.</li>
          <li>The matrix <InlineMath>{`A^{-1}`}</InlineMath> produces <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath>.</li>
        </ul>
      </Theorem>

      <h2>When There Is No Inverse</h2>

      <p>
        Not all matrices are invertible. When <InlineMath>A</InlineMath> is not invertible, the system <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> either has:
      </p>

      <ul className="list-disc list-inside my-4 space-y-2 text-dark-300">
        <li><strong>No solution</strong> (the equations are inconsistent)</li>
        <li><strong>Infinitely many solutions</strong> (the equations are redundant)</li>
      </ul>

      <Example title="A Non-Invertible Matrix" className="my-6">
        <p>
          The cyclic difference matrix <InlineMath>C</InlineMath> is not invertible:
        </p>
        <MathBlock>
          {`C\\mathbf{x} = \\begin{bmatrix} 1 & 0 & -1 \\\\ -1 & 1 & 0 \\\\ 0 & -1 & 1 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix} = \\begin{bmatrix} x_1 - x_3 \\\\ x_2 - x_1 \\\\ x_3 - x_2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          When <InlineMath>{`C\\mathbf{x} = \\mathbf{0}`}</InlineMath>, every constant vector <InlineMath>{`\\mathbf{x} = (c, c, c)`}</InlineMath> is a solution!
          There are <strong>infinitely many solutions</strong> to <InlineMath>{`C\\mathbf{x} = \\mathbf{0}`}</InlineMath>.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>A matrix <InlineMath>A</InlineMath> with <InlineMath>m</InlineMath> rows and <InlineMath>n</InlineMath> columns multiplies a vector <InlineMath>{`\\mathbf{x}`}</InlineMath> with <InlineMath>n</InlineMath> components to produce <InlineMath>{`A\\mathbf{x}`}</InlineMath> with <InlineMath>m</InlineMath> components.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>{`A\\mathbf{x}`}</InlineMath> is a <strong>combination of the columns</strong> of <InlineMath>A</InlineMath>. The coefficients are the components of <InlineMath>{`\\mathbf{x}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Each component of <InlineMath>{`A\\mathbf{x}`}</InlineMath> is the <strong>dot product</strong> of a row of <InlineMath>A</InlineMath> with the vector <InlineMath>{`\\mathbf{x}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The equation <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> asks: which combination of columns gives <InlineMath>{`\\mathbf{b}`}</InlineMath>?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>If <InlineMath>A</InlineMath> is invertible, the solution is <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath>. But not all matrices have inverses!</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
