import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section73() {
  return (
    <LessonLayout sectionId={73}>
      <h1>Binomial Series</h1>

      <p>
        The classical binomial theorem expresses <MathInline>{`(1+x)^n`}</MathInline> as a finite sum
        when <MathInline>{`n`}</MathInline> is a non-negative integer. Newton discovered that this
        extends to an infinite series for any real exponent <MathInline>{`\\alpha`}</MathInline>,
        giving us a powerful tool for expanding expressions like <MathInline>{`\\sqrt{1+x}`}</MathInline> or <MathInline>{`1/(1+x)^2`}</MathInline>.
      </p>

      <h2>The Classical Binomial Theorem</h2>

      <p>
        Recall that for a non-negative integer <MathInline>{`n`}</MathInline>:
      </p>

      <Callout type="theorem" title="Binomial Theorem (Integer Case)">
        <p>For any <MathInline>{`n \\in \\mathbb{N}`}</MathInline> and any <MathInline>{`x`}</MathInline>:</p>
        <MathBlock>{`(1+x)^n = \\sum_{k=0}^n \\binom{n}{k} x^k = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\cdots + x^n`}</MathBlock>
        <p>where <MathInline>{`\\binom{n}{k} = \\frac{n!}{k!(n-k)!}`}</MathInline>.</p>
      </Callout>

      <p>
        This is a finite sum because <MathInline>{`\\binom{n}{k} = 0`}</MathInline> for <MathInline>{`k > n`}</MathInline>.
        For non-integer exponents, we need an infinite series.
      </p>

      <h2>Generalized Binomial Coefficients</h2>

      <Callout type="definition" title="Generalized Binomial Coefficient">
        <p>For any real number <MathInline>{`\\alpha`}</MathInline> and non-negative integer <MathInline>{`k`}</MathInline>:</p>
        <MathBlock>{`\\binom{\\alpha}{k} = \\frac{\\alpha(\\alpha-1)(\\alpha-2)\\cdots(\\alpha-k+1)}{k!}`}</MathBlock>
        <p>By convention, <MathInline>{`\\binom{\\alpha}{0} = 1`}</MathInline>.</p>
      </Callout>

      <p>
        Note that this is a product of <MathInline>{`k`}</MathInline> consecutive terms starting
        from <MathInline>{`\\alpha`}</MathInline>, divided by <MathInline>{`k!`}</MathInline>. When <MathInline>{`\\alpha`}</MathInline> is
        not a non-negative integer, infinitely many of these coefficients are nonzero.
      </p>

      <Callout type="example" title="Computing Generalized Binomial Coefficients">
        <p>For <MathInline>{`\\alpha = 1/2`}</MathInline>:</p>
        <MathBlock>{`\\binom{1/2}{0} = 1`}</MathBlock>
        <MathBlock>{`\\binom{1/2}{1} = \\frac{1/2}{1!} = \\frac{1}{2}`}</MathBlock>
        <MathBlock>{`\\binom{1/2}{2} = \\frac{(1/2)(-1/2)}{2!} = \\frac{-1/4}{2} = -\\frac{1}{8}`}</MathBlock>
        <MathBlock>{`\\binom{1/2}{3} = \\frac{(1/2)(-1/2)(-3/2)}{3!} = \\frac{3/8}{6} = \\frac{1}{16}`}</MathBlock>
        <MathBlock>{`\\binom{1/2}{4} = \\frac{(1/2)(-1/2)(-3/2)(-5/2)}{4!} = \\frac{-15/16}{24} = -\\frac{5}{128}`}</MathBlock>
      </Callout>

      <h2>The Binomial Series</h2>

      <Callout type="theorem" title="Binomial Series">
        <p>For any real number <MathInline>{`\\alpha`}</MathInline> and <MathInline>{`|x| < 1`}</MathInline>:</p>
        <MathBlock>{`(1+x)^\\alpha = \\sum_{k=0}^\\infty \\binom{\\alpha}{k} x^k`}</MathBlock>
        <MathBlock>{`= 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\frac{\\alpha(\\alpha-1)(\\alpha-2)}{3!}x^3 + \\cdots`}</MathBlock>
      </Callout>

      <p><strong>Proof sketch:</strong></p>
      <p>
        Let <MathInline>{`f(x) = (1+x)^\\alpha`}</MathInline>. Then <MathInline>{`f^{(k)}(x) = \\alpha(\\alpha-1)\\cdots(\\alpha-k+1)(1+x)^{\\alpha-k}`}</MathInline>,
        so <MathInline>{`f^{(k)}(0) = \\alpha(\\alpha-1)\\cdots(\\alpha-k+1)`}</MathInline>.
      </p>
      <p>
        The Maclaurin series is <MathInline>{`\\sum \\frac{f^{(k)}(0)}{k!}x^k = \\sum \\binom{\\alpha}{k}x^k`}</MathInline>.
        Showing this equals <MathInline>{`f(x)`}</MathInline> for <MathInline>{`|x| < 1`}</MathInline> requires
        verifying the remainder tends to zero.
      </p>

      <h2>Convergence</h2>

      <Callout type="theorem" title="Radius of Convergence">
        <p>The binomial series <MathInline>{`\\sum_{k=0}^\\infty \\binom{\\alpha}{k} x^k`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Has radius of convergence <MathInline>{`R = 1`}</MathInline> (unless <MathInline>{`\\alpha \\in \\mathbb{N}`}</MathInline>, when it terminates)</li>
          <li>Converges absolutely for <MathInline>{`|x| < 1`}</MathInline></li>
          <li>At <MathInline>{`x = 1`}</MathInline>: converges if <MathInline>{`\\alpha > -1`}</MathInline></li>
          <li>At <MathInline>{`x = -1`}</MathInline>: converges if <MathInline>{`\\alpha \\geq 0`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Important Special Cases</h2>

      <Callout type="example" title="Square Root: α = 1/2">
        <MathBlock>{`\\sqrt{1+x} = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{1}{16}x^3 - \\frac{5}{128}x^4 + \\cdots`}</MathBlock>
        <p>General term: <MathInline>{`\\binom{1/2}{k} = \\frac{(-1)^{k-1}(2k-2)!}{2^{2k-1}k!(k-1)!}`}</MathInline> for <MathInline>{`k \\geq 1`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Reciprocal Square Root: α = -1/2">
        <MathBlock>{`\\frac{1}{\\sqrt{1+x}} = 1 - \\frac{1}{2}x + \\frac{3}{8}x^2 - \\frac{5}{16}x^3 + \\frac{35}{128}x^4 - \\cdots`}</MathBlock>
      </Callout>

      <Callout type="example" title="Reciprocal: α = -1">
        <MathBlock>{`\\frac{1}{1+x} = 1 - x + x^2 - x^3 + x^4 - \\cdots = \\sum_{k=0}^\\infty (-1)^k x^k`}</MathBlock>
        <p>This is just the geometric series with ratio <MathInline>{`-x`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Reciprocal Square: α = -2">
        <MathBlock>{`\\frac{1}{(1+x)^2} = 1 - 2x + 3x^2 - 4x^3 + 5x^4 - \\cdots = \\sum_{k=0}^\\infty (-1)^k(k+1)x^k`}</MathBlock>
        <p>Note: <MathInline>{`\\binom{-2}{k} = (-1)^k(k+1)`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Cube Root: α = 1/3">
        <MathBlock>{`\\sqrt[3]{1+x} = 1 + \\frac{1}{3}x - \\frac{1}{9}x^2 + \\frac{5}{81}x^3 - \\cdots`}</MathBlock>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Approximating Square Roots">
        <p>Approximate <MathInline>{`\\sqrt{1.1}`}</MathInline> using the binomial series.</p>
        <p><strong>Solution:</strong> With <MathInline>{`x = 0.1`}</MathInline>:</p>
        <MathBlock>{`\\sqrt{1.1} = 1 + \\frac{1}{2}(0.1) - \\frac{1}{8}(0.1)^2 + \\frac{1}{16}(0.1)^3 - \\cdots`}</MathBlock>
        <MathBlock>{`= 1 + 0.05 - 0.00125 + 0.0000625 - \\cdots`}</MathBlock>
        <MathBlock>{`\\approx 1.04881`}</MathBlock>
        <p>The exact value is <MathInline>{`\\sqrt{1.1} \\approx 1.048809...`}</MathInline></p>
      </Callout>

      <Callout type="example" title="Expanding with Variable Substitution">
        <p>Find the Maclaurin series for <MathInline>{`\\frac{1}{\\sqrt{1-x^2}}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Substitute <MathInline>{`-x^2`}</MathInline> for <MathInline>{`x`}</MathInline> in <MathInline>{`(1+x)^{-1/2}`}</MathInline>:</p>
        <MathBlock>{`\\frac{1}{\\sqrt{1-x^2}} = (1-x^2)^{-1/2} = \\sum_{k=0}^\\infty \\binom{-1/2}{k}(-x^2)^k`}</MathBlock>
        <MathBlock>{`= 1 + \\frac{1}{2}x^2 + \\frac{3}{8}x^4 + \\frac{5}{16}x^6 + \\cdots`}</MathBlock>
        <p>Valid for <MathInline>{`|x| < 1`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Integrating to Find arcsin">
        <p>
          Since <MathInline>{`\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}`}</MathInline>, we can integrate
          the series above:
        </p>
        <MathBlock>{`\\arcsin x = \\int_0^x \\frac{1}{\\sqrt{1-t^2}}\\,dt = x + \\frac{x^3}{6} + \\frac{3x^5}{40} + \\frac{5x^7}{112} + \\cdots`}</MathBlock>
        <MathBlock>{`= \\sum_{k=0}^\\infty \\frac{(2k)!}{4^k(k!)^2(2k+1)}x^{2k+1}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Series for (1+x)^(1+x)">
        <p>Find the first few terms of the Maclaurin series for <MathInline>{`\\sqrt{4+x}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Factor out the 4:</p>
        <MathBlock>{`\\sqrt{4+x} = \\sqrt{4(1+x/4)} = 2\\sqrt{1+x/4}`}</MathBlock>
        <p>Apply the binomial series with <MathInline>{`x/4`}</MathInline>:</p>
        <MathBlock>{`= 2\\left(1 + \\frac{1}{2}\\cdot\\frac{x}{4} - \\frac{1}{8}\\cdot\\frac{x^2}{16} + \\cdots\\right)`}</MathBlock>
        <MathBlock>{`= 2 + \\frac{x}{4} - \\frac{x^2}{64} + \\cdots`}</MathBlock>
        <p>Valid for <MathInline>{`|x/4| < 1`}</MathInline>, i.e., <MathInline>{`|x| < 4`}</MathInline>.</p>
      </Callout>

      <h2>Connection to Calculus</h2>

      <Callout type="info" title="Derivative Relationship">
        <p>The binomial series satisfies the differential equation:</p>
        <MathBlock>{`(1+x)\\frac{dy}{dx} = \\alpha y`}</MathBlock>
        <p>
          with <MathInline>{`y(0) = 1`}</MathInline>. This can be verified by differentiating the series
          term by term:
        </p>
        <MathBlock>{`\\frac{d}{dx}(1+x)^\\alpha = \\alpha(1+x)^{\\alpha-1} = \\frac{\\alpha(1+x)^\\alpha}{1+x}`}</MathBlock>
      </Callout>

      <h2>Pattern in Coefficients</h2>

      <p>
        The generalized binomial coefficients have interesting patterns:
      </p>

      <Callout type="info" title="Coefficient Formulas">
        <p>For <MathInline>{`\\alpha = -n`}</MathInline> (negative integer):</p>
        <MathBlock>{`\\binom{-n}{k} = (-1)^k \\binom{n+k-1}{k} = (-1)^k \\binom{n+k-1}{n-1}`}</MathBlock>
        <p>For <MathInline>{`\\alpha = 1/2`}</MathInline>:</p>
        <MathBlock>{`\\binom{1/2}{k} = \\frac{(-1)^{k-1}}{4^k}\\binom{2k}{k}\\frac{1}{2k-1} \\quad (k \\geq 1)`}</MathBlock>
        <p>These connect to combinatorics and Catalan numbers.</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results">
        <p><strong>Binomial series:</strong> <MathInline>{`(1+x)^\\alpha = \\sum_{k=0}^\\infty \\binom{\\alpha}{k}x^k`}</MathInline> for <MathInline>{`|x| < 1`}</MathInline></p>
        <p><strong>Generalized coefficient:</strong> <MathInline>{`\\binom{\\alpha}{k} = \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-k+1)}{k!}`}</MathInline></p>
        <p><strong>Key expansions:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} - \\cdots`}</MathInline></li>
          <li><MathInline>{`1/\\sqrt{1+x} = 1 - \\frac{x}{2} + \\frac{3x^2}{8} - \\frac{5x^3}{16} + \\cdots`}</MathInline></li>
          <li><MathInline>{`1/(1+x)^n = \\sum_{k=0}^\\infty (-1)^k\\binom{n+k-1}{k}x^k`}</MathInline></li>
        </ul>
        <p><strong>Technique:</strong> For <MathInline>{`\\sqrt{a+bx}`}</MathInline>, factor as <MathInline>{`\\sqrt{a}\\sqrt{1+bx/a}`}</MathInline> and apply series.</p>
      </Callout>
    </LessonLayout>
  );
}
