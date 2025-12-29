import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <p>
        One of the most powerful ideas in analysis is approximating complicated functions
        by polynomials. Polynomials are easy to evaluate, differentiate, and integrate,
        making them ideal for both theoretical and computational purposes.
      </p>

      <h2>Motivation: Linear Approximation</h2>

      <p>
        We have already seen that a differentiable function can be approximated near a
        point <MathInline>{`a`}</MathInline> by its tangent line:
      </p>

      <MathBlock>{`f(x) \\approx f(a) + f'(a)(x - a)`}</MathBlock>

      <p>
        This <em>linear approximation</em> is excellent when <MathInline>{`x`}</MathInline> is
        close to <MathInline>{`a`}</MathInline>, but the error grows as we move away. Can we do
        better by using higher-degree polynomials?
      </p>

      <Callout type="info">
        The key insight is that if a polynomial <MathInline>{`P_n(x)`}</MathInline> is to
        approximate <MathInline>{`f(x)`}</MathInline> well near <MathInline>{`x = a`}</MathInline>,
        then <MathInline>{`P_n`}</MathInline> and its derivatives should match those of <MathInline>{`f`}</MathInline>
        at the point <MathInline>{`a`}</MathInline>.
      </Callout>

      <h2>The Taylor Polynomial</h2>

      <Callout type="definition" title="Taylor Polynomial of Degree n">
        <p>
          Let <MathInline>{`f`}</MathInline> be a function with derivatives of all orders up
          to <MathInline>{`n`}</MathInline> at a point <MathInline>{`a`}</MathInline>. The <strong>Taylor
          polynomial of degree <MathInline>{`n`}</MathInline></strong> for <MathInline>{`f`}</MathInline> at
          <MathInline>{`a`}</MathInline> is:
        </p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k`}</MathBlock>
        <p>Written out explicitly:</p>
        <MathBlock>{`T_n(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Matching Derivatives Property">
        <p>
          The Taylor polynomial <MathInline>{`T_n(x)`}</MathInline> satisfies:
        </p>
        <MathBlock>{`T_n^{(k)}(a) = f^{(k)}(a) \\quad \\text{for } k = 0, 1, 2, \\ldots, n`}</MathBlock>
        <p>
          That is, the Taylor polynomial and the function have the same value and the same
          first <MathInline>{`n`}</MathInline> derivatives at the point <MathInline>{`a`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Matching Derivatives">
        <p>
          The coefficient of <MathInline>{`(x-a)^k`}</MathInline> in <MathInline>{`T_n(x)`}</MathInline>
          is <MathInline>{`\\frac{f^{(k)}(a)}{k!}`}</MathInline>. When we differentiate <MathInline>{`T_n(x)`}</MathInline>
          exactly <MathInline>{`k`}</MathInline> times and evaluate at <MathInline>{`x = a`}</MathInline>,
          only the <MathInline>{`(x-a)^k`}</MathInline> term survives, and it contributes:
        </p>
        <MathBlock>{`\\frac{f^{(k)}(a)}{k!} \\cdot k! = f^{(k)}(a)`}</MathBlock>
      </Callout>

      <h2>Special Case: Maclaurin Polynomials</h2>

      <Callout type="definition" title="Maclaurin Polynomial">
        <p>
          When <MathInline>{`a = 0`}</MathInline>, the Taylor polynomial is called a <strong>Maclaurin
          polynomial</strong>:
        </p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(0)}{k!}x^k = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\cdots + \\frac{f^{(n)}(0)}{n!}x^n`}</MathBlock>
      </Callout>

      <h2>Taylor Polynomials for Common Functions</h2>

      <Callout type="example" title="Example 1: The Exponential Function">
        <p>
          Find the Taylor polynomial of degree <MathInline>{`n`}</MathInline> for <MathInline>{`f(x) = e^x`}</MathInline>
          at <MathInline>{`a = 0`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Since <MathInline>{`f^{(k)}(x) = e^x`}</MathInline> for all <MathInline>{`k`}</MathInline>, we
          have <MathInline>{`f^{(k)}(0) = 1`}</MathInline> for all <MathInline>{`k`}</MathInline>.
        </p>
        <MathBlock>{`T_n(x) = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots + \\frac{x^n}{n!} = \\sum_{k=0}^{n} \\frac{x^k}{k!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Sine Function">
        <p>
          Find the Maclaurin polynomial for <MathInline>{`f(x) = \\sin x`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>The derivatives of sine cycle with period 4:</p>
        <MathBlock>{`f(x) = \\sin x, \\quad f'(x) = \\cos x, \\quad f''(x) = -\\sin x, \\quad f'''(x) = -\\cos x, \\ldots`}</MathBlock>
        <p>
          At <MathInline>{`x = 0`}</MathInline>:
          <MathInline>{`f(0) = 0`}</MathInline>,
          <MathInline>{`f'(0) = 1`}</MathInline>,
          <MathInline>{`f''(0) = 0`}</MathInline>,
          <MathInline>{`f'''(0) = -1`}</MathInline>, ...
        </p>
        <p>Only odd powers have nonzero coefficients:</p>
        <MathBlock>{`T_{2n+1}(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots + \\frac{(-1)^n x^{2n+1}}{(2n+1)!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Cosine Function">
        <p>
          Find the Maclaurin polynomial for <MathInline>{`f(x) = \\cos x`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          At <MathInline>{`x = 0`}</MathInline>:
          <MathInline>{`f(0) = 1`}</MathInline>,
          <MathInline>{`f'(0) = 0`}</MathInline>,
          <MathInline>{`f''(0) = -1`}</MathInline>,
          <MathInline>{`f'''(0) = 0`}</MathInline>, ...
        </p>
        <p>Only even powers have nonzero coefficients:</p>
        <MathBlock>{`T_{2n}(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots + \\frac{(-1)^n x^{2n}}{(2n)!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Natural Logarithm">
        <p>
          Find the Taylor polynomial for <MathInline>{`f(x) = \\ln(1+x)`}</MathInline> at <MathInline>{`a = 0`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Computing derivatives:</p>
        <MathBlock>{`f(x) = \\ln(1+x), \\quad f'(x) = \\frac{1}{1+x}, \\quad f''(x) = \\frac{-1}{(1+x)^2}, \\quad f'''(x) = \\frac{2}{(1+x)^3}, \\ldots`}</MathBlock>
        <p>In general, <MathInline>{`f^{(k)}(x) = \\frac{(-1)^{k-1}(k-1)!}{(1+x)^k}`}</MathInline> for <MathInline>{`k \\geq 1`}</MathInline>.</p>
        <p>At <MathInline>{`x = 0`}</MathInline>: <MathInline>{`f^{(k)}(0) = (-1)^{k-1}(k-1)!`}</MathInline></p>
        <MathBlock>{`T_n(x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots + \\frac{(-1)^{n-1}x^n}{n}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: The Binomial Function">
        <p>
          Find the Maclaurin polynomial for <MathInline>{`f(x) = (1+x)^\\alpha`}</MathInline> where
          <MathInline>{`\\alpha`}</MathInline> is any real number.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          We have <MathInline>{`f^{(k)}(x) = \\alpha(\\alpha-1)\\cdots(\\alpha-k+1)(1+x)^{\\alpha-k}`}</MathInline>,
          so <MathInline>{`f^{(k)}(0) = \\alpha(\\alpha-1)\\cdots(\\alpha-k+1)`}</MathInline>.
        </p>
        <p>Define the generalized binomial coefficient:</p>
        <MathBlock>{`\\binom{\\alpha}{k} = \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-k+1)}{k!}`}</MathBlock>
        <p>Then:</p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^{n} \\binom{\\alpha}{k} x^k = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\cdots`}</MathBlock>
        <p>
          When <MathInline>{`\\alpha`}</MathInline> is a positive integer, this reduces to the
          ordinary binomial expansion, which terminates.
        </p>
      </Callout>

      <h2>Taylor Polynomials at Points Other Than Zero</h2>

      <Callout type="example" title="Example 6: Expansion at a = 1">
        <p>
          Find the Taylor polynomial of degree 4 for <MathInline>{`f(x) = \\ln x`}</MathInline>
          at <MathInline>{`a = 1`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Computing derivatives at <MathInline>{`x = 1`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`f(x) = \\ln x`}</MathInline>, so <MathInline>{`f(1) = 0`}</MathInline></li>
          <li><MathInline>{`f'(x) = 1/x`}</MathInline>, so <MathInline>{`f'(1) = 1`}</MathInline></li>
          <li><MathInline>{`f''(x) = -1/x^2`}</MathInline>, so <MathInline>{`f''(1) = -1`}</MathInline></li>
          <li><MathInline>{`f'''(x) = 2/x^3`}</MathInline>, so <MathInline>{`f'''(1) = 2`}</MathInline></li>
          <li><MathInline>{`f^{(4)}(x) = -6/x^4`}</MathInline>, so <MathInline>{`f^{(4)}(1) = -6`}</MathInline></li>
        </ul>
        <MathBlock>{`T_4(x) = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\frac{(x-1)^4}{4}`}</MathBlock>
      </Callout>

      <h2>Uniqueness of Taylor Polynomials</h2>

      <Callout type="theorem" title="Uniqueness">
        <p>
          If <MathInline>{`P(x)`}</MathInline> is a polynomial of degree at most <MathInline>{`n`}</MathInline>
          such that <MathInline>{`P^{(k)}(a) = f^{(k)}(a)`}</MathInline> for <MathInline>{`k = 0, 1, \\ldots, n`}</MathInline>,
          then <MathInline>{`P(x) = T_n(x)`}</MathInline>.
        </p>
        <p>
          In other words, the Taylor polynomial is the <em>only</em> polynomial of degree at
          most <MathInline>{`n`}</MathInline> that matches <MathInline>{`f`}</MathInline> and its first
          <MathInline>{`n`}</MathInline> derivatives at the point <MathInline>{`a`}</MathInline>.
        </p>
      </Callout>

      <h2>Graphical Interpretation</h2>

      <p>
        As <MathInline>{`n`}</MathInline> increases, the Taylor polynomial <MathInline>{`T_n(x)`}</MathInline>
        typically approximates <MathInline>{`f(x)`}</MathInline> over a larger interval. Consider the
        approximations to <MathInline>{`e^x`}</MathInline> at <MathInline>{`a = 0`}</MathInline>:
      </p>

      <Callout type="info" title="Successive Approximations to e^x">
        <MathBlock>{`T_1(x) = 1 + x`}</MathBlock>
        <MathBlock>{`T_2(x) = 1 + x + \\frac{x^2}{2}`}</MathBlock>
        <MathBlock>{`T_3(x) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}`}</MathBlock>
        <MathBlock>{`T_4(x) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\frac{x^4}{24}`}</MathBlock>
        <p>
          Each successive polynomial hugs the curve <MathInline>{`y = e^x`}</MathInline> more closely
          and for a wider range of <MathInline>{`x`}</MathInline>-values.
        </p>
      </Callout>

      <h2>Computational Applications</h2>

      <Callout type="example" title="Example 7: Approximating e">
        <p>
          Use the Taylor polynomial of degree 5 to approximate <MathInline>{`e = e^1`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`e \\approx T_5(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{24} + \\frac{1}{120}`}</MathBlock>
        <MathBlock>{`= 1 + 1 + 0.5 + 0.1667 + 0.0417 + 0.0083 = 2.7167`}</MathBlock>
        <p>
          The actual value is <MathInline>{`e \\approx 2.7183`}</MathInline>, so the error is about 0.0016.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Approximating sin(0.1)">
        <p>
          Use the Taylor polynomial of degree 5 to approximate <MathInline>{`\\sin(0.1)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sin(0.1) \\approx 0.1 - \\frac{(0.1)^3}{6} + \\frac{(0.1)^5}{120}`}</MathBlock>
        <MathBlock>{`= 0.1 - 0.000167 + 0.0000000833 \\approx 0.0998333`}</MathBlock>
        <p>
          This is extremely accurate because <MathInline>{`x = 0.1`}</MathInline> is close to 0.
        </p>
      </Callout>

      <h2>Summary of Key Taylor Polynomials</h2>

      <Callout type="theorem" title="Reference: Common Maclaurin Polynomials">
        <MathBlock>{`e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots + \\frac{x^n}{n!}`}</MathBlock>
        <MathBlock>{`\\sin x \\approx x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots + \\frac{(-1)^n x^{2n+1}}{(2n+1)!}`}</MathBlock>
        <MathBlock>{`\\cos x \\approx 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots + \\frac{(-1)^n x^{2n}}{(2n)!}`}</MathBlock>
        <MathBlock>{`\\ln(1+x) \\approx x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots + \\frac{(-1)^{n-1} x^n}{n}`}</MathBlock>
        <MathBlock>{`(1+x)^\\alpha \\approx 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\cdots + \\binom{\\alpha}{n}x^n`}</MathBlock>
        <MathBlock>{`\\frac{1}{1-x} \\approx 1 + x + x^2 + x^3 + \\cdots + x^n`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Taylor polynomial:</strong> <MathInline>{`T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k`}</MathInline>
          approximates <MathInline>{`f(x)`}</MathInline> near <MathInline>{`x = a`}</MathInline>.
        </li>
        <li>
          <strong>Maclaurin polynomial:</strong> Taylor polynomial centered at <MathInline>{`a = 0`}</MathInline>.
        </li>
        <li>
          <strong>Matching property:</strong> <MathInline>{`T_n^{(k)}(a) = f^{(k)}(a)`}</MathInline> for
          <MathInline>{`k = 0, 1, \\ldots, n`}</MathInline>.
        </li>
        <li>
          <strong>Uniqueness:</strong> <MathInline>{`T_n`}</MathInline> is the unique polynomial of degree
          at most <MathInline>{`n`}</MathInline> with this property.
        </li>
        <li>
          <strong>Key insight:</strong> Higher-degree Taylor polynomials generally give better
          approximations over larger intervals.
        </li>
        <li>
          <strong>Applications:</strong> Numerical computation, theoretical analysis, and
          understanding function behavior near a point.
        </li>
      </ul>
    </LessonLayout>
  );
}
