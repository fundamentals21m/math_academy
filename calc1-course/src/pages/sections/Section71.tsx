import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section71() {
  return (
    <LessonLayout sectionId={71}>
      <h1>Power Series</h1>

      <p>
        A <strong>power series</strong> is a series of the form <MathInline>{`\\sum_{n=0}^\\infty a_n x^n`}</MathInline> or
        more generally <MathInline>{`\\sum_{n=0}^\\infty a_n (x - c)^n`}</MathInline>, where the
        coefficients <MathInline>{`a_n`}</MathInline> are constants and <MathInline>{`c`}</MathInline> is the
        center. Power series are the foundation of Taylor series and provide a powerful way
        to represent functions.
      </p>

      <h2>Definition and Basic Examples</h2>

      <Callout type="definition" title="Power Series">
        <p>A <strong>power series centered at <MathInline>{`c`}</MathInline></strong> is a series of the form:</p>
        <MathBlock>{`\\sum_{n=0}^\\infty a_n (x - c)^n = a_0 + a_1(x-c) + a_2(x-c)^2 + a_3(x-c)^3 + \\cdots`}</MathBlock>
        <p>
          For each value of <MathInline>{`x`}</MathInline>, this is a series of constants that may
          converge or diverge.
        </p>
      </Callout>

      <Callout type="example" title="Geometric Series">
        <p>The geometric series <MathInline>{`\\sum_{n=0}^\\infty x^n`}</MathInline> is a power series with <MathInline>{`a_n = 1`}</MathInline> and center <MathInline>{`c = 0`}</MathInline>.</p>
        <p>It converges to <MathInline>{`\\frac{1}{1-x}`}</MathInline> for <MathInline>{`|x| < 1`}</MathInline> and diverges for <MathInline>{`|x| \\geq 1`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Exponential Series">
        <p>The series <MathInline>{`\\sum_{n=0}^\\infty \\frac{x^n}{n!}`}</MathInline> has <MathInline>{`a_n = \\frac{1}{n!}`}</MathInline>.</p>
        <p>This series converges for all <MathInline>{`x \\in \\mathbb{R}`}</MathInline> and equals <MathInline>{`e^x`}</MathInline>.</p>
      </Callout>

      <h2>Radius of Convergence</h2>

      <p>
        A remarkable fact about power series is that their convergence behavior follows a simple pattern:
        there is a radius <MathInline>{`R`}</MathInline> such that the series converges inside a disk
        and diverges outside.
      </p>

      <Callout type="theorem" title="Existence of Radius of Convergence">
        <p>
          For any power series <MathInline>{`\\sum_{n=0}^\\infty a_n (x - c)^n`}</MathInline>, exactly one of the
          following holds:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>The series converges only at <MathInline>{`x = c`}</MathInline> (we say <MathInline>{`R = 0`}</MathInline>)</li>
          <li>The series converges for all <MathInline>{`x \\in \\mathbb{R}`}</MathInline> (we say <MathInline>{`R = \\infty`}</MathInline>)</li>
          <li>There exists <MathInline>{`R > 0`}</MathInline> such that the series converges absolutely for <MathInline>{`|x - c| < R`}</MathInline> and diverges for <MathInline>{`|x - c| > R`}</MathInline></li>
        </ol>
        <p>The number <MathInline>{`R`}</MathInline> is called the <strong>radius of convergence</strong>.</p>
      </Callout>

      <p>
        The <strong>interval of convergence</strong> is the set of all <MathInline>{`x`}</MathInline> for
        which the series converges. It always includes the open
        interval <MathInline>{`(c - R, c + R)`}</MathInline> but may or may not include the
        endpoints <MathInline>{`x = c \\pm R`}</MathInline>.
      </p>

      <h2>Finding the Radius of Convergence</h2>

      <p>
        The ratio test and root test from series provide formulas for finding <MathInline>{`R`}</MathInline>.
      </p>

      <Callout type="theorem" title="Ratio Test Formula">
        <p>If <MathInline>{`\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = L`}</MathInline> exists (or equals <MathInline>{`\\infty`}</MathInline>), then:</p>
        <MathBlock>{`R = \\frac{1}{L}`}</MathBlock>
        <p>(with <MathInline>{`R = \\infty`}</MathInline> if <MathInline>{`L = 0`}</MathInline> and <MathInline>{`R = 0`}</MathInline> if <MathInline>{`L = \\infty`}</MathInline>)</p>
      </Callout>

      <Callout type="theorem" title="Root Test Formula (Cauchy-Hadamard)">
        <p>The radius of convergence is given by:</p>
        <MathBlock>{`R = \\frac{1}{\\limsup_{n \\to \\infty} |a_n|^{1/n}}`}</MathBlock>
        <p>This formula always works, even when the ratio test limit doesn't exist.</p>
      </Callout>

      <Callout type="example" title="Finding R Using the Ratio Test">
        <p>Find the radius of convergence of <MathInline>{`\\sum_{n=0}^\\infty \\frac{x^n}{n!}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Here <MathInline>{`a_n = \\frac{1}{n!}`}</MathInline>.</p>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{n!}{(n+1)!} = \\lim_{n \\to \\infty} \\frac{1}{n+1} = 0`}</MathBlock>
        <p>So <MathInline>{`R = \\frac{1}{0} = \\infty`}</MathInline>. The series converges for all <MathInline>{`x`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Another Example">
        <p>Find the radius of convergence of <MathInline>{`\\sum_{n=1}^\\infty \\frac{n^2 x^n}{3^n}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Here <MathInline>{`a_n = \\frac{n^2}{3^n}`}</MathInline>.</p>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\lim_{n \\to \\infty} \\frac{(n+1)^2}{3^{n+1}} \\cdot \\frac{3^n}{n^2} = \\lim_{n \\to \\infty} \\frac{(n+1)^2}{3n^2} = \\frac{1}{3}`}</MathBlock>
        <p>So <MathInline>{`R = \\frac{1}{1/3} = 3`}</MathInline>. The series converges for <MathInline>{`|x| < 3`}</MathInline>.</p>
      </Callout>

      <h2>Behavior at the Endpoints</h2>

      <p>
        The ratio and root tests are inconclusive at <MathInline>{`|x - c| = R`}</MathInline>. We must
        test each endpoint separately using other convergence tests.
      </p>

      <Callout type="example" title="Different Endpoint Behaviors">
        <p>Find the interval of convergence of <MathInline>{`\\sum_{n=1}^\\infty \\frac{x^n}{n}`}</MathInline>.</p>
        <p><strong>Solution:</strong> First, find <MathInline>{`R`}</MathInline>:</p>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\implies R = 1`}</MathBlock>
        <p>At <MathInline>{`x = 1`}</MathInline>: <MathInline>{`\\sum_{n=1}^\\infty \\frac{1}{n}`}</MathInline> is the harmonic series, which diverges.</p>
        <p>At <MathInline>{`x = -1`}</MathInline>: <MathInline>{`\\sum_{n=1}^\\infty \\frac{(-1)^n}{n}`}</MathInline> converges by the alternating series test.</p>
        <p>Interval of convergence: <MathInline>{`[-1, 1)`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Both Endpoints Converge">
        <p>Find the interval of convergence of <MathInline>{`\\sum_{n=1}^\\infty \\frac{x^n}{n^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong> <MathInline>{`R = 1`}</MathInline> (similar calculation).</p>
        <p>At <MathInline>{`x = 1`}</MathInline>: <MathInline>{`\\sum_{n=1}^\\infty \\frac{1}{n^2}`}</MathInline> converges (p-series, p = 2).</p>
        <p>At <MathInline>{`x = -1`}</MathInline>: <MathInline>{`\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}`}</MathInline> converges absolutely.</p>
        <p>Interval of convergence: <MathInline>{`[-1, 1]`}</MathInline>.</p>
      </Callout>

      <h2>Properties Within the Radius of Convergence</h2>

      <p>
        Power series have remarkable properties inside their interval of convergence.
      </p>

      <Callout type="theorem" title="Uniform Convergence on Compact Subsets">
        <p>
          If <MathInline>{`\\sum a_n (x-c)^n`}</MathInline> has radius of convergence <MathInline>{`R > 0`}</MathInline>,
          then for any <MathInline>{`0 < r < R`}</MathInline>, the series converges uniformly on <MathInline>{`[c-r, c+r]`}</MathInline>.
        </p>
      </Callout>

      <p>
        This follows from the Weierstrass M-test: for <MathInline>{`|x - c| \\leq r < R`}</MathInline>,
        we have <MathInline>{`|a_n(x-c)^n| \\leq |a_n|r^n`}</MathInline>, and <MathInline>{`\\sum |a_n|r^n`}</MathInline> converges.
      </p>

      <Callout type="theorem" title="Continuity of Power Series">
        <p>
          A power series <MathInline>{`f(x) = \\sum_{n=0}^\\infty a_n (x-c)^n`}</MathInline> defines a continuous
          function on its interval of convergence <MathInline>{`(c-R, c+R)`}</MathInline>.
        </p>
      </Callout>

      <h2>Term-by-Term Differentiation and Integration</h2>

      <p>
        Inside the radius of convergence, we can differentiate and integrate term by term.
      </p>

      <Callout type="theorem" title="Differentiation of Power Series">
        <p>
          If <MathInline>{`f(x) = \\sum_{n=0}^\\infty a_n (x-c)^n`}</MathInline> has radius of
          convergence <MathInline>{`R > 0`}</MathInline>, then <MathInline>{`f`}</MathInline> is differentiable
          on <MathInline>{`(c-R, c+R)`}</MathInline> and:
        </p>
        <MathBlock>{`f'(x) = \\sum_{n=1}^\\infty n a_n (x-c)^{n-1}`}</MathBlock>
        <p>The differentiated series has the same radius of convergence <MathInline>{`R`}</MathInline>.</p>
      </Callout>

      <Callout type="theorem" title="Integration of Power Series">
        <p>
          If <MathInline>{`f(x) = \\sum_{n=0}^\\infty a_n (x-c)^n`}</MathInline> has radius of
          convergence <MathInline>{`R > 0`}</MathInline>, then for <MathInline>{`|x - c| < R`}</MathInline>:
        </p>
        <MathBlock>{`\\int_c^x f(t)\\,dt = \\sum_{n=0}^\\infty \\frac{a_n (x-c)^{n+1}}{n+1}`}</MathBlock>
        <p>The integrated series has the same radius of convergence <MathInline>{`R`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Differentiating the Geometric Series">
        <p>Starting with <MathInline>{`\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n`}</MathInline> for <MathInline>{`|x| < 1`}</MathInline>:</p>
        <p>Differentiate:</p>
        <MathBlock>{`\\frac{1}{(1-x)^2} = \\sum_{n=1}^\\infty n x^{n-1} = 1 + 2x + 3x^2 + 4x^3 + \\cdots`}</MathBlock>
        <p>Differentiate again:</p>
        <MathBlock>{`\\frac{2}{(1-x)^3} = \\sum_{n=2}^\\infty n(n-1) x^{n-2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Integrating to Find ln(1+x)">
        <p>Starting with <MathInline>{`\\frac{1}{1+x} = \\sum_{n=0}^\\infty (-1)^n x^n`}</MathInline> for <MathInline>{`|x| < 1`}</MathInline>:</p>
        <p>Integrate from 0 to <MathInline>{`x`}</MathInline>:</p>
        <MathBlock>{`\\ln(1+x) = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{n+1}}{n+1} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots`}</MathBlock>
      </Callout>

      <h2>Abel's Theorem</h2>

      <p>
        What happens at the boundary of convergence? Abel's theorem addresses continuity at endpoints.
      </p>

      <Callout type="theorem" title="Abel's Theorem">
        <p>
          If <MathInline>{`\\sum_{n=0}^\\infty a_n`}</MathInline> converges to <MathInline>{`S`}</MathInline>, then:
        </p>
        <MathBlock>{`\\lim_{x \\to 1^-} \\sum_{n=0}^\\infty a_n x^n = S`}</MathBlock>
        <p>
          More generally, if <MathInline>{`\\sum a_n (x-c)^n`}</MathInline> has radius <MathInline>{`R`}</MathInline> and
          converges at <MathInline>{`x = c + R`}</MathInline>, then <MathInline>{`f(x)`}</MathInline> is continuous
          from the left at <MathInline>{`x = c + R`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Applying Abel's Theorem">
        <p>
          We showed <MathInline>{`\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n}`}</MathInline> for <MathInline>{`|x| < 1`}</MathInline>.
        </p>
        <p>
          At <MathInline>{`x = 1`}</MathInline>, the series <MathInline>{`\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}`}</MathInline> converges
          (alternating harmonic series).
        </p>
        <p>By Abel's theorem:</p>
        <MathBlock>{`\\ln 2 = \\lim_{x \\to 1^-} \\ln(1+x) = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots`}</MathBlock>
      </Callout>

      <h2>Uniqueness of Power Series</h2>

      <Callout type="theorem" title="Identity Theorem">
        <p>
          If <MathInline>{`\\sum_{n=0}^\\infty a_n (x-c)^n = \\sum_{n=0}^\\infty b_n (x-c)^n`}</MathInline> for
          all <MathInline>{`x`}</MathInline> in some interval containing <MathInline>{`c`}</MathInline>,
          then <MathInline>{`a_n = b_n`}</MathInline> for all <MathInline>{`n`}</MathInline>.
        </p>
      </Callout>

      <p>
        This means a function has at most one power series representation centered at a given point.
        The coefficients are determined by the function's derivatives at the center.
      </p>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results for Power Series">
        <p><strong>Form:</strong> <MathInline>{`\\sum_{n=0}^\\infty a_n (x-c)^n`}</MathInline></p>
        <p><strong>Radius of convergence:</strong> <MathInline>{`R = 1/\\lim|a_{n+1}/a_n|`}</MathInline> or <MathInline>{`R = 1/\\limsup|a_n|^{1/n}`}</MathInline></p>
        <p><strong>Convergence:</strong> Absolute for <MathInline>{`|x-c| < R`}</MathInline>, divergent for <MathInline>{`|x-c| > R`}</MathInline></p>
        <p><strong>Endpoints:</strong> Must be tested separately</p>
        <p><strong>Inside interval:</strong> Uniformly convergent on compact subsets, continuous, infinitely differentiable</p>
        <p><strong>Operations:</strong> Can differentiate and integrate term by term (same <MathInline>{`R`}</MathInline>)</p>
        <p><strong>Abel's theorem:</strong> Continuity extends to convergent endpoints</p>
      </Callout>
    </LessonLayout>
  );
}
