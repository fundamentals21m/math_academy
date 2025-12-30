import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Simplest Cases</h2>

      <p>
        Now let us see how, on first principles, we can differentiate some simple
        algebraical expressions. Let us begin with the simple expression y = x².
      </p>

      <Callout type="info">
        <strong>Our Goal:</strong> Find the ratio dy/dx when y depends on x according
        to some algebraic rule.
      </Callout>

      <h2>Differentiating y = x²</h2>

      <p>
        Let x grow a little bit bigger and become x + dx; similarly, y will grow a
        bit bigger and become y + dy. Then we have:
      </p>

      <MathBlock latex="y + dy = (x + dx)^2" />

      <p>Expanding:</p>

      <MathBlock latex="y + dy = x^2 + 2x \cdot dx + (dx)^2" />

      <p>Since y = x², we can subtract:</p>

      <MathBlock latex="dy = 2x \cdot dx + (dx)^2" />

      <p>
        Now remember, (dx)² is a small quantity of the second order, so we may
        discard it:
      </p>

      <MathBlock latex="dy = 2x \cdot dx" />

      <p>Therefore:</p>

      <MathBlock latex="\frac{dy}{dx} = 2x" />

      <h2>Differentiating y = x³</h2>

      <p>Let y = x³. Proceeding as before:</p>

      <MathBlock latex="y + dy = (x + dx)^3 = x^3 + 3x^2 \cdot dx + 3x(dx)^2 + (dx)^3" />

      <p>
        The terms with (dx)² and (dx)³ are small quantities of higher orders and can
        be neglected:
      </p>

      <MathBlock latex="dy = 3x^2 \cdot dx" />

      <MathBlock latex="\frac{dy}{dx} = 3x^2" />

      <h2>The General Pattern</h2>

      <p>We can see a pattern emerging. Let's try y = x⁴:</p>

      <MathBlock latex="\frac{dy}{dx} = 4x^3" />

      <p>And for y = x⁵:</p>

      <MathBlock latex="\frac{dy}{dx} = 5x^4" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">The Power Rule</h3>
        <p className="text-dark-300 mb-4">For any power n, if y = xⁿ, then:</p>
        <MathBlock latex="\frac{dy}{dx} = nx^{n-1}" />
        <p className="text-dark-400 text-sm mt-2">
          This is one of the most important rules in differential calculus!
        </p>
      </div>

      <h2>Examples</h2>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>y = x² → dy/dx = 2x</li>
        <li>y = x³ → dy/dx = 3x²</li>
        <li>y = x⁴ → dy/dx = 4x³</li>
        <li>y = x⁷ → dy/dx = 7x⁶</li>
        <li>y = x^(1/2) = √x → dy/dx = (1/2)x^(-1/2)</li>
      </ul>

      <Callout type="success">
        <strong>Remember:</strong> The derivative of xⁿ is nxⁿ⁻¹. Bring down the
        exponent and reduce it by one.
      </Callout>
    </LessonLayout>
  );
}
