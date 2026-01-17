import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { PowerSeriesVisualizer } from '@/components/visualizations';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Formal Power Series</h2>

      <p className="mb-4">
        We now discuss an important subclass of series of functions: <strong>power series</strong>.
        We begin by introducing the notion of a formal power series, and then focus on when these
        series converge and what properties the resulting functions have.
      </p>

      <Definition title="Formal Power Series">
        <p>
          Let <InlineMath>a</InlineMath> be a real number. A <strong>formal power series centered
          at</strong> <InlineMath>a</InlineMath> is any series of the form:
        </p>
        <MathBlock>{`\\sum_{n=0}^{\\infty} c_n(x - a)^n`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`c_0, c_1, \\ldots`}</InlineMath> is a sequence of real numbers (not
          depending on <InlineMath>x</InlineMath>). We refer to <InlineMath>{`c_n`}</InlineMath> as
          the <InlineMath>{`n`}</InlineMath>th <strong>coefficient</strong> of this series.
        </p>
      </Definition>

      <Example title="Power Series Examples">
        <p>
          The series <InlineMath>{`\\sum_{n=0}^{\\infty} n!(x - 2)^n`}</InlineMath> is a formal
          power series centered at 2.
        </p>
        <p className="mt-2">
          The series <InlineMath>{`\\sum_{n=0}^{\\infty} 2^x(x - 3)^n`}</InlineMath> is{' '}
          <strong>not</strong> a formal power series, since the coefficients{' '}
          <InlineMath>{`2^x`}</InlineMath> depend on <InlineMath>x</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Why 'Formal'?">
        <p>
          We call these power series "formal" because we do not yet assume that these series
          converge for any <InlineMath>x</InlineMath>. However, they automatically converge when{' '}
          <InlineMath>{`x = a`}</InlineMath> (the sum is just <InlineMath>{`c_0`}</InlineMath>).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Radius of Convergence</h3>

      <p className="mb-4">
        In general, the closer <InlineMath>x</InlineMath> gets to <InlineMath>a</InlineMath>, the
        easier it is for the series to converge.
      </p>

      <Definition title="Radius of Convergence">
        <p>
          Let <InlineMath>{`\\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath> be a formal power
          series. We define the <strong>radius of convergence</strong> <InlineMath>R</InlineMath>{' '}
          of this series to be:
        </p>
        <MathBlock>{`R := \\frac{1}{\\limsup_{n \\to \\infty} |c_n|^{1/n}}`}</MathBlock>
        <p className="mt-2">
          where we adopt the convention that <InlineMath>{`\\frac{1}{0} = +\\infty`}</InlineMath>{' '}
          and <InlineMath>{`\\frac{1}{+\\infty} = 0`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Computing Radius of Convergence">
        <p>
          <strong>Example 1:</strong> The series{' '}
          <InlineMath>{`\\sum_{n=0}^{\\infty} n(-2)^n(x - 3)^n`}</InlineMath> has radius of
          convergence:
        </p>
        <MathBlock>{`R = \\frac{1}{\\limsup_{n \\to \\infty} |n(-2)^n|^{1/n}} = \\frac{1}{\\limsup_{n \\to \\infty} 2n^{1/n}} = \\frac{1}{2}`}</MathBlock>
        <p className="mt-2">
          <strong>Example 2:</strong> The series{' '}
          <InlineMath>{`\\sum_{n=0}^{\\infty} 2^{n^2}(x + 2)^n`}</InlineMath> has{' '}
          <InlineMath>{`R = 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Example 3:</strong> The series{' '}
          <InlineMath>{`\\sum_{n=0}^{\\infty} 2^{-n^2}(x + 2)^n`}</InlineMath> has{' '}
          <InlineMath>{`R = +\\infty`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Visualizing Power Series Convergence</h3>

      <PowerSeriesVisualizer />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Power Series
      </h3>

      <Definition title="Convergence Theorem for Power Series">
        <p>
          Let <InlineMath>{`\\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath> be a formal power
          series with radius of convergence <InlineMath>R</InlineMath>. Then:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <strong>Divergence:</strong> If <InlineMath>{`|x - a| > R`}</InlineMath>, then the
            series diverges.
          </li>
          <li>
            <strong>Convergence:</strong> If <InlineMath>{`|x - a| < R`}</InlineMath>, then the
            series converges absolutely.
          </li>
          <li>
            <strong>Uniform convergence:</strong> For any <InlineMath>{`0 < r < R`}</InlineMath>,
            the series converges uniformly on <InlineMath>{`[a - r, a + r]`}</InlineMath>.
          </li>
          <li>
            <strong>Differentiation:</strong> The function{' '}
            <InlineMath>{`f(x) := \\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath> is
            differentiable on <InlineMath>{`(a - R, a + R)`}</InlineMath>, and{' '}
            <InlineMath>{`f'(x) = \\sum_{n=1}^{\\infty} nc_n(x - a)^{n-1}`}</InlineMath>.
          </li>
          <li>
            <strong>Integration:</strong> For any interval{' '}
            <InlineMath>{`[y, z] \\subseteq (a - R, a + R)`}</InlineMath>:
            <MathBlock>{`\\int_{[y,z]} f = \\sum_{n=0}^{\\infty} c_n \\frac{(z-a)^{n+1} - (y-a)^{n+1}}{n+1}`}</MathBlock>
          </li>
        </ul>
      </Definition>

      <Callout type="warning" title="Boundary Behavior">
        <p>
          At the boundary points <InlineMath>{`|x - a| = R`}</InlineMath>, the series may either
          converge or diverge — the theorem is silent on this case. Different power series with
          the same radius of convergence can have different behavior at the boundary.
        </p>
      </Callout>

      <Callout type="note" title="Alternative Method">
        <p>
          You can also find the radius of convergence by using your favorite convergence test
          (such as the ratio test) to determine the range of <InlineMath>x</InlineMath> for which
          the series converges.
        </p>
      </Callout>
    </LessonLayout>
  );
}
