import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <p>
        In elementary algebra, logarithms are typically defined using exponents: if
        <MathInline>{`b^u = x`}</MathInline>, then <MathInline>{`u = \\log_b x`}</MathInline>. However,
        this approach requires first defining what <MathInline>{`b^u`}</MathInline> means for
        irrational exponents—a surprisingly difficult task.
      </p>

      <p>
        Calculus offers an elegant alternative: we define the logarithm <em>first</em> using
        an integral, and then use the logarithm to define exponentials. This approach is
        simpler, more rigorous, and reveals deep connections between these functions.
      </p>

      <h2>Motivation: The Functional Equation</h2>

      <Callout type="info" title="What Properties Should a Logarithm Have?">
        <p>
          The most important property of logarithms is that the logarithm of a product
          equals the sum of the logarithms:
        </p>
        <MathBlock>{`f(xy) = f(x) + f(y).`}</MathBlock>
        <p>
          This is called a <strong>functional equation</strong>. If we seek differentiable
          solutions to this equation, calculus shows that they must have the form:
        </p>
        <MathBlock>{`f(x) = c \\int_1^x \\frac{1}{t} \\, dt`}</MathBlock>
        <p>
          for some constant <MathInline>{`c`}</MathInline>. This motivates defining the logarithm
          as an integral.
        </p>
      </Callout>

      <h2>Definition of the Natural Logarithm</h2>

      <Callout type="definition" title="The Natural Logarithm">
        <p>
          If <MathInline>{`x`}</MathInline> is a positive real number, we define the
          <strong> natural logarithm</strong> of <MathInline>{`x`}</MathInline>, denoted
          <MathInline>{`\\ln x`}</MathInline> (or <MathInline>{`\\log x`}</MathInline>), by the integral:
        </p>
        <MathBlock>{`\\ln x = \\int_1^x \\frac{1}{t} \\, dt.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          When <MathInline>{`x > 1`}</MathInline>, <MathInline>{`\\ln x`}</MathInline> represents the
          area under the curve <MathInline>{`y = 1/t`}</MathInline> from <MathInline>{`t = 1`}</MathInline>
          to <MathInline>{`t = x`}</MathInline>.
        </p>
        <p>
          When <MathInline>{`0 < x < 1`}</MathInline>, the integral is negative (since we integrate
          "backwards"), so <MathInline>{`\\ln x < 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Basic Properties</h2>

      <Callout type="theorem" title="Theorem 6.1: Properties of the Natural Logarithm">
        <p>The logarithm function has the following properties:</p>
        <p><strong>(a)</strong> <MathInline>{`\\ln 1 = 0`}</MathInline></p>
        <p>
          <strong>(b)</strong> <MathInline>{`\\displaystyle \\frac{d}{dx} \\ln x = \\frac{1}{x}`}</MathInline>
          for every <MathInline>{`x > 0`}</MathInline>
        </p>
        <p>
          <strong>(c)</strong> <MathInline>{`\\ln(ab) = \\ln a + \\ln b`}</MathInline> for every
          <MathInline>{`a > 0`}</MathInline>, <MathInline>{`b > 0`}</MathInline>
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          <strong>(a)</strong> From the definition:
          <MathInline>{`\\ln 1 = \\int_1^1 \\frac{1}{t} \\, dt = 0`}</MathInline>.
        </p>
        <p>
          <strong>(b)</strong> By the First Fundamental Theorem of Calculus, the derivative
          of <MathInline>{`\\int_1^x \\frac{1}{t} \\, dt`}</MathInline> is <MathInline>{`\\frac{1}{x}`}</MathInline>.
        </p>
        <p>
          <strong>(c)</strong> We write:
        </p>
        <MathBlock>{`\\ln(ab) = \\int_1^{ab} \\frac{1}{t} \\, dt = \\int_1^a \\frac{1}{t} \\, dt + \\int_a^{ab} \\frac{1}{t} \\, dt = \\ln a + \\int_a^{ab} \\frac{1}{t} \\, dt.`}</MathBlock>
        <p>
          In the last integral, substitute <MathInline>{`u = t/a`}</MathInline>,
          <MathInline>{`du = dt/a`}</MathInline>:
        </p>
        <MathBlock>{`\\int_a^{ab} \\frac{1}{t} \\, dt = \\int_1^b \\frac{1}{u} \\, du = \\ln b.`}</MathBlock>
      </Callout>

      <h2>Consequences of the Functional Equation</h2>

      <Callout type="info" title="Additional Properties">
        <p>From the basic properties, we can derive:</p>
        <MathBlock>{`\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b`}</MathBlock>
        <MathBlock>{`\\ln\\left(\\frac{1}{a}\\right) = -\\ln a`}</MathBlock>
        <MathBlock>{`\\ln(a^n) = n \\ln a \\quad \\text{for any integer } n`}</MathBlock>
        <p>
          The last formula will be extended to all real exponents once we define
          general powers.
        </p>
      </Callout>

      <h2>The Graph of the Natural Logarithm</h2>

      <Callout type="info" title="Graph Properties">
        <ul>
          <li>
            <strong>Domain:</strong> <MathInline>{`(0, \\infty)`}</MathInline> — only positive numbers
          </li>
          <li>
            <strong>Range:</strong> <MathInline>{`(-\\infty, \\infty)`}</MathInline> — all real numbers
          </li>
          <li>
            <strong>Passes through:</strong> <MathInline>{`(1, 0)`}</MathInline> since
            <MathInline>{`\\ln 1 = 0`}</MathInline>
          </li>
          <li>
            <strong>Strictly increasing:</strong> <MathInline>{`\\ln' x = 1/x > 0`}</MathInline>
            for all <MathInline>{`x > 0`}</MathInline>
          </li>
          <li>
            <strong>Concave down:</strong> <MathInline>{`\\ln'' x = -1/x^2 < 0`}</MathInline>
          </li>
          <li>
            <strong>Slope at x = 1:</strong> <MathInline>{`\\ln'(1) = 1`}</MathInline>
          </li>
          <li>
            As <MathInline>{`x \\to 0^+`}</MathInline>: <MathInline>{`\\ln x \\to -\\infty`}</MathInline>
          </li>
          <li>
            As <MathInline>{`x \\to \\infty`}</MathInline>: <MathInline>{`\\ln x \\to \\infty`}</MathInline>
            (but slowly)
          </li>
        </ul>
      </Callout>

      <h2>The Logarithm is Unbounded</h2>

      <Callout type="info" title="No Upper or Lower Bound">
        <p>
          Although <MathInline>{`\\ln x`}</MathInline> grows slowly, it has no upper bound.
          Using the functional equation:
        </p>
        <MathBlock>{`\\ln(2^n) = n \\ln 2.`}</MathBlock>
        <p>
          Since <MathInline>{`\\ln 2 > 0`}</MathInline>, we can make <MathInline>{`\\ln(2^n)`}</MathInline>
          as large as we like by choosing <MathInline>{`n`}</MathInline> large enough.
        </p>
        <p>Similarly, since <MathInline>{`\\ln(1/a) = -\\ln a`}</MathInline>:</p>
        <MathBlock>{`\\ln\\left(\\frac{1}{2^n}\\right) = -n \\ln 2 \\to -\\infty.`}</MathBlock>
        <p>So the logarithm takes all real values, positive and negative.</p>
      </Callout>

      <h2>The Number e</h2>

      <Callout type="theorem" title="Theorem 6.2">
        <p>
          For every real number <MathInline>{`b`}</MathInline>, there is exactly one positive
          real number <MathInline>{`a`}</MathInline> such that <MathInline>{`\\ln a = b`}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition" title="Definition of e">
        <p>
          We denote by <MathInline>{`e`}</MathInline> that unique number for which:
        </p>
        <MathBlock>{`\\ln e = 1.`}</MathBlock>
        <p>
          Equivalently, <MathInline>{`e`}</MathInline> is the unique number such that:
        </p>
        <MathBlock>{`\\int_1^e \\frac{1}{t} \\, dt = 1.`}</MathBlock>
      </Callout>

      <Callout type="info" title="The Value of e">
        <p>
          The number <MathInline>{`e`}</MathInline>, like <MathInline>{`\\pi`}</MathInline>, is one of
          the most important constants in mathematics. Its value, correct to ten decimal
          places, is:
        </p>
        <MathBlock>{`e \\approx 2.7182818285.`}</MathBlock>
        <p>
          It can be proved that <MathInline>{`e`}</MathInline> is <strong>irrational</strong>
          (and even transcendental). Natural logarithms are sometimes called
          <strong> Napierian logarithms</strong> after John Napier (1550–1617), who invented
          logarithms.
        </p>
      </Callout>

      <h2>Integration Formula</h2>

      <Callout type="info" title="The Missing Power">
        <p>
          Recall the power rule for integration:
        </p>
        <MathBlock>{`\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1).`}</MathBlock>
        <p>
          The case <MathInline>{`n = -1`}</MathInline> was excluded because it would give
          division by zero. Now we can fill this gap:
        </p>
        <MathBlock>{`\\int \\frac{1}{x} \\, dx = \\ln x + C \\quad (x > 0).`}</MathBlock>
        <p>
          More generally, for any differentiable function <MathInline>{`u = f(x)`}</MathInline>
          with <MathInline>{`f(x) > 0`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln f(x) + C.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Extending to Negative Arguments">
        <p>
          To handle functions that may be negative, we use the absolute value:
        </p>
        <MathBlock>{`\\int \\frac{1}{x} \\, dx = \\ln |x| + C \\quad (x \\neq 0).`}</MathBlock>
        <p>
          This works because <MathInline>{`\\frac{d}{dx} \\ln |x| = \\frac{1}{x}`}</MathInline>
          for all <MathInline>{`x \\neq 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Basic Computations">
        <p>Using the properties of logarithms:</p>
        <ul>
          <li><MathInline>{`\\ln e = 1`}</MathInline> (by definition)</li>
          <li><MathInline>{`\\ln e^2 = 2 \\ln e = 2`}</MathInline></li>
          <li><MathInline>{`\\ln \\sqrt{e} = \\ln e^{1/2} = \\frac{1}{2}`}</MathInline></li>
          <li><MathInline>{`\\ln(1/e) = -\\ln e = -1`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 2: Derivative of ln(x²+1)">
        <p>
          Find <MathInline>{`\\frac{d}{dx} \\ln(x^2 + 1)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Using the chain rule:</p>
        <MathBlock>{`\\frac{d}{dx} \\ln(x^2 + 1) = \\frac{1}{x^2 + 1} \\cdot 2x = \\frac{2x}{x^2 + 1}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Integration">
        <p>
          Evaluate <MathInline>{`\\int \\frac{x}{x^2 + 1} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = x^2 + 1`}</MathInline>, so <MathInline>{`du = 2x \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{x}{x^2 + 1} \\, dx = \\frac{1}{2} \\int \\frac{du}{u} = \\frac{1}{2} \\ln|u| + C = \\frac{1}{2} \\ln(x^2 + 1) + C.`}</MathBlock>
        <p>
          (We dropped the absolute value since <MathInline>{`x^2 + 1 > 0`}</MathInline> always.)
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Integrating tan x">
        <p>
          Evaluate <MathInline>{`\\int \\tan x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int \\tan x \\, dx = \\int \\frac{\\sin x}{\\cos x} \\, dx.`}</MathBlock>
        <p>
          Let <MathInline>{`u = \\cos x`}</MathInline>, so <MathInline>{`du = -\\sin x \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{\\sin x}{\\cos x} \\, dx = -\\int \\frac{du}{u} = -\\ln|u| + C = -\\ln|\\cos x| + C = \\ln|\\sec x| + C.`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>natural logarithm</strong> is defined by:
          <MathBlock>{`\\ln x = \\int_1^x \\frac{1}{t} \\, dt \\quad (x > 0).`}</MathBlock>
        </li>
        <li>
          <strong>Key properties:</strong> <MathInline>{`\\ln 1 = 0`}</MathInline>,
          <MathInline>{`(\\ln x)' = 1/x`}</MathInline>, and
          <MathInline>{`\\ln(ab) = \\ln a + \\ln b`}</MathInline>.
        </li>
        <li>
          The number <MathInline>{`e \\approx 2.718`}</MathInline> is defined by
          <MathInline>{`\\ln e = 1`}</MathInline>.
        </li>
        <li>
          The logarithm is <strong>strictly increasing</strong> and <strong>concave down</strong>,
          with domain <MathInline>{`(0, \\infty)`}</MathInline> and range
          <MathInline>{`(-\\infty, \\infty)`}</MathInline>.
        </li>
        <li>
          The integration formula <MathInline>{`\\int \\frac{1}{x} \\, dx = \\ln|x| + C`}</MathInline>
          fills the gap in the power rule.
        </li>
        <li>
          For composite functions: <MathInline>{`\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C`}</MathInline>.
        </li>
      </ul>
    </LessonLayout>
  );
}
