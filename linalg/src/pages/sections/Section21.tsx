import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      {/* Introduction */}
      <p>
        There are two formulas for determinants: the <strong>big formula</strong> with <InlineMath>n!</InlineMath> terms,
        and the <strong>cofactor formula</strong> that expands along any row or column.
      </p>

      <h2>The Big Formula</h2>

      <Definition title="Determinant by Permutations" className="my-6">
        <p>
          The determinant of an <InlineMath>n \times n</InlineMath> matrix is a sum of <InlineMath>n!</InlineMath> products:
        </p>
        <MathBlock>
          {`\\det A = \\sum_{\\text{permutations } P} (\\pm 1) \\cdot a_{1\\alpha} a_{2\\beta} a_{3\\gamma} \\cdots a_{n\\omega}`}
        </MathBlock>
        <p className="mt-2">
          Each term uses one entry from each row and each column. The sign depends on whether
          the permutation <InlineMath>(\alpha, \beta, \gamma, \ldots, \omega)</InlineMath> is even or odd.
        </p>
      </Definition>

      <Example title="3×3 Determinant: 6 Terms" className="my-6">
        <MathBlock>
          {`\\det \\begin{bmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{bmatrix} = aei + bfg + cdh - ceg - bdi - afh`}
        </MathBlock>
        <p className="mt-2">
          Three terms go "down to the right" (positive), three go "down to the left" (negative).
        </p>
      </Example>

      <h2>Cofactors</h2>

      <Definition title="Cofactor" className="my-6">
        <p>
          The <strong>cofactor</strong> <InlineMath>{`C_{ij}`}</InlineMath> of entry <InlineMath>{`a_{ij}`}</InlineMath> is:
        </p>
        <MathBlock>
          {`C_{ij} = (-1)^{i+j} \\det M_{ij}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`M_{ij}`}</InlineMath> is the <InlineMath>(n-1) \times (n-1)</InlineMath> matrix with row <InlineMath>i</InlineMath> and column <InlineMath>j</InlineMath> deleted.
        </p>
      </Definition>

      <Example title="Computing a Cofactor" className="my-6">
        <p>For entry <InlineMath>{`a_{12}`}</InlineMath> in the first row, second column:</p>
        <MathBlock>
          {`C_{12} = (-1)^{1+2} \\det \\begin{bmatrix} d & f \\\\ g & i \\end{bmatrix} = -(di - fg)`}
        </MathBlock>
      </Example>

      <h2>Cofactor Expansion</h2>

      <Theorem
        title="Cofactor Formula"
        className="my-6"
        proof={
          <>
            <p>Use property 3 (linearity in each row). Row <InlineMath>i</InlineMath> can be written as:</p>
            <MathBlock>{`\\text{row}_i = a_{i1}\\mathbf{e}_1 + a_{i2}\\mathbf{e}_2 + \\cdots + a_{in}\\mathbf{e}_n`}</MathBlock>
            <p className="mt-2">By linearity: <InlineMath>\det A</InlineMath> = sum of <InlineMath>n</InlineMath> determinants, each with row <InlineMath>i</InlineMath> replaced by <InlineMath>{`a_{ij}\\mathbf{e}_j`}</InlineMath>.</p>
            <p className="mt-2">The determinant with <InlineMath>{`\\mathbf{e}_j`}</InlineMath> in row <InlineMath>i</InlineMath> equals <InlineMath>{`(-1)^{i+j} \\det M_{ij} = C_{ij}`}</InlineMath> (after moving that 1 to position <InlineMath>(i,j)</InlineMath> via row/column exchanges).</p>
            <p className="mt-2">Each term contributes <InlineMath>{`a_{ij} C_{ij}`}</InlineMath>, giving the cofactor formula.</p>
          </>
        }
      >
        <p>
          The determinant can be computed by expanding along any row or column:
        </p>
        <MathBlock>
          {`\\det A = a_{i1}C_{i1} + a_{i2}C_{i2} + \\cdots + a_{in}C_{in} \\quad \\text{(row } i\\text{)}`}
        </MathBlock>
        <MathBlock>
          {`\\det A = a_{1j}C_{1j} + a_{2j}C_{2j} + \\cdots + a_{nj}C_{nj} \\quad \\text{(column } j\\text{)}`}
        </MathBlock>
      </Theorem>

      <Example title="Expansion Along Row 1" className="my-6">
        <MathBlock>
          {`\\det \\begin{bmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{bmatrix} = 2 \\det \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix} - 1 \\det \\begin{bmatrix} 1 & 1 \\\\ 0 & 2 \\end{bmatrix} + 0`}
        </MathBlock>
        <MathBlock>
          {`= 2(4-1) - 1(2-0) = 6 - 2 = 4`}
        </MathBlock>
      </Example>

      <h2>Choosing the Best Row or Column</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Strategy</p>
        <p className="text-dark-300">
          Expand along a row or column with the most <strong>zeros</strong>! Each zero means
          one less determinant to compute.
        </p>
      </div>

      <Example title="Expansion with Zeros" className="my-6">
        <MathBlock>
          {`\\det \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 2 & 3 & 0 & 0 \\\\ 4 & 5 & 6 & 0 \\\\ 7 & 8 & 9 & 10 \\end{bmatrix} = 1 \\cdot 3 \\cdot 6 \\cdot 10 = 180`}
        </MathBlock>
        <p className="mt-2">
          For triangular matrices, cofactor expansion confirms: <InlineMath>\det A</InlineMath> = product of diagonal entries.
        </p>
      </Example>

      <h2>The Checkerboard of Signs</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-3">Sign Pattern <InlineMath>{`(-1)^{i+j}`}</InlineMath></p>
        <MathBlock>
          {`\\begin{bmatrix} + & - & + & - \\\\ - & + & - & + \\\\ + & - & + & - \\\\ - & + & - & + \\end{bmatrix}`}
        </MathBlock>
        <p className="text-dark-400 text-sm mt-2">
          The cofactor <InlineMath>{`C_{ij}`}</InlineMath> has the sign at position <InlineMath>(i, j)</InlineMath>.
        </p>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The "big formula" has <InlineMath>n!</InlineMath> terms, one for each permutation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Each term has one entry from each row and column, with sign <InlineMath>\pm 1</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Cofactor <InlineMath>{`C_{ij} = (-1)^{i+j} \\det M_{ij}`}</InlineMath> (delete row <InlineMath>i</InlineMath>, column <InlineMath>j</InlineMath>).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Cofactor expansion: <InlineMath>{`\\det A = a_{i1}C_{i1} + \\cdots + a_{in}C_{in}`}</InlineMath> (any row <InlineMath>i</InlineMath>).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Expand along a row or column with many zeros for efficiency.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
