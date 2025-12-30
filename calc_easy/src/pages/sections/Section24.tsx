import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <h2>A Little More about Curvature of Curves</h2>

      <p>
        Let's revisit curvature with more depth. Understanding how curves bend is
        essential for applications from road design to optics to computer graphics.
      </p>

      <h2>The Osculating Circle</h2>

      <p>
        At any point on a curve, we can find a circle that best matches the curve's
        local behavior. This is the <strong>osculating circle</strong> (from Latin
        "osculare," to kiss—the circle "kisses" the curve at that point).
      </p>

      <Callout type="info">
        <strong>Key Properties:</strong> The osculating circle has the same tangent
        as the curve and the same curvature at the point of contact.
      </Callout>

      <h2>Radius of Curvature Formula</h2>

      <p>The radius R of the osculating circle is:</p>

      <MathBlock latex="R = \frac{\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{3/2}}{\left|\frac{d^2y}{dx^2}\right|}" />

      <p>The curvature κ (Greek "kappa") is the reciprocal: κ = 1/R.</p>

      <h2>Example: The Parabola y = x²</h2>

      <p>We have dy/dx = 2x and d²y/dx² = 2.</p>

      <MathBlock latex="R = \frac{(1 + 4x^2)^{3/2}}{2}" />

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">At the vertex (x = 0):</h3>
        <MathBlock latex="R = \frac{(1 + 0)^{3/2}}{2} = \frac{1}{2}" />
        <p className="text-dark-300 mt-2">
          The radius of curvature at the vertex is 1/2, so the curvature is κ = 2.
          This is where the parabola bends most sharply.
        </p>
      </div>

      <h2>Curvature Applications</h2>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li><strong>Road banking:</strong> Curves are banked based on curvature</li>
        <li><strong>Roller coasters:</strong> Curvature determines g-forces</li>
        <li><strong>Optics:</strong> Lens curvature determines focal length</li>
        <li><strong>Ship design:</strong> Hull curvature affects stability</li>
      </ul>

      <Callout type="success">
        <strong>Deeper Understanding:</strong> Curvature measures how fast a curve
        deviates from being straight. A straight line has zero curvature; a tight
        turn has high curvature. This geometric quantity has profound physical implications.
      </Callout>
    </LessonLayout>
  );
}
