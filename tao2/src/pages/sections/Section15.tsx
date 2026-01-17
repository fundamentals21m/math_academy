import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        Uniform Convergence and Integration
      </h2>

      <p className="mb-4">
        We now connect uniform convergence with Riemann integration, by showing that uniform
        limits can be safely <strong>interchanged with integrals</strong>.
      </p>

      <Definition title="Interchange of Limits and Integrals">
        <p>
          Let <InlineMath>{`[a, b]`}</InlineMath> be an interval, and for each integer{' '}
          <InlineMath>{`n \\geq 1`}</InlineMath>, let{' '}
          <InlineMath>{`f^{(n)} : [a, b] \\to \\mathbf{R}`}</InlineMath> be a{' '}
          <strong>Riemann-integrable</strong> function. Suppose <InlineMath>{`f^{(n)}`}</InlineMath>{' '}
          converges <strong>uniformly</strong> on <InlineMath>{`[a, b]`}</InlineMath> to a function{' '}
          <InlineMath>{`f : [a, b] \\to \\mathbf{R}`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>f</InlineMath> is also <strong>Riemann integrable</strong>, and:
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\int_{[a,b]} f^{(n)} = \\int_{[a,b]} f`}</MathBlock>
      </Definition>

      <Callout type="success" title="Key Result">
        <p>
          We can rearrange limits and integrals (on compact intervals <InlineMath>{`[a, b]`}</InlineMath>):
        </p>
        <MathBlock>
          {`\\lim_{n \\to \\infty} \\int_{[a,b]} f^{(n)} = \\int_{[a,b]} \\lim_{n \\to \\infty} f^{(n)}`}
        </MathBlock>
        <p className="mt-2">
          <strong>provided that the convergence is uniform.</strong>
        </p>
      </Callout>

      <Callout type="warning" title="Pointwise Convergence Fails">
        <p>
          Without uniform convergence, we cannot interchange limits and integrals. For example,
          consider <InlineMath>{`f^{(n)}(x) := 2n`}</InlineMath> when{' '}
          <InlineMath>{`x \\in [1/2n, 1/n]`}</InlineMath> and{' '}
          <InlineMath>{`f^{(n)}(x) := 0`}</InlineMath> otherwise.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`f^{(n)}`}</InlineMath> converges pointwise to the zero function, but
          <InlineMath>{`\\int_{[0,1]} f^{(n)} = 1`}</InlineMath> for every <InlineMath>n</InlineMath>,
          while <InlineMath>{`\\int_{[0,1]} 0 = 0`}</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Proof Sketch</h3>

      <p className="mb-4">
        Let <InlineMath>{`\\varepsilon > 0`}</InlineMath>. Since <InlineMath>{`f^{(n)}`}</InlineMath>{' '}
        converges uniformly to <InlineMath>f</InlineMath>, there exists{' '}
        <InlineMath>{`N > 0`}</InlineMath> such that{' '}
        <InlineMath>{`|f^{(n)}(x) - f(x)| < \\varepsilon`}</InlineMath> for all{' '}
        <InlineMath>{`n > N`}</InlineMath> and <InlineMath>{`x \\in [a, b]`}</InlineMath>.
      </p>

      <p className="mb-4">This means:</p>
      <MathBlock>{`f^{(n)}(x) - \\varepsilon < f(x) < f^{(n)}(x) + \\varepsilon`}</MathBlock>

      <p className="mb-4">Integrating on <InlineMath>{`[a, b]`}</InlineMath>:</p>
      <MathBlock>
        {`\\int_{[a,b]} (f^{(n)} - \\varepsilon) \\leq \\underline{\\int}_{[a,b]} f \\leq \\overline{\\int}_{[a,b]} f \\leq \\int_{[a,b]} (f^{(n)} + \\varepsilon)`}
      </MathBlock>

      <p className="mb-4">
        Since <InlineMath>{`f^{(n)}`}</InlineMath> is Riemann integrable, this shows that the
        upper and lower integrals of <InlineMath>f</InlineMath> differ by at most{' '}
        <InlineMath>{`2\\varepsilon(b-a)`}</InlineMath>, hence they are equal.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Series Version</h3>

      <Definition title="Interchange of Series and Integrals">
        <p>
          Let <InlineMath>{`[a, b]`}</InlineMath> be an interval, and let{' '}
          <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of Riemann
          integrable functions on <InlineMath>{`[a, b]`}</InlineMath> such that the series{' '}
          <InlineMath>{`\\sum_{n=1}^{\\infty} f^{(n)}`}</InlineMath> is{' '}
          <strong>uniformly convergent</strong>.
        </p>
        <p className="mt-2">Then we have:</p>
        <MathBlock>
          {`\\sum_{n=1}^{\\infty} \\int_{[a,b]} f^{(n)} = \\int_{[a,b]} \\sum_{n=1}^{\\infty} f^{(n)}`}
        </MathBlock>
      </Definition>

      <Callout type="info" title="Combining with M-test">
        <p>
          This corollary works particularly well with the Weierstrass M-test: if{' '}
          <InlineMath>{`\\sum_{n=1}^{\\infty} \\|f^{(n)}\\|_{\\infty}`}</InlineMath> converges,
          then we can interchange summation and integration.
        </p>
      </Callout>

      <Example title="Logarithm Series">
        <p>
          From the geometric series identity, we have:
        </p>
        <MathBlock>{`\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}`}</MathBlock>
        <p className="mt-2">
          for <InlineMath>{`x \\in (-1, 1)`}</InlineMath>, with uniform convergence on{' '}
          <InlineMath>{`[-r, r]`}</InlineMath> for any <InlineMath>{`0 < r < 1`}</InlineMath>.
        </p>
        <p className="mt-2">Integrating on <InlineMath>{`[0, r]`}</InlineMath>:</p>
        <MathBlock>
          {`\\sum_{n=0}^{\\infty} \\int_{[0,r]} x^n \\, dx = \\int_{[0,r]} \\frac{1}{1-x} \\, dx`}
        </MathBlock>
        <p className="mt-2">
          The left side is <InlineMath>{`\\sum_{n=0}^{\\infty} r^{n+1}/(n+1)`}</InlineMath>.
          The right side is <InlineMath>{`-\\log(1-r)`}</InlineMath>.
        </p>
        <p className="mt-2">Thus we obtain the formula:</p>
        <MathBlock>{`-\\log(1-r) = \\sum_{n=0}^{\\infty} \\frac{r^{n+1}}{n+1}`}</MathBlock>
        <p className="mt-2">
          for all <InlineMath>{`0 < r < 1`}</InlineMath>.
        </p>
      </Example>
    </LessonLayout>
  );
}
