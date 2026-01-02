import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <p>
        The mean-value theorem for derivatives holds a position of great importance in
        calculus because many properties of functions can easily be deduced from it.
        Before we state the mean-value theorem, we examine one of its special cases—Rolle's
        theorem—from which the more general theorem will be deduced.
      </p>

      <h2>Rolle's Theorem</h2>
      <p>
        This special case was discovered in 1690 by Michel Rolle (1652–1719), a French
        mathematician.
      </p>

      <Callout type="theorem" title="Theorem 4.4 (Rolle's Theorem)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> be a function which is <strong>continuous everywhere</strong>
          on a closed interval <InlineMath>{`[a, b]`}</InlineMath> and has a <strong>derivative</strong>
          at each point of the open interval <InlineMath>{`(a, b)`}</InlineMath>. Also, assume that
        </p>
        <MathBlock>{`f(a) = f(b).`}</MathBlock>
        <p>
          Then there is at least one point <InlineMath>{`c`}</InlineMath> in the open interval
          <InlineMath>{`(a, b)`}</InlineMath> such that
        </p>
        <MathBlock>{`f'(c) = 0.`}</MathBlock>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          Rolle's theorem simply asserts that if a curve starts and ends at the same height,
          it must have a <strong>horizontal tangent</strong> somewhere between the endpoints.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Rolle's Theorem">
        <p>
          We assume <InlineMath>{`f'(x) \\neq 0`}</InlineMath> for every <InlineMath>{`x`}</InlineMath> in
          <InlineMath>{`(a, b)`}</InlineMath> and derive a contradiction.
        </p>
        <p>
          By the extreme-value theorem for continuous functions, <InlineMath>{`f`}</InlineMath> must
          attain its absolute maximum <InlineMath>{`M`}</InlineMath> and absolute minimum
          <InlineMath>{`m`}</InlineMath> somewhere in <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
        <p>
          By Theorem 4.3, neither extreme value can occur at any interior point (otherwise
          the derivative would vanish there). Hence, both extreme values are taken at the
          endpoints <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath>.
        </p>
        <p>
          But since <InlineMath>{`f(a) = f(b)`}</InlineMath>, this means <InlineMath>{`m = M`}</InlineMath>,
          and hence <InlineMath>{`f`}</InlineMath> is constant on <InlineMath>{`[a, b]`}</InlineMath>. This
          contradicts <InlineMath>{`f'(x) \\neq 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath> in
          <InlineMath>{`(a, b)`}</InlineMath>.
        </p>
        <p>
          Therefore <InlineMath>{`f'(c) = 0`}</InlineMath> for at least one <InlineMath>{`c`}</InlineMath>
          satisfying <InlineMath>{`a < c < b`}</InlineMath>.
        </p>
      </Callout>

      <h2>The Mean-Value Theorem</h2>
      <p>
        We can use Rolle's theorem to prove the mean-value theorem. Before stating it,
        let's examine its geometric significance.
      </p>

      <Callout type="info" title="Geometric Motivation">
        <p>
          Consider a continuous curve from point <InlineMath>{`A = (a, f(a))`}</InlineMath> to
          point <InlineMath>{`B = (b, f(b))`}</InlineMath>. The mean-value theorem guarantees
          that there is at least one point on the curve where the <strong>tangent line
          is parallel to the chord</strong> <InlineMath>{`AB`}</InlineMath>.
        </p>
        <p>
          Since parallel lines have equal slopes:
        </p>
        <ul>
          <li>Slope of chord <InlineMath>{`AB`}</InlineMath>: <InlineMath>{`\\dfrac{f(b) - f(a)}{b - a}`}</InlineMath></li>
          <li>Slope of tangent at <InlineMath>{`c`}</InlineMath>: <InlineMath>{`f'(c)`}</InlineMath></li>
        </ul>
        <p>
          The theorem asserts these are equal for some <InlineMath>{`c`}</InlineMath> in
          <InlineMath>{`(a, b)`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Physical Interpretation">
        <p>
          Think of <InlineMath>{`f(t)`}</InlineMath> as the distance traveled by a moving particle
          at time <InlineMath>{`t`}</InlineMath>. Then:
        </p>
        <ul>
          <li>
            <InlineMath>{`\\dfrac{f(b) - f(a)}{b - a}`}</InlineMath> represents the <strong>average
            speed</strong> over <InlineMath>{`[a, b]`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`f'(t)`}</InlineMath> represents the <strong>instantaneous speed</strong>
            at time <InlineMath>{`t`}</InlineMath>
          </li>
        </ul>
        <p>
          The mean-value theorem asserts that there must be some moment when the
          instantaneous speed equals the average speed.
        </p>
        <p>
          <em>Example:</em> If the average speed during an automobile trip is 45 mph,
          then the speedometer must register exactly 45 mph at least once during the trip.
        </p>
      </Callout>

      <Callout type="theorem" title="Theorem 4.5 (Mean-Value Theorem for Derivatives)">
        <p>
          Assume <InlineMath>{`f`}</InlineMath> is <strong>continuous everywhere</strong> on a
          closed interval <InlineMath>{`[a, b]`}</InlineMath> and has a <strong>derivative</strong>
          at each point of the open interval <InlineMath>{`(a, b)`}</InlineMath>. Then there is
          at least one interior point <InlineMath>{`c`}</InlineMath> of <InlineMath>{`(a, b)`}</InlineMath>
          for which
        </p>
        <MathBlock>{`f(b) - f(a) = f'(c)(b - a).`}</MathBlock>
        <p>Equivalently:</p>
        <MathBlock>{`\\frac{f(b) - f(a)}{b - a} = f'(c).`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof of the Mean-Value Theorem">
        <p>
          To apply Rolle's theorem, we need a function with equal values at the endpoints.
          We construct such a function by modifying <InlineMath>{`f`}</InlineMath>. Let
        </p>
        <MathBlock>{`h(x) = f(x)(b - a) - x[f(b) - f(a)].`}</MathBlock>
        <p>
          Then <InlineMath>{`h(a) = h(b) = bf(a) - af(b)`}</InlineMath>. Also, <InlineMath>{`h`}</InlineMath>
          is continuous on <InlineMath>{`[a, b]`}</InlineMath> and has a derivative in
          <InlineMath>{`(a, b)`}</InlineMath>.
        </p>
        <p>
          Applying Rolle's theorem to <InlineMath>{`h`}</InlineMath>, we find <InlineMath>{`h'(c) = 0`}</InlineMath>
          for some <InlineMath>{`c`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>. But
        </p>
        <MathBlock>{`h'(x) = f'(x)(b - a) - [f(b) - f(a)].`}</MathBlock>
        <p>
          When <InlineMath>{`x = c`}</InlineMath>, setting <InlineMath>{`h'(c) = 0`}</InlineMath> gives
          us <InlineMath>{`f(b) - f(a) = f'(c)(b - a)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Important Notes</h2>

      <Callout type="info" title="Location of Mean Values">
        <p>
          The theorem makes no assertion about the <em>exact location</em> of the mean
          value(s) <InlineMath>{`c`}</InlineMath>, except that they lie somewhere between
          <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath>. For some functions, the
          position can be determined exactly, but in most cases it is difficult.
        </p>
        <p>
          Nevertheless, the real usefulness of the theorem lies in the knowledge of the
          <strong> mere existence</strong> of at least one mean value.
        </p>
      </Callout>

      <Callout type="info" title="Hypothesis is Essential">
        <p>
          The conclusion of the mean-value theorem may <strong>fail</strong> if there is
          any point between <InlineMath>{`a`}</InlineMath> and <InlineMath>{`b`}</InlineMath> where the
          derivative does not exist.
        </p>
        <p>
          <strong>Example:</strong> The function <InlineMath>{`f(x) = |x|`}</InlineMath> is
          continuous everywhere and has a derivative everywhere except at 0.
        </p>
        <p>
          Let <InlineMath>{`A = (-1, 1)`}</InlineMath> and <InlineMath>{`B = (2, 2)`}</InlineMath>.
          The slope of the chord <InlineMath>{`AB`}</InlineMath> is:
        </p>
        <MathBlock>{`\\frac{f(2) - f(-1)}{2 - (-1)} = \\frac{2 - 1}{3} = \\frac{1}{3}`}</MathBlock>
        <p>
          But the derivative <InlineMath>{`f'(x)`}</InlineMath> equals <InlineMath>{`-1`}</InlineMath>
          for <InlineMath>{`x < 0`}</InlineMath> and <InlineMath>{`+1`}</InlineMath> for
          <InlineMath>{`x > 0`}</InlineMath>. The derivative is <em>nowhere</em> equal to
          <InlineMath>{`1/3`}</InlineMath>.
        </p>
      </Callout>

      <h2>Alternative Form</h2>
      <p>
        The mean-value formula can be expressed in several equivalent ways.
      </p>

      <Callout type="info" title="Alternative Formulations">
        <p><strong>Standard form:</strong></p>
        <MathBlock>{`f(b) - f(a) = f'(c)(b - a), \\quad \\text{where } a < c < b`}</MathBlock>

        <p><strong>With parameter θ:</strong> Setting <InlineMath>{`c = a + \\theta(b - a)`}</InlineMath>
           where <InlineMath>{`0 < \\theta < 1`}</InlineMath>:</p>
        <MathBlock>{`f(b) - f(a) = f'(a + \\theta(b - a))(b - a)`}</MathBlock>

        <p><strong>Increment form:</strong> With <InlineMath>{`b = x + h`}</InlineMath> and
           <InlineMath>{`a = x`}</InlineMath>:</p>
        <MathBlock>{`f(x + h) - f(x) = f'(x + \\theta h) \\cdot h, \\quad \\text{where } 0 < \\theta < 1`}</MathBlock>
      </Callout>

      <h2>Cauchy's Mean-Value Formula</h2>
      <p>
        The following extension of the mean-value theorem is often useful.
      </p>

      <Callout type="theorem" title="Theorem 4.6 (Cauchy's Mean-Value Formula)">
        <p>
          Let <InlineMath>{`f`}</InlineMath> and <InlineMath>{`g`}</InlineMath> be two functions
          <strong> continuous</strong> on <InlineMath>{`[a, b]`}</InlineMath> and having
          <strong> derivatives</strong> in <InlineMath>{`(a, b)`}</InlineMath>. Then, for some
          <InlineMath>{`c`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>, we have
        </p>
        <MathBlock>{`f'(c)[g(b) - g(a)] = g'(c)[f(b) - f(a)].`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof Sketch">
        <p>
          The proof is similar to Theorem 4.5. Let
        </p>
        <MathBlock>{`h(x) = f(x)[g(b) - g(a)] - g(x)[f(b) - f(a)].`}</MathBlock>
        <p>
          Then <InlineMath>{`h(a) = h(b) = f(a)g(b) - g(a)f(b)`}</InlineMath>. Applying Rolle's
          theorem to <InlineMath>{`h`}</InlineMath>, we find <InlineMath>{`h'(c) = 0`}</InlineMath> for
          some <InlineMath>{`c`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>, which gives
          Cauchy's formula.
        </p>
        <p>
          <strong>Note:</strong> The standard mean-value theorem (Theorem 4.5) is the
          special case obtained by taking <InlineMath>{`g(x) = x`}</InlineMath>.
        </p>
      </Callout>

      <h2>Applications of the Mean-Value Theorem</h2>

      <Callout type="example" title="Example 1: Proving Inequalities">
        <p>
          Use the mean-value theorem to prove that <InlineMath>{`|\\sin x - \\sin y| \\leq |x - y|`}</InlineMath>
          for all <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          By the mean-value theorem applied to <InlineMath>{`f(t) = \\sin t`}</InlineMath> on the
          interval with endpoints <InlineMath>{`x`}</InlineMath> and <InlineMath>{`y`}</InlineMath>:
        </p>
        <MathBlock>{`\\sin x - \\sin y = \\cos(c)(x - y)`}</MathBlock>
        <p>
          for some <InlineMath>{`c`}</InlineMath> between <InlineMath>{`x`}</InlineMath> and
          <InlineMath>{`y`}</InlineMath>. Taking absolute values:
        </p>
        <MathBlock>{`|\\sin x - \\sin y| = |\\cos(c)| \\cdot |x - y| \\leq |x - y|`}</MathBlock>
        <p>
          since <InlineMath>{`|\\cos(c)| \\leq 1`}</InlineMath> for all <InlineMath>{`c`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Uniqueness of Roots">
        <p>
          Use Rolle's theorem to prove that the equation <InlineMath>{`x^3 - 3x + b = 0`}</InlineMath>
          has at most one root in <InlineMath>{`[-1, 1]`}</InlineMath>, regardless of the value
          of <InlineMath>{`b`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Suppose the equation has two roots <InlineMath>{`r_1`}</InlineMath> and
          <InlineMath>{`r_2`}</InlineMath> in <InlineMath>{`[-1, 1]`}</InlineMath> with
          <InlineMath>{`r_1 < r_2`}</InlineMath>.
        </p>
        <p>
          Let <InlineMath>{`f(x) = x^3 - 3x + b`}</InlineMath>. Then <InlineMath>{`f(r_1) = f(r_2) = 0`}</InlineMath>.
        </p>
        <p>
          By Rolle's theorem, there exists <InlineMath>{`c`}</InlineMath> in
          <InlineMath>{`(r_1, r_2) \\subseteq (-1, 1)`}</InlineMath> such that
          <InlineMath>{`f'(c) = 0`}</InlineMath>.
        </p>
        <p>
          But <InlineMath>{`f'(x) = 3x^2 - 3 = 3(x^2 - 1)`}</InlineMath>, which equals zero only
          when <InlineMath>{`x = \\pm 1`}</InlineMath>. There is no <InlineMath>{`c`}</InlineMath> in
          <InlineMath>{`(-1, 1)`}</InlineMath> where <InlineMath>{`f'(c) = 0`}</InlineMath>.
        </p>
        <p>
          This contradiction shows there cannot be two roots in <InlineMath>{`[-1, 1]`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Finding the Mean Value">
        <p>
          For <InlineMath>{`f(x) = x^2`}</InlineMath> on <InlineMath>{`[a, b]`}</InlineMath>, find the
          value of <InlineMath>{`c`}</InlineMath> guaranteed by the mean-value theorem.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          The mean-value theorem states:
        </p>
        <MathBlock>{`f(b) - f(a) = f'(c)(b - a)`}</MathBlock>
        <MathBlock>{`b^2 - a^2 = 2c(b - a)`}</MathBlock>
        <MathBlock>{`(b - a)(b + a) = 2c(b - a)`}</MathBlock>
        <p>
          Since <InlineMath>{`b \\neq a`}</InlineMath>, we can divide:
        </p>
        <MathBlock>{`c = \\frac{a + b}{2}`}</MathBlock>
        <p>
          For quadratics, the mean value <InlineMath>{`c`}</InlineMath> is always the
          <strong> midpoint</strong> of the interval!
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Proving Functions are Constant">
        <p>
          If <InlineMath>{`f'(x) = 0`}</InlineMath> for all <InlineMath>{`x`}</InlineMath> in an interval
          <InlineMath>{`I`}</InlineMath>, prove that <InlineMath>{`f`}</InlineMath> is constant on
          <InlineMath>{`I`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <InlineMath>{`x_1`}</InlineMath> and <InlineMath>{`x_2`}</InlineMath> be any two points in
          <InlineMath>{`I`}</InlineMath> with <InlineMath>{`x_1 < x_2`}</InlineMath>.
        </p>
        <p>
          By the mean-value theorem:
        </p>
        <MathBlock>{`f(x_2) - f(x_1) = f'(c)(x_2 - x_1)`}</MathBlock>
        <p>
          for some <InlineMath>{`c`}</InlineMath> in <InlineMath>{`(x_1, x_2)`}</InlineMath>.
        </p>
        <p>
          Since <InlineMath>{`f'(c) = 0`}</InlineMath>, we have <InlineMath>{`f(x_2) - f(x_1) = 0`}</InlineMath>,
          so <InlineMath>{`f(x_2) = f(x_1)`}</InlineMath>.
        </p>
        <p>
          Since this holds for any two points, <InlineMath>{`f`}</InlineMath> is constant on
          <InlineMath>{`I`}</InlineMath>.
        </p>
      </Callout>

      <h2>Consequences of the Mean-Value Theorem</h2>

      <Callout type="info" title="Key Applications">
        <p>
          The mean-value theorem is the foundation for proving many important results:
        </p>
        <ul>
          <li>
            <strong>Monotonicity:</strong> <InlineMath>{`f' > 0`}</InlineMath> implies
            <InlineMath>{`f`}</InlineMath> is strictly increasing
          </li>
          <li>
            <strong>Constant functions:</strong> <InlineMath>{`f' = 0`}</InlineMath> everywhere
            implies <InlineMath>{`f`}</InlineMath> is constant
          </li>
          <li>
            <strong>Antiderivatives differ by constants:</strong> If
            <InlineMath>{`F'(x) = G'(x)`}</InlineMath> for all <InlineMath>{`x`}</InlineMath>, then
            <InlineMath>{`F(x) = G(x) + C`}</InlineMath>
          </li>
          <li>
            <strong>Lipschitz condition:</strong> If <InlineMath>{`|f'(x)| \\leq M`}</InlineMath>,
            then <InlineMath>{`|f(x) - f(y)| \\leq M|x - y|`}</InlineMath>
          </li>
          <li>
            <strong>L'Hôpital's rule:</strong> Uses Cauchy's mean-value formula
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Rolle's Theorem:</strong> If <InlineMath>{`f`}</InlineMath> is continuous on
          <InlineMath>{`[a, b]`}</InlineMath>, differentiable on <InlineMath>{`(a, b)`}</InlineMath>,
          and <InlineMath>{`f(a) = f(b)`}</InlineMath>, then <InlineMath>{`f'(c) = 0`}</InlineMath> for
          some <InlineMath>{`c`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>.
        </li>
        <li>
          <strong>Mean-Value Theorem:</strong> Under the same continuity and differentiability
          conditions, <InlineMath>{`f(b) - f(a) = f'(c)(b - a)`}</InlineMath> for some
          <InlineMath>{`c`}</InlineMath> in <InlineMath>{`(a, b)`}</InlineMath>.
        </li>
        <li>
          <strong>Geometric meaning:</strong> There is a point where the tangent line is
          parallel to the secant line through the endpoints.
        </li>
        <li>
          <strong>Physical meaning:</strong> Instantaneous velocity equals average velocity
          at some point.
        </li>
        <li>
          <strong>Cauchy's formula:</strong> Generalizes MVT to ratios of functions:
          <InlineMath>{`f'(c)[g(b) - g(a)] = g'(c)[f(b) - f(a)]`}</InlineMath>.
        </li>
        <li>
          The hypothesis that <InlineMath>{`f`}</InlineMath> is differentiable throughout
          <InlineMath>{`(a, b)`}</InlineMath> is <strong>essential</strong>—the theorem fails
          without it.
        </li>
      </ul>
    </LessonLayout>
  );
}
