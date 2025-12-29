import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        <p>For all positive real numbers <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline>:</p>
        <MathBlock>{`\\ln(ab) = \\ln a + \\ln b \\quad \\text{(Product Rule)}`}</MathBlock>
        <MathBlock>{`\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b \\quad \\text{(Quotient Rule)}`}</MathBlock>
        <MathBlock>{`\\ln\\left(\\frac{1}{a}\\right) = -\\ln a \\quad \\text{(Reciprocal Rule)}`}</MathBlock>
        <MathBlock>{`\\ln(a^r) = r \\ln a \\quad \\text{(Power Rule, for rational } r \\text{)}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proofs">
        <p><strong>Quotient Rule:</strong> Using the product rule with <MathInline>{`b \\cdot (a/b) = a`}</MathInline>:</p>
        <MathBlock>{`\\ln b + \\ln\\left(\\frac{a}{b}\\right) = \\ln a \\implies \\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b.`}</MathBlock>

        <p><strong>Reciprocal Rule:</strong> Set <MathInline>{`a = 1`}</MathInline> in the quotient rule:</p>
        <MathBlock>{`\\ln\\left(\\frac{1}{b}\\right) = \\ln 1 - \\ln b = 0 - \\ln b = -\\ln b.`}</MathBlock>

        <p><strong>Power Rule (integer n):</strong> By induction from the product rule:</p>
        <MathBlock>{`\\ln(a^2) = \\ln(a \\cdot a) = \\ln a + \\ln a = 2\\ln a`}</MathBlock>
        <MathBlock>{`\\ln(a^n) = n \\ln a \\quad \\text{for any positive integer } n.`}</MathBlock>
        <p>
          For negative integers, use <MathInline>{`\\ln(a^{-n}) = \\ln(1/a^n) = -\\ln(a^n) = -n\\ln a`}</MathInline>.
        </p>
        <p>
          For rational <MathInline>{`r = p/q`}</MathInline>: if <MathInline>{`b = a^{p/q}`}</MathInline>,
          then <MathInline>{`b^q = a^p`}</MathInline>, so <MathInline>{`q\\ln b = p\\ln a`}</MathInline>,
          giving <MathInline>{`\\ln b = (p/q)\\ln a`}</MathInline>.
        </p>
      </Callout>

      <h2>Logarithms to Any Base</h2>

      <Callout type="definition" title="Logarithm to Base b">
        <p>
          If <MathInline>{`b > 0`}</MathInline>, <MathInline>{`b \\neq 1`}</MathInline>, and
          <MathInline>{`x > 0`}</MathInline>, the <strong>logarithm of x to base b</strong> is:
        </p>
        <MathBlock>{`\\log_b x = \\frac{\\ln x}{\\ln b}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Key Properties">
        <ul>
          <li>
            <MathInline>{`\\log_b b = 1`}</MathInline> (since <MathInline>{`\\ln b / \\ln b = 1`}</MathInline>)
          </li>
          <li>
            <MathInline>{`\\log_b 1 = 0`}</MathInline> (since <MathInline>{`\\ln 1 = 0`}</MathInline>)
          </li>
          <li>
            <MathInline>{`\\log_e x = \\ln x`}</MathInline> (natural logarithm has base <MathInline>{`e`}</MathInline>)
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
        <p>For any positive bases <MathInline>{`a, b \\neq 1`}</MathInline> and <MathInline>{`x > 0`}</MathInline>:</p>
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
          Express <MathInline>{`\\log_2 x`}</MathInline> in terms of <MathInline>{`\\log_{10} x`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\log_2 x = \\frac{\\log_{10} x}{\\log_{10} 2} \\approx \\frac{\\log_{10} x}{0.30103} \\approx 3.322 \\log_{10} x.`}</MathBlock>
      </Callout>

      <h2>Graphs of Logarithms to Different Bases</h2>

      <Callout type="info" title="Effect of Base on the Graph">
        <p>
          Since <MathInline>{`\\log_b x = (\\ln x) / (\\ln b)`}</MathInline>, the graph of
          <MathInline>{`y = \\log_b x`}</MathInline> is obtained from <MathInline>{`y = \\ln x`}</MathInline>
          by multiplying all ordinates by <MathInline>{`1/\\ln b`}</MathInline>.
        </p>
        <ul>
          <li>
            <strong>If <MathInline>{`b > 1`}</MathInline>:</strong> <MathInline>{`\\ln b > 0`}</MathInline>,
            so the graph has the same shape as <MathInline>{`\\ln x`}</MathInline> (increasing).
          </li>
          <li>
            <strong>If <MathInline>{`0 < b < 1`}</MathInline>:</strong> <MathInline>{`\\ln b < 0`}</MathInline>,
            so the graph is reflected across the x-axis (decreasing).
          </li>
          <li>
            <strong>All graphs pass through <MathInline>{`(1, 0)`}</MathInline></strong> since
            <MathInline>{`\\log_b 1 = 0`}</MathInline> for all bases.
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
          <li>Take the natural logarithm of both sides: <MathInline>{`g(x) = \\ln|f(x)|`}</MathInline></li>
          <li>Differentiate using the chain rule: <MathInline>{`g'(x) = f'(x)/f(x)`}</MathInline></li>
          <li>Solve for <MathInline>{`f'(x) = f(x) \\cdot g'(x)`}</MathInline></li>
        </ol>
        <p>
          This is particularly useful when <MathInline>{`f`}</MathInline> is a product or quotient
          of many factors, because the logarithm converts products to sums and quotients
          to differences.
        </p>
      </Callout>

      <Callout type="example" title="Example: Logarithmic Differentiation">
        <p>
          Find <MathInline>{`f'(x)`}</MathInline> if <MathInline>{`f(x) = x^2 \\cos x \\cdot (1 + x^4)^{-7}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Take the logarithm of <MathInline>{`|f(x)|`}</MathInline>:</p>
        <MathBlock>{`g(x) = \\ln|f(x)| = \\ln x^2 + \\ln|\\cos x| + \\ln(1+x^4)^{-7}`}</MathBlock>
        <MathBlock>{`= 2\\ln|x| + \\ln|\\cos x| - 7\\ln(1+x^4).`}</MathBlock>
        <p>Differentiate:</p>
        <MathBlock>{`g'(x) = \\frac{f'(x)}{f(x)} = \\frac{2}{x} - \\frac{\\sin x}{\\cos x} - \\frac{28x^3}{1+x^4}.`}</MathBlock>
        <p>Multiply by <MathInline>{`f(x)`}</MathInline>:</p>
        <MathBlock>{`f'(x) = x^2\\cos x \\cdot (1+x^4)^{-7} \\left(\\frac{2}{x} - \\tan x - \\frac{28x^3}{1+x^4}\\right).`}</MathBlock>
      </Callout>

      <h2>Integration Involving Logarithms</h2>

      <Callout type="info" title="Basic Formulas">
        <MathBlock>{`\\int \\frac{1}{x} \\, dx = \\ln|x| + C`}</MathBlock>
        <MathBlock>{`\\int \\frac{f'(x)}{f(x)} \\, dx = \\ln|f(x)| + C`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Integrating ln x">
        <p>
          Evaluate <MathInline>{`\\int \\ln x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Use integration by parts with <MathInline>{`u = \\ln x`}</MathInline> and <MathInline>{`dv = dx`}</MathInline>:</p>
        <MathBlock>{`du = \\frac{1}{x} dx, \\quad v = x`}</MathBlock>
        <MathBlock>{`\\int \\ln x \\, dx = x \\ln x - \\int x \\cdot \\frac{1}{x} \\, dx = x \\ln x - \\int 1 \\, dx = x \\ln x - x + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Integrating Trigonometric Functions">
        <p>
          Evaluate <MathInline>{`\\int \\cot x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int \\cot x \\, dx = \\int \\frac{\\cos x}{\\sin x} \\, dx.`}</MathBlock>
        <p>
          Let <MathInline>{`u = \\sin x`}</MathInline>, so <MathInline>{`du = \\cos x \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{\\cos x}{\\sin x} \\, dx = \\int \\frac{du}{u} = \\ln|u| + C = \\ln|\\sin x| + C.`}</MathBlock>
      </Callout>

      <h2>Important Inequalities</h2>

      <Callout type="theorem" title="Bounds for ln x">
        <p>For <MathInline>{`x > 0`}</MathInline>, <MathInline>{`x \\neq 1`}</MathInline>:</p>
        <MathBlock>{`1 - \\frac{1}{x} < \\ln x < x - 1.`}</MathBlock>
        <p>When <MathInline>{`x = 1`}</MathInline>, both sides equal 0.</p>
      </Callout>

      <Callout type="info" title="Important Limit">
        <p>As a consequence of these inequalities:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1.`}</MathBlock>
        <p>
          This can also be derived from the definition of the derivative:
          <MathInline>{`(\\ln x)'|_{x=1} = 1`}</MathInline>.
        </p>
      </Callout>

      <h2>Common Logarithms</h2>

      <Callout type="info" title="Base 10 Logarithms">
        <p>
          Logarithms to base 10, written <MathInline>{`\\log_{10} x`}</MathInline> or simply
          <MathInline>{`\\log x`}</MathInline> in some contexts, are called <strong>common logarithms</strong>.
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
          The <strong>functional equation</strong> <MathInline>{`\\ln(ab) = \\ln a + \\ln b`}</MathInline>
          leads to all logarithm laws.
        </li>
        <li>
          <strong>Logarithm to base b:</strong> <MathInline>{`\\log_b x = \\frac{\\ln x}{\\ln b}`}</MathInline>
        </li>
        <li>
          <strong>Change of base:</strong> <MathInline>{`\\log_b x = \\frac{\\log_a x}{\\log_a b}`}</MathInline>
        </li>
        <li>
          For <MathInline>{`b > 1`}</MathInline>, <MathInline>{`\\log_b x`}</MathInline> is increasing;
          for <MathInline>{`0 < b < 1`}</MathInline>, it is decreasing.
        </li>
        <li>
          <strong>Logarithmic differentiation:</strong> Take ln, differentiate, multiply back.
        </li>
        <li>
          Key integral: <MathInline>{`\\int \\ln x \\, dx = x \\ln x - x + C`}</MathInline>
        </li>
        <li>
          <strong>Important limit:</strong> <MathInline>{`\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
