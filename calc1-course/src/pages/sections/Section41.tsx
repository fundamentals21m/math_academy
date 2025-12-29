import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          We proved that for every real number <MathInline>{`x`}</MathInline>, there is exactly
          one positive number <MathInline>{`y`}</MathInline> such that <MathInline>{`\\ln y = x`}</MathInline>.
          This allows us to define <MathInline>{`y`}</MathInline> as a function of <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition" title="The Exponential Function">
        <p>
          For any real <MathInline>{`x`}</MathInline>, we define <MathInline>{`E(x)`}</MathInline> to be
          that number <MathInline>{`y`}</MathInline> whose logarithm is <MathInline>{`x`}</MathInline>.
          That is:
        </p>
        <MathBlock>{`y = E(x) \\quad \\text{means} \\quad \\ln y = x.`}</MathBlock>
        <p>
          The exponential function <MathInline>{`E`}</MathInline> is also called the
          <strong> antilogarithm</strong>.
        </p>
      </Callout>

      <Callout type="info" title="Domain and Range">
        <ul>
          <li>
            <strong>Domain:</strong> All real numbers <MathInline>{`(-\\infty, \\infty)`}</MathInline>
          </li>
          <li>
            <strong>Range:</strong> All positive real numbers <MathInline>{`(0, \\infty)`}</MathInline>
          </li>
        </ul>
        <p>
          The graph of <MathInline>{`E`}</MathInline> is obtained from the graph of the logarithm
          by reflection through the line <MathInline>{`y = x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Inverse Relationships">
        <p>
          Since <MathInline>{`\\ln`}</MathInline> and <MathInline>{`E`}</MathInline> are inverses of each other:
        </p>
        <MathBlock>{`\\ln[E(x)] = x \\quad \\text{for all } x`}</MathBlock>
        <MathBlock>{`E[\\ln y] = y \\quad \\text{for all } y > 0`}</MathBlock>
      </Callout>

      <h2>Properties of the Exponential Function</h2>

      <Callout type="theorem" title="Theorem 6.6: Properties of the Exponential">
        <p>The exponential function has the following properties:</p>
        <p><strong>(a)</strong> <MathInline>{`E(0) = 1`}</MathInline> and <MathInline>{`E(1) = e`}</MathInline></p>
        <p><strong>(b)</strong> <MathInline>{`E'(x) = E(x)`}</MathInline> for every <MathInline>{`x`}</MathInline></p>
        <p><strong>(c)</strong> <MathInline>{`E(a + b) = E(a) \\cdot E(b)`}</MathInline> for all <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline></p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          <strong>(a)</strong> From <MathInline>{`\\ln 1 = 0`}</MathInline> and <MathInline>{`\\ln e = 1`}</MathInline>,
          we get <MathInline>{`E(0) = 1`}</MathInline> and <MathInline>{`E(1) = e`}</MathInline>.
        </p>
        <p>
          <strong>(c)</strong> Let <MathInline>{`x = E(a)`}</MathInline>, <MathInline>{`y = E(b)`}</MathInline>,
          and <MathInline>{`c = \\ln(xy)`}</MathInline>. Then:
        </p>
        <MathBlock>{`c = \\ln(xy) = \\ln x + \\ln y = a + b.`}</MathBlock>
        <p>
          So <MathInline>{`E(c) = xy = E(a)E(b)`}</MathInline>, and since <MathInline>{`c = a + b`}</MathInline>,
          we have <MathInline>{`E(a + b) = E(a)E(b)`}</MathInline>.
        </p>
        <p>
          <strong>(b)</strong> The difference quotient is:
        </p>
        <MathBlock>{`\\frac{E(x+h) - E(x)}{h} = \\frac{E(x)E(h) - E(x)}{h} = E(x) \\cdot \\frac{E(h) - 1}{h}.`}</MathBlock>
        <p>
          We need to show <MathInline>{`\\lim_{h \\to 0} \\frac{E(h) - 1}{h} = 1`}</MathInline>.
          Let <MathInline>{`k = E(h) - 1`}</MathInline>. Then <MathInline>{`\\ln(k+1) = h`}</MathInline>, so:
        </p>
        <MathBlock>{`\\frac{E(h) - 1}{h} = \\frac{k}{\\ln(k+1)}.`}</MathBlock>
        <p>
          As <MathInline>{`h \\to 0`}</MathInline>, <MathInline>{`k \\to 0`}</MathInline>, and
          <MathInline>{`\\frac{\\ln(k+1)}{k} \\to \\ln'(1) = 1`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="The Exponential is Its Own Derivative">
        <p>
          The property <MathInline>{`E'(x) = E(x)`}</MathInline> is remarkable: the exponential
          function is its own derivative! This means the rate of change of the exponential
          at any point equals its value at that point.
        </p>
      </Callout>

      <h2>Exponentials as Powers of e</h2>

      <Callout type="theorem" title="E(r) = e^r for Rational r">
        <p>For every rational number <MathInline>{`r`}</MathInline>:</p>
        <MathBlock>{`E(r) = e^r.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof for Rational Exponents">
        <p>
          <strong>Step 1:</strong> Taking <MathInline>{`b = -a`}</MathInline> in the functional equation:
        </p>
        <MathBlock>{`E(a)E(-a) = E(0) = 1 \\implies E(-a) = \\frac{1}{E(a)}.`}</MathBlock>
        <p>
          <strong>Step 2:</strong> Taking <MathInline>{`b = a, 2a, \\ldots, na`}</MathInline> successively:
        </p>
        <MathBlock>{`E(na) = E(a)^n \\quad \\text{for every positive integer } n.`}</MathBlock>
        <p>
          <strong>Step 3:</strong> When <MathInline>{`a = 1`}</MathInline>: <MathInline>{`E(n) = e^n`}</MathInline>.
        </p>
        <p>
          <strong>Step 4:</strong> When <MathInline>{`a = 1/n`}</MathInline>:
          <MathInline>{`E(1) = E(1/n)^n`}</MathInline>, so <MathInline>{`E(1/n) = e^{1/n}`}</MathInline>.
        </p>
        <p>
          <strong>Step 5:</strong> For <MathInline>{`a = 1/m`}</MathInline> in <MathInline>{`E(na) = E(a)^n`}</MathInline>:
        </p>
        <MathBlock>{`E\\left(\\frac{n}{m}\\right) = E\\left(\\frac{1}{m}\\right)^n = e^{n/m}.`}</MathBlock>
        <p>
          Since <MathInline>{`E(-r) = 1/E(r) = e^{-r}`}</MathInline>, the formula holds for all rationals.
        </p>
      </Callout>

      <h2>Definition of e^x for All Real x</h2>

      <Callout type="definition" title="e^x for Arbitrary Real x">
        <p>
          We <em>define</em> <MathInline>{`e^x`}</MathInline> for all real <MathInline>{`x`}</MathInline> by:
        </p>
        <MathBlock>{`e^x = E(x) \\quad \\text{for every real } x.`}</MathBlock>
        <p>
          This extends the notation <MathInline>{`e^x`}</MathInline> from rational to irrational exponents.
        </p>
      </Callout>

      <Callout type="info" title="Justification">
        <p>
          This definition ensures the law of exponents holds for <em>all</em> real exponents:
        </p>
        <MathBlock>{`e^a e^b = e^{a+b}.`}</MathBlock>
        <p>
          The proof is immediate since this is just a restatement of the functional equation
          <MathInline>{`E(a+b) = E(a)E(b)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Notation">
        <p>
          The notation <MathInline>{`e^x`}</MathInline> is standard for <MathInline>{`E(x)`}</MathInline>.
          Sometimes <MathInline>{`\\exp(x)`}</MathInline> is written instead, especially when
          complicated expressions appear in the exponent.
        </p>
        <p>The equations:</p>
        <MathBlock>{`y = e^x \\quad \\text{and} \\quad x = \\ln y`}</MathBlock>
        <p>mean exactly the same thing.</p>
      </Callout>

      <h2>General Powers: a^x for a &gt; 0</h2>

      <Callout type="definition" title="Definition of a^x">
        <p>
          For <MathInline>{`a > 0`}</MathInline> and any real <MathInline>{`x`}</MathInline>, we define:
        </p>
        <MathBlock>{`a^x = e^{x \\ln a}.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of General Powers">
        <p>For <MathInline>{`a, b > 0`}</MathInline> and all real <MathInline>{`x, y`}</MathInline>:</p>
        <MathBlock>{`\\ln(a^x) = x \\ln a`}</MathBlock>
        <MathBlock>{`(ab)^x = a^x b^x`}</MathBlock>
        <MathBlock>{`a^x a^y = a^{x+y}`}</MathBlock>
        <MathBlock>{`(a^x)^y = (a^y)^x = a^{xy}`}</MathBlock>
        <p>
          If <MathInline>{`a \\neq 1`}</MathInline>, then <MathInline>{`y = a^x`}</MathInline> if and only
          if <MathInline>{`x = \\log_a y`}</MathInline>.
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
        <p>For <MathInline>{`a > 0`}</MathInline>:</p>
        <MathBlock>{`\\frac{d}{dx} a^x = a^x \\ln a.`}</MathBlock>
        <p>
          Differentiating <MathInline>{`a^x`}</MathInline> multiplies it by the constant <MathInline>{`\\ln a`}</MathInline>.
          When <MathInline>{`a = e`}</MathInline>, <MathInline>{`\\ln e = 1`}</MathInline>, recovering
          <MathInline>{`(e^x)' = e^x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Since <MathInline>{`a^x = e^{x \\ln a}`}</MathInline>, by the chain rule:
        </p>
        <MathBlock>{`\\frac{d}{dx} a^x = \\frac{d}{dx} e^{x \\ln a} = e^{x \\ln a} \\cdot \\ln a = a^x \\ln a.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Chain Rule Versions">
        <p>For a differentiable function <MathInline>{`u = f(x)`}</MathInline>:</p>
        <MathBlock>{`\\frac{d}{dx} e^{f(x)} = e^{f(x)} \\cdot f'(x)`}</MathBlock>
        <MathBlock>{`\\frac{d}{dx} a^{f(x)} = a^{f(x)} \\cdot f'(x) \\cdot \\ln a`}</MathBlock>
      </Callout>

      <h2>Integration of Exponentials</h2>

      <Callout type="theorem" title="Integration Formulas">
        <MathBlock>{`\\int e^x \\, dx = e^x + C`}</MathBlock>
        <MathBlock>{`\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C \\quad (a > 0, a \\neq 1)`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Substitution Versions">
        <p>For a differentiable function <MathInline>{`u = f(x)`}</MathInline>:</p>
        <MathBlock>{`\\int e^{f(x)} f'(x) \\, dx = e^{f(x)} + C`}</MathBlock>
        <MathBlock>{`\\int a^{f(x)} f'(x) \\, dx = \\frac{a^{f(x)}}{\\ln a} + C`}</MathBlock>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Integrating x²e^(x³)">
        <p>
          Evaluate <MathInline>{`\\int x^2 e^{x^3} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = x^3`}</MathInline>, so <MathInline>{`du = 3x^2 \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int x^2 e^{x^3} \\, dx = \\frac{1}{3} \\int e^{x^3} (3x^2 \\, dx) = \\frac{1}{3} \\int e^u \\, du = \\frac{1}{3} e^u + C = \\frac{1}{3} e^{x^3} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Integrating 2^√x / √x">
        <p>
          Evaluate <MathInline>{`\\int \\frac{2^{\\sqrt{x}}}{\\sqrt{x}} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = \\sqrt{x}`}</MathInline>, so <MathInline>{`du = \\frac{1}{2\\sqrt{x}} dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\frac{2^{\\sqrt{x}}}{\\sqrt{x}} \\, dx = 2 \\int 2^u \\, du = 2 \\cdot \\frac{2^u}{\\ln 2} + C = \\frac{2^{1+\\sqrt{x}}}{\\ln 2} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Integrating cos x · e^(2sin x)">
        <p>
          Evaluate <MathInline>{`\\int \\cos x \\cdot e^{2\\sin x} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`u = 2\\sin x`}</MathInline>, so <MathInline>{`du = 2\\cos x \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int \\cos x \\cdot e^{2\\sin x} \\, dx = \\frac{1}{2} \\int e^u \\, du = \\frac{1}{2} e^u + C = \\frac{1}{2} e^{2\\sin x} + C.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Integrating e^x sin x">
        <p>
          Evaluate <MathInline>{`\\int e^x \\sin x \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Use integration by parts twice.</p>
        <p>
          Let <MathInline>{`u = e^x`}</MathInline>, <MathInline>{`dv = \\sin x \\, dx`}</MathInline>:
        </p>
        <MathBlock>{`\\int e^x \\sin x \\, dx = -e^x \\cos x + \\int e^x \\cos x \\, dx.`}</MathBlock>
        <p>
          For <MathInline>{`\\int e^x \\cos x \\, dx`}</MathInline>, let <MathInline>{`u = e^x`}</MathInline>,
          <MathInline>{`dv = \\cos x \\, dx`}</MathInline>:
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
            <strong>Domain:</strong> <MathInline>{`(-\\infty, \\infty)`}</MathInline>
          </li>
          <li>
            <strong>Range:</strong> <MathInline>{`(0, \\infty)`}</MathInline> — always positive
          </li>
          <li>
            <strong>Passes through:</strong> <MathInline>{`(0, 1)`}</MathInline> since <MathInline>{`e^0 = 1`}</MathInline>
          </li>
          <li>
            <strong>Strictly increasing:</strong> <MathInline>{`(e^x)' = e^x > 0`}</MathInline>
          </li>
          <li>
            <strong>Concave up:</strong> <MathInline>{`(e^x)'' = e^x > 0`}</MathInline>
          </li>
          <li>
            As <MathInline>{`x \\to -\\infty`}</MathInline>: <MathInline>{`e^x \\to 0`}</MathInline>
          </li>
          <li>
            As <MathInline>{`x \\to \\infty`}</MathInline>: <MathInline>{`e^x \\to \\infty`}</MathInline> (rapidly)
          </li>
        </ul>
      </Callout>

      <Callout type="info" title="Graphs of y = a^x">
        <ul>
          <li>
            <strong>If <MathInline>{`a > 1`}</MathInline>:</strong> The function is increasing.
            Larger <MathInline>{`a`}</MathInline> means steeper growth.
          </li>
          <li>
            <strong>If <MathInline>{`0 < a < 1`}</MathInline>:</strong> The function is decreasing
            (exponential decay).
          </li>
          <li>
            <strong>All graphs pass through <MathInline>{`(0, 1)`}</MathInline></strong> since
            <MathInline>{`a^0 = 1`}</MathInline>.
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>exponential function</strong> <MathInline>{`E(x)`}</MathInline> is the inverse
          of the logarithm: <MathInline>{`y = E(x)`}</MathInline> means <MathInline>{`\\ln y = x`}</MathInline>.
        </li>
        <li>
          <strong>Key properties:</strong> <MathInline>{`E(0) = 1`}</MathInline>,
          <MathInline>{`E'(x) = E(x)`}</MathInline>, and <MathInline>{`E(a+b) = E(a)E(b)`}</MathInline>.
        </li>
        <li>
          We define <MathInline>{`e^x = E(x)`}</MathInline> for all real <MathInline>{`x`}</MathInline>,
          extending rational powers to irrational exponents.
        </li>
        <li>
          <strong>General powers:</strong> <MathInline>{`a^x = e^{x \\ln a}`}</MathInline> for <MathInline>{`a > 0`}</MathInline>.
        </li>
        <li>
          <strong>Derivatives:</strong> <MathInline>{`(e^x)' = e^x`}</MathInline> and
          <MathInline>{`(a^x)' = a^x \\ln a`}</MathInline>.
        </li>
        <li>
          <strong>Integrals:</strong> <MathInline>{`\\int e^x \\, dx = e^x + C`}</MathInline> and
          <MathInline>{`\\int a^x \\, dx = a^x / \\ln a + C`}</MathInline>.
        </li>
        <li>
          The exponential is <strong>strictly increasing</strong> and <strong>concave up</strong>,
          with domain <MathInline>{`\\mathbb{R}`}</MathInline> and range <MathInline>{`(0, \\infty)`}</MathInline>.
        </li>
      </ul>
    </LessonLayout>
  );
}
