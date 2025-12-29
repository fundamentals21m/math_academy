import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          A real-valued function <MathInline>{`f`}</MathInline> is said to have an <strong>absolute
          maximum</strong> on a set <MathInline>{`S`}</MathInline> if there is at least one point
          <MathInline>{`c`}</MathInline> in <MathInline>{`S`}</MathInline> such that
        </p>
        <MathBlock>{`f(x) \\leq f(c) \\quad \\text{for all } x \\text{ in } S.`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Relative Maximum">
        <p>
          A function <MathInline>{`f`}</MathInline>, defined on a set <MathInline>{`S`}</MathInline>, is
          said to have a <strong>relative maximum</strong> (or <strong>local maximum</strong>)
          at a point <MathInline>{`c`}</MathInline> in <MathInline>{`S`}</MathInline> if there is some
          open interval <MathInline>{`I`}</MathInline> containing <MathInline>{`c`}</MathInline> such that
        </p>
        <MathBlock>{`f(x) \\leq f(c) \\quad \\text{for all } x \\text{ in } I \\cap S.`}</MathBlock>
        <p>
          The concept of <strong>relative minimum</strong> is similarly defined by reversing
          the inequality.
        </p>
      </Callout>

      <p>
        In other words, a relative maximum at <MathInline>{`c`}</MathInline> is an absolute maximum
        in some neighborhood of <MathInline>{`c`}</MathInline>, although it need not be an absolute
        maximum on the whole of <MathInline>{`S`}</MathInline>. Of course, every absolute maximum
        is, in particular, a relative maximum.
      </p>

      <Callout type="definition" title="Extremum">
        <p>
          A number which is either a relative maximum or a relative minimum of a function
          <MathInline>{`f`}</MathInline> is called an <strong>extreme value</strong> or an
          <strong> extremum</strong> of <MathInline>{`f`}</MathInline>.
        </p>
      </Callout>

      <h2>The Derivative at an Extremum</h2>
      <p>
        The following theorem relates extrema of a function to horizontal tangents of its graph.
      </p>

      <Callout type="theorem" title="Theorem 4.3 (Vanishing of the Derivative at an Interior Extremum)">
        <p>
          Let <MathInline>{`f`}</MathInline> be defined on an open interval <MathInline>{`I`}</MathInline>,
          and assume that <MathInline>{`f`}</MathInline> has a relative maximum or a relative minimum
          at an interior point <MathInline>{`c`}</MathInline> of <MathInline>{`I`}</MathInline>. If the
          derivative <MathInline>{`f'(c)`}</MathInline> exists, then
        </p>
        <MathBlock>{`f'(c) = 0.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof Sketch">
        <p>
          Define a function <MathInline>{`Q`}</MathInline> on <MathInline>{`I`}</MathInline> by:
        </p>
        <MathBlock>{`Q(x) = \\frac{f(x) - f(c)}{x - c} \\quad \\text{if } x \\neq c, \\qquad Q(c) = f'(c).`}</MathBlock>
        <p>
          Since <MathInline>{`f'(c)`}</MathInline> exists, <MathInline>{`Q`}</MathInline> is continuous at
          <MathInline>{`c`}</MathInline>. If <MathInline>{`Q(c) > 0`}</MathInline>, the sign-preserving
          property of continuous functions implies <MathInline>{`Q(x) > 0`}</MathInline> near
          <MathInline>{`c`}</MathInline>. This means <MathInline>{`f(x) > f(c)`}</MathInline> when
          <MathInline>{`x > c`}</MathInline> and <MathInline>{`f(x) < f(c)`}</MathInline> when
          <MathInline>{`x < c`}</MathInline>, contradicting that <MathInline>{`f`}</MathInline> has an
          extremum at <MathInline>{`c`}</MathInline>. Similarly, <MathInline>{`Q(c) < 0`}</MathInline>
          leads to a contradiction. Therefore <MathInline>{`Q(c) = f'(c) = 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Important Observations</h2>

      <Callout type="info" title="A Zero Derivative Does Not Imply an Extremum">
        <p>
          Consider <MathInline>{`f(x) = x^3`}</MathInline>. Here <MathInline>{`f'(x) = 3x^2`}</MathInline>,
          so <MathInline>{`f'(0) = 0`}</MathInline>. However, this function is strictly increasing
          in every interval containing 0, so there is <em>no</em> extremum at 0.
        </p>
        <p>
          This example shows that a zero derivative at <MathInline>{`c`}</MathInline> is
          <strong> not sufficient</strong> for an extremum at <MathInline>{`c`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="An Extremum May Occur Where the Derivative Does Not Exist">
        <p>
          Consider <MathInline>{`f(x) = |x|`}</MathInline>. There is a relative minimum at 0,
          but at the point 0 itself the graph has a sharp corner and there is no derivative.
        </p>
        <p>
          Theorem 4.3 assumes that <MathInline>{`f'(c)`}</MathInline> <em>exists</em> at the
          extremum. In other words, <em>in the absence of sharp corners</em>, the derivative
          must necessarily vanish at an extremum if this extremum occurs in the interior
          of an interval.
        </p>
      </Callout>

      <h2>Critical Points</h2>

      <Callout type="definition" title="Critical Point">
        <p>
          If <MathInline>{`f`}</MathInline> is continuous on a closed interval
          <MathInline>{`[a, b]`}</MathInline> and has a derivative at each interior point, then
          extrema can occur only at:
        </p>
        <ol>
          <li>The <strong>endpoints</strong> <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline></li>
          <li>Those <strong>interior points</strong> <MathInline>{`x`}</MathInline> where <MathInline>{`f'(x) = 0`}</MathInline></li>
        </ol>
        <p>
          Points of type (2) are called <strong>critical points</strong> of <MathInline>{`f`}</MathInline>.
        </p>
      </Callout>

      <h2>The First Derivative Test</h2>
      <p>
        To decide whether there is a maximum or minimum (or neither) at a critical point,
        we can examine how the derivative changes sign.
      </p>

      <Callout type="theorem" title="Theorem 4.7 (Sign of the Derivative)">
        <p>
          Let <MathInline>{`f`}</MathInline> be continuous on <MathInline>{`[a, b]`}</MathInline> and have
          a derivative at each point of <MathInline>{`(a, b)`}</MathInline>. Then:
        </p>
        <ul>
          <li>If <MathInline>{`f'(x) > 0`}</MathInline> for all <MathInline>{`x`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>,
              then <MathInline>{`f`}</MathInline> is <strong>strictly increasing</strong> on <MathInline>{`[a, b]`}</MathInline></li>
          <li>If <MathInline>{`f'(x) < 0`}</MathInline> for all <MathInline>{`x`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>,
              then <MathInline>{`f`}</MathInline> is <strong>strictly decreasing</strong> on <MathInline>{`[a, b]`}</MathInline></li>
          <li>If <MathInline>{`f'(x) = 0`}</MathInline> for all <MathInline>{`x`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>,
              then <MathInline>{`f`}</MathInline> is <strong>constant</strong> on <MathInline>{`[a, b]`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Theorem 4.8 (First Derivative Test for Extrema)">
        <p>
          Assume <MathInline>{`f`}</MathInline> is continuous on <MathInline>{`[a, b]`}</MathInline> and
          the derivative <MathInline>{`f'`}</MathInline> exists everywhere in <MathInline>{`(a, b)`}</MathInline>,
          except possibly at a point <MathInline>{`c`}</MathInline>.
        </p>
        <ul>
          <li>
            If <MathInline>{`f'(x) > 0`}</MathInline> for all <MathInline>{`x < c`}</MathInline> and
            <MathInline>{`f'(x) < 0`}</MathInline> for all <MathInline>{`x > c`}</MathInline>, then
            <MathInline>{`f`}</MathInline> has a <strong>relative maximum</strong> at <MathInline>{`c`}</MathInline>.
          </li>
          <li>
            If <MathInline>{`f'(x) < 0`}</MathInline> for all <MathInline>{`x < c`}</MathInline> and
            <MathInline>{`f'(x) > 0`}</MathInline> for all <MathInline>{`x > c`}</MathInline>, then
            <MathInline>{`f`}</MathInline> has a <strong>relative minimum</strong> at <MathInline>{`c`}</MathInline>.
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
          Let <MathInline>{`c`}</MathInline> be a critical point of <MathInline>{`f`}</MathInline> in an
          open interval <MathInline>{`(a, b)`}</MathInline>; that is, assume <MathInline>{`a < c < b`}</MathInline>
          and <MathInline>{`f'(c) = 0`}</MathInline>. Assume also that the second derivative
          <MathInline>{`f''`}</MathInline> exists in <MathInline>{`(a, b)`}</MathInline>. Then:
        </p>
        <ul>
          <li>If <MathInline>{`f''(x) < 0`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>, then
              <MathInline>{`f`}</MathInline> has a <strong>relative maximum</strong> at <MathInline>{`c`}</MathInline></li>
          <li>If <MathInline>{`f''(x) > 0`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>, then
              <MathInline>{`f`}</MathInline> has a <strong>relative minimum</strong> at <MathInline>{`c`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="info" title="Practical Form of the Second Derivative Test">
        <p>
          If <MathInline>{`f''`}</MathInline> is continuous at <MathInline>{`c`}</MathInline> and
          <MathInline>{`f''(c) \\neq 0`}</MathInline>, there will be a neighborhood of
          <MathInline>{`c`}</MathInline> in which <MathInline>{`f''`}</MathInline> has the same sign as
          <MathInline>{`f''(c)`}</MathInline>. Therefore, if <MathInline>{`f'(c) = 0`}</MathInline>:
        </p>
        <ul>
          <li><MathInline>{`f''(c) < 0`}</MathInline> implies a <strong>relative maximum</strong> at <MathInline>{`c`}</MathInline></li>
          <li><MathInline>{`f''(c) > 0`}</MathInline> implies a <strong>relative minimum</strong> at <MathInline>{`c`}</MathInline></li>
        </ul>
        <p>
          This simplified test works for most examples in practice.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 1: Finding Extrema of a Polynomial">
        <p>
          Find all extrema of <MathInline>{`f(x) = x^3 - 3x + 2`}</MathInline> on <MathInline>{`[-2, 2]`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          <strong>Step 1:</strong> Find critical points by setting <MathInline>{`f'(x) = 0`}</MathInline>:
        </p>
        <MathBlock>{`f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1) = 0`}</MathBlock>
        <p>Critical points: <MathInline>{`x = -1`}</MathInline> and <MathInline>{`x = 1`}</MathInline></p>
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
          <strong>Conclusion:</strong> Absolute maximum of 4 at <MathInline>{`x = -1`}</MathInline> and
          <MathInline>{`x = 2`}</MathInline>. Absolute minimum of 0 at <MathInline>{`x = -2`}</MathInline> and
          <MathInline>{`x = 1`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Using the Second Derivative Test">
        <p>
          Classify the critical points of <MathInline>{`f(x) = x^4 - 4x^3`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          <strong>Step 1:</strong> Find critical points:
        </p>
        <MathBlock>{`f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3) = 0`}</MathBlock>
        <p>Critical points: <MathInline>{`x = 0`}</MathInline> and <MathInline>{`x = 3`}</MathInline></p>
        <p>
          <strong>Step 2:</strong> Apply the second derivative test:
        </p>
        <MathBlock>{`f''(x) = 12x^2 - 24x = 12x(x - 2)`}</MathBlock>
        <p>At <MathInline>{`x = 3`}</MathInline>: <MathInline>{`f''(3) = 12(3)(1) = 36 > 0`}</MathInline>,
           so there is a <strong>relative minimum</strong> at <MathInline>{`x = 3`}</MathInline>.</p>
        <p>At <MathInline>{`x = 0`}</MathInline>: <MathInline>{`f''(0) = 0`}</MathInline>, so the second
           derivative test is <strong>inconclusive</strong>.</p>
        <p>
          <strong>Step 3:</strong> Use the first derivative test at <MathInline>{`x = 0`}</MathInline>:
        </p>
        <p>For <MathInline>{`x < 0`}</MathInline>: <MathInline>{`f'(x) = 4x^2(x-3) < 0`}</MathInline> (since <MathInline>{`x - 3 < 0`}</MathInline>)</p>
        <p>For <MathInline>{`0 < x < 3`}</MathInline>: <MathInline>{`f'(x) = 4x^2(x-3) < 0`}</MathInline> (since <MathInline>{`x - 3 < 0`}</MathInline>)</p>
        <p>
          The derivative doesn't change sign at <MathInline>{`x = 0`}</MathInline>, so there is
          <strong> neither a maximum nor a minimum</strong> at <MathInline>{`x = 0`}</MathInline>.
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
          Let <MathInline>{`x`}</MathInline> = side of the square base and <MathInline>{`h`}</MathInline> = height.
        </p>
        <p>Volume constraint: <MathInline>{`x^2 h = 32`}</MathInline>, so <MathInline>{`h = 32/x^2`}</MathInline></p>
        <p>Surface area (no top): <MathInline>{`S = x^2 + 4xh = x^2 + 4x \\cdot \\frac{32}{x^2} = x^2 + \\frac{128}{x}`}</MathInline></p>
        <p>Find critical points:</p>
        <MathBlock>{`S'(x) = 2x - \\frac{128}{x^2} = \\frac{2x^3 - 128}{x^2} = 0`}</MathBlock>
        <p>So <MathInline>{`x^3 = 64`}</MathInline>, giving <MathInline>{`x = 4`}</MathInline>.</p>
        <p>Check with second derivative:</p>
        <MathBlock>{`S''(x) = 2 + \\frac{256}{x^3}`}</MathBlock>
        <p><MathInline>{`S''(4) = 2 + 4 = 6 > 0`}</MathInline>, confirming a minimum.</p>
        <p><strong>Conclusion:</strong> The dimensions are <MathInline>{`x = 4`}</MathInline> inches
           for the base and <MathInline>{`h = 32/16 = 2`}</MathInline> inches for the height.</p>
      </Callout>

      <h2>Strategy for Finding Extrema</h2>

      <Callout type="info" title="Procedure for Finding Absolute Extrema on [a, b]">
        <ol>
          <li><strong>Find all critical points</strong> by solving <MathInline>{`f'(x) = 0`}</MathInline></li>
          <li><strong>Evaluate</strong> <MathInline>{`f`}</MathInline> at each critical point in <MathInline>{`[a, b]`}</MathInline></li>
          <li><strong>Evaluate</strong> <MathInline>{`f`}</MathInline> at the endpoints <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline></li>
          <li><strong>Compare</strong> all values: the largest is the absolute maximum, the smallest is the absolute minimum</li>
        </ol>
      </Callout>

      <h2>Convexity and Concavity</h2>
      <p>
        The sign of the second derivative also governs the shape of the graph.
      </p>

      <Callout type="theorem" title="Theorem 4.10 (Derivative Test for Convexity)">
        <p>
          Assume <MathInline>{`f`}</MathInline> is continuous on <MathInline>{`[a, b]`}</MathInline> and
          has a derivative in <MathInline>{`(a, b)`}</MathInline>.
        </p>
        <ul>
          <li>If <MathInline>{`f'`}</MathInline> is increasing on <MathInline>{`(a, b)`}</MathInline>, then
              <MathInline>{`f`}</MathInline> is <strong>convex</strong> (concave up) on <MathInline>{`[a, b]`}</MathInline></li>
          <li>In particular, <MathInline>{`f`}</MathInline> is convex if <MathInline>{`f'' \\geq 0`}</MathInline> in <MathInline>{`(a, b)`}</MathInline></li>
        </ul>
        <p>
          Similarly, <MathInline>{`f`}</MathInline> is <strong>concave</strong> (concave down) if
          <MathInline>{`f'' \\leq 0`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          An <strong>absolute maximum</strong> is the largest value on the entire domain;
          a <strong>relative maximum</strong> is the largest value in some neighborhood.
        </li>
        <li>
          <strong>Theorem 4.3</strong>: If <MathInline>{`f`}</MathInline> has an extremum at an
          interior point <MathInline>{`c`}</MathInline> and <MathInline>{`f'(c)`}</MathInline> exists,
          then <MathInline>{`f'(c) = 0`}</MathInline>.
        </li>
        <li>
          A <strong>critical point</strong> is where <MathInline>{`f'(x) = 0`}</MathInline>.
          Extrema can occur at critical points or endpoints.
        </li>
        <li>
          <strong>First Derivative Test</strong>: An extremum occurs where the derivative
          changes sign.
        </li>
        <li>
          <strong>Second Derivative Test</strong>: At a critical point, <MathInline>{`f''(c) < 0`}</MathInline>
          indicates a maximum; <MathInline>{`f''(c) > 0`}</MathInline> indicates a minimum.
        </li>
        <li>
          A zero derivative is <em>necessary</em> but <em>not sufficient</em> for an extremum
          (e.g., <MathInline>{`f(x) = x^3`}</MathInline> has <MathInline>{`f'(0) = 0`}</MathInline> but no
          extremum at 0).
        </li>
      </ul>
    </LessonLayout>
  );
}
