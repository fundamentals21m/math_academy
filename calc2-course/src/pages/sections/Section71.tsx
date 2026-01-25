import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <h2>Putzer's Method for Computing e^tA</h2>

      <p>
        Putzer's method provides a practical and completely general algorithm for
        computing <InlineMath>{`e^{tA}`}</InlineMath>. It works for all matrices,
        whether or not they can be diagonalized, and requires no preliminary
        transformations.
      </p>

      <h3>The Algorithm</h3>

      <Callout type="info">
        <strong>Theorem 7.9 (Putzer's Method):</strong> Let{' '}
        <InlineMath>{`\\lambda_1, \\ldots, \\lambda_n`}</InlineMath> be the eigenvalues
        of an <InlineMath>n \times n</InlineMath> matrix <InlineMath>A</InlineMath>{' '}
        (counted with multiplicity). Define polynomials in <InlineMath>A</InlineMath>:
        <MathBlock>
          {`P_0(A) = I, \\quad P_k(A) = \\prod_{m=1}^k (A - \\lambda_m I) \\quad \\text{for } k = 1, 2, \\ldots, n`}
        </MathBlock>
        Then:
        <MathBlock>
          {`e^{tA} = \\sum_{k=0}^{n-1} r_{k+1}(t) P_k(A)`}
        </MathBlock>
        where the scalar coefficients <InlineMath>{`r_1(t), \\ldots, r_n(t)`}</InlineMath>{' '}
        are determined by the system:
        <MathBlock>
          {`r_1'(t) = \\lambda_1 r_1(t), \\quad r_1(0) = 1`}
        </MathBlock>
        <MathBlock>
          {`r_{k+1}' (t) = \\lambda_{k+1} r_{k+1}(t) + r_k(t), \\quad r_{k+1}(0) = 0`}
        </MathBlock>
      </Callout>

      <h3>Why It Works</h3>

      <p>
        The key observation is that the system of differential equations for{' '}
        <InlineMath>r_k(t)</InlineMath> has a triangular structure, so the
        solutions can be computed in succession. The Cayley-Hamilton theorem
        guarantees that <InlineMath>P_n(A) = 0</InlineMath>, which makes the sum
        finite.
      </p>

      <h3>Example 1: Repeated Eigenvalues</h3>

      <p>
        Express <InlineMath>{`e^{tA}`}</InlineMath> as a linear combination of{' '}
        <InlineMath>I</InlineMath> and <InlineMath>A</InlineMath> if{' '}
        <InlineMath>A</InlineMath> is a <InlineMath>2 \times 2</InlineMath>{' '}
        matrix with both eigenvalues equal to <InlineMath>\lambda</InlineMath>.
      </p>

      <p>
        <strong>Solution:</strong> With{' '}
        <InlineMath>{`\\lambda_1 = \\lambda_2 = \\lambda`}</InlineMath>, we solve:
      </p>
      <MathBlock>
        {`r_1'(t) = \\lambda r_1(t), \\quad r_1(0) = 1 \\implies r_1(t) = e^{\\lambda t}`}
      </MathBlock>
      <MathBlock>
        {`r_2'(t) = \\lambda r_2(t) + r_1(t), \\quad r_2(0) = 0 \\implies r_2(t) = te^{\\lambda t}`}
      </MathBlock>

      <p>
        Since <InlineMath>P_0(A) = I</InlineMath> and{' '}
        <InlineMath>P_1(A) = A - \lambda I</InlineMath>:
      </p>
      <MathBlock>
        {`e^{tA} = e^{\\lambda t} I + te^{\\lambda t}(A - \\lambda I) = e^{\\lambda t}(1 - \\lambda t)I + te^{\\lambda t} A`}
      </MathBlock>

      <h3>Example 2: Distinct Eigenvalues</h3>

      <p>
        If <InlineMath>A</InlineMath> is <InlineMath>2 \times 2</InlineMath> with
        eigenvalues <InlineMath>\lambda</InlineMath> and{' '}
        <InlineMath>\mu</InlineMath> where{' '}
        <InlineMath>\lambda \neq \mu</InlineMath>:
      </p>

      <MathBlock>
        {`r_1(t) = e^{\\lambda t}, \\quad r_2(t) = \\frac{e^{\\lambda t} - e^{\\mu t}}{\\lambda - \\mu}`}
      </MathBlock>

      <p>
        Therefore:
      </p>
      <MathBlock>
        {`e^{tA} = \\frac{\\lambda e^{\\mu t} - \\mu e^{\\lambda t}}{\\lambda - \\mu} I + \\frac{e^{\\lambda t} - e^{\\mu t}}{\\lambda - \\mu} A`}
      </MathBlock>

      <h3>Complex Eigenvalues</h3>

      <p>
        If <InlineMath>\lambda = \alpha + i\beta</InlineMath> and{' '}
        <InlineMath>\mu = \alpha - i\beta</InlineMath> are complex conjugates
        with <InlineMath>\beta \neq 0</InlineMath>:
      </p>
      <MathBlock>
        {`e^{tA} = \\frac{e^{\\alpha t}}{\\beta} \\{(\\beta \\cos \\beta t - \\alpha \\sin \\beta t)I + \\sin \\beta t \\cdot A\\}`}
      </MathBlock>

      <p>
        Note that the result is real even though the eigenvalues are complex.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Putzer's method is valuable because:
        <ol>
          <li>It works for <em>all</em> matrices, including non-diagonalizable ones</li>
          <li>It requires only the eigenvalues, not the eigenvectors</li>
          <li>The differential equations for <InlineMath>r_k(t)</InlineMath> are
              simple first-order linear equations solved in succession</li>
          <li>The matrix polynomials <InlineMath>P_k(A)</InlineMath> are easy to compute</li>
        </ol>
      </Callout>
    </LessonLayout>
  );
}
