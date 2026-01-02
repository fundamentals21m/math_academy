import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <h1>Power Series</h1>

      <p>
        A <strong>power series</strong> is a series of the form <InlineMath>{`\\sum_{n=0}^\\infty a_n x^n`}</InlineMath> or
        more generally <InlineMath>{`\\sum_{n=0}^\\infty a_n (x - c)^n`}</InlineMath>, where the
        coefficients <InlineMath>{`a_n`}</InlineMath> are constants and <InlineMath>{`c`}</InlineMath> is the
        center. Power series are the foundation of Taylor series and provide a powerful way
        to represent functions.
      </p>

      <h2>Definition and Basic Examples</h2>

      <Callout type="definition" title="Power Series">
        <p>A <strong>power series centered at <InlineMath>{`c`}</InlineMath></strong> is a series of the form:</p>
        <MathBlock>{`\\sum_{n=0}^\\infty a_n (x - c)^n = a_0 + a_1(x-c) + a_2(x-c)^2 + a_3(x-c)^3 + \\cdots`}</MathBlock>
        <p>
          For each value of <InlineMath>{`x`}</InlineMath>, this is a series of constants that may
          converge or diverge.
        </p>
      </Callout>

      <Callout type="example" title="Geometric Series">
        <p>The geometric series <InlineMath>{`\\sum_{n=0}^\\infty x^n`}</InlineMath> is a power series with <InlineMath>{`a_n = 1`}</InlineMath> and center <InlineMath>{`c = 0`}</InlineMath>.</p>
        <p>It converges to <InlineMath>{`\\frac{1}{1-x}`}</InlineMath> for <InlineMath>{`|x| < 1`}</InlineMath> and diverges for <InlineMath>{`|x| \\geq 1`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Exponential Series">
        <p>The series <InlineMath>{`\\sum_{n=0}^\\infty \\frac{x^n}{n!}`}</InlineMath> has <InlineMath>{`a_n = \\frac{1}{n!}`}</InlineMath>.</p>
        <p>This series converges for all <InlineMath>{`x \\in \\mathbb{R}`}</InlineMath> and equals <InlineMath>{`e^x`}</InlineMath>.</p>
      </Callout>

      <h2>Radius of Convergence</h2>

      <p>
        A remarkable fact about power series is that their convergence behavior follows a simple pattern:
        there is a radius <InlineMath>{`R`}</InlineMath> such that the series converges inside a disk
        and diverges outside.
      </p>

      <Callout type="theorem" title="Existence of Radius of Convergence">
        <p>
          For any power series <InlineMath>{`\\sum_{n=0}^\\infty a_n (x - c)^n`}</InlineMath>, exactly one of the
          following holds:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>The series converges only at <InlineMath>{`x = c`}</InlineMath> (we say <InlineMath>{`R = 0`}</InlineMath>)</li>
          <li>The series converges for all <InlineMath>{`x \\in \\mathbb{R}`}</InlineMath> (we say <InlineMath>{`R = \\infty`}</InlineMath>)</li>
          <li>There exists <InlineMath>{`R > 0`}</InlineMath> such that the series converges absolutely for <InlineMath>{`|x - c| < R`}</InlineMath> and diverges for <InlineMath>{`|x - c| > R`}</InlineMath></li>
        </ol>
        <p>The number <InlineMath>{`R`}</InlineMath> is called the <strong>radius of convergence</strong>.</p>
      </Callout>

      <p>
        The <strong>interval of convergence</strong> is the set of all <InlineMath>{`x`}</InlineMath> for
        which the series converges. It always includes the open
        interval <InlineMath>{`(c - R, c + R)`}</InlineMath> but may or may not include the
        endpoints <InlineMath>{`x = c \\pm R`}</InlineMath>.
      </p>

      <h2>Finding the Radius of Convergence</h2>

      <p>
        The ratio test and root test from series provide formulas for finding <InlineMath>{`R`}</InlineMath>.
      </p>

      <Callout type="theorem" title="Ratio Test Formula">
        <p>If <InlineMath>{`\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L`}</InlineMath> exists (or equals <InlineMath>{`\\infty`}</InlineMath>), then:</p>
        <MathBlock>{`R = \\frac{1}{L}`}</MathBlock>
        <p>(with <InlineMath>{`R = \\infty`}</InlineMath> if <InlineMath>{`L = 0`}</InlineMath> and <InlineMath>{`R = 0`}</InlineMath> if <InlineMath>{`L = \\infty`}</InlineMath>)</p>
      </Callout>

      <Callout type="theorem" title="Root Test Formula (Cauchy-Hadamard)">
        <p>The radius of convergence is given by:</p>
        <MathBlock>{`R = \\frac{1}{\\limsup_{n \\to \\infty} |a_n|^{1/n}}`}</MathBlock>
        <p>This formula always works, even when the ratio test limit doesn't exist.</p>
      </Callout>

      <Callout type="example" title="Finding R Using the Ratio Test">
        <p>Find the radius of convergence of <InlineMath>{`\\sum_{n=0}^\\infty \\frac{x^n}{n!}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Here <InlineMath>{`a_n = \\frac{1}{n!}`}</InlineMath>.</p>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{n!}{(n+1)!} = \\lim_{n \\to \\infty} \\frac{1}{n+1} = 0`}</MathBlock>
        <p>So <InlineMath>{`R = \\frac{1}{0} = \\infty`}</InlineMath>. The series converges for all <InlineMath>{`x`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Another Example">
        <p>Find the radius of convergence of <InlineMath>{`\\sum_{n=1}^\\infty \\frac{n^2 x^n}{3^n}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Here <InlineMath>{`a_n = \\frac{n^2}{3^n}`}</InlineMath>.</p>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{(n+1)^2}{3^{n+1}} \\cdot \\frac{3^n}{n^2} = \\lim_{n \\to \\infty} \\frac{(n+1)^2}{3n^2} = \\frac{1}{3}`}</MathBlock>
        <p>So <InlineMath>{`R = \\frac{1}{1/3} = 3`}</InlineMath>. The series converges for <InlineMath>{`|x| < 3`}</InlineMath>.</p>
      </Callout>

      <h2>Behavior at the Endpoints</h2>

      <p>
        The ratio and root tests are inconclusive at <InlineMath>{`|x - c| = R`}</InlineMath>. We must
        test each endpoint separately using other convergence tests.
      </p>

      <Callout type="example" title="Different Endpoint Behaviors">
        <p>Find the interval of convergence of <InlineMath>{`\\sum_{n=1}^\\infty \\frac{x^n}{n}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> First, find <InlineMath>{`R`}</InlineMath>:</p>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\implies R = 1`}</MathBlock>
        <p>At <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`\\sum_{n=1}^\\infty \\frac{1}{n}`}</InlineMath> is the harmonic series, which diverges.</p>
        <p>At <InlineMath>{`x = -1`}</InlineMath>: <InlineMath>{`\\sum_{n=1}^\\infty \\frac{(-1)^n}{n}`}</InlineMath> converges by the alternating series test.</p>
        <p>Interval of convergence: <InlineMath>{`[-1, 1)`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Both Endpoints Converge">
        <p>Find the interval of convergence of <InlineMath>{`\\sum_{n=1}^\\infty \\frac{x^n}{n^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> <InlineMath>{`R = 1`}</InlineMath> (similar calculation).</p>
        <p>At <InlineMath>{`x = 1`}</InlineMath>: <InlineMath>{`\\sum_{n=1}^\\infty \\frac{1}{n^2}`}</InlineMath> converges (p-series, p = 2).</p>
        <p>At <InlineMath>{`x = -1`}</InlineMath>: <InlineMath>{`\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}`}</InlineMath> converges absolutely.</p>
        <p>Interval of convergence: <InlineMath>{`[-1, 1]`}</InlineMath>.</p>
      </Callout>

      <h2>Properties Within the Radius of Convergence</h2>

      <p>
        Power series have remarkable properties inside their interval of convergence.
      </p>

      <Callout type="theorem" title="Uniform Convergence on Compact Subsets">
        <p>
          If <InlineMath>{`\\sum a_n (x-c)^n`}</InlineMath> has radius of convergence <InlineMath>{`R > 0`}</InlineMath>,
          then for any <InlineMath>{`0 < r < R`}</InlineMath>, the series converges uniformly on <InlineMath>{`[c-r, c+r]`}</InlineMath>.
        </p>
      </Callout>

      <p>
        This follows from the Weierstrass M-test: for <InlineMath>{`|x - c| \\leq r < R`}</InlineMath>,
        we have <InlineMath>{`|a_n(x-c)^n| \\leq |a_n|r^n`}</InlineMath>, and <InlineMath>{`\\sum |a_n|r^n`}</InlineMath> converges.
      </p>

      <Callout type="theorem" title="Continuity of Power Series">
        <p>
          A power series <InlineMath>{`f(x) = \\sum_{n=0}^\\infty a_n (x-c)^n`}</InlineMath> defines a continuous
          function on its interval of convergence <InlineMath>{`(c-R, c+R)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Term-by-Term Differentiation and Integration</h2>

      <p>
        Inside the radius of convergence, we can differentiate and integrate term by term.
      </p>

      <Callout type="theorem" title="Differentiation of Power Series">
        <p>
          If <InlineMath>{`f(x) = \\sum_{n=0}^\\infty a_n (x-c)^n`}</InlineMath> has radius of
          convergence <InlineMath>{`R > 0`}</InlineMath>, then <InlineMath>{`f`}</InlineMath> is differentiable
          on <InlineMath>{`(c-R, c+R)`}</InlineMath> and:
        </p>
        <MathBlock>{`f'(x) = \\sum_{n=1}^\\infty n a_n (x-c)^{n-1}`}</MathBlock>
        <p>The differentiated series has the same radius of convergence <InlineMath>{`R`}</InlineMath>.</p>
      </Callout>

      <Callout type="theorem" title="Integration of Power Series">
        <p>
          If <InlineMath>{`f(x) = \\sum_{n=0}^\\infty a_n (x-c)^n`}</InlineMath> has radius of
          convergence <InlineMath>{`R > 0`}</InlineMath>, then for <InlineMath>{`|x - c| < R`}</InlineMath>:
        </p>
        <MathBlock>{`\\int_c^x f(t)\\,dt = \\sum_{n=0}^\\infty \\frac{a_n (x-c)^{n+1}}{n+1}`}</MathBlock>
        <p>The integrated series has the same radius of convergence <InlineMath>{`R`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Differentiating the Geometric Series">
        <p>Starting with <InlineMath>{`\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n`}</InlineMath> for <InlineMath>{`|x| < 1`}</InlineMath>:</p>
        <p>Differentiate:</p>
        <MathBlock>{`\\frac{1}{(1-x)^2} = \\sum_{n=1}^\\infty n x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots`}</MathBlock>
        <p>Differentiate again:</p>
        <MathBlock>{`\\frac{2}{(1-x)^3} = \\sum_{n=2}^\\infty n(n-1) x^{n-2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Integrating to Find ln(1+x)">
        <p>Starting with <InlineMath>{`\\frac{1}{1+x} = \\sum_{n=0}^\\infty (-1)^n x^n`}</InlineMath> for <InlineMath>{`|x| < 1`}</InlineMath>:</p>
        <p>Integrate from 0 to <InlineMath>{`x`}</InlineMath>:</p>
        <MathBlock>{`\\ln(1+x) = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{n+1}}{n+1} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots`}</MathBlock>
      </Callout>

      <h2>Abel's Theorem</h2>

      <p>
        What happens at the boundary of convergence? Abel's theorem addresses continuity at endpoints.
      </p>

      <Callout type="theorem" title="Abel's Theorem">
        <p>
          If <InlineMath>{`\\sum_{n=0}^\\infty a_n`}</InlineMath> converges to <InlineMath>{`S`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\lim_{x \\to 1^-} \\sum_{n=0}^\\infty a_n x^n = S`}</MathBlock>
        <p>
          More generally, if <InlineMath>{`\\sum a_n (x-c)^n`}</InlineMath> has radius <InlineMath>{`R`}</InlineMath> and
          converges at <InlineMath>{`x = c + R`}</InlineMath>, then <InlineMath>{`f(x)`}</InlineMath> is continuous
          from the left at <InlineMath>{`x = c + R`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Applying Abel's Theorem">
        <p>
          We showed <InlineMath>{`\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}`}</InlineMath> for <InlineMath>{`|x| < 1`}</InlineMath>.
        </p>
        <p>
          At <InlineMath>{`x = 1`}</InlineMath>, the series <InlineMath>{`\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}`}</InlineMath> converges
          (alternating harmonic series).
        </p>
        <p>By Abel's theorem:</p>
        <MathBlock>{`\\ln 2 = \\lim_{x \\to 1^-} \\ln(1+x) = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots`}</MathBlock>
      </Callout>

      <h2>Uniqueness of Power Series</h2>

      <Callout type="theorem" title="Identity Theorem">
        <p>
          If <InlineMath>{`\\sum_{n=0}^\\infty a_n (x-c)^n = \\sum_{n=0}^\\infty b_n (x-c)^n`}</InlineMath> for
          all <InlineMath>{`x`}</InlineMath> in some interval containing <InlineMath>{`c`}</InlineMath>,
          then <InlineMath>{`a_n = b_n`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>.
        </p>
      </Callout>

      <p>
        This means a function has at most one power series representation centered at a given point.
        The coefficients are determined by the function's derivatives at the center.
      </p>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results for Power Series">
        <p><strong>Form:</strong> <InlineMath>{`\\sum_{n=0}^\\infty a_n (x-c)^n`}</InlineMath></p>
        <p><strong>Radius of convergence:</strong> <InlineMath>{`R = 1/\\lim|a_{n+1}/a_n|`}</InlineMath> or <InlineMath>{`R = 1/\\limsup|a_n|^{1/n}`}</InlineMath></p>
        <p><strong>Convergence:</strong> Absolute for <InlineMath>{`|x-c| < R`}</InlineMath>, divergent for <InlineMath>{`|x-c| > R`}</InlineMath></p>
        <p><strong>Endpoints:</strong> Must be tested separately</p>
        <p><strong>Inside interval:</strong> Uniformly convergent on compact subsets, continuous, infinitely differentiable</p>
        <p><strong>Operations:</strong> Can differentiate and integrate term by term (same <InlineMath>{`R`}</InlineMath>)</p>
        <p><strong>Abel's theorem:</strong> Continuity extends to convergent endpoints</p>
      </Callout>
    </LessonLayout>
  );
}
