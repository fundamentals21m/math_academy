import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Partial Fractions and Inverse Functions</h2>

      <p>
        Before tackling more advanced topics, we need two important techniques:
        decomposing fractions into simpler parts, and understanding inverse functions.
      </p>

      <h2>Partial Fractions</h2>

      <p>
        A complex fraction can often be broken into a sum of simpler fractions. This
        technique is invaluable for integration.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Example</h3>
        <MathBlock math="\frac{1}{x^2-1} = \frac{1}{(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1}" />
        <p className="text-dark-300 mt-2">
          Solving for A and B, we find: A = 1/2 and B = -1/2
        </p>
        <MathBlock math="\frac{1}{x^2-1} = \frac{1}{2(x-1)} - \frac{1}{2(x+1)}" />
      </div>

      <Callout type="info">
        <strong>Why Bother?</strong> Each simple fraction on the right is much easier
        to integrate than the original complex fraction on the left.
      </Callout>

      <h2>Inverse Functions</h2>

      <p>
        If y = f(x), the inverse function x = f⁻¹(y) "undoes" what f does. For example:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>If y = x², then x = √y (for x ≥ 0)</li>
        <li>If y = eˣ, then x = ln(y)</li>
        <li>If y = sin(x), then x = arcsin(y)</li>
      </ul>

      <h2>Differentiating Inverse Functions</h2>

      <p>There's an elegant relationship between a function and its inverse:</p>

      <MathBlock math="\frac{dx}{dy} = \frac{1}{\frac{dy}{dx}}" />

      <p>
        If you know the derivative of y with respect to x, you can find the derivative
        of x with respect to y by taking the reciprocal!
      </p>

      <h2>Example: Square Root</h2>

      <p>
        If y = x², then dy/dx = 2x. For the inverse function x = √y:
      </p>

      <MathBlock math="\frac{dx}{dy} = \frac{1}{2x} = \frac{1}{2\sqrt{y}}" />

      <p>Which matches the result of directly differentiating x = y^(1/2).</p>

      <Callout type="success">
        <strong>Key Techniques:</strong> Partial fractions and inverse functions are
        essential tools. They appear repeatedly in integration and in dealing with
        transcendental functions like exponentials, logarithms, and trigonometric
        functions.
      </Callout>
    </LessonLayout>
  );
}
