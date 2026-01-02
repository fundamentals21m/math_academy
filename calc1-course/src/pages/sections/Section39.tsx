import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <p>
        In elementary algebra, logarithms are typically defined using exponents: if
        <InlineMath>{`b^u = x`}</InlineMath>, then <InlineMath>{`u = \\log_b x`}</InlineMath>. However,
        this approach requires first defining what <InlineMath>{`b^u`}</InlineMath> means for
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
          for some constant <InlineMath>{`c`}</InlineMath>. This motivates defining the logarithm
          as an integral.
        </p>
      </Callout>

      <h2>Definition of the Natural Logarithm</h2>

      <Callout type="definition" title="The Natural Logarithm">
        <p>
          If <InlineMath>{`x`}</InlineMath> is a positive real number, we define the
          <strong> natural logarithm</strong> of <InlineMath>{`x`}</InlineMath>, denoted
          <InlineMath>{`\\ln x`}</InlineMath> (or <InlineMath>{`\\log x`}</InlineMath>), by the integral:
        </p>
        <MathBlock>{`\\ln x = \\int_1^x \\frac{1}{t} \\, dt.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          When <InlineMath>{`x > 1`}</InlineMath>, <InlineMath>{`\\ln x`}</InlineMath> represents the
          area under the curve <InlineMath>{`y = 1/t`}</InlineMath> from <InlineMath>{`t = 1`}</InlineMath>
          to <InlineMath>{`t = x`}</InlineMath>.
        </p>
        <p>
          When <InlineMath>{`0 < x < 1`}</InlineMath>, the integral is negative (since we integrate
          "backwards"), so <InlineMath>{`\\ln x < 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Basic Properties</h2>

      <Callout type="theorem" title="Theorem 6.1: Properties of the Natural Logarithm">
        <p>The logarithm function has the following properties:</p>
        <p><strong>(a)</strong> <InlineMath>{`\\ln 1 = 0`}</InlineMath></p>
        <p>
          <strong>(b)</strong> <InlineMath>{`\\displaystyle \\frac{d}{dx} \\ln x = \\frac{1}{x}`}</InlineMath>
          for every <InlineMath>{`x > 0`}</InlineMath>
        </p>
        <p>
          <strong>(c)</strong> <InlineMath>{`\\ln(ab) = \\ln a + \\ln b`}</InlineMath> for every
          <InlineMath>{`a > 0`}</InlineMath>, <InlineMath>{`b > 0`}</InlineMath>
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          <strong>(a)</strong> From the definition:
          <InlineMath>{`\\ln 1 = \\int_1^1 \\frac{1}{t} \\, dt = 0`}</InlineMath>.
        </p>
        <p>
          <strong>(b)</strong> By the First Fundamental Theorem of Calculus, the derivative
          of <InlineMath>{`\\int_1^x \\frac{1}{t} \\, dt`}</InlineMath> is <InlineMath>{`\\frac{1}{x}`}</InlineMath>.
        </p>
        <p>
          <strong>(c)</strong> We write:
        </p>
        <MathBlock>{`\\ln(ab) = \\int_1^{ab} \\frac{1}{t} \\, dt = \\int_1^a \\frac{1}{t} \\, dt + \\int_a^{ab} \\frac{1}{t} \\, dt = \\ln a + \\int_a^{ab} \\frac{1}{t} \\, dt.`}</MathBlock>
        <p>
          In the last integral, substitute <InlineMath>{`u = t/a`}</InlineMath>,
          <InlineMath>{`du = dt/a`}</InlineMath>:
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
            <strong>Domain:</strong> <InlineMath>{`(0, \\infty)`}</InlineMath> — only positive numbers
          </li>
          <li>
            <strong>Range:</strong> <InlineMath>{`(-\\infty, \\infty)`}</InlineMath> — all real numbers
          </li>
          <li>
            <strong>Passes through:</strong> <InlineMath>{`(1, 0)`}</InlineMath> since
            <InlineMath>{`\\ln 1 = 0`}</InlineMath>
          </li>
          <li>
            <strong>Strictly increasing:</strong> <InlineMath>{`\\ln' x = 1/x > 0`}</InlineMath>
            for all <InlineMath>{`x > 0`}</InlineMath>
          </li>
          <li>
            <strong>Concave down:</strong> <InlineMath>{`\\ln'' x = -1/x^2 < 0`}</InlineMath>
          </li>
          <li>
            <strong>Slope at x = 1:</strong> <InlineMath>{`\\ln'(1) = 1`}</InlineMath>
          </li>
          <li>
            As <InlineMath>{`x \\to 0^+`}</InlineMath>: <InlineMath>{`\\ln x \\to -\\infty`}</InlineMath>
          </li>
          <li>
            As <InlineMath>{`x \\to \\infty`}</InlineMath>: <InlineMath>{`\\ln x \\to \\infty`}</InlineMath>
            (but slowly)
          </li>
        </ul>
      </Callout>

      <h2>The Logarithm is Unbounded</h2>

      <Callout type="info" title="No Upper or Lower Bound">
        <p>
          Although <InlineMath>{`\\ln x`}</InlineMath> grows slowly, it has no upper bound.
          Using the functional equation:
        </p>
        <MathBlock>{`\\ln(2^n) = n \\ln 2.`}</MathBlock>
        <p>
          Since <InlineMath>{`\\ln 2 > 0`}</InlineMath>, we can make <InlineMath>{`\\ln(2^n)`}</InlineMath>
          as large as we like by choosing <InlineMath>{`n`}</InlineMath> large enough.
        </p>
        <p>Similarly, since <InlineMath>{`\\ln(1/a) = -\\ln a`}</InlineMath>:</p>
        <MathBlock>{`\\ln\\left(\\frac{1}{2^n}\\right) = -n \\ln 2 \\to -\\infty.`}</MathBlock>
        <p>So the logarithm takes all real values, positive and negative.</p>
      </Callout>

      <h2>The Number e</h2>

      <Callout type="theorem" title="Theorem 6.2">
        <p>
          For every real number <InlineMath>{`b`}</InlineMath>, there is exactly one positive
          real number <InlineMath>{`a`}</InlineMath> such that <InlineMath>{`\\ln a = b`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition" title="Definition of e">
        <p>
          We denote by <InlineMath>{`e`}</InlineMath> that unique number for which:
        </p>
        <MathBlock>{`\\ln e = 1.`}</MathBlock>
        <p>
          Equivalently, <InlineMath>{`e`}</InlineMath> is the unique number such that:
        </p>
        <MathBlock>{`\\int_1^e \\frac{1}{t} \\, dt = 1.`}</MathBlock>
      </Callout>

      <Callout type="info" title="The Value of e">
        <p>
          The number <InlineMath>{`e`}</InlineMath>, like <InlineMath>{`\\pi`}</InlineMath>, is one of
          the most important constants in mathematics. Its value, correct to ten decimal
          places, is:
        </p>
        <MathBlock>{`e \\approx 2.7182818285.`}</MathBlock>
        <p>
          It can be proved that <InlineMath>{`e`}</InlineMath> is <strong>irrational</strong>
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
          The case <InlineMath>{`n = -1`}</InlineMath> was excluded because it would give
          division by zero. Now we can fill this gap:
        </p>
        <MathBlock>{`\\int \\frac{1}{x} \\, dx = \\ln x + C \\quad (x > 0).`}</MathBlock>
        <p>
          More generally, for any differentiable function <InlineMath>{`u = f(x)`}</InlineMath>
          with <InlineMath>{`f(x) > 0`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln f(x) + C.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Extending to Negative Arguments">
        <p>
          To handle functions that may be negative, we use the absolute value:
        </p>
        <MathBlock>{`\\int \\frac{1}{x} \\, dx = \\ln |x| + C \\quad (x \\neq 0).`}</MathBlock>
        <p>
          This works because <InlineMath>{`\\frac{d}{dx} \\ln |x| = \\frac{1}{x}`}</InlineMath>
          for all <InlineMath>{`x \\neq 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Basic Computations">
        <p>Using the properties of logarithms:</p>
        <ul>
          <li><InlineMath>{`\\ln e = 1`}</InlineMath> (by definition)</li>
          <li><InlineMath>{`\\ln e^2 = 2 \\ln e = 2`}</InlineMath></li>
          <li><InlineMath>{`\\ln \\sqrt{e} = \\ln e^{1/2} = \\frac{1}{2}`}</InlineMath></li>
          <li><InlineMath>{`\\ln(1/e) = -\\ln e = -1`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 2: Derivative of ln(x²+1)">
        <p>
          Find <InlineMath>{`\\frac{d}{dx} \\ln(x^2 + 1)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Using the chain rule:</p>
        <MathBlock>{`\\frac{d}{dx} \\ln(x^2 + 1) = \\frac{1}{x^2 + 1} \\cdot 2x = \\frac{2x}{x^2 + 1}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Integration">
        <p>
          Evaluate <InlineMath>{`\\int \\frac{x}{x^2 + 1} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = x^2 + 1`}</InlineMath>, so <InlineMath>{`du = 2x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{x}{x^2 + 1} \\, dx = \\frac{1}{2} \\int \\frac{du}{u} = \\frac{1}{2} \\ln|u| + C = \\frac{1}{2} \\ln(x^2 + 1) + C.`}</MathBlock>
        <p>
          (We dropped the absolute value since <InlineMath>{`x^2 + 1 > 0`}</InlineMath> always.)
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Integrating tan x">
        <p>
          Evaluate <InlineMath>{`\\int \\tan x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int \\tan x \\, dx = \\int \\frac{\\sin x}{\\cos x} \\, dx.`}</MathBlock>
        <p>
          Let <InlineMath>{`u = \\cos x`}</InlineMath>, so <InlineMath>{`du = -\\sin x \\, dx`}</InlineMath>:
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
          <strong>Key properties:</strong> <InlineMath>{`\\ln 1 = 0`}</InlineMath>,
          <InlineMath>{`(\\ln x)' = 1/x`}</InlineMath>, and
          <InlineMath>{`\\ln(ab) = \\ln a + \\ln b`}</InlineMath>.
        </li>
        <li>
          The number <InlineMath>{`e \\approx 2.718`}</InlineMath> is defined by
          <InlineMath>{`\\ln e = 1`}</InlineMath>.
        </li>
        <li>
          The logarithm is <strong>strictly increasing</strong> and <strong>concave down</strong>,
          with domain <InlineMath>{`(0, \\infty)`}</InlineMath> and range
          <InlineMath>{`(-\\infty, \\infty)`}</InlineMath>.
        </li>
        <li>
          The integration formula <InlineMath>{`\\int \\frac{1}{x} \\, dx = \\ln|x| + C`}</InlineMath>
          fills the gap in the power rule.
        </li>
        <li>
          For composite functions: <InlineMath>{`\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
