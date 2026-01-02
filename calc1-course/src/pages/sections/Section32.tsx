import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <p>
        Differentiation can be used to help locate maxima and minima of functions. There
        are two different uses of the word "maximum" in calculus, and they are distinguished
        by the two prefixes <strong>absolute</strong> and <strong>relative</strong>.
      </p>

      <h2>Absolute and Relative Extrema</h2>

      <Callout type="definition" title="Absolute Maximum">
        <p>
          A real-valued function <InlineMath>{`f`}</InlineMath> is said to have an <strong>absolute
          maximum</strong> on a set <InlineMath>{`S`}</InlineMath> if there is at least one point
          <InlineMath>{`c`}</InlineMath> in <InlineMath>{`S`}</InlineMath> such that
        </p>
        <MathBlock>{`f(x) \\leq f(c) \\quad \\text{for all } x \\text{ in } S.`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Relative Maximum">
        <p>
          A function <InlineMath>{`f`}</InlineMath>, defined on a set <InlineMath>{`S`}</InlineMath>, is
          said to have a <strong>relative maximum</strong> (or <strong>local maximum</strong>)
          at a point <InlineMath>{`c`}</InlineMath> in <InlineMath>{`S`}</InlineMath> if there is some
          open interval <InlineMath>{`I`}</InlineMath> containing <InlineMath>{`c`}</InlineMath> such that
        </p>
        <MathBlock>{`f(x) \\leq f(c) \\quad \\text{for all } x \\text{ in } I \\cap S.`}</MathBlock>
        <p>
          The concept of <strong>relative minimum</strong> is similarly defined by reversing
          the inequality.
        </p>
      </Callout>

      <p>
        In other words, a relative maximum at <InlineMath>{`c`}</InlineMath> is an absolute maximum
        in some neighborhood of <InlineMath>{`c`}</InlineMath>, although it need not be an absolute
        maximum on the whole of <InlineMath>{`S`}</InlineMath>. Of course, every absolute maximum
        is, in particular, a relative maximum.
      </p>

      <Callout type="definition" title="Extremum">
        <p>
          A number which is either a relative maximum or a relative minimum of a function
          <InlineMath>{`f`}</InlineMath> is called an <strong>extreme value</strong> or an
          <strong> extremum</strong> of <InlineMath>{`f`}</InlineMath>.
        </p>
      </Callout>

      <h2>The Derivative at an Extremum</h2>
      <p>
        The following theorem relates extrema of a function to horizontal tangents of its graph.
      </p>

      <Callout type="theorem" title="Theorem 4.3 (Vanishing of the Derivative at an Interior Extremum)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be defined on an open interval <InlineMath>{`I`}</InlineMath>,
          and assume that <InlineMath>{`f`}</InlineMath> has a relative maximum or a relative minimum
          at an interior point <InlineMath>{`c`}</InlineMath> of <InlineMath>{`I`}</InlineMath>. If the
          derivative <InlineMath>{`f'(c)`}</InlineMath> exists, then
        </p>
        <MathBlock>{`f'(c) = 0.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof Sketch">
        <p>
          Define a function <InlineMath>{`Q`}</InlineMath> on <InlineMath>{`I`}</InlineMath> by:
        </p>
        <MathBlock>{`Q(x) = \\frac{f(x) - f(c)}{x - c} \\quad \\text{if } x \\neq c, \\qquad Q(c) = f'(c).`}</MathBlock>
        <p>
          Since <InlineMath>{`f'(c)`}</InlineMath> exists, <InlineMath>{`Q`}</InlineMath> is continuous at
          <InlineMath>{`c`}</InlineMath>. If <InlineMath>{`Q(c) > 0`}</InlineMath>, the sign-preserving
          property of continuous functions implies <InlineMath>{`Q(x) > 0`}</InlineMath> near
          <InlineMath>{`c`}</InlineMath>. This means <InlineMath>{`f(x) > f(c)`}</InlineMath> when
          <InlineMath>{`x > c`}</InlineMath> and <InlineMath>{`f(x) < f(c)`}</InlineMath> when
          <InlineMath>{`x < c`}</InlineMath>, contradicting that <InlineMath>{`f`}</InlineMath> has an
          extremum at <InlineMath>{`c`}</InlineMath>. Similarly, <InlineMath>{`Q(c) < 0`}</InlineMath>
          leads to a contradiction. Therefore <InlineMath>{`Q(c) = f'(c) = 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Important Observations</h2>

      <Callout type="info" title="A Zero Derivative Does Not Imply an Extremum">
        <p>
          Consider <InlineMath>{`f(x) = x^3`}</InlineMath>. Here <InlineMath>{`f'(x) = 3x^2`}</InlineMath>,
          so <InlineMath>{`f'(0) = 0`}</InlineMath>. However, this function is strictly increasing
          in every interval containing 0, so there is <em>no</em> extremum at 0.
        </p>
        <p>
          This example shows that a zero derivative at <InlineMath>{`c`}</InlineMath> is
          <strong> not sufficient</strong> for an extremum at <InlineMath>{`c`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="An Extremum May Occur Where the Derivative Does Not Exist">
        <p>
          Consider <InlineMath>{`f(x) = |x|`}</InlineMath>. There is a relative minimum at 0,
          but at the point 0 itself the graph has a sharp corner and there is no derivative.
        </p>
        <p>
          Theorem 4.3 assumes that <InlineMath>{`f'(c)`}</InlineMath> <em>exists</em> at the
          extremum. In other words, <em>in the absence of sharp corners</em>, the derivative
          must necessarily vanish at an extremum if this extremum occurs in the interior
          of an interval.
        </p>
      </Callout>

      <h2>Critical Points</h2>

      <Callout type="definition" title="Critical Point">
        <p>
          If <InlineMath>{`f`}</InlineMath> is continuous on a closed interval
          <InlineMath>{`[a, b]`}</InlineMath> and has a derivative at each interior point, then
          extrema can occur only at:
        </p>
        <ol>
          <li>The <strong>endpoints</strong> <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath></li>
          <li>Those <strong>interior points</strong> <InlineMath>{`x`}</InlineMath> where <InlineMath>{`f'(x) = 0`}</InlineMath></li>
        </ol>
        <p>
          Points of type (2) are called <strong>critical points</strong> of <InlineMath>{`f`}</InlineMath>.
        </p>
      </Callout>

      <h2>The First Derivative Test</h2>
      <p>
        To decide whether there is a maximum or minimum (or neither) at a critical point,
        we can examine how the derivative changes sign.
      </p>

      <Callout type="theorem" title="Theorem 4.7 (Sign of the Derivative)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be continuous on <InlineMath>{`[a, b]`}</InlineMath> and have
          a derivative at each point of <InlineMath>{`(a, b)`}</InlineMath>. Then:
        </p>
        <ul>
          <li>If <InlineMath>{`f'(x) > 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>,
              then <InlineMath>{`f`}</InlineMath> is <strong>strictly increasing</strong> on <InlineMath>{`[a, b]`}</InlineMath></li>
          <li>If <InlineMath>{`f'(x) < 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>,
              then <InlineMath>{`f`}</InlineMath> is <strong>strictly decreasing</strong> on <InlineMath>{`[a, b]`}</InlineMath></li>
          <li>If <InlineMath>{`f'(x) = 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>,
              then <InlineMath>{`f`}</InlineMath> is <strong>constant</strong> on <InlineMath>{`[a, b]`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Theorem 4.8 (First Derivative Test for Extrema)">
        <p>
          Assume <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`[a, b]`}</InlineMath> and
          the derivative <InlineMath>{`f'`}</InlineMath> exists everywhere in <InlineMath>{`(a, b)`}</InlineMath>,
          except possibly at a point <InlineMath>{`c`}</InlineMath>.
        </p>
        <ul>
          <li>
            If <InlineMath>{`f'(x) > 0`}</InlineMath> for all <InlineMath>{`x < c`}</InlineMath> and
            <InlineMath>{`f'(x) < 0`}</InlineMath> for all <InlineMath>{`x > c`}</InlineMath>, then
            <InlineMath>{`f`}</InlineMath> has a <strong>relative maximum</strong> at <InlineMath>{`c`}</InlineMath>.
          </li>
          <li>
            If <InlineMath>{`f'(x) < 0`}</InlineMath> for all <InlineMath>{`x < c`}</InlineMath> and
            <InlineMath>{`f'(x) > 0`}</InlineMath> for all <InlineMath>{`x > c`}</InlineMath>, then
            <InlineMath>{`f`}</InlineMath> has a <strong>relative minimum</strong> at <InlineMath>{`c`}</InlineMath>.
          </li>
        </ul>
        <p>
          In other words, an extremum occurs when the derivative <strong>changes sign</strong>.
        </p>
      </Callout>

      <h2>The Second Derivative Test</h2>
      <p>
        The sign of the second derivative at a critical point can also help determine
        whether we have a maximum or minimum.
      </p>

      <Callout type="theorem" title="Theorem 4.9 (Second Derivative Test for Extrema)">
        <p>
          Let <InlineMath>{`c`}</InlineMath> be a critical point of <InlineMath>{`f`}</InlineMath> in an
          open interval <InlineMath>{`(a, b)`}</InlineMath>; that is, assume <InlineMath>{`a < c < b`}</InlineMath>
          and <InlineMath>{`f'(c) = 0`}</InlineMath>. Assume also that the second derivative
          <InlineMath>{`f''`}</InlineMath> exists in <InlineMath>{`(a, b)`}</InlineMath>. Then:
        </p>
        <ul>
          <li>If <InlineMath>{`f''(x) < 0`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>, then
              <InlineMath>{`f`}</InlineMath> has a <strong>relative maximum</strong> at <InlineMath>{`c`}</InlineMath></li>
          <li>If <InlineMath>{`f''(x) > 0`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>, then
              <InlineMath>{`f`}</InlineMath> has a <strong>relative minimum</strong> at <InlineMath>{`c`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="info" title="Practical Form of the Second Derivative Test">
        <p>
          If <InlineMath>{`f''`}</InlineMath> is continuous at <InlineMath>{`c`}</InlineMath> and
          <InlineMath>{`f''(c) \\neq 0`}</InlineMath>, there will be a neighborhood of
          <InlineMath>{`c`}</InlineMath> in which <InlineMath>{`f''`}</InlineMath> has the same sign as
          <InlineMath>{`f''(c)`}</InlineMath>. Therefore, if <InlineMath>{`f'(c) = 0`}</InlineMath>:
        </p>
        <ul>
          <li><InlineMath>{`f''(c) < 0`}</InlineMath> implies a <strong>relative maximum</strong> at <InlineMath>{`c`}</InlineMath></li>
          <li><InlineMath>{`f''(c) > 0`}</InlineMath> implies a <strong>relative minimum</strong> at <InlineMath>{`c`}</InlineMath></li>
        </ul>
        <p>
          This simplified test works for most examples in practice.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Finding Extrema of a Polynomial">
        <p>
          Find all extrema of <InlineMath>{`f(x) = x^3 - 3x + 2`}</InlineMath> on <InlineMath>{`[-2, 2]`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          <strong>Step 1:</strong> Find critical points by setting <InlineMath>{`f'(x) = 0`}</InlineMath>:
        </p>
        <MathBlock>{`f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1) = 0`}</MathBlock>
        <p>Critical points: <InlineMath>{`x = -1`}</InlineMath> and <InlineMath>{`x = 1`}</InlineMath></p>
        <p>
          <strong>Step 2:</strong> Evaluate at critical points and endpoints:
        </p>
        <MathBlock>{`\\begin{aligned}
f(-2) &= (-2)^3 - 3(-2) + 2 = -8 + 6 + 2 = 0 \\
f(-1) &= (-1)^3 - 3(-1) + 2 = -1 + 3 + 2 = 4 \\
f(1) &= (1)^3 - 3(1) + 2 = 1 - 3 + 2 = 0 \\
f(2) &= (2)^3 - 3(2) + 2 = 8 - 6 + 2 = 4
\\end{aligned}`}</MathBlock>
        <p>
          <strong>Conclusion:</strong> Absolute maximum of 4 at <InlineMath>{`x = -1`}</InlineMath> and
          <InlineMath>{`x = 2`}</InlineMath>. Absolute minimum of 0 at <InlineMath>{`x = -2`}</InlineMath> and
          <InlineMath>{`x = 1`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Using the Second Derivative Test">
        <p>
          Classify the critical points of <InlineMath>{`f(x) = x^4 - 4x^3`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          <strong>Step 1:</strong> Find critical points:
        </p>
        <MathBlock>{`f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3) = 0`}</MathBlock>
        <p>Critical points: <InlineMath>{`x = 0`}</InlineMath> and <InlineMath>{`x = 3`}</InlineMath></p>
        <p>
          <strong>Step 2:</strong> Apply the second derivative test:
        </p>
        <MathBlock>{`f''(x) = 12x^2 - 24x = 12x(x - 2)`}</MathBlock>
        <p>At <InlineMath>{`x = 3`}</InlineMath>: <InlineMath>{`f''(3) = 12(3)(1) = 36 > 0`}</InlineMath>,
           so there is a <strong>relative minimum</strong> at <InlineMath>{`x = 3`}</InlineMath>.</p>
        <p>At <InlineMath>{`x = 0`}</InlineMath>: <InlineMath>{`f''(0) = 0`}</InlineMath>, so the second
           derivative test is <strong>inconclusive</strong>.</p>
        <p>
          <strong>Step 3:</strong> Use the first derivative test at <InlineMath>{`x = 0`}</InlineMath>:
        </p>
        <p>For <InlineMath>{`x < 0`}</InlineMath>: <InlineMath>{`f'(x) = 4x^2(x-3) < 0`}</InlineMath> (since <InlineMath>{`x - 3 < 0`}</InlineMath>)</p>
        <p>For <InlineMath>{`0 < x < 3`}</InlineMath>: <InlineMath>{`f'(x) = 4x^2(x-3) < 0`}</InlineMath> (since <InlineMath>{`x - 3 < 0`}</InlineMath>)</p>
        <p>
          The derivative doesn't change sign at <InlineMath>{`x = 0`}</InlineMath>, so there is
          <strong> neither a maximum nor a minimum</strong> at <InlineMath>{`x = 0`}</InlineMath>.
          This is an inflection point.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Optimization Problem">
        <p>
          A rectangular box with a square base and open top must have a volume of 32 cubic
          inches. Find the dimensions that minimize the surface area.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`x`}</InlineMath> = side of the square base and <InlineMath>{`h`}</InlineMath> = height.
        </p>
        <p>Volume constraint: <InlineMath>{`x^2 h = 32`}</InlineMath>, so <InlineMath>{`h = 32/x^2`}</InlineMath></p>
        <p>Surface area (no top): <InlineMath>{`S = x^2 + 4xh = x^2 + 4x \\cdot \\frac{32}{x^2} = x^2 + \\frac{128}{x}`}</InlineMath></p>
        <p>Find critical points:</p>
        <MathBlock>{`S'(x) = 2x - \\frac{128}{x^2} = \\frac{2x^3 - 128}{x^2} = 0`}</MathBlock>
        <p>So <InlineMath>{`x^3 = 64`}</InlineMath>, giving <InlineMath>{`x = 4`}</InlineMath>.</p>
        <p>Check with second derivative:</p>
        <MathBlock>{`S''(x) = 2 + \\frac{256}{x^3}`}</MathBlock>
        <p><InlineMath>{`S''(4) = 2 + 4 = 6 > 0`}</InlineMath>, confirming a minimum.</p>
        <p><strong>Conclusion:</strong> The dimensions are <InlineMath>{`x = 4`}</InlineMath> inches
           for the base and <InlineMath>{`h = 32/16 = 2`}</InlineMath> inches for the height.</p>
      </Callout>

      <h2>Strategy for Finding Extrema</h2>

      <Callout type="info" title="Procedure for Finding Absolute Extrema on [a, b]">
        <ol>
          <li><strong>Find all critical points</strong> by solving <InlineMath>{`f'(x) = 0`}</InlineMath></li>
          <li><strong>Evaluate</strong> <InlineMath>{`f`}</InlineMath> at each critical point in <InlineMath>{`[a, b]`}</InlineMath></li>
          <li><strong>Evaluate</strong> <InlineMath>{`f`}</InlineMath> at the endpoints <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath></li>
          <li><strong>Compare</strong> all values: the largest is the absolute maximum, the smallest is the absolute minimum</li>
        </ol>
      </Callout>

      <h2>Convexity and Concavity</h2>
      <p>
        The sign of the second derivative also governs the shape of the graph.
      </p>

      <Callout type="theorem" title="Theorem 4.10 (Derivative Test for Convexity)">
        <p>
          Assume <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`[a, b]`}</InlineMath> and
          has a derivative in <InlineMath>{`(a, b)`}</InlineMath>.
        </p>
        <ul>
          <li>If <InlineMath>{`f'`}</InlineMath> is increasing on <InlineMath>{`(a, b)`}</InlineMath>, then
              <InlineMath>{`f`}</InlineMath> is <strong>convex</strong> (concave up) on <InlineMath>{`[a, b]`}</InlineMath></li>
          <li>In particular, <InlineMath>{`f`}</InlineMath> is convex if <InlineMath>{`f'' \\geq 0`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath></li>
        </ul>
        <p>
          Similarly, <InlineMath>{`f`}</InlineMath> is <strong>concave</strong> (concave down) if
          <InlineMath>{`f'' \\leq 0`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          An <strong>absolute maximum</strong> is the largest value on the entire domain;
          a <strong>relative maximum</strong> is the largest value in some neighborhood.
        </li>
        <li>
          <strong>Theorem 4.3</strong>: If <InlineMath>{`f`}</InlineMath> has an extremum at an
          interior point <InlineMath>{`c`}</InlineMath> and <InlineMath>{`f'(c)`}</InlineMath> exists,
          then <InlineMath>{`f'(c) = 0`}</InlineMath>.
        </li>
        <li>
          A <strong>critical point</strong> is where <InlineMath>{`f'(x) = 0`}</InlineMath>.
          Extrema can occur at critical points or endpoints.
        </li>
        <li>
          <strong>First Derivative Test</strong>: An extremum occurs where the derivative
          changes sign.
        </li>
        <li>
          <strong>Second Derivative Test</strong>: At a critical point, <InlineMath>{`f''(c) < 0`}</InlineMath>
          indicates a maximum; <InlineMath>{`f''(c) > 0`}</InlineMath> indicates a minimum.
        </li>
        <li>
          A zero derivative is <em>necessary</em> but <em>not sufficient</em> for an extremum
          (e.g., <InlineMath>{`f(x) = x^3`}</InlineMath> has <InlineMath>{`f'(0) = 0`}</InlineMath> but no
          extremum at 0).
        </li>
      </ul>
    </LessonLayout>
  );
}
