import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <p>
        One of the most important properties of continuous functions on closed intervals is that
        they attain their maximum and minimum values. This result, known as the
        <strong> extreme-value theorem</strong>, has profound consequences for calculus and
        optimization.
      </p>

      <h2>Absolute Maximum and Minimum</h2>
      <p>
        Let <InlineMath>{`f`}</InlineMath> be a real-valued function defined on a set <InlineMath>{`S`}</InlineMath>
        of real numbers.
      </p>

      <Callout type="definition" title="Absolute Maximum">
        <p>
          The function <InlineMath>{`f`}</InlineMath> is said to have an <strong>absolute maximum</strong>
          on the set <InlineMath>{`S`}</InlineMath> if there is at least one point <InlineMath>{`c`}</InlineMath>
          in <InlineMath>{`S`}</InlineMath> such that
        </p>
        <MathBlock>{`f(x) \\leq f(c) \\quad \\text{for all } x \\text{ in } S.`}</MathBlock>
        <p>
          The number <InlineMath>{`f(c)`}</InlineMath> is called the <strong>absolute maximum value</strong>
          of <InlineMath>{`f`}</InlineMath> on <InlineMath>{`S`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition" title="Absolute Minimum">
        <p>
          The function <InlineMath>{`f`}</InlineMath> is said to have an <strong>absolute minimum</strong>
          on the set <InlineMath>{`S`}</InlineMath> if there is a point <InlineMath>{`d`}</InlineMath> in
          <InlineMath>{`S`}</InlineMath> such that
        </p>
        <MathBlock>{`f(x) \\geq f(d) \\quad \\text{for all } x \\text{ in } S.`}</MathBlock>
        <p>
          The number <InlineMath>{`f(d)`}</InlineMath> is called the <strong>absolute minimum value</strong>
          of <InlineMath>{`f`}</InlineMath> on <InlineMath>{`S`}</InlineMath>.
        </p>
      </Callout>

      <h2>Examples</h2>
      <Callout type="example" title="Example 1: Sine Function">
        <p>
          Let <InlineMath>{`S = [0, \\pi]`}</InlineMath> and <InlineMath>{`f(x) = \\sin x`}</InlineMath>.
          The absolute minimum, which occurs at both endpoints of the interval, is
          <InlineMath>{`0`}</InlineMath>. The absolute maximum is <InlineMath>{`f(\\pi/2) = 1`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: A Discontinuous Function">
        <p>
          Let <InlineMath>{`S = [0, 2]`}</InlineMath> and define
        </p>
        <MathBlock>{`f(x) = \\begin{cases} \\dfrac{1}{x} & \\text{if } x > 0 \\[8pt] 1 & \\text{if } x = 0 \\end{cases}`}</MathBlock>
        <p>
          In this example, <InlineMath>{`f`}</InlineMath> has an absolute minimum at
          <InlineMath>{`x = 2`}</InlineMath> (where <InlineMath>{`f(2) = 1/2`}</InlineMath>), but it has
          <em>no absolute maximum</em>. It fails to have a maximum because of a discontinuity
          at a point of <InlineMath>{`S`}</InlineMath>—as <InlineMath>{`x \\to 0^+`}</InlineMath>,
          the function values become arbitrarily large.
        </p>
      </Callout>

      <p>
        The second example shows that without continuity, a function on a closed interval may
        fail to have an absolute maximum or minimum. The extreme-value theorem tells us that
        continuity guarantees both exist.
      </p>

      <h2>The Boundedness Theorem</h2>
      <p>
        Before proving the extreme-value theorem, we need a preliminary result: continuous
        functions on closed intervals are bounded.
      </p>

      <Callout type="theorem" title="Theorem 3.11 (Boundedness Theorem)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be continuous on a closed interval <InlineMath>{`[a, b]`}</InlineMath>.
          Then <InlineMath>{`f`}</InlineMath> is bounded on <InlineMath>{`[a, b]`}</InlineMath>. That is, there
          is a number <InlineMath>{`C > 0`}</InlineMath> such that
        </p>
        <MathBlock>{`|f(x)| \\leq C \\quad \\text{for all } x \\text{ in } [a, b].`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof (Method of Successive Bisection)">
        <p>
          We argue by contradiction, using a technique called the <strong>method of successive
          bisection</strong>. Assume that <InlineMath>{`f`}</InlineMath> is unbounded on
          <InlineMath>{`[a, b]`}</InlineMath>. Let <InlineMath>{`c`}</InlineMath> be the midpoint of
          <InlineMath>{`[a, b]`}</InlineMath>. Since <InlineMath>{`f`}</InlineMath> is unbounded on
          <InlineMath>{`[a, b]`}</InlineMath>, it is unbounded on at least one of the subintervals
          <InlineMath>{`[a, c]`}</InlineMath> or <InlineMath>{`[c, b]`}</InlineMath>.
        </p>
        <p>
          Let <InlineMath>{`[a_1, b_1]`}</InlineMath> be that half of <InlineMath>{`[a, b]`}</InlineMath> in
          which <InlineMath>{`f`}</InlineMath> is unbounded. (If <InlineMath>{`f`}</InlineMath> is unbounded
          in both halves, let <InlineMath>{`[a_1, b_1]`}</InlineMath> be the left half.)
        </p>
        <p>
          Continue the bisection process repeatedly, denoting by
          <InlineMath>{`[a_{n+1}, b_{n+1}]`}</InlineMath> that half of <InlineMath>{`[a_n, b_n]`}</InlineMath>
          in which <InlineMath>{`f`}</InlineMath> is unbounded. Note that the length of
          <InlineMath>{`[a_n, b_n]`}</InlineMath> is <InlineMath>{`(b-a)/2^n`}</InlineMath>.
        </p>
        <p>
          Let <InlineMath>{`A`}</InlineMath> denote the set of leftmost endpoints
          <InlineMath>{`a, a_1, a_2, \\ldots`}</InlineMath> so constructed, and let
          <InlineMath>{`\\alpha = \\sup A`}</InlineMath>. Then <InlineMath>{`\\alpha`}</InlineMath> lies in
          <InlineMath>{`[a, b]`}</InlineMath>. By continuity of <InlineMath>{`f`}</InlineMath> at
          <InlineMath>{`\\alpha`}</InlineMath>, there is an interval of the form
          <InlineMath>{`(\\alpha - \\delta, \\alpha + \\delta)`}</InlineMath> in which
        </p>
        <MathBlock>{`|f(x) - f(\\alpha)| < 1.`}</MathBlock>
        <p>
          This implies <InlineMath>{`|f(x)| < 1 + |f(\\alpha)|`}</InlineMath>, so <InlineMath>{`f`}</InlineMath>
          is bounded by <InlineMath>{`1 + |f(\\alpha)|`}</InlineMath> in this interval.
        </p>
        <p>
          However, when <InlineMath>{`n`}</InlineMath> is so large that
          <InlineMath>{`(b-a)/2^n < \\delta`}</InlineMath>, the interval <InlineMath>{`[a_n, b_n]`}</InlineMath>
          lies inside <InlineMath>{`(\\alpha - \\delta, \\alpha + \\delta)`}</InlineMath>. Therefore
          <InlineMath>{`f`}</InlineMath> is bounded on <InlineMath>{`[a_n, b_n]`}</InlineMath>, contradicting
          the fact that <InlineMath>{`f`}</InlineMath> is unbounded on <InlineMath>{`[a_n, b_n]`}</InlineMath>.
          This contradiction completes the proof.
        </p>
      </Callout>

      <h2>Supremum and Infimum of a Function</h2>
      <p>
        If <InlineMath>{`f`}</InlineMath> is bounded on <InlineMath>{`[a, b]`}</InlineMath>, then the set of
        all function values <InlineMath>{`f(x)`}</InlineMath> is bounded above and below. Therefore,
        this set has a supremum and an infimum, which we denote by
        <InlineMath>{`\\sup f`}</InlineMath> and <InlineMath>{`\\inf f`}</InlineMath>, respectively:
      </p>

      <MathBlock>{`\\sup f = \\sup\\{f(x) \\mid a \\leq x \\leq b\\}`}</MathBlock>
      <MathBlock>{`\\inf f = \\inf\\{f(x) \\mid a \\leq x \\leq b\\}`}</MathBlock>

      <p>
        For any bounded function we have:
      </p>
      <MathBlock>{`\\inf f \\leq f(x) \\leq \\sup f \\quad \\text{for all } x \\text{ in } [a, b].`}</MathBlock>

      <p>
        The extreme-value theorem tells us that a continuous function actually
        <em>attains</em> both values <InlineMath>{`\\inf f`}</InlineMath> and
        <InlineMath>{`\\sup f`}</InlineMath> somewhere in <InlineMath>{`[a, b]`}</InlineMath>.
      </p>

      <h2>The Extreme-Value Theorem</h2>

      <Callout type="theorem" title="Theorem 3.12 (Extreme-Value Theorem)">
        <p>
          Assume <InlineMath>{`f`}</InlineMath> is continuous on a closed interval
          <InlineMath>{`[a, b]`}</InlineMath>. Then there exist points <InlineMath>{`c`}</InlineMath> and
          <InlineMath>{`d`}</InlineMath> in <InlineMath>{`[a, b]`}</InlineMath> such that
        </p>
        <MathBlock>{`f(c) = \\sup f \\quad \\text{and} \\quad f(d) = \\inf f.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          It suffices to prove that <InlineMath>{`f`}</InlineMath> attains its supremum in
          <InlineMath>{`[a, b]`}</InlineMath>. The result for the infimum then follows as a consequence
          because the infimum of <InlineMath>{`f`}</InlineMath> is the supremum of
          <InlineMath>{`-f`}</InlineMath>.
        </p>
        <p>
          Let <InlineMath>{`M = \\sup f`}</InlineMath>. We shall assume that there is no
          <InlineMath>{`x`}</InlineMath> in <InlineMath>{`[a, b]`}</InlineMath> for which
          <InlineMath>{`f(x) = M`}</InlineMath> and obtain a contradiction.
        </p>
        <p>
          Let <InlineMath>{`g(x) = M - f(x)`}</InlineMath>. Then <InlineMath>{`g(x) > 0`}</InlineMath> for all
          <InlineMath>{`x`}</InlineMath> in <InlineMath>{`[a, b]`}</InlineMath>, so the reciprocal
          <InlineMath>{`1/g`}</InlineMath> is continuous on <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
        <p>
          By the Boundedness Theorem (Theorem 3.11), <InlineMath>{`1/g`}</InlineMath> is bounded on
          <InlineMath>{`[a, b]`}</InlineMath>, say <InlineMath>{`1/g(x) < C`}</InlineMath> for all
          <InlineMath>{`x`}</InlineMath> in <InlineMath>{`[a, b]`}</InlineMath>, where
          <InlineMath>{`C > 0`}</InlineMath>.
        </p>
        <p>
          This implies <InlineMath>{`M - f(x) > 1/C`}</InlineMath>, so that
        </p>
        <MathBlock>{`f(x) < M - \\frac{1}{C} \\quad \\text{for all } x \\text{ in } [a, b].`}</MathBlock>
        <p>
          This contradicts the fact that <InlineMath>{`M`}</InlineMath> is the <em>least</em> upper
          bound of <InlineMath>{`f`}</InlineMath> on <InlineMath>{`[a, b]`}</InlineMath>. Hence,
          <InlineMath>{`f(x) = M`}</InlineMath> for at least one <InlineMath>{`x`}</InlineMath> in
          <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
      </Callout>

      <h2>The Range of a Continuous Function</h2>
      <p>
        Combining the extreme-value theorem with the intermediate-value theorem gives us a
        complete characterization of the range of a continuous function on a closed interval.
      </p>

      <Callout type="theorem" title="Range Theorem">
        <p>
          If <InlineMath>{`f`}</InlineMath> is continuous on <InlineMath>{`[a, b]`}</InlineMath>, then
          <InlineMath>{`\\sup f`}</InlineMath> is its absolute maximum, and <InlineMath>{`\\inf f`}</InlineMath>
          is its absolute minimum. Hence, by the intermediate-value theorem, the range of
          <InlineMath>{`f`}</InlineMath> is the closed interval <InlineMath>{`[\\inf f, \\sup f]`}</InlineMath>.
        </p>
      </Callout>

      <p>
        This is a remarkable result: the continuous image of a closed interval is again a
        closed interval. This preservation of "closedness" is a key property of continuous
        functions.
      </p>

      <h2>Why Closed Intervals Are Essential</h2>
      <p>
        The extreme-value theorem requires both:
      </p>
      <ul>
        <li><strong>Continuity</strong> of the function on the interval</li>
        <li>The interval must be <strong>closed</strong> (include its endpoints)</li>
      </ul>

      <Callout type="example" title="Counterexample: Open Interval">
        <p>
          Consider <InlineMath>{`f(x) = x`}</InlineMath> on the open interval <InlineMath>{`(0, 1)`}</InlineMath>.
          Although <InlineMath>{`f`}</InlineMath> is continuous everywhere, it has no maximum or minimum
          on <InlineMath>{`(0, 1)`}</InlineMath> because:
        </p>
        <ul>
          <li>
            <InlineMath>{`\\sup f = 1`}</InlineMath>, but there is no <InlineMath>{`x`}</InlineMath> in
            <InlineMath>{`(0, 1)`}</InlineMath> with <InlineMath>{`f(x) = 1`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\inf f = 0`}</InlineMath>, but there is no <InlineMath>{`x`}</InlineMath> in
            <InlineMath>{`(0, 1)`}</InlineMath> with <InlineMath>{`f(x) = 0`}</InlineMath>
          </li>
        </ul>
        <p>
          The endpoints where the extrema would be attained are not in the domain.
        </p>
      </Callout>

      <Callout type="example" title="Counterexample: Unbounded Interval">
        <p>
          Consider <InlineMath>{`f(x) = x`}</InlineMath> on <InlineMath>{`[0, \\infty)`}</InlineMath>.
          Although <InlineMath>{`f`}</InlineMath> is continuous and the interval is "closed" at one end,
          the function has no maximum because <InlineMath>{`f(x)`}</InlineMath> becomes arbitrarily large
          as <InlineMath>{`x \\to \\infty`}</InlineMath>.
        </p>
      </Callout>

      <h2>The Method of Successive Bisection</h2>
      <p>
        The proof technique used above—<strong>successive bisection</strong>—is a powerful
        method that appears repeatedly in analysis. The key ideas are:
      </p>
      <ol>
        <li>
          <strong>Bisect the interval:</strong> At each step, the interval is cut in half.
        </li>
        <li>
          <strong>Select one half:</strong> Choose the half where the property we're studying
          (unboundedness, in our case) holds.
        </li>
        <li>
          <strong>Generate a sequence:</strong> The nested intervals
          <InlineMath>{`[a_n, b_n]`}</InlineMath> have lengths tending to zero.
        </li>
        <li>
          <strong>Find the limit point:</strong> The supremum of the left endpoints gives a
          point <InlineMath>{`\\alpha`}</InlineMath> contained in all intervals.
        </li>
        <li>
          <strong>Use continuity:</strong> The continuity of <InlineMath>{`f`}</InlineMath> at
          <InlineMath>{`\\alpha`}</InlineMath> leads to a contradiction.
        </li>
      </ol>

      <h2>Applications</h2>
      <p>
        The extreme-value theorem has many important applications:
      </p>
      <ul>
        <li>
          <strong>Optimization:</strong> It guarantees that continuous functions on closed
          intervals have optimal values, which is foundational for calculus-based optimization.
        </li>
        <li>
          <strong>Existence theorems:</strong> Many existence results in differential equations
          and other areas rely on the extreme-value theorem.
        </li>
        <li>
          <strong>Numerical methods:</strong> The theorem justifies algorithms that search for
          maximum and minimum values on closed intervals.
        </li>
      </ul>

      <h2>Summary</h2>
      <p>
        The extreme-value theorem is one of the fundamental results about continuous functions:
      </p>
      <ul>
        <li>
          <strong>Boundedness:</strong> A continuous function on <InlineMath>{`[a, b]`}</InlineMath>
          is bounded.
        </li>
        <li>
          <strong>Attainment of extrema:</strong> The supremum and infimum of the function
          values are actually achieved at some points in the interval.
        </li>
        <li>
          <strong>Range characterization:</strong> The range of a continuous function on
          <InlineMath>{`[a, b]`}</InlineMath> is a closed interval
          <InlineMath>{`[\\inf f, \\sup f]`}</InlineMath>.
        </li>
        <li>
          <strong>Necessity of hypotheses:</strong> Both continuity and the "closedness" of
          the interval are essential; removing either can cause the theorem to fail.
        </li>
      </ul>
      <p>
        Together with Bolzano's theorem and the intermediate-value theorem, the extreme-value
        theorem forms the core of the theory of continuous functions on closed intervals.
      </p>
    </LessonLayout>
  );
}
