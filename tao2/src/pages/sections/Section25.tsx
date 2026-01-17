import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { FourierSeriesVisualizer } from '@/components/visualizations';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Periodic Functions</h2>

      <p className="mb-4">
        The theory of Fourier series deals with the analysis of <strong>periodic functions</strong>.
        Unlike power series which analyze functions on intervals, Fourier series decompose periodic
        functions into sums of sines and cosines (or equivalently, complex exponentials).
      </p>

      <Callout type="info" title="Historical Note">
        <p>
          Jean-Baptiste Fourier (1768-1830) introduced Fourier series in an important 1807 paper
          where he used them to solve what is now known as the heat equation. At the time, the
          claim that every periodic function could be expressed as a sum of sines and cosines was
          extremely controversial.
        </p>
      </Callout>

      <Definition title="Periodic Function">
        <p>
          Let <InlineMath>{`L > 0`}</InlineMath> be a real number. A function{' '}
          <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{C}`}</InlineMath> is{' '}
          <strong>periodic with period L</strong>, or <strong>L-periodic</strong>, if we have:
        </p>
        <MathBlock>{`f(x + L) = f(x)`}</MathBlock>
        <p className="mt-2">for every real number <InlineMath>x</InlineMath>.</p>
      </Definition>

      <Example title="Basic Periodic Functions">
        <p>
          The functions <InlineMath>{`\\sin(x)`}</InlineMath> and{' '}
          <InlineMath>{`\\cos(x)`}</InlineMath> are <InlineMath>{`2\\pi`}</InlineMath>-periodic,
          as is the complex-valued function <InlineMath>{`e^{ix}`}</InlineMath>.
        </p>
        <p className="mt-2">
          These functions are also <InlineMath>{`4\\pi`}</InlineMath>-periodic,{' '}
          <InlineMath>{`6\\pi`}</InlineMath>-periodic, etc. The function{' '}
          <InlineMath>{`f(x) = x`}</InlineMath> is not periodic. The constant function{' '}
          <InlineMath>{`f(x) = 1`}</InlineMath> is <InlineMath>L</InlineMath>-periodic for every{' '}
          <InlineMath>L</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Z-Periodic Functions</h3>

      <p className="mb-4">
        For simplicity, we shall focus on functions which are{' '}
        <InlineMath>{`\\mathbf{Z}`}</InlineMath>-periodic (i.e., 1-periodic).
      </p>

      <Definition title="Z-Periodic Functions">
        <p>
          If a function <InlineMath>f</InlineMath> is 1-periodic, then we have{' '}
          <InlineMath>{`f(x + k) = f(x)`}</InlineMath> for every{' '}
          <InlineMath>{`k \\in \\mathbf{Z}`}</InlineMath>. Such functions are sometimes called{' '}
          <strong>Z-periodic</strong>.
        </p>
      </Definition>

      <Example title="Z-Periodic Examples">
        <p>
          For any integer <InlineMath>n</InlineMath>, the functions{' '}
          <InlineMath>{`\\cos(2\\pi nx)`}</InlineMath>, <InlineMath>{`\\sin(2\\pi nx)`}</InlineMath>,
          and <InlineMath>{`e^{2\\pi inx}`}</InlineMath> are all{' '}
          <InlineMath>{`\\mathbf{Z}`}</InlineMath>-periodic.
        </p>
        <p className="mt-2">
          Another example is the <strong>square wave</strong> function{' '}
          <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{C}`}</InlineMath> defined by{' '}
          <InlineMath>{`f(x) := 1`}</InlineMath> when <InlineMath>{`x \\in [n, n + \\frac{1}{2})`}</InlineMath>{' '}
          for some integer <InlineMath>n</InlineMath>, and <InlineMath>{`f(x) := 0`}</InlineMath> when{' '}
          <InlineMath>{`x \\in [n + \\frac{1}{2}, n + 1)`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Fourier Series Approximations</h3>

      <FourierSeriesVisualizer />

      <Callout type="note" title="Specifying Periodic Functions">
        <p>
          To completely specify a <InlineMath>{`\\mathbf{Z}`}</InlineMath>-periodic function{' '}
          <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{C}`}</InlineMath>, one only needs to specify
          its values on the interval <InlineMath>{`[0, 1)`}</InlineMath>, since this determines
          the values of <InlineMath>f</InlineMath> everywhere else.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Space C(R/Z; C)
      </h3>

      <Definition title="Continuous Periodic Functions">
        <p>
          The space of complex-valued continuous <InlineMath>{`\\mathbf{Z}`}</InlineMath>-periodic
          functions is denoted <InlineMath>{`C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>.
        </p>
        <p className="mt-2">
          By "continuous" we mean continuous at all points on{' '}
          <InlineMath>{`\\mathbf{R}`}</InlineMath>; merely being continuous on an interval such as{' '}
          <InlineMath>{`[0, 1]`}</InlineMath> will not suffice, as there may be a discontinuity
          between the left and right limits at the endpoints.
        </p>
      </Definition>

      <Definition title="Basic Properties of C(R/Z; C)">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Boundedness:</strong> If{' '}
            <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, then{' '}
            <InlineMath>f</InlineMath> is bounded: there exists <InlineMath>{`M > 0`}</InlineMath>{' '}
            such that <InlineMath>{`|f(x)| \\leq M`}</InlineMath> for all{' '}
            <InlineMath>{`x \\in \\mathbf{R}`}</InlineMath>.
          </li>
          <li>
            <strong>Vector space:</strong> If{' '}
            <InlineMath>{`f, g \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, then{' '}
            <InlineMath>{`f + g`}</InlineMath>, <InlineMath>{`f - g`}</InlineMath>, and{' '}
            <InlineMath>{`fg`}</InlineMath> are also in{' '}
            <InlineMath>{`C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>.
          </li>
          <li>
            <strong>Closure under limits:</strong> If <InlineMath>{`(f_n)_{n=1}^{\\infty}`}</InlineMath>{' '}
            converges uniformly to <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{C}`}</InlineMath>, then{' '}
            <InlineMath>f</InlineMath> is also in{' '}
            <InlineMath>{`C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Definition title="Sup-Norm Metric">
        <p>
          We can make <InlineMath>{`C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> into a
          metric space using the sup-norm metric:
        </p>
        <MathBlock>{`d_{\\infty}(f, g) = \\sup_{x \\in \\mathbf{R}} |f(x) - g(x)| = \\sup_{x \\in [0,1)} |f(x) - g(x)|`}</MathBlock>
        <p className="mt-2">
          This space with the sup-norm metric is complete.
        </p>
      </Definition>
    </LessonLayout>
  );
}
