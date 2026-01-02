import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <p>
        The chain rule provides powerful tools for solving problems where several quantities
        are changing with respect to time and we want to determine how their rates of change
        are related. These are called <strong>related rates</strong> problems. The chain rule
        also enables a technique called <strong>implicit differentiation</strong>, which allows
        us to find derivatives without explicitly solving for one variable in terms of another.
      </p>

      <h2>Related Rates</h2>
      <p>
        In many applications, several quantities depend on time, and these quantities are
        connected by some equation. The chain rule allows us to relate their rates of change.
      </p>

      <Callout type="info" title="The Key Idea">
        <p>
          If <InlineMath>{`z`}</InlineMath> depends on <InlineMath>{`y`}</InlineMath> and <InlineMath>{`y`}</InlineMath>
          depends on time <InlineMath>{`t`}</InlineMath>, then the chain rule gives:
        </p>
        <MathBlock>{`\\frac{dz}{dt} = \\frac{dz}{dy} \\cdot \\frac{dy}{dt}`}</MathBlock>
        <p>
          The rate of change of <InlineMath>{`z`}</InlineMath> with respect to time equals the product
          of the rate of change of <InlineMath>{`z`}</InlineMath> with respect to <InlineMath>{`y`}</InlineMath>
          and the rate of change of <InlineMath>{`y`}</InlineMath> with respect to time.
        </p>
      </Callout>

      <h3>Strategy for Related Rates Problems</h3>
      <ol>
        <li><strong>Draw a diagram</strong> if appropriate</li>
        <li><strong>Identify the variables</strong> and their rates of change</li>
        <li><strong>Write an equation</strong> relating the variables</li>
        <li><strong>Differentiate</strong> both sides with respect to time <InlineMath>{`t`}</InlineMath></li>
        <li><strong>Substitute</strong> known values and solve for the unknown rate</li>
      </ol>

      <Callout type="example" title="Example 1: Expanding Balloon">
        <p>
          A gas is pumped into a spherical balloon at a constant rate of 50 cubic centimeters
          per second. How fast is the radius increasing when the radius is 5 cm?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`r`}</InlineMath> = radius and <InlineMath>{`V`}</InlineMath> = volume at time
          <InlineMath>{`t`}</InlineMath>. We are given <InlineMath>{`dV/dt = 50`}</InlineMath> and want
          <InlineMath>{`dr/dt`}</InlineMath> when <InlineMath>{`r = 5`}</InlineMath>.
        </p>
        <p>The chain rule states:</p>
        <MathBlock>{`\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>
          Since <InlineMath>{`V = \\frac{4}{3}\\pi r^3`}</InlineMath>, we have
          <InlineMath>{`\\frac{dV}{dr} = 4\\pi r^2`}</InlineMath>. Therefore:
        </p>
        <MathBlock>{`50 = 4\\pi r^2 \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>When <InlineMath>{`r = 5`}</InlineMath>:</p>
        <MathBlock>{`\\frac{dr}{dt} = \\frac{50}{4\\pi(25)} = \\frac{1}{2\\pi} \\text{ cm/sec}`}</MathBlock>
        <p>
          Note: We did not need to express <InlineMath>{`r`}</InlineMath> as an explicit function
          of <InlineMath>{`t`}</InlineMath>. This is what makes the chain rule so useful in
          related rates problems.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Expanding Cube">
        <p>
          Each edge of a cube is expanding at a rate of 1 cm per second. How fast is the
          volume changing when each edge is 5 cm?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`s`}</InlineMath> = edge length and <InlineMath>{`V = s^3`}</InlineMath> = volume.
          We have <InlineMath>{`ds/dt = 1`}</InlineMath> and want <InlineMath>{`dV/dt`}</InlineMath> when
          <InlineMath>{`s = 5`}</InlineMath>.
        </p>
        <MathBlock>{`\\frac{dV}{dt} = \\frac{dV}{ds} \\cdot \\frac{ds}{dt} = 3s^2 \\cdot \\frac{ds}{dt}`}</MathBlock>
        <p>When <InlineMath>{`s = 5`}</InlineMath> and <InlineMath>{`ds/dt = 1`}</InlineMath>:</p>
        <MathBlock>{`\\frac{dV}{dt} = 3(25)(1) = 75 \\text{ cm}^3/\\text{sec}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Baseball Diamond">
        <p>
          A baseball diamond is a 90-foot square. A ball is batted along the third-base line
          at a constant speed of 100 ft/sec. How fast is its distance from first base changing
          when it is halfway to third base?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`x`}</InlineMath> = distance from home plate along the third-base line,
          and let <InlineMath>{`s`}</InlineMath> = distance from first base. By the Pythagorean theorem:
        </p>
        <MathBlock>{`s^2 = x^2 + 90^2`}</MathBlock>
        <p>Differentiating with respect to <InlineMath>{`t`}</InlineMath>:</p>
        <MathBlock>{`2s \\frac{ds}{dt} = 2x \\frac{dx}{dt}`}</MathBlock>
        <p>
          When <InlineMath>{`x = 45`}</InlineMath> (halfway), we have
          <InlineMath>{`s = \\sqrt{45^2 + 90^2} = \\sqrt{2025 + 8100} = \\sqrt{10125} = 45\\sqrt{5}`}</InlineMath>.
        </p>
        <p>With <InlineMath>{`dx/dt = 100`}</InlineMath>:</p>
        <MathBlock>{`\\frac{ds}{dt} = \\frac{x}{s} \\cdot \\frac{dx}{dt} = \\frac{45}{45\\sqrt{5}} \\cdot 100 = \\frac{100}{\\sqrt{5}} = 20\\sqrt{5} \\approx 44.7 \\text{ ft/sec}`}</MathBlock>
      </Callout>

      <h2>Implicit Differentiation</h2>
      <p>
        Sometimes a relationship between <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath>
        is given by an equation that is difficult or impossible to solve explicitly for
        <InlineMath>{`y`}</InlineMath>. The technique of <strong>implicit differentiation</strong>
        allows us to find <InlineMath>{`dy/dx`}</InlineMath> directly from such an equation.
      </p>

      <Callout type="definition" title="Implicit Differentiation">
        <p>
          An equation like <InlineMath>{`x^2 + y^2 = r^2`}</InlineMath> is said to define
          <InlineMath>{`y`}</InlineMath> <strong>implicitly</strong> as a function of <InlineMath>{`x`}</InlineMath>.
          To find <InlineMath>{`dy/dx`}</InlineMath>:
        </p>
        <ol>
          <li>Differentiate both sides with respect to <InlineMath>{`x`}</InlineMath></li>
          <li>Remember that <InlineMath>{`y`}</InlineMath> is a function of <InlineMath>{`x`}</InlineMath>,
              so use the chain rule when differentiating terms containing <InlineMath>{`y`}</InlineMath></li>
          <li>Solve for <InlineMath>{`dy/dx`}</InlineMath> (or <InlineMath>{`y'`}</InlineMath>)</li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 4: Circle">
        <p>
          The equation <InlineMath>{`x^2 + y^2 = r^2`}</InlineMath> defines a circle. Find
          <InlineMath>{`dy/dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Differentiate both sides with respect to <InlineMath>{`x`}</InlineMath>. Remember that
          <InlineMath>{`y`}</InlineMath> is a function of <InlineMath>{`x`}</InlineMath>, so by the chain rule,
          <InlineMath>{`\\frac{d}{dx}(y^2) = 2y \\cdot \\frac{dy}{dx}`}</InlineMath>:
        </p>
        <MathBlock>{`2x + 2y \\frac{dy}{dx} = 0`}</MathBlock>
        <p>Solving for <InlineMath>{`dy/dx`}</InlineMath>:</p>
        <MathBlock>{`\\frac{dy}{dx} = -\\frac{x}{y} \\quad \\text{(provided } y \\neq 0\\text{)}`}</MathBlock>
        <p>
          <strong>Geometric interpretation:</strong> At a point <InlineMath>{`(x, y)`}</InlineMath>
          on the circle with <InlineMath>{`x \\neq 0`}</InlineMath> and <InlineMath>{`y \\neq 0`}</InlineMath>,
          the tangent line has slope <InlineMath>{`-x/y`}</InlineMath>, while the radius from the
          center to <InlineMath>{`(x, y)`}</InlineMath> has slope <InlineMath>{`y/x`}</InlineMath>. The
          product of these slopes is <InlineMath>{`-1`}</InlineMath>, confirming that the tangent
          is perpendicular to the radius.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Folium of Descartes">
        <p>
          The curve <InlineMath>{`x^3 + y^3 = 6xy`}</InlineMath> is called the folium of Descartes.
          Find <InlineMath>{`dy/dx`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Differentiate both sides with respect to <InlineMath>{`x`}</InlineMath>:</p>
        <MathBlock>{`3x^2 + 3y^2 \\frac{dy}{dx} = 6y + 6x \\frac{dy}{dx}`}</MathBlock>
        <p>Collect terms with <InlineMath>{`dy/dx`}</InlineMath>:</p>
        <MathBlock>{`3y^2 \\frac{dy}{dx} - 6x \\frac{dy}{dx} = 6y - 3x^2`}</MathBlock>
        <MathBlock>{`(3y^2 - 6x) \\frac{dy}{dx} = 6y - 3x^2`}</MathBlock>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Higher Derivatives">
        <p>
          Given <InlineMath>{`x^2 + y^2 = r^2`}</InlineMath>, find the second derivative
          <InlineMath>{`d^2y/dx^2`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          We found that <InlineMath>{`dy/dx = -x/y`}</InlineMath>. Differentiating again:
        </p>
        <MathBlock>{`\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(-\\frac{x}{y}\\right) = -\\frac{y \\cdot 1 - x \\cdot \\frac{dy}{dx}}{y^2}`}</MathBlock>
        <p>Substitute <InlineMath>{`dy/dx = -x/y`}</InlineMath>:</p>
        <MathBlock>{`= -\\frac{y - x \\cdot (-x/y)}{y^2} = -\\frac{y + x^2/y}{y^2} = -\\frac{y^2 + x^2}{y^3} = -\\frac{r^2}{y^3}`}</MathBlock>
      </Callout>

      <h2>Deriving the Power Rule for Rational Exponents</h2>

      <Callout type="example" title="Example 7: Power Rule via Implicit Differentiation">
        <p>
          Use implicit differentiation to prove that if <InlineMath>{`y = x^r`}</InlineMath> where
          <InlineMath>{`r = m/n`}</InlineMath> is a rational number, then <InlineMath>{`y' = rx^{r-1}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          If <InlineMath>{`y = x^{m/n}`}</InlineMath>, then <InlineMath>{`y^n = x^m`}</InlineMath>.
          Differentiating implicitly:
        </p>
        <MathBlock>{`ny^{n-1} \\frac{dy}{dx} = mx^{m-1}`}</MathBlock>
        <p>Solving for <InlineMath>{`dy/dx`}</InlineMath>:</p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{mx^{m-1}}{ny^{n-1}} = \\frac{m}{n} \\cdot \\frac{x^{m-1}}{y^{n-1}}`}</MathBlock>
        <p>
          Since <InlineMath>{`y = x^{m/n}`}</InlineMath>, we have
          <InlineMath>{`y^{n-1} = x^{(m/n)(n-1)} = x^{m - m/n}`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{m}{n} \\cdot x^{m-1} \\cdot x^{-(m - m/n)} = \\frac{m}{n} \\cdot x^{m-1-m+m/n} = \\frac{m}{n} x^{m/n - 1} = rx^{r-1}`}</MathBlock>
      </Callout>

      <h2>When to Use Each Technique</h2>

      <Callout type="info" title="Related Rates vs. Implicit Differentiation">
        <p><strong>Related Rates:</strong></p>
        <ul>
          <li>Used when quantities change <em>with respect to time</em></li>
          <li>Differentiate with respect to <InlineMath>{`t`}</InlineMath></li>
          <li>Apply chain rule: <InlineMath>{`\\frac{d}{dt}[f(x)] = f'(x) \\cdot \\frac{dx}{dt}`}</InlineMath></li>
        </ul>

        <p><strong>Implicit Differentiation:</strong></p>
        <ul>
          <li>Used when <InlineMath>{`y`}</InlineMath> is defined implicitly by an equation</li>
          <li>Differentiate with respect to <InlineMath>{`x`}</InlineMath></li>
          <li>Apply chain rule: <InlineMath>{`\\frac{d}{dx}[f(y)] = f'(y) \\cdot \\frac{dy}{dx}`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Related rates</strong> problems use the chain rule to connect rates of
          change of related quantities with respect to time.
        </li>
        <li>
          Key formula: <InlineMath>{`\\frac{dz}{dt} = \\frac{dz}{dy} \\cdot \\frac{dy}{dt}`}</InlineMath>
        </li>
        <li>
          <strong>Implicit differentiation</strong> allows us to find <InlineMath>{`dy/dx`}</InlineMath>
          directly from an equation <InlineMath>{`F(x, y) = 0`}</InlineMath> without solving for
          <InlineMath>{`y`}</InlineMath>.
        </li>
        <li>
          When differentiating implicitly, treat <InlineMath>{`y`}</InlineMath> as a function of
          <InlineMath>{`x`}</InlineMath> and apply the chain rule to terms containing <InlineMath>{`y`}</InlineMath>.
        </li>
        <li>
          Both techniques rely fundamentally on the <strong>chain rule</strong> from Section 30.
        </li>
      </ul>
    </LessonLayout>
  );
}
