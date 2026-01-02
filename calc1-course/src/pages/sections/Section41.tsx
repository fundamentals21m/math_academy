import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <p>
        Having defined the natural logarithm using an integral, we now define its inverse:
        the <strong>exponential function</strong>. This approach—defining the logarithm first,
        then the exponential—provides a rigorous foundation for powers with arbitrary real
        exponents.
      </p>

      <h2>Definition of the Exponential Function</h2>

      <Callout type="info" title="The Inverse Relationship">
        <p>
          We proved that for every real number <InlineMath>{`x`}</InlineMath>, there is exactly
          one positive number <InlineMath>{`y`}</InlineMath> such that <InlineMath>{`\\ln y = x`}</InlineMath>.
          This allows us to define <InlineMath>{`y`}</InlineMath> as a function of <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition" title="The Exponential Function">
        <p>
          For any real <InlineMath>{`x`}</InlineMath>, we define <InlineMath>{`E(x)`}</InlineMath> to be
          that number <InlineMath>{`y`}</InlineMath> whose logarithm is <InlineMath>{`x`}</InlineMath>.
          That is:
        </p>
        <MathBlock>{`y = E(x) \\quad \\text{means} \\quad \\ln y = x.`}</MathBlock>
        <p>
          The exponential function <InlineMath>{`E`}</InlineMath> is also called the
          <strong> antilogarithm</strong>.
        </p>
      </Callout>

      <Callout type="info" title="Domain and Range">
        <ul>
          <li>
            <strong>Domain:</strong> All real numbers <InlineMath>{`(-\\infty, \\infty)`}</InlineMath>
          </li>
          <li>
            <strong>Range:</strong> All positive real numbers <InlineMath>{`(0, \\infty)`}</InlineMath>
          </li>
        </ul>
        <p>
          The graph of <InlineMath>{`E`}</InlineMath> is obtained from the graph of the logarithm
          by reflection through the line <InlineMath>{`y = x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Inverse Relationships">
        <p>
          Since <InlineMath>{`\\ln`}</InlineMath> and <InlineMath>{`E`}</InlineMath> are inverses of each other:
        </p>
        <MathBlock>{`\\ln[E(x)] = x \\quad \\text{for all } x`}</MathBlock>
        <MathBlock>{`E[\\ln y] = y \\quad \\text{for all } y > 0`}</MathBlock>
      </Callout>

      <h2>Properties of the Exponential Function</h2>

      <Callout type="theorem" title="Theorem 6.6: Properties of the Exponential">
        <p>The exponential function has the following properties:</p>
        <p><strong>(a)</strong> <InlineMath>{`E(0) = 1`}</InlineMath> and <InlineMath>{`E(1) = e`}</InlineMath></p>
        <p><strong>(b)</strong> <InlineMath>{`E'(x) = E(x)`}</InlineMath> for every <InlineMath>{`x`}</InlineMath></p>
        <p><strong>(c)</strong> <InlineMath>{`E(a + b) = E(a) \\cdot E(b)`}</InlineMath> for all <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath></p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          <strong>(a)</strong> From <InlineMath>{`\\ln 1 = 0`}</InlineMath> and <InlineMath>{`\\ln e = 1`}</InlineMath>,
          we get <InlineMath>{`E(0) = 1`}</InlineMath> and <InlineMath>{`E(1) = e`}</InlineMath>.
        </p>
        <p>
          <strong>(c)</strong> Let <InlineMath>{`x = E(a)`}</InlineMath>, <InlineMath>{`y = E(b)`}</InlineMath>,
          and <InlineMath>{`c = \\ln(xy)`}</InlineMath>. Then:
        </p>
        <MathBlock>{`c = \\ln(xy) = \\ln x + \\ln y = a + b.`}</MathBlock>
        <p>
          So <InlineMath>{`E(c) = xy = E(a)E(b)`}</InlineMath>, and since <InlineMath>{`c = a + b`}</InlineMath>,
          we have <InlineMath>{`E(a + b) = E(a)E(b)`}</InlineMath>.
        </p>
        <p>
          <strong>(b)</strong> The difference quotient is:
        </p>
        <MathBlock>{`\\frac{E(x+h) - E(x)}{h} = \\frac{E(x)E(h) - E(x)}{h} = E(x) \\cdot \\frac{E(h) - 1}{h}.`}</MathBlock>
        <p>
          We need to show <InlineMath>{`\\lim_{h \\to 0} \\frac{E(h) - 1}{h} = 1`}</InlineMath>.
          Let <InlineMath>{`k = E(h) - 1`}</InlineMath>. Then <InlineMath>{`\\ln(k+1) = h`}</InlineMath>, so:
        </p>
        <MathBlock>{`\\frac{E(h) - 1}{h} = \\frac{k}{\\ln(k+1)}.`}</MathBlock>
        <p>
          As <InlineMath>{`h \\to 0`}</InlineMath>, <InlineMath>{`k \\to 0`}</InlineMath>, and
          <InlineMath>{`\\frac{\\ln(k+1)}{k} \\to \\ln'(1) = 1`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="The Exponential is Its Own Derivative">
        <p>
          The property <InlineMath>{`E'(x) = E(x)`}</InlineMath> is remarkable: the exponential
          function is its own derivative! This means the rate of change of the exponential
          at any point equals its value at that point.
        </p>
      </Callout>

      <h2>Exponentials as Powers of e</h2>

      <Callout type="theorem" title="E(r) = e^r for Rational r">
        <p>For every rational number <InlineMath>{`r`}</InlineMath>:</p>
        <MathBlock>{`E(r) = e^r.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof for Rational Exponents">
        <p>
          <strong>Step 1:</strong> Taking <InlineMath>{`b = -a`}</InlineMath> in the functional equation:
        </p>
        <MathBlock>{`E(a)E(-a) = E(0) = 1 \\implies E(-a) = \\frac{1}{E(a)}.`}</MathBlock>
        <p>
          <strong>Step 2:</strong> Taking <InlineMath>{`b = a, 2a, \\ldots, na`}</InlineMath> successively:
        </p>
        <MathBlock>{`E(na) = E(a)^n \\quad \\text{for every positive integer } n.`}</MathBlock>
        <p>
          <strong>Step 3:</strong> When <InlineMath>{`a = 1`}</InlineMath>: <InlineMath>{`E(n) = e^n`}</InlineMath>.
        </p>
        <p>
          <strong>Step 4:</strong> When <InlineMath>{`a = 1/n`}</InlineMath>:
          <InlineMath>{`E(1) = E(1/n)^n`}</InlineMath>, so <InlineMath>{`E(1/n) = e^{1/n}`}</InlineMath>.
        </p>
        <p>
          <strong>Step 5:</strong> For <InlineMath>{`a = 1/m`}</InlineMath> in <InlineMath>{`E(na) = E(a)^n`}</InlineMath>:
        </p>
        <MathBlock>{`E\\left(\\frac{n}{m}\\right) = E\\left(\\frac{1}{m}\\right)^n = e^{n/m}.`}</MathBlock>
        <p>
          Since <InlineMath>{`E(-r) = 1/E(r) = e^{-r}`}</InlineMath>, the formula holds for all rationals.
        </p>
      </Callout>

      <h2>Definition of e^x for All Real x</h2>

      <Callout type="definition" title="e^x for Arbitrary Real x">
        <p>
          We <em>define</em> <InlineMath>{`e^x`}</InlineMath> for all real <InlineMath>{`x`}</InlineMath> by:
        </p>
        <MathBlock>{`e^x = E(x) \\quad \\text{for every real } x.`}</MathBlock>
        <p>
          This extends the notation <InlineMath>{`e^x`}</InlineMath> from rational to irrational exponents.
        </p>
      </Callout>

      <Callout type="info" title="Justification">
        <p>
          This definition ensures the law of exponents holds for <em>all</em> real exponents:
        </p>
        <MathBlock>{`e^a e^b = e^{a+b}.`}</MathBlock>
        <p>
          The proof is immediate since this is just a restatement of the functional equation
          <InlineMath>{`E(a+b) = E(a)E(b)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Notation">
        <p>
          The notation <InlineMath>{`e^x`}</InlineMath> is standard for <InlineMath>{`E(x)`}</InlineMath>.
          Sometimes <InlineMath>{`\\exp(x)`}</InlineMath> is written instead, especially when
          complicated expressions appear in the exponent.
        </p>
        <p>The equations:</p>
        <MathBlock>{`y = e^x \\quad \\text{and} \\quad x = \\ln y`}</MathBlock>
        <p>mean exactly the same thing.</p>
      </Callout>

      <h2>General Powers: a^x for a &gt; 0</h2>

      <Callout type="definition" title="Definition of a^x">
        <p>
          For <InlineMath>{`a > 0`}</InlineMath> and any real <InlineMath>{`x`}</InlineMath>, we define:
        </p>
        <MathBlock>{`a^x = e^{x \\ln a}.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of General Powers">
        <p>For <InlineMath>{`a, b > 0`}</InlineMath> and all real <InlineMath>{`x, y`}</InlineMath>:</p>
        <MathBlock>{`\\ln(a^x) = x \\ln a`}</MathBlock>
        <MathBlock>{`(ab)^x = a^x b^x`}</MathBlock>
        <MathBlock>{`a^x a^y = a^{x+y}`}</MathBlock>
        <MathBlock>{`(a^x)^y = (a^y)^x = a^{xy}`}</MathBlock>
        <p>
          If <InlineMath>{`a \\neq 1`}</InlineMath>, then <InlineMath>{`y = a^x`}</InlineMath> if and only
          if <InlineMath>{`x = \\log_a y`}</InlineMath>.
        </p>
      </Callout>

      <h2>Differentiation of Exponentials</h2>

      <Callout type="theorem" title="Derivative of e^x">
        <MathBlock>{`\\frac{d}{dx} e^x = e^x`}</MathBlock>
        <p>
          The exponential function is its own derivative—one of the most remarkable
          properties in calculus!
        </p>
      </Callout>

      <Callout type="theorem" title="Derivative of a^x">
        <p>For <InlineMath>{`a > 0`}</InlineMath>:</p>
        <MathBlock>{`\\frac{d}{dx} a^x = a^x \\ln a.`}</MathBlock>
        <p>
          Differentiating <InlineMath>{`a^x`}</InlineMath> multiplies it by the constant <InlineMath>{`\\ln a`}</InlineMath>.
          When <InlineMath>{`a = e`}</InlineMath>, <InlineMath>{`\\ln e = 1`}</InlineMath>, recovering
          <InlineMath>{`(e^x)' = e^x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Since <InlineMath>{`a^x = e^{x \\ln a}`}</InlineMath>, by the chain rule:
        </p>
        <MathBlock>{`\\frac{d}{dx} a^x = \\frac{d}{dx} e^{x \\ln a} = e^{x \\ln a} \\cdot \\ln a = a^x \\ln a.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Chain Rule Versions">
        <p>For a differentiable function <InlineMath>{`u = f(x)`}</InlineMath>:</p>
        <MathBlock>{`\\frac{d}{dx} e^{f(x)} = e^{f(x)} \\cdot f'(x)`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} a^{f(x)} = a^{f(x)} \\cdot f'(x) \\cdot \\ln a`}</MathBlock>
      </Callout>

      <h2>Integration of Exponentials</h2>

      <Callout type="theorem" title="Integration Formulas">
        <MathBlock>{`\\int e^x \\, dx = e^x + C`}</MathBlock>
        <MathBlock>{`\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C \\quad (a > 0, a \\neq 1)`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Substitution Versions">
        <p>For a differentiable function <InlineMath>{`u = f(x)`}</InlineMath>:</p>
        <MathBlock>{`\\int e^{f(x)} f'(x) \\, dx = e^{f(x)} + C`}</MathBlock>
        <MathBlock>{`\\int a^{f(x)} f'(x) \\, dx = \\frac{a^{f(x)}}{\\ln a} + C`}</MathBlock>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Integrating x²e^(x³)">
        <p>
          Evaluate <InlineMath>{`\\int x^2 e^{x^3} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = x^3`}</InlineMath>, so <InlineMath>{`du = 3x^2 \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int x^2 e^{x^3} \\, dx = \\frac{1}{3} \\int e^{x^3} (3x^2 \\, dx) = \\frac{1}{3} \\int e^u \\, du = \\frac{1}{3} e^u + C = \\frac{1}{3} e^{x^3} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Integrating 2^√x / √x">
        <p>
          Evaluate <InlineMath>{`\\int \\frac{2^{\\sqrt{x}}}{\\sqrt{x}} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = \\sqrt{x}`}</InlineMath>, so <InlineMath>{`du = \\frac{1}{2\\sqrt{x}} dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\frac{2^{\\sqrt{x}}}{\\sqrt{x}} \\, dx = 2 \\int 2^u \\, du = 2 \\cdot \\frac{2^u}{\\ln 2} + C = \\frac{2^{1+\\sqrt{x}}}{\\ln 2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Integrating cos x · e^(2sin x)">
        <p>
          Evaluate <InlineMath>{`\\int \\cos x \\cdot e^{2\\sin x} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`u = 2\\sin x`}</InlineMath>, so <InlineMath>{`du = 2\\cos x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int \\cos x \\cdot e^{2\\sin x} \\, dx = \\frac{1}{2} \\int e^u \\, du = \\frac{1}{2} e^u + C = \\frac{1}{2} e^{2\\sin x} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Integrating e^x sin x">
        <p>
          Evaluate <InlineMath>{`\\int e^x \\sin x \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Use integration by parts twice.</p>
        <p>
          Let <InlineMath>{`u = e^x`}</InlineMath>, <InlineMath>{`dv = \\sin x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int e^x \\sin x \\, dx = -e^x \\cos x + \\int e^x \\cos x \\, dx.`}</MathBlock>
        <p>
          For <InlineMath>{`\\int e^x \\cos x \\, dx`}</InlineMath>, let <InlineMath>{`u = e^x`}</InlineMath>,
          <InlineMath>{`dv = \\cos x \\, dx`}</InlineMath>:
        </p>
        <MathBlock>{`\\int e^x \\cos x \\, dx = e^x \\sin x - \\int e^x \\sin x \\, dx.`}</MathBlock>
        <p>Substituting back and solving:</p>
        <MathBlock>{`\\int e^x \\sin x \\, dx = -e^x \\cos x + e^x \\sin x - \\int e^x \\sin x \\, dx`}</MathBlock>
        <MathBlock>{`2\\int e^x \\sin x \\, dx = e^x(\\sin x - \\cos x)`}</MathBlock>
        <MathBlock>{`\\int e^x \\sin x \\, dx = \\frac{e^x}{2}(\\sin x - \\cos x) + C.`}</MathBlock>
      </Callout>

      <h2>Graph of the Exponential</h2>

      <Callout type="info" title="Properties of y = e^x">
        <ul>
          <li>
            <strong>Domain:</strong> <InlineMath>{`(-\\infty, \\infty)`}</InlineMath>
          </li>
          <li>
            <strong>Range:</strong> <InlineMath>{`(0, \\infty)`}</InlineMath> — always positive
          </li>
          <li>
            <strong>Passes through:</strong> <InlineMath>{`(0, 1)`}</InlineMath> since <InlineMath>{`e^0 = 1`}</InlineMath>
          </li>
          <li>
            <strong>Strictly increasing:</strong> <InlineMath>{`(e^x)' = e^x > 0`}</InlineMath>
          </li>
          <li>
            <strong>Concave up:</strong> <InlineMath>{`(e^x)'' = e^x > 0`}</InlineMath>
          </li>
          <li>
            As <InlineMath>{`x \\to -\\infty`}</InlineMath>: <InlineMath>{`e^x \\to 0`}</InlineMath>
          </li>
          <li>
            As <InlineMath>{`x \\to \\infty`}</InlineMath>: <InlineMath>{`e^x \\to \\infty`}</InlineMath> (rapidly)
          </li>
        </ul>
      </Callout>

      <Callout type="info" title="Graphs of y = a^x">
        <ul>
          <li>
            <strong>If <InlineMath>{`a > 1`}</InlineMath>:</strong> The function is increasing.
            Larger <InlineMath>{`a`}</InlineMath> means steeper growth.
          </li>
          <li>
            <strong>If <InlineMath>{`0 < a < 1`}</InlineMath>:</strong> The function is decreasing
            (exponential decay).
          </li>
          <li>
            <strong>All graphs pass through <InlineMath>{`(0, 1)`}</InlineMath></strong> since
            <InlineMath>{`a^0 = 1`}</InlineMath>.
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>exponential function</strong> <InlineMath>{`E(x)`}</InlineMath> is the inverse
          of the logarithm: <InlineMath>{`y = E(x)`}</InlineMath> means <InlineMath>{`\\ln y = x`}</InlineMath>.
        </li>
        <li>
          <strong>Key properties:</strong> <InlineMath>{`E(0) = 1`}</InlineMath>,
          <InlineMath>{`E'(x) = E(x)`}</InlineMath>, and <InlineMath>{`E(a+b) = E(a)E(b)`}</InlineMath>.
        </li>
        <li>
          We define <InlineMath>{`e^x = E(x)`}</InlineMath> for all real <InlineMath>{`x`}</InlineMath>,
          extending rational powers to irrational exponents.
        </li>
        <li>
          <strong>General powers:</strong> <InlineMath>{`a^x = e^{x \\ln a}`}</InlineMath> for <InlineMath>{`a > 0`}</InlineMath>.
        </li>
        <li>
          <strong>Derivatives:</strong> <InlineMath>{`(e^x)' = e^x`}</InlineMath> and
          <InlineMath>{`(a^x)' = a^x \\ln a`}</InlineMath>.
        </li>
        <li>
          <strong>Integrals:</strong> <InlineMath>{`\\int e^x \\, dx = e^x + C`}</InlineMath> and
          <InlineMath>{`\\int a^x \\, dx = a^x / \\ln a + C`}</InlineMath>.
        </li>
        <li>
          The exponential is <strong>strictly increasing</strong> and <strong>concave up</strong>,
          with domain <InlineMath>{`\\mathbb{R}`}</InlineMath> and range <InlineMath>{`(0, \\infty)`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
