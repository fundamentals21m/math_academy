import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

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
        Consider the graph of a continuous function <InlineMath>{`f`}</InlineMath> that lies below the
        <InlineMath>{`x`}</InlineMath>-axis at <InlineMath>{`x = a`}</InlineMath> and above the axis at
        <InlineMath>{`x = b`}</InlineMath>. Intuitively, the curve must cross the axis somewhere between
        <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath>. Bolzano's theorem makes this precise.
      </p>

      <Callout type="theorem" title="Theorem 3.6 (Bolzano's Theorem)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be continuous at each point of a closed interval
          <InlineMath>{`[a, b]`}</InlineMath> and assume that <InlineMath>{`f(a)`}</InlineMath> and
          <InlineMath>{`f(b)`}</InlineMath> have opposite signs. Then there is at least one
          <InlineMath>{`c`}</InlineMath> in the open interval <InlineMath>{`(a, b)`}</InlineMath> such that
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
          Let <InlineMath>{`f`}</InlineMath> be continuous at <InlineMath>{`c`}</InlineMath> and suppose
          that <InlineMath>{`f(c) \\neq 0`}</InlineMath>. Then there is an interval
          <InlineMath>{`(c - \\delta, c + \\delta)`}</InlineMath> about <InlineMath>{`c`}</InlineMath> in which
          <InlineMath>{`f`}</InlineMath> has the same sign as <InlineMath>{`f(c)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Sign-Preserving Property">
        <p>
          Suppose <InlineMath>{`f(c) > 0`}</InlineMath>. By continuity, for every
          <InlineMath>{`\\epsilon > 0`}</InlineMath> there is a <InlineMath>{`\\delta > 0`}</InlineMath> such that
        </p>
        <MathBlock>{`f(c) - \\epsilon < f(x) < f(c) + \\epsilon \\quad \\text{whenever} \\quad c - \\delta < x < c + \\delta.`}</MathBlock>
        <p>
          If we take the <InlineMath>{`\\delta`}</InlineMath> corresponding to
          <InlineMath>{`\\epsilon = f(c)/2`}</InlineMath> (this <InlineMath>{`\\epsilon`}</InlineMath> is positive), then:
        </p>
        <MathBlock>{`\\frac{1}{2}f(c) < f(x) < \\frac{3}{2}f(c) \\quad \\text{whenever} \\quad c - \\delta < x < c + \\delta.`}</MathBlock>
        <p>
          Therefore <InlineMath>{`f(x) > 0`}</InlineMath> in this interval, so <InlineMath>{`f(x)`}</InlineMath> and
          <InlineMath>{`f(c)`}</InlineMath> have the same sign. A similar argument works when
          <InlineMath>{`f(c) < 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Proof of Bolzano's Theorem</h2>
      <p>
        The proof uses the least-upper-bound axiom in a clever way.
      </p>

      <Callout type="info" title="Proof">
        <p>
          To be specific, assume <InlineMath>{`f(a) < 0`}</InlineMath> and <InlineMath>{`f(b) > 0`}</InlineMath>.
          There may be many values of <InlineMath>{`x`}</InlineMath> between <InlineMath>{`a`}</InlineMath> and
          <InlineMath>{`b`}</InlineMath> for which <InlineMath>{`f(x) = 0`}</InlineMath>. Our problem is to find one.
          We shall do this by finding the largest <InlineMath>{`x`}</InlineMath> for which <InlineMath>{`f(x) = 0`}</InlineMath>.
        </p>
        <p>
          Let <InlineMath>{`S`}</InlineMath> denote the set of all those points <InlineMath>{`x`}</InlineMath> in
          the interval <InlineMath>{`[a, b]`}</InlineMath> for which <InlineMath>{`f(x) \\leq 0`}</InlineMath>.
          There is at least one point in <InlineMath>{`S`}</InlineMath> because <InlineMath>{`f(a) < 0`}</InlineMath>.
          Therefore <InlineMath>{`S`}</InlineMath> is a nonempty set. Also, <InlineMath>{`S`}</InlineMath> is bounded
          above since all of <InlineMath>{`S`}</InlineMath> lies within <InlineMath>{`[a, b]`}</InlineMath>, so
          <InlineMath>{`S`}</InlineMath> has a supremum. Let <InlineMath>{`c = \\sup S`}</InlineMath>.
          We shall prove that <InlineMath>{`f(c) = 0`}</InlineMath>.
        </p>
        <p>
          There are only three possibilities: <InlineMath>{`f(c) > 0`}</InlineMath>,
          <InlineMath>{`f(c) < 0`}</InlineMath>, and <InlineMath>{`f(c) = 0`}</InlineMath>.
        </p>
        <p>
          <strong>Case 1:</strong> If <InlineMath>{`f(c) > 0`}</InlineMath>, there is an interval
          <InlineMath>{`(c - \\delta, c + \\delta)`}</InlineMath> in which <InlineMath>{`f`}</InlineMath> is positive.
          Therefore no points of <InlineMath>{`S`}</InlineMath> can lie to the right of
          <InlineMath>{`c - \\delta`}</InlineMath>, and hence <InlineMath>{`c - \\delta`}</InlineMath> is an upper
          bound for the set <InlineMath>{`S`}</InlineMath>. But <InlineMath>{`c - \\delta < c`}</InlineMath>, and
          <InlineMath>{`c`}</InlineMath> is the <em>least</em> upper bound of <InlineMath>{`S`}</InlineMath>.
          Therefore the inequality <InlineMath>{`f(c) > 0`}</InlineMath> is impossible.
        </p>
        <p>
          <strong>Case 2:</strong> If <InlineMath>{`f(c) < 0`}</InlineMath>, there is an interval
          <InlineMath>{`(c - \\delta, c + \\delta)`}</InlineMath> in which <InlineMath>{`f`}</InlineMath> is negative.
          Hence <InlineMath>{`f(x) < 0`}</InlineMath> for some <InlineMath>{`x > c`}</InlineMath>, contradicting
          the fact that <InlineMath>{`c`}</InlineMath> is an upper bound for <InlineMath>{`S`}</InlineMath>.
          Therefore <InlineMath>{`f(c) < 0`}</InlineMath> is also impossible.
        </p>
        <p>
          <strong>Conclusion:</strong> The only remaining possibility is <InlineMath>{`f(c) = 0`}</InlineMath>.
          Also, <InlineMath>{`a < c < b`}</InlineMath> because <InlineMath>{`f(a) < 0`}</InlineMath> and
          <InlineMath>{`f(b) > 0`}</InlineMath>. This proves Bolzano's theorem.
        </p>
      </Callout>

      <h2>The Intermediate Value Theorem</h2>
      <p>
        An immediate consequence of Bolzano's theorem is the <strong>intermediate value theorem</strong>,
        which states that a continuous function takes on every value between any two of its values.
      </p>

      <Callout type="theorem" title="Theorem 3.8 (Intermediate Value Theorem)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be continuous at each point of a closed interval
          <InlineMath>{`[a, b]`}</InlineMath>. Choose two arbitrary points <InlineMath>{`x_1 < x_2`}</InlineMath> in
          <InlineMath>{`[a, b]`}</InlineMath> such that <InlineMath>{`f(x_1) \\neq f(x_2)`}</InlineMath>.
          Then <InlineMath>{`f`}</InlineMath> takes on every value between <InlineMath>{`f(x_1)`}</InlineMath> and
          <InlineMath>{`f(x_2)`}</InlineMath> somewhere in the interval <InlineMath>{`(x_1, x_2)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Suppose <InlineMath>{`f(x_1) < f(x_2)`}</InlineMath> and let <InlineMath>{`k`}</InlineMath> be any value
          between <InlineMath>{`f(x_1)`}</InlineMath> and <InlineMath>{`f(x_2)`}</InlineMath>. Let <InlineMath>{`g`}</InlineMath> be
          the function defined on <InlineMath>{`[x_1, x_2]`}</InlineMath> as follows:
        </p>
        <MathBlock>{`g(x) = f(x) - k.`}</MathBlock>
        <p>
          Then <InlineMath>{`g`}</InlineMath> is continuous at each point of <InlineMath>{`[x_1, x_2]`}</InlineMath>, and we have:
        </p>
        <MathBlock>{`g(x_1) = f(x_1) - k < 0, \\qquad g(x_2) = f(x_2) - k > 0.`}</MathBlock>
        <p>
          Applying Bolzano's theorem to <InlineMath>{`g`}</InlineMath>, we have <InlineMath>{`g(c) = 0`}</InlineMath> for
          some <InlineMath>{`c`}</InlineMath> between <InlineMath>{`x_1`}</InlineMath> and <InlineMath>{`x_2`}</InlineMath>.
          But this means <InlineMath>{`f(c) = k`}</InlineMath>, and the proof is complete.
        </p>
      </Callout>

      <Callout type="info" title="Important Note">
        <p>
          In both Bolzano's theorem and the intermediate value theorem, it is assumed that
          <InlineMath>{`f`}</InlineMath> is continuous at <em>each point</em> of <InlineMath>{`[a, b]`}</InlineMath>,
          including the endpoints <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath>. Continuity at
          both endpoints is necessary. For example, if <InlineMath>{`f`}</InlineMath> is continuous everywhere
          in <InlineMath>{`[a, b]`}</InlineMath> except at <InlineMath>{`a`}</InlineMath>, with <InlineMath>{`f(a)`}</InlineMath> negative
          and <InlineMath>{`f(b)`}</InlineMath> positive, there may be no <InlineMath>{`x`}</InlineMath> in
          <InlineMath>{`[a, b]`}</InlineMath> for which <InlineMath>{`f(x) = 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Application: Existence of nth Roots</h2>
      <p>
        The intermediate value theorem provides a rigorous proof that every positive real number
        has a positive <InlineMath>{`n`}</InlineMath>th root.
      </p>

      <Callout type="theorem" title="Theorem 3.9 (Existence of nth Roots)">
        <p>
          If <InlineMath>{`n`}</InlineMath> is a positive integer and if <InlineMath>{`a > 0`}</InlineMath>,
          then there is exactly one positive <InlineMath>{`b`}</InlineMath> such that <InlineMath>{`b^n = a`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Choose <InlineMath>{`c > 1`}</InlineMath> such that <InlineMath>{`0 < a < c`}</InlineMath>, and consider
          the function <InlineMath>{`f`}</InlineMath> defined on the interval <InlineMath>{`[0, c]`}</InlineMath> by
          the equation <InlineMath>{`f(x) = x^n`}</InlineMath>. This function is continuous on
          <InlineMath>{`[0, c]`}</InlineMath>, and at the endpoints we have:
        </p>
        <MathBlock>{`f(0) = 0, \\qquad f(c) = c^n.`}</MathBlock>
        <p>
          Since <InlineMath>{`0 < a < c < c^n`}</InlineMath>, the given number <InlineMath>{`a`}</InlineMath> lies
          between the function values <InlineMath>{`f(0)`}</InlineMath> and <InlineMath>{`f(c)`}</InlineMath>.
          Therefore, by the intermediate value theorem, we have <InlineMath>{`f(x) = a`}</InlineMath> for
          some <InlineMath>{`x`}</InlineMath> in <InlineMath>{`(0, c)`}</InlineMath>, say for <InlineMath>{`x = b`}</InlineMath>.
          This proves the existence of at least one positive <InlineMath>{`b`}</InlineMath> such that
          <InlineMath>{`b^n = a`}</InlineMath>.
        </p>
        <p>
          There cannot be more than one such <InlineMath>{`b`}</InlineMath> because <InlineMath>{`f`}</InlineMath> is
          strictly increasing on <InlineMath>{`[0, c]`}</InlineMath>. This completes the proof.
        </p>
      </Callout>

      <h2>Application: Fixed Points</h2>
      <p>
        Another beautiful application of Bolzano's theorem concerns <strong>fixed points</strong>.
        A fixed point of a function <InlineMath>{`f`}</InlineMath> is a point <InlineMath>{`c`}</InlineMath> such
        that <InlineMath>{`f(c) = c`}</InlineMath>.
      </p>

      <Callout type="example" title="Fixed Point Theorem">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be a real-valued function which is continuous on the closed
          interval <InlineMath>{`[0, 1]`}</InlineMath>. Assume that <InlineMath>{`0 \\leq f(x) \\leq 1`}</InlineMath> for
          each <InlineMath>{`x`}</InlineMath> in <InlineMath>{`[0, 1]`}</InlineMath>. Then there is at least one
          point <InlineMath>{`c`}</InlineMath> in <InlineMath>{`[0, 1]`}</InlineMath> for which <InlineMath>{`f(c) = c`}</InlineMath>.
        </p>
        <p>
          <strong>Proof:</strong> Consider the function <InlineMath>{`g(x) = f(x) - x`}</InlineMath>.
          Then <InlineMath>{`g`}</InlineMath> is continuous on <InlineMath>{`[0, 1]`}</InlineMath>. We have:
        </p>
        <MathBlock>{`g(0) = f(0) - 0 = f(0) \\geq 0`}</MathBlock>
        <MathBlock>{`g(1) = f(1) - 1 \\leq 0`}</MathBlock>
        <p>
          (since <InlineMath>{`f(0) \\geq 0`}</InlineMath> and <InlineMath>{`f(1) \\leq 1`}</InlineMath>).
          If <InlineMath>{`g(0) = 0`}</InlineMath>, then <InlineMath>{`c = 0`}</InlineMath> is a fixed point.
          If <InlineMath>{`g(1) = 0`}</InlineMath>, then <InlineMath>{`c = 1`}</InlineMath> is a fixed point.
          Otherwise, <InlineMath>{`g(0) > 0`}</InlineMath> and <InlineMath>{`g(1) < 0`}</InlineMath>, so by Bolzano's
          theorem, <InlineMath>{`g(c) = 0`}</InlineMath> for some <InlineMath>{`c`}</InlineMath> in <InlineMath>{`(0, 1)`}</InlineMath>.
          This means <InlineMath>{`f(c) = c`}</InlineMath>.
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
        If <InlineMath>{`f`}</InlineMath> is continuous and we can find values <InlineMath>{`a`}</InlineMath> and
        <InlineMath>{`b`}</InlineMath> where <InlineMath>{`f(a)`}</InlineMath> and <InlineMath>{`f(b)`}</InlineMath> have
        opposite signs, then we know there is at least one root in <InlineMath>{`(a, b)`}</InlineMath>.
      </p>

      <Callout type="example" title="Example: Root of a Polynomial">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be a polynomial of degree <InlineMath>{`n`}</InlineMath>, say
        </p>
        <MathBlock>{`f(x) = \\sum_{k=0}^{n} c_k x^k`}</MathBlock>
        <p>
          such that the first and last coefficients <InlineMath>{`c_0`}</InlineMath> and
          <InlineMath>{`c_n`}</InlineMath> have opposite signs. Then <InlineMath>{`f(x) = 0`}</InlineMath> for
          at least one positive <InlineMath>{`x`}</InlineMath>.
        </p>
        <p>
          <strong>Proof:</strong> We have <InlineMath>{`f(0) = c_0`}</InlineMath>. For large
          <InlineMath>{`x`}</InlineMath>, the sign of <InlineMath>{`f(x)`}</InlineMath> is determined by the
          leading term <InlineMath>{`c_n x^n`}</InlineMath>, which has the same sign as <InlineMath>{`c_n`}</InlineMath>.
          Since <InlineMath>{`c_0`}</InlineMath> and <InlineMath>{`c_n`}</InlineMath> have opposite signs,
          <InlineMath>{`f(0)`}</InlineMath> and <InlineMath>{`f(x)`}</InlineMath> (for large <InlineMath>{`x`}</InlineMath>)
          have opposite signs. By Bolzano's theorem, there is a root between <InlineMath>{`0`}</InlineMath> and
          this large value.
        </p>
      </Callout>

      <h2>When Bolzano's Theorem Does Not Apply</h2>
      <p>
        It's important to understand when Bolzano's theorem cannot be applied.
      </p>

      <Callout type="example" title="Counterexample">
        <p>
          Let <InlineMath>{`f(x) = \\tan x`}</InlineMath>. Although <InlineMath>{`f(\\pi/4) = 1`}</InlineMath> and
          <InlineMath>{`f(3\\pi/4) = -1`}</InlineMath>, there is no <InlineMath>{`x`}</InlineMath> in the interval
          <InlineMath>{`[\\pi/4, 3\\pi/4]`}</InlineMath> such that <InlineMath>{`f(x) = 0`}</InlineMath>.
        </p>
        <p>
          This does not contradict Bolzano's theorem because <InlineMath>{`f`}</InlineMath> is not continuous
          on the entire interval <InlineMath>{`[\\pi/4, 3\\pi/4]`}</InlineMath>—it has a discontinuity at
          <InlineMath>{`x = \\pi/2`}</InlineMath> where the tangent function is undefined.
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
          <InlineMath>{`f(x) = 0`}</InlineMath> without explicitly finding them.
        </li>
        <li>
          <strong>Existence of nth roots:</strong> Every positive number has a unique positive
          <InlineMath>{`n`}</InlineMath>th root.
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
        axiom), illustrating how the foundational properties of <InlineMath>{`\\mathbb{R}`}</InlineMath>
        determine the behavior of continuous functions.
      </p>
    </LessonLayout>
  );
}
