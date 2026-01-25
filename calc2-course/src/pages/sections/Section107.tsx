import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section107() {
  return (
    <LessonLayout sectionId={107}>
      <h2>Second Fundamental Theorem for Line Integrals</h2>

      <p>
        The second fundamental theorem for real functions states that:
      </p>
      <MathBlock>{`\\int_a^b \\varphi'(t) \\, dt = \\varphi(b) - \\varphi(a)`}</MathBlock>
      <p>
        provided that <InlineMath>{`\\varphi'`}</InlineMath> is continuous on some open
        interval containing both <InlineMath>{'a'}</InlineMath> and{' '}
        <InlineMath>{'b'}</InlineMath>. We now extend this result to line integrals.
      </p>

      <h3>Preliminary Result</h3>

      <Callout type="info">
        <strong>Theorem 10.2:</strong> Let <InlineMath>{'\\varphi'}</InlineMath> be a real
        function that is continuous on a closed interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath> and assume that the integral{' '}
        <InlineMath>{`\\int_a^b \\varphi'(t) \\, dt`}</InlineMath> exists. If{' '}
        <InlineMath>{`\\varphi'`}</InlineMath> is continuous on the open interval{' '}
        <InlineMath>{'(a, b)'}</InlineMath>, we have:
        <MathBlock>{`\\int_a^b \\varphi'(t) \\, dt = \\varphi(b) - \\varphi(a)`}</MathBlock>
      </Callout>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 10.3 (Second Fundamental Theorem for Line Integrals):</strong>{' '}
        Let <InlineMath>{'\\varphi'}</InlineMath> be a differentiable scalar field with a
        continuous gradient <InlineMath>{'\\nabla\\varphi'}</InlineMath> on an open
        connected set <InlineMath>{'S'}</InlineMath> in{' '}
        <InlineMath>{'\\mathbb{R}^n'}</InlineMath>. Then for any two points{' '}
        <InlineMath>{'\\mathbf{a}'}</InlineMath> and <InlineMath>{'\\mathbf{b}'}</InlineMath>{' '}
        joined by a piecewise smooth path <InlineMath>{'\\alpha'}</InlineMath> in{' '}
        <InlineMath>{'S'}</InlineMath>, we have:
        <MathBlock>{`\\int_{\\mathbf{a}}^{\\mathbf{b}} \\nabla\\varphi \\cdot d\\alpha = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})`}</MathBlock>
      </Callout>

      <h3>Proof</h3>

      <p>
        Choose any two points <InlineMath>{'\\mathbf{a}'}</InlineMath> and{' '}
        <InlineMath>{'\\mathbf{b}'}</InlineMath> in <InlineMath>{'S'}</InlineMath> and join
        them by a piecewise smooth path <InlineMath>{'\\alpha'}</InlineMath> in{' '}
        <InlineMath>{'S'}</InlineMath> defined on an interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath>. Assume first that{' '}
        <InlineMath>{'\\alpha'}</InlineMath> is smooth on <InlineMath>{'[a, b]'}</InlineMath>.
      </p>

      <p>
        The line integral of <InlineMath>{'\\nabla\\varphi'}</InlineMath> from{' '}
        <InlineMath>{'\\mathbf{a}'}</InlineMath> to <InlineMath>{'\\mathbf{b}'}</InlineMath>{' '}
        along <InlineMath>{'\\alpha'}</InlineMath> is:
      </p>
      <MathBlock>{`\\int_{\\mathbf{a}}^{\\mathbf{b}} \\nabla\\varphi \\cdot d\\alpha = \\int_a^b \\nabla\\varphi[\\alpha(t)] \\cdot \\alpha'(t) \\, dt`}</MathBlock>

      <p>
        By the chain rule:
      </p>
      <MathBlock>{`\\nabla\\varphi[\\alpha(t)] \\cdot \\alpha'(t) = g'(t)`}</MathBlock>
      <p>
        where <InlineMath>{'g'}</InlineMath> is the composite function defined on{' '}
        <InlineMath>{'[a, b]'}</InlineMath> by{' '}
        <InlineMath>{'g(t) = \\varphi[\\alpha(t)]'}</InlineMath>.
      </p>

      <p>
        The derivative <InlineMath>{`g'`}</InlineMath> is continuous on the open interval{' '}
        <InlineMath>{'(a, b)'}</InlineMath> because{' '}
        <InlineMath>{'\\nabla\\varphi'}</InlineMath> is continuous on{' '}
        <InlineMath>{'S'}</InlineMath> and <InlineMath>{'\\alpha'}</InlineMath> is smooth.
        Therefore, by Theorem 10.2:
      </p>
      <MathBlock>{`\\int \\nabla\\varphi \\cdot d\\alpha = \\int_a^b g'(t) \\, dt = g(b) - g(a) = \\varphi[\\alpha(b)] - \\varphi[\\alpha(a)] = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})`}</MathBlock>

      <p>
        When <InlineMath>{'\\alpha'}</InlineMath> is piecewise smooth, we partition the
        interval <InlineMath>{'[a, b]'}</InlineMath> into a finite number of subintervals{' '}
        <InlineMath>{'[t_{k-1}, t_k]'}</InlineMath> in each of which{' '}
        <InlineMath>{'\\alpha'}</InlineMath> is smooth, and apply the result to each:
      </p>
      <MathBlock>{`\\int_a^b \\nabla\\varphi = \\sum_{k=1}^r [\\varphi(\\alpha(t_k)) - \\varphi(\\alpha(t_{k-1}))] = \\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a})`}</MathBlock>

      <h3>Important Consequences</h3>

      <Callout type="info">
        <strong>Corollary 1:</strong> The line integral of a gradient is{' '}
        <strong>independent of the path</strong> in any open connected set{' '}
        <InlineMath>{'S'}</InlineMath> in which the gradient is continuous.
      </Callout>

      <Callout type="info">
        <strong>Corollary 2:</strong> For a <strong>closed path</strong> (where{' '}
        <InlineMath>{'\\mathbf{b} = \\mathbf{a}'}</InlineMath>), we have{' '}
        <InlineMath>{'\\varphi(\\mathbf{b}) - \\varphi(\\mathbf{a}) = 0'}</InlineMath>.
        Therefore, the <strong>line integral of a continuous gradient is zero around
        every piecewise smooth closed path</strong> in <InlineMath>{'S'}</InlineMath>.
      </Callout>

      <h3>Physical Interpretation</h3>

      <p>
        If <InlineMath>{'f = \\nabla\\varphi'}</InlineMath> represents a force field, then
        the work done by <InlineMath>{'f'}</InlineMath> in moving a particle from{' '}
        <InlineMath>{'\\mathbf{a}'}</InlineMath> to <InlineMath>{'\\mathbf{b}'}</InlineMath>{' '}
        depends only on the values of the potential <InlineMath>{'\\varphi'}</InlineMath>{' '}
        at the endpoints. Moving around any closed loop returns zero net work.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The second fundamental theorem for line integrals
        shows that gradients have path-independent line integrals. The line integral
        of <InlineMath>{'\\nabla\\varphi'}</InlineMath> equals the change in{' '}
        <InlineMath>{'\\varphi'}</InlineMath>, regardless of the path taken. This is the
        mathematical foundation for potential energy in physics.
      </Callout>
    </LessonLayout>
  );
}
