import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Sums, Differences, Products, and Quotients</h2>

      <p>
        We have learned how to differentiate simple powers. Now we must tackle more
        complex expressions: sums, differences, products, and quotients of functions.
      </p>

      <h2>Sums and Differences</h2>

      <p>
        If y = u + v, where both u and v are functions of x, then:
      </p>

      <MathBlock math="\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx}" />

      <Callout type="info">
        <strong>Sum Rule:</strong> The derivative of a sum is the sum of the derivatives.
        This also works for differences!
      </Callout>

      <p>For example, if y = x³ + x², then:</p>

      <MathBlock math="\frac{dy}{dx} = 3x^2 + 2x" />

      <h2>The Product Rule</h2>

      <p>
        If y = u × v, where both u and v are functions of x, things get more interesting.
        We need the <strong>Product Rule</strong>:
      </p>

      <MathBlock math="\frac{dy}{dx} = u\frac{dv}{dx} + v\frac{du}{dx}" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Example: y = x² × x³</h3>
        <p className="text-dark-300 mb-2">Let u = x² and v = x³:</p>
        <MathBlock math="\frac{dy}{dx} = x^2 \times 3x^2 + x^3 \times 2x = 3x^4 + 2x^4 = 5x^4" />
        <p className="text-dark-400 text-sm mt-2">
          (Which matches the result if we first simplify: y = x⁵, dy/dx = 5x⁴)
        </p>
      </div>

      <h2>The Quotient Rule</h2>

      <p>
        If y = u/v, we need the <strong>Quotient Rule</strong>:
      </p>

      <MathBlock math="\frac{dy}{dx} = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Example: y = x²/x³</h3>
        <p className="text-dark-300 mb-2">Let u = x² and v = x³:</p>
        <MathBlock math="\frac{dy}{dx} = \frac{x^3 \times 2x - x^2 \times 3x^2}{(x^3)^2} = \frac{2x^4 - 3x^4}{x^6} = \frac{-x^4}{x^6} = -\frac{1}{x^2}" />
        <p className="text-dark-400 text-sm mt-2">
          (Which matches: y = x⁻¹, dy/dx = -x⁻² = -1/x²)
        </p>
      </div>

      <h2>Memory Aid</h2>

      <p>For the quotient rule, remember: "Low d-high minus high d-low, over low squared."</p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li><strong>Low:</strong> the denominator (v)</li>
        <li><strong>d-high:</strong> derivative of numerator (du/dx)</li>
        <li><strong>High:</strong> the numerator (u)</li>
        <li><strong>d-low:</strong> derivative of denominator (dv/dx)</li>
      </ul>

      <Callout type="success">
        <strong>Summary:</strong>
        <ul className="mt-2 space-y-1">
          <li>Sum: d(u+v)/dx = du/dx + dv/dx</li>
          <li>Product: d(uv)/dx = u(dv/dx) + v(du/dx)</li>
          <li>Quotient: d(u/v)/dx = [v(du/dx) - u(dv/dx)] / v²</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
