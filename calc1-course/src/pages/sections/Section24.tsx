import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        Let <MathInline>{`f`}</MathInline> be a real-valued function defined on a set <MathInline>{`S`}</MathInline>
        of real numbers.
      </p>

      <Callout type="definition" title="Absolute Maximum">
        <p>
          The function <MathInline>{`f`}</MathInline> is said to have an <strong>absolute maximum</strong>
          on the set <MathInline>{`S`}</MathInline> if there is at least one point <MathInline>{`c`}</MathInline>
          in <MathInline>{`S`}</MathInline> such that
        </p>
        <MathBlock>{`f(x) \\leq f(c) \\quad \\text{for all } x \\text{ in } S.`}</MathBlock>
        <p>
          The number <MathInline>{`f(c)`}</MathInline> is called the <strong>absolute maximum value</strong>
          of <MathInline>{`f`}</MathInline> on <MathInline>{`S`}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition" title="Absolute Minimum">
        <p>
          The function <MathInline>{`f`}</MathInline> is said to have an <strong>absolute minimum</strong>
          on the set <MathInline>{`S`}</MathInline> if there is a point <MathInline>{`d`}</MathInline> in
          <MathInline>{`S`}</MathInline> such that
        </p>
        <MathBlock>{`f(x) \\geq f(d) \\quad \\text{for all } x \\text{ in } S.`}</MathBlock>
        <p>
          The number <MathInline>{`f(d)`}</MathInline> is called the <strong>absolute minimum value</strong>
          of <MathInline>{`f`}</MathInline> on <MathInline>{`S`}</MathInline>.
        </p>
      </Callout>

      <h2>Examples</h2>
      <Callout type="example" title="Example 1: Sine Function">
        <p>
          Let <MathInline>{`S = [0, \\pi]`}</MathInline> and <MathInline>{`f(x) = \\sin x`}</MathInline>.
          The absolute minimum, which occurs at both endpoints of the interval, is
          <MathInline>{`0`}</MathInline>. The absolute maximum is <MathInline>{`f(\\pi/2) = 1`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: A Discontinuous Function">
        <p>
          Let <MathInline>{`S = [0, 2]`}</MathInline> and define
        </p>
        <MathBlock>{`f(x) = \\begin{cases} \\dfrac{1}{x} & \\text{if } x > 0 \\[8pt] 1 & \\text{if } x = 0 \\end{cases}`}</MathBlock>
        <p>
          In this example, <MathInline>{`f`}</MathInline> has an absolute minimum at
          <MathInline>{`x = 2`}</MathInline> (where <MathInline>{`f(2) = 1/2`}</MathInline>), but it has
          <em>no absolute maximum</em>. It fails to have a maximum because of a discontinuity
          at a point of <MathInline>{`S`}</MathInline>—as <MathInline>{`x \\to 0^+`}</MathInline>,
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
          Let <MathInline>{`f`}</MathInline> be continuous on a closed interval <MathInline>{`[a, b]`}</MathInline>.
          Then <MathInline>{`f`}</MathInline> is bounded on <MathInline>{`[a, b]`}</MathInline>. That is, there
          is a number <MathInline>{`C > 0`}</MathInline> such that
        </p>
        <MathBlock>{`|f(x)| \\leq C \\quad \\text{for all } x \\text{ in } [a, b].`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof (Method of Successive Bisection)">
        <p>
          We argue by contradiction, using a technique called the <strong>method of successive
          bisection</strong>. Assume that <MathInline>{`f`}</MathInline> is unbounded on
          <MathInline>{`[a, b]`}</MathInline>. Let <MathInline>{`c`}</MathInline> be the midpoint of
          <MathInline>{`[a, b]`}</MathInline>. Since <MathInline>{`f`}</MathInline> is unbounded on
          <MathInline>{`[a, b]`}</MathInline>, it is unbounded on at least one of the subintervals
          <MathInline>{`[a, c]`}</MathInline> or <MathInline>{`[c, b]`}</MathInline>.
        </p>
        <p>
          Let <MathInline>{`[a_1, b_1]`}</MathInline> be that half of <MathInline>{`[a, b]`}</MathInline> in
          which <MathInline>{`f`}</MathInline> is unbounded. (If <MathInline>{`f`}</MathInline> is unbounded
          in both halves, let <MathInline>{`[a_1, b_1]`}</MathInline> be the left half.)
        </p>
        <p>
          Continue the bisection process repeatedly, denoting by
          <MathInline>{`[a_{n+1}, b_{n+1}]`}</MathInline> that half of <MathInline>{`[a_n, b_n]`}</MathInline>
          in which <MathInline>{`f`}</MathInline> is unbounded. Note that the length of
          <MathInline>{`[a_n, b_n]`}</MathInline> is <MathInline>{`(b-a)/2^n`}</MathInline>.
        </p>
        <p>
          Let <MathInline>{`A`}</MathInline> denote the set of leftmost endpoints
          <MathInline>{`a, a_1, a_2, \\ldots`}</MathInline> so constructed, and let
          <MathInline>{`\\alpha = \\sup A`}</MathInline>. Then <MathInline>{`\\alpha`}</MathInline> lies in
          <MathInline>{`[a, b]`}</MathInline>. By continuity of <MathInline>{`f`}</MathInline> at
          <MathInline>{`\\alpha`}</MathInline>, there is an interval of the form
          <MathInline>{`(\\alpha - \\delta, \\alpha + \\delta)`}</MathInline> in which
        </p>
        <MathBlock>{`|f(x) - f(\\alpha)| < 1.`}</MathBlock>
        <p>
          This implies <MathInline>{`|f(x)| < 1 + |f(\\alpha)|`}</MathInline>, so <MathInline>{`f`}</MathInline>
          is bounded by <MathInline>{`1 + |f(\\alpha)|`}</MathInline> in this interval.
        </p>
        <p>
          However, when <MathInline>{`n`}</MathInline> is so large that
          <MathInline>{`(b-a)/2^n < \\delta`}</MathInline>, the interval <MathInline>{`[a_n, b_n]`}</MathInline>
          lies inside <MathInline>{`(\\alpha - \\delta, \\alpha + \\delta)`}</MathInline>. Therefore
          <MathInline>{`f`}</MathInline> is bounded on <MathInline>{`[a_n, b_n]`}</MathInline>, contradicting
          the fact that <MathInline>{`f`}</MathInline> is unbounded on <MathInline>{`[a_n, b_n]`}</MathInline>.
          This contradiction completes the proof.
        </p>
      </Callout>

      <h2>Supremum and Infimum of a Function</h2>
      <p>
        If <MathInline>{`f`}</MathInline> is bounded on <MathInline>{`[a, b]`}</MathInline>, then the set of
        all function values <MathInline>{`f(x)`}</MathInline> is bounded above and below. Therefore,
        this set has a supremum and an infimum, which we denote by
        <MathInline>{`\\sup f`}</MathInline> and <MathInline>{`\\inf f`}</MathInline>, respectively:
      </p>

      <MathBlock>{`\\sup f = \\sup\\{f(x) \\mid a \\leq x \\leq b\\}`}</MathBlock>
      <MathBlock>{`\\inf f = \\inf\\{f(x) \\mid a \\leq x \\leq b\\}`}</MathBlock>

      <p>
        For any bounded function we have:
      </p>
      <MathBlock>{`\\inf f \\leq f(x) \\leq \\sup f \\quad \\text{for all } x \\text{ in } [a, b].`}</MathBlock>

      <p>
        The extreme-value theorem tells us that a continuous function actually
        <em>attains</em> both values <MathInline>{`\\inf f`}</MathInline> and
        <MathInline>{`\\sup f`}</MathInline> somewhere in <MathInline>{`[a, b]`}</MathInline>.
      </p>

      <h2>The Extreme-Value Theorem</h2>

      <Callout type="theorem" title="Theorem 3.12 (Extreme-Value Theorem)">
        <p>
          Assume <MathInline>{`f`}</MathInline> is continuous on a closed interval
          <MathInline>{`[a, b]`}</MathInline>. Then there exist points <MathInline>{`c`}</MathInline> and
          <MathInline>{`d`}</MathInline> in <MathInline>{`[a, b]`}</MathInline> such that
        </p>
        <MathBlock>{`f(c) = \\sup f \\quad \\text{and} \\quad f(d) = \\inf f.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          It suffices to prove that <MathInline>{`f`}</MathInline> attains its supremum in
          <MathInline>{`[a, b]`}</MathInline>. The result for the infimum then follows as a consequence
          because the infimum of <MathInline>{`f`}</MathInline> is the supremum of
          <MathInline>{`-f`}</MathInline>.
        </p>
        <p>
          Let <MathInline>{`M = \\sup f`}</MathInline>. We shall assume that there is no
          <MathInline>{`x`}</MathInline> in <MathInline>{`[a, b]`}</MathInline> for which
          <MathInline>{`f(x) = M`}</MathInline> and obtain a contradiction.
        </p>
        <p>
          Let <MathInline>{`g(x) = M - f(x)`}</MathInline>. Then <MathInline>{`g(x) > 0`}</MathInline> for all
          <MathInline>{`x`}</MathInline> in <MathInline>{`[a, b]`}</MathInline>, so the reciprocal
          <MathInline>{`1/g`}</MathInline> is continuous on <MathInline>{`[a, b]`}</MathInline>.
        </p>
        <p>
          By the Boundedness Theorem (Theorem 3.11), <MathInline>{`1/g`}</MathInline> is bounded on
          <MathInline>{`[a, b]`}</MathInline>, say <MathInline>{`1/g(x) < C`}</MathInline> for all
          <MathInline>{`x`}</MathInline> in <MathInline>{`[a, b]`}</MathInline>, where
          <MathInline>{`C > 0`}</MathInline>.
        </p>
        <p>
          This implies <MathInline>{`M - f(x) > 1/C`}</MathInline>, so that
        </p>
        <MathBlock>{`f(x) < M - \\frac{1}{C} \\quad \\text{for all } x \\text{ in } [a, b].`}</MathBlock>
        <p>
          This contradicts the fact that <MathInline>{`M`}</MathInline> is the <em>least</em> upper
          bound of <MathInline>{`f`}</MathInline> on <MathInline>{`[a, b]`}</MathInline>. Hence,
          <MathInline>{`f(x) = M`}</MathInline> for at least one <MathInline>{`x`}</MathInline> in
          <MathInline>{`[a, b]`}</MathInline>.
        </p>
      </Callout>

      <h2>The Range of a Continuous Function</h2>
      <p>
        Combining the extreme-value theorem with the intermediate-value theorem gives us a
        complete characterization of the range of a continuous function on a closed interval.
      </p>

      <Callout type="theorem" title="Range Theorem">
        <p>
          If <MathInline>{`f`}</MathInline> is continuous on <MathInline>{`[a, b]`}</MathInline>, then
          <MathInline>{`\\sup f`}</MathInline> is its absolute maximum, and <MathInline>{`\\inf f`}</MathInline>
          is its absolute minimum. Hence, by the intermediate-value theorem, the range of
          <MathInline>{`f`}</MathInline> is the closed interval <MathInline>{`[\\inf f, \\sup f]`}</MathInline>.
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
          Consider <MathInline>{`f(x) = x`}</MathInline> on the open interval <MathInline>{`(0, 1)`}</MathInline>.
          Although <MathInline>{`f`}</MathInline> is continuous everywhere, it has no maximum or minimum
          on <MathInline>{`(0, 1)`}</MathInline> because:
        </p>
        <ul>
          <li>
            <MathInline>{`\\sup f = 1`}</MathInline>, but there is no <MathInline>{`x`}</MathInline> in
            <MathInline>{`(0, 1)`}</MathInline> with <MathInline>{`f(x) = 1`}</MathInline>
          </li>
          <li>
            <MathInline>{`\\inf f = 0`}</MathInline>, but there is no <MathInline>{`x`}</MathInline> in
            <MathInline>{`(0, 1)`}</MathInline> with <MathInline>{`f(x) = 0`}</MathInline>
          </li>
        </ul>
        <p>
          The endpoints where the extrema would be attained are not in the domain.
        </p>
      </Callout>

      <Callout type="example" title="Counterexample: Unbounded Interval">
        <p>
          Consider <MathInline>{`f(x) = x`}</MathInline> on <MathInline>{`[0, \\infty)`}</MathInline>.
          Although <MathInline>{`f`}</MathInline> is continuous and the interval is "closed" at one end,
          the function has no maximum because <MathInline>{`f(x)`}</MathInline> becomes arbitrarily large
          as <MathInline>{`x \\to \\infty`}</MathInline>.
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
          <MathInline>{`[a_n, b_n]`}</MathInline> have lengths tending to zero.
        </li>
        <li>
          <strong>Find the limit point:</strong> The supremum of the left endpoints gives a
          point <MathInline>{`\\alpha`}</MathInline> contained in all intervals.
        </li>
        <li>
          <strong>Use continuity:</strong> The continuity of <MathInline>{`f`}</MathInline> at
          <MathInline>{`\\alpha`}</MathInline> leads to a contradiction.
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
          <strong>Boundedness:</strong> A continuous function on <MathInline>{`[a, b]`}</MathInline>
          is bounded.
        </li>
        <li>
          <strong>Attainment of extrema:</strong> The supremum and infimum of the function
          values are actually achieved at some points in the interval.
        </li>
        <li>
          <strong>Range characterization:</strong> The range of a continuous function on
          <MathInline>{`[a, b]`}</MathInline> is a closed interval
          <MathInline>{`[\\inf f, \\sup f]`}</MathInline>.
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
