import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <h2 className="text-2xl font-semibold mb-4">The Continuity of Derivatives</h2>

      <p className="mb-4">
        Although differentiability implies continuity (Theorem 5.2), derivatives themselves
        need not be continuous functions. However, derivatives possess a remarkable property:
        they always satisfy the intermediate value property. This is known as Darboux's theorem.
      </p>

      <Callout type="info" title="Discontinuous Derivatives">
        <p className="mb-3">
          Consider the function
        </p>
        <MathBlock>{'f(x) = \\begin{cases} x^2 \\sin(1/x) & \\text{if } x \\neq 0 \\\\ 0 & \\text{if } x = 0 \\end{cases}'}</MathBlock>
        <p className="mb-3">
          This function is differentiable everywhere, including at <InlineMath>{'x = 0'}</InlineMath>
          (where <InlineMath>{'f\'(0) = 0'}</InlineMath>), but its derivative
        </p>
        <MathBlock>{'f\'(x) = 2x \\sin(1/x) - \\cos(1/x) \\quad (x \\neq 0)'}</MathBlock>
        <p>
          is discontinuous at <InlineMath>{'x = 0'}</InlineMath> because <InlineMath>{'\\cos(1/x)'}</InlineMath> oscillates
          between <InlineMath>{'-1'}</InlineMath> and <InlineMath>{'1'}</InlineMath> as <InlineMath>{'x \\to 0'}</InlineMath>.
        </p>
      </Callout>

      <Theorem
        title="5.12 - Darboux's Theorem (Intermediate Value Property for Derivatives)"
        proof={
          <>
            <p className="mb-3">
              Put <InlineMath>{'g(t) = f(t) - \\lambda t'}</InlineMath>. Then <InlineMath>{'g\'(a) = f\'(a) - \\lambda < 0'}</InlineMath>,
              so that <InlineMath>{'g(t_1) < g(a)'}</InlineMath> for some <InlineMath>{'t_1 \\in (a, b)'}</InlineMath>.
              Similarly, <InlineMath>{'g\'(b) = f\'(b) - \\lambda > 0'}</InlineMath>,
              so that <InlineMath>{'g(t_2) < g(b)'}</InlineMath> for some <InlineMath>{'t_2 \\in (a, b)'}</InlineMath>.
            </p>
            <p className="mb-3">
              Hence <InlineMath>{'g'}</InlineMath> attains its minimum on <InlineMath>{'[a, b]'}</InlineMath>
              (Theorem 4.16) at some point <InlineMath>{'x \\in (a, b)'}</InlineMath>.
              By Theorem 5.8, <InlineMath>{'g\'(x) = 0'}</InlineMath>. Hence <InlineMath>{'f\'(x) = \\lambda'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          Suppose <InlineMath>{'f'}</InlineMath> is a real differentiable function on <InlineMath>{'[a, b]'}</InlineMath> and
          suppose <InlineMath>{'f\'(a) < \\lambda < f\'(b)'}</InlineMath>. Then there is a
          point <InlineMath>{'x \\in (a, b)'}</InlineMath> such that <InlineMath>{'f\'(x) = \\lambda'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Key Consequence">
        <p>
          A similar statement holds if <InlineMath>{'f\'(a) > \\lambda > f\'(b)'}</InlineMath>.
          The theorem shows that derivatives, while not necessarily continuous, cannot have
          "jump discontinuities." If <InlineMath>{'f\''}</InlineMath> is discontinuous at a point, it must
          be an oscillatory discontinuity where <InlineMath>{'f\''}</InlineMath> takes all intermediate values.
        </p>
      </Callout>

      <Example title="Consequence for Discontinuous Derivatives">
        <p className="mb-3">
          Darboux's theorem implies that not every function can be a derivative. For example,
          the step function
        </p>
        <MathBlock>{'g(x) = \\begin{cases} 0 & \\text{if } x < 0 \\\\ 1 & \\text{if } x \\geq 0 \\end{cases}'}</MathBlock>
        <p className="mb-3">
          cannot be the derivative of any function on an interval containing <InlineMath>{'0'}</InlineMath>,
          because it fails to have the intermediate value property.
        </p>
        <p>
          Any function with a jump discontinuity cannot be a derivative.
        </p>
      </Example>

      <Definition title="Differentiability Classes">
        <p className="mb-3">
          We introduce standard notation for differentiability:
        </p>
        <p className="mb-2">
          <InlineMath>{'C^0([a,b])'}</InlineMath> or <InlineMath>{'C([a,b])'}</InlineMath>: continuous functions on <InlineMath>{'[a,b]'}</InlineMath>
        </p>
        <p className="mb-2">
          <InlineMath>{'C^1([a,b])'}</InlineMath>: functions with continuous first derivative
        </p>
        <p className="mb-2">
          <InlineMath>{'C^n([a,b])'}</InlineMath>: functions with continuous <InlineMath>{'n'}</InlineMath>-th derivative
        </p>
        <p>
          <InlineMath>{'C^\\infty([a,b])'}</InlineMath>: infinitely differentiable functions (smooth functions)
        </p>
      </Definition>

      <Theorem title="Characterization of Constant Functions">
        <p className="mb-3">
          Let <InlineMath>{'f'}</InlineMath> be differentiable on <InlineMath>{'(a, b)'}</InlineMath>.
          Then <InlineMath>{'f'}</InlineMath> is constant on <InlineMath>{'(a, b)'}</InlineMath> if
          and only if <InlineMath>{'f\'(x) = 0'}</InlineMath> for all <InlineMath>{'x \\in (a, b)'}</InlineMath>.
        </p>
        <p>
          This follows directly from the Mean Value Theorem (Theorem 5.11(b)).
        </p>
      </Theorem>

      <Theorem title="Functions with Equal Derivatives">
        <p className="mb-3">
          If <InlineMath>{'f'}</InlineMath> and <InlineMath>{'g'}</InlineMath> are differentiable
          on <InlineMath>{'(a, b)'}</InlineMath> and <InlineMath>{'f\'(x) = g\'(x)'}</InlineMath> for
          all <InlineMath>{'x \\in (a, b)'}</InlineMath>, then <InlineMath>{'f - g'}</InlineMath> is constant.
        </p>
        <p>
          That is, <InlineMath>{'f(x) = g(x) + c'}</InlineMath> for some constant <InlineMath>{'c'}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Application: Finding Antiderivatives">
        <p className="mb-3">
          The theorem above is fundamental in integral calculus. It tells us that if <InlineMath>{'F'}</InlineMath> is
          any antiderivative of <InlineMath>{'f'}</InlineMath> (meaning <InlineMath>{'F\' = f'}</InlineMath>),
          then every antiderivative has the form <InlineMath>{'F(x) + c'}</InlineMath>.
        </p>
        <p className="mb-3">
          For example, since <InlineMath>{'\\frac{d}{dx}(x^3) = 3x^2'}</InlineMath>,
          the general antiderivative of <InlineMath>{'3x^2'}</InlineMath> is
        </p>
        <MathBlock>{'\\int 3x^2 \\, dx = x^3 + c'}</MathBlock>
      </Example>

      <Callout type="info" title="No Simple Criterion">
        <p>
          Unlike continuous functions (which can be characterized by the property of preserving limits)
          or monotonic functions, there is no simple criterion that characterizes exactly which
          functions are derivatives. Darboux's theorem gives a necessary condition (IVP),
          but this condition is not sufficient.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Derivatives need not be continuous, but they always satisfy the intermediate value property</li>
        <li>Darboux's theorem: if <InlineMath>{'f\'(a) < \\lambda < f\'(b)'}</InlineMath>, then <InlineMath>{'f\'(x) = \\lambda'}</InlineMath> for some <InlineMath>{'x \\in (a, b)'}</InlineMath></li>
        <li>A function with a jump discontinuity cannot be a derivative</li>
        <li>The spaces <InlineMath>{'C^n([a,b])'}</InlineMath> classify functions by the smoothness of their derivatives</li>
        <li>Two functions with the same derivative differ by a constant</li>
        <li>This justifies the notation <InlineMath>{'\\int f \\, dx = F + c'}</InlineMath> for antiderivatives</li>
      </ul>
    </LessonLayout>
  );
}
