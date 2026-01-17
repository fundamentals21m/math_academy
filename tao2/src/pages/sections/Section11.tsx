import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { UniformConvergenceVisualizer } from '@/components/visualizations';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Pointwise and Uniform Convergence</h2>

      <p className="mb-4">
        We now consider what it means for a sequence of <strong>functions</strong>{' '}
        <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> to converge. There are several
        different concepts of convergence for functions; here we describe the two most important
        ones: <strong>pointwise convergence</strong> and <strong>uniform convergence</strong>.
      </p>

      <Definition title="Pointwise Convergence">
        <p>
          Let <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of functions
          from one metric space <InlineMath>{`(X, d_X)`}</InlineMath> to another{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath>, and let <InlineMath>{`f : X \\to Y`}</InlineMath>{' '}
          be another function.
        </p>
        <p className="mt-2">
          We say that <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath>{' '}
          <strong>converges pointwise</strong> to <InlineMath>f</InlineMath> on{' '}
          <InlineMath>X</InlineMath> if:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} f^{(n)}(x) = f(x)`}</MathBlock>
        <p className="mt-2">
          for all <InlineMath>{`x \\in X`}</InlineMath>. Equivalently,{' '}
          <InlineMath>{`\\lim_{n \\to \\infty} d_Y(f^{(n)}(x), f(x)) = 0`}</InlineMath> for all{' '}
          <InlineMath>x</InlineMath>.
        </p>
        <p className="mt-2">
          We call <InlineMath>f</InlineMath> the <strong>pointwise limit</strong> of the functions{' '}
          <InlineMath>{`f^{(n)}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Simple Pointwise Convergence">
        <p>
          Consider the functions <InlineMath>{`f^{(n)} : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath>{' '}
          defined by <InlineMath>{`f^{(n)}(x) := x/n`}</InlineMath>, and let{' '}
          <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> be the zero function{' '}
          <InlineMath>{`f(x) := 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`f^{(n)}`}</InlineMath> converges pointwise to{' '}
          <InlineMath>f</InlineMath>, since for each fixed real number <InlineMath>x</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} f^{(n)}(x) = \\lim_{n \\to \\infty} \\frac{x}{n} = 0 = f(x)`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Problems with Pointwise Convergence
      </h3>

      <Callout type="warning" title="Pointwise Convergence is Too Weak">
        <p>
          Pointwise convergence has several significant disadvantages: it does not preserve
          continuity, derivatives, limits, or integrals.
        </p>
      </Callout>

      <Example title="Pointwise Limit May Not Be Continuous">
        <p>
          Consider <InlineMath>{`f^{(n)} : [0, 1] \\to \\mathbf{R}`}</InlineMath> defined by{' '}
          <InlineMath>{`f^{(n)}(x) := x^n`}</InlineMath>, and let{' '}
          <InlineMath>{`f : [0, 1] \\to \\mathbf{R}`}</InlineMath> be defined by{' '}
          <InlineMath>{`f(x) := 1`}</InlineMath> when <InlineMath>{`x = 1`}</InlineMath> and{' '}
          <InlineMath>{`f(x) := 0`}</InlineMath> when <InlineMath>{`0 \\leq x < 1`}</InlineMath>.
        </p>
        <p className="mt-2">
          The functions <InlineMath>{`f^{(n)}`}</InlineMath> are <strong>continuous</strong> and
          converge pointwise to <InlineMath>f</InlineMath>, however the limiting function{' '}
          <InlineMath>f</InlineMath> is <strong>not continuous</strong>!
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Visualizing the Difference</h3>

      <UniformConvergenceVisualizer />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Uniform Convergence</h3>

      <Definition title="Uniform Convergence">
        <p>
          Let <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of functions
          from one metric space <InlineMath>{`(X, d_X)`}</InlineMath> to another{' '}
          <InlineMath>{`(Y, d_Y)`}</InlineMath>, and let <InlineMath>{`f : X \\to Y`}</InlineMath>{' '}
          be another function.
        </p>
        <p className="mt-2">
          We say that <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath>{' '}
          <strong>converges uniformly</strong> to <InlineMath>f</InlineMath> on{' '}
          <InlineMath>X</InlineMath> if for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>{' '}
          there exists <InlineMath>{`N > 0`}</InlineMath> such that{' '}
          <InlineMath>{`d_Y(f^{(n)}(x), f(x)) < \\varepsilon`}</InlineMath> for every{' '}
          <InlineMath>{`n > N`}</InlineMath> <strong>and</strong>{' '}
          <InlineMath>{`x \\in X`}</InlineMath>.
        </p>
        <p className="mt-2">
          We call <InlineMath>f</InlineMath> the <strong>uniform limit</strong> of the functions{' '}
          <InlineMath>{`f^{(n)}`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Key Difference">
        <p>
          In <strong>pointwise convergence</strong>, the <InlineMath>N</InlineMath> is allowed
          to depend on <InlineMath>x</InlineMath>. In <strong>uniform convergence</strong>, the
          same <InlineMath>N</InlineMath> must work for all <InlineMath>x</InlineMath>{' '}
          simultaneously.
        </p>
        <p className="mt-2">
          This distinction is analogous to the distinction between{' '}
          <strong>continuity</strong> and <strong>uniform continuity</strong>.
        </p>
      </Callout>

      <Example title="Uniform Convergence Example">
        <p>
          Let <InlineMath>{`f^{(n)} : [0, 1] \\to \\mathbf{R}`}</InlineMath> be the functions{' '}
          <InlineMath>{`f^{(n)}(x) := x/n`}</InlineMath>, and let{' '}
          <InlineMath>{`f : [0, 1] \\to \\mathbf{R}`}</InlineMath> be the zero function. Then{' '}
          <InlineMath>{`f^{(n)}`}</InlineMath> converges <strong>uniformly</strong> to{' '}
          <InlineMath>f</InlineMath>.
        </p>
        <p className="mt-2">
          For any <InlineMath>{`x \\in [0, 1]`}</InlineMath> and{' '}
          <InlineMath>{`n \\geq N`}</InlineMath>:
        </p>
        <MathBlock>
          {`|f^{(n)}(x) - f(x)| = |x/n - 0| = x/n \\leq 1/n \\leq 1/N`}
        </MathBlock>
        <p className="mt-2">
          So if we choose <InlineMath>{`N > 1/\\varepsilon`}</InlineMath>, we have{' '}
          <InlineMath>{`|f^{(n)}(x) - f(x)| < \\varepsilon`}</InlineMath> for all{' '}
          <InlineMath>{`n \\geq N`}</InlineMath> and all <InlineMath>{`x \\in [0, 1]`}</InlineMath>.
        </p>
      </Example>

      <Definition title="Uniform Implies Pointwise">
        <p>
          If <InlineMath>{`f^{(n)}`}</InlineMath> converges <strong>uniformly</strong> to{' '}
          <InlineMath>f</InlineMath> on <InlineMath>X</InlineMath>, then it also converges{' '}
          <strong>pointwise</strong> to the same function <InlineMath>f</InlineMath>.
        </p>
        <p className="mt-2">
          The converse is <strong>not true</strong>: the functions{' '}
          <InlineMath>{`f^{(n)}(x) := x^n`}</InlineMath> on <InlineMath>{`[0, 1]`}</InlineMath>{' '}
          converge pointwise but not uniformly.
        </p>
      </Definition>

      <Callout type="success" title="Key Insight">
        <p>
          The problem with pointwise convergence in the <InlineMath>{`x^n`}</InlineMath> example
          is that the rate of convergence varies substantially with <InlineMath>x</InlineMath>.
          The closer <InlineMath>x</InlineMath> gets to 1, the longer one has to wait for{' '}
          <InlineMath>{`f^{(n)}(x)`}</InlineMath> to get close to <InlineMath>{`f(x)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Uniform convergence requires the convergence rate to be <strong>uniform</strong> across
          all points.
        </p>
      </Callout>
    </LessonLayout>
  );
}
