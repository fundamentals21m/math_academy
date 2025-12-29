import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section72() {
  return (
    <LessonLayout sectionId={72}>
      <h1>Taylor Series</h1>

      <p>
        We have seen that power series define functions with remarkable properties. Now we ask
        the reverse question: given a function <MathInline>{`f`}</MathInline>, can we represent it as
        a power series? The answer leads us to <strong>Taylor series</strong>, one of the most
        powerful tools in analysis.
      </p>

      <h2>Taylor Polynomials</h2>

      <p>
        Before infinite series, we consider polynomial approximations. If <MathInline>{`f`}</MathInline> is
        to equal a power series <MathInline>{`\\sum a_n(x-c)^n`}</MathInline>, then differentiating and
        evaluating at <MathInline>{`x = c`}</MathInline> determines the coefficients.
      </p>

      <Callout type="definition" title="Taylor Polynomial">
        <p>
          Let <MathInline>{`f`}</MathInline> be <MathInline>{`n`}</MathInline> times differentiable at <MathInline>{`c`}</MathInline>.
          The <strong>Taylor polynomial of degree <MathInline>{`n`}</MathInline></strong> for <MathInline>{`f`}</MathInline> centered
          at <MathInline>{`c`}</MathInline> is:
        </p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^n \\frac{f^{(k)}(c)}{k!}(x-c)^k`}</MathBlock>
        <MathBlock>{`= f(c) + f'(c)(x-c) + \\frac{f''(c)}{2!}(x-c)^2 + \\cdots + \\frac{f^{(n)}(c)}{n!}(x-c)^n`}</MathBlock>
      </Callout>

      <p>
        The Taylor polynomial <MathInline>{`T_n`}</MathInline> is the unique polynomial of degree at
        most <MathInline>{`n`}</MathInline> that matches <MathInline>{`f`}</MathInline> and its
        first <MathInline>{`n`}</MathInline> derivatives at <MathInline>{`x = c`}</MathInline>.
      </p>

      <h2>Taylor Series</h2>

      <Callout type="definition" title="Taylor Series">
        <p>
          If <MathInline>{`f`}</MathInline> is infinitely differentiable at <MathInline>{`c`}</MathInline>, its
          <strong>Taylor series</strong> centered at <MathInline>{`c`}</MathInline> is:
        </p>
        <MathBlock>{`\\sum_{n=0}^\\infty \\frac{f^{(n)}(c)}{n!}(x-c)^n`}</MathBlock>
        <p>
          When <MathInline>{`c = 0`}</MathInline>, this is called the <strong>Maclaurin series</strong>:
        </p>
        <MathBlock>{`\\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!}x^n`}</MathBlock>
      </Callout>

      <h2>Important Maclaurin Series</h2>

      <Callout type="theorem" title="Essential Maclaurin Series">
        <p>The following series converge to their respective functions:</p>
        <MathBlock>{`e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots \\quad (R = \\infty)`}</MathBlock>
        <MathBlock>{`\\sin x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots \\quad (R = \\infty)`}</MathBlock>
        <MathBlock>{`\\cos x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots \\quad (R = \\infty)`}</MathBlock>
        <MathBlock>{`\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1} x^n}{n} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots \\quad (R = 1)`}</MathBlock>
        <MathBlock>{`\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n = 1 + x + x^2 + x^3 + \\cdots \\quad (R = 1)`}</MathBlock>
        <MathBlock>{`(1+x)^\\alpha = \\sum_{n=0}^\\infty \\binom{\\alpha}{n} x^n \\quad (R = 1 \\text{ for } \\alpha \\notin \\mathbb{N})`}</MathBlock>
      </Callout>

      <Callout type="example" title="Deriving the Series for e^x">
        <p>Let <MathInline>{`f(x) = e^x`}</MathInline>. Then <MathInline>{`f^{(n)}(x) = e^x`}</MathInline> for all <MathInline>{`n`}</MathInline>, so <MathInline>{`f^{(n)}(0) = 1`}</MathInline>.</p>
        <p>The Maclaurin series is:</p>
        <MathBlock>{`\\sum_{n=0}^\\infty \\frac{1}{n!}x^n = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots`}</MathBlock>
      </Callout>

      <Callout type="example" title="Deriving the Series for sin x">
        <p>Let <MathInline>{`f(x) = \\sin x`}</MathInline>. The derivatives cycle:</p>
        <MathBlock>{`f(x) = \\sin x, \\quad f'(x) = \\cos x, \\quad f''(x) = -\\sin x, \\quad f'''(x) = -\\cos x, \\ldots`}</MathBlock>
        <p>At <MathInline>{`x = 0`}</MathInline>: <MathInline>{`f(0) = 0`}</MathInline>, <MathInline>{`f'(0) = 1`}</MathInline>, <MathInline>{`f''(0) = 0`}</MathInline>, <MathInline>{`f'''(0) = -1`}</MathInline>, ...</p>
        <p>Only odd powers have nonzero coefficients:</p>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots`}</MathBlock>
      </Callout>

      <h2>Taylor's Theorem with Remainder</h2>

      <p>
        The key question is: when does the Taylor series actually converge to <MathInline>{`f(x)`}</MathInline>?
        Taylor's theorem provides the answer through the remainder term.
      </p>

      <Callout type="theorem" title="Taylor's Theorem (Lagrange Form)">
        <p>
          If <MathInline>{`f`}</MathInline> is <MathInline>{`(n+1)`}</MathInline> times differentiable on an interval
          containing <MathInline>{`c`}</MathInline> and <MathInline>{`x`}</MathInline>, then:
        </p>
        <MathBlock>{`f(x) = T_n(x) + R_n(x)`}</MathBlock>
        <p>where the <strong>remainder</strong> (or error) is:</p>
        <MathBlock>{`R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-c)^{n+1}`}</MathBlock>
        <p>
          for some <MathInline>{`\\xi`}</MathInline> between <MathInline>{`c`}</MathInline> and <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <p>
        The Taylor series converges to <MathInline>{`f(x)`}</MathInline> if and only
        if <MathInline>{`R_n(x) \\to 0`}</MathInline> as <MathInline>{`n \\to \\infty`}</MathInline>.
      </p>

      <Callout type="example" title="Verifying e^x">
        <p>
          For <MathInline>{`f(x) = e^x`}</MathInline>, we have <MathInline>{`f^{(n+1)}(\\xi) = e^\\xi`}</MathInline>.
          For any fixed <MathInline>{`x`}</MathInline>:
        </p>
        <MathBlock>{`|R_n(x)| = \\frac{e^\\xi}{(n+1)!}|x|^{n+1} \\leq \\frac{e^{|x|}|x|^{n+1}}{(n+1)!}`}</MathBlock>
        <p>
          Since <MathInline>{`\\frac{|x|^{n+1}}{(n+1)!} \\to 0`}</MathInline> for any fixed <MathInline>{`x`}</MathInline>,
          we have <MathInline>{`R_n(x) \\to 0`}</MathInline>.
        </p>
        <p>Thus <MathInline>{`e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}`}</MathInline> for all <MathInline>{`x \\in \\mathbb{R}`}</MathInline>.</p>
      </Callout>

      <h2>When Taylor Series Fail</h2>

      <p>
        Not every infinitely differentiable function equals its Taylor series!
      </p>

      <Callout type="example" title="A Function Not Equal to Its Taylor Series">
        <p>Define:</p>
        <MathBlock>{`f(x) = \\begin{cases} e^{-1/x^2} & \\text{if } x \\neq 0 \\ 0 & \\text{if } x = 0 \\end{cases}`}</MathBlock>
        <p>
          This function is infinitely differentiable everywhere, and <MathInline>{`f^{(n)}(0) = 0`}</MathInline> for
          all <MathInline>{`n`}</MathInline> (though proving this requires careful analysis).
        </p>
        <p>
          The Maclaurin series is <MathInline>{`0 + 0 \\cdot x + 0 \\cdot x^2 + \\cdots = 0`}</MathInline>,
          which equals <MathInline>{`f(x)`}</MathInline> only at <MathInline>{`x = 0`}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition" title="Analytic Functions">
        <p>
          A function is called <strong>analytic</strong> at <MathInline>{`c`}</MathInline> if it equals its
          Taylor series in some neighborhood of <MathInline>{`c`}</MathInline>. The elementary
          functions <MathInline>{`e^x`}</MathInline>, <MathInline>{`\\sin x`}</MathInline>, <MathInline>{`\\cos x`}</MathInline>,
          polynomials, and rational functions are all analytic on their domains.
        </p>
      </Callout>

      <h2>Operations on Taylor Series</h2>

      <p>
        We can manipulate Taylor series using algebra and calculus.
      </p>

      <Callout type="example" title="Substitution">
        <p>Find the Maclaurin series for <MathInline>{`e^{-x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Substitute <MathInline>{`-x^2`}</MathInline> for <MathInline>{`x`}</MathInline> in <MathInline>{`e^x = \\sum \\frac{x^n}{n!}`}</MathInline>:</p>
        <MathBlock>{`e^{-x^2} = \\sum_{n=0}^\\infty \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{n!} = 1 - x^2 + \\frac{x^4}{2!} - \\frac{x^6}{3!} + \\cdots`}</MathBlock>
      </Callout>

      <Callout type="example" title="Multiplication">
        <p>Find the first few terms of the Maclaurin series for <MathInline>{`e^x \\sin x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots`}</MathBlock>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + \\cdots`}</MathBlock>
        <p>Multiplying:</p>
        <MathBlock>{`e^x \\sin x = x + x^2 + \\frac{x^3}{3} + \\cdots`}</MathBlock>
      </Callout>

      <Callout type="example" title="Integration">
        <p>Find a series for <MathInline>{`\\int_0^x e^{-t^2}\\,dt`}</MathInline>.</p>
        <p><strong>Solution:</strong> Integrate the series for <MathInline>{`e^{-t^2}`}</MathInline> term by term:</p>
        <MathBlock>{`\\int_0^x e^{-t^2}\\,dt = \\int_0^x \\left(1 - t^2 + \\frac{t^4}{2!} - \\frac{t^6}{3!} + \\cdots\\right)dt`}</MathBlock>
        <MathBlock>{`= x - \\frac{x^3}{3} + \\frac{x^5}{5 \\cdot 2!} - \\frac{x^7}{7 \\cdot 3!} + \\cdots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)n!}`}</MathBlock>
        <p>
          This is related to the <em>error function</em> <MathInline>{`\\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_0^x e^{-t^2}\\,dt`}</MathInline>.
        </p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Computing Limits">
        <p>Evaluate <MathInline>{`\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Using <MathInline>{`e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots`}</MathInline>:</p>
        <MathBlock>{`\\frac{e^x - 1 - x}{x^2} = \\frac{\\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots}{x^2} = \\frac{1}{2} + \\frac{x}{6} + \\cdots \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Approximating Integrals">
        <p>Approximate <MathInline>{`\\int_0^1 e^{-x^2}\\,dx`}</MathInline> to 4 decimal places.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^1 e^{-x^2}\\,dx = 1 - \\frac{1}{3} + \\frac{1}{10} - \\frac{1}{42} + \\frac{1}{216} - \\cdots`}</MathBlock>
        <p>
          Since this is an alternating series with decreasing terms, the error is bounded
          by the first omitted term. Computing enough terms:
        </p>
        <MathBlock>{`\\int_0^1 e^{-x^2}\\,dx \\approx 0.7468`}</MathBlock>
      </Callout>

      <h2>The Binomial Series</h2>

      <Callout type="theorem" title="Binomial Series">
        <p>For any real number <MathInline>{`\\alpha`}</MathInline> and <MathInline>{`|x| < 1`}</MathInline>:</p>
        <MathBlock>{`(1+x)^\\alpha = \\sum_{n=0}^\\infty \\binom{\\alpha}{n} x^n`}</MathBlock>
        <p>where the generalized binomial coefficient is:</p>
        <MathBlock>{`\\binom{\\alpha}{n} = \\frac{\\alpha(\\alpha-1)(\\alpha-2)\\cdots(\\alpha-n+1)}{n!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Square Root Series">
        <p>Find the Maclaurin series for <MathInline>{`\\sqrt{1+x}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Use <MathInline>{`\\alpha = 1/2`}</MathInline>:</p>
        <MathBlock>{`\\binom{1/2}{0} = 1, \\quad \\binom{1/2}{1} = \\frac{1}{2}, \\quad \\binom{1/2}{2} = \\frac{(1/2)(-1/2)}{2!} = -\\frac{1}{8}`}</MathBlock>
        <MathBlock>{`\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} - \\cdots \\quad (|x| < 1)`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results">
        <p><strong>Taylor series:</strong> <MathInline>{`\\sum_{n=0}^\\infty \\frac{f^{(n)}(c)}{n!}(x-c)^n`}</MathInline></p>
        <p><strong>Maclaurin series:</strong> Taylor series with <MathInline>{`c = 0`}</MathInline></p>
        <p><strong>Taylor's theorem:</strong> <MathInline>{`f(x) = T_n(x) + R_n(x)`}</MathInline> where <MathInline>{`R_n = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-c)^{n+1}`}</MathInline></p>
        <p><strong>Convergence to f:</strong> Requires <MathInline>{`R_n(x) \\to 0`}</MathInline> as <MathInline>{`n \\to \\infty`}</MathInline></p>
        <p><strong>Key series:</strong> <MathInline>{`e^x`}</MathInline>, <MathInline>{`\\sin x`}</MathInline>, <MathInline>{`\\cos x`}</MathInline>, <MathInline>{`\\ln(1+x)`}</MathInline>, <MathInline>{`(1+x)^\\alpha`}</MathInline></p>
        <p><strong>Operations:</strong> Substitution, addition, multiplication, differentiation, integration</p>
      </Callout>
    </LessonLayout>
  );
}
