import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        Uniform Convergence and Derivatives
      </h2>

      <p className="mb-4">
        We have seen how uniform convergence interacts well with continuity, limits, and integrals.
        Now we investigate how it interacts with <strong>derivatives</strong>.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Uniform Convergence of Functions Does Not Imply Convergence of Derivatives
      </h3>

      <Callout type="warning" title="Counterexample">
        <p>
          If <InlineMath>{`f_n`}</InlineMath> converges uniformly to <InlineMath>f</InlineMath>,
          this says <strong>nothing</strong> about the convergence of the derivatives{' '}
          <InlineMath>{`f_n'`}</InlineMath>.
        </p>
      </Callout>

      <Example title="Derivatives Don't Converge">
        <p>
          Consider <InlineMath>{`f_n : [0, 2\\pi] \\to \\mathbf{R}`}</InlineMath> defined by{' '}
          <InlineMath>{`f_n(x) := n^{-1/2} \\sin(nx)`}</InlineMath>, and let{' '}
          <InlineMath>{`f(x) := 0`}</InlineMath> be the zero function.
        </p>
        <p className="mt-2">
          Since <InlineMath>{`|\\sin|`}</InlineMath> is bounded by 1, we have{' '}
          <InlineMath>{`d_{\\infty}(f_n, f) \\leq n^{-1/2} \\to 0`}</InlineMath>, so{' '}
          <InlineMath>{`f_n`}</InlineMath> converges uniformly to <InlineMath>f</InlineMath>.
        </p>
        <p className="mt-2">
          However, <InlineMath>{`f_n'(x) = n^{1/2} \\cos(nx)`}</InlineMath>, so{' '}
          <InlineMath>{`|f_n'(0) - f'(0)| = n^{1/2} \\to \\infty`}</InlineMath>.
        </p>
        <p className="mt-2">
          Thus <InlineMath>{`f_n'`}</InlineMath> does <strong>not</strong> converge to{' '}
          <InlineMath>{`f'`}</InlineMath>, not even pointwise! In particular:
        </p>
        <MathBlock>{`\\frac{d}{dx} \\lim_{n \\to \\infty} f_n(x) \\neq \\lim_{n \\to \\infty} \\frac{d}{dx} f_n(x)`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Uniform Limit of Differentiable Functions May Not Be Differentiable
      </h3>

      <Example title="Limit May Not Be Differentiable">
        <p>
          Consider <InlineMath>{`f_n : [-1, 1] \\to \\mathbf{R}`}</InlineMath> defined by{' '}
          <InlineMath>{`f_n(x) := \\sqrt{\\frac{1}{n^2} + x^2}`}</InlineMath>.
        </p>
        <p className="mt-2">
          These functions are <strong>differentiable</strong>. Also, one can verify that:
        </p>
        <MathBlock>{`|x| \\leq f_n(x) \\leq |x| + \\frac{1}{n}`}</MathBlock>
        <p className="mt-2">
          So by the squeeze test, <InlineMath>{`f_n`}</InlineMath> converges uniformly to the
          absolute value function <InlineMath>{`f(x) := |x|`}</InlineMath>.
        </p>
        <p className="mt-2">
          But <InlineMath>{`f(x) = |x|`}</InlineMath> is <strong>not differentiable</strong> at 0!
          Thus, the uniform limit of differentiable functions need not be differentiable.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Correct Statement
      </h3>

      <p className="mb-4">
        While uniform convergence of functions says nothing about derivatives, the{' '}
        <strong>converse</strong> is true: uniform convergence of <em>derivatives</em> implies
        useful conclusions.
      </p>

      <Definition title="Interchange of Limits and Derivatives">
        <p>
          Let <InlineMath>{`[a, b]`}</InlineMath> be an interval, and for every integer{' '}
          <InlineMath>{`n \\geq 1`}</InlineMath>, let{' '}
          <InlineMath>{`f_n : [a, b] \\to \\mathbf{R}`}</InlineMath> be a differentiable function
          whose derivative <InlineMath>{`f_n' : [a, b] \\to \\mathbf{R}`}</InlineMath> is continuous.
        </p>
        <p className="mt-2">
          Suppose that the derivatives <InlineMath>{`f_n'`}</InlineMath> converge{' '}
          <strong>uniformly</strong> to a function <InlineMath>{`g : [a, b] \\to \\mathbf{R}`}</InlineMath>.
          Suppose also that there exists a point <InlineMath>{`x_0`}</InlineMath> such that the
          limit <InlineMath>{`\\lim_{n \\to \\infty} f_n(x_0)`}</InlineMath> exists.
        </p>
        <p className="mt-2">
          Then the functions <InlineMath>{`f_n`}</InlineMath> converge uniformly to a
          differentiable function <InlineMath>f</InlineMath>, and the derivative of{' '}
          <InlineMath>f</InlineMath> equals <InlineMath>g</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Key Result">
        <p>
          Informally: if <InlineMath>{`f_n'`}</InlineMath> converges uniformly, and{' '}
          <InlineMath>{`f_n(x_0)`}</InlineMath> converges for some <InlineMath>{`x_0`}</InlineMath>,
          then <InlineMath>{`f_n`}</InlineMath> also converges uniformly, and:
        </p>
        <MathBlock>{`\\frac{d}{dx} \\lim_{n \\to \\infty} f_n(x) = \\lim_{n \\to \\infty} \\frac{d}{dx} f_n(x)`}</MathBlock>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Series Version</h3>

      <Definition title="Interchange of Series and Derivatives">
        <p>
          Let <InlineMath>{`[a, b]`}</InlineMath> be an interval, and for every integer{' '}
          <InlineMath>{`n \\geq 1`}</InlineMath>, let{' '}
          <InlineMath>{`f_n : [a, b] \\to \\mathbf{R}`}</InlineMath> be a differentiable function
          whose derivative <InlineMath>{`f_n' : [a, b] \\to \\mathbf{R}`}</InlineMath> is continuous.
        </p>
        <p className="mt-2">
          Suppose that the series <InlineMath>{`\\sum_{n=1}^{\\infty} \\|f_n'\\|_{\\infty}`}</InlineMath>{' '}
          is <strong>absolutely convergent</strong>. Suppose also that the series{' '}
          <InlineMath>{`\\sum_{n=1}^{\\infty} f_n(x_0)`}</InlineMath> is convergent for some{' '}
          <InlineMath>{`x_0 \\in [a, b]`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`\\sum_{n=1}^{\\infty} f_n`}</InlineMath> converges uniformly on{' '}
          <InlineMath>{`[a, b]`}</InlineMath> to a differentiable function, and:
        </p>
        <MathBlock>{`\\frac{d}{dx} \\sum_{n=1}^{\\infty} f_n(x) = \\sum_{n=1}^{\\infty} \\frac{d}{dx} f_n(x)`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        A Continuous, Nowhere Differentiable Function
      </h3>

      <Example title="Weierstrass Function">
        <p>
          Let <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> be the function:
        </p>
        <MathBlock>{`f(x) := \\sum_{n=1}^{\\infty} 4^{-n} \\cos(32^n \\pi x)`}</MathBlock>
        <p className="mt-2">
          This series is <strong>uniformly convergent</strong> by the Weierstrass M-test,
          since <InlineMath>{`\\sum_{n=1}^{\\infty} 4^{-n}`}</InlineMath> converges.
        </p>
        <p className="mt-2">
          Since each individual function <InlineMath>{`4^{-n} \\cos(32^n \\pi x)`}</InlineMath>{' '}
          is continuous, the function <InlineMath>f</InlineMath> is also <strong>continuous</strong>.
        </p>
        <p className="mt-2">
          However, it can be shown that <InlineMath>f</InlineMath> is{' '}
          <strong>not differentiable at any point</strong> — it is a{' '}
          <em>nowhere differentiable function</em>, continuous everywhere but differentiable nowhere!
        </p>
      </Example>

      <Callout type="info" title="Historical Note">
        <p>
          This example, discovered by Weierstrass, was shocking to 19th-century mathematicians
          who believed that continuous functions must be differentiable "almost everywhere."
          It demonstrates how counterintuitive uniform limits can be.
        </p>
      </Callout>
    </LessonLayout>
  );
}
