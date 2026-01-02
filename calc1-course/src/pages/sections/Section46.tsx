import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
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
        point <InlineMath>{`a`}</InlineMath> by its tangent line:
      </p>

      <MathBlock>{`f(x) \\approx f(a) + f'(a)(x - a)`}</MathBlock>

      <p>
        This <em>linear approximation</em> is excellent when <InlineMath>{`x`}</InlineMath> is
        close to <InlineMath>{`a`}</InlineMath>, but the error grows as we move away. Can we do
        better by using higher-degree polynomials?
      </p>

      <Callout type="info">
        The key insight is that if a polynomial <InlineMath>{`P_n(x)`}</InlineMath> is to
        approximate <InlineMath>{`f(x)`}</InlineMath> well near <InlineMath>{`x = a`}</InlineMath>,
        then <InlineMath>{`P_n`}</InlineMath> and its derivatives should match those of <InlineMath>{`f`}</InlineMath>
        at the point <InlineMath>{`a`}</InlineMath>.
      </Callout>

      <h2>The Taylor Polynomial</h2>

      <Callout type="definition" title="Taylor Polynomial of Degree n">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be a function with derivatives of all orders up
          to <InlineMath>{`n`}</InlineMath> at a point <InlineMath>{`a`}</InlineMath>. The <strong>Taylor
          polynomial of degree <InlineMath>{`n`}</InlineMath></strong> for <InlineMath>{`f`}</InlineMath> at
          <InlineMath>{`a`}</InlineMath> is:
        </p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k`}</MathBlock>
        <p>Written out explicitly:</p>
        <MathBlock>{`T_n(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Matching Derivatives Property">
        <p>
          The Taylor polynomial <InlineMath>{`T_n(x)`}</InlineMath> satisfies:
        </p>
        <MathBlock>{`T_n^{(k)}(a) = f^{(k)}(a) \\quad \\text{for } k = 0, 1, 2, \\ldots, n`}</MathBlock>
        <p>
          That is, the Taylor polynomial and the function have the same value and the same
          first <InlineMath>{`n`}</InlineMath> derivatives at the point <InlineMath>{`a`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Matching Derivatives">
        <p>
          The coefficient of <InlineMath>{`(x-a)^k`}</InlineMath> in <InlineMath>{`T_n(x)`}</InlineMath>
          is <InlineMath>{`\\frac{f^{(k)}(a)}{k!}`}</InlineMath>. When we differentiate <InlineMath>{`T_n(x)`}</InlineMath>
          exactly <InlineMath>{`k`}</InlineMath> times and evaluate at <InlineMath>{`x = a`}</InlineMath>,
          only the <InlineMath>{`(x-a)^k`}</InlineMath> term survives, and it contributes:
        </p>
        <MathBlock>{`\\frac{f^{(k)}(a)}{k!} \\cdot k! = f^{(k)}(a)`}</MathBlock>
      </Callout>

      <h2>Special Case: Maclaurin Polynomials</h2>

      <Callout type="definition" title="Maclaurin Polynomial">
        <p>
          When <InlineMath>{`a = 0`}</InlineMath>, the Taylor polynomial is called a <strong>Maclaurin
          polynomial</strong>:
        </p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(0)}{k!}x^k = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\cdots + \\frac{f^{(n)}(0)}{n!}x^n`}</MathBlock>
      </Callout>

      <h2>Taylor Polynomials for Common Functions</h2>

      <Callout type="example" title="Example 1: The Exponential Function">
        <p>
          Find the Taylor polynomial of degree <InlineMath>{`n`}</InlineMath> for <InlineMath>{`f(x) = e^x`}</InlineMath>
          at <InlineMath>{`a = 0`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Since <InlineMath>{`f^{(k)}(x) = e^x`}</InlineMath> for all <InlineMath>{`k`}</InlineMath>, we
          have <InlineMath>{`f^{(k)}(0) = 1`}</InlineMath> for all <InlineMath>{`k`}</InlineMath>.
        </p>
        <MathBlock>{`T_n(x) = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots + \\frac{x^n}{n!} = \\sum_{k=0}^{n} \\frac{x^k}{k!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Sine Function">
        <p>
          Find the Maclaurin polynomial for <InlineMath>{`f(x) = \\sin x`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>The derivatives of sine cycle with period 4:</p>
        <MathBlock>{`f(x) = \\sin x, \\quad f'(x) = \\cos x, \\quad f''(x) = -\\sin x, \\quad f'''(x) = -\\cos x, \\ldots`}</MathBlock>
        <p>
          At <InlineMath>{`x = 0`}</InlineMath>:
          <InlineMath>{`f(0) = 0`}</InlineMath>,
          <InlineMath>{`f'(0) = 1`}</InlineMath>,
          <InlineMath>{`f''(0) = 0`}</InlineMath>,
          <InlineMath>{`f'''(0) = -1`}</InlineMath>, ...
        </p>
        <p>Only odd powers have nonzero coefficients:</p>
        <MathBlock>{`T_{2n+1}(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots + \\frac{(-1)^n x^{2n+1}}{(2n+1)!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Cosine Function">
        <p>
          Find the Maclaurin polynomial for <InlineMath>{`f(x) = \\cos x`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          At <InlineMath>{`x = 0`}</InlineMath>:
          <InlineMath>{`f(0) = 1`}</InlineMath>,
          <InlineMath>{`f'(0) = 0`}</InlineMath>,
          <InlineMath>{`f''(0) = -1`}</InlineMath>,
          <InlineMath>{`f'''(0) = 0`}</InlineMath>, ...
        </p>
        <p>Only even powers have nonzero coefficients:</p>
        <MathBlock>{`T_{2n}(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots + \\frac{(-1)^n x^{2n}}{(2n)!}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Natural Logarithm">
        <p>
          Find the Taylor polynomial for <InlineMath>{`f(x) = \\ln(1+x)`}</InlineMath> at <InlineMath>{`a = 0`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Computing derivatives:</p>
        <MathBlock>{`f(x) = \\ln(1+x), \\quad f'(x) = \\frac{1}{1+x}, \\quad f''(x) = \\frac{-1}{(1+x)^2}, \\quad f'''(x) = \\frac{2}{(1+x)^3}, \\ldots`}</MathBlock>
        <p>In general, <InlineMath>{`f^{(k)}(x) = \\frac{(-1)^{k-1}(k-1)!}{(1+x)^k}`}</InlineMath> for <InlineMath>{`k \\geq 1`}</InlineMath>.</p>
        <p>At <InlineMath>{`x = 0`}</InlineMath>: <InlineMath>{`f^{(k)}(0) = (-1)^{k-1}(k-1)!`}</InlineMath></p>
        <MathBlock>{`T_n(x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\cdots + \\frac{(-1)^{n-1}x^n}{n}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: The Binomial Function">
        <p>
          Find the Maclaurin polynomial for <InlineMath>{`f(x) = (1+x)^\\alpha`}</InlineMath> where
          <InlineMath>{`\\alpha`}</InlineMath> is any real number.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          We have <InlineMath>{`f^{(k)}(x) = \\alpha(\\alpha-1)\\cdots(\\alpha-k+1)(1+x)^{\\alpha-k}`}</InlineMath>,
          so <InlineMath>{`f^{(k)}(0) = \\alpha(\\alpha-1)\\cdots(\\alpha-k+1)`}</InlineMath>.
        </p>
        <p>Define the generalized binomial coefficient:</p>
        <MathBlock>{`\\binom{\\alpha}{k} = \\frac{\\alpha(\\alpha-1)\\cdots(\\alpha-k+1)}{k!}`}</MathBlock>
        <p>Then:</p>
        <MathBlock>{`T_n(x) = \\sum_{k=0}^{n} \\binom{\\alpha}{k} x^k = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + \\cdots`}</MathBlock>
        <p>
          When <InlineMath>{`\\alpha`}</InlineMath> is a positive integer, this reduces to the
          ordinary binomial expansion, which terminates.
        </p>
      </Callout>

      <h2>Taylor Polynomials at Points Other Than Zero</h2>

      <Callout type="example" title="Example 6: Expansion at a = 1">
        <p>
          Find the Taylor polynomial of degree 4 for <InlineMath>{`f(x) = \\ln x`}</InlineMath>
          at <InlineMath>{`a = 1`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Computing derivatives at <InlineMath>{`x = 1`}</InlineMath>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`f(x) = \\ln x`}</InlineMath>, so <InlineMath>{`f(1) = 0`}</InlineMath></li>
          <li><InlineMath>{`f'(x) = 1/x`}</InlineMath>, so <InlineMath>{`f'(1) = 1`}</InlineMath></li>
          <li><InlineMath>{`f''(x) = -1/x^2`}</InlineMath>, so <InlineMath>{`f''(1) = -1`}</InlineMath></li>
          <li><InlineMath>{`f'''(x) = 2/x^3`}</InlineMath>, so <InlineMath>{`f'''(1) = 2`}</InlineMath></li>
          <li><InlineMath>{`f^{(4)}(x) = -6/x^4`}</InlineMath>, so <InlineMath>{`f^{(4)}(1) = -6`}</InlineMath></li>
        </ul>
        <MathBlock>{`T_4(x) = (x-1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\frac{(x-1)^4}{4}`}</MathBlock>
      </Callout>

      <h2>Uniqueness of Taylor Polynomials</h2>

      <Callout type="theorem" title="Uniqueness">
        <p>
          If <InlineMath>{`P(x)`}</InlineMath> is a polynomial of degree at most <InlineMath>{`n`}</InlineMath>
          such that <InlineMath>{`P^{(k)}(a) = f^{(k)}(a)`}</InlineMath> for <InlineMath>{`k = 0, 1, \\ldots, n`}</InlineMath>,
          then <InlineMath>{`P(x) = T_n(x)`}</InlineMath>.
        </p>
        <p>
          In other words, the Taylor polynomial is the <em>only</em> polynomial of degree at
          most <InlineMath>{`n`}</InlineMath> that matches <InlineMath>{`f`}</InlineMath> and its first
          <InlineMath>{`n`}</InlineMath> derivatives at the point <InlineMath>{`a`}</InlineMath>.
        </p>
      </Callout>

      <h2>Graphical Interpretation</h2>

      <p>
        As <InlineMath>{`n`}</InlineMath> increases, the Taylor polynomial <InlineMath>{`T_n(x)`}</InlineMath>
        typically approximates <InlineMath>{`f(x)`}</InlineMath> over a larger interval. Consider the
        approximations to <InlineMath>{`e^x`}</InlineMath> at <InlineMath>{`a = 0`}</InlineMath>:
      </p>

      <Callout type="info" title="Successive Approximations to e^x">
        <MathBlock>{`T_1(x) = 1 + x`}</MathBlock>
        <MathBlock>{`T_2(x) = 1 + x + \\frac{x^2}{2}`}</MathBlock>
        <MathBlock>{`T_3(x) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}`}</MathBlock>
        <MathBlock>{`T_4(x) = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\frac{x^4}{24}`}</MathBlock>
        <p>
          Each successive polynomial hugs the curve <InlineMath>{`y = e^x`}</InlineMath> more closely
          and for a wider range of <InlineMath>{`x`}</InlineMath>-values.
        </p>
      </Callout>

      <h2>Computational Applications</h2>

      <Callout type="example" title="Example 7: Approximating e">
        <p>
          Use the Taylor polynomial of degree 5 to approximate <InlineMath>{`e = e^1`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`e \\approx T_5(1) = 1 + 1 + \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{24} + \\frac{1}{120}`}</MathBlock>
        <MathBlock>{`= 1 + 1 + 0.5 + 0.1667 + 0.0417 + 0.0083 = 2.7167`}</MathBlock>
        <p>
          The actual value is <InlineMath>{`e \\approx 2.7183`}</InlineMath>, so the error is about 0.0016.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Approximating sin(0.1)">
        <p>
          Use the Taylor polynomial of degree 5 to approximate <InlineMath>{`\\sin(0.1)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sin(0.1) \\approx 0.1 - \\frac{(0.1)^3}{6} + \\frac{(0.1)^5}{120}`}</MathBlock>
        <MathBlock>{`= 0.1 - 0.000167 + 0.0000000833 \\approx 0.0998333`}</MathBlock>
        <p>
          This is extremely accurate because <InlineMath>{`x = 0.1`}</InlineMath> is close to 0.
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
          <strong>Taylor polynomial:</strong> <InlineMath>{`T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k`}</InlineMath>
          approximates <InlineMath>{`f(x)`}</InlineMath> near <InlineMath>{`x = a`}</InlineMath>.
        </li>
        <li>
          <strong>Maclaurin polynomial:</strong> Taylor polynomial centered at <InlineMath>{`a = 0`}</InlineMath>.
        </li>
        <li>
          <strong>Matching property:</strong> <InlineMath>{`T_n^{(k)}(a) = f^{(k)}(a)`}</InlineMath> for
          <InlineMath>{`k = 0, 1, \\ldots, n`}</InlineMath>.
        </li>
        <li>
          <strong>Uniqueness:</strong> <InlineMath>{`T_n`}</InlineMath> is the unique polynomial of degree
          at most <InlineMath>{`n`}</InlineMath> with this property.
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
