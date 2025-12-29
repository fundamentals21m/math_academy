import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

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
          Let <MathInline>{`f`}</MathInline> be a function which is <strong>continuous everywhere</strong>
          on a closed interval <MathInline>{`[a, b]`}</MathInline> and has a <strong>derivative</strong>
          at each point of the open interval <MathInline>{`(a, b)`}</MathInline>. Also, assume that
        </p>
        <MathBlock>{`f(a) = f(b).`}</MathBlock>
        <p>
          Then there is at least one point <MathInline>{`c`}</MathInline> in the open interval
          <MathInline>{`(a, b)`}</MathInline> such that
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
          We assume <MathInline>{`f'(x) \\neq 0`}</MathInline> for every <MathInline>{`x`}</MathInline> in
          <MathInline>{`(a, b)`}</MathInline> and derive a contradiction.
        </p>
        <p>
          By the extreme-value theorem for continuous functions, <MathInline>{`f`}</MathInline> must
          attain its absolute maximum <MathInline>{`M`}</MathInline> and absolute minimum
          <MathInline>{`m`}</MathInline> somewhere in <MathInline>{`[a, b]`}</MathInline>.
        </p>
        <p>
          By Theorem 4.3, neither extreme value can occur at any interior point (otherwise
          the derivative would vanish there). Hence, both extreme values are taken at the
          endpoints <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline>.
        </p>
        <p>
          But since <MathInline>{`f(a) = f(b)`}</MathInline>, this means <MathInline>{`m = M`}</MathInline>,
          and hence <MathInline>{`f`}</MathInline> is constant on <MathInline>{`[a, b]`}</MathInline>. This
          contradicts <MathInline>{`f'(x) \\neq 0`}</MathInline> for all <MathInline>{`x`}</MathInline> in
          <MathInline>{`(a, b)`}</MathInline>.
        </p>
        <p>
          Therefore <MathInline>{`f'(c) = 0`}</MathInline> for at least one <MathInline>{`c`}</MathInline>
          satisfying <MathInline>{`a < c < b`}</MathInline>.
        </p>
      </Callout>

      <h2>The Mean-Value Theorem</h2>
      <p>
        We can use Rolle's theorem to prove the mean-value theorem. Before stating it,
        let's examine its geometric significance.
      </p>

      <Callout type="info" title="Geometric Motivation">
        <p>
          Consider a continuous curve from point <MathInline>{`A = (a, f(a))`}</MathInline> to
          point <MathInline>{`B = (b, f(b))`}</MathInline>. The mean-value theorem guarantees
          that there is at least one point on the curve where the <strong>tangent line
          is parallel to the chord</strong> <MathInline>{`AB`}</MathInline>.
        </p>
        <p>
          Since parallel lines have equal slopes:
        </p>
        <ul>
          <li>Slope of chord <MathInline>{`AB`}</MathInline>: <MathInline>{`\\dfrac{f(b) - f(a)}{b - a}`}</MathInline></li>
          <li>Slope of tangent at <MathInline>{`c`}</MathInline>: <MathInline>{`f'(c)`}</MathInline></li>
        </ul>
        <p>
          The theorem asserts these are equal for some <MathInline>{`c`}</MathInline> in
          <MathInline>{`(a, b)`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Physical Interpretation">
        <p>
          Think of <MathInline>{`f(t)`}</MathInline> as the distance traveled by a moving particle
          at time <MathInline>{`t`}</MathInline>. Then:
        </p>
        <ul>
          <li>
            <MathInline>{`\\dfrac{f(b) - f(a)}{b - a}`}</MathInline> represents the <strong>average
            speed</strong> over <MathInline>{`[a, b]`}</MathInline>
          </li>
          <li>
            <MathInline>{`f'(t)`}</MathInline> represents the <strong>instantaneous speed</strong>
            at time <MathInline>{`t`}</MathInline>
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
          Assume <MathInline>{`f`}</MathInline> is <strong>continuous everywhere</strong> on a
          closed interval <MathInline>{`[a, b]`}</MathInline> and has a <strong>derivative</strong>
          at each point of the open interval <MathInline>{`(a, b)`}</MathInline>. Then there is
          at least one interior point <MathInline>{`c`}</MathInline> of <MathInline>{`(a, b)`}</MathInline>
          for which
        </p>
        <MathBlock>{`f(b) - f(a) = f'(c)(b - a).`}</MathBlock>
        <p>Equivalently:</p>
        <MathBlock>{`\\frac{f(b) - f(a)}{b - a} = f'(c).`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof of the Mean-Value Theorem">
        <p>
          To apply Rolle's theorem, we need a function with equal values at the endpoints.
          We construct such a function by modifying <MathInline>{`f`}</MathInline>. Let
        </p>
        <MathBlock>{`h(x) = f(x)(b - a) - x[f(b) - f(a)].`}</MathBlock>
        <p>
          Then <MathInline>{`h(a) = h(b) = bf(a) - af(b)`}</MathInline>. Also, <MathInline>{`h`}</MathInline>
          is continuous on <MathInline>{`[a, b]`}</MathInline> and has a derivative in
          <MathInline>{`(a, b)`}</MathInline>.
        </p>
        <p>
          Applying Rolle's theorem to <MathInline>{`h`}</MathInline>, we find <MathInline>{`h'(c) = 0`}</MathInline>
          for some <MathInline>{`c`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>. But
        </p>
        <MathBlock>{`h'(x) = f'(x)(b - a) - [f(b) - f(a)].`}</MathBlock>
        <p>
          When <MathInline>{`x = c`}</MathInline>, setting <MathInline>{`h'(c) = 0`}</MathInline> gives
          us <MathInline>{`f(b) - f(a) = f'(c)(b - a)`}</MathInline>.
        </p>
      </Callout>

      <h2>Important Notes</h2>

      <Callout type="info" title="Location of Mean Values">
        <p>
          The theorem makes no assertion about the <em>exact location</em> of the mean
          value(s) <MathInline>{`c`}</MathInline>, except that they lie somewhere between
          <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline>. For some functions, the
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
          any point between <MathInline>{`a`}</MathInline> and <MathInline>{`b`}</MathInline> where the
          derivative does not exist.
        </p>
        <p>
          <strong>Example:</strong> The function <MathInline>{`f(x) = |x|`}</MathInline> is
          continuous everywhere and has a derivative everywhere except at 0.
        </p>
        <p>
          Let <MathInline>{`A = (-1, 1)`}</MathInline> and <MathInline>{`B = (2, 2)`}</MathInline>.
          The slope of the chord <MathInline>{`AB`}</MathInline> is:
        </p>
        <MathBlock>{`\\frac{f(2) - f(-1)}{2 - (-1)} = \\frac{2 - 1}{3} = \\frac{1}{3}`}</MathBlock>
        <p>
          But the derivative <MathInline>{`f'(x)`}</MathInline> equals <MathInline>{`-1`}</MathInline>
          for <MathInline>{`x < 0`}</MathInline> and <MathInline>{`+1`}</MathInline> for
          <MathInline>{`x > 0`}</MathInline>. The derivative is <em>nowhere</em> equal to
          <MathInline>{`1/3`}</MathInline>.
        </p>
      </Callout>

      <h2>Alternative Form</h2>
      <p>
        The mean-value formula can be expressed in several equivalent ways.
      </p>

      <Callout type="info" title="Alternative Formulations">
        <p><strong>Standard form:</strong></p>
        <MathBlock>{`f(b) - f(a) = f'(c)(b - a), \\quad \\text{where } a < c < b`}</MathBlock>

        <p><strong>With parameter θ:</strong> Setting <MathInline>{`c = a + \\theta(b - a)`}</MathInline>
           where <MathInline>{`0 < \\theta < 1`}</MathInline>:</p>
        <MathBlock>{`f(b) - f(a) = f'(a + \\theta(b - a))(b - a)`}</MathBlock>

        <p><strong>Increment form:</strong> With <MathInline>{`b = x + h`}</MathInline> and
           <MathInline>{`a = x`}</MathInline>:</p>
        <MathBlock>{`f(x + h) - f(x) = f'(x + \\theta h) \\cdot h, \\quad \\text{where } 0 < \\theta < 1`}</MathBlock>
      </Callout>

      <h2>Cauchy's Mean-Value Formula</h2>
      <p>
        The following extension of the mean-value theorem is often useful.
      </p>

      <Callout type="theorem" title="Theorem 4.6 (Cauchy's Mean-Value Formula)">
        <p>
          Let <MathInline>{`f`}</MathInline> and <MathInline>{`g`}</MathInline> be two functions
          <strong> continuous</strong> on <MathInline>{`[a, b]`}</MathInline> and having
          <strong> derivatives</strong> in <MathInline>{`(a, b)`}</MathInline>. Then, for some
          <MathInline>{`c`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>, we have
        </p>
        <MathBlock>{`f'(c)[g(b) - g(a)] = g'(c)[f(b) - f(a)].`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof Sketch">
        <p>
          The proof is similar to Theorem 4.5. Let
        </p>
        <MathBlock>{`h(x) = f(x)[g(b) - g(a)] - g(x)[f(b) - f(a)].`}</MathBlock>
        <p>
          Then <MathInline>{`h(a) = h(b) = f(a)g(b) - g(a)f(b)`}</MathInline>. Applying Rolle's
          theorem to <MathInline>{`h`}</MathInline>, we find <MathInline>{`h'(c) = 0`}</MathInline> for
          some <MathInline>{`c`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>, which gives
          Cauchy's formula.
        </p>
        <p>
          <strong>Note:</strong> The standard mean-value theorem (Theorem 4.5) is the
          special case obtained by taking <MathInline>{`g(x) = x`}</MathInline>.
        </p>
      </Callout>

      <h2>Applications of the Mean-Value Theorem</h2>

      <Callout type="example" title="Example 1: Proving Inequalities">
        <p>
          Use the mean-value theorem to prove that <MathInline>{`|\\sin x - \\sin y| \\leq |x - y|`}</MathInline>
          for all <MathInline>{`x`}</MathInline> and <MathInline>{`y`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          By the mean-value theorem applied to <MathInline>{`f(t) = \\sin t`}</MathInline> on the
          interval with endpoints <MathInline>{`x`}</MathInline> and <MathInline>{`y`}</MathInline>:
        </p>
        <MathBlock>{`\\sin x - \\sin y = \\cos(c)(x - y)`}</MathBlock>
        <p>
          for some <MathInline>{`c`}</MathInline> between <MathInline>{`x`}</MathInline> and
          <MathInline>{`y`}</MathInline>. Taking absolute values:
        </p>
        <MathBlock>{`|\\sin x - \\sin y| = |\\cos(c)| \\cdot |x - y| \\leq |x - y|`}</MathBlock>
        <p>
          since <MathInline>{`|\\cos(c)| \\leq 1`}</MathInline> for all <MathInline>{`c`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Uniqueness of Roots">
        <p>
          Use Rolle's theorem to prove that the equation <MathInline>{`x^3 - 3x + b = 0`}</MathInline>
          has at most one root in <MathInline>{`[-1, 1]`}</MathInline>, regardless of the value
          of <MathInline>{`b`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Suppose the equation has two roots <MathInline>{`r_1`}</MathInline> and
          <MathInline>{`r_2`}</MathInline> in <MathInline>{`[-1, 1]`}</MathInline> with
          <MathInline>{`r_1 < r_2`}</MathInline>.
        </p>
        <p>
          Let <MathInline>{`f(x) = x^3 - 3x + b`}</MathInline>. Then <MathInline>{`f(r_1) = f(r_2) = 0`}</MathInline>.
        </p>
        <p>
          By Rolle's theorem, there exists <MathInline>{`c`}</MathInline> in
          <MathInline>{`(r_1, r_2) \\subseteq (-1, 1)`}</MathInline> such that
          <MathInline>{`f'(c) = 0`}</MathInline>.
        </p>
        <p>
          But <MathInline>{`f'(x) = 3x^2 - 3 = 3(x^2 - 1)`}</MathInline>, which equals zero only
          when <MathInline>{`x = \\pm 1`}</MathInline>. There is no <MathInline>{`c`}</MathInline> in
          <MathInline>{`(-1, 1)`}</MathInline> where <MathInline>{`f'(c) = 0`}</MathInline>.
        </p>
        <p>
          This contradiction shows there cannot be two roots in <MathInline>{`[-1, 1]`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Finding the Mean Value">
        <p>
          For <MathInline>{`f(x) = x^2`}</MathInline> on <MathInline>{`[a, b]`}</MathInline>, find the
          value of <MathInline>{`c`}</MathInline> guaranteed by the mean-value theorem.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          The mean-value theorem states:
        </p>
        <MathBlock>{`f(b) - f(a) = f'(c)(b - a)`}</MathBlock>
        <MathBlock>{`b^2 - a^2 = 2c(b - a)`}</MathBlock>
        <MathBlock>{`(b - a)(b + a) = 2c(b - a)`}</MathBlock>
        <p>
          Since <MathInline>{`b \\neq a`}</MathInline>, we can divide:
        </p>
        <MathBlock>{`c = \\frac{a + b}{2}`}</MathBlock>
        <p>
          For quadratics, the mean value <MathInline>{`c`}</MathInline> is always the
          <strong> midpoint</strong> of the interval!
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Proving Functions are Constant">
        <p>
          If <MathInline>{`f'(x) = 0`}</MathInline> for all <MathInline>{`x`}</MathInline> in an interval
          <MathInline>{`I`}</MathInline>, prove that <MathInline>{`f`}</MathInline> is constant on
          <MathInline>{`I`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Let <MathInline>{`x_1`}</MathInline> and <MathInline>{`x_2`}</MathInline> be any two points in
          <MathInline>{`I`}</MathInline> with <MathInline>{`x_1 < x_2`}</MathInline>.
        </p>
        <p>
          By the mean-value theorem:
        </p>
        <MathBlock>{`f(x_2) - f(x_1) = f'(c)(x_2 - x_1)`}</MathBlock>
        <p>
          for some <MathInline>{`c`}</MathInline> in <MathInline>{`(x_1, x_2)`}</MathInline>.
        </p>
        <p>
          Since <MathInline>{`f'(c) = 0`}</MathInline>, we have <MathInline>{`f(x_2) - f(x_1) = 0`}</MathInline>,
          so <MathInline>{`f(x_2) = f(x_1)`}</MathInline>.
        </p>
        <p>
          Since this holds for any two points, <MathInline>{`f`}</MathInline> is constant on
          <MathInline>{`I`}</MathInline>.
        </p>
      </Callout>

      <h2>Consequences of the Mean-Value Theorem</h2>

      <Callout type="info" title="Key Applications">
        <p>
          The mean-value theorem is the foundation for proving many important results:
        </p>
        <ul>
          <li>
            <strong>Monotonicity:</strong> <MathInline>{`f' > 0`}</MathInline> implies
            <MathInline>{`f`}</MathInline> is strictly increasing
          </li>
          <li>
            <strong>Constant functions:</strong> <MathInline>{`f' = 0`}</MathInline> everywhere
            implies <MathInline>{`f`}</MathInline> is constant
          </li>
          <li>
            <strong>Antiderivatives differ by constants:</strong> If
            <MathInline>{`F'(x) = G'(x)`}</MathInline> for all <MathInline>{`x`}</MathInline>, then
            <MathInline>{`F(x) = G(x) + C`}</MathInline>
          </li>
          <li>
            <strong>Lipschitz condition:</strong> If <MathInline>{`|f'(x)| \\leq M`}</MathInline>,
            then <MathInline>{`|f(x) - f(y)| \\leq M|x - y|`}</MathInline>
          </li>
          <li>
            <strong>L'Hôpital's rule:</strong> Uses Cauchy's mean-value formula
          </li>
        </ul>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Rolle's Theorem:</strong> If <MathInline>{`f`}</MathInline> is continuous on
          <MathInline>{`[a, b]`}</MathInline>, differentiable on <MathInline>{`(a, b)`}</MathInline>,
          and <MathInline>{`f(a) = f(b)`}</MathInline>, then <MathInline>{`f'(c) = 0`}</MathInline> for
          some <MathInline>{`c`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>.
        </li>
        <li>
          <strong>Mean-Value Theorem:</strong> Under the same continuity and differentiability
          conditions, <MathInline>{`f(b) - f(a) = f'(c)(b - a)`}</MathInline> for some
          <MathInline>{`c`}</MathInline> in <MathInline>{`(a, b)`}</MathInline>.
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
          <MathInline>{`f'(c)[g(b) - g(a)] = g'(c)[f(b) - f(a)]`}</MathInline>.
        </li>
        <li>
          The hypothesis that <MathInline>{`f`}</MathInline> is differentiable throughout
          <MathInline>{`(a, b)`}</MathInline> is <strong>essential</strong>—the theorem fails
          without it.
        </li>
      </ul>
    </LessonLayout>
  );
}
