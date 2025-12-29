import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          If <MathInline>{`z`}</MathInline> depends on <MathInline>{`y`}</MathInline> and <MathInline>{`y`}</MathInline>
          depends on time <MathInline>{`t`}</MathInline>, then the chain rule gives:
        </p>
        <MathBlock>{`\\frac{dz}{dt} = \\frac{dz}{dy} \\cdot \\frac{dy}{dt}`}</MathBlock>
        <p>
          The rate of change of <MathInline>{`z`}</MathInline> with respect to time equals the product
          of the rate of change of <MathInline>{`z`}</MathInline> with respect to <MathInline>{`y`}</MathInline>
          and the rate of change of <MathInline>{`y`}</MathInline> with respect to time.
        </p>
      </Callout>

      <h3>Strategy for Related Rates Problems</h3>
      <ol>
        <li><strong>Draw a diagram</strong> if appropriate</li>
        <li><strong>Identify the variables</strong> and their rates of change</li>
        <li><strong>Write an equation</strong> relating the variables</li>
        <li><strong>Differentiate</strong> both sides with respect to time <MathInline>{`t`}</MathInline></li>
        <li><strong>Substitute</strong> known values and solve for the unknown rate</li>
      </ol>

      <Callout type="example" title="Example 1: Expanding Balloon">
        <p>
          A gas is pumped into a spherical balloon at a constant rate of 50 cubic centimeters
          per second. How fast is the radius increasing when the radius is 5 cm?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`r`}</MathInline> = radius and <MathInline>{`V`}</MathInline> = volume at time
          <MathInline>{`t`}</MathInline>. We are given <MathInline>{`dV/dt = 50`}</MathInline> and want
          <MathInline>{`dr/dt`}</MathInline> when <MathInline>{`r = 5`}</MathInline>.
        </p>
        <p>The chain rule states:</p>
        <MathBlock>{`\\frac{dV}{dt} = \\frac{dV}{dr} \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>
          Since <MathInline>{`V = \\frac{4}{3}\\pi r^3`}</MathInline>, we have
          <MathInline>{`\\frac{dV}{dr} = 4\\pi r^2`}</MathInline>. Therefore:
        </p>
        <MathBlock>{`50 = 4\\pi r^2 \\cdot \\frac{dr}{dt}`}</MathBlock>
        <p>When <MathInline>{`r = 5`}</MathInline>:</p>
        <MathBlock>{`\\frac{dr}{dt} = \\frac{50}{4\\pi(25)} = \\frac{1}{2\\pi} \\text{ cm/sec}`}</MathBlock>
        <p>
          Note: We did not need to express <MathInline>{`r`}</MathInline> as an explicit function
          of <MathInline>{`t`}</MathInline>. This is what makes the chain rule so useful in
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
          Let <MathInline>{`s`}</MathInline> = edge length and <MathInline>{`V = s^3`}</MathInline> = volume.
          We have <MathInline>{`ds/dt = 1`}</MathInline> and want <MathInline>{`dV/dt`}</MathInline> when
          <MathInline>{`s = 5`}</MathInline>.
        </p>
        <MathBlock>{`\\frac{dV}{dt} = \\frac{dV}{ds} \\cdot \\frac{ds}{dt} = 3s^2 \\cdot \\frac{ds}{dt}`}</MathBlock>
        <p>When <MathInline>{`s = 5`}</MathInline> and <MathInline>{`ds/dt = 1`}</MathInline>:</p>
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
          Let <MathInline>{`x`}</MathInline> = distance from home plate along the third-base line,
          and let <MathInline>{`s`}</MathInline> = distance from first base. By the Pythagorean theorem:
        </p>
        <MathBlock>{`s^2 = x^2 + 90^2`}</MathBlock>
        <p>Differentiating with respect to <MathInline>{`t`}</MathInline>:</p>
        <MathBlock>{`2s \\frac{ds}{dt} = 2x \\frac{dx}{dt}`}</MathBlock>
        <p>
          When <MathInline>{`x = 45`}</MathInline> (halfway), we have
          <MathInline>{`s = \\sqrt{45^2 + 90^2} = \\sqrt{2025 + 8100} = \\sqrt{10125} = 45\\sqrt{5}`}</MathInline>.
        </p>
        <p>With <MathInline>{`dx/dt = 100`}</MathInline>:</p>
        <MathBlock>{`\\frac{ds}{dt} = \\frac{x}{s} \\cdot \\frac{dx}{dt} = \\frac{45}{45\\sqrt{5}} \\cdot 100 = \\frac{100}{\\sqrt{5}} = 20\\sqrt{5} \\approx 44.7 \\text{ ft/sec}`}</MathBlock>
      </Callout>

      <h2>Implicit Differentiation</h2>
      <p>
        Sometimes a relationship between <MathInline>{`x`}</MathInline> and <MathInline>{`y`}</MathInline>
        is given by an equation that is difficult or impossible to solve explicitly for
        <MathInline>{`y`}</MathInline>. The technique of <strong>implicit differentiation</strong>
        allows us to find <MathInline>{`dy/dx`}</MathInline> directly from such an equation.
      </p>

      <Callout type="definition" title="Implicit Differentiation">
        <p>
          An equation like <MathInline>{`x^2 + y^2 = r^2`}</MathInline> is said to define
          <MathInline>{`y`}</MathInline> <strong>implicitly</strong> as a function of <MathInline>{`x`}</MathInline>.
          To find <MathInline>{`dy/dx`}</MathInline>:
        </p>
        <ol>
          <li>Differentiate both sides with respect to <MathInline>{`x`}</MathInline></li>
          <li>Remember that <MathInline>{`y`}</MathInline> is a function of <MathInline>{`x`}</MathInline>,
              so use the chain rule when differentiating terms containing <MathInline>{`y`}</MathInline></li>
          <li>Solve for <MathInline>{`dy/dx`}</MathInline> (or <MathInline>{`y'`}</MathInline>)</li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 4: Circle">
        <p>
          The equation <MathInline>{`x^2 + y^2 = r^2`}</MathInline> defines a circle. Find
          <MathInline>{`dy/dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Differentiate both sides with respect to <MathInline>{`x`}</MathInline>. Remember that
          <MathInline>{`y`}</MathInline> is a function of <MathInline>{`x`}</MathInline>, so by the chain rule,
          <MathInline>{`\\frac{d}{dx}(y^2) = 2y \\cdot \\frac{dy}{dx}`}</MathInline>:
        </p>
        <MathBlock>{`2x + 2y \\frac{dy}{dx} = 0`}</MathBlock>
        <p>Solving for <MathInline>{`dy/dx`}</MathInline>:</p>
        <MathBlock>{`\\frac{dy}{dx} = -\\frac{x}{y} \\quad \\text{(provided } y \\neq 0\\text{)}`}</MathBlock>
        <p>
          <strong>Geometric interpretation:</strong> At a point <MathInline>{`(x, y)`}</MathInline>
          on the circle with <MathInline>{`x \\neq 0`}</MathInline> and <MathInline>{`y \\neq 0`}</MathInline>,
          the tangent line has slope <MathInline>{`-x/y`}</MathInline>, while the radius from the
          center to <MathInline>{`(x, y)`}</MathInline> has slope <MathInline>{`y/x`}</MathInline>. The
          product of these slopes is <MathInline>{`-1`}</MathInline>, confirming that the tangent
          is perpendicular to the radius.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Folium of Descartes">
        <p>
          The curve <MathInline>{`x^3 + y^3 = 6xy`}</MathInline> is called the folium of Descartes.
          Find <MathInline>{`dy/dx`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Differentiate both sides with respect to <MathInline>{`x`}</MathInline>:</p>
        <MathBlock>{`3x^2 + 3y^2 \\frac{dy}{dx} = 6y + 6x \\frac{dy}{dx}`}</MathBlock>
        <p>Collect terms with <MathInline>{`dy/dx`}</MathInline>:</p>
        <MathBlock>{`3y^2 \\frac{dy}{dx} - 6x \\frac{dy}{dx} = 6y - 3x^2`}</MathBlock>
        <MathBlock>{`(3y^2 - 6x) \\frac{dy}{dx} = 6y - 3x^2`}</MathBlock>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{6y - 3x^2}{3y^2 - 6x} = \\frac{2y - x^2}{y^2 - 2x}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Higher Derivatives">
        <p>
          Given <MathInline>{`x^2 + y^2 = r^2`}</MathInline>, find the second derivative
          <MathInline>{`d^2y/dx^2`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          We found that <MathInline>{`dy/dx = -x/y`}</MathInline>. Differentiating again:
        </p>
        <MathBlock>{`\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\left(-\\frac{x}{y}\\right) = -\\frac{y \\cdot 1 - x \\cdot \\frac{dy}{dx}}{y^2}`}</MathBlock>
        <p>Substitute <MathInline>{`dy/dx = -x/y`}</MathInline>:</p>
        <MathBlock>{`= -\\frac{y - x \\cdot (-x/y)}{y^2} = -\\frac{y + x^2/y}{y^2} = -\\frac{y^2 + x^2}{y^3} = -\\frac{r^2}{y^3}`}</MathBlock>
      </Callout>

      <h2>Deriving the Power Rule for Rational Exponents</h2>

      <Callout type="example" title="Example 7: Power Rule via Implicit Differentiation">
        <p>
          Use implicit differentiation to prove that if <MathInline>{`y = x^r`}</MathInline> where
          <MathInline>{`r = m/n`}</MathInline> is a rational number, then <MathInline>{`y' = rx^{r-1}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          If <MathInline>{`y = x^{m/n}`}</MathInline>, then <MathInline>{`y^n = x^m`}</MathInline>.
          Differentiating implicitly:
        </p>
        <MathBlock>{`ny^{n-1} \\frac{dy}{dx} = mx^{m-1}`}</MathBlock>
        <p>Solving for <MathInline>{`dy/dx`}</MathInline>:</p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{mx^{m-1}}{ny^{n-1}} = \\frac{m}{n} \\cdot \\frac{x^{m-1}}{y^{n-1}}`}</MathBlock>
        <p>
          Since <MathInline>{`y = x^{m/n}`}</MathInline>, we have
          <MathInline>{`y^{n-1} = x^{(m/n)(n-1)} = x^{m - m/n}`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{dy}{dx} = \\frac{m}{n} \\cdot x^{m-1} \\cdot x^{-(m - m/n)} = \\frac{m}{n} \\cdot x^{m-1-m+m/n} = \\frac{m}{n} x^{m/n - 1} = rx^{r-1}`}</MathBlock>
      </Callout>

      <h2>When to Use Each Technique</h2>

      <Callout type="info" title="Related Rates vs. Implicit Differentiation">
        <p><strong>Related Rates:</strong></p>
        <ul>
          <li>Used when quantities change <em>with respect to time</em></li>
          <li>Differentiate with respect to <MathInline>{`t`}</MathInline></li>
          <li>Apply chain rule: <MathInline>{`\\frac{d}{dt}[f(x)] = f'(x) \\cdot \\frac{dx}{dt}`}</MathInline></li>
        </ul>

        <p><strong>Implicit Differentiation:</strong></p>
        <ul>
          <li>Used when <MathInline>{`y`}</MathInline> is defined implicitly by an equation</li>
          <li>Differentiate with respect to <MathInline>{`x`}</MathInline></li>
          <li>Apply chain rule: <MathInline>{`\\frac{d}{dx}[f(y)] = f'(y) \\cdot \\frac{dy}{dx}`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Related rates</strong> problems use the chain rule to connect rates of
          change of related quantities with respect to time.
        </li>
        <li>
          Key formula: <MathInline>{`\\frac{dz}{dt} = \\frac{dz}{dy} \\cdot \\frac{dy}{dt}`}</MathInline>
        </li>
        <li>
          <strong>Implicit differentiation</strong> allows us to find <MathInline>{`dy/dx`}</MathInline>
          directly from an equation <MathInline>{`F(x, y) = 0`}</MathInline> without solving for
          <MathInline>{`y`}</MathInline>.
        </li>
        <li>
          When differentiating implicitly, treat <MathInline>{`y`}</MathInline> as a function of
          <MathInline>{`x`}</MathInline> and apply the chain rule to terms containing <MathInline>{`y`}</MathInline>.
        </li>
        <li>
          Both techniques rely fundamentally on the <strong>chain rule</strong> from Section 30.
        </li>
      </ul>
    </LessonLayout>
  );
}
