import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <h2>On Finding Areas by Integrating</h2>

      <p>
        One of the most important applications of integration is finding areas. This
        connects the abstract operation of integration to concrete geometric quantities.
      </p>

      <Callout type="info">
        <strong>The Fundamental Insight:</strong> The area under a curve equals the
        definite integral of the function.
      </Callout>

      <h2>The Definite Integral</h2>

      <p>
        To find the area under a curve y = f(x) from x = a to x = b, we compute:
      </p>

      <MathBlock math="\text{Area} = \int_a^b f(x) \, dx" />

      <p>
        This is called a <strong>definite integral</strong> because it has specific
        limits (a and b) and gives a specific numerical answer.
      </p>

      <h2>Computing Definite Integrals</h2>

      <p>
        If F(x) is an antiderivative of f(x) (meaning F'(x) = f(x)), then:
      </p>

      <MathBlock math="\int_a^b f(x) \, dx = F(b) - F(a)" />

      <p>This is sometimes written as [F(x)]ᵇₐ or F(x)|ᵇₐ.</p>

      <h2>Example: Area Under y = x²</h2>

      <p>Find the area under y = x² from x = 0 to x = 3:</p>

      <MathBlock math="\int_0^3 x^2 \, dx = \left[\frac{x^3}{3}\right]_0^3 = \frac{27}{3} - \frac{0}{3} = 9" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">The Fundamental Theorem of Calculus</h3>
        <p className="text-dark-300">
          The connection between differentiation and integration is given by the
          <em> Fundamental Theorem of Calculus</em>: if F'(x) = f(x), then
        </p>
        <MathBlock math="\int_a^b f(x) \, dx = F(b) - F(a)" />
        <p className="text-dark-400 text-sm mt-2">
          This theorem unifies the two main branches of calculus!
        </p>
      </div>

      <h2>Areas Below the x-axis</h2>

      <p>
        When a curve goes below the x-axis, the integral gives a negative value. For
        the total area (always positive), you need to take absolute values or split
        the integral at points where the curve crosses the axis.
      </p>

      <Callout type="success">
        <strong>Practical Power:</strong> Finding areas by integration is used to
        calculate work done by forces, probabilities in statistics, volumes of
        revolution, and countless other quantities in science and engineering.
      </Callout>
    </LessonLayout>
  );
}
