import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Metric of Uniform Convergence</h2>

      <p className="mb-4">
        We have developed several notions of limit: limits of sequences in metric spaces, limiting
        values of functions, pointwise limits, and uniform limits. We can simplify this by observing
        that uniform convergence can be viewed as a special case of convergence in a metric space
        — but the "points" are now functions.
      </p>

      <Definition title="Space of Bounded Functions">
        <p>
          Suppose <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath>{' '}
          are metric spaces. We let <InlineMath>{`B(X \\to Y)`}</InlineMath> denote the space of{' '}
          <strong>bounded functions</strong> from <InlineMath>X</InlineMath> to{' '}
          <InlineMath>Y</InlineMath>:
        </p>
        <MathBlock>
          {`B(X \\to Y) := \\{f \\mid f : X \\to Y \\text{ is a bounded function}\\}`}
        </MathBlock>
      </Definition>

      <Definition title="The Sup Norm Metric">
        <p>
          We define a metric{' '}
          <InlineMath>{`d_{\\infty} : B(X \\to Y) \\times B(X \\to Y) \\to \\mathbf{R}^+`}</InlineMath>{' '}
          by:
        </p>
        <MathBlock>
          {`d_{\\infty}(f, g) := \\sup_{x \\in X} d_Y(f(x), g(x)) = \\sup\\{d_Y(f(x), g(x)) : x \\in X\\}`}
        </MathBlock>
        <p className="mt-2">
          This metric is sometimes known as the <strong>sup norm metric</strong> or the{' '}
          <InlineMath>{`L^{\\infty}`}</InlineMath> <strong>metric</strong>.
        </p>
      </Definition>

      <Callout type="info" title="Finite Distance">
        <p>
          Notice that the distance <InlineMath>{`d_{\\infty}(f, g)`}</InlineMath> is always finite
          because <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are assumed to be
          bounded on <InlineMath>X</InlineMath>.
        </p>
      </Callout>

      <Example title="Distance Between Functions">
        <p>
          Let <InlineMath>{`X := [0, 1]`}</InlineMath> and{' '}
          <InlineMath>{`Y = \\mathbf{R}`}</InlineMath>. Let{' '}
          <InlineMath>{`f : [0, 1] \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`g : [0, 1] \\to \\mathbf{R}`}</InlineMath> be the functions{' '}
          <InlineMath>{`f(x) := 2x`}</InlineMath> and <InlineMath>{`g(x) := 3x`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> are both bounded
          functions. The distance between them is:
        </p>
        <MathBlock>
          {`d_{\\infty}(f, g) = \\sup_{x \\in [0,1]} |2x - 3x| = \\sup_{x \\in [0,1]} |x| = 1`}
        </MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Uniform Convergence = Convergence in the Sup Norm
      </h3>

      <Definition title="Equivalence of Uniform Convergence and Metric Convergence">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath> be
          metric spaces. Let <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence
          of functions in <InlineMath>{`B(X \\to Y)`}</InlineMath>, and let <InlineMath>f</InlineMath>{' '}
          be another function in <InlineMath>{`B(X \\to Y)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> converges to{' '}
          <InlineMath>f</InlineMath> in the metric <InlineMath>{`d_{B(X \\to Y)}`}</InlineMath>{' '}
          <strong>if and only if</strong> <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath>{' '}
          converges uniformly to <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Unifying Perspective">
        <p>
          This shows that uniform convergence of functions is simply convergence in the metric
          space <InlineMath>{`(B(X \\to Y), d_{\\infty})`}</InlineMath>. This perspective allows us
          to apply all our results about convergence in metric spaces to sequences of functions!
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Space of Continuous Functions
      </h3>

      <Definition title="Space of Bounded Continuous Functions">
        <p>
          Let <InlineMath>{`C(X \\to Y)`}</InlineMath> be the space of{' '}
          <strong>bounded continuous functions</strong> from <InlineMath>X</InlineMath> to{' '}
          <InlineMath>Y</InlineMath>:
        </p>
        <MathBlock>
          {`C(X \\to Y) := \\{f \\in B(X \\to Y) \\mid f \\text{ is continuous}\\}`}
        </MathBlock>
        <p className="mt-2">
          This set <InlineMath>{`C(X \\to Y)`}</InlineMath> is a subset of{' '}
          <InlineMath>{`B(X \\to Y)`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="The Space of Continuous Functions is Complete">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> be a metric space, and let{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath> be a <strong>complete</strong> metric space.
        </p>
        <p className="mt-2">
          The space <InlineMath>{`(C(X \\to Y), d_{\\infty})`}</InlineMath> is a{' '}
          <strong>complete subspace</strong> of <InlineMath>{`(B(X \\to Y), d_{\\infty})`}</InlineMath>.
        </p>
        <p className="mt-2">
          In other words, every Cauchy sequence of functions in{' '}
          <InlineMath>{`C(X \\to Y)`}</InlineMath> converges to a function in{' '}
          <InlineMath>{`C(X \\to Y)`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="note" title="Why This Matters">
        <p>
          This theorem says that the uniform limit of continuous functions is continuous — which
          we already knew. But it also says that every Cauchy sequence (with respect to the sup
          norm) of continuous functions converges to a continuous function. This is a powerful
          completeness result.
        </p>
      </Callout>

      <Example title="Pointwise Convergence as a Topology">
        <p>
          While uniform convergence corresponds to a metric on function spaces, pointwise
          convergence can also be described topologically. The <strong>product topology</strong>{' '}
          (or <strong>topology of pointwise convergence</strong>) on{' '}
          <InlineMath>{`Y^X`}</InlineMath> is defined so that a sequence of functions converges
          if and only if it converges pointwise.
        </p>
        <p className="mt-2">
          This shows that both notions of convergence (pointwise and uniform) can be understood
          as convergence in appropriate topological/metric structures.
        </p>
      </Example>
    </LessonLayout>
  );
}
