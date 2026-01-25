import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <h2>The Cayley-Hamilton Theorem</h2>

      <p>
        The Cayley-Hamilton theorem is one of the most elegant and useful results
        in matrix theory. It states that every square matrix satisfies its own
        characteristic equation. This theorem provides the foundation for
        Putzer's method of computing the matrix exponential.
      </p>

      <h3>Statement of the Theorem</h3>

      <Callout type="info">
        <strong>Theorem 7.8 (Cayley-Hamilton):</strong> Let <InlineMath>A</InlineMath>{' '}
        be an <InlineMath>n \times n</InlineMath> matrix and let:
        <MathBlock>
          {`f(\\lambda) = \\det(\\lambda I - A) = \\lambda^n + c_{n-1}\\lambda^{n-1} + \\cdots + c_1\\lambda + c_0`}
        </MathBlock>
        be its characteristic polynomial. Then <InlineMath>f(A) = 0</InlineMath>.
        In other words:
        <MathBlock>
          {`A^n + c_{n-1}A^{n-1} + \\cdots + c_1 A + c_0 I = 0`}
        </MathBlock>
      </Callout>

      <h3>Proof Outline</h3>

      <p>
        The proof uses the identity <InlineMath>{`A(\\text{cof } A)^t = (\\det A)I`}</InlineMath>.
        Applying this with <InlineMath>A</InlineMath> replaced by{' '}
        <InlineMath>\lambda I - A</InlineMath>:
      </p>
      <MathBlock>
        {`(\\lambda I - A)\\{\\text{cof}(\\lambda I - A)\\}^t = f(\\lambda)I`}
      </MathBlock>

      <p>
        The entries of <InlineMath>{`\\text{cof}(\\lambda I - A)`}</InlineMath> are
        polynomials in <InlineMath>\lambda</InlineMath> of degree{' '}
        <InlineMath>\leq n-1</InlineMath>. Writing:
      </p>
      <MathBlock>
        {`\\{\\text{cof}(\\lambda I - A)\\}^t = \\sum_{k=0}^{n-1} \\lambda^k B_k`}
      </MathBlock>

      <p>
        where each <InlineMath>B_k</InlineMath> is a constant matrix, substituting
        and equating coefficients of powers of <InlineMath>\lambda</InlineMath>{' '}
        yields a system of equations. Multiplying these by{' '}
        <InlineMath>{`A^n, A^{n-1}, \\ldots, A, I`}</InlineMath> and summing gives
        the result.
      </p>

      <h3>Example</h3>

      <p>
        The matrix{' '}
        <InlineMath>{`A = \\begin{bmatrix} 5 & 4 & 0 \\\\ 1 & 2 & 0 \\\\ 1 & 2 & 2 \\end{bmatrix}`}</InlineMath>{' '}
        has characteristic polynomial:
      </p>
      <MathBlock>
        {`f(\\lambda) = (\\lambda - 1)(\\lambda - 2)(\\lambda - 6) = \\lambda^3 - 9\\lambda^2 + 20\\lambda - 12`}
      </MathBlock>

      <p>
        The Cayley-Hamilton theorem states that <InlineMath>A</InlineMath>{' '}
        satisfies:
      </p>
      <MathBlock>
        A^3 - 9A^2 + 20A - 12I = 0
      </MathBlock>

      <h3>Applications</h3>

      <p>
        <strong>1. Express higher powers in terms of lower powers:</strong>
      </p>
      <MathBlock>
        A^3 = 9A^2 - 20A + 12I
      </MathBlock>
      <MathBlock>
        A^4 = 9A^3 - 20A^2 + 12A = 61A^2 - 168A + 108I
      </MathBlock>

      <p>
        <strong>2. Express the inverse as a polynomial:</strong>
      </p>
      <p>
        From <InlineMath>A^3 - 9A^2 + 20A = 12I</InlineMath>, we get{' '}
        <InlineMath>A(A^2 - 9A + 20I) = 12I</InlineMath>, so:
      </p>
      <MathBlock>
        {`A^{-1} = \\frac{1}{12}(A^2 - 9A + 20I)`}
      </MathBlock>

      <h3>Significance for Computing e^tA</h3>

      <Callout type="info">
        <strong>Key Consequence:</strong> Since <InlineMath>A^n</InlineMath> can
        be expressed as a linear combination of{' '}
        <InlineMath>{`I, A, A^2, \\ldots, A^{n-1}`}</InlineMath>, so can all higher
        powers. Therefore:
        <MathBlock>
          {`e^{tA} = \\sum_{k=0}^{n-1} q_k(t) A^k`}
        </MathBlock>
        for some scalar functions <InlineMath>q_k(t)</InlineMath>.
      </Callout>

      <p>
        This means the matrix exponential is always a polynomial in{' '}
        <InlineMath>A</InlineMath> of degree at most <InlineMath>n-1</InlineMath>.
        Putzer's method provides an explicit algorithm for finding the
        coefficients <InlineMath>q_k(t)</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The Cayley-Hamilton theorem shows that the
        "algebra of a matrix" is finite-dimensional—every power of an{' '}
        <InlineMath>n \times n</InlineMath> matrix can be expressed using only
        the first <InlineMath>n</InlineMath> powers. This is remarkable: an
        infinite series like <InlineMath>{`e^{tA}`}</InlineMath> collapses to a
        finite polynomial in <InlineMath>A</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
