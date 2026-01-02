import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section72() {
  return (
    <LessonLayout sectionId={72}>
      <h1>Taylor Series</h1>

      <p>
        We have seen that power series define functions with remarkable properties. Now we ask
        the reverse question: given a function <InlineMath>{`f`}</InlineMath>, can we represent it as
        a power series? The answer leads us to <strong>Taylor series</strong>, one of the most
        powerful tools in analysis.
      </p>

      <h2>Taylor Polynomials</h2>

      <p>
        Before infinite series, we consider polynomial approximations. If <InlineMath>{`f`}</InlineMath> is
        to equal a power series <InlineMath>{`\\sum a_n(x-c)^n`}</InlineMath>, then differentiating and
        evaluating at <InlineMath>{`x = c`}</InlineMath> determines the coefficients.
      </p>

      <Callout type="definition" title="Taylor Polynomial">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be <InlineMath>{`n`}</InlineMath> times differentiable at <InlineMath>{`c`}</InlineMath>.
          The <strong>Taylor polynomial of degree <InlineMath>{`n`}</InlineMath></strong> for <InlineMath>{`f`}</InlineMath> centered
          at <InlineMath>{`c`}</InlineMath> is:
        </p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^n \\frac{f^{(k)}(c)}{k!}(x-c)^k`}</MathBlock>
        <MathBlock>{`= f(c) + f'(c)(x-c) + \\frac{f''(c)}{2!}(x-c)^2 + \\cdots + \\frac{f^{(n)}(c)}{n!}(x-c)^n`}</MathBlock>
      </Callout>

      <p>
        The Taylor polynomial <InlineMath>{`T_n`}</InlineMath> is the unique polynomial of degree at
        most <InlineMath>{`n`}</InlineMath> that matches <InlineMath>{`f`}</InlineMath> and its
        first <InlineMath>{`n`}</InlineMath> derivatives at <InlineMath>{`x = c`}</InlineMath>.
      </p>

      <h2>Taylor Series</h2>

      <Callout type="definition" title="Taylor Series">
        <p>
          If <InlineMath>{`f`}</InlineMath> is infinitely differentiable at <InlineMath>{`c`}</InlineMath>, its
          <strong>Taylor series</strong> centered at <InlineMath>{`c`}</InlineMath> is:
        </p>
        <MathBlock>{`\\sum_{n=0}^\\infty \\frac{f^{(n)}(c)}{n!}(x-c)^n`}</MathBlock>
        <p>
          When <InlineMath>{`c = 0`}</InlineMath>, this is called the <strong>Maclaurin series</strong>:
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
        <p>Let <InlineMath>{`f(x) = e^x`}</InlineMath>. Then <InlineMath>{`f^{(n)}(x) = e^x`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>, so <InlineMath>{`f^{(n)}(0) = 1`}</InlineMath>.</p>
        <p>The Maclaurin series is:</p>
        <MathBlock>{`\\sum_{n=0}^\\infty \\frac{1}{n!}x^n = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots`}</MathBlock>
      </Callout>

      <Callout type="example" title="Deriving the Series for sin x">
        <p>Let <InlineMath>{`f(x) = \\sin x`}</InlineMath>. The derivatives cycle:</p>
        <MathBlock>{`f(x) = \\sin x, \\quad f'(x) = \\cos x, \\quad f''(x) = -\\sin x, \\quad f'''(x) = -\\cos x, \\ldots`}</MathBlock>
        <p>At <InlineMath>{`x = 0`}</InlineMath>: <InlineMath>{`f(0) = 0`}</InlineMath>, <InlineMath>{`f'(0) = 1`}</InlineMath>, <InlineMath>{`f''(0) = 0`}</InlineMath>, <InlineMath>{`f'''(0) = -1`}</InlineMath>, ...</p>
        <p>Only odd powers have nonzero coefficients:</p>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots`}</MathBlock>
      </Callout>

      <h2>Taylor's Theorem with Remainder</h2>

      <p>
        The key question is: when does the Taylor series actually converge to <InlineMath>{`f(x)`}</InlineMath>?
        Taylor's theorem provides the answer through the remainder term.
      </p>

      <Callout type="theorem" title="Taylor's Theorem (Lagrange Form)">
        <p>
          If <InlineMath>{`f`}</InlineMath> is <InlineMath>{`(n+1)`}</InlineMath> times differentiable on an interval
          containing <InlineMath>{`c`}</InlineMath> and <InlineMath>{`x`}</InlineMath>, then:
        </p>
        <MathBlock>{`f(x) = T_n(x) + R_n(x)`}</MathBlock>
        <p>where the <strong>remainder</strong> (or error) is:</p>
        <MathBlock>{`R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-c)^{n+1}`}</MathBlock>
        <p>
          for some <InlineMath>{`\\xi`}</InlineMath> between <InlineMath>{`c`}</InlineMath> and <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <p>
        The Taylor series converges to <InlineMath>{`f(x)`}</InlineMath> if and only
        if <InlineMath>{`R_n(x) \\to 0`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath>.
      </p>

      <Callout type="example" title="Verifying e^x">
        <p>
          For <InlineMath>{`f(x) = e^x`}</InlineMath>, we have <InlineMath>{`f^{(n+1)}(\\xi) = e^\\xi`}</InlineMath>.
          For any fixed <InlineMath>{`x`}</InlineMath>:
        </p>
        <MathBlock>{`|R_n(x)| = \\frac{e^\\xi}{(n+1)!}|x|^{n+1} \\leq \\frac{e^{|x|}|x|^{n+1}}{(n+1)!}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\frac{|x|^{n+1}}{(n+1)!} \\to 0`}</InlineMath> for any fixed <InlineMath>{`x`}</InlineMath>,
          we have <InlineMath>{`R_n(x) \\to 0`}</InlineMath>.
        </p>
        <p>Thus <InlineMath>{`e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}`}</InlineMath> for all <InlineMath>{`x \\in \\mathbb{R}`}</InlineMath>.</p>
      </Callout>

      <h2>When Taylor Series Fail</h2>

      <p>
        Not every infinitely differentiable function equals its Taylor series!
      </p>

      <Callout type="example" title="A Function Not Equal to Its Taylor Series">
        <p>Define:</p>
        <MathBlock>{`f(x) = \\begin{cases} e^{-1/x^2} & \\text{if } x \\neq 0 \\ 0 & \\text{if } x = 0 \\end{cases}`}</MathBlock>
        <p>
          This function is infinitely differentiable everywhere, and <InlineMath>{`f^{(n)}(0) = 0`}</InlineMath> for
          all <InlineMath>{`n`}</InlineMath> (though proving this requires careful analysis).
        </p>
        <p>
          The Maclaurin series is <InlineMath>{`0 + 0 \\cdot x + 0 \\cdot x^2 + \\cdots = 0`}</InlineMath>,
          which equals <InlineMath>{`f(x)`}</InlineMath> only at <InlineMath>{`x = 0`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition" title="Analytic Functions">
        <p>
          A function is called <strong>analytic</strong> at <InlineMath>{`c`}</InlineMath> if it equals its
          Taylor series in some neighborhood of <InlineMath>{`c`}</InlineMath>. The elementary
          functions <InlineMath>{`e^x`}</InlineMath>, <InlineMath>{`\\sin x`}</InlineMath>, <InlineMath>{`\\cos x`}</InlineMath>,
          polynomials, and rational functions are all analytic on their domains.
        </p>
      </Callout>

      <h2>Operations on Taylor Series</h2>

      <p>
        We can manipulate Taylor series using algebra and calculus.
      </p>

      <Callout type="example" title="Substitution">
        <p>Find the Maclaurin series for <InlineMath>{`e^{-x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Substitute <InlineMath>{`-x^2`}</InlineMath> for <InlineMath>{`x`}</InlineMath> in <InlineMath>{`e^x = \\sum \\frac{x^n}{n!}`}</InlineMath>:</p>
        <MathBlock>{`e^{-x^2} = \\sum_{n=0}^\\infty \\frac{(-x^2)^n}{n!} = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{n!} = 1 - x^2 + \\frac{x^4}{2!} - \\frac{x^6}{3!} + \\cdots`}</MathBlock>
      </Callout>

      <Callout type="example" title="Multiplication">
        <p>Find the first few terms of the Maclaurin series for <InlineMath>{`e^x \\sin x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots`}</MathBlock>
        <MathBlock>{`\\sin x = x - \\frac{x^3}{6} + \\cdots`}</MathBlock>
        <p>Multiplying:</p>
        <MathBlock>{`e^x \\sin x = x + x^2 + \\frac{x^3}{3} + \\cdots`}</MathBlock>
      </Callout>

      <Callout type="example" title="Integration">
        <p>Find a series for <InlineMath>{`\\int_0^x e^{-t^2}\\,dt`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Integrate the series for <InlineMath>{`e^{-t^2}`}</InlineMath> term by term:</p>
        <MathBlock>{`\\int_0^x e^{-t^2}\\,dt = \\int_0^x \\left(1 - t^2 + \\frac{t^4}{2!} - \\frac{t^6}{3!} + \\cdots\\right)dt`}</MathBlock>
        <MathBlock>{`= x - \\frac{x^3}{3} + \\frac{x^5}{5 \\cdot 2!} - \\frac{x^7}{7 \\cdot 3!} + \\cdots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)n!}`}</MathBlock>
        <p>
          This is related to the <em>error function</em> <InlineMath>{`\\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}}\\int_0^x e^{-t^2}\\,dt`}</InlineMath>.
        </p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="example" title="Computing Limits">
        <p>Evaluate <InlineMath>{`\\lim_{x \\to 0} \\frac{e^x - 1 - x}{x^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Using <InlineMath>{`e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots`}</InlineMath>:</p>
        <MathBlock>{`\\frac{e^x - 1 - x}{x^2} = \\frac{\\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots}{x^2} = \\frac{1}{2} + \\frac{x}{6} + \\cdots \\to \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Approximating Integrals">
        <p>Approximate <InlineMath>{`\\int_0^1 e^{-x^2}\\,dx`}</InlineMath> to 4 decimal places.</p>
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
        <p>For any real number <InlineMath>{`\\alpha`}</InlineMath> and <InlineMath>{`|x| < 1`}</InlineMath>:</p>
        <MathBlock>{`(1+x)^\\alpha = \\sum_{n=0}^\\infty \\binom{\\alpha}{n} x^n`}</MathBlock>
        <p>where the generalized binomial coefficient is:</p>
        <MathBlock>{`\\binom{\\alpha}{n} = \\frac{\\alpha(\\alpha-1)(\\alpha-2)\\cdots(\\alpha-n+1)}{n!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Square Root Series">
        <p>Find the Maclaurin series for <InlineMath>{`\\sqrt{1+x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Use <InlineMath>{`\\alpha = 1/2`}</InlineMath>:</p>
        <MathBlock>{`\\binom{1/2}{0} = 1, \\quad \\binom{1/2}{1} = \\frac{1}{2}, \\quad \\binom{1/2}{2} = \\frac{(1/2)(-1/2)}{2!} = -\\frac{1}{8}`}</MathBlock>
        <MathBlock>{`\\sqrt{1+x} = 1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} - \\cdots \\quad (|x| < 1)`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Results">
        <p><strong>Taylor series:</strong> <InlineMath>{`\\sum_{n=0}^\\infty \\frac{f^{(n)}(c)}{n!}(x-c)^n`}</InlineMath></p>
        <p><strong>Maclaurin series:</strong> Taylor series with <InlineMath>{`c = 0`}</InlineMath></p>
        <p><strong>Taylor's theorem:</strong> <InlineMath>{`f(x) = T_n(x) + R_n(x)`}</InlineMath> where <InlineMath>{`R_n = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-c)^{n+1}`}</InlineMath></p>
        <p><strong>Convergence to f:</strong> Requires <InlineMath>{`R_n(x) \\to 0`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath></p>
        <p><strong>Key series:</strong> <InlineMath>{`e^x`}</InlineMath>, <InlineMath>{`\\sin x`}</InlineMath>, <InlineMath>{`\\cos x`}</InlineMath>, <InlineMath>{`\\ln(1+x)`}</InlineMath>, <InlineMath>{`(1+x)^\\alpha`}</InlineMath></p>
        <p><strong>Operations:</strong> Substitution, addition, multiplication, differentiation, integration</p>
      </Callout>
    </LessonLayout>
  );
}
