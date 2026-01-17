import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Uniform Convergence and Continuity</h2>

      <p className="mb-4">
        We now give the first demonstration that uniform convergence is significantly better
        than pointwise convergence. Specifically, we show that the{' '}
        <strong>uniform limit of continuous functions is continuous</strong>.
      </p>

      <Definition title="Uniform Limits Preserve Continuity (at a Point)">
        <p>
          Suppose <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> is a sequence of
          functions from one metric space <InlineMath>{`(X, d_X)`}</InlineMath> to another{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath>, and suppose that this sequence converges{' '}
          <strong>uniformly</strong> to another function <InlineMath>{`f : X \\to Y`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>x_0</InlineMath> be a point in <InlineMath>X</InlineMath>. If the
          functions <InlineMath>{`f^{(n)}`}</InlineMath> are <strong>continuous</strong> at{' '}
          <InlineMath>x_0</InlineMath> for each <InlineMath>n</InlineMath>, then the limiting
          function <InlineMath>f</InlineMath> is also continuous at <InlineMath>x_0</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Key Result">
        <p>
          This is one of the most important properties of uniform convergence: it preserves
          continuity. This should be contrasted with the earlier example where{' '}
          <InlineMath>{`x^n`}</InlineMath> converges pointwise to a discontinuous function.
        </p>
      </Callout>

      <Definition title="Uniform Limits Preserve Continuity (Global)">
        <p>
          Let <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of functions
          from one metric space <InlineMath>{`(X, d_X)`}</InlineMath> to another{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath>, and suppose that this sequence converges
          uniformly to another function <InlineMath>{`f : X \\to Y`}</InlineMath>.
        </p>
        <p className="mt-2">
          If the functions <InlineMath>{`f^{(n)}`}</InlineMath> are continuous on{' '}
          <InlineMath>X</InlineMath> for each <InlineMath>n</InlineMath>, then the limiting
          function <InlineMath>f</InlineMath> is also continuous on <InlineMath>X</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Interchange of Limits
      </h3>

      <Definition title="Interchange of Limits and Uniform Limits">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> and <InlineMath>{`(Y, d_Y)`}</InlineMath> be
          metric spaces, with <InlineMath>Y</InlineMath> <strong>complete</strong>, and let{' '}
          <InlineMath>E</InlineMath> be a subset of <InlineMath>X</InlineMath>. Let{' '}
          <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of functions from{' '}
          <InlineMath>E</InlineMath> to <InlineMath>Y</InlineMath>, and suppose this sequence
          converges uniformly in <InlineMath>E</InlineMath> to some function{' '}
          <InlineMath>{`f : E \\to Y`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>{`x_0 \\in X`}</InlineMath> be an adherent point of{' '}
          <InlineMath>E</InlineMath>, and suppose that for each <InlineMath>n</InlineMath> the
          limit <InlineMath>{`\\lim_{x \\to x_0; x \\in E} f^{(n)}(x)`}</InlineMath> exists.
        </p>
        <p className="mt-2">
          Then the limit <InlineMath>{`\\lim_{x \\to x_0; x \\in E} f(x)`}</InlineMath> also
          exists, and we have the interchange of limits:
        </p>
        <MathBlock>
          {`\\lim_{n \\to \\infty} \\lim_{x \\to x_0; x \\in E} f^{(n)}(x) = \\lim_{x \\to x_0; x \\in E} \\lim_{n \\to \\infty} f^{(n)}(x)`}
        </MathBlock>
      </Definition>

      <Callout type="warning" title="Pointwise Convergence Fails">
        <p>
          Without uniform convergence, we cannot interchange limits. For example, with{' '}
          <InlineMath>{`f^{(n)}(x) = x^n`}</InlineMath> on <InlineMath>{`[0, 1)`}</InlineMath>:
        </p>
        <MathBlock>
          {`\\lim_{n \\to \\infty} \\lim_{x \\to 1; x \\in [0,1)} x^n = 1 \\neq 0 = \\lim_{x \\to 1; x \\in [0,1)} \\lim_{n \\to \\infty} x^n`}
        </MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Sequences and Uniform Convergence
      </h3>

      <Definition title="Uniform Convergence and Sequences">
        <p>
          Let <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of{' '}
          <strong>continuous</strong> functions from one metric space{' '}
          <InlineMath>{`(X, d_X)`}</InlineMath> to another <InlineMath>{`(Y, d_Y)`}</InlineMath>,
          and suppose that this sequence converges uniformly to another function{' '}
          <InlineMath>{`f : X \\to Y`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>{`x^{(n)}`}</InlineMath> be a sequence of points in{' '}
          <InlineMath>X</InlineMath> which converge to some limit <InlineMath>x</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`f^{(n)}(x^{(n)})`}</InlineMath> converges (in{' '}
          <InlineMath>Y</InlineMath>) to <InlineMath>{`f(x)`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Bounded Functions
      </h3>

      <Definition title="Bounded Functions">
        <p>
          A function <InlineMath>{`f : X \\to Y`}</InlineMath> from one metric space{' '}
          <InlineMath>{`(X, d_X)`}</InlineMath> to another <InlineMath>{`(Y, d_Y)`}</InlineMath>{' '}
          is <strong>bounded</strong> if <InlineMath>{`f(X)`}</InlineMath> is a bounded set.
        </p>
        <p className="mt-2">
          That is, there exists a ball <InlineMath>{`B_{(Y, d_Y)}(y_0, R)`}</InlineMath> in{' '}
          <InlineMath>Y</InlineMath> such that{' '}
          <InlineMath>{`f(x) \\in B_{(Y, d_Y)}(y_0, R)`}</InlineMath> for all{' '}
          <InlineMath>{`x \\in X`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Uniform Limits Preserve Boundedness">
        <p>
          Let <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of functions
          from one metric space <InlineMath>{`(X, d_X)`}</InlineMath> to another{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath>, and suppose that this sequence converges
          uniformly to another function <InlineMath>{`f : X \\to Y`}</InlineMath>.
        </p>
        <p className="mt-2">
          If the functions <InlineMath>{`f^{(n)}`}</InlineMath> are <strong>bounded</strong> on{' '}
          <InlineMath>X</InlineMath> for each <InlineMath>n</InlineMath>, then the limiting
          function <InlineMath>f</InlineMath> is also bounded on <InlineMath>X</InlineMath>.
        </p>
      </Definition>

      <Callout type="note" title="Uniform Convergence is Essential">
        <p>
          All of these propositions require <strong>uniform convergence</strong>; pointwise
          convergence is not sufficient. The uniform limit of continuous functions is continuous,
          and the uniform limit of bounded functions is bounded. Neither statement holds for
          pointwise limits.
        </p>
      </Callout>
    </LessonLayout>
  );
}
