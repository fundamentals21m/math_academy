import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
        Let <MathInline>{`f`}</MathInline> be a real-valued continuous function on a closed interval
        <MathInline>{`[a, b]`}</MathInline>. By the extreme-value theorem, <MathInline>{`f`}</MathInline>
        attains a maximum value <MathInline>{`M(f)`}</MathInline> and a minimum value
        <MathInline>{`m(f)`}</MathInline> on <MathInline>{`[a, b]`}</MathInline>.
      </p>

      <Callout type="definition" title="Span of a Function">
        <p>
          The <strong>span</strong> of <MathInline>{`f`}</MathInline> in the interval
          <MathInline>{`[a, b]`}</MathInline> is the difference
        </p>
        <MathBlock>{`\\text{span}(f) = M(f) - m(f).`}</MathBlock>
        <p>
          Some authors use the term <strong>oscillation</strong> instead of span. Older texts
          use the Latin word <em>saltus</em> (meaning "leap").
        </p>
      </Callout>

      <p>
        The span measures how much the function varies over the interval. Note that the span
        of <MathInline>{`f`}</MathInline> in any subinterval of <MathInline>{`[a, b]`}</MathInline> cannot
        exceed the span of <MathInline>{`f`}</MathInline> in <MathInline>{`[a, b]`}</MathInline>.
      </p>

      <h2>The Small-Span Theorem</h2>
      <p>
        A fundamental property of continuous functions is that we can partition the interval
        so that the span of the function in each subinterval is arbitrarily small. This is
        usually referred to in the literature as the theorem on <strong>uniform continuity</strong>.
      </p>

      <Callout type="theorem" title="Theorem 3.13 (Small-Span Theorem / Uniform Continuity)">
        <p>
          Let <MathInline>{`f`}</MathInline> be continuous on a closed interval <MathInline>{`[a, b]`}</MathInline>.
          Then, for every <MathInline>{`\\epsilon > 0`}</MathInline> there is a partition of
          <MathInline>{`[a, b]`}</MathInline> into a finite number of subintervals such that the span
          of <MathInline>{`f`}</MathInline> in every subinterval is less than <MathInline>{`\\epsilon`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof (Method of Successive Bisection)">
        <p>
          We argue by contradiction, using the method of successive bisections. Assume the
          theorem is false. That is, assume that for some <MathInline>{`\\epsilon`}</MathInline>, say
          for <MathInline>{`\\epsilon = \\epsilon_0`}</MathInline>, the interval <MathInline>{`[a, b]`}</MathInline>
          cannot be partitioned into a finite number of subintervals in each of which the span
          of <MathInline>{`f`}</MathInline> is less than <MathInline>{`\\epsilon_0`}</MathInline>.
        </p>
        <p>
          Let <MathInline>{`c`}</MathInline> be the midpoint of <MathInline>{`[a, b]`}</MathInline>. Then for
          the same <MathInline>{`\\epsilon_0`}</MathInline>, the theorem is false in at least one of the
          two subintervals <MathInline>{`[a, c]`}</MathInline> or <MathInline>{`[c, b]`}</MathInline>. (If the
          theorem were true in both intervals <MathInline>{`[a, c]`}</MathInline> and
          <MathInline>{`[c, b]`}</MathInline>, it would also be true in the full interval
          <MathInline>{`[a, b]`}</MathInline>.)
        </p>
        <p>
          Let <MathInline>{`[a_1, b_1]`}</MathInline> be that half of <MathInline>{`[a, b]`}</MathInline> in
          which the theorem is false for <MathInline>{`\\epsilon_0`}</MathInline>. If it is false in
          both halves, let <MathInline>{`[a_1, b_1]`}</MathInline> be the left half. Continue the
          bisection process repeatedly, denoting by <MathInline>{`[a_{n+1}, b_{n+1}]`}</MathInline>
          that half of <MathInline>{`[a_n, b_n]`}</MathInline> in which the theorem is false for
          <MathInline>{`\\epsilon_0`}</MathInline>.
        </p>
        <p>
          Note that the span of <MathInline>{`f`}</MathInline> in each subinterval
          <MathInline>{`[a_n, b_n]`}</MathInline> so constructed is at least <MathInline>{`\\epsilon_0`}</MathInline>.
        </p>
        <p>
          Let <MathInline>{`A`}</MathInline> denote the collection of leftmost endpoints
          <MathInline>{`a, a_1, a_2, \\ldots`}</MathInline> so constructed, and let
          <MathInline>{`\\alpha = \\sup A`}</MathInline>. Then <MathInline>{`\\alpha`}</MathInline> lies in
          <MathInline>{`[a, b]`}</MathInline>. By continuity of <MathInline>{`f`}</MathInline> at
          <MathInline>{`\\alpha`}</MathInline>, there is an interval
          <MathInline>{`(\\alpha - \\delta, \\alpha + \\delta)`}</MathInline> in which the span of
          <MathInline>{`f`}</MathInline> is less than <MathInline>{`\\epsilon_0`}</MathInline>.
        </p>
        <p>
          However, when <MathInline>{`n`}</MathInline> is so large that
          <MathInline>{`(b - a)/2^n < \\delta`}</MathInline>, the interval <MathInline>{`[a_n, b_n]`}</MathInline>
          lies inside <MathInline>{`(\\alpha - \\delta, \\alpha + \\delta)`}</MathInline>, so the span of
          <MathInline>{`f`}</MathInline> in <MathInline>{`[a_n, b_n]`}</MathInline> is also less than
          <MathInline>{`\\epsilon_0`}</MathInline>, contradicting the fact that the span of
          <MathInline>{`f`}</MathInline> is at least <MathInline>{`\\epsilon_0`}</MathInline> in
          <MathInline>{`[a_n, b_n]`}</MathInline>. This contradiction completes the proof.
        </p>
      </Callout>

      <h2>Uniform Continuity Defined</h2>
      <p>
        The small-span theorem can be reformulated in terms of a property called
        <strong>uniform continuity</strong>.
      </p>

      <Callout type="definition" title="Uniform Continuity">
        <p>
          A function <MathInline>{`f`}</MathInline> is <strong>uniformly continuous</strong> on an
          interval <MathInline>{`[a, b]`}</MathInline> if for every <MathInline>{`\\epsilon > 0`}</MathInline>,
          there exists a <MathInline>{`\\delta > 0`}</MathInline> such that
        </p>
        <MathBlock>{`|f(x) - f(y)| < \\epsilon \\quad \\text{whenever} \\quad |x - y| < \\delta`}</MathBlock>
        <p>
          for all <MathInline>{`x, y`}</MathInline> in <MathInline>{`[a, b]`}</MathInline>.
        </p>
      </Callout>

      <h2>Uniform vs. Pointwise Continuity</h2>
      <p>
        The key difference between uniform continuity and ordinary (pointwise) continuity is:
      </p>
      <ul>
        <li>
          <strong>Pointwise continuity:</strong> For each point <MathInline>{`c`}</MathInline> and each
          <MathInline>{`\\epsilon > 0`}</MathInline>, there exists a <MathInline>{`\\delta > 0`}</MathInline>
          (which may depend on <em>both</em> <MathInline>{`c`}</MathInline> and
          <MathInline>{`\\epsilon`}</MathInline>).
        </li>
        <li>
          <strong>Uniform continuity:</strong> For each <MathInline>{`\\epsilon > 0`}</MathInline>, there
          exists a <em>single</em> <MathInline>{`\\delta > 0`}</MathInline> that works for <em>all</em>
          points simultaneously.
        </li>
      </ul>

      <Callout type="example" title="Example: f(x) = x² on [0, 1]">
        <p>
          The function <MathInline>{`f(x) = x^2`}</MathInline> is uniformly continuous on
          <MathInline>{`[0, 1]`}</MathInline> (and on any closed bounded interval). Given
          <MathInline>{`\\epsilon > 0`}</MathInline>, we can choose <MathInline>{`\\delta = \\epsilon/2`}</MathInline>,
          because if <MathInline>{`|x - y| < \\delta`}</MathInline> and both <MathInline>{`x, y`}</MathInline>
          are in <MathInline>{`[0, 1]`}</MathInline>, then:
        </p>
        <MathBlock>{`|x^2 - y^2| = |x + y| \\cdot |x - y| \\leq 2 \\cdot \\delta = \\epsilon.`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example: f(x) = 1/x on (0, 1]">
        <p>
          The function <MathInline>{`f(x) = 1/x`}</MathInline> is continuous on <MathInline>{`(0, 1]`}</MathInline>
          but <em>not</em> uniformly continuous. As <MathInline>{`x \\to 0^+`}</MathInline>, the function
          changes more and more rapidly, so no single <MathInline>{`\\delta`}</MathInline> can control
          the variation near <MathInline>{`0`}</MathInline>.
        </p>
        <p>
          For any proposed <MathInline>{`\\delta > 0`}</MathInline>, we can find points
          <MathInline>{`x`}</MathInline> and <MathInline>{`y`}</MathInline> with <MathInline>{`|x - y| < \\delta`}</MathInline>
          but <MathInline>{`|1/x - 1/y|`}</MathInline> arbitrarily large (by choosing both near
          <MathInline>{`0`}</MathInline>).
        </p>
      </Callout>

      <Callout type="theorem" title="Continuous on Closed Interval Implies Uniformly Continuous">
        <p>
          Every function that is continuous on a closed bounded interval <MathInline>{`[a, b]`}</MathInline>
          is uniformly continuous on <MathInline>{`[a, b]`}</MathInline>.
        </p>
      </Callout>

      <p>
        This is essentially what the small-span theorem tells us: we can partition the interval
        so finely that the function varies by less than <MathInline>{`\\epsilon`}</MathInline> in each
        piece, which means a single <MathInline>{`\\delta`}</MathInline> (the smallest subinterval length)
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
          If a function <MathInline>{`f`}</MathInline> is continuous at each point of a closed interval
          <MathInline>{`[a, b]`}</MathInline>, then <MathInline>{`f`}</MathInline> is integrable on
          <MathInline>{`[a, b]`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          The Boundedness Theorem (Theorem 3.11) shows that <MathInline>{`f`}</MathInline> is bounded on
          <MathInline>{`[a, b]`}</MathInline>, so <MathInline>{`f`}</MathInline> has an upper integral
          <MathInline>{`\\overline{I}(f)`}</MathInline> and a lower integral <MathInline>{`\\underline{I}(f)`}</MathInline>.
          We shall prove that <MathInline>{`\\overline{I}(f) = \\underline{I}(f)`}</MathInline>.
        </p>
        <p>
          Choose an integer <MathInline>{`N \\geq 1`}</MathInline> and let
          <MathInline>{`\\epsilon = 1/N`}</MathInline>. By the small-span theorem, for this choice of
          <MathInline>{`\\epsilon`}</MathInline> there is a partition
          <MathInline>{`P = \\{x_0, x_1, \\ldots, x_n\\}`}</MathInline> of <MathInline>{`[a, b]`}</MathInline> into
          <MathInline>{`n`}</MathInline> subintervals such that the span of <MathInline>{`f`}</MathInline> in
          every subinterval is less than <MathInline>{`\\epsilon`}</MathInline>.
        </p>
        <p>
          Denote by <MathInline>{`M_k(f)`}</MathInline> and <MathInline>{`m_k(f)`}</MathInline>, respectively,
          the absolute maximum and minimum values of <MathInline>{`f`}</MathInline> in the
          <MathInline>{`k`}</MathInline>th subinterval <MathInline>{`[x_{k-1}, x_k]`}</MathInline>. Then we have:
        </p>
        <MathBlock>{`M_k(f) - m_k(f) < \\epsilon`}</MathBlock>
        <p>
          for each <MathInline>{`k = 1, 2, \\ldots, n`}</MathInline>.
        </p>
        <p>
          Now let <MathInline>{`s_n`}</MathInline> and <MathInline>{`t_n`}</MathInline> be two step functions
          defined on <MathInline>{`[a, b]`}</MathInline> as follows:
        </p>
        <MathBlock>{`s_n(x) = m_k(f) \\quad \\text{if } x_{k-1} < x < x_k`}</MathBlock>
        <MathBlock>{`t_n(x) = M_k(f) \\quad \\text{if } x_{k-1} < x < x_k`}</MathBlock>
        <p>
          Then we have <MathInline>{`s_n(x) \\leq f(x) \\leq t_n(x)`}</MathInline> for all
          <MathInline>{`x`}</MathInline> in <MathInline>{`[a, b]`}</MathInline>. Also:
        </p>
        <MathBlock>{`\\int_a^b s_n = \\sum_{k=1}^{n} m_k(f)(x_k - x_{k-1})`}</MathBlock>
        <MathBlock>{`\\int_a^b t_n = \\sum_{k=1}^{n} M_k(f)(x_k - x_{k-1})`}</MathBlock>
        <p>
          The difference of these two integrals is:
        </p>
        <MathBlock>{`\\int_a^b t_n - \\int_a^b s_n = \\sum_{k=1}^{n} [M_k(f) - m_k(f)](x_k - x_{k-1}) < \\epsilon \\sum_{k=1}^{n} (x_k - x_{k-1}) = \\epsilon(b - a).`}</MathBlock>
        <p>
          Since <MathInline>{`\\epsilon = 1/N`}</MathInline>, this inequality can be written as:
        </p>
        <MathBlock>{`\\int_a^b t_n - \\int_a^b s_n < \\frac{b - a}{N}.`}</MathBlock>
        <p>
          On the other hand, the upper and lower integrals of <MathInline>{`f`}</MathInline> satisfy:
        </p>
        <MathBlock>{`\\int_a^b s_n \\leq \\underline{I}(f) \\leq \\int_a^b t_n \\quad \\text{and} \\quad \\int_a^b s_n \\leq \\overline{I}(f) \\leq \\int_a^b t_n.`}</MathBlock>
        <p>
          This gives us:
        </p>
        <MathBlock>{`0 \\leq \\overline{I}(f) - \\underline{I}(f) < \\frac{b - a}{N}.`}</MathBlock>
        <p>
          Since this holds for every positive integer <MathInline>{`N`}</MathInline>, and the left side
          is independent of <MathInline>{`N`}</MathInline>, we must have
          <MathInline>{`\\overline{I}(f) = \\underline{I}(f)`}</MathInline>. Therefore <MathInline>{`f`}</MathInline>
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
        <li>Trigonometric functions: <MathInline>{`\\sin x, \\cos x, \\tan x`}</MathInline>, etc.</li>
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
          <MathInline>{`f`}</MathInline> is small in each subinterval, the step functions
          <MathInline>{`s_n`}</MathInline> and <MathInline>{`t_n`}</MathInline> provide tight upper and lower
          bounds for <MathInline>{`f`}</MathInline>.
        </li>
        <li>
          <strong>Uniform control:</strong> The same <MathInline>{`\\epsilon`}</MathInline> works in all
          subintervals simultaneously, which allows us to sum the errors and get a global bound.
        </li>
        <li>
          <strong>Squeeze to equality:</strong> As we refine the partition (increasing
          <MathInline>{`N`}</MathInline>), the gap between upper and lower integrals shrinks to zero.
        </li>
      </ol>

      <h2>Summary</h2>
      <p>
        The small-span theorem (uniform continuity) and the integrability theorem are
        fundamental results that complete our study of continuous functions:
      </p>
      <ul>
        <li>
          <strong>Span:</strong> The span <MathInline>{`M(f) - m(f)`}</MathInline> measures the
          variation of <MathInline>{`f`}</MathInline> over an interval.
        </li>
        <li>
          <strong>Small-Span Theorem:</strong> For any <MathInline>{`\\epsilon > 0`}</MathInline>, a
          continuous function on <MathInline>{`[a, b]`}</MathInline> can be partitioned so that the
          span in each piece is less than <MathInline>{`\\epsilon`}</MathInline>.
        </li>
        <li>
          <strong>Uniform Continuity:</strong> A single <MathInline>{`\\delta`}</MathInline> controls
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
