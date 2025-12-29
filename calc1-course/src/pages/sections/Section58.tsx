import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <p>
        Not every differential equation can be solved by a formula. Direction fields
        provide a geometric approach to understanding solutions without solving
        the equation explicitly.
      </p>

      <h2>The Geometric Viewpoint</h2>

      <Callout type="definition" title="Direction Field">
        <p>
          Consider the first-order equation <MathInline>{`y' = f(x, y)`}</MathInline>. At each point
          <MathInline>{`(x, y)`}</MathInline> in the plane, the value <MathInline>{`f(x, y)`}</MathInline> gives
          the slope that any solution passing through that point must have.
        </p>
        <p className="mt-2">
          A <strong>direction field</strong> (or <strong>slope field</strong>) is a visual
          representation showing short line segments with slope <MathInline>{`f(x, y)`}</MathInline>
          at many points in the plane.
        </p>
      </Callout>

      <Callout type="info" title="Key Insight">
        <p>
          If <MathInline>{`y = \\phi(x)`}</MathInline> is a solution of <MathInline>{`y' = f(x, y)`}</MathInline>,
          then at each point <MathInline>{`(x, \\phi(x))`}</MathInline> on the solution curve, the
          tangent line has slope <MathInline>{`\\phi'(x) = f(x, \\phi(x))`}</MathInline>.
        </p>
        <p className="mt-2">
          The solution curve is tangent to the direction field at every point.
        </p>
      </Callout>

      <h2>Constructing Direction Fields</h2>

      <Callout type="example" title="Example 1: A Simple Field">
        <p>Sketch the direction field for <MathInline>{`y' = x`}</MathInline>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <MathInline>{`x = 0`}</MathInline>: slope = 0 (horizontal segments)</li>
          <li>When <MathInline>{`x = 1`}</MathInline>: slope = 1 (45° segments)</li>
          <li>When <MathInline>{`x = -1`}</MathInline>: slope = −1</li>
          <li>When <MathInline>{`x = 2`}</MathInline>: slope = 2 (steeper)</li>
        </ul>
        <p className="mt-2">
          The slope depends only on <MathInline>{`x`}</MathInline>, so all segments on any
          vertical line have the same slope.
        </p>
        <p className="mt-2">
          <strong>Actual solution:</strong> <MathInline>{`y = \\frac{x^2}{2} + C`}</MathInline> (parabolas)
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Slope Depends on y">
        <p>Sketch the direction field for <MathInline>{`y' = y`}</MathInline>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <MathInline>{`y = 0`}</MathInline>: slope = 0</li>
          <li>When <MathInline>{`y > 0`}</MathInline>: slope &gt; 0 (pointing upward)</li>
          <li>When <MathInline>{`y < 0`}</MathInline>: slope &lt; 0 (pointing downward)</li>
        </ul>
        <p className="mt-2">
          The slope depends only on <MathInline>{`y`}</MathInline>, so all segments on any
          horizontal line have the same slope.
        </p>
        <p className="mt-2">
          <strong>Actual solution:</strong> <MathInline>{`y = Ce^x`}</MathInline> (exponentials)
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Slope Depends on Both">
        <p>Analyze the direction field for <MathInline>{`y' = x + y`}</MathInline>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <MathInline>{`x + y = 0`}</MathInline> (i.e., <MathInline>{`y = -x`}</MathInline>): slope = 0</li>
          <li>Above the line <MathInline>{`y = -x`}</MathInline>: slope &gt; 0</li>
          <li>Below the line <MathInline>{`y = -x`}</MathInline>: slope &lt; 0</li>
        </ul>
        <p className="mt-2">
          The line <MathInline>{`y = -x`}</MathInline> consists of points where solutions have
          horizontal tangents.
        </p>
      </Callout>

      <h2>Integral Curves</h2>

      <Callout type="definition" title="Integral Curve">
        <p>
          An <strong>integral curve</strong> of the equation <MathInline>{`y' = f(x, y)`}</MathInline>
          is the graph of a solution. Integral curves are everywhere tangent to the
          direction field.
        </p>
      </Callout>

      <Callout type="theorem" title="Non-Crossing Property">
        <p>
          Under the conditions of the existence and uniqueness theorem, two distinct
          integral curves cannot intersect. If they did, uniqueness would be violated
          at the intersection point.
        </p>
      </Callout>

      <Callout type="info" title="Drawing Integral Curves">
        <p>To sketch an integral curve starting at <MathInline>{`(x_0, y_0)`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Start at <MathInline>{`(x_0, y_0)`}</MathInline></li>
          <li>Follow the direction indicated by the field</li>
          <li>Keep the curve tangent to the field at every point</li>
          <li>Continue in both directions from the starting point</li>
        </ol>
      </Callout>

      <h2>Isoclines</h2>

      <Callout type="definition" title="Isocline">
        <p>
          An <strong>isocline</strong> is a curve along which the slope <MathInline>{`f(x, y)`}</MathInline>
          is constant. The <MathInline>{`c`}</MathInline>-isocline is the set of points where
          <MathInline>{`f(x, y) = c`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Using Isoclines">
        <p>
          Isoclines help construct direction fields efficiently:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>For several values of <MathInline>{`c`}</MathInline>, solve <MathInline>{`f(x, y) = c`}</MathInline></li>
          <li>Along each isocline, draw segments with slope <MathInline>{`c`}</MathInline></li>
          <li>The direction field emerges from these segments</li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 4: Finding Isoclines">
        <p>Find the isoclines for <MathInline>{`y' = x - y`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>The <MathInline>{`c`}</MathInline>-isocline satisfies <MathInline>{`x - y = c`}</MathInline>, i.e., <MathInline>{`y = x - c`}</MathInline>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`c = 0`}</MathInline>: isocline is <MathInline>{`y = x`}</MathInline> (horizontal segments)</li>
          <li><MathInline>{`c = 1`}</MathInline>: isocline is <MathInline>{`y = x - 1`}</MathInline> (slope 1 segments)</li>
          <li><MathInline>{`c = -1`}</MathInline>: isocline is <MathInline>{`y = x + 1`}</MathInline> (slope −1 segments)</li>
        </ul>
        <p className="mt-2">
          The isoclines are parallel lines with slope 1. On each line, draw segments
          with the corresponding slope <MathInline>{`c`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Circular Isoclines">
        <p>Find the isoclines for <MathInline>{`y' = x^2 + y^2`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          The <MathInline>{`c`}</MathInline>-isocline satisfies <MathInline>{`x^2 + y^2 = c`}</MathInline>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>For <MathInline>{`c > 0`}</MathInline>: circles centered at origin with radius <MathInline>{`\\sqrt{c}`}</MathInline></li>
          <li>For <MathInline>{`c = 0`}</MathInline>: just the origin (slope 0 only at origin)</li>
          <li>For <MathInline>{`c < 0`}</MathInline>: no isocline (slope is always ≥ 0)</li>
        </ul>
        <p className="mt-2">
          Since <MathInline>{`y' = x^2 + y^2 \\geq 0`}</MathInline>, all solutions are increasing
          (or constant at the origin).
        </p>
      </Callout>

      <h2>Equilibrium Solutions</h2>

      <Callout type="definition" title="Equilibrium Solution">
        <p>
          An <strong>equilibrium solution</strong> (or <strong>constant solution</strong>)
          is a solution of the form <MathInline>{`y = k`}</MathInline> (constant). For <MathInline>{`y' = f(x, y)`}</MathInline>,
          equilibria occur where <MathInline>{`f(x, k) = 0`}</MathInline> for all <MathInline>{`x`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Finding Equilibria">
        <p>Find the equilibrium solutions of <MathInline>{`y' = y(2 - y)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Set <MathInline>{`y' = 0`}</MathInline>: <MathInline>{`y(2 - y) = 0`}</MathInline></p>
        <p>Solutions: <MathInline>{`y = 0`}</MathInline> or <MathInline>{`y = 2`}</MathInline></p>
        <p className="mt-2">
          Both <MathInline>{`y = 0`}</MathInline> and <MathInline>{`y = 2`}</MathInline> are equilibrium solutions.
          The direction field has horizontal segments along these lines.
        </p>
      </Callout>

      <h2>Stability</h2>

      <Callout type="definition" title="Stable and Unstable Equilibria">
        <p>
          An equilibrium <MathInline>{`y = k`}</MathInline> is:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Stable</strong> if nearby solutions approach <MathInline>{`k`}</MathInline> as
            <MathInline>{`x \\to \\infty`}</MathInline>
          </li>
          <li>
            <strong>Unstable</strong> if nearby solutions move away from <MathInline>{`k`}</MathInline>
          </li>
          <li>
            <strong>Semi-stable</strong> if solutions approach from one side but diverge from the other
          </li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 7: Stability Analysis">
        <p>Analyze stability for <MathInline>{`y' = y(2 - y)`}</MathInline>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <MathInline>{`0 < y < 2`}</MathInline>: <MathInline>{`y' > 0`}</MathInline> (solutions increase)</li>
          <li>When <MathInline>{`y > 2`}</MathInline>: <MathInline>{`y' < 0`}</MathInline> (solutions decrease)</li>
          <li>When <MathInline>{`y < 0`}</MathInline>: <MathInline>{`y' < 0`}</MathInline> (solutions decrease)</li>
        </ul>
        <p className="mt-2"><strong>Conclusions:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`y = 2`}</MathInline> is <strong>stable</strong>: solutions above decrease toward it, solutions below increase toward it</li>
          <li><MathInline>{`y = 0`}</MathInline> is <strong>unstable</strong>: solutions above increase away, solutions below decrease away</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Stability Criterion">
        <p>
          For the autonomous equation <MathInline>{`y' = g(y)`}</MathInline> with equilibrium at <MathInline>{`y = k`}</MathInline>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`g'(k) < 0`}</MathInline>, then <MathInline>{`y = k`}</MathInline> is stable</li>
          <li>If <MathInline>{`g'(k) > 0`}</MathInline>, then <MathInline>{`y = k`}</MathInline> is unstable</li>
          <li>If <MathInline>{`g'(k) = 0`}</MathInline>, further analysis needed</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 8: Using the Criterion">
        <p>Apply the stability criterion to <MathInline>{`y' = y(2 - y)`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`g(y) = y(2 - y) = 2y - y^2`}</MathInline>. Then <MathInline>{`g'(y) = 2 - 2y`}</MathInline>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>At <MathInline>{`y = 0`}</MathInline>: <MathInline>{`g'(0) = 2 > 0`}</MathInline> → unstable</li>
          <li>At <MathInline>{`y = 2`}</MathInline>: <MathInline>{`g'(2) = -2 < 0`}</MathInline> → stable</li>
        </ul>
        <p className="mt-2">This confirms our graphical analysis.</p>
      </Callout>

      <h2>Autonomous Equations</h2>

      <Callout type="definition" title="Autonomous Equation">
        <p>
          An equation <MathInline>{`y' = g(y)`}</MathInline> where the right side depends only on
          <MathInline>{`y`}</MathInline> (not on <MathInline>{`x`}</MathInline>) is called <strong>autonomous</strong>.
        </p>
      </Callout>

      <Callout type="info" title="Properties of Autonomous Equations">
        <p>For autonomous equations:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Direction field has the same slope at all points with the same <MathInline>{`y`}</MathInline></li>
          <li>If <MathInline>{`y = \\phi(x)`}</MathInline> is a solution, so is <MathInline>{`y = \\phi(x - c)`}</MathInline> for any constant <MathInline>{`c`}</MathInline></li>
          <li>Solution curves are horizontal translates of each other</li>
        </ul>
      </Callout>

      <h2>Phase Line</h2>

      <Callout type="definition" title="Phase Line">
        <p>
          For an autonomous equation <MathInline>{`y' = g(y)`}</MathInline>, the <strong>phase line</strong>
          is a vertical line showing:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Equilibrium points as dots</li>
          <li>Arrows pointing up where <MathInline>{`g(y) > 0`}</MathInline></li>
          <li>Arrows pointing down where <MathInline>{`g(y) < 0`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 9: Phase Line Analysis">
        <p>Draw the phase line for <MathInline>{`y' = y^2 - 1`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Equilibria: <MathInline>{`y^2 - 1 = 0`}</MathInline> → <MathInline>{`y = \\pm 1`}</MathInline></p>
        <p>Sign analysis:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`y < -1`}</MathInline>: <MathInline>{`y' > 0`}</MathInline> (↑)</li>
          <li><MathInline>{`-1 < y < 1`}</MathInline>: <MathInline>{`y' < 0`}</MathInline> (↓)</li>
          <li><MathInline>{`y > 1`}</MathInline>: <MathInline>{`y' > 0`}</MathInline> (↑)</li>
        </ul>
        <p className="mt-2"><strong>Stability:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`y = -1`}</MathInline>: stable (arrows point toward it)</li>
          <li><MathInline>{`y = 1`}</MathInline>: unstable (arrows point away)</li>
        </ul>
      </Callout>

      <h2>Long-Term Behavior</h2>

      <Callout type="example" title="Example 10: Predicting Behavior">
        <p>
          For <MathInline>{`y' = y(1 - y)(y - 2)`}</MathInline>, describe the long-term behavior
          of solutions with various initial conditions.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Equilibria: <MathInline>{`y = 0, 1, 2`}</MathInline></p>
        <p>Sign of <MathInline>{`y'`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`y < 0`}</MathInline>: <MathInline>{`(-)(+)(-) = -`}</MathInline> (↓)</li>
          <li><MathInline>{`0 < y < 1`}</MathInline>: <MathInline>{`(+)(+)(-) = -`}</MathInline> (↓)</li>
          <li><MathInline>{`1 < y < 2`}</MathInline>: <MathInline>{`(+)(-)(-)= +`}</MathInline> (↑)</li>
          <li><MathInline>{`y > 2`}</MathInline>: <MathInline>{`(+)(-)(+) = -`}</MathInline> (↓)</li>
        </ul>
        <p className="mt-2"><strong>Long-term behavior:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`y(0) < 0`}</MathInline>: <MathInline>{`y \\to -\\infty`}</MathInline></li>
          <li>If <MathInline>{`0 < y(0) < 1`}</MathInline>: <MathInline>{`y \\to 0`}</MathInline></li>
          <li>If <MathInline>{`1 < y(0) < 2`}</MathInline>: <MathInline>{`y \\to 2`}</MathInline></li>
          <li>If <MathInline>{`y(0) > 2`}</MathInline>: <MathInline>{`y \\to 2`}</MathInline></li>
        </ul>
        <p className="mt-2">
          <MathInline>{`y = 0`}</MathInline> and <MathInline>{`y = 2`}</MathInline> are stable; <MathInline>{`y = 1`}</MathInline> is unstable.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Direction field:</strong> Visual representation of slopes <MathInline>{`f(x, y)`}</MathInline>
        </li>
        <li>
          <strong>Integral curves:</strong> Solution graphs, tangent to direction field everywhere
        </li>
        <li>
          <strong>Isoclines:</strong> Curves where slope is constant; help construct fields
        </li>
        <li>
          <strong>Equilibria:</strong> Constant solutions where <MathInline>{`y' = 0`}</MathInline>
        </li>
        <li>
          <strong>Stability:</strong> Stable if nearby solutions approach; unstable if they diverge
        </li>
        <li>
          <strong>Autonomous:</strong> <MathInline>{`y' = g(y)`}</MathInline>; use phase line for analysis
        </li>
        <li>
          <strong>Criterion:</strong> For <MathInline>{`y' = g(y)`}</MathInline>, <MathInline>{`g'(k) < 0`}</MathInline> means stable at <MathInline>{`y = k`}</MathInline>
        </li>
      </ul>
    </LessonLayout>
  );
}
