import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <p>
        The Taylor polynomial <InlineMath>{`T_n(x)`}</InlineMath> approximates <InlineMath>{`f(x)`}</InlineMath>,
        but how good is this approximation? To answer this, we need to understand the
        <strong> remainder</strong> or <strong>error term</strong>—the difference between
        <InlineMath>{`f(x)`}</InlineMath> and <InlineMath>{`T_n(x)`}</InlineMath>.
      </p>

      <h2>The Remainder Term</h2>

      <Callout type="definition" title="The Remainder">
        <p>
          For a function <InlineMath>{`f`}</InlineMath> with Taylor polynomial <InlineMath>{`T_n(x)`}</InlineMath>
          centered at <InlineMath>{`a`}</InlineMath>, the <strong>remainder</strong> (or <strong>error</strong>) is:
        </p>
        <MathBlock>{`R_n(x) = f(x) - T_n(x)`}</MathBlock>
        <p>
          This means we can write:
        </p>
        <MathBlock>{`f(x) = T_n(x) + R_n(x)`}</MathBlock>
      </Callout>

      <p>
        The fundamental question is: can we estimate or bound <InlineMath>{`R_n(x)`}</InlineMath>?
        Taylor's theorem provides several forms for the remainder.
      </p>

      <h2>Taylor's Theorem: Lagrange Form</h2>

      <Callout type="theorem" title="Taylor's Theorem (Lagrange Remainder)">
        <p>
          Suppose <InlineMath>{`f`}</InlineMath> has continuous derivatives up to order <InlineMath>{`n`}</InlineMath>
          on an interval containing <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath>, and
          <InlineMath>{`f^{(n+1)}`}</InlineMath> exists on the open interval between <InlineMath>{`a`}</InlineMath>
          and <InlineMath>{`x`}</InlineMath>. Then:
        </p>
        <MathBlock>{`f(x) = T_n(x) + R_n(x)`}</MathBlock>
        <p>where the <strong>Lagrange form</strong> of the remainder is:</p>
        <MathBlock>{`R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}`}</MathBlock>
        <p>
          for some <InlineMath>{`c`}</InlineMath> strictly between <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Interpretation">
        <p>
          The Lagrange remainder looks exactly like the next term in the Taylor series,
          except that <InlineMath>{`f^{(n+1)}`}</InlineMath> is evaluated at some unknown
          point <InlineMath>{`c`}</InlineMath> rather than at <InlineMath>{`a`}</InlineMath>.
        </p>
        <p>
          We don't know exactly where <InlineMath>{`c`}</InlineMath> is—only that it lies between
          <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath>. This is analogous to the
          Mean Value Theorem.
        </p>
      </Callout>

      <h2>Special Case: The Mean Value Theorem</h2>

      <p>
        When <InlineMath>{`n = 0`}</InlineMath>, Taylor's theorem reduces to:
      </p>

      <MathBlock>{`f(x) = f(a) + f'(c)(x - a)`}</MathBlock>

      <p>
        This is precisely the Mean Value Theorem! Taylor's theorem is a generalization
        that includes higher-order derivatives.
      </p>

      <h2>The Error Bound</h2>

      <Callout type="theorem" title="Taylor Remainder Bound">
        <p>
          If <InlineMath>{`|f^{(n+1)}(t)| \\leq M`}</InlineMath> for all <InlineMath>{`t`}</InlineMath> between
          <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath>, then:
        </p>
        <MathBlock>{`|R_n(x)| \\leq \\frac{M}{(n+1)!}|x-a|^{n+1}`}</MathBlock>
      </Callout>

      <p>
        This bound is tremendously useful for estimating errors in practical computations.
        We don't need to know the exact value of <InlineMath>{`c`}</InlineMath>—we only need a
        bound on <InlineMath>{`|f^{(n+1)}|`}</InlineMath>.
      </p>

      <h2>Examples: Error Estimation</h2>

      <Callout type="example" title="Example 1: Error in Approximating e">
        <p>
          Estimate the error when approximating <InlineMath>{`e = e^1`}</InlineMath> using the
          degree-5 Taylor polynomial.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          For <InlineMath>{`f(x) = e^x`}</InlineMath>, we have <InlineMath>{`f^{(n+1)}(x) = e^x`}</InlineMath>.
          Using <InlineMath>{`a = 0`}</InlineMath> and <InlineMath>{`x = 1`}</InlineMath>:
        </p>
        <MathBlock>{`R_5(1) = \\frac{e^c}{6!} \\cdot 1^6 = \\frac{e^c}{720}`}</MathBlock>
        <p>
          where <InlineMath>{`0 < c < 1`}</InlineMath>. Since <InlineMath>{`e^c < e^1 < 3`}</InlineMath>:
        </p>
        <MathBlock>{`|R_5(1)| < \\frac{3}{720} = \\frac{1}{240} \\approx 0.0042`}</MathBlock>
        <p>
          The actual error is about 0.0016, so this bound is reasonable.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: How Many Terms for e?">
        <p>
          How many terms of the Maclaurin series for <InlineMath>{`e^x`}</InlineMath> are needed to
          compute <InlineMath>{`e`}</InlineMath> with error less than <InlineMath>{`10^{-6}`}</InlineMath>?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          We need <InlineMath>{`|R_n(1)| < 10^{-6}`}</InlineMath>. Since <InlineMath>{`e < 3`}</InlineMath>:
        </p>
        <MathBlock>{`|R_n(1)| \\leq \\frac{3}{(n+1)!} < 10^{-6}`}</MathBlock>
        <p>Computing factorials:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`3/9! = 3/362880 \\approx 8.3 \\times 10^{-6}`}</InlineMath></li>
          <li><InlineMath>{`3/10! = 3/3628800 \\approx 8.3 \\times 10^{-7}`}</InlineMath></li>
        </ul>
        <p>
          So we need <InlineMath>{`n = 9`}</InlineMath> (i.e., terms through <InlineMath>{`x^9/9!`}</InlineMath>).
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Approximating sin(0.5)">
        <p>
          Use the degree-5 Taylor polynomial to approximate <InlineMath>{`\\sin(0.5)`}</InlineMath> and
          bound the error.
        </p>
        <p><strong>Solution:</strong></p>
        <p>The Maclaurin polynomial of degree 5 for sine is:</p>
        <MathBlock>{`T_5(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120}`}</MathBlock>
        <p>At <InlineMath>{`x = 0.5`}</InlineMath>:</p>
        <MathBlock>{`T_5(0.5) = 0.5 - \\frac{0.125}{6} + \\frac{0.03125}{120} = 0.5 - 0.02083 + 0.00026 \\approx 0.47943`}</MathBlock>
        <p>
          For the error, note that <InlineMath>{`f^{(6)}(x) = -\\sin x`}</InlineMath>, so
          <InlineMath>{`|f^{(6)}(c)| \\leq 1`}</InlineMath>:
        </p>
        <MathBlock>{`|R_5(0.5)| \\leq \\frac{1}{720} \\cdot (0.5)^6 = \\frac{1}{720} \\cdot \\frac{1}{64} = \\frac{1}{46080} \\approx 2.2 \\times 10^{-5}`}</MathBlock>
        <p>
          The actual value is <InlineMath>{`\\sin(0.5) \\approx 0.47943`}</InlineMath>, confirming our
          approximation is excellent.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Approximating ln(1.1)">
        <p>
          Use <InlineMath>{`T_4(x)`}</InlineMath> for <InlineMath>{`\\ln(1+x)`}</InlineMath> to approximate
          <InlineMath>{`\\ln(1.1)`}</InlineMath> and estimate the error.
        </p>
        <p><strong>Solution:</strong></p>
        <p>The Taylor polynomial is:</p>
        <MathBlock>{`T_4(x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4}`}</MathBlock>
        <p>At <InlineMath>{`x = 0.1`}</InlineMath>:</p>
        <MathBlock>{`T_4(0.1) = 0.1 - 0.005 + 0.000333 - 0.000025 \\approx 0.09531`}</MathBlock>
        <p>
          For <InlineMath>{`f(x) = \\ln(1+x)`}</InlineMath>, we have
          <InlineMath>{`f^{(5)}(x) = \\frac{24}{(1+x)^5}`}</InlineMath>.
        </p>
        <p>
          For <InlineMath>{`0 \\leq c \\leq 0.1`}</InlineMath>, we have <InlineMath>{`(1+c)^5 \\geq 1`}</InlineMath>,
          so <InlineMath>{`|f^{(5)}(c)| \\leq 24`}</InlineMath>.
        </p>
        <MathBlock>{`|R_4(0.1)| \\leq \\frac{24}{120} \\cdot (0.1)^5 = 0.2 \\cdot 0.00001 = 2 \\times 10^{-6}`}</MathBlock>
        <p>
          The actual value is <InlineMath>{`\\ln(1.1) \\approx 0.09531`}</InlineMath>, matching our
          approximation to 5 decimal places.
        </p>
      </Callout>

      <h2>Alternative Forms of the Remainder</h2>

      <Callout type="theorem" title="Cauchy Form of the Remainder">
        <p>
          Under the same hypotheses as Taylor's theorem:
        </p>
        <MathBlock>{`R_n(x) = \\frac{f^{(n+1)}(c)}{n!}(x-c)^n(x-a)`}</MathBlock>
        <p>
          for some <InlineMath>{`c`}</InlineMath> between <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Integral Form of the Remainder">
        <p>
          If <InlineMath>{`f^{(n+1)}`}</InlineMath> is continuous on the interval from <InlineMath>{`a`}</InlineMath>
          to <InlineMath>{`x`}</InlineMath>, then:
        </p>
        <MathBlock>{`R_n(x) = \\frac{1}{n!}\\int_a^x (x-t)^n f^{(n+1)}(t)\\,dt`}</MathBlock>
      </Callout>

      <p>
        The integral form is particularly useful for theoretical work and can sometimes
        give tighter bounds than the Lagrange form.
      </p>

      <h2>Proof Sketch of Taylor's Theorem</h2>

      <Callout type="info" title="Proof Idea">
        <p>
          Define <InlineMath>{`g(t) = f(t) + f'(t)(x-t) + \\frac{f''(t)}{2!}(x-t)^2 + \\cdots + \\frac{f^{(n)}(t)}{n!}(x-t)^n`}</InlineMath>.
        </p>
        <p>
          Note that <InlineMath>{`g(x) = f(x)`}</InlineMath> and <InlineMath>{`g(a) = T_n(x)`}</InlineMath>.
        </p>
        <p>
          A careful calculation shows <InlineMath>{`g'(t) = \\frac{f^{(n+1)}(t)}{n!}(x-t)^n`}</InlineMath>.
        </p>
        <p>
          By the Mean Value Theorem, there exists <InlineMath>{`c`}</InlineMath> between <InlineMath>{`a`}</InlineMath>
          and <InlineMath>{`x`}</InlineMath> such that:
        </p>
        <MathBlock>{`g(x) - g(a) = g'(c)(x-a)`}</MathBlock>
        <p>
          Substituting and simplifying gives the Lagrange form of the remainder.
        </p>
      </Callout>

      <h2>When Does the Taylor Series Converge to f?</h2>

      <p>
        If <InlineMath>{`R_n(x) \\to 0`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath>, then the
        Taylor series converges to <InlineMath>{`f(x)`}</InlineMath>:
      </p>

      <MathBlock>{`f(x) = \\sum_{k=0}^{\\infty} \\frac{f^{(k)}(a)}{k!}(x-a)^k`}</MathBlock>

      <Callout type="theorem" title="Convergence Criterion">
        <p>
          If there exists <InlineMath>{`M > 0`}</InlineMath> such that <InlineMath>{`|f^{(n)}(t)| \\leq M`}</InlineMath>
          for all <InlineMath>{`n`}</InlineMath> and all <InlineMath>{`t`}</InlineMath> between <InlineMath>{`a`}</InlineMath>
          and <InlineMath>{`x`}</InlineMath>, then:
        </p>
        <MathBlock>{`|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!} \\to 0 \\text{ as } n \\to \\infty`}</MathBlock>
        <p>
          and the Taylor series converges to <InlineMath>{`f(x)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Convergence of e^x Series">
        <p>
          Show that the Maclaurin series for <InlineMath>{`e^x`}</InlineMath> converges to <InlineMath>{`e^x`}</InlineMath>
          for all <InlineMath>{`x`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          For any fixed <InlineMath>{`x`}</InlineMath>, if <InlineMath>{`c`}</InlineMath> is between 0 and <InlineMath>{`x`}</InlineMath>,
          then <InlineMath>{`|e^c| \\leq e^{|x|}`}</InlineMath>. Thus:
        </p>
        <MathBlock>{`|R_n(x)| \\leq \\frac{e^{|x|}|x|^{n+1}}{(n+1)!}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\frac{|x|^{n+1}}{(n+1)!} \\to 0`}</InlineMath> as <InlineMath>{`n \\to \\infty`}</InlineMath>
          (factorial grows faster than any power), we have <InlineMath>{`R_n(x) \\to 0`}</InlineMath>.
        </p>
        <p>Therefore:</p>
        <MathBlock>{`e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} \\quad \\text{for all } x`}</MathBlock>
      </Callout>

      <h2>A Cautionary Example</h2>

      <Callout type="info" title="A Function Not Equal to Its Taylor Series">
        <p>Consider:</p>
        <MathBlock>{`f(x) = \\begin{cases} e^{-1/x^2} & \\text{if } x \\neq 0 \\ 0 & \\text{if } x = 0 \\end{cases}`}</MathBlock>
        <p>
          This function has <InlineMath>{`f^{(n)}(0) = 0`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>
          (a famous exercise in analysis). Therefore its Maclaurin series is:
        </p>
        <MathBlock>{`T(x) = 0 + 0 \\cdot x + 0 \\cdot x^2 + \\cdots = 0`}</MathBlock>
        <p>
          But <InlineMath>{`f(x) > 0`}</InlineMath> for <InlineMath>{`x \\neq 0`}</InlineMath>! The Taylor
          series exists but does not equal <InlineMath>{`f(x)`}</InlineMath> except at <InlineMath>{`x = 0`}</InlineMath>.
        </p>
        <p>
          This shows that having all derivatives exist is not enough—we also need
          <InlineMath>{`R_n(x) \\to 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Practical Guidelines</h2>

      <Callout type="info" title="Using Taylor's Theorem in Practice">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>For numerical computation:</strong> Use the remainder bound to determine
            how many terms are needed for a desired accuracy.
          </li>
          <li>
            <strong>Keep <InlineMath>{`|x-a|`}</InlineMath> small:</strong> The error bound involves
            <InlineMath>{`|x-a|^{n+1}`}</InlineMath>, so approximations are best near the center.
          </li>
          <li>
            <strong>Bound the derivative:</strong> Find <InlineMath>{`M`}</InlineMath> such that
            <InlineMath>{`|f^{(n+1)}(t)| \\leq M`}</InlineMath> on the relevant interval.
          </li>
          <li>
            <strong>Check convergence:</strong> Verify that <InlineMath>{`R_n(x) \\to 0`}</InlineMath>
            before concluding that the series sum equals <InlineMath>{`f(x)`}</InlineMath>.
          </li>
        </ol>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Taylor's Formula:</strong> <InlineMath>{`f(x) = T_n(x) + R_n(x)`}</InlineMath>
        </li>
        <li>
          <strong>Lagrange remainder:</strong> <InlineMath>{`R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}`}</InlineMath>
          for some <InlineMath>{`c`}</InlineMath> between <InlineMath>{`a`}</InlineMath> and <InlineMath>{`x`}</InlineMath>.
        </li>
        <li>
          <strong>Error bound:</strong> If <InlineMath>{`|f^{(n+1)}| \\leq M`}</InlineMath>, then
          <InlineMath>{`|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}`}</InlineMath>.
        </li>
        <li>
          <strong>Mean Value Theorem:</strong> Taylor's theorem with <InlineMath>{`n = 0`}</InlineMath>.
        </li>
        <li>
          <strong>Convergence:</strong> The Taylor series converges to <InlineMath>{`f(x)`}</InlineMath>
          if and only if <InlineMath>{`R_n(x) \\to 0`}</InlineMath>.
        </li>
        <li>
          <strong>Key application:</strong> Estimating how many terms are needed for a given accuracy.
        </li>
      </ul>
    </LessonLayout>
  );
}
