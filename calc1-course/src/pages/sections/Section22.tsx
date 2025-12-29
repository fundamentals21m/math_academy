import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <p>
        In the rest of our study of continuous functions, we discuss certain special properties
        that are used quite frequently. Most of these properties appear obvious when interpreted
        geometrically; consequently many people are inclined to accept them as self-evident.
        However, these statements require careful proof if they are to be used with any degree
        of generality. The proofs make use of the least-upper-bound axiom for the real number system.
      </p>

      <h2>Historical Background</h2>
      <p>
        Bernard Bolzano (1781-1848), a Catholic priest who made many important contributions to
        mathematics in the first half of the 19th century, was one of the first to recognize that
        many "obvious" statements about continuous functions require proof. His observations
        concerning continuity were published posthumously in 1850 in his important book,
        <em> Paradoxien des Unendlichen</em>. One of his results, now known as Bolzano's theorem,
        was first published in 1817.
      </p>

      <h2>Bolzano's Theorem</h2>
      <p>
        Consider the graph of a continuous function <MathInline>{`f`}</MathInline> that lies below the
        <MathInline>{`x`}</MathInline>-axis at <MathInline>{`x = a`}</MathInline> and above the axis at
        <MathInline>{`x = b`}</MathInline>. Intuitively, the curve must cross the axis somewhere between
        <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline>. Bolzano's theorem makes this precise.
      </p>

      <Callout type="theorem" title="Theorem 3.6 (Bolzano's Theorem)">
        <p>
          Let <MathInline>{`f`}</MathInline> be continuous at each point of a closed interval
          <MathInline>{`[a, b]`}</MathInline> and assume that <MathInline>{`f(a)`}</MathInline> and
          <MathInline>{`f(b)`}</MathInline> have opposite signs. Then there is at least one
          <MathInline>{`c`}</MathInline> in the open interval <MathInline>{`(a, b)`}</MathInline> such that
        </p>
        <MathBlock>{`f(c) = 0.`}</MathBlock>
      </Callout>

      <h2>Sign-Preserving Property</h2>
      <p>
        The proof of Bolzano's theorem relies on an important property of continuous functions:
        near any point where a continuous function is nonzero, the function maintains its sign.
      </p>

      <Callout type="theorem" title="Theorem 3.7 (Sign-Preserving Property)">
        <p>
          Let <MathInline>{`f`}</MathInline> be continuous at <MathInline>{`c`}</MathInline> and suppose
          that <MathInline>{`f(c) \\neq 0`}</MathInline>. Then there is an interval
          <MathInline>{`(c - \\delta, c + \\delta)`}</MathInline> about <MathInline>{`c`}</MathInline> in which
          <MathInline>{`f`}</MathInline> has the same sign as <MathInline>{`f(c)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Sign-Preserving Property">
        <p>
          Suppose <MathInline>{`f(c) > 0`}</MathInline>. By continuity, for every
          <MathInline>{`\\epsilon > 0`}</MathInline> there is a <MathInline>{`\\delta > 0`}</MathInline> such that
        </p>
        <MathBlock>{`f(c) - \\epsilon < f(x) < f(c) + \\epsilon \\quad \\text{whenever} \\quad c - \\delta < x < c + \\delta.`}</MathBlock>
        <p>
          If we take the <MathInline>{`\\delta`}</MathInline> corresponding to
          <MathInline>{`\\epsilon = f(c)/2`}</MathInline> (this <MathInline>{`\\epsilon`}</MathInline> is positive), then:
        </p>
        <MathBlock>{`\\frac{1}{2}f(c) < f(x) < \\frac{3}{2}f(c) \\quad \\text{whenever} \\quad c - \\delta < x < c + \\delta.`}</MathBlock>
        <p>
          Therefore <MathInline>{`f(x) > 0`}</MathInline> in this interval, so <MathInline>{`f(x)`}</MathInline> and
          <MathInline>{`f(c)`}</MathInline> have the same sign. A similar argument works when
          <MathInline>{`f(c) < 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Proof of Bolzano's Theorem</h2>
      <p>
        The proof uses the least-upper-bound axiom in a clever way.
      </p>

      <Callout type="info" title="Proof">
        <p>
          To be specific, assume <MathInline>{`f(a) < 0`}</MathInline> and <MathInline>{`f(b) > 0`}</MathInline>.
          There may be many values of <MathInline>{`x`}</MathInline> between <MathInline>{`a`}</MathInline> and
          <MathInline>{`b`}</MathInline> for which <MathInline>{`f(x) = 0`}</MathInline>. Our problem is to find one.
          We shall do this by finding the largest <MathInline>{`x`}</MathInline> for which <MathInline>{`f(x) = 0`}</MathInline>.
        </p>
        <p>
          Let <MathInline>{`S`}</MathInline> denote the set of all those points <MathInline>{`x`}</MathInline> in
          the interval <MathInline>{`[a, b]`}</MathInline> for which <MathInline>{`f(x) \\leq 0`}</MathInline>.
          There is at least one point in <MathInline>{`S`}</MathInline> because <MathInline>{`f(a) < 0`}</MathInline>.
          Therefore <MathInline>{`S`}</MathInline> is a nonempty set. Also, <MathInline>{`S`}</MathInline> is bounded
          above since all of <MathInline>{`S`}</MathInline> lies within <MathInline>{`[a, b]`}</MathInline>, so
          <MathInline>{`S`}</MathInline> has a supremum. Let <MathInline>{`c = \\sup S`}</MathInline>.
          We shall prove that <MathInline>{`f(c) = 0`}</MathInline>.
        </p>
        <p>
          There are only three possibilities: <MathInline>{`f(c) > 0`}</MathInline>,
          <MathInline>{`f(c) < 0`}</MathInline>, and <MathInline>{`f(c) = 0`}</MathInline>.
        </p>
        <p>
          <strong>Case 1:</strong> If <MathInline>{`f(c) > 0`}</MathInline>, there is an interval
          <MathInline>{`(c - \\delta, c + \\delta)`}</MathInline> in which <MathInline>{`f`}</MathInline> is positive.
          Therefore no points of <MathInline>{`S`}</MathInline> can lie to the right of
          <MathInline>{`c - \\delta`}</MathInline>, and hence <MathInline>{`c - \\delta`}</MathInline> is an upper
          bound for the set <MathInline>{`S`}</MathInline>. But <MathInline>{`c - \\delta < c`}</MathInline>, and
          <MathInline>{`c`}</MathInline> is the <em>least</em> upper bound of <MathInline>{`S`}</MathInline>.
          Therefore the inequality <MathInline>{`f(c) > 0`}</MathInline> is impossible.
        </p>
        <p>
          <strong>Case 2:</strong> If <MathInline>{`f(c) < 0`}</MathInline>, there is an interval
          <MathInline>{`(c - \\delta, c + \\delta)`}</MathInline> in which <MathInline>{`f`}</MathInline> is negative.
          Hence <MathInline>{`f(x) < 0`}</MathInline> for some <MathInline>{`x > c`}</MathInline>, contradicting
          the fact that <MathInline>{`c`}</MathInline> is an upper bound for <MathInline>{`S`}</MathInline>.
          Therefore <MathInline>{`f(c) < 0`}</MathInline> is also impossible.
        </p>
        <p>
          <strong>Conclusion:</strong> The only remaining possibility is <MathInline>{`f(c) = 0`}</MathInline>.
          Also, <MathInline>{`a < c < b`}</MathInline> because <MathInline>{`f(a) < 0`}</MathInline> and
          <MathInline>{`f(b) > 0`}</MathInline>. This proves Bolzano's theorem.
        </p>
      </Callout>

      <h2>The Intermediate Value Theorem</h2>
      <p>
        An immediate consequence of Bolzano's theorem is the <strong>intermediate value theorem</strong>,
        which states that a continuous function takes on every value between any two of its values.
      </p>

      <Callout type="theorem" title="Theorem 3.8 (Intermediate Value Theorem)">
        <p>
          Let <MathInline>{`f`}</MathInline> be continuous at each point of a closed interval
          <MathInline>{`[a, b]`}</MathInline>. Choose two arbitrary points <MathInline>{`x_1 < x_2`}</MathInline> in
          <MathInline>{`[a, b]`}</MathInline> such that <MathInline>{`f(x_1) \\neq f(x_2)`}</MathInline>.
          Then <MathInline>{`f`}</MathInline> takes on every value between <MathInline>{`f(x_1)`}</MathInline> and
          <MathInline>{`f(x_2)`}</MathInline> somewhere in the interval <MathInline>{`(x_1, x_2)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Suppose <MathInline>{`f(x_1) < f(x_2)`}</MathInline> and let <MathInline>{`k`}</MathInline> be any value
          between <MathInline>{`f(x_1)`}</MathInline> and <MathInline>{`f(x_2)`}</MathInline>. Let <MathInline>{`g`}</MathInline> be
          the function defined on <MathInline>{`[x_1, x_2]`}</MathInline> as follows:
        </p>
        <MathBlock>{`g(x) = f(x) - k.`}</MathBlock>
        <p>
          Then <MathInline>{`g`}</MathInline> is continuous at each point of <MathInline>{`[x_1, x_2]`}</MathInline>, and we have:
        </p>
        <MathBlock>{`g(x_1) = f(x_1) - k < 0, \\qquad g(x_2) = f(x_2) - k > 0.`}</MathBlock>
        <p>
          Applying Bolzano's theorem to <MathInline>{`g`}</MathInline>, we have <MathInline>{`g(c) = 0`}</MathInline> for
          some <MathInline>{`c`}</MathInline> between <MathInline>{`x_1`}</MathInline> and <MathInline>{`x_2`}</MathInline>.
          But this means <MathInline>{`f(c) = k`}</MathInline>, and the proof is complete.
        </p>
      </Callout>

      <Callout type="info" title="Important Note">
        <p>
          In both Bolzano's theorem and the intermediate value theorem, it is assumed that
          <MathInline>{`f`}</MathInline> is continuous at <em>each point</em> of <MathInline>{`[a, b]`}</MathInline>,
          including the endpoints <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline>. Continuity at
          both endpoints is necessary. For example, if <MathInline>{`f`}</MathInline> is continuous everywhere
          in <MathInline>{`[a, b]`}</MathInline> except at <MathInline>{`a`}</MathInline>, with <MathInline>{`f(a)`}</MathInline> negative
          and <MathInline>{`f(b)`}</MathInline> positive, there may be no <MathInline>{`x`}</MathInline> in
          <MathInline>{`[a, b]`}</MathInline> for which <MathInline>{`f(x) = 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Application: Existence of nth Roots</h2>
      <p>
        The intermediate value theorem provides a rigorous proof that every positive real number
        has a positive <MathInline>{`n`}</MathInline>th root.
      </p>

      <Callout type="theorem" title="Theorem 3.9 (Existence of nth Roots)">
        <p>
          If <MathInline>{`n`}</MathInline> is a positive integer and if <MathInline>{`a > 0`}</MathInline>,
          then there is exactly one positive <MathInline>{`b`}</MathInline> such that <MathInline>{`b^n = a`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Choose <MathInline>{`c > 1`}</MathInline> such that <MathInline>{`0 < a < c`}</MathInline>, and consider
          the function <MathInline>{`f`}</MathInline> defined on the interval <MathInline>{`[0, c]`}</MathInline> by
          the equation <MathInline>{`f(x) = x^n`}</MathInline>. This function is continuous on
          <MathInline>{`[0, c]`}</MathInline>, and at the endpoints we have:
        </p>
        <MathBlock>{`f(0) = 0, \\qquad f(c) = c^n.`}</MathBlock>
        <p>
          Since <MathInline>{`0 < a < c < c^n`}</MathInline>, the given number <MathInline>{`a`}</MathInline> lies
          between the function values <MathInline>{`f(0)`}</MathInline> and <MathInline>{`f(c)`}</MathInline>.
          Therefore, by the intermediate value theorem, we have <MathInline>{`f(x) = a`}</MathInline> for
          some <MathInline>{`x`}</MathInline> in <MathInline>{`(0, c)`}</MathInline>, say for <MathInline>{`x = b`}</MathInline>.
          This proves the existence of at least one positive <MathInline>{`b`}</MathInline> such that
          <MathInline>{`b^n = a`}</MathInline>.
        </p>
        <p>
          There cannot be more than one such <MathInline>{`b`}</MathInline> because <MathInline>{`f`}</MathInline> is
          strictly increasing on <MathInline>{`[0, c]`}</MathInline>. This completes the proof.
        </p>
      </Callout>

      <h2>Application: Fixed Points</h2>
      <p>
        Another beautiful application of Bolzano's theorem concerns <strong>fixed points</strong>.
        A fixed point of a function <MathInline>{`f`}</MathInline> is a point <MathInline>{`c`}</MathInline> such
        that <MathInline>{`f(c) = c`}</MathInline>.
      </p>

      <Callout type="example" title="Fixed Point Theorem">
        <p>
          Let <MathInline>{`f`}</MathInline> be a real-valued function which is continuous on the closed
          interval <MathInline>{`[0, 1]`}</MathInline>. Assume that <MathInline>{`0 \\leq f(x) \\leq 1`}</MathInline> for
          each <MathInline>{`x`}</MathInline> in <MathInline>{`[0, 1]`}</MathInline>. Then there is at least one
          point <MathInline>{`c`}</MathInline> in <MathInline>{`[0, 1]`}</MathInline> for which <MathInline>{`f(c) = c`}</MathInline>.
        </p>
        <p>
          <strong>Proof:</strong> Consider the function <MathInline>{`g(x) = f(x) - x`}</MathInline>.
          Then <MathInline>{`g`}</MathInline> is continuous on <MathInline>{`[0, 1]`}</MathInline>. We have:
        </p>
        <MathBlock>{`g(0) = f(0) - 0 = f(0) \\geq 0`}</MathBlock>
        <MathBlock>{`g(1) = f(1) - 1 \\leq 0`}</MathBlock>
        <p>
          (since <MathInline>{`f(0) \\geq 0`}</MathInline> and <MathInline>{`f(1) \\leq 1`}</MathInline>).
          If <MathInline>{`g(0) = 0`}</MathInline>, then <MathInline>{`c = 0`}</MathInline> is a fixed point.
          If <MathInline>{`g(1) = 0`}</MathInline>, then <MathInline>{`c = 1`}</MathInline> is a fixed point.
          Otherwise, <MathInline>{`g(0) > 0`}</MathInline> and <MathInline>{`g(1) < 0`}</MathInline>, so by Bolzano's
          theorem, <MathInline>{`g(c) = 0`}</MathInline> for some <MathInline>{`c`}</MathInline> in <MathInline>{`(0, 1)`}</MathInline>.
          This means <MathInline>{`f(c) = c`}</MathInline>.
        </p>
      </Callout>

      <p>
        This result is a special case of <strong>Brouwer's fixed-point theorem</strong>, which
        generalizes to higher dimensions and states that any continuous function from a closed
        ball to itself has at least one fixed point.
      </p>

      <h2>Using Bolzano's Theorem to Isolate Roots</h2>
      <p>
        Bolzano's theorem provides a practical method for locating roots of equations.
        If <MathInline>{`f`}</MathInline> is continuous and we can find values <MathInline>{`a`}</MathInline> and
        <MathInline>{`b`}</MathInline> where <MathInline>{`f(a)`}</MathInline> and <MathInline>{`f(b)`}</MathInline> have
        opposite signs, then we know there is at least one root in <MathInline>{`(a, b)`}</MathInline>.
      </p>

      <Callout type="example" title="Example: Root of a Polynomial">
        <p>
          Let <MathInline>{`f`}</MathInline> be a polynomial of degree <MathInline>{`n`}</MathInline>, say
        </p>
        <MathBlock>{`f(x) = \\sum_{k=0}^{n} c_k x^k`}</MathBlock>
        <p>
          such that the first and last coefficients <MathInline>{`c_0`}</MathInline> and
          <MathInline>{`c_n`}</MathInline> have opposite signs. Then <MathInline>{`f(x) = 0`}</MathInline> for
          at least one positive <MathInline>{`x`}</MathInline>.
        </p>
        <p>
          <strong>Proof:</strong> We have <MathInline>{`f(0) = c_0`}</MathInline>. For large
          <MathInline>{`x`}</MathInline>, the sign of <MathInline>{`f(x)`}</MathInline> is determined by the
          leading term <MathInline>{`c_n x^n`}</MathInline>, which has the same sign as <MathInline>{`c_n`}</MathInline>.
          Since <MathInline>{`c_0`}</MathInline> and <MathInline>{`c_n`}</MathInline> have opposite signs,
          <MathInline>{`f(0)`}</MathInline> and <MathInline>{`f(x)`}</MathInline> (for large <MathInline>{`x`}</MathInline>)
          have opposite signs. By Bolzano's theorem, there is a root between <MathInline>{`0`}</MathInline> and
          this large value.
        </p>
      </Callout>

      <h2>When Bolzano's Theorem Does Not Apply</h2>
      <p>
        It's important to understand when Bolzano's theorem cannot be applied.
      </p>

      <Callout type="example" title="Counterexample">
        <p>
          Let <MathInline>{`f(x) = \\tan x`}</MathInline>. Although <MathInline>{`f(\\pi/4) = 1`}</MathInline> and
          <MathInline>{`f(3\\pi/4) = -1`}</MathInline>, there is no <MathInline>{`x`}</MathInline> in the interval
          <MathInline>{`[\\pi/4, 3\\pi/4]`}</MathInline> such that <MathInline>{`f(x) = 0`}</MathInline>.
        </p>
        <p>
          This does not contradict Bolzano's theorem because <MathInline>{`f`}</MathInline> is not continuous
          on the entire interval <MathInline>{`[\\pi/4, 3\\pi/4]`}</MathInline>—it has a discontinuity at
          <MathInline>{`x = \\pi/2`}</MathInline> where the tangent function is undefined.
        </p>
      </Callout>

      <h2>Summary</h2>
      <p>
        Bolzano's theorem and the intermediate value theorem capture the intuitive idea that a
        continuous function cannot "jump" over values—it must pass through every value between
        any two of its values. These results have profound implications:
      </p>
      <ul>
        <li>
          <strong>Existence of roots:</strong> We can guarantee solutions to equations
          <MathInline>{`f(x) = 0`}</MathInline> without explicitly finding them.
        </li>
        <li>
          <strong>Existence of nth roots:</strong> Every positive number has a unique positive
          <MathInline>{`n`}</MathInline>th root.
        </li>
        <li>
          <strong>Fixed points:</strong> Certain continuous functions must have fixed points.
        </li>
        <li>
          <strong>Root isolation:</strong> We can locate roots within specific intervals.
        </li>
      </ul>
      <p>
        The proofs rely crucially on the completeness of the real numbers (the least-upper-bound
        axiom), illustrating how the foundational properties of <MathInline>{`\\mathbb{R}`}</MathInline>
        determine the behavior of continuous functions.
      </p>
    </LessonLayout>
  );
}
