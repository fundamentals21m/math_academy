import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2>Cofactor Expansion and the Transpose</h2>

      <p>
        We develop the cofactor expansion formula, which expresses an{' '}
        <InlineMath>{'n \\times n'}</InlineMath> determinant as a sum of{' '}
        <InlineMath>{'(n-1) \\times (n-1)'}</InlineMath> determinants. This formula
        both proves existence inductively and provides a practical computation method.
      </p>

      <h3>Minors and Cofactors</h3>

      <Callout type="info">
        <strong>Definition:</strong> Given an <InlineMath>{'n \\times n'}</InlineMath>{' '}
        matrix <InlineMath>{'A'}</InlineMath> with <InlineMath>{'n \\geq 2'}</InlineMath>,
        the <strong>k, j minor</strong> <InlineMath>{'A_{kj}'}</InlineMath> is
        the <InlineMath>{'(n-1) \\times (n-1)'}</InlineMath> matrix obtained by deleting
        row <InlineMath>{'k'}</InlineMath> and column <InlineMath>{'j'}</InlineMath>.
        <br /><br />
        The <strong>cofactor</strong> of entry <InlineMath>{'a_{kj}'}</InlineMath> is:
        <MathBlock>{`\\text{cof} \\, a_{kj} = (-1)^{k+j} \\det A_{kj}`}</MathBlock>
      </Callout>

      <h3>Expansion by Cofactors</h3>

      <Callout type="info">
        <strong>Theorem (Cofactor Expansion):</strong> For any{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix <InlineMath>{'A'}</InlineMath>:
        <br /><br />
        <strong>Row expansion (by row k):</strong>
        <MathBlock>{`\\det A = \\sum_{j=1}^n a_{kj} \\cdot \\text{cof} \\, a_{kj} = \\sum_{j=1}^n (-1)^{k+j} a_{kj} \\det A_{kj}`}</MathBlock>
        <strong>Column expansion (by column k):</strong>
        <MathBlock>{`\\det A = \\sum_{i=1}^n a_{ik} \\cdot \\text{cof} \\, a_{ik} = \\sum_{i=1}^n (-1)^{i+k} a_{ik} \\det A_{ik}`}</MathBlock>
      </Callout>

      <p>
        The sign pattern <InlineMath>{'(-1)^{i+j}'}</InlineMath> alternates
        in a checkerboard fashion:
      </p>
      <MathBlock>{`\\begin{bmatrix} + & - & + & - & \\cdots \\\\ - & + & - & + & \\cdots \\\\ + & - & + & - & \\cdots \\\\ \\vdots & \\vdots & \\vdots & \\vdots & \\ddots \\end{bmatrix}`}</MathBlock>

      <h3>Existence by Induction</h3>

      <p>
        The cofactor expansion formula proves existence of determinants by induction:
      </p>

      <ol>
        <li><strong>Base case:</strong> For <InlineMath>{'n = 1'}</InlineMath>, define{' '}
        <InlineMath>{'\\det [a_{11}] = a_{11}'}</InlineMath></li>
        <li><strong>Inductive step:</strong> Assuming determinants exist for{' '}
        <InlineMath>{'(n-1) \\times (n-1)'}</InlineMath> matrices, define the{' '}
        <InlineMath>{'n \\times n'}</InlineMath> determinant by the first-column expansion</li>
      </ol>

      <p>
        One can verify that this definition satisfies all four axioms for a
        determinant function.
      </p>

      <h3>The Transpose Theorem</h3>

      <Callout type="info">
        <strong>Theorem:</strong> For any <InlineMath>{'n \\times n'}</InlineMath> matrix{' '}
        <InlineMath>{'A'}</InlineMath>:
        <MathBlock>{`\\det A = \\det A^T`}</MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> By induction on <InlineMath>{'n'}</InlineMath>. Let{' '}
        <InlineMath>{'B = A^T'}</InlineMath>. Expanding <InlineMath>{'\\det A'}</InlineMath>{' '}
        by first-column minors and <InlineMath>{'\\det B'}</InlineMath> by first-row minors:
      </p>
      <MathBlock>{`\\det A = \\sum_{j=1}^n (-1)^{j+1} a_{j1} \\det A_{j1}`}</MathBlock>
      <MathBlock>{`\\det B = \\sum_{j=1}^n (-1)^{j+1} b_{1j} \\det B_{1j}`}</MathBlock>
      <p>
        Since <InlineMath>{'b_{1j} = a_{j1}'}</InlineMath> and{' '}
        <InlineMath>{'B_{1j} = (A_{j1})^T'}</InlineMath>, the induction
        hypothesis gives <InlineMath>{'\\det B_{1j} = \\det A_{j1}'}</InlineMath>,
        so the sums are equal.
      </p>

      <h3>Implications of the Transpose Theorem</h3>

      <p>
        Since <InlineMath>{'\\det A = \\det A^T'}</InlineMath>, every theorem about rows
        of determinants has a corresponding theorem about columns:
      </p>

      <ul>
        <li>The determinant is multilinear in columns as well as rows</li>
        <li>Interchanging two columns reverses the sign</li>
        <li>The determinant vanishes if two columns are equal or if columns are dependent</li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The transpose theorem establishes a complete
        symmetry between row and column properties of determinants. This duality
        is powerful: any result proved using row operations has an automatic
        column-based counterpart.
      </Callout>
    </LessonLayout>
  );
}
