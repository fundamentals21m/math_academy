import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath } from '../../components/common/MathBlock';
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
          Consider the first-order equation <InlineMath>{`y' = f(x, y)`}</InlineMath>. At each point
          <InlineMath>{`(x, y)`}</InlineMath> in the plane, the value <InlineMath>{`f(x, y)`}</InlineMath> gives
          the slope that any solution passing through that point must have.
        </p>
        <p className="mt-2">
          A <strong>direction field</strong> (or <strong>slope field</strong>) is a visual
          representation showing short line segments with slope <InlineMath>{`f(x, y)`}</InlineMath>
          at many points in the plane.
        </p>
      </Callout>

      <Callout type="info" title="Key Insight">
        <p>
          If <InlineMath>{`y = \\phi(x)`}</InlineMath> is a solution of <InlineMath>{`y' = f(x, y)`}</InlineMath>,
          then at each point <InlineMath>{`(x, \\phi(x))`}</InlineMath> on the solution curve, the
          tangent line has slope <InlineMath>{`\\phi'(x) = f(x, \\phi(x))`}</InlineMath>.
        </p>
        <p className="mt-2">
          The solution curve is tangent to the direction field at every point.
        </p>
      </Callout>

      <h2>Constructing Direction Fields</h2>

      <Callout type="example" title="Example 1: A Simple Field">
        <p>Sketch the direction field for <InlineMath>{`y' = x`}</InlineMath>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <InlineMath>{`x = 0`}</InlineMath>: slope = 0 (horizontal segments)</li>
          <li>When <InlineMath>{`x = 1`}</InlineMath>: slope = 1 (45° segments)</li>
          <li>When <InlineMath>{`x = -1`}</InlineMath>: slope = −1</li>
          <li>When <InlineMath>{`x = 2`}</InlineMath>: slope = 2 (steeper)</li>
        </ul>
        <p className="mt-2">
          The slope depends only on <InlineMath>{`x`}</InlineMath>, so all segments on any
          vertical line have the same slope.
        </p>
        <p className="mt-2">
          <strong>Actual solution:</strong> <InlineMath>{`y = \\frac{x^2}{2} + C`}</InlineMath> (parabolas)
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Slope Depends on y">
        <p>Sketch the direction field for <InlineMath>{`y' = y`}</InlineMath>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <InlineMath>{`y = 0`}</InlineMath>: slope = 0</li>
          <li>When <InlineMath>{`y > 0`}</InlineMath>: slope &gt; 0 (pointing upward)</li>
          <li>When <InlineMath>{`y < 0`}</InlineMath>: slope &lt; 0 (pointing downward)</li>
        </ul>
        <p className="mt-2">
          The slope depends only on <InlineMath>{`y`}</InlineMath>, so all segments on any
          horizontal line have the same slope.
        </p>
        <p className="mt-2">
          <strong>Actual solution:</strong> <InlineMath>{`y = Ce^x`}</InlineMath> (exponentials)
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Slope Depends on Both">
        <p>Analyze the direction field for <InlineMath>{`y' = x + y`}</InlineMath>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <InlineMath>{`x + y = 0`}</InlineMath> (i.e., <InlineMath>{`y = -x`}</InlineMath>): slope = 0</li>
          <li>Above the line <InlineMath>{`y = -x`}</InlineMath>: slope &gt; 0</li>
          <li>Below the line <InlineMath>{`y = -x`}</InlineMath>: slope &lt; 0</li>
        </ul>
        <p className="mt-2">
          The line <InlineMath>{`y = -x`}</InlineMath> consists of points where solutions have
          horizontal tangents.
        </p>
      </Callout>

      <h2>Integral Curves</h2>

      <Callout type="definition" title="Integral Curve">
        <p>
          An <strong>integral curve</strong> of the equation <InlineMath>{`y' = f(x, y)`}</InlineMath>
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
        <p>To sketch an integral curve starting at <InlineMath>{`(x_0, y_0)`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Start at <InlineMath>{`(x_0, y_0)`}</InlineMath></li>
          <li>Follow the direction indicated by the field</li>
          <li>Keep the curve tangent to the field at every point</li>
          <li>Continue in both directions from the starting point</li>
        </ol>
      </Callout>

      <h2>Isoclines</h2>

      <Callout type="definition" title="Isocline">
        <p>
          An <strong>isocline</strong> is a curve along which the slope <InlineMath>{`f(x, y)`}</InlineMath>
          is constant. The <InlineMath>{`c`}</InlineMath>-isocline is the set of points where
          <InlineMath>{`f(x, y) = c`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Using Isoclines">
        <p>
          Isoclines help construct direction fields efficiently:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>For several values of <InlineMath>{`c`}</InlineMath>, solve <InlineMath>{`f(x, y) = c`}</InlineMath></li>
          <li>Along each isocline, draw segments with slope <InlineMath>{`c`}</InlineMath></li>
          <li>The direction field emerges from these segments</li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 4: Finding Isoclines">
        <p>Find the isoclines for <InlineMath>{`y' = x - y`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>The <InlineMath>{`c`}</InlineMath>-isocline satisfies <InlineMath>{`x - y = c`}</InlineMath>, i.e., <InlineMath>{`y = x - c`}</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`c = 0`}</InlineMath>: isocline is <InlineMath>{`y = x`}</InlineMath> (horizontal segments)</li>
          <li><InlineMath>{`c = 1`}</InlineMath>: isocline is <InlineMath>{`y = x - 1`}</InlineMath> (slope 1 segments)</li>
          <li><InlineMath>{`c = -1`}</InlineMath>: isocline is <InlineMath>{`y = x + 1`}</InlineMath> (slope −1 segments)</li>
        </ul>
        <p className="mt-2">
          The isoclines are parallel lines with slope 1. On each line, draw segments
          with the corresponding slope <InlineMath>{`c`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Circular Isoclines">
        <p>Find the isoclines for <InlineMath>{`y' = x^2 + y^2`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          The <InlineMath>{`c`}</InlineMath>-isocline satisfies <InlineMath>{`x^2 + y^2 = c`}</InlineMath>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>For <InlineMath>{`c > 0`}</InlineMath>: circles centered at origin with radius <InlineMath>{`\\sqrt{c}`}</InlineMath></li>
          <li>For <InlineMath>{`c = 0`}</InlineMath>: just the origin (slope 0 only at origin)</li>
          <li>For <InlineMath>{`c < 0`}</InlineMath>: no isocline (slope is always ≥ 0)</li>
        </ul>
        <p className="mt-2">
          Since <InlineMath>{`y' = x^2 + y^2 \\geq 0`}</InlineMath>, all solutions are increasing
          (or constant at the origin).
        </p>
      </Callout>

      <h2>Equilibrium Solutions</h2>

      <Callout type="definition" title="Equilibrium Solution">
        <p>
          An <strong>equilibrium solution</strong> (or <strong>constant solution</strong>)
          is a solution of the form <InlineMath>{`y = k`}</InlineMath> (constant). For <InlineMath>{`y' = f(x, y)`}</InlineMath>,
          equilibria occur where <InlineMath>{`f(x, k) = 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Finding Equilibria">
        <p>Find the equilibrium solutions of <InlineMath>{`y' = y(2 - y)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Set <InlineMath>{`y' = 0`}</InlineMath>: <InlineMath>{`y(2 - y) = 0`}</InlineMath></p>
        <p>Solutions: <InlineMath>{`y = 0`}</InlineMath> or <InlineMath>{`y = 2`}</InlineMath></p>
        <p className="mt-2">
          Both <InlineMath>{`y = 0`}</InlineMath> and <InlineMath>{`y = 2`}</InlineMath> are equilibrium solutions.
          The direction field has horizontal segments along these lines.
        </p>
      </Callout>

      <h2>Stability</h2>

      <Callout type="definition" title="Stable and Unstable Equilibria">
        <p>
          An equilibrium <InlineMath>{`y = k`}</InlineMath> is:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Stable</strong> if nearby solutions approach <InlineMath>{`k`}</InlineMath> as
            <InlineMath>{`x \\to \\infty`}</InlineMath>
          </li>
          <li>
            <strong>Unstable</strong> if nearby solutions move away from <InlineMath>{`k`}</InlineMath>
          </li>
          <li>
            <strong>Semi-stable</strong> if solutions approach from one side but diverge from the other
          </li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 7: Stability Analysis">
        <p>Analyze stability for <InlineMath>{`y' = y(2 - y)`}</InlineMath>.</p>
        <p><strong>Analysis:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When <InlineMath>{`0 < y < 2`}</InlineMath>: <InlineMath>{`y' > 0`}</InlineMath> (solutions increase)</li>
          <li>When <InlineMath>{`y > 2`}</InlineMath>: <InlineMath>{`y' < 0`}</InlineMath> (solutions decrease)</li>
          <li>When <InlineMath>{`y < 0`}</InlineMath>: <InlineMath>{`y' < 0`}</InlineMath> (solutions decrease)</li>
        </ul>
        <p className="mt-2"><strong>Conclusions:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`y = 2`}</InlineMath> is <strong>stable</strong>: solutions above decrease toward it, solutions below increase toward it</li>
          <li><InlineMath>{`y = 0`}</InlineMath> is <strong>unstable</strong>: solutions above increase away, solutions below decrease away</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Stability Criterion">
        <p>
          For the autonomous equation <InlineMath>{`y' = g(y)`}</InlineMath> with equilibrium at <InlineMath>{`y = k`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`g'(k) < 0`}</InlineMath>, then <InlineMath>{`y = k`}</InlineMath> is stable</li>
          <li>If <InlineMath>{`g'(k) > 0`}</InlineMath>, then <InlineMath>{`y = k`}</InlineMath> is unstable</li>
          <li>If <InlineMath>{`g'(k) = 0`}</InlineMath>, further analysis needed</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 8: Using the Criterion">
        <p>Apply the stability criterion to <InlineMath>{`y' = y(2 - y)`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`g(y) = y(2 - y) = 2y - y^2`}</InlineMath>. Then <InlineMath>{`g'(y) = 2 - 2y`}</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>At <InlineMath>{`y = 0`}</InlineMath>: <InlineMath>{`g'(0) = 2 > 0`}</InlineMath> → unstable</li>
          <li>At <InlineMath>{`y = 2`}</InlineMath>: <InlineMath>{`g'(2) = -2 < 0`}</InlineMath> → stable</li>
        </ul>
        <p className="mt-2">This confirms our graphical analysis.</p>
      </Callout>

      <h2>Autonomous Equations</h2>

      <Callout type="definition" title="Autonomous Equation">
        <p>
          An equation <InlineMath>{`y' = g(y)`}</InlineMath> where the right side depends only on
          <InlineMath>{`y`}</InlineMath> (not on <InlineMath>{`x`}</InlineMath>) is called <strong>autonomous</strong>.
        </p>
      </Callout>

      <Callout type="info" title="Properties of Autonomous Equations">
        <p>For autonomous equations:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Direction field has the same slope at all points with the same <InlineMath>{`y`}</InlineMath></li>
          <li>If <InlineMath>{`y = \\phi(x)`}</InlineMath> is a solution, so is <InlineMath>{`y = \\phi(x - c)`}</InlineMath> for any constant <InlineMath>{`c`}</InlineMath></li>
          <li>Solution curves are horizontal translates of each other</li>
        </ul>
      </Callout>

      <h2>Phase Line</h2>

      <Callout type="definition" title="Phase Line">
        <p>
          For an autonomous equation <InlineMath>{`y' = g(y)`}</InlineMath>, the <strong>phase line</strong>
          is a vertical line showing:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Equilibrium points as dots</li>
          <li>Arrows pointing up where <InlineMath>{`g(y) > 0`}</InlineMath></li>
          <li>Arrows pointing down where <InlineMath>{`g(y) < 0`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 9: Phase Line Analysis">
        <p>Draw the phase line for <InlineMath>{`y' = y^2 - 1`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Equilibria: <InlineMath>{`y^2 - 1 = 0`}</InlineMath> → <InlineMath>{`y = \\pm 1`}</InlineMath></p>
        <p>Sign analysis:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`y < -1`}</InlineMath>: <InlineMath>{`y' > 0`}</InlineMath> (↑)</li>
          <li><InlineMath>{`-1 < y < 1`}</InlineMath>: <InlineMath>{`y' < 0`}</InlineMath> (↓)</li>
          <li><InlineMath>{`y > 1`}</InlineMath>: <InlineMath>{`y' > 0`}</InlineMath> (↑)</li>
        </ul>
        <p className="mt-2"><strong>Stability:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`y = -1`}</InlineMath>: stable (arrows point toward it)</li>
          <li><InlineMath>{`y = 1`}</InlineMath>: unstable (arrows point away)</li>
        </ul>
      </Callout>

      <h2>Long-Term Behavior</h2>

      <Callout type="example" title="Example 10: Predicting Behavior">
        <p>
          For <InlineMath>{`y' = y(1 - y)(y - 2)`}</InlineMath>, describe the long-term behavior
          of solutions with various initial conditions.
        </p>
        <p><strong>Solution:</strong></p>
        <p>Equilibria: <InlineMath>{`y = 0, 1, 2`}</InlineMath></p>
        <p>Sign of <InlineMath>{`y'`}</InlineMath>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`y < 0`}</InlineMath>: <InlineMath>{`(-)(+)(-) = -`}</InlineMath> (↓)</li>
          <li><InlineMath>{`0 < y < 1`}</InlineMath>: <InlineMath>{`(+)(+)(-) = -`}</InlineMath> (↓)</li>
          <li><InlineMath>{`1 < y < 2`}</InlineMath>: <InlineMath>{`(+)(-)(-)= +`}</InlineMath> (↑)</li>
          <li><InlineMath>{`y > 2`}</InlineMath>: <InlineMath>{`(+)(-)(+) = -`}</InlineMath> (↓)</li>
        </ul>
        <p className="mt-2"><strong>Long-term behavior:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`y(0) < 0`}</InlineMath>: <InlineMath>{`y \\to -\\infty`}</InlineMath></li>
          <li>If <InlineMath>{`0 < y(0) < 1`}</InlineMath>: <InlineMath>{`y \\to 0`}</InlineMath></li>
          <li>If <InlineMath>{`1 < y(0) < 2`}</InlineMath>: <InlineMath>{`y \\to 2`}</InlineMath></li>
          <li>If <InlineMath>{`y(0) > 2`}</InlineMath>: <InlineMath>{`y \\to 2`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          <InlineMath>{`y = 0`}</InlineMath> and <InlineMath>{`y = 2`}</InlineMath> are stable; <InlineMath>{`y = 1`}</InlineMath> is unstable.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Direction field:</strong> Visual representation of slopes <InlineMath>{`f(x, y)`}</InlineMath>
        </li>
        <li>
          <strong>Integral curves:</strong> Solution graphs, tangent to direction field everywhere
        </li>
        <li>
          <strong>Isoclines:</strong> Curves where slope is constant; help construct fields
        </li>
        <li>
          <strong>Equilibria:</strong> Constant solutions where <InlineMath>{`y' = 0`}</InlineMath>
        </li>
        <li>
          <strong>Stability:</strong> Stable if nearby solutions approach; unstable if they diverge
        </li>
        <li>
          <strong>Autonomous:</strong> <InlineMath>{`y' = g(y)`}</InlineMath>; use phase line for analysis
        </li>
        <li>
          <strong>Criterion:</strong> For <InlineMath>{`y' = g(y)`}</InlineMath>, <InlineMath>{`g'(k) < 0`}</InlineMath> means stable at <InlineMath>{`y = k`}</InlineMath>
        </li>
      </ul>
    </LessonLayout>
  );
}
