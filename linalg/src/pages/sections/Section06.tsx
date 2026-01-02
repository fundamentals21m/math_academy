import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Introduction */}
      <p>
        Now we express elimination using <strong>matrices</strong>. Each elimination step is multiplication
        by an <strong>elimination matrix</strong> <InlineMath>E</InlineMath>. The whole elimination process is <InlineMath>EA = U</InlineMath>.
      </p>

      <h2>Elimination Matrices</h2>

      <p>
        The key idea: row operations on <InlineMath>A</InlineMath> can be performed by multiplying <InlineMath>A</InlineMath> on the left
        by a special matrix <InlineMath>E</InlineMath>.
      </p>

      <Definition title="Elementary (Elimination) Matrix" className="my-6">
        <p>
          An <strong>elimination matrix</strong> <InlineMath>{`E_{ij}`}</InlineMath> subtracts a multiple of row <InlineMath>j</InlineMath> from row <InlineMath>i</InlineMath>.
          It is the identity matrix with one extra entry <InlineMath>{`-\\ell_{ij}`}</InlineMath> in position <InlineMath>(i, j)</InlineMath>.
        </p>
        <MathBlock>
          {`E_{21} = \\begin{bmatrix} 1 & 0 & 0 \\\\ -\\ell_{21} & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\quad \\text{subtracts } \\ell_{21} \\text{ times row 1 from row 2}`}
        </MathBlock>
      </Definition>

      <Example title="An Elimination Matrix in Action" className="my-6">
        <p>To subtract 3 times row 1 from row 2:</p>
        <MathBlock>
          {`E_{21} = \\begin{bmatrix} 1 & 0 \\\\ -3 & 1 \\end{bmatrix} \\quad \\text{then} \\quad E_{21}A = \\begin{bmatrix} 1 & 0 \\\\ -3 & 1 \\end{bmatrix}\\begin{bmatrix} 2 & 4 \\\\ 6 & 3 \\end{bmatrix} = \\begin{bmatrix} 2 & 4 \\\\ 0 & -9 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Row 1 is unchanged. Row 2 becomes (row 2) - 3(row 1) = <InlineMath>(6-6, 3-12) = (0, -9)</InlineMath>.
        </p>
      </Example>

      <h2>The Complete Elimination: <InlineMath>EA = U</InlineMath></h2>

      <p>
        For a <InlineMath>3 \times 3</InlineMath> matrix, three elimination steps give <InlineMath>{`E_{32}E_{31}E_{21}A = U`}</InlineMath>.
        The product of elimination matrices <InlineMath>{`E = E_{32}E_{31}E_{21}`}</InlineMath> transforms <InlineMath>A</InlineMath> to <InlineMath>U</InlineMath>.
      </p>

      <Example title="Three Elimination Steps" className="my-6">
        <MathBlock>
          {`E_{32}E_{31}E_{21}A = U`}
        </MathBlock>
        <p className="mt-2">
          Reading from right to left: First <InlineMath>{`E_{21}`}</InlineMath> acts on <InlineMath>A</InlineMath>, then <InlineMath>{`E_{31}`}</InlineMath>, then <InlineMath>{`E_{32}`}</InlineMath>.
        </p>
      </Example>

      <h2>Matrix Multiplication: Row Times Column</h2>

      <Definition title="Matrix Multiplication (Entry by Entry)" className="my-6">
        <p>
          The entry in row <InlineMath>i</InlineMath>, column <InlineMath>j</InlineMath> of <InlineMath>AB</InlineMath> is:
        </p>
        <MathBlock>
          {`(AB)_{ij} = (\\text{row } i \\text{ of } A) \\cdot (\\text{column } j \\text{ of } B) = \\sum_{k=1}^{n} a_{ik}b_{kj}`}
        </MathBlock>
      </Definition>

      <Example title="Row Times Column" className="my-6">
        <MathBlock>
          {`\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} = \\begin{bmatrix} 1\\cdot5+2\\cdot7 & 1\\cdot6+2\\cdot8 \\\\ 3\\cdot5+4\\cdot7 & 3\\cdot6+4\\cdot8 \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>The Augmented Matrix <InlineMath>{`[A \\mid \\mathbf{b}]`}</InlineMath></h2>

      <p>
        Elimination works on the augmented matrix <InlineMath>{`[A \\mid \\mathbf{b}]`}</InlineMath>, which includes the right-hand side.
        Every row operation on <InlineMath>A</InlineMath> must also be applied to <InlineMath>{`\\mathbf{b}`}</InlineMath>.
      </p>

      <Example title="Augmented Matrix" className="my-6">
        <MathBlock>
          {`[A \\mid \\mathbf{b}] = \\left[\\begin{array}{cc|c} 2 & 4 & 2 \\\\ 4 & 11 & 8 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{cc|c} 2 & 4 & 2 \\\\ 0 & 3 & 4 \\end{array}\\right] = [U \\mid \\mathbf{c}]`}
        </MathBlock>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>{`E_{ij}`}</InlineMath> has the extra entry <InlineMath>{`-\\ell_{ij}`}</InlineMath> in row <InlineMath>i</InlineMath>, column <InlineMath>j</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The elimination matrices multiply <InlineMath>A</InlineMath> on the left to give <InlineMath>EA = U</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Matrix multiplication: <InlineMath>{`(AB)_{ij}`}</InlineMath> = (row <InlineMath>i</InlineMath> of <InlineMath>A</InlineMath>) <InlineMath>\cdot</InlineMath> (column <InlineMath>j</InlineMath> of <InlineMath>B</InlineMath>).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>The augmented matrix <InlineMath>{`[A \\mid \\mathbf{b}]`}</InlineMath> keeps track of both sides during elimination.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
