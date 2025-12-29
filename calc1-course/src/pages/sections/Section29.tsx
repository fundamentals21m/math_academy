import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        Consider the graph of a function <MathInline>{`f`}</MathInline> with two points
        <MathInline>{`P`}</MathInline> and <MathInline>{`Q`}</MathInline> having coordinates
        <MathInline>{`(x, f(x))`}</MathInline> and <MathInline>{`(x + h, f(x + h))`}</MathInline>,
        respectively. The line through <MathInline>{`P`}</MathInline> and <MathInline>{`Q`}</MathInline>
        is called a <strong>secant line</strong>.
      </p>

      <p>
        Consider the right triangle with hypotenuse <MathInline>{`PQ`}</MathInline>. Its vertical
        leg has length <MathInline>{`f(x + h) - f(x)`}</MathInline>, representing the change in
        <MathInline>{`y`}</MathInline>-values. The horizontal leg has length <MathInline>{`h`}</MathInline>.
        Therefore, the difference quotient:
      </p>

      <MathBlock>{`\\frac{f(x + h) - f(x)}{h}`}</MathBlock>

      <p>
        represents the trigonometric tangent of the angle <MathInline>{`\\alpha`}</MathInline> that
        the line <MathInline>{`PQ`}</MathInline> makes with the horizontal.
      </p>

      <Callout type="definition" title="Slope of a Line">
        <p>
          The real number <MathInline>{`\\tan \\alpha`}</MathInline> is called the <strong>slope</strong>
          of the line through <MathInline>{`P`}</MathInline> and <MathInline>{`Q`}</MathInline>, and it
          provides a way of measuring the "steepness" of this line.
        </p>
        <p>
          For a linear function <MathInline>{`f(x) = mx + b`}</MathInline>, the difference quotient
          always equals <MathInline>{`m`}</MathInline>, so <MathInline>{`m`}</MathInline> is the slope of
          the line.
        </p>
      </Callout>

      <h2>Understanding Slope Values</h2>
      <p>
        The value of the slope tells us about the direction and steepness of a line:
      </p>
      <ul>
        <li>
          <strong>Horizontal line</strong> (<MathInline>{`\\alpha = 0`}</MathInline>): The slope is
          <MathInline>{`\\tan 0 = 0`}</MathInline>.
        </li>
        <li>
          <strong>Rising line</strong> (<MathInline>{`0 < \\alpha < \\pi/2`}</MathInline>): The slope
          is <em>positive</em>. The line rises as we move from left to right.
        </li>
        <li>
          <strong>Falling line</strong> (<MathInline>{`\\pi/2 < \\alpha < \\pi`}</MathInline>): The
          slope is <em>negative</em>. The line falls as we move from left to right.
        </li>
        <li>
          <strong>Slope 1</strong> (<MathInline>{`\\alpha = \\pi/4`}</MathInline>): The line makes a
          45° angle with the horizontal.
        </li>
        <li>
          <strong>Vertical line</strong> (<MathInline>{`\\alpha = \\pi/2`}</MathInline>): Since
          <MathInline>{`\\tan(\\pi/2)`}</MathInline> is undefined, we say vertical lines have
          <em>no slope</em>.
        </li>
      </ul>

      <h2>The Tangent Line</h2>
      <p>
        Suppose <MathInline>{`f`}</MathInline> has a derivative at <MathInline>{`x`}</MathInline>. This
        means that the difference quotient approaches the limit <MathInline>{`f'(x)`}</MathInline>
        as <MathInline>{`h \\to 0`}</MathInline>. When interpreted geometrically:
      </p>
      <ul>
        <li>As <MathInline>{`h`}</MathInline> gets closer to 0, the point <MathInline>{`P`}</MathInline> remains fixed</li>
        <li><MathInline>{`Q`}</MathInline> moves along the curve toward <MathInline>{`P`}</MathInline></li>
        <li>The secant line through <MathInline>{`PQ`}</MathInline> rotates, approaching a limiting position</li>
        <li>The slope of this secant line approaches <MathInline>{`f'(x)`}</MathInline></li>
      </ul>

      <Callout type="definition" title="Slope of a Curve and Tangent Line">
        <p>
          The <strong>slope of the curve</strong> at point <MathInline>{`P = (x, f(x))`}</MathInline>
          is defined to be the number <MathInline>{`f'(x)`}</MathInline>.
        </p>
        <p>
          The line through <MathInline>{`P`}</MathInline> having slope <MathInline>{`f'(x)`}</MathInline>
          is called the <strong>tangent line</strong> to the curve at <MathInline>{`P`}</MathInline>.
        </p>
      </Callout>

      <h2>Equation of the Tangent Line</h2>
      <p>
        At a point <MathInline>{`(a, f(a))`}</MathInline> on the graph where the derivative exists,
        the tangent line has slope <MathInline>{`f'(a)`}</MathInline>. Using the point-slope form
        of a line:
      </p>

      <Callout type="info" title="Tangent Line Equation">
        <p>
          The equation of the tangent line to <MathInline>{`y = f(x)`}</MathInline> at the point
          <MathInline>{`(a, f(a))`}</MathInline> is:
        </p>
        <MathBlock>{`y - f(a) = f'(a)(x - a)`}</MathBlock>
        <p>or equivalently:</p>
        <MathBlock>{`y = f(a) + f'(a)(x - a)`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: Tangent to a Parabola">
        <p>
          Find the equation of the tangent line to <MathInline>{`f(x) = x^2`}</MathInline> at the
          point <MathInline>{`(2, 4)`}</MathInline>.
        </p>
        <p>
          <strong>Solution:</strong> We have <MathInline>{`f'(x) = 2x`}</MathInline>, so
          <MathInline>{`f'(2) = 4`}</MathInline>. The tangent line is:
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
            <strong><MathInline>{`f'(x) > 0`}</MathInline></strong>: The graph is <em>rising</em>
            (increasing) in the vicinity of <MathInline>{`x`}</MathInline> as we move from left to right.
          </li>
          <li>
            <strong><MathInline>{`f'(x) < 0`}</MathInline></strong>: The graph is <em>falling</em>
            (decreasing) in the vicinity of <MathInline>{`x`}</MathInline>.
          </li>
          <li>
            <strong><MathInline>{`f'(x) = 0`}</MathInline></strong>: The tangent line is
            <em>horizontal</em> at <MathInline>{`x`}</MathInline>.
          </li>
        </ul>
      </Callout>

      <p>
        At a maximum or minimum of the function, the slope must be zero. Fermat was the
        first to notice that points where <MathInline>{`f`}</MathInline> has a maximum or minimum
        must occur among the roots of the equation <MathInline>{`f'(x) = 0`}</MathInline>.
      </p>

      <Callout type="info" title="Important Observation">
        <p>
          It is important to realize that <MathInline>{`f'(x) = 0`}</MathInline> may also occur at
          points where there is <em>no</em> maximum or minimum. For example, the function
          <MathInline>{`f(x) = x^3`}</MathInline> has <MathInline>{`f'(0) = 0`}</MathInline>, but
          <MathInline>{`x = 0`}</MathInline> is neither a maximum nor a minimum—it is an
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
          <MathInline>{`m_1`}</MathInline> and <MathInline>{`m_2`}</MathInline> are perpendicular if
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
          Find the equation of the normal line to <MathInline>{`f(x) = x^2`}</MathInline> at <MathInline>{`(2, 4)`}</MathInline>.
        </p>
        <p>
          <strong>Solution:</strong> The tangent has slope <MathInline>{`f'(2) = 4`}</MathInline>.
          The normal line has slope <MathInline>{`-1/4`}</MathInline> (negative reciprocal). Thus:
        </p>
        <MathBlock>{`y - 4 = -\\frac{1}{4}(x - 2) \\quad \\Rightarrow \\quad y = -\\frac{1}{4}x + \\frac{9}{2}.`}</MathBlock>
      </Callout>

      <h2>Other Notations for Derivatives</h2>
      <p>
        Several different notations are used for derivatives, each with its own advantages.
      </p>

      <Callout type="info" title="Common Derivative Notations">
        <p><strong>Lagrange notation:</strong> <MathInline>{`f'(x)`}</MathInline>, <MathInline>{`f''(x)`}</MathInline>, <MathInline>{`f^{(n)}(x)`}</MathInline></p>
        <p>
          Emphasizes that the derivative is a new function obtained from <MathInline>{`f`}</MathInline>.
          If <MathInline>{`y = f(x)`}</MathInline>, we also write <MathInline>{`y'`}</MathInline>, <MathInline>{`y''`}</MathInline>, etc.
        </p>

        <p><strong>Newton notation:</strong> <MathInline>{`\\dot{y}`}</MathInline>, <MathInline>{`\\ddot{y}`}</MathInline></p>
        <p>
          Often used for derivatives with respect to time, especially for velocity and acceleration.
        </p>

        <p><strong>Operator notation:</strong> <MathInline>{`Df`}</MathInline>, <MathInline>{`D^2f`}</MathInline>, <MathInline>{`D^nf`}</MathInline></p>
        <p>
          The symbol <MathInline>{`D`}</MathInline> is called a <strong>differentiation operator</strong>.
          It suggests that <MathInline>{`Df`}</MathInline> is obtained from <MathInline>{`f`}</MathInline>
          by the operation of differentiation.
        </p>

        <p><strong>Leibniz notation:</strong> <MathInline>{`\\dfrac{dy}{dx}`}</MathInline>, <MathInline>{`\\dfrac{d^2y}{dx^2}`}</MathInline>, <MathInline>{`\\dfrac{d^ny}{dx^n}`}</MathInline></p>
        <p>
          Originated from writing <MathInline>{`\\Delta y / \\Delta x`}</MathInline> for the difference
          quotient and <MathInline>{`dy/dx`}</MathInline> for its limit. Useful when working with
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
          The <strong>difference quotient</strong> <MathInline>{`[f(x+h) - f(x)]/h`}</MathInline>
          represents the slope of the <strong>secant line</strong> through two points on
          the graph.
        </li>
        <li>
          The <strong>derivative</strong> <MathInline>{`f'(x)`}</MathInline> represents the slope
          of the <strong>tangent line</strong> at a point—the limiting position of secant
          lines as the second point approaches the first.
        </li>
        <li>
          The tangent line to <MathInline>{`y = f(x)`}</MathInline> at <MathInline>{`(a, f(a))`}</MathInline>
          has equation <MathInline>{`y = f(a) + f'(a)(x - a)`}</MathInline>.
        </li>
        <li>
          <MathInline>{`f'(x) > 0`}</MathInline> means the graph is rising; <MathInline>{`f'(x) < 0`}</MathInline>
          means falling; <MathInline>{`f'(x) = 0`}</MathInline> means horizontal tangent.
        </li>
        <li>
          Parallel lines have equal slopes; perpendicular lines have slopes whose product
          is <MathInline>{`-1`}</MathInline>.
        </li>
        <li>
          Various notations exist: <MathInline>{`f'(x)`}</MathInline>, <MathInline>{`y'`}</MathInline>,
          <MathInline>{`Df(x)`}</MathInline>, and <MathInline>{`dy/dx`}</MathInline> all represent the
          same derivative.
        </li>
      </ul>
    </LessonLayout>
  );
}
