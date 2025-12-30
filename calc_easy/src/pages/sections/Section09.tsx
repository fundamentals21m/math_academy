import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Successive Differentiation</h2>

      <p>
        We have found that when we differentiate y with respect to x, we get dy/dx.
        But what if we differentiate <em>again</em>? We get what's called the
        <strong> second derivative</strong>.
      </p>

      <Callout type="info">
        <strong>Notation:</strong> The second derivative is written as d²y/dx² (read
        "d-two-y by d-x-squared"). Higher derivatives follow the same pattern.
      </Callout>

      <h2>What Does the Second Derivative Mean?</h2>

      <p>
        If y represents distance and x represents time, then dy/dx represents velocity
        (rate of change of distance). The second derivative d²y/dx² represents
        <strong> acceleration</strong> (rate of change of velocity).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">y</h3>
          <p className="text-dark-300">Position/Distance</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">dy/dx</h3>
          <p className="text-dark-300">Velocity (1st derivative)</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-primary-400 mb-2">d²y/dx²</h3>
          <p className="text-dark-300">Acceleration (2nd derivative)</p>
        </div>
      </div>

      <h2>Example: y = x⁵</h2>

      <p>Let's find successive derivatives of y = x⁵:</p>

      <MathBlock latex="y = x^5" />
      <MathBlock latex="\frac{dy}{dx} = 5x^4" />
      <MathBlock latex="\frac{d^2y}{dx^2} = 20x^3" />
      <MathBlock latex="\frac{d^3y}{dx^3} = 60x^2" />
      <MathBlock latex="\frac{d^4y}{dx^4} = 120x" />
      <MathBlock latex="\frac{d^5y}{dx^5} = 120" />
      <MathBlock latex="\frac{d^6y}{dx^6} = 0" />

      <p>
        Eventually we reach zero! For a polynomial of degree n, the (n+1)th derivative
        and all subsequent derivatives are zero.
      </p>

      <h2>Alternative Notation</h2>

      <p>
        Sometimes the prime notation is used: y' for the first derivative, y'' for
        the second, and so on. Also, f'(x), f''(x), etc.
      </p>

      <MathBlock latex="y' = \frac{dy}{dx}, \quad y'' = \frac{d^2y}{dx^2}, \quad y''' = \frac{d^3y}{dx^3}" />

      <Callout type="success">
        <strong>Key Point:</strong> Successive differentiation reveals deeper
        information about how a function changes. The first derivative tells us the
        slope; the second derivative tells us how the slope itself is changing
        (concavity).
      </Callout>
    </LessonLayout>
  );
}
