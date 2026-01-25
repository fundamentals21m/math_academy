import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2>Calculus of Matrix Functions</h2>

      <p>
        To solve systems of differential equations using matrix methods, we
        need to extend the concepts of calculus—integration, differentiation,
        continuity—to matrix-valued functions.
      </p>

      <h3>Integration of Matrix Functions</h3>

      <Callout type="info">
        <strong>Definition:</strong> If <InlineMath>{`P(t) = [p_{ij}(t)]`}</InlineMath>{' '}
        is a matrix function, the integral is defined entry-by-entry:
        <MathBlock>
          {`\\int_a^b P(t)\\, dt = \\left[\\int_a^b p_{ij}(t)\\, dt\\right]`}
        </MathBlock>
      </Callout>

      <p>
        That is, integrate each entry of the matrix. This assumes each entry is
        integrable on <InlineMath>{`[a, b]`}</InlineMath>.
      </p>

      <h3>Linearity of Integration</h3>

      <p>
        The linearity property generalizes to matrices. For matrix functions{' '}
        <InlineMath>P</InlineMath> and <InlineMath>Q</InlineMath> and scalar{' '}
        <InlineMath>c</InlineMath>:
      </p>
      <MathBlock>
        {`\\int_a^b (P(t) + Q(t))\\, dt = \\int_a^b P(t)\\, dt + \\int_a^b Q(t)\\, dt`}
      </MathBlock>
      <MathBlock>
        {`\\int_a^b cP(t)\\, dt = c \\int_a^b P(t)\\, dt`}
      </MathBlock>

      <h3>Continuity</h3>

      <Callout type="info">
        <strong>Definition:</strong> A matrix function{' '}
        <InlineMath>{`P = [p_{ij}]`}</InlineMath> is <strong>continuous</strong>{' '}
        at <InlineMath>t</InlineMath> if each entry{' '}
        <InlineMath>{`p_{ij}`}</InlineMath> is continuous at{' '}
        <InlineMath>t</InlineMath>.
      </Callout>

      <h3>Differentiation</h3>

      <Callout type="info">
        <strong>Definition:</strong> The derivative of a matrix function{' '}
        <InlineMath>{`P = [p_{ij}]`}</InlineMath> is defined entry-by-entry:
        <MathBlock>
          {`P'(t) = [p_{ij}' (t)]`}
        </MathBlock>
        whenever all derivatives <InlineMath>{`p_{ij}'(t)`}</InlineMath> exist.
      </Callout>

      <h3>Differentiation Rules</h3>

      <p>
        The basic differentiation rules extend to matrix functions:
      </p>

      <p><strong>Sum rule:</strong> If <InlineMath>P</InlineMath> and{' '}
        <InlineMath>Q</InlineMath> have the same size:</p>
      <MathBlock>{`(P + Q)' = P' + Q'`}</MathBlock>

      <p><strong>Product rule:</strong> If the product <InlineMath>{`PQ`}</InlineMath>{' '}
        is defined:</p>
      <MathBlock>{`(PQ)' = PQ' + P'Q`}</MathBlock>

      <Callout type="warning">
        <strong>Important:</strong> In the product rule, order matters! Since
        matrix multiplication is not commutative, we cannot write{' '}
        <InlineMath>{`P'Q + PQ'`}</InlineMath> and{' '}
        <InlineMath>{`PQ' + P'Q`}</InlineMath> interchangeably unless we specify
        which factor the derivative applies to.
      </Callout>

      <p><strong>Chain rule:</strong> If <InlineMath>{`F(t) = P[g(t)]`}</InlineMath>,
        where <InlineMath>P</InlineMath> is a differentiable matrix function and{' '}
        <InlineMath>g</InlineMath> is a differentiable scalar function:</p>
      <MathBlock>{`F'(t) = g'(t) P'[g(t)]`}</MathBlock>

      <h3>Fundamental Theorems</h3>

      <p>
        <strong>Zero-derivative theorem:</strong> If{' '}
        <InlineMath>{`P'(t) = 0`}</InlineMath> for all <InlineMath>t</InlineMath> in
        an interval, then <InlineMath>P</InlineMath> is constant on that
        interval.
      </p>

      <p>
        <strong>First fundamental theorem:</strong> If <InlineMath>P</InlineMath>{' '}
        is continuous on <InlineMath>{`[a, b]`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\frac{d}{dx} \\int_a^x P(t)\\, dt = P(x)`}
      </MathBlock>

      <p>
        <strong>Second fundamental theorem:</strong> If{' '}
        <InlineMath>{`P'`}</InlineMath> is continuous on{' '}
        <InlineMath>{`[a, b]`}</InlineMath>:
      </p>
      <MathBlock>
        {`\\int_a^b P'(t)\\, dt = P(b) - P(a)`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The calculus of matrix functions is
        remarkably parallel to scalar calculus—we simply apply scalar operations
        entry-by-entry. This "component-wise" extension preserves most of the
        familiar rules, with the important caveat that non-commutativity
        requires care in the order of products.
      </Callout>
    </LessonLayout>
  );
}
