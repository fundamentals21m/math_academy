import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          Let <MathInline>{`f`}</MathInline> be a differentiable function satisfying:
        </p>
        <MathBlock>{`f'(x) = c \\cdot f(x) \\quad \\text{for all } x,`}</MathBlock>
        <p>
          where <MathInline>{`c`}</MathInline> is a constant. Then there exists a constant
          <MathInline>{`K`}</MathInline> such that:
        </p>
        <MathBlock>{`f(x) = K e^{cx} \\quad \\text{for all } x.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Consider <MathInline>{`g(x) = f(x) e^{-cx}`}</MathInline>. By the product rule:
        </p>
        <MathBlock>{`g'(x) = f'(x) e^{-cx} + f(x) \\cdot (-c) e^{-cx} = e^{-cx}[f'(x) - cf(x)] = 0.`}</MathBlock>
        <p>
          Since <MathInline>{`g'(x) = 0`}</MathInline> for all <MathInline>{`x`}</MathInline>, the function
          <MathInline>{`g`}</MathInline> is constant: <MathInline>{`g(x) = K`}</MathInline> for some constant <MathInline>{`K`}</MathInline>.
        </p>
        <p>
          Therefore <MathInline>{`f(x) e^{-cx} = K`}</MathInline>, giving <MathInline>{`f(x) = Ke^{cx}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Physical Interpretation">
        <p>
          The equation <MathInline>{`y' = ky`}</MathInline> says the <em>rate of change</em> of
          <MathInline>{`y`}</MathInline> is proportional to <MathInline>{`y`}</MathInline> itself. This
          models many natural phenomena:
        </p>
        <ul>
          <li>
            <strong>If <MathInline>{`k > 0`}</MathInline>:</strong> Exponential growth—the larger
            the quantity, the faster it grows.
          </li>
          <li>
            <strong>If <MathInline>{`k < 0`}</MathInline>:</strong> Exponential decay—the quantity
            decreases at a rate proportional to its size.
          </li>
        </ul>
      </Callout>

      <h2>The Law of Exponential Change</h2>

      <Callout type="theorem" title="Solution to y' = ky">
        <p>
          If <MathInline>{`y(0) = y_0`}</MathInline> (the initial value) and <MathInline>{`y' = ky`}</MathInline>,
          then:
        </p>
        <MathBlock>{`y(t) = y_0 e^{kt}.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Derivation">
        <p>
          From the characterization theorem, <MathInline>{`y(t) = Ke^{kt}`}</MathInline> for some
          constant <MathInline>{`K`}</MathInline>. Setting <MathInline>{`t = 0`}</MathInline>:
        </p>
        <MathBlock>{`y_0 = y(0) = Ke^{0} = K.`}</MathBlock>
        <p>
          Therefore <MathInline>{`K = y_0`}</MathInline>, giving <MathInline>{`y(t) = y_0 e^{kt}`}</MathInline>.
        </p>
      </Callout>

      <h2>Exponential Growth</h2>

      <Callout type="info" title="When k > 0">
        <p>
          When the growth constant <MathInline>{`k`}</MathInline> is positive, the function
          <MathInline>{`y = y_0 e^{kt}`}</MathInline> increases without bound as <MathInline>{`t \\to \\infty`}</MathInline>.
        </p>
        <p>
          <strong>Doubling time:</strong> The time <MathInline>{`T`}</MathInline> for the quantity
          to double satisfies <MathInline>{`y_0 e^{kT} = 2y_0`}</MathInline>, so:
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
          The population satisfies <MathInline>{`P(t) = P_0 e^{kt}`}</MathInline> with <MathInline>{`P_0 = 1000`}</MathInline>.
        </p>
        <p>
          The doubling time is 3 hours, so <MathInline>{`k = \\frac{\\ln 2}{3}`}</MathInline>.
        </p>
        <MathBlock>{`P(8) = 1000 \\cdot e^{(8 \\ln 2)/3} = 1000 \\cdot 2^{8/3} = 1000 \\cdot 2^{2.67} \\approx 6350.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Compound Interest">
        <p>
          If an investment earns interest at annual rate <MathInline>{`r`}</MathInline> compounded
          continuously, the value <MathInline>{`A(t)`}</MathInline> satisfies <MathInline>{`A' = rA`}</MathInline>.
        </p>
        <p>
          With initial investment <MathInline>{`A_0`}</MathInline>:
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
          When <MathInline>{`k < 0`}</MathInline>, write <MathInline>{`k = -\\lambda`}</MathInline> where
          <MathInline>{`\\lambda > 0`}</MathInline> is the <strong>decay constant</strong>. Then:
        </p>
        <MathBlock>{`y(t) = y_0 e^{-\\lambda t}.`}</MathBlock>
        <p>
          As <MathInline>{`t \\to \\infty`}</MathInline>, <MathInline>{`y(t) \\to 0`}</MathInline>—the quantity
          decreases toward zero but never quite reaches it.
        </p>
      </Callout>

      <Callout type="definition" title="Half-Life">
        <p>
          The <strong>half-life</strong> <MathInline>{`T_{1/2}`}</MathInline> is the time for a
          quantity to reduce to half its initial value:
        </p>
        <MathBlock>{`y_0 e^{-\\lambda T_{1/2}} = \\frac{y_0}{2} \\implies e^{-\\lambda T_{1/2}} = \\frac{1}{2}.`}</MathBlock>
        <p>Solving:</p>
        <MathBlock>{`T_{1/2} = \\frac{\\ln 2}{\\lambda}.`}</MathBlock>
        <p>
          Note: <MathInline>{`T_{1/2}`}</MathInline> is independent of the initial amount—it only
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
          From <MathInline>{`T_{1/2} = \\frac{\\ln 2}{\\lambda}`}</MathInline>, we get
          <MathInline>{`\\lambda = \\frac{\\ln 2}{5730}`}</MathInline>.
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
          We need to find <MathInline>{`t`}</MathInline> such that <MathInline>{`e^{-\\lambda t} = 0.25 = 1/4 = 2^{-2}`}</MathInline>.
        </p>
        <MathBlock>{`e^{-\\lambda t} = 2^{-2} \\implies -\\lambda t = -2 \\ln 2 \\implies t = \\frac{2 \\ln 2}{\\lambda} = 2 T_{1/2}.`}</MathBlock>
        <p>
          So <MathInline>{`t = 2 \\times 5730 = 11460`}</MathInline> years.
        </p>
        <p>
          <em>Note:</em> After one half-life, 50% remains; after two half-lives, 25% remains.
        </p>
      </Callout>

      <h2>Important Limits</h2>

      <Callout type="theorem" title="Fundamental Limit">
        <p>For any constant <MathInline>{`c`}</MathInline>:</p>
        <MathBlock>{`\\lim_{x \\to 0} \\frac{e^{cx} - 1}{x} = c.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Let <MathInline>{`f(x) = e^{cx}`}</MathInline>. Then <MathInline>{`f'(0) = c \\cdot e^0 = c`}</MathInline>.
          By the definition of derivative:
        </p>
        <MathBlock>{`f'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x} = \\lim_{x \\to 0} \\frac{e^{cx} - 1}{x} = c.`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Exponential Bounds">
        <p>For all <MathInline>{`x > 0`}</MathInline>:</p>
        <MathBlock>{`e^x > 1 + x`}</MathBlock>
        <MathBlock>{`e^{-x} > 1 - x`}</MathBlock>
        <p>When <MathInline>{`x = 0`}</MathInline>, these become equalities.</p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Let <MathInline>{`f(x) = e^x - 1 - x`}</MathInline>. Then <MathInline>{`f(0) = 0`}</MathInline> and
          <MathInline>{`f'(x) = e^x - 1`}</MathInline>.
        </p>
        <ul>
          <li>
            For <MathInline>{`x > 0`}</MathInline>: <MathInline>{`f'(x) = e^x - 1 > 0`}</MathInline>,
            so <MathInline>{`f`}</MathInline> is increasing.
          </li>
          <li>
            For <MathInline>{`x < 0`}</MathInline>: <MathInline>{`f'(x) = e^x - 1 < 0`}</MathInline>,
            so <MathInline>{`f`}</MathInline> is decreasing.
          </li>
        </ul>
        <p>
          Since <MathInline>{`f(0) = 0`}</MathInline> and <MathInline>{`f`}</MathInline> increases for
          <MathInline>{`x > 0`}</MathInline>, we have <MathInline>{`f(x) > 0`}</MathInline> for
          <MathInline>{`x > 0`}</MathInline>, i.e., <MathInline>{`e^x > 1 + x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Higher-Order Bounds">
        <p>By integrating the basic inequalities, for <MathInline>{`x > 0`}</MathInline>:</p>
        <MathBlock>{`e^x > 1 + x + \\frac{x^2}{2!}`}</MathBlock>
        <MathBlock>{`e^x > 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!}`}</MathBlock>
        <p>
          In general, <MathInline>{`e^x`}</MathInline> exceeds every partial sum of its Taylor series.
        </p>
      </Callout>

      <h2>Integration Examples</h2>

      <Callout type="example" title="Example 5: Area Under Exponential Curve">
        <p>
          Evaluate <MathInline>{`\\int_0^1 e^{2x} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^1 e^{2x} \\, dx = \\frac{1}{2} e^{2x} \\Big|_0^1 = \\frac{1}{2}(e^2 - 1) \\approx 3.195.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Improper Integral">
        <p>
          Evaluate <MathInline>{`\\int_0^\\infty e^{-x} \\, dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_0^\\infty e^{-x} \\, dx = \\lim_{b \\to \\infty} \\int_0^b e^{-x} \\, dx = \\lim_{b \\to \\infty} \\left[-e^{-x}\\right]_0^b`}</MathBlock>
        <MathBlock>{`= \\lim_{b \\to \\infty} (-e^{-b} + 1) = 0 + 1 = 1.`}</MathBlock>
        <p>
          The total area under <MathInline>{`y = e^{-x}`}</MathInline> from <MathInline>{`x = 0`}</MathInline>
          to infinity is exactly 1.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Probability Application">
        <p>
          In probability, the exponential distribution has density <MathInline>{`f(x) = \\lambda e^{-\\lambda x}`}</MathInline>
          for <MathInline>{`x \\geq 0`}</MathInline>. Verify that <MathInline>{`\\int_0^\\infty f(x) \\, dx = 1`}</MathInline>.
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
          where <MathInline>{`T_a`}</MathInline> is the ambient temperature and <MathInline>{`k > 0`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Solution">
        <p>
          Let <MathInline>{`u = T - T_a`}</MathInline>. Then <MathInline>{`u' = T' = -ku`}</MathInline>,
          so <MathInline>{`u = u_0 e^{-kt}`}</MathInline> where <MathInline>{`u_0 = T_0 - T_a`}</MathInline>.
        </p>
        <MathBlock>{`T(t) = T_a + (T_0 - T_a)e^{-kt}.`}</MathBlock>
        <p>
          As <MathInline>{`t \\to \\infty`}</MathInline>, <MathInline>{`T(t) \\to T_a`}</MathInline>—the object
          approaches ambient temperature.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          If <MathInline>{`f'(x) = cf(x)`}</MathInline> for all <MathInline>{`x`}</MathInline>, then
          <MathInline>{`f(x) = Ke^{cx}`}</MathInline> for some constant <MathInline>{`K`}</MathInline>.
        </li>
        <li>
          <strong>Exponential growth:</strong> <MathInline>{`y = y_0 e^{kt}`}</MathInline> with
          <MathInline>{`k > 0`}</MathInline>. Doubling time: <MathInline>{`T = \\frac{\\ln 2}{k}`}</MathInline>.
        </li>
        <li>
          <strong>Exponential decay:</strong> <MathInline>{`y = y_0 e^{-\\lambda t}`}</MathInline> with
          <MathInline>{`\\lambda > 0`}</MathInline>. Half-life: <MathInline>{`T_{1/2} = \\frac{\\ln 2}{\\lambda}`}</MathInline>.
        </li>
        <li>
          <strong>Applications:</strong> Population growth, compound interest, radioactive decay,
          carbon dating, Newton's law of cooling.
        </li>
        <li>
          <strong>Key limit:</strong> <MathInline>{`\\lim_{x \\to 0} \\frac{e^{cx} - 1}{x} = c`}</MathInline>.
        </li>
        <li>
          <strong>Bounds:</strong> <MathInline>{`e^x > 1 + x`}</MathInline> for <MathInline>{`x > 0`}</MathInline>.
        </li>
        <li>
          <strong>Improper integral:</strong> <MathInline>{`\\int_0^\\infty e^{-x} \\, dx = 1`}</MathInline>.
        </li>
      </ul>
    </LessonLayout>
  );
}
