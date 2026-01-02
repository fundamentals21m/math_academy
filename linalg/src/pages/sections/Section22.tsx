import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      {/* Introduction */}
      <p>
        Determinants have beautiful applications: <strong>Cramer's Rule</strong> for solving equations,
        a formula for <strong>the inverse</strong>, and the connection to <strong>volumes</strong>.
      </p>

      <h2>Cramer's Rule</h2>

      <Theorem
        title="Cramer's Rule"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>{`\\mathbf{x}`}</InlineMath> be the solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>. Consider the matrix <InlineMath>B_j</InlineMath> with column <InlineMath>j</InlineMath> replaced by <InlineMath>{`\\mathbf{b}`}</InlineMath>.</p>
            <p className="mt-2">We can write:</p>
            <MathBlock>{`B_j = A \\cdot \\text{(matrix with } \\mathbf{x} \\text{ in column } j\\text{, identity elsewhere)}`}</MathBlock>
            <p>This is because <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> fills column <InlineMath>j</InlineMath> with <InlineMath>{`\\mathbf{b}`}</InlineMath>, and the identity columns are unchanged.</p>
            <p className="mt-2">Taking determinants: <InlineMath>\det B_j = \det A \cdot x_j</InlineMath> (the special matrix has det = <InlineMath>x_j</InlineMath>).</p>
            <p>Solving: <InlineMath>x_j = \det B_j / \det A</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>\det A \neq 0</InlineMath>, the solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is:
        </p>
        <MathBlock>
          {`x_j = \\frac{\\det B_j}{\\det A}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>B_j</InlineMath> is the matrix <InlineMath>A</InlineMath> with column <InlineMath>j</InlineMath> replaced by <InlineMath>{`\\mathbf{b}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Cramer's Rule for 2×2" className="my-6">
        <p>Solve <InlineMath>ax + by = e</InlineMath> and <InlineMath>cx + dy = f</InlineMath>:</p>
        <MathBlock>
          {`x = \\frac{\\begin{vmatrix} e & b \\\\ f & d \\end{vmatrix}}{\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}} = \\frac{ed - bf}{ad - bc}`}
        </MathBlock>
        <MathBlock>
          {`y = \\frac{\\begin{vmatrix} a & e \\\\ c & f \\end{vmatrix}}{\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}} = \\frac{af - ce}{ad - bc}`}
        </MathBlock>
      </Example>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Practical Note</p>
        <p className="text-dark-300">
          Cramer's Rule is elegant but <strong>slow</strong> for large systems. Elimination is much faster!
          But Cramer's Rule is useful for theoretical derivations.
        </p>
      </div>

      <h2>Formula for the Inverse</h2>

      <Theorem
        title="Inverse Using Cofactors"
        className="my-6"
        proof={
          <>
            <p>We need to verify <InlineMath>A \cdot (C^T / \det A) = I</InlineMath>.</p>
            <p className="mt-2">The <InlineMath>(i, j)</InlineMath> entry of <InlineMath>A C^T</InlineMath> is:</p>
            <MathBlock>{`\\sum_k a_{ik} C_{jk} = \\sum_k a_{ik} \\cdot (\\text{cofactor of } a_{jk})`}</MathBlock>
            <p className="mt-2">• If <InlineMath>i = j</InlineMath>: This is cofactor expansion along row <InlineMath>i</InlineMath>, giving <InlineMath>\det A</InlineMath>.</p>
            <p className="mt-2">• If <InlineMath>i \neq j</InlineMath>: This is cofactor expansion of a matrix with row <InlineMath>i</InlineMath> copied to row <InlineMath>j</InlineMath> (two equal rows), giving 0.</p>
            <p className="mt-2">So <InlineMath>A C^T = (\det A) I</InlineMath>, and dividing by <InlineMath>\det A</InlineMath> gives the formula.</p>
          </>
        }
      >
        <p>
          The inverse of <InlineMath>A</InlineMath> is:
        </p>
        <MathBlock>
          {`A^{-1} = \\frac{1}{\\det A} C^T`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>C</InlineMath> is the <strong>cofactor matrix</strong> (with entries <InlineMath>{`C_{ij}`}</InlineMath>),
          and <InlineMath>C^T</InlineMath> is called the <strong>adjugate</strong> (or classical adjoint).
        </p>
      </Theorem>

      <Example title="2×2 Inverse Formula" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\quad \\Rightarrow \\quad A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The cofactor matrix is <InlineMath>{`\\begin{bmatrix} d & -c \\\\ -b & a \\end{bmatrix}`}</InlineMath>.
          Transposing gives the formula above.
        </p>
      </Example>

      <h2>Determinants and Volume</h2>

      <Theorem
        title="Volume as Determinant"
        className="my-6"
        proof={
          <>
            <p>We verify the three defining properties of determinant correspond to volume properties:</p>
            <p className="mt-2"><strong>Property 1:</strong> The box with edges <InlineMath>{`\\mathbf{e}_1, \\ldots, \\mathbf{e}_n`}</InlineMath> (identity matrix) is the unit cube with volume 1.</p>
            <p className="mt-2"><strong>Property 2:</strong> Exchanging two edges changes orientation (right-hand vs left-hand), flipping the sign.</p>
            <p className="mt-2"><strong>Property 3:</strong> Volume is linear in each edge. Scaling one edge by <InlineMath>c</InlineMath> scales the volume by <InlineMath>c</InlineMath>. Adding a multiple of one edge to another doesn't change volume (shearing preserves volume).</p>
            <p className="mt-2">Since volume satisfies the same axioms as determinant, they must be equal (up to sign for orientation).</p>
          </>
        }
      >
        <p>
          If the rows (or columns) of <InlineMath>A</InlineMath> are the edges of a box in <InlineMath>{`\\mathbf{R}^n`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\text{Volume of box} = |\\det A|`}
        </MathBlock>
        <p className="mt-2">
          The sign of <InlineMath>\det A</InlineMath> indicates orientation (positive = same as standard basis).
        </p>
      </Theorem>

      <Example title="Area in 2D" className="my-6">
        <p>The parallelogram with edges <InlineMath>(a, c)</InlineMath> and <InlineMath>(b, d)</InlineMath>:</p>
        <MathBlock>
          {`\\text{Area} = \\left| \\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\right| = |ad - bc|`}
        </MathBlock>
      </Example>

      <Example title="Volume in 3D" className="my-6">
        <p>The box (parallelepiped) with edges <InlineMath>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w}`}</InlineMath>:</p>
        <MathBlock>
          {`\\text{Volume} = |\\det [\\mathbf{u} \\; \\mathbf{v} \\; \\mathbf{w}]| = |\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})|`}
        </MathBlock>
        <p className="mt-2">
          The determinant equals the <strong>triple product</strong> <InlineMath>{`\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})`}</InlineMath>.
        </p>
      </Example>

      <h2>The Cross Product</h2>

      <Definition title="Cross Product as Determinant" className="my-6">
        <p>
          For vectors in <InlineMath>{`\\mathbf{R}^3`}</InlineMath>, the cross product is:
        </p>
        <MathBlock>
          {`\\mathbf{u} \\times \\mathbf{v} = \\det \\begin{bmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The result is perpendicular to both <InlineMath>{`\\mathbf{u}`}</InlineMath> and <InlineMath>{`\\mathbf{v}`}</InlineMath>,
          with length = area of parallelogram.
        </p>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Cramer's Rule: <InlineMath>x_j = \det B_j / \det A</InlineMath> where <InlineMath>B_j</InlineMath> has <InlineMath>{`\\mathbf{b}`}</InlineMath> in column <InlineMath>j</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>{`A^{-1} = C^T / \\det A`}</InlineMath> where <InlineMath>C</InlineMath> is the cofactor matrix.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>|\det A|</InlineMath> = volume of the box with rows (or columns) of <InlineMath>A</InlineMath> as edges.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>In 2D: area = <InlineMath>|ad - bc|</InlineMath>. In 3D: volume = <InlineMath>{`|\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})|`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The cross product can be computed as a <InlineMath>3 \times 3</InlineMath> determinant.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
