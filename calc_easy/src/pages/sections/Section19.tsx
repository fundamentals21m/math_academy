import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2>Integration</h2>

      <p>
        We now turn to the second great operation of calculus: <strong>integration</strong>.
        Remember that mysterious symbol ∫? It means "the sum of." Integration is about
        adding up infinitely many infinitely small pieces.
      </p>

      <Callout type="info">
        <strong>The Big Picture:</strong> Integration is the reverse of differentiation.
        If differentiation answers "what is the rate of change?", integration answers
        "what is the total amount?"
      </Callout>

      <h2>What Integration Does</h2>

      <p>
        When we integrate, we're asking: if I know the rate of change (the derivative),
        what was the original function? For example:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>If velocity is v = 2t, what is the distance traveled?</li>
        <li>If the slope is dy/dx = 3x², what is y?</li>
        <li>If water flows in at rate r(t), what is the total volume?</li>
      </ul>

      <h2>The Integral Sign</h2>

      <p>We write:</p>

      <MathBlock latex="\int f(x) \, dx" />

      <p>
        This is read "the integral of f(x) with respect to x" or "the integral of f(x) dx."
      </p>

      <h2>Basic Examples</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">Since d/dx(x²) = 2x:</p>
          <MathBlock latex="\int 2x \, dx = x^2 + C" />
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">Since d/dx(x³) = 3x²:</p>
          <MathBlock latex="\int 3x^2 \, dx = x^3 + C" />
        </div>
      </div>

      <h2>The Constant of Integration</h2>

      <p>
        Notice the "+ C" at the end? That's the <strong>constant of integration</strong>.
        Since the derivative of any constant is zero, when we integrate we can't know
        what constant (if any) was originally present.
      </p>

      <MathBlock latex="\frac{d}{dx}(x^2 + 5) = 2x = \frac{d}{dx}(x^2 - 3)" />

      <p>
        Both x² + 5 and x² - 3 have the same derivative, so when integrating 2x, we
        must include an arbitrary constant C to account for all possibilities.
      </p>

      <Callout type="success">
        <strong>Remember:</strong> Integration undoes differentiation, but not perfectly—we
        always need that constant C (unless we have additional information like initial
        conditions).
      </Callout>
    </LessonLayout>
  );
}
