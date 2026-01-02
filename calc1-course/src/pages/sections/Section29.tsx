import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <p>
        The procedure used to define the derivative has a geometric interpretation which leads
        in a natural way to the idea of a <strong>tangent line</strong> to a curve. This
        interpretation gives visual meaning to the abstract limit definition.
      </p>

      <h2>The Difference Quotient as Slope</h2>
      <p>
        Consider the graph of a function <InlineMath>{`f`}</InlineMath> with two points
        <InlineMath>{`P`}</InlineMath> and <InlineMath>{`Q`}</InlineMath> having coordinates
        <InlineMath>{`(x, f(x))`}</InlineMath> and <InlineMath>{`(x + h, f(x + h))`}</InlineMath>,
        respectively. The line through <InlineMath>{`P`}</InlineMath> and <InlineMath>{`Q`}</InlineMath>
        is called a <strong>secant line</strong>.
      </p>

      <p>
        Consider the right triangle with hypotenuse <InlineMath>{`PQ`}</InlineMath>. Its vertical
        leg has length <InlineMath>{`f(x + h) - f(x)`}</InlineMath>, representing the change in
        <InlineMath>{`y`}</InlineMath>-values. The horizontal leg has length <InlineMath>{`h`}</InlineMath>.
        Therefore, the difference quotient:
      </p>

      <MathBlock>{`\\frac{f(x + h) - f(x)}{h}`}</MathBlock>

      <p>
        represents the trigonometric tangent of the angle <InlineMath>{`\\alpha`}</InlineMath> that
        the line <InlineMath>{`PQ`}</InlineMath> makes with the horizontal.
      </p>

      <Callout type="definition" title="Slope of a Line">
        <p>
          The real number <InlineMath>{`\\tan \\alpha`}</InlineMath> is called the <strong>slope</strong>
          of the line through <InlineMath>{`P`}</InlineMath> and <InlineMath>{`Q`}</InlineMath>, and it
          provides a way of measuring the "steepness" of this line.
        </p>
        <p>
          For a linear function <InlineMath>{`f(x) = mx + b`}</InlineMath>, the difference quotient
          always equals <InlineMath>{`m`}</InlineMath>, so <InlineMath>{`m`}</InlineMath> is the slope of
          the line.
        </p>
      </Callout>

      <h2>Understanding Slope Values</h2>
      <p>
        The value of the slope tells us about the direction and steepness of a line:
      </p>
      <ul>
        <li>
          <strong>Horizontal line</strong> (<InlineMath>{`\\alpha = 0`}</InlineMath>): The slope is
          <InlineMath>{`\\tan 0 = 0`}</InlineMath>.
        </li>
        <li>
          <strong>Rising line</strong> (<InlineMath>{`0 < \\alpha < \\pi/2`}</InlineMath>): The slope
          is <em>positive</em>. The line rises as we move from left to right.
        </li>
        <li>
          <strong>Falling line</strong> (<InlineMath>{`\\pi/2 < \\alpha < \\pi`}</InlineMath>): The
          slope is <em>negative</em>. The line falls as we move from left to right.
        </li>
        <li>
          <strong>Slope 1</strong> (<InlineMath>{`\\alpha = \\pi/4`}</InlineMath>): The line makes a
          45° angle with the horizontal.
        </li>
        <li>
          <strong>Vertical line</strong> (<InlineMath>{`\\alpha = \\pi/2`}</InlineMath>): Since
          <InlineMath>{`\\tan(\\pi/2)`}</InlineMath> is undefined, we say vertical lines have
          <em>no slope</em>.
        </li>
      </ul>

      <h2>The Tangent Line</h2>
      <p>
        Suppose <InlineMath>{`f`}</InlineMath> has a derivative at <InlineMath>{`x`}</InlineMath>. This
        means that the difference quotient approaches the limit <InlineMath>{`f'(x)`}</InlineMath>
        as <InlineMath>{`h \\to 0`}</InlineMath>. When interpreted geometrically:
      </p>
      <ul>
        <li>As <InlineMath>{`h`}</InlineMath> gets closer to 0, the point <InlineMath>{`P`}</InlineMath> remains fixed</li>
        <li><InlineMath>{`Q`}</InlineMath> moves along the curve toward <InlineMath>{`P`}</InlineMath></li>
        <li>The secant line through <InlineMath>{`PQ`}</InlineMath> rotates, approaching a limiting position</li>
        <li>The slope of this secant line approaches <InlineMath>{`f'(x)`}</InlineMath></li>
      </ul>

      <Callout type="definition" title="Slope of a Curve and Tangent Line">
        <p>
          The <strong>slope of the curve</strong> at point <InlineMath>{`P = (x, f(x))`}</InlineMath>
          is defined to be the number <InlineMath>{`f'(x)`}</InlineMath>.
        </p>
        <p>
          The line through <InlineMath>{`P`}</InlineMath> having slope <InlineMath>{`f'(x)`}</InlineMath>
          is called the <strong>tangent line</strong> to the curve at <InlineMath>{`P`}</InlineMath>.
        </p>
      </Callout>

      <h2>Equation of the Tangent Line</h2>
      <p>
        At a point <InlineMath>{`(a, f(a))`}</InlineMath> on the graph where the derivative exists,
        the tangent line has slope <InlineMath>{`f'(a)`}</InlineMath>. Using the point-slope form
        of a line:
      </p>

      <Callout type="info" title="Tangent Line Equation">
        <p>
          The equation of the tangent line to <InlineMath>{`y = f(x)`}</InlineMath> at the point
          <InlineMath>{`(a, f(a))`}</InlineMath> is:
        </p>
        <MathBlock>{`y - f(a) = f'(a)(x - a)`}</MathBlock>
        <p>or equivalently:</p>
        <MathBlock>{`y = f(a) + f'(a)(x - a)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Tangent to a Parabola">
        <p>
          Find the equation of the tangent line to <InlineMath>{`f(x) = x^2`}</InlineMath> at the
          point <InlineMath>{`(2, 4)`}</InlineMath>.
        </p>
        <p>
          <strong>Solution:</strong> We have <InlineMath>{`f'(x) = 2x`}</InlineMath>, so
          <InlineMath>{`f'(2) = 4`}</InlineMath>. The tangent line is:
        </p>
        <MathBlock>{`y - 4 = 4(x - 2) \\quad \\Rightarrow \\quad y = 4x - 4.`}</MathBlock>
      </Callout>

      <h2>The Sign of the Derivative</h2>
      <p>
        The algebraic sign of the derivative gives us useful information about the behavior
        of the graph:
      </p>

      <Callout type="info" title="Interpreting the Sign of f'(x)">
        <ul>
          <li>
            <strong><InlineMath>{`f'(x) > 0`}</InlineMath></strong>: The graph is <em>rising</em>
            (increasing) in the vicinity of <InlineMath>{`x`}</InlineMath> as we move from left to right.
          </li>
          <li>
            <strong><InlineMath>{`f'(x) < 0`}</InlineMath></strong>: The graph is <em>falling</em>
            (decreasing) in the vicinity of <InlineMath>{`x`}</InlineMath>.
          </li>
          <li>
            <strong><InlineMath>{`f'(x) = 0`}</InlineMath></strong>: The tangent line is
            <em>horizontal</em> at <InlineMath>{`x`}</InlineMath>.
          </li>
        </ul>
      </Callout>

      <p>
        At a maximum or minimum of the function, the slope must be zero. Fermat was the
        first to notice that points where <InlineMath>{`f`}</InlineMath> has a maximum or minimum
        must occur among the roots of the equation <InlineMath>{`f'(x) = 0`}</InlineMath>.
      </p>

      <Callout type="info" title="Important Observation">
        <p>
          It is important to realize that <InlineMath>{`f'(x) = 0`}</InlineMath> may also occur at
          points where there is <em>no</em> maximum or minimum. For example, the function
          <InlineMath>{`f(x) = x^3`}</InlineMath> has <InlineMath>{`f'(0) = 0`}</InlineMath>, but
          <InlineMath>{`x = 0`}</InlineMath> is neither a maximum nor a minimum—it is an
          <strong>inflection point</strong> where the tangent line crosses the graph.
        </p>
      </Callout>

      <h2>Parallel and Perpendicular Lines</h2>
      <p>
        Slopes provide a simple way to characterize parallel and perpendicular lines.
      </p>

      <Callout type="theorem" title="Parallel and Perpendicular Lines">
        <p>
          <strong>Parallel lines:</strong> Two nonvertical lines are parallel if and only
          if they have the <em>same slope</em>.
        </p>
        <p>
          <strong>Perpendicular lines:</strong> Two nonvertical lines with slopes
          <InlineMath>{`m_1`}</InlineMath> and <InlineMath>{`m_2`}</InlineMath> are perpendicular if
          and only if:
        </p>
        <MathBlock>{`m_1 \\cdot m_2 = -1`}</MathBlock>
        <p>
          That is, their slopes are <em>negative reciprocals</em> of each other.
        </p>
      </Callout>

      <Callout type="example" title="Example: Normal Line">
        <p>
          The line perpendicular to the tangent at a point is called the <strong>normal line</strong>.
          Find the equation of the normal line to <InlineMath>{`f(x) = x^2`}</InlineMath> at <InlineMath>{`(2, 4)`}</InlineMath>.
        </p>
        <p>
          <strong>Solution:</strong> The tangent has slope <InlineMath>{`f'(2) = 4`}</InlineMath>.
          The normal line has slope <InlineMath>{`-1/4`}</InlineMath> (negative reciprocal). Thus:
        </p>
        <MathBlock>{`y - 4 = -\\frac{1}{4}(x - 2) \\quad \\Rightarrow \\quad y = -\\frac{1}{4}x + \\frac{9}{2}.`}</MathBlock>
      </Callout>

      <h2>Other Notations for Derivatives</h2>
      <p>
        Several different notations are used for derivatives, each with its own advantages.
      </p>

      <Callout type="info" title="Common Derivative Notations">
        <p><strong>Lagrange notation:</strong> <InlineMath>{`f'(x)`}</InlineMath>, <InlineMath>{`f''(x)`}</InlineMath>, <InlineMath>{`f^{(n)}(x)`}</InlineMath></p>
        <p>
          Emphasizes that the derivative is a new function obtained from <InlineMath>{`f`}</InlineMath>.
          If <InlineMath>{`y = f(x)`}</InlineMath>, we also write <InlineMath>{`y'`}</InlineMath>, <InlineMath>{`y''`}</InlineMath>, etc.
        </p>

        <p><strong>Newton notation:</strong> <InlineMath>{`\\dot{y}`}</InlineMath>, <InlineMath>{`\\ddot{y}`}</InlineMath></p>
        <p>
          Often used for derivatives with respect to time, especially for velocity and acceleration.
        </p>

        <p><strong>Operator notation:</strong> <InlineMath>{`Df`}</InlineMath>, <InlineMath>{`D^2f`}</InlineMath>, <InlineMath>{`D^nf`}</InlineMath></p>
        <p>
          The symbol <InlineMath>{`D`}</InlineMath> is called a <strong>differentiation operator</strong>.
          It suggests that <InlineMath>{`Df`}</InlineMath> is obtained from <InlineMath>{`f`}</InlineMath>
          by the operation of differentiation.
        </p>

        <p><strong>Leibniz notation:</strong> <InlineMath>{`\\dfrac{dy}{dx}`}</InlineMath>, <InlineMath>{`\\dfrac{d^2y}{dx^2}`}</InlineMath>, <InlineMath>{`\\dfrac{d^ny}{dx^n}`}</InlineMath></p>
        <p>
          Originated from writing <InlineMath>{`\\Delta y / \\Delta x`}</InlineMath> for the difference
          quotient and <InlineMath>{`dy/dx`}</InlineMath> for its limit. Useful when working with
          related rates and the chain rule.
        </p>
      </Callout>

      <p>
        In Leibniz notation, the definition of derivative can be written:
      </p>
      <MathBlock>{`\\frac{dy}{dx} = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}`}</MathBlock>

      <h2>Historical Note: The Greek Definition of Tangent</h2>
      <p>
        The concept of a tangent line to a circle was considered by the ancient Greeks.
        They defined a tangent line to a circle as a line having one point on the circle
        and all other points outside the circle. From this definition, they could prove
        that the tangent at any point is perpendicular to the radius at that point.
      </p>
      <p>
        However, the Greek definition does not extend well to general curves. The modern
        definition using derivatives is far more satisfactory. Using this definition, we
        can prove that for a circle the tangent line has all the properties ascribed to it
        by the Greek geometers—and we can handle curves where the Greek definition fails,
        such as at inflection points where the tangent line actually <em>crosses</em> the curve.
      </p>

      <h2>Summary</h2>
      <ul>
        <li>
          The <strong>difference quotient</strong> <InlineMath>{`[f(x+h) - f(x)]/h`}</InlineMath>
          represents the slope of the <strong>secant line</strong> through two points on
          the graph.
        </li>
        <li>
          The <strong>derivative</strong> <InlineMath>{`f'(x)`}</InlineMath> represents the slope
          of the <strong>tangent line</strong> at a point—the limiting position of secant
          lines as the second point approaches the first.
        </li>
        <li>
          The tangent line to <InlineMath>{`y = f(x)`}</InlineMath> at <InlineMath>{`(a, f(a))`}</InlineMath>
          has equation <InlineMath>{`y = f(a) + f'(a)(x - a)`}</InlineMath>.
        </li>
        <li>
          <InlineMath>{`f'(x) > 0`}</InlineMath> means the graph is rising; <InlineMath>{`f'(x) < 0`}</InlineMath>
          means falling; <InlineMath>{`f'(x) = 0`}</InlineMath> means horizontal tangent.
        </li>
        <li>
          Parallel lines have equal slopes; perpendicular lines have slopes whose product
          is <InlineMath>{`-1`}</InlineMath>.
        </li>
        <li>
          Various notations exist: <InlineMath>{`f'(x)`}</InlineMath>, <InlineMath>{`y'`}</InlineMath>,
          <InlineMath>{`Df(x)`}</InlineMath>, and <InlineMath>{`dy/dx`}</InlineMath> all represent the
          same derivative.
        </li>
      </ul>
    </LessonLayout>
  );
}
