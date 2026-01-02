import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      {/* Introduction */}
      <p>
        The <strong>determinant</strong> is a single number that captures important information about a square matrix.
        It tells us if the matrix is invertible, and it has deep connections to volumes and areas.
      </p>

      <h2>The Three Defining Properties</h2>

      <Definition title="The Determinant" className="my-6">
        <p>
          The determinant of a square matrix <InlineMath>A</InlineMath>, written <InlineMath>\det A</InlineMath> or <InlineMath>|A|</InlineMath>,
          is defined by these three properties:
        </p>
        <ol className="list-decimal list-inside mt-3 space-y-3">
          <li><InlineMath>\det I = 1</InlineMath> (the identity matrix has determinant 1)</li>
          <li>The determinant changes sign when two rows are exchanged</li>
          <li>The determinant is a <strong>linear function of each row</strong> separately</li>
        </ol>
      </Definition>

      <h2>Consequences of the Three Properties</h2>

      <Theorem
        title="Properties 4-10"
        className="my-6"
        proof={
          <>
            <p><strong>Property 4:</strong> Exchange the two equal rows. By property 2, the sign changes. But the matrix is unchanged! So <InlineMath>\det A = -\det A</InlineMath>, giving <InlineMath>\det A = 0</InlineMath>.</p>
            <p className="mt-2"><strong>Property 5:</strong> By property 3, <InlineMath>{`\\det[\\text{row}_i - c \\cdot \\text{row}_j] = \\det[\\text{row}_i] - c \\cdot \\det[\\text{row}_j]`}</InlineMath>. The second determinant has two equal rows (row <InlineMath>j</InlineMath> appears twice), so by property 4 it's zero.</p>
            <p className="mt-2"><strong>Property 6:</strong> By property 3 with scalar 0: <InlineMath>{`\\det[0 \\cdot \\text{row}_i] = 0 \\cdot \\det[\\text{row}_i] = 0`}</InlineMath>.</p>
            <p className="mt-2"><strong>Property 7:</strong> Elimination (which doesn't change det by property 5) produces <InlineMath>I</InlineMath> for a triangular matrix with all 1's on diagonal. The product of pivots formula follows.</p>
            <p className="mt-2"><strong>Property 8:</strong> A singular matrix has a zero row in <InlineMath>U</InlineMath>, giving <InlineMath>\det A = 0</InlineMath>.</p>
          </>
        }
      >
        <p>From the three defining properties, we can prove:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong>4.</strong> If two rows are equal, then <InlineMath>\det A = 0</InlineMath></li>
          <li><strong>5.</strong> Subtracting a multiple of one row from another leaves <InlineMath>\det A</InlineMath> unchanged</li>
          <li><strong>6.</strong> A matrix with a row of zeros has <InlineMath>\det A = 0</InlineMath></li>
          <li><strong>7.</strong> If <InlineMath>A</InlineMath> is triangular, <InlineMath>\det A</InlineMath> = product of diagonal entries</li>
          <li><strong>8.</strong> If <InlineMath>A</InlineMath> is singular then <InlineMath>\det A = 0</InlineMath>. If invertible then <InlineMath>\det A \neq 0</InlineMath></li>
          <li><strong>9.</strong> <InlineMath>\det AB = (\det A)(\det B)</InlineMath></li>
          <li><strong>10.</strong> <InlineMath>\det A^T = \det A</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="2×2 Determinant" className="my-6">
        <MathBlock>
          {`\\det \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} = ad - bc`}
        </MathBlock>
        <p className="mt-2">
          This is the area of the parallelogram with edges <InlineMath>(a, c)</InlineMath> and <InlineMath>(b, d)</InlineMath>.
        </p>
      </Example>

      <h2>Computing Determinants by Elimination</h2>

      <Theorem
        title="Determinant from Pivots"
        className="my-6"
        proof={
          <>
            <p>Elimination uses two types of operations:</p>
            <p className="mt-2">• <strong>Row subtraction:</strong> By property 5, <InlineMath>\det</InlineMath> is unchanged.</p>
            <p className="mt-2">• <strong>Row exchange:</strong> By property 2, <InlineMath>\det</InlineMath> changes sign.</p>
            <p className="mt-2">After elimination, <InlineMath>U</InlineMath> is upper triangular. By property 7, <InlineMath>\det U</InlineMath> = product of pivots.</p>
            <p className="mt-2">The sign depends on the parity of row exchanges: <InlineMath>{`\\det A = (-1)^{\\text{exchanges}} \\det U`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If elimination (with row exchanges) takes <InlineMath>A</InlineMath> to <InlineMath>U</InlineMath>:
        </p>
        <MathBlock>
          {`\\det A = \\pm (\\text{product of pivots})`}
        </MathBlock>
        <p className="mt-2">
          The sign is <InlineMath>+</InlineMath> for an even number of row exchanges, <InlineMath>-</InlineMath> for odd.
        </p>
      </Theorem>

      <Example title="3×3 Determinant by Elimination" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 2 & 3 & 3 \\\\ 0 & 5 & 7 \\\\ 6 & 9 & 8 \\end{bmatrix} \\rightarrow U = \\begin{bmatrix} 2 & 3 & 3 \\\\ 0 & 5 & 7 \\\\ 0 & 0 & -1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Pivots: 2, 5, -1. No row exchanges.<br />
          <InlineMath>\det A = 2 \times 5 \times (-1) = -10</InlineMath>
        </p>
      </Example>

      <h2>The Product Rule</h2>

      <Theorem
        title="det(AB) = det(A) det(B)"
        className="my-6"
        proof={
          <>
            <p><strong>Case 1:</strong> If <InlineMath>A</InlineMath> is singular, then <InlineMath>AB</InlineMath> is singular (its columns are combinations of <InlineMath>A</InlineMath>'s columns). Both sides equal 0.</p>
            <p className="mt-2"><strong>Case 2:</strong> If <InlineMath>A</InlineMath> is invertible, factor <InlineMath>A = E_1 E_2 \cdots E_k</InlineMath> into elementary matrices. Each <InlineMath>E_i</InlineMath> is a row operation, and we know how each affects the determinant.</p>
            <p className="mt-2">Then <InlineMath>\det(AB) = \det(E_1 \cdots E_k B) = \det(E_1) \cdots \det(E_k) \det(B) = \det(A) \det(B)</InlineMath>.</p>
            <p className="mt-2"><strong>Consequence:</strong> <InlineMath>\det(A A^{-1}) = \det I = 1</InlineMath>, so <InlineMath>\det(A) \det(A^{-1}) = 1</InlineMath>.</p>
          </>
        }
      >
        <p>
          The determinant of a product equals the product of determinants:
        </p>
        <MathBlock>
          {`\\det(AB) = (\\det A)(\\det B)`}
        </MathBlock>
        <p className="mt-2">
          As a consequence: <InlineMath>{`\\det(A^{-1}) = 1/\\det A`}</InlineMath>
        </p>
      </Theorem>

      <h2>Triangular Matrices</h2>

      <Example title="Determinant of Triangular Matrices" className="my-6">
        <MathBlock>
          {`\\det \\begin{bmatrix} a & b & c \\\\ 0 & d & e \\\\ 0 & 0 & f \\end{bmatrix} = adf`}
        </MathBlock>
        <p className="mt-2">
          For triangular matrices, the determinant is the product of diagonal entries.
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The determinant is defined by: <InlineMath>\det I = 1</InlineMath>, sign change on row exchange, linearity in each row.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>A</InlineMath> is invertible if and only if <InlineMath>\det A \neq 0</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>For triangular matrices: <InlineMath>\det A</InlineMath> = product of diagonal entries.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><InlineMath>\det AB = (\det A)(\det B)</InlineMath> and <InlineMath>\det A^T = \det A</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Elimination gives: <InlineMath>\det A = \pm</InlineMath>(product of pivots).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
