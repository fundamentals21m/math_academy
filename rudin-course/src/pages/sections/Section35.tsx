import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2 className="text-2xl font-semibold mb-4">Mean Value Theorems</h2>

      <p className="mb-4">
        The mean value theorems are among the most important results in differential calculus.
        They provide a crucial link between the derivative of a function and its overall behavior,
        and serve as the foundation for many applications including Taylor's theorem and
        the study of monotonic functions.
      </p>

      <Definition title="5.7 - Local Maximum">
        <p>
          Let <InlineMath>{'f'}</InlineMath> be a real function defined on a metric space <InlineMath>{'X'}</InlineMath>.
          We say that <InlineMath>{'f'}</InlineMath> has a <em>local maximum</em> at a
          point <InlineMath>{'p \\in X'}</InlineMath> if there exists <InlineMath>{'\\delta > 0'}</InlineMath> such
          that <InlineMath>{'f(q) \\leq f(p)'}</InlineMath> for all <InlineMath>{'q \\in X'}</InlineMath> with <InlineMath>{'d(p, q) < \\delta'}</InlineMath>.
          Local minima are defined likewise.
        </p>
      </Definition>

      <Theorem
        title="5.8 - Local Extrema and Derivatives"
        proof={
          <>
            <p className="mb-3">
              Choose <InlineMath>{'\\delta'}</InlineMath> in accordance with Definition 5.7,
              so that <InlineMath>{'a < x - \\delta < x < x + \\delta < b'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'x - \\delta < t < x'}</InlineMath>, then
            </p>
            <MathBlock>{'\\frac{f(t) - f(x)}{t - x} \\geq 0'}</MathBlock>
            <p className="mb-3">
              Letting <InlineMath>{'t \\to x'}</InlineMath>, we see that <InlineMath>{'f\'(x) \\geq 0'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'x < t < x + \\delta'}</InlineMath>, then
            </p>
            <MathBlock>{'\\frac{f(t) - f(x)}{t - x} \\leq 0'}</MathBlock>
            <p>
              which shows that <InlineMath>{'f\'(x) \\leq 0'}</InlineMath>. Hence <InlineMath>{'f\'(x) = 0'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'f'}</InlineMath> be defined on <InlineMath>{'[a, b]'}</InlineMath>;
          if <InlineMath>{'f'}</InlineMath> has a local maximum at a point <InlineMath>{'x \\in (a, b)'}</InlineMath>,
          and if <InlineMath>{'f\'(x)'}</InlineMath> exists, then <InlineMath>{'f\'(x) = 0'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Interior Points Only">
        <p>
          The analogous statement for local minima is of course also true. Note that we need
          the point to be in the interior of the interval. At endpoints, the derivative may
          be nonzero even at local extrema.
        </p>
      </Callout>

      <Theorem
        title="5.9 - Generalized Mean Value Theorem"
        proof={
          <>
            <p className="mb-3">
              Put
            </p>
            <MathBlock>{'h(t) = [f(b) - f(a)]g(t) - [g(b) - g(a)]f(t) \\quad (a \\leq t \\leq b)'}</MathBlock>
            <p className="mb-3">
              Then <InlineMath>{'h'}</InlineMath> is continuous on <InlineMath>{'[a, b]'}</InlineMath>, <InlineMath>{'h'}</InlineMath> is
              differentiable on <InlineMath>{'(a, b)'}</InlineMath>, and
            </p>
            <MathBlock>{'h(a) = f(b)g(a) - f(a)g(b) = h(b)'}</MathBlock>
            <p className="mb-3">
              To prove the last equality, note that both sides simplify
              to <InlineMath>{'f(b)g(a) - f(a)g(b)'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'h'}</InlineMath> is constant, then <InlineMath>{'h\'(t) = 0'}</InlineMath> for
              all <InlineMath>{'t \\in (a, b)'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'h(t) > h(a)'}</InlineMath> for some <InlineMath>{'t \\in (a, b)'}</InlineMath>,
              let <InlineMath>{'x'}</InlineMath> be a point in <InlineMath>{'[a, b]'}</InlineMath> at
              which <InlineMath>{'h'}</InlineMath> attains its maximum (Theorem 4.16).
              Then <InlineMath>{'x \\in (a, b)'}</InlineMath>, and Theorem 5.8 shows
              that <InlineMath>{'h\'(x) = 0'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'h(t) < h(a)'}</InlineMath> for some <InlineMath>{'t \\in (a, b)'}</InlineMath>,
              the same argument applies at a minimum point.
            </p>
            <p>
              In either case, <InlineMath>{'h\'(x) = 0'}</InlineMath>, and the desired result follows from
            </p>
            <MathBlock>{'h\'(x) = [f(b) - f(a)]g\'(x) - [g(b) - g(a)]f\'(x)'}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are continuous real functions
          on <InlineMath>{'[a, b]'}</InlineMath> which are differentiable on <InlineMath>{'(a, b)'}</InlineMath>,
          then there is a point <InlineMath>{'x \\in (a, b)'}</InlineMath> at which
        </p>
        <MathBlock>{'[f(b) - f(a)]g\'(x) = [g(b) - g(a)]f\'(x)'}</MathBlock>
      </Theorem>

      <Theorem title="5.10 - Mean Value Theorem">
        <p>
          If <InlineMath>{'f'}</InlineMath> is a real continuous function on <InlineMath>{'[a, b]'}</InlineMath> which
          is differentiable on <InlineMath>{'(a, b)'}</InlineMath>, then there is a
          point <InlineMath>{'x \\in (a, b)'}</InlineMath> at which
        </p>
        <MathBlock>{'f(b) - f(a) = (b - a)f\'(x)'}</MathBlock>
      </Theorem>

      <Callout type="info" title="Proof of MVT">
        <p>
          Take <InlineMath>{'g(t) = t'}</InlineMath> in Theorem 5.9. Then <InlineMath>{'g\'(t) = 1'}</InlineMath>,
          <InlineMath>{'g(b) - g(a) = b - a'}</InlineMath>, and the generalized MVT gives
        </p>
        <MathBlock>{'[f(b) - f(a)] \\cdot 1 = (b - a) \\cdot f\'(x)'}</MathBlock>
      </Callout>

      <Theorem title="Rolle's Theorem">
        <p className="mb-3">
          If <InlineMath>{'f'}</InlineMath> is continuous on <InlineMath>{'[a, b]'}</InlineMath>, differentiable
          on <InlineMath>{'(a, b)'}</InlineMath>, and <InlineMath>{'f(a) = f(b)'}</InlineMath>, then there
          exists <InlineMath>{'x \\in (a, b)'}</InlineMath> such that <InlineMath>{'f\'(x) = 0'}</InlineMath>.
        </p>
        <p>
          This is a special case of the Mean Value Theorem when <InlineMath>{'f(a) = f(b)'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Geometric Interpretation">
        <p className="mb-3">
          The Mean Value Theorem has a simple geometric interpretation. The quantity
        </p>
        <MathBlock>{'\\frac{f(b) - f(a)}{b - a}'}</MathBlock>
        <p className="mb-3">
          is the slope of the secant line through <InlineMath>{'(a, f(a))'}</InlineMath> and <InlineMath>{'(b, f(b))'}</InlineMath>.
          The theorem says there exists a point <InlineMath>{'x \\in (a, b)'}</InlineMath> where the tangent
          line has the same slope as this secant line.
        </p>
        <p>
          For Rolle's theorem, when <InlineMath>{'f(a) = f(b)'}</InlineMath>, the secant line is horizontal,
          so there must be a point where the tangent is also horizontal.
        </p>
      </Example>

      <Theorem
        title="5.11 - Monotonicity and Derivatives"
        proof={
          <>
            <p className="mb-3">
              Suppose <InlineMath>{'f\'(x) \\geq 0'}</InlineMath> for all <InlineMath>{'x \\in (a, b)'}</InlineMath>.
              For any <InlineMath>{'x_1, x_2 \\in [a, b]'}</InlineMath> with <InlineMath>{'x_1 < x_2'}</InlineMath>,
              the MVT gives
            </p>
            <MathBlock>{'f(x_2) - f(x_1) = (x_2 - x_1) f\'(x)'}</MathBlock>
            <p className="mb-3">
              for some <InlineMath>{'x \\in (x_1, x_2)'}</InlineMath>. Since <InlineMath>{'x_2 - x_1 > 0'}</InlineMath> and <InlineMath>{'f\'(x) \\geq 0'}</InlineMath>,
              we have <InlineMath>{'f(x_2) - f(x_1) \\geq 0'}</InlineMath>, so <InlineMath>{'f(x_1) \\leq f(x_2)'}</InlineMath>.
            </p>
            <p>
              If <InlineMath>{'f\'(x) > 0'}</InlineMath> for all <InlineMath>{'x \\in (a, b)'}</InlineMath>,
              the strict inequality <InlineMath>{'f(x_1) < f(x_2)'}</InlineMath> follows.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'f'}</InlineMath> is differentiable on <InlineMath>{'(a, b)'}</InlineMath>.
        </p>
        <p className="mb-2">
          <strong>(a)</strong> If <InlineMath>{'f\'(x) \\geq 0'}</InlineMath> for all <InlineMath>{'x \\in (a, b)'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> is monotonically increasing.
        </p>
        <p className="mb-2">
          <strong>(b)</strong> If <InlineMath>{'f\'(x) = 0'}</InlineMath> for all <InlineMath>{'x \\in (a, b)'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> is constant.
        </p>
        <p>
          <strong>(c)</strong> If <InlineMath>{'f\'(x) \\leq 0'}</InlineMath> for all <InlineMath>{'x \\in (a, b)'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> is monotonically decreasing.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>At a local extremum in the interior, the derivative (if it exists) must be zero</li>
        <li>Rolle's theorem: if <InlineMath>{'f(a) = f(b)'}</InlineMath> and <InlineMath>{'f'}</InlineMath> is differentiable, then <InlineMath>{'f\'(x) = 0'}</InlineMath> for some <InlineMath>{'x \\in (a, b)'}</InlineMath></li>
        <li>Mean Value Theorem: <InlineMath>{'f(b) - f(a) = (b - a)f\'(x)'}</InlineMath> for some <InlineMath>{'x \\in (a, b)'}</InlineMath></li>
        <li>Generalized MVT relates the derivatives and differences of two functions</li>
        <li>The sign of the derivative determines monotonicity</li>
        <li>A function with zero derivative on an interval is constant</li>
      </ul>
    </LessonLayout>
  );
}
