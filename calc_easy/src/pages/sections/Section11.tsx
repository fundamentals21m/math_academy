import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Introducing a Useful Dodge: The Chain Rule</h2>

      <p>
        Sometimes we have a function of a function—that is, y depends on some
        intermediate quantity u, which in turn depends on x. How do we differentiate
        in such cases?
      </p>

      <Callout type="info">
        <strong>The Chain Rule:</strong> If y = f(u) and u = g(x), then:
        <MathBlock latex="\frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dx}" />
      </Callout>

      <h2>Why It Works</h2>

      <p>
        Think of it as a chain of dependencies. If y depends on u, and u depends on x,
        then to find how y changes with x, we need to account for both links in the chain.
      </p>

      <h2>Example 1: y = (x² + 1)³</h2>

      <p>Let u = x² + 1, so y = u³. Then:</p>

      <MathBlock latex="\frac{dy}{du} = 3u^2 = 3(x^2 + 1)^2" />
      <MathBlock latex="\frac{du}{dx} = 2x" />

      <p>Therefore:</p>

      <MathBlock latex="\frac{dy}{dx} = 3(x^2 + 1)^2 \times 2x = 6x(x^2 + 1)^2" />

      <h2>Example 2: y = √(3x - 5)</h2>

      <p>Let u = 3x - 5, so y = √u = u^(1/2). Then:</p>

      <MathBlock latex="\frac{dy}{du} = \frac{1}{2}u^{-1/2} = \frac{1}{2\sqrt{3x-5}}" />
      <MathBlock latex="\frac{du}{dx} = 3" />

      <p>Therefore:</p>

      <MathBlock latex="\frac{dy}{dx} = \frac{3}{2\sqrt{3x-5}}" />

      <h2>The Power of Substitution</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">General Pattern</h3>
        <p className="text-dark-300 mb-2">
          For y = [f(x)]ⁿ, if we let u = f(x):
        </p>
        <MathBlock latex="\frac{dy}{dx} = n[f(x)]^{n-1} \times f'(x)" />
        <p className="text-dark-400 text-sm mt-2">
          Differentiate the outer function, keep the inner function, then multiply by
          the derivative of the inner function.
        </p>
      </div>

      <h2>Useful Dodge Indeed!</h2>

      <p>
        Thompson calls this a "useful dodge" because it transforms complex problems
        into simpler ones. By introducing an intermediate variable, we can break a
        difficult differentiation into manageable steps.
      </p>

      <Callout type="success">
        <strong>Remember:</strong> The chain rule is essential for differentiating
        composite functions. Think "outside to inside"—differentiate the outer function,
        keep the inner function unchanged, then multiply by the derivative of the inner
        function.
      </Callout>
    </LessonLayout>
  );
}
