import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2>Legendre Polynomials</h2>

      <p>
        The <strong>Legendre polynomials</strong> are the polynomial solutions
        of the Legendre equation when <InlineMath>{`\\alpha = n`}</InlineMath> is a
        nonnegative integer. They form an orthogonal basis for polynomial
        functions on <InlineMath>{`[-1, 1]`}</InlineMath> and appear throughout
        mathematical physics.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>Legendre polynomial</strong> of
        degree <InlineMath>n</InlineMath> is:
        <MathBlock>
          {`P_n(x) = \\frac{1}{2^n} \\sum_{r=0}^{[n/2]} \\frac{(-1)^r (2n-2r)!}{r!(n-r)!(n-2r)!} x^{n-2r}`}
        </MathBlock>
        where <InlineMath>{`[n/2]`}</InlineMath> denotes the greatest integer{' '}
        <InlineMath>{`\\leq n/2`}</InlineMath>.
      </Callout>

      <h3>First Several Legendre Polynomials</h3>

      <MathBlock>
        {`P_0(x) = 1`}
      </MathBlock>
      <MathBlock>
        {`P_1(x) = x`}
      </MathBlock>
      <MathBlock>
        {`P_2(x) = \\frac{1}{2}(3x^2 - 1)`}
      </MathBlock>
      <MathBlock>
        {`P_3(x) = \\frac{1}{2}(5x^3 - 3x)`}
      </MathBlock>
      <MathBlock>
        {`P_4(x) = \\frac{1}{8}(35x^4 - 30x^2 + 3)`}
      </MathBlock>
      <MathBlock>
        {`P_5(x) = \\frac{1}{8}(63x^5 - 70x^3 + 15x)`}
      </MathBlock>

      <h3>Rodrigues' Formula</h3>

      <Callout type="info">
        <strong>Rodrigues' Formula:</strong>
        <MathBlock>
          {`P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} (x^2 - 1)^n`}
        </MathBlock>
        This elegant formula expresses <InlineMath>{`P_n`}</InlineMath> as the{' '}
        <InlineMath>n</InlineMath>th derivative of <InlineMath>{`(x^2-1)^n`}</InlineMath>.
      </Callout>

      <h3>Key Properties</h3>

      <p><strong>Boundary values:</strong></p>
      <MathBlock>
        {`P_n(1) = 1, \\quad P_n(-1) = (-1)^n`}
      </MathBlock>

      <p><strong>Parity:</strong></p>
      <MathBlock>
        {`P_n(-x) = (-1)^n P_n(x)`}
      </MathBlock>
      <p>
        (<InlineMath>{`P_n`}</InlineMath> is even when <InlineMath>n</InlineMath> is
        even, odd when <InlineMath>n</InlineMath> is odd)
      </p>

      <h3>Orthogonality</h3>

      <Callout type="info">
        <strong>Orthogonality Relation:</strong>
        <MathBlock>
          {`\\int_{-1}^1 P_n(x) P_m(x)\\, dx = 0 \\quad \\text{if } m \\neq n`}
        </MathBlock>
        <strong>Norm:</strong>
        <MathBlock>
          {`\\|P_n\\|^2 = \\int_{-1}^1 [P_n(x)]^2\\, dx = \\frac{2}{2n+1}`}
        </MathBlock>
      </Callout>

      <h3>Expansion in Legendre Polynomials</h3>

      <p>
        Every polynomial <InlineMath>f</InlineMath> of degree{' '}
        <InlineMath>n</InlineMath> can be written as:
      </p>
      <MathBlock>
        {`f(x) = \\sum_{k=0}^n c_k P_k(x)`}
      </MathBlock>
      <p>where the coefficients are:</p>
      <MathBlock>
        {`c_k = \\frac{2k+1}{2} \\int_{-1}^1 f(x) P_k(x)\\, dx`}
      </MathBlock>

      <h3>Connection to Gram-Schmidt</h3>

      <p>
        The Legendre polynomials are (up to normalization) the result of
        applying the Gram-Schmidt process to the sequence{' '}
        <InlineMath>{`1, x, x^2, \\ldots`}</InlineMath> with respect to the inner
        product <InlineMath>{`(f,g) = \\int_{-1}^1 f(x)g(x)\\, dx`}</InlineMath>.
      </p>

      <h3>Zeros</h3>

      <p>
        The Legendre polynomial <InlineMath>{`P_n`}</InlineMath> has exactly{' '}
        <InlineMath>n</InlineMath> distinct real zeros, all of which lie in the
        open interval <InlineMath>{`(-1, 1)`}</InlineMath>. These zeros are the
        nodes used in <strong>Gaussian quadrature</strong>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The Legendre polynomials form an
        orthogonal basis for the space of polynomials on{' '}
        <InlineMath>{`[-1, 1]`}</InlineMath>. Their orthogonality follows from being
        eigenfunctions of a symmetric Sturm-Liouville operator with distinct
        eigenvalues. This connects spectral theory, approximation theory, and
        numerical analysis in a beautiful way.
      </Callout>
    </LessonLayout>
  );
}
