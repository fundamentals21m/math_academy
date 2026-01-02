import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <p>
        In this section, we study a strengthening of continuity called <strong>uniform
        continuity</strong>. While ordinary continuity is a "pointwise" property—defined at
        each point separately—uniform continuity is a "global" property that controls how
        the function behaves uniformly across an entire interval. This concept leads to the
        <strong> small-span theorem</strong>, which provides the key to proving that continuous
        functions are integrable.
      </p>

      <h2>The Span of a Function</h2>
      <p>
        Let <InlineMath>{`f`}</InlineMath> be a real-valued continuous function on a closed interval
        <InlineMath>{`[a, b]`}</InlineMath>. By the extreme-value theorem, <InlineMath>{`f`}</InlineMath>
        attains a maximum value <InlineMath>{`M(f)`}</InlineMath> and a minimum value
        <InlineMath>{`m(f)`}</InlineMath> on <InlineMath>{`[a, b]`}</InlineMath>.
      </p>

      <Callout type="definition" title="Span of a Function">
        <p>
          The <strong>span</strong> of <InlineMath>{`f`}</InlineMath> in the interval
          <InlineMath>{`[a, b]`}</InlineMath> is the difference
        </p>
        <MathBlock>{`\\text{span}(f) = M(f) - m(f).`}</MathBlock>
        <p>
          Some authors use the term <strong>oscillation</strong> instead of span. Older texts
          use the Latin word <em>saltus</em> (meaning "leap").
        </p>
      </Callout>

      <p>
        The span measures how much the function varies over the interval. Note that the span
        of <InlineMath>{`f`}</InlineMath> in any subinterval of <InlineMath>{`[a, b]`}</InlineMath> cannot
        exceed the span of <InlineMath>{`f`}</InlineMath> in <InlineMath>{`[a, b]`}</InlineMath>.
      </p>

      <h2>The Small-Span Theorem</h2>
      <p>
        A fundamental property of continuous functions is that we can partition the interval
        so that the span of the function in each subinterval is arbitrarily small. This is
        usually referred to in the literature as the theorem on <strong>uniform continuity</strong>.
      </p>

      <Callout type="theorem" title="Theorem 3.13 (Small-Span Theorem / Uniform Continuity)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be continuous on a closed interval <InlineMath>{`[a, b]`}</InlineMath>.
          Then, for every <InlineMath>{`\\epsilon > 0`}</InlineMath> there is a partition of
          <InlineMath>{`[a, b]`}</InlineMath> into a finite number of subintervals such that the span
          of <InlineMath>{`f`}</InlineMath> in every subinterval is less than <InlineMath>{`\\epsilon`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof (Method of Successive Bisection)">
        <p>
          We argue by contradiction, using the method of successive bisections. Assume the
          theorem is false. That is, assume that for some <InlineMath>{`\\epsilon`}</InlineMath>, say
          for <InlineMath>{`\\epsilon = \\epsilon_0`}</InlineMath>, the interval <InlineMath>{`[a, b]`}</InlineMath>
          cannot be partitioned into a finite number of subintervals in each of which the span
          of <InlineMath>{`f`}</InlineMath> is less than <InlineMath>{`\\epsilon_0`}</InlineMath>.
        </p>
        <p>
          Let <InlineMath>{`c`}</InlineMath> be the midpoint of <InlineMath>{`[a, b]`}</InlineMath>. Then for
          the same <InlineMath>{`\\epsilon_0`}</InlineMath>, the theorem is false in at least one of the
          two subintervals <InlineMath>{`[a, c]`}</InlineMath> or <InlineMath>{`[c, b]`}</InlineMath>. (If the
          theorem were true in both intervals <InlineMath>{`[a, c]`}</InlineMath> and
          <InlineMath>{`[c, b]`}</InlineMath>, it would also be true in the full interval
          <InlineMath>{`[a, b]`}</InlineMath>.)
        </p>
        <p>
          Let <InlineMath>{`[a_1, b_1]`}</InlineMath> be that half of <InlineMath>{`[a, b]`}</InlineMath> in
          which the theorem is false for <InlineMath>{`\\epsilon_0`}</InlineMath>. If it is false in
          both halves, let <InlineMath>{`[a_1, b_1]`}</InlineMath> be the left half. Continue the
          bisection process repeatedly, denoting by <InlineMath>{`[a_{n+1}, b_{n+1}]`}</InlineMath>
          that half of <InlineMath>{`[a_n, b_n]`}</InlineMath> in which the theorem is false for
          <InlineMath>{`\\epsilon_0`}</InlineMath>.
        </p>
        <p>
          Note that the span of <InlineMath>{`f`}</InlineMath> in each subinterval
          <InlineMath>{`[a_n, b_n]`}</InlineMath> so constructed is at least <InlineMath>{`\\epsilon_0`}</InlineMath>.
        </p>
        <p>
          Let <InlineMath>{`A`}</InlineMath> denote the collection of leftmost endpoints
          <InlineMath>{`a, a_1, a_2, \\ldots`}</InlineMath> so constructed, and let
          <InlineMath>{`\\alpha = \\sup A`}</InlineMath>. Then <InlineMath>{`\\alpha`}</InlineMath> lies in
          <InlineMath>{`[a, b]`}</InlineMath>. By continuity of <InlineMath>{`f`}</InlineMath> at
          <InlineMath>{`\\alpha`}</InlineMath>, there is an interval
          <InlineMath>{`(\\alpha - \\delta, \\alpha + \\delta)`}</InlineMath> in which the span of
          <InlineMath>{`f`}</InlineMath> is less than <InlineMath>{`\\epsilon_0`}</InlineMath>.
        </p>
        <p>
          However, when <InlineMath>{`n`}</InlineMath> is so large that
          <InlineMath>{`(b - a)/2^n < \\delta`}</InlineMath>, the interval <InlineMath>{`[a_n, b_n]`}</InlineMath>
          lies inside <InlineMath>{`(\\alpha - \\delta, \\alpha + \\delta)`}</InlineMath>, so the span of
          <InlineMath>{`f`}</InlineMath> in <InlineMath>{`[a_n, b_n]`}</InlineMath> is also less than
          <InlineMath>{`\\epsilon_0`}</InlineMath>, contradicting the fact that the span of
          <InlineMath>{`f`}</InlineMath> is at least <InlineMath>{`\\epsilon_0`}</InlineMath> in
          <InlineMath>{`[a_n, b_n]`}</InlineMath>. This contradiction completes the proof.
        </p>
      </Callout>

      <h2>Uniform Continuity Defined</h2>
      <p>
        The small-span theorem can be reformulated in terms of a property called
        <strong>uniform continuity</strong>.
      </p>

      <Callout type="definition" title="Uniform Continuity">
        <p>
          A function <InlineMath>{`f`}</InlineMath> is <strong>uniformly continuous</strong> on an
          interval <InlineMath>{`[a, b]`}</InlineMath> if for every <InlineMath>{`\\epsilon > 0`}</InlineMath>,
          there exists a <InlineMath>{`\\delta > 0`}</InlineMath> such that
        </p>
        <MathBlock>{`|f(x) - f(y)| < \\epsilon \\quad \\text{whenever} \\quad |x - y| < \\delta`}</MathBlock>
        <p>
          for all <InlineMath>{`x, y`}</InlineMath> in <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
      </Callout>

      <h2>Uniform vs. Pointwise Continuity</h2>
      <p>
        The key difference between uniform continuity and ordinary (pointwise) continuity is:
      </p>
      <ul>
        <li>
          <strong>Pointwise continuity:</strong> For each point <InlineMath>{`c`}</InlineMath> and each
          <InlineMath>{`\\epsilon > 0`}</InlineMath>, there exists a <InlineMath>{`\\delta > 0`}</InlineMath>
          (which may depend on <em>both</em> <InlineMath>{`c`}</InlineMath> and
          <InlineMath>{`\\epsilon`}</InlineMath>).
        </li>
        <li>
          <strong>Uniform continuity:</strong> For each <InlineMath>{`\\epsilon > 0`}</InlineMath>, there
          exists a <em>single</em> <InlineMath>{`\\delta > 0`}</InlineMath> that works for <em>all</em>
          points simultaneously.
        </li>
      </ul>

      <Callout type="example" title="Example: f(x) = x² on [0, 1]">
        <p>
          The function <InlineMath>{`f(x) = x^2`}</InlineMath> is uniformly continuous on
          <InlineMath>{`[0, 1]`}</InlineMath> (and on any closed bounded interval). Given
          <InlineMath>{`\\epsilon > 0`}</InlineMath>, we can choose <InlineMath>{`\\delta = \\epsilon/2`}</InlineMath>,
          because if <InlineMath>{`|x - y| < \\delta`}</InlineMath> and both <InlineMath>{`x, y`}</InlineMath>
          are in <InlineMath>{`[0, 1]`}</InlineMath>, then:
        </p>
        <MathBlock>{`|x^2 - y^2| = |x + y| \\cdot |x - y| \\leq 2 \\cdot \\delta = \\epsilon.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: f(x) = 1/x on (0, 1]">
        <p>
          The function <InlineMath>{`f(x) = 1/x`}</InlineMath> is continuous on <InlineMath>{`(0, 1]`}</InlineMath>
          but <em>not</em> uniformly continuous. As <InlineMath>{`x \\to 0^+`}</InlineMath>, the function
          changes more and more rapidly, so no single <InlineMath>{`\\delta`}</InlineMath> can control
          the variation near <InlineMath>{`0`}</InlineMath>.
        </p>
        <p>
          For any proposed <InlineMath>{`\\delta > 0`}</InlineMath>, we can find points
          <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath> with <InlineMath>{`|x - y| < \\delta`}</InlineMath>
          but <InlineMath>{`|1/x - 1/y|`}</InlineMath> arbitrarily large (by choosing both near
          <InlineMath>{`0`}</InlineMath>).
        </p>
      </Callout>

      <Callout type="theorem" title="Continuous on Closed Interval Implies Uniformly Continuous">
        <p>
          Every function that is continuous on a closed bounded interval <InlineMath>{`[a, b]`}</InlineMath>
          is uniformly continuous on <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
      </Callout>

      <p>
        This is essentially what the small-span theorem tells us: we can partition the interval
        so finely that the function varies by less than <InlineMath>{`\\epsilon`}</InlineMath> in each
        piece, which means a single <InlineMath>{`\\delta`}</InlineMath> (the smallest subinterval length)
        works everywhere.
      </p>

      <h2>The Integrability Theorem</h2>
      <p>
        The small-span theorem provides the key to proving that continuous functions are
        integrable. This completes a major circle of ideas: we used integration to define
        area and study functions, and now we prove that the class of continuous functions—our
        most important class—is indeed integrable.
      </p>

      <Callout type="theorem" title="Theorem 3.14 (Integrability of Continuous Functions)">
        <p>
          If a function <InlineMath>{`f`}</InlineMath> is continuous at each point of a closed interval
          <InlineMath>{`[a, b]`}</InlineMath>, then <InlineMath>{`f`}</InlineMath> is integrable on
          <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          The Boundedness Theorem (Theorem 3.11) shows that <InlineMath>{`f`}</InlineMath> is bounded on
          <InlineMath>{`[a, b]`}</InlineMath>, so <InlineMath>{`f`}</InlineMath> has an upper integral
          <InlineMath>{`\\overline{I}(f)`}</InlineMath> and a lower integral <InlineMath>{`\\underline{I}(f)`}</InlineMath>.
          We shall prove that <InlineMath>{`\\overline{I}(f) = \\underline{I}(f)`}</InlineMath>.
        </p>
        <p>
          Choose an integer <InlineMath>{`N \\geq 1`}</InlineMath> and let
          <InlineMath>{`\\epsilon = 1/N`}</InlineMath>. By the small-span theorem, for this choice of
          <InlineMath>{`\\epsilon`}</InlineMath> there is a partition
          <InlineMath>{`P = \\{x_0, x_1, \\ldots, x_n\\}`}</InlineMath> of <InlineMath>{`[a, b]`}</InlineMath> into
          <InlineMath>{`n`}</InlineMath> subintervals such that the span of <InlineMath>{`f`}</InlineMath> in
          every subinterval is less than <InlineMath>{`\\epsilon`}</InlineMath>.
        </p>
        <p>
          Denote by <InlineMath>{`M_k(f)`}</InlineMath> and <InlineMath>{`m_k(f)`}</InlineMath>, respectively,
          the absolute maximum and minimum values of <InlineMath>{`f`}</InlineMath> in the
          <InlineMath>{`k`}</InlineMath>th subinterval <InlineMath>{`[x_{k-1}, x_k]`}</InlineMath>. Then we have:
        </p>
        <MathBlock>{`M_k(f) - m_k(f) < \\epsilon`}</MathBlock>
        <p>
          for each <InlineMath>{`k = 1, 2, \\ldots, n`}</InlineMath>.
        </p>
        <p>
          Now let <InlineMath>{`s_n`}</InlineMath> and <InlineMath>{`t_n`}</InlineMath> be two step functions
          defined on <InlineMath>{`[a, b]`}</InlineMath> as follows:
        </p>
        <MathBlock>{`s_n(x) = m_k(f) \\quad \\text{if } x_{k-1} < x < x_k`}</MathBlock>
        <MathBlock>{`t_n(x) = M_k(f) \\quad \\text{if } x_{k-1} < x < x_k`}</MathBlock>
        <p>
          Then we have <InlineMath>{`s_n(x) \\leq f(x) \\leq t_n(x)`}</InlineMath> for all
          <InlineMath>{`x`}</InlineMath> in <InlineMath>{`[a, b]`}</InlineMath>. Also:
        </p>
        <MathBlock>{`\\int_a^b s_n = \\sum_{k=1}^{n} m_k(f)(x_k - x_{k-1})`}</MathBlock>
        <MathBlock>{`\\int_a^b t_n = \\sum_{k=1}^{n} M_k(f)(x_k - x_{k-1})`}</MathBlock>
        <p>
          The difference of these two integrals is:
        </p>
        <MathBlock>{`\\int_a^b t_n - \\int_a^b s_n = \\sum_{k=1}^{n} [M_k(f) - m_k(f)](x_k - x_{k-1}) < \\epsilon \\sum_{k=1}^{n} (x_k - x_{k-1}) = \\epsilon(b - a).`}</MathBlock>
        <p>
          Since <InlineMath>{`\\epsilon = 1/N`}</InlineMath>, this inequality can be written as:
        </p>
        <MathBlock>{`\\int_a^b t_n - \\int_a^b s_n < \\frac{b - a}{N}.`}</MathBlock>
        <p>
          On the other hand, the upper and lower integrals of <InlineMath>{`f`}</InlineMath> satisfy:
        </p>
        <MathBlock>{`\\int_a^b s_n \\leq \\underline{I}(f) \\leq \\int_a^b t_n \\quad \\text{and} \\quad \\int_a^b s_n \\leq \\overline{I}(f) \\leq \\int_a^b t_n.`}</MathBlock>
        <p>
          This gives us:
        </p>
        <MathBlock>{`0 \\leq \\overline{I}(f) - \\underline{I}(f) < \\frac{b - a}{N}.`}</MathBlock>
        <p>
          Since this holds for every positive integer <InlineMath>{`N`}</InlineMath>, and the left side
          is independent of <InlineMath>{`N`}</InlineMath>, we must have
          <InlineMath>{`\\overline{I}(f) = \\underline{I}(f)`}</InlineMath>. Therefore <InlineMath>{`f`}</InlineMath>
          is integrable.
        </p>
      </Callout>

      <h2>Significance of the Integrability Theorem</h2>
      <p>
        The integrability theorem tells us that we never have to worry about whether a
        continuous function is integrable—it always is. This includes:
      </p>
      <ul>
        <li>All polynomial functions</li>
        <li>All rational functions (on intervals where they are defined)</li>
        <li>Trigonometric functions: <InlineMath>{`\\sin x, \\cos x, \\tan x`}</InlineMath>, etc.</li>
        <li>Exponential and logarithmic functions</li>
        <li>
          Compositions and products of continuous functions (which are also continuous)
        </li>
      </ul>

      <h2>The Role of Uniform Continuity</h2>
      <p>
        Uniform continuity is the key property that makes the integrability proof work:
      </p>
      <ol>
        <li>
          <strong>Small span implies good approximation:</strong> When the span of
          <InlineMath>{`f`}</InlineMath> is small in each subinterval, the step functions
          <InlineMath>{`s_n`}</InlineMath> and <InlineMath>{`t_n`}</InlineMath> provide tight upper and lower
          bounds for <InlineMath>{`f`}</InlineMath>.
        </li>
        <li>
          <strong>Uniform control:</strong> The same <InlineMath>{`\\epsilon`}</InlineMath> works in all
          subintervals simultaneously, which allows us to sum the errors and get a global bound.
        </li>
        <li>
          <strong>Squeeze to equality:</strong> As we refine the partition (increasing
          <InlineMath>{`N`}</InlineMath>), the gap between upper and lower integrals shrinks to zero.
        </li>
      </ol>

      <h2>Summary</h2>
      <p>
        The small-span theorem (uniform continuity) and the integrability theorem are
        fundamental results that complete our study of continuous functions:
      </p>
      <ul>
        <li>
          <strong>Span:</strong> The span <InlineMath>{`M(f) - m(f)`}</InlineMath> measures the
          variation of <InlineMath>{`f`}</InlineMath> over an interval.
        </li>
        <li>
          <strong>Small-Span Theorem:</strong> For any <InlineMath>{`\\epsilon > 0`}</InlineMath>, a
          continuous function on <InlineMath>{`[a, b]`}</InlineMath> can be partitioned so that the
          span in each piece is less than <InlineMath>{`\\epsilon`}</InlineMath>.
        </li>
        <li>
          <strong>Uniform Continuity:</strong> A single <InlineMath>{`\\delta`}</InlineMath> controls
          the variation everywhere on the interval.
        </li>
        <li>
          <strong>Integrability:</strong> Every continuous function on a closed interval is
          integrable.
        </li>
      </ul>
      <p>
        These results close the circle between continuity and integration, showing that the
        integral is a well-defined operation on the class of continuous functions.
      </p>
    </LessonLayout>
  );
}
