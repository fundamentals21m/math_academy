import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      {/* Introduction */}
      <p>
        Three fundamental concepts define the structure of a vector space: <strong>linear independence</strong>,
        <strong> spanning</strong>, and <strong>basis</strong>. The number of vectors in a basis is the <strong>dimension</strong>.
      </p>

      <h2>Linear Independence</h2>

      <Definition title="Linear Independence" className="my-6">
        <p>
          Vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_n`}</InlineMath> are <strong>linearly independent</strong> if:
        </p>
        <MathBlock>
          {`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n = \\mathbf{0} \\quad \\text{only when all } c_i = 0`}
        </MathBlock>
        <p className="mt-2">
          In other words, no vector is a combination of the others.
        </p>
      </Definition>

      <Theorem
        title="Independence and Nullspace"
        className="my-6"
        proof={
          <>
            <p>Let the columns of <InlineMath>A</InlineMath> be <InlineMath>{`\\mathbf{a}_1, \\ldots, \\mathbf{a}_n`}</InlineMath>. The equation <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath> is:</p>
            <MathBlock>{`x_1\\mathbf{a}_1 + x_2\\mathbf{a}_2 + \\cdots + x_n\\mathbf{a}_n = \\mathbf{0}`}</MathBlock>
            <p className="mt-2"><strong>(⟹)</strong> If the columns are independent, then the only way this linear combination can equal zero is with all <InlineMath>x_i = 0</InlineMath>. So <InlineMath>{`N(A) = \\{\\mathbf{0}\\}`}</InlineMath>.</p>
            <p className="mt-2"><strong>(⟸)</strong> If <InlineMath>{`N(A) = \\{\\mathbf{0}\\}`}</InlineMath>, then the only solution is <InlineMath>{`\\mathbf{x} = \\mathbf{0}`}</InlineMath>, meaning the only linear combination giving zero has all coefficients zero. This is the definition of independence.</p>
          </>
        }
      >
        <p>
          The columns of <InlineMath>A</InlineMath> are linearly independent if and only if <InlineMath>{`N(A) = \\mathbf{Z}`}</InlineMath>
          (only <InlineMath>{`\\mathbf{x} = \\mathbf{0}`}</InlineMath> solves <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>).
        </p>
      </Theorem>

      <Example title="Testing Independence" className="my-6">
        <p>Are these vectors independent?</p>
        <MathBlock>
          {`\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}, \\quad \\mathbf{v}_3 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          <strong>No!</strong> Because <InlineMath>{`\\mathbf{v}_1 + \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}`}</InlineMath>.
          Three vectors in <InlineMath>{`\\mathbf{R}^2`}</InlineMath> must be dependent.
        </p>
      </Example>

      <h2>Spanning a Space</h2>

      <Definition title="Span" className="my-6">
        <p>
          Vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_n`}</InlineMath> <strong>span</strong> a space <InlineMath>S</InlineMath> if every
          vector in <InlineMath>S</InlineMath> is a linear combination of them:
        </p>
        <MathBlock>
          {`S = \\text{span}(\\mathbf{v}_1, \\ldots, \\mathbf{v}_n) = \\{ c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n \\}`}
        </MathBlock>
      </Definition>

      <h2>Basis of a Space</h2>

      <Definition title="Basis" className="my-6">
        <p>
          A <strong>basis</strong> for a vector space <InlineMath>V</InlineMath> is a set of vectors that:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Are <strong>linearly independent</strong></li>
          <li><strong>Span</strong> the space <InlineMath>V</InlineMath></li>
        </ol>
        <p className="mt-2 text-primary-400">
          Every vector in <InlineMath>V</InlineMath> is a <strong>unique</strong> combination of basis vectors.
        </p>
      </Definition>

      <Example title="Standard Basis for R^n" className="my-6">
        <p>The standard basis for <InlineMath>{`\\mathbf{R}^3`}</InlineMath>:</p>
        <MathBlock>
          {`\\mathbf{e}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\quad \\mathbf{e}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad \\mathbf{e}_3 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Together they form the identity matrix <InlineMath>I</InlineMath>. Any <InlineMath>{`\\mathbf{v} = (v_1, v_2, v_3)`}</InlineMath> is
          <InlineMath>{`v_1\\mathbf{e}_1 + v_2\\mathbf{e}_2 + v_3\\mathbf{e}_3`}</InlineMath>.
        </p>
      </Example>

      <h2>Dimension</h2>

      <Theorem
        title="Dimension"
        className="my-6"
        proof={
          <>
            <p>Suppose <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_m\\}`}</InlineMath> and <InlineMath>{`\\{\\mathbf{w}_1, \\ldots, \\mathbf{w}_n\\}`}</InlineMath> are both bases for <InlineMath>V</InlineMath>.</p>
            <p className="mt-2">Since the <InlineMath>{`\\mathbf{v}`}</InlineMath>'s span <InlineMath>V</InlineMath>, we can write each <InlineMath>{`\\mathbf{w}_j`}</InlineMath> as a combination. Since the <InlineMath>{`\\mathbf{w}`}</InlineMath>'s are independent and written in terms of <InlineMath>m</InlineMath> vectors, we must have <InlineMath>n \leq m</InlineMath>.</p>
            <p className="mt-2">By the same argument with roles reversed: since the <InlineMath>{`\\mathbf{w}`}</InlineMath>'s span <InlineMath>V</InlineMath> and the <InlineMath>{`\\mathbf{v}`}</InlineMath>'s are independent, we have <InlineMath>m \leq n</InlineMath>.</p>
            <p className="mt-2">Together: <InlineMath>m = n</InlineMath>. All bases have the same size.</p>
          </>
        }
      >
        <p>
          All bases for a vector space <InlineMath>V</InlineMath> have the <strong>same number of vectors</strong>.
          This number is the <strong>dimension</strong> of <InlineMath>V</InlineMath>, written <InlineMath>\dim(V)</InlineMath>.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Important Examples</p>
        <ul className="space-y-1 text-dark-300">
          <li><InlineMath>{`\\dim(\\mathbf{R}^n) = n`}</InlineMath></li>
          <li>The zero space <InlineMath>{`\\mathbf{Z}`}</InlineMath> has dimension <InlineMath>0</InlineMath></li>
          <li>A line through the origin in <InlineMath>{`\\mathbf{R}^3`}</InlineMath> has dimension <InlineMath>1</InlineMath></li>
          <li>A plane through the origin in <InlineMath>{`\\mathbf{R}^3`}</InlineMath> has dimension <InlineMath>2</InlineMath></li>
        </ul>
      </div>

      <h2>Basis for the Column Space</h2>

      <Theorem
        title="Pivot Columns Are a Basis"
        className="my-6"
        proof={
          <>
            <p><strong>Independence:</strong> The pivot columns of <InlineMath>A</InlineMath> correspond to the pivot columns of <InlineMath>R</InlineMath>. In <InlineMath>R</InlineMath>, these columns contain the identity matrix <InlineMath>I_r</InlineMath> (after extracting pivot rows), so they're independent. Row operations preserve linear relationships, so the pivot columns of <InlineMath>A</InlineMath> are also independent.</p>
            <p className="mt-2"><strong>Spanning:</strong> Each free column of <InlineMath>R</InlineMath> is a combination of pivot columns (visible directly from <InlineMath>R</InlineMath>). Since the same relationships hold in <InlineMath>A</InlineMath>, every column of <InlineMath>A</InlineMath> is a combination of pivot columns. Thus the pivot columns span <InlineMath>C(A)</InlineMath>.</p>
            <p className="mt-2">With <InlineMath>r</InlineMath> pivot columns forming a basis, <InlineMath>{`\\dim C(A) = r`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          The <strong>pivot columns of <InlineMath>A</InlineMath></strong> are a basis for the column space <InlineMath>C(A)</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>dimension of <InlineMath>C(A)</InlineMath></strong> equals the number of pivots = the <strong>rank</strong> <InlineMath>r</InlineMath>.
        </p>
      </Theorem>

      <Example title="Finding a Basis for C(A)" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 3 & 3 & 2 \\\\ 2 & 6 & 9 & 7 \\\\ -1 & -3 & 3 & 4 \\end{bmatrix} \\rightarrow U = \\begin{bmatrix} 1 & 3 & 3 & 2 \\\\ 0 & 0 & 3 & 3 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Pivots in columns 1 and 3. A basis for <InlineMath>C(A)</InlineMath> is columns 1 and 3 of <InlineMath>A</InlineMath>:
        </p>
        <MathBlock>
          {`\\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ -1 \\end{bmatrix}, \\begin{bmatrix} 3 \\\\ 9 \\\\ 3 \\end{bmatrix} \\right\\}`}
        </MathBlock>
        <p className="mt-2 text-amber-400">
          Use the original columns of <InlineMath>A</InlineMath>, not of <InlineMath>U</InlineMath>!
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Columns of <InlineMath>A</InlineMath> are independent if <InlineMath>{`\\mathbf{x} = \\mathbf{0}`}</InlineMath> is the only solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_r`}</InlineMath> span a space if their combinations fill that space.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>A <strong>basis</strong> consists of linearly independent vectors that span the space.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>All bases have the same number of vectors = the <strong>dimension</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The pivot columns are a basis for <InlineMath>C(A)</InlineMath>. The dimension is <InlineMath>r</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
