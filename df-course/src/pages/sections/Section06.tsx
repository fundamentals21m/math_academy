import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Matrix Groups</h2>
      <p>
        Matrices with invertible entries form important examples of groups under multiplication.
        These <strong>matrix groups</strong> are fundamental in representation theory and connect abstract
        algebra to linear algebra.
      </p>

      <h3>The General Linear Group</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>general linear group</strong> <InlineMath>GL_n(F)</InlineMath> over a field <InlineMath>F</InlineMath>
        is the group of all invertible <InlineMath>n \times n</InlineMath> matrices with entries in <InlineMath>F</InlineMath>:
        <MathBlock>GL_n(F) = \{'{'}A \in M_n(F) : \det(A) \neq 0\{'}'}</MathBlock>
      </Callout>

      <p>Key properties of <InlineMath>GL_n(F)</InlineMath>:</p>
      <ul className="list-disc list-inside text-dark-300 mb-6 space-y-2">
        <li>The identity element is the identity matrix <InlineMath>I_n</InlineMath></li>
        <li>The inverse of <InlineMath>A</InlineMath> is the matrix inverse <InlineMath>A^{'{-1}'}</InlineMath></li>
        <li>Matrix multiplication is associative</li>
        <li><InlineMath>GL_n(F)</InlineMath> is non-abelian for <InlineMath>n \geq 2</InlineMath></li>
      </ul>

      <h3>Order of GL_n over Finite Fields</h3>
      <p>
        When <InlineMath>F = \mathbb{'{'}F{'}'}_q</InlineMath> is a finite field with <InlineMath>q</InlineMath> elements:
      </p>
      <MathBlock>|GL_n(\mathbb{'{'}F{'}'}_q)| = (q^n - 1)(q^n - q)(q^n - q^2) \cdots (q^n - q^{'{'}n-1{'}'})</MathBlock>

      <p><strong>Example:</strong> <InlineMath>|GL_2(\mathbb{'{'}F{'}'}_2)| = (4-1)(4-2) = 3 \cdot 2 = 6</InlineMath>, so <InlineMath>GL_2(\mathbb{'{'}F{'}'}_2) \cong S_3</InlineMath>.</p>

      <h3>The Special Linear Group</h3>
      <Callout type="info">
        <strong>Definition:</strong> The <strong>special linear group</strong> <InlineMath>SL_n(F)</InlineMath> consists of matrices
        with determinant 1:
        <MathBlock>SL_n(F) = \{'{'}A \in GL_n(F) : \det(A) = 1\{'}'}</MathBlock>
      </Callout>

      <p>
        <InlineMath>SL_n(F)</InlineMath> is a subgroup of <InlineMath>GL_n(F)</InlineMath> (verify closure under multiplication and inverses).
      </p>

      <p><strong>Example:</strong> For <InlineMath>|\mathbb{'{'}F{'}'}_q| = q</InlineMath>:</p>
      <MathBlock>|SL_n(\mathbb{'{'}F{'}'}_q)| = \frac{'{'}|GL_n(\mathbb{'{'}F{'}'}_q)|{'}'}{'{'}q - 1{'}'}</MathBlock>

      <h3>Examples in GL_2(R)</h3>
      <p>Consider the following matrices in <InlineMath>GL_2(\mathbb{'{'}R{'}'})</InlineMath>:</p>

      <MathBlock>A = \begin{'{'}pmatrix{'}'} 1 & 1 \\ 0 & 1 \end{'{'}pmatrix{'}'}, \quad B = \begin{'{'}pmatrix{'}'} 0 & 1 \\ -1 & 0 \end{'{'}pmatrix{'}'}</MathBlock>

      <ul className="list-disc list-inside text-dark-300 mb-4 space-y-1">
        <li><InlineMath>A</InlineMath> has infinite order: <InlineMath>A^n = \begin{'{'}pmatrix{'}'} 1 & n \\ 0 & 1 \end{'{'}pmatrix{'}'}</InlineMath></li>
        <li><InlineMath>B</InlineMath> has order 4: <InlineMath>B^2 = -I</InlineMath>, <InlineMath>B^4 = I</InlineMath></li>
        <li><InlineMath>\det(A) = 1</InlineMath> and <InlineMath>\det(B) = 1</InlineMath>, so both are in <InlineMath>SL_2(\mathbb{'{'}R{'}'})</InlineMath></li>
      </ul>

      <h3>Other Important Matrix Groups</h3>

      <p><strong>Orthogonal Group:</strong></p>
      <MathBlock>O_n(\mathbb{'{'}R{'}'}) = \{'{'}A \in GL_n(\mathbb{'{'}R{'}'}) : A^T A = I\{'}'}</MathBlock>
      <p>These are rotation and reflection matrices, with <InlineMath>\det(A) = \pm 1</InlineMath>.</p>

      <p><strong>Special Orthogonal Group:</strong></p>
      <MathBlock>SO_n(\mathbb{'{'}R{'}'}) = \{'{'}A \in O_n(\mathbb{'{'}R{'}'}) : \det(A) = 1\{'}'}</MathBlock>
      <p>These are pure rotations (no reflections).</p>

      <p><strong>Unitary Group:</strong></p>
      <MathBlock>U_n = \{'{'}A \in GL_n(\mathbb{'{'}C{'}'}) : A^* A = I\{'}'}</MathBlock>
      <p>where <InlineMath>A^* = \overline{'{'}A^T{'}'}</InlineMath> is the conjugate transpose.</p>

      <h3>Relationship to Dihedral Groups</h3>
      <p>
        The dihedral group <InlineMath>D_{'{'}{'{'}2n{'}'}{'}'}</InlineMath> can be realized as a subgroup of <InlineMath>GL_2(\mathbb{'{'}R{'}'})</InlineMath>:
      </p>
      <MathBlock>r = \begin{'{'}pmatrix{'}'} \cos(2\pi/n) & -\sin(2\pi/n) \\ \sin(2\pi/n) & \cos(2\pi/n) \end{'{'}pmatrix{'}'}, \quad s = \begin{'{'}pmatrix{'}'} 1 & 0 \\ 0 & -1 \end{'{'}pmatrix{'}'}</MathBlock>

      <h3>The Heisenberg Group</h3>
      <p>
        An important non-abelian matrix group over any field <InlineMath>F</InlineMath>:
      </p>
      <MathBlock>H(F) = \left\{'{'} \begin{'{'}pmatrix{'}'} 1 & a & c \\ 0 & 1 & b \\ 0 & 0 & 1 \end{'{'}pmatrix{'}'} : a, b, c \in F \right\{'}'}</MathBlock>
      <p>
        This is a group of upper triangular matrices with 1s on the diagonal. It has order <InlineMath>|F|^3</InlineMath> when <InlineMath>F</InlineMath> is finite.
      </p>

      <Callout type="success">
        <strong>Summary:</strong> Matrix groups like <InlineMath>GL_n(F)</InlineMath> and <InlineMath>SL_n(F)</InlineMath> provide concrete examples of groups
        that connect to linear algebra. The general linear group consists of all invertible matrices,
        while the special linear group consists of those with determinant 1.
        These groups are typically non-abelian and have rich structure.
      </Callout>
    </LessonLayout>
  );
}
