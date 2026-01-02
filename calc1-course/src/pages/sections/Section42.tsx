import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <p>
        The exponential function has a remarkable property: it is its own derivative.
        This makes it the natural function for modeling processes where the rate of
        change is proportional to the current value—the defining characteristic of
        exponential growth and decay.
      </p>

      <h2>The Differential Equation y' = ky</h2>

      <Callout type="theorem" title="Characterization of Exponential Functions">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be a differentiable function satisfying:
        </p>
        <MathBlock>{`f'(x) = c \\cdot f(x) \\quad \\text{for all } x,`}</MathBlock>
        <p>
          where <InlineMath>{`c`}</InlineMath> is a constant. Then there exists a constant
          <InlineMath>{`K`}</InlineMath> such that:
        </p>
        <MathBlock>{`f(x) = K e^{cx} \\quad \\text{for all } x.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Consider <InlineMath>{`g(x) = f(x) e^{-cx}`}</InlineMath>. By the product rule:
        </p>
        <MathBlock>{`g'(x) = f'(x) e^{-cx} + f(x) \\cdot (-c) e^{-cx} = e^{-cx}[f'(x) - cf(x)] = 0.`}</MathBlock>
        <p>
          Since <InlineMath>{`g'(x) = 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath>, the function
          <InlineMath>{`g`}</InlineMath> is constant: <InlineMath>{`g(x) = K`}</InlineMath> for some constant <InlineMath>{`K`}</InlineMath>.
        </p>
        <p>
          Therefore <InlineMath>{`f(x) e^{-cx} = K`}</InlineMath>, giving <InlineMath>{`f(x) = Ke^{cx}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Physical Interpretation">
        <p>
          The equation <InlineMath>{`y' = ky`}</InlineMath> says the <em>rate of change</em> of
          <InlineMath>{`y`}</InlineMath> is proportional to <InlineMath>{`y`}</InlineMath> itself. This
          models many natural phenomena:
        </p>
        <ul>
          <li>
            <strong>If <InlineMath>{`k > 0`}</InlineMath>:</strong> Exponential growth—the larger
            the quantity, the faster it grows.
          </li>
          <li>
            <strong>If <InlineMath>{`k < 0`}</InlineMath>:</strong> Exponential decay—the quantity
            decreases at a rate proportional to its size.
          </li>
        </ul>
      </Callout>

      <h2>The Law of Exponential Change</h2>

      <Callout type="theorem" title="Solution to y' = ky">
        <p>
          If <InlineMath>{`y(0) = y_0`}</InlineMath> (the initial value) and <InlineMath>{`y' = ky`}</InlineMath>,
          then:
        </p>
        <MathBlock>{`y(t) = y_0 e^{kt}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Derivation">
        <p>
          From the characterization theorem, <InlineMath>{`y(t) = Ke^{kt}`}</InlineMath> for some
          constant <InlineMath>{`K`}</InlineMath>. Setting <InlineMath>{`t = 0`}</InlineMath>:
        </p>
        <MathBlock>{`y_0 = y(0) = Ke^{0} = K.`}</MathBlock>
        <p>
          Therefore <InlineMath>{`K = y_0`}</InlineMath>, giving <InlineMath>{`y(t) = y_0 e^{kt}`}</InlineMath>.
        </p>
      </Callout>

      <h2>Exponential Growth</h2>

      <Callout type="info" title="When k > 0">
        <p>
          When the growth constant <InlineMath>{`k`}</InlineMath> is positive, the function
          <InlineMath>{`y = y_0 e^{kt}`}</InlineMath> increases without bound as <InlineMath>{`t \\to \\infty`}</InlineMath>.
        </p>
        <p>
          <strong>Doubling time:</strong> The time <InlineMath>{`T`}</InlineMath> for the quantity
          to double satisfies <InlineMath>{`y_0 e^{kT} = 2y_0`}</InlineMath>, so:
        </p>
        <MathBlock>{`e^{kT} = 2 \\implies kT = \\ln 2 \\implies T = \\frac{\\ln 2}{k}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 1: Population Growth">
        <p>
          A bacterial population grows at a rate proportional to its size. If the population
          doubles every 3 hours and starts with 1000 bacteria, find the population after 8 hours.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          The population satisfies <InlineMath>{`P(t) = P_0 e^{kt}`}</InlineMath> with <InlineMath>{`P_0 = 1000`}</InlineMath>.
        </p>
        <p>
          The doubling time is 3 hours, so <InlineMath>{`k = \\frac{\\ln 2}{3}`}</InlineMath>.
        </p>
        <MathBlock>{`P(8) = 1000 \\cdot e^{(8 \\ln 2)/3} = 1000 \\cdot 2^{8/3} = 1000 \\cdot 2^{2.67} \\approx 6350.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Compound Interest">
        <p>
          If an investment earns interest at annual rate <InlineMath>{`r`}</InlineMath> compounded
          continuously, the value <InlineMath>{`A(t)`}</InlineMath> satisfies <InlineMath>{`A' = rA`}</InlineMath>.
        </p>
        <p>
          With initial investment <InlineMath>{`A_0`}</InlineMath>:
        </p>
        <MathBlock>{`A(t) = A_0 e^{rt}.`}</MathBlock>
        <p>
          For example, $1000 at 5% continuous interest for 10 years:
        </p>
        <MathBlock>{`A(10) = 1000 \\cdot e^{0.05 \\cdot 10} = 1000 \\cdot e^{0.5} \\approx \\$1648.72.`}</MathBlock>
      </Callout>

      <h2>Exponential Decay</h2>

      <Callout type="info" title="When k < 0">
        <p>
          When <InlineMath>{`k < 0`}</InlineMath>, write <InlineMath>{`k = -\\lambda`}</InlineMath> where
          <InlineMath>{`\\lambda > 0`}</InlineMath> is the <strong>decay constant</strong>. Then:
        </p>
        <MathBlock>{`y(t) = y_0 e^{-\\lambda t}.`}</MathBlock>
        <p>
          As <InlineMath>{`t \\to \\infty`}</InlineMath>, <InlineMath>{`y(t) \\to 0`}</InlineMath>—the quantity
          decreases toward zero but never quite reaches it.
        </p>
      </Callout>

      <Callout type="definition" title="Half-Life">
        <p>
          The <strong>half-life</strong> <InlineMath>{`T_{1/2}`}</InlineMath> is the time for a
          quantity to reduce to half its initial value:
        </p>
        <MathBlock>{`y_0 e^{-\\lambda T_{1/2}} = \\frac{y_0}{2} \\implies e^{-\\lambda T_{1/2}} = \\frac{1}{2}.`}</MathBlock>
        <p>Solving:</p>
        <MathBlock>{`T_{1/2} = \\frac{\\ln 2}{\\lambda}.`}</MathBlock>
        <p>
          Note: <InlineMath>{`T_{1/2}`}</InlineMath> is independent of the initial amount—it only
          depends on the decay constant.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Radioactive Decay">
        <p>
          Carbon-14 has a half-life of about 5730 years. If a sample initially contains
          100 grams of C-14, how much remains after 2000 years?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          From <InlineMath>{`T_{1/2} = \\frac{\\ln 2}{\\lambda}`}</InlineMath>, we get
          <InlineMath>{`\\lambda = \\frac{\\ln 2}{5730}`}</InlineMath>.
        </p>
        <MathBlock>{`y(2000) = 100 \\cdot e^{-(\\ln 2 / 5730) \\cdot 2000} = 100 \\cdot e^{-2000 \\ln 2 / 5730}`}</MathBlock>
        <MathBlock>{`= 100 \\cdot 2^{-2000/5730} = 100 \\cdot 2^{-0.349} \\approx 78.5 \\text{ grams}.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Carbon Dating">
        <p>
          A fossil contains 25% of the original C-14. How old is it?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          We need to find <InlineMath>{`t`}</InlineMath> such that <InlineMath>{`e^{-\\lambda t} = 0.25 = 1/4 = 2^{-2}`}</InlineMath>.
        </p>
        <MathBlock>{`e^{-\\lambda t} = 2^{-2} \\implies -\\lambda t = -2 \\ln 2 \\implies t = \\frac{2 \\ln 2}{\\lambda} = 2 T_{1/2}.`}</MathBlock>
        <p>
          So <InlineMath>{`t = 2 \\times 5730 = 11460`}</InlineMath> years.
        </p>
        <p>
          <em>Note:</em> After one half-life, 50% remains; after two half-lives, 25% remains.
        </p>
      </Callout>

      <h2>Important Limits</h2>

      <Callout type="theorem" title="Fundamental Limit">
        <p>For any constant <InlineMath>{`c`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{e^{cx} - 1}{x} = c.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Let <InlineMath>{`f(x) = e^{cx}`}</InlineMath>. Then <InlineMath>{`f'(0) = c \\cdot e^0 = c`}</InlineMath>.
          By the definition of derivative:
        </p>
        <MathBlock>{`f'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x} = \\lim_{x \\to 0} \\frac{e^{cx} - 1}{x} = c.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Exponential Bounds">
        <p>For all <InlineMath>{`x > 0`}</InlineMath>:</p>
        <MathBlock>{`e^x > 1 + x`}</MathBlock>
        <MathBlock>{`e^{-x} > 1 - x`}</MathBlock>
        <p>When <InlineMath>{`x = 0`}</InlineMath>, these become equalities.</p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Let <InlineMath>{`f(x) = e^x - 1 - x`}</InlineMath>. Then <InlineMath>{`f(0) = 0`}</InlineMath> and
          <InlineMath>{`f'(x) = e^x - 1`}</InlineMath>.
        </p>
        <ul>
          <li>
            For <InlineMath>{`x > 0`}</InlineMath>: <InlineMath>{`f'(x) = e^x - 1 > 0`}</InlineMath>,
            so <InlineMath>{`f`}</InlineMath> is increasing.
          </li>
          <li>
            For <InlineMath>{`x < 0`}</InlineMath>: <InlineMath>{`f'(x) = e^x - 1 < 0`}</InlineMath>,
            so <InlineMath>{`f`}</InlineMath> is decreasing.
          </li>
        </ul>
        <p>
          Since <InlineMath>{`f(0) = 0`}</InlineMath> and <InlineMath>{`f`}</InlineMath> increases for
          <InlineMath>{`x > 0`}</InlineMath>, we have <InlineMath>{`f(x) > 0`}</InlineMath> for
          <InlineMath>{`x > 0`}</InlineMath>, i.e., <InlineMath>{`e^x > 1 + x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Higher-Order Bounds">
        <p>By integrating the basic inequalities, for <InlineMath>{`x > 0`}</InlineMath>:</p>
        <MathBlock>{`e^x > 1 + x + \\frac{x^2}{2!}`}</MathBlock>
        <MathBlock>{`e^x > 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}`}</MathBlock>
        <p>
          In general, <InlineMath>{`e^x`}</InlineMath> exceeds every partial sum of its Taylor series.
        </p>
      </Callout>

      <h2>Integration Examples</h2>

      <Callout type="example" title="Example 5: Area Under Exponential Curve">
        <p>
          Evaluate <InlineMath>{`\\int_0^1 e^{2x} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^1 e^{2x} \\, dx = \\frac{1}{2} e^{2x} \\Big|_0^1 = \\frac{1}{2}(e^2 - 1) \\approx 3.195.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Improper Integral">
        <p>
          Evaluate <InlineMath>{`\\int_0^\\infty e^{-x} \\, dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^\\infty e^{-x} \\, dx = \\lim_{b \\to \\infty} \\int_0^b e^{-x} \\, dx = \\lim_{b \\to \\infty} \\left[-e^{-x}\\right]_0^b`}</MathBlock>
        <MathBlock>{`= \\lim_{b \\to \\infty} (-e^{-b} + 1) = 0 + 1 = 1.`}</MathBlock>
        <p>
          The total area under <InlineMath>{`y = e^{-x}`}</InlineMath> from <InlineMath>{`x = 0`}</InlineMath>
          to infinity is exactly 1.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Probability Application">
        <p>
          In probability, the exponential distribution has density <InlineMath>{`f(x) = \\lambda e^{-\\lambda x}`}</InlineMath>
          for <InlineMath>{`x \\geq 0`}</InlineMath>. Verify that <InlineMath>{`\\int_0^\\infty f(x) \\, dx = 1`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^\\infty \\lambda e^{-\\lambda x} \\, dx = \\lambda \\cdot \\frac{1}{\\lambda} = 1.`}</MathBlock>
      </Callout>

      <h2>Newton's Law of Cooling</h2>

      <Callout type="info" title="The Model">
        <p>
          Newton's law of cooling states that the rate of change of temperature of an object
          is proportional to the difference between its temperature and the ambient temperature:
        </p>
        <MathBlock>{`\\frac{dT}{dt} = -k(T - T_a),`}</MathBlock>
        <p>
          where <InlineMath>{`T_a`}</InlineMath> is the ambient temperature and <InlineMath>{`k > 0`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Solution">
        <p>
          Let <InlineMath>{`u = T - T_a`}</InlineMath>. Then <InlineMath>{`u' = T' = -ku`}</InlineMath>,
          so <InlineMath>{`u = u_0 e^{-kt}`}</InlineMath> where <InlineMath>{`u_0 = T_0 - T_a`}</InlineMath>.
        </p>
        <MathBlock>{`T(t) = T_a + (T_0 - T_a)e^{-kt}.`}</MathBlock>
        <p>
          As <InlineMath>{`t \\to \\infty`}</InlineMath>, <InlineMath>{`T(t) \\to T_a`}</InlineMath>—the object
          approaches ambient temperature.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          If <InlineMath>{`f'(x) = cf(x)`}</InlineMath> for all <InlineMath>{`x`}</InlineMath>, then
          <InlineMath>{`f(x) = Ke^{cx}`}</InlineMath> for some constant <InlineMath>{`K`}</InlineMath>.
        </li>
        <li>
          <strong>Exponential growth:</strong> <InlineMath>{`y = y_0 e^{kt}`}</InlineMath> with
          <InlineMath>{`k > 0`}</InlineMath>. Doubling time: <InlineMath>{`T = \\frac{\\ln 2}{k}`}</InlineMath>.
        </li>
        <li>
          <strong>Exponential decay:</strong> <InlineMath>{`y = y_0 e^{-\\lambda t}`}</InlineMath> with
          <InlineMath>{`\\lambda > 0`}</InlineMath>. Half-life: <InlineMath>{`T_{1/2} = \\frac{\\ln 2}{\\lambda}`}</InlineMath>.
        </li>
        <li>
          <strong>Applications:</strong> Population growth, compound interest, radioactive decay,
          carbon dating, Newton's law of cooling.
        </li>
        <li>
          <strong>Key limit:</strong> <InlineMath>{`\\lim_{x \\to 0} \\frac{e^{cx} - 1}{x} = c`}</InlineMath>.
        </li>
        <li>
          <strong>Bounds:</strong> <InlineMath>{`e^x > 1 + x`}</InlineMath> for <InlineMath>{`x > 0`}</InlineMath>.
        </li>
        <li>
          <strong>Improper integral:</strong> <InlineMath>{`\\int_0^\\infty e^{-x} \\, dx = 1`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
