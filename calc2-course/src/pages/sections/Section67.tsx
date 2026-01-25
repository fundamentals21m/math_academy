import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <h2>The Law of Exponents for Matrix Exponentials</h2>

      <p>
        The familiar law of exponents <InlineMath>{`e^a e^b = e^{a+b}`}</InlineMath>{' '}
        for scalar exponentials does not always hold for matrix exponentials.
        In this section we explore when and why this formula is valid.
      </p>

      <h3>The Commutativity Requirement</h3>

      <Callout type="warning">
        <strong>Important:</strong> The law of exponents{' '}
        <InlineMath>{`e^A e^B = e^{A+B}`}</InlineMath> is <strong>not</strong>{' '}
        always true for matrix exponentials. It holds only when{' '}
        <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> commute.
      </Callout>

      <h3>The Law of Exponents for Commuting Matrices</h3>

      <Callout type="info">
        <strong>Theorem 7.6:</strong> Let <InlineMath>A</InlineMath> and{' '}
        <InlineMath>B</InlineMath> be two <InlineMath>n \times n</InlineMath>{' '}
        matrices which commute, <InlineMath>AB = BA</InlineMath>. Then:
        <MathBlock>
          {`e^{A+B} = e^A e^B`}
        </MathBlock>
      </Callout>

      <p>
        <strong>Proof:</strong> From <InlineMath>AB = BA</InlineMath> we find:
      </p>
      <MathBlock>
        A^2 B = A(BA) = (AB)A = (BA)A = BA^2
      </MathBlock>

      <p>
        So <InlineMath>B</InlineMath> commutes with <InlineMath>A^2</InlineMath>.
        By induction, <InlineMath>B</InlineMath> commutes with every power of{' '}
        <InlineMath>A</InlineMath>. By writing <InlineMath>{`e^{tA}`}</InlineMath>{' '}
        as a power series, we find that <InlineMath>B</InlineMath> also commutes
        with <InlineMath>{`e^{tA}`}</InlineMath> for every real{' '}
        <InlineMath>t</InlineMath>.
      </p>

      <p>
        Now let <InlineMath>F</InlineMath> be the matrix function:
      </p>
      <MathBlock>
        {`F(t) = e^{t(A+B)} - e^{tA} e^{tB}`}
      </MathBlock>

      <p>
        Differentiating and using the fact that <InlineMath>B</InlineMath>{' '}
        commutes with <InlineMath>{`e^{tA}`}</InlineMath>:
      </p>
      <MathBlock>
        {`F'(t) = (A + B)e^{t(A+B)} - Ae^{tA} e^{tB} - e^{tA} Be^{tB}`}
      </MathBlock>
      <MathBlock>
        {`= (A + B)e^{t(A+B)} - (A + B)e^{tA} e^{tB} = (A + B)F(t)`}
      </MathBlock>

      <p>
        By the uniqueness theorem:
      </p>
      <MathBlock>
        {`F(t) = e^{t(A+B)} F(0)`}
      </MathBlock>

      <p>
        But <InlineMath>F(0) = 0</InlineMath>, so{' '}
        <InlineMath>F(t) = 0</InlineMath> for all <InlineMath>t</InlineMath>.
        Hence:
      </p>
      <MathBlock>
        {`e^{t(A+B)} = e^{tA} e^{tB}`}
      </MathBlock>

      <p>
        Setting <InlineMath>t = 1</InlineMath> gives the result.
      </p>

      <h3>Important Special Case</h3>

      <Callout type="info">
        <strong>Corollary:</strong> The matrices <InlineMath>sA</InlineMath> and{' '}
        <InlineMath>tA</InlineMath> commute for all scalars{' '}
        <InlineMath>s</InlineMath> and <InlineMath>t</InlineMath>. Hence:
        <MathBlock>
          {`e^{sA} e^{tA} = e^{(s+t)A}`}
        </MathBlock>
      </Callout>

      <p>
        This is the matrix analogue of the scalar identity{' '}
        <InlineMath>{`e^s e^t = e^{s+t}`}</InlineMath>.
      </p>

      <h3>Counterexample</h3>

      <p>
        To see that commutativity is essential, consider:
      </p>
      <MathBlock>
        {`A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}, \\quad
        B = \\begin{bmatrix} 1 & -1 \\\\ 0 & 0 \\end{bmatrix}`}
      </MathBlock>

      <p>
        These matrices do not commute, and one can verify that{' '}
        <InlineMath>e^A e^B</InlineMath>, <InlineMath>e^B e^A</InlineMath>, and{' '}
        <InlineMath>{`e^{A+B}`}</InlineMath> are all distinct matrices.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The failure of the law of exponents for
        non-commuting matrices is a fundamental feature of matrix algebra. This
        is related to the Baker-Campbell-Hausdorff formula in Lie theory, which
        gives the correct formula for <InlineMath>e^A e^B</InlineMath> in terms
        of commutators. For applications in differential equations, the key case
        is <InlineMath>{`e^{sA}e^{tA} = e^{(s+t)A}`}</InlineMath>, which
        always holds since <InlineMath>sA</InlineMath> and{' '}
        <InlineMath>tA</InlineMath> trivially commute.
      </Callout>
    </LessonLayout>
  );
}
