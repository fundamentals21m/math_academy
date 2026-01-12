import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section25() {
  return (
    <LessonLayout sectionId={25}>
      <h2>How to Find the Length of an Arc on a Curve</h2>

      <p>
        Our final topic brings together many ideas we've learned: using integration
        to find the <strong>arc length</strong> of a curve—the actual distance along
        the curve between two points.
      </p>

      <Callout type="info">
        <strong>The Challenge:</strong> A curve isn't straight, so we can't just
        measure with a ruler. We need calculus to "straighten out" and measure it.
      </Callout>

      <h2>The Arc Length Formula</h2>

      <p>
        For a curve y = f(x) from x = a to x = b, the arc length is:
      </p>

      <MathBlock math="L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx" />

      <h2>Where This Comes From</h2>

      <p>
        Think of a small piece of the curve. By the Pythagorean theorem, its length
        is approximately √(dx² + dy²). Factor out dx:
      </p>

      <MathBlock math="ds = \sqrt{(dx)^2 + (dy)^2} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \, dx" />

      <p>Integrating these infinitesimal pieces gives the total arc length.</p>

      <h2>Example: y = x^(3/2) from x = 0 to x = 4</h2>

      <p>First, find dy/dx:</p>

      <MathBlock math="\frac{dy}{dx} = \frac{3}{2}x^{1/2}" />

      <p>Then:</p>

      <MathBlock math="L = \int_0^4 \sqrt{1 + \frac{9x}{4}} \, dx" />

      <p>Using substitution (u = 1 + 9x/4):</p>

      <MathBlock math="L = \frac{8}{27}\left[(1 + \frac{9x}{4})^{3/2}\right]_0^4 = \frac{8}{27}(10^{3/2} - 1) \approx 9.07" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">A Famous Example: The Catenary</h3>
        <p className="text-dark-300">
          A hanging chain forms a curve called a catenary: y = a·cosh(x/a). Its arc
          length can be computed exactly using our formula, giving elegant results
          important in architecture and engineering.
        </p>
      </div>

      <h2>Congratulations!</h2>

      <p>
        You've completed <em>Calculus Made Easy</em>! From the basic notions of
        functions and limits, through differentiation and its applications, to
        integration and arc length—you now have a foundation in one of humanity's
        greatest intellectual achievements.
      </p>

      <Callout type="success">
        <strong>Thompson's Closing Message:</strong> "What one fool can do, another can."
        You've proven this true. The calculus that once seemed terrifying is now a tool
        in your mathematical toolkit. Use it well!
      </Callout>
    </LessonLayout>
  );
}
