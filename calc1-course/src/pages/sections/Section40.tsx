import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <p>
        Having defined the natural logarithm using an integral, we now explore its
        properties more deeply and extend the concept to logarithms with arbitrary bases.
      </p>

      <h2>The Functional Equation</h2>

      <Callout type="info" title="The Fundamental Property">
        <p>
          The most important property of the logarithm is the <strong>functional equation</strong>:
        </p>
        <MathBlock>{`\\ln(ab) = \\ln a + \\ln b \\quad \\text{for all } a, b > 0.`}</MathBlock>
        <p>
          This property characterizes the logarithm: any differentiable function on the
          positive reals satisfying this equation must be a constant multiple of the
          natural logarithm.
        </p>
      </Callout>

      <h2>Properties Derived from the Functional Equation</h2>

      <Callout type="theorem" title="Logarithm Laws">
        <p>For all positive real numbers <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath>:</p>
        <MathBlock>{`\\ln(ab) = \\ln a + \\ln b \\quad \\text{(Product Rule)}`}</MathBlock>
        <MathBlock>{`\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b \\quad \\text{(Quotient Rule)}`}</MathBlock>
        <MathBlock>{`\\ln\\left(\\frac{1}{a}\\right) = -\\ln a \\quad \\text{(Reciprocal Rule)}`}</MathBlock>
        <MathBlock>{`\\ln(a^r) = r \\ln a \\quad \\text{(Power Rule, for rational } r \\text{)}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proofs">
        <p><strong>Quotient Rule:</strong> Using the product rule with <InlineMath>{`b \\cdot (a/b) = a`}</InlineMath>:</p>
        <MathBlock>{`\\ln b + \\ln\\left(\\frac{a}{b}\\right) = \\ln a \\implies \\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b.`}</MathBlock>

        <p><strong>Reciprocal Rule:</strong> Set <InlineMath>{`a = 1`}</InlineMath> in the quotient rule:</p>
        <MathBlock>{`\\ln\\left(\\frac{1}{b}\\right) = \\ln 1 - \\ln b = 0 - \\ln b = -\\ln b.`}</MathBlock>

        <p><strong>Power Rule (integer n):</strong> By induction from the product rule:</p>
        <MathBlock>{`\\ln(a^2) = \\ln(a \\cdot a) = \\ln a + \\ln a = 2\\ln a`}</MathBlock>
        <MathBlock>{`\\ln(a^n) = n \\ln a \\quad \\text{for any positive integer } n.`}</MathBlock>
        <p>
          For negative integers, use <InlineMath>{`\\ln(a^{-n}) = \\ln(1/a^n) = -\\ln(a^n) = -n\\ln a`}</InlineMath>.
        </p>
        <p>
          For rational <InlineMath>{`r = p/q`}</InlineMath>: if <InlineMath>{`b = a^{p/q}`}</InlineMath>,
          then <InlineMath>{`b^q = a^p`}</InlineMath>, so <InlineMath>{`q\\ln b = p\\ln a`}</InlineMath>,
          giving <InlineMath>{`\\ln b = (p/q)\\ln a`}</InlineMath>.
        </p>
      </Callout>

      <h2>Logarithms to Any Base</h2>

      <Callout type="definition" title="Logarithm to Base b">
        <p>
          If <InlineMath>{`b > 0`}</InlineMath>, <InlineMath>{`b \\neq 1`}</InlineMath>, and
          <InlineMath>{`x > 0`}</InlineMath>, the <strong>logarithm of x to base b</strong> is:
        </p>
        <MathBlock>{`\\log_b x = \\frac{\\ln x}{\\ln b}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Key Properties">
        <ul>
          <li>
            <InlineMath>{`\\log_b b = 1`}</InlineMath> (since <InlineMath>{`\\ln b / \\ln b = 1`}</InlineMath>)
          </li>
          <li>
            <InlineMath>{`\\log_b 1 = 0`}</InlineMath> (since <InlineMath>{`\\ln 1 = 0`}</InlineMath>)
          </li>
          <li>
            <InlineMath>{`\\log_e x = \\ln x`}</InlineMath> (natural logarithm has base <InlineMath>{`e`}</InlineMath>)
          </li>
          <li>
            The logarithm laws hold for any base:
            <MathBlock>{`\\log_b(xy) = \\log_b x + \\log_b y`}</MathBlock>
            <MathBlock>{`\\log_b(x^r) = r \\log_b x`}</MathBlock>
          </li>
        </ul>
      </Callout>

      <h2>Change of Base Formula</h2>

      <Callout type="theorem" title="Change of Base">
        <p>For any positive bases <InlineMath>{`a, b \\neq 1`}</InlineMath> and <InlineMath>{`x > 0`}</InlineMath>:</p>
        <MathBlock>{`\\log_b x = \\frac{\\log_a x}{\\log_a b}.`}</MathBlock>
        <p>Equivalently:</p>
        <MathBlock>{`\\log_b x = \\log_b a \\cdot \\log_a x.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>Using the definition:</p>
        <MathBlock>{`\\log_b x = \\frac{\\ln x}{\\ln b} = \\frac{\\ln x / \\ln a}{\\ln b / \\ln a} = \\frac{\\log_a x}{\\log_a b}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Converting Between Bases">
        <p>
          Express <InlineMath>{`\\log_2 x`}</InlineMath> in terms of <InlineMath>{`\\log_{10} x`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\log_2 x = \\frac{\\log_{10} x}{\\log_{10} 2} \\approx \\frac{\\log_{10} x}{0.30103} \\approx 3.322 \\log_{10} x.`}</MathBlock>
      </Callout>

      <h2>Graphs of Logarithms to Different Bases</h2>

      <Callout type="info" title="Effect of Base on the Graph">
        <p>
          Since <InlineMath>{`\\log_b x = (\\ln x) / (\\ln b)`}</InlineMath>, the graph of
          <InlineMath>{`y = \\log_b x`}</InlineMath> is obtained from <InlineMath>{`y = \\ln x`}</InlineMath>
          by multiplying all ordinates by <InlineMath>{`1/\\ln b`}</InlineMath>.
        </p>
        <ul>
          <li>
            <strong>If <InlineMath>{`b > 1`}</InlineMath>:</strong> <InlineMath>{`\\ln b > 0`}</InlineMath>,
            so the graph has the same shape as <InlineMath>{`\\ln x`}</InlineMath> (increasing).
          </li>
          <li>
            <strong>If <InlineMath>{`0 < b < 1`}</InlineMath>:</strong> <InlineMath>{`\\ln b < 0`}</InlineMath>,
            so the graph is reflected across the x-axis (decreasing).
          </li>
          <li>
            <strong>All graphs pass through <InlineMath>{`(1, 0)`}</InlineMath></strong> since
            <InlineMath>{`\\log_b 1 = 0`}</InlineMath> for all bases.
          </li>
        </ul>
      </Callout>

      <h2>Logarithmic Differentiation</h2>

      <Callout type="info" title="The Technique">
        <p>
          <strong>Logarithmic differentiation</strong> is a technique for finding derivatives
          of complicated products, quotients, or powers. The idea is:
        </p>
        <ol>
          <li>Take the natural logarithm of both sides: <InlineMath>{`g(x) = \\ln|f(x)|`}</InlineMath></li>
          <li>Differentiate using the chain rule: <InlineMath>{`g'(x) = f'(x)/f(x)`}</InlineMath></li>
          <li>Solve for <InlineMath>{`f'(x) = f(x) \\cdot g'(x)`}</InlineMath></li>
        </ol>
        <p>
          This is particularly useful when <InlineMath>{`f`}</InlineMath> is a product or quotient
          of many factors, because the logarithm converts products to sums and quotients
          to differences.
        </p>
      </Callout>

      <Callout type="example" title="Example: Logarithmic Differentiation">
        <p>
          Find <InlineMath>{`f'(x)`}</InlineMath> if <InlineMath>{`f(x) = x^2 \\cos x \\cdot (1 + x^4)^{-7}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Take the logarithm of <InlineMath>{`|f(x)|`}</InlineMath>:</p>
        <MathBlock>{`g(x) = \\ln|f(x)| = \\ln x^2 + \\ln|\\cos x| + \\ln(1+x^4)^{-7}`}</MathBlock>
        <MathBlock>{`= 2\\ln|x| + \\ln|\\cos x| - 7\\ln(1+x^4).`}</MathBlock>
        <p>Differentiate:</p>
        <MathBlock>{`g'(x) = \\frac{f'(x)}{f(x)} = \\frac{2}{x} - \\frac{\\sin x}{\\cos x} - \\frac{28x^3}{1+x^4}.`}</MathBlock>
        <p>Multiply by <InlineMath>{`f(x)`}</InlineMath>:</p>
        <MathBlock>{`f'(x) = x^2\\cos x \\cdot (1+x^4)^{-7} \\left(\\frac{2}{x} - \\tan x - \\frac{28x^3}{1+x^4}\\right).`}</MathBlock>
      </Callout>

      <h2>Integration Involving Logarithms</h2>

      <Callout type="info" title="Basic Formulas">
        <MathBlock>{`\\int \\frac{1}{x} \\, dx = \\ln|x| + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Integrating ln x">
        <p>
          Evaluate <InlineMath>{`\\int \\ln x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Use integration by parts with <InlineMath>{`u = \\ln x`}</InlineMath> and <InlineMath>{`dv = dx`}</InlineMath>:</p>
        <MathBlock>{`du = \\frac{1}{x} dx, \\quad v = x`}</MathBlock>
        <MathBlock>{`\\int \\ln x \\, dx = x \\ln x - \\int x \\cdot \\frac{1}{x} \\, dx = x \\ln x - \\int 1 \\, dx = x \\ln x - x + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Integrating Trigonometric Functions">
        <p>
          Evaluate <InlineMath>{`\\int \\cot x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int \\cot x \\, dx = \\int \\frac{\\cos x}{\\sin x} \\, dx.`}</MathBlock>
        <p>
          Let <InlineMath>{`u = \\sin x`}</InlineMath>, so <InlineMath>{`du = \\cos x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{\\cos x}{\\sin x} \\, dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln|\\sin x| + C.`}</MathBlock>
      </Callout>

      <h2>Important Inequalities</h2>

      <Callout type="theorem" title="Bounds for ln x">
        <p>For <InlineMath>{`x > 0`}</InlineMath>, <InlineMath>{`x \\neq 1`}</InlineMath>:</p>
        <MathBlock>{`1 - \\frac{1}{x} < \\ln x < x - 1.`}</MathBlock>
        <p>When <InlineMath>{`x = 1`}</InlineMath>, both sides equal 0.</p>
      </Callout>

      <Callout type="info" title="Important Limit">
        <p>As a consequence of these inequalities:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1.`}</MathBlock>
        <p>
          This can also be derived from the definition of the derivative:
          <InlineMath>{`(\\ln x)'|_{x=1} = 1`}</InlineMath>.
        </p>
      </Callout>

      <h2>Common Logarithms</h2>

      <Callout type="info" title="Base 10 Logarithms">
        <p>
          Logarithms to base 10, written <InlineMath>{`\\log_{10} x`}</InlineMath> or simply
          <InlineMath>{`\\log x`}</InlineMath> in some contexts, are called <strong>common logarithms</strong>.
          They were historically important for computation because:
        </p>
        <MathBlock>{`\\log_{10} 10 = 1, \\quad \\log_{10} 100 = 2, \\quad \\log_{10} 1000 = 3, \\ldots`}</MathBlock>
        <p>The relationship with natural logarithms is:</p>
        <MathBlock>{`\\log_{10} x = \\frac{\\ln x}{\\ln 10} \\approx \\frac{\\ln x}{2.303} \\approx 0.4343 \\ln x.`}</MathBlock>
        <p>Conversely:</p>
        <MathBlock>{`\\ln x = (\\ln 10) \\log_{10} x \\approx 2.303 \\log_{10} x.`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>functional equation</strong> <InlineMath>{`\\ln(ab) = \\ln a + \\ln b`}</InlineMath>
          leads to all logarithm laws.
        </li>
        <li>
          <strong>Logarithm to base b:</strong> <InlineMath>{`\\log_b x = \\frac{\\ln x}{\\ln b}`}</InlineMath>
        </li>
        <li>
          <strong>Change of base:</strong> <InlineMath>{`\\log_b x = \\frac{\\log_a x}{\\log_a b}`}</InlineMath>
        </li>
        <li>
          For <InlineMath>{`b > 1`}</InlineMath>, <InlineMath>{`\\log_b x`}</InlineMath> is increasing;
          for <InlineMath>{`0 < b < 1`}</InlineMath>, it is decreasing.
        </li>
        <li>
          <strong>Logarithmic differentiation:</strong> Take ln, differentiate, multiply back.
        </li>
        <li>
          Key integral: <InlineMath>{`\\int \\ln x \\, dx = x \\ln x - x + C`}</InlineMath>
        </li>
        <li>
          <strong>Important limit:</strong> <InlineMath>{`\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1`}</InlineMath>
        </li>
      </ul>
    </LessonLayout>
  );
}
