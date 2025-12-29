import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <p>
        The Taylor polynomial <MathInline>{`T_n(x)`}</MathInline> approximates <MathInline>{`f(x)`}</MathInline>,
        but how good is this approximation? To answer this, we need to understand the
        <strong> remainder</strong> or <strong>error term</strong>—the difference between
        <MathInline>{`f(x)`}</MathInline> and <MathInline>{`T_n(x)`}</MathInline>.
      </p>

      <h2>The Remainder Term</h2>

      <Callout type="definition" title="The Remainder">
        <p>
          For a function <MathInline>{`f`}</MathInline> with Taylor polynomial <MathInline>{`T_n(x)`}</MathInline>
          centered at <MathInline>{`a`}</MathInline>, the <strong>remainder</strong> (or <strong>error</strong>) is:
        </p>
        <MathBlock>{`R_n(x) = f(x) - T_n(x)`}</MathBlock>
        <p>
          This means we can write:
        </p>
        <MathBlock>{`f(x) = T_n(x) + R_n(x)`}</MathBlock>
      </Callout>

      <p>
        The fundamental question is: can we estimate or bound <MathInline>{`R_n(x)`}</MathInline>?
        Taylor's theorem provides several forms for the remainder.
      </p>

      <h2>Taylor's Theorem: Lagrange Form</h2>

      <Callout type="theorem" title="Taylor's Theorem (Lagrange Remainder)">
        <p>
          Suppose <MathInline>{`f`}</MathInline> has continuous derivatives up to order <MathInline>{`n`}</MathInline>
          on an interval containing <MathInline>{`a`}</MathInline> and <MathInline>{`x`}</MathInline>, and
          <MathInline>{`f^{(n+1)}`}</MathInline> exists on the open interval between <MathInline>{`a`}</MathInline>
          and <MathInline>{`x`}</MathInline>. Then:
        </p>
        <MathBlock>{`f(x) = T_n(x) + R_n(x)`}</MathBlock>
        <p>where the <strong>Lagrange form</strong> of the remainder is:</p>
        <MathBlock>{`R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}`}</MathBlock>
        <p>
          for some <MathInline>{`c`}</MathInline> strictly between <MathInline>{`a`}</MathInline> and <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Interpretation">
        <p>
          The Lagrange remainder looks exactly like the next term in the Taylor series,
          except that <MathInline>{`f^{(n+1)}`}</MathInline> is evaluated at some unknown
          point <MathInline>{`c`}</MathInline> rather than at <MathInline>{`a`}</MathInline>.
        </p>
        <p>
          We don't know exactly where <MathInline>{`c`}</MathInline> is—only that it lies between
          <MathInline>{`a`}</MathInline> and <MathInline>{`x`}</MathInline>. This is analogous to the
          Mean Value Theorem.
        </p>
      </Callout>

      <h2>Special Case: The Mean Value Theorem</h2>

      <p>
        When <MathInline>{`n = 0`}</MathInline>, Taylor's theorem reduces to:
      </p>

      <MathBlock>{`f(x) = f(a) + f'(c)(x - a)`}</MathBlock>

      <p>
        This is precisely the Mean Value Theorem! Taylor's theorem is a generalization
        that includes higher-order derivatives.
      </p>

      <h2>The Error Bound</h2>

      <Callout type="theorem" title="Taylor Remainder Bound">
        <p>
          If <MathInline>{`|f^{(n+1)}(t)| \\leq M`}</MathInline> for all <MathInline>{`t`}</MathInline> between
          <MathInline>{`a`}</MathInline> and <MathInline>{`x`}</MathInline>, then:
        </p>
        <MathBlock>{`|R_n(x)| \\leq \\frac{M}{(n+1)!}|x-a|^{n+1}`}</MathBlock>
      </Callout>

      <p>
        This bound is tremendously useful for estimating errors in practical computations.
        We don't need to know the exact value of <MathInline>{`c`}</MathInline>—we only need a
        bound on <MathInline>{`|f^{(n+1)}|`}</MathInline>.
      </p>

      <h2>Examples: Error Estimation</h2>

      <Callout type="example" title="Example 1: Error in Approximating e">
        <p>
          Estimate the error when approximating <MathInline>{`e = e^1`}</MathInline> using the
          degree-5 Taylor polynomial.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          For <MathInline>{`f(x) = e^x`}</MathInline>, we have <MathInline>{`f^{(n+1)}(x) = e^x`}</MathInline>.
          Using <MathInline>{`a = 0`}</MathInline> and <MathInline>{`x = 1`}</MathInline>:
        </p>
        <MathBlock>{`R_5(1) = \\frac{e^c}{6!} \\cdot 1^6 = \\frac{e^c}{720}`}</MathBlock>
        <p>
          where <MathInline>{`0 < c < 1`}</MathInline>. Since <MathInline>{`e^c < e^1 < 3`}</MathInline>:
        </p>
        <MathBlock>{`|R_5(1)| < \\frac{3}{720} = \\frac{1}{240} \\approx 0.0042`}</MathBlock>
        <p>
          The actual error is about 0.0016, so this bound is reasonable.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: How Many Terms for e?">
        <p>
          How many terms of the Maclaurin series for <MathInline>{`e^x`}</MathInline> are needed to
          compute <MathInline>{`e`}</MathInline> with error less than <MathInline>{`10^{-6}`}</MathInline>?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          We need <MathInline>{`|R_n(1)| < 10^{-6}`}</MathInline>. Since <MathInline>{`e < 3`}</MathInline>:
        </p>
        <MathBlock>{`|R_n(1)| \\leq \\frac{3}{(n+1)!} < 10^{-6}`}</MathBlock>
        <p>Computing factorials:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`3/9! = 3/362880 \\approx 8.3 \\times 10^{-6}`}</MathInline></li>
          <li><MathInline>{`3/10! = 3/3628800 \\approx 8.3 \\times 10^{-7}`}</MathInline></li>
        </ul>
        <p>
          So we need <MathInline>{`n = 9`}</MathInline> (i.e., terms through <MathInline>{`x^9/9!`}</MathInline>).
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Approximating sin(0.5)">
        <p>
          Use the degree-5 Taylor polynomial to approximate <MathInline>{`\\sin(0.5)`}</MathInline> and
          bound the error.
        </p>
        <p><strong>Solution:</strong></p>
        <p>The Maclaurin polynomial of degree 5 for sine is:</p>
        <MathBlock>{`T_5(x) = x - \\frac{x^3}{6} + \\frac{x^5}{120}`}</MathBlock>
        <p>At <MathInline>{`x = 0.5`}</MathInline>:</p>
        <MathBlock>{`T_5(0.5) = 0.5 - \\frac{0.125}{6} + \\frac{0.03125}{120} = 0.5 - 0.02083 + 0.00026 \\approx 0.47943`}</MathBlock>
        <p>
          For the error, note that <MathInline>{`f^{(6)}(x) = -\\sin x`}</MathInline>, so
          <MathInline>{`|f^{(6)}(c)| \\leq 1`}</MathInline>:
        </p>
        <MathBlock>{`|R_5(0.5)| \\leq \\frac{1}{720} \\cdot (0.5)^6 = \\frac{1}{720} \\cdot \\frac{1}{64} = \\frac{1}{46080} \\approx 2.2 \\times 10^{-5}`}</MathBlock>
        <p>
          The actual value is <MathInline>{`\\sin(0.5) \\approx 0.47943`}</MathInline>, confirming our
          approximation is excellent.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Approximating ln(1.1)">
        <p>
          Use <MathInline>{`T_4(x)`}</MathInline> for <MathInline>{`\\ln(1+x)`}</MathInline> to approximate
          <MathInline>{`\\ln(1.1)`}</MathInline> and estimate the error.
        </p>
        <p><strong>Solution:</strong></p>
        <p>The Taylor polynomial is:</p>
        <MathBlock>{`T_4(x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4}`}</MathBlock>
        <p>At <MathInline>{`x = 0.1`}</MathInline>:</p>
        <MathBlock>{`T_4(0.1) = 0.1 - 0.005 + 0.000333 - 0.000025 \\approx 0.09531`}</MathBlock>
        <p>
          For <MathInline>{`f(x) = \\ln(1+x)`}</MathInline>, we have
          <MathInline>{`f^{(5)}(x) = \\frac{24}{(1+x)^5}`}</MathInline>.
        </p>
        <p>
          For <MathInline>{`0 \\leq c \\leq 0.1`}</MathInline>, we have <MathInline>{`(1+c)^5 \\geq 1`}</MathInline>,
          so <MathInline>{`|f^{(5)}(c)| \\leq 24`}</MathInline>.
        </p>
        <MathBlock>{`|R_4(0.1)| \\leq \\frac{24}{120} \\cdot (0.1)^5 = 0.2 \\cdot 0.00001 = 2 \\times 10^{-6}`}</MathBlock>
        <p>
          The actual value is <MathInline>{`\\ln(1.1) \\approx 0.09531`}</MathInline>, matching our
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
          for some <MathInline>{`c`}</MathInline> between <MathInline>{`a`}</MathInline> and <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Integral Form of the Remainder">
        <p>
          If <MathInline>{`f^{(n+1)}`}</MathInline> is continuous on the interval from <MathInline>{`a`}</MathInline>
          to <MathInline>{`x`}</MathInline>, then:
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
          Define <MathInline>{`g(t) = f(t) + f'(t)(x-t) + \\frac{f''(t)}{2!}(x-t)^2 + \\cdots + \\frac{f^{(n)}(t)}{n!}(x-t)^n`}</MathInline>.
        </p>
        <p>
          Note that <MathInline>{`g(x) = f(x)`}</MathInline> and <MathInline>{`g(a) = T_n(x)`}</MathInline>.
        </p>
        <p>
          A careful calculation shows <MathInline>{`g'(t) = \\frac{f^{(n+1)}(t)}{n!}(x-t)^n`}</MathInline>.
        </p>
        <p>
          By the Mean Value Theorem, there exists <MathInline>{`c`}</MathInline> between <MathInline>{`a`}</MathInline>
          and <MathInline>{`x`}</MathInline> such that:
        </p>
        <MathBlock>{`g(x) - g(a) = g'(c)(x-a)`}</MathBlock>
        <p>
          Substituting and simplifying gives the Lagrange form of the remainder.
        </p>
      </Callout>

      <h2>When Does the Taylor Series Converge to f?</h2>

      <p>
        If <MathInline>{`R_n(x) \\to 0`}</MathInline> as <MathInline>{`n \\to \\infty`}</MathInline>, then the
        Taylor series converges to <MathInline>{`f(x)`}</MathInline>:
      </p>

      <MathBlock>{`f(x) = \\sum_{k=0}^{\\infty} \\frac{f^{(k)}(a)}{k!}(x-a)^k`}</MathBlock>

      <Callout type="theorem" title="Convergence Criterion">
        <p>
          If there exists <MathInline>{`M > 0`}</MathInline> such that <MathInline>{`|f^{(n)}(t)| \\leq M`}</MathInline>
          for all <MathInline>{`n`}</MathInline> and all <MathInline>{`t`}</MathInline> between <MathInline>{`a`}</MathInline>
          and <MathInline>{`x`}</MathInline>, then:
        </p>
        <MathBlock>{`|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!} \\to 0 \\text{ as } n \\to \\infty`}</MathBlock>
        <p>
          and the Taylor series converges to <MathInline>{`f(x)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Convergence of e^x Series">
        <p>
          Show that the Maclaurin series for <MathInline>{`e^x`}</MathInline> converges to <MathInline>{`e^x`}</MathInline>
          for all <MathInline>{`x`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          For any fixed <MathInline>{`x`}</MathInline>, if <MathInline>{`c`}</MathInline> is between 0 and <MathInline>{`x`}</MathInline>,
          then <MathInline>{`|e^c| \\leq e^{|x|}`}</MathInline>. Thus:
        </p>
        <MathBlock>{`|R_n(x)| \\leq \\frac{e^{|x|}|x|^{n+1}}{(n+1)!}`}</MathBlock>
        <p>
          Since <MathInline>{`\\frac{|x|^{n+1}}{(n+1)!} \\to 0`}</MathInline> as <MathInline>{`n \\to \\infty`}</MathInline>
          (factorial grows faster than any power), we have <MathInline>{`R_n(x) \\to 0`}</MathInline>.
        </p>
        <p>Therefore:</p>
        <MathBlock>{`e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} \\quad \\text{for all } x`}</MathBlock>
      </Callout>

      <h2>A Cautionary Example</h2>

      <Callout type="info" title="A Function Not Equal to Its Taylor Series">
        <p>Consider:</p>
        <MathBlock>{`f(x) = \\begin{cases} e^{-1/x^2} & \\text{if } x \\neq 0 \\ 0 & \\text{if } x = 0 \\end{cases}`}</MathBlock>
        <p>
          This function has <MathInline>{`f^{(n)}(0) = 0`}</MathInline> for all <MathInline>{`n`}</MathInline>
          (a famous exercise in analysis). Therefore its Maclaurin series is:
        </p>
        <MathBlock>{`T(x) = 0 + 0 \\cdot x + 0 \\cdot x^2 + \\cdots = 0`}</MathBlock>
        <p>
          But <MathInline>{`f(x) > 0`}</MathInline> for <MathInline>{`x \\neq 0`}</MathInline>! The Taylor
          series exists but does not equal <MathInline>{`f(x)`}</MathInline> except at <MathInline>{`x = 0`}</MathInline>.
        </p>
        <p>
          This shows that having all derivatives exist is not enough—we also need
          <MathInline>{`R_n(x) \\to 0`}</MathInline>.
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
            <strong>Keep <MathInline>{`|x-a|`}</MathInline> small:</strong> The error bound involves
            <MathInline>{`|x-a|^{n+1}`}</MathInline>, so approximations are best near the center.
          </li>
          <li>
            <strong>Bound the derivative:</strong> Find <MathInline>{`M`}</MathInline> such that
            <MathInline>{`|f^{(n+1)}(t)| \\leq M`}</MathInline> on the relevant interval.
          </li>
          <li>
            <strong>Check convergence:</strong> Verify that <MathInline>{`R_n(x) \\to 0`}</MathInline>
            before concluding that the series sum equals <MathInline>{`f(x)`}</MathInline>.
          </li>
        </ol>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Taylor's Formula:</strong> <MathInline>{`f(x) = T_n(x) + R_n(x)`}</MathInline>
        </li>
        <li>
          <strong>Lagrange remainder:</strong> <MathInline>{`R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}`}</MathInline>
          for some <MathInline>{`c`}</MathInline> between <MathInline>{`a`}</MathInline> and <MathInline>{`x`}</MathInline>.
        </li>
        <li>
          <strong>Error bound:</strong> If <MathInline>{`|f^{(n+1)}| \\leq M`}</MathInline>, then
          <MathInline>{`|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}`}</MathInline>.
        </li>
        <li>
          <strong>Mean Value Theorem:</strong> Taylor's theorem with <MathInline>{`n = 0`}</MathInline>.
        </li>
        <li>
          <strong>Convergence:</strong> The Taylor series converges to <MathInline>{`f(x)`}</MathInline>
          if and only if <MathInline>{`R_n(x) \\to 0`}</MathInline>.
        </li>
        <li>
          <strong>Key application:</strong> Estimating how many terms are needed for a given accuracy.
        </li>
      </ul>
    </LessonLayout>
  );
}
