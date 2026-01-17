import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Abel's Theorem</h2>

      <p className="mb-4">
        Let <InlineMath>{`f(x) = \\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath> be a power series
        centered at <InlineMath>a</InlineMath> with radius of convergence{' '}
        <InlineMath>{`0 < R < \\infty`}</InlineMath>. We know from the previous section that the
        series converges absolutely when <InlineMath>{`|x - a| < R`}</InlineMath> and diverges when{' '}
        <InlineMath>{`|x - a| > R`}</InlineMath>.
      </p>

      <p className="mb-4">
        At the boundary <InlineMath>{`|x - a| = R`}</InlineMath>, the situation is more complicated:
        the series may either converge or diverge. However, if it does converge at a boundary point,
        then <strong>Abel's theorem</strong> tells us something useful about continuity.
      </p>

      <Definition title="Abel's Theorem">
        <p>
          Let <InlineMath>{`f(x) = \\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath> be a power
          series centered at <InlineMath>a</InlineMath> with radius of convergence{' '}
          <InlineMath>{`0 < R < \\infty`}</InlineMath>.
        </p>
        <p className="mt-2">
          If the power series converges at <InlineMath>{`a + R`}</InlineMath>, then{' '}
          <InlineMath>f</InlineMath> is <strong>continuous at</strong>{' '}
          <InlineMath>{`a + R`}</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{x \\to a+R; x \\in (a-R, a+R)} \\sum_{n=0}^{\\infty} c_n(x - a)^n = \\sum_{n=0}^{\\infty} c_n R^n`}</MathBlock>
        <p className="mt-2">
          Similarly, if the series converges at <InlineMath>{`a - R`}</InlineMath>, then{' '}
          <InlineMath>f</InlineMath> is continuous at <InlineMath>{`a - R`}</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{x \\to a-R; x \\in (a-R, a+R)} \\sum_{n=0}^{\\infty} c_n(x - a)^n = \\sum_{n=0}^{\\infty} c_n (-R)^n`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summation by Parts</h3>

      <p className="mb-4">
        The proof of Abel's theorem relies on a discrete analogue of integration by parts.
      </p>

      <Definition title="Summation by Parts Formula">
        <p>
          Let <InlineMath>{`(a_n)_{n=0}^{\\infty}`}</InlineMath> and{' '}
          <InlineMath>{`(b_n)_{n=0}^{\\infty}`}</InlineMath> be sequences of real numbers converging
          to limits <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> respectively.
        </p>
        <p className="mt-2">
          If the sum <InlineMath>{`\\sum_{n=0}^{\\infty} (a_{n+1} - a_n) b_n`}</InlineMath> is
          convergent, then <InlineMath>{`\\sum_{n=0}^{\\infty} a_{n+1}(b_{n+1} - b_n)`}</InlineMath>{' '}
          is also convergent, and:
        </p>
        <MathBlock>{`\\sum_{n=0}^{\\infty} (a_{n+1} - a_n) b_n = AB - a_0 b_0 - \\sum_{n=0}^{\\infty} a_{n+1}(b_{n+1} - b_n)`}</MathBlock>
      </Definition>

      <Callout type="info" title="Comparison with Integration by Parts">
        <p>
          Compare this formula with the integration by parts formula:
        </p>
        <MathBlock>{`\\int_0^{\\infty} f'(x)g(x) \\, dx = f(x)g(x)\\Big|_0^{\\infty} - \\int_0^{\\infty} f(x)g'(x) \\, dx`}</MathBlock>
        <p className="mt-2">
          The sequences <InlineMath>{`a_n, b_n`}</InlineMath> play the role of{' '}
          <InlineMath>{`f(n), g(n)`}</InlineMath>, while the differences{' '}
          <InlineMath>{`a_{n+1} - a_n`}</InlineMath> and <InlineMath>{`b_{n+1} - b_n`}</InlineMath>{' '}
          play the role of the derivatives.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Application: Computing ln(2)</h3>

      <Example title="A Formula for ln(2)">
        <p>
          From the power series for the logarithm, we have:
        </p>
        <MathBlock>{`\\ln(x) = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}(x - 1)^n`}</MathBlock>
        <p className="mt-2">
          for <InlineMath>{`x \\in (0, 2)`}</InlineMath>, with radius of convergence 1.
        </p>
        <p className="mt-2">
          By the alternating series test, the series{' '}
          <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}`}</InlineMath> converges.
        </p>
        <p className="mt-2">
          By Abel's theorem:
        </p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = \\lim_{x \\to 2} \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}(x-1)^n = \\lim_{x \\to 2} \\ln(x) = \\ln(2)`}</MathBlock>
        <p className="mt-2">
          Thus we obtain the famous formula:
        </p>
        <MathBlock>{`\\ln(2) = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\frac{1}{5} - \\cdots`}</MathBlock>
      </Example>

      <Callout type="success" title="Key Insight">
        <p>
          Abel's theorem allows us to evaluate power series at boundary points where they converge,
          by taking limits from within the interval of convergence. This is a powerful tool for
          computing special values of functions like the logarithm.
        </p>
      </Callout>

      <Callout type="note" title="Proof Sketch">
        <p>
          The proof of Abel's theorem uses summation by parts to rewrite the series in a form where
          convergence is easier to analyze. The key observation is that if the partial sums of{' '}
          <InlineMath>{`\\sum c_n R^n`}</InlineMath> converge, then the terms{' '}
          <InlineMath>{`c_n R^n`}</InlineMath> must approach zero, which provides enough control to
          establish continuity at the boundary.
        </p>
      </Callout>
    </LessonLayout>
  );
}
