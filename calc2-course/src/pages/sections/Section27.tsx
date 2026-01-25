import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <h2>The Characteristic Polynomial</h2>

      <p>
        In the finite-dimensional case, we can find eigenvalues using
        determinants. The characteristic polynomial provides an algebraic method
        to compute all eigenvalues of a linear transformation.
      </p>

      <h3>Finding Eigenvalues via Determinants</h3>

      <p>
        Let <InlineMath>{'T: V \\to V'}</InlineMath> where{' '}
        <InlineMath>{'\\dim V = n'}</InlineMath>. We seek scalars{' '}
        <InlineMath>{'\\lambda'}</InlineMath> such that{' '}
        <InlineMath>{'T(x) = \\lambda x'}</InlineMath> has a nonzero solution. This
        equation can be written as:
      </p>
      <MathBlock>{`(\\lambda I - T)(x) = 0`}</MathBlock>

      <p>
        If <InlineMath>{'A'}</InlineMath> is a matrix representation of{' '}
        <InlineMath>{'T'}</InlineMath>, then <InlineMath>{'\\lambda I - A'}</InlineMath>{' '}
        represents <InlineMath>{'\\lambda I - T'}</InlineMath>. A nonzero solution
        exists if and only if <InlineMath>{'\\lambda I - A'}</InlineMath> is singular,
        which occurs when:
      </p>
      <MathBlock>{`\\det(\\lambda I - A) = 0`}</MathBlock>

      <h3>The Characteristic Polynomial</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>characteristic polynomial</strong>{' '}
        of an <InlineMath>{'n \\times n'}</InlineMath> matrix{' '}
        <InlineMath>{'A'}</InlineMath> is:
        <MathBlock>{`f(\\lambda) = \\det(\\lambda I - A)`}</MathBlock>
        The eigenvalues of <InlineMath>{'A'}</InlineMath> are the roots of this
        polynomial that lie in the underlying field of scalars.
      </Callout>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'A'}</InlineMath> is an{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix, then{' '}
        <InlineMath>{'f(\\lambda) = \\det(\\lambda I - A)'}</InlineMath> is a polynomial
        of degree <InlineMath>{'n'}</InlineMath>. The leading term is{' '}
        <InlineMath>{'\\lambda^n'}</InlineMath> and the constant term is:
        <MathBlock>{`f(0) = \\det(-A) = (-1)^n \\det A`}</MathBlock>
      </Callout>

      <h3>Examples</h3>

      <p>
        <strong>For <InlineMath>{'n = 2'}</InlineMath>:</strong>
      </p>
      <MathBlock>{`\\det(\\lambda I - A) = \\det \\begin{bmatrix} \\lambda - a_{11} & -a_{12} \\\\ -a_{21} & \\lambda - a_{22} \\end{bmatrix} = \\lambda^2 - (a_{11} + a_{22})\\lambda + (a_{11}a_{22} - a_{12}a_{21})`}</MathBlock>

      <p>
        <strong>For <InlineMath>{'n = 3'}</InlineMath>:</strong>
      </p>
      <MathBlock>{`\\det(\\lambda I - A) = \\det \\begin{bmatrix} \\lambda - a_{11} & -a_{12} & -a_{13} \\\\ -a_{21} & \\lambda - a_{22} & -a_{23} \\\\ -a_{31} & -a_{32} & \\lambda - a_{33} \\end{bmatrix}`}</MathBlock>
      <p>
        Expansion yields a cubic polynomial in <InlineMath>{'\\lambda'}</InlineMath>.
      </p>

      <h3>Roots and Eigenvalues</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Let <InlineMath>{'T: V \\to V'}</InlineMath> with{' '}
        <InlineMath>{'\\dim V = n'}</InlineMath> and scalars in{' '}
        <InlineMath>{'F'}</InlineMath> (either{' '}
        <InlineMath>{'\\mathbb{R}'}</InlineMath> or{' '}
        <InlineMath>{'\\mathbb{C}'}</InlineMath>). Let{' '}
        <InlineMath>{'A'}</InlineMath> be a matrix representation of{' '}
        <InlineMath>{'T'}</InlineMath>. Then the eigenvalues of{' '}
        <InlineMath>{'T'}</InlineMath> are precisely those roots of the
        characteristic polynomial of <InlineMath>{'A'}</InlineMath> that lie in{' '}
        <InlineMath>{'F'}</InlineMath>.
      </Callout>

      <h3>Connection to Determinant and Trace</h3>

      <p>
        Writing the characteristic polynomial in factored form:
      </p>
      <MathBlock>{`f(\\lambda) = (\\lambda - \\lambda_1)(\\lambda - \\lambda_2) \\cdots (\\lambda - \\lambda_n)`}</MathBlock>
      <p>
        and comparing with the expanded form:
      </p>
      <MathBlock>{`f(\\lambda) = \\lambda^n + c_{n-1}\\lambda^{n-1} + \\cdots + c_1\\lambda + c_0`}</MathBlock>
      <p>
        we find two important relations:
      </p>
      <MathBlock>{`c_0 = (-1)^n \\lambda_1 \\lambda_2 \\cdots \\lambda_n = (-1)^n \\det A`}</MathBlock>
      <MathBlock>{`c_{n-1} = -(\\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n)`}</MathBlock>

      <p>
        Therefore:
      </p>
      <ul>
        <li>
          The <strong>product</strong> of all eigenvalues equals{' '}
          <InlineMath>{'\\det A'}</InlineMath>
        </li>
        <li>
          The <strong>sum</strong> of all eigenvalues equals the{' '}
          <strong>trace</strong> of <InlineMath>{'A'}</InlineMath>
        </li>
      </ul>

      <h3>The Trace</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>trace</strong> of an{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix <InlineMath>{'A'}</InlineMath> is
        the sum of its diagonal elements:
        <MathBlock>{`\\text{tr} \\, A = \\sum_{i=1}^n a_{ii} = a_{11} + a_{22} + \\cdots + a_{nn}`}</MathBlock>
      </Callout>

      <p>
        The trace provides a quick numerical check: after finding all
        eigenvalues, their sum should equal the trace of the matrix.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The characteristic polynomial encodes all
        information about eigenvalues. The fundamental theorem of algebra
        guarantees that over <InlineMath>{'\\mathbb{C}'}</InlineMath>, every{' '}
        <InlineMath>{'n \\times n'}</InlineMath> matrix has exactly{' '}
        <InlineMath>{'n'}</InlineMath> eigenvalues (counting multiplicity). Over{' '}
        <InlineMath>{'\\mathbb{R}'}</InlineMath>, a matrix may have fewer
        than <InlineMath>{'n'}</InlineMath> real eigenvalues.
      </Callout>
    </LessonLayout>
  );
}
