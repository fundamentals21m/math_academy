import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Linear Spaces of Matrices</h2>

      <p>
        Having established the connection between linear transformations and matrices, we
        now study matrices as mathematical objects in their own right. The set of all{' '}
        <InlineMath>m \times n</InlineMath> matrices forms a linear space.
      </p>

      <h3>Matrices as a Linear Space</h3>

      <Callout type="info">
        <strong>Definition:</strong> Two <InlineMath>m \times n</InlineMath> matrices{' '}
        <InlineMath>{'A = (a_{ik})'}</InlineMath> and{' '}
        <InlineMath>{'B = (b_{ik})'}</InlineMath> are <strong>equal</strong> if and only
        if <InlineMath>{'a_{ik} = b_{ik}'}</InlineMath> for all{' '}
        <InlineMath>i, k</InlineMath>.
      </Callout>

      <Callout type="info">
        <strong>Definition:</strong> For <InlineMath>m \times n</InlineMath> matrices{' '}
        <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>, and scalar{' '}
        <InlineMath>c</InlineMath>:
        <br /><br />
        <strong>Sum:</strong> <InlineMath>{'A + B = (a_{ik} + b_{ik})'}</InlineMath>
        <br />
        <strong>Scalar product:</strong> <InlineMath>{'cA = (ca_{ik})'}</InlineMath>
      </Callout>

      <p>
        With these operations, the set of all <InlineMath>m \times n</InlineMath> matrices
        with entries from a field <InlineMath>F</InlineMath> forms a linear space over{' '}
        <InlineMath>F</InlineMath>. The zero matrix (all entries 0) is the zero element, and{' '}
        <InlineMath>{'(-1)A = (-a_{ik})'}</InlineMath> is the negative.
      </p>

      <h3>Dimension of Matrix Space</h3>

      <p>
        The space of <InlineMath>m \times n</InlineMath> matrices has dimension{' '}
        <InlineMath>mn</InlineMath>. A basis consists of the <InlineMath>mn</InlineMath>{' '}
        matrices <InlineMath>{'E_{ik}'}</InlineMath>, where{' '}
        <InlineMath>{'E_{ik}'}</InlineMath> has a 1 in position{' '}
        <InlineMath>(i, k)</InlineMath> and 0 elsewhere.
      </p>

      <h3>Isomorphism with Transformations</h3>

      <p>
        Once bases are chosen for <InlineMath>V</InlineMath> and <InlineMath>W</InlineMath>,
        there is a one-to-one correspondence between linear transformations{' '}
        <InlineMath>T: V \to W</InlineMath> and <InlineMath>m \times n</InlineMath> matrices.
        This correspondence preserves the linear space operations:
      </p>

      <MathBlock>
        T + S \leftrightarrow A + B, \quad cT \leftrightarrow cA
      </MathBlock>

      <p>
        This means the spaces <InlineMath>{'\\mathcal{L}(V, W)'}</InlineMath> and the
        space of <InlineMath>m \times n</InlineMath> matrices are{' '}
        <strong>isomorphic</strong> as linear spaces.
      </p>

      <h3>Row and Column Vectors</h3>

      <Callout type="info">
        <strong>Definition:</strong> A <InlineMath>1 \times n</InlineMath> matrix is called a{' '}
        <strong>row vector</strong>. An <InlineMath>m \times 1</InlineMath> matrix is called
        a <strong>column vector</strong>.
      </Callout>

      <p>
        The components of an element <InlineMath>x \in V</InlineMath> relative to a basis
        can be arranged as a column vector:
      </p>
      <MathBlock>{`X = \\begin{bmatrix} x_1 \\\\ x_2 \\\\ \\vdots \\\\ x_n \\end{bmatrix}`}</MathBlock>

      <h3>Transpose of a Matrix</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>transpose</strong> of an{' '}
        <InlineMath>m \times n</InlineMath> matrix <InlineMath>{'A = (a_{ik})'}</InlineMath>{' '}
        is the <InlineMath>n \times m</InlineMath> matrix{' '}
        <InlineMath>{'A^T = (a_{ki})'}</InlineMath>, obtained by interchanging rows and
        columns.
      </Callout>

      <p>Properties of transpose:</p>
      <MathBlock>
        (A^T)^T = A, \quad (A + B)^T = A^T + B^T, \quad (cA)^T = cA^T
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The space of matrices provides a concrete model for
        the abstract space of linear transformations. This isomorphism allows us to study
        linear transformations through matrix computations. Every theorem about linear
        transformations has a matrix counterpart, and vice versa.
      </Callout>
    </LessonLayout>
  );
}
