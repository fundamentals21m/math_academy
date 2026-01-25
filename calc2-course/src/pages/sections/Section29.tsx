import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2>Similar Matrices</h2>

      <p>
        Different bases for the same vector space lead to different matrix
        representations of the same linear transformation. Understanding the
        relationship between these matrices is crucial for the theory of
        eigenvalues.
      </p>

      <h3>Change of Basis</h3>

      <p>
        Let <InlineMath>{'T: V \\to V'}</InlineMath> with{' '}
        <InlineMath>{'\\dim V = n'}</InlineMath>. Suppose{' '}
        <InlineMath>{'A'}</InlineMath> is the matrix of <InlineMath>{'T'}</InlineMath>{' '}
        relative to basis <InlineMath>{'E = [e_1, \\ldots, e_n]'}</InlineMath> and{' '}
        <InlineMath>{'B'}</InlineMath> is the matrix relative to basis{' '}
        <InlineMath>{'U = [u_1, \\ldots, u_n]'}</InlineMath>.
      </p>

      <p>
        If the bases are related by <InlineMath>{'U = EC'}</InlineMath> where{' '}
        <InlineMath>{'C'}</InlineMath> is the change-of-basis matrix (with{' '}
        <InlineMath>{'u_j = \\sum_k c_{kj}e_k'}</InlineMath>), then:
      </p>
      <MathBlock>{`B = C^{-1}AC`}</MathBlock>

      <h3>The Definition of Similarity</h3>

      <Callout type="info">
        <strong>Definition:</strong> Two <InlineMath>{'n \\times n'}</InlineMath>{' '}
        matrices <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are
        called <strong>similar</strong> if there exists a nonsingular matrix{' '}
        <InlineMath>{'C'}</InlineMath> such that:
        <MathBlock>{`B = C^{-1}AC`}</MathBlock>
      </Callout>

      <Callout type="info">
        <strong>Theorem:</strong> Two <InlineMath>{'n \\times n'}</InlineMath>{' '}
        matrices are similar if and only if they represent the same linear
        transformation (relative to possibly different bases).
      </Callout>

      <h3>Similar Matrices Have the Same Characteristic Polynomial</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Similar matrices have the same characteristic
        polynomial and therefore the same eigenvalues.
      </Callout>

      <p>
        <strong>Proof:</strong> If <InlineMath>{'B = C^{-1}AC'}</InlineMath>, then:
      </p>
      <MathBlock>{`\\lambda I - B = \\lambda I - C^{-1}AC = \\lambda C^{-1}IC - C^{-1}AC = C^{-1}(\\lambda I - A)C`}</MathBlock>
      <p>
        This shows <InlineMath>{'\\lambda I - B'}</InlineMath> and{' '}
        <InlineMath>{'\\lambda I - A'}</InlineMath> are similar. Since similar
        matrices have the same determinant:
      </p>
      <MathBlock>{`\\det(\\lambda I - B) = \\det(\\lambda I - A)`}</MathBlock>

      <h3>Properties Preserved by Similarity</h3>

      <p>
        If <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are
        similar, they share:
      </p>
      <ul>
        <li>The same characteristic polynomial</li>
        <li>The same eigenvalues</li>
        <li>
          The same determinant:{' '}
          <InlineMath>{'\\det(C^{-1}AC) = \\det(C^{-1})\\det(A)\\det(C) = \\det A'}</InlineMath>
        </li>
        <li>
          The same trace: <InlineMath>{'\\text{tr}(AB) = \\text{tr}(BA)'}</InlineMath>{' '}
          implies <InlineMath>{'\\text{tr}(C^{-1}AC) = \\text{tr} A'}</InlineMath>
        </li>
        <li>
          The same rank (since they represent the same transformation)
        </li>
      </ul>

      <h3>Diagonalization via Similarity</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>{'T: V \\to V'}</InlineMath> where{' '}
        <InlineMath>{'\\dim V = n'}</InlineMath> and <InlineMath>{'V'}</InlineMath> has
        scalars in <InlineMath>{'F'}</InlineMath>. If the characteristic polynomial
        of <InlineMath>{'T'}</InlineMath> has <InlineMath>{'n'}</InlineMath> distinct
        roots <InlineMath>{'\\lambda_1, \\ldots, \\lambda_n'}</InlineMath> in{' '}
        <InlineMath>{'F'}</InlineMath>, then:
        <br /><br />
        (a) The eigenvectors <InlineMath>{'u_1, \\ldots, u_n'}</InlineMath> form a
        basis for <InlineMath>{'V'}</InlineMath>.
        <br />
        (b) The matrix of <InlineMath>{'T'}</InlineMath> relative to{' '}
        <InlineMath>{'U = [u_1, \\ldots, u_n]'}</InlineMath> is:
        <MathBlock>{`\\Lambda = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)`}</MathBlock>
        (c) If <InlineMath>{'A'}</InlineMath> is the matrix of{' '}
        <InlineMath>{'T'}</InlineMath> relative to basis{' '}
        <InlineMath>{'E = [e_1, \\ldots, e_n]'}</InlineMath>, then:
        <MathBlock>{`\\Lambda = C^{-1}AC`}</MathBlock>
        where <InlineMath>{'C'}</InlineMath> relates the bases by{' '}
        <InlineMath>{'U = EC'}</InlineMath>.
      </Callout>

      <h3>The Diagonalizing Matrix</h3>

      <p>
        The matrix <InlineMath>{'C'}</InlineMath> that diagonalizes{' '}
        <InlineMath>{'A'}</InlineMath> has a simple structure: its columns are the
        eigenvectors of <InlineMath>{'A'}</InlineMath>. If{' '}
        <InlineMath>{'E = [I_1, \\ldots, I_n]'}</InlineMath> is the standard basis,
        then <InlineMath>{'U = EC'}</InlineMath> means the{' '}
        <InlineMath>{'k'}</InlineMath>th column of <InlineMath>{'C'}</InlineMath>{' '}
        contains the components of eigenvector{' '}
        <InlineMath>{'u_k'}</InlineMath>.
      </p>

      <h3>Similarity Without Distinct Eigenvalues</h3>

      <p>
        A matrix may be diagonalizable even with repeated eigenvalues. The key
        criterion is:
      </p>

      <Callout type="info">
        <strong>Criterion:</strong> An <InlineMath>{'n \\times n'}</InlineMath>{' '}
        matrix <InlineMath>{'A'}</InlineMath> is similar to a diagonal matrix if
        and only if <InlineMath>{'A'}</InlineMath> has <InlineMath>{'n'}</InlineMath>{' '}
        linearly independent eigenvectors.
      </Callout>

      <p>
        This happens if and only if for each eigenvalue{' '}
        <InlineMath>{'\\lambda'}</InlineMath> of algebraic multiplicity{' '}
        <InlineMath>{'k'}</InlineMath> (multiplicity as a root of the
        characteristic polynomial), the eigenspace{' '}
        <InlineMath>{'E(\\lambda)'}</InlineMath> has dimension{' '}
        <InlineMath>{'k'}</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Similarity is an equivalence relation on
        matrices. All matrices similar to a diagonal matrix form an equivalence
        class, and the diagonal form is the "canonical representative" of this
        class. The diagonal entries (eigenvalues) are intrinsic properties of
        the underlying linear transformation, independent of any choice of
        basis.
      </Callout>
    </LessonLayout>
  );
}
