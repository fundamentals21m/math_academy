import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2>Curvature of Curves</h2>

      <p>
        Beyond slope, we can ask: how much is a curve <em>bending</em>? This is
        measured by <strong>curvature</strong>—how rapidly the direction of the curve
        is changing.
      </p>

      <Callout type="info">
        <strong>Intuition:</strong> A straight line has zero curvature. A tight curve
        has high curvature. A gentle curve has low curvature.
      </Callout>

      <h2>Curvature and the Second Derivative</h2>

      <p>
        The second derivative d²y/dx² tells us about curvature. It indicates whether
        the curve is bending upward (concave up) or downward (concave down).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Concave Up</h3>
          <p className="text-dark-300">d²y/dx² &gt; 0</p>
          <p className="text-dark-400 text-sm mt-2">
            The curve bends upward like a smile. The slope is increasing.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Concave Down</h3>
          <p className="text-dark-300">d²y/dx² &lt; 0</p>
          <p className="text-dark-400 text-sm mt-2">
            The curve bends downward like a frown. The slope is decreasing.
          </p>
        </div>
      </div>

      <h2>Points of Inflection</h2>

      <p>
        A <strong>point of inflection</strong> is where the curve changes from concave
        up to concave down (or vice versa). At such points, d²y/dx² = 0.
      </p>

      <h2>The Radius of Curvature</h2>

      <p>
        At any point on a curve, we can imagine a circle that best approximates the
        curve at that point. The radius of this "osculating circle" is called the
        <strong> radius of curvature</strong>, denoted R:
      </p>

      <MathBlock latex="R = \frac{\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{3/2}}{\left|\frac{d^2y}{dx^2}\right|}" />

      <p>The curvature itself is κ = 1/R.</p>

      <h2>Example: Circle</h2>

      <p>
        For a circle of radius a, the curvature is constant: κ = 1/a everywhere.
        This makes sense—a circle curves equally at every point.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">For a parabola y = x²</h3>
        <p className="text-dark-300">
          At x = 0 (the vertex), the radius of curvature is smallest and the curve
          bends most sharply. As x increases, the curvature decreases and the parabola
          straightens out.
        </p>
      </div>

      <Callout type="success">
        <strong>Applications:</strong> Curvature is essential in road design (banking
        curves), roller coaster engineering, lens optics, and anywhere the shape of a
        curve matters physically.
      </Callout>
    </LessonLayout>
  );
}
