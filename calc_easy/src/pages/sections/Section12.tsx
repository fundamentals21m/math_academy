import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <h2>Geometrical Meaning of Differentiation</h2>

      <p>
        We've been calculating derivatives algebraically, but what do they <em>mean</em>
        geometrically? The answer is beautiful: the derivative at any point gives the
        <strong> slope of the tangent line</strong> to the curve at that point.
      </p>

      <Callout type="info">
        <strong>The Big Picture:</strong> dy/dx at a point equals the slope of the
        line that just "touches" the curve at that point without crossing it.
      </Callout>

      <h2>Slope of a Curve</h2>

      <p>
        A straight line has the same slope everywhere. But a curve's slope varies from
        point to point. The derivative tells us the instantaneous slope at each location.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Positive Slope</h3>
          <p className="text-dark-300">dy/dx &gt; 0</p>
          <p className="text-dark-400 text-sm mt-2">
            The curve is going upward (rising) as x increases.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-red-400 mb-2">Negative Slope</h3>
          <p className="text-dark-300">dy/dx &lt; 0</p>
          <p className="text-dark-400 text-sm mt-2">
            The curve is going downward (falling) as x increases.
          </p>
        </div>
      </div>

      <h2>The Tangent Line</h2>

      <p>
        At any point (x₀, y₀) on a curve y = f(x), the equation of the tangent line is:
      </p>

      <MathBlock latex="y - y_0 = f'(x_0)(x - x_0)" />

      <h2>Example: y = x²</h2>

      <p>
        For the parabola y = x², the derivative is dy/dx = 2x. At the point where x = 3:
      </p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>y = 3² = 9, so the point is (3, 9)</li>
        <li>The slope is dy/dx = 2(3) = 6</li>
        <li>The tangent line is: y - 9 = 6(x - 3), or y = 6x - 9</li>
      </ul>

      <h2>Where is the Slope Zero?</h2>

      <p>
        At points where dy/dx = 0, the tangent line is horizontal. These are often
        where the curve reaches a maximum or minimum value—crucial for optimization
        problems!
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">For y = x²</h3>
        <p className="text-dark-300">
          Setting dy/dx = 2x = 0 gives x = 0. At x = 0, the parabola has a horizontal
          tangent—this is where it reaches its minimum value.
        </p>
      </div>

      <Callout type="success">
        <strong>Geometric Insight:</strong> The derivative bridges algebra and geometry.
        It translates the abstract notion of "rate of change" into the concrete picture
        of "slope of the tangent line."
      </Callout>
    </LessonLayout>
  );
}
